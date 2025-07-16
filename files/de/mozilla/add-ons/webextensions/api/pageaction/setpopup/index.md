---
title: pageAction.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/setPopup
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Legt das HTML-Dokument fest, das als Popup geöffnet werden soll, wenn der Benutzer auf das Symbol der Page-Action klickt.

## Syntax

```js-nolint
browser.pageAction.setPopup(
  details // object
)
```

### Parameter

- `details`
  - : `object`.
    - `tabId`
      - : `integer`. Die ID des Tabs, für den Sie das Popup festlegen möchten.
    - `popup`
      - : `string` oder `null`. URL zur HTML-Datei, die in einem Popup angezeigt werden soll.

        Wenn hier ein leerer String (`""`) übergeben wird, wird das Popup deaktiviert und die Erweiterung erhält {{WebExtAPIRef("pageAction.onClicked")}}-Ereignisse.

        Wenn `null` übergeben wird, wird das Popup auf das im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel spezifizierte Popup zurückgesetzt.

## Beispiele

Hören Sie auf {{WebExtAPIRef("tabs.onUpdated")}}-Ereignisse und wechseln Sie das Popup, wenn sich der Ladezustand ändert:

```js
browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  if (changeInfo.status) {
    browser.pageAction.show(tabId);
    if (changeInfo.status === "loading") {
      browser.pageAction.setPopup({
        tabId,
        popup: "/popup/loading.html",
      });
    } else {
      browser.pageAction.setPopup({
        tabId,
        popup: "/popup/complete.html",
      });
    }
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-setPopup) API von Chromium. Diese Dokumentation stammt aus [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code.
