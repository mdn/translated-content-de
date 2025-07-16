---
title: sessions.getWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ruft einen Wert ab, der zuvor durch einen Aufruf von {{WebExtAPIRef("sessions.setWindowValue")}} gespeichert wurde.

Sie können einen Wert von einem Fenster selbst über einen Schließen-/Wiederherstellungszyklus abrufen. Das bedeutet, wenn Sie einen Wert setzen und der Benutzer das Fenster schließt und dann das Fenster mit der "Fenster wiederherstellen"-Funktion des Browsers (zum Beispiel durch Drücken von Control+Shift+N) wiederherstellt, können Sie den Wert aus dem wiederhergestellten Fenster abrufen. Beachten Sie jedoch, dass ein wiederhergestelltes Fenster nicht die gleiche ID wie das Original erhält, sodass sich die ID, die Sie an `getWindowValue()` übergeben, von der ID unterscheidet, die Sie an `setWindowValue()` übergeben haben, auch wenn beide auf dasselbe Fenster verweisen.

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
  - : `integer`. ID des Fensters, dessen Daten Sie abzurufen versuchen. Ein Fehler wird ausgegeben, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, der den abzurufenden bestimmten Wert identifiziert. Dieser muss mit dem Schlüssel übereinstimmen, der zuvor in {{WebExtAPIRef("sessions.setWindowValue")}} angegeben wurde.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der mit dem Wert aufgelöst wird, wenn er existiert, oder `undefined`, wenn er nicht existiert. Wenn der Aufruf fehlgeschlagen ist (zum Beispiel, weil die Fenster-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

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
