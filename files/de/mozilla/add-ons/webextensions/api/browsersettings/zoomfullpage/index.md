---
title: browserSettings.zoomFullPage
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomFullPage
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolescher Ausdruck ist.

Standardmäßig gilt der Zoom für den gesamten Inhalt einer Webseite. Mit der [nur Text zoomen Einstellung](https://support.mozilla.org/en-US/kb/font-size-and-zoom-increase-size-of-web-pages#w_how-to-only-change-the-size-of-the-text/de/docs/) können Benutzer wählen, nur den Text auf einer Seite zu vergrößern. Diese Einstellung ermöglicht es Web-Erweiterungen, diese Option zu steuern und zu bestimmen, ob der Zoom auf die gesamte Seite oder nur auf den Text angewendet wird.

Die Einstellungen sind:

- `true`: Der Zoom gilt für den gesamten Inhalt einer Webseite (Standard).
- `false`: Der Zoom gilt nur für den Text einer Webseite.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Die Einstellung auf `false` setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.zoomFullPage.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
