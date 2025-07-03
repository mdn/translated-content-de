---
title: "Testen Sie Ihr Können: Grundlagen von Objekten"
short-title: Objects
slug: Learn_web_development/Core/Scripting/Test_your_skills/Object_basics
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Das Ziel dieses Fähigkeitstests ist zu prüfen, ob Sie unseren Artikel über die [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
> Wenn ein Fehler in Ihrem Code auftritt, wird er im Ergebnisfenster auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Grundlagen von Objekten 1

In dieser Aufgabe wird Ihnen ein Objektliteral zur Verfügung gestellt, und Ihre Aufgaben sind:

- Den Wert der `name`-Eigenschaft in der Variablen `catName` mit Hilfe der Klammernotation zu speichern.
- Die Methode `greeting()` mit Punktnotation ausführen (sie wird die Begrüßung in die Browser-Konsole loggen).
- Den Wert der Eigenschaft `color` auf `black` aktualisieren.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Grundlagen von Objekten 2

In unserer nächsten Aufgabe möchten wir, dass Sie ein eigenes Objektliteral erstellen, um eine Ihrer Lieblingsbands darzustellen. Die erforderlichen Eigenschaften sind:

- `name`: Ein String, der den Bandnamen darstellt.
- `nationality`: Ein String, der das Herkunftsland der Band darstellt.
- `genre`: Die Art von Musik, die die Band spielt.
- `members`: Eine Zahl, die die Anzahl der Mitglieder der Band darstellt.
- `formed`: Eine Zahl, die das Jahr darstellt, in dem die Band gegründet wurde.
- `split`: Eine Zahl, die das Jahr darstellt, in dem die Band sich aufgelöst hat, oder `false`, wenn sie noch zusammen sind.
- `albums`: Ein Array, das die von der Band veröffentlichten Alben darstellt. Jedes Array-Element sollte ein Objekt mit den folgenden Mitgliedern enthalten:
  - `name`: Ein String, der den Namen des Albums darstellt.
  - `released`: Eine Zahl, die das Jahr der Veröffentlichung des Albums darstellt.

Fügen Sie mindestens zwei Alben in das `albums`-Array ein.

Sobald Sie dies getan haben, sollten Sie einen String in die Variable `bandInfo` schreiben, der eine kleine Biografie enthält, die ihren Namen, ihre Nationalität, aktive Jahre und Stil sowie den Titel und das Veröffentlichungsdatum ihres ersten Albums beinhaltet.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Grundlagen von Objekten 3

In dieser Aufgabe möchten wir, dass Sie zum `cat`-Objektliteral aus Aufgabe 1 zurückkehren. Wir möchten, dass Sie die Methode `greeting()` umschreiben, sodass sie `"Hello, said Bertie the Cymric."` in die Browser-Konsole loggt, aber in einer Weise, die für _jedes_ Katzenobjekt mit derselben Struktur funktioniert, unabhängig von dessen Name oder Rasse.

Wenn Sie fertig sind, schreiben Sie Ihr eigenes Objekt namens `cat2`, das dieselbe Struktur, genau dieselbe `greeting()`-Methode, aber einen anderen `name`, `breed` und `color` hat.

Rufen Sie beide `greeting()`-Methoden auf, um zu überprüfen, ob sie die entsprechenden Begrüßungen in der Konsole loggen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Grundlagen von Objekten 4

Im Code, den Sie für Aufgabe 3 geschrieben haben, wird die Methode `greeting()` zweimal definiert, einmal für jede Katze. Das ist nicht ideal (insbesondere verstößt es gegen ein Prinzip in der Programmierung, das manchmal [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) oder „Don’t Repeat Yourself“ genannt wird).

In dieser Aufgabe möchten wir, dass Sie den Code so verbessern, dass `greeting()` nur einmal definiert wird und jede `cat`-Instanz ihre eigene `greeting()`-Methode erhält. Hinweis: Sie sollten einen JavaScript-Konstruktor verwenden, um `cat`-Instanzen zu erstellen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
