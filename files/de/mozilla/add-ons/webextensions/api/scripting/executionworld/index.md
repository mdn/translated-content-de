---
title: scripting.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Bestimmt die Ausführungsumgebung eines Skripts, das mit {{WebExtAPIRef("scripting.executeScript()")}} injiziert oder mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert wird.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `ISOLATED`

  Die Standard-Ausführungsumgebung für [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).
  Diese Umgebung ist vom Kontext der Seite isoliert: Während sie dasselbe Dokument teilen, unterscheiden sich die globalen Bereiche und verfügbaren APIs.

- `MAIN`

  Die Ausführungsumgebung der Webseite. Diese Umgebung wird ohne Isolation mit der Webseite geteilt.
  Skripte in dieser Umgebung haben keinen Zugriff auf APIs, die nur für Inhalts-Skripte verfügbar sind.

  > [!WARNING]
  > Aufgrund der fehlenden Isolation kann die Webseite den ausgeführten Code erkennen und stören.
  > Verwenden Sie die `MAIN`-Umgebung nur, wenn es akzeptabel ist, dass Webseiten die Logik oder Daten lesen, darauf zugreifen oder ändern, die durch den ausgeführten Code fließen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-ExecutionWorld) API von Chromium.
