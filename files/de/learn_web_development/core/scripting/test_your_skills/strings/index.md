---
title: "Testen Sie Ihre Fähigkeiten: Strings"
short-title: Strings
slug: Learn_web_development/Core/Scripting/Test_your_skills/Strings
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Ziel dieses Fähigkeitstests ist zu beurteilen, ob Sie unsere Artikel [Umgang mit Text — Zeichenfolgen in JavaScript](/de/docs/Learn_web_development/Core/Scripting/Strings) und [Nützliche Methoden für Zeichenfolgen](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) verstanden haben.

> [!NOTE]
> Sie können die Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

> [!NOTE]
> In den nachfolgenden Beispielen wird ein Fehler in Ihrem Code im Ergebnispanel auf der Seite ausgegeben, um Ihnen zu helfen, die Antwort zu finden (oder in der JavaScript-Konsole des Browsers, im Fall der herunterladbaren Version).

## Strings 1

In unserer ersten Aufgabe zu Strings beginnen wir klein. Sie haben bereits die Hälfte eines berühmten Zitats in einer Variablen namens `quoteStart`; wir möchten, dass Sie:

1. Den zweiten Teil des Zitats nachschlagen und ihn in einer Variablen namens `quoteEnd` zum Beispiel hinzufügen.
2. Die beiden Zeichenfolgen zusammenfügen, um eine einzelne Zeichenfolge mit dem vollständigen Zitat zu erstellen. Speichern Sie das Ergebnis in einer Variablen namens `finalQuote`.

An diesem Punkt werden Sie feststellen, dass ein Fehler auftritt. Können Sie das Problem mit `quoteStart` beheben, sodass das vollständige Zitat korrekt angezeigt wird?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 2

In dieser Aufgabe werden Ihnen zwei Variablen, `quote` und `substring`, zur Verfügung gestellt, die zwei Zeichenfolgen enthalten. Wir möchten, dass Sie:

1. Die Länge des Zitats ermitteln und in einer Variablen namens `quoteLength` speichern.
2. Die Indexposition finden, an der `substring` in `quote` erscheint, und diesen Wert in einer Variablen namens `index` speichern.
3. Eine Kombination der Variablen, die Sie haben, und verfügbare Zeichenfolgen-Eigenschaften/Methoden verwenden, um das ursprüngliche Zitat auf "I do not like green eggs and ham." zu kürzen und in einer Variablen namens `revisedQuote` zu speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 3

In der nächsten String-Aufgabe wird Ihnen dasselbe Zitat gegeben, das Sie in der vorherigen Aufgabe erhalten haben, es ist jedoch etwas fehlerhaft! Wir möchten, dass Sie es beheben und aktualisieren, und zwar so:

1. Ändern Sie die Groß-/Kleinschreibung in korrekte Satzschreibweise (alles kleingeschrieben, außer dem ersten Großbuchstaben). Speichern Sie das neue Zitat in einer Variablen namens `fixedQuote`.
2. Ersetzen Sie in `fixedQuote` "green eggs and ham" durch ein anderes Essen, das Sie wirklich nicht mögen.
3. Es gibt noch eine kleine Korrektur zu machen — fügen Sie am Ende des Zitats einen Punkt hinzu und speichern Sie die endgültige Version in einer Variablen namens `finalQuote`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 4

In der letzten String-Aufgabe haben wir Ihnen den Namen eines Theorems, zwei numerische Werte und eine unvollständige Zeichenfolge (die zu ergänzenden Teile sind mit Sternchen (`*`) markiert) gegeben. Wir möchten, dass Sie den Wert der Zeichenfolge wie folgt ändern:

1. Ändern Sie es von einem regulären Zeichenfolgenliteral in ein Template-String.
2. Ersetzen Sie die vier Sternchen durch vier Platzhalter für Template-Strings. Diese sollten sein:

   1. Der Name des Theorems.
   2. Die beiden numerischen Werte, die wir haben.
   3. Die Länge der Hypotenuse eines rechtwinkligen Dreiecks, gegeben, dass die beiden anderen Seitenlängen dieselben sind wie die beiden Werte, die wir haben. Sie müssen nachschlagen, wie Sie dies berechnen können, basierend auf dem, was Sie haben. Führen Sie die Berechnung innerhalb des Platzhalters durch.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
