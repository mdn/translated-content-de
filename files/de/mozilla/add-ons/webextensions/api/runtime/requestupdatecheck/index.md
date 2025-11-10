---
title: runtime.requestUpdateCheck()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/requestUpdateCheck
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Überprüft, ob ein Update für die Erweiterung verfügbar ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let requestingCheck = browser.runtime.requestUpdateCheck()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das das Ergebnis der Update-Anfrage enthält.

- `result`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `status`
      - : {{WebExtAPIRef('runtime.RequestUpdateCheckStatus')}}. Das Ergebnis der Update-Überprüfung.

    - `version` {{optional_inline}}
      - : `string`. Die Version des Updates, wenn `status` `update_available` ist.

## Beispiele

Fordern Sie ein Update an und protokollieren Sie die neue Version, falls eine verfügbar ist:

```js
function onRequested(result) {
  console.log(result.status);
  if (result.status === "update_available") {
    console.log(result.version);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let requestingCheck = browser.runtime.requestUpdateCheck();
requestingCheck.then(onRequested, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-requestUpdateCheck) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Redistribution und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Redistributions des Quellcodes müssen den obigen Urheberrechtshinweis,
// diesen Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Redistributions in Binärform müssen den obigen Urheberrechtshinweis,
// diese Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verteilung
// geliefert werden, enthalten.
//    * Weder der Name der Google Inc. noch die Namen der
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet wurden, ohne spezifische vorherige schriftliche
// Genehmigung zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// OHNE JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIEN BEREITGESTELLT,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GARANTIEN
// DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. IN KEINEM
// FALL SOLLEN DIE COPYRIGHT-INHABER ODER MITWIRKENDE FÜR JEGLICHE DIREKTE,
// INDIREKTE, ZUFÄLLIGE, SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, BESCHAFFUNG VON
// ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATENVERLUST ODER
// GEWINNAUSFALL ODER GESCHÄFTSUNTERBRECHUNG) HAFTBAR GEMACHT WERDEN,
// UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB AUS VERTRAG, HAFTUNG ODER
// UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG),
// DIE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
