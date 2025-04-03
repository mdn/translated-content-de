---
title: browsingData.settings()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/settings
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Browser verfügen über eine integrierte Funktion "Verlauf löschen", die es dem Benutzer ermöglicht, verschiedene Arten von Browserdaten zu löschen. Dieses hat eine Benutzeroberfläche, die es dem Benutzer ermöglicht, auszuwählen, welche Art von Daten entfernt werden sollen (z. B. Verlauf, Downloads, …) und wie weit in die Vergangenheit die Daten entfernt werden sollen.

Diese Funktion gibt den aktuellen Wert dieser Einstellungen zurück.

Beachten Sie, dass nicht alle Datentypen immer über die Benutzeroberfläche entfernt werden können und einige UI-Optionen möglicherweise auf mehr als einen Datentyp abzielen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getSettings = browser.browsingData.settings()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das bei Erfüllung ein Objekt mit den Einstellungsinformationen enthält. Dieses Objekt hat drei Eigenschaften:

- `options`
  - : {{WebExtAPIRef("browsingData.RemovalOptions")}}. Ein `RemovalOptions`-Objekt, das die aktuell ausgewählten Entfernungsoptionen beschreibt.
- `dataToRemove`
  - : {{WebExtAPIRef("browsingData.DataTypeSet")}}. Dies wird eine Eigenschaft für jeden Datentyp enthalten, der in der Benutzeroberfläche des Browsers umgeschaltet werden kann. Jede Eigenschaft hat den Wert `true`, wenn dieser Typ zur Entfernung ausgewählt ist, und andernfalls `false`.
- `dataRemovalPermitted`
  - : {{WebExtAPIRef("browsingData.DataTypeSet")}}. Dies wird eine Eigenschaft für jeden Datentyp enthalten, der in der Benutzeroberfläche des Browsers umgeschaltet werden kann. Jede Eigenschaft hat den Wert `true`, wenn der Administrator des Geräts dem Benutzer erlaubt hat, diesen Typ zu entfernen, und andernfalls `false`.

Wenn ein Fehler auftritt, wird das Versprechen mit einer Fehlermeldung zurückgewiesen.

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
> Diese API basiert auf Chromiums [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weitergabe und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weitergaben von Quellcode müssen das obige Urheberrecht
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// beibehalten.
//    * Weitergaben in binärer Form müssen das obige Urheberrecht
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien enthalten, die mit der
// Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen der
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software
// abgeleitet wurden, ohne spezifische vorherige schriftliche Erlaubnis zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN BEREITGESTELLT
// "WIE BESEHEN" UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK SIND AUSGESCHLOSSEN. IN KEINEM FALL HAFTEN DIE COPYRIGHT-INHABER ODER
// MITWIRKENDEN FÜR JEGLICHE DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, BEISPIELHAFTE ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZGÜTERN ODER
// DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATENVERLUST ODER GEWINNVERLUST; ODER
// GESCHÄFTSUNTERBRECHUNG) WIE UCHIMMER VERURSACHT UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB IN VERTRAG,
// STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG)
// AUS DER NUTZUNG DIESER SOFTWARE ENTSTANDEN, SELBST WENN DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// BEKANNT WAR.
-->
