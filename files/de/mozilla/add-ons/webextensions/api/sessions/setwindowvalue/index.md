---
title: sessions.setWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/setWindowValue
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Speichert ein Schlüssel/Wert-Paar, das einem bestimmten Fenster zugeordnet wird. Sie können diesen Wert anschließend mit {{WebExtAPIRef("sessions.getWindowValue")}} abrufen.

Beachten Sie, dass diese Daten nur für die Erweiterung sichtbar sind, die sie gesetzt hat, und nicht für andere Erweiterungen.

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
  - : `integer`. ID des Fensters, dem Sie die Daten zuordnen möchten. Ein Fehler wird ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, den Sie später verwenden können, um diesen bestimmten Datenwert abzurufen.
- `value`
  - : `string` oder `object`. Wenn dies ein Objekt ist, wird es [stringifiziert](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), sodass beispielsweise Objektmethoden weggelassen werden. Wenn hier eine Funktion angegeben wird, wird sie als Wert `null` gespeichert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird, wenn der Aufruf erfolgreich war. Wenn der Aufruf fehlschlug (zum Beispiel, weil die Fenster-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen Sie einen Wert auf dem aktiven Fenster, wenn der Benutzer ein Menüelement auswählt. Beachten Sie, dass Sie die "menus" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) benötigen, um dieses Beispiel auszuführen:

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
