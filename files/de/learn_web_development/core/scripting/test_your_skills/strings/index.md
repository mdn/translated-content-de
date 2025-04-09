---
title: "Testen Sie Ihr Wissen: Strings"
short-title: Strings
slug: Learn_web_development/Core/Scripting/Test_your_skills/Strings
l10n:
  sourceCommit: 79f1568f8916bd2fa58653f37cad2e66e746f12f
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist zu überprüfen, ob Sie unsere Artikel [Umgang mit Text — Strings in JavaScript](/de/docs/Learn_web_development/Core/Scripting/Strings) und [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

> [!NOTE]
> In den untenstehenden Beispielen wird ein Fehler in Ihrem Code in das Ergebnispanel auf der Seite ausgegeben, um Ihnen bei der Fehlersuche zu helfen (oder in die JavaScript-Konsole des Browsers, im Fall der herunterladbaren Version).

## Strings 1

In unserer ersten Aufgabe zu Strings fangen wir klein an. Sie haben bereits die Hälfte eines berühmten Zitats in einer Variablen namens `quoteStart`; wir möchten, dass Sie:

1. Die andere Hälfte des Zitats nachschlagen und zu dem Beispiel in einer Variablen namens `quoteEnd` hinzufügen.
2. Die beiden Strings zusammenfügen, um einen einzigen String zu erhalten, der das vollständige Zitat enthält. Speichern Sie das Ergebnis in einer Variablen namens `finalQuote`.

Zu diesem Zeitpunkt erhalten Sie einen Fehler. Können Sie das Problem mit `quoteStart` beheben, damit das vollständige Zitat korrekt angezeigt wird?

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 2

In dieser Aufgabe erhalten Sie zwei Variablen, `quote` und `substring`, die zwei Strings enthalten. Wir möchten, dass Sie:

1. Die Länge des Zitats ermitteln und in einer Variablen namens `quoteLength` speichern.
2. Die Indexposition finden, an der `substring` in `quote` erscheint, und diesen Wert in einer Variablen namens `index` speichern.
3. Eine Kombination der vorhandenen Variablen und der verfügbaren String-Eigenschaften/-Methoden verwenden, um das ursprüngliche Zitat auf "I do not like green eggs and ham." zu kürzen und es in einer Variablen namens `revisedQuote` speichern.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 3

In der nächsten String-Aufgabe erhalten Sie dasselbe Zitat, das Sie in der vorherigen Aufgabe erhalten haben, aber es ist etwas fehlerhaft! Wir möchten, dass Sie es korrigieren und aktualisieren, wie folgt:

1. Die Groß-/Kleinschreibung für korrekte Satzschreibung ändern (alles klein, außer Großbuchstaben am Anfang). Speichern Sie das neue Zitat in einer Variablen namens `fixedQuote`.
2. In `fixedQuote` "green eggs and ham" mit einem anderen Lebensmittel ersetzen, das Sie wirklich nicht mögen.
3. Es gibt noch eine kleine Korrektur — fügen Sie einen Punkt am Ende des Zitats hinzu und speichern Sie die endgültige Version in einer Variablen namens `finalQuote`.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Strings 4

In der letzten String-Aufgabe haben wir Ihnen den Namen eines Theorems, zwei numerische Werte und einen unvollständigen String gegeben (die Teile, die hinzugefügt werden müssen, sind mit Sternchen (`*`) markiert). Wir möchten, dass Sie den Wert des Strings wie folgt ändern:

1. Ändern Sie ihn von einem regulären String-Literal in ein Template Literal.
2. Ersetzen Sie die vier Sternchen durch vier Platzhalter für Template Literals. Diese sollten sein:

   1. Der Name des Theorems.
   2. Die beiden Zahlwerte, die wir haben.
   3. Die Länge der Hypotenuse eines rechtwinkligen Dreiecks, gegeben dass die zwei anderen Seitenlängen den zwei Werten entsprechen, die wir haben. Sie müssen nachschlagen, wie man dies aus den vorhandenen Daten berechnet. Führen Sie die Berechnung innerhalb des Platzhalters durch.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
