---
title: pageAction.getPopup()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/getPopup
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft die URL für das HTML-Dokument ab, das als Popup für diese Page-Aktion festgelegt ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingPopup = browser.pageAction.getPopup(
  details               // object
)
```

### Parameter

- `details`

  - : `object`.

    - `tabId`
      - : `integer`. ID des Tabs, dessen Popup Sie abrufen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der die URL des Popups enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie ein Kontextmenü-Element hinzu, das die Popup-URL für den aktuellen Tab protokolliert. Beachten Sie, dass Sie die `contextMenus`- [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrem [Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) benötigen, um Kontextmenü-Elemente zu erstellen.

```js
function gotPopup(popupURL) {
  console.log(popupURL);
}

browser.contextMenus.create({
  id: "get-popup",
  title: "Get popup URL",
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "get-popup") {
    let gettingPopup = browser.pageAction.getPopup({ tabId: tab.id });
    gettingPopup.then(gotPopup);
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-getPopup)-API von Chromium. Diese Dokumentation stammt von [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code.
