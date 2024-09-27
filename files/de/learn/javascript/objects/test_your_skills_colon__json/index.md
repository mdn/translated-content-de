---
title: "Testen Sie Ihre Fähigkeiten: JSON"
slug: Learn/JavaScript/Objects/Test_your_skills:_JSON
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie unseren Artikel [Arbeiten mit JSON](/de/docs/Learn/JavaScript/Objects/JSON) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen. Wenn ein Fehler auftritt, wird er im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## JSON 1

Die einzige Aufgabe in diesem Artikel betrifft den Zugriff auf JSON-Daten und deren Verwendung auf Ihrer Seite. JSON-Daten über einige Mutterkatzen und ihre Kätzchen sind in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) verfügbar. Das JSON wird als Textzeichenfolge in die Seite geladen und im `catString`-Parameter der `displayCatInfo()`-Funktion bereitgestellt. Ihre Aufgabe ist es, die fehlenden Teile der `displayCatInfo()`-Funktion auszufüllen, um zu speichern:

- Die Namen der drei Mutterkatzen, durch Kommas getrennt, in der Variablen `motherInfo`.
- Die Gesamtzahl der Kätzchen und wie viele männlich und weiblich sind, in der Variablen `kittenInfo`.

Die Werte dieser Variablen werden dann auf dem Bildschirm innerhalb von Absätzen angezeigt.

Einige Hinweise/Fragen:

- Die JSON-Daten werden als Text innerhalb der `displayCatInfo()`-Funktion bereitgestellt. Sie müssen diese in JSON parsen, bevor Sie irgendwelche Daten daraus extrahieren können.
- Sie werden wahrscheinlich eine äußere Schleife verwenden wollen, um durch die Katzen zu schleifen und deren Namen zur Zeichenkette `motherInfo` hinzuzufügen, und eine innere Schleife, um durch alle Kätzchen zu schleifen, die Gesamtzahl der Kittens/männlichen/weiblichen Kätzchen zusammenzuzählen und diese Details zur Zeichenkette `kittenInfo` hinzuzufügen.
- Der letzte Name der Mutterkatze sollte ein „und“ davor haben, sowie einen Punkt danach. Wie stellen Sie sicher, dass dies funktioniert, unabhängig davon, wie viele Katzen im JSON sind?
- Warum sind die Zeilen `para1.textContent = motherInfo;` und `para2.textContent = kittenInfo;` innerhalb der `displayCatInfo()`-Funktion und nicht am Ende des Skripts? Dies hat etwas mit asynchronem Code zu tun.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/json/json1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/json1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
