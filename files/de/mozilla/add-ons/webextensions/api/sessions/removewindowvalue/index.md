---
title: sessions.removeWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
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
  - : `integer`. ID des Fensters, dessen Daten Sie entfernen möchten. Ein Fehler wird ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, der den speziellen Wert identifiziert, der entfernt werden soll. Dieser muss mit dem zuvor in {{WebExtAPIRef("sessions.setWindowValue")}} angegebenen Schlüssel übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird, wenn das Element erfolgreich entfernt wurde. Wenn der Aufruf fehlschlägt (zum Beispiel, weil die Fenster-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code fügt zwei Kontextmenüeinträge hinzu: einer speichert einen Wert, der mit dem aktuellen Fenster verknüpft ist, der andere entfernt ihn:

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
