---
title: "Testen Sie Ihre Fähigkeiten: Objektgrundlagen"
slug: Learn/JavaScript/Objects/Test_your_skills:_Object_basics
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie den Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn/JavaScript/Objects/Basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Bei einem Fehler in Ihrem Code wird dieser im Ergebnispanel auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich über unsere [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Objektgrundlagen 1

In dieser Aufgabe erhalten Sie ein Objekt-Literal, und Ihre Aufgaben sind:

- Speichern Sie den Wert der `name`-Eigenschaft in der Variablen `catName`, indem Sie die Klammernotation verwenden.
- Führen Sie die `greeting()`-Methode mit der Punktnotation aus (sie wird die Begrüßung in die Konsole des Browsers ausgeben).
- Aktualisieren Sie den Wert der Eigenschaft `color` auf `black`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 2

In unserer nächsten Aufgabe möchten wir, dass Sie ein eigenes Objekt-Literal erstellen, das eine Ihrer Lieblingsbands darstellt. Die erforderlichen Eigenschaften sind:

- `name`: Ein String, der den Namen der Band darstellt.
- `nationality`: Ein String, der das Land darstellt, aus dem die Band stammt.
- `genre`: Die Art von Musik, die die Band spielt.
- `members`: Eine Zahl, die die Anzahl der Mitglieder der Band darstellt.
- `formed`: Eine Zahl, die das Jahr angibt, in dem die Band gegründet wurde.
- `split`: Eine Zahl, die das Jahr angibt, in dem die Band sich aufgelöst hat, oder `false`, wenn sie noch zusammen ist.
- `albums`: Ein Array, das die von der Band veröffentlichten Alben darstellt. Jedes Array-Element sollte ein Objekt enthalten, das die folgenden Mitglieder enthält:

  - `name`: Ein String, der den Namen des Albums darstellt.
  - `released`: Eine Zahl, die das Jahr angibt, in dem das Album veröffentlicht wurde.

Fügen Sie mindestens zwei Alben in das `albums`-Array ein.

Sobald Sie dies getan haben, sollten Sie einen String in die Variable `bandInfo` schreiben, der eine kleine Biografie enthält, in der der Name, die Nationalität, die aktiven Jahre und der Stil sowie der Titel und das Veröffentlichungsdatum ihres ersten Albums beschrieben werden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 3

In dieser Aufgabe möchten wir, dass Sie zum `cat`-Objekt-Literal aus Aufgabe 1 zurückkehren. Wir möchten, dass Sie die `greeting()`-Methode so umschreiben, dass sie `"Hello, said Bertie the Cymric."` in die Konsole des Browsers ausgibt, aber auf eine Weise, die bei _jedem_ Katzenobjekt mit der gleichen Struktur funktioniert, unabhängig von Name oder Rasse.

Wenn Sie fertig sind, erstellen Sie ein eigenes Objekt namens `cat2`, das die gleiche Struktur, genau die gleiche `greeting()`-Methode, aber einen anderen `name`, `breed` und `color` hat.

Rufen Sie beide `greeting()`-Methoden auf, um zu überprüfen, dass sie passende Begrüßungen in die Konsole ausgeben.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 4

Im Code, den Sie für Aufgabe 3 geschrieben haben, wird die `greeting()`-Methode zweimal definiert, einmal für jede Katze. Das ist nicht ideal (insbesondere verletzt es ein Prinzip in der Programmierung, das manchmal [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) oder "Don't Repeat Yourself" genannt wird).

In dieser Aufgabe möchten wir, dass Sie den Code verbessern, sodass `greeting()` nur einmal definiert wird und jede Instanz von `cat` ihre eigene `greeting()`-Methode erhält. Hinweis: Sie sollten einen JavaScript-Konstruktor verwenden, um `cat`-Instanzen zu erstellen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
