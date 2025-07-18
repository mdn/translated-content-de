---
title: pageAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/setTitle
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Setzt den Titel der Page-Action. Der Titel wird in einem Tooltip angezeigt, wenn der Benutzer mit der Maus über die Page-Action fährt.

## Syntax

```js-nolint
browser.pageAction.setTitle(
  details // object
)
```

### Parameter

- `details`
  - : `object`.
    - `tabId`
      - : `integer`. Die ID des Tabs, dessen Titel Sie festlegen möchten.
    - `title`
      - : `string` oder `null`. Der Tooltip-Text.

        Falls hier `null` übergeben wird, wird der Titel auf den Titel zurückgesetzt, der im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel angegeben wurde.

## Beispiele

Immer wenn ein Tab aktualisiert wird, zeigt die Page-Action für diesen Tab an und setzt ihren Titel, um die ID des Tabs anzuzeigen:

```js
browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  browser.pageAction.show(tabId);
  browser.pageAction.setTitle({
    tabId,
    title: `Tab ID: ${tabId}`,
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-setTitle) API. Diese Dokumentation ist aus [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code abgeleitet.
