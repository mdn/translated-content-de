---
title: runtime.getManifest()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getManifest
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Rufen Sie die vollständige [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei ab, die von JSON in ein Objekt deserialisiert wurde.

## Syntax

```js-nolint
browser.runtime.getManifest()
```

### Parameter

Keine.

### Rückgabewert

Ein `object`, das das Manifest darstellt.

## Beispiele

Holen Sie das Manifest und protokollieren Sie die Eigenschaft "name":

```js
let manifest = browser.runtime.getManifest();
console.log(manifest.name);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getManifest). Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Verbreitung und Verwendung in Quell- und Binärform, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Verbreitungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// beibehalten.
//    * Verbreitungen in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// beibehalten, die mit der Verbreitung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen ohne spezielle vorherige schriftliche Genehmigung
// verwendet werden, um Produkte, die von dieser Software abgeleitet
// wurden, zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER
// IMPLIZIERTEN GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND
// EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND ABGELEHNT. IN KEINEM FALL
// HAFTEN DIE URHEBERRECHTSINHABER ODER MITWIRKENDEN FÜR JEGLICHE
// DIREKTEN, INDIREKTEN, ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER
// FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN, NUTZUNGSAUSFALL,
// DATEN- ODER GEWINNVERLUST ODER GESCHÄFTSUNTERBRECHUNG), WIE AUCH
// IMMER, VERURSACHT UND UNABHÄNGIG VON DER VERANTWORTUNGSTHEORIE,
// SEI ES AUFGRUND DES VERTRAGS, DER STRIKTEN HAFTUNG ODER EINER
// UNERLAUBTEN HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG),
// DIE IN IRGENDEINER WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN,
// SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
