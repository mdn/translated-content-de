---
title: runtime.getManifest()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getManifest
l10n:
  sourceCommit: 9a1a8665d37c3b75f9d9a545c4c2407296615a41
---

Holen Sie die Datei [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) der Erweiterung als Objekt. Das Objekt wird aus browserinternen Datenstrukturen erstellt und kann sich von einer Darstellung unterscheiden, die durch das Ausführen von `JSON.parse()` auf der Datei in der Erweiterung erzeugt wird.

## Syntax

```js-nolint
browser.runtime.getManifest()
```

### Parameter

Keine.

### Rückgabewert

Ein `object`, das das Manifest darstellt.

## Beispiele

Holen Sie das Manifest und protokollieren Sie die "name"-Eigenschaft:

```js
let manifest = browser.runtime.getManifest();
console.log(manifest.name);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode {{WebExtAPIRef("runtime.getVersion()")}}, die den Wert des [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)-Schlüssels im Manifest zurückgibt.

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getManifest) API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Eine Weiterverbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Änderungen, ist unter folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in Binärform müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verteilung zur Verfügung
// gestellt werden, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen ohne ausdrückliche schriftliche Genehmigung verwendet werden, um Produkte,
// die von dieser Software abgeleitet sind, zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEDE AUSDRÜCKLICHE ODER IMPLIZIERTE GEWÄHRLEISTUNG, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER
// MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL
// HAFTEN DIE URHEBERRECHTSINHABER ODER MITWIRKENDEN FÜR JEGLICHE DIREKTEN, INDIREKTEN, BEILÄUFIGEN,
// BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFALL,
// DATENVERLUST ODER ENTGANGENE GEWINNE; ODER BETRIEBSUNTERBRECHUNG) AUF GRUND JEDER
// THEORIE DER HAFTUNG, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG) ENTSTEHENDE IN IRGENDEINER WEISE
// AUS DER NUTZUNG DIESER SOFTWARE, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER
// SCHÄDEN HINGEWIESEN WURDE.
-->
