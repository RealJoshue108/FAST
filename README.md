# [Draft] FAST Reporting Tool prototype

This is prototype of a tool that can be used for horizontal spec review. It is designed to be used in conjunction with [Framework for Accessible Specification of Technologies](https://w3c.github.io/apa/fast/#framework-for-accessible-specification-of-technologies) (FAST).

This tool will help with accessibility related review of W3C specifications. It creates a report (JSON object) that can be presented as an evaluation against any W3C specification.

## Status

This project is an early prototype built on tooling developed by Eric Eggert/Hidde De Vries (W3C). It will be abstracted into more general set of tooling by Joshue O Connor/Michael Cooper (W3C).

## Development

This application is built with [Svelte](https://svelte.dev). To run it locally, you need to clone it this repository, have [Node](https://nodejs.org) installed and then run this in the project's directory:

```bash
npm install
```

This may take a while the first time, but it only needs to be done once.

Then, to build the app with [Rollup](https://rollupjs.org), and serve it on a local dev server, run:

```bash
npm run dev
```

Navigate to [localhost:10001](http://localhost:10001). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Data structure

This project has a JavaScript representation of the [DRAFT Fast Checklist](https://w3c.github.io/apa/fast/checklist.html).

Currently it is an abstraction from the original ATAG type layout that followed the object format outlined below. For the purposes of abstracting this tool for more general usage we follow the format here where:

#For the grouping/renaming of sections:

* principle = page for new group of related FAST checkpoints
* guidelines = A new FAST section
* successcriterioa = Individual FAST checkpoints.

The general process is to create instances of any given guideline/successcriteria for each FAST checkpoint.

NOTE: None of this is normative.

This is an example of everything that can exist in this object, formatted as [yaml](https://yaml.org/):

```yaml
principle:
  handle: Short name for FAST 'parent' principle: Vis.1, Input.1
  text: FAST principle such as "If technology allows visual rendering of content" or "If technology provides author control over color" - these determin the relevancy of a FAST "principle"
  num: Unique reference for this item, e.g. Vis.1
  guidelines:
   - id: common sense naming convention used here - though slightly arbitrary for each checkpoint e.g. "content-resized" or "defined-way-for-non-visual-rendering"
     num: Unique reference for this item, e.g. V.1.1, C.1.1. etc
     handle: Short name
     text: Full text for this 'guideline' - "There is a mechanism for users to override colors of text and user interface components" etc.
     successcriteria:
       - id: short-name
         num: Unique reference for this item, e.g. V.1.1
         handle: Short name
         text: Full text for this checkpoint
         level: ignore this
         details:
           - type: note
             handle: Note 1
             text: Full note text
           - type: olist
             items:
               - handle: Ordered Item
                 text: Full text for item
               - handle: Ordered Item 2
                 text: Full text for item 2
           - type: ulist
           
 
              items:
                - handle: Unordered item
                  text: Full text for item
                - handle: Unordered item
                  text: Full text for item 2
```
