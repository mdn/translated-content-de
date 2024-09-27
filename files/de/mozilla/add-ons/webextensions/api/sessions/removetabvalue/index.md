---
title: sessions.removeTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Entfernt einen Wert, der zuvor durch einen Aufruf von {{WebExtAPIRef("sessions.setTabValue")}} gespeichert wurde.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.sessions.removeTabValue(
  tabId,    // integer
  key       // string
)
```

### Parameter

- `tabId`
  - : `integer`. ID des Tabs, dessen Daten Sie entfernen möchten. Ein Fehler wird ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, der den bestimmten Wert identifiziert, der entfernt werden soll. Dieser muss mit dem Schlüssel übereinstimmen, der zuvor in {{WebExtAPIRef("sessions.setTabValue")}} angegeben wurde.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird, wenn das Element erfolgreich entfernt wurde. Wenn der Aufruf fehlschlug (zum Beispiel, weil die Tab-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code fügt zwei Kontextmenüeinträge hinzu: Einer speichert einen Wert, der dem aktuellen Tab zugeordnet ist, der andere entfernt ihn:

```js
async function setOnActiveTab() {
  let tabArray = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let tabId = tabArray[0].id;
  await browser.sessions.setTabValue(tabId, "my-key", "my-value");
}

async function removeFromActiveTab() {
  let tabArray = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let tabId = tabArray[0].id;
  await browser.sessions.removeTabValue(tabId, "my-key");
}

browser.menus.create({
  id: "add-my-item",
  title: "add item",
  contexts: ["all"],
});

browser.menus.create({
  id: "remove-my-item",
  title: "remove item",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info) => {
  if (info.menuItemId === "add-my-item") {
    setOnActiveTab();
  } else {
    removeFromActiveTab();
  }
});
```

{{WebExtExamples}}
