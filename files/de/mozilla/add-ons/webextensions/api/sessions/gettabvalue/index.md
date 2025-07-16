---
title: sessions.getTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ruft einen zuvor durch einen Aufruf von {{WebExtAPIRef("sessions.setTabValue")}} gespeicherten Wert ab.

Sie können einen Wert aus einem Tab auch über einen Schließen/Wiederherstellen-Zyklus hinweg abrufen: Das bedeutet, wenn Sie einen Wert setzen, der Benutzer den Tab schließt und dann über die "Tab wiederherstellen"-Funktion des Browsers (beispielsweise durch Drücken von Strg+Umschalt+T) wiederherstellt, können Sie den Wert aus dem wiederhergestellten Tab abrufen. Beachten Sie jedoch, dass ein wiederhergestellter Tab nicht dieselbe ID wie das Original erhält, sodass die ID, die Sie an `getTabValue()` übergeben, sich von der ID unterscheidet, die Sie an `setTabValue()` übergeben haben, obwohl beide sich auf dasselbe Tab beziehen.

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
  - : `integer`. Die ID des Tabs, dessen Daten Sie abrufen möchten. Ein Fehler wird ausgegeben, wenn die ID ungültig ist.
- `key`
  - : `string`. Der Schlüssel, der den bestimmten abzurufenden Wert identifiziert. Dieser muss mit dem zuvor in {{WebExtAPIRef("sessions.setTabValue")}} angegebenen Schlüssel übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit dem Wert aufgelöst wird, falls er existiert, oder `undefined`, falls er nicht existiert. Falls der Aufruf fehlgeschlagen ist (zum Beispiel, weil die Tab-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Protokollieren Sie den Wert von "my-key" für alle neu erstellten Tabs (dies umfasst alle Tabs, die wiederhergestellt wurden):

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

## Browser-Kompatibilität

{{Compat}}
