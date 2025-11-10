---
title: browserSettings.zoomSiteSpecific
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomSiteSpecific
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist.

Diese Eigenschaft setzt die [Konfigurationseinstellung](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) `browser.zoom.siteSpecific`, welche steuert, wie Zoom-Einstellungen auf Seiten und Tabs angewendet werden.

Wenn `browser.zoom.siteSpecific` wahr ist, gelten Zoom-Operationen für alle Seiten derselben Website, sodass:

- wenn eine Seite geladen wird, ein vorhandenes Zoom-Level für diese Website auf die Seite angewendet wird. Andernfalls wird das globale Standard-Zoom-Level angewendet.
- bei einer Änderung des Zoom-Levels auf einer Seite auch die Zoom-Level anderer Seiten derselben Website in anderen Tabs geändert werden.

Wenn `browser.zoom.siteSpecific` auf falsch gesetzt ist, gelten Zoom-Operationen nur für den aktiven Tab, sodass:

- wenn ein neuer Tab geöffnet wird, das globale Standard-Zoom-Level angewendet wird.
- bei einer Änderung des Zoom-Levels in einem Tab bleibt die Änderung über Seitenladevorgänge hinweg bestehen und beeinflusst das Zoom-Level in keinem anderen Tab.

Wenn Firefox installiert wird, ist `browser.zoom.siteSpecific` standardmäßig wahr.

Wenn [`privacy.websites.resistFingerprinting`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites#resistfingerprinting) wahr ist, hat diese Einstellung keinen Effekt und der Zoom wird tabweise gesetzt.

## Beispiele

Setzen Sie die Einstellung auf `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.zoomSiteSpecific.set({ value: false }).then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
