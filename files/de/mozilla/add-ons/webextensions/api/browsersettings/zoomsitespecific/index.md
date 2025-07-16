---
title: browserSettings.zoomSiteSpecific
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomSiteSpecific
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist.

Diese Eigenschaft legt die [Konfigurationseinstellung](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) `browser.zoom.siteSpecific` fest, die steuert, wie Zoom-Einstellungen auf Websites und Tabs angewendet werden.

Wenn `browser.zoom.siteSpecific` wahr ist, gelten Zoom-Vorgänge für alle Seiten derselben Website, sodass:

- wenn eine Seite geladen wird, das Zoom-Level dieser Website angewendet wird, falls vorhanden, andernfalls wird das globale Standard-Zoom-Level angewendet.
- wenn sich das Zoom-Level einer Seite ändert, auch die Zoom-Level anderer Seiten dieser Website in anderen Tabs geändert werden.

Wenn `browser.zoom.siteSpecific` auf falsch gesetzt ist, gelten Zoom-Vorgänge nur für den aktiven Tab, sodass:

- wenn ein neuer Tab geöffnet wird, das globale Standard-Zoom-Level angewendet wird.
- wenn sich das Zoom-Level in einem Tab ändert, bleibt es über Seiten-Ladevorgänge hinweg bestehen und beeinflusst das Zoom-Level in keinem anderen Tab.

Wenn Firefox installiert wird, ist `browser.zoom.siteSpecific` auf wahr gesetzt.

Wenn [`privacy.websites.resistFingerprinting`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites#resistfingerprinting) wahr ist, hat diese Einstellung keine Wirkung und das Zoom wird auf einer pro-Tab-Basis festgelegt.

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
