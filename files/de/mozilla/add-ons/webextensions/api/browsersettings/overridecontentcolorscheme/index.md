---
title: browserSettings.overrideContentColorScheme
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideContentColorScheme
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrundeliegender Wert ein String ist.

Firefox ermöglicht es Benutzern, ein Thema für die Browser-Oberfläche auszuwählen. Diese Themen wenden entweder ein helles oder dunkles Thema auf Webseiten an. Mit der Präferenz `layout.css.prefers-color-scheme.content-override` können Nutzer das Thema überschreiben und wählen, ob Webseiten in einem hellen oder dunklen Thema gerendert werden sollen oder ob sie dem Thema des Geräts folgen. Diese Browsereinstellung macht diese Präferenz zugänglich.

Dieses Objekt nimmt folgende Werte an:

- "light": Wendet ein helles Thema auf Webseiten an.
- "dark": Wendet ein dunkles Thema auf Webseiten an.
- "system": Wendet je nach Gerätethema ein helles oder dunkles Thema auf Webseiten an.
- "browser": Wendet je nach Browser-Thema ein helles oder dunkles Thema auf Webseiten an.

## Browser-Kompatibilität

{{Compat}}

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
