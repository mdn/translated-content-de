---
title: sessions.removeWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
  - : `integer`. ID des Fensters, dessen Daten Sie entfernen möchten. Es wird ein Fehler ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, der den speziellen Wert identifiziert, der entfernt werden soll. Dieser muss mit dem zuvor in {{WebExtAPIRef("sessions.setWindowValue")}} angegebenen Schlüssel übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird, wenn das Element erfolgreich entfernt wurde. Wenn der Aufruf fehlgeschlagen ist (zum Beispiel, weil die Fenster-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code fügt zwei Kontextmenüelemente hinzu: eines speichert einen Wert, der mit dem aktuellen Fenster verknüpft ist, das andere entfernt ihn:

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
