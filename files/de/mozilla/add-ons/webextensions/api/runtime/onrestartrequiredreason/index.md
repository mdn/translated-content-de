---
title: runtime.OnRestartRequiredReason
slug: Mozilla/Add-ons/WebExtensions/API/runtime/OnRestartRequiredReason
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Grund, warum das {{WebExtAPIRef("runtime.onRestartRequired", "onRestartRequired")}}-Ereignis ausgelöst wird.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `"app_update"`: Die Anwendung wird auf eine neuere Version aktualisiert.
- `"os_update"`: Der Browser/das Betriebssystem wird auf eine neuere Version aktualisiert.
- `"periodic"`: Das System lief länger als die in der Unternehmensrichtlinie festgelegte erlaubte Betriebszeit.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-OnRestartRequiredReason) API. Diese Dokumentation leitet sich von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code ab.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss enthalten.
//    * Redistributions in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// enthalten, die mit der Verteilung bereitgestellt werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet sind, zu unterstützen oder zu bewerben, ohne
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER
// STILLSCHWEIGENDE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER
// MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN
// ABGELEHNT. IN KEINEM FALL SIND DIE COPYRIGHTINHABER ODER
// MITWIRKENDEN HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, BESCHAFFUNG VON
// ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL,
// DATENVERLUST ODER GEWINNAUSFALL; ODER GESCHÄFTSUNTERBRECHUNG)
// JEDOCH VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB IN
// VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG) AUS DER
// NUTZUNG DIESER SOFTWARE HERVORGEGANGEN, SELBST WENN ÜBER DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN INFORMIERT WURDE.
-->
