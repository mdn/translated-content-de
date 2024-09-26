---
title: extension.isAllowedFileSchemeAccess()
slug: Mozilla/Add-ons/WebExtensions/API/extension/isAllowedFileSchemeAccess
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Gibt `true` zurück, wenn die Erweiterung auf das "file://" Schema zugreifen kann, andernfalls `false`.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let isAllowed = browser.extension.isAllowedFileSchemeAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Boolean erfüllt wird: `true`, wenn der Erweiterung der Zugriff auf "file://" URLs gestattet ist, andernfalls `false`.

Firefox wird immer `false` zurückgeben.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function logIsAllowed(answer) {
  console.log(`Is allowed: ${answer}`);
}

let isAllowed = browser.extension.isAllowedFileSchemeAccess();
isAllowed.then(logIsAllowed);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-isAllowedFileSchemeAccess) API. Diese Dokumentation ist abgeleitet von [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.