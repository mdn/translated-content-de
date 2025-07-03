---
title: "Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript"
short-title: Objektorientiertes JavaScript
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren Artikel [Klassen in JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
> Wenn ein Fehler in Ihrem Code auftritt, wird er im Ergebnispanel auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## OOJS 1

In dieser Aufgabe geben wir Ihnen den Beginn einer Definition für eine `Shape`-Klasse. Sie hat drei Eigenschaften: `name`, `sides` und `sideLength`. Diese Klasse modelliert nur Formen, bei denen alle Seiten die gleiche Länge haben, wie z. B. ein Quadrat oder ein gleichseitiges Dreieck.

Wir möchten, dass Sie:

- Einen Konstruktor zu dieser Klasse hinzufügen. Der Konstruktor nimmt Argumente für die Eigenschaften `name`, `sides` und `sideLength` und initialisiert sie.
- Eine neue Methode `calcPerimeter()` zur Klasse hinzufügen, die ihren Umfang (die Länge der Außenkante der Form) berechnet und das Ergebnis in die Konsole protokolliert.
- Eine neue Instanz der `Shape`-Klasse namens `square` erstellen. Geben Sie ihr den `name` `square`, `4` `sides` und eine `sideLength` von `5`.
- Ihre `calcPerimeter()`-Methode auf der Instanz aufrufen, um zu sehen, ob das Berechnungsergebnis wie erwartet in der Konsole des Browsers protokolliert wird.
- Eine neue Instanz von `Shape` namens `triangle` erstellen, mit einem `name` `triangle`, `3` `sides` und einer `sideLength` von `3`.
- `triangle.calcPerimeter()` aufrufen, um zu überprüfen, ob es einwandfrei funktioniert.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## OOJS 2

Als nächstes möchten wir, dass Sie eine `Square`-Klasse erstellen, die von `Shape` erbt und eine `calcArea()`-Methode hinzufügt, die die Fläche des Quadrats berechnet. Richten Sie auch den Konstruktor so ein, dass die `name`-Eigenschaft von `Square`-Objektinstanzen automatisch auf `square` gesetzt wird und die `sides`-Eigenschaft automatisch auf `4` gesetzt wird. Beim Aufrufen des Konstruktors sollten Sie daher nur die `sideLength`-Eigenschaft angeben müssen.

Erstellen Sie eine Instanz der `Square`-Klasse namens `square` mit geeigneten Eigenschaftswerten und rufen Sie die Methoden `calcPerimeter()` und `calcArea()` auf, um zu zeigen, dass es einwandfrei funktioniert.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
