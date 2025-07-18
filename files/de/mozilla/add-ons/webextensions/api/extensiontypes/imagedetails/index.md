---
title: extensionTypes.ImageDetails
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Details über das Format, die Qualität, den Bereich und die Skalierung eines aufgenommenen Bildes.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `format` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageFormat')}}. Das Format des resultierenden Bildes. Standard ist `"png"`.
- `quality` {{optional_inline}}
  - : `integer`. Wenn das Format `"jpeg"` ist, steuert dies die Qualität des resultierenden Bildes. Es ist eine Zahl zwischen 0 und 100, die in einen Wert zwischen 0 und 1 umgewandelt wird und dann als `encoderOptions`-Argument an [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) verwendet wird. Wenn es ausgelassen wird, wird 92 verwendet. Wenn die Qualität verringert wird, wird das resultierende Bild mehr visuelle Artefakte aufweisen, und die Anzahl der Bytes, die zur Speicherung benötigt werden, wird verringert. Dieser Wert wird für PNG-Bilder ignoriert.
- `rect` {{optional_inline}}
  - : Ein `object`, das den zu erfassenden Bereich des Dokuments in CSS-Pixeln relativ zur Seite angibt. Alle Eigenschaften haben standardmäßig den Wert `0`. Die Eigenschaften sind:
    - `x`: Die Koordinate der linken Seite des Rechtecks.
    - `y`: Die Koordinate der oberen Seite des Rechtecks.
    - `width`: Die Breite des Rechtecks.
    - `height`: Die Höhe des Rechtecks.

    Diese Option wurde in Firefox 82 eingeführt. Wenn sie weggelassen wird, wird das derzeit sichtbare Viewport erfasst.

- `scale` {{optional_inline}}
  - : `number`. Die zu verwendende Skalierung, standardmäßig [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio). Diese Option wurde in Firefox 82 eingeführt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes#type-ImageDetails) API von Chromium. Diese Dokumentation ist abgeleitet von [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Bei der Verbreitung in binärer Form muss der obige Urheberrechtshinweis,
// diese Liste von Bedingungen und der folgende Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verbreitung geliefert werden,
// enthalten sein.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die sich aus dieser Software
// ableiten, ohne vorherige schriftliche Genehmigung zu kennzeichnen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER STILLSCHWEIGENDEN
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN
// GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN
// ABGELEHNT. IN KEINEM FALL HAFTEN DIE COPYRIGHT-INHABER ODER MITWIRKENDEN
// FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER
// FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG
// VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATEN- ODER
// GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) JEDER ART, DIE UNABHÄNGIG
// VON DER URSACHE UND DER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDEREM) ENTSTEHEN, SELBST WENN SIE AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// HINGEWIESEN WURDEN.
-->
