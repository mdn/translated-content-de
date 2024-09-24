---
title: "Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript"
slug: Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unseren Artikel [Klassen in JavaScript](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn in Ihrem Code ein Fehler vorliegt, wird dieser im Ergebnisbereich auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## OOJS 1

In dieser Aufgabe stellen wir Ihnen den Beginn einer Definition für eine `Shape`-Klasse zur Verfügung. Sie hat drei Eigenschaften: `name`, `sides` und `sideLength`. Diese Klasse modelliert nur Formen, bei denen alle Seiten die gleiche Länge haben, wie ein Quadrat oder ein gleichseitiges Dreieck.

Wir möchten, dass Sie:

- Einen Konstruktor zu dieser Klasse hinzufügen. Der Konstruktor nimmt Argumente für die Eigenschaften `name`, `sides` und `sideLength` und initialisiert sie.
- Eine neue Methode `calcPerimeter()` zur Klasse hinzufügen, die ihren Umfang (die Länge des äußeren Randes der Form) berechnet und das Ergebnis in die Konsole ausgibt.
- Eine neue Instanz der `Shape`-Klasse namens `square` erstellen. Geben Sie ihr einen `name` von `square`, `4` `sides` und eine `sideLength` von `5`.
- Ihre Methode `calcPerimeter()` auf der Instanz aufrufen, um zu sehen, ob sie das Berechnungsergebnis wie erwartet in die Konsole des Browsers ausgibt.
- Eine neue Instanz von `Shape` namens `triangle` erstellen, mit einem `name` von `triangle`, `3` `sides` und einer `sideLength` von `3`.
- `triangle.calcPerimeter()` aufrufen, um zu prüfen, ob es korrekt funktioniert.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel neu zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## OOJS 2

Als nächstes möchten wir, dass Sie eine `Square`-Klasse erstellen, die von `Shape` erbt und eine `calcArea()`-Methode hinzufügt, die die Fläche des Quadrats berechnet. Richten Sie den Konstruktor so ein, dass die Eigenschaft `name` von `Square`-Objektinstanzen automatisch auf `square` gesetzt wird und die Eigenschaft `sides` automatisch auf `4` gesetzt wird. Beim Aufrufen des Konstruktors sollten Sie daher nur die Eigenschaft `sideLength` angeben müssen.

Erstellen Sie eine Instanz der `Square`-Klasse namens `square` mit den entsprechenden Eigenschaftswerten und rufen Sie ihre Methoden `calcPerimeter()` und `calcArea()` auf, um zu zeigen, dass es korrekt funktioniert.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel neu zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
