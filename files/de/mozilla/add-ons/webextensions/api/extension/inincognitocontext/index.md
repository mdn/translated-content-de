---
title: extension.inIncognitoContext
slug: Mozilla/Add-ons/WebExtensions/API/extension/inIncognitoContext
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein boolescher Wert, `true` für Inhalts-Skripte, die in Tabs des privaten Modus ausgeführt werden, und für Erweiterungsseiten, die in einem Prozess des privaten Modus ausgeführt werden.

## Syntax

```js-nolint
let isPrivate = browser.extension.inIncognitoContext;  // true or false
```

### Wert

Ein _boolescher_ Wert, der angibt, ob das aktuelle Skript in einem privaten Tab oder Prozess läuft.

## Kompatibilität der Browser

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#property-inIncognitoContext) API von Chromium. Diese Dokumentation ist abgeleitet von [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.
