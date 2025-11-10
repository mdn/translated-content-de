---
title: userScripts.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Ausführungsumgebung für ein Skript, das mit {{WebExtAPIRef("userScripts.register()")}}
oder {{WebExtAPIRef("userScripts.update()")}} eingefügt wurde.

## Typ

Werte dieses Typs sind ein String. Mögliche Werte sind:

- `MAIN`

  Die Ausführungsumgebung der Webseite. Diese Umgebung wird mit der Webseite ohne Isolation geteilt. Skripte in dieser Umgebung haben keinen Zugriff auf die APIs, die nur für Inhaltsskripte verfügbar sind.

  > [!WARNING]
  > Webseiten können den ausgeführten Code aufgrund der fehlenden Isolation erkennen und beeinträchtigen. Verwenden Sie daher die `MAIN`-Welt nur, wenn es akzeptabel ist, dass Webseiten die Logik oder Daten, die durch den ausgeführten Code fließen, lesen, darauf zugreifen oder sie ändern können.

- `USER_SCRIPT`

  Die Standard-Ausführungsumgebung für Benutzerskripte. Diese Umgebung ist vom Kontext der Seite und anderen `USER_SCRIPT`-Welten isoliert. Erweiterungs-APIs sind nicht verfügbar, im Gegensatz zu den [`ISOLATED`-Welten von Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld). Mehrere `USER_SCRIPT`-Welten können existieren, wenn Skripte mit `worldId` registriert werden. {{WebExtAPIRef("userScripts.configureWorld()")}} wird verwendet, um die Konfiguration einer `USER_SCRIPT`-Welt zu ändern.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
