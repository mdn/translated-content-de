---
title: webRequest.HttpHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/HttpHeaders
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein Array von HTTP-Headern. Jeder Header wird als Objekt mit zwei Eigenschaften dargestellt: `name` und entweder `value` oder `binaryValue`.

## Typ

Ein `array` von `object`s. Jedes Objekt hat die folgenden Eigenschaften:

- `name`
  - : `string`. Name des HTTP-Headers.
- `value` {{optional_inline}}
  - : `string`. Wert des HTTP-Headers, wenn er durch UTF-8 dargestellt werden kann. Entweder diese Eigenschaft oder `binaryValue` muss vorhanden sein.
- `binaryValue` {{optional_inline}}
  - : `array` von `integer`. Wert des HTTP-Headers, wenn er nicht durch UTF-8 dargestellt werden kann, dargestellt als Bytes (0..255). Entweder diese Eigenschaft oder `value` muss vorhanden sein.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-HttpHeaders) API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Copyright-
// Hinweis, diese Bedingungen und den folgenden Haftungsausschluss
// beibehalten.
//    * Redistributions in binärer Form müssen den obigen
// Copyright-Hinweis, diese Liste der Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// beibehalten, die mit der Verteilung bereitgestellt werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte zu unterstützen
// oder zu bewerben, die aus dieser Software abgeleitet sind, ohne
// vorherige ausdrückliche schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER
// IMPLIZIERTE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER
// MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND
// AUSGESCHLOSSEN. IN KEINEM FALL SOLLEN DIE COPYRIGHTINHABER ODER
// MITWIRKENDEN FÜR DIREKTE, INDIREKTE, BEILÄUFIG ENTSTANDENE,
// BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZGÜTERN ODER
// DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN- ODER
// GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) HAFTBAR
// GEMACHT WERDEN, WIE AUCH IMMER VERURSACHT UND UNABHÄNGIG VON DER
// THEORIE DER HAFTUNG, OB IN VERTRAGSHAFTUNG, STRIKTER HAFTUNG ODER
// DELIKTHAFTUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG),
// SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WORDEN
// IST.
-->
