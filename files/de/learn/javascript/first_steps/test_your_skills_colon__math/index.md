---
title: "Testen Sie Ihre Kenntnisse: Mathematik"
slug: Learn/JavaScript/First_steps/Test_your_skills:_Math
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel der Tests auf dieser Seite ist es, zu beurteilen, ob Sie den Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn/JavaScript/First_steps/Math) verstanden haben.

> [!NOTE]
> Sie können die Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn ein Fehler in Ihrem Code auftritt, wird er im Ergebnispanel auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Mathematik 1

Beginnen wir, indem wir Ihr Wissen über grundlegende Mathematikoperatoren testen.
Sie werden vier numerische Werte erstellen, zwei addieren, einen von einem anderen subtrahieren und dann die Ergebnisse multiplizieren.
Schließlich müssen wir eine Überprüfung schreiben, die beweist, dass dieser Wert eine gerade Zahl ist.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel mit den folgenden Schritten nachzubilden:

1. Erstellen Sie vier Variablen, die Zahlen enthalten. Nennen Sie die Variablen sinnvoll.
2. Addieren Sie die ersten beiden Variablen und speichern Sie das Ergebnis in einer anderen Variablen.
3. Subtrahieren Sie die vierte Variable von der dritten und speichern Sie das Ergebnis in einer weiteren Variablen.
4. Multiplizieren Sie die Ergebnisse aus den Schritten **2** und **3** und speichern Sie das Ergebnis in einer Variablen mit dem Namen `finalResult`.
5. Überprüfen Sie, ob `finalResult` eine gerade Zahl ist, indem Sie einen der [arithmetischen Operatoren](/de/docs/Learn/JavaScript/First_steps/Math#arithmetic_operators) verwenden. Speichern Sie das Ergebnis (`0` für gerade, `1` für ungerade) in einer Variablen mit dem Namen `evenOddResult`.

Um diesen Test zu bestehen, sollte `finalResult` den Wert `48` und `evenOddResult` den Wert `0` haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Mathematik 2

In der zweiten Aufgabe werden Ihnen zwei Berechnungen mit den in den Variablen `result` und `result2` gespeicherten Ergebnissen zur Verfügung gestellt.
Sie müssen die Berechnungen multiplizieren und das Ergebnis auf zwei Dezimalstellen formatieren.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel mit den folgenden Schritten nachzubilden:

1. Multiplizieren Sie `result` und `result2` und weisen Sie das Ergebnis wieder `result` zu (verwenden Sie die Kurzschreibweise der Zuweisung).
2. Formatieren Sie `result`, sodass es zwei Dezimalstellen hat, und speichern Sie es in einer Variablen mit dem Namen `finalResult`.
3. Überprüfen Sie den Datentyp von `finalResult` mit `typeof`. Wenn es sich um einen `string` handelt, konvertieren Sie es in einen `number`-Typ und speichern Sie das Ergebnis in einer Variablen namens `finalNumber`.

Um diesen Test zu bestehen, sollte `finalNumber` ein Ergebnis von `4633.33` haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Mathematik 3

In der letzten Aufgabe zu diesem Artikel möchten wir, dass Sie einige Tests schreiben.
Es gibt drei Gruppen, die jeweils aus einer Aussage und zwei Variablen bestehen.
Für jede müssen Sie einen Test schreiben, der die gemachte Aussage beweist oder widerlegt.
Speichern Sie die Ergebnisse dieser Tests in Variablen mit den Namen `weightComparison`, `heightComparison` und `pwdMatch`.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math3.html", '100%', 550)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
