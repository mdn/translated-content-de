---
title: sidebarAction.getTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft den Titel der Seitenleiste ab.

Genau wie Sie den Titel für einen bestimmten Tab mittels {{WebExtAPIRef("sidebarAction.setTitle()")}} festlegen können, so können Sie auch einen Tab-spezifischen Titel abrufen, indem Sie die ID des Tabs an diese Funktion übergeben.

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
      - : `integer`. Holt den Titel für die Seitenleiste, die dem angegebenen Tab zugeordnet ist.
    - `windowId` {{optional_inline}}
      - : `integer`. Holt den Titel für die Seitenleiste, die dem angegebenen Fenster zugeordnet ist.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben werden, schlägt die Funktion fehl und das von ihr zurückgegebene Promise wird abgelehnt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der den Titel der Seitenleiste enthält.

## Browser-Kompatibilität

{{Compat}}

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

> [!NOTE]
> Diese API basiert auf der [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/)-API von Opera.
