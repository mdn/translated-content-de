---
title: declarativeNetRequest.isRegexSupported
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/isRegexSupported
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Prüft, ob ein regulärer Ausdruck als Bedingung einer {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}`.regexFilter` Regel unterstützt wird.

## Syntax

```js-nolint
let count = browser.declarativeNetRequest.isRegexSupported(
    regexOptions                // object
);
```

### Parameter

- `regexOptions`

  - : Ein Objekt, das den zu überprüfenden regulären Ausdruck enthält.
    - `isCaseSensitive` {{optional_inline}}
      - : `boolean` Ob der angegebene reguläre Ausdruck groß-/kleinsensitiv ist. Standard ist `true`.
    - `regex`
      - : `string` Der zu überprüfende reguläre Ausdruck.
    - `requireCapturing` {{optional_inline}}
      - : `boolean` Ob der angegebene reguläre Ausdruck das Erfassen erforderlich macht. Erfassen ist nur für Umleitungsregeln erforderlich, die eine regexSubstitution-Aktion angeben. Standard ist false.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das diese Eigenschaften enthält:

- `isSupported`
  - : `boolean` Ob der reguläre Ausdruck unterstützt wird.
- `reason` {{optional_inline}}
  - : `string` Gibt den Grund an, warum der reguläre Ausdruck nicht unterstützt wird. Mögliche Werte sind `"syntaxError"` und `"memoryLimitExceeded"`. Nur angegeben, wenn `isSupported` false ist.

Scheitert die Anfrage, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Redistribution und Nutzung in Quell- und binären Formen, mit oder ohne
// Modifikation, sind unter der Bedingung erlaubt, dass die folgenden
// Bedingungen erfüllt sind:
//
//    * Redistribution von Quellcode muss obige Urheberrechtshinweise,
// diesen Bedingungskatalog und den nachstehenden Haftungsausschluss
// beinhalten.
//    * Redistribution in binärer Form muss obige Urheberrechtshinweise,
// diesen Bedingungskatalog und den nachstehenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung geliefert werden, beinhalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen genutzt werden, um Produkte, die von dieser
// Software abgeleitet sind, ohne spezifische vorherige schriftliche
// Genehmigung zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER
// IMPLIZIERTE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE KONKLUDENTEN GEWÄHRLEISTUNGEN DER
// MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK
// WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER ODER
// MITWIRKENDEN HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF, BESCHAFFUNG VON ERSATZWAREN ODER
// -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATENVERLUST ODER
// GEWINNVERLUST; ODER BETRIEBSUNTERBRECHUNG) JEDOCH VERURSACHT UND
// AUF JEDER THEORIE DER HAFTUNG, OB IN VERTRAG, STRIKTER HAFTUNG,
// ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDERWEITIG), AUF IRGENDEINE WEISE AUS DER NUTZUNG DIESER SOFTWARE
// RESULTIEREND, AUCH WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// HINGEWIESEN WURDE.
-->
