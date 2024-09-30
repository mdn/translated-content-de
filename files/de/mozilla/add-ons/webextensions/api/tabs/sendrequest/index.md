---
title: tabs.sendRequest()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/sendRequest
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!WARNING]
> Diese Methode ist veraltet. Verwenden Sie stattdessen {{WebExtAPIRef("tabs.sendMessage()")}}.

Sendet eine einzelne Anfrage an das/die Inhaltsskript(e) im angegebenen Tab, mit einem optionalen Callback, das ausgeführt wird, wenn eine Antwort zurückgesendet wird. Das Ereignis {{WebExtAPIRef('extension.onRequest')}} wird in jedem Inhaltsskript, das im angegebenen Tab für die aktuelle Erweiterung läuft, ausgelöst.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit dem JSON-Antwortobjekt erfüllt wird, das vom Handler der Nachricht im Inhaltsskript gesendet wird, oder ohne Argumente, falls das Inhaltsskript keine Antwort gesendet hat. Wenn ein Fehler beim Verbinden mit dem angegebenen Tab oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-sendRequest) API. Diese Dokumentation leitet sich von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code ab.
