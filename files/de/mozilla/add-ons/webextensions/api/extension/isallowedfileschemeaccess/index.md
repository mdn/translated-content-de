---
title: extension.isAllowedFileSchemeAccess()
slug: Mozilla/Add-ons/WebExtensions/API/extension/isAllowedFileSchemeAccess
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Gibt `true` zurück, wenn die Erweiterung auf das "file://"-Schema zugreifen kann, andernfalls `false`.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let isAllowed = browser.extension.isAllowedFileSchemeAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem booleanischen Wert erfüllt wird: `true`, wenn der Erweiterung der Zugriff auf "file://"-URLs erlaubt ist, andernfalls `false`.

Firefox gibt immer `false` zurück.

## Beispiele

```js
function logIsAllowed(answer) {
  console.log(`Is allowed: ${answer}`);
}

let isAllowed = browser.extension.isAllowedFileSchemeAccess();
isAllowed.then(logIsAllowed);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-isAllowedFileSchemeAccess)-API von Chromium. Diese Dokumentation ist abgeleitet von [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.
