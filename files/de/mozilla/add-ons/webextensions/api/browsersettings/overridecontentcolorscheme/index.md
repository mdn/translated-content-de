---
title: browserSettings.overrideContentColorScheme
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideContentColorScheme
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein String ist.

Firefox ermöglicht es Benutzern, ein Thema für die Benutzeroberfläche des Browsers auszuwählen. Diese Themen verwenden entweder ein helles oder dunkles Thema für Webseiten. Mit der Einstellung `layout.css.prefers-color-scheme.content-override` können Benutzer das Thema überschreiben und wählen, ob Webseiten in einem hellen oder dunklen Thema gerendert werden sollen. Diese Browsereinstellung stellt diese Präferenz dar.

Dieses Objekt nimmt folgende Werte an:

- "light": Wendet ein helles Thema auf Webseiten an.
- "dark": Wendet ein dunkles Thema auf Webseiten an.
- "auto": Wendet basierend auf dem Browser-Thema automatisch ein helles oder dunkles Thema auf Webseiten an.

## Beispiele

Dieses Beispiel überschreibt die Einstellung, um das dunkle Thema für Webseiten zu verwenden:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.overrideContentColorScheme
  .set({ value: "dark" })
  .then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
