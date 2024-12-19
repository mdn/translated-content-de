---
title: "Testen Sie Ihre Fähigkeiten: Strings"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Strings
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unsere Artikel [Umgang mit Text — Strings in JavaScript](/de/docs/Learn_web_development/Core/Scripting/Strings) und [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich an uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

> [!NOTE]
> In den untenstehenden Beispielen wird bei einem Fehler in Ihrem Code dieser im Ergebnisbereich der Seite ausgegeben, um Ihnen zu helfen, die Antwort herauszufinden (oder in der JavaScript-Konsole des Browsers, im Falle der herunterladbaren Version).

## Strings 1

In unserer ersten Aufgabe zu Strings fangen wir klein an. Sie haben bereits die Hälfte eines berühmten Zitats in einer Variablen namens `quoteStart`; wir möchten, dass Sie:

1. Die andere Hälfte des Zitats heraussuchen und sie in einem Beispiel in einer Variablen namens `quoteEnd` hinzufügen.
2. Die beiden Strings zusammenfügen, um einen einzigen String zu erstellen, der das vollständige Zitat enthält. Speichern Sie das Ergebnis in einer Variablen namens `finalQuote`.

Sie werden feststellen, dass Sie an diesem Punkt einen Fehler erhalten. Können Sie das Problem mit `quoteStart` beheben, damit das vollständige Zitat korrekt angezeigt wird?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Strings 2

In dieser Aufgabe werden Ihnen zwei Variablen `quote` und `substring` zur Verfügung gestellt, die zwei Strings enthalten. Wir möchten, dass Sie:

1. Die Länge des Zitats abrufen und in einer Variablen namens `quoteLength` speichern.
2. Die Indexposition finden, an der `substring` in `quote` erscheint, und diesen Wert in einer Variablen namens `index` speichern.
3. Eine Kombination der verfügbaren Variablen und String-Eigenschaften/Methoden verwenden, um das ursprüngliche Zitat auf „I do not like green eggs and ham.“ zu kürzen und es in einer Variablen namens `revisedQuote` zu speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings2-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Strings 3

In der nächsten String-Aufgabe erhalten Sie das gleiche Zitat, das Sie in der vorherigen Aufgabe erhalten haben, aber es ist irgendwie fehlerhaft! Wir möchten, dass Sie es aktualisieren und korrigieren, wie folgt:

1. Ändern Sie die Großschreibung, um den korrekten Satzbau zu haben (alles klein, außer dem ersten großen Buchstaben). Speichern Sie das neue Zitat in einer Variablen namens `fixedQuote`.
2. Ersetzen Sie in `fixedQuote` „green eggs and ham“ durch ein anderes Essen, das Sie wirklich nicht mögen.
3. Es gibt noch eine kleine Korrektur zu machen – fügen Sie am Ende des Zitats einen Punkt hinzu und speichern Sie die endgültige Version in einer Variablen namens `finalQuote`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings3-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Strings 4

In der finalen String-Aufgabe haben wir Ihnen den Namen eines Theorems, zwei numerische Werte und einen unvollständigen String gegeben (die Teile, die hinzugefügt werden müssen, sind mit Sternchen (`*`) markiert). Wir möchten, dass Sie den Wert des Strings wie folgt ändern:

1. Ändern Sie ihn von einem regulären String-Literal in ein Template-Literal.
2. Ersetzen Sie die vier Sternchen durch vier Template-Literal-Platzhalter. Diese sollten sein:

   1. Der Name des Theorems.
   2. Die beiden zahlenmäßigen Werte, die wir haben.
   3. Die Länge der Hypotenuse eines rechtwinkligen Dreiecks, gegeben, dass die anderen beiden Seitenlängen den Werten entsprechen, die wir haben. Sie müssen nachsehen, wie Sie dies aus dem, was Sie haben, berechnen. Machen Sie die Berechnung innerhalb des Platzhalters.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings4-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.
