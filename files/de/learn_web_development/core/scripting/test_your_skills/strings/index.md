---
title: "Testen Sie Ihr Können: Strings"
short-title: Strings
slug: Learn_web_development/Core/Scripting/Test_your_skills/Strings
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Das Ziel dieses Fähigkeitstests ist zu beurteilen, ob Sie unsere Artikel [Umgang mit Text — Strings in JavaScript](/de/docs/Learn_web_development/Core/Scripting/Strings) und [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

> [!NOTE]
> In den nachfolgenden Beispielen wird, falls ein Fehler in Ihrem Code vorliegt, dieser im Ergebnisfeld auf der Seite ausgegeben, um Ihnen zu helfen, die Antwort herauszufinden (oder in der JavaScript-Konsole des Browsers, bei der herunterladbaren Version).

## Strings 1

In unserer ersten String-Aufgabe beginnen wir klein. Sie haben bereits die Hälfte eines berühmten Zitats in einer Variablen namens `quoteStart`; wir möchten, dass Sie:

1. Die andere Hälfte des Zitats nachschlagen und in einer Variablen namens `quoteEnd` hinzufügen.
2. Die beiden Strings zusammenfügen, um einen einzigen String zu erstellen, der das vollständige Zitat enthält. Speichern Sie das Ergebnis in einer Variablen namens `finalQuote`.

An diesem Punkt werden Sie feststellen, dass ein Fehler auftritt. Können Sie das Problem mit `quoteStart` beheben, sodass das vollständige Zitat korrekt angezeigt wird?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu rekonstruieren:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 2

In dieser Aufgabe werden Ihnen zwei Variablen, `quote` und `substring`, bereitgestellt, die zwei Strings enthalten. Wir möchten, dass Sie:

1. Die Länge des Zitats abrufen und in einer Variablen namens `quoteLength` speichern.
2. Die Indexposition finden, an der `substring` in `quote` erscheint, und diesen Wert in einer Variablen namens `index` speichern.
3. Eine Kombination aus den von Ihnen verfügbaren Variablen und String-Eigenschaften/-Methoden verwenden, um das Originalzitat zu "I do not like green eggs and ham." zu kürzen und es in einer Variablen namens `revisedQuote` speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu rekonstruieren:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 3

In der nächsten String-Aufgabe erhalten Sie das gleiche Zitat, mit dem Sie in der vorherigen Aufgabe endeten, jedoch ist es etwas kaputt! Wir möchten, dass Sie es reparieren und aktualisieren, wie folgt:

1. Ändern Sie die Groß-/Kleinschreibung, um den korrekten Satz zu bilden (alles klein, außer das erste Wort groß). Speichern Sie das neue Zitat in einer Variablen namens `fixedQuote`.
2. Ersetzen Sie in `fixedQuote` "green eggs and ham" durch ein anderes Lebensmittel, das Ihnen wirklich nicht gefällt.
3. Es gibt eine weitere kleine Korrektur zu machen — fügen Sie am Ende des Zitats einen Punkt hinzu und speichern Sie die endgültige Version in einer Variablen namens `finalQuote`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu rekonstruieren:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 4

In der letzten String-Aufgabe haben wir Ihnen den Namen eines Theorems, zwei numerische Werte und einen unvollständigen String gegeben (die Teile, die hinzugefügt werden müssen, sind mit Sternchen (`*`) markiert). Wir möchten, dass Sie den Wert des Strings wie folgt ändern:

1. Ändern Sie ihn von einem regulären String-Literal in ein Template-Literal.
2. Ersetzen Sie die vier Sternchen durch vier Template-Literal-Platzhalter. Diese sollten sein:
   1. Der Name des Theorems.
   2. Die beiden Zahlenwerte, die wir haben.
   3. Die Länge der Hypotenuse eines rechtwinkligen Dreiecks, gegeben, dass die beiden anderen Seitenlängen die gleichen Werte sind, die wir haben. Sie müssen nachsehen, wie man dies aus dem, was Sie haben, berechnet. Machen Sie die Berechnung im Platzhalter.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel zu rekonstruieren:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
