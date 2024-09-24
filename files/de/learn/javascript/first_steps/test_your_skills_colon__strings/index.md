---
title: "Testen Sie Ihre Fähigkeiten: Strings"
slug: Learn/JavaScript/First_steps/Test_your_skills:_Strings
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie unsere Artikel [Umgang mit Text — Strings in JavaScript](/de/docs/Learn/JavaScript/First_steps/Strings) und [Nützliche String-Methoden](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie stecken bleiben, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

> [!NOTE]
> In den unten stehenden Beispielen wird bei einem Fehler in Ihrem Code dieser im Ergebnispanel auf der Seite angezeigt, um Ihnen zu helfen, die Antwort herauszufinden (oder in der JavaScript-Konsole des Browsers, im Falle der herunterladbaren Version).

## Strings 1

In unserer ersten String-Aufgabe fangen wir klein an. Sie haben bereits die Hälfte eines berühmten Zitats in einer Variablen namens `quoteStart`; wir möchten, dass Sie:

1. Die andere Hälfte des Zitats recherchieren und sie dem Beispiel in einer Variablen namens `quoteEnd` hinzufügen.
2. Die beiden Strings zusammenfügen, um einen einzigen String mit dem vollständigen Zitat zu erstellen. Speichern Sie das Ergebnis in einer Variablen namens `finalQuote`.

Sie werden feststellen, dass Sie an diesem Punkt einen Fehler erhalten. Können Sie das Problem mit `quoteStart` beheben, sodass das vollständige Zitat korrekt angezeigt wird?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 2

In dieser Aufgabe werden Ihnen zwei Variablen, `quote` und `substring`, bereitgestellt, die zwei Strings enthalten. Wir möchten, dass Sie:

1. Die Länge des Zitats abrufen und in einer Variablen namens `quoteLength` speichern.
2. Die Indexposition finden, an der `substring` in `quote` erscheint, und diesen Wert in einer Variablen namens `index` speichern.
3. Eine Kombination der vorhandenen Variablen und verfügbaren String-Eigenschaften/Methoden verwenden, um das ursprüngliche Zitat auf "I do not like green eggs and ham." zu kürzen, und es in einer Variablen namens `revisedQuote` speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 3

In der nächsten String-Aufgabe erhalten Sie dasselbe Zitat, das Sie in der vorherigen Aufgabe hatten, aber es ist etwas fehlerhaft! Wir möchten, dass Sie es korrigieren und aktualisieren, wie folgt:

1. Ändern Sie das Lettering, um den korrekten Satzfall zu haben (alles kleingeschrieben, außer dem großen Anfangsbuchstaben). Speichern Sie das neue Zitat in einer Variablen namens `fixedQuote`.
2. Ersetzen Sie in `fixedQuote` "green eggs and ham" durch ein anderes Essen, das Sie wirklich nicht mögen.
3. Es gibt noch eine kleine Korrektur — fügen Sie dem Zitat einen Punkt am Ende hinzu und speichern Sie die endgültige Version in einer Variablen namens `finalQuote`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 4

In der letzten String-Aufgabe haben wir Ihnen den Namen eines Theorems, zwei numerische Werte und einen unvollständigen String gegeben (die Teile, die hinzugefügt werden müssen, sind mit Sternchen (`*`) markiert). Wir möchten, dass Sie den Wert des Strings wie folgt ändern:

1. Verwandeln Sie ihn von einem regulären String-Literal in ein Template-String-Literal.
2. Ersetzen Sie die vier Sternchen durch vier Template-String-Platzhalter. Diese sollten sein:

   1. Der Name des Theorems.
   2. Die beiden Zahlenwerte, die wir haben.
   3. Die Länge der Hypotenuse eines rechtwinkligen Dreiecks, wobei die beiden anderen Seitenlängen die gleichen Werte haben, die wir haben. Sie müssen nachschlagen, wie Sie dies aus dem, was Sie haben, berechnen. Führen Sie die Berechnung innerhalb des Platzhalters durch.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
