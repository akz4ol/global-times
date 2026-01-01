---
layout: page
title: Author Resources
subtitle: Templates, Writing Guidelines & Best Practices
---

This resource center provides everything authors need to prepare high-quality submissions for the MeridAIn Research Review. From templates and formatting guides to writing advice and common pitfalls, these materials are designed to help you present your research effectively.

---

## Quick Start Checklist

| Step | Action | Resource |
|------|--------|----------|
| **1** | Understand the process | [Review Process](/global-times/research/review-process/) |
| **2** | Choose submission type | [Submission Guidelines](/global-times/research/submit/) |
| **3** | Download template | [Templates](#templates) |
| **4** | Write manuscript | [Writing Guidelines](#writing-guidelines) |
| **5** | Prepare metadata | [Metadata Guide](#metadata-specification) |
| **6** | Self-review | [Quality Checklist](#quality-checklist) |
| **7** | Submit | [Submission Procedure](/global-times/research/submit/#submission-procedure) |

---

## Templates

### LaTeX Template

```latex
\documentclass[11pt, a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}
\usepackage{graphicx}
\usepackage{amsmath}

\title{Your Paper Title}
\author{
  Author One\thanks{Institution, email@institution.edu} \and
  Author Two\thanks{Institution, email@institution.edu}
}
\date{}

\begin{document}
\maketitle

\begin{abstract}
Your abstract here. Maximum 300 words. State the problem,
approach, key findings, and significance.
\end{abstract}

\textbf{Keywords:} keyword1, keyword2, keyword3, keyword4, keyword5

\section{Introduction}
% Context, motivation, research questions, contributions

\section{Related Work}
% Prior work and how your contribution differs

\section{Methods}
% Detailed, reproducible description of your approach

\section{Results}
% Clear presentation of findings

\section{Discussion}
% Interpretation, limitations, implications

\section{Conclusion}
% Summary and future directions

\bibliographystyle{plain}
\bibliography{references}

\end{document}
```

### Markdown Template

```markdown
---
layout: research-paper
title: "Your Paper Title"
authors:
  - name: "Author One"
    affiliation: "Institution"
    email: "email@institution.edu"
    corresponding: true
  - name: "Author Two"
    affiliation: "Institution"
    email: "email@institution.edu"
abstract: |
  Your abstract here. Maximum 300 words. State the problem,
  approach, key findings, and significance.
keywords: [keyword1, keyword2, keyword3, keyword4, keyword5]
paper_type: research-paper
---

## Introduction

Context, motivation, research questions, contributions...

## Related Work

Prior work and how your contribution differs...

## Methods

Detailed, reproducible description of your approach...

## Results

Clear presentation of findings...

## Discussion

Interpretation, limitations, implications...

## Conclusion

Summary and future directions...

## References

1. Author(s). Title. Venue, Year. DOI.
```

---

## Writing Guidelines

### Abstract (Maximum 300 Words)

| Element | Guidance |
|---------|----------|
| **Problem Statement** | What question or challenge does this address? |
| **Approach** | What methodology or technique did you use? |
| **Key Findings** | What are the main results? |
| **Significance** | Why does this matter? |

**Tips**:
- Write the abstract last, after completing the paper
- Avoid jargon, acronyms, and citations
- Make it self-contained—readers should understand without reading the paper
- Be specific about contributions, not vague about "exploring" or "investigating"

### Introduction

| Component | Purpose |
|-----------|---------|
| **Context** | Situate the reader in the problem space |
| **Motivation** | Why is this problem important? |
| **Gap** | What is missing in current approaches? |
| **Research Questions** | What specific questions do you address? |
| **Contributions** | What does this paper provide? |
| **Roadmap** | Brief overview of paper structure |

### Methods/Approach

| Principle | Implementation |
|-----------|----------------|
| **Reproducibility** | Include all details needed to replicate |
| **Justification** | Explain why you made key choices |
| **Clarity** | Use precise terminology consistently |
| **Structure** | Organize logically (data → preprocessing → model → evaluation) |

### Results

| Best Practice | Rationale |
|---------------|-----------|
| **Separate from Discussion** | Present findings before interpreting |
| **Use Tables/Figures** | Visualize when more effective than prose |
| **Statistical Rigor** | Report uncertainty, significance, effect sizes |
| **Honest Reporting** | Include negative results and failures |

### Discussion

| Element | Content |
|---------|---------|
| **Interpretation** | What do the results mean? |
| **Comparison** | How do findings relate to prior work? |
| **Limitations** | What are the weaknesses and constraints? |
| **Implications** | What are the broader consequences? |
| **Future Work** | What remains to be done? |

---

## Figure Guidelines

### Technical Requirements

| Requirement | Specification |
|-------------|---------------|
| **Resolution** | Minimum 300 DPI for print quality |
| **Format** | PDF, PNG, or SVG (vector preferred) |
| **Color** | Use colorblind-friendly palettes |
| **Font Size** | Readable when printed at intended size |

### Effective Figures

| Principle | Implementation |
|-----------|----------------|
| **Self-Contained** | Caption should explain figure fully |
| **Clear Labels** | All axes, legends, annotations readable |
| **Purpose** | Every figure should serve a specific purpose |
| **Referenced** | All figures mentioned in text |
| **Numbered** | Sequential numbering (Figure 1, Figure 2, etc.) |

### Common Problems

| Issue | Solution |
|-------|----------|
| **Unreadable text** | Increase font size, simplify |
| **Color confusion** | Use patterns, not just colors |
| **Missing legends** | Always include complete legends |
| **Unclear purpose** | Ask: what point does this make? |

---

## Citation Guidelines

### Supported Styles

| Style | Format Example |
|-------|----------------|
| **APA** | Author, A. (Year). Title. *Journal*, volume(issue), pages. DOI |
| **IEEE** | [1] A. Author, "Title," *Journal*, vol. X, no. Y, pp. Z, Year. |
| **Chicago** | Author, First. "Title." *Journal* Volume, no. Issue (Year): pages. |

### Best Practices

| Practice | Reason |
|----------|--------|
| **Include DOIs** | Enable readers to locate sources |
| **Use Consistent Style** | Professionalism and readability |
| **Cite Primary Sources** | Don't cite reviews when you mean the original |
| **Cite Recent Work** | Show awareness of current state |
| **Self-Citation Sparingly** | Only when genuinely relevant |

---

## Metadata Specification

### Complete Example

```yaml
title: "Efficient Attention Mechanisms for Long-Context Language Models"

authors:
  - name: "Jane Smith"
    affiliation: "University of Example"
    email: "jsmith@example.edu"
    orcid: "0000-0002-1234-5678"
    corresponding: true
  - name: "John Doe"
    affiliation: "Example Research Lab"
    email: "jdoe@examplelab.ai"

abstract: |
  Transformer models face quadratic scaling in attention computation,
  limiting context length. We introduce Sparse-Dense Attention (SDA),
  a hybrid mechanism combining sparse local patterns with dense global
  connections. On the LongBench benchmark, SDA achieves comparable
  performance to full attention while reducing computation by 60% for
  32K-token contexts. Analysis reveals that global attention is
  primarily needed for cross-document reasoning tasks. These findings
  suggest practical pathways for extending context windows without
  proportional compute increase.

keywords:
  - attention mechanisms
  - efficient transformers
  - long-context modeling
  - sparse attention
  - language models

paper_type: research-paper

data_availability: |
  Evaluation datasets are from LongBench (MIT license).
  Training data: RedPajama (Apache 2.0).

code_availability: |
  https://github.com/example/sda-attention
  Code and model checkpoints will be released upon publication.

funding: |
  This work was supported by Example Foundation Grant #12345
  and compute resources from CloudProvider.

conflicts: |
  Author J. Doe is employed by Example Research Lab, which
  develops commercial language models.
```

---

## Quality Checklist

### Before Submission

| Category | Checkpoint |
|----------|------------|
| **Content** | ☐ Abstract within 300 words |
| | ☐ All required sections present |
| | ☐ Claims supported by evidence |
| | ☐ Limitations acknowledged |
| **Format** | ☐ Within page limits |
| | ☐ Minimum font size met |
| | ☐ Figures readable and referenced |
| | ☐ Tables properly formatted |
| **References** | ☐ All citations present in bibliography |
| | ☐ All bibliography entries cited |
| | ☐ DOIs included where available |
| | ☐ Consistent citation style |
| **Metadata** | ☐ All author information complete |
| | ☐ Corresponding author designated |
| | ☐ Keywords provided |
| | ☐ Availability statements included |
| | ☐ Funding and conflicts disclosed |
| **Technical** | ☐ PDF renders correctly |
| | ☐ No broken references |
| | ☐ All equations numbered |
| | ☐ Supplementary materials organized |

---

## Common Mistakes

### Content Issues

| Mistake | Better Approach |
|---------|-----------------|
| Overclaiming | Be precise about what you show vs. suggest |
| Ignoring limitations | Acknowledge constraints proactively |
| Missing related work | Survey the field thoroughly |
| Unclear contributions | State explicitly what is new |

### Format Issues

| Mistake | Better Approach |
|---------|-----------------|
| Exceeding page limits | Edit ruthlessly; move to appendix |
| Tiny figure text | Increase font; simplify charts |
| Inconsistent notation | Define terms; use consistently |
| Missing sections | Follow the required structure |

### Submission Issues

| Mistake | Better Approach |
|---------|-----------------|
| Incomplete metadata | Complete all required fields |
| Missing files | Include source, PDF, and data/code links |
| Concurrent submission | Ensure exclusivity (except preprints) |
| Ignoring guidelines | Read requirements carefully |

---

## Responding to Reviews

### When You Receive Feedback

| Step | Action |
|------|--------|
| **1** | Read all feedback carefully before reacting |
| **2** | Identify the core concerns behind each comment |
| **3** | Categorize: easy fixes vs. substantial revisions |
| **4** | Create a revision plan |
| **5** | Address each point systematically |
| **6** | Write a clear response document |

### Response Document Format

```markdown
## Response to Reviews

### Reviewer 1

**Comment 1.1**: [Quote the concern]

**Response**: [Explain your action]

**Changes Made**: [Describe specific changes, with page/line numbers]

---

**Comment 1.2**: [Quote the concern]

**Response**: [If you disagree, explain respectfully why]

---

### Reviewer 2
...
```

### Best Practices

| Practice | Rationale |
|----------|-----------|
| **Be respectful** | Reviewers give their time; engage constructively |
| **Be specific** | Point to exact changes with locations |
| **Be thorough** | Address every comment, even if briefly |
| **Explain disagreements** | If you don't make a requested change, explain why |

---

## Additional Resources

### External Writing Guides

| Resource | Focus |
|----------|-------|
| **Writing in the Sciences (Coursera)** | Scientific writing fundamentals |
| **How to Write a Great Research Paper (Microsoft)** | Structure and clarity |
| **The Elements of Style** | General writing quality |

### Research Communication

| Resource | Focus |
|----------|-------|
| **Papers With Code** | How to document reproducibility |
| **ML Reproducibility Checklist** | Standards for ML papers |
| **SIGPLAN Empirical Evaluation Guidelines** | Rigorous evaluation |

---

**Navigation**: [Research Home](/global-times/research/) | [Submission Guidelines](/global-times/research/submit/) | [Review Process](/global-times/research/review-process/) | [Published Papers](/global-times/research/papers/)
