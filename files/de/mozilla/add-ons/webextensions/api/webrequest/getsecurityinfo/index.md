---
title: webRequest.getSecurityInfo()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um detaillierte Informationen über die {{Glossary("TLS", "TLS")}}-Verbindung, die mit einer bestimmten Anfrage verbunden ist, zu erhalten.

Sie übergeben dieser Funktion die `requestId` für die betreffende Anfrage sowie einige optionale zusätzliche Parameter. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

Sie können diese Funktion nur innerhalb des {{WebExtAPIRef("webRequest.onHeadersReceived")}}-Listeners aufrufen. Die `requestId` kann im `details`-Objekt gefunden werden, das an den Listener übergeben wird.

Sie müssen auch die Option "blocking" an `webRequest.onHeadersReceived.addListener()` übergeben. Um diese API nutzen zu können, müssen Sie die "webRequestBlocking" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) besitzen sowie die normalen Berechtigungen, die für die Nutzung von `webRequest`-Listenern benötigt werden (die "webRequest"-Berechtigung und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Host).

## Syntax

```js-nolint
let gettingInfo = browser.webRequest.getSecurityInfo(
  requestId,       // string
  options          // optional object
)
```

### Parameter

- `requestId`
  - : `string`. ID der Anfrage, für die Sie Sicherheitsinformationen wünschen. Sie können diese aus dem `details`-Objekt erhalten, das an alle `webRequest`-Event-Listener übergeben wird.
- `options` {{optional_inline}}
  - : `object`. Ein Objekt, das eine dieser Eigenschaften enthalten kann:
    - `certificateChain` {{optional_inline}}
      - : `boolean`. Wenn `true`, enthält das zurückgegebene {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt die gesamte Zertifikatskette bis hin zum Vertrauensanker. Wenn `false`, wird nur das Serverzertifikat enthalten. Standardmäßig `false`.
    - `rawDER` {{optional_inline}}
      - : `boolean`. Wenn wahr, enthält jedes {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}} im {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo.certificates")}}-Eigenschaft eine Eigenschaft `rawDER`. Dies enthält den DER-kodierten ASN.1, der die Zertifikatsdaten umfasst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das zu einem {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

## Beispiele

Dieses Beispiel lauscht auf alle HTTPS-Anfragen an "mozilla.org" oder seine Subdomains und protokolliert den Namen des Subjekts im Serverzertifikat:

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

Dieses Beispiel lauscht auf alle HTTPS-Anfragen an "mozilla.org" oder seine Subdomains und protokolliert den Namen im vertrauenswürdigen Root-Zertifikat:

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
