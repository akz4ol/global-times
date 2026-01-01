/**
 * Global Times - Main JavaScript
 */

(function() {
  'use strict';

  // ===== Dark Mode Toggle =====
  const initDarkMode = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme');

    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    } else if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    });
  };

  const toggleDarkMode = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  // ===== Reading Progress =====
  const initReadingProgress = () => {
    const article = document.querySelector('.article-body');
    if (!article) return;

    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: var(--color-accent);
      z-index: 1000;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrolled = window.scrollY;

      const progress = Math.min(100, Math.max(0,
        ((scrolled - articleTop + windowHeight) / articleHeight) * 100
      ));

      progressBar.style.width = `${progress}%`;
    });
  };

  // ===== Lazy Loading Images =====
  const initLazyLoading = () => {
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');

      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  };

  // ===== Breaking News Ticker =====
  const initBreakingTicker = () => {
    const ticker = document.querySelector('.breaking-text');
    if (!ticker) return;

    // Pause on hover
    const banner = ticker.closest('.breaking-banner');
    banner.addEventListener('mouseenter', () => {
      ticker.style.animationPlayState = 'paused';
    });
    banner.addEventListener('mouseleave', () => {
      ticker.style.animationPlayState = 'running';
    });
  };

  // ===== Share Buttons =====
  const initShareButtons = () => {
    const article = document.querySelector('.article-page');
    if (!article) return;

    const title = document.title;
    const url = window.location.href;

    // Create share buttons container
    const shareContainer = document.createElement('div');
    shareContainer.className = 'share-buttons';
    shareContainer.innerHTML = `
      <span>Share:</span>
      <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}"
         target="_blank" rel="noopener" aria-label="Share on Twitter">Twitter</a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}"
         target="_blank" rel="noopener" aria-label="Share on Facebook">Facebook</a>
      <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}"
         target="_blank" rel="noopener" aria-label="Share on LinkedIn">LinkedIn</a>
      <button class="copy-link" aria-label="Copy link">Copy Link</button>
    `;

    const footer = article.querySelector('.article-footer');
    if (footer) {
      footer.prepend(shareContainer);
    }

    // Copy link functionality
    const copyBtn = shareContainer.querySelector('.copy-link');
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(url);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy Link';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  };

  // ===== Time Ago =====
  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }
    return 'Just now';
  };

  // ===== Update Timestamps =====
  const updateTimestamps = () => {
    const timestamps = document.querySelectorAll('[data-timestamp]');
    timestamps.forEach(el => {
      el.textContent = timeAgo(el.dataset.timestamp);
    });
  };

  // ===== Initialize =====
  document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initReadingProgress();
    initLazyLoading();
    initBreakingTicker();
    initShareButtons();
    updateTimestamps();

    // Update timestamps every minute
    setInterval(updateTimestamps, 60000);
  });

  // Expose toggle for manual use
  window.toggleDarkMode = toggleDarkMode;

})();
