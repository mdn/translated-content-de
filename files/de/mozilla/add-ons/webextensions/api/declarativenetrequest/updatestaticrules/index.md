---
title: declarativeNetRequest.updateStaticRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateStaticRules
l10n:
  sourceCommit: 39a2c86675005f0682b7c5d0c32c8066be412aac
---

{{AddonSidebar}}

Ändert den aktivierten Zustand von Regeln in einem statischen Regelsatz. Die Anzahl der Regeln, die in einem Regelsatz deaktiviert werden können, ist auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} begrenzt.

Regeln können aktiviert und deaktiviert werden, während der Regelsatz, der sie enthält, deaktiviert ist. Alle Änderungen werden wirksam, wenn der Regelsatz aktiviert wird.

## Syntax

```js-nolint
let updatedStaticRules = browser.declarativeNetRequest.updateStaticRules(
    options                // object
);
```

### Parameter

- `options`

  - : Ein Objekt, das einen statischen Regelsatz und die zu aktivierenden oder zu deaktivierenden Regeln in diesem Regelsatz angibt.
    - `rulesetId` rulesetId
      - : `string` Die ID des zu ändernden statischen Regelsatzes.
    - `disableRuleIds` {{optional_inline}}
      - : Ein Array von `number`. IDs der zu deaktivierenden Regeln. Ungültige IDs werden ignoriert.
    - `enableRuleIds` {{optional_inline}}
      - : Ein Array von `number`. IDs der zu aktivierenden Regeln. Ungültige IDs werden ignoriert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Copyright 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärform, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverteilungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Weiterverteilungen in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// enthalten, die mit der Verteilung bereitgestellt werden.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet wurden, ohne vorherige schriftliche Genehmigung
// zu bewerben oder zu fördern.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN. IN KEINEM FALL SOLL
// DER INHABER DES COPYRIGHTS ODER DIE MITWIRKENDEN FÜR JEGLICHE DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN HAFTBAR SEIN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN ODER
// PROFITE; ODER GESCHÄFTSUNTERBRECHUNG) VERSCHIEDENE HAFTUNGSTHEORIEN,
// OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG) AUFTRETEN, SELBST WENN AUF DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
