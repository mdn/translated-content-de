---
title: webRequest.getSecurityInfo()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo
l10n:
  sourceCommit: 8de26f8083cd83e41328147240d94b4da902e987
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um detaillierte Informationen über die [TLS](/de/docs/Glossary/TLS)-Verbindung zu erhalten, die mit einer bestimmten Anfrage verbunden ist.

Sie übergeben dieser Funktion die `requestId` der betreffenden Anfrage sowie einige optionale zusätzliche Parameter. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das auf ein {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

Sie können diese Funktion nur innerhalb des {{WebExtAPIRef("webRequest.onHeadersReceived")}}-Listeners aufrufen. Die `requestId` kann im `details`-Objekt gefunden werden, das in den Listener übergeben wird.

Sie müssen auch die Option "blocking" an `webRequest.onHeadersReceived.addListener()` übergeben. Um diese API zu verwenden, benötigen Sie die "webRequestBlocking"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) sowie die normalen Berechtigungen, die für die Verwendung von `webRequest`-Listenern erforderlich sind (die "webRequest"-Berechtigung und die [Hostberechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Host).

## Syntax

```js-nolint
let gettingInfo = browser.webRequest.getSecurityInfo(
  requestId,       // string
  options          // optional object
)
```

### Parameter

- `requestId`
  - : `string`. ID der Anfrage, für die Sie Sicherheitsinformationen wünschen. Sie können diese aus dem `details`-Objekt erhalten, das an alle `webRequest`-Ereignis-Listener übergeben wird.
- `options` {{optional_inline}}

  - : `object`. Ein Objekt, das eine der folgenden Eigenschaften enthalten kann:

    - `certificateChain` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das zurückgegebene {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt die gesamte Zertifikatskette bis hin zur Vertrauenswurzel enthalten. Wenn `false`, wird nur das Serverzertifikat enthalten sein. Standard ist `false`.
    - `rawDER` {{optional_inline}}
      - : `boolean`. Wenn true, wird jedes {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}} im {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo.certificates")}}-Eigenschaft eine Eigenschaft `rawDER` enthalten. Diese enthält das DER-kodierte ASN.1, das die Zertifikatsdaten umfasst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das auf ein {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel lauscht auf alle HTTPS-Anfragen an "mozilla.org" oder seine Subdomains und protokolliert den Subjektnamen im Serverzertifikat:

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

Dieses Beispiel lauscht auf alle HTTPS-Anfragen an "mozilla.org" oder seine Subdomains und protokolliert den Namen im Vertrauenswurzel-Zertifikat:

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
