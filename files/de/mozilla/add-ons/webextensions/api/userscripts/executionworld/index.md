---
title: userScripts.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Die Ausführungsumgebung für ein Skript, das mit {{WebExtAPIRef("userScripts.register()")}}
oder {{WebExtAPIRef("userScripts.update()")}} injiziert wird.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `MAIN`

  Die Ausführungsumgebung der Webseite. Diese Umgebung wird ohne Isolierung mit der Webseite geteilt. Skripte in dieser Umgebung haben keinen Zugriff auf die APIs, die nur für Inhaltsskripte verfügbar sind.

  > [!WARNING]
  > Webseiten können den ausgeführten Code aufgrund der fehlenden Isolierung erkennen und beeinträchtigen. Verwenden Sie daher die `MAIN`-Welt nur, wenn es akzeptabel ist, dass Webseiten die Logik oder die Daten, die durch den ausgeführten Code fließen, lesen, darauf zugreifen oder diese ändern können.

- `USER_SCRIPT`

  Die Standard-Ausführungsumgebung für Benutzer-Skripte. Diese Umgebung ist vom Kontext der Seite und anderen `USER_SCRIPT`-Welten isoliert. Erweiterungs-APIs sind nicht verfügbar, im Gegensatz zu den [`ISOLATED`-Welten von Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld). Mehrere `USER_SCRIPT`-Welten können existieren, wenn Skripte mit `worldId` registriert werden. {{WebExtAPIRef("userScripts.configureWorld()")}} wird verwendet, um die Konfiguration einer `USER_SCRIPT`-Welt zu ändern.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
