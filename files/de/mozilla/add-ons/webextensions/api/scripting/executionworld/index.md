---
title: scripting.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Gibt die Ausführungsumgebung eines Skripts an, das mit {{WebExtAPIRef("scripting.executeScript()")}} injiziert oder mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert wurde.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `ISOLATED`

  Die Standard-Ausführungsumgebung für [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).
  Diese Umgebung ist von dem Kontext der Seite isoliert: Während sie dasselbe Dokument teilen, unterscheiden sich die globalen Geltungsbereiche und die verfügbaren APIs.

- `MAIN`

  Die Ausführungsumgebung der Webseite. Diese Umgebung wird mit der Webseite geteilt, ohne Isolation.
  Skripte in dieser Umgebung haben keinen Zugriff auf APIs, die nur für Inhalts-Skripte verfügbar sind.

  > [!WARNING]
  > Aufgrund des Fehlens von Isolation kann die Webseite den ausgeführten Code erkennen und beeinträchtigen.
  > Verwenden Sie das `MAIN`-Ausführungsumfeld nicht, es sei denn, es ist akzeptabel, dass Webseiten die Logik oder Daten, die durch den ausgeführten Code fließen, lesen, darauf zugreifen oder diese ändern können.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-ExecutionWorld) API.
