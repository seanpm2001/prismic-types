import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelUIDField): true => {
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

expectType<prismicT.CustomTypeModelUIDField>({
	type: prismicT.CustomTypeModelFieldType.UID,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelUIDField>({
	type: prismicT.CustomTypeModelFieldType.UID,
	config: {
		label: "string",
		placeholder: "string",
	},
});
