---
title: webRequest.getSecurityInfo()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um detaillierte Informationen über die {{Glossary("TLS", "TLS")}}-Verbindung zu erhalten, die mit einer bestimmten Anfrage verknüpft ist.

Sie übergeben dieser Funktion die `requestId` für die betreffende Anfrage sowie einige optionale zusätzliche Parameter. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das in ein {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

Sie können diese Funktion nur innerhalb des {{WebExtAPIRef("webRequest.onHeadersReceived")}}-Listeners aufrufen. Die `requestId` finden Sie im `details`-Objekt, das dem Listener übergeben wird.

Sie müssen außerdem die Option "blocking" an `webRequest.onHeadersReceived.addListener()` übergeben. Um diese API zu verwenden, benötigen Sie die "webRequestBlocking"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) sowie die normalen Berechtigungen zur Verwendung von `webRequest`-Listenern (die "webRequest"-Berechtigung und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Host).

## Syntax

```js-nolint
let gettingInfo = browser.webRequest.getSecurityInfo(
  requestId,       // string
  options          // optional object
)
```

### Parameter

- `requestId`
  - : `string`. ID der Anfrage, für die Sie Sicherheitsinformationen wünschen. Diese erhalten Sie aus dem `details`-Objekt, das jedem `webRequest`-Ereignislistener übergeben wird.
- `options` {{optional_inline}}
  - : `object`. Ein Objekt, das eine dieser Eigenschaften enthalten kann:
    - `certificateChain` {{optional_inline}}
      - : `boolean`. Wenn `true`, enthält das zurückgegebene {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt die gesamte Zertifikatskette bis hin zur Vertrauenswurzel. Wenn `false`, enthält es nur das Serverzertifikat. Standardmäßig ist `false`.
    - `rawDER` {{optional_inline}}
      - : `boolean`. Wenn `true`, enthält jedes {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}} im {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo.certificates")}}-Eigenschaft einen `rawDER`. Dieses enthält das DER-kodierte ASN.1, das die Zertifikatdaten umfasst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das in ein {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel hört auf alle HTTPS-Anfragen an "mozilla.org" oder dessen Subdomains und protokolliert den Namen des Subjektzertifikats:

```js
async function logSubject(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(
      details.requestId,
      {},
    );
    console.log(details.url);
    if (securityInfo.state === "secure" || securityInfo.state === "weak") {
      console.log(securityInfo.certificates[0].subject);
    }
  } catch (error) {
    console.error(error);
  }
}

browser.webRequest.onHeadersReceived.addListener(
  logSubject,
  { urls: ["https://*.mozilla.org/*"] },
  ["blocking"],
);
```

Dieses Beispiel hört auf alle HTTPS-Anfragen an "mozilla.org" oder dessen Subdomains und protokolliert den Namen im zertifizierten Root-Zertifikat:

```js
async function logRoot(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(
      details.requestId,
      { certificateChain: true },
    );
    console.log(details.url);
    if (securityInfo.state === "secure" || securityInfo.state === "weak") {
      console.log(
        securityInfo.certificates[securityInfo.certificates.length - 1].issuer,
      );
    }
  } catch (error) {
    console.error(error);
  }
}

browser.webRequest.onHeadersReceived.addListener(
  logRoot,
  { urls: ["https://*.mozilla.org/*"] },
  ["blocking"],
);
```

{{WebExtExamples}}
