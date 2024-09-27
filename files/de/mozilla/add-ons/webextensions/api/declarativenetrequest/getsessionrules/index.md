---
title: declarativeNetRequest.getSessionRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getSessionRules
l10n:
  sourceCommit: 787fd072f8bc00cbdf62cef85921f0a6d9f0b4a7
---

{{AddonSidebar}}

Gibt die aktive Menge von sitzungsbezogenen Regeln für die Erweiterung zurück.

## Syntax

```js-nolint
let sessionRules = await browser.declarativeNetRequest.getSessionRules();
```

### Parameter

- `filter` {{optional_inline}}

  - : Ein Objekt, um die Liste der zurückgegebenen Regeln zu filtern.
    - `ruleIds` {{optional_inline}}
      - : Ein Array von `integer`. Die IDs der Regeln, die zurückgegeben werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der mit einem Array von {{WebExtAPIRef("declarativeNetRequest.Rule")}}-Objekten erfüllt wird. Wenn keine Regeln aktiv sind, ist das Objekt leer. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Verteilung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverteilung von Quellcode muss den obigen
// Copyright-Hinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss beibehalten.
//    * Weiterverteilung in Binärform muss den obigen
// Copyright-Hinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien,
// die mit der Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen ohne vorherige schriftliche Genehmigung
// verwendet werden, um Produkte, die von dieser Software abgeleitet
// wurden, zu bewerben oder zu fördern.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE
// ODER STILLSCHWEIGENDE GARANTIEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF, DIE STILLSCHWEIGENDE GARANTIE DER MARKTFÄHIGKEIT
// UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK WERDEN ABGELEHNT.
// IN KEINEM FALL SIND DIE COPYRIGHT-INHABER ODER BEITRAGENDEN
// FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// SPEZIELLEN, BEISPIELHAFTEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DEN
// ERSATZ VON WAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATEN- ODER GEWINNVERLUST; ODER BETRIEBSUNTERBRECHUNG)
// HAFTBAR, JEDOCH VERURSACHT UND GEMÄSS JEGLICHER
// HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUF
// JEGLICHE WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST
// WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
