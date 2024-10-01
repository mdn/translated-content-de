---
title: tabs.remove()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/remove
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Schließt einen oder mehrere Tabs.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.tabs.remove(
  tabIds          // integer or integer array
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer`. Die IDs des oder der zu schließenden Tabs.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn alle angegebenen Tabs entfernt wurden oder deren `beforeunload`-Prompts behandelt wurden. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Einen einzelnen Tab schließen:

```js
function onRemoved() {
  console.log(`Removed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let removing = browser.tabs.remove(2);
removing.then(onRemoved, onError);
```

Mehrere Tabs schließen:

```js
function onRemoved() {
  console.log(`Removed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let removing = browser.tabs.remove([15, 14, 1]);
removing.then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-remove)-API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Verteilung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter der Bedingung erlaubt, dass die folgenden
// Bedingungen eingehalten werden:
//
//    * Weiterverteilungen des Quellcodes müssen das obige
// Urheberrecht, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen das obige
// Urheberrecht, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen
// Materialien, die mit der Verteilung bereitgestellt werden,
// enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet wurden, ohne spezifische vorherige
// schriftliche Genehmigung zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" UND JEDERE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNG,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF STILLSCHWEIGENDE GEWÄHRLEISTUNGEN
// DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK SIND
// AUSGESCHLOSSEN. IN KEINEM FALL SOLLEN DIE URHEBERRECHTSINHABER ODER
// MITWIRKENDEN FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE
// ODER FOLGESCHÄDEN HAFTBAR SEIN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF
// DIE BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATENVERLUST ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG)
// ABER UNABHÄNGIG VON DER URSACHE UND DER HAFTUNGSTHEORIE, OB IN VERTRAG,
// STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT
// ODER ANDERWEITIG) AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEND, SELBST WENN
// AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
