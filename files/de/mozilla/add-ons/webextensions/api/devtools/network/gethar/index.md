---
title: devtools.network.getHAR()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Holen Sie sich ein [HAR-Protokoll](http://www.softwareishard.com/blog/har-12-spec/#log) für die Seite, die im aktuellen Tab geladen ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.devtools.network.getHAR()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das das HAR-Protokoll für den aktuellen Tab enthält. Für Details, was das Protokollobjekt enthält, beziehen Sie sich auf die [HAR-Spezifikation](http://www.softwareishard.com/blog/har-12-spec/#log).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die URLs der Anfragen, die im HAR-Protokoll enthalten sind:

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

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.devtools.network`](https://developer.chrome.com/docs/extensions/reference/api/devtools/network) API.
