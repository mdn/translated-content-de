---
title: browserSettings.overrideContentColorScheme
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideContentColorScheme
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein String ist.

Firefox ermöglicht es den Benutzern, ein Thema für die Browser-Benutzeroberfläche auszuwählen. Diese Themen wenden entweder ein helles oder dunkles Thema auf Webseiten an. Mit der Einstellung `layout.css.prefers-color-scheme.content-override` können Benutzer das Thema überschreiben und wählen, Webseiten in einem hellen oder dunklen Thema darzustellen. Diese Browsereinstellung stellt diese Präferenz zur Verfügung.

Dieses Objekt nimmt folgende Werte an:

- "light": Wendet ein helles Thema auf Webseiten an.
- "dark": Wendet ein dunkles Thema auf Webseiten an.
- "auto": Wendet automatisch ein helles oder dunkles Thema auf Webseiten basierend auf dem Browser-Thema an.

## Beispiele

Dieses Beispiel setzt die Einstellung auf das dunkle Thema für Webseiten:

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
