---
title: "Testen Sie Ihre Fähigkeiten: Objektgrundlagen"
short-title: Objects
slug: Learn_web_development/Core/Scripting/Test_your_skills/Object_basics
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren Artikel zu den [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Falls ein Fehler in Ihrem Code vorliegt, wird dieser im Ergebnispanel auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Objektgrundlagen 1

In dieser Aufgabe erhalten Sie ein Objektliteral, und Ihre Aufgaben sind:

- Den Wert der `name`-Eigenschaft in der Variablen `catName` speichern, unter Verwendung der Klammernotation.
- Die Methode `greeting()` mit Punktnotation ausführen (sie wird die Begrüßung in der Konsole des Browsers protokollieren).
- Den Wert der `color`-Eigenschaft auf `black` aktualisieren.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 2

In unserer nächsten Aufgabe möchten wir, dass Sie eigenständig ein Objektliteral erstellen, um eine Ihrer Lieblingsbands zu repräsentieren. Die erforderlichen Eigenschaften sind:

- `name`: Ein String, der den Namen der Band repräsentiert.
- `nationality`: Ein String, der das Herkunftsland der Band repräsentiert.
- `genre`: Die Art von Musik, die die Band spielt.
- `members`: Eine Zahl, die die Anzahl der Mitglieder der Band repräsentiert.
- `formed`: Eine Zahl, die das Jahr angibt, in dem die Band gegründet wurde.
- `split`: Eine Zahl, die das Jahr angibt, in dem sich die Band auflöste, oder `false`, falls sie noch zusammen sind.
- `albums`: Ein Array, das die von der Band veröffentlichten Alben repräsentiert. Jedes Element des Arrays sollte ein Objekt enthalten, das die folgenden Mitglieder umfasst:
  - `name`: Ein String, der den Namen des Albums repräsentiert.
  - `released`: Eine Zahl, die das Jahr angibt, in dem das Album veröffentlicht wurde.

Nehmen Sie mindestens zwei Alben in das `albums`-Array auf.

Sobald Sie dies getan haben, sollten Sie einen String in die Variable `bandInfo` schreiben, der eine kleine Biografie enthält, in der Name, Nationalität, aktive Jahre und Stil sowie Titel und Veröffentlichungsdatum ihres ersten Albums beschrieben werden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 3

In dieser Aufgabe möchten wir, dass Sie zum Objektliteral `cat` aus Aufgabe 1 zurückkehren. Wir möchten, dass Sie die Methode `greeting()` so umschreiben, dass sie `"Hello, said Bertie the Cymric."` in die Konsole des Browsers protokolliert, aber auf eine Weise, die für _jedes_ `cat`-Objekt derselben Struktur funktioniert, unabhängig von dessen Name oder Rasse.

Wenn Sie damit fertig sind, erstellen Sie Ihr eigenes Objekt namens `cat2`, das dieselbe Struktur und genau dieselbe `greeting()`-Methode hat, aber einen anderen `name`, `breed` und `color`.

Rufen Sie beide `greeting()`-Methoden auf, um zu überprüfen, ob sie geeignete Begrüßungen in die Konsole protokollieren.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 4

In dem von Ihnen für Aufgabe 3 geschriebenen Code ist die Methode `greeting()` zweimal definiert, jeweils einmal für jede Katze. Das ist nicht ideal (insbesondere verletzt es ein Prinzip in der Programmierung, das manchmal als [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) oder "Don't Repeat Yourself" bezeichnet wird).

In dieser Aufgabe möchten wir, dass Sie den Code verbessern, sodass `greeting()` nur einmal definiert wird und jede `cat`-Instanz ihre eigene `greeting()`-Methode erhält. Hinweis: Sie sollten einen JavaScript-Konstruktor verwenden, um `cat`-Instanzen zu erstellen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
