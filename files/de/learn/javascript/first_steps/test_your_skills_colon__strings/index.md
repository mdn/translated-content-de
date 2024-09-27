---
title: "Testen Sie Ihre Fähigkeiten: Strings"
slug: Learn/JavaScript/First_steps/Test_your_skills:_Strings
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeitentests ist es zu überprüfen, ob Sie unsere Artikel [Umgang mit Text — Strings in JavaScript](/de/docs/Learn/JavaScript/First_steps/Strings) und [Nützliche String-Methoden](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

> [!NOTE]
> In den unten stehenden Beispielen wird ein Fehler in Ihrem Code im Ergebnisfenster auf der Seite angezeigt, um Ihnen bei der Lösungsfindung zu helfen (oder in der JavaScript-Konsole des Browsers, falls Sie die herunterladbare Version nutzen).

## Strings 1

In unserer ersten Aufgabe zu Strings beginnen wir mit etwas Einfachem. Sie haben bereits die Hälfte eines berühmten Zitats in einer Variablen namens `quoteStart`; wir möchten, dass Sie:

1. Die andere Hälfte des Zitats nachschlagen und in einer Variablen namens `quoteEnd` hinzufügen.
2. Die beiden Strings zusammenfügen, um einen einzigen String mit dem vollständigen Zitat zu erstellen. Speichern Sie das Ergebnis in einer Variablen namens `finalQuote`.

An diesem Punkt wird ein Fehler auftreten. Können Sie das Problem mit `quoteStart` beheben, damit das vollständige Zitat richtig angezeigt wird?

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor daran zu arbeiten.

## Strings 2

In dieser Aufgabe werden Ihnen zwei Variablen, `quote` und `substring`, zur Verfügung gestellt, die zwei Strings enthalten. Wir möchten, dass Sie:

1. Die Länge des Zitats ermitteln und in einer Variablen namens `quoteLength` speichern.
2. Die Indexposition finden, an der `substring` in `quote` erscheint, und diesen Wert in einer Variablen namens `index` speichern.
3. Eine Kombination der Variablen, die Sie haben, und der verfügbaren String-Eigenschaften/-Methoden verwenden, um das ursprüngliche Zitat auf "I do not like green eggs and ham." zu kürzen, und es in einer Variablen namens `revisedQuote` speichern.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor daran zu arbeiten.

## Strings 3

In der nächsten String-Aufgabe wird Ihnen dasselbe Zitat gegeben, mit dem Sie in der vorherigen Aufgabe geendet haben, aber es ist etwas kaputt! Wir möchten, dass Sie es reparieren und aktualisieren, wie folgt:

1. Ändern Sie die Groß-/Kleinschreibung, um den korrekten Satzbau zu erreichen (alles klein außer dem ersten Buchstaben groß). Speichern Sie das neue Zitat in einer Variablen namens `fixedQuote`.
2. Ersetzen Sie in `fixedQuote` "green eggs and ham" durch ein anderes Essen, das Sie wirklich nicht mögen.
3. Es gibt eine kleine Korrektur zu machen — fügen Sie am Ende des Zitats einen Punkt hinzu und speichern Sie die endgültige Version in einer Variablen namens `finalQuote`.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor daran zu arbeiten.

## Strings 4

In der letzten String-Aufgabe haben wir Ihnen den Namen eines Theorems, zwei numerische Werte und einen unvollständigen String gegeben (die hinzuzufügenden Teile sind mit Sternchen (`*`) gekennzeichnet). Wir möchten, dass Sie den Wert des Strings wie folgt ändern:

1. Wandeln Sie ihn von einem normalen String-Literal in ein Template-String um.
2. Ersetzen Sie die vier Sternchen durch vier Template-String-Platzhalter. Diese sollten sein:

   1. Der Name des Theorems.
   2. Die beiden Zahlenwerte, die wir haben.
   3. Die Länge der Hypotenuse eines rechtwinkligen Dreiecks, gegeben dass die beiden anderen Seitenlängen den beiden Werten entsprechen, die wir haben. Sie müssen herausfinden, wie man dies mit den gegebenen Werten berechnet. Führen Sie die Berechnung innerhalb des Platzhalters aus.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzustellen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor daran zu arbeiten.
