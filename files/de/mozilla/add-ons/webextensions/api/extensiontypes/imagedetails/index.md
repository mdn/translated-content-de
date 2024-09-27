---
title: extensionTypes.ImageDetails
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Details zu Format, Qualität, Bereich und Maßstab eines aufgenommenen Bildes.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `format` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageFormat')}}. Das Format des resultierenden Bildes. Standard ist `"png"`.
- `quality` {{optional_inline}}
  - : `integer`. Wenn das Format `"jpeg"` ist, steuert dies die Qualität des resultierenden Bildes. Es handelt sich um eine Zahl zwischen 0 und 100, die in einen Wert zwischen 0 und 1 umgewandelt und dann als `encoderOptions`-Argument an [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) verwendet wird. Wenn es weggelassen wird, wird 92 verwendet. Wenn die Qualität verringert wird, weist das resultierende Bild mehr visuelle Artefakte auf, und die Anzahl der benötigten Bytes für die Speicherung verringert sich. Dieser Wert wird für PNG-Bilder ignoriert.
- `rect` {{optional_inline}}

  - : Ein `object`, das den Bereich des Dokuments angibt, der in CSS-Pixeln relativ zur Seite erfasst werden soll. Alle Eigenschaften sind standardmäßig auf `0` gesetzt. Die Eigenschaften sind:

    - `x`: Die Koordinate der linken Seite des Rechtecks.
    - `y`: Die Koordinate der oberen Seite des Rechtecks.
    - `width`: Die Breite des Rechtecks.
    - `height`: Die Höhe des Rechtecks.

    Diese Option wurde in Firefox 82 eingeführt. Wenn sie weggelassen wird, wird der aktuell sichtbare Ansichtsbereich erfasst.

- `scale` {{optional_inline}}
  - : `number`. Der Maßstab, mit dem gerendert werden soll, standardmäßig [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio). Diese Option wurde in Firefox 82 eingeführt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes#type-ImageDetails) von Chromium. Diese Dokumentation ist abgeleitet von [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quellen- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverteilungen von Quellcode müssen den obigen Copyright-Hinweis,
// dieses Bedingungsverzeichnis und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen den obigen
// Copyright-Hinweis, dieses Bedingungsverzeichnis und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der Verteilung
// bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen ohne vorherige schriftliche Genehmigung zur
// Befürwortung oder Bewerbung von Produkten verwendet werden, die von dieser
// Software abgeleitet sind.
//
// DIESE SOFTWARE WIRD VOM COPYRIGHTINHABER UND DEN MITWIRKENDEN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT UND JEGLICHE AUSDRÜCKLICHEN
// ODER STILLSCHWEIGENDEN GARANTIEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN GARANTIEN DER MARKTGÄNGIGKEIT UND
// DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN. IN KEINEM FALL
// HAFTET DER COPYRIGHTINHABER ODER DIE MITWIRKENDEN FÜR DIREKTE,
// INDIREKTE, BEILÄUFIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZGÜTERN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATENVERLUST ODER
// GEWINNAUSFALL; ODER BETRIEBSUNTERBRECHUNGEN) JEDER ART, UNABHÄNGIG VON DER
// URSACHE UND UNTER JEDER HAFTUNGSTHEORIE, SEI ES AUS VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDERWEITIG), DIE SICH AUS DER VERWENDUNG DER SOFTWARE ERGIBT, SELBST WENN
// ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN INFORMIERT WURDE.
-->
