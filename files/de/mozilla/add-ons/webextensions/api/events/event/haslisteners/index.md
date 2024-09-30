---
title: Event.hasListeners()
slug: Mozilla/Add-ons/WebExtensions/API/events/Event/hasListeners
l10n:
  sourceCommit: 8bcd10489059539a341f82985eac9f1115e87483
---

{{AddonSidebar}}

Prüft, ob irgendwelche Listener für das Ereignis registriert sind.

## Syntax

```js-nolint
events.Event.hasListeners()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert: `true`, wenn irgendwelche Listener für das Ereignis registriert sind. Andernfalls `false`.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#method-Event-hasListeners) API. Diese Dokumentation stammt aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in sowohl Quell- als auch
// Binärformen, mit oder ohne Änderungen, sind unter den folgenden
// Bedingungen gestattet:
//
//    * Weiterverbreitungen von Quellcode müssen das obige
// Urheberrecht, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss enthalten.
//    * Weiterverbreitungen in Binärform müssen das obige
// Urheberrecht, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien,
// die mit der Verteilung einhergehen, enthalten.
//    * Weder der Name der Google Inc. noch die Namen ihrer
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus
// dieser Software abgeleitet wurden, ohne spezifische vorherige
// schriftliche Genehmigung zu befürworten oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER
// IMPLIZIERTE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER
// MARKTFÄHIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN
// ABGELEHNT. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER ODER DIE
// MITWIRKENDEN HAFTBAR FÜR IRGENDWELCHE DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATENVERLUST
// ODER GEWINNVERLUST; ODER BETRIEBSUNTERBRECHUNG) JEDWEDER ART UND
// WEISE, OB AUFGRUND VON VERTRAG, HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE IRGENDWIE
// AUS DER NUTZUNG DER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
