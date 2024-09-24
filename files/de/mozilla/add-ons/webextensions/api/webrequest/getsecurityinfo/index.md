---
title: webRequest.getSecurityInfo()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo
l10n:
  sourceCommit: 8de26f8083cd83e41328147240d94b4da902e987
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um detaillierte Informationen über die [TLS](/de/docs/Glossary/TLS)-Verbindung zu erhalten, die mit einer bestimmten Anfrage verbunden ist.

Sie übergeben dieser Funktion die `requestId` der betreffenden Anfrage und einige optionale zusätzliche Parameter. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

Sie können diese Funktion nur innerhalb des {{WebExtAPIRef("webRequest.onHeadersReceived")}}-Listeners aufrufen. Die `requestId` kann im `details`-Objekt gefunden werden, das an den Listener übergeben wird.

Sie müssen auch die Option "blocking" an `webRequest.onHeadersReceived.addListener()` übergeben. Um diese API nutzen zu können, müssen Sie die API-Berechtigung "webRequestBlocking" sowie die normalen Berechtigungen für die Verwendung von `webRequest`-Listenern besitzen (die "webRequest"-Berechtigung und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Host).

## Syntax

```js-nolint
let gettingInfo = browser.webRequest.getSecurityInfo(
  requestId,       // string
  options          // optional object
)
```

### Parameter

- `requestId`
  - : `string`. ID der Anfrage, für die Sie Sicherheitsinformationen erhalten möchten. Sie können diese aus dem `details`-Objekt erhalten, das an jeden `webRequest`-Ereignislistener übergeben wird.
- `options` {{optional_inline}}

  - : `object`. Ein Objekt, das eine beliebige dieser Eigenschaften enthalten kann:

    - `certificateChain` {{optional_inline}}
      - : `boolean`. Wenn `true`, enthält das zurückgegebene {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt die gesamte Zertifikatkette bis zum Vertrauensanker. Wenn `false`, enthält es nur das Serverzertifikat. Standardmäßig ist `false`.
    - `rawDER` {{optional_inline}}
      - : `boolean`. Wenn `true`, enthält jeder {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}} in der {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo.certificates")}}-Eigenschaft eine Eigenschaft `rawDER`. Diese enthält das DER-codierte ASN.1, das die Zertifikatsdaten umfasst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das zu einem {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel hört auf alle HTTPS-Anfragen an "mozilla.org" oder deren Subdomains und protokolliert den Betreibernamen im Serverzertifikat:

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

Dieses Beispiel hört auf alle HTTPS-Anfragen an "mozilla.org" oder deren Subdomains und protokolliert den Namen im vertrauenswürdigen Stammzertifikat:

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
