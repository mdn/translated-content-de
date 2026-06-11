---
title: extension.isAllowedFileSchemeAccess()
slug: Mozilla/Add-ons/WebExtensions/API/extension/isAllowedFileSchemeAccess
l10n:
  sourceCommit: c4bcbe7056da00277112f21b94966e0443c39805
---

Gibt `true` zurück, wenn die Erweiterung auf das "file://"-Schema zugreifen kann, andernfalls `false`.

## Syntax

```js-nolint
let isAllowed = browser.extension.isAllowedFileSchemeAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein mit einem booleschen Wert erfülltes [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise): `true`, wenn die Erweiterung Zugriff auf "file://"-URLs hat, andernfalls `false`.

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
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-isAllowedFileSchemeAccess) API von Chromium. Diese Dokumentation basiert auf [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.
