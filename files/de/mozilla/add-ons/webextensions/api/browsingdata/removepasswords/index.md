---
title: browsingData.removePasswords()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removePasswords
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht gespeicherte Passwörter.

Sie können den Parameter `removalOptions`, welcher ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt ist, verwenden, um:

- nur Passwörter zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden,
- zu steuern, ob Passwörter, die auf normalen Webseiten gespeichert wurden, gelöscht werden sollen, oder auch Passwörter, die in gehosteten Apps und Erweiterungen gespeichert wurden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removePasswords(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um nur Passwörter zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden, und um zu steuern, ob Passwörter, die auf normalen Webseiten oder in gehosteten Apps und Erweiterungen gespeichert wurden, gelöscht werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Löschen abgeschlossen ist. Falls ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Passwörter löschen, die in der letzten Woche gespeichert wurden:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

function weekInMilliseconds() {
  return 1000 * 60 * 60 * 24 * 7;
}

let oneWeekAgo = new Date().getTime() - weekInMilliseconds();

browser.browsingData
  .removePasswords({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Alle gespeicherten Passwörter löschen:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removePasswords({}).then(onRemoved, onError);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.

<!--
// Urheberrecht 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien enthalten, die mit der
// Verteilung einhergehen.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragszahler dürfen ohne vorherige ausdrückliche schriftliche Genehmigung
// verwendet werden, um Produkte, die aus dieser Software hervorgehen zu
// befürworten oder zu fördern.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER
// IMPLIZITE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// IMPLIZITEN GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE
// URHEBERRECHTSINHABER ODER BEITRAGENDEN HAFTBAR FÜR JEDWEDE DIREKTE, INDIREKTE,
// ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF, BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN;
// NUTZUNGSAUSFALL, DATENVERLUST ODER GEWINNVERLUST; ODER BETRIEBSUNTERBRECHUNG)
// WIE AUCH IMMER VERURSACHT UND UNTER WELCHER HAFTUNGSTHEORIE AUCH IMMER, OB
// IN VERTRAG, STRAFRECHTLICHER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIGES) AUS DER NUTZUNG DER SOFTWARE ENTSTANDEN,
// SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
