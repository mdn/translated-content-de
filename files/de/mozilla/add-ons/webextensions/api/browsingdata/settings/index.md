---
title: browsingData.settings()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/settings
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Browser haben eine integrierte Funktion "Verlauf löschen", die es dem Benutzer ermöglicht, verschiedene Arten von Browserdaten zu löschen. Diese Funktion hat eine Benutzeroberfläche, die es dem Benutzer ermöglicht auszuwählen, welche Art von Daten gelöscht werden sollen (z. B. Verlauf, Downloads, …) und wie weit in die Vergangenheit die Daten entfernt werden sollen.

Diese Funktion gibt den aktuellen Wert dieser Einstellungen zurück.

Beachten Sie, dass nicht alle Datentypen immer über die Benutzeroberfläche entfernbar sind, und einige Benutzeroberflächen-Optionen können mehreren Datentypen zugeordnet sein.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getSettings = browser.browsingData.settings()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das die Einstellungen enthält. Dieses Objekt hat drei Eigenschaften:

- `options`
  - : `{{WebExtAPIRef("browsingData.RemovalOptions")}}`. Ein `RemovalOptions`-Objekt, das die derzeit ausgewählten Entfernungsoptionen beschreibt.
- `dataToRemove`
  - : `{{WebExtAPIRef("browsingData.DataTypeSet")}}`. Dies wird eine Eigenschaft für jeden Datentyp enthalten, der in der Benutzeroberfläche des Browsers umgeschaltet werden kann. Jede Eigenschaft hat den Wert `true`, wenn dieser Typ zur Entfernung ausgewählt wurde, und `false` andernfalls.
- `dataRemovalPermitted`
  - : `{{WebExtAPIRef("browsingData.DataTypeSet")}}`. Dies wird eine Eigenschaft für jeden Datentyp enthalten, der in der Benutzeroberfläche des Browsers umgeschaltet werden kann. Jede Eigenschaft hat den Wert `true`, wenn der Administrator des Geräts dem Benutzer erlaubt hat, diesen Typ zu entfernen, und `false` andernfalls.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Aktuelle Einstellungen protokollieren:

```js
function onGotSettings(settings) {
  console.log(settings.options);
  console.log(settings.dataToRemove);
  console.log(settings.dataRemovalPermitted);
}

function onError(error) {
  console.error(error);
}

browser.browsingData.settings().then(onGotSettings, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.
