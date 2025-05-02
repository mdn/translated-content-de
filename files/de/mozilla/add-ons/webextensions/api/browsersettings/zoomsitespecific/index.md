---
title: browserSettings.zoomSiteSpecific
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomSiteSpecific
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist.

Diese Eigenschaft setzt die [Konfigurationseinstellung](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) `browser.zoom.siteSpecific`, die steuert, wie Zoom-Einstellungen auf Seiten und Tabs angewendet werden.

Wenn `browser.zoom.siteSpecific` wahr ist, werden Zoom-Vorgänge auf alle Seiten derselben Website angewendet, so dass:

- wenn eine Seite geladen wird, und es einen Zoomfaktor für diese Website gibt, wird dieser auf die Seite angewendet, ansonsten wird der globale Standard-Zoomfaktor angewendet.
- wenn sich der Zoomfaktor einer Seite ändert, werden die Zoomfaktoren anderer Seiten der Website in anderen Tabs ebenfalls geändert.

Wenn `browser.zoom.siteSpecific` auf falsch gesetzt ist, werden Zoom-Vorgänge nur auf den aktiven Tab angewendet, so dass:

- wenn ein neuer Tab geöffnet wird, der globale Standard-Zoomfaktor angewendet wird.
- wenn sich der Zoomfaktor in einem Tab ändert, bleibt er über das Laden von Seiten hinweg erhalten und beeinflusst den Zoomfaktor in keinem anderen Tab.

Wenn Firefox installiert wird, ist `browser.zoom.siteSpecific` wahr.

Wenn [`privacy.websites.resistFingerprinting`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites#resistfingerprinting) wahr ist, hat diese Einstellung keine Wirkung und der Zoom wird auf einer Basis pro Tab festgelegt.

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
