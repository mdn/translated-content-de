---
title: devtools.inspectedWindow
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!NOTE]
> Diese Seite beschreibt die WebExtensions devtools APIs, wie sie in Firefox 54 existieren. Obwohl die APIs auf den [Chrome devtools APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, gibt es noch viele Funktionen, die in Firefox noch nicht implementiert sind und daher hier nicht dokumentiert sind. Um zu sehen, welche Funktionen derzeit fehlen, siehe bitte [Limitations of the devtools APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools#limitations_of_the_devtools_apis).

Die `devtools.inspectedWindow` API ermöglicht es einer devtools-Erweiterung, mit dem Fenster zu interagieren, an das die Entwicklerwerkzeuge angehängt sind.

Wie alle `devtools` APIs ist diese API nur für Code verfügbar, der im Dokument ausgeführt wird, das im [devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json-Schlüssel definiert ist, oder in anderen devtools-Dokumenten, die von der Erweiterung erstellt wurden (wie das Dokument, das von einem Panel gehostet wird, das die Erweiterung erstellt hat). Siehe [Erweiterung der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) für mehr Informationen.

## Eigenschaften

- [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId)
  - : Die ID des Fensters, an das die Entwicklerwerkzeuge angehängt sind.

## Funktionen

- [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval)
  - : Führen Sie JavaScript im Ziel-Fenster aus.
- [`devtools.inspectedWindow.reload()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/reload)
  - : Laden Sie das Dokument des Ziel-Fensters neu.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.devtools.inspectedWindow`](https://developer.chrome.com/docs/extensions/reference/api/devtools/inspectedWindow).

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Redistributions in binärer Form müssen den oben genannten
// Copyright-Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung zusammenhängen, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software abgeleitet
// wurden, zu empfehlen oder zu fördern, ohne eine spezifische vorherige schriftliche
// Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE COPYRIGHT-INHABER
// ODER MITWIRKENDEN HAFTBAR FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN;
// NUTZUNGSVERLUST, DATENVERLUST ODER GEWINNVERLUST; ODER
// BETRIEBSUNTERBRECHUNG) WIE AUCH IMMER VERURSACHT UND UNTER JEGLICHER
// THEORIE DER HAFTUNG, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER
// HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUF
// IRGENDEINE WEISE DURCH DIE VERWENDUNG DIESER SOFTWARE ENTSTEHEN, SELBST
// WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
