---
title: declarativeNetRequest.updateStaticRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateStaticRules
l10n:
  sourceCommit: e64d736b93d6323f51f347274d1e016cde14d009
---

{{AddonSidebar}}

Ändert den aktivierten Status von Regeln in einem statischen Regelset. Die Anzahl der Regeln, die in einem Regelset deaktiviert werden können, ist auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} beschränkt.

Regeln können aktiviert und deaktiviert werden, während das Regelset, das sie enthält, deaktiviert ist. Alle Änderungen werden wirksam, wenn das Regelset aktiviert wird.

## Syntax

```js-nolint
let staticRulesUpdated = browser.declarativeNetRequest.updateStaticRules(
    options                // object
);
```

### Parameter

- `options`
  - : Ein Objekt, das ein statisches Regelset und die Regeln angibt, die in diesem Regelset aktiviert oder deaktiviert werden sollen.
    - `rulesetId` rulesetId
      - : `string` Die ID des statischen Regelsets, das modifiziert werden soll.
    - `disableRuleIds` {{optional_inline}}
      - : Ein Array von `number`. IDs der Regeln, die deaktiviert werden sollen. Ungültige IDs werden ignoriert.
    - `enableRuleIds` {{optional_inline}}
      - : Ein Array von `number`. IDs der Regeln, die aktiviert werden sollen. Ungültige IDs werden ignoriert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Eine Weiterverbreitung und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen das obige Urheberrecht
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss beibehalten.
//    * Weiterverbreitungen in binärer Form müssen das obige
// Urheberrecht, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Lieferung verteilt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet sind, ohne ausdrückliche vorherige schriftliche Genehmigung zu befürworten oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "AS IS" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// IMPLIZIERTEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK
// WERDEN ABGELEHNT. IN KEINEM FALL SOLLEN DIE
// RECHTSINHABER ODER MITWIRKENDEN FÜR JEGLICHE DIREKTEN, INDIREKTEN,
// BEILÄUFIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATEN, ODER
// GEWINNE; ODER GESCHÄFTSSTÖRUNGEN) VERANTWORTLICH SEIN, WIE AUCH IMMER
// VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER NUTZUNG DIESER SOFTWARE
// ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
