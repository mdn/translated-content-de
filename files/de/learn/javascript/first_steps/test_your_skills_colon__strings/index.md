---
title: "Testen Sie Ihre Fähigkeiten: Strings"
slug: Learn/JavaScript/First_steps/Test_your_skills:_Strings
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es, festzustellen, ob Sie unsere Artikel [Umgang mit Text — Strings in JavaScript](/de/docs/Learn/JavaScript/First_steps/Strings) und [Nützliche String-Methoden](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods) verstanden haben.

> [!NOTE]
> Sie können die Lösungen in den interaktiven Editoren auf dieser Seite ausprobieren oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

> [!NOTE]
> In den folgenden Beispielen wird ein Fehler in Ihrem Code in das Ergebnisfeld auf der Seite ausgegeben, um Ihnen zu helfen, die richtige Antwort zu finden (oder in die JavaScript-Konsole des Browsers, im Falle der herunterladbaren Version).

## Strings 1

In unserer ersten String-Aufgabe beginnen wir klein. Sie haben bereits die Hälfte eines berühmten Zitats in einer Variablen namens `quoteStart`; wir möchten, dass Sie:

1. Die andere Hälfte des Zitats nachschlagen und zu dem Beispiel in einer Variablen namens `quoteEnd` hinzufügen.
2. Die beiden Strings zusammenführen, um einen einzigen String zu erstellen, der das vollständige Zitat enthält. Speichern Sie das Ergebnis in einer Variablen namens `finalQuote`.

Sie werden feststellen, dass Sie an diesem Punkt einen Fehler erhalten. Können Sie das Problem mit `quoteStart` beheben, damit das vollständige Zitat korrekt angezeigt wird?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 2

In dieser Aufgabe werden Ihnen zwei Variablen, `quote` und `substring`, zur Verfügung gestellt, die zwei Strings enthalten. Wir möchten, dass Sie:

1. Die Länge des Zitats ermitteln und in einer Variablen namens `quoteLength` speichern.
2. Die Indexposition ermitteln, an der `substring` in `quote` erscheint, und diesen Wert in einer Variablen namens `index` speichern.
3. Eine Kombination der Ihnen zur Verfügung stehenden Variablen und String-Eigenschaften/-Methoden verwenden, um das ursprüngliche Zitat auf „I do not like green eggs and ham.“ zu kürzen und es in einer Variablen namens `revisedQuote` speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 3

In der nächsten String-Aufgabe wird Ihnen das gleiche Zitat wie in der vorherigen Aufgabe gegeben, aber es ist etwas kaputt! Wir möchten, dass Sie es wie folgt reparieren und aktualisieren:

1. Den Fall in korrekten Satzfall ändern (alles klein, außer dem großen Anfangsbuchstaben). Speichern Sie das neue Zitat in einer Variablen namens `fixedQuote`.
2. Ersetzen Sie in `fixedQuote` „green eggs and ham“ mit einem anderen Essen, das Sie wirklich nicht mögen.
3. Es gibt noch eine kleine Korrektur vorzunehmen — fügen Sie dem Ende des Zitats einen Punkt hinzu und speichern Sie die endgültige Version in einer Variablen namens `finalQuote`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 4

In der letzten String-Aufgabe geben wir Ihnen den Namen eines Theorems, zwei numerische Werte und einen unvollständigen String (die hinzuzufügenden Teile sind mit Sternchen (`*`) markiert). Wir möchten, dass Sie den Wert des Strings wie folgt ändern:

1. Ändern Sie ihn von einem regulären Stringliteral in ein Template-Literal.
2. Ersetzen Sie die vier Sternchen durch vier Template-Literal-Platzhalter. Diese sollten sein:

   1. Der Name des Theorems.
   2. Die beiden Zahlenwerte, die wir haben.
   3. Die Länge der Hypotenuse eines rechtwinkligen Dreiecks, gegeben, dass die beiden anderen Seitenlängen die gleichen sind wie die beiden Werte, die wir haben. Sie müssen nachschlagen, wie Sie dies aus dem, was Sie haben, berechnen. Führen Sie die Berechnung im Platzhalter durch.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
