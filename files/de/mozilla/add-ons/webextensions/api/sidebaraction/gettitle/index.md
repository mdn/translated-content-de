---
title: sidebarAction.getTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft den Titel der Seitenleiste ab.

Genau wie Sie den Titel tab-spezifisch mit {{WebExtAPIRef("sidebarAction.setTitle()")}} festlegen können, so können Sie einen tab-spezifischen Titel abrufen, indem Sie die ID des Tabs an diese Funktion übergeben.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingTitle = browser.sidebarAction.getTitle(
  details               // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Holt den Titel der Seitenleiste, der spezifisch für den angegebenen Tab ist.
    - `windowId` {{optional_inline}}
      - : `integer`. Holt den Titel der Seitenleiste, der spezifisch für das angegebene Fenster ist.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das zurückgegebene Promise wird abgelehnt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird der globale Titel zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der den Titel der Seitenleiste enthält.

## Beispiele

Dieser Code wechselt den Titel zwischen "this" und "that" jedes Mal, wenn der Benutzer die Browser-Aktion anklickt.

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.sidebarAction.setTitle({ title: "that" });
  } else {
    browser.sidebarAction.setTitle({ title: "this" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  let gettingTitle = browser.sidebarAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
