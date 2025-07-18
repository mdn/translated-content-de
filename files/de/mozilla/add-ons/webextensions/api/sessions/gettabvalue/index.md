---
title: sessions.getTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft einen Wert ab, der zuvor durch einen Aufruf von {{WebExtAPIRef("sessions.setTabValue")}} gespeichert wurde.

Sie können einen Wert von einem Tab auch über einen Schließ-/Wiederherstellungszyklus hinweg abrufen: Das bedeutet, dass wenn Sie einen Wert setzen, der Benutzer dann den Tab schließt und ihn anschließend mit der "Tab wiederherstellen"-Funktion des Browsers (z. B. durch Drücken von Strg+Umschalt+T) wiederherstellt, Sie den Wert aus dem wiederhergestellten Tab abrufen können. Beachten Sie jedoch, dass ein wiederhergestellter Tab nicht dieselbe ID wie das Original erhält, sodass die ID, die Sie in `getTabValue()` übergeben, anders sein wird als die, die Sie in `setTabValue()` übergeben haben, auch wenn sie beide auf denselben Tab verweisen.

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
  - : `integer`. ID des Tabs, dessen Daten Sie abrufen möchten. Es wird ein Fehler ausgegeben, wenn die ID ungültig ist.
- `key`
  - : `string`. Schlüssel, der den speziellen Wert identifiziert, den es abzurufen gilt. Dieser muss mit dem zuvor in {{WebExtAPIRef("sessions.setTabValue")}} angegebenen Schlüssel übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit dem Wert aufgelöst wird, falls er existiert, oder `undefined`, falls er nicht existiert. Wenn der Aufruf fehlschlägt (zum Beispiel, weil die Tab-ID nicht gefunden werden konnte), wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Protokollieren Sie den Wert von "my-key" für alle neu erstellten Tabs (einschließlich aller Tabs, die wiederhergestellt wurden):

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
