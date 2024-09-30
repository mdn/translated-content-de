---
title: browserSettings.overrideContentColorScheme
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideContentColorScheme
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein String ist.

Firefox ermöglicht es den Benutzern, ein Thema für die Benutzeroberfläche des Browsers auszuwählen. Diese Themen wenden entweder ein helles oder dunkles Thema auf Webseiten an. Mit der Einstellung `layout.css.prefers-color-scheme.content-override` können Benutzer das Thema überschreiben und wählen, Webseiten in einem hellen oder dunklen Thema anzuzeigen oder dem Thema des Geräts zu folgen. Diese Browser-Einstellung gibt diese Präferenz frei.

Dieses Objekt nimmt folgende Werte an:

- "light": Wendet ein helles Thema auf Webseiten an.
- "dark": Wendet ein dunkles Thema auf Webseiten an.
- "system": Wendet je nach Thema des Geräts ein helles oder dunkles Thema auf Webseiten an.
- "browser": Wendet ein helles oder dunkles Thema auf Webseiten an, basierend auf dem Thema des Browsers.

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
