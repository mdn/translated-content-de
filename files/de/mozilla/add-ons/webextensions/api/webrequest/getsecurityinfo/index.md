---
title: webRequest.getSecurityInfo()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie diese Funktion, um detaillierte Informationen über die {{Glossary("TLS", "TLS")}}-Verbindung zu erhalten, die mit einer bestimmten Anfrage verbunden ist.

Sie übergeben dieser Funktion die `requestId` für die betreffende Anfrage und einige optionale zusätzliche Parameter. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

Sie können diese Funktion nur innerhalb des {{WebExtAPIRef("webRequest.onHeadersReceived")}}-Listeners aufrufen. Die `requestId` finden Sie im `details`-Objekt, das an den Listener übergeben wird.

Sie müssen auch die Option "blocking" an `webRequest.onHeadersReceived.addListener()` übergeben. Um diese API zu verwenden, benötigen Sie daher die "webRequestBlocking"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) sowie die normalen Berechtigungen, die für die Verwendung von `webRequest`-Listenern erforderlich sind (die "webRequest"-Berechtigung und die [host permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Host).

## Syntax

```js-nolint
let gettingInfo = browser.webRequest.getSecurityInfo(
  requestId,       // string
  options          // optional object
)
```

### Parameter

- `requestId`
  - : `string`. ID der Anfrage, für die Sie Sicherheitsinformationen erhalten möchten. Diese können Sie aus dem `details`-Objekt erhalten, das an alle `webRequest`-Event-Listener übergeben wird.
- `options` {{optional_inline}}
  - : `object`. Ein Objekt, das eine beliebige dieser Eigenschaften enthalten kann:
    - `certificateChain` {{optional_inline}}
      - : `boolean`. Wenn `true`, enthält das zurückgegebene {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt die gesamte Zertifikatskette bis hin zur Vertrauenswurzel. Wenn `false`, enthält es nur das Serverzertifikat. Standardwert ist `false`.
    - `rawDER` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird jedes {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}} in der Eigenschaft {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo.certificates")}} eine Eigenschaft `rawDER` enthalten. Diese enthält das DER-kodierte ASN.1, das die Zertifikatsdaten umfasst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das zu einem {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

## Beispiele

Dieses Beispiel lauscht auf alle HTTPS-Anfragen an "mozilla.org" oder dessen Subdomains und protokolliert den Namen des Subjekts im Serverzertifikat:

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

Dieses Beispiel lauscht auf alle HTTPS-Anfragen an "mozilla.org" oder dessen Subdomains und protokolliert den Namen im vertrauenswürdigen Root-Zertifikat:

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

## Browser-Kompatibilität

{{Compat}}
