// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace discoveryengine_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Discovery Engine API
   *
   * Discovery Engine API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const discoveryengine = google.discoveryengine('v1beta');
   * ```
   */
  export class Discoveryengine {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$GoogleApiHttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  /**
   * A description of the context in which an error occurred.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingErrorContext {
    /**
     * The HTTP request which was processed when the error was triggered.
     */
    httpRequest?: Schema$GoogleCloudDiscoveryengineLoggingHttpRequestContext;
    /**
     * The location in the source code where the decision was made to report the error, usually the place where it was logged.
     */
    reportLocation?: Schema$GoogleCloudDiscoveryengineLoggingSourceLocation;
  }
  /**
   * An error log which is reported to the Error Reporting system.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingErrorLog {
    /**
     * A description of the context in which the error occurred.
     */
    context?: Schema$GoogleCloudDiscoveryengineLoggingErrorContext;
    /**
     * The error payload that is populated on LRO import APIs.
     */
    importPayload?: Schema$GoogleCloudDiscoveryengineLoggingImportErrorContext;
    /**
     * A message describing the error.
     */
    message?: string | null;
    /**
     * The API request payload, represented as a protocol buffer. Most API request types are supported—for example: * `type.googleapis.com/google.cloud.discoveryengine.v1alpha.DocumentService.CreateDocumentRequest` * `type.googleapis.com/google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEventRequest`
     */
    requestPayload?: {[key: string]: any} | null;
    /**
     * The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported, and no PII is included: * `google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend` * `google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEvent` * `google.cloud.discoveryengine.v1alpha.UserEventService.CollectUserEvent`
     */
    responsePayload?: {[key: string]: any} | null;
    /**
     * The service context in which this error has occurred.
     */
    serviceContext?: Schema$GoogleCloudDiscoveryengineLoggingServiceContext;
    /**
     * The RPC status associated with the error log.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * HTTP request data that is related to a reported error.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingHttpRequestContext {
    /**
     * The HTTP response status code for the request.
     */
    responseStatusCode?: number | null;
  }
  /**
   * The error payload that is populated on LRO import APIs, including the following: * `google.cloud.discoveryengine.v1alpha.DocumentService.ImportDocuments` * `google.cloud.discoveryengine.v1alpha.UserEventService.ImportUserEvents`
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingImportErrorContext {
    /**
     * The detailed content which caused the error on importing a document.
     */
    document?: string | null;
    /**
     * Google Cloud Storage file path of the import source. Can be set for batch operation error.
     */
    gcsPath?: string | null;
    /**
     * Line number of the content in file. Should be empty for permission or batch operation error.
     */
    lineNumber?: string | null;
    /**
     * The operation resource name of the LRO.
     */
    operation?: string | null;
    /**
     * The detailed content which caused the error on importing a user event.
     */
    userEvent?: string | null;
  }
  /**
   * Describes a running service that sends errors.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingServiceContext {
    /**
     * An identifier of the service—for example, `discoveryengine.googleapis.com`.
     */
    service?: string | null;
  }
  /**
   * Indicates a location in the source code of the service for which errors are reported.
   */
  export interface Schema$GoogleCloudDiscoveryengineLoggingSourceLocation {
    /**
     * Human-readable name of a function or method—for example, `google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend`.
     */
    functionName?: string | null;
  }
  /**
   * Access Control Configuration.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAclConfig {
    /**
     * Identity provider config.
     */
    idpConfig?: Schema$GoogleCloudDiscoveryengineV1alphaIdpConfig;
    /**
     * Immutable. The full resource name of the acl configuration. Format: `projects/{project\}/locations/{location\}/aclConfig`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
  }
  /**
   * Defines an answer.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswer {
    /**
     * Additional answer-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set.
     */
    answerSkippedReasons?: string[] | null;
    /**
     * The textual answer.
     */
    answerText?: string | null;
    /**
     * Citations.
     */
    citations?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerCitation[];
    /**
     * Output only. Answer completed timestamp.
     */
    completeTime?: string | null;
    /**
     * Output only. Answer creation timestamp.
     */
    createTime?: string | null;
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/engines/{engine\}/sessions/x/answers/x`
     */
    name?: string | null;
    /**
     * Query understanding information.
     */
    queryUnderstandingInfo?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerQueryUnderstandingInfo;
    /**
     * References.
     */
    references?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerReference[];
    /**
     * Suggested related questions.
     */
    relatedQuestions?: string[] | null;
    /**
     * The state of the answer generation.
     */
    state?: string | null;
    /**
     * Answer generation steps.
     */
    steps?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerStep[];
  }
  /**
   * Citation info for a segment.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerCitation {
    /**
     * End of the attributed segment, exclusive.
     */
    endIndex?: string | null;
    /**
     * Citation sources for the attributed segment.
     */
    sources?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerCitationSource[];
    /**
     * Index indicates the start of the segment, measured in bytes (UTF-8 unicode).
     */
    startIndex?: string | null;
  }
  /**
   * Citation source.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerCitationSource {
    /**
     * ID of the citation source.
     */
    referenceId?: string | null;
  }
  /**
   * Query understanding information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerQueryUnderstandingInfo {
    /**
     * Query classification information.
     */
    queryClassificationInfo?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerQueryUnderstandingInfoQueryClassificationInfo[];
  }
  /**
   * Query classification information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerQueryUnderstandingInfoQueryClassificationInfo {
    /**
     * Classification output.
     */
    positive?: boolean | null;
    /**
     * Query classification type.
     */
    type?: string | null;
  }
  /**
   * Reference.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerReference {
    /**
     * Chunk information.
     */
    chunkInfo?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerReferenceChunkInfo;
    /**
     * Unstructured document information.
     */
    unstructuredDocumentInfo?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerReferenceUnstructuredDocumentInfo;
  }
  /**
   * Chunk information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerReferenceChunkInfo {
    /**
     * Chunk resource name.
     */
    chunk?: string | null;
    /**
     * Chunk textual content.
     */
    content?: string | null;
    /**
     * Document metadata.
     */
    documentMetadata?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerReferenceChunkInfoDocumentMetadata;
    /**
     * Relevance score.
     */
    relevanceScore?: number | null;
  }
  /**
   * Document metadata.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerReferenceChunkInfoDocumentMetadata {
    /**
     * Document resource name.
     */
    document?: string | null;
    /**
     * Page identifier.
     */
    pageIdentifier?: string | null;
    /**
     * Title.
     */
    title?: string | null;
    /**
     * URI for the document.
     */
    uri?: string | null;
  }
  /**
   * Unstructured document information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerReferenceUnstructuredDocumentInfo {
    /**
     * List of cited chunk contents derived from document content.
     */
    chunkContents?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerReferenceUnstructuredDocumentInfoChunkContent[];
    /**
     * Document resource name.
     */
    document?: string | null;
    /**
     * Title.
     */
    title?: string | null;
    /**
     * URI for the document.
     */
    uri?: string | null;
  }
  /**
   * Chunk content.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerReferenceUnstructuredDocumentInfoChunkContent {
    /**
     * Chunk textual content.
     */
    content?: string | null;
    /**
     * Page identifier.
     */
    pageIdentifier?: string | null;
  }
  /**
   * Step information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerStep {
    /**
     * Actions.
     */
    actions?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepAction[];
    /**
     * The description of the step.
     */
    description?: string | null;
    /**
     * The state of the step.
     */
    state?: string | null;
    /**
     * The thought of the step.
     */
    thought?: string | null;
  }
  /**
   * Action.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepAction {
    /**
     * Observation.
     */
    observation?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepActionObservation;
    /**
     * Search action.
     */
    searchAction?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepActionSearchAction;
  }
  /**
   * Observation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepActionObservation {
    /**
     * Search results observed by the search action, it can be snippets info or chunk info, depending on the citation type set by the user.
     */
    searchResults?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepActionObservationSearchResult[];
  }
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepActionObservationSearchResult {
    /**
     * If citation_type is CHUNK_LEVEL_CITATION and chunk mode is on, populate chunk info.
     */
    chunkInfo?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepActionObservationSearchResultChunkInfo[];
    /**
     * Document resource name.
     */
    document?: string | null;
    /**
     * If citation_type is DOCUMENT_LEVEL_CITATION, populate document level snippets.
     */
    snippetInfo?: Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepActionObservationSearchResultSnippetInfo[];
    /**
     * Title.
     */
    title?: string | null;
    /**
     * URI for the document.
     */
    uri?: string | null;
  }
  /**
   * Chunk information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepActionObservationSearchResultChunkInfo {
    /**
     * Chunk resource name.
     */
    chunk?: string | null;
    /**
     * Chunk textual content.
     */
    content?: string | null;
    /**
     * Relevance score.
     */
    relevanceScore?: number | null;
  }
  /**
   * Snippet information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepActionObservationSearchResultSnippetInfo {
    /**
     * Snippet content.
     */
    snippet?: string | null;
    /**
     * Status of the snippet defined by the search team.
     */
    snippetStatus?: string | null;
  }
  /**
   * Search action.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaAnswerStepActionSearchAction {
    /**
     * The query to search.
     */
    query?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.BatchCreateTargetSites operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for SiteSearchEngineService.BatchCreateTargetSites method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesResponse {
    /**
     * TargetSites created.
     */
    targetSites?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSite[];
  }
  /**
   * Metadata related to the progress of the DataStoreService.CreateDataStore operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCreateDataStoreMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the EngineService.CreateEngine operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCreateEngineMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for Create Schema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCreateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.CreateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCreateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata that describes a custom tuned model.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaCustomTuningModel {
    /**
     * Timestamp the Model was created at.
     */
    createTime?: string | null;
    /**
     * The display name of the model.
     */
    displayName?: string | null;
    /**
     * The state that the model is in (e.g.`TRAINING` or `TRAINING_FAILED`).
     */
    modelState?: string | null;
    modelVersion?: string | null;
    /**
     * Required. The fully qualified resource name of the model. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/customTuningModels/{custom_tuning_model\}` model must be an alpha-numerical string with limit of 40 characters.
     */
    name?: string | null;
    /**
     * Timestamp the model training was initiated.
     */
    trainingStartTime?: string | null;
  }
  /**
   * DataStore captures global settings and configs at the DataStore level.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDataStore {
    /**
     * Immutable. Whether data in the DataStore has ACL information. If set to `true`, the source data must have ACL. ACL will be ingested when data is ingested by DocumentService.ImportDocuments methods. When ACL is enabled for the DataStore, Document can't be accessed by calling DocumentService.GetDocument or DocumentService.ListDocuments. Currently ACL is only supported in `GENERIC` industry vertical with non-`PUBLIC_WEBSITE` content config.
     */
    aclEnabled?: boolean | null;
    /**
     * Immutable. The content config of the data store. If this field is unset, the server behavior defaults to ContentConfig.NO_CONTENT.
     */
    contentConfig?: string | null;
    /**
     * Output only. Timestamp the DataStore was created at.
     */
    createTime?: string | null;
    /**
     * Output only. The id of the default Schema asscociated to this data store.
     */
    defaultSchemaId?: string | null;
    /**
     * Required. The data store display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    displayName?: string | null;
    /**
     * Configuration for Document understanding and enrichment.
     */
    documentProcessingConfig?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig;
    /**
     * Output only. Data store level identity provider config.
     */
    idpConfig?: Schema$GoogleCloudDiscoveryengineV1alphaIdpConfig;
    /**
     * Immutable. The industry vertical that the data store registers.
     */
    industryVertical?: string | null;
    /**
     * Immutable. The full resource name of the data store. Format: `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The solutions that the data store enrolls. Available solutions for each industry_vertical: * `MEDIA`: `SOLUTION_TYPE_RECOMMENDATION` and `SOLUTION_TYPE_SEARCH`. * `SITE_SEARCH`: `SOLUTION_TYPE_SEARCH` is automatically enrolled. Other solutions cannot be enrolled.
     */
    solutionTypes?: string[] | null;
    /**
     * The start schema to use for this DataStore when provisioning it. If unset, a default vertical specialized schema will be used. This field is only used by CreateDataStore API, and will be ignored if used in other APIs. This field will be omitted from all API responses including CreateDataStore API. To retrieve a schema of a DataStore, use SchemaService.GetSchema API instead. The provided schema will be validated against certain rules on schema. Learn more from [this doc](https://cloud.google.com/generative-ai-app-builder/docs/provide-schema).
     */
    startingSchema?: Schema$GoogleCloudDiscoveryengineV1alphaSchema;
  }
  /**
   * Metadata related to the progress of the DataStoreService.DeleteDataStore operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDeleteDataStoreMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the EngineService.DeleteEngine operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDeleteEngineMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for DeleteSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDeleteSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.DeleteTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDeleteTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.DisableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for SiteSearchEngineService.DisableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchResponse {}
  /**
   * A singleton resource of DataStore. It's empty when DataStore is created, which defaults to digital parser. The first call to DataStoreService.UpdateDocumentProcessingConfig method will initialize the config.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig {
    /**
     * Whether chunking mode is enabled.
     */
    chunkingConfig?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigChunkingConfig;
    /**
     * Configurations for default Document parser. If not specified, we will configure it as default DigitalParsingConfig, and the default parsing config will be applied to all file types for Document parsing.
     */
    defaultParsingConfig?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigParsingConfig;
    /**
     * The full resource name of the Document Processing Config. Format: `projects/x/locations/x/collections/x/dataStores/x/documentProcessingConfig`.
     */
    name?: string | null;
    /**
     * Map from file type to override the default parsing configuration based on the file type. Supported keys: * `pdf`: Override parsing config for PDF files, either digital parsing, ocr parsing or layout parsing is supported. * `html`: Override parsing config for HTML files, only digital parsing and or layout parsing are supported. * `docx`: Override parsing config for DOCX files, only digital parsing and or layout parsing are supported.
     */
    parsingConfigOverrides?: {
      [
        key: string
      ]: Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigParsingConfig;
    } | null;
  }
  /**
   * Configuration for chunking config.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigChunkingConfig {
    /**
     * Configuration for the layout based chunking.
     */
    layoutBasedChunkingConfig?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig;
  }
  /**
   * Configuration for the layout based chunking.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig {
    /**
     * The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500.
     */
    chunkSize?: number | null;
    /**
     * Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss. Default value: False.
     */
    includeAncestorHeadings?: boolean | null;
  }
  /**
   * Related configurations applied to a specific type of document parser.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigParsingConfig {
    /**
     * Configurations applied to digital parser.
     */
    digitalParsingConfig?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigParsingConfigDigitalParsingConfig;
    /**
     * Configurations applied to layout parser.
     */
    layoutParsingConfig?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigParsingConfigLayoutParsingConfig;
    /**
     * Configurations applied to OCR parser. Currently it only applies to PDFs.
     */
    ocrParsingConfig?: Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigParsingConfigOcrParsingConfig;
  }
  /**
   * The digital parsing configurations for documents.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigParsingConfigDigitalParsingConfig {}
  /**
   * The layout parsing configurations for documents.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigParsingConfigLayoutParsingConfig {}
  /**
   * The OCR parsing configurations for documents.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigParsingConfigOcrParsingConfig {
    /**
     * [DEPRECATED] This field is deprecated. To use the additional enhanced document elements processing, please switch to `layout_parsing_config`.
     */
    enhancedDocumentElements?: string[] | null;
    /**
     * If true, will use native text instead of OCR text on pages containing native text.
     */
    useNativeText?: boolean | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.EnableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for SiteSearchEngineService.EnableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchResponse {}
  /**
   * Metadata that describes the training and serving parameters of an Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngine {
    /**
     * Configurations for the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT.
     */
    chatEngineConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig;
    /**
     * Output only. Additional information of the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT.
     */
    chatEngineMetadata?: Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineMetadata;
    /**
     * Common config spec that specifies the metadata of the engine.
     */
    commonConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineCommonConfig;
    /**
     * Output only. Timestamp the Recommendation Engine was created at.
     */
    createTime?: string | null;
    /**
     * The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary initializations.
     */
    dataStoreIds?: string[] | null;
    /**
     * Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
     */
    displayName?: string | null;
    /**
     * The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to `GENERIC`. Vertical on Engine has to match vertical of the DataStore liniked to the engine.
     */
    industryVertical?: string | null;
    /**
     * Configurations for the Media Engine. Only applicable on the data stores with solution_type SOLUTION_TYPE_RECOMMENDATION and IndustryVertical.MEDIA vertical.
     */
    mediaRecommendationEngineConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig;
    /**
     * Immutable. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}` engine should be 1-63 characters, and valid characters are /a-z0-9x/. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    name?: string | null;
    /**
     * Output only. Additional information of a recommendation engine. Only applicable if solution_type is SOLUTION_TYPE_RECOMMENDATION.
     */
    recommendationMetadata?: Schema$GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata;
    /**
     * Configurations for the Search Engine. Only applicable if solution_type is SOLUTION_TYPE_SEARCH.
     */
    searchEngineConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig;
    /**
     * Additional config specs for a `similar-items` engine.
     */
    similarDocumentsConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineSimilarDocumentsEngineConfig;
    /**
     * Required. The solutions of the engine.
     */
    solutionType?: string | null;
    /**
     * Output only. Timestamp the Recommendation Engine was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Configurations for a Chat Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig {
    /**
     * The configurationt generate the Dialogflow agent that is associated to this Engine. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation.
     */
    agentCreationConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfig;
    /**
     * The resource name of an exist Dialogflow agent to link to this Chat Engine. Customers can either provide `agent_creation_config` to create agent or provide an agent name that links the agent with the Chat engine. Format: `projects//locations//agents/`. Note that the `dialogflow_agent_to_link` are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation. Use ChatEngineMetadata.dialogflow_agent for actual agent association after Engine is created.
     */
    dialogflowAgentToLink?: string | null;
  }
  /**
   * Configurations for generating a Dialogflow agent. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfig {
    /**
     * Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.
     */
    business?: string | null;
    /**
     * Required. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
     */
    defaultLanguageCode?: string | null;
    /**
     * Agent location for Agent creation, supported values: global/us/eu. If not provided, us Engine will create Agent using us-central-1 by default; eu Engine will create Agent using eu-west-1 by default.
     */
    location?: string | null;
    /**
     * Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
     */
    timeZone?: string | null;
  }
  /**
   * Additional information of a Chat Engine. Fields in this message are output only.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineChatEngineMetadata {
    /**
     * The resource name of a Dialogflow agent, that this Chat Engine refers to. Format: `projects//locations//agents/`.
     */
    dialogflowAgent?: string | null;
  }
  /**
   * Common configurations for an Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineCommonConfig {
    /**
     * Immutable. The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.
     */
    companyName?: string | null;
  }
  /**
   * Additional config specs for a Media Recommendation engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig {
    /**
     * The optimization objective. e.g., `cvr`. This field together with optimization_objective describe engine metadata to use to control engine training and serving. Currently supported values: `ctr`, `cvr`. If not specified, we choose default based on engine type. Default depends on type of recommendation: `recommended-for-you` =\> `ctr` `others-you-may-like` =\> `ctr`
     */
    optimizationObjective?: string | null;
    /**
     * Name and value of the custom threshold for cvr optimization_objective. For target_field `watch-time`, target_field_value must be an integer value indicating the media progress time in seconds between (0, 86400] (excludes 0, includes 86400) (e.g., 90). For target_field `watch-percentage`, the target_field_value must be a valid float value between (0, 1.0] (excludes 0, includes 1.0) (e.g., 0.5).
     */
    optimizationObjectiveConfig?: Schema$GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig;
    /**
     * The training state that the engine is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for `CreateEngine` method is `TRAINING`. The default value for `UpdateEngine` method is to keep the state the same as before.
     */
    trainingState?: string | null;
    /**
     * Required. The type of engine. e.g., `recommended-for-you`. This field together with optimization_objective describe engine metadata to use to control engine training and serving. Currently supported values: `recommended-for-you`, `others-you-may-like`, `more-like-this`, `most-popular-items`.
     */
    type?: string | null;
  }
  /**
   * Custom threshold for `cvr` optimization_objective.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig {
    /**
     * Required. The name of the field to target. Currently supported values: `watch-percentage`, `watch-time`.
     */
    targetField?: string | null;
    /**
     * Required. The threshold to be applied to the target (e.g., 0.5).
     */
    targetFieldValueFloat?: number | null;
  }
  /**
   * Additional information of a recommendation engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata {
    /**
     * Output only. The state of data requirements for this engine: `DATA_OK` and `DATA_ERROR`. Engine cannot be trained if the data is in `DATA_ERROR` state. Engine can have `DATA_ERROR` state even if serving state is `ACTIVE`: engines were trained successfully before, but cannot be refreshed because the underlying engine no longer has sufficient data for training.
     */
    dataState?: string | null;
    /**
     * Output only. The timestamp when the latest successful tune finished. Only applicable on Media Recommendation engines.
     */
    lastTuneTime?: string | null;
    /**
     * Output only. The serving state of the engine: `ACTIVE`, `NOT_ACTIVE`.
     */
    servingState?: string | null;
    /**
     * Output only. The latest tune operation id associated with the engine. Only applicable on Media Recommendation engines. If present, this operation id can be used to determine if there is an ongoing tune for this engine. To check the operation status, send the GetOperation request with this operation id in the engine resource format. If no tuning has happened for this engine, the string is empty.
     */
    tuningOperation?: string | null;
  }
  /**
   * Configurations for a Search Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig {
    /**
     * The add-on that this search engine enables.
     */
    searchAddOns?: string[] | null;
    /**
     * The search feature tier of this engine. Different tiers might have different pricing. To learn more, check the pricing documentation. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified.
     */
    searchTier?: string | null;
  }
  /**
   * Additional config specs for a `similar-items` engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEngineSimilarDocumentsEngineConfig {}
  /**
   * Metadata related to the progress of the EstimateDataSize operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
  }
  /**
   * Response of the EstimateDataSize request. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponse {
    /**
     * Data size in terms of bytes.
     */
    dataSizeBytes?: string | null;
    /**
     * Total number of documents.
     */
    documentCount?: string | null;
  }
  /**
   * Configurations for fields of a schema. For example, configuring a field is indexable, or searchable.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaFieldConfig {
    /**
     * If this field is set, only the corresponding source will be indexed for this field. Otherwise, the values from different sources are merged. Assuming a page with `` in meta tag, and `` in page map: if this enum is set to METATAGS, we will only index ``; if this enum is not set, we will merge them and index ``.
     */
    advancedSiteSearchDataSources?: string[] | null;
    /**
     * If completable_option is COMPLETABLE_ENABLED, field values are directly used and returned as suggestions for Autocomplete in CompletionService.CompleteQuery. If completable_option is unset, the server behavior defaults to COMPLETABLE_DISABLED for fields that support setting completable options, which are just `string` fields. For those fields that do not support setting completable options, the server will skip completable option setting, and setting completable_option for those fields will throw `INVALID_ARGUMENT` error.
     */
    completableOption?: string | null;
    /**
     * If dynamic_facetable_option is DYNAMIC_FACETABLE_ENABLED, field values are available for dynamic facet. Could only be DYNAMIC_FACETABLE_DISABLED if FieldConfig.indexable_option is INDEXABLE_DISABLED. Otherwise, an `INVALID_ARGUMENT` error will be returned. If dynamic_facetable_option is unset, the server behavior defaults to DYNAMIC_FACETABLE_DISABLED for fields that support setting dynamic facetable options. For those fields that do not support setting dynamic facetable options, such as `object` and `boolean`, the server will skip dynamic facetable option setting, and setting dynamic_facetable_option for those fields will throw `INVALID_ARGUMENT` error.
     */
    dynamicFacetableOption?: string | null;
    /**
     * Required. Field path of the schema field. For example: `title`, `description`, `release_info.release_year`.
     */
    fieldPath?: string | null;
    /**
     * Output only. Raw type of the field.
     */
    fieldType?: string | null;
    /**
     * If indexable_option is INDEXABLE_ENABLED, field values are indexed so that it can be filtered or faceted in SearchService.Search. If indexable_option is unset, the server behavior defaults to INDEXABLE_DISABLED for fields that support setting indexable options. For those fields that do not support setting indexable options, such as `object` and `boolean` and key properties, the server will skip indexable_option setting, and setting indexable_option for those fields will throw `INVALID_ARGUMENT` error.
     */
    indexableOption?: string | null;
    /**
     * Output only. Type of the key property that this field is mapped to. Empty string if this is not annotated as mapped to a key property. Example types are `title`, `description`. Full list is defined by `keyPropertyMapping` in the schema field annotation. If the schema field has a `KeyPropertyMapping` annotation, `indexable_option` and `searchable_option` of this field cannot be modified.
     */
    keyPropertyType?: string | null;
    /**
     * If recs_filterable_option is FILTERABLE_ENABLED, field values are filterable by filter expression in RecommendationService.Recommend. If FILTERABLE_ENABLED but the field type is numerical, field values are not filterable by text queries in RecommendationService.Recommend. Only textual fields are supported. If recs_filterable_option is unset, the default setting is FILTERABLE_DISABLED for fields that support setting filterable options. When a field set to [FILTERABLE_DISABLED] is filtered, a warning is generated and an empty result is returned.
     */
    recsFilterableOption?: string | null;
    /**
     * If retrievable_option is RETRIEVABLE_ENABLED, field values are included in the search results. If retrievable_option is unset, the server behavior defaults to RETRIEVABLE_DISABLED for fields that support setting retrievable options. For those fields that do not support setting retrievable options, such as `object` and `boolean`, the server will skip retrievable option setting, and setting retrievable_option for those fields will throw `INVALID_ARGUMENT` error.
     */
    retrievableOption?: string | null;
    /**
     * If searchable_option is SEARCHABLE_ENABLED, field values are searchable by text queries in SearchService.Search. If SEARCHABLE_ENABLED but field type is numerical, field values will not be searchable by text queries in SearchService.Search, as there are no text values associated to numerical fields. If searchable_option is unset, the server behavior defaults to SEARCHABLE_DISABLED for fields that support setting searchable options. Only `string` fields that have no key property mapping support setting searchable_option. For those fields that do not support setting searchable options, the server will skip searchable option setting, and setting searchable_option for those fields will throw `INVALID_ARGUMENT` error.
     */
    searchableOption?: string | null;
  }
  /**
   * Identity Provider Config.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaIdpConfig {
    /**
     * External Identity provider config.
     */
    externalIdpConfig?: Schema$GoogleCloudDiscoveryengineV1alphaIdpConfigExternalIdpConfig;
    /**
     * Identity provider type configured.
     */
    idpType?: string | null;
  }
  /**
   * Third party IDP Config.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaIdpConfigExternalIdpConfig {
    /**
     * Workforce pool name. Example: "locations/global/workforcePools/pool_id"
     */
    workforcePoolName?: string | null;
  }
  /**
   * Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Total count of entries that were processed.
     */
    totalCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportDocumentsResponse {
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
  }
  /**
   * Configuration of destination for Import related errors.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig {
    /**
     * Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the ImportSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for CompletionService.ImportSuggestionDenyListEntries method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Count of deny list entries that failed to be imported.
     */
    failedEntriesCount?: string | null;
    /**
     * Count of deny list entries successfully imported.
     */
    importedEntriesCount?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportUserEventsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse {
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Count of user events imported with complete existing Documents.
     */
    joinedEventsCount?: string | null;
    /**
     * Count of user events imported, but with Document information not found in the existing Branch.
     */
    unjoinedEventsCount?: string | null;
  }
  /**
   * Response message for SearchTuningService.ListCustomModels method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaListCustomModelsResponse {
    /**
     * List of custom tuning models.
     */
    models?: Schema$GoogleCloudDiscoveryengineV1alphaCustomTuningModel[];
  }
  /**
   * Metadata and configurations for a Google Cloud project in the service.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaProject {
    /**
     * Output only. The timestamp when this project is created.
     */
    createTime?: string | null;
    /**
     * Output only. Full resource name of the project, for example `projects/{project_number\}`. Note that when making requests, project number and project id are both acceptable, but the server will always respond in project number.
     */
    name?: string | null;
    /**
     * Output only. The timestamp when this project is successfully provisioned. Empty value means this project is still provisioning and is not ready for use.
     */
    provisionCompletionTime?: string | null;
    /**
     * Output only. A map of terms of services. The key is the `id` of ServiceTerms.
     */
    serviceTermsMap?: {
      [
        key: string
      ]: Schema$GoogleCloudDiscoveryengineV1alphaProjectServiceTerms;
    } | null;
  }
  /**
   * Metadata about the terms of service.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaProjectServiceTerms {
    /**
     * The last time when the project agreed to the terms of service.
     */
    acceptTime?: string | null;
    /**
     * The last time when the project declined or revoked the agreement to terms of service.
     */
    declineTime?: string | null;
    /**
     * The unique identifier of this terms of service. Available terms: * `GA_DATA_USE_TERMS`: [Terms for data use](https://cloud.google.com/retail/data-use-terms). When using this as `id`, the acceptable version to provide is `2022-11-23`.
     */
    id?: string | null;
    /**
     * Whether the project has accepted/rejected the service terms or it is still pending.
     */
    state?: string | null;
    /**
     * The version string of the terms of service. For acceptable values, see the comments for id above.
     */
    version?: string | null;
  }
  /**
   * Metadata associated with a project provision operation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaProvisionProjectMetadata {}
  /**
   * Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were ignored as entries were not found.
     */
    ignoredCount?: string | null;
    /**
     * Count of entries that were deleted successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponse {
    /**
     * The total count of documents purged as a result of the operation.
     */
    purgeCount?: string | null;
    /**
     * A sample of document names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random.
     */
    purgeSample?: string[] | null;
  }
  /**
   * Metadata related to the progress of the PurgeSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeSuggestionDenyListEntriesMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for CompletionService.PurgeSuggestionDenyListEntries method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeSuggestionDenyListEntriesResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Number of suggestion deny list entries purged.
     */
    purgeCount?: string | null;
  }
  /**
   * Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeUserEventsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were deleted successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponse {
    /**
     * The total count of events purged as a result of the operation.
     */
    purgeCount?: string | null;
  }
  /**
   * Defines a user inputed query.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaQuery {
    /**
     * Unique Id for the query.
     */
    queryId?: string | null;
    /**
     * Plain text.
     */
    text?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.RecrawlUris operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Unique URIs in the request that don't match any TargetSite in the DataStore, only match TargetSites that haven't been fully indexed, or match a TargetSite with type EXCLUDE.
     */
    invalidUris?: string[] | null;
    /**
     * Total number of URIs that have yet to be crawled.
     */
    pendingCount?: number | null;
    /**
     * Total number of URIs that were rejected due to insufficient indexing resources.
     */
    quotaExceededCount?: number | null;
    /**
     * Total number of URIs that have been crawled so far.
     */
    successCount?: number | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
    /**
     * Total number of unique URIs in the request that are not in invalid_uris.
     */
    validUrisCount?: number | null;
  }
  /**
   * Response message for SiteSearchEngineService.RecrawlUris method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponse {
    /**
     * URIs that were not crawled before the LRO terminated.
     */
    failedUris?: string[] | null;
    /**
     * Details for a sample of up to 10 `failed_uris`.
     */
    failureSamples?: Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo[];
  }
  /**
   * Details about why a particular URI failed to be crawled. Each FailureInfo contains one FailureReason per CorpusType.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo {
    /**
     * List of failure reasons by corpus type (e.g. desktop, mobile).
     */
    failureReasons?: Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason[];
    /**
     * URI that failed to be crawled.
     */
    uri?: string | null;
  }
  /**
   * Details about why crawling failed for a particular CorpusType, e.g., DESKTOP and MOBILE crawling may fail for different reasons.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason {
    /**
     * DESKTOP, MOBILE, or CORPUS_TYPE_UNSPECIFIED.
     */
    corpusType?: string | null;
    /**
     * Reason why the URI was not crawled.
     */
    errorMessage?: string | null;
  }
  /**
   * Defines the structure and layout of a type of document data.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSchema {
    /**
     * Output only. Configurations for fields of the schema.
     */
    fieldConfigs?: Schema$GoogleCloudDiscoveryengineV1alphaFieldConfig[];
    /**
     * The JSON representation of the schema.
     */
    jsonSchema?: string | null;
    /**
     * Immutable. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The structured representation of the schema.
     */
    structSchema?: {[key: string]: any} | null;
  }
  /**
   * External session proto definition.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSession {
    /**
     * Output only. The time the session finished.
     */
    endTime?: string | null;
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/engines/{engine\}/sessions/x`
     */
    name?: string | null;
    /**
     * Output only. The time the session started.
     */
    startTime?: string | null;
    /**
     * The state of the session.
     */
    state?: string | null;
    /**
     * Turns.
     */
    turns?: Schema$GoogleCloudDiscoveryengineV1alphaSessionTurn[];
    /**
     * A unique identifier for tracking users.
     */
    userPseudoId?: string | null;
  }
  /**
   * Represents a turn, including a query from the user and a answer from service.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSessionTurn {
    /**
     * The resource name of the answer to the user query.
     */
    answer?: string | null;
    /**
     * The user query.
     */
    query?: Schema$GoogleCloudDiscoveryengineV1alphaQuery;
  }
  /**
   * Verification information for target sites in advanced site search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo {
    /**
     * Site verification state indicating the ownership and validity.
     */
    siteVerificationState?: string | null;
    /**
     * Latest site verification time.
     */
    verifyTime?: string | null;
  }
  /**
   * A target site for the SiteSearchEngine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTargetSite {
    /**
     * Input only. If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. If set to true, an uri_pattern is generated to try to be an exact match of the provided_uri_pattern or just the specific page if the provided_uri_pattern is a specific one. provided_uri_pattern is always normalized to generate the URI pattern to be used by the search engine.
     */
    exactMatch?: boolean | null;
    /**
     * Output only. Failure reason.
     */
    failureReason?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReason;
    /**
     * Output only. This is system-generated based on the provided_uri_pattern.
     */
    generatedUriPattern?: string | null;
    /**
     * Output only. Indexing status.
     */
    indexingStatus?: string | null;
    /**
     * Output only. The fully qualified resource name of the target site. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}` The `target_site_id` is system-generated.
     */
    name?: string | null;
    /**
     * Required. Input only. The user provided URI pattern from which the `generated_uri_pattern` is generated.
     */
    providedUriPattern?: string | null;
    /**
     * Output only. Root domain of the provided_uri_pattern.
     */
    rootDomainUri?: string | null;
    /**
     * Output only. Site ownership and validity verification status.
     */
    siteVerificationInfo?: Schema$GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo;
    /**
     * The type of the target site, e.g., whether the site is to be included or excluded.
     */
    type?: string | null;
    /**
     * Output only. The target site's last updated time.
     */
    updateTime?: string | null;
  }
  /**
   * Site search indexing failure reasons.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReason {
    /**
     * Failed due to insufficient quota.
     */
    quotaFailure?: Schema$GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonQuotaFailure;
  }
  /**
   * Failed due to insufficient quota.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonQuotaFailure {
    /**
     * This number is an estimation on how much total quota this project needs to successfully complete indexing.
     */
    totalRequiredQuota?: string | null;
  }
  /**
   * Metadata related to the progress of the TrainCustomModel operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTrainCustomModelMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the TrainCustomModelRequest. This message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponse {
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the data.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * The metrics of the trained model.
     */
    metrics?: {[key: string]: number} | null;
    /**
     * Fully qualified name of the CustomTuningModel.
     */
    modelName?: string | null;
    /**
     * The trained model status. Possible values are: * **bad-data**: The training data quality is bad. * **no-improvement**: Tuning didn't improve performance. Won't deploy. * **in-progress**: Model training job creation is in progress. * **training**: Model is actively training. * **evaluating**: The model is evaluating trained metrics. * **indexing**: The model trained metrics are indexing. * **ready**: The model is ready for serving.
     */
    modelStatus?: string | null;
  }
  /**
   * Metadata associated with a tune operation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTuneEngineMetadata {
    /**
     * Required. The resource name of the engine that this tune applies to. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/engines/{engine_id\}`
     */
    engine?: string | null;
  }
  /**
   * Response associated with a tune operation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaTuneEngineResponse {}
  /**
   * Metadata for UpdateSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaUpdateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.UpdateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1alphaUpdateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.BatchCreateTargetSites operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1BatchCreateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for SiteSearchEngineService.BatchCreateTargetSites method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1BatchCreateTargetSitesResponse {
    /**
     * TargetSites created.
     */
    targetSites?: Schema$GoogleCloudDiscoveryengineV1TargetSite[];
  }
  /**
   * Defines an answer.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswer {
    /**
     * Additional answer-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set.
     */
    answerSkippedReasons?: string[] | null;
    /**
     * The textual answer.
     */
    answerText?: string | null;
    /**
     * Citations.
     */
    citations?: Schema$GoogleCloudDiscoveryengineV1betaAnswerCitation[];
    /**
     * Output only. Answer completed timestamp.
     */
    completeTime?: string | null;
    /**
     * Output only. Answer creation timestamp.
     */
    createTime?: string | null;
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/engines/{engine\}/sessions/x/answers/x`
     */
    name?: string | null;
    /**
     * Query understanding information.
     */
    queryUnderstandingInfo?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryUnderstandingInfo;
    /**
     * References.
     */
    references?: Schema$GoogleCloudDiscoveryengineV1betaAnswerReference[];
    /**
     * Suggested related questions.
     */
    relatedQuestions?: string[] | null;
    /**
     * The state of the answer generation.
     */
    state?: string | null;
    /**
     * Answer generation steps.
     */
    steps?: Schema$GoogleCloudDiscoveryengineV1betaAnswerStep[];
  }
  /**
   * Citation info for a segment.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerCitation {
    /**
     * End of the attributed segment, exclusive.
     */
    endIndex?: string | null;
    /**
     * Citation sources for the attributed segment.
     */
    sources?: Schema$GoogleCloudDiscoveryengineV1betaAnswerCitationSource[];
    /**
     * Index indicates the start of the segment, measured in bytes (UTF-8 unicode).
     */
    startIndex?: string | null;
  }
  /**
   * Citation source.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerCitationSource {
    /**
     * ID of the citation source.
     */
    referenceId?: string | null;
  }
  /**
   * Request message for ConversationalSearchService.AnswerQuery method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequest {
    /**
     * Answer generation specification.
     */
    answerGenerationSpec?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestAnswerGenerationSpec;
    /**
     * Asynchronous mode control. If enabled, the response will be returned with answer/session resource name without final answer. The API users need to do the polling to get the latest status of answer/session by calling ConversationalSearchService.GetAnswer or ConversationalSearchService.GetSession method.
     */
    asynchronousMode?: boolean | null;
    /**
     * Required. Current user query.
     */
    query?: Schema$GoogleCloudDiscoveryengineV1betaQuery;
    /**
     * Query understanding specification.
     */
    queryUnderstandingSpec?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestQueryUnderstandingSpec;
    /**
     * Related questions specification.
     */
    relatedQuestionsSpec?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestRelatedQuestionsSpec;
    /**
     * Model specification.
     */
    safetySpec?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSafetySpec;
    /**
     * Search specification.
     */
    searchSpec?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpec;
    /**
     * The session resource name. Not required. When session field is not set, the API is in sessionless mode. We support auto session mode: users can use the wildcard symbol “-” as session id. A new id will be automatically generated and assigned.
     */
    session?: string | null;
    /**
     * A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    userPseudoId?: string | null;
  }
  /**
   * Answer generation specification.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestAnswerGenerationSpec {
    /**
     * Language code for Answer. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature.
     */
    answerLanguageCode?: string | null;
    /**
     * Specifies whether to filter out adversarial queries. The default value is `false`. Google employs search-query classification to detect adversarial queries. No answer is returned if the search query is classified as an adversarial query. For example, a user might ask a question regarding negative comments about the company or submit a query designed to generate unsafe, policy-violating output. If this field is set to `true`, we skip generating answers for adversarial queries and return fallback messages instead.
     */
    ignoreAdversarialQuery?: boolean | null;
    /**
     * Specifies whether to filter out queries that are not answer-seeking. The default value is `false`. Google employs search-query classification to detect answer-seeking queries. No answer is returned if the search query is classified as a non-answer seeking query. If this field is set to `true`, we skip generating answers for non-answer seeking queries and return fallback messages instead.
     */
    ignoreNonAnswerSeekingQuery?: boolean | null;
    /**
     * Specifies whether to include citation metadata in the answer. The default value is `false`.
     */
    includeCitations?: boolean | null;
    /**
     * Answer generation model specification.
     */
    modelSpec?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestAnswerGenerationSpecModelSpec;
    /**
     * Answer generation prompt specification.
     */
    promptSpec?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestAnswerGenerationSpecPromptSpec;
  }
  /**
   * Answer Generation Model specification.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestAnswerGenerationSpecModelSpec {
    /**
     * Model version. If not set, it will use the default stable model. Allowed values are: stable, preview.
     */
    modelVersion?: string | null;
  }
  /**
   * Answer generation prompt specification.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestAnswerGenerationSpecPromptSpec {
    /**
     * Customized preamble.
     */
    preamble?: string | null;
  }
  /**
   * Query understanding specification.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestQueryUnderstandingSpec {
    /**
     * Query classification specification.
     */
    queryClassificationSpec?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestQueryUnderstandingSpecQueryClassificationSpec;
    /**
     * Query rephraser specification.
     */
    queryRephraserSpec?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestQueryUnderstandingSpecQueryRephraserSpec;
  }
  /**
   * Query classification specification.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestQueryUnderstandingSpecQueryClassificationSpec {
    /**
     * Enabled query classification types.
     */
    types?: string[] | null;
  }
  /**
   * Query rephraser specification.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestQueryUnderstandingSpecQueryRephraserSpec {
    /**
     * Disable query rephraser.
     */
    disable?: boolean | null;
    /**
     * Max rephrase steps. The max number is 5 steps. If not set or set to < 1, it will be set to 1 by default.
     */
    maxRephraseSteps?: number | null;
  }
  /**
   * Related questions specification.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestRelatedQuestionsSpec {
    /**
     * Enable related questions feature if true.
     */
    enable?: boolean | null;
  }
  /**
   * Safety specification.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSafetySpec {
    /**
     * Enable the safety filtering on the answer response. It is false by default.
     */
    enable?: boolean | null;
  }
  /**
   * Search specification.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpec {
    /**
     * Search parameters.
     */
    searchParams?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchParams;
    /**
     * Search result list.
     */
    searchResultList?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultList;
  }
  /**
   * Search parameters.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchParams {
    /**
     * Boost specification to boost certain documents in search results which may affect the answer query response. For more information on boosting, see [Boosting](https://cloud.google.com/retail/docs/boosting#boost)
     */
    boostSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec;
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. This will be used to filter search results which may affect the Answer response. If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customers might have a field 'name' in their schema. In this case the filter would look like this: filter --\> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata)
     */
    filter?: string | null;
    /**
     * Number of search results to return. The default value is 10.
     */
    maxReturnResults?: number | null;
    /**
     * The order in which documents are returned. Documents can be ordered by a field in an Document object. Leave it unset if ordered by relevance. `order_by` expression is case-sensitive. For more information on ordering, see [Ordering](https://cloud.google.com/retail/docs/filter-and-order#order) If this field is unrecognizable, an `INVALID_ARGUMENT` is returned.
     */
    orderBy?: string | null;
  }
  /**
   * Search result list.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultList {
    /**
     * Search results.
     */
    searchResults?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResult[];
  }
  /**
   * Search result.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResult {
    /**
     * Chunk information.
     */
    chunkInfo?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResultChunkInfo;
    /**
     * Unstructured document information.
     */
    unstructuredDocumentInfo?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResultUnstructuredDocumentInfo;
  }
  /**
   * Chunk information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResultChunkInfo {
    /**
     * Chunk resource name.
     */
    chunk?: string | null;
    /**
     * Chunk textual content.
     */
    content?: string | null;
  }
  /**
   * Unstructured document information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResultUnstructuredDocumentInfo {
    /**
     * Document resource name.
     */
    document?: string | null;
    /**
     * List of document contexts.
     */
    documentContexts?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResultUnstructuredDocumentInfoDocumentContext[];
    /**
     * List of extractive answers.
     */
    extractiveAnswers?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResultUnstructuredDocumentInfoExtractiveAnswer[];
    /**
     * List of extractive segments.
     */
    extractiveSegments?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResultUnstructuredDocumentInfoExtractiveSegment[];
    /**
     * Title.
     */
    title?: string | null;
    /**
     * URI for the document.
     */
    uri?: string | null;
  }
  /**
   * Document context.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResultUnstructuredDocumentInfoDocumentContext {
    /**
     * Document content.
     */
    content?: string | null;
    /**
     * Page identifier.
     */
    pageIdentifier?: string | null;
  }
  /**
   * Extractive answer. [Guide](https://cloud.google.com/generative-ai-app-builder/docs/snippets#get-answers)
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResultUnstructuredDocumentInfoExtractiveAnswer {
    /**
     * Extractive answer content.
     */
    content?: string | null;
    /**
     * Page identifier.
     */
    pageIdentifier?: string | null;
  }
  /**
   * Extractive segment. [Guide](https://cloud.google.com/generative-ai-app-builder/docs/snippets#extractive-segments)
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequestSearchSpecSearchResultListSearchResultUnstructuredDocumentInfoExtractiveSegment {
    /**
     * Extractive segment content.
     */
    content?: string | null;
    /**
     * Page identifier.
     */
    pageIdentifier?: string | null;
  }
  /**
   * Response message for ConversationalSearchService.AnswerQuery method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse {
    /**
     * Answer resource object. If AnswerQueryRequest.StepSpec.max_step_count is greater than 1, use Answer.name to fetch answer information using ConversationalSearchService.GetAnswer API.
     */
    answer?: Schema$GoogleCloudDiscoveryengineV1betaAnswer;
    /**
     * A global unique ID used for logging.
     */
    answerQueryToken?: string | null;
    /**
     * Session resource object. It will be only available when session field is set and valid in the AnswerQueryRequest request.
     */
    session?: Schema$GoogleCloudDiscoveryengineV1betaSession;
  }
  /**
   * Query understanding information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryUnderstandingInfo {
    /**
     * Query classification information.
     */
    queryClassificationInfo?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryUnderstandingInfoQueryClassificationInfo[];
  }
  /**
   * Query classification information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryUnderstandingInfoQueryClassificationInfo {
    /**
     * Classification output.
     */
    positive?: boolean | null;
    /**
     * Query classification type.
     */
    type?: string | null;
  }
  /**
   * Reference.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerReference {
    /**
     * Chunk information.
     */
    chunkInfo?: Schema$GoogleCloudDiscoveryengineV1betaAnswerReferenceChunkInfo;
    /**
     * Unstructured document information.
     */
    unstructuredDocumentInfo?: Schema$GoogleCloudDiscoveryengineV1betaAnswerReferenceUnstructuredDocumentInfo;
  }
  /**
   * Chunk information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerReferenceChunkInfo {
    /**
     * Chunk resource name.
     */
    chunk?: string | null;
    /**
     * Chunk textual content.
     */
    content?: string | null;
    /**
     * Document metadata.
     */
    documentMetadata?: Schema$GoogleCloudDiscoveryengineV1betaAnswerReferenceChunkInfoDocumentMetadata;
    /**
     * Relevance score.
     */
    relevanceScore?: number | null;
  }
  /**
   * Document metadata.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerReferenceChunkInfoDocumentMetadata {
    /**
     * Document resource name.
     */
    document?: string | null;
    /**
     * Page identifier.
     */
    pageIdentifier?: string | null;
    /**
     * Title.
     */
    title?: string | null;
    /**
     * URI for the document.
     */
    uri?: string | null;
  }
  /**
   * Unstructured document information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerReferenceUnstructuredDocumentInfo {
    /**
     * List of cited chunk contents derived from document content.
     */
    chunkContents?: Schema$GoogleCloudDiscoveryengineV1betaAnswerReferenceUnstructuredDocumentInfoChunkContent[];
    /**
     * Document resource name.
     */
    document?: string | null;
    /**
     * Title.
     */
    title?: string | null;
    /**
     * URI for the document.
     */
    uri?: string | null;
  }
  /**
   * Chunk content.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerReferenceUnstructuredDocumentInfoChunkContent {
    /**
     * Chunk textual content.
     */
    content?: string | null;
    /**
     * Page identifier.
     */
    pageIdentifier?: string | null;
  }
  /**
   * Step information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerStep {
    /**
     * Actions.
     */
    actions?: Schema$GoogleCloudDiscoveryengineV1betaAnswerStepAction[];
    /**
     * The description of the step.
     */
    description?: string | null;
    /**
     * The state of the step.
     */
    state?: string | null;
    /**
     * The thought of the step.
     */
    thought?: string | null;
  }
  /**
   * Action.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerStepAction {
    /**
     * Observation.
     */
    observation?: Schema$GoogleCloudDiscoveryengineV1betaAnswerStepActionObservation;
    /**
     * Search action.
     */
    searchAction?: Schema$GoogleCloudDiscoveryengineV1betaAnswerStepActionSearchAction;
  }
  /**
   * Observation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerStepActionObservation {
    /**
     * Search results observed by the search action, it can be snippets info or chunk info, depending on the citation type set by the user.
     */
    searchResults?: Schema$GoogleCloudDiscoveryengineV1betaAnswerStepActionObservationSearchResult[];
  }
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerStepActionObservationSearchResult {
    /**
     * If citation_type is CHUNK_LEVEL_CITATION and chunk mode is on, populate chunk info.
     */
    chunkInfo?: Schema$GoogleCloudDiscoveryengineV1betaAnswerStepActionObservationSearchResultChunkInfo[];
    /**
     * Document resource name.
     */
    document?: string | null;
    /**
     * If citation_type is DOCUMENT_LEVEL_CITATION, populate document level snippets.
     */
    snippetInfo?: Schema$GoogleCloudDiscoveryengineV1betaAnswerStepActionObservationSearchResultSnippetInfo[];
    /**
     * Title.
     */
    title?: string | null;
    /**
     * URI for the document.
     */
    uri?: string | null;
  }
  /**
   * Chunk information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerStepActionObservationSearchResultChunkInfo {
    /**
     * Chunk resource name.
     */
    chunk?: string | null;
    /**
     * Chunk textual content.
     */
    content?: string | null;
    /**
     * Relevance score.
     */
    relevanceScore?: number | null;
  }
  /**
   * Snippet information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerStepActionObservationSearchResultSnippetInfo {
    /**
     * Snippet content.
     */
    snippet?: string | null;
    /**
     * Status of the snippet defined by the search team.
     */
    snippetStatus?: string | null;
  }
  /**
   * Search action.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaAnswerStepActionSearchAction {
    /**
     * The query to search.
     */
    query?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.BatchCreateTargetSites operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaBatchCreateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for SiteSearchEngineService.BatchCreateTargetSites method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesRequest {
    /**
     * Required. The request message specifying the resources to create. A maximum of 20 TargetSites can be created in a batch.
     */
    requests?: Schema$GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest[];
  }
  /**
   * Response message for SiteSearchEngineService.BatchCreateTargetSites method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesResponse {
    /**
     * TargetSites created.
     */
    targetSites?: Schema$GoogleCloudDiscoveryengineV1betaTargetSite[];
  }
  /**
   * Request message for SiteSearchEngineService.BatchVerifyTargetSites method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaBatchVerifyTargetSitesRequest {}
  /**
   * BigQuery source import data from.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaBigQuerySource {
    /**
     * The schema to use when parsing the data from the source. Supported values for user event imports: * `user_event` (default): One UserEvent per row. Supported values for document imports: * `document` (default): One Document format per row. Each document must have a valid Document.id and one of Document.json_data or Document.struct_data. * `custom`: One custom data per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by the GENERIC Data Store vertical.
     */
    dataSchema?: string | null;
    /**
     * Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.
     */
    datasetId?: string | null;
    /**
     * Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.
     */
    gcsStagingDir?: string | null;
    /**
     * BigQuery time partitioned table's _PARTITIONDATE in YYYY-MM-DD format.
     */
    partitionDate?: Schema$GoogleTypeDate;
    /**
     * The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.
     */
    projectId?: string | null;
    /**
     * Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.
     */
    tableId?: string | null;
  }
  /**
   * The Bigtable Options object that contains information to support the import.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaBigtableOptions {
    /**
     * The mapping from family names to an object that contains column families level information for the given column family. If a family is not present in this map it will be ignored.
     */
    families?: {
      [
        key: string
      ]: Schema$GoogleCloudDiscoveryengineV1betaBigtableOptionsBigtableColumnFamily;
    } | null;
    /**
     * The field name used for saving row key value in the document. The name has to match the pattern `a-zA-Z0-9*`.
     */
    keyFieldName?: string | null;
  }
  /**
   * The column of the Bigtable.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaBigtableOptionsBigtableColumn {
    /**
     * The encoding mode of the values when the type is not `STRING`. Acceptable encoding values are: * `TEXT`: indicates values are alphanumeric text strings. * `BINARY`: indicates values are encoded using `HBase Bytes.toBytes` family of functions. This can be overridden for a specific column by listing that column in `columns` and specifying an encoding for it.
     */
    encoding?: string | null;
    /**
     * The field name to use for this column in the document. The name has to match the pattern `a-zA-Z0-9*`. If not set, it is parsed from the qualifier bytes with best effort. However, due to different naming patterns, field name collisions could happen, where parsing behavior is undefined.
     */
    fieldName?: string | null;
    /**
     * Required. Qualifier of the column. If it cannot be decoded with utf-8, use a base-64 encoded string instead.
     */
    qualifier?: string | null;
    /**
     * The type of values in this column family. The values are expected to be encoded using `HBase Bytes.toBytes` function when the encoding value is set to `BINARY`.
     */
    type?: string | null;
  }
  /**
   * The column family of the Bigtable.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaBigtableOptionsBigtableColumnFamily {
    /**
     * The list of objects that contains column level information for each column. If a column is not present in this list it will be ignored.
     */
    columns?: Schema$GoogleCloudDiscoveryengineV1betaBigtableOptionsBigtableColumn[];
    /**
     * The encoding mode of the values when the type is not STRING. Acceptable encoding values are: * `TEXT`: indicates values are alphanumeric text strings. * `BINARY`: indicates values are encoded using `HBase Bytes.toBytes` family of functions. This can be overridden for a specific column by listing that column in `columns` and specifying an encoding for it.
     */
    encoding?: string | null;
    /**
     * The field name to use for this column family in the document. The name has to match the pattern `a-zA-Z0-9*`. If not set, it is parsed from the family name with best effort. However, due to different naming patterns, field name collisions could happen, where parsing behavior is undefined.
     */
    fieldName?: string | null;
    /**
     * The type of values in this column family. The values are expected to be encoded using `HBase Bytes.toBytes` function when the encoding value is set to `BINARY`.
     */
    type?: string | null;
  }
  /**
   * The Cloud Bigtable source for importing data.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaBigtableSource {
    /**
     * Required. Bigtable options that contains information needed when parsing data into typed structures. For example, column type annotations.
     */
    bigtableOptions?: Schema$GoogleCloudDiscoveryengineV1betaBigtableOptions;
    /**
     * Required. The instance ID of the Cloud Bigtable that needs to be imported.
     */
    instanceId?: string | null;
    /**
     * The project ID that the Bigtable source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.
     */
    projectId?: string | null;
    /**
     * Required. The table ID of the Cloud Bigtable that needs to be imported.
     */
    tableId?: string | null;
  }
  /**
   * Request message for GroundedGenerationService.CheckGrounding method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingRequest {
    /**
     * Answer candidate to check. Can have a maximum length of 1024 characters.
     */
    answerCandidate?: string | null;
    /**
     * List of facts for the grounding check. We support up to 200 facts.
     */
    facts?: Schema$GoogleCloudDiscoveryengineV1betaGroundingFact[];
    /**
     * Configuration of the grounding check.
     */
    groundingSpec?: Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingSpec;
    /**
     * The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.
     */
    userLabels?: {[key: string]: string} | null;
  }
  /**
   * Response message for the GroundedGenerationService.CheckGrounding method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse {
    /**
     * List of facts cited across all claims in the answer candidate. These are derived from the facts supplied in the request.
     */
    citedChunks?: Schema$GoogleCloudDiscoveryengineV1betaFactChunk[];
    /**
     * Claim texts and citation info across all claims in the answer candidate.
     */
    claims?: Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponseClaim[];
    /**
     * The support score for the input answer candidate. Higher the score, higher is the fraction of claims that are supported by the provided facts. This is always set when a response is returned.
     */
    supportScore?: number | null;
  }
  /**
   * Text and citation info for a claim in the answer candidate.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponseClaim {
    /**
     * A list of indices (into 'cited_chunks') specifying the citations associated with the claim. For instance [1,3,4] means that cited_chunks[1], cited_chunks[3], cited_chunks[4] are the facts cited supporting for the claim. A citation to a fact indicates that the claim is supported by the fact.
     */
    citationIndices?: number[] | null;
    /**
     * Text for the claim in the answer candidate. Always provided regardless of whether citations or anti-citations are found.
     */
    claimText?: string | null;
    /**
     * Position indicating the end of the claim in the answer candidate, exclusive.
     */
    endPos?: number | null;
    /**
     * Indicates that this claim required grounding check. When the system decided this claim doesn't require attribution/grounding check, this field will be set to false. In that case, no grounding check was done for the claim and therefore citation_indices, and anti_citation_indices should not be returned.
     */
    groundingCheckRequired?: boolean | null;
    /**
     * Position indicating the start of the claim in the answer candidate, measured in bytes.
     */
    startPos?: number | null;
  }
  /**
   * Specification for the grounding check.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingSpec {
    /**
     * The threshold (in [0,1]) used for determining whether a fact must be cited for a claim in the answer candidate. Choosing a higher threshold will lead to fewer but very strong citations, while choosing a lower threshold may lead to more but somewhat weaker citations. If unset, the threshold will default to 0.6.
     */
    citationThreshold?: number | null;
  }
  /**
   * Cloud SQL source import data from.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCloudSqlSource {
    /**
     * Required. The Cloud SQL database to copy the data from with a length limit of 256 characters.
     */
    databaseId?: string | null;
    /**
     * Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the Cloud SQL export to a specific Cloud Storage directory. Ensure that the Cloud SQL service account has the necessary Cloud Storage Admin permissions to access the specified Cloud Storage directory.
     */
    gcsStagingDir?: string | null;
    /**
     * Required. The Cloud SQL instance to copy the data from with a length limit of 256 characters.
     */
    instanceId?: string | null;
    /**
     * Option for serverless export. Enabling this option will incur additional cost. More info can be found [here](https://cloud.google.com/sql/pricing#serverless).
     */
    offload?: boolean | null;
    /**
     * The project ID that the Cloud SQL source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.
     */
    projectId?: string | null;
    /**
     * Required. The Cloud SQL table to copy the data from with a length limit of 256 characters.
     */
    tableId?: string | null;
  }
  /**
   * Response message for CompletionService.CompleteQuery method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse {
    /**
     * Results of the matched query suggestions. The result list is ordered and the first result is a top suggestion.
     */
    querySuggestions?: Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion[];
    /**
     * True if the returned suggestions are all tail suggestions. For tail matching to be triggered, include_tail_suggestions in the request must be true and there must be no suggestions that match the full query.
     */
    tailMatchTriggered?: boolean | null;
  }
  /**
   * Suggestions as search queries.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion {
    /**
     * The unique document field paths that serve as the source of this suggestion if it was generated from completable fields. This field is only populated for the document-completable model.
     */
    completableFieldPaths?: string[] | null;
    /**
     * The suggestion for the query.
     */
    suggestion?: string | null;
  }
  /**
   * Detailed completion information including completion attribution token and clicked completion info.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCompletionInfo {
    /**
     * End user selected CompleteQueryResponse.QuerySuggestion.suggestion position, starting from 0.
     */
    selectedPosition?: number | null;
    /**
     * End user selected CompleteQueryResponse.QuerySuggestion.suggestion.
     */
    selectedSuggestion?: string | null;
  }
  /**
   * External conversation proto definition.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaConversation {
    /**
     * Output only. The time the conversation finished.
     */
    endTime?: string | null;
    /**
     * Conversation messages.
     */
    messages?: Schema$GoogleCloudDiscoveryengineV1betaConversationMessage[];
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/dataStore/x/conversations/x` or `projects/{project\}/locations/global/collections/{collection\}/engines/x/conversations/x`.
     */
    name?: string | null;
    /**
     * Output only. The time the conversation started.
     */
    startTime?: string | null;
    /**
     * The state of the Conversation.
     */
    state?: string | null;
    /**
     * A unique identifier for tracking users.
     */
    userPseudoId?: string | null;
  }
  /**
   * Defines context of the conversation
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaConversationContext {
    /**
     * The current active document the user opened. It contains the document resource reference.
     */
    activeDocument?: string | null;
    /**
     * The current list of documents the user is seeing. It contains the document resource references.
     */
    contextDocuments?: string[] | null;
  }
  /**
   * Defines a conversation message.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaConversationMessage {
    /**
     * Output only. Message creation timestamp.
     */
    createTime?: string | null;
    /**
     * Search reply.
     */
    reply?: Schema$GoogleCloudDiscoveryengineV1betaReply;
    /**
     * User text input.
     */
    userInput?: Schema$GoogleCloudDiscoveryengineV1betaTextInput;
  }
  /**
   * Request message for ConversationalSearchService.ConverseConversation method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaConverseConversationRequest {
    /**
     * Boost specification to boost certain documents in search results which may affect the converse response. For more information on boosting, see [Boosting](https://cloud.google.com/retail/docs/boosting#boost)
     */
    boostSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec;
    /**
     * The conversation to be used by auto session only. The name field will be ignored as we automatically assign new name for the conversation in auto session.
     */
    conversation?: Schema$GoogleCloudDiscoveryengineV1betaConversation;
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. This will be used to filter search results which may affect the summary response. If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field 'name' in their schema. In this case the filter would look like this: filter --\> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata)
     */
    filter?: string | null;
    /**
     * Required. Current user input.
     */
    query?: Schema$GoogleCloudDiscoveryengineV1betaTextInput;
    /**
     * Whether to turn on safe search.
     */
    safeSearch?: boolean | null;
    /**
     * The resource name of the Serving Config to use. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/servingConfigs/{serving_config_id\}` If this is not set, the default serving config will be used.
     */
    servingConfig?: string | null;
    /**
     * A specification for configuring the summary returned in the response.
     */
    summarySpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpec;
    /**
     * The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.
     */
    userLabels?: {[key: string]: string} | null;
  }
  /**
   * Response message for ConversationalSearchService.ConverseConversation method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse {
    /**
     * Updated conversation including the answer.
     */
    conversation?: Schema$GoogleCloudDiscoveryengineV1betaConversation;
    /**
     * Suggested related questions.
     */
    relatedQuestions?: string[] | null;
    /**
     * Answer to the current query.
     */
    reply?: Schema$GoogleCloudDiscoveryengineV1betaReply;
    /**
     * Search Results.
     */
    searchResults?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult[];
  }
  /**
   * Metadata related to the progress of the DataStoreService.CreateDataStore operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCreateDataStoreMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the EngineService.CreateEngine operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCreateEngineMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for Create Schema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCreateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.CreateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCreateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for SiteSearchEngineService.CreateTargetSite method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest {
    /**
     * Required. Parent resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`.
     */
    parent?: string | null;
    /**
     * Required. The TargetSite to create.
     */
    targetSite?: Schema$GoogleCloudDiscoveryengineV1betaTargetSite;
  }
  /**
   * A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCustomAttribute {
    /**
     * The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". Exactly one of CustomAttribute.text or CustomAttribute.numbers should be set. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    numbers?: number[] | null;
    /**
     * The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". Empty string is not allowed. Otherwise, an `INVALID_ARGUMENT` error is returned. Exactly one of CustomAttribute.text or CustomAttribute.numbers should be set. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    text?: string[] | null;
  }
  /**
   * Metadata that describes a custom tuned model.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaCustomTuningModel {
    /**
     * Timestamp the Model was created at.
     */
    createTime?: string | null;
    /**
     * The display name of the model.
     */
    displayName?: string | null;
    /**
     * The state that the model is in (e.g.`TRAINING` or `TRAINING_FAILED`).
     */
    modelState?: string | null;
    modelVersion?: string | null;
    /**
     * Required. The fully qualified resource name of the model. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/customTuningModels/{custom_tuning_model\}` model must be an alpha-numerical string with limit of 40 characters.
     */
    name?: string | null;
    /**
     * Timestamp the model training was initiated.
     */
    trainingStartTime?: string | null;
  }
  /**
   * DataStore captures global settings and configs at the DataStore level.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDataStore {
    /**
     * Immutable. The content config of the data store. If this field is unset, the server behavior defaults to ContentConfig.NO_CONTENT.
     */
    contentConfig?: string | null;
    /**
     * Output only. Timestamp the DataStore was created at.
     */
    createTime?: string | null;
    /**
     * Output only. The id of the default Schema asscociated to this data store.
     */
    defaultSchemaId?: string | null;
    /**
     * Required. The data store display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    displayName?: string | null;
    /**
     * Configuration for Document understanding and enrichment.
     */
    documentProcessingConfig?: Schema$GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig;
    /**
     * Immutable. The industry vertical that the data store registers.
     */
    industryVertical?: string | null;
    /**
     * Immutable. The full resource name of the data store. Format: `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The solutions that the data store enrolls. Available solutions for each industry_vertical: * `MEDIA`: `SOLUTION_TYPE_RECOMMENDATION` and `SOLUTION_TYPE_SEARCH`. * `SITE_SEARCH`: `SOLUTION_TYPE_SEARCH` is automatically enrolled. Other solutions cannot be enrolled.
     */
    solutionTypes?: string[] | null;
    /**
     * The start schema to use for this DataStore when provisioning it. If unset, a default vertical specialized schema will be used. This field is only used by CreateDataStore API, and will be ignored if used in other APIs. This field will be omitted from all API responses including CreateDataStore API. To retrieve a schema of a DataStore, use SchemaService.GetSchema API instead. The provided schema will be validated against certain rules on schema. Learn more from [this doc](https://cloud.google.com/generative-ai-app-builder/docs/provide-schema).
     */
    startingSchema?: Schema$GoogleCloudDiscoveryengineV1betaSchema;
  }
  /**
   * Metadata related to the progress of the DataStoreService.DeleteDataStore operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDeleteDataStoreMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the EngineService.DeleteEngine operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDeleteEngineMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for DeleteSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDeleteSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.DeleteTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDeleteTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.DisableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDisableAdvancedSiteSearchMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for SiteSearchEngineService.DisableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDisableAdvancedSiteSearchRequest {}
  /**
   * Response message for SiteSearchEngineService.DisableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDisableAdvancedSiteSearchResponse {}
  /**
   * Document captures all raw metadata information of items to be recommended or searched.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDocument {
    /**
     * The unstructured data linked to this document. Content must be set if this document is under a `CONTENT_REQUIRED` data store.
     */
    content?: Schema$GoogleCloudDiscoveryengineV1betaDocumentContent;
    /**
     * Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document.
     */
    derivedStructData?: {[key: string]: any} | null;
    /**
     * Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    id?: string | null;
    /**
     * Output only. The last time the document was indexed. If this field is set, the document could be returned in search results. This field is OUTPUT_ONLY. If this field is not populated, it means the document has never been indexed.
     */
    indexTime?: string | null;
    /**
     * The JSON string representation of the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.
     */
    jsonData?: string | null;
    /**
     * Immutable. The full resource name of the document. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    parentDocumentId?: string | null;
    /**
     * The identifier of the schema located in the same data store.
     */
    schemaId?: string | null;
    /**
     * The structured JSON data for the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown.
     */
    structData?: {[key: string]: any} | null;
  }
  /**
   * Unstructured data linked to this document.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDocumentContent {
    /**
     * The MIME type of the content. Supported types: * `application/pdf` (PDF, only native PDFs are supported for now) * `text/html` (HTML) * `application/vnd.openxmlformats-officedocument.wordprocessingml.document` (DOCX) * `application/vnd.openxmlformats-officedocument.presentationml.presentation` (PPTX) * `text/plain` (TXT) See https://www.iana.org/assignments/media-types/media-types.xhtml.
     */
    mimeType?: string | null;
    /**
     * The content represented as a stream of bytes. The maximum length is 1,000,000 bytes (1 MB / ~0.95 MiB). Note: As with all `bytes` fields, this field is represented as pure binary in Protocol Buffers and base64-encoded string in JSON. For example, `abc123!?$*&()'-=@~` should be represented as `YWJjMTIzIT8kKiYoKSctPUB+` in JSON. See https://developers.google.com/protocol-buffers/docs/proto3#json.
     */
    rawBytes?: string | null;
    /**
     * The URI of the content. Only Cloud Storage URIs (e.g. `gs://bucket-name/path/to/file`) are supported. The maximum file size is 2.5 MB for text-based formats, 100 MB for other formats.
     */
    uri?: string | null;
  }
  /**
   * Detailed document information associated with a user event.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDocumentInfo {
    /**
     * The Document resource ID.
     */
    id?: string | null;
    /**
     * The Document resource full name, of the form: `projects/{project_id\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}/branches/{branch_id\}/documents/{document_id\}`
     */
    name?: string | null;
    /**
     * The promotion IDs associated with this Document. Currently, this field is restricted to at most one ID.
     */
    promotionIds?: string[] | null;
    /**
     * Quantity of the Document associated with the user event. Defaults to 1. For example, this field will be 2 if two quantities of the same Document are involved in a `add-to-cart` event. Required for events of the following event types: * `add-to-cart` * `purchase`
     */
    quantity?: number | null;
    /**
     * The Document URI - only allowed for website data stores.
     */
    uri?: string | null;
  }
  /**
   * A singleton resource of DataStore. It's empty when DataStore is created, which defaults to digital parser. The first call to DataStoreService.UpdateDocumentProcessingConfig method will initialize the config.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig {
    /**
     * Configurations for default Document parser. If not specified, we will configure it as default DigitalParsingConfig, and the default parsing config will be applied to all file types for Document parsing.
     */
    defaultParsingConfig?: Schema$GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig;
    /**
     * The full resource name of the Document Processing Config. Format: `projects/x/locations/x/collections/x/dataStores/x/documentProcessingConfig`.
     */
    name?: string | null;
    /**
     * Map from file type to override the default parsing configuration based on the file type. Supported keys: * `pdf`: Override parsing config for PDF files, either digital parsing, ocr parsing or layout parsing is supported. * `html`: Override parsing config for HTML files, only digital parsing and or layout parsing are supported. * `docx`: Override parsing config for DOCX files, only digital parsing and or layout parsing are supported.
     */
    parsingConfigOverrides?: {
      [
        key: string
      ]: Schema$GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig;
    } | null;
  }
  /**
   * Related configurations applied to a specific type of document parser.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig {
    /**
     * Configurations applied to digital parser.
     */
    digitalParsingConfig?: Schema$GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfigDigitalParsingConfig;
    /**
     * Configurations applied to OCR parser. Currently it only applies to PDFs.
     */
    ocrParsingConfig?: Schema$GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfigOcrParsingConfig;
  }
  /**
   * The digital parsing configurations for documents.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfigDigitalParsingConfig {}
  /**
   * The OCR parsing configurations for documents.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfigOcrParsingConfig {
    /**
     * [DEPRECATED] This field is deprecated. To use the additional enhanced document elements processing, please switch to `layout_parsing_config`.
     */
    enhancedDocumentElements?: string[] | null;
    /**
     * If true, will use native text instead of OCR text on pages containing native text.
     */
    useNativeText?: boolean | null;
  }
  /**
   * Double list.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaDoubleList {
    /**
     * Double values.
     */
    values?: number[] | null;
  }
  /**
   * Defines embedding config, used for bring your own embeddings feature.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaEmbeddingConfig {
    /**
     * Full field path in the schema mapped as embedding field.
     */
    fieldPath?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.EnableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaEnableAdvancedSiteSearchMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for SiteSearchEngineService.EnableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaEnableAdvancedSiteSearchRequest {}
  /**
   * Response message for SiteSearchEngineService.EnableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaEnableAdvancedSiteSearchResponse {}
  /**
   * Metadata that describes the training and serving parameters of an Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaEngine {
    /**
     * Configurations for the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT.
     */
    chatEngineConfig?: Schema$GoogleCloudDiscoveryengineV1betaEngineChatEngineConfig;
    /**
     * Output only. Additional information of the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT.
     */
    chatEngineMetadata?: Schema$GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata;
    /**
     * Common config spec that specifies the metadata of the engine.
     */
    commonConfig?: Schema$GoogleCloudDiscoveryengineV1betaEngineCommonConfig;
    /**
     * Output only. Timestamp the Recommendation Engine was created at.
     */
    createTime?: string | null;
    /**
     * The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary initializations.
     */
    dataStoreIds?: string[] | null;
    /**
     * Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
     */
    displayName?: string | null;
    /**
     * The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to `GENERIC`. Vertical on Engine has to match vertical of the DataStore liniked to the engine.
     */
    industryVertical?: string | null;
    /**
     * Immutable. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}` engine should be 1-63 characters, and valid characters are /a-z0-9x/. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    name?: string | null;
    /**
     * Configurations for the Search Engine. Only applicable if solution_type is SOLUTION_TYPE_SEARCH.
     */
    searchEngineConfig?: Schema$GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig;
    /**
     * Required. The solutions of the engine.
     */
    solutionType?: string | null;
    /**
     * Output only. Timestamp the Recommendation Engine was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Configurations for a Chat Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaEngineChatEngineConfig {
    /**
     * The configurationt generate the Dialogflow agent that is associated to this Engine. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation.
     */
    agentCreationConfig?: Schema$GoogleCloudDiscoveryengineV1betaEngineChatEngineConfigAgentCreationConfig;
    /**
     * The resource name of an exist Dialogflow agent to link to this Chat Engine. Customers can either provide `agent_creation_config` to create agent or provide an agent name that links the agent with the Chat engine. Format: `projects//locations//agents/`. Note that the `dialogflow_agent_to_link` are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation. Use ChatEngineMetadata.dialogflow_agent for actual agent association after Engine is created.
     */
    dialogflowAgentToLink?: string | null;
  }
  /**
   * Configurations for generating a Dialogflow agent. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaEngineChatEngineConfigAgentCreationConfig {
    /**
     * Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.
     */
    business?: string | null;
    /**
     * Required. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
     */
    defaultLanguageCode?: string | null;
    /**
     * Agent location for Agent creation, supported values: global/us/eu. If not provided, us Engine will create Agent using us-central-1 by default; eu Engine will create Agent using eu-west-1 by default.
     */
    location?: string | null;
    /**
     * Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
     */
    timeZone?: string | null;
  }
  /**
   * Additional information of a Chat Engine. Fields in this message are output only.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata {
    /**
     * The resource name of a Dialogflow agent, that this Chat Engine refers to. Format: `projects//locations//agents/`.
     */
    dialogflowAgent?: string | null;
  }
  /**
   * Common configurations for an Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaEngineCommonConfig {
    /**
     * Immutable. The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.
     */
    companyName?: string | null;
  }
  /**
   * Configurations for a Search Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig {
    /**
     * The add-on that this search engine enables.
     */
    searchAddOns?: string[] | null;
    /**
     * The search feature tier of this engine. Different tiers might have different pricing. To learn more, check the pricing documentation. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified.
     */
    searchTier?: string | null;
  }
  /**
   * Fact Chunk.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaFactChunk {
    /**
     * Text content of the fact chunk. Can be at most 10K characters long.
     */
    chunkText?: string | null;
    /**
     * The index of this chunk. Currently, only used for the streaming mode.
     */
    index?: number | null;
    /**
     * Source from which this fact chunk was retrieved. If it was retrieved from the GroundingFacts provided in the request then this field will contain the index of the specific fact from which this chunk was retrieved.
     */
    source?: string | null;
    /**
     * More fine-grained information for the source reference.
     */
    sourceMetadata?: {[key: string]: string} | null;
  }
  /**
   * Response message for SiteSearchEngineService.FetchDomainVerificationStatus method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of TargetSites containing the site verification status.
     */
    targetSites?: Schema$GoogleCloudDiscoveryengineV1betaTargetSite[];
    /**
     * The total number of items matching the request. This will always be populated in the response.
     */
    totalSize?: number | null;
  }
  /**
   * Cloud FhirStore source import data from.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaFhirStoreSource {
    /**
     * Required. The full resource name of the FHIR store to import data from, in the format of `projects/{project\}/locations/{location\}/datasets/{dataset\}/fhirStores/{fhir_store\}`.
     */
    fhirStore?: string | null;
    /**
     * Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the FhirStore export to a specific Cloud Storage directory.
     */
    gcsStagingDir?: string | null;
  }
  /**
   * Firestore source import data from.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaFirestoreSource {
    /**
     * Required. The Firestore collection to copy the data from with a length limit of 1,500 characters.
     */
    collectionId?: string | null;
    /**
     * Required. The Firestore database to copy the data from with a length limit of 256 characters.
     */
    databaseId?: string | null;
    /**
     * Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the Firestore export to a specific Cloud Storage directory. Ensure that the Firestore service account has the necessary Cloud Storage Admin permissions to access the specified Cloud Storage directory.
     */
    gcsStagingDir?: string | null;
    /**
     * The project ID that the Cloud SQL source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.
     */
    projectId?: string | null;
  }
  /**
   * Cloud Storage location for input content.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaGcsSource {
    /**
     * The schema to use when parsing the data from the source. Supported values for document imports: * `document` (default): One JSON Document per line. Each document must have a valid Document.id. * `content`: Unstructured data (e.g. PDF, HTML). Each file matched by `input_uris` becomes a document, with the ID set to the first 128 bits of SHA256(URI) encoded as a hex string. * `custom`: One custom data JSON per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by the GENERIC Data Store vertical. * `csv`: A CSV file with header conforming to the defined Schema of the data store. Each entry after the header is imported as a Document. This can only be used by the GENERIC Data Store vertical. Supported values for user even imports: * `user_event` (default): One JSON UserEvent per line.
     */
    dataSchema?: string | null;
    /**
     * Required. Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/x.json`. A request can contain at most 100 files (or 100,000 files if `data_schema` is `content`). Each file can be up to 2 GB (or 100 MB if `data_schema` is `content`).
     */
    inputUris?: string[] | null;
  }
  /**
   * Grounding Fact.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaGroundingFact {
    /**
     * Attributes associated with the fact. Common attributes include `source` (indicating where the fact was sourced from), `author` (indicating the author of the fact), and so on.
     */
    attributes?: {[key: string]: string} | null;
    /**
     * Text content of the fact. Can be at most 10K characters long.
     */
    factText?: string | null;
  }
  /**
   * Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Total count of entries that were processed.
     */
    totalCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for Import methods.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsRequest {
    /**
     * Whether to automatically generate IDs for the documents if absent. If set to `true`, Document.ids are automatically generated based on the hash of the payload, where IDs may not be consistent during multiple imports. In which case ReconciliationMode.FULL is highly recommended to avoid duplicate contents. If unset or set to `false`, Document.ids have to be specified using id_field, otherwise, documents without IDs fail to be imported. Supported data sources: * GcsSource. GcsSource.data_schema must be `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown. * BigQuerySource. BigQuerySource.data_schema must be `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown. * SpannerSource. * CloudSqlSource. * FirestoreSource. * BigtableSource.
     */
    autoGenerateIds?: boolean | null;
    /**
     * BigQuery input source.
     */
    bigquerySource?: Schema$GoogleCloudDiscoveryengineV1betaBigQuerySource;
    /**
     * Cloud Bigtable input source.
     */
    bigtableSource?: Schema$GoogleCloudDiscoveryengineV1betaBigtableSource;
    /**
     * Cloud SQL input source.
     */
    cloudSqlSource?: Schema$GoogleCloudDiscoveryengineV1betaCloudSqlSource;
    /**
     * The desired location of errors incurred during the Import.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * FhirStore input source.
     */
    fhirStoreSource?: Schema$GoogleCloudDiscoveryengineV1betaFhirStoreSource;
    /**
     * Firestore input source.
     */
    firestoreSource?: Schema$GoogleCloudDiscoveryengineV1betaFirestoreSource;
    /**
     * Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudDiscoveryengineV1betaGcsSource;
    /**
     * The field indicates the ID field or column to be used as unique IDs of the documents. For GcsSource it is the key of the JSON field. For instance, `my_id` for JSON `{"my_id": "some_uuid"\}`. For others, it may be the column name of the table where the unique ids are stored. The values of the JSON field or the table column are used as the Document.ids. The JSON field or the table column must be of string type, and the values must be set as valid strings conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) with 1-63 characters. Otherwise, documents without valid IDs fail to be imported. Only set this field when auto_generate_ids is unset or set as `false`. Otherwise, an INVALID_ARGUMENT error is thrown. If it is unset, a default value `_id` is used when importing from the allowed data sources. Supported data sources: * GcsSource. GcsSource.data_schema must be `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown. * BigQuerySource. BigQuerySource.data_schema must be `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown. * SpannerSource. * CloudSqlSource. * FirestoreSource. * BigtableSource.
     */
    idField?: string | null;
    /**
     * The Inline source for the input content for documents.
     */
    inlineSource?: Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource;
    /**
     * The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL.
     */
    reconciliationMode?: string | null;
    /**
     * Spanner input source.
     */
    spannerSource?: Schema$GoogleCloudDiscoveryengineV1betaSpannerSource;
    /**
     * Indicates which fields in the provided imported documents to update. If not set, the default is to update all fields.
     */
    updateMask?: string | null;
  }
  /**
   * The inline source for the input config for ImportDocuments method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource {
    /**
     * Required. A list of documents to update/create. Each document must have a valid Document.id. Recommended max of 100 items.
     */
    documents?: Schema$GoogleCloudDiscoveryengineV1betaDocument[];
  }
  /**
   * Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsResponse {
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
  }
  /**
   * Configuration of destination for Import related errors.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig {
    /**
     * Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the ImportSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for CompletionService.ImportSuggestionDenyListEntries method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequest {
    /**
     * Cloud Storage location for the input content. Only 1 file can be specified that contains all entries to import. Supported values `gcs_source.schema` for autocomplete suggestion deny list entry imports: * `suggestion_deny_list` (default): One JSON [SuggestionDenyListEntry] per line.
     */
    gcsSource?: Schema$GoogleCloudDiscoveryengineV1betaGcsSource;
    /**
     * The Inline source for the input content for suggestion deny list entries.
     */
    inlineSource?: Schema$GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource;
  }
  /**
   * The inline source for SuggestionDenyListEntry.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource {
    /**
     * Required. A list of all denylist entries to import. Max of 1000 items.
     */
    entries?: Schema$GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry[];
  }
  /**
   * Response message for CompletionService.ImportSuggestionDenyListEntries method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Count of deny list entries that failed to be imported.
     */
    failedEntriesCount?: string | null;
    /**
     * Count of deny list entries successfully imported.
     */
    importedEntriesCount?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for the ImportUserEvents request.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsRequest {
    /**
     * BigQuery input source.
     */
    bigquerySource?: Schema$GoogleCloudDiscoveryengineV1betaBigQuerySource;
    /**
     * The desired location of errors incurred during the Import. Cannot be set for inline user event imports.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudDiscoveryengineV1betaGcsSource;
    /**
     * The Inline source for the input content for UserEvents.
     */
    inlineSource?: Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource;
  }
  /**
   * The inline source for the input config for ImportUserEvents method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource {
    /**
     * Required. A list of user events to import. Recommended max of 10k items.
     */
    userEvents?: Schema$GoogleCloudDiscoveryengineV1betaUserEvent[];
  }
  /**
   * Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsResponse {
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Count of user events imported with complete existing Documents.
     */
    joinedEventsCount?: string | null;
    /**
     * Count of user events imported, but with Document information not found in the existing Branch.
     */
    unjoinedEventsCount?: string | null;
  }
  /**
   * A floating point interval.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaInterval {
    /**
     * Exclusive upper bound.
     */
    exclusiveMaximum?: number | null;
    /**
     * Exclusive lower bound.
     */
    exclusiveMinimum?: number | null;
    /**
     * Inclusive upper bound.
     */
    maximum?: number | null;
    /**
     * Inclusive lower bound.
     */
    minimum?: number | null;
  }
  /**
   * Response for ListConversations method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse {
    /**
     * All the Conversations for a given data store.
     */
    conversations?: Schema$GoogleCloudDiscoveryengineV1betaConversation[];
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for SearchTuningService.ListCustomModels method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse {
    /**
     * List of custom tuning models.
     */
    models?: Schema$GoogleCloudDiscoveryengineV1betaCustomTuningModel[];
  }
  /**
   * Response message for DataStoreService.ListDataStores method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse {
    /**
     * All the customer's DataStores.
     */
    dataStores?: Schema$GoogleCloudDiscoveryengineV1betaDataStore[];
    /**
     * A token that can be sent as ListDataStoresRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for DocumentService.ListDocuments method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse {
    /**
     * The Documents.
     */
    documents?: Schema$GoogleCloudDiscoveryengineV1betaDocument[];
    /**
     * A token that can be sent as ListDocumentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for EngineService.ListEngines method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse {
    /**
     * All the customer's Engines.
     */
    engines?: Schema$GoogleCloudDiscoveryengineV1betaEngine[];
    /**
     * Not supported.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for SchemaService.ListSchemas method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse {
    /**
     * A token that can be sent as ListSchemasRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The Schemas.
     */
    schemas?: Schema$GoogleCloudDiscoveryengineV1betaSchema[];
  }
  /**
   * Response for ListServingConfigs method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse {
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string | null;
    /**
     * All the ServingConfigs for a given dataStore.
     */
    servingConfigs?: Schema$GoogleCloudDiscoveryengineV1betaServingConfig[];
  }
  /**
   * Response for ListSessions method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse {
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string | null;
    /**
     * All the Sessions for a given data store.
     */
    sessions?: Schema$GoogleCloudDiscoveryengineV1betaSession[];
  }
  /**
   * Response message for SiteSearchEngineService.ListTargetSites method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of TargetSites.
     */
    targetSites?: Schema$GoogleCloudDiscoveryengineV1betaTargetSite[];
    /**
     * The total number of items matching the request. This will always be populated in the response.
     */
    totalSize?: number | null;
  }
  /**
   * Media-specific user event information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaMediaInfo {
    /**
     * The media progress time in seconds, if applicable. For example, if the end user has finished 90 seconds of a playback video, then MediaInfo.media_progress_duration.seconds should be set to 90.
     */
    mediaProgressDuration?: string | null;
    /**
     * Media progress should be computed using only the media_progress_duration relative to the media total length. This value must be between `[0, 1.0]` inclusive. If this is not a playback or the progress cannot be computed (e.g. ongoing livestream), this field should be unset.
     */
    mediaProgressPercentage?: number | null;
  }
  /**
   * Detailed page information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPageInfo {
    /**
     * The most specific category associated with a category page. To represent full path of category, use '\>' sign to separate different hierarchies. If '\>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: `"pageCategory" : "Sales \> 2017 Black Friday Deals"`. Required for `view-category-page` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    pageCategory?: string | null;
    /**
     * A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageview_id` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.
     */
    pageviewId?: string | null;
    /**
     * The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. However, some browser privacy restrictions may cause this field to be empty.
     */
    referrerUri?: string | null;
    /**
     * Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters.
     */
    uri?: string | null;
  }
  /**
   * Detailed panel information associated with a user event.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPanelInfo {
    /**
     * The display name of the panel.
     */
    displayName?: string | null;
    /**
     * Required. The panel ID.
     */
    panelId?: string | null;
    /**
     * The ordered position of the panel, if shown to the user with other panels. If set, then total_panels must also be set.
     */
    panelPosition?: number | null;
    /**
     * The total number of panels, including this one, shown to the user. Must be set if panel_position is set.
     */
    totalPanels?: number | null;
  }
  /**
   * Request for pausing training of an engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPauseEngineRequest {}
  /**
   * Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPurgeDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were ignored as entries were not found.
     */
    ignoredCount?: string | null;
    /**
     * Count of entries that were deleted successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for DocumentService.PurgeDocuments method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest {
    /**
     * Required. Filter matching documents to purge. Only currently supported value is `*` (all items).
     */
    filter?: string | null;
    /**
     * Actually performs the purge. If `force` is set to false, return the expected purge count without deleting any documents.
     */
    force?: boolean | null;
  }
  /**
   * Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPurgeDocumentsResponse {
    /**
     * The total count of documents purged as a result of the operation.
     */
    purgeCount?: string | null;
    /**
     * A sample of document names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random.
     */
    purgeSample?: string[] | null;
  }
  /**
   * Metadata related to the progress of the PurgeSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for CompletionService.PurgeSuggestionDenyListEntries method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesRequest {}
  /**
   * Response message for CompletionService.PurgeSuggestionDenyListEntries method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Number of suggestion deny list entries purged.
     */
    purgeCount?: string | null;
  }
  /**
   * Defines a user inputed query.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaQuery {
    /**
     * Unique Id for the query.
     */
    queryId?: string | null;
    /**
     * Plain text.
     */
    text?: string | null;
  }
  /**
   * Record message for RankService.Rank method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaRankingRecord {
    /**
     * The content of the record. Empty by default. At least one of title or content should be set otherwise an INVALID_ARGUMENT error is thrown.
     */
    content?: string | null;
    /**
     * The unique ID to represent the record.
     */
    id?: string | null;
    /**
     * The score of this record based on the given query and selected model.
     */
    score?: number | null;
    /**
     * The title of the record. Empty by default. At least one of title or content should be set otherwise an INVALID_ARGUMENT error is thrown.
     */
    title?: string | null;
  }
  /**
   * Request message for RankService.Rank method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaRankRequest {
    /**
     * If true, the response will contain only record ID and score. By default, it is false, the response will contain record details.
     */
    ignoreRecordDetailsInResponse?: boolean | null;
    /**
     * The identifier of the model to use. It is one of: * `semantic-ranker-512@latest`: Semantic ranking model with maxiumn input token size 512. It is set to `semantic-ranker-512@latest` by default if unspecified.
     */
    model?: string | null;
    /**
     * The query to use.
     */
    query?: string | null;
    /**
     * Required. A list of records to rank. At most 200 records to rank.
     */
    records?: Schema$GoogleCloudDiscoveryengineV1betaRankingRecord[];
    /**
     * The number of results to return. If this is unset or no bigger than zero, returns all results.
     */
    topN?: number | null;
  }
  /**
   * Response message for RankService.Rank method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaRankResponse {
    /**
     * A list of records sorted by descending score.
     */
    records?: Schema$GoogleCloudDiscoveryengineV1betaRankingRecord[];
  }
  /**
   * Request message for Recommend method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaRecommendRequest {
    /**
     * Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the `filter_tags` attribute is supported. Examples: * `(filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold"))` * `(filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green"))` If `attributeFilteringSyntax` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (launguage: ANY("en", "es")) AND NOT (categories: ANY("Movie")) * (available: true) AND (launguage: ANY("en", "es")) OR (categories: ANY("Movie")) If your filter blocks all results, the API will return generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set `strictFiltering` to True in RecommendRequest.params to receive empty results instead. Note that the API will never return Documents with `storageStatus` of `EXPIRED` or `DELETED` regardless of filter choices.
     */
    filter?: string | null;
    /**
     * Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.
     */
    pageSize?: number | null;
    /**
     * Additional domain specific parameters for the recommendations. Allowed values: * `returnDocument`: Boolean. If set to true, the associated Document object will be returned in RecommendResponse.RecommendationResult.document. * `returnScore`: Boolean. If set to true, the recommendation 'score' corresponding to each returned Document will be set in RecommendResponse.RecommendationResult.metadata. The given 'score' indicates the probability of a Document conversion given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` This gives request-level control and adjusts recommendation results based on Document category. * `attributeFilteringSyntax`: Boolean. False by default. If set to true, the `filter` field is interpreted according to the new, attribute-based syntax.
     */
    params?: {[key: string]: any} | null;
    /**
     * Required. Context about the user, what they are looking at and what action they took to trigger the Recommend request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserEvent.user_pseudo_id or UserEvent.user_info.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserEvent.user_pseudo_id to a random unique ID and leave UserEvent.user_info.user_id unset.
     */
    userEvent?: Schema$GoogleCloudDiscoveryengineV1betaUserEvent;
    /**
     * The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.
     */
    userLabels?: {[key: string]: string} | null;
    /**
     * Use validate only mode for this recommendation query. If set to true, a fake model will be used that returns arbitrary Document IDs. Note that the validate only mode should only be used for testing the API, or if the model is not ready.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response message for Recommend method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse {
    /**
     * A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.
     */
    attributionToken?: string | null;
    /**
     * IDs of documents in the request that were missing from the default Branch associated with the requested ServingConfig.
     */
    missingIds?: string[] | null;
    /**
     * A list of recommended Documents. The order represents the ranking (from the most relevant Document to the least).
     */
    results?: Schema$GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult[];
    /**
     * True if RecommendRequest.validate_only was set.
     */
    validateOnly?: boolean | null;
  }
  /**
   * RecommendationResult represents a generic recommendation result with associated metadata.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult {
    /**
     * Set if `returnDocument` is set to true in RecommendRequest.params.
     */
    document?: Schema$GoogleCloudDiscoveryengineV1betaDocument;
    /**
     * Resource ID of the recommended Document.
     */
    id?: string | null;
    /**
     * Additional Document metadata / annotations. Possible values: * `score`: Recommendation score in double value. Is set if `returnScore` is set to true in RecommendRequest.params.
     */
    metadata?: {[key: string]: any} | null;
  }
  /**
   * Request message for SiteSearchEngineService.RecrawlUris method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaRecrawlUrisRequest {
    /**
     * Required. List of URIs to crawl. At most 10K URIs are supported, otherwise an INVALID_ARGUMENT error is thrown. Each URI should match at least one TargetSite in `site_search_engine`.
     */
    uris?: string[] | null;
  }
  /**
   * Defines a reply message to user.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaReply {
    /**
     * References in the reply.
     */
    references?: Schema$GoogleCloudDiscoveryengineV1betaReplyReference[];
    /**
     * DEPRECATED: use `summary` instead. Text reply.
     */
    reply?: string | null;
    /**
     * Summary based on search results.
     */
    summary?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummary;
  }
  /**
   * Defines reference in reply.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaReplyReference {
    /**
     * Anchor text.
     */
    anchorText?: string | null;
    /**
     * Anchor text end index.
     */
    end?: number | null;
    /**
     * Anchor text start index.
     */
    start?: number | null;
    /**
     * URI link reference.
     */
    uri?: string | null;
  }
  /**
   * Request for resuming training of an engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaResumeEngineRequest {}
  /**
   * Defines the structure and layout of a type of document data.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSchema {
    /**
     * The JSON representation of the schema.
     */
    jsonSchema?: string | null;
    /**
     * Immutable. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The structured representation of the schema.
     */
    structSchema?: {[key: string]: any} | null;
  }
  /**
   * Detailed search information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchInfo {
    /**
     * An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an `INVALID_ARGUMENT` is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    offset?: number | null;
    /**
     * The order in which products are returned, if applicable. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    orderBy?: string | null;
    /**
     * The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. At least one of search_query or PageInfo.page_category is required for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    searchQuery?: string | null;
  }
  /**
   * Request message for SearchService.Search method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequest {
    /**
     * Boost specification to boost certain documents. For more information on boosting, see [Boosting](https://cloud.google.com/retail/docs/boosting#boost)
     */
    boostSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec;
    /**
     * The branch resource name, such as `projects/x/locations/global/collections/default_collection/dataStores/default_data_store/branches/0`. Use `default_branch` as the branch ID or leave this field empty, to search documents under the default branch.
     */
    branch?: string | null;
    /**
     * The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. In the case a query does not have a sufficient amount of results this filter will be used to determine whether or not to enable the query expansion flow. The original filter will still be used for the query expanded search. This field is strongly recommended to achieve high search quality. For more information about filter syntax, see SearchRequest.filter.
     */
    canonicalFilter?: string | null;
    /**
     * A specification for configuring the behavior of content search.
     */
    contentSearchSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpec;
    /**
     * A list of data store specs to apply on a search call.
     */
    dataStoreSpecs?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestDataStoreSpec[];
    /**
     * Uses the provided embedding to do additional semantic document retrieval. The retrieval is based on the dot product of SearchRequest.EmbeddingSpec.EmbeddingVector.vector and the document embedding that is provided in SearchRequest.EmbeddingSpec.EmbeddingVector.field_path. If SearchRequest.EmbeddingSpec.EmbeddingVector.field_path is not provided, it will use ServingConfig.EmbeddingConfig.field_path.
     */
    embeddingSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec;
    /**
     * Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    facetSpecs?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpec[];
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field 'name' in their schema. In this case the filter would look like this: filter --\> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata)
     */
    filter?: string | null;
    /**
     * Raw image query.
     */
    imageQuery?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestImageQuery;
    /**
     * A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Documents deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an `INVALID_ARGUMENT` is returned.
     */
    offset?: number | null;
    /**
     * The order in which documents are returned. Documents can be ordered by a field in an Document object. Leave it unset if ordered by relevance. `order_by` expression is case-sensitive. For more information on ordering for retail search, see [Ordering](https://cloud.google.com/retail/docs/filter-and-order#order) If this field is unrecognizable, an `INVALID_ARGUMENT` is returned.
     */
    orderBy?: string | null;
    /**
     * Maximum number of Documents to return. The maximum allowed value depends on the data type. Values above the maximum value are coerced to the maximum value. * Websites with basic indexing: Default `10`, Maximum `25`. * Websites with advanced indexing: Default `25`, Maximum `50`. * Other: Default `50`, Maximum `100`. If this field is negative, an `INVALID_ARGUMENT` is returned.
     */
    pageSize?: number | null;
    /**
     * A page token received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    pageToken?: string | null;
    /**
     * Additional search parameters. For public website search only, supported values are: * `user_country_code`: string. Default empty. If set to non-empty, results are restricted or boosted based on the location provided. Example: user_country_code: "au" For available codes see [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) * `search_type`: double. Default empty. Enables non-webpage searching depending on the value. The only valid non-default value is 1, which enables image searching. Example: search_type: 1
     */
    params?: {[key: string]: any} | null;
    /**
     * Raw search query.
     */
    query?: string | null;
    /**
     * The query expansion specification that specifies the conditions under which query expansion occurs.
     */
    queryExpansionSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpec;
    /**
     * The ranking expression controls the customized ranking on retrieval documents. This overrides ServingConfig.ranking_expression. The ranking expression is a single function or multiple functions that are joint by "+". * ranking_expression = function, { " + ", function \}; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: `relevance_score`: pre-defined keywords, used for measure relevance between query and document. `embedding_field_path`: the document embedding field used with query embedding vector. `dotProduct`: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`.
     */
    rankingExpression?: string | null;
    /**
     * Whether to turn on safe search. This is only supported for website search.
     */
    safeSearch?: boolean | null;
    /**
     * The spell correction specification that specifies the mode under which spell correction takes effect.
     */
    spellCorrectionSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpec;
    /**
     * Information about the end user. Highly recommended for analytics. UserInfo.user_agent is used to deduce `device_type` for analytics.
     */
    userInfo?: Schema$GoogleCloudDiscoveryengineV1betaUserInfo;
    /**
     * The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.
     */
    userLabels?: {[key: string]: string} | null;
    /**
     * A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and CompleteQueryRequest.user_pseudo_id The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    userPseudoId?: string | null;
  }
  /**
   * Boost specification to boost certain documents.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec {
    /**
     * Condition boost specifications. If a document matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20.
     */
    conditionBoostSpecs?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpec[];
  }
  /**
   * Boost applies to documents which match a condition.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpec {
    /**
     * Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the document a big promotion. However, it does not necessarily mean that the boosted document will be the top result at all times, nor that other documents will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant documents. Setting to -1.0 gives the document a big demotion. However, results that are deeply relevant might still be shown. The document will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored. Only one of the (condition, boost) combination or the boost_control_spec below are set. If both are set then the global boost is ignored and the more fine-grained boost_control_spec is applied.
     */
    boost?: number | null;
    /**
     * Complex specification for custom ranking based on customer defined attribute value.
     */
    boostControlSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpecBoostControlSpec;
    /**
     * An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost documents with document ID "doc_1" or "doc_2", and color "Red" or "Blue": `(document_id: ANY("doc_1", "doc_2")) AND (color: ANY("Red", "Blue"))`
     */
    condition?: string | null;
  }
  /**
   * Specification for custom ranking based on customer specified attribute value. It provides more controls for customized ranking than the simple (condition, boost) combination above.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpecBoostControlSpec {
    /**
     * The attribute type to be used to determine the boost amount. The attribute value can be derived from the field value of the specified field_name. In the case of numerical it is straightforward i.e. attribute_value = numerical_field_value. In the case of freshness however, attribute_value = (time.now() - datetime_field_value).
     */
    attributeType?: string | null;
    /**
     * The control points used to define the curve. The monotonic function (defined through the interpolation_type above) passes through the control points listed here.
     */
    controlPoints?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpecBoostControlSpecControlPoint[];
    /**
     * The name of the field whose value will be used to determine the boost amount.
     */
    fieldName?: string | null;
    /**
     * The interpolation type to be applied to connect the control points listed below.
     */
    interpolationType?: string | null;
  }
  /**
   * The control points used to define the curve. The curve defined through these control points can only be monotonically increasing or decreasing(constant values are acceptable).
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpecBoostControlSpecControlPoint {
    /**
     * Can be one of: 1. The numerical field value. 2. The duration spec for freshness: The value must be formatted as an XSD `dayTimeDuration` value (a restricted subset of an ISO 8601 duration value). The pattern for this is: `nDnM]`.
     */
    attributeValue?: string | null;
    /**
     * The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above.
     */
    boostAmount?: number | null;
  }
  /**
   * A specification for configuring the behavior of content search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpec {
    /**
     * If there is no extractive_content_spec provided, there will be no extractive answer in the search response.
     */
    extractiveContentSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecExtractiveContentSpec;
    /**
     * If `snippetSpec` is not specified, snippets are not included in the search response.
     */
    snippetSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSnippetSpec;
    /**
     * If `summarySpec` is not specified, summaries are not included in the search response.
     */
    summarySpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpec;
  }
  /**
   * A specification for configuring the extractive content in a search response.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecExtractiveContentSpec {
    /**
     * The maximum number of extractive answers returned in each search result. An extractive answer is a verbatim answer extracted from the original document, which provides a precise and contextually relevant answer to the search query. If the number of matching answers is less than the `max_extractive_answer_count`, return all of the answers. Otherwise, return the `max_extractive_answer_count`. At most five answers are returned for each SearchResult.
     */
    maxExtractiveAnswerCount?: number | null;
    /**
     * The max number of extractive segments returned in each search result. Only applied if the DataStore is set to DataStore.ContentConfig.CONTENT_REQUIRED or DataStore.solution_types is SOLUTION_TYPE_CHAT. An extractive segment is a text segment extracted from the original document that is relevant to the search query, and, in general, more verbose than an extractive answer. The segment could then be used as input for LLMs to generate summaries and answers. If the number of matching segments is less than `max_extractive_segment_count`, return all of the segments. Otherwise, return the `max_extractive_segment_count`.
     */
    maxExtractiveSegmentCount?: number | null;
    /**
     * Return at most `num_next_segments` segments after each selected segments.
     */
    numNextSegments?: number | null;
    /**
     * Specifies whether to also include the adjacent from each selected segments. Return at most `num_previous_segments` segments before each selected segments.
     */
    numPreviousSegments?: number | null;
    /**
     * Specifies whether to return the confidence score from the extractive segments in each search result. This feature is available only for new or allowlisted data stores. To allowlist your data store, contact your Customer Engineer. The default value is `false`.
     */
    returnExtractiveSegmentScore?: boolean | null;
  }
  /**
   * A specification for configuring snippets in a search response.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSnippetSpec {
    /**
     * [DEPRECATED] This field is deprecated. To control snippet return, use `return_snippet` field. For backwards compatibility, we will return snippet if max_snippet_count \> 0.
     */
    maxSnippetCount?: number | null;
    /**
     * [DEPRECATED] This field is deprecated and will have no affect on the snippet.
     */
    referenceOnly?: boolean | null;
    /**
     * If `true`, then return snippet. If no snippet can be generated, we return "No snippet is available for this page." A `snippet_status` with `SUCCESS` or `NO_SNIPPET_AVAILABLE` will also be returned.
     */
    returnSnippet?: boolean | null;
  }
  /**
   * A specification for configuring a summary returned in a search response.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpec {
    /**
     * Specifies whether to filter out adversarial queries. The default value is `false`. Google employs search-query classification to detect adversarial queries. No summary is returned if the search query is classified as an adversarial query. For example, a user might ask a question regarding negative comments about the company or submit a query designed to generate unsafe, policy-violating output. If this field is set to `true`, we skip generating summaries for adversarial queries and return fallback messages instead.
     */
    ignoreAdversarialQuery?: boolean | null;
    /**
     * Specifies whether to filter out queries that are not summary-seeking. The default value is `false`. Google employs search-query classification to detect summary-seeking queries. No summary is returned if the search query is classified as a non-summary seeking query. For example, `why is the sky blue` and `Who is the best soccer player in the world?` are summary-seeking queries, but `SFO airport` and `world cup 2026` are not. They are most likely navigational queries. If this field is set to `true`, we skip generating summaries for non-summary seeking queries and return fallback messages instead.
     */
    ignoreNonSummarySeekingQuery?: boolean | null;
    /**
     * Specifies whether to include citations in the summary. The default value is `false`. When this field is set to `true`, summaries include in-line citation numbers. Example summary including citations: BigQuery is Google Cloud's fully managed and completely serverless enterprise data warehouse [1]. BigQuery supports all data types, works across clouds, and has built-in machine learning and business intelligence, all within a unified platform [2, 3]. The citation numbers refer to the returned search results and are 1-indexed. For example, [1] means that the sentence is attributed to the first search result. [2, 3] means that the sentence is attributed to both the second and third search results.
     */
    includeCitations?: boolean | null;
    /**
     * Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature.
     */
    languageCode?: string | null;
    /**
     * If specified, the spec will be used to modify the prompt provided to the LLM.
     */
    modelPromptSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelPromptSpec;
    /**
     * If specified, the spec will be used to modify the model specification provided to the LLM.
     */
    modelSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelSpec;
    /**
     * The number of top results to generate the summary from. If the number of results returned is less than `summaryResultCount`, the summary is generated from all of the results. At most 10 results for documents mode, or 50 for chunks mode, can be used to generate a summary. The chunks mode is used when SearchRequest.ContentSearchSpec.search_result_mode is set to CHUNKS.
     */
    summaryResultCount?: number | null;
    /**
     * If true, answer will be generated from most relevant chunks from top search results. This feature will improve summary quality. Note that with this feature enabled, not all top search results will be referenced and included in the reference list, so the citation source index only points to the search results listed in the reference list.
     */
    useSemanticChunks?: boolean | null;
  }
  /**
   * Specification of the prompt to use with the model.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelPromptSpec {
    /**
     * Text at the beginning of the prompt that instructs the assistant. Examples are available in the user guide.
     */
    preamble?: string | null;
  }
  /**
   * Specification of the model.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelSpec {
    /**
     * The model version used to generate the summary. Supported values are: * `stable`: string. Default value when no value is specified. Uses a generally available, fine-tuned model. For more information, see [Answer generation model versions and lifecycle](https://cloud.google.com/generative-ai-app-builder/docs/answer-generation-models). * `preview`: string. (Public preview) Uses a preview model. For more information, see [Answer generation model versions and lifecycle](https://cloud.google.com/generative-ai-app-builder/docs/answer-generation-models).
     */
    version?: string | null;
  }
  /**
   * A struct to define data stores to filter on in a search call.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestDataStoreSpec {
    /**
     * Required. Full resource name of DataStore, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`.
     */
    dataStore?: string | null;
  }
  /**
   * The specification that uses customized query embedding vector to do semantic document retrieval.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec {
    /**
     * The embedding vector used for retrieval. Limit to 1.
     */
    embeddingVectors?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector[];
  }
  /**
   * Embedding vector.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector {
    /**
     * Embedding field path in schema.
     */
    fieldPath?: string | null;
    /**
     * Query embedding vector.
     */
    vector?: number[] | null;
  }
  /**
   * A facet specification to perform faceted search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpec {
    /**
     * Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined automatically. If dynamic facets are enabled, it is ordered together. If set to false, the position of this facet in the response is the same as in the request, and it is ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it's not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response is determined automatically. Another example, assuming you have the following facets in the request: * "rating", enable_dynamic_position = true * "price", enable_dynamic_position = false * "brands", enable_dynamic_position = false And also you have a dynamic facets enabled, which generates a facet `gender`. Then the final order of the facets in the response can be ("price", "brands", "rating", "gender") or ("price", "brands", "gender", "rating") depends on how API orders "gender" and "rating" facets. However, notice that "price" and "brands" are always ranked at first and second position because their enable_dynamic_position is false.
     */
    enableDynamicPosition?: boolean | null;
    /**
     * List of keys to exclude when faceting. By default, FacetKey.key is not excluded from the filter unless it is listed in this field. Listing a facet key in this field allows its values to appear as facet results, even when they are filtered out of search results. Using this field does not affect what search results are returned. For example, suppose there are 100 documents with the color facet "Red" and 200 documents with the color facet "Blue". A query containing the filter "color:ANY("Red")" and having "color" as FacetKey.key would by default return only "Red" documents in the search results, and also return "Red" with count 100 as the only color facet. Although there are also blue documents available, "Blue" would not be shown as an available facet value. If "color" is listed in "excludedFilterKeys", then the query returns the facet values "Red" with count 100 and "Blue" with count 200, because the "color" key is now excluded from the filter. Because this field doesn't affect search results, the search results are still correctly filtered to return only "Red" documents. A maximum of 100 values are allowed. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    excludedFilterKeys?: string[] | null;
    /**
     * Required. The facet key specification.
     */
    facetKey?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey;
    /**
     * Maximum of facet values that should be returned for this facet. If unspecified, defaults to 20. The maximum allowed value is 300. Values above 300 are coerced to 300. If this field is negative, an `INVALID_ARGUMENT` is returned.
     */
    limit?: number | null;
  }
  /**
   * Specifies how a facet is computed.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey {
    /**
     * True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise.
     */
    caseInsensitive?: boolean | null;
    /**
     * Only get facet values that contains the given strings. For example, suppose "category" has three values "Action \> 2022", "Action \> 2021" and "Sci-Fi \> 2022". If set "contains" to "2022", the "category" facet only contains "Action \> 2022" and "Sci-Fi \> 2022". Only supported on textual fields. Maximum is 10.
     */
    contains?: string[] | null;
    /**
     * Set only if values should be bucketed into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 30.
     */
    intervals?: Schema$GoogleCloudDiscoveryengineV1betaInterval[];
    /**
     * Required. Supported textual and numerical facet keys in Document object, over which the facet values are computed. Facet key is case-sensitive.
     */
    key?: string | null;
    /**
     * The order in which documents are returned. Allowed values are: * "count desc", which means order by SearchResponse.Facet.values.count descending. * "value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals.
     */
    orderBy?: string | null;
    /**
     * Only get facet values that start with the given string prefix. For example, suppose "category" has three values "Action \> 2022", "Action \> 2021" and "Sci-Fi \> 2022". If set "prefixes" to "Action", the "category" facet only contains "Action \> 2022" and "Action \> 2021". Only supported on textual fields. Maximum is 10.
     */
    prefixes?: string[] | null;
    /**
     * Only get facet for the given restricted values. Only supported on textual fields. For example, suppose "category" has three values "Action \> 2022", "Action \> 2021" and "Sci-Fi \> 2022". If set "restricted_values" to "Action \> 2022", the "category" facet only contains "Action \> 2022". Only supported on textual fields. Maximum is 10.
     */
    restrictedValues?: string[] | null;
  }
  /**
   * Specifies the image query input.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestImageQuery {
    /**
     * Base64 encoded image bytes. Supported image formats: JPEG, PNG, and BMP.
     */
    imageBytes?: string | null;
  }
  /**
   * Specification to determine under which conditions query expansion should occur.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpec {
    /**
     * The condition under which query expansion should occur. Default to Condition.DISABLED.
     */
    condition?: string | null;
    /**
     * Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results.
     */
    pinUnexpandedResults?: boolean | null;
  }
  /**
   * The specification for query spell correction.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpec {
    /**
     * The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO.
     */
    mode?: string | null;
  }
  /**
   * Response message for SearchService.Search method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponse {
    /**
     * Controls applied as part of the Control service.
     */
    appliedControls?: string[] | null;
    /**
     * A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance.
     */
    attributionToken?: string | null;
    /**
     * Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search.
     */
    correctedQuery?: string | null;
    /**
     * Results of facets requested by user.
     */
    facets?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseFacet[];
    geoSearchDebugInfo?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo[];
    /**
     * Guided search result.
     */
    guidedSearchResult?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResult;
    /**
     * A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Query expansion information for the returned results.
     */
    queryExpansionInfo?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseQueryExpansionInfo;
    /**
     * The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response.
     */
    redirectUri?: string | null;
    /**
     * A list of matched documents. The order represents the ranking.
     */
    results?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult[];
    /**
     * A summary as part of the search results. This field is only returned if SearchRequest.ContentSearchSpec.summary_spec is set.
     */
    summary?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummary;
    /**
     * The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches.
     */
    totalSize?: number | null;
  }
  /**
   * A facet result.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseFacet {
    /**
     * Whether the facet is dynamically generated.
     */
    dynamicFacet?: boolean | null;
    /**
     * The key for this facet. E.g., "colors" or "price". It matches SearchRequest.FacetSpec.FacetKey.key.
     */
    key?: string | null;
    /**
     * The facet values for this field.
     */
    values?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue[];
  }
  /**
   * A facet value which contains value names and their count.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue {
    /**
     * Number of items that have this facet value.
     */
    count?: string | null;
    /**
     * Interval value for a facet, such as 10, 20) for facet "price". It matches [SearchRequest.FacetSpec.FacetKey.intervals.
     */
    interval?: Schema$GoogleCloudDiscoveryengineV1betaInterval;
    /**
     * Text value of a facet, such as "Black" for facet "colors".
     */
    value?: string | null;
  }
  /**
   * Debug information specifically related to forward geocoding issues arising from Geolocation Search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo {
    /**
     * The error produced.
     */
    errorMessage?: string | null;
    /**
     * The address from which forward geocoding ingestion produced issues.
     */
    originalAddressQuery?: string | null;
  }
  /**
   * Guided search result. The guided search helps user to refine the search results and narrow down to the real needs from a broaded search results.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResult {
    /**
     * Suggested follow-up questions.
     */
    followUpQuestions?: string[] | null;
    /**
     * A list of ranked refinement attributes.
     */
    refinementAttributes?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResultRefinementAttribute[];
  }
  /**
   * Useful attribute for search result refinements.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResultRefinementAttribute {
    /**
     * Attribute key used to refine the results e.g. 'movie_type'.
     */
    attributeKey?: string | null;
    /**
     * Attribute value used to refine the results e.g. 'drama'.
     */
    attributeValue?: string | null;
  }
  /**
   * Information describing query expansion including whether expansion has occurred.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseQueryExpansionInfo {
    /**
     * Bool describing whether query expansion has occurred.
     */
    expandedQuery?: boolean | null;
    /**
     * Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true.
     */
    pinnedResultCount?: string | null;
  }
  /**
   * Represents the search results.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult {
    /**
     * The document data snippet in the search response. Only fields that are marked as retrievable are populated.
     */
    document?: Schema$GoogleCloudDiscoveryengineV1betaDocument;
    /**
     * Document.id of the searched Document.
     */
    id?: string | null;
    /**
     * Google provided available scores.
     */
    modelScores?: {
      [key: string]: Schema$GoogleCloudDiscoveryengineV1betaDoubleList;
    } | null;
  }
  /**
   * Summary of the top N search result specified by the summary spec.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummary {
    /**
     * A collection of Safety Attribute categories and their associated confidence scores.
     */
    safetyAttributes?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummarySafetyAttributes;
    /**
     * Additional summary-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set.
     */
    summarySkippedReasons?: string[] | null;
    /**
     * The summary content.
     */
    summaryText?: string | null;
    /**
     * Summary with metadata information.
     */
    summaryWithMetadata?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata;
  }
  /**
   * Citation info for a segment.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation {
    /**
     * End of the attributed segment, exclusive.
     */
    endIndex?: string | null;
    /**
     * Citation sources for the attributed segment.
     */
    sources?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationSource[];
    /**
     * Index indicates the start of the segment, measured in bytes/unicode.
     */
    startIndex?: string | null;
  }
  /**
   * Citation metadata.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationMetadata {
    /**
     * Citations for segments.
     */
    citations?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation[];
  }
  /**
   * Citation source.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationSource {
    /**
     * Document reference index from SummaryWithMetadata.references. It is 0-indexed and the value will be zero if the reference_index is not set explicitly.
     */
    referenceIndex?: string | null;
  }
  /**
   * Document reference.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference {
    /**
     * List of cited chunk contents derived from document content.
     */
    chunkContents?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReferenceChunkContent[];
    /**
     * Required. Document.name of the document. Full resource name of the referenced document, in the format `projects/x/locations/x/collections/x/dataStores/x/branches/x/documents/x`.
     */
    document?: string | null;
    /**
     * Title of the document.
     */
    title?: string | null;
    /**
     * Cloud Storage or HTTP uri for the document.
     */
    uri?: string | null;
  }
  /**
   * Chunk content.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReferenceChunkContent {
    /**
     * Chunk textual content.
     */
    content?: string | null;
    /**
     * Page identifier.
     */
    pageIdentifier?: string | null;
  }
  /**
   * Safety Attribute categories and their associated confidence scores.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummarySafetyAttributes {
    /**
     * The display names of Safety Attribute categories associated with the generated content. Order matches the Scores.
     */
    categories?: string[] | null;
    /**
     * The confidence scores of the each category, higher value means higher confidence. Order matches the Categories.
     */
    scores?: number[] | null;
  }
  /**
   * Summary with metadata information.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata {
    /**
     * Citation metadata for given summary.
     */
    citationMetadata?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationMetadata;
    /**
     * Document References.
     */
    references?: Schema$GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference[];
    /**
     * Summary text with no citation information.
     */
    summary?: string | null;
  }
  /**
   * Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions). The ServingConfig is passed in the search and predict request and generates results.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaServingConfig {
    /**
     * Boost controls to use in serving path. All triggered boost controls will be applied. Boost controls must be in the same data store as the serving config. Maximum of 20 boost controls.
     */
    boostControlIds?: string[] | null;
    /**
     * Output only. ServingConfig created timestamp.
     */
    createTime?: string | null;
    /**
     * Required. The human readable serving config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    displayName?: string | null;
    /**
     * Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. Order does not matter. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.
     */
    dissociateControlIds?: string[] | null;
    /**
     * How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if SolutionType is SOLUTION_TYPE_RECOMMENDATION.
     */
    diversityLevel?: string | null;
    /**
     * Bring your own embedding config. The config is used for search semantic retrieval. The retrieval is based on the dot product of SearchRequest.EmbeddingSpec.EmbeddingVector.vector and the document embeddings that are provided by this EmbeddingConfig. If SearchRequest.EmbeddingSpec.EmbeddingVector.vector is provided, it overrides this ServingConfig.embedding_config.
     */
    embeddingConfig?: Schema$GoogleCloudDiscoveryengineV1betaEmbeddingConfig;
    /**
     * Filter controls to use in serving path. All triggered filter controls will be applied. Filter controls must be in the same data store as the serving config. Maximum of 20 filter controls.
     */
    filterControlIds?: string[] | null;
    /**
     * The GenericConfig of the serving configuration.
     */
    genericConfig?: Schema$GoogleCloudDiscoveryengineV1betaServingConfigGenericConfig;
    /**
     * Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. Order does not matter. Maximum number of specifications is 100.
     */
    ignoreControlIds?: string[] | null;
    /**
     * The MediaConfig of the serving configuration.
     */
    mediaConfig?: Schema$GoogleCloudDiscoveryengineV1betaServingConfigMediaConfig;
    /**
     * The id of the model to use at serving time. Currently only RecommendationModels are supported. Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when SolutionType is SOLUTION_TYPE_RECOMMENDATION.
     */
    modelId?: string | null;
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/{location\}/collections/{collection_id\}/engines/{engine_id\}/servingConfigs/{serving_config_id\}`
     */
    name?: string | null;
    /**
     * Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.
     */
    onewaySynonymsControlIds?: string[] | null;
    /**
     * The ranking expression controls the customized ranking on retrieval documents. To leverage this, document embedding is required. The ranking expression setting in ServingConfig applies to all search requests served by the serving config. However, if SearchRequest.ranking_expression is specified, it overrides the ServingConfig ranking expression. The ranking expression is a single function or multiple functions that are joined by "+". * ranking_expression = function, { " + ", function \}; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: relevance_score: pre-defined keywords, used for measure relevance between query and document. embedding_field_path: the document embedding field used with query embedding vector. dotProduct: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be 0.5 * relevance_score + 0.3 * dotProduct(doc_embedding).
     */
    rankingExpression?: string | null;
    /**
     * IDs of the redirect controls. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.
     */
    redirectControlIds?: string[] | null;
    /**
     * Condition replacement specifications. Applied according to the order in the list. A previously replaced term can not be re-replaced. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.
     */
    replacementControlIds?: string[] | null;
    /**
     * Required. Immutable. Specifies the solution type that a serving config can be associated with.
     */
    solutionType?: string | null;
    /**
     * Condition synonyms specifications. If multiple synonyms conditions match, all matching synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH.
     */
    synonymsControlIds?: string[] | null;
    /**
     * Output only. ServingConfig updated timestamp.
     */
    updateTime?: string | null;
  }
  /**
   * Specifies the configurations needed for Generic Discovery.Currently we support: * `content_search_spec`: configuration for generic content search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaServingConfigGenericConfig {
    /**
     * Specifies the expected behavior of content search. Only valid for content-search enabled data store.
     */
    contentSearchSpec?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpec;
  }
  /**
   * Specifies the configurations needed for Media Discovery. Currently we support: * `demote_content_watched`: Threshold for watched content demotion. Customers can specify if using watched content demotion or use viewed detail page. Using the content watched demotion, customers need to specify the watched minutes or percentage exceeds the threshold, the content will be demoted in the recommendation result. * `promote_fresh_content`: cutoff days for fresh content promotion. Customers can specify if using content freshness promotion. If the content was published within the cutoff days, the content will be promoted in the recommendation result. Can only be set if SolutionType is SOLUTION_TYPE_RECOMMENDATION.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaServingConfigMediaConfig {
    /**
     * Specifies the content freshness used for recommendation result. Contents will be demoted if contents were published for more than content freshness cutoff days.
     */
    contentFreshnessCutoffDays?: number | null;
    /**
     * Specifies the content watched percentage threshold for demotion. Threshold value must be between [0, 1.0] inclusive.
     */
    contentWatchedPercentageThreshold?: number | null;
    /**
     * Specifies the content watched minutes threshold for demotion.
     */
    contentWatchedSecondsThreshold?: number | null;
    /**
     * Specifies the event type used for demoting recommendation result. Currently supported values: * `view-item`: Item viewed. * `media-play`: Start/resume watching a video, playing a song, etc. * `media-complete`: Finished or stopped midway through a video, song, etc. If unset, watch history demotion will not be applied. Content freshness demotion will still be applied.
     */
    demotionEventType?: string | null;
  }
  /**
   * External session proto definition.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSession {
    /**
     * Output only. The time the session finished.
     */
    endTime?: string | null;
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/engines/{engine\}/sessions/x`
     */
    name?: string | null;
    /**
     * Output only. The time the session started.
     */
    startTime?: string | null;
    /**
     * The state of the session.
     */
    state?: string | null;
    /**
     * Turns.
     */
    turns?: Schema$GoogleCloudDiscoveryengineV1betaSessionTurn[];
    /**
     * A unique identifier for tracking users.
     */
    userPseudoId?: string | null;
  }
  /**
   * Represents a turn, including a query from the user and a answer from service.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSessionTurn {
    /**
     * The resource name of the answer to the user query.
     */
    answer?: string | null;
    /**
     * The user query.
     */
    query?: Schema$GoogleCloudDiscoveryengineV1betaQuery;
  }
  /**
   * SiteSearchEngine captures DataStore level site search persisting configurations. It is a singleton value per data store.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine {
    /**
     * The fully qualified resource name of the site search engine. Format: `projects/x/locations/x/dataStores/x/siteSearchEngine`
     */
    name?: string | null;
  }
  /**
   * Verification information for target sites in advanced site search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSiteVerificationInfo {
    /**
     * Site verification state indicating the ownership and validity.
     */
    siteVerificationState?: string | null;
    /**
     * Latest site verification time.
     */
    verifyTime?: string | null;
  }
  /**
   * The Spanner source for importing data
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSpannerSource {
    /**
     * Required. The database ID of the source Spanner table.
     */
    databaseId?: string | null;
    /**
     * Whether to apply data boost on Spanner export. Enabling this option will incur additional cost. More info can be found [here](https://cloud.google.com/spanner/docs/databoost/databoost-overview#billing_and_quotas).
     */
    enableDataBoost?: boolean | null;
    /**
     * Required. The instance ID of the source Spanner table.
     */
    instanceId?: string | null;
    /**
     * The project ID that the Spanner source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.
     */
    projectId?: string | null;
    /**
     * Required. The table name of the Spanner database that needs to be imported.
     */
    tableId?: string | null;
  }
  /**
   * Suggestion deny list entry identifying the phrase to block from suggestions and the applied operation for the phrase.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry {
    /**
     * Required. Phrase to block from suggestions served. Can be maximum 125 characters.
     */
    blockPhrase?: string | null;
    /**
     * Required. The match operator to apply for this phrase. Whether to block the exact phrase, or block any suggestions containing this phrase.
     */
    matchOperator?: string | null;
  }
  /**
   * A target site for the SiteSearchEngine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTargetSite {
    /**
     * Input only. If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. If set to true, an uri_pattern is generated to try to be an exact match of the provided_uri_pattern or just the specific page if the provided_uri_pattern is a specific one. provided_uri_pattern is always normalized to generate the URI pattern to be used by the search engine.
     */
    exactMatch?: boolean | null;
    /**
     * Output only. Failure reason.
     */
    failureReason?: Schema$GoogleCloudDiscoveryengineV1betaTargetSiteFailureReason;
    /**
     * Output only. This is system-generated based on the provided_uri_pattern.
     */
    generatedUriPattern?: string | null;
    /**
     * Output only. Indexing status.
     */
    indexingStatus?: string | null;
    /**
     * Output only. The fully qualified resource name of the target site. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}` The `target_site_id` is system-generated.
     */
    name?: string | null;
    /**
     * Required. Input only. The user provided URI pattern from which the `generated_uri_pattern` is generated.
     */
    providedUriPattern?: string | null;
    /**
     * Output only. Root domain of the provided_uri_pattern.
     */
    rootDomainUri?: string | null;
    /**
     * Output only. Site ownership and validity verification status.
     */
    siteVerificationInfo?: Schema$GoogleCloudDiscoveryengineV1betaSiteVerificationInfo;
    /**
     * The type of the target site, e.g., whether the site is to be included or excluded.
     */
    type?: string | null;
    /**
     * Output only. The target site's last updated time.
     */
    updateTime?: string | null;
  }
  /**
   * Site search indexing failure reasons.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTargetSiteFailureReason {
    /**
     * Failed due to insufficient quota.
     */
    quotaFailure?: Schema$GoogleCloudDiscoveryengineV1betaTargetSiteFailureReasonQuotaFailure;
  }
  /**
   * Failed due to insufficient quota.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTargetSiteFailureReasonQuotaFailure {
    /**
     * This number is an estimation on how much total quota this project needs to successfully complete indexing.
     */
    totalRequiredQuota?: string | null;
  }
  /**
   * Defines text input.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTextInput {
    /**
     * Conversation context of the input.
     */
    context?: Schema$GoogleCloudDiscoveryengineV1betaConversationContext;
    /**
     * Text input.
     */
    input?: string | null;
  }
  /**
   * Metadata related to the progress of the TrainCustomModel operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTrainCustomModelMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for SearchTuningService.TrainCustomModel method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTrainCustomModelRequest {
    /**
     * The desired location of errors incurred during the data ingestion and training.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * Cloud Storage training input.
     */
    gcsTrainingInput?: Schema$GoogleCloudDiscoveryengineV1betaTrainCustomModelRequestGcsTrainingInput;
    /**
     * If not provided, a UUID will be generated.
     */
    modelId?: string | null;
    /**
     * Model to be trained. Supported values are: * **search-tuning**: Fine tuning the search system based on data provided.
     */
    modelType?: string | null;
  }
  /**
   * Cloud Storage training data input.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTrainCustomModelRequestGcsTrainingInput {
    /**
     * The Cloud Storage corpus data which could be associated in train data. The data path format is `gs:///`. A newline delimited jsonl/ndjson file. For search-tuning model, each line should have the _id, title and text. Example: `{"_id": "doc1", title: "relevant doc", "text": "relevant text"\}`
     */
    corpusDataPath?: string | null;
    /**
     * The gcs query data which could be associated in train data. The data path format is `gs:///`. A newline delimited jsonl/ndjson file. For search-tuning model, each line should have the _id and text. Example: {"_id": "query1", "text": "example query"\}
     */
    queryDataPath?: string | null;
    /**
     * Cloud Storage test data. Same format as train_data_path. If not provided, a random 80/20 train/test split will be performed on train_data_path.
     */
    testDataPath?: string | null;
    /**
     * Cloud Storage training data path whose format should be `gs:///`. The file should be in tsv format. Each line should have the doc_id and query_id and score (number). For search-tuning model, it should have the query-id corpus-id score as tsv file header. The score should be a number in `[0, inf+)`. The larger the number is, the more relevant the pair is. Example: * `query-id\tcorpus-id\tscore` * `query1\tdoc1\t1`
     */
    trainDataPath?: string | null;
  }
  /**
   * Response of the TrainCustomModelRequest. This message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTrainCustomModelResponse {
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * A sample of errors encountered while processing the data.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * The metrics of the trained model.
     */
    metrics?: {[key: string]: number} | null;
    /**
     * Fully qualified name of the CustomTuningModel.
     */
    modelName?: string | null;
    /**
     * The trained model status. Possible values are: * **bad-data**: The training data quality is bad. * **no-improvement**: Tuning didn't improve performance. Won't deploy. * **in-progress**: Model training job creation is in progress. * **training**: Model is actively training. * **evaluating**: The model is evaluating trained metrics. * **indexing**: The model trained metrics are indexing. * **ready**: The model is ready for serving.
     */
    modelStatus?: string | null;
  }
  /**
   * A transaction represents the entire purchase transaction.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTransactionInfo {
    /**
     * All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = value - tax - cost
     */
    cost?: number | null;
    /**
     * Required. Currency code. Use three-character ISO-4217 code.
     */
    currency?: string | null;
    /**
     * The total discount(s) value applied to this transaction. This figure should be excluded from TransactionInfo.value For example, if a user paid TransactionInfo.value amount, then nominal (pre-discount) value of the transaction is the sum of TransactionInfo.value and TransactionInfo.discount_value This means that profit is calculated the same way, regardless of the discount value, and that TransactionInfo.discount_value can be larger than TransactionInfo.value: * Profit = value - tax - cost
     */
    discountValue?: number | null;
    /**
     * All the taxes associated with the transaction.
     */
    tax?: number | null;
    /**
     * The transaction ID with a length limit of 128 characters.
     */
    transactionId?: string | null;
    /**
     * Required. Total non-zero value associated with the transaction. This value may include shipping, tax, or other adjustments to the total value that you want to include.
     */
    value?: number | null;
  }
  /**
   * Metadata associated with a tune operation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTuneEngineMetadata {
    /**
     * Required. The resource name of the engine that this tune applies to. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/engines/{engine_id\}`
     */
    engine?: string | null;
  }
  /**
   * Request to manually start a tuning process now (instead of waiting for the periodically scheduled tuning to happen).
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTuneEngineRequest {}
  /**
   * Response associated with a tune operation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaTuneEngineResponse {}
  /**
   * Metadata for UpdateSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaUpdateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.UpdateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaUpdateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaUserEvent {
    /**
     * Extra user event features to include in the recommendation model. These attributes must NOT contain data that needs to be parsed or processed further, e.g. JSON or other encodings. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Discovery Engine API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an `INVALID_ARGUMENT` error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is `traffic_channel`, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.
     */
    attributes?: {
      [key: string]: Schema$GoogleCloudDiscoveryengineV1betaCustomAttribute;
    } | null;
    /**
     * Token to attribute an API response to user action(s) to trigger the event. Highly recommended for user events that are the result of RecommendationService.Recommend. This field enables accurate attribution of recommendation model performance. The value must be one of: * RecommendResponse.attribution_token for events that are the result of RecommendationService.Recommend. * SearchResponse.attribution_token for events that are the result of SearchService.Search. This token enables us to accurately attribute page view or conversion completion back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass RecommendResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the RecommendResponse.attribution_token to this field.
     */
    attributionToken?: string | null;
    /**
     * CompletionService.CompleteQuery details related to the event. This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.
     */
    completionInfo?: Schema$GoogleCloudDiscoveryengineV1betaCompletionInfo;
    /**
     * Should set to true if the request is made directly from the end user, in which case the UserEvent.user_info.user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent.
     */
    directUserRequest?: boolean | null;
    /**
     * List of Documents associated with this user event. This field is optional except for the following event types: * `view-item` * `add-to-cart` * `purchase` * `media-play` * `media-complete` In a `search` event, this field represents the documents returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different UserEvent.documents is desired.
     */
    documents?: Schema$GoogleCloudDiscoveryengineV1betaDocumentInfo[];
    /**
     * Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.
     */
    eventTime?: string | null;
    /**
     * Required. User event type. Allowed values are: Generic values: * `search`: Search for Documents. * `view-item`: Detailed page view of a Document. * `view-item-list`: View of a panel or ordered list of Documents. * `view-home-page`: View of the home page. * `view-category-page`: View of a category page, e.g. Home \> Men \> Jeans Retail-related values: * `add-to-cart`: Add an item(s) to cart, e.g. in Retail online shopping * `purchase`: Purchase an item(s) Media-related values: * `media-play`: Start/resume watching a video, playing a song, etc. * `media-complete`: Finished or stopped midway through a video, song, etc.
     */
    eventType?: string | null;
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. One example is for `search` events, the associated SearchRequest may contain a filter expression in SearchRequest.filter conforming to https://google.aip.dev/160#filtering. Similarly, for `view-item-list` events that are generated from a RecommendRequest, this field may be populated directly from RecommendRequest.filter conforming to https://google.aip.dev/160#filtering. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    filter?: string | null;
    /**
     * Media-specific info.
     */
    mediaInfo?: Schema$GoogleCloudDiscoveryengineV1betaMediaInfo;
    /**
     * Page metadata such as categories and other critical information for certain event types such as `view-category-page`.
     */
    pageInfo?: Schema$GoogleCloudDiscoveryengineV1betaPageInfo;
    /**
     * Panel metadata associated with this user event.
     */
    panel?: Schema$GoogleCloudDiscoveryengineV1betaPanelInfo;
    /**
     * The promotion IDs if this is an event associated with promotions. Currently, this field is restricted to at most one ID.
     */
    promotionIds?: string[] | null;
    /**
     * SearchService.Search details related to the event. This field should be set for `search` event.
     */
    searchInfo?: Schema$GoogleCloudDiscoveryengineV1betaSearchInfo;
    /**
     * A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the session_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add UserEvent.user_pseudo_id as prefix.
     */
    sessionId?: string | null;
    /**
     * A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups on the customer end.
     */
    tagIds?: string[] | null;
    /**
     * The transaction metadata (if any) associated with this user event.
     */
    transactionInfo?: Schema$GoogleCloudDiscoveryengineV1betaTransactionInfo;
    /**
     * Information about the end user.
     */
    userInfo?: Schema$GoogleCloudDiscoveryengineV1betaUserInfo;
    /**
     * Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Do not set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.
     */
    userPseudoId?: string | null;
  }
  /**
   * Information of an end user.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1betaUserInfo {
    /**
     * User agent as included in the HTTP header. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if UserEvent.direct_user_request is set.
     */
    userAgent?: string | null;
    /**
     * Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users. Always use a hashed value for this ID. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    userId?: string | null;
  }
  /**
   * Metadata related to the progress of the DataStoreService.CreateDataStore operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1CreateDataStoreMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the EngineService.CreateEngine operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1CreateEngineMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for Create Schema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1CreateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.CreateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1CreateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * DataStore captures global settings and configs at the DataStore level.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DataStore {
    /**
     * Immutable. The content config of the data store. If this field is unset, the server behavior defaults to ContentConfig.NO_CONTENT.
     */
    contentConfig?: string | null;
    /**
     * Output only. Timestamp the DataStore was created at.
     */
    createTime?: string | null;
    /**
     * Output only. The id of the default Schema asscociated to this data store.
     */
    defaultSchemaId?: string | null;
    /**
     * Required. The data store display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    displayName?: string | null;
    /**
     * Configuration for Document understanding and enrichment.
     */
    documentProcessingConfig?: Schema$GoogleCloudDiscoveryengineV1DocumentProcessingConfig;
    /**
     * Immutable. The industry vertical that the data store registers.
     */
    industryVertical?: string | null;
    /**
     * Immutable. The full resource name of the data store. Format: `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The solutions that the data store enrolls. Available solutions for each industry_vertical: * `MEDIA`: `SOLUTION_TYPE_RECOMMENDATION` and `SOLUTION_TYPE_SEARCH`. * `SITE_SEARCH`: `SOLUTION_TYPE_SEARCH` is automatically enrolled. Other solutions cannot be enrolled.
     */
    solutionTypes?: string[] | null;
    /**
     * The start schema to use for this DataStore when provisioning it. If unset, a default vertical specialized schema will be used. This field is only used by CreateDataStore API, and will be ignored if used in other APIs. This field will be omitted from all API responses including CreateDataStore API. To retrieve a schema of a DataStore, use SchemaService.GetSchema API instead. The provided schema will be validated against certain rules on schema. Learn more from [this doc](https://cloud.google.com/generative-ai-app-builder/docs/provide-schema).
     */
    startingSchema?: Schema$GoogleCloudDiscoveryengineV1Schema;
  }
  /**
   * Metadata related to the progress of the DataStoreService.DeleteDataStore operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DeleteDataStoreMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the EngineService.DeleteEngine operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DeleteEngineMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for DeleteSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DeleteSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.DeleteTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DeleteTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.DisableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DisableAdvancedSiteSearchMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for SiteSearchEngineService.DisableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DisableAdvancedSiteSearchResponse {}
  /**
   * A singleton resource of DataStore. It's empty when DataStore is created, which defaults to digital parser. The first call to DataStoreService.UpdateDocumentProcessingConfig method will initialize the config.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DocumentProcessingConfig {
    /**
     * Configurations for default Document parser. If not specified, we will configure it as default DigitalParsingConfig, and the default parsing config will be applied to all file types for Document parsing.
     */
    defaultParsingConfig?: Schema$GoogleCloudDiscoveryengineV1DocumentProcessingConfigParsingConfig;
    /**
     * The full resource name of the Document Processing Config. Format: `projects/x/locations/x/collections/x/dataStores/x/documentProcessingConfig`.
     */
    name?: string | null;
    /**
     * Map from file type to override the default parsing configuration based on the file type. Supported keys: * `pdf`: Override parsing config for PDF files, either digital parsing, ocr parsing or layout parsing is supported. * `html`: Override parsing config for HTML files, only digital parsing and or layout parsing are supported. * `docx`: Override parsing config for DOCX files, only digital parsing and or layout parsing are supported.
     */
    parsingConfigOverrides?: {
      [
        key: string
      ]: Schema$GoogleCloudDiscoveryengineV1DocumentProcessingConfigParsingConfig;
    } | null;
  }
  /**
   * Related configurations applied to a specific type of document parser.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DocumentProcessingConfigParsingConfig {
    /**
     * Configurations applied to digital parser.
     */
    digitalParsingConfig?: Schema$GoogleCloudDiscoveryengineV1DocumentProcessingConfigParsingConfigDigitalParsingConfig;
    /**
     * Configurations applied to OCR parser. Currently it only applies to PDFs.
     */
    ocrParsingConfig?: Schema$GoogleCloudDiscoveryengineV1DocumentProcessingConfigParsingConfigOcrParsingConfig;
  }
  /**
   * The digital parsing configurations for documents.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DocumentProcessingConfigParsingConfigDigitalParsingConfig {}
  /**
   * The OCR parsing configurations for documents.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1DocumentProcessingConfigParsingConfigOcrParsingConfig {
    /**
     * [DEPRECATED] This field is deprecated. To use the additional enhanced document elements processing, please switch to `layout_parsing_config`.
     */
    enhancedDocumentElements?: string[] | null;
    /**
     * If true, will use native text instead of OCR text on pages containing native text.
     */
    useNativeText?: boolean | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.EnableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1EnableAdvancedSiteSearchMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for SiteSearchEngineService.EnableAdvancedSiteSearch method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1EnableAdvancedSiteSearchResponse {}
  /**
   * Metadata that describes the training and serving parameters of an Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1Engine {
    /**
     * Configurations for the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT.
     */
    chatEngineConfig?: Schema$GoogleCloudDiscoveryengineV1EngineChatEngineConfig;
    /**
     * Output only. Additional information of the Chat Engine. Only applicable if solution_type is SOLUTION_TYPE_CHAT.
     */
    chatEngineMetadata?: Schema$GoogleCloudDiscoveryengineV1EngineChatEngineMetadata;
    /**
     * Common config spec that specifies the metadata of the engine.
     */
    commonConfig?: Schema$GoogleCloudDiscoveryengineV1EngineCommonConfig;
    /**
     * Output only. Timestamp the Recommendation Engine was created at.
     */
    createTime?: string | null;
    /**
     * The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary initializations.
     */
    dataStoreIds?: string[] | null;
    /**
     * Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
     */
    displayName?: string | null;
    /**
     * The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to `GENERIC`. Vertical on Engine has to match vertical of the DataStore liniked to the engine.
     */
    industryVertical?: string | null;
    /**
     * Immutable. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}` engine should be 1-63 characters, and valid characters are /a-z0-9x/. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    name?: string | null;
    /**
     * Configurations for the Search Engine. Only applicable if solution_type is SOLUTION_TYPE_SEARCH.
     */
    searchEngineConfig?: Schema$GoogleCloudDiscoveryengineV1EngineSearchEngineConfig;
    /**
     * Required. The solutions of the engine.
     */
    solutionType?: string | null;
    /**
     * Output only. Timestamp the Recommendation Engine was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Configurations for a Chat Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1EngineChatEngineConfig {
    /**
     * The configurationt generate the Dialogflow agent that is associated to this Engine. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation.
     */
    agentCreationConfig?: Schema$GoogleCloudDiscoveryengineV1EngineChatEngineConfigAgentCreationConfig;
    /**
     * The resource name of an exist Dialogflow agent to link to this Chat Engine. Customers can either provide `agent_creation_config` to create agent or provide an agent name that links the agent with the Chat engine. Format: `projects//locations//agents/`. Note that the `dialogflow_agent_to_link` are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation. Use ChatEngineMetadata.dialogflow_agent for actual agent association after Engine is created.
     */
    dialogflowAgentToLink?: string | null;
  }
  /**
   * Configurations for generating a Dialogflow agent. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1EngineChatEngineConfigAgentCreationConfig {
    /**
     * Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search.
     */
    business?: string | null;
    /**
     * Required. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
     */
    defaultLanguageCode?: string | null;
    /**
     * Agent location for Agent creation, supported values: global/us/eu. If not provided, us Engine will create Agent using us-central-1 by default; eu Engine will create Agent using eu-west-1 by default.
     */
    location?: string | null;
    /**
     * Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
     */
    timeZone?: string | null;
  }
  /**
   * Additional information of a Chat Engine. Fields in this message are output only.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1EngineChatEngineMetadata {
    /**
     * The resource name of a Dialogflow agent, that this Chat Engine refers to. Format: `projects//locations//agents/`.
     */
    dialogflowAgent?: string | null;
  }
  /**
   * Common configurations for an Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1EngineCommonConfig {
    /**
     * Immutable. The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.
     */
    companyName?: string | null;
  }
  /**
   * Configurations for a Search Engine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1EngineSearchEngineConfig {
    /**
     * The add-on that this search engine enables.
     */
    searchAddOns?: string[] | null;
    /**
     * The search feature tier of this engine. Different tiers might have different pricing. To learn more, check the pricing documentation. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified.
     */
    searchTier?: string | null;
  }
  /**
   * Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1ImportDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Total count of entries that were processed.
     */
    totalCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1ImportDocumentsResponse {
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1ImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
  }
  /**
   * Configuration of destination for Import related errors.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1ImportErrorConfig {
    /**
     * Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the ImportSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for CompletionService.ImportSuggestionDenyListEntries method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Count of deny list entries that failed to be imported.
     */
    failedEntriesCount?: string | null;
    /**
     * Count of deny list entries successfully imported.
     */
    importedEntriesCount?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1ImportUserEventsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1ImportUserEventsResponse {
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorConfig?: Schema$GoogleCloudDiscoveryengineV1ImportErrorConfig;
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Count of user events imported with complete existing Documents.
     */
    joinedEventsCount?: string | null;
    /**
     * Count of user events imported, but with Document information not found in the existing Branch.
     */
    unjoinedEventsCount?: string | null;
  }
  /**
   * Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1PurgeDocumentsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were ignored as entries were not found.
     */
    ignoredCount?: string | null;
    /**
     * Count of entries that were deleted successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1PurgeDocumentsResponse {
    /**
     * The total count of documents purged as a result of the operation.
     */
    purgeCount?: string | null;
    /**
     * A sample of document names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random.
     */
    purgeSample?: string[] | null;
  }
  /**
   * Metadata related to the progress of the PurgeSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1PurgeSuggestionDenyListEntriesMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response message for CompletionService.PurgeSuggestionDenyListEntries method.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1PurgeSuggestionDenyListEntriesResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Number of suggestion deny list entries purged.
     */
    purgeCount?: string | null;
  }
  /**
   * Defines the structure and layout of a type of document data.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1Schema {
    /**
     * The JSON representation of the schema.
     */
    jsonSchema?: string | null;
    /**
     * Immutable. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string | null;
    /**
     * The structured representation of the schema.
     */
    structSchema?: {[key: string]: any} | null;
  }
  /**
   * Verification information for target sites in advanced site search.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1SiteVerificationInfo {
    /**
     * Site verification state indicating the ownership and validity.
     */
    siteVerificationState?: string | null;
    /**
     * Latest site verification time.
     */
    verifyTime?: string | null;
  }
  /**
   * A target site for the SiteSearchEngine.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1TargetSite {
    /**
     * Input only. If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. If set to true, an uri_pattern is generated to try to be an exact match of the provided_uri_pattern or just the specific page if the provided_uri_pattern is a specific one. provided_uri_pattern is always normalized to generate the URI pattern to be used by the search engine.
     */
    exactMatch?: boolean | null;
    /**
     * Output only. Failure reason.
     */
    failureReason?: Schema$GoogleCloudDiscoveryengineV1TargetSiteFailureReason;
    /**
     * Output only. This is system-generated based on the provided_uri_pattern.
     */
    generatedUriPattern?: string | null;
    /**
     * Output only. Indexing status.
     */
    indexingStatus?: string | null;
    /**
     * Output only. The fully qualified resource name of the target site. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}` The `target_site_id` is system-generated.
     */
    name?: string | null;
    /**
     * Required. Input only. The user provided URI pattern from which the `generated_uri_pattern` is generated.
     */
    providedUriPattern?: string | null;
    /**
     * Output only. Root domain of the provided_uri_pattern.
     */
    rootDomainUri?: string | null;
    /**
     * Output only. Site ownership and validity verification status.
     */
    siteVerificationInfo?: Schema$GoogleCloudDiscoveryengineV1SiteVerificationInfo;
    /**
     * The type of the target site, e.g., whether the site is to be included or excluded.
     */
    type?: string | null;
    /**
     * Output only. The target site's last updated time.
     */
    updateTime?: string | null;
  }
  /**
   * Site search indexing failure reasons.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1TargetSiteFailureReason {
    /**
     * Failed due to insufficient quota.
     */
    quotaFailure?: Schema$GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure;
  }
  /**
   * Failed due to insufficient quota.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure {
    /**
     * This number is an estimation on how much total quota this project needs to successfully complete indexing.
     */
    totalRequiredQuota?: string | null;
  }
  /**
   * Metadata for UpdateSchema LRO.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1UpdateSchemaMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata related to the progress of the SiteSearchEngineService.UpdateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudDiscoveryengineV1UpdateTargetSiteMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$GoogleTypeDate {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    collections: Resource$Projects$Locations$Collections;
    dataStores: Resource$Projects$Locations$Datastores;
    groundingConfigs: Resource$Projects$Locations$Groundingconfigs;
    operations: Resource$Projects$Locations$Operations;
    rankingConfigs: Resource$Projects$Locations$Rankingconfigs;
    userEvents: Resource$Projects$Locations$Userevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.collections = new Resource$Projects$Locations$Collections(
        this.context
      );
      this.dataStores = new Resource$Projects$Locations$Datastores(
        this.context
      );
      this.groundingConfigs = new Resource$Projects$Locations$Groundingconfigs(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.rankingConfigs = new Resource$Projects$Locations$Rankingconfigs(
        this.context
      );
      this.userEvents = new Resource$Projects$Locations$Userevents(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Collections {
    context: APIRequestContext;
    dataConnector: Resource$Projects$Locations$Collections$Dataconnector;
    dataStores: Resource$Projects$Locations$Collections$Datastores;
    engines: Resource$Projects$Locations$Collections$Engines;
    operations: Resource$Projects$Locations$Collections$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataConnector =
        new Resource$Projects$Locations$Collections$Dataconnector(this.context);
      this.dataStores = new Resource$Projects$Locations$Collections$Datastores(
        this.context
      );
      this.engines = new Resource$Projects$Locations$Collections$Engines(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Collections$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Collections$Dataconnector {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Collections$Dataconnector$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Collections$Dataconnector$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Collections$Dataconnector$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Dataconnector$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Collections$Datastores {
    context: APIRequestContext;
    branches: Resource$Projects$Locations$Collections$Datastores$Branches;
    conversations: Resource$Projects$Locations$Collections$Datastores$Conversations;
    customModels: Resource$Projects$Locations$Collections$Datastores$Custommodels;
    models: Resource$Projects$Locations$Collections$Datastores$Models;
    operations: Resource$Projects$Locations$Collections$Datastores$Operations;
    schemas: Resource$Projects$Locations$Collections$Datastores$Schemas;
    servingConfigs: Resource$Projects$Locations$Collections$Datastores$Servingconfigs;
    sessions: Resource$Projects$Locations$Collections$Datastores$Sessions;
    siteSearchEngine: Resource$Projects$Locations$Collections$Datastores$Sitesearchengine;
    suggestionDenyListEntries: Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries;
    userEvents: Resource$Projects$Locations$Collections$Datastores$Userevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.branches =
        new Resource$Projects$Locations$Collections$Datastores$Branches(
          this.context
        );
      this.conversations =
        new Resource$Projects$Locations$Collections$Datastores$Conversations(
          this.context
        );
      this.customModels =
        new Resource$Projects$Locations$Collections$Datastores$Custommodels(
          this.context
        );
      this.models =
        new Resource$Projects$Locations$Collections$Datastores$Models(
          this.context
        );
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Operations(
          this.context
        );
      this.schemas =
        new Resource$Projects$Locations$Collections$Datastores$Schemas(
          this.context
        );
      this.servingConfigs =
        new Resource$Projects$Locations$Collections$Datastores$Servingconfigs(
          this.context
        );
      this.sessions =
        new Resource$Projects$Locations$Collections$Datastores$Sessions(
          this.context
        );
      this.siteSearchEngine =
        new Resource$Projects$Locations$Collections$Datastores$Sitesearchengine(
          this.context
        );
      this.suggestionDenyListEntries =
        new Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries(
          this.context
        );
      this.userEvents =
        new Resource$Projects$Locations$Collections$Datastores$Userevents(
          this.context
        );
    }

    /**
     * Completes the specified user input with keyword suggestions.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    completeQuery(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Completequery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    completeQuery(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Completequery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>;
    completeQuery(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Completequery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Completequery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Completequery,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
    ): void;
    completeQuery(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
    ): void;
    completeQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Completequery
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Completequery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Completequery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+dataStore}:completeQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['dataStore'],
        pathParams: ['dataStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/dataStores').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDataStore>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDataStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDataStore>(
          parameters
        );
      }
    }

    /**
     * Gets the SiteSearchEngine.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSiteSearchEngine(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>(
          parameters
        );
      }
    }

    /**
     * Lists all the DataStores associated with the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/dataStores').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a DataStore
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDataStore>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDataStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDataStore>(
          parameters
        );
      }
    }

    /**
     * Trains a custom model.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    trainCustomModel(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    trainCustomModel(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    trainCustomModel(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    trainCustomModel(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    trainCustomModel(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    trainCustomModel(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    trainCustomModel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+dataStore}:trainCustomModel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['dataStore'],
        pathParams: ['dataStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Completequery
    extends StandardParameters {
    /**
     * Required. The parent data store resource name for which the completion is performed, such as `projects/x/locations/global/collections/default_collection/dataStores/default_data_store`.
     */
    dataStore?: string;
    /**
     * Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned.
     */
    includeTailSuggestions?: boolean;
    /**
     * Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters.
     */
    query?: string;
    /**
     * Specifies the autocomplete data model. This overrides any model specified in the Configuration \> Autocomplete section of the Cloud console. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores.
     */
    queryModel?: string;
    /**
     * A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    userPseudoId?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Create
    extends StandardParameters {
    /**
     * A boolean flag indicating whether user want to directly create an advanced data store for site search. If the data store is not configured as site search (GENERIC vertical and PUBLIC_WEBSITE content_config), this flag will be ignored.
     */
    createAdvancedSiteSearch?: boolean;
    /**
     * Required. The ID to use for the DataStore, which will become the final component of the DataStore's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    dataStoreId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDataStore;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of DataStore, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. If the caller does not have permission to delete the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the DataStore to delete does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of DataStore, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. If the caller does not have permission to access the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested DataStore does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Getsitesearchengine
    extends StandardParameters {
    /**
     * Required. Resource name of SiteSearchEngine, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. If the caller does not have permission to access the [SiteSearchEngine], regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$List
    extends StandardParameters {
    /**
     * Filter by solution type . For example: filter = 'solution_type:SOLUTION_TYPE_SEARCH'
     */
    filter?: string;
    /**
     * Maximum number of DataStores to return. If unspecified, defaults to 10. The maximum allowed value is 50. Values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT is returned.
     */
    pageSize?: number;
    /**
     * A page token ListDataStoresResponse.next_page_token, received from a previous DataStoreService.ListDataStores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DataStoreService.ListDataStores must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}`. If the caller does not have permission to list DataStores under this location, regardless of whether or not this data store exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Patch
    extends StandardParameters {
    /**
     * Immutable. The full resource name of the data store. Format: `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;
    /**
     * Indicates which fields in the provided DataStore to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDataStore;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Traincustommodel
    extends StandardParameters {
    /**
     * Required. The resource name of the Data Store, such as `projects/x/locations/global/collections/default_collection/dataStores/default_data_store`. This field is used to identify the data store where to train the models.
     */
    dataStore?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaTrainCustomModelRequest;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Branches {
    context: APIRequestContext;
    documents: Resource$Projects$Locations$Collections$Datastores$Branches$Documents;
    operations: Resource$Projects$Locations$Collections$Datastores$Branches$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.documents =
        new Resource$Projects$Locations$Collections$Datastores$Branches$Documents(
          this.context
        );
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Branches$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Collections$Datastores$Branches$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters
        );
      }
    }

    /**
     * Deletes a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters
        );
      }
    }

    /**
     * Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a list of Documents.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters
        );
      }
    }

    /**
     * Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    purge(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents:purge').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the Document, which will become the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all Documents with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    documentId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDocument;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the Document to delete does not exist, a `NOT_FOUND` error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Import
    extends StandardParameters {
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`. Requires create/update permission.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$List
    extends StandardParameters {
    /**
     * Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     */
    pageSize?: number;
    /**
     * A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documents under this branch, regardless of whether or not this branch exists, a `PERMISSION_DENIED` error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Patch
    extends StandardParameters {
    /**
     * If set to true, and the Document is not found, a new Document will be created.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The full resource name of the document. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;
    /**
     * Indicates which fields in the provided imported 'document' to update. If not set, will by default update all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDocument;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Documents$Purge
    extends StandardParameters {
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Branches$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Branches$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Conversations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Converses a conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    converse(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    converse(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
    ): void;
    converse(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
    ): void;
    converse(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:converse').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/conversations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters
        );
      }
    }

    /**
     * Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters
        );
      }
    }

    /**
     * Lists all Conversations by their parent DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/conversations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Converse
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`. Use `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaConverseConversationRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Create
    extends StandardParameters {
    /**
     * Required. Full resource name of parent data store. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaConversation;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to delete. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$List
    extends StandardParameters {
    /**
     * A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     */
    filter?: string;
    /**
     * A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time"
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The data store resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Conversations$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/dataStore/x/conversations/x` or `projects/{project\}/locations/global/collections/{collection\}/engines/x/conversations/x`.
     */
    name?: string;
    /**
     * Indicates which fields in the provided Conversation to update. The following are NOT supported: * Conversation.name If not set or empty, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaConversation;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Custommodels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a list of all the custom models.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Custommodels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Custommodels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Custommodels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Custommodels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Custommodels$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Custommodels$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Custommodels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Custommodels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+dataStore}/customModels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['dataStore'],
        pathParams: ['dataStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListCustomModelsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Custommodels$List
    extends StandardParameters {
    /**
     * Required. The resource name of the parent Data Store, such as `projects/x/locations/global/collections/default_collection/dataStores/default_data_store`. This field is used to identify the data store where to fetch the models from.
     */
    dataStore?: string;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Models {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Collections$Datastores$Models$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Models$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Collections$Datastores$Models$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Models$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Schemas {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Collections$Datastores$Schemas$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Schemas$Operations(
          this.context
        );
    }

    /**
     * Creates a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/schemas').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSchema>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSchema>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSchema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSchema>(
          parameters
        );
      }
    }

    /**
     * Gets a list of Schemas.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/schemas').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Create
    extends StandardParameters {
    /**
     * Required. The parent data store resource name, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the Schema, which will become the final component of the Schema.name. This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    schemaId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSchema;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Delete
    extends StandardParameters {
    /**
     * Required. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Get
    extends StandardParameters {
    /**
     * Required. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$List
    extends StandardParameters {
    /**
     * The maximum number of Schemas to return. The service may return fewer than this value. If unspecified, at most 100 Schemas will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous SchemaService.ListSchemas call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SchemaService.ListSchemas must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent data store resource name, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Patch
    extends StandardParameters {
    /**
     * If set to true, and the Schema is not found, a new Schema will be created. In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSchema;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Schemas$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Schemas$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Servingconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Answer query method.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    answer(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Answer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    answer(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Answer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>;
    answer(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Answer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    answer(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Answer,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
    ): void;
    answer(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Answer,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
    ): void;
    answer(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
    ): void;
    answer(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Answer
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Answer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Answer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+servingConfig}:answer').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['servingConfig'],
        pathParams: ['servingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>(
          parameters
        );
      }
    }

    /**
     * Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters
        );
      }
    }

    /**
     * Lists all ServingConfigs linked to this dataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/servingConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters
        );
      }
    }

    /**
     * Makes a recommendation, which requires a contextual user event.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recommend(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+servingConfig}:recommend').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['servingConfig'],
        pathParams: ['servingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>(
          parameters
        );
      }
    }

    /**
     * Performs a search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>;
    search(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+servingConfig}:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['servingConfig'],
        pathParams: ['servingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Answer
    extends StandardParameters {
    /**
     * Required. The resource name of the Search serving config, such as `projects/x/locations/global/collections/default_collection/engines/x/servingConfigs/default_serving_config`, or `projects/x/locations/global/collections/default_collection/dataStores/x/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the ServingConfig to get. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}/servingConfigs/{serving_config_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. Full resource name of the parent resource. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/{location\}/collections/{collection_id\}/engines/{engine_id\}/servingConfigs/{serving_config_id\}`
     */
    name?: string;
    /**
     * Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaServingConfig;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Recommend
    extends StandardParameters {
    /**
     * Required. Full resource name of a ServingConfig: `projects/x/locations/global/collections/x/engines/x/servingConfigs/x`, or `projects/x/locations/global/collections/x/dataStores/x/servingConfigs/x` One default serving config is created along with your recommendation engine creation. The engine ID will be used as the ID of the default serving config. For example, for Engine `projects/x/locations/global/collections/x/engines/my-engine`, you can use `projects/x/locations/global/collections/x/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaRecommendRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Servingconfigs$Search
    extends StandardParameters {
    /**
     * Required. The resource name of the Search serving config, such as `projects/x/locations/global/collections/default_collection/engines/x/servingConfigs/default_serving_config`, or `projects/x/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequest;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Sessions {
    context: APIRequestContext;
    answers: Resource$Projects$Locations$Collections$Datastores$Sessions$Answers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.answers =
        new Resource$Projects$Locations$Collections$Datastores$Sessions$Answers(
          this.context
        );
    }

    /**
     * Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters
        );
      }
    }

    /**
     * Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Session.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters
        );
      }
    }

    /**
     * Lists all Sessions by their parent DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sessions$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Create
    extends StandardParameters {
    /**
     * Required. Full resource name of parent data store. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSession;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Session to delete. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/sessions/{session_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Session to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/sessions/{session_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sessions$List
    extends StandardParameters {
    /**
     * A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     */
    filter?: string;
    /**
     * A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` Example: "update_time desc" "create_time"
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListSessions` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The data store resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/engines/{engine\}/sessions/x`
     */
    name?: string;
    /**
     * Indicates which fields in the provided Session to update. The following are NOT supported: * Session.name If not set or empty, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSession;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Sessions$Answers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a Answer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Answers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Answers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswer>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Answers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Answers$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Answers$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Answers$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Answers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Answers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswer>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sessions$Answers$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Answer to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/engines/{engine_id\}/sessions/{session_id\}/answers/{answer_id\}`
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Sitesearchengine {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations;
    targetSites: Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations(
          this.context
        );
      this.targetSites =
        new Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites(
          this.context
        );
    }

    /**
     * Verify target sites' ownership and validity. This API sends all the target sites under site search engine for verification.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchVerifyTargetSites(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchVerifyTargetSites(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchVerifyTargetSites(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchVerifyTargetSites(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchVerifyTargetSites(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchVerifyTargetSites(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchVerifyTargetSites(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}:batchVerifyTargetSites').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Downgrade from advanced site search to basic site search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disableAdvancedSiteSearch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+siteSearchEngine}:disableAdvancedSiteSearch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Upgrade from basic site search to advanced site search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enableAdvancedSiteSearch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+siteSearchEngine}:enableAdvancedSiteSearch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Returns list of target sites with its domain verification status. This method can only be called under data store with BASIC_SITE_SEARCH state at the moment.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchDomainVerificationStatus(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchDomainVerificationStatus(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>;
    fetchDomainVerificationStatus(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchDomainVerificationStatus(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>
    ): void;
    fetchDomainVerificationStatus(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>
    ): void;
    fetchDomainVerificationStatus(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>
    ): void;
    fetchDomainVerificationStatus(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta/{+siteSearchEngine}:fetchDomainVerificationStatus'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaFetchDomainVerificationStatusResponse>(
          parameters
        );
      }
    }

    /**
     * Request on-demand recrawl for a list of URIs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    recrawlUris(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recrawlUris(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+siteSearchEngine}:recrawlUris').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Batchverifytargetsites
    extends StandardParameters {
    /**
     * Required. The parent resource shared by all TargetSites being verified. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaBatchVerifyTargetSitesRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Disableadvancedsitesearch
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/{project\}/locations/{location\}/dataStores/{data_store_id\}/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDisableAdvancedSiteSearchRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Enableadvancedsitesearch
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/{project\}/locations/{location\}/dataStores/{data_store_id\}/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaEnableAdvancedSiteSearchRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Fetchdomainverificationstatus
    extends StandardParameters {
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `FetchDomainVerificationStatus` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchDomainVerificationStatus` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The site search engine resource under which we fetch all the domain verification status. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`.
     */
    siteSearchEngine?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Recrawluris
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/x/locations/x/collections/x/dataStores/x/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaRecrawlUrisRequest;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations(
          this.context
        );
    }

    /**
     * Creates TargetSite in a batch.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchCreate(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchCreate(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/targetSites:batchCreate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Creates a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/targetSites').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>(
          parameters
        );
      }
    }

    /**
     * Gets a list of TargetSites.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/targetSites').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Batchcreate
    extends StandardParameters {
    /**
     * Required. The parent resource shared by all TargetSites being created. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. The parent field in the CreateBookRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Create
    extends StandardParameters {
    /**
     * Required. Parent resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaTargetSite;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$List
    extends StandardParameters {
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListTargetSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargetSites` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent site search engine resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. If the caller does not have permission to list TargetSites under this site search engine, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Patch
    extends StandardParameters {
    /**
     * Output only. The fully qualified resource name of the target site. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}` The `target_site_id` is system-generated.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaTargetSite;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Sitesearchengine$Targetsites$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Imports all SuggestionDenyListEntry for a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/suggestionDenyListEntries:import'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Permanently deletes all SuggestionDenyListEntry for a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Purge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    purge(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Purge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Purge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Purge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Purge,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Purge
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Purge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/suggestionDenyListEntries:purge'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Import
    extends StandardParameters {
    /**
     * Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/x/locations/x/collections/x/dataStores/x.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Suggestiondenylistentries$Purge
    extends StandardParameters {
    /**
     * Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/x/locations/x/collections/x/dataStores/x.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesRequest;
  }

  export class Resource$Projects$Locations$Collections$Datastores$Userevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    collect(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    collect(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleApiHttpBody>;
    collect(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApiHttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(callback: BodyResponseCallback<Schema$GoogleApiHttpBody>): void;
    collect(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleApiHttpBody>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/userEvents:collect').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleApiHttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleApiHttpBody>(parameters);
      }
    }

    /**
     * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/userEvents:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Writes a single user event.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    write(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    write(
      params?: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>;
    write(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/userEvents:write').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Collect
    extends StandardParameters {
    /**
     * The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     */
    ets?: string;
    /**
     * Required. The parent DataStore resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
    /**
     * The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests.
     */
    uri?: string;
    /**
     * Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
     */
    userEvent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Import
    extends StandardParameters {
    /**
     * Required. Parent DataStore resource name, of the form `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Datastores$Userevents$Write
    extends StandardParameters {
    /**
     * Required. The parent resource name. If the write user event action is applied in DataStore level, the format is: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`. If the write user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaUserEvent;
  }

  export class Resource$Projects$Locations$Collections$Engines {
    context: APIRequestContext;
    conversations: Resource$Projects$Locations$Collections$Engines$Conversations;
    operations: Resource$Projects$Locations$Collections$Engines$Operations;
    servingConfigs: Resource$Projects$Locations$Collections$Engines$Servingconfigs;
    sessions: Resource$Projects$Locations$Collections$Engines$Sessions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.conversations =
        new Resource$Projects$Locations$Collections$Engines$Conversations(
          this.context
        );
      this.operations =
        new Resource$Projects$Locations$Collections$Engines$Operations(
          this.context
        );
      this.servingConfigs =
        new Resource$Projects$Locations$Collections$Engines$Servingconfigs(
          this.context
        );
      this.sessions =
        new Resource$Projects$Locations$Collections$Engines$Sessions(
          this.context
        );
    }

    /**
     * Creates a Engine.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/engines').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a Engine.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a Engine.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaEngine>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaEngine>(
          parameters
        );
      }
    }

    /**
     * Lists all the Engines associated with the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Engines$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/engines').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListEnginesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an Engine
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaEngine>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaEngine>(
          parameters
        );
      }
    }

    /**
     * Pauses the training of an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    pause(
      params: Params$Resource$Projects$Locations$Collections$Engines$Pause,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    pause(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Pause,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaEngine>;
    pause(
      params: Params$Resource$Projects$Locations$Collections$Engines$Pause,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pause(
      params: Params$Resource$Projects$Locations$Collections$Engines$Pause,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    pause(
      params: Params$Resource$Projects$Locations$Collections$Engines$Pause,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    pause(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    pause(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Pause
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:pause').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaEngine>(
          parameters
        );
      }
    }

    /**
     * Resumes the training of an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resume(
      params: Params$Resource$Projects$Locations$Collections$Engines$Resume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resume(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Resume,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaEngine>;
    resume(
      params: Params$Resource$Projects$Locations$Collections$Engines$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Projects$Locations$Collections$Engines$Resume,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    resume(
      params: Params$Resource$Projects$Locations$Collections$Engines$Resume,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    resume(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
    ): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Resume
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:resume').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaEngine>(
          parameters
        );
      }
    }

    /**
     * Tunes an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    tune(
      params: Params$Resource$Projects$Locations$Collections$Engines$Tune,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    tune(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Tune,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    tune(
      params: Params$Resource$Projects$Locations$Collections$Engines$Tune,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    tune(
      params: Params$Resource$Projects$Locations$Collections$Engines$Tune,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    tune(
      params: Params$Resource$Projects$Locations$Collections$Engines$Tune,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    tune(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    tune(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Tune
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Tune;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Tune;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:tune').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Engines$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the Engine, which will become the final component of the Engine's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    engineId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaEngine;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of Engine, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/engines/{engine_id\}`. If the caller does not have permission to delete the Engine, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Engine to delete does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of Engine, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/engines/{engine_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$List
    extends StandardParameters {
    /**
     * Optional. Filter by solution type. For example: solution_type=SOLUTION_TYPE_SEARCH
     */
    filter?: string;
    /**
     * Optional. Not supported.
     */
    pageSize?: number;
    /**
     * Optional. Not supported.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Patch
    extends StandardParameters {
    /**
     * Immutable. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}` engine should be 1-63 characters, and valid characters are /a-z0-9x/. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    name?: string;
    /**
     * Indicates which fields in the provided Engine to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaEngine;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Pause
    extends StandardParameters {
    /**
     * Required. The name of the engine to pause. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/engines/{engine_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaPauseEngineRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Resume
    extends StandardParameters {
    /**
     * Required. The name of the engine to resume. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/engines/{engine_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaResumeEngineRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Tune
    extends StandardParameters {
    /**
     * Required. The resource name of the engine to tune. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection_id\}/engines/{engine_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaTuneEngineRequest;
  }

  export class Resource$Projects$Locations$Collections$Engines$Conversations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Converses a conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    converse(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    converse(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
    ): void;
    converse(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
    ): void;
    converse(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:converse').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/conversations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters
        );
      }
    }

    /**
     * Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters
        );
      }
    }

    /**
     * Lists all Conversations by their parent DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/conversations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$Converse
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`. Use `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaConverseConversationRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$Create
    extends StandardParameters {
    /**
     * Required. Full resource name of parent data store. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaConversation;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to delete. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$List
    extends StandardParameters {
    /**
     * A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     */
    filter?: string;
    /**
     * A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time"
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The data store resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Conversations$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/dataStore/x/conversations/x` or `projects/{project\}/locations/global/collections/{collection\}/engines/x/conversations/x`.
     */
    name?: string;
    /**
     * Indicates which fields in the provided Conversation to update. The following are NOT supported: * Conversation.name If not set or empty, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaConversation;
  }

  export class Resource$Projects$Locations$Collections$Engines$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Engines$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Collections$Engines$Servingconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Answer query method.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    answer(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Answer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    answer(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Answer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>;
    answer(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Answer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    answer(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Answer,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
    ): void;
    answer(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Answer,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
    ): void;
    answer(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
    ): void;
    answer(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Answer
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Answer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Answer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+servingConfig}:answer').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['servingConfig'],
        pathParams: ['servingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>(
          parameters
        );
      }
    }

    /**
     * Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters
        );
      }
    }

    /**
     * Lists all ServingConfigs linked to this dataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/servingConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters
        );
      }
    }

    /**
     * Makes a recommendation, which requires a contextual user event.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recommend(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+servingConfig}:recommend').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['servingConfig'],
        pathParams: ['servingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>(
          parameters
        );
      }
    }

    /**
     * Performs a search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>;
    search(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+servingConfig}:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['servingConfig'],
        pathParams: ['servingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Answer
    extends StandardParameters {
    /**
     * Required. The resource name of the Search serving config, such as `projects/x/locations/global/collections/default_collection/engines/x/servingConfigs/default_serving_config`, or `projects/x/locations/global/collections/default_collection/dataStores/x/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the ServingConfig to get. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}/servingConfigs/{serving_config_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. Full resource name of the parent resource. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/{location\}/collections/{collection_id\}/engines/{engine_id\}/servingConfigs/{serving_config_id\}`
     */
    name?: string;
    /**
     * Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaServingConfig;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Recommend
    extends StandardParameters {
    /**
     * Required. Full resource name of a ServingConfig: `projects/x/locations/global/collections/x/engines/x/servingConfigs/x`, or `projects/x/locations/global/collections/x/dataStores/x/servingConfigs/x` One default serving config is created along with your recommendation engine creation. The engine ID will be used as the ID of the default serving config. For example, for Engine `projects/x/locations/global/collections/x/engines/my-engine`, you can use `projects/x/locations/global/collections/x/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaRecommendRequest;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Servingconfigs$Search
    extends StandardParameters {
    /**
     * Required. The resource name of the Search serving config, such as `projects/x/locations/global/collections/default_collection/engines/x/servingConfigs/default_serving_config`, or `projects/x/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequest;
  }

  export class Resource$Projects$Locations$Collections$Engines$Sessions {
    context: APIRequestContext;
    answers: Resource$Projects$Locations$Collections$Engines$Sessions$Answers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.answers =
        new Resource$Projects$Locations$Collections$Engines$Sessions$Answers(
          this.context
        );
    }

    /**
     * Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Sessions$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Sessions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Sessions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters
        );
      }
    }

    /**
     * Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Sessions$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Sessions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Sessions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Session.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Sessions$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Sessions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Sessions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters
        );
      }
    }

    /**
     * Lists all Sessions by their parent DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Sessions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Sessions$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Sessions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Sessions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Sessions$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Sessions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Sessions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Engines$Sessions$Create
    extends StandardParameters {
    /**
     * Required. Full resource name of parent data store. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSession;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Sessions$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Session to delete. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/sessions/{session_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Sessions$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Session to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/sessions/{session_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Sessions$List
    extends StandardParameters {
    /**
     * A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     */
    filter?: string;
    /**
     * A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` Example: "update_time desc" "create_time"
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListSessions` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The data store resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Engines$Sessions$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/engines/{engine\}/sessions/x`
     */
    name?: string;
    /**
     * Indicates which fields in the provided Session to update. The following are NOT supported: * Session.name If not set or empty, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSession;
  }

  export class Resource$Projects$Locations$Collections$Engines$Sessions$Answers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a Answer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Answers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Answers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswer>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Answers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Answers$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Engines$Sessions$Answers$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Engines$Sessions$Answers$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Engines$Sessions$Answers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Engines$Sessions$Answers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswer>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Engines$Sessions$Answers$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Answer to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/engines/{engine_id\}/sessions/{session_id\}/answers/{answer_id\}`
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Collections$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Collections$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Collections$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Collections$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Collections$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Collections$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Collections$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Collections$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Collections$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Collections$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Collections$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Collections$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Collections$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Collections$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Datastores {
    context: APIRequestContext;
    branches: Resource$Projects$Locations$Datastores$Branches;
    conversations: Resource$Projects$Locations$Datastores$Conversations;
    models: Resource$Projects$Locations$Datastores$Models;
    operations: Resource$Projects$Locations$Datastores$Operations;
    schemas: Resource$Projects$Locations$Datastores$Schemas;
    servingConfigs: Resource$Projects$Locations$Datastores$Servingconfigs;
    sessions: Resource$Projects$Locations$Datastores$Sessions;
    siteSearchEngine: Resource$Projects$Locations$Datastores$Sitesearchengine;
    suggestionDenyListEntries: Resource$Projects$Locations$Datastores$Suggestiondenylistentries;
    userEvents: Resource$Projects$Locations$Datastores$Userevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.branches = new Resource$Projects$Locations$Datastores$Branches(
        this.context
      );
      this.conversations =
        new Resource$Projects$Locations$Datastores$Conversations(this.context);
      this.models = new Resource$Projects$Locations$Datastores$Models(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Datastores$Operations(
        this.context
      );
      this.schemas = new Resource$Projects$Locations$Datastores$Schemas(
        this.context
      );
      this.servingConfigs =
        new Resource$Projects$Locations$Datastores$Servingconfigs(this.context);
      this.sessions = new Resource$Projects$Locations$Datastores$Sessions(
        this.context
      );
      this.siteSearchEngine =
        new Resource$Projects$Locations$Datastores$Sitesearchengine(
          this.context
        );
      this.suggestionDenyListEntries =
        new Resource$Projects$Locations$Datastores$Suggestiondenylistentries(
          this.context
        );
      this.userEvents = new Resource$Projects$Locations$Datastores$Userevents(
        this.context
      );
    }

    /**
     * Completes the specified user input with keyword suggestions.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    completeQuery(
      params: Params$Resource$Projects$Locations$Datastores$Completequery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    completeQuery(
      params?: Params$Resource$Projects$Locations$Datastores$Completequery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>;
    completeQuery(
      params: Params$Resource$Projects$Locations$Datastores$Completequery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Locations$Datastores$Completequery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Locations$Datastores$Completequery,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
    ): void;
    completeQuery(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
    ): void;
    completeQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Completequery
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Completequery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Completequery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+dataStore}:completeQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['dataStore'],
        pathParams: ['dataStore'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datastores$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datastores$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/dataStores').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datastores$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDataStore>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datastores$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDataStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDataStore>(
          parameters
        );
      }
    }

    /**
     * Gets the SiteSearchEngine.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Datastores$Getsitesearchengine,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSiteSearchEngine(
      params?: Params$Resource$Projects$Locations$Datastores$Getsitesearchengine,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Datastores$Getsitesearchengine,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Datastores$Getsitesearchengine,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      params: Params$Resource$Projects$Locations$Datastores$Getsitesearchengine,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
    ): void;
    getSiteSearchEngine(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Getsitesearchengine
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Getsitesearchengine;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Getsitesearchengine;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSiteSearchEngine>(
          parameters
        );
      }
    }

    /**
     * Lists all the DataStores associated with the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datastores$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/dataStores').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListDataStoresResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a DataStore
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDataStore>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDataStore>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datastores$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDataStore>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDataStore>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Completequery
    extends StandardParameters {
    /**
     * Required. The parent data store resource name for which the completion is performed, such as `projects/x/locations/global/collections/default_collection/dataStores/default_data_store`.
     */
    dataStore?: string;
    /**
     * Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned.
     */
    includeTailSuggestions?: boolean;
    /**
     * Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters.
     */
    query?: string;
    /**
     * Specifies the autocomplete data model. This overrides any model specified in the Configuration \> Autocomplete section of the Cloud console. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores.
     */
    queryModel?: string;
    /**
     * A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    userPseudoId?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Create
    extends StandardParameters {
    /**
     * A boolean flag indicating whether user want to directly create an advanced data store for site search. If the data store is not configured as site search (GENERIC vertical and PUBLIC_WEBSITE content_config), this flag will be ignored.
     */
    createAdvancedSiteSearch?: boolean;
    /**
     * Required. The ID to use for the DataStore, which will become the final component of the DataStore's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    dataStoreId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDataStore;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of DataStore, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. If the caller does not have permission to delete the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the DataStore to delete does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of DataStore, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. If the caller does not have permission to access the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested DataStore does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Getsitesearchengine
    extends StandardParameters {
    /**
     * Required. Resource name of SiteSearchEngine, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. If the caller does not have permission to access the [SiteSearchEngine], regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$List
    extends StandardParameters {
    /**
     * Filter by solution type . For example: filter = 'solution_type:SOLUTION_TYPE_SEARCH'
     */
    filter?: string;
    /**
     * Maximum number of DataStores to return. If unspecified, defaults to 10. The maximum allowed value is 50. Values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT is returned.
     */
    pageSize?: number;
    /**
     * A page token ListDataStoresResponse.next_page_token, received from a previous DataStoreService.ListDataStores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DataStoreService.ListDataStores must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection_id\}`. If the caller does not have permission to list DataStores under this location, regardless of whether or not this data store exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Patch
    extends StandardParameters {
    /**
     * Immutable. The full resource name of the data store. Format: `projects/{project\}/locations/{location\}/collections/{collection_id\}/dataStores/{data_store_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;
    /**
     * Indicates which fields in the provided DataStore to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDataStore;
  }

  export class Resource$Projects$Locations$Datastores$Branches {
    context: APIRequestContext;
    documents: Resource$Projects$Locations$Datastores$Branches$Documents;
    operations: Resource$Projects$Locations$Datastores$Branches$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.documents =
        new Resource$Projects$Locations$Datastores$Branches$Documents(
          this.context
        );
      this.operations =
        new Resource$Projects$Locations$Datastores$Branches$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Datastores$Branches$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters
        );
      }
    }

    /**
     * Deletes a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters
        );
      }
    }

    /**
     * Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a list of Documents.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListDocumentsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaDocument>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaDocument>(
          parameters
        );
      }
    }

    /**
     * Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    purge(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/documents:purge').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the Document, which will become the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all Documents with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    documentId?: string;
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDocument;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the Document to delete does not exist, a `NOT_FOUND` error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of Document, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document\}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Import
    extends StandardParameters {
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`. Requires create/update permission.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaImportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$List
    extends StandardParameters {
    /**
     * Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     */
    pageSize?: number;
    /**
     * A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent branch resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documents under this branch, regardless of whether or not this branch exists, a `PERMISSION_DENIED` error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Patch
    extends StandardParameters {
    /**
     * If set to true, and the Document is not found, a new Document will be created.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The full resource name of the document. Format: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}/documents/{document_id\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;
    /**
     * Indicates which fields in the provided imported 'document' to update. If not set, will by default update all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDocument;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Documents$Purge
    extends StandardParameters {
    /**
     * Required. The parent resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/branches/{branch\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest;
  }

  export class Resource$Projects$Locations$Datastores$Branches$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Branches$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Branches$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Branches$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Branches$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Branches$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Branches$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Branches$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Datastores$Conversations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Converses a conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    converse(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Converse,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    converse(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$Converse,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>;
    converse(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Converse,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Converse,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
    ): void;
    converse(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Converse,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
    ): void;
    converse(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
    ): void;
    converse(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$Converse
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$Converse;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$Converse;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:converse').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConverseConversationResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/conversations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters
        );
      }
    }

    /**
     * Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Conversation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters
        );
      }
    }

    /**
     * Lists all Conversations by their parent DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/conversations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListConversationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Conversations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Conversations$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Conversations$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaConversation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaConversation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Conversations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Conversations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaConversation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Conversations$Converse
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`. Use `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaConverseConversationRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Conversations$Create
    extends StandardParameters {
    /**
     * Required. Full resource name of parent data store. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaConversation;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Conversations$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to delete. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Conversations$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Conversation to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/conversations/{conversation_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Conversations$List
    extends StandardParameters {
    /**
     * A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     */
    filter?: string;
    /**
     * A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time"
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The data store resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Conversations$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/dataStore/x/conversations/x` or `projects/{project\}/locations/global/collections/{collection\}/engines/x/conversations/x`.
     */
    name?: string;
    /**
     * Indicates which fields in the provided Conversation to update. The following are NOT supported: * Conversation.name If not set or empty, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaConversation;
  }

  export class Resource$Projects$Locations$Datastores$Models {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Datastores$Models$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Datastores$Models$Operations(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Datastores$Models$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Models$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Models$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Models$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Models$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Models$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Models$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Models$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Models$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Models$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Models$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Models$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Datastores$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Datastores$Schemas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Schemas$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Schemas$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Schemas$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Schemas$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/schemas').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Schemas$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Schemas$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Schemas$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Schemas$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Schemas$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSchema>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Schemas$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSchema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSchema>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Schemas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Schemas$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSchema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSchema>(
          parameters
        );
      }
    }

    /**
     * Gets a list of Schemas.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Schemas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Schemas$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Schemas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Schemas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/schemas').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListSchemasResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Schema.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Schemas$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Schemas$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Schemas$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Schemas$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Schemas$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Schemas$Create
    extends StandardParameters {
    /**
     * Required. The parent data store resource name, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the Schema, which will become the final component of the Schema.name. This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     */
    schemaId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSchema;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Schemas$Delete
    extends StandardParameters {
    /**
     * Required. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Schemas$Get
    extends StandardParameters {
    /**
     * Required. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Schemas$List
    extends StandardParameters {
    /**
     * The maximum number of Schemas to return. The service may return fewer than this value. If unspecified, at most 100 Schemas will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous SchemaService.ListSchemas call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SchemaService.ListSchemas must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent data store resource name, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Schemas$Patch
    extends StandardParameters {
    /**
     * If set to true, and the Schema is not found, a new Schema will be created. In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Immutable. The full resource name of the schema, in the format of `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/schemas/{schema\}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSchema;
  }

  export class Resource$Projects$Locations$Datastores$Servingconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Answer query method.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    answer(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Answer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    answer(
      params?: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Answer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>;
    answer(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Answer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    answer(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Answer,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
    ): void;
    answer(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Answer,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
    ): void;
    answer(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
    ): void;
    answer(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Servingconfigs$Answer
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Answer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Answer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+servingConfig}:answer').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['servingConfig'],
        pathParams: ['servingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryResponse>(
          parameters
        );
      }
    }

    /**
     * Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Servingconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters
        );
      }
    }

    /**
     * Lists all ServingConfigs linked to this dataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Servingconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Servingconfigs$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Servingconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Servingconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/servingConfigs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListServingConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Servingconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaServingConfig>(
          parameters
        );
      }
    }

    /**
     * Makes a recommendation, which requires a contextual user event.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recommend(
      params?: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>;
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
    ): void;
    recommend(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+servingConfig}:recommend').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['servingConfig'],
        pathParams: ['servingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaRecommendResponse>(
          parameters
        );
      }
    }

    /**
     * Performs a search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>;
    search(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+servingConfig}:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['servingConfig'],
        pathParams: ['servingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSearchResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Servingconfigs$Answer
    extends StandardParameters {
    /**
     * Required. The resource name of the Search serving config, such as `projects/x/locations/global/collections/default_collection/engines/x/servingConfigs/default_serving_config`, or `projects/x/locations/global/collections/default_collection/dataStores/x/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaAnswerQueryRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Servingconfigs$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the ServingConfig to get. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}/servingConfigs/{serving_config_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Servingconfigs$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. Full resource name of the parent resource. Format: `projects/{project_number\}/locations/{location\}/collections/{collection\}/engines/{engine\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Servingconfigs$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/{location\}/collections/{collection_id\}/engines/{engine_id\}/servingConfigs/{serving_config_id\}`
     */
    name?: string;
    /**
     * Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaServingConfig;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Servingconfigs$Recommend
    extends StandardParameters {
    /**
     * Required. Full resource name of a ServingConfig: `projects/x/locations/global/collections/x/engines/x/servingConfigs/x`, or `projects/x/locations/global/collections/x/dataStores/x/servingConfigs/x` One default serving config is created along with your recommendation engine creation. The engine ID will be used as the ID of the default serving config. For example, for Engine `projects/x/locations/global/collections/x/engines/my-engine`, you can use `projects/x/locations/global/collections/x/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaRecommendRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Servingconfigs$Search
    extends StandardParameters {
    /**
     * Required. The resource name of the Search serving config, such as `projects/x/locations/global/collections/default_collection/engines/x/servingConfigs/default_serving_config`, or `projects/x/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     */
    servingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSearchRequest;
  }

  export class Resource$Projects$Locations$Datastores$Sessions {
    context: APIRequestContext;
    answers: Resource$Projects$Locations$Datastores$Sessions$Answers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.answers =
        new Resource$Projects$Locations$Datastores$Sessions$Answers(
          this.context
        );
    }

    /**
     * Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Sessions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sessions$Create
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sessions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sessions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters
        );
      }
    }

    /**
     * Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Sessions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sessions$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sessions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sessions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Session.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Sessions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sessions$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sessions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sessions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters
        );
      }
    }

    /**
     * Lists all Sessions by their parent DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Sessions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sessions$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sessions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sessions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListSessionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Sessions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sessions$Patch
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaSession>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaSession>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sessions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sessions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaSession>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Sessions$Create
    extends StandardParameters {
    /**
     * Required. Full resource name of parent data store. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSession;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sessions$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the Session to delete. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/sessions/{session_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sessions$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Session to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}/sessions/{session_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sessions$List
    extends StandardParameters {
    /**
     * A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     */
    filter?: string;
    /**
     * A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` Example: "update_time desc" "create_time"
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListSessions` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The data store resource name. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/dataStores/{data_store_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sessions$Patch
    extends StandardParameters {
    /**
     * Immutable. Fully qualified name `projects/{project\}/locations/global/collections/{collection\}/engines/{engine\}/sessions/x`
     */
    name?: string;
    /**
     * Indicates which fields in the provided Session to update. The following are NOT supported: * Session.name If not set or empty, all supported fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaSession;
  }

  export class Resource$Projects$Locations$Datastores$Sessions$Answers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a Answer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Answers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Sessions$Answers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswer>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Answers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Answers$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sessions$Answers$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sessions$Answers$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaAnswer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sessions$Answers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sessions$Answers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaAnswer>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Sessions$Answers$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Answer to get. Format: `projects/{project_number\}/locations/{location_id\}/collections/{collection\}/engines/{engine_id\}/sessions/{session_id\}/answers/{answer_id\}`
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Datastores$Sitesearchengine {
    context: APIRequestContext;
    targetSites: Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.targetSites =
        new Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites(
          this.context
        );
    }

    /**
     * Downgrade from advanced site search to basic site search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disableAdvancedSiteSearch(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    disableAdvancedSiteSearch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+siteSearchEngine}:disableAdvancedSiteSearch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Upgrade from basic site search to advanced site search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enableAdvancedSiteSearch(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    enableAdvancedSiteSearch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+siteSearchEngine}:enableAdvancedSiteSearch'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Request on-demand recrawl for a list of URIs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    recrawlUris(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recrawlUris(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    recrawlUris(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+siteSearchEngine}:recrawlUris').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['siteSearchEngine'],
        pathParams: ['siteSearchEngine'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Disableadvancedsitesearch
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/{project\}/locations/{location\}/dataStores/{data_store_id\}/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaDisableAdvancedSiteSearchRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Enableadvancedsitesearch
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/{project\}/locations/{location\}/dataStores/{data_store_id\}/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaEnableAdvancedSiteSearchRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Recrawluris
    extends StandardParameters {
    /**
     * Required. Full resource name of the SiteSearchEngine, such as `projects/x/locations/x/collections/x/dataStores/x/siteSearchEngine`.
     */
    siteSearchEngine?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaRecrawlUrisRequest;
  }

  export class Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates TargetSite in a batch.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchCreate(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchCreate(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/targetSites:batchCreate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Creates a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/targetSites').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaTargetSite>(
          parameters
        );
      }
    }

    /**
     * Gets a list of TargetSites.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/targetSites').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaListTargetSitesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a TargetSite.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Batchcreate
    extends StandardParameters {
    /**
     * Required. The parent resource shared by all TargetSites being created. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. The parent field in the CreateBookRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Create
    extends StandardParameters {
    /**
     * Required. Parent resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaTargetSite;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of TargetSite, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$List
    extends StandardParameters {
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListTargetSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargetSites` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent site search engine resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine`. If the caller does not have permission to list TargetSites under this site search engine, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Sitesearchengine$Targetsites$Patch
    extends StandardParameters {
    /**
     * Output only. The fully qualified resource name of the target site. `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}/siteSearchEngine/targetSites/{target_site\}` The `target_site_id` is system-generated.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaTargetSite;
  }

  export class Resource$Projects$Locations$Datastores$Suggestiondenylistentries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Imports all SuggestionDenyListEntry for a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/suggestionDenyListEntries:import'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Permanently deletes all SuggestionDenyListEntry for a DataStore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Purge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    purge(
      params?: Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Purge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Purge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Purge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Purge,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Purge
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Purge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/suggestionDenyListEntries:purge'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Import
    extends StandardParameters {
    /**
     * Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/x/locations/x/collections/x/dataStores/x.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Suggestiondenylistentries$Purge
    extends StandardParameters {
    /**
     * Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/x/locations/x/collections/x/dataStores/x.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesRequest;
  }

  export class Resource$Projects$Locations$Datastores$Userevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    collect(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Collect,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    collect(
      params?: Params$Resource$Projects$Locations$Datastores$Userevents$Collect,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleApiHttpBody>;
    collect(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Collect,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Collect,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApiHttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Collect,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(callback: BodyResponseCallback<Schema$GoogleApiHttpBody>): void;
    collect(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Userevents$Collect
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleApiHttpBody>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Userevents$Collect;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Userevents$Collect;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/userEvents:collect').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleApiHttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleApiHttpBody>(parameters);
      }
    }

    /**
     * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Datastores$Userevents$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Userevents$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Userevents$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Userevents$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/userEvents:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Writes a single user event.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    write(
      params?: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>;
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Datastores$Userevents$Write,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datastores$Userevents$Write
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datastores$Userevents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Datastores$Userevents$Write;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/userEvents:write').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datastores$Userevents$Collect
    extends StandardParameters {
    /**
     * The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     */
    ets?: string;
    /**
     * Required. The parent DataStore resource name, such as `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`.
     */
    parent?: string;
    /**
     * The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests.
     */
    uri?: string;
    /**
     * Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
     */
    userEvent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Userevents$Import
    extends StandardParameters {
    /**
     * Required. Parent DataStore resource name, of the form `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaImportUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Datastores$Userevents$Write
    extends StandardParameters {
    /**
     * Required. The parent resource name. If the write user event action is applied in DataStore level, the format is: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`. If the write user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaUserEvent;
  }

  export class Resource$Projects$Locations$Groundingconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Performs a grounding check.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    check(
      params: Params$Resource$Projects$Locations$Groundingconfigs$Check,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    check(
      params?: Params$Resource$Projects$Locations$Groundingconfigs$Check,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>;
    check(
      params: Params$Resource$Projects$Locations$Groundingconfigs$Check,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    check(
      params: Params$Resource$Projects$Locations$Groundingconfigs$Check,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>
    ): void;
    check(
      params: Params$Resource$Projects$Locations$Groundingconfigs$Check,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>
    ): void;
    check(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>
    ): void;
    check(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Groundingconfigs$Check
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Groundingconfigs$Check;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Groundingconfigs$Check;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+groundingConfig}:check').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['groundingConfig'],
        pathParams: ['groundingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Groundingconfigs$Check
    extends StandardParameters {
    /**
     * Required. The resource name of the grounding config, such as `projects/x/locations/global/groundingConfigs/default_grounding_config`.
     */
    groundingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaCheckGroundingRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Rankingconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Ranks a list of text records based on the given input query.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rank(
      params: Params$Resource$Projects$Locations$Rankingconfigs$Rank,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rank(
      params?: Params$Resource$Projects$Locations$Rankingconfigs$Rank,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>;
    rank(
      params: Params$Resource$Projects$Locations$Rankingconfigs$Rank,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rank(
      params: Params$Resource$Projects$Locations$Rankingconfigs$Rank,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>
    ): void;
    rank(
      params: Params$Resource$Projects$Locations$Rankingconfigs$Rank,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>
    ): void;
    rank(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>
    ): void;
    rank(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rankingconfigs$Rank
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rankingconfigs$Rank;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rankingconfigs$Rank;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+rankingConfig}:rank').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['rankingConfig'],
        pathParams: ['rankingConfig'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaRankResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Rankingconfigs$Rank
    extends StandardParameters {
    /**
     * Required. The resource name of the rank service config, such as `projects/{project_num\}/locations/{location_id\}/rankingConfigs/default_ranking_config`.
     */
    rankingConfig?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaRankRequest;
  }

  export class Resource$Projects$Locations$Userevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Writes a single user event.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    write(
      params: Params$Resource$Projects$Locations$Userevents$Write,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    write(
      params?: Params$Resource$Projects$Locations$Userevents$Write,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>;
    write(
      params: Params$Resource$Projects$Locations$Userevents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Userevents$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Userevents$Write,
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      callback: BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
    ): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Userevents$Write
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Userevents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Userevents$Write;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/userEvents:write').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDiscoveryengineV1betaUserEvent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Userevents$Write
    extends StandardParameters {
    /**
     * Required. The parent resource name. If the write user event action is applied in DataStore level, the format is: `projects/{project\}/locations/{location\}/collections/{collection\}/dataStores/{data_store\}`. If the write user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDiscoveryengineV1betaUserEvent;
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://discoveryengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}
