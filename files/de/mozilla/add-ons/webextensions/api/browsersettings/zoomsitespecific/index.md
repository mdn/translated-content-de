---
title: browserSettings.zoomSiteSpecific
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomSiteSpecific
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist.

Diese Eigenschaft legt die [Konfigurationseinstellung](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) `browser.zoom.siteSpecific` fest, die steuert, wie Zoom-Einstellungen auf Webseiten und Tabs angewendet werden.

Wenn `browser.zoom.siteSpecific` wahr ist, gelten Zoom-Vorgänge für alle Seiten derselben Website, sodass:

- wenn eine Seite geladen wird, ein Zoom-Level für diese Website angewendet wird, sofern vorhanden, oder andernfalls das globale Standard-Zoom-Level angewendet wird.
- wenn sich der Zoom-Level einer Seite ändert, werden auch die Zoom-Level anderer Seiten der Website in anderen Tabs geändert.

Wenn `browser.zoom.siteSpecific` auf falsch gesetzt ist, gelten Zoom-Vorgänge nur für den aktiven Tab, sodass:

- wenn ein neuer Tab geöffnet wird, das globale Standard-Zoom-Level angewendet wird.
- wenn sich der Zoom-Level in einem Tab ändert, bleibt er über Seitenladungen hinweg erhalten und beeinflusst nicht den Zoom-Level in anderen Tabs.

Wenn Firefox installiert wird, ist `browser.zoom.siteSpecific` wahr.

Wenn [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)`.resistFingerprinting` wahr ist, hat diese Einstellung keine Wirkung und der Zoom wird tabweise festgelegt.

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
