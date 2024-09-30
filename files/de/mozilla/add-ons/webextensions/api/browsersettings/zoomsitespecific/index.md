---
title: browserSettings.zoomSiteSpecific
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomSiteSpecific
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolean ist.

Diese Eigenschaft legt die [Konfigurationseinstellung](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) `browser.zoom.siteSpecific` fest, die steuert, wie Zoom-Einstellungen auf Websites und Tabs angewendet werden.

Wenn `browser.zoom.siteSpecific` wahr ist, gelten Zoom-Operationen für alle Seiten derselben Website, sodass:

- beim Laden einer Seite, falls ein Zoomfaktor für diese Website vorhanden ist, dieser auf die Seite angewendet wird, andernfalls wird der globale Standard-Zoomfaktor angewendet.
- wenn sich der Zoomfaktor einer Seite ändert, ändern sich auch die Zoomfaktoren anderer Seiten der Website in anderen Tabs.

Wenn `browser.zoom.siteSpecific` auf falsch gesetzt ist, gelten Zoom-Operationen nur für den aktiven Tab, sodass:

- beim Öffnen eines neuen Tabs der globale Standard-Zoomfaktor angewendet wird.
- wenn sich der Zoomfaktor in einem Tab ändert, bleibt dieser beim Laden der Seite erhalten und beeinflusst nicht den Zoomfaktor in anderen Tabs.

Wenn Firefox installiert wird, ist `browser.zoom.siteSpecific` auf wahr gesetzt.

Wenn [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)`.resistFingerprinting` wahr ist, hat diese Einstellung keine Wirkung und der Zoom wird pro Tab gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Einstellung auf `false` setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.zoomSiteSpecific.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
