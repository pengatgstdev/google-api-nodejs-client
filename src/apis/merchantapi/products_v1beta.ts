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

export namespace merchantapi_products_v1beta {
  export interface Options extends GlobalOptions {
    version: 'products_v1beta';
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
   * Merchant API
   *
   * Programmatically manage your Merchant Center Accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const merchantapi = google.merchantapi('products_v1beta');
   * ```
   */
  export class Merchantapi {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * Attributes.
   */
  export interface Schema$Attributes {
    /**
     * Additional URLs of images of the item.
     */
    additionalImageLinks?: string[] | null;
    /**
     * Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
     */
    adsGrouping?: string | null;
    /**
     * Similar to ads_grouping, but only works on CPC.
     */
    adsLabels?: string[] | null;
    /**
     * Allows advertisers to override the item URL when the product is shown within the context of Product ads.
     */
    adsRedirect?: string | null;
    /**
     * Set to true if the item is targeted towards adults.
     */
    adult?: boolean | null;
    /**
     * Target [age group](https://support.google.com/merchants/answer/6324463) of the item.
     */
    ageGroup?: string | null;
    /**
     * A safeguard in the "Automated Discounts" (https://support.google.com/merchants/answer/10295759) and "Dynamic Promotions" (https://support.google.com/merchants/answer/13949249) projects, ensuring that discounts on merchants' offers do not fall below this value, thereby preserving the offer's value and profitability.
     */
    autoPricingMinPrice?: Schema$Price;
    /**
     * Availability status of the item.
     */
    availability?: string | null;
    /**
     * The day a pre-ordered product becomes available for delivery, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    availabilityDate?: string | null;
    /**
     * Brand of the item.
     */
    brand?: string | null;
    /**
     * URL for the canonical version of your item's landing page.
     */
    canonicalLink?: string | null;
    /**
     * Product Certifications, for example for energy efficiency labeling of products recorded in the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database. See the [Help Center](https://support.google.com/merchants/answer/13528839) article for more information.
     */
    certifications?: Schema$Certification[];
    /**
     * Extra fields to export to the Cloud Retail program.
     */
    cloudExportAdditionalProperties?: Schema$CloudExportAdditionalProperties[];
    /**
     * Color of the item.
     */
    color?: string | null;
    /**
     * Condition or state of the item.
     */
    condition?: string | null;
    /**
     * Cost of goods sold. Used for gross profit reporting.
     */
    costOfGoodsSold?: Schema$Price;
    /**
     * Custom label 0 for custom grouping of items in a Shopping campaign.
     */
    customLabel0?: string | null;
    /**
     * Custom label 1 for custom grouping of items in a Shopping campaign.
     */
    customLabel1?: string | null;
    /**
     * Custom label 2 for custom grouping of items in a Shopping campaign.
     */
    customLabel2?: string | null;
    /**
     * Custom label 3 for custom grouping of items in a Shopping campaign.
     */
    customLabel3?: string | null;
    /**
     * Custom label 4 for custom grouping of items in a Shopping campaign.
     */
    customLabel4?: string | null;
    /**
     * Description of the item.
     */
    description?: string | null;
    /**
     * The date time when an offer becomes visible in search results across Google’s YouTube surfaces, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. See [Disclosure date]( https://support.google.com/merchants/answer/13034208) for more information.
     */
    disclosureDate?: string | null;
    /**
     * An identifier for an item for dynamic remarketing campaigns.
     */
    displayAdsId?: string | null;
    /**
     * URL directly to your item's landing page for dynamic remarketing campaigns.
     */
    displayAdsLink?: string | null;
    /**
     * Advertiser-specified recommendations.
     */
    displayAdsSimilarIds?: string[] | null;
    /**
     * Title of an item for dynamic remarketing campaigns.
     */
    displayAdsTitle?: string | null;
    /**
     * Offer margin for dynamic remarketing campaigns.
     */
    displayAdsValue?: number | null;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.
     */
    energyEfficiencyClass?: string | null;
    /**
     * The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center).
     */
    excludedDestinations?: string[] | null;
    /**
     * Date on which the item should expire, as specified upon insertion, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. The actual expiration date is exposed in `productstatuses` as [googleExpirationDate](https://support.google.com/merchants/answer/6324499) and might be earlier if `expirationDate` is too far in the future.
     */
    expirationDate?: string | null;
    /**
     * Required for multi-seller accounts. Use this attribute if you're a marketplace uploading products for various sellers to your multi-seller account.
     */
    externalSellerId?: string | null;
    /**
     * Conditions to be met for a product to have free shipping.
     */
    freeShippingThreshold?: Schema$FreeShippingThreshold[];
    /**
     * Target gender of the item.
     */
    gender?: string | null;
    /**
     * Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API.
     */
    googleProductCategory?: string | null;
    /**
     * Global Trade Item Number ([GTIN](https://support.google.com/merchants/answer/188494#gtin)) of the item.
     */
    gtin?: string | null;
    /**
     * Set this value to false when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Defaults to true, if not provided.
     */
    identifierExists?: boolean | null;
    /**
     * URL of an image of the item.
     */
    imageLink?: string | null;
    /**
     * The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.
     */
    includedDestinations?: string[] | null;
    /**
     * Number and amount of installments to pay for an item.
     */
    installment?: Schema$Installment;
    /**
     * Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
     */
    isBundle?: boolean | null;
    /**
     * Shared identifier for all variants of the same product.
     */
    itemGroupId?: string | null;
    /**
     * Additional URLs of lifestyle images of the item, used to explicitly identify images that showcase your item in a real-world context. See the [Help Center article](https://support.google.com/merchants/answer/9103186) for more information.
     */
    lifestyleImageLinks?: string[] | null;
    /**
     * URL directly linking to your item's page on your online store.
     */
    link?: string | null;
    /**
     * Link template for merchant hosted local storefront.
     */
    linkTemplate?: string | null;
    /**
     * Loyalty points that users receive after purchasing the item. Japan only.
     */
    loyaltyPoints?: Schema$LoyaltyPoints;
    /**
     * A list of loyalty program information that is used to surface loyalty benefits (for example, better pricing, points, etc) to the user of this item.
     */
    loyaltyPrograms?: Schema$LoyaltyProgram[];
    /**
     * The material of which the item is made.
     */
    material?: string | null;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.
     */
    maxEnergyEfficiencyClass?: string | null;
    /**
     * Maximal product handling time (in business days).
     */
    maxHandlingTime?: string | null;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.
     */
    minEnergyEfficiencyClass?: string | null;
    /**
     * Minimal product handling time (in business days).
     */
    minHandlingTime?: string | null;
    /**
     * URL for the mobile-optimized version of your item's landing page.
     */
    mobileLink?: string | null;
    /**
     * Link template for merchant hosted local storefront optimized for mobile devices.
     */
    mobileLinkTemplate?: string | null;
    /**
     * Manufacturer Part Number ([MPN](https://support.google.com/merchants/answer/188494#mpn)) of the item.
     */
    mpn?: string | null;
    /**
     * The number of identical products in a merchant-defined multipack.
     */
    multipack?: string | null;
    /**
     * The item's pattern (for example, polka dots).
     */
    pattern?: string | null;
    /**
     * Publication of this item will be temporarily [paused](https://support.google.com/merchants/answer/11909930).
     */
    pause?: string | null;
    /**
     * The pick up option for the item.
     */
    pickupMethod?: string | null;
    /**
     * Item store pickup timeline.
     */
    pickupSla?: string | null;
    /**
     * Price of the item.
     */
    price?: Schema$Price;
    /**
     * Technical specification or additional product details.
     */
    productDetails?: Schema$ProductDetail[];
    /**
     * The height of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).
     */
    productHeight?: Schema$ProductDimension;
    /**
     * Bullet points describing the most relevant highlights of a product.
     */
    productHighlights?: string[] | null;
    /**
     * The length of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).
     */
    productLength?: Schema$ProductDimension;
    /**
     * Categories of the item (formatted as in [product data specification](https://support.google.com/merchants/answer/188494#product_type)).
     */
    productTypes?: string[] | null;
    /**
     * The weight of the product in the units provided. The value must be between 0 (exclusive) and 2000 (inclusive).
     */
    productWeight?: Schema$ProductWeight;
    /**
     * The width of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).
     */
    productWidth?: Schema$ProductDimension;
    /**
     * The unique ID of a promotion.
     */
    promotionIds?: string[] | null;
    /**
     * Advertised sale price of the item.
     */
    salePrice?: Schema$Price;
    /**
     * Date range during which the item is on sale (see [product data specification](https://support.google.com/merchants/answer/188494#sale_price_effective_date)).
     */
    salePriceEffectiveDate?: Schema$Interval;
    /**
     * The quantity of the product that is available for selling on Google. Supported only for online products.
     */
    sellOnGoogleQuantity?: string | null;
    /**
     * Shipping rules.
     */
    shipping?: Schema$Shipping[];
    /**
     * Height of the item for shipping.
     */
    shippingHeight?: Schema$ShippingDimension;
    /**
     * The shipping label of the product, used to group product in account-level shipping rules.
     */
    shippingLabel?: string | null;
    /**
     * Length of the item for shipping.
     */
    shippingLength?: Schema$ShippingDimension;
    /**
     * Weight of the item for shipping.
     */
    shippingWeight?: Schema$ShippingWeight;
    /**
     * Width of the item for shipping.
     */
    shippingWidth?: Schema$ShippingDimension;
    /**
     * List of country codes (ISO 3166-1 alpha-2) to exclude the offer from Shopping Ads destination. Countries from this list are removed from countries configured in data source settings.
     */
    shoppingAdsExcludedCountries?: string[] | null;
    /**
     * Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see [https://support.google.com/merchants/answer/6324492](size definition)).
     */
    size?: string | null;
    /**
     * System in which the size is specified. Recommended for apparel items.
     */
    sizeSystem?: string | null;
    /**
     * The cut of the item. It can be used to represent combined size types for apparel items. Maximum two of size types can be provided (see [https://support.google.com/merchants/answer/6324497](size type)).
     */
    sizeTypes?: string[] | null;
    /**
     * Structured description, for algorithmically (AI)-generated descriptions.
     */
    structuredDescription?: Schema$ProductStructuredDescription;
    /**
     * Structured title, for algorithmically (AI)-generated titles.
     */
    structuredTitle?: Schema$ProductStructuredTitle;
    /**
     * Number of periods (months or years) and amount of payment per period for an item with an associated subscription contract.
     */
    subscriptionCost?: Schema$SubscriptionCost;
    /**
     * The tax category of the product, used to configure detailed tax nexus in account-level tax settings.
     */
    taxCategory?: string | null;
    /**
     * Tax information.
     */
    taxes?: Schema$Tax[];
    /**
     * Title of the item.
     */
    title?: string | null;
    /**
     * The transit time label of the product, used to group product in account-level transit time tables.
     */
    transitTimeLabel?: string | null;
    /**
     * The preference of the denominator of the unit price.
     */
    unitPricingBaseMeasure?: Schema$UnitPricingBaseMeasure;
    /**
     * The measure and dimension of an item.
     */
    unitPricingMeasure?: Schema$UnitPricingMeasure;
    /**
     * URL of the 3D image of the item. See the [Help Center article](https://support.google.com/merchants/answer/13674896) for more information.
     */
    virtualModelLink?: string | null;
  }
  /**
   * Product [certification](https://support.google.com/merchants/answer/13528839), initially introduced for EU energy efficiency labeling compliance using the EU EPREL database.
   */
  export interface Schema$Certification {
    /**
     * The certification authority, for example "European_Commission". Maximum length is 2000 characters.
     */
    certificationAuthority?: string | null;
    /**
     * The certification code. Maximum length is 2000 characters.
     */
    certificationCode?: string | null;
    /**
     * The name of the certification, for example "EPREL". Maximum length is 2000 characters.
     */
    certificationName?: string | null;
    /**
     * The certification value (also known as class, level or grade), for example "A+", "C", "gold". Maximum length is 2000 characters.
     */
    certificationValue?: string | null;
  }
  /**
   * Product property for the Cloud Retail API. For example, properties for a TV product could be "Screen-Resolution" or "Screen-Size".
   */
  export interface Schema$CloudExportAdditionalProperties {
    /**
     * Boolean value of the given property. For example for a TV product, "True" or "False" if the screen is UHD.
     */
    boolValue?: boolean | null;
    /**
     * Float values of the given property. For example for a TV product 1.2345. Maximum repeatedness of this value is 400. Values are stored in an arbitrary but consistent order.
     */
    floatValue?: number[] | null;
    /**
     * Integer values of the given property. For example, 1080 for a TV product's Screen Resolution. Maximum repeatedness of this value is 400. Values are stored in an arbitrary but consistent order.
     */
    intValue?: string[] | null;
    /**
     * Maximum float value of the given property. For example for a TV product 100.00.
     */
    maxValue?: number | null;
    /**
     * Minimum float value of the given property. For example for a TV product 1.00.
     */
    minValue?: number | null;
    /**
     * Name of the given property. For example, "Screen-Resolution" for a TV product. Maximum string size is 256 characters.
     */
    propertyName?: string | null;
    /**
     * Text value of the given property. For example, "8K(UHD)" could be a text value for a TV product. Maximum repeatedness of this value is 400. Values are stored in an arbitrary but consistent order. Maximum string size is 256 characters.
     */
    textValue?: string[] | null;
    /**
     * Unit of the given property. For example, "Pixels" for a TV product. Maximum string size is 256B.
     */
    unitCode?: string | null;
  }
  /**
   * A message that represents custom attributes. Exactly one of `value` or `group_values` must not be empty.
   */
  export interface Schema$CustomAttribute {
    /**
     * Subattributes within this attribute group. If `group_values` is not empty, `value` must be empty.
     */
    groupValues?: Schema$CustomAttribute[];
    /**
     * The name of the attribute.
     */
    name?: string | null;
    /**
     * The value of the attribute. If `value` is not empty, `group_values` must be empty.
     */
    value?: string | null;
  }
  /**
   * The destination status of the product status.
   */
  export interface Schema$DestinationStatus {
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the offer is approved.
     */
    approvedCountries?: string[] | null;
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved.
     */
    disapprovedCountries?: string[] | null;
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval.
     */
    pendingCountries?: string[] | null;
    /**
     * The name of the reporting context.
     */
    reportingContext?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Conditions to be met for a product to have free shipping.
   */
  export interface Schema$FreeShippingThreshold {
    /**
     * The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship.
     */
    country?: string | null;
    /**
     * The minimum product price for the shipping cost to become free. Represented as a number.
     */
    priceThreshold?: Schema$Price;
  }
  /**
   * A message that represents installment.
   */
  export interface Schema$Installment {
    /**
     * The amount the buyer has to pay per month.
     */
    amount?: Schema$Price;
    /**
     * Type of installment payments. Supported values are: * "`finance`" * "`lease`"
     */
    creditType?: string | null;
    /**
     * The up-front down payment amount the buyer has to pay.
     */
    downpayment?: Schema$Price;
    /**
     * The number of installments the buyer has to pay.
     */
    months?: string | null;
  }
  /**
   * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
   */
  export interface Schema$Interval {
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    endTime?: string | null;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    startTime?: string | null;
  }
  /**
   * The ItemLevelIssue of the product status.
   */
  export interface Schema$ItemLevelIssue {
    /**
     * List of country codes (ISO 3166-1 alpha-2) where issue applies to the offer.
     */
    applicableCountries?: string[] | null;
    /**
     * The attribute's name, if the issue is caused by a single attribute.
     */
    attribute?: string | null;
    /**
     * The error code of the issue.
     */
    code?: string | null;
    /**
     * A short issue description in English.
     */
    description?: string | null;
    /**
     * A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * The URL of a web page to help with resolving this issue.
     */
    documentation?: string | null;
    /**
     * The reporting context the issue applies to.
     */
    reportingContext?: string | null;
    /**
     * Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * How this issue affects serving of the offer.
     */
    severity?: string | null;
  }
  /**
   * Response message for the ListProducts method.
   */
  export interface Schema$ListProductsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The processed products from the specified account. These are your processed products after applying rules and supplemental data sources.
     */
    products?: Schema$Product[];
  }
  /**
   * A message that represents loyalty points.
   */
  export interface Schema$LoyaltyPoints {
    /**
     * Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters.
     */
    name?: string | null;
    /**
     * The retailer's loyalty points in absolute value.
     */
    pointsValue?: string | null;
    /**
     * The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0.
     */
    ratio?: number | null;
  }
  /**
   * A message that represents loyalty program.
   */
  export interface Schema$LoyaltyProgram {
    /**
     * The cashback that can be used for future purchases.
     */
    cashbackForFutureUse?: Schema$Price;
    /**
     * The amount of loyalty points earned on a purchase.
     */
    loyaltyPoints?: string | null;
    /**
     * A date range during which the item is eligible for member price. If not specified, the member price is always applicable. The date range is represented by a pair of ISO 8601 dates separated by a space, comma, or slash.
     */
    memberPriceEffectiveDate?: Schema$Interval;
    /**
     * The price for members of the given tier, that is, the instant discount price. Must be smaller or equal to the regular price.
     */
    price?: Schema$Price;
    /**
     * The label of the loyalty program. This is an internal label that uniquely identifies the relationship between a merchant entity and a loyalty program entity. The label must be provided so that the system can associate the assets below (for example, price and points) with a merchant. The corresponding program must be linked to the merchant account.
     */
    programLabel?: string | null;
    /**
     * The label of the tier within the loyalty program. Must match one of the labels within the program.
     */
    tierLabel?: string | null;
  }
  /**
   * The price represented as a number and currency.
   */
  export interface Schema$Price {
    /**
     * The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros).
     */
    amountMicros?: string | null;
    /**
     * The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217).
     */
    currencyCode?: string | null;
  }
  /**
   * The processed product, built from multiple product inputs after applying rules and supplemental data sources. This processed product matches what is shown in your Merchant Center account and in Shopping ads and other surfaces across Google. Each product is built from exactly one primary data source product input, and multiple supplemental data source inputs. After inserting, updating, or deleting a product input, it may take several minutes before the updated processed product can be retrieved. All fields in the processed product and its sub-messages match the name of their corresponding attribute in the [Product data specification](https://support.google.com/merchants/answer/7052112) with some exceptions.
   */
  export interface Schema$Product {
    /**
     * Output only. A list of product attributes.
     */
    attributes?: Schema$Attributes;
    /**
     * Output only. The [channel](https://support.google.com/merchants/answer/7361332) of the product.
     */
    channel?: string | null;
    /**
     * Output only. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the product.
     */
    contentLanguage?: string | null;
    /**
     * Output only. A list of custom (merchant-provided) attributes. It can also be used to submit any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" \}`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Output only. The primary data source of the product.
     */
    dataSource?: string | null;
    /**
     * Output only. The feed label for the product.
     */
    feedLabel?: string | null;
    /**
     * The name of the product. Format: `"{product.name=accounts/{account\}/products/{product\}\}"`
     */
    name?: string | null;
    /**
     * Output only. Your unique identifier for the product. This is the same for the product input and processed product. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. See the [product data specification](https://support.google.com/merchants/answer/188494#id) for details.
     */
    offerId?: string | null;
    /**
     * Output only. The status of a product, data validation issues, that is, information about a product computed asynchronously.
     */
    productStatus?: Schema$ProductStatus;
    /**
     * Output only. Represents the existing version (freshness) of the product, which can be used to preserve the right order when multiple updates are done at the same time. If set, the insertion is prevented when version number is lower than the current version number of the existing product. Re-insertion (for example, product refresh after 30 days) can be performed with the current `version_number`. Only supported for insertions into primary data sources. If the operation is prevented, the aborted exception will be thrown.
     */
    versionNumber?: string | null;
  }
  /**
   * The change that happened to the product including old value, new value, country code as the region code and reporting context.
   */
  export interface Schema$ProductChange {
    /**
     * The new value of the changed resource or attribute.
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute.
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable)
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable)
     */
    reportingContext?: string | null;
  }
  /**
   * The product details.
   */
  export interface Schema$ProductDetail {
    /**
     * The name of the product detail.
     */
    attributeName?: string | null;
    /**
     * The value of the product detail.
     */
    attributeValue?: string | null;
    /**
     * The section header used to group a set of product details.
     */
    sectionName?: string | null;
  }
  /**
   * The dimension of the product.
   */
  export interface Schema$ProductDimension {
    /**
     * Required. The dimension units. Acceptable values are: * "`in`" * "`cm`"
     */
    unit?: string | null;
    /**
     * Required. The dimension value represented as a number. The value can have a maximum precision of four decimal places.
     */
    value?: number | null;
  }
  /**
   * This resource represents input data you submit for a product, not the processed product that you see in Merchant Center, in Shopping ads, or across Google surfaces. Product inputs, rules and supplemental data source data are combined to create the processed product. Required product input attributes to pass data validation checks are primarily defined in the [Products Data Specification](https://support.google.com/merchants/answer/188494). The following attributes are required: feedLabel, contentLanguage and offerId. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved. All fields in the product input and its sub-messages match the English name of their corresponding attribute in the vertical spec with [some exceptions](https://support.google.com/merchants/answer/7052112).
   */
  export interface Schema$ProductInput {
    /**
     * Optional. A list of product attributes.
     */
    attributes?: Schema$Attributes;
    /**
     * Required. Immutable. The [channel](https://support.google.com/merchants/answer/7361332) of the product.
     */
    channel?: string | null;
    /**
     * Required. Immutable. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the product.
     */
    contentLanguage?: string | null;
    /**
     * Optional. A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" \}`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google. Maximum allowed number of characters for each custom attribute is 10240 (represents sum of characters for name and value). Maximum 2500 custom attributes can be set per product, with total size of 102.4kB. Underscores in custom attribute names are replaced by spaces upon insertion.
     */
    customAttributes?: Schema$CustomAttribute[];
    /**
     * Required. Immutable. The [feed label](https://developers.google.com/shopping-content/guides/products/feed-labels) for the product.
     */
    feedLabel?: string | null;
    /**
     * Identifier. The name of the product input. Format: `"{productinput.name=accounts/{account\}/productInputs/{productinput\}\}"`
     */
    name?: string | null;
    /**
     * Required. Immutable. Your unique identifier for the product. This is the same for the product input and processed product. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. See the [products data specification](https://support.google.com/merchants/answer/188494#id) for details.
     */
    offerId?: string | null;
    /**
     * Output only. The name of the processed product. Format: `"{product.name=accounts/{account\}/products/{product\}\}"`
     */
    product?: string | null;
    /**
     * Optional. Represents the existing version (freshness) of the product, which can be used to preserve the right order when multiple updates are done at the same time. If set, the insertion is prevented when version number is lower than the current version number of the existing product. Re-insertion (for example, product refresh after 30 days) can be performed with the current `version_number`. Only supported for insertions into primary data sources. If the operation is prevented, the aborted exception will be thrown.
     */
    versionNumber?: string | null;
  }
  /**
   * The status of a product, data validation issues, that is, information about a product computed asynchronously.
   */
  export interface Schema$ProductStatus {
    /**
     * Date on which the item has been created, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    creationDate?: string | null;
    /**
     * The intended destinations for the product.
     */
    destinationStatuses?: Schema$DestinationStatus[];
    /**
     * Date on which the item expires, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    googleExpirationDate?: string | null;
    /**
     * A list of all issues associated with the product.
     */
    itemLevelIssues?: Schema$ItemLevelIssue[];
    /**
     * Date on which the item has been last updated, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.
     */
    lastUpdateDate?: string | null;
  }
  /**
   * The message that the merchant will receive to notify about product status change event
   */
  export interface Schema$ProductStatusChangeMessage {
    /**
     * The target account that owns the entity that changed. Format : `accounts/{merchant_id\}`
     */
    account?: string | null;
    /**
     * The attribute in the resource that changed, in this case it will be always `Status`.
     */
    attribute?: string | null;
    /**
     * A message to describe the change that happened to the product
     */
    changes?: Schema$ProductChange[];
    /**
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `{product.name=accounts/{account\}/products/{product\}\}`
     */
    resource?: string | null;
    /**
     * The product id.
     */
    resourceId?: string | null;
    /**
     * The resource that changed, in this case it will always be `Product`.
     */
    resourceType?: string | null;
  }
  /**
   * Structured description, for algorithmically (AI)-generated descriptions.
   */
  export interface Schema$ProductStructuredDescription {
    /**
     * The description text Maximum length is 5000 characters
     */
    content?: string | null;
    /**
     * The digital source type, for example "trained_algorithmic_media". Following [IPTC](https://cv.iptc.org/newscodes/digitalsourcetype). Maximum length is 40 characters.
     */
    digitalSourceType?: string | null;
  }
  /**
   * Structured title, for algorithmically (AI)-generated titles.
   */
  export interface Schema$ProductStructuredTitle {
    /**
     * The title text Maximum length is 150 characters
     */
    content?: string | null;
    /**
     * The digital source type, for example "trained_algorithmic_media". Following [IPTC](https://cv.iptc.org/newscodes/digitalsourcetype). Maximum length is 40 characters.
     */
    digitalSourceType?: string | null;
  }
  /**
   * The weight of the product.
   */
  export interface Schema$ProductWeight {
    /**
     * Required. The weight unit. Acceptable values are: * "`g`" * "`kg`" * "`oz`" * "`lb`"
     */
    unit?: string | null;
    /**
     * Required. The weight represented as a number. The weight can have a maximum precision of four decimal places.
     */
    value?: number | null;
  }
  /**
   * The Shipping of the product.
   */
  export interface Schema$Shipping {
    /**
     * The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship.
     */
    country?: string | null;
    /**
     * The location where the shipping is applicable, represented by a location group name.
     */
    locationGroupName?: string | null;
    /**
     * The numeric ID of a location that the shipping rate applies to as defined in the [AdWords API](https://developers.google.com/adwords/api/docs/appendix/geotargeting).
     */
    locationId?: string | null;
    /**
     * Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it is received if it happens before the cut-off time. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. minHandlingTime is optional if maxHandlingTime is present.
     */
    maxHandlingTime?: string | null;
    /**
     * Maximum transit time (inclusive) between when the order has shipped and when it is delivered in business days. 0 means that the order is delivered on the same day as it ships. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. minTransitTime is optional if maxTransitTime is present.
     */
    maxTransitTime?: string | null;
    /**
     * Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it is received if it happens before the cut-off time. minHandlingTime can only be present together with maxHandlingTime; but it is not required if maxHandlingTime is present.
     */
    minHandlingTime?: string | null;
    /**
     * Minimum transit time (inclusive) between when the order has shipped and when it is delivered in business days. 0 means that the order is delivered on the same day as it ships. minTransitTime can only be present together with maxTransitTime; but it is not required if maxTransitTime is present.
     */
    minTransitTime?: string | null;
    /**
     * The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length.
     */
    postalCode?: string | null;
    /**
     * Fixed shipping price, represented as a number.
     */
    price?: Schema$Price;
    /**
     * The geographic region to which a shipping rate applies. See [region](https://support.google.com/merchants/answer/6324484) for more information.
     */
    region?: string | null;
    /**
     * A free-form description of the service class or delivery speed.
     */
    service?: string | null;
  }
  /**
   * The ShippingDimension of the product.
   */
  export interface Schema$ShippingDimension {
    /**
     * The unit of value.
     */
    unit?: string | null;
    /**
     * The dimension of the product used to calculate the shipping cost of the item.
     */
    value?: number | null;
  }
  /**
   * The ShippingWeight of the product.
   */
  export interface Schema$ShippingWeight {
    /**
     * The unit of value.
     */
    unit?: string | null;
    /**
     * The weight of the product used to calculate the shipping cost of the item.
     */
    value?: number | null;
  }
  /**
   * The SubscriptionCost of the product.
   */
  export interface Schema$SubscriptionCost {
    /**
     * The amount the buyer has to pay per subscription period.
     */
    amount?: Schema$Price;
    /**
     * The type of subscription period. Supported values are: * "`month`" * "`year`"
     */
    period?: string | null;
    /**
     * The number of subscription periods the buyer has to pay.
     */
    periodLength?: string | null;
  }
  /**
   * The Tax of the product.
   */
  export interface Schema$Tax {
    /**
     * The country within which the item is taxed, specified as a [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml).
     */
    country?: string | null;
    /**
     * The numeric ID of a location that the tax rate applies to as defined in the [AdWords API](https://developers.google.com/adwords/api/docs/appendix/geotargeting).
     */
    locationId?: string | null;
    /**
     * The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*.
     */
    postalCode?: string | null;
    /**
     * The percentage of tax rate that applies to the item price.
     */
    rate?: number | null;
    /**
     * The geographic region to which the tax rate applies.
     */
    region?: string | null;
    /**
     * Set to true if tax is charged on shipping.
     */
    taxShip?: boolean | null;
  }
  /**
   * The UnitPricingBaseMeasure of the product.
   */
  export interface Schema$UnitPricingBaseMeasure {
    /**
     * The unit of the denominator.
     */
    unit?: string | null;
    /**
     * The denominator of the unit price.
     */
    value?: string | null;
  }
  /**
   * The UnitPricingMeasure of the product.
   */
  export interface Schema$UnitPricingMeasure {
    /**
     * The unit of the measure.
     */
    unit?: string | null;
    /**
     * The measure of an item.
     */
    value?: number | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    productInputs: Resource$Accounts$Productinputs;
    products: Resource$Accounts$Products;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.productInputs = new Resource$Accounts$Productinputs(this.context);
      this.products = new Resource$Accounts$Products(this.context);
    }
  }

  export class Resource$Accounts$Productinputs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a product input from your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Productinputs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Productinputs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Accounts$Productinputs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Productinputs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Productinputs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Productinputs$Delete
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
        {}) as Params$Resource$Accounts$Productinputs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Productinputs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/products/v1beta/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Uploads a product input to your Merchant Center account. If an input with the same contentLanguage, offerId, and dataSource already exists, this method replaces that entry. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Accounts$Productinputs$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Accounts$Productinputs$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductInput>;
    insert(
      params: Params$Resource$Accounts$Productinputs$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Productinputs$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ProductInput>,
      callback: BodyResponseCallback<Schema$ProductInput>
    ): void;
    insert(
      params: Params$Resource$Accounts$Productinputs$Insert,
      callback: BodyResponseCallback<Schema$ProductInput>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ProductInput>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Productinputs$Insert
        | BodyResponseCallback<Schema$ProductInput>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProductInput>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProductInput>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ProductInput> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Productinputs$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Productinputs$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/products/v1beta/{+parent}/productInputs:insert'
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
        createAPIRequest<Schema$ProductInput>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProductInput>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Productinputs$Delete
    extends StandardParameters {
    /**
     * Required. The primary or supplemental data source from which the product input should be deleted. Format: `accounts/{account\}/dataSources/{datasource\}`.
     */
    dataSource?: string;
    /**
     * Required. The name of the product input resource to delete. Format: accounts/{account\}/productInputs/{product\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Productinputs$Insert
    extends StandardParameters {
    /**
     * Required. The primary or supplemental product data source name. If the product already exists and data source provided is different, then the product will be moved to a new data source. Format: `accounts/{account\}/dataSources/{datasource\}`.
     */
    dataSource?: string;
    /**
     * Required. The account where this product will be inserted. Format: accounts/{account\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProductInput;
  }

  export class Resource$Accounts$Products {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the processed product from your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the updated final product can be retrieved.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Products$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Products$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
    get(
      params: Params$Resource$Accounts$Products$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Products$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    get(
      params: Params$Resource$Accounts$Products$Get,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    get(callback: BodyResponseCallback<Schema$Product>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$Get
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Product>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Product> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Products$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/products/v1beta/{+name}').replace(
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
        createAPIRequest<Schema$Product>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }

    /**
     * Lists the processed products in your Merchant Center account. The response might contain fewer items than specified by pageSize. Rely on pageToken to determine if there are more items to be requested. After inserting, updating, or deleting a product input, it may take several minutes before the updated processed product can be retrieved.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Products$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Products$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListProductsResponse>;
    list(
      params: Params$Resource$Accounts$Products$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Products$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProductsResponse>,
      callback: BodyResponseCallback<Schema$ListProductsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Products$List,
      callback: BodyResponseCallback<Schema$ListProductsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListProductsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Products$List
        | BodyResponseCallback<Schema$ListProductsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListProductsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListProductsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListProductsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Products$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Products$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/products/v1beta/{+parent}/products').replace(
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
        createAPIRequest<Schema$ListProductsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListProductsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Products$Get
    extends StandardParameters {
    /**
     * Required. The name of the product to retrieve. Format: `accounts/{account\}/products/{product\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Products$List
    extends StandardParameters {
    /**
     * The maximum number of products to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the maximum number of products will be returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account to list processed products for. Format: accounts/{account\}
     */
    parent?: string;
  }
}
