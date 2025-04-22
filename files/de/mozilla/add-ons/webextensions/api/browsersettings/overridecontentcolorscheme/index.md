---
title: browserSettings.overrideContentColorScheme
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideContentColorScheme
l10n:
  sourceCommit: 6dfd5134fc082458b0c98848aa61aeff51c4333b
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein String ist.

Firefox ermöglicht es den Nutzern, ein Thema für die Benutzeroberfläche des Browsers auszuwählen. Diese Themen wenden entweder ein helles oder dunkles Thema auf Webseiten an. Mit der Einstellung `layout.css.prefers-color-scheme.content-override` können Nutzer das Thema überschreiben und wählen, ob Webseiten in einem hellen oder dunklen Thema gerendert werden. Diese Browsereinstellung gibt diese Präferenz preis.

Dieses Objekt nimmt folgende Werte an:

- "light": Wendet ein helles Thema auf Webseiten an.
- "dark": Wendet ein dunkles Thema auf Webseiten an.
- "auto": Wendet automatisch ein helles oder dunkles Thema auf Webseiten an, basierend auf dem Thema des Browsers.

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
