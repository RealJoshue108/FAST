import new_fast from "../data/new_fast.js";
import packageJson from "../../package.json";

const datestamp = new Date().toDateString();

export function createCleanEvaluation() {
  const cleanEvaluation = {
    evaluationData: {},
    meta: {},
  };
  let principleApplicability = {};

  for (const principle of atag) {
    principleApplicability[principle.principle.num] = true;
    for (const guideline of principle.guidelines) {
      for (const successcriterion of guideline.successcriteria) {
        cleanEvaluation["evaluationData"][successcriterion.id] = {
          id: successcriterion.id,
          num: successcriterion.num,
          handle: successcriterion.handle,
          result: "Not checked",
          observations: null,
          level: successcriterion.level,
          evaluatedLevel:
            successcriterion.level === "A, AA, AAA"
              ? "Level AA"
              : `Level ${successcriterion.level}`,
        };
      }
    }
  }

  cleanEvaluation.meta = {
    name: {
      id: "name",
      value: null,
    },
    website: {
      id: "website",
      value: null,
    },
    executiveSummary: {
      id: "executiveSummary",
      value: null,
    },
    evaluatorName: {
      id: "evaluatorName",
      value: null,
    },
    evaluatorOrg: {
      id: "evaluatorOrg",
      value: null,
    },
    evaluationId: {
      id: "evaluationId",
      value: datestamp,
    },
    conformanceTarget: {
      id: "conformanceTarget",
      value: "AA",
    },
    createdWith: {
      id: "createdWith",
      value: packageJson.version,
    },
    principleApplicability: principleApplicability
  };



  return cleanEvaluation;
}