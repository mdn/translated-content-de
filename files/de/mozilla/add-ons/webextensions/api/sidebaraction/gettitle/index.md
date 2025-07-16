---
title: sidebarAction.getTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Erhält den Titel der Sidebar.

Genau wie Sie den Titel basierend auf dem Tab mit {{WebExtAPIRef("sidebarAction.setTitle()")}} setzen können, so können Sie einen tab-spezifischen Titel abrufen, indem Sie die ID des Tabs in diese Funktion übergeben.

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
      - : `integer`. Holt den Titel für die Sidebar, der spezifisch für den angegebenen Tab ist.
    - `windowId` {{optional_inline}}
      - : `integer`. Holt den Titel für die Sidebar, der spezifisch für das angegebene Fenster ist.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben werden, schlägt die Funktion fehl und das zurückgegebene Promise wird abgelehnt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der den Titel der Sidebar enthält.

## Beispiele

Dieser Code wechselt den Titel zwischen "this" und "that" jedes Mal, wenn der Benutzer auf die Browseraktion klickt.

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
> Diese API basiert auf der [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API von Opera.
