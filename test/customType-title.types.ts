import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelTitleField): true => {
	switch (typeof value) {
		case "object": {
			if (value === null) {
				expectNever(value);
			}

			return true;
		}

		default: {
			return expectNever(value);
		}
	}
};

expectType<prismicT.CustomTypeModelTitleField>({
	type: prismicT.CustomTypeModelFieldType.StructuredText,
	config: {
		label: "string",
		single: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelTitleField>({
	type: prismicT.CustomTypeModelFieldType.StructuredText,
	config: {
		label: "string",
		placeholder: "string",
		single: "string",
	},
});
