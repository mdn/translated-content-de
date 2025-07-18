---
title: tabs.sendRequest()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/sendRequest
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Diese Methode wurde veraltet. Verwenden Sie stattdessen {{WebExtAPIRef("tabs.sendMessage()")}}.

Sendet eine einzelne Anforderung an das/die Inhaltsskript(e) im angegebenen Tab, mit einem optionalen Rückruf, der ausgeführt wird, wenn eine Antwort zurückgesendet wird. Das Ereignis {{WebExtAPIRef('extension.onRequest')}} wird in jedem Inhaltsskript ausgelöst, das im angegebenen Tab für die aktuelle Erweiterung ausgeführt wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let sending = browser.tabs.sendRequest(
  tabId,                   // integer
  request                  // any
)
```

### Parameter

- `tabId`
  - : `integer`.
- `request`
  - : `any`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit dem JSON-Antwortobjekt erfüllt wird, das vom Handler der Nachricht im Inhaltsskript gesendet wird, oder ohne Argumente, wenn das Inhaltsskript keine Antwort gesendet hat. Wenn ein Fehler beim Verbinden mit dem angegebenen Tab oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-sendRequest) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
