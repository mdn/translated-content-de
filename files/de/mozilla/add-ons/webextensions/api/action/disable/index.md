---
title: action.disable()
slug: Mozilla/Add-ons/WebExtensions/API/action/disable
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Deaktiviert die Browseraktion für einen Tab, was bedeutet, dass sie nicht angeklickt werden kann, wenn dieser Tab aktiv ist.

> [!NOTE]
> Diese API ist ab Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
browser.action.disable(
  tabId // optional integer
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, für den Sie die Browseraktion deaktivieren möchten.

## Beispiele

Deaktivieren der Browseraktion beim Anklicken und erneutes Aktivieren jedes Mal, wenn ein neuer Tab geöffnet wird:

```js
browser.tabs.onCreated.addListener(() => {
  browser.action.enable();
});

browser.action.onClicked.addListener(() => {
  browser.action.disable();
});
```

Deaktivieren der Browseraktion nur für den aktiven Tab:

```js
browser.action.onClicked.addListener((tab) => {
  browser.action.disable(tab.id);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-disable). Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
