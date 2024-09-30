---
title: "Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript"
slug: Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel [Klassen in JavaScript](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn in Ihrem Code ein Fehler vorhanden ist, wird dieser im Ergebnisbereich auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## OOJS 1

In dieser Aufgabe stellen wir Ihnen den Anfang einer Definition für eine `Shape`-Klasse zur Verfügung. Diese hat drei Eigenschaften: `name`, `sides` und `sideLength`. Diese Klasse modelliert nur Formen, bei denen alle Seiten gleich lang sind, wie ein Quadrat oder ein gleichseitiges Dreieck.

Wir möchten, dass Sie:

- Einen Konstruktor zu dieser Klasse hinzufügen. Der Konstruktor nimmt Argumente für die Eigenschaften `name`, `sides` und `sideLength` entgegen und initialisiert sie.
- Eine neue Methode `calcPerimeter()` zur Klasse hinzufügen, die ihren Umfang (die Länge der äußeren Kante der Form) berechnet und das Ergebnis im Konsolenprotokoll ausgibt.
- Eine neue Instanz der `Shape`-Klasse namens `square` erstellen. Geben Sie ihr einen `name` von `square`, `4` `sides` und eine `sideLength` von `5`.
- Ihre `calcPerimeter()`-Methode an der Instanz aufrufen, um zu sehen, ob das berechnete Ergebnis wie erwartet in der Browserkonsole ausgegeben wird.
- Eine neue Instanz von `Shape` namens `triangle` erstellen, mit einem `name` von `triangle`, `3` `sides` und einer `sideLength` von `3`.
- `triangle.calcPerimeter()` aufrufen, um zu überprüfen, ob es ordnungsgemäß funktioniert.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## OOJS 2

Als Nächstes möchten wir, dass Sie eine `Square`-Klasse erstellen, die von `Shape` erbt und eine `calcArea()`-Methode hinzufügt, die die Fläche des Quadrats berechnet. Richten Sie auch den Konstruktor so ein, dass die `name`-Eigenschaft von `Square`-Objektinstanzen automatisch auf `square` gesetzt wird und die `sides`-Eigenschaft automatisch auf `4`. Beim Aufrufen des Konstruktors müssen Sie daher nur die `sideLength`-Eigenschaft angeben.

Erstellen Sie eine Instanz der `Square`-Klasse namens `square` mit den entsprechenden Eigenschaftswerten und rufen Sie ihre Methoden `calcPerimeter()` und `calcArea()` auf, um zu zeigen, dass sie ordnungsgemäß funktioniert.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
