---
title: sidebarAction.getPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Erhält eine URL zum HTML-Dokument, das den Inhalt der Seitenleiste definiert.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingPanel = browser.sidebarAction.getPanel(
  details               // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Erhält das Panel für die spezifische Seitenleiste des angegebenen Tabs.
    - `windowId` {{optional_inline}}
      - : `integer`. Erhält das Panel für die spezifische Seitenleiste des angegebenen Fensters.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das zurückgegebene Promise wird abgelehnt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das globale Panel zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Zeichenkette erfüllt wird, die die URL des Dokuments für das Panel enthält. Dies wird eine vollständig qualifizierte URL sein, wie zum Beispiel:

```url
moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/sidebar.html
```

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Die URL des Panels abrufen:

```js
function onGot(sidebarUrl) {
  console.log(sidebarUrl);
}

let gettingPanel = browser.sidebarAction.getPanel({});
gettingPanel.then(onGot);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
