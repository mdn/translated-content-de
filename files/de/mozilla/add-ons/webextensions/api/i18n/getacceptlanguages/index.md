---
title: i18n.getAcceptLanguages()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft die [accept-languages](/de/docs/Web/HTTP/Content_negotiation#the_accept-language_header) des Browsers ab. Dies unterscheidet sich von der vom Browser verwendeten Locale. Um die Locale zu erhalten, verwenden Sie {{WebExtAPIRef('i18n.getUILanguage')}}.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Siehe die [Internationalization](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) Seite für einen Leitfaden zur Verwendung dieser Funktion.

## Syntax

```js-nolint
let gettingAcceptLanguages = browser.i18n.getAcceptLanguages()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` von `{{WebExtAPIRef('i18n.LanguageCode')}}` Objekten erfüllt wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function onGot(languages) {
  console.log(languages);
  //e.g. Array [ "en-US", "en" ]
}

let gettingAcceptLanguages = browser.i18n.getAcceptLanguages();
gettingAcceptLanguages.then(onGot);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n#method-getAcceptLanguages) API von Chromium. Diese Dokumentation ist abgeleitet von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in nicht-kombinierter und kombinierter Form, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverteilungen des Quellcodes müssen den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in nicht-kombinierter Form müssen den obigen
// Copyright-Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verbreitung bereitgestellt werden, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Beitragenden dürfen verwendet werden, um Produkte, die von dieser Software
// abgeleitet wurden, zu befürworten oder zu bewerben, ohne vorherige schriftliche
// Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER STILLSCHWEIGENDEN
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN GARANTIEN DER
// MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL
// SOLLEN DIE COPYRIGHT-INHABER ODER BEITRAGENDEN FÜR IRGENDWELCHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN HAFTBAR SEIN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL,
// DATEN- ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT
// UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG, ODER
// UNERLAUBTEN HANDLUNGEN (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DAS SICH AUS DER
// NUTZUNG DIESER SOFTWARE ERGIBT, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
