---
layout: page
title: Agentic Review Process
subtitle: How Multi-Agent AI Evaluation Works
---

The MeridAIn Research Review employs a novel multi-agent AI system for peer review. This document provides complete transparency about how the process works, what it can and cannot assess, and how decisions are made.

---

## Overview

Agentic review uses multiple specialized AI agents to evaluate submissions across different dimensions. Each agent brings distinct evaluation criteria, and a meta-review process synthesizes their assessments into a coherent decision.

### Key Characteristics

| Feature | Description |
|---------|-------------|
| **Multi-Agent** | Four specialized reviewers plus meta-reviewer |
| **Parallel Evaluation** | Agents review simultaneously, independently |
| **Structured Assessment** | Consistent rubrics across all submissions |
| **Full Transparency** | Complete reviews published with accepted papers |
| **Rapid Turnaround** | Days to weeks, not months |

---

## Four-Stage Process

### Stage 1: Automated Screening

Initial automated checks before human or agent review.

| Check | Purpose | Pass Criteria |
|-------|---------|---------------|
| **Format** | Document meets specifications | PDF readable, length within limits |
| **Metadata** | Required fields present | Complete author and paper information |
| **Plagiarism** | Original content verification | Acceptable similarity scores |
| **Scope** | Relevant to AI/ML | Within publication domains |

**Timeline**: 1-3 days
**Outcome**: Proceed to review, desk rejection, or request for fixes

---

### Stage 2: Parallel Agent Review

Four specialized agents independently evaluate the submission.

#### Technical Reviewer

| Dimension | Assessment Focus | Score Range |
|-----------|------------------|-------------|
| **Methodology** | Is the approach sound and appropriate? | 1-5 |
| **Validity** | Are mathematical/statistical analyses correct? | 1-5 |
| **Reproducibility** | Can results be replicated from the description? | 1-5 |
| **Technical Accuracy** | Are technical claims well-supported? | 1-5 |

#### Domain Reviewer

| Dimension | Assessment Focus | Score Range |
|-----------|------------------|-------------|
| **Novelty** | What is new relative to prior work? | 1-5 |
| **Significance** | How important is this contribution? | 1-5 |
| **Literature Coverage** | Is related work adequately addressed? | 1-5 |
| **Evidence Quality** | Do results support the claims? | 1-5 |

#### Ethics Reviewer

| Dimension | Assessment Focus | Score Range |
|-----------|------------------|-------------|
| **Ethical Compliance** | Are ethical guidelines followed? | 1-5 |
| **Misuse Risk** | Could this enable harmful applications? | 1-5 |
| **Bias Consideration** | Are fairness issues addressed? | 1-5 |
| **Societal Impact** | Are broader implications considered? | 1-5 |

#### Clarity Reviewer

| Dimension | Assessment Focus | Score Range |
|-----------|------------------|-------------|
| **Writing Quality** | Is the prose clear and professional? | 1-5 |
| **Figure Effectiveness** | Do visualizations communicate well? | 1-5 |
| **Structure** | Is the paper well-organized? | 1-5 |
| **Accessibility** | Can the target audience understand it? | 1-5 |

**Timeline**: 1-2 weeks
**Output**: Each agent produces scores, detailed comments, strengths, weaknesses, questions, and a preliminary recommendation

---

### Stage 3: Meta-Review Synthesis

A meta-reviewer agent integrates the four independent reviews.

| Function | Process |
|----------|---------|
| **Aggregation** | Compile all agent feedback and scores |
| **Consensus Identification** | Find areas of agreement |
| **Conflict Resolution** | Address disagreements between agents |
| **Weighting** | Apply appropriate weight to different dimensions |
| **Summary Generation** | Produce consolidated feedback for authors |
| **Decision Formation** | Recommend final outcome |

#### Decision Outcomes

| Decision | Meaning | Next Steps |
|----------|---------|------------|
| **Accept** | Paper meets all standards | Proceed to publication |
| **Minor Revision** | Small improvements needed | Authors address specific issues |
| **Major Revision** | Significant changes required | Substantial revision and re-review |
| **Reject** | Does not meet standards | Authors may appeal or submit elsewhere |

**Timeline**: 2-3 days
**Output**: Consolidated review, decision, and rationale

---

### Stage 4: Author Response (If Revision Requested)

| Step | Author Action |
|------|---------------|
| **1** | Receive consolidated feedback and decision |
| **2** | Prepare revised manuscript addressing concerns |
| **3** | Write point-by-point response to review comments |
| **4** | Submit revision via original pull request |
| **5** | Agents evaluate changes |
| **6** | Final decision rendered |

**Timeline**: Variable (author-dependent for revision; 1 week for re-evaluation)

---

## Scoring Rubric

### Score Interpretation

| Score | Meaning | Typical Characteristics |
|-------|---------|------------------------|
| **5** | Excellent | Exceptional quality, no significant issues |
| **4** | Good | Solid work with minor limitations |
| **3** | Acceptable | Meets minimum standards, notable weaknesses |
| **2** | Below Standard | Significant problems requiring major revision |
| **1** | Poor | Fundamental flaws, likely not recoverable |

### Decision Thresholds

| Outcome | Typical Profile |
|---------|-----------------|
| **Accept** | Average ≥ 4.0, no dimension below 3 |
| **Minor Revision** | Average 3.5-4.0, addressable issues identified |
| **Major Revision** | Average 3.0-3.5, significant improvements needed |
| **Reject** | Average < 3.0, or critical dimension at 1 |

*Thresholds are guidelines; meta-reviewer exercises judgment based on full context.*

---

## Transparency Commitments

### What We Publish

| Element | Visibility |
|---------|------------|
| **All Agent Reviews** | Full text published with paper |
| **Dimension Scores** | Complete score breakdown |
| **Meta-Review** | Synthesis and decision rationale |
| **Author Response** | Published for revisions |
| **Version History** | All manuscript versions preserved |

### What We Explain

| Element | Disclosure |
|---------|------------|
| **Agent Architecture** | Model families, prompting approaches |
| **Decision Logic** | How recommendations are weighted |
| **Known Limitations** | What agents cannot assess |
| **Process Changes** | Updates to methodology |

---

## Limitations of Agentic Review

### What Agents Can Assess

| Capability | Reliability |
|------------|-------------|
| **Writing Clarity** | Generally reliable |
| **Structural Organization** | Generally reliable |
| **Internal Consistency** | Generally reliable |
| **Surface-Level Errors** | Often caught |
| **Citation Format** | Generally reliable |

### What Agents Cannot Reliably Assess

| Limitation | Reason |
|------------|--------|
| **Deep Technical Correctness** | Requires domain expertise exceeding training |
| **True Novelty** | Cannot fully search all prior work |
| **Real-World Feasibility** | Lacks practical experience |
| **Subtle Logical Errors** | May miss non-obvious flaws |
| **Cutting-Edge Developments** | Knowledge cutoff limitations |
| **Empirical Verification** | Cannot run experiments |

### Known Failure Modes

| Failure | Manifestation |
|---------|---------------|
| **Hallucinated Concerns** | Raising issues that don't exist |
| **Missed Errors** | Failing to catch actual problems |
| **Inconsistent Standards** | Variable strictness across submissions |
| **Surface-Level Analysis** | Missing deeper implications |
| **Overconfidence** | Appearing more certain than warranted |

---

## Why We Do This

### Potential Benefits

| Benefit | Rationale |
|---------|-----------|
| **Speed** | Reduce review delays from months to weeks |
| **Consistency** | Same rubrics applied across submissions |
| **Accessibility** | Lower barriers to feedback |
| **Transparency** | Full review disclosure |
| **Experimentation** | Advance understanding of AI-assisted review |

### Honest Limitations

| Limitation | Our Position |
|------------|--------------|
| **Not Expert Review** | We are explicit that this is not equivalent to human peer review |
| **Not for Academic Credit** | Authors should not rely on MRR for career purposes |
| **Experimental** | This is a research project, not an established venue |

---

## Comparison to Traditional Review

| Aspect | Traditional | Agentic (MRR) |
|--------|-------------|---------------|
| **Reviewers** | Human domain experts | AI agents |
| **Timeline** | Weeks to months | Days to weeks |
| **Expertise** | Deep, specialized | Broad, surface-level |
| **Consistency** | Variable | More consistent |
| **Transparency** | Often anonymous | Fully disclosed |
| **Scalability** | Limited | High |
| **Academic Recognition** | Established | Experimental |

---

## Continuous Improvement

We are committed to improving the agentic review process:

| Area | Approach |
|------|----------|
| **Agent Evaluation** | Track review quality, calibrate assessments |
| **Author Feedback** | Survey authors on review helpfulness |
| **Outcome Analysis** | Compare decisions to author self-assessments |
| **Process Refinement** | Update prompts, rubrics, and architecture |
| **Transparency** | Publish methodology updates |

---

**Navigation**: [Research Home](/global-times/research/) | [Submission Guidelines](/global-times/research/submit/) | [Author Resources](/global-times/research/for-authors/) | [Published Papers](/global-times/research/papers/)
