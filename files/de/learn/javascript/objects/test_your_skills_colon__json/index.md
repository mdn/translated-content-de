---
title: "Testen Sie Ihre Fähigkeiten: JSON"
slug: Learn/JavaScript/Objects/Test_your_skills:_JSON
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeitentests ist es zu überprüfen, ob Sie unseren Artikel [Arbeiten mit JSON](/de/docs/Learn/JavaScript/Objects/JSON) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn es einen Fehler gibt, wird dieser im Ergebnisbereich der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## JSON 1

Die einzige Aufgabe in diesem Artikel besteht darin, auf JSON-Daten zuzugreifen und diese auf Ihrer Seite zu verwenden. Die JSON-Daten über einige Mutterkatzen und ihre Kätzchen sind in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) verfügbar. Die JSON-Daten werden als Textzeichenfolge in die Seite geladen und im `catString`-Parameter der `displayCatInfo()`-Funktion bereitgestellt. Ihre Aufgabe ist es, die fehlenden Teile der `displayCatInfo()`-Funktion auszufüllen, um zu speichern:

- Die Namen der drei Mutterkatzen, durch Kommata getrennt, in der Variablen `motherInfo`.
- Die Gesamtanzahl der Kätzchen und wie viele männlich bzw. weiblich sind, in der Variablen `kittenInfo`.

Die Werte dieser Variablen werden dann innerhalb von Absätzen auf dem Bildschirm angezeigt.

Einige Hinweise/Fragen:

- Die JSON-Daten werden als Text innerhalb der `displayCatInfo()`-Funktion bereitgestellt. Sie müssen diese in JSON parsen, bevor Sie Daten daraus extrahieren können.
- Sie möchten wahrscheinlich eine äußere Schleife verwenden, um durch die Katzen zu iterieren und ihre Namen der `motherInfo`-Variablenzeichenfolge hinzuzufügen, und eine innere Schleife, um alle Kätzchen zu durchlaufen, die Gesamtzahl der männlichen/weiblichen Kätzchen zu addieren und diese Details der `kittenInfo`-Variablenzeichenfolge hinzuzufügen.
- Der letzte Mutterkatzenname sollte ein "und" davor und einen Punkt danach haben. Wie stellen Sie sicher, dass dies funktioniert, unabhängig davon, wie viele Katzen im JSON sind?
- Warum befinden sich die Zeilen `para1.textContent = motherInfo;` und `para2.textContent = kittenInfo;` innerhalb der `displayCatInfo()`-Funktion und nicht am Ende des Skripts? Dies hat etwas mit asynchronem Code zu tun.

Versuchen Sie den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/json/json1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/json1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
