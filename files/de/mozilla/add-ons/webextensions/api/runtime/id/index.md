---
title: runtime.id
slug: Mozilla/Add-ons/WebExtensions/API/runtime/id
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die ID der Erweiterung.

## Syntax

```js-nolint
let myAddonId = browser.runtime.id;
```

### Wert

Ein `string`, der die Add-on-ID darstellt. Wenn die Erweiterung in ihrem [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Manifest.json-Schlüssel eine ID angibt, enthält `runtime.id` diesen Wert. Andernfalls enthält `runtime.id` die für die Erweiterung generierte ID.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#property-id) API von Chromium. Diese Dokumentation basiert auf [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in Quell- und Binärform, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen erlaubt: 
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in Binärform müssen den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verteilung 
// bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragenden dürfen verwendet werden, um Produkte, die von dieser Software 
// abgeleitet sind, ohne spezifische vorherige schriftliche Erlaubnis zu 
// befürworten oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEDER AUSDRÜCKLICHE ODER STILLSCHWEIGENDE 
// HAFTUNGSAUSSCHLUSS, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND EIGNUNG
// FÜR EINEN BESTIMMTEN ZWECK, WIRD ABGELEHNT. IN KEINEM FALL SIND DIE 
// COPYRIGHT-INHABER ODER BEITRAGENDEN HAFTBAR FÜR DIREKTE, INDIREKTE, 
// ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, 
// ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER 
// DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN ODER GEWINNE; ODER 
// GESCHÄFTSUNTERBRECHUNG) WIE AUCH IMMER VERURSACHT UND UNABHÄNGIG VON DER 
// HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG 
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUF IRGENDEINE WEISE 
// AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHT, SELBST WENN AUF DIE MÖGLICHKEIT 
// SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
