---
title: Datenschutz
slug: Mozilla/Add-ons/WebExtensions/API/privacy
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Zugriff auf verschiedene datenschutzbezogene Browser-Einstellungen und deren Modifikation.

Um die Datenschutz-API zu verwenden, müssen Sie die "privacy" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) besitzen.

## Eigenschaften

- {{WebExtAPIRef("privacy.network")}}
  - : Zugriff auf und Modifikation von Datenschutzeinstellungen, die das Netzwerk betreffen.
- {{WebExtAPIRef("privacy.services")}}
  - : Zugriff auf und Modifikation von Datenschutzeinstellungen, die die vom Browser oder Drittparteien bereitgestellten Dienste betreffen.
- {{WebExtAPIRef("privacy.websites")}}
  - : Zugriff auf und Modifikation von Datenschutzeinstellungen, die das Verhalten von Websites betreffen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) API von Chromium.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Eine Weiterverbreitung und Nutzung in Form von Quell- und Binärformaten, mit oder ohne
// Modifikation, ist unter der Bedingung gestattet, dass die folgenden Bedingungen
// erfüllt werden:
//
//    * Der obige Urheberrechtshinweis, diese Liste der Bedingungen und der folgende
// Haftungsausschluss müssen in allen Kopien oder bedeutenden Teilen der Software
// enthalten sein.
//    * Der Name Google Inc. oder die Namen seiner Beitragenden dürfen nicht verwendet werden,
// um Produkte, die aus dieser Software abgeleitet wurden, zu bewerben oder zu fördern,
// ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VOM COPYRIGHT-INHABER UND DEN BEITRAGENDEN
// "WIE BESEHEN" UND JEGLICHE AUSDRÜCKLICHEN ODER STILLSCHWEIGENDEN
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BEGRENZT AUF DIE
// STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER HANDELSÜBLICHKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL HAFTEN DIE
// COPYRIGHT-INHABER ODER BEITRAGENDEN FÜR JEGLICHE DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN;
// NUTZUNGSAUSFALL, DATEN ODER GEWINNE; ODER GESCHÄFTSUNTERBRECHUNG) WIE AUCH IMMER VERURSACHT
// UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG ODER
// UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE
// AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
