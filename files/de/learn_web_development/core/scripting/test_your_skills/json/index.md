---
title: "Testen Sie Ihre Fähigkeiten: JSON"
short-title: JSON
slug: Learn_web_development/Core/Scripting/Test_your_skills/JSON
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Das Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel [Arbeiten mit JSON](/de/docs/Learn_web_development/Core/Scripting/JSON) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Falls ein Fehler auftritt, wird er im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## JSON 1

Die einzige Aufgabe in diesem Artikel betrifft den Zugriff auf JSON-Daten und deren Verwendung auf Ihrer Seite. JSON-Daten über einige Mutterkatzen und ihre Kätzchen sind in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) verfügbar. Das JSON wird als Textzeichenfolge in die Seite geladen und im Parameter `catString` der Funktion `displayCatInfo()` bereitgestellt. Ihre Aufgabe ist es, die fehlenden Teile der Funktion `displayCatInfo()` auszufüllen, um Folgendes zu speichern:

- Die Namen der drei Mutterkatzen, getrennt durch Kommas, in der Variable `motherInfo`.
- Die Gesamtzahl der Kätzchen und wie viele davon männlich und weiblich sind, in der Variable `kittenInfo`.

Die Werte dieser Variablen werden dann innerhalb von Absätzen auf dem Bildschirm angezeigt.

Einige Hinweise/Fragen:

- Die JSON-Daten werden als Text innerhalb der Funktion `displayCatInfo()` bereitgestellt. Sie müssen sie in JSON parsen, bevor Sie Daten daraus erhalten können.
- Sie wollen wahrscheinlich eine äußere Schleife verwenden, um durch die Katzen zu schleifen und ihre Namen zur Zeichenkette der Variable `motherInfo` hinzuzufügen, und eine innere Schleife, um durch alle Kätzchen zu schleifen, die Gesamtzahl aller/männlich/weiblich Kätzchen zu addieren und diese Details zur Zeichenkette der Variable `kittenInfo` hinzuzufügen.
- Der letzte Mutterkatzenname sollte ein "und" davor haben und mit einem Punkt enden. Wie stellen Sie sicher, dass dies funktioniert, egal wie viele Katzen im JSON sind?
- Warum befinden sich die Zeilen `para1.textContent = motherInfo;` und `para2.textContent = kittenInfo;` innerhalb der Funktion `displayCatInfo()` und nicht am Ende des Skripts? Dies hat etwas mit asynchronem Code zu tun.

Versuchen Sie den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/json/json1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/json1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.
