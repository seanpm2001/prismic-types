export type WebhookBody = WebhookBodyAPIUpdate | WebhookBodyTestTrigger;

/**
 * Types of Prismic Webhooks.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/webhooks}
 */
export const WebhookType = {
	APIUpdate: "api-update",
	TestTrigger: "test-trigger",
} as const;

interface WebhookBodyBase {
	type: typeof WebhookType[keyof typeof WebhookType];
	domain: string;
	apiUrl: string;
	secret: string | null;
}

/**
 * Webhook payload sent when a Prismic repository content is updated.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/webhooks}
 */
export interface WebhookBodyAPIUpdate extends WebhookBodyBase {
	type: typeof WebhookType.APIUpdate;
	masterRef?: string;
	releases: WebhookBodyAPIUpdateOperations<WebhookBodyAPIUpdateRelease>;
	masks: WebhookBodyAPIUpdateOperations<WebhookBodyAPIUpdateMask>;
	tags: WebhookBodyAPIUpdateOperations<WebhookBodyAPIUpdateTag>;
	documents: string[];
	/**
	 * @deprecated Experiments are no longer supported by Prismic.
	 */
	experiments?: WebhookBodyAPIUpdateOperations<unknown>;
}

/**
 * Webhook payload sent when a test webhook action is triggered.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/webhooks}
 */
export interface WebhookBodyTestTrigger extends WebhookBodyBase {
	type: typeof WebhookType.TestTrigger;
}

interface WebhookBodyAPIUpdateOperations<T> {
	update?: T[];
	addition?: T[];
	deletion?: T[];
}

/**
 * Metadata representing a mask (also called a Custom Type).
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/custom-types}
 */
interface WebhookBodyAPIUpdateMask {
	id: string;
	label: string;
}

/**
 * Metadata representing a tag.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/document-tags}
 */
interface WebhookBodyAPIUpdateTag {
	id: string;
}

/**
 * Metadata representing a Release.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/draft-plan-and-schedule-content#releases}
 */
interface WebhookBodyAPIUpdateRelease {
	id: string;
	ref: string;
	label: string;
	documents: string[];
}
