---
title: runtime.reload()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/reload
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Lädt die Erweiterung neu.

Wenn es ausstehende Updates für die Erweiterung gibt, die durch das Abhören von {{WebExtAPIRef("runtime.onUpdateAvailable")}} zurückgestellt wurden, dann werden diese beim Neuladen angewendet.

## Syntax

```js-nolint
browser.runtime.reload()
```

### Parameter

Keine.

## Beispiele

Laden Sie die Erweiterung neu, wenn der Benutzer auf das Symbol einer Browseraktion klickt:

```js
browser.browserAction.onClicked.addListener((tab) => {
  browser.runtime.reload();
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-reload) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
