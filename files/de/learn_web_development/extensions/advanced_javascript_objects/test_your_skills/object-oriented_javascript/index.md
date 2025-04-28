---
title: "Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript"
short-title: Objektorientiertes JavaScript
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript
l10n:
  sourceCommit: 93f54b6e1fdfef1375233abb265f101bd6866f99
---

Das Ziel dieses Fähigkeitstests ist zu bewerten, ob Sie unseren Artikel [Klassen in JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn es einen Fehler in Ihrem Code gibt, wird dieser im Ergebnispanel auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## OOJS 1

In dieser Aufgabe stellen wir Ihnen den Anfang einer Definition für eine `Shape`-Klasse zur Verfügung. Sie hat drei Eigenschaften: `name`, `sides` und `sideLength`. Diese Klasse modelliert nur Formen, bei denen alle Seiten die gleiche Länge haben, wie ein Quadrat oder ein gleichseitiges Dreieck.

Wir möchten, dass Sie:

- Einen Konstruktor zu dieser Klasse hinzufügen. Der Konstruktor nimmt Argumente für die Eigenschaften `name`, `sides` und `sideLength` entgegen und initialisiert diese.
- Der Klasse eine neue Methode `calcPerimeter()` hinzufügen, die den Umfang (die Länge der äußeren Kante der Form) berechnet und das Ergebnis in die Konsole protokolliert.
- Eine neue Instanz der `Shape`-Klasse namens `square` erstellen. Geben Sie ihr einen `name` von `square`, `4` `sides` und eine `sideLength` von `5`.
- Ihre `calcPerimeter()`-Methode auf die Instanz aufrufen, um zu sehen, ob sie das Berechnungsergebnis wie erwartet in die Konsole des Browsers protokolliert.
- Eine neue Instanz von `Shape` namens `triangle` erstellen, mit einem `name` von `triangle`, `3` `sides` und einer `sideLength` von `3`.
- `triangle.calcPerimeter()` aufrufen, um zu überprüfen, ob es funktioniert.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## OOJS 2

Als nächstes möchten wir, dass Sie eine `Square`-Klasse erstellen, die von `Shape` erbt und eine `calcArea()`-Methode hinzufügt, die den Flächeninhalt des Quadrats berechnet. Richten Sie auch den Konstruktor so ein, dass die `name`-Eigenschaft von `Square`-Objektinstanzen automatisch auf `square` gesetzt wird und die `sides`-Eigenschaft automatisch auf `4` gesetzt wird. Beim Aufrufen des Konstruktors sollten Sie daher nur die `sideLength`-Eigenschaft bereitstellen müssen.

Erstellen Sie eine Instanz der `Square`-Klasse namens `square` mit geeigneten Eigenschaftswerten und rufen Sie ihre `calcPerimeter()`- und `calcArea()`-Methoden auf, um zu zeigen, dass es funktioniert.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
