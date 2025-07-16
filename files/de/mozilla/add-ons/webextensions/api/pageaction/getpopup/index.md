---
title: pageAction.getPopup()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/getPopup
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ruft die URL für das HTML-Dokument ab, das als Popup für diese Page Action festgelegt wurde.

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

## Beispiele

Fügen Sie einen Kontextmenüpunkt hinzu, der die Popup-URL für den aktuellen Tab protokolliert. Beachten Sie, dass Sie die `contextMenus` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrem [Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) benötigen, um Kontextmenüpunkte zu erstellen.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-getPopup) API. Diese Dokumentation ist abgeleitet von [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code.
