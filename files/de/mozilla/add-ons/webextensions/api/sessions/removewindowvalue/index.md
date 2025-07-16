---
title: sessions.removeWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Entfernt einen Wert, der zuvor durch einen Aufruf von {{WebExtAPIRef("sessions.setWindowValue")}} gespeichert wurde.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.sessions.removeWindowValue(
  windowId,    // integer
  key          // string
)
```

### Parameter

- `windowId`
  - : `integer`. ID des Fensters, dessen Daten Sie zu entfernen versuchen. Ein Fehler wird ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, der den bestimmten zu entfernenden Wert identifiziert. Dieser muss mit dem Schlüssel übereinstimmen, der zuvor in {{WebExtAPIRef("sessions.setWindowValue")}} angegeben wurde.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird, wenn das Element erfolgreich entfernt wurde. Wenn der Aufruf fehlschlug (zum Beispiel, weil die Fenster-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Dieser Code fügt zwei Kontextmenüeinträge hinzu: Einer speichert einen Wert, der mit dem aktuellen Fenster verknüpft ist, der andere entfernt ihn:

```js
async function setOnActiveWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  await browser.sessions.setWindowValue(currentWindow.id, "my-key", "my-value");
}

async function removeFromActiveWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  await browser.sessions.removeWindowValue(currentWindow.id, "my-key");
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
    setOnActiveWindow();
  } else {
    removeFromActiveWindow();
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
