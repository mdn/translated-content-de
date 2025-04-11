---
title: "Testen Sie Ihre Fähigkeiten: Objektgrundlagen"
short-title: Objects
slug: Learn_web_development/Core/Scripting/Test_your_skills/Object_basics
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Ziel dieses Fertigkeitstests ist es festzustellen, ob Sie unseren Artikel zu [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn es einen Fehler in Ihrem Code gibt, wird dieser im Ergebnisfeld auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Objektgrundlagen 1

In dieser Aufgabe erhalten Sie ein Objektliteral und Ihre Aufgaben sind:

- Speichern Sie den Wert der Eigenschaft `name` in der Variablen `catName` unter Verwendung der Klammernotation.
- Führen Sie die Methode `greeting()` unter Verwendung der Punktnotation aus (sie wird die Begrüßung in die Browser-Konsole protokollieren).
- Aktualisieren Sie den Wert der Eigenschaft `color` auf `black`.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 2

In unserer nächsten Aufgabe möchten wir, dass Sie ein eigenes Objektliteral erstellen, um eine Ihrer Lieblingsbands darzustellen. Die erforderlichen Eigenschaften sind:

- `name`: Ein String, der den Namen der Band darstellt.
- `nationality`: Ein String, der das Herkunftsland der Band darstellt.
- `genre`: Welche Art von Musik die Band spielt.
- `members`: Eine Zahl, die die Anzahl der Mitglieder der Band darstellt.
- `formed`: Eine Zahl, die das Jahr darstellt, in dem die Band gegründet wurde.
- `split`: Eine Zahl, die das Jahr darstellt, in dem die Band auseinandergegangen ist, oder `false`, wenn sie noch zusammen sind.
- `albums`: Ein Array, das die von der Band veröffentlichten Alben darstellt. Jedes Array-Element sollte ein Objekt mit den folgenden Eigenschaften enthalten:

  - `name`: Ein String, der den Namen des Albums darstellt.
  - `released`: Eine Zahl, die das Jahr darstellt, in dem das Album veröffentlicht wurde.

Fügen Sie mindestens zwei Alben in das `albums`-Array ein.

Nachdem Sie dies getan haben, sollten Sie einen String in die Variable `bandInfo` schreiben, der eine kleine Biografie mit deren Namen, Nationalität, aktiven Jahren und Stil sowie dem Titel und Veröffentlichungsdatum ihres ersten Albums enthält.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 3

In dieser Aufgabe möchten wir, dass Sie zum `cat`-Objektliteral aus Aufgabe 1 zurückkehren. Wir möchten, dass Sie die Methode `greeting()` so umschreiben, dass sie `"Hello, said Bertie the Cymric."` in die Browser-Konsole protokolliert, aber auf eine Weise, die für _jedes_ Katzenobjekt mit derselben Struktur funktioniert, unabhängig von seinem Namen oder seiner Rasse.

Wenn Sie fertig sind, erstellen Sie ein eigenes Objekt namens `cat2`, das dieselbe Struktur hat, genau dieselbe `greeting()`-Methode, aber einen anderen `name`, `breed` und `color`.

Rufen Sie beide `greeting()`-Methoden auf, um zu überprüfen, ob sie die entsprechenden Begrüßungen in die Konsole protokollieren.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 4

In dem Code, den Sie für Aufgabe 3 geschrieben haben, ist die Methode `greeting()` zweimal definiert, einmal für jede Katze. Dies ist nicht ideal (insbesondere verstößt es gegen ein Prinzip in der Programmierung, das manchmal [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) oder "Don't Repeat Yourself" genannt wird).

In dieser Aufgabe möchten wir, dass Sie den Code verbessern, sodass `greeting()` nur einmal definiert wird und jede `cat`-Instanz ihre eigene `greeting()`-Methode erhält. Hinweis: Sie sollten einen JavaScript-Konstruktor verwenden, um `cat`-Instanzen zu erstellen.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
