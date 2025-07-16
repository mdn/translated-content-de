---
title: browserSettings.zoomFullPage
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomFullPage
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrundeliegender Wert ein Boolean ist.

Standardmäßig wirkt sich das Zoomen auf den gesamten Inhalt einer Webseite aus. Mit der [Einstellung "Nur Text zoomen"](https://support.mozilla.org/de/kb/font-size-and-zoom-increase-size-of-web-pages#w_how-to-only-change-the-size-of-the-text/de/docs/) können Benutzer wählen, nur den Text auf einer Seite zu zoomen. Diese Einstellung ermöglicht es Web-Erweiterungen, diese Option zu steuern und zu bestimmen, ob das Zoomen auf die gesamte Seite oder nur auf den Text angewendet wird.

Die Einstellungen sind:

- `true`: Zoomen gilt für den gesamten Inhalt einer Webseite (Standard).
- `false`: Zoomen gilt nur für den Text einer Webseite.

## Beispiele

Setzen Sie die Einstellung auf `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.zoomFullPage.set({ value: false }).then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
