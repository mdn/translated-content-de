---
title: sessions.getTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ruft einen Wert ab, der zuvor durch einen Aufruf von {{WebExtAPIRef("sessions.setTabValue")}} gespeichert wurde.

Sie können einen Wert von einem Tab auch über einen Zyklus von Schließen/Wiederherstellen abrufen: Das bedeutet, wenn Sie einen Wert setzen und der Nutzer den Tab schließt und dann den Tab mit der „Tab wiederherstellen“-Funktion des Browsers wiederherstellt (zum Beispiel durch Drücken von Strg+Umschalt+T), dann können Sie den Wert aus dem wiederhergestellten Tab abrufen. Beachten Sie jedoch, dass ein wiederhergestellter Tab nicht die gleiche ID wie der ursprüngliche hat, sodass die ID, die Sie an `getTabValue()` übergeben, von der ID abweicht, die Sie an `setTabValue()` übergeben haben, obwohl sie sich auf denselben Tab beziehen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let retrieving = browser.sessions.getTabValue(
  tabId,    // integer
  key       // string
)
```

### Parameter

- `tabId`
  - : `integer`. ID des Tabs, dessen Daten Sie abrufen möchten. Ein Fehler wird ausgelöst, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, der den bestimmten abzurufenden Wert identifiziert. Dieser muss mit dem zuvor in {{WebExtAPIRef("sessions.setTabValue")}} angegebenen Schlüssel übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit dem Wert aufgelöst wird, wenn er existiert, oder `undefined`, wenn er nicht existiert. Wenn der Aufruf fehlgeschlagen ist (zum Beispiel, weil die Tab-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie den Wert von "my-key" für alle neu erstellten Tabs (dies schließt alle wiederhergestellten Tabs ein):

```js
function onGetResolved(r) {
  console.log(`success: ${r}`);
}

function onGetRejected(e) {
  console.log(`error: ${e}`);
}

browser.tabs.onCreated.addListener((tab) => {
  browser.sessions
    .getTabValue(tab.id, "my-key")
    .then(onGetResolved, onGetRejected);
});
```

{{WebExtExamples}}
