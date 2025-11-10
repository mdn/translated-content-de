---
title: scripting.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Legt die Ausführungsumgebung eines mit {{WebExtAPIRef("scripting.executeScript()")}} injizierten Skripts fest oder eines Skripts, das mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert wurde.

## Typ

Die Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `ISOLATED`

  Die Standardausführungsumgebung für [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).
  Diese Umgebung ist vom Kontext der Seite isoliert: Obwohl sie dasselbe Dokument teilen, unterscheiden sich die globalen Bereiche und verfügbaren APIs.

- `MAIN`

  Die Ausführungsumgebung der Webseite. Diese Umgebung wird ohne Isolation mit der Webseite geteilt.
  Skripte in dieser Umgebung haben keinen Zugriff auf APIs, die nur für Inhalts-Skripte verfügbar sind.

  > [!WARNING]
  > Aufgrund der fehlenden Isolation kann die Webseite den ausgeführten Code erkennen und beeinflussen.
  > Verwenden Sie die `MAIN`-Umgebung nur, wenn es akzeptabel ist, dass Webseiten die Logik oder Daten, die durch den ausgeführten Code fließen, lesen, darauf zugreifen oder sie modifizieren können.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-ExecutionWorld)-API von Chromium.
