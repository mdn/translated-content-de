---
title: sessions.getWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft einen zuvor durch einen Aufruf von {{WebExtAPIRef("sessions.setWindowValue")}} gespeicherten Wert ab.

Sie können einen Wert aus einem Fenster auch über einen Schließen-/Wiederherstellen-Zyklus hinweg abrufen: Das bedeutet, wenn Sie einen Wert festlegen und der Benutzer das Fenster schließt, dann das Fenster mit der "Fenster wiederherstellen"-Funktion des Browsers wiederherstellt (zum Beispiel durch Drücken von Steuerung+Umschalt+N), dann können Sie den Wert aus dem wiederhergestellten Fenster abrufen. Beachten Sie jedoch, dass ein wiederhergestelltes Fenster nicht dieselbe ID wie das ursprüngliche erhält, sodass die ID, die Sie an `getWindowValue()` übergeben, von der ID abweicht, die Sie an `setWindowValue()` übergeben haben, obwohl beide auf dasselbe Fenster verweisen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let retrieving = browser.sessions.getWindowValue(
  windowId,    // integer
  key          // string
)
```

### Parameter

- `windowId`
  - : `integer`. ID des Fensters, dessen Daten Sie abrufen möchten. Ein Fehler wird ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, der den bestimmten Wert identifiziert, der abgerufen werden soll. Dieser muss mit dem zuvor in {{WebExtAPIRef("sessions.setWindowValue")}} angegebenen Schlüssel übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit dem Wert aufgelöst wird, wenn er existiert, oder `undefined`, wenn er nicht existiert. Wenn der Aufruf fehlschlug (zum Beispiel, weil die Fenster-ID nicht gefunden werden konnte), dann wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Protokollieren Sie den Wert von "my-key" für alle neu erstellten Fenster (dies schließt alle wiederhergestellten Fenster ein):

```js
function onGetResolved(r) {
  console.log(`success: ${r}`);
}

function onGetRejected(e) {
  console.log(`error: ${e}`);
}

browser.windows.onCreated.addListener((window) => {
  browser.sessions
    .getWindowValue(window.id, "my-key")
    .then(onGetResolved, onGetRejected);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
