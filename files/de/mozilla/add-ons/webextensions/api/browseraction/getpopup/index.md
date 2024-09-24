---
title: browserAction.getPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getPopup
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft das HTML-Dokument ab, das als Popup für diese Browser-Aktion festgelegt wurde.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingPopup = browser.browserAction.getPopup(
  details               // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `tabId` {{optional_inline}}
      - : `integer`. Der Tab, dessen Popup abgerufen werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, dessen Popup abgerufen werden soll.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben werden, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das globale Popup zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Zeichenfolge erfüllt wird, die die URL für das Dokument des Popups enthält. Dies wird eine vollständig qualifizierte URL sein, wie z.B. `moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/popups/popup2.html`.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Holen Sie sich die URL des Popups:

```js
function gotPopup(popupURL) {
  console.log(popupURL);
}

let gettingPopup = browser.browserAction.getPopup({});
gettingPopup.then(gotPopup);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-getPopup) API. Diese Dokumentation wurde abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
