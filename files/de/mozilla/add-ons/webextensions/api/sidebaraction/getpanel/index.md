---
title: sidebarAction.getPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Gibt eine URL zu dem HTML-Dokument zurück, das die Inhalte der Seitenleiste definiert.

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
      - : `integer`. Holt das Panel für die Seitenleiste, die spezifisch für den angegebenen Tab ist.
    - `windowId` {{optional_inline}}
      - : `integer`. Holt das Panel für die Seitenleiste, die spezifisch für das angegebene Fenster ist.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das zurückgegebene Promise wird abgelehnt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Panel zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der die URL für das Dokument des Panels enthält. Dies wird eine vollständige URL sein, wie zum Beispiel:

```url
moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/sidebar.html
```

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
