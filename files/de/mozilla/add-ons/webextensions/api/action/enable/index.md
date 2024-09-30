---
title: action.enable()
slug: Mozilla/Add-ons/WebExtensions/API/action/enable
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Aktiviert die Browser-Aktion für einen Tab. Standardmäßig sind Browser-Aktionen für alle Tabs aktiviert.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
browser.action.enable(
  tabId // optional integer
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, für den Sie die Browser-Aktion aktivieren möchten.

## Beispiele

Deaktivieren Sie die Browser-Aktion beim Klick und aktivieren Sie sie jedes Mal, wenn ein neuer Tab geöffnet wird:

```js
browser.tabs.onCreated.addListener(() => {
  browser.action.enable();
});

browser.action.onClicked.addListener(() => {
  browser.action.disable();
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-enable)-API von Chromium. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
