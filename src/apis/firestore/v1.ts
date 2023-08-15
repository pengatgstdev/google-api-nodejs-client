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

export namespace firestore_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * Cloud Firestore API
   *
   * Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const firestore = google.firestore('v1');
   * ```
   */
  export class Firestore {
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
   * Defines an aggregation that produces a single result.
   */
  export interface Schema$Aggregation {
    /**
     * Optional. Optional name of the field to store the result of the aggregation into. If not provided, Firestore will pick a default name following the format `field_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS field_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS field_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to document field name limitations.
     */
    alias?: string | null;
    /**
     * Average aggregator.
     */
    avg?: Schema$Avg;
    /**
     * Count aggregator.
     */
    count?: Schema$Count;
    /**
     * Sum aggregator.
     */
    sum?: Schema$Sum;
  }
  /**
   * The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result.
   */
  export interface Schema$AggregationResult {
    /**
     * The result of the aggregation functions, ex: `COUNT(*) AS total_docs`. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query.
     */
    aggregateFields?: {[key: string]: Schema$Value} | null;
  }
  /**
   * An array value.
   */
  export interface Schema$ArrayValue {
    /**
     * Values in the array.
     */
    values?: Schema$Value[];
  }
  /**
   * Average of the values of the requested field. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns `NULL`. * Always returns the result as a double.
   */
  export interface Schema$Avg {
    /**
     * The field to aggregate on.
     */
    field?: Schema$FieldReference;
  }
  /**
   * The request for Firestore.BatchGetDocuments.
   */
  export interface Schema$BatchGetDocumentsRequest {
    /**
     * The names of the documents to retrieve. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided.
     */
    documents?: string[] | null;
    /**
     * The fields to return. If not set, returns all fields. If a document has a field that is not present in this mask, that field will not be returned in the response.
     */
    mask?: Schema$DocumentMask;
    /**
     * Starts a new transaction and reads the documents. Defaults to a read-only transaction. The new transaction ID will be returned as the first response in the stream.
     */
    newTransaction?: Schema$TransactionOptions;
    /**
     * Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string | null;
    /**
     * Reads documents in a transaction.
     */
    transaction?: string | null;
  }
  /**
   * The streamed response for Firestore.BatchGetDocuments.
   */
  export interface Schema$BatchGetDocumentsResponse {
    /**
     * A document that was requested.
     */
    found?: Schema$Document;
    /**
     * A document name that was requested but does not exist. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    missing?: string | null;
    /**
     * The time at which the document was read. This may be monotically increasing, in this case the previous documents in the result stream are guaranteed not to have changed between their read_time and this one.
     */
    readTime?: string | null;
    /**
     * The transaction that was started as part of this request. Will only be set in the first response, and only if BatchGetDocumentsRequest.new_transaction was set in the request.
     */
    transaction?: string | null;
  }
  /**
   * The request for Firestore.BatchWrite.
   */
  export interface Schema$BatchWriteRequest {
    /**
     * Labels associated with this batch write.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The writes to apply. Method does not apply writes atomically and does not guarantee ordering. Each write succeeds or fails independently. You cannot write to the same document more than once per request.
     */
    writes?: Schema$Write[];
  }
  /**
   * The response from Firestore.BatchWrite.
   */
  export interface Schema$BatchWriteResponse {
    /**
     * The status of applying the writes. This i-th write status corresponds to the i-th write in the request.
     */
    status?: Schema$Status[];
    /**
     * The result of applying the writes. This i-th write result corresponds to the i-th write in the request.
     */
    writeResults?: Schema$WriteResult[];
  }
  /**
   * The request for Firestore.BeginTransaction.
   */
  export interface Schema$BeginTransactionRequest {
    /**
     * The options for the transaction. Defaults to a read-write transaction.
     */
    options?: Schema$TransactionOptions;
  }
  /**
   * The response for Firestore.BeginTransaction.
   */
  export interface Schema$BeginTransactionResponse {
    /**
     * The transaction that was started.
     */
    transaction?: string | null;
  }
  /**
   * A sequence of bits, encoded in a byte array. Each byte in the `bitmap` byte array stores 8 bits of the sequence. The only exception is the last byte, which may store 8 _or fewer_ bits. The `padding` defines the number of bits of the last byte to be ignored as "padding". The values of these "padding" bits are unspecified and must be ignored. To retrieve the first bit, bit 0, calculate: `(bitmap[0] & 0x01) != 0`. To retrieve the second bit, bit 1, calculate: `(bitmap[0] & 0x02) != 0`. To retrieve the third bit, bit 2, calculate: `(bitmap[0] & 0x04) != 0`. To retrieve the fourth bit, bit 3, calculate: `(bitmap[0] & 0x08) != 0`. To retrieve bit n, calculate: `(bitmap[n / 8] & (0x01 << (n % 8))) != 0`. The "size" of a `BitSequence` (the number of bits it contains) is calculated by this formula: `(bitmap.length * 8) - padding`.
   */
  export interface Schema$BitSequence {
    /**
     * The bytes that encode the bit sequence. May have a length of zero.
     */
    bitmap?: string | null;
    /**
     * The number of bits of the last byte in `bitmap` to ignore as "padding". If the length of `bitmap` is zero, then this value must be `0`. Otherwise, this value must be between 0 and 7, inclusive.
     */
    padding?: number | null;
  }
  /**
   * A bloom filter (https://en.wikipedia.org/wiki/Bloom_filter). The bloom filter hashes the entries with MD5 and treats the resulting 128-bit hash as 2 distinct 64-bit hash values, interpreted as unsigned integers using 2's complement encoding. These two hash values, named `h1` and `h2`, are then used to compute the `hash_count` hash values using the formula, starting at `i=0`: h(i) = h1 + (i * h2) These resulting values are then taken modulo the number of bits in the bloom filter to get the bits of the bloom filter to test for the given entry.
   */
  export interface Schema$BloomFilter {
    /**
     * The bloom filter data.
     */
    bits?: Schema$BitSequence;
    /**
     * The number of hashes used by the algorithm.
     */
    hashCount?: number | null;
  }
  /**
   * A selection of a collection, such as `messages as m1`.
   */
  export interface Schema$CollectionSelector {
    /**
     * When false, selects only collections that are immediate children of the `parent` specified in the containing `RunQueryRequest`. When true, selects all descendant collections.
     */
    allDescendants?: boolean | null;
    /**
     * The collection ID. When set, selects only collections with this ID.
     */
    collectionId?: string | null;
  }
  /**
   * The request for Firestore.Commit.
   */
  export interface Schema$CommitRequest {
    /**
     * If set, applies all writes in this transaction, and commits it.
     */
    transaction?: string | null;
    /**
     * The writes to apply. Always executed atomically and in order.
     */
    writes?: Schema$Write[];
  }
  /**
   * The response for Firestore.Commit.
   */
  export interface Schema$CommitResponse {
    /**
     * The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the commit.
     */
    commitTime?: string | null;
    /**
     * The result of applying the writes. This i-th write result corresponds to the i-th write in the request.
     */
    writeResults?: Schema$WriteResult[];
  }
  /**
   * A filter that merges multiple other filters using the given operator.
   */
  export interface Schema$CompositeFilter {
    /**
     * The list of filters to combine. Requires: * At least one filter is present.
     */
    filters?: Schema$Filter[];
    /**
     * The operator for combining multiple filters.
     */
    op?: string | null;
  }
  /**
   * Count of documents that match the query. The `COUNT(*)` aggregation function operates on the entire document so it does not require a field reference.
   */
  export interface Schema$Count {
    /**
     * Optional. Optional constraint on the maximum number of documents to count. This provides a way to set an upper bound on the number of documents to scan, limiting latency, and cost. Unspecified is interpreted as no bound. High-Level Example: ``` AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); ``` Requires: * Must be greater than zero when present.
     */
    upTo?: string | null;
  }
  /**
   * A position in a query result set.
   */
  export interface Schema$Cursor {
    /**
     * If the position is just before or just after the given values, relative to the sort order defined by the query.
     */
    before?: boolean | null;
    /**
     * The values that represent a position, in the order they appear in the order by clause of a query. Can contain fewer values than specified in the order by clause.
     */
    values?: Schema$Value[];
  }
  /**
   * A Firestore document. Must not exceed 1 MiB - 4 bytes.
   */
  export interface Schema$Document {
    /**
     * Output only. The time at which the document was created. This value increases monotonically when a document is deleted then recreated. It can also be compared to values from other documents and the `read_time` of a query.
     */
    createTime?: string | null;
    /**
     * The document's fields. The map keys represent field names. A simple field name contains only characters `a` to `z`, `A` to `Z`, `0` to `9`, or `_`, and must not start with `0` to `9`. For example, `foo_bar_17`. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. Field paths may be used in other contexts to refer to structured fields defined here. For `map_value`, the field path is represented by the simple or quoted field names of the containing fields, delimited by `.`. For example, the structured field `"foo" : { map_value: { "x&y" : { string_value: "hello" \}\}\}` would be represented by the field path `foo.x&y`. Within a field path, a quoted field name starts and ends with `` ` `` and may contain any character. Some characters, including `` ` ``, must be escaped using a `\`. For example, `` `x&y` `` represents `x&y` and `` `bak\`tik` `` represents `` bak`tik ``.
     */
    fields?: {[key: string]: Schema$Value} | null;
    /**
     * The resource name of the document, for example `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    name?: string | null;
    /**
     * Output only. The time at which the document was last changed. This value is initially set to the `create_time` then increases monotonically with each change to the document. It can also be compared to values from other documents and the `read_time` of a query.
     */
    updateTime?: string | null;
  }
  /**
   * A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected.
   */
  export interface Schema$DocumentChange {
    /**
     * The new state of the Document. If `mask` is set, contains only fields that were updated or added.
     */
    document?: Schema$Document;
    /**
     * A set of target IDs for targets that no longer match this document.
     */
    removedTargetIds?: number[] | null;
    /**
     * A set of target IDs of targets that match this document.
     */
    targetIds?: number[] | null;
  }
  /**
   * A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected.
   */
  export interface Schema$DocumentDelete {
    /**
     * The resource name of the Document that was deleted.
     */
    document?: string | null;
    /**
     * The read timestamp at which the delete was observed. Greater or equal to the `commit_time` of the delete.
     */
    readTime?: string | null;
    /**
     * A set of target IDs for targets that previously matched this entity.
     */
    removedTargetIds?: number[] | null;
  }
  /**
   * A set of field paths on a document. Used to restrict a get or update operation on a document to a subset of its fields. This is different from standard field masks, as this is always scoped to a Document, and takes in account the dynamic nature of Value.
   */
  export interface Schema$DocumentMask {
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    fieldPaths?: string[] | null;
  }
  /**
   * A Document has been removed from the view of the targets. Sent if the document is no longer relevant to a target and is out of view. Can be sent instead of a DocumentDelete or a DocumentChange if the server can not send the new value of the document. Multiple DocumentRemove messages may be returned for the same logical write or delete, if multiple targets are affected.
   */
  export interface Schema$DocumentRemove {
    /**
     * The resource name of the Document that has gone out of view.
     */
    document?: string | null;
    /**
     * The read timestamp at which the remove was observed. Greater or equal to the `commit_time` of the change/delete/remove.
     */
    readTime?: string | null;
    /**
     * A set of target IDs for targets that previously matched this document.
     */
    removedTargetIds?: number[] | null;
  }
  /**
   * A target specified by a set of documents names.
   */
  export interface Schema$DocumentsTarget {
    /**
     * The names of the documents to retrieve. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided.
     */
    documents?: string[] | null;
  }
  /**
   * A transformation of a document.
   */
  export interface Schema$DocumentTransform {
    /**
     * The name of the document to transform.
     */
    document?: string | null;
    /**
     * The list of transformations to apply to the fields of the document, in order. This must not be empty.
     */
    fieldTransforms?: Schema$FieldTransform[];
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A digest of all the documents that match a given target.
   */
  export interface Schema$ExistenceFilter {
    /**
     * The total count of documents that match target_id. If different from the count of documents in the client that match, the client must manually determine which documents no longer match the target. The client can use the `unchanged_names` bloom filter to assist with this determination by testing ALL the document names against the filter; if the document name is NOT in the filter, it means the document no longer matches the target.
     */
    count?: number | null;
    /**
     * The target ID to which this filter applies.
     */
    targetId?: number | null;
    /**
     * A bloom filter that, despite its name, contains the UTF-8 byte encodings of the resource names of ALL the documents that match target_id, in the form `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. This bloom filter may be omitted at the server's discretion, such as if it is deemed that the client will not make use of it or if it is too computationally expensive to calculate or transmit. Clients must gracefully handle this field being absent by falling back to the logic used before this field existed; that is, re-add the target without a resume token to figure out which documents in the client's cache are out of sync.
     */
    unchangedNames?: Schema$BloomFilter;
  }
  /**
   * A filter on a specific field.
   */
  export interface Schema$FieldFilter {
    /**
     * The field to filter by.
     */
    field?: Schema$FieldReference;
    /**
     * The operator to filter by.
     */
    op?: string | null;
    /**
     * The value to compare to.
     */
    value?: Schema$Value;
  }
  /**
   * A reference to a field in a document, ex: `stats.operations`.
   */
  export interface Schema$FieldReference {
    /**
     * The relative path of the document being referenced. Requires: * Conform to document field name limitations.
     */
    fieldPath?: string | null;
  }
  /**
   * A transformation of a field of the document.
   */
  export interface Schema$FieldTransform {
    /**
     * Append the given elements in order if they are not already present in the current field value. If the field is not an array, or if the field does not yet exist, it is first set to the empty array. Equivalent numbers of different types (e.g. 3L and 3.0) are considered equal when checking if a value is missing. NaN is equal to NaN, and Null is equal to Null. If the input contains multiple equivalent values, only the first will be considered. The corresponding transform_result will be the null value.
     */
    appendMissingElements?: Schema$ArrayValue;
    /**
     * The path of the field. See Document.fields for the field path syntax reference.
     */
    fieldPath?: string | null;
    /**
     * Adds the given value to the field's current value. This must be an integer or a double value. If the field is not an integer or double, or if the field does not yet exist, the transformation will set the field to the given value. If either of the given value or the current field value are doubles, both values will be interpreted as doubles. Double arithmetic and representation of double values follow IEEE 754 semantics. If there is positive/negative integer overflow, the field is resolved to the largest magnitude positive/negative integer.
     */
    increment?: Schema$Value;
    /**
     * Sets the field to the maximum of its current value and the given value. This must be an integer or a double value. If the field is not an integer or double, or if the field does not yet exist, the transformation will set the field to the given value. If a maximum operation is applied where the field and the input value are of mixed types (that is - one is an integer and one is a double) the field takes on the type of the larger operand. If the operands are equivalent (e.g. 3 and 3.0), the field does not change. 0, 0.0, and -0.0 are all zero. The maximum of a zero stored value and zero input value is always the stored value. The maximum of any numeric value x and NaN is NaN.
     */
    maximum?: Schema$Value;
    /**
     * Sets the field to the minimum of its current value and the given value. This must be an integer or a double value. If the field is not an integer or double, or if the field does not yet exist, the transformation will set the field to the input value. If a minimum operation is applied where the field and the input value are of mixed types (that is - one is an integer and one is a double) the field takes on the type of the smaller operand. If the operands are equivalent (e.g. 3 and 3.0), the field does not change. 0, 0.0, and -0.0 are all zero. The minimum of a zero stored value and zero input value is always the stored value. The minimum of any numeric value x and NaN is NaN.
     */
    minimum?: Schema$Value;
    /**
     * Remove all of the given elements from the array in the field. If the field is not an array, or if the field does not yet exist, it is set to the empty array. Equivalent numbers of the different types (e.g. 3L and 3.0) are considered equal when deciding whether an element should be removed. NaN is equal to NaN, and Null is equal to Null. This will remove all equivalent values if there are duplicates. The corresponding transform_result will be the null value.
     */
    removeAllFromArray?: Schema$ArrayValue;
    /**
     * Sets the field to the given server value.
     */
    setToServerValue?: string | null;
  }
  /**
   * A filter.
   */
  export interface Schema$Filter {
    /**
     * A composite filter.
     */
    compositeFilter?: Schema$CompositeFilter;
    /**
     * A filter on a document field.
     */
    fieldFilter?: Schema$FieldFilter;
    /**
     * A filter that takes exactly one argument.
     */
    unaryFilter?: Schema$UnaryFilter;
  }
  /**
   * A Backup of a Cloud Firestore Database. The backup contains all documents and index configurations for the given database at specific point in time.
   */
  export interface Schema$GoogleFirestoreAdminV1Backup {
    /**
     * Output only. Name of the Firestore database that the backup is from. Format is `projects/{project\}/databases/{database\}`.
     */
    database?: string | null;
    /**
     * Output only. The system-generated UUID4 for the Firestore database that the backup is from.
     */
    databaseUid?: string | null;
    /**
     * Output only. The timestamp at which this backup expires.
     */
    expireTime?: string | null;
    /**
     * Output only. The unique resource name of the Backup. Format is `projects/{project\}/locations/{location\}/backups/{backup\}`.
     */
    name?: string | null;
    /**
     * Output only. The backup contains an externally consistent copy of the database at this time.
     */
    snapshotTime?: string | null;
    /**
     * Output only. The current state of the backup.
     */
    state?: string | null;
    /**
     * Output only. Statistics about the backup. This data only becomes available after the backup is fully materialized to secondary storage. This field will be empty till then.
     */
    stats?: Schema$GoogleFirestoreAdminV1Stats;
  }
  /**
   * A backup schedule for a Cloud Firestore Database. This resource is owned by the database it is backing up, and is deleted along with the database. The actual backups are not though.
   */
  export interface Schema$GoogleFirestoreAdminV1BackupSchedule {
    /**
     * Output only. The timestamp at which this backup schedule was created and effective since. No backups will be created for this schedule before this time.
     */
    createTime?: string | null;
    /**
     * For a schedule that runs daily at a specified time.
     */
    dailyRecurrence?: Schema$GoogleFirestoreAdminV1DailyRecurrence;
    /**
     * Output only. The unique backup schedule identifier across all locations and databases for the given project. This will be auto-assigned. Format is `projects/{project\}/databases/{database\}/backupSchedules/{backup_schedule\}`
     */
    name?: string | null;
    /**
     * At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days.
     */
    retention?: string | null;
    /**
     * Output only. The timestamp at which this backup schedule was most recently updated. When a backup schedule is first created, this is the same as create_time.
     */
    updateTime?: string | null;
    /**
     * For a schedule that runs weekly on a specific day and time.
     */
    weeklyRecurrence?: Schema$GoogleFirestoreAdminV1WeeklyRecurrence;
  }
  /**
   * Represent a recurring schedule that runs at a specific time every day. The time zone is UTC.
   */
  export interface Schema$GoogleFirestoreAdminV1DailyRecurrence {}
  /**
   * A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
   */
  export interface Schema$GoogleFirestoreAdminV1Database {
    /**
     * The App Engine integration mode to use for this database.
     */
    appEngineIntegrationMode?: string | null;
    /**
     * The concurrency control mode to use for this database.
     */
    concurrencyMode?: string | null;
    /**
     * Output only. The timestamp at which this database was created. Databases created before 2016 do not populate create_time.
     */
    createTime?: string | null;
    /**
     * State of delete protection for the database.
     */
    deleteProtectionState?: string | null;
    /**
     * Output only. The earliest timestamp at which older versions of the data can be read from the database. See [version_retention_period] above; this field is populated with `now - version_retention_period`. This value is continuously updated, and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery.
     */
    earliestVersionTime?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Output only. The key_prefix for this database. This key_prefix is used, in combination with the project id ("~") to construct the application id that is returned from the Cloud Datastore APIs in Google App Engine first generation runtimes. This value may be empty in which case the appid to use for URL-encoded keys is the project_id (eg: foo instead of v~foo).
     */
    keyPrefix?: string | null;
    /**
     * The location of the database. Available databases are listed at https://cloud.google.com/firestore/docs/locations.
     */
    locationId?: string | null;
    /**
     * The resource name of the Database. Format: `projects/{project\}/databases/{database\}`
     */
    name?: string | null;
    /**
     * Whether to enable the PITR feature on this database.
     */
    pointInTimeRecoveryEnablement?: string | null;
    /**
     * The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose.
     */
    type?: string | null;
    /**
     * Output only. The system-generated UUID4 for this Database.
     */
    uid?: string | null;
    /**
     * Output only. The timestamp at which this database was most recently updated. Note this only includes updates to the database resource and not data contained by the database.
     */
    updateTime?: string | null;
    /**
     * Output only. The period during which past versions of data are retained in the database. Any read or query can specify a `read_time` within this window, and will read the state of the database at that time. If the PITR feature is enabled, the retention period is 7 days. Otherwise, the retention period is 1 hour.
     */
    versionRetentionPeriod?: string | null;
  }
  /**
   * Metadata for google.longrunning.Operation results from FirestoreAdmin.ExportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1ExportDocumentsMetadata {
    /**
     * Which collection ids are being exported.
     */
    collectionIds?: string[] | null;
    /**
     * The time this operation completed. Will be unset if operation still in progress.
     */
    endTime?: string | null;
    /**
     * Which namespace ids are being exported.
     */
    namespaceIds?: string[] | null;
    /**
     * The state of the export operation.
     */
    operationState?: string | null;
    /**
     * Where the documents are being exported to.
     */
    outputUriPrefix?: string | null;
    /**
     * The progress, in bytes, of this operation.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The progress, in documents, of this operation.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The timestamp that corresponds to the version of the database that is being exported. If unspecified, there are no guarantees about the consistency of the documents being exported.
     */
    snapshotTime?: string | null;
    /**
     * The time this operation started.
     */
    startTime?: string | null;
  }
  /**
   * The request for FirestoreAdmin.ExportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1ExportDocumentsRequest {
    /**
     * Which collection ids to export. Unspecified means all collections.
     */
    collectionIds?: string[] | null;
    /**
     * An empty list represents all namespaces. This is the preferred usage for databases that don't use namespaces. An empty string element represents the default namespace. This should be used if the database has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.
     */
    namespaceIds?: string[] | null;
    /**
     * The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time.
     */
    outputUriPrefix?: string | null;
    /**
     * The timestamp that corresponds to the version of the database to be exported. The timestamp must be rounded to the minute, in the past, and not older than 1 hour. If specified, then the exported documents will represent a consistent view of the database at the provided time. Otherwise, there are no guarantees about the consistency of the exported documents.
     */
    snapshotTime?: string | null;
  }
  /**
   * Returned in the google.longrunning.Operation response field.
   */
  export interface Schema$GoogleFirestoreAdminV1ExportDocumentsResponse {
    /**
     * Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully.
     */
    outputUriPrefix?: string | null;
  }
  /**
   * Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
   */
  export interface Schema$GoogleFirestoreAdminV1Field {
    /**
     * The index configuration for this field. If unset, field indexing will revert to the configuration defined by the `ancestor_field`. To explicitly remove all indexes for this field, specify an index config with an empty list of indexes.
     */
    indexConfig?: Schema$GoogleFirestoreAdminV1IndexConfig;
    /**
     * Required. A field name of the form `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}/fields/{field_path\}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id\}/databases/{database_id\}/collectionGroups/__default__/fields/x` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
     */
    name?: string | null;
    /**
     * The TTL configuration for this `Field`. Setting or unsetting this will enable or disable the TTL for documents that have this `Field`.
     */
    ttlConfig?: Schema$GoogleFirestoreAdminV1TtlConfig;
  }
  /**
   * Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField.
   */
  export interface Schema$GoogleFirestoreAdminV1FieldOperationMetadata {
    /**
     * The time this operation completed. Will be unset if operation still in progress.
     */
    endTime?: string | null;
    /**
     * The field resource that this operation is acting on. For example: `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}/fields/{field_path\}`
     */
    field?: string | null;
    /**
     * A list of IndexConfigDelta, which describe the intent of this operation.
     */
    indexConfigDeltas?: Schema$GoogleFirestoreAdminV1IndexConfigDelta[];
    /**
     * The progress, in bytes, of this operation.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The progress, in documents, of this operation.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The time this operation started.
     */
    startTime?: string | null;
    /**
     * The state of the operation.
     */
    state?: string | null;
    /**
     * Describes the deltas of TTL configuration.
     */
    ttlConfigDelta?: Schema$GoogleFirestoreAdminV1TtlConfigDelta;
  }
  /**
   * Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1ImportDocumentsMetadata {
    /**
     * Which collection ids are being imported.
     */
    collectionIds?: string[] | null;
    /**
     * The time this operation completed. Will be unset if operation still in progress.
     */
    endTime?: string | null;
    /**
     * The location of the documents being imported.
     */
    inputUriPrefix?: string | null;
    /**
     * Which namespace ids are being imported.
     */
    namespaceIds?: string[] | null;
    /**
     * The state of the import operation.
     */
    operationState?: string | null;
    /**
     * The progress, in bytes, of this operation.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The progress, in documents, of this operation.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The time this operation started.
     */
    startTime?: string | null;
  }
  /**
   * The request for FirestoreAdmin.ImportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1ImportDocumentsRequest {
    /**
     * Which collection ids to import. Unspecified means all collections included in the import.
     */
    collectionIds?: string[] | null;
    /**
     * Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1.ExportDocumentsResponse.output_uri_prefix.
     */
    inputUriPrefix?: string | null;
    /**
     * An empty list represents all namespaces. This is the preferred usage for databases that don't use namespaces. An empty string element represents the default namespace. This should be used if the database has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.
     */
    namespaceIds?: string[] | null;
  }
  /**
   * Cloud Firestore indexes enable simple and complex queries against documents in a database.
   */
  export interface Schema$GoogleFirestoreAdminV1Index {
    /**
     * The API scope supported by this index.
     */
    apiScope?: string | null;
    /**
     * The fields supported by this index. For composite indexes, this requires a minimum of 2 and a maximum of 100 fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.
     */
    fields?: Schema$GoogleFirestoreAdminV1IndexField[];
    /**
     * Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}/indexes/{composite_index_id\}` For single field indexes, this field will be empty.
     */
    name?: string | null;
    /**
     * Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index.
     */
    queryScope?: string | null;
    /**
     * Output only. The serving state of the index.
     */
    state?: string | null;
  }
  /**
   * The index configuration for this field.
   */
  export interface Schema$GoogleFirestoreAdminV1IndexConfig {
    /**
     * Output only. Specifies the resource name of the `Field` from which this field's index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false).
     */
    ancestorField?: string | null;
    /**
     * The indexes supported for this field.
     */
    indexes?: Schema$GoogleFirestoreAdminV1Index[];
    /**
     * Output only When true, the `Field`'s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`.
     */
    reverting?: boolean | null;
    /**
     * Output only. When true, the `Field`'s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`'s index configuration is defined explicitly.
     */
    usesAncestorConfig?: boolean | null;
  }
  /**
   * Information about an index configuration change.
   */
  export interface Schema$GoogleFirestoreAdminV1IndexConfigDelta {
    /**
     * Specifies how the index is changing.
     */
    changeType?: string | null;
    /**
     * The index being changed.
     */
    index?: Schema$GoogleFirestoreAdminV1Index;
  }
  /**
   * A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
   */
  export interface Schema$GoogleFirestoreAdminV1IndexField {
    /**
     * Indicates that this field supports operations on `array_value`s.
     */
    arrayConfig?: string | null;
    /**
     * Can be __name__. For single field indexes, this must match the name of the field or may be omitted.
     */
    fieldPath?: string | null;
    /**
     * Indicates that this field supports ordering by the specified order or comparing using =, !=, <, <=, \>, \>=.
     */
    order?: string | null;
  }
  /**
   * Metadata for google.longrunning.Operation results from FirestoreAdmin.CreateIndex.
   */
  export interface Schema$GoogleFirestoreAdminV1IndexOperationMetadata {
    /**
     * The time this operation completed. Will be unset if operation still in progress.
     */
    endTime?: string | null;
    /**
     * The index resource that this operation is acting on. For example: `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}/indexes/{index_id\}`
     */
    index?: string | null;
    /**
     * The progress, in bytes, of this operation.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The progress, in documents, of this operation.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The time this operation started.
     */
    startTime?: string | null;
    /**
     * The state of the operation.
     */
    state?: string | null;
  }
  /**
   * The response for FirestoreAdmin.ListBackupSchedules.
   */
  export interface Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse {
    /**
     * List of all backup schedules.
     */
    backupSchedules?: Schema$GoogleFirestoreAdminV1BackupSchedule[];
  }
  /**
   * The response for FirestoreAdmin.ListBackups.
   */
  export interface Schema$GoogleFirestoreAdminV1ListBackupsResponse {
    /**
     * List of all backups for the project. Ordered by `location ASC, create_time DESC, name ASC`.
     */
    backups?: Schema$GoogleFirestoreAdminV1Backup[];
    /**
     * List of locations that existing backups were not able to be fetched from. Instead of failing the entire requests when a single location is unreachable, this response returns a partial result set and list of locations unable to be reached here. The request can be retried against a single location to get a concrete error.
     */
    unreachable?: string[] | null;
  }
  /**
   * The list of databases for a project.
   */
  export interface Schema$GoogleFirestoreAdminV1ListDatabasesResponse {
    /**
     * The databases in the project.
     */
    databases?: Schema$GoogleFirestoreAdminV1Database[];
  }
  /**
   * The response for FirestoreAdmin.ListFields.
   */
  export interface Schema$GoogleFirestoreAdminV1ListFieldsResponse {
    /**
     * The requested fields.
     */
    fields?: Schema$GoogleFirestoreAdminV1Field[];
    /**
     * A page token that may be used to request another page of results. If blank, this is the last page.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for FirestoreAdmin.ListIndexes.
   */
  export interface Schema$GoogleFirestoreAdminV1ListIndexesResponse {
    /**
     * The requested indexes.
     */
    indexes?: Schema$GoogleFirestoreAdminV1Index[];
    /**
     * A page token that may be used to request another page of results. If blank, this is the last page.
     */
    nextPageToken?: string | null;
  }
  /**
   * The metadata message for google.cloud.location.Location.metadata.
   */
  export interface Schema$GoogleFirestoreAdminV1LocationMetadata {}
  /**
   * Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used.
   */
  export interface Schema$GoogleFirestoreAdminV1Progress {
    /**
     * The amount of work completed.
     */
    completedWork?: string | null;
    /**
     * The amount of work estimated.
     */
    estimatedWork?: string | null;
  }
  /**
   * Metadata for the long-running operation from the RestoreDatabase request.
   */
  export interface Schema$GoogleFirestoreAdminV1RestoreDatabaseMetadata {
    /**
     * The name of the backup restoring from.
     */
    backup?: string | null;
    /**
     * The name of the database being restored to.
     */
    database?: string | null;
    /**
     * The time the restore finished, unset for ongoing restores.
     */
    endTime?: string | null;
    /**
     * The operation state of the restore.
     */
    operationState?: string | null;
    /**
     * How far along the restore is as an estimated percentage of remaining time.
     */
    progressPercentage?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The time the restore was started.
     */
    startTime?: string | null;
  }
  /**
   * The request message for FirestoreAdmin.RestoreDatabase.
   */
  export interface Schema$GoogleFirestoreAdminV1RestoreDatabaseRequest {
    /**
     * Required. Backup to restore from. Must be from the same project as the parent. Format is: `projects/{project_id\}/locations/{location\}/backups/{backup\}`
     */
    backup?: string | null;
    /**
     * Required. The ID to use for the database, which will become the final component of the database's resource name. This database id must not be associated with an existing database. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8\}(-[0-9a-f]{4\}){3\}-[0-9a-f]{12\}/. "(default)" database id is also valid.
     */
    databaseId?: string | null;
  }
  /**
   * Backup specific statistics.
   */
  export interface Schema$GoogleFirestoreAdminV1Stats {
    /**
     * Output only. The total number of documents contained in the backup.
     */
    documentCount?: string | null;
    /**
     * Output only. The total number of index entries contained in the backup.
     */
    indexCount?: string | null;
    /**
     * Output only. Summation of the size of all documents and index entries in the backup, measured in bytes.
     */
    sizeBytes?: string | null;
  }
  /**
   * The TTL (time-to-live) configuration for documents that have this `Field` set. Storing a timestamp value into a TTL-enabled field will be treated as the document's absolute expiration time. Timestamp values in the past indicate that the document is eligible for immediate expiration. Using any other data type or leaving the field absent will disable expiration for the individual document.
   */
  export interface Schema$GoogleFirestoreAdminV1TtlConfig {
    /**
     * Output only. The state of the TTL configuration.
     */
    state?: string | null;
  }
  /**
   * Information about a TTL configuration change.
   */
  export interface Schema$GoogleFirestoreAdminV1TtlConfigDelta {
    /**
     * Specifies how the TTL configuration is changing.
     */
    changeType?: string | null;
  }
  /**
   * Metadata related to the update database operation.
   */
  export interface Schema$GoogleFirestoreAdminV1UpdateDatabaseMetadata {}
  /**
   * Represents a recurring schedule that runs on a specified day of the week. The time zone is UTC.
   */
  export interface Schema$GoogleFirestoreAdminV1WeeklyRecurrence {
    /**
     * The day of week to run. DAY_OF_WEEK_UNSPECIFIED is not allowed.
     */
    day?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$GoogleLongrunningCancelOperationRequest {}
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
    error?: Schema$Status;
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
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * The request for Firestore.ListCollectionIds.
   */
  export interface Schema$ListCollectionIdsRequest {
    /**
     * The maximum number of results to return.
     */
    pageSize?: number | null;
    /**
     * A page token. Must be a value from ListCollectionIdsResponse.
     */
    pageToken?: string | null;
    /**
     * Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string | null;
  }
  /**
   * The response from Firestore.ListCollectionIds.
   */
  export interface Schema$ListCollectionIdsResponse {
    /**
     * The collection ids.
     */
    collectionIds?: string[] | null;
    /**
     * A page token that may be used to continue the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for Firestore.ListDocuments.
   */
  export interface Schema$ListDocumentsResponse {
    /**
     * The Documents found.
     */
    documents?: Schema$Document[];
    /**
     * A token to retrieve the next page of documents. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * A request for Firestore.Listen
   */
  export interface Schema$ListenRequest {
    /**
     * A target to add to this stream.
     */
    addTarget?: Schema$Target;
    /**
     * Labels associated with this target change.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The ID of a target to remove from this stream.
     */
    removeTarget?: number | null;
  }
  /**
   * The response for Firestore.Listen.
   */
  export interface Schema$ListenResponse {
    /**
     * A Document has changed.
     */
    documentChange?: Schema$DocumentChange;
    /**
     * A Document has been deleted.
     */
    documentDelete?: Schema$DocumentDelete;
    /**
     * A Document has been removed from a target (because it is no longer relevant to that target).
     */
    documentRemove?: Schema$DocumentRemove;
    /**
     * A filter to apply to the set of documents previously returned for the given target. Returned when documents may have been removed from the given target, but the exact documents are unknown.
     */
    filter?: Schema$ExistenceFilter;
    /**
     * Targets have changed.
     */
    targetChange?: Schema$TargetChange;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * A map value.
   */
  export interface Schema$MapValue {
    /**
     * The map's fields. The map keys represent field names. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty.
     */
    fields?: {[key: string]: Schema$Value} | null;
  }
  /**
   * An order on a field.
   */
  export interface Schema$Order {
    /**
     * The direction to order by. Defaults to `ASCENDING`.
     */
    direction?: string | null;
    /**
     * The field to order by.
     */
    field?: Schema$FieldReference;
  }
  /**
   * The request for Firestore.PartitionQuery.
   */
  export interface Schema$PartitionQueryRequest {
    /**
     * The maximum number of partitions to return in this call, subject to `partition_count`. For example, if `partition_count` = 10 and `page_size` = 8, the first call to PartitionQuery will return up to 8 partitions and a `next_page_token` if more results exist. A second call to PartitionQuery will return up to 2 partitions, to complete the total of 10 specified in `partition_count`.
     */
    pageSize?: number | null;
    /**
     * The `next_page_token` value returned from a previous call to PartitionQuery that may be used to get an additional set of results. There are no ordering guarantees between sets of results. Thus, using multiple sets of results will require merging the different result sets. For example, two subsequent calls using a page_token may return: * cursor B, cursor M, cursor Q * cursor A, cursor U, cursor W To obtain a complete result set ordered with respect to the results of the query supplied to PartitionQuery, the results sets should be merged: cursor A, cursor B, cursor M, cursor Q, cursor U, cursor W
     */
    pageToken?: string | null;
    /**
     * The desired maximum number of partition points. The partitions may be returned across multiple pages of results. The number must be positive. The actual number of partitions returned may be fewer. For example, this may be set to one fewer than the number of parallel queries to be run, or in running a data pipeline job, one fewer than the number of workers or compute instances available.
     */
    partitionCount?: string | null;
    /**
     * Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string | null;
    /**
     * A structured query. Query must specify collection with all descendants and be ordered by name ascending. Other filters, order bys, limits, offsets, and start/end cursors are not supported.
     */
    structuredQuery?: Schema$StructuredQuery;
  }
  /**
   * The response for Firestore.PartitionQuery.
   */
  export interface Schema$PartitionQueryResponse {
    /**
     * A page token that may be used to request an additional set of results, up to the number specified by `partition_count` in the PartitionQuery request. If blank, there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Partition results. Each partition is a split point that can be used by RunQuery as a starting or end point for the query results. The RunQuery requests must be made with the same query supplied to this PartitionQuery request. The partition cursors will be ordered according to same ordering as the results of the query supplied to PartitionQuery. For example, if a PartitionQuery request returns partition cursors A and B, running the following three queries will return the entire result set of the original query: * query, end_at A * query, start_at A, end_at B * query, start_at B An empty result may indicate that the query has too few results to be partitioned.
     */
    partitions?: Schema$Cursor[];
  }
  /**
   * A precondition on a document, used for conditional operations.
   */
  export interface Schema$Precondition {
    /**
     * When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     */
    exists?: boolean | null;
    /**
     * When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     */
    updateTime?: string | null;
  }
  /**
   * The projection of document's fields to return.
   */
  export interface Schema$Projection {
    /**
     * The fields to return. If empty, all fields are returned. To only return the name of the document, use `['__name__']`.
     */
    fields?: Schema$FieldReference[];
  }
  /**
   * A target specified by a query.
   */
  export interface Schema$QueryTarget {
    /**
     * The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string | null;
    /**
     * A structured query.
     */
    structuredQuery?: Schema$StructuredQuery;
  }
  /**
   * Options for a transaction that can only be used to read documents.
   */
  export interface Schema$ReadOnly {
    /**
     * Reads documents at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string | null;
  }
  /**
   * Options for a transaction that can be used to read and write documents. Firestore does not allow 3rd party auth requests to create read-write. transactions.
   */
  export interface Schema$ReadWrite {
    /**
     * An optional transaction to retry.
     */
    retryTransaction?: string | null;
  }
  /**
   * The request for Firestore.Rollback.
   */
  export interface Schema$RollbackRequest {
    /**
     * Required. The transaction to roll back.
     */
    transaction?: string | null;
  }
  /**
   * The request for Firestore.RunAggregationQuery.
   */
  export interface Schema$RunAggregationQueryRequest {
    /**
     * Starts a new transaction as part of the query, defaulting to read-only. The new transaction ID will be returned as the first response in the stream.
     */
    newTransaction?: Schema$TransactionOptions;
    /**
     * Executes the query at the given timestamp. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string | null;
    /**
     * An aggregation query.
     */
    structuredAggregationQuery?: Schema$StructuredAggregationQuery;
    /**
     * Run the aggregation within an already active transaction. The value here is the opaque transaction ID to execute the query in.
     */
    transaction?: string | null;
  }
  /**
   * The response for Firestore.RunAggregationQuery.
   */
  export interface Schema$RunAggregationQueryResponse {
    /**
     * The time at which the aggregate result was computed. This is always monotonically increasing; in this case, the previous AggregationResult in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `result` will be sent, and this represents the time at which the query was run.
     */
    readTime?: string | null;
    /**
     * A single aggregation result. Not present when reporting partial progress.
     */
    result?: Schema$AggregationResult;
    /**
     * The transaction that was started as part of this request. Only present on the first response when the request requested to start a new transaction.
     */
    transaction?: string | null;
  }
  /**
   * The request for Firestore.RunQuery.
   */
  export interface Schema$RunQueryRequest {
    /**
     * Starts a new transaction and reads the documents. Defaults to a read-only transaction. The new transaction ID will be returned as the first response in the stream.
     */
    newTransaction?: Schema$TransactionOptions;
    /**
     * Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string | null;
    /**
     * A structured query.
     */
    structuredQuery?: Schema$StructuredQuery;
    /**
     * Run the query within an already active transaction. The value here is the opaque transaction ID to execute the query in.
     */
    transaction?: string | null;
  }
  /**
   * The response for Firestore.RunQuery.
   */
  export interface Schema$RunQueryResponse {
    /**
     * A query result, not set when reporting partial progress.
     */
    document?: Schema$Document;
    /**
     * If present, Firestore has completely finished the request and no more documents will be returned.
     */
    done?: boolean | null;
    /**
     * The time at which the document was read. This may be monotonically increasing; in this case, the previous documents in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `document` will be sent, and this represents the time at which the query was run.
     */
    readTime?: string | null;
    /**
     * The number of results that have been skipped due to an offset between the last response and the current response.
     */
    skippedResults?: number | null;
    /**
     * The transaction that was started as part of this request. Can only be set in the first response, and only if RunQueryRequest.new_transaction was set in the request. If set, no other fields will be set in this response.
     */
    transaction?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
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
   * Firestore query for running an aggregation over a StructuredQuery.
   */
  export interface Schema$StructuredAggregationQuery {
    /**
     * Optional. Series of aggregations to apply over the results of the `structured_query`. Requires: * A minimum of one and maximum of five aggregations per query.
     */
    aggregations?: Schema$Aggregation[];
    /**
     * Nested structured query.
     */
    structuredQuery?: Schema$StructuredQuery;
  }
  /**
   * A Firestore query.
   */
  export interface Schema$StructuredQuery {
    /**
     * A potential prefix of a position in the result set to end the query at. This is similar to `START_AT` but with it controlling the end position rather than the start position. Requires: * The number of values cannot be greater than the number of fields specified in the `ORDER BY` clause.
     */
    endAt?: Schema$Cursor;
    /**
     * The collections to query.
     */
    from?: Schema$CollectionSelector[];
    /**
     * The maximum number of results to return. Applies after all other constraints. Requires: * The value must be greater than or equal to zero if specified.
     */
    limit?: number | null;
    /**
     * The number of documents to skip before returning the first result. This applies after the constraints specified by the `WHERE`, `START AT`, & `END AT` but before the `LIMIT` clause. Requires: * The value must be greater than or equal to zero if specified.
     */
    offset?: number | null;
    /**
     * The order to apply to the query results. Firestore allows callers to provide a full ordering, a partial ordering, or no ordering at all. In all cases, Firestore guarantees a stable ordering through the following rules: * The `order_by` is required to reference all fields used with an inequality filter. * All fields that are required to be in the `order_by` but are not already present are appended in lexicographical ordering of the field name. * If an order on `__name__` is not specified, it is appended by default. Fields are appended with the same sort direction as the last order specified, or 'ASCENDING' if no order was specified. For example: * `ORDER BY a` becomes `ORDER BY a ASC, __name__ ASC` * `ORDER BY a DESC` becomes `ORDER BY a DESC, __name__ DESC` * `WHERE a \> 1` becomes `WHERE a \> 1 ORDER BY a ASC, __name__ ASC` * `WHERE __name__ \> ... AND a \> 1` becomes `WHERE __name__ \> ... AND a \> 1 ORDER BY a ASC, __name__ ASC`
     */
    orderBy?: Schema$Order[];
    /**
     * Optional sub-set of the fields to return. This acts as a DocumentMask over the documents returned from a query. When not set, assumes that the caller wants all fields returned.
     */
    select?: Schema$Projection;
    /**
     * A potential prefix of a position in the result set to start the query at. The ordering of the result set is based on the `ORDER BY` clause of the original query. ``` SELECT * FROM k WHERE a = 1 AND b \> 2 ORDER BY b ASC, __name__ ASC; ``` This query's results are ordered by `(b ASC, __name__ ASC)`. Cursors can reference either the full ordering or a prefix of the location, though it cannot reference more fields than what are in the provided `ORDER BY`. Continuing off the example above, attaching the following start cursors will have varying impact: - `START BEFORE (2, /k/123)`: start the query right before `a = 1 AND b \> 2 AND __name__ \> /k/123`. - `START AFTER (10)`: start the query right after `a = 1 AND b \> 10`. Unlike `OFFSET` which requires scanning over the first N results to skip, a start cursor allows the query to begin at a logical position. This position is not required to match an actual result, it will scan forward from this position to find the next document. Requires: * The number of values cannot be greater than the number of fields specified in the `ORDER BY` clause.
     */
    startAt?: Schema$Cursor;
    /**
     * The filter to apply.
     */
    where?: Schema$Filter;
  }
  /**
   * Sum of the values of the requested field. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns 0. * Returns a 64-bit integer if all aggregated numbers are integers and the sum result does not overflow. Otherwise, the result is returned as a double. Note that even if all the aggregated values are integers, the result is returned as a double if it cannot fit within a 64-bit signed integer. When this occurs, the returned value will lose precision. * When underflow occurs, floating-point aggregation is non-deterministic. This means that running the same query repeatedly without any changes to the underlying values could produce slightly different results each time. In those cases, values should be stored as integers over floating-point numbers.
   */
  export interface Schema$Sum {
    /**
     * The field to aggregate on.
     */
    field?: Schema$FieldReference;
  }
  /**
   * A specification of a set of documents to listen to.
   */
  export interface Schema$Target {
    /**
     * A target specified by a set of document names.
     */
    documents?: Schema$DocumentsTarget;
    /**
     * The number of documents that last matched the query at the resume token or read time. This value is only relevant when a `resume_type` is provided. This value being present and greater than zero signals that the client wants `ExistenceFilter.unchanged_names` to be included in the response.
     */
    expectedCount?: number | null;
    /**
     * If the target should be removed once it is current and consistent.
     */
    once?: boolean | null;
    /**
     * A target specified by a query.
     */
    query?: Schema$QueryTarget;
    /**
     * Start listening after a specific `read_time`. The client must know the state of matching documents at this time.
     */
    readTime?: string | null;
    /**
     * A resume token from a prior TargetChange for an identical target. Using a resume token with a different target is unsupported and may fail.
     */
    resumeToken?: string | null;
    /**
     * The target ID that identifies the target on the stream. Must be a positive number and non-zero.
     */
    targetId?: number | null;
  }
  /**
   * Targets being watched have changed.
   */
  export interface Schema$TargetChange {
    /**
     * The error that resulted in this change, if applicable.
     */
    cause?: Schema$Status;
    /**
     * The consistent `read_time` for the given `target_ids` (omitted when the target_ids are not at a consistent snapshot). The stream is guaranteed to send a `read_time` with `target_ids` empty whenever the entire stream reaches a new consistent snapshot. ADD, CURRENT, and RESET messages are guaranteed to (eventually) result in a new consistent snapshot (while NO_CHANGE and REMOVE messages are not). For a given stream, `read_time` is guaranteed to be monotonically increasing.
     */
    readTime?: string | null;
    /**
     * A token that can be used to resume the stream for the given `target_ids`, or all targets if `target_ids` is empty. Not set on every target change.
     */
    resumeToken?: string | null;
    /**
     * The type of change that occurred.
     */
    targetChangeType?: string | null;
    /**
     * The target IDs of targets that have changed. If empty, the change applies to all targets. The order of the target IDs is not defined.
     */
    targetIds?: number[] | null;
  }
  /**
   * Options for creating a new transaction.
   */
  export interface Schema$TransactionOptions {
    /**
     * The transaction can only be used for read operations.
     */
    readOnly?: Schema$ReadOnly;
    /**
     * The transaction can be used for both read and write operations.
     */
    readWrite?: Schema$ReadWrite;
  }
  /**
   * A filter with a single operand.
   */
  export interface Schema$UnaryFilter {
    /**
     * The field to which to apply the operator.
     */
    field?: Schema$FieldReference;
    /**
     * The unary operator to apply.
     */
    op?: string | null;
  }
  /**
   * A message that can hold any of the supported value types.
   */
  export interface Schema$Value {
    /**
     * An array value. Cannot directly contain another array value, though can contain an map which contains another array.
     */
    arrayValue?: Schema$ArrayValue;
    /**
     * A boolean value.
     */
    booleanValue?: boolean | null;
    /**
     * A bytes value. Must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes are considered by queries.
     */
    bytesValue?: string | null;
    /**
     * A double value.
     */
    doubleValue?: number | null;
    /**
     * A geo point value representing a point on the surface of Earth.
     */
    geoPointValue?: Schema$LatLng;
    /**
     * An integer value.
     */
    integerValue?: string | null;
    /**
     * A map value.
     */
    mapValue?: Schema$MapValue;
    /**
     * A null value.
     */
    nullValue?: string | null;
    /**
     * A reference to a document. For example: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    referenceValue?: string | null;
    /**
     * A string value. The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes of the UTF-8 representation are considered by queries.
     */
    stringValue?: string | null;
    /**
     * A timestamp value. Precise only to microseconds. When stored, any additional precision is rounded down.
     */
    timestampValue?: string | null;
  }
  /**
   * A write on a document.
   */
  export interface Schema$Write {
    /**
     * An optional precondition on the document. The write will fail if this is set and not met by the target document.
     */
    currentDocument?: Schema$Precondition;
    /**
     * A document name to delete. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    delete?: string | null;
    /**
     * Applies a transformation to a document.
     */
    transform?: Schema$DocumentTransform;
    /**
     * A document to write.
     */
    update?: Schema$Document;
    /**
     * The fields to update in this write. This field can be set only when the operation is `update`. If the mask is not set for an `update` and the document exists, any existing data will be overwritten. If the mask is set and the document on the server has fields not covered by the mask, they are left unchanged. Fields referenced in the mask, but not present in the input document, are deleted from the document on the server. The field paths in this mask must not contain a reserved field name.
     */
    updateMask?: Schema$DocumentMask;
    /**
     * The transforms to perform after update. This field can be set only when the operation is `update`. If present, this write is equivalent to performing `update` and `transform` to the same document atomically and in order.
     */
    updateTransforms?: Schema$FieldTransform[];
  }
  /**
   * The request for Firestore.Write. The first request creates a stream, or resumes an existing one from a token. When creating a new stream, the server replies with a response containing only an ID and a token, to use in the next request. When resuming a stream, the server first streams any responses later than the given token, then a response containing only an up-to-date token, to use in the next request.
   */
  export interface Schema$WriteRequest {
    /**
     * Labels associated with this write request.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The ID of the write stream to resume. This may only be set in the first message. When left empty, a new write stream will be created.
     */
    streamId?: string | null;
    /**
     * A stream token that was previously sent by the server. The client should set this field to the token from the most recent WriteResponse it has received. This acknowledges that the client has received responses up to this token. After sending this token, earlier tokens may not be used anymore. The server may close the stream if there are too many unacknowledged responses. Leave this field unset when creating a new stream. To resume a stream at a specific point, set this field and the `stream_id` field. Leave this field unset when creating a new stream.
     */
    streamToken?: string | null;
    /**
     * The writes to apply. Always executed atomically and in order. This must be empty on the first request. This may be empty on the last request. This must not be empty on all other requests.
     */
    writes?: Schema$Write[];
  }
  /**
   * The response for Firestore.Write.
   */
  export interface Schema$WriteResponse {
    /**
     * The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the write.
     */
    commitTime?: string | null;
    /**
     * The ID of the stream. Only set on the first message, when a new stream was created.
     */
    streamId?: string | null;
    /**
     * A token that represents the position of this response in the stream. This can be used by a client to resume the stream at this point. This field is always set.
     */
    streamToken?: string | null;
    /**
     * The result of applying the writes. This i-th write result corresponds to the i-th write in the request.
     */
    writeResults?: Schema$WriteResult[];
  }
  /**
   * The result of applying a write.
   */
  export interface Schema$WriteResult {
    /**
     * The results of applying each DocumentTransform.FieldTransform, in the same order.
     */
    transformResults?: Schema$Value[];
    /**
     * The last update time of the document after applying the write. Not set after a `delete`. If the write did not actually change the document, this will be the previous update_time.
     */
    updateTime?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    databases: Resource$Projects$Databases;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.databases = new Resource$Projects$Databases(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Databases {
    context: APIRequestContext;
    backupSchedules: Resource$Projects$Databases$Backupschedules;
    collectionGroups: Resource$Projects$Databases$Collectiongroups;
    documents: Resource$Projects$Databases$Documents;
    operations: Resource$Projects$Databases$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.backupSchedules = new Resource$Projects$Databases$Backupschedules(
        this.context
      );
      this.collectionGroups = new Resource$Projects$Databases$Collectiongroups(
        this.context
      );
      this.documents = new Resource$Projects$Databases$Documents(this.context);
      this.operations = new Resource$Projects$Databases$Operations(
        this.context
      );
    }

    /**
     * Create a database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Databases$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Databases$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Databases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Databases$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Databases$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Create
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
        {}) as Params$Resource$Projects$Databases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/databases').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Deletes a database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Databases$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Databases$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Databases$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Delete
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
        {}) as Params$Resource$Projects$Databases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
     * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    exportDocuments(
      params: Params$Resource$Projects$Databases$Exportdocuments,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    exportDocuments(
      params?: Params$Resource$Projects$Databases$Exportdocuments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    exportDocuments(
      params: Params$Resource$Projects$Databases$Exportdocuments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportDocuments(
      params: Params$Resource$Projects$Databases$Exportdocuments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    exportDocuments(
      params: Params$Resource$Projects$Databases$Exportdocuments,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    exportDocuments(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    exportDocuments(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Exportdocuments
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
        {}) as Params$Resource$Projects$Databases$Exportdocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Exportdocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:exportDocuments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Gets information about a database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Databases$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Databases$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1Database>;
    get(
      params: Params$Resource$Projects$Databases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Database>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Database>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Get,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Database>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Database>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Get
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Database>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Database>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Database>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1Database>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1Database>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1Database>(
          parameters
        );
      }
    }

    /**
     * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    importDocuments(
      params: Params$Resource$Projects$Databases$Importdocuments,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    importDocuments(
      params?: Params$Resource$Projects$Databases$Importdocuments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    importDocuments(
      params: Params$Resource$Projects$Databases$Importdocuments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    importDocuments(
      params: Params$Resource$Projects$Databases$Importdocuments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importDocuments(
      params: Params$Resource$Projects$Databases$Importdocuments,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importDocuments(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importDocuments(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Importdocuments
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
        {}) as Params$Resource$Projects$Databases$Importdocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Importdocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:importDocuments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * List all the databases in the project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Databases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Databases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>;
    list(
      params: Params$Resource$Projects$Databases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$List,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$List
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/databases').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1ListDatabasesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Databases$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Databases$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Databases$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Databases$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Databases$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Patch
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
        {}) as Params$Resource$Projects$Databases$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
     * Create a new database by restore from an existing backup. The new database must be in the same cloud region or multi-region location as the existing backup. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing backup. The long-running operation can be used to track the progress of the restore, with the Operation's metadata field type being the RestoreDatabaseMetadata. The response type is the Database if the restore was successful. The new database is not readable or writeable until the LRO has completed. Cancelling the returned operation will stop the restore and delete the in-progress database, if the restore is still active.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    restore(
      params: Params$Resource$Projects$Databases$Restore,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    restore(
      params?: Params$Resource$Projects$Databases$Restore,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    restore(
      params: Params$Resource$Projects$Databases$Restore,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restore(
      params: Params$Resource$Projects$Databases$Restore,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    restore(
      params: Params$Resource$Projects$Databases$Restore,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    restore(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    restore(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Restore
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
        {}) as Params$Resource$Projects$Databases$Restore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Restore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/databases:restore').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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

  export interface Params$Resource$Projects$Databases$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the database, which will become the final component of the database's resource name. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8\}(-[0-9a-f]{4\}){3\}-[0-9a-f]{12\}/. "(default)" database id is also valid.
     */
    databaseId?: string;
    /**
     * Required. A parent name of the form `projects/{project_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1Database;
  }
  export interface Params$Resource$Projects$Databases$Delete
    extends StandardParameters {
    /**
     * The current etag of the Database. If an etag is provided and does not match the current etag of the database, deletion will be blocked and a FAILED_PRECONDITION error will be returned.
     */
    etag?: string;
    /**
     * Required. A name of the form `projects/{project_id\}/databases/{database_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Exportdocuments
    extends StandardParameters {
    /**
     * Required. Database to export. Should be of the form: `projects/{project_id\}/databases/{database_id\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1ExportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Databases$Get
    extends StandardParameters {
    /**
     * Required. A name of the form `projects/{project_id\}/databases/{database_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Importdocuments
    extends StandardParameters {
    /**
     * Required. Database to import into. Should be of the form: `projects/{project_id\}/databases/{database_id\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1ImportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Databases$List
    extends StandardParameters {
    /**
     * Required. A parent name of the form `projects/{project_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Databases$Patch
    extends StandardParameters {
    /**
     * The resource name of the Database. Format: `projects/{project\}/databases/{database\}`
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1Database;
  }
  export interface Params$Resource$Projects$Databases$Restore
    extends StandardParameters {
    /**
     * Required. The project to restore the database in. Format is `projects/{project_id\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1RestoreDatabaseRequest;
  }

  export class Resource$Projects$Databases$Backupschedules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a backup schedule on a database. At most two backup schedules can be configured on a database, one daily backup schedule with retention up to 7 days and one weekly backup schedule with retention up to 14 weeks.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Databases$Backupschedules$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Databases$Backupschedules$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1BackupSchedule>;
    create(
      params: Params$Resource$Projects$Databases$Backupschedules$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Databases$Backupschedules$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
    ): void;
    create(
      params: Params$Resource$Projects$Databases$Backupschedules$Create,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Backupschedules$Create
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1BackupSchedule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Backupschedules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Backupschedules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/backupSchedules').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1BackupSchedule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1BackupSchedule>(
          parameters
        );
      }
    }

    /**
     * Deletes a backup schedule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Databases$Backupschedules$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Databases$Backupschedules$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Databases$Backupschedules$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Backupschedules$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Backupschedules$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Backupschedules$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Backupschedules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Backupschedules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets information about a backup schedule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Databases$Backupschedules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Databases$Backupschedules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1BackupSchedule>;
    get(
      params: Params$Resource$Projects$Databases$Backupschedules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Backupschedules$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Backupschedules$Get,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Backupschedules$Get
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1BackupSchedule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Backupschedules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Backupschedules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1BackupSchedule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1BackupSchedule>(
          parameters
        );
      }
    }

    /**
     * List backup schedules.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Databases$Backupschedules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Databases$Backupschedules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>;
    list(
      params: Params$Resource$Projects$Databases$Backupschedules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Backupschedules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Backupschedules$List,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Backupschedules$List
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Backupschedules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Backupschedules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/backupSchedules').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1ListBackupSchedulesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a backup schedule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Databases$Backupschedules$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Databases$Backupschedules$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1BackupSchedule>;
    patch(
      params: Params$Resource$Projects$Databases$Backupschedules$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Databases$Backupschedules$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
    ): void;
    patch(
      params: Params$Resource$Projects$Databases$Backupschedules$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Backupschedules$Patch
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1BackupSchedule>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1BackupSchedule>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Backupschedules$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Backupschedules$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1BackupSchedule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1BackupSchedule>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Backupschedules$Create
    extends StandardParameters {
    /**
     * Required. The parent database. Format `projects/{project\}/databases/{database\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1BackupSchedule;
  }
  export interface Params$Resource$Projects$Databases$Backupschedules$Delete
    extends StandardParameters {
    /**
     * Required. The name of backup schedule. Format `projects/{project\}/databases/{database\}/backupSchedules/{backup_schedule\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Backupschedules$Get
    extends StandardParameters {
    /**
     * Required. The name of the backup schedule. Format `projects/{project\}/databases/{database\}/backupSchedules/{backup_schedule\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Backupschedules$List
    extends StandardParameters {
    /**
     * Required. The parent database. Format is `projects/{project\}/databases/{database\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Databases$Backupschedules$Patch
    extends StandardParameters {
    /**
     * Output only. The unique backup schedule identifier across all locations and databases for the given project. This will be auto-assigned. Format is `projects/{project\}/databases/{database\}/backupSchedules/{backup_schedule\}`
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1BackupSchedule;
  }

  export class Resource$Projects$Databases$Collectiongroups {
    context: APIRequestContext;
    fields: Resource$Projects$Databases$Collectiongroups$Fields;
    indexes: Resource$Projects$Databases$Collectiongroups$Indexes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.fields = new Resource$Projects$Databases$Collectiongroups$Fields(
        this.context
      );
      this.indexes = new Resource$Projects$Databases$Collectiongroups$Indexes(
        this.context
      );
    }
  }

  export class Resource$Projects$Databases$Collectiongroups$Fields {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the metadata and configuration for a Field.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1Field>;
    get(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Collectiongroups$Fields$Get
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1Field>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Collectiongroups$Fields$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Collectiongroups$Fields$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1Field>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1Field>(parameters);
      }
    }

    /**
     * Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false or `ttlConfig:*`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1ListFieldsResponse>;
    list(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListFieldsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListFieldsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListFieldsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListFieldsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Collectiongroups$Fields$List
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListFieldsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListFieldsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListFieldsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1ListFieldsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Collectiongroups$Fields$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Collectiongroups$Fields$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/fields').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1ListFieldsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1ListFieldsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" \}`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id\}/databases/{database_id\}/collectionGroups/__default__/fields/x`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch
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
        {}) as Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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

  export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$Get
    extends StandardParameters {
    /**
     * Required. A name of the form `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}/fields/{field_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$List
    extends StandardParameters {
    /**
     * The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with a filter that includes `indexConfig.usesAncestorConfig:false` .
     */
    filter?: string;
    /**
     * The number of results to return.
     */
    pageSize?: number;
    /**
     * A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.
     */
    pageToken?: string;
    /**
     * Required. A parent name of the form `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch
    extends StandardParameters {
    /**
     * Required. A field name of the form `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}/fields/{field_path\}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id\}/databases/{database_id\}/collectionGroups/__default__/fields/x` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
     */
    name?: string;
    /**
     * A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1Field;
  }

  export class Resource$Projects$Databases$Collectiongroups$Indexes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create
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
        {}) as Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/indexes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Deletes a composite index.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets a composite index.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1Index>;
    get(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1Index>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1Index>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1Index>(parameters);
      }
    }

    /**
     * Lists composite indexes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Databases$Collectiongroups$Indexes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1ListIndexesResponse>;
    list(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListIndexesResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListIndexesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$List,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListIndexesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListIndexesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Collectiongroups$Indexes$List
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListIndexesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListIndexesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListIndexesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1ListIndexesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Collectiongroups$Indexes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Collectiongroups$Indexes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/indexes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1ListIndexesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1ListIndexesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create
    extends StandardParameters {
    /**
     * Required. A parent name of the form `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1Index;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete
    extends StandardParameters {
    /**
     * Required. A name of the form `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}/indexes/{index_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get
    extends StandardParameters {
    /**
     * Required. A name of the form `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}/indexes/{index_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$List
    extends StandardParameters {
    /**
     * The filter to apply to list results.
     */
    filter?: string;
    /**
     * The number of results to return.
     */
    pageSize?: number;
    /**
     * A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.
     */
    pageToken?: string;
    /**
     * Required. A parent name of the form `projects/{project_id\}/databases/{database_id\}/collectionGroups/{collection_id\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Databases$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchGet(
      params: Params$Resource$Projects$Databases$Documents$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Projects$Databases$Documents$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchGetDocumentsResponse>;
    batchGet(
      params: Params$Resource$Projects$Databases$Documents$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Databases$Documents$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>,
      callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Databases$Documents$Batchget,
      callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Batchget
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchGetDocumentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/documents:batchGet').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchGetDocumentsResponse>(parameters);
      }
    }

    /**
     * Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchWrite(
      params: Params$Resource$Projects$Databases$Documents$Batchwrite,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchWrite(
      params?: Params$Resource$Projects$Databases$Documents$Batchwrite,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchWriteResponse>;
    batchWrite(
      params: Params$Resource$Projects$Databases$Documents$Batchwrite,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchWrite(
      params: Params$Resource$Projects$Databases$Documents$Batchwrite,
      options: MethodOptions | BodyResponseCallback<Schema$BatchWriteResponse>,
      callback: BodyResponseCallback<Schema$BatchWriteResponse>
    ): void;
    batchWrite(
      params: Params$Resource$Projects$Databases$Documents$Batchwrite,
      callback: BodyResponseCallback<Schema$BatchWriteResponse>
    ): void;
    batchWrite(callback: BodyResponseCallback<Schema$BatchWriteResponse>): void;
    batchWrite(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Batchwrite
        | BodyResponseCallback<Schema$BatchWriteResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchWriteResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchWriteResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchWriteResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Batchwrite;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Batchwrite;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/documents:batchWrite').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchWriteResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchWriteResponse>(parameters);
      }
    }

    /**
     * Starts a new transaction.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    beginTransaction(
      params: Params$Resource$Projects$Databases$Documents$Begintransaction,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    beginTransaction(
      params?: Params$Resource$Projects$Databases$Documents$Begintransaction,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BeginTransactionResponse>;
    beginTransaction(
      params: Params$Resource$Projects$Databases$Documents$Begintransaction,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    beginTransaction(
      params: Params$Resource$Projects$Databases$Documents$Begintransaction,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BeginTransactionResponse>,
      callback: BodyResponseCallback<Schema$BeginTransactionResponse>
    ): void;
    beginTransaction(
      params: Params$Resource$Projects$Databases$Documents$Begintransaction,
      callback: BodyResponseCallback<Schema$BeginTransactionResponse>
    ): void;
    beginTransaction(
      callback: BodyResponseCallback<Schema$BeginTransactionResponse>
    ): void;
    beginTransaction(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Begintransaction
        | BodyResponseCallback<Schema$BeginTransactionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BeginTransactionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BeginTransactionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BeginTransactionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Begintransaction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Documents$Begintransaction;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+database}/documents:beginTransaction'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BeginTransactionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BeginTransactionResponse>(parameters);
      }
    }

    /**
     * Commits a transaction, while optionally updating documents.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    commit(
      params: Params$Resource$Projects$Databases$Documents$Commit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    commit(
      params?: Params$Resource$Projects$Databases$Documents$Commit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommitResponse>;
    commit(
      params: Params$Resource$Projects$Databases$Documents$Commit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    commit(
      params: Params$Resource$Projects$Databases$Documents$Commit,
      options: MethodOptions | BodyResponseCallback<Schema$CommitResponse>,
      callback: BodyResponseCallback<Schema$CommitResponse>
    ): void;
    commit(
      params: Params$Resource$Projects$Databases$Documents$Commit,
      callback: BodyResponseCallback<Schema$CommitResponse>
    ): void;
    commit(callback: BodyResponseCallback<Schema$CommitResponse>): void;
    commit(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Commit
        | BodyResponseCallback<Schema$CommitResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommitResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommitResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CommitResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Commit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Commit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/documents:commit').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommitResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommitResponse>(parameters);
      }
    }

    /**
     * Creates a new document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    createDocument(
      params: Params$Resource$Projects$Databases$Documents$Createdocument,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createDocument(
      params?: Params$Resource$Projects$Databases$Documents$Createdocument,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Document>;
    createDocument(
      params: Params$Resource$Projects$Databases$Documents$Createdocument,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createDocument(
      params: Params$Resource$Projects$Databases$Documents$Createdocument,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    createDocument(
      params: Params$Resource$Projects$Databases$Documents$Createdocument,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    createDocument(callback: BodyResponseCallback<Schema$Document>): void;
    createDocument(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Createdocument
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Document> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Createdocument;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Documents$Createdocument;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/{collectionId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'collectionId'],
        pathParams: ['collectionId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }

    /**
     * Deletes a document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Databases$Documents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Databases$Documents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Databases$Documents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Documents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Documents$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets a single document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Databases$Documents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Databases$Documents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Document>;
    get(
      params: Params$Resource$Projects$Databases$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Documents$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Documents$Get,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    get(callback: BodyResponseCallback<Schema$Document>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Get
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Document> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }

    /**
     * Lists documents.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Databases$Documents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Databases$Documents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDocumentsResponse>;
    list(
      params: Params$Resource$Projects$Databases$Documents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Documents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDocumentsResponse>,
      callback: BodyResponseCallback<Schema$ListDocumentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Documents$List,
      callback: BodyResponseCallback<Schema$ListDocumentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDocumentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$List
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDocumentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/{collectionId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'collectionId'],
        pathParams: ['collectionId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDocumentsResponse>(parameters);
      }
    }

    /**
     * Lists all the collection IDs underneath a document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listCollectionIds(
      params: Params$Resource$Projects$Databases$Documents$Listcollectionids,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listCollectionIds(
      params?: Params$Resource$Projects$Databases$Documents$Listcollectionids,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCollectionIdsResponse>;
    listCollectionIds(
      params: Params$Resource$Projects$Databases$Documents$Listcollectionids,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listCollectionIds(
      params: Params$Resource$Projects$Databases$Documents$Listcollectionids,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCollectionIdsResponse>,
      callback: BodyResponseCallback<Schema$ListCollectionIdsResponse>
    ): void;
    listCollectionIds(
      params: Params$Resource$Projects$Databases$Documents$Listcollectionids,
      callback: BodyResponseCallback<Schema$ListCollectionIdsResponse>
    ): void;
    listCollectionIds(
      callback: BodyResponseCallback<Schema$ListCollectionIdsResponse>
    ): void;
    listCollectionIds(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Listcollectionids
        | BodyResponseCallback<Schema$ListCollectionIdsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCollectionIdsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCollectionIdsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCollectionIdsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Listcollectionids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Documents$Listcollectionids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:listCollectionIds').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCollectionIdsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCollectionIdsResponse>(parameters);
      }
    }

    /**
     * Lists documents.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listDocuments(
      params: Params$Resource$Projects$Databases$Documents$Listdocuments,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listDocuments(
      params?: Params$Resource$Projects$Databases$Documents$Listdocuments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDocumentsResponse>;
    listDocuments(
      params: Params$Resource$Projects$Databases$Documents$Listdocuments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listDocuments(
      params: Params$Resource$Projects$Databases$Documents$Listdocuments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDocumentsResponse>,
      callback: BodyResponseCallback<Schema$ListDocumentsResponse>
    ): void;
    listDocuments(
      params: Params$Resource$Projects$Databases$Documents$Listdocuments,
      callback: BodyResponseCallback<Schema$ListDocumentsResponse>
    ): void;
    listDocuments(
      callback: BodyResponseCallback<Schema$ListDocumentsResponse>
    ): void;
    listDocuments(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Listdocuments
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDocumentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Listdocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Documents$Listdocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/{collectionId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'collectionId'],
        pathParams: ['collectionId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDocumentsResponse>(parameters);
      }
    }

    /**
     * Listens to changes. This method is only available via gRPC or WebChannel (not REST).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listen(
      params: Params$Resource$Projects$Databases$Documents$Listen,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listen(
      params?: Params$Resource$Projects$Databases$Documents$Listen,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListenResponse>;
    listen(
      params: Params$Resource$Projects$Databases$Documents$Listen,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listen(
      params: Params$Resource$Projects$Databases$Documents$Listen,
      options: MethodOptions | BodyResponseCallback<Schema$ListenResponse>,
      callback: BodyResponseCallback<Schema$ListenResponse>
    ): void;
    listen(
      params: Params$Resource$Projects$Databases$Documents$Listen,
      callback: BodyResponseCallback<Schema$ListenResponse>
    ): void;
    listen(callback: BodyResponseCallback<Schema$ListenResponse>): void;
    listen(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Listen
        | BodyResponseCallback<Schema$ListenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListenResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ListenResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Listen;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Listen;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/documents:listen').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListenResponse>(parameters);
      }
    }

    /**
     * Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    partitionQuery(
      params: Params$Resource$Projects$Databases$Documents$Partitionquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    partitionQuery(
      params?: Params$Resource$Projects$Databases$Documents$Partitionquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PartitionQueryResponse>;
    partitionQuery(
      params: Params$Resource$Projects$Databases$Documents$Partitionquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    partitionQuery(
      params: Params$Resource$Projects$Databases$Documents$Partitionquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PartitionQueryResponse>,
      callback: BodyResponseCallback<Schema$PartitionQueryResponse>
    ): void;
    partitionQuery(
      params: Params$Resource$Projects$Databases$Documents$Partitionquery,
      callback: BodyResponseCallback<Schema$PartitionQueryResponse>
    ): void;
    partitionQuery(
      callback: BodyResponseCallback<Schema$PartitionQueryResponse>
    ): void;
    partitionQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Partitionquery
        | BodyResponseCallback<Schema$PartitionQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PartitionQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PartitionQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PartitionQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Partitionquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Documents$Partitionquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:partitionQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PartitionQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PartitionQueryResponse>(parameters);
      }
    }

    /**
     * Updates or inserts a document.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Databases$Documents$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Databases$Documents$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Document>;
    patch(
      params: Params$Resource$Projects$Databases$Documents$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Databases$Documents$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    patch(
      params: Params$Resource$Projects$Databases$Documents$Patch,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Document>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Patch
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Document> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }

    /**
     * Rolls back a transaction.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rollback(
      params: Params$Resource$Projects$Databases$Documents$Rollback,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rollback(
      params?: Params$Resource$Projects$Databases$Documents$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    rollback(
      params: Params$Resource$Projects$Databases$Documents$Rollback,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollback(
      params: Params$Resource$Projects$Databases$Documents$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    rollback(
      params: Params$Resource$Projects$Databases$Documents$Rollback,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$Empty>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Rollback
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/documents:rollback').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    runAggregationQuery(
      params: Params$Resource$Projects$Databases$Documents$Runaggregationquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    runAggregationQuery(
      params?: Params$Resource$Projects$Databases$Documents$Runaggregationquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RunAggregationQueryResponse>;
    runAggregationQuery(
      params: Params$Resource$Projects$Databases$Documents$Runaggregationquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runAggregationQuery(
      params: Params$Resource$Projects$Databases$Documents$Runaggregationquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RunAggregationQueryResponse>,
      callback: BodyResponseCallback<Schema$RunAggregationQueryResponse>
    ): void;
    runAggregationQuery(
      params: Params$Resource$Projects$Databases$Documents$Runaggregationquery,
      callback: BodyResponseCallback<Schema$RunAggregationQueryResponse>
    ): void;
    runAggregationQuery(
      callback: BodyResponseCallback<Schema$RunAggregationQueryResponse>
    ): void;
    runAggregationQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Runaggregationquery
        | BodyResponseCallback<Schema$RunAggregationQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RunAggregationQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RunAggregationQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RunAggregationQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Runaggregationquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Documents$Runaggregationquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:runAggregationQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RunAggregationQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RunAggregationQueryResponse>(parameters);
      }
    }

    /**
     * Runs a query.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    runQuery(
      params: Params$Resource$Projects$Databases$Documents$Runquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    runQuery(
      params?: Params$Resource$Projects$Databases$Documents$Runquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RunQueryResponse>;
    runQuery(
      params: Params$Resource$Projects$Databases$Documents$Runquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runQuery(
      params: Params$Resource$Projects$Databases$Documents$Runquery,
      options: MethodOptions | BodyResponseCallback<Schema$RunQueryResponse>,
      callback: BodyResponseCallback<Schema$RunQueryResponse>
    ): void;
    runQuery(
      params: Params$Resource$Projects$Databases$Documents$Runquery,
      callback: BodyResponseCallback<Schema$RunQueryResponse>
    ): void;
    runQuery(callback: BodyResponseCallback<Schema$RunQueryResponse>): void;
    runQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Runquery
        | BodyResponseCallback<Schema$RunQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RunQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RunQueryResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RunQueryResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Runquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Runquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:runQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RunQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RunQueryResponse>(parameters);
      }
    }

    /**
     * Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    write(
      params: Params$Resource$Projects$Databases$Documents$Write,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    write(
      params?: Params$Resource$Projects$Databases$Documents$Write,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WriteResponse>;
    write(
      params: Params$Resource$Projects$Databases$Documents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Databases$Documents$Write,
      options: MethodOptions | BodyResponseCallback<Schema$WriteResponse>,
      callback: BodyResponseCallback<Schema$WriteResponse>
    ): void;
    write(
      params: Params$Resource$Projects$Databases$Documents$Write,
      callback: BodyResponseCallback<Schema$WriteResponse>
    ): void;
    write(callback: BodyResponseCallback<Schema$WriteResponse>): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Write
        | BodyResponseCallback<Schema$WriteResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WriteResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WriteResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WriteResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Write;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+database}/documents:write').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WriteResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WriteResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Documents$Batchget
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchGetDocumentsRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Batchwrite
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchWriteRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Begintransaction
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BeginTransactionRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Commit
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommitRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Createdocument
    extends StandardParameters {
    /**
     * Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`.
     */
    collectionId?: string;
    /**
     * The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service.
     */
    documentId?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * Required. The parent resource. For example: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/chatrooms/{chatroom_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Document;
  }
  export interface Params$Resource$Projects$Databases$Documents$Delete
    extends StandardParameters {
    /**
     * When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     */
    'currentDocument.exists'?: boolean;
    /**
     * When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     */
    'currentDocument.updateTime'?: string;
    /**
     * Required. The resource name of the Document to delete. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Documents$Get
    extends StandardParameters {
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * Required. The resource name of the Document to get. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    name?: string;
    /**
     * Reads the version of the document at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string;
    /**
     * Reads the document in a transaction.
     */
    transaction?: string;
  }
  export interface Params$Resource$Projects$Databases$Documents$List
    extends StandardParameters {
    /**
     * Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`.
     */
    collectionId?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;
    /**
     * Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string;
    /**
     * If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`.
     */
    showMissing?: boolean;
    /**
     * Perform the read as part of an already active transaction.
     */
    transaction?: string;
  }
  export interface Params$Resource$Projects$Databases$Documents$Listcollectionids
    extends StandardParameters {
    /**
     * Required. The parent document. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListCollectionIdsRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Listdocuments
    extends StandardParameters {
    /**
     * Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`.
     */
    collectionId?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;
    /**
     * Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     */
    readTime?: string;
    /**
     * If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`.
     */
    showMissing?: boolean;
    /**
     * Perform the read as part of an already active transaction.
     */
    transaction?: string;
  }
  export interface Params$Resource$Projects$Databases$Documents$Listen
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListenRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Partitionquery
    extends StandardParameters {
    /**
     * Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents`. Document resource names are not supported; only database resource names can be specified.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PartitionQueryRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Patch
    extends StandardParameters {
    /**
     * When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     */
    'currentDocument.exists'?: boolean;
    /**
     * When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     */
    'currentDocument.updateTime'?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * The resource name of the document, for example `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    name?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'updateMask.fieldPaths'?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Document;
  }
  export interface Params$Resource$Projects$Databases$Documents$Rollback
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Runaggregationquery
    extends StandardParameters {
    /**
     * Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunAggregationQueryRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Runquery
    extends StandardParameters {
    /**
     * Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunQueryRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Write
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`. This is only required in the first message.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WriteRequest;
  }

  export class Resource$Projects$Databases$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Databases$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Databases$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Databases$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Databases$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Databases$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Databases$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Databases$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Databases$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Operations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
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
      params: Params$Resource$Projects$Databases$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Databases$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Databases$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Operations$Get
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
        {}) as Params$Resource$Projects$Databases$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
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
      params: Params$Resource$Projects$Databases$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Databases$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Databases$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Operations$List
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
        {}) as Params$Resource$Projects$Databases$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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

  export interface Params$Resource$Projects$Databases$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleLongrunningCancelOperationRequest;
  }
  export interface Params$Resource$Projects$Databases$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Operations$List
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

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    backups: Resource$Projects$Locations$Backups;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.backups = new Resource$Projects$Locations$Backups(this.context);
    }

    /**
     * Gets information about a location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Backups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a backup.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Backups$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Backups$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Backups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Backups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Backups$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backups$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets information about a backup.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Backups$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Backups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1Backup>;
    get(
      params: Params$Resource$Projects$Locations$Backups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backups$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Backup>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Backup>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Backups$Get,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Backup>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Backup>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backups$Get
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Backup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Backup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1Backup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1Backup>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1Backup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1Backup>(
          parameters
        );
      }
    }

    /**
     * Lists all the backups.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Backups$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Backups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1ListBackupsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Backups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Backups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Backups$List,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Backups$List
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListBackupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1ListBackupsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Backups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Backups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/backups').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1ListBackupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1ListBackupsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Backups$Delete
    extends StandardParameters {
    /**
     * Required. Name of the backup to delete. format is `projects/{project\}/locations/{location\}/backups/{backup\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Backups$Get
    extends StandardParameters {
    /**
     * Required. Name of the backup to fetch. Format is `projects/{project\}/locations/{location\}/backups/{backup\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Backups$List
    extends StandardParameters {
    /**
     * Required. The location to list backups from. Format is `projects/{project\}/locations/{location\}`. Use `{location\} = '-'` to list backups from all locations for the given project. This allows listing backups from a single location or from all locations.
     */
    parent?: string;
  }
}
