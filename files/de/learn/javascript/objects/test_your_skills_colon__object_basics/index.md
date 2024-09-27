---
title: "Testen Sie Ihr Wissen: Grundlagen von Objekten"
slug: Learn/JavaScript/Objects/Test_your_skills:_Object_basics
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Tests ist es, zu überprüfen, ob Sie unseren Artikel [Grundlagen von JavaScript-Objekten](/de/docs/Learn/JavaScript/Objects/Basics) verstanden haben.

> [!NOTE]
> Sie können die Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn ein Fehler in Ihrem Code vorliegt, wird dieser im Ergebnisfenster auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Grundlagen von Objekten 1

In dieser Aufgabe erhalten Sie ein Objektliteral, und Ihre Aufgaben sind:

- Den Wert der `name`-Eigenschaft in der Variablen `catName` zu speichern, und zwar mit Hilfe der Klammernnotation.
- Die Methode `greeting()` mit Punktnotation auszuführen (sie wird die Begrüßung in der Konsole des Browsers protokollieren).
- Den Wert der Eigenschaft `color` auf `black` zu aktualisieren.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Grundlagen von Objekten 2

In unserer nächsten Aufgabe möchten wir, dass Sie versuchen, Ihr eigenes Objektliteral zu erstellen, um eine Ihrer Lieblingsbands darzustellen. Die erforderlichen Eigenschaften sind:

- `name`: Ein String, der den Bandnamen darstellt.
- `nationality`: Ein String, der das Herkunftsland der Band darstellt.
- `genre`: Die Art von Musik, die die Band spielt.
- `members`: Eine Zahl, welche die Anzahl der Mitglieder der Band darstellt.
- `formed`: Eine Zahl, die das Jahr darstellt, in dem die Band gegründet wurde.
- `split`: Eine Zahl, die das Jahr darstellt, in dem sich die Band aufgelöst hat, oder `false`, wenn sie noch zusammen sind.
- `albums`: Ein Array, das die von der Band veröffentlichten Alben darstellt. Jedes Array-Element sollte ein Objekt mit den folgenden Mitgliedern sein:

  - `name`: Ein String, der den Namen des Albums darstellt.
  - `released`: Eine Zahl, die das Jahr darstellt, in dem das Album veröffentlicht wurde.

Fügen Sie mindestens zwei Alben im `albums`-Array ein.

Sobald Sie dies getan haben, sollten Sie eine Zeichenkette in die Variable `bandInfo` schreiben, die eine kleine Biografie enthält, die deren Namen, Nationalität, aktive Jahre und Stil sowie den Titel und das Veröffentlichungsdatum ihres ersten Albums beschreibt.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Grundlagen von Objekten 3

In dieser Aufgabe möchten wir, dass Sie zum `cat`-Objektliteral aus Aufgabe 1 zurückkehren. Wir möchten, dass Sie die Methode `greeting()` so umschreiben, dass sie `"Hello, said Bertie the Cymric."` in der Konsolenansicht des Browsers protokolliert, jedoch auf eine Weise, die für _jedes_ Katzenobjekt derselben Struktur funktioniert, unabhängig von dessen Namen oder Rasse.

Wenn Sie fertig sind, erstellen Sie Ihr eigenes Objekt namens `cat2`, das dieselbe Struktur und genau dieselbe `greeting()`-Methode hat, aber einen anderen `name`, `breed` und `color`.

Rufen Sie beide `greeting()`-Methoden auf, um zu überprüfen, dass sie passende Begrüßungen in der Konsole protokollieren.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Grundlagen von Objekten 4

Im Code, den Sie für Aufgabe 3 geschrieben haben, wird die Methode `greeting()` zweimal definiert, einmal für jede Katze. Dies ist nicht ideal (insbesondere verletzt es ein Prinzip in der Programmierung, das manchmal [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) oder "Don't Repeat Yourself" genannt wird).

In dieser Aufgabe möchten wir, dass Sie den Code verbessern, sodass `greeting()` nur einmal definiert wird und jede `cat`-Instanz ihre eigene `greeting()`-Methode erhält. Tipp: Sie sollten einen JavaScript-Konstruktor verwenden, um `cat`-Instanzen zu erstellen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
