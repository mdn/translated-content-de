---
title: browserSettings.zoomSiteSpecific
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomSiteSpecific
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

Diese Eigenschaft setzt die [Konfigurationseinstellung](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) `browser.zoom.siteSpecific`, die steuert, wie Zoom-Einstellungen auf Websites und Tabs angewendet werden.

Wenn `browser.zoom.siteSpecific` wahr ist, gelten Zoom-Operationen für alle Seiten derselben Website, sodass:

- beim Laden einer Seite, falls ein Zoom-Level für diese Website vorhanden ist, dieses auf die Seite angewendet wird, andernfalls wird das globale Standard-Zoom-Level angewendet.
- wenn sich das Zoom-Level einer Seite ändert, werden die Zoom-Levels anderer Seiten dieser Website in anderen Tabs ebenfalls geändert.

Wenn `browser.zoom.siteSpecific` auf falsch gesetzt ist, gelten Zoom-Operationen nur für den aktiven Tab, sodass:

- beim Öffnen eines neuen Tabs das globale Standard-Zoom-Level angewendet wird.
- wenn sich das Zoom-Level in einem Tab ändert, bleibt es über Seitenladevorgänge hinweg bestehen und wirkt sich nicht auf das Zoom-Level in einem anderen Tab aus.

Beim Installieren von Firefox ist `browser.zoom.siteSpecific` wahr.

Wenn [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)`.resistFingerprinting` wahr ist, hat diese Einstellung keine Wirkung, und das Zoom wird pro Tab gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen Sie die Einstellung auf `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.zoomSiteSpecific.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
