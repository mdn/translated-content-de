---
title: "Testen Sie Ihr Können: JSON"
slug: Learn/JavaScript/Objects/Test_your_skills:_JSON
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu bewerten, ob Sie unser [Arbeiten mit JSON](/de/docs/Learn/JavaScript/Objects/JSON) Artikel verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## JSON 1

Die einzige Aufgabe in diesem Artikel bezieht sich auf den Zugriff auf JSON-Daten und deren Verwendung auf Ihrer Seite. JSON-Daten über einige Mutterkatzen und ihre Kätzchen sind in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) verfügbar. Der JSON-Text wird in die Seite als Textstring geladen und im Parameter `catString` der Funktion `displayCatInfo()` bereitgestellt. Ihre Aufgabe ist es, die fehlenden Teile der Funktion `displayCatInfo()` zu vervollständigen, um:

- Die Namen der drei Mutterkatzen, getrennt durch Kommas, in der Variablen `motherInfo` zu speichern.
- Die Gesamtanzahl der Kätzchen und wie viele männlich und weiblich sind, in der Variablen `kittenInfo` zu speichern.

Die Werte dieser Variablen werden dann in Absätzen auf dem Bildschirm angezeigt.

Einige Hinweise/Fragen:

- Die JSON-Daten werden als Text innerhalb der Funktion `displayCatInfo()` bereitgestellt. Sie müssen sie in JSON parsen, bevor Sie Daten daraus extrahieren können.
- Sie möchten wahrscheinlich eine äußere Schleife verwenden, um durch die Katzen zu iterieren und ihre Namen zur `motherInfo` Variablenzeichenfolge hinzuzufügen, sowie eine innere Schleife, um durch alle Kätzchen zu iterieren, die Gesamtanzahl aller/männlich/weiblich Kätzchen zu summieren und diese Details zur `kittenInfo` Variablenzeichenfolge hinzuzufügen.
- Vor dem letzten Mutterkatzen-Namen sollte ein "und" stehen und danach ein Punkt. Wie stellen Sie sicher, dass dies funktioniert, unabhängig davon, wie viele Katzen im JSON sind?
- Warum stehen die Zeilen `para1.textContent = motherInfo;` und `para2.textContent = kittenInfo;` innerhalb der Funktion `displayCatInfo()` und nicht am Ende des Skripts? Dies hat etwas mit asynchronem Code zu tun.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/json/json1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/json1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
