---
title: browserAction.getTitle()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getTitle
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft den Titel der Browser-Aktion ab.

Genau wie Sie den Titel auf Basis von Tabs mithilfe von {{WebExtAPIRef("browserAction.setTitle()")}} festlegen können, können Sie einen tab-spezifischen Titel abrufen, indem Sie die ID des Tabs in diese Funktion übergeben.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingTitle = browser.browserAction.getTitle(
  details               // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `tabId` {{optional_inline}}
      - : `integer`. Spezifizieren Sie den Tab, von dem der Titel abgerufen werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Spezifizieren Sie das Fenster, von dem der Titel abgerufen werden soll.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das zurückgegebene Promise wird abgelehnt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der den Titel der Browser-Aktion enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code wechselt den Titel jedes Mal zwischen "this" und "that", wenn der Benutzer auf die Browser-Aktion klickt:

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.browserAction.setTitle({ title: "that" });
  } else {
    browser.browserAction.setTitle({ title: "this" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  let gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-getTitle) API. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
