---
title: "Testen Sie Ihre Fähigkeiten: Objektgrundlagen"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Object_basics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist festzustellen, ob Sie unseren Artikel [JavaScript Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) verstanden haben.

> [!NOTE]
> Sie können Lösungen im interaktiven Editor auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn ein Fehler in Ihrem Code vorliegt, wird er im Ergebnisfenster auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich an uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## Objektgrundlagen 1

In dieser Aufgabe erhalten Sie ein Objektliteral, und Ihre Aufgaben sind

- Den Wert der `name`-Eigenschaft in der Variablen `catName` zu speichern, indem Sie Klammernotation verwenden.
- Die Methode `greeting()` mit Punktnotation auszuführen (sie wird die Begrüßung in die Konsole des Browsers protokollieren).
- Den Wert der Eigenschaft `color` auf `black` zu aktualisieren.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 2

In unserer nächsten Aufgabe möchten wir, dass Sie Ihr eigenes Objektliteral erstellen, um eine Ihrer Lieblingsbands darzustellen. Die erforderlichen Eigenschaften sind:

- `name`: Ein String, der den Namen der Band darstellt.
- `nationality`: Ein String, der das Land darstellt, aus dem die Band stammt.
- `genre`: Welche Art von Musik die Band spielt.
- `members`: Eine Zahl, die die Anzahl der Mitglieder der Band darstellt.
- `formed`: Eine Zahl, die das Gründungsjahr der Band darstellt.
- `split`: Eine Zahl, die das Jahr darstellt, in dem die Band sich trennte, oder `false`, wenn sie noch zusammen sind.
- `albums`: Ein Array, das die von der Band veröffentlichten Alben darstellt. Jedes Array-Element sollte ein Objekt enthalten mit den folgenden Mitgliedern:

  - `name`: Ein String, der den Namen des Albums darstellt.
  - `released`: Eine Zahl, die das Veröffentlichungsjahr des Albums darstellt.

Fügen Sie mindestens zwei Alben in das `albums`-Array ein.

Nachdem Sie dies getan haben, sollten Sie einen String in die Variable `bandInfo` schreiben, der eine kleine Biografie mit ihrem Namen, ihrer Nationalität, den aktiven Jahren und dem Stil sowie dem Titel und dem Veröffentlichungsdatum ihres ersten Albums enthält.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 3

In dieser Aufgabe möchten wir, dass Sie zum Objektliteral `cat` aus Aufgabe 1 zurückkehren. Wir möchten, dass Sie die `greeting()`-Methode so umschreiben, dass sie `"Hello, said Bertie the Cymric."` in die Browser-Konsole protokolliert, aber auf eine Weise, die für _jede_ Katze mit der gleichen Struktur unabhängig von ihrem Namen oder ihrer Rasse funktioniert.

Wenn Sie fertig sind, erstellen Sie Ihr eigenes Objekt mit dem Namen `cat2`, das die gleiche Struktur hat, genau die gleiche `greeting()`-Methode, aber einen anderen `name`, `breed` und `color`.

Rufen Sie beide `greeting()`-Methoden auf, um zu überprüfen, dass sie geeignete Grüße in die Konsole protokollieren.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Objektgrundlagen 4

In dem von Ihnen für Aufgabe 3 geschriebenen Code ist die `greeting()`-Methode zweimal definiert, einmal für jede Katze. Dies ist nicht ideal (insbesondere verstößt es gegen ein in der Programmierung manchmal als [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) bekanntes Prinzip, "Don't Repeat Yourself").

In dieser Aufgabe möchten wir, dass Sie den Code so verbessern, dass `greeting()` nur einmal definiert ist und jede `cat`-Instanz ihre eigene `greeting()`-Methode erhält. Hinweis: Sie sollten einen JavaScript-Konstruktor verwenden, um `cat`-Instanzen zu erstellen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
