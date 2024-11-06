---
title: declarativeNetRequest.Redirect
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Redirect
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{AddonSidebar}}

Details, die beschreiben, wie eine Umleitung durchgeführt werden soll, als `redirect`-Eigenschaft von einem {{WebExtAPIRef("declarativeNetRequest.RuleAction", "RuleAction")}}. Nur gültig für Umleitungsregeln.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um, und die Anfrage wird wie gewohnt fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht ändert.
> - die Umleitungs-URL ungültig ist (z.B. der Wert von `regexSubstitution` ist keine gültige URL).

## Typ

Werte dieses Typs sind Objekte. Sie enthalten diese Eigenschaften:

- `extensionPath` {{optional_inline}}
  - : Ein `string`. Der Pfad relativ zum Erweiterungsverzeichnis. Sollte mit '/' beginnen. Der Initiator der Anfrage kann die Umleitung nur verfolgen, wenn die Ressource in [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) aufgeführt ist.
- `regexSubstitution` {{optional_inline}}
  - : Ein `string`. Das Ersetzungsmuster für Regeln, die einen `regexFilter` angeben. Der erste Treffer von `regexFilter` innerhalb der URL wird mit diesem Muster ersetzt. Innerhalb von `regexSubstitution` werden rückwärts durch einen Schrägstrich (`\1` bis `\9`) die entsprechenden Gruppierungen eingefügt. `\0` bezieht sich auf den gesamten passenden Text.
- `transform` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}. Die durchzuführenden URL-Transformationen.
- `url` {{optional_inline}}
  - : Ein `string`. Die Umleitungs-URL. Umleitungen zu JavaScript-URLs sind nicht erlaubt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Eine Verbreitung und Nutzung im Quell- und Binärformat, mit oder ohne
// Modifikation, ist unter den folgenden Bedingungen gestattet:
//
//    * Weiterverteilungen von Quellcode müssen den obigen Urheberrechtshinweis,
// diesen Bedingungsnachweis und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen im Binärformat müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien enthalten, die mit der
// Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser Software
// hervorgegangen sind, ohne spezifische vorherige schriftliche Erlaubnis
// zu befürworten oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN
// GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE
// EIGENTÜMER ODER MITWIRKENDEN HAFTBAR FÜR JEDWEDE DIREKTE, INDIREKTE,
// ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF BEREITSTELLUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN;
// NUTZUNGSVERLUST, DATEN ODER GEWINN; ODER GESCHÄFTSUNTERBRECHUNG)
// JEDOCH VERURSACHT UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE,
// SEI ES VERTRAG, STRIKTE HAFTUNG ODER UNERLAUBTE HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERES), DIE IN IRGENDEINER
// WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
