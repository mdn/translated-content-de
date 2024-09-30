---
title: events
slug: Mozilla/Add-ons/WebExtensions/API/events
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Gewöhnliche Typen, die von APIs verwendet werden, die Ereignisse auslösen.

## Typen

- {{WebExtAPIRef("events.Rule")}}
  - : Beschreibung einer deklarativen Regel zur Verarbeitung von Ereignissen.
- {{WebExtAPIRef("events.Event")}}
  - : Ein Objekt, das das Hinzufügen und Entfernen von Listenern für ein Browser-Ereignis ermöglicht.
- {{WebExtAPIRef("events.UrlFilter")}}
  - : Filtert URLs nach verschiedenen Kriterien. Wenn eines der angegebenen Kriterien übereinstimmt, dann entspricht der gesamte Filter.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events) API. Diese Dokumentation stammt aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.

<!--
// Urheberrecht 2015 Die Chromium Autoren. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitung von Quellcode muss den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitung in binärer Form muss den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software abgeleitet wurden, zu unterstützen oder zu bewerben, ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF STILLSCHWEIGENDE GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK WERDEN ABGELEHNT. UNTER KEINEN UMSTÄNDEN HAFTET DER URHEBERRECHTSINHABER ODER DIE MITWIRKENDEN FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATENVERLUST ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) JEDER ART UND WEISE, DIE DURCH DIE NUTZUNG DIESER SOFTWARE ENTSTEHT, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
