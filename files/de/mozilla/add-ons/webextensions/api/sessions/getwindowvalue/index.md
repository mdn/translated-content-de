---
title: sessions.getWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ruft einen Wert ab, der zuvor durch einen Aufruf von {{WebExtAPIRef("sessions.setWindowValue")}} gespeichert wurde.

Sie können einen Wert von einem Fenster selbst über einen Schließ-/Wiederherstellungszyklus hinweg abrufen: Das bedeutet, wenn Sie einen Wert festlegen und dann der Benutzer das Fenster schließt und es mithilfe der "Fenster wiederherstellen"-Funktion des Browsers wiederherstellt (zum Beispiel durch Drücken von Strg+Umschalt+N), können Sie den Wert aus dem wiederhergestellten Fenster abrufen. Beachten Sie jedoch, dass ein wiederhergestelltes Fenster nicht die gleiche ID wie das Original erhält, sodass die ID, die Sie an `getWindowValue()` übergeben, von der ID abweichen wird, die Sie an `setWindowValue()` übergeben haben, obwohl beide auf dasselbe Fenster verweisen.

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
  - : `integer`. ID des Fensters, dessen Daten Sie abzurufen versuchen. Ein Fehler wird ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, der den bestimmten abzurufenden Wert identifiziert. Dieser muss mit dem zuvor in {{WebExtAPIRef("sessions.setWindowValue")}} angegebenen Schlüssel übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit dem Wert aufgelöst wird, wenn der Wert existiert, oder `undefined`, wenn er nicht existiert. Wenn der Aufruf fehlgeschlagen ist (zum Beispiel, weil die Fenster-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie den Wert von "my-key" für alle neu erstellten Fenster (das schließt auch alle wiederhergestellten Fenster ein):

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
