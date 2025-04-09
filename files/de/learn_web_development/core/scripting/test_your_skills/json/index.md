---
title: "Testen Sie Ihre Fähigkeiten: JSON"
short-title: JSON
slug: Learn_web_development/Core/Scripting/Test_your_skills/JSON
l10n:
  sourceCommit: 79f1568f8916bd2fa58653f37cad2e66e746f12f
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel [Arbeiten mit JSON](/de/docs/Learn_web_development/Core/Scripting/JSON) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird dieser im Ergebnisbereich der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## JSON 1

Die einzige Aufgabe in diesem Artikel besteht darin, JSON-Daten zuzugreifen und sie auf Ihrer Seite zu verwenden. JSON-Daten über einige Mutterkatzen und ihre Kätzchen sind in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) verfügbar. Das JSON wird als Textzeichenkette in die Seite geladen und im `catString`-Parameter der Funktion `displayCatInfo()` bereitgestellt. Ihre Aufgabe ist es, die fehlenden Teile der Funktion `displayCatInfo()` auszufüllen, um Folgendes zu speichern:

- Die Namen der drei Mutterkatzen, durch Kommata getrennt, in der Variablen `motherInfo`.
- Die Gesamtzahl der Kätzchen sowie wie viele männlich und wie viele weiblich sind, in der Variablen `kittenInfo`.

Die Werte dieser Variablen werden dann innerhalb von Absätzen auf dem Bildschirm angezeigt.

Einige Hinweise/Fragen:

- Die JSON-Daten werden als Text innerhalb der Funktion `displayCatInfo()` bereitgestellt. Sie müssen sie in JSON parsen, bevor Sie Daten daraus entnehmen können.
- Sie möchten wahrscheinlich eine äußere Schleife verwenden, um durch die Katzen zu schleifen und ihre Namen zur Zeichenkette `motherInfo` hinzuzufügen, und eine innere Schleife, um durch alle Kätzchen zu schleifen, die Gesamtzahl der gesamten/männlichen/weiblichen Kätzchen zu berechnen und diese Details zur Zeichenkette `kittenInfo` hinzuzufügen.
- Der letzte Mutterkatzenname sollte ein "und" davor und einen Punkt danach haben. Wie stellen Sie sicher, dass dies funktioniert, egal wie viele Katzen im JSON sind?
- Warum sind die Zeilen `para1.textContent = motherInfo;` und `para2.textContent = kittenInfo;` innerhalb der Funktion `displayCatInfo()` und nicht am Ende des Skripts? Dies hat mit asynchronem Code zu tun.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu rekonstruieren:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/json/json1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/json1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.
