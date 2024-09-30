---
title: Event.getRules()
slug: Mozilla/Add-ons/WebExtensions/API/events/Event/getRules
l10n:
  sourceCommit: 8bcd10489059539a341f82985eac9f1115e87483
---

{{AddonSidebar}}

Ruft alle Regeln ab, die für ein deklaratives Ereignis registriert sind.

## Syntax

```js-nolint
events.Event.getRules(ruleIdentifiers, callback)
```

### Parameter

- `ruleIdentifiers` {{optional_inline}}

  - : `array` von `string`. Bezeichner für die Regeln, die zurückgegeben werden sollen. Wenn kein Array übergeben wird, werden alle Regeln zurückgegeben.

- `callback`

  - : `function`. Der Parameter der Callback-Funktion ist ein Array von {{WebExtAPIRef("events.Rule")}} Objekten.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#method-Event-getRules) API. Diese Dokumentation ist abgeleitet von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitung des Quellcodes muss den oben genannten Urheberrechtshinweis,
//      diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitung in Binärform muss den oben genannten Urheberrechtshinweis,
//      diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
//      Dokumentation und/oder anderen Materialien, die mit der Verbreitung bereitgestellt
//      werden, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
//      Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software
//      abgeleitet sind, zu unterstützen oder zu promoten, ohne vorherige schriftliche
//      Erlaubnis.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN BEREITGESTELLT,
// "WIE BESEHEN" UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIEN, EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF, DIE IMPLIZIERTEN GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG
// FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SOLLEN DIE
// URHEBERRECHTSINHABER ODER MITWIRKENDE FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF, BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATENVERLUST ODER ENTGANGENER GEWINN; ODER BETRIEBSUNTERBRECHUNG) HAFTBAR SEIN,
// WIE AUCH IMMER VERURSACHT UND UNTER WELCHER HAFTUNGSTHEORIE AUCH IMMER, OB IN
// VERTRAG, STRICTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT
// ODER ANDERWEITIG), DIE AUF IRGENDEINE WEISE AUS DER NUTZUNG DIESER SOFTWARE
// ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
