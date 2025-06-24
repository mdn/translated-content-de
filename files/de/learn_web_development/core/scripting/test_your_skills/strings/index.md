---
title: "Testen Sie Ihre Fähigkeiten: Zeichenketten"
short-title: Strings
slug: Learn_web_development/Core/Scripting/Test_your_skills/Strings
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Ziel dieses Fähigkeitstests ist es, zu bewerten, ob Sie unsere Artikel zu [Umgang mit Text — Zeichenketten in JavaScript](/de/docs/Learn_web_development/Core/Scripting/Strings) und [Nützliche Zeichenkettenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie stecken bleiben, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

> [!NOTE]
> In den untenstehenden Beispielen wird ein Fehler in Ihrem Code im Ergebnispanel der Seite ausgegeben, um Ihnen zu helfen, die Antwort zu finden (oder in der JavaScript-Konsole des Browsers, im Falle der herunterladbaren Version).

## Zeichenketten 1

In unserer ersten Aufgabe zu Zeichenketten fangen wir klein an. Sie haben bereits die Hälfte eines berühmten Zitats in einer Variablen namens `quoteStart`; wir möchten, dass Sie:

1. Die andere Hälfte des Zitats nachschlagen und in einer Variablen namens `quoteEnd` hinzufügen.
2. Die beiden Zeichenketten zu einer einzigen Zeichenkette zusammenfügen, die das vollständige Zitat enthält. Speichern Sie das Ergebnis in einer Variablen namens `finalQuote`.

Sie werden feststellen, dass Sie an diesem Punkt einen Fehler erhalten. Können Sie das Problem mit `quoteStart` beheben, sodass das vollständige Zitat korrekt angezeigt wird?

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Zeichenketten 2

In dieser Aufgabe erhalten Sie zwei Variablen, `quote` und `substring`, die zwei Zeichenketten enthalten. Wir möchten, dass Sie:

1. Die Länge des Zitats ermitteln und in einer Variablen namens `quoteLength` speichern.
2. Die Indexposition finden, an der `substring` in `quote` erscheint, und diesen Wert in einer Variablen namens `index` speichern.
3. Eine Kombination der Variablen, die Sie haben, und verfügbarer Zeichenketteneigenschaften/-methoden verwenden, um das ursprüngliche Zitat auf "I do not like green eggs and ham." zu kürzen und es in einer Variablen namens `revisedQuote` speichern.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Zeichenketten 3

In der nächsten Aufgabe zu Zeichenketten erhalten Sie das gleiche Zitat, das Sie in der vorherigen Aufgabe erhalten haben, aber es ist etwas fehlerhaft! Wir möchten, dass Sie es beheben und aktualisieren, wie folgt:

1. Die Groß- und Kleinschreibung korrigieren (alles klein, außer der erste Buchstabe groß). Speichern Sie das neue Zitat in einer Variablen namens `fixedQuote`.
2. Ersetzen Sie in `fixedQuote` "green eggs and ham" durch ein anderes Essen, das Ihnen wirklich nicht gefällt.
3. Es gibt noch eine kleine Korrektur — fügen Sie am Ende des Zitats einen Punkt hinzu und speichern Sie die endgültige Version in einer Variablen namens `finalQuote`.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Zeichenketten 4

In der letzten Aufgabe zu Zeichenketten haben wir Ihnen den Namen eines Theorems, zwei numerische Werte und eine unvollständige Zeichenkette gegeben (die hinzuzufügenden Teile sind mit Sternchen (`*`) markiert). Wir möchten, dass Sie den Wert der Zeichenkette wie folgt ändern:

1. Ändern Sie sie von einem regulären Zeichenfolgenliteral in ein Template-String.
2. Ersetzen Sie die vier Sternchen durch vier Template-String-Platzhalter. Diese sollten sein:
   1. Der Name des Theorems.
   2. Die beiden Zahlenwerte, die wir haben.
   3. Die Länge der Hypotenuse eines rechtwinkligen Dreiecks, wobei die beiden anderen Seitenlängen die gleichen sind wie die beiden Werte, die wir haben. Sie müssen nachschlagen, wie Sie dies von dem, was Sie haben, berechnen können. Führen Sie die Berechnung innerhalb des Platzhalters durch.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
