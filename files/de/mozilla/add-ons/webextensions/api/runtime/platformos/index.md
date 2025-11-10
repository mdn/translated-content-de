---
title: runtime.PlatformOs
slug: Mozilla/Add-ons/WebExtensions/API/runtime/PlatformOs
l10n:
  sourceCommit: df570fdf78db5cb13265b2dcfa1cdc73a0b66318
---

Das Betriebssystem, auf dem der Browser läuft.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `"mac"`
  - : Das zugrunde liegende Betriebssystem ist macOS.
- `"ios"`
  - : Das zugrunde liegende Betriebssystem ist iOS/iPadOS.
- `"win"`
  - : Das zugrunde liegende Betriebssystem ist Windows.
- `"android"`
  - : Das zugrunde liegende Betriebssystem ist Android.
- `"cros"`
  - : Das zugrunde liegende Betriebssystem ist ChromeOS.
- `"linux"`
  - : Das zugrunde liegende Betriebssystem ist Linux.
- `"openbsd"`
  - : Das zugrunde liegende Betriebssystem ist Open/FreeBSD.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-PlatformOs) API von Chromium. Diese Dokumentation ist aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Copyright-Vermerk,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Redistributions in binärer Form müssen den obigen
// Copyright-Vermerk, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder in anderen Materialien,
// die mit der Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen der
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser
// Software abgeleitet wurden, ohne spezifische vorherige schriftliche
// Genehmigung zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF,
// DIE STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK WERDEN ABGELEHNT. IN KEINEM FALL HAFTET DER COPYRIGHT-
// INHABER ODER DIE MITWIRKENDEN FÜR SCHÄDEN IRGENDEINER ART, EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIREKTE, INDIREKTE, BEILÄUFIG ENTSTANDENE,
// BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF BESCHAFFUNG VON ERSATZGÜTERN ODER -DIENSTLEISTUNGEN;
// NUTZUNGSVERLUST, DATENVERLUST ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG)
// UNABHÄNGIG VON DER URSACHE UND JEGLICHER HAFTUNGSTHEORIE, OB VERTRAG,
// VERSCHULDENSHAFTE HANDLUNG ODER UNERLAUBTE HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER NUTZUNG
// DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT VON SCHÄDEN
// HINGEWIESEN WURDE.
-->
