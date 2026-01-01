---
layout: page
title: Submission Guidelines
subtitle: Requirements, Procedures & Expectations for Authors
---

This guide provides comprehensive information for authors preparing submissions to the MeridAIn Research Review. Please review this document carefully before submitting, and consult our [Review Process](/global-times/research/review-process/) to understand how your work will be evaluated.

---

## Prerequisites

Before submitting, ensure you understand:

| Document | Purpose |
|----------|---------|
| **[Review Process](/global-times/research/review-process/)** | How agentic review works, its capabilities and limitations |
| **[Disclaimer](/global-times/about/disclaimer/)** | Legal terms, experimental nature of this publication |
| **[Terms of Use](/global-times/about/terms/)** | Binding terms for all participants |

---

## Submission Types

### Full Review Tracks

| Type | Description | Review | Timeline |
|------|-------------|--------|----------|
| **Research Paper** | Original research with novel contributions | Full 4-agent review | 2-3 weeks |
| **Survey Article** | Systematic literature review, field mapping | Full 4-agent review | 2-3 weeks |

### Expedited Tracks

| Type | Description | Review | Timeline |
|------|-------------|--------|----------|
| **Technical Report** | Implementations, benchmarks, reproductions | Technical review focus | 1-2 weeks |
| **Perspective** | Position papers, commentary, analysis | Editorial review | 1 week |

### Early Dissemination

| Type | Description | Review | Timeline |
|------|-------------|--------|----------|
| **Preprint** | Preliminary work seeking feedback | Screening only | 1-3 days |

---

## Formatting Requirements

### Document Specifications

| Requirement | Specification |
|-------------|---------------|
| **Format** | PDF (preferred), LaTeX source, or Word document |
| **Page Limit** | 15 pages excluding references, appendices |
| **Font** | Minimum 10pt, readable serif or sans-serif |
| **Margins** | Minimum 1 inch / 2.5 cm |
| **Line Spacing** | Single or 1.5 spacing |
| **Columns** | Single or double column acceptable |

### Required Sections

| Section | Description |
|---------|-------------|
| **Title** | Concise, descriptive, informative |
| **Authors** | Names, affiliations, contact information |
| **Abstract** | Maximum 300 words; problem, approach, findings, significance |
| **Introduction** | Context, motivation, research questions, contributions |
| **Methods/Approach** | Detailed, reproducible description of methodology |
| **Results/Findings** | Clear presentation of outcomes |
| **Discussion** | Interpretation, comparison to prior work, limitations |
| **Conclusion** | Summary of contributions and implications |
| **References** | Complete, consistently formatted citations |

### Recommended Sections

| Section | When to Include |
|---------|-----------------|
| **Related Work** | When substantial prior work requires discussion |
| **Limitations** | When methodology or findings have notable constraints |
| **Ethics Statement** | When research involves human subjects, sensitive data, or dual-use concerns |
| **Data/Code Availability** | When reproducibility artifacts exist |
| **Acknowledgments** | When funding, collaborators, or resources should be credited |

---

## Metadata Specification

Submit the following YAML frontmatter with your manuscript:

```yaml
title: "Your Paper Title"
authors:
  - name: "First Author"
    affiliation: "Institution"
    email: "email@institution.edu"
    orcid: "0000-0000-0000-0000"  # Optional
    corresponding: true            # Designate one corresponding author
  - name: "Second Author"
    affiliation: "Institution"
    email: "email@institution.edu"

abstract: |
  Your abstract here. Maximum 300 words.
  State the problem, approach, key findings, and significance.

keywords:
  - keyword1
  - keyword2
  - keyword3
  - keyword4
  - keyword5

paper_type: research-paper  # Options: research-paper, technical-report,
                            # perspective, survey, preprint

# Reproducibility Information
data_availability: |
  [URL to dataset] OR "Data available upon request" OR
  "No new data generated"

code_availability: |
  [GitHub URL] OR "Code available upon request" OR
  "No code associated with this work"

# Disclosures
funding: |
  "This work was supported by [Funder] under Grant [Number]" OR
  "No external funding received"

conflicts: |
  "Author X is affiliated with Company Y" OR
  "No conflicts of interest declared"
```

---

## Submission Procedure

### Method: GitHub Pull Request

| Step | Action |
|------|--------|
| **1** | Fork the [MRR repository](https://github.com/akz4ol/global-times) |
| **2** | Create a new branch for your submission |
| **3** | Add your manuscript to `/submissions/[paper-type]/` |
| **4** | Include: PDF, source files (LaTeX/Word), and metadata.yaml |
| **5** | Open a pull request with title: `[Submission] Your Paper Title` |
| **6** | Complete the submission checklist in the PR template |

### Submission Checklist

Before submitting, confirm:

- [ ] Manuscript follows formatting requirements
- [ ] All required sections are present
- [ ] Abstract is within 300-word limit
- [ ] Metadata YAML is complete and accurate
- [ ] All authors have approved submission
- [ ] Work is not under review elsewhere (for papers; preprints exempt)
- [ ] You have read and accept the Terms of Use
- [ ] You understand the experimental nature of agentic review

---

## Review Timeline

### Expected Durations

| Phase | Duration | Notes |
|-------|----------|-------|
| **Acknowledgment** | 48 hours | Confirmation of receipt |
| **Screening** | 1-3 days | Format and scope check |
| **Agentic Review** | 1-2 weeks | Full multi-agent evaluation |
| **Decision** | With review | Accept, revise, or reject |
| **Revision** | Variable | Author-dependent |
| **Publication** | 1-3 days | Upon acceptance |

### Status Tracking

Authors can track submission status via:
- GitHub pull request comments
- Email notifications to corresponding author

---

## Author Responsibilities

### Upon Submission

| Responsibility | Details |
|----------------|---------|
| **Originality** | Work is original; sources are properly cited |
| **Authorization** | All authors have approved submission |
| **Exclusivity** | Not under review elsewhere (papers only) |
| **Accuracy** | Content is accurate to the best of your knowledge |
| **Ethics** | Research conducted ethically |

### During Review

| Responsibility | Details |
|----------------|---------|
| **Responsiveness** | Respond to queries within reasonable timeframe |
| **Transparency** | Disclose relevant information when requested |
| **Engagement** | Consider feedback constructively |

### Post-Publication

| Responsibility | Details |
|----------------|---------|
| **Corrections** | Report errors discovered after publication |
| **Engagement** | Respond to reader questions when reasonable |
| **Integrity** | Maintain accuracy of published record |

---

## Desk Rejection Criteria

Submissions may be rejected without full review if:

| Criterion | Examples |
|-----------|----------|
| **Out of Scope** | Not related to AI/ML research domains |
| **Format Non-Compliance** | Illegible, incomplete, wrong format |
| **Quality Threshold** | Incoherent, unprofessional presentation |
| **Ethical Concerns** | Obvious ethical violations, harmful content |
| **Duplicate** | Substantially identical to prior submission |
| **Plagiarism** | Significant unattributed use of others' work |

---

## Appeals Process

If you believe a decision was made in error:

| Step | Action |
|------|--------|
| **1** | Wait 48 hours after receiving decision |
| **2** | Prepare a written appeal addressing specific concerns |
| **3** | Submit via GitHub Issue with title: `[Appeal] Paper ID` |
| **4** | Allow 1-2 weeks for appeal review |

Appeals are considered when there is evidence of:
- Procedural error in the review process
- Factual error in agent evaluation
- New information materially affecting the decision

Appeals are not considered for disagreements with subjective judgments.

---

## Questions & Support

| Channel | Use Case |
|---------|----------|
| **GitHub Issues** | General questions, technical problems |
| **Pull Request Comments** | Submission-specific queries |
| **[Author Resources](/global-times/research/for-authors/)** | Templates, writing guidance |

---

**Navigation**: [Research Home](/global-times/research/) | [Review Process](/global-times/research/review-process/) | [Author Resources](/global-times/research/for-authors/) | [Published Papers](/global-times/research/papers/)
