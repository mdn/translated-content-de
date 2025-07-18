---
title: devtools.panels.ExtensionSidebarPane
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Das Objekt `ExtensionSidebarPane` repräsentiert ein Paneel, das eine Erweiterung zur Seitenleiste im HTML/CSS-Inspektor des Browsers hinzugefügt hat.

![Neues Paneel mit dem Titel "My pane", das ein JSON-Objekt anzeigt](inspector-sidebar.png)

Um ein `ExtensionSidebarPane` zu erstellen, rufen Sie die Funktion [`browser.devtools.panels.elements.createSidebarPane()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane) auf.

## Funktionen

- [`devtools.panels.ExtensionSidebarPane.setExpression()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setExpression)
  - : Bewertet einen JavaScript-Ausdruck in der Webseite, die vom Inspektor untersucht wird. Das Ergebnis wird im Seitenleistenpaneel angezeigt.
- [`devtools.panels.ExtensionSidebarPane.setObject()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setObject)
  - : Setzt ein JSON-Objekt, das im Seitenleistenpaneel angezeigt wird.
- [`devtools.panels.ExtensionSidebarPane.setPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setPage)
  - : Lädt die Seite, die von der angegebenen URL angegeben wird.

## Ereignisse

- [`devtools.panels.ExtensionSidebarPane.onShown`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onShown)
  - : Wird ausgelöst, wenn das Seitenleistenpaneel angezeigt wird.
- [`devtools.panels.ExtensionSidebarPane.onHidden`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onHidden)
  - : Wird ausgelöst, wenn das Seitenleistenpaneel ausgeblendet wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API von Chromium.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Source-Code müssen den obigen Copyright-
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// beibehalten.
//    * Redistributions in binärer Form müssen den obigen Copyright-
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung geliefert werden, beibehalten.
//    * Weder der Name der Google Inc. noch die Namen ihrer
// Mitwirkenden dürfen dazu verwendet werden, Produkte, die von dieser
// Software abgeleitet sind, zu unterstützen oder zu bewerben, ohne
// vorherige ausdrückliche schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITARBEITERN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER
// STILLSCHWEIGENDE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER
// MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN
// ABGELEHNT. IN KEINEM FALL HAFTET DER COPYRIGHT-INHABER ODER DIE
// MITARBEITER FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG VON ERSATZWAREN ODER
// DIENSTLEISTUNGEN; NUTZUNGSVERLUST; DATENVERLUST; ODER ENTGANGENEM
// GEWINN; ODER GESCHÄFTSUNTERBRECHUNG) JEDER ART, WIE AUCH IMMER
// VERURSACHT UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB VERTRAG,
// STRIKTE HAFTUNG ODER UNERLAUBTE HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER
// NUTZUNG DER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
