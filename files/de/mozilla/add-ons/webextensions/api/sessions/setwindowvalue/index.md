---
title: sessions.setWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/setWindowValue
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Speichert ein Schlüssel/Wert-Paar, das mit einem bestimmten Fenster verknüpft wird. Sie können diesen Wert anschließend mit {{WebExtAPIRef("sessions.getWindowValue")}} abrufen.

Bitte beachten Sie, dass diese Daten nur für die Erweiterung sichtbar sind, die sie festgelegt hat, und nicht für andere Erweiterungen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let storing = browser.sessions.setWindowValue(
  windowId,    // integer
  key,         // string
  value        // string or object
)
```

### Parameter

- `windowId`
  - : `integer`. ID des Fensters, mit dem Sie die Daten verknüpfen möchten. Ein Fehler wird ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, den Sie später verwenden können, um diesen bestimmten Datenwert abzurufen.
- `value`
  - : `string` oder `object`. Wenn dies ein Objekt ist, wird es [stringifiziert](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), sodass Methoden des Objekts zum Beispiel weggelassen werden. Wenn hier eine Funktion angegeben wird, wird sie als Wert `null` gespeichert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird, wenn der Aufruf erfolgreich war. Wenn der Aufruf fehlgeschlagen ist (zum Beispiel, weil die Fenster-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Setzen Sie einen Wert auf dem aktiven Fenster, wenn der Benutzer einen Menüeintrag auswählt. Beachten Sie, dass Sie die Berechtigung "menus" benötigen, um dieses Beispiel auszuführen:

```js
async function setOnActiveWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  await browser.sessions.setWindowValue(currentWindow.id, "my-key", "my-value");
}

browser.menus.create({
  id: "my-item",
  title: "my item",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(setOnActiveWindow);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
