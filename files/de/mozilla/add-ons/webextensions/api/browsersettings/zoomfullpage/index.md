---
title: browserSettings.zoomFullPage
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomFullPage
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist.

Standardmäßig wird der Zoom auf den gesamten Inhalt einer Webseite angewendet. Durch die Verwendung der [Einstellung Nur Text zoomen](https://support.mozilla.org/en-US/kb/font-size-and-zoom-increase-size-of-web-pages#w_how-to-only-change-the-size-of-the-text/de/docs/) können Benutzer wählen, nur den Text auf einer Seite zu vergrößern. Diese Einstellungen ermöglichen es Web-Erweiterungen, diese Einstellung zu steuern und festzulegen, ob der Zoom auf die gesamte Seite oder nur auf den Text angewendet wird.

Die Einstellungen sind:

- `true`: Der Zoom wird auf den gesamten Inhalt einer Webseite angewendet (Standard).
- `false`: Der Zoom wird nur auf den Text der Webseite angewendet.

## Beispiele

Die Einstellung auf `false` setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.zoomFullPage.set({ value: false }).then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
