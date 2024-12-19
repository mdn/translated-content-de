---
title: "Testen Sie Ihre Fähigkeiten: JSON"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_JSON
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Das Ziel dieses Skill-Tests ist es, zu beurteilen, ob Sie unseren Artikel [Arbeiten mit JSON](/de/docs/Learn_web_development/Core/Scripting/JSON) verstanden haben.

> [!NOTE]
> Sie können Lösungsansätze ausprobieren, indem Sie den Code herunterladen und ihn in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## JSON 1

Die einzige Aufgabe in diesem Artikel betrifft den Zugriff auf JSON-Daten und deren Verwendung auf Ihrer Seite. JSON-Daten über einige Katzenmütter und ihre Kätzchen sind in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) verfügbar. Das JSON wird als Textzeichenkette in die Seite geladen und im Parameter `catString` der Funktion `displayCatInfo()` zur Verfügung gestellt. Ihre Aufgabe besteht darin, die fehlenden Teile der Funktion `displayCatInfo()` auszufüllen, um Folgendes zu speichern:

- Die Namen der drei Katzenmütter, durch Kommas getrennt, in der Variable `motherInfo`.
- Die Gesamtzahl der Kätzchen sowie die Anzahl der männlichen und weiblichen Kätzchen in der Variable `kittenInfo`.

Die Werte dieser Variablen werden dann innerhalb von Absätzen auf dem Bildschirm ausgegeben.

Einige Hinweise/Fragen:

- Die JSON-Daten werden als Text innerhalb der Funktion `displayCatInfo()` bereitgestellt. Sie müssen es in JSON umwandeln, bevor Sie Daten daraus entnehmen können.
- Sie möchten wahrscheinlich eine äußere Schleife verwenden, um durch die Katzen zu schleifen und ihre Namen der Zeichenkette `motherInfo` hinzuzufügen, und eine innere Schleife, um durch alle Kätzchen zu schleifen, die Gesamtzahl aller/männlichen/weiblichen Kätzchen zu addieren und diese Details zur Zeichenkette `kittenInfo` hinzuzufügen.
- Der letzte Katzenmutter-Name sollte ein "und" davor und einen Punkt dahinter haben. Wie stellen Sie sicher, dass dies funktioniert, unabhängig davon, wie viele Katzen im JSON sind?
- Warum befinden sich die Zeilen `para1.textContent = motherInfo;` und `para2.textContent = kittenInfo;` innerhalb der Funktion `displayCatInfo()`, und nicht am Ende des Skripts? Dies hat etwas mit asynchronem Code zu tun.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/json/json1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/json1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
