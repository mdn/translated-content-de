---
title: sessions.removeTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Entfernt einen zuvor durch einen Aufruf von {{WebExtAPIRef("sessions.setTabValue")}} gespeicherten Wert.

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
  - : `integer`. Die ID des Tabs, dessen Daten entfernt werden sollen. Es wird ein Fehler ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Der Schlüssel, der den bestimmten Wert identifiziert, der entfernt werden soll. Dieser muss mit dem zuvor in {{WebExtAPIRef("sessions.setTabValue")}} angegebenen Schlüssel übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird, wenn das Element erfolgreich entfernt wurde. Wenn der Aufruf fehlschlug (zum Beispiel, weil die Tab-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code fügt zwei Kontextmenüeinträge hinzu: einer speichert einen mit dem aktuellen Tab verknüpften Wert, der andere entfernt ihn:

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

## Browser-Kompatibilität

{{Compat}}
