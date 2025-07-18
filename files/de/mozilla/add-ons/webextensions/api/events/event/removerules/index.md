---
title: Event.removeRules()
slug: Mozilla/Add-ons/WebExtensions/API/events/Event/removeRules
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Entfernt Regeln, die bei einem deklarativen Event mit {{WebExtAPIRef("events.Event.addRules()")}} registriert wurden.

## Syntax

```js-nolint
events.Event.removeRules(ruleIdentifiers, callback)
```

### Parameter

- `ruleIdentifiers` {{optional_inline}}
  - : `array` von `string`. Bezeichner für die zu entfernenden Regeln. Wenn kein Array übergeben wird, werden alle Regeln entfernt.

- `callback` {{optional_inline}}
  - : `function`. Wird ohne Argumente aufgerufen, wenn die Regeln entfernt wurden.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#method-Event-removeRules) API. Diese Dokumentation stammt aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.

<!--
// Urheberrecht 2015 Die Chromium-Urheber. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitungen des Quellcodes müssen das obige Urheberrecht
// sowie diese Bedingungen und den folgenden Haftungsausschluss beibehalten.
//    * Weiterverbreitungen in Binärform müssen das obenstehende Urheberrecht
// sowie diese Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der
// Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus
// dieser Software abgeleitet wurden, zu bewerben oder zu bewerben,
// ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT ODER EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE URHEBER
// ODER MITWIRKENDEN HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER
// DIENSTLEISTUNGEN; NUTZUNGSAUSFALL ODER DATENVERLUST ODER
// ENTGANGENE GEWINNE ODER GESCHÄFTSUNTERBRECHUNG) JEDER
// THEORIE DER HAFTUNG, OB IN VERTRAG, STRIKTER HAFTUNG ODER
// UNERLAUBTER HANDLUNG (EINSCHLIESSLICH NACHLÄSSIGKEIT ODER ANDERWEITIG)
// AUS DEM EINSATZ DER SOFTWARE ENTSTANDEN SIND, SELBST WENN SIE
// ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN INFORMIERT WURDEN.
-->
