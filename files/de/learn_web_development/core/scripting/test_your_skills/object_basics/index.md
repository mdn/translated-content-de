---
title: "Testen Sie Ihre Fähigkeiten: Objektgrundlagen"
short-title: Objects
slug: Learn_web_development/Core/Scripting/Test_your_skills/Object_basics
l10n:
  sourceCommit: 79f1568f8916bd2fa58653f37cad2e66e746f12f
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu prüfen, ob Sie unseren Artikel zu den [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn ein Fehler in Ihrem Code vorliegt, wird er im Ergebnisfenster auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Objektgrundlagen 1

In dieser Aufgabe wird Ihnen ein Objektliteral zur Verfügung gestellt, und Ihre Aufgaben sind:

- Speichern Sie den Wert der `name`-Eigenschaft in der Variablen `catName`, unter Verwendung der Klammernotation.
- Führen Sie die Methode `greeting()` aus, indem Sie die Punktnotation verwenden (sie wird die Begrüßung in der Konsole des Browsers protokollieren).
- Aktualisieren Sie den Wert der Eigenschaft `color` auf `black`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 2

In unserer nächsten Aufgabe möchten wir, dass Sie Ihr eigenes Objektliteral erstellen, um eine Ihrer Lieblingsbands darzustellen. Die erforderlichen Eigenschaften sind:

- `name`: Ein String, der den Bandnamen darstellt.
- `nationality`: Ein String, der das Herkunftsland der Band darstellt.
- `genre`: Die Art von Musik, die die Band spielt.
- `members`: Eine Zahl, die die Anzahl der Mitglieder der Band darstellt.
- `formed`: Eine Zahl, die das Jahr angibt, in dem die Band gegründet wurde.
- `split`: Eine Zahl, die das Jahr angibt, in dem die Band sich aufgelöst hat, oder `false`, wenn sie noch zusammen sind.
- `albums`: Ein Array, das die von der Band veröffentlichten Alben repräsentiert. Jedes Array-Element sollte ein Objekt enthalten, das die folgenden Mitglieder hat:

  - `name`: Ein String, der den Namen des Albums darstellt.
  - `released`: Eine Zahl, die das Jahr der Veröffentlichung des Albums angibt.

Fügen Sie mindestens zwei Alben in das `albums`-Array ein.

Nachdem Sie dies getan haben, sollten Sie einen String in die Variable `bandInfo` schreiben, der eine kurze Biografie enthält, die ihren Namen, ihre Nationalität, die aktiven Jahre und den Stil sowie den Titel und das Veröffentlichungsdatum ihres ersten Albums beschreibt.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 3

In dieser Aufgabe möchten wir, dass Sie zum `cat`-Objektliteral aus Aufgabe 1 zurückkehren. Wir möchten, dass Sie die Methode `greeting()` so umschreiben, dass sie `"Hello, said Bertie the Cymric."` in der Konsole des Browsers protokolliert, jedoch auf eine Weise, die bei _jedem_ Katzenobjekt gleicher Struktur funktioniert, unabhängig von seinem Namen oder seiner Rasse.

Wenn Sie fertig sind, schreiben Sie Ihr eigenes Objekt mit dem Namen `cat2`, das dieselbe Struktur und genau die gleiche Methode `greeting()` hat, jedoch einen anderen `name`, `breed` und `color`.

Rufen Sie beide `greeting()`-Methoden auf, um zu überprüfen, dass sie geeignete Begrüßungen in die Konsole protokollieren.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 4

Im Code, den Sie für Aufgabe 3 geschrieben haben, ist die Methode `greeting()` zweimal definiert, einmal für jede Katze. Das ist nicht ideal (insbesondere verletzt es ein in der Programmierung manchmal "[DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)" genanntes Prinzip, also "Don't Repeat Yourself").

In dieser Aufgabe möchten wir, dass Sie den Code verbessern, sodass `greeting()` nur einmal definiert ist und jede `cat`-Instanz ihre eigene `greeting()`-Methode erhält. Tipp: Sie sollten einen JavaScript-Konstruktor verwenden, um `cat`-Instanzen zu erstellen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
