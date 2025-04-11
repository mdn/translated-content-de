---
title: "Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills:_Object-oriented_JavaScript
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren Artikel [Klassen in JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn es einen Fehler in Ihrem Code gibt, wird er im Ergebnis-Panel auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## OOJS 1

In dieser Aufgabe stellen wir Ihnen den Anfang einer Definition für eine `Shape`-Klasse zur Verfügung. Sie hat drei Eigenschaften: `name`, `sides` und `sideLength`. Diese Klasse modelliert nur Formen, bei denen alle Seiten gleich lang sind, wie ein Quadrat oder ein gleichseitiges Dreieck.

Wir hätten gerne, dass Sie:

- Einen Konstruktor zu dieser Klasse hinzufügen. Der Konstruktor nimmt Argumente für die Eigenschaften `name`, `sides` und `sideLength` entgegen und initialisiert diese.
- Eine neue Methode `calcPerimeter()` zur Klasse hinzufügen, die den Umfang (die Länge des äußeren Randes der Form) berechnet und das Ergebnis in die Konsole protokolliert.
- Eine neue Instanz der `Shape`-Klasse mit dem Namen `square` erstellen. Geben Sie ihr den `name` `square`, `4` `sides` und eine `sideLength` von `5`.
- Ihre `calcPerimeter()`-Methode für die Instanz aufrufen, um zu sehen, ob sie das berechnete Ergebnis wie erwartet in der Browser-Konsole protokolliert.
- Eine neue Instanz von `Shape` namens `triangle` mit dem `name` `triangle`, `3` `sides` und einer `sideLength` von `3` erstellen.
- `triangle.calcPerimeter()` aufrufen, um zu überprüfen, ob es funktioniert.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Startpunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## OOJS 2

Als nächstes möchten wir, dass Sie eine `Square`-Klasse erstellen, die von `Shape` erbt und eine `calcArea()`-Methode hinzufügt, die die Fläche des Quadrats berechnet. Stellen Sie außerdem den Konstruktor so ein, dass die `name`-Eigenschaft von `Square`-Objektinstanzen automatisch auf `square` festgelegt wird und die `sides`-Eigenschaft automatisch auf `4`. Beim Aufruf des Konstruktors sollten Sie daher nur die `sideLength`-Eigenschaft angeben müssen.

Erstellen Sie eine Instanz der `Square`-Klasse namens `square` mit passenden Eigenschaftswerten und rufen Sie deren `calcPerimeter()`- und `calcArea()`-Methoden auf, um zu zeigen, dass es funktioniert.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Startpunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
