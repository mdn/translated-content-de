---
title: tabs.getAllInWindow()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/getAllInWindow
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Diese Methode wurde als veraltet erklärt. Verwenden Sie stattdessen {{WebExtAPIRef("tabs.query", "tabs.query({currentWindow: true})")}}.

Erhält Details über alle Tabs im angegebenen Fenster.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.tabs.getAllInWindow(
  windowId            // optional integer
)
```

### Parameter

- `windowId` {{optional_inline}}
  - : `integer`. Standardmäßig das aktuelle Fenster.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` von {{WebExtAPIRef('tabs.Tab')}} Objekten erfüllt wird, die Informationen über alle Tabs im Fenster enthalten. Wenn das Fenster nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-getAllInWindow) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
