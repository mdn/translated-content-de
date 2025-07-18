---
title: devtools.network.getHAR()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Holt ein [HAR-Protokoll](http://www.softwareishard.com/blog/har-12-spec/#log) für die im aktuellen Tab geladene Seite.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.devtools.network.getHAR()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das das HAR-Protokoll für den aktuellen Tab enthält. Einzelheiten darüber, was das Protokollobjekt enthält, finden Sie in der [HAR-Spezifikation](http://www.softwareishard.com/blog/har-12-spec/#log).

## Beispiele

Protokollieren Sie die URLs von Anfragen, die im HAR-Protokoll enthalten sind:

```js
async function logRequests() {
  let harLog = await browser.devtools.network.getHAR();
  console.log(`HAR version: ${harLog.version}`);
  for (const entry of harLog.entries) {
    console.log(entry.request.url);
  }
}

logRequestsButton.addEventListener("click", logRequests);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.network`](https://developer.chrome.com/docs/extensions/reference/api/devtools/network) API von Chromium.
