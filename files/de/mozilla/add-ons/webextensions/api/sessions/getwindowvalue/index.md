---
title: sessions.getWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ruft einen zuvor gespeicherten Wert durch einen Aufruf von {{WebExtAPIRef("sessions.setWindowValue")}} ab.

Sie können einen Wert von einem Fenster sogar über einen Schließ-/Wiederherstellungszyklus hinweg abrufen: Das bedeutet, dass wenn Sie einen Wert festlegen, der Benutzer das Fenster schließt und dann das Fenster mit der "Fenster wiederherstellen"-Funktion des Browsers wiederherstellt (zum Beispiel durch Drücken von Strg+Umschalt+N), Sie den Wert vom wiederhergestellten Fenster abrufen können. Beachten Sie jedoch, dass ein wiederhergestelltes Fenster nicht die gleiche ID wie das ursprüngliche erhält, sodass die ID, die Sie in `getWindowValue()` übergeben, sich von der ID unterscheiden wird, die Sie in `setWindowValue()` übergeben haben, obwohl sie sich beide auf dasselbe Fenster beziehen.

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
  - : `string`. Schlüssel zur Identifizierung des abzurufenden Wertes. Dieser muss mit dem zuvor in {{WebExtAPIRef("sessions.setWindowValue")}} verwendeten Schlüssel übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit dem Wert aufgelöst wird, wenn er existiert, oder `undefined`, wenn er nicht existiert. Wenn der Aufruf fehlschlug (zum Beispiel, weil die Fenster-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

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
