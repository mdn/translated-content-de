---
title: browserSettings.zoomFullPage
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomFullPage
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist.

Standardmäßig wird der Zoom auf alle Inhalte einer Webseite angewendet. Mit der Einstellung [Nur Text zoomen](https://support.mozilla.org/en-US/kb/font-size-and-zoom-increase-size-of-web-pages#w_how-to-only-change-the-size-of-the-text/de/docs/) können Benutzer wählen, nur den Text auf einer Seite zu zoomen. Diese Einstellungen ermöglichen es Web-Erweiterungen, diese Einstellung zu steuern und festzulegen, ob der Zoom auf die gesamte Seite oder nur auf den Text angewendet wird.

Die Einstellungen sind:

- `true`: Der Zoom wird auf alle Inhalte einer Webseite angewendet (Standard).
- `false`: Der Zoom wird nur auf den Text der Webseite angewendet.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen Sie die Einstellung auf `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.zoomFullPage.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
