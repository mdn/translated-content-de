---
title: "Testen Sie Ihre Fähigkeiten: Grundlagen von Objekten"
slug: Learn/JavaScript/Objects/Test_your_skills:_Object_basics
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeitentests ist es zu beurteilen, ob Sie unseren Artikel zu den [Grundlagen von JavaScript-Objekten](/de/docs/Learn/JavaScript/Objects/Basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen im interaktiven Editor auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn ein Fehler in Ihrem Code vorliegt, wird dieser im Ergebnisbereich auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) melden.

## Grundlagen von Objekten 1

In dieser Aufgabe wird Ihnen ein Objektliteral zur Verfügung gestellt, und Ihre Aufgaben sind:

- Speichern Sie den Wert der `name`-Eigenschaft in der Variable `catName` mithilfe der Klammernotation.
- Führen Sie die `greeting()`-Methode mithilfe der Punktnotation aus (sie wird die Begrüßung in die Browser-Konsole protokollieren).
- Aktualisieren Sie den Wert der `color`-Eigenschaft auf `black`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Grundlagen von Objekten 2

In unserer nächsten Aufgabe möchten wir, dass Sie versuchen, Ihr eigenes Objektliteral zu erstellen, das eine Ihrer Lieblingsbands repräsentiert. Die erforderlichen Eigenschaften sind:

- `name`: Ein String, der den Bandnamen darstellt.
- `nationality`: Ein String, der das Land darstellt, aus dem die Band stammt.
- `genre`: Welche Art von Musik die Band spielt.
- `members`: Eine Zahl, die die Anzahl der Mitglieder der Band darstellt.
- `formed`: Eine Zahl, die das Jahr darstellt, in dem die Band gegründet wurde.
- `split`: Eine Zahl, die das Jahr darstellt, in dem die Band sich getrennt hat, oder `false`, wenn sie noch zusammen sind.
- `albums`: Ein Array, das die von der Band veröffentlichten Alben darstellt. Jedes Array-Element sollte ein Objekt mit den folgenden Mitgliedern sein:

  - `name`: Ein String, der den Namen des Albums darstellt.
  - `released`: Eine Zahl, die das Jahr darstellt, in dem das Album veröffentlicht wurde.

Fügen Sie mindestens zwei Alben im `albums`-Array ein.

Nachdem Sie dies getan haben, sollten Sie eine Zeichenfolge in die Variable `bandInfo` schreiben, die eine kleine Biografie enthält, die ihren Namen, ihre Nationalität, aktive Jahre und Stil sowie den Titel und das Veröffentlichungsdatum ihres ersten Albums beschreibt.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Grundlagen von Objekten 3

In dieser Aufgabe möchten wir, dass Sie zum `cat`-Objektliteral aus Aufgabe 1 zurückkehren. Wir möchten, dass Sie die `greeting()`-Methode so umschreiben, dass sie `"Hello, said Bertie the Cymric."` in die Browser-Konsole protokolliert, aber so, dass es bei _jedem_ `cat`-Objekt der gleichen Struktur funktioniert, unabhängig von dessen Namen oder Rasse.

Wenn Sie fertig sind, schreiben Sie Ihr eigenes Objekt namens `cat2`, das die gleiche Struktur hat, genau die gleiche `greeting()`-Methode, aber einen anderen `name`, `breed` und `color`.

Rufen Sie beide `greeting()`-Methoden auf, um zu überprüfen, ob sie passende Begrüßungen in die Konsole protokollieren.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Grundlagen von Objekten 4

In dem Code, den Sie für Aufgabe 3 geschrieben haben, ist die `greeting()`-Methode zweimal definiert, einmal für jede Katze. Das ist nicht ideal (insbesondere, weil es ein Prinzip in der Programmierung verletzt, das manchmal als [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) oder "Don't Repeat Yourself" bezeichnet wird).

In dieser Aufgabe möchten wir, dass Sie den Code so verbessern, dass `greeting()` nur einmal definiert ist und jede `cat`-Instanz ihre eigene `greeting()`-Methode erhält. Tipp: Sie sollten einen JavaScript-Konstruktor verwenden, um `cat`-Instanzen zu erstellen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
