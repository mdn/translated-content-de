---
title: webRequest.getSecurityInfo()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo
l10n:
  sourceCommit: 8de26f8083cd83e41328147240d94b4da902e987
---

{{AddonSidebar}}

Verwenden Sie diese Funktion, um detaillierte Informationen über die {{Glossary("TLS", "TLS")}}-Verbindung abzurufen, die mit einer bestimmten Anfrage verbunden ist.

Sie übergeben dieser Funktion die `requestId` für die betreffende Anfrage und einige optionale zusätzliche Parameter. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das auf ein {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

Sie können diese Funktion nur innerhalb des {{WebExtAPIRef("webRequest.onHeadersReceived")}}-Listeners aufrufen. Die `requestId` kann im `details`-Objekt gefunden werden, das an den Listener übergeben wird.

Sie müssen auch die Option "blocking" an `webRequest.onHeadersReceived.addListener()` übergeben. Um diese API zu nutzen, müssen Sie die Berechtigung "webRequestBlocking" haben, sowie die normalen Berechtigungen, die für die Verwendung von `webRequest`-Listenern erforderlich sind (die Berechtigung "webRequest" und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Host).

## Syntax

```js-nolint
let gettingInfo = browser.webRequest.getSecurityInfo(
  requestId,       // string
  options          // optional object
)
```

### Parameter

- `requestId`
  - : `string`. ID der Anfrage, für die Sie Sicherheitsinformationen erhalten möchten. Diese können Sie aus dem `details`-Objekt erhalten, das an jeden `webRequest`-Ereignis-Listener übergeben wird.
- `options` {{optional_inline}}

  - : `object`. Ein Objekt, das folgende Eigenschaften enthalten kann:

    - `certificateChain` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das zurückgegebene {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt die gesamte Zertifikatskette bis einschließlich der Vertrauenswurzel enthalten. Wenn `false`, wird es nur das Serverzertifikat enthalten. Standard ist `false`.
    - `rawDER` {{optional_inline}}
      - : `boolean`. Wenn true, wird in jedem {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}} in der {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo.certificates")}}-Eigenschaft eine Eigenschaft `rawDER` enthalten sein. Diese enthält das DER-codierte ASN.1, das die Zertifikatsdaten umfasst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das auf ein {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt aufgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel hört auf alle HTTPS-Anfragen an "mozilla.org" oder dessen Subdomains und protokolliert den Subjektnamen im Serverzertifikat:

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

Dieses Beispiel hört auf alle HTTPS-Anfragen an "mozilla.org" oder dessen Subdomains und protokolliert den Namen im vertrauenswürdigen Wurzelzertifikat:

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
