---
title: scripting.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt die Ausführungsumgebung eines Skripts fest, das mit {{WebExtAPIRef("scripting.executeScript()")}} injiziert oder mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert wurde.

## Typ

Die Werte dieses Typs sind Strings. Mögliche Werte sind:

- `ISOLATED`

  Die Standard-Ausführungsumgebung für [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts). Diese Umgebung ist vom Kontext der Seite isoliert: Obwohl sie dasselbe Dokument teilen, unterscheiden sich die globalen Geltungsbereiche und verfügbaren APIs.

- `MAIN`

  Die Ausführungsumgebung der Webseite. Diese Umgebung wird ohne Isolierung mit der Webseite geteilt.
  Skripte in dieser Umgebung haben keinen Zugriff auf APIs, die nur für Inhalts-Skripte verfügbar sind.

  > [!WARNING]
  > Aufgrund des Fehlens von Isolierung kann die Webseite den ausgeführten Code erkennen und beeinträchtigen.
  > Verwenden Sie die `MAIN`-Welt nicht, es sei denn, es ist akzeptabel, dass Webseiten die Logik oder Daten, die durch den ausgeführten Code fließen, lesen, darauf zugreifen oder sie verändern können.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-ExecutionWorld) API von Chromium.
