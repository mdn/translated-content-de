---
title: "Testen Sie Ihre Fähigkeiten: Mathematik"
short-title: Math
slug: Learn_web_development/Core/Scripting/Test_your_skills/Math
l10n:
  sourceCommit: 79f1568f8916bd2fa58653f37cad2e66e746f12f
---

{{learnsidebar}}

Das Ziel der Tests auf dieser Seite ist es zu überprüfen, ob Sie den Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn ein Fehler in Ihrem Code vorliegt, wird er im Ergebnispanel auf dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Mathematik 1

Beginnen wir damit, Ihr Wissen über grundlegende mathematische Operatoren zu testen.
Sie erstellen vier numerische Werte, addieren zwei miteinander, subtrahieren einen von einem anderen und multiplizieren dann die Ergebnisse.
Schließlich müssen wir eine Überprüfung schreiben, die beweist, dass dieser Wert eine gerade Zahl ist.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel mit folgenden Schritten nachzustellen:

1. Erstellen Sie vier Variablen, die Zahlen enthalten. Benennen Sie die Variablen sinnvoll.
2. Addieren Sie die ersten beiden Variablen und speichern Sie das Ergebnis in einer anderen Variablen.
3. Subtrahieren Sie die vierte Variable von der dritten und speichern Sie das Ergebnis in einer anderen Variablen.
4. Multiplizieren Sie die Ergebnisse aus den Schritten **2** und **3** und speichern Sie das Ergebnis in einer Variablen namens `finalResult`.
5. Überprüfen Sie, ob `finalResult` eine gerade Zahl ist, indem Sie einen der [arithmetischen Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators) verwenden. Speichern Sie das Ergebnis (`0` für gerade, `1` für ungerade) in einer Variablen namens `evenOddResult`.

Um diesen Test zu bestehen, sollte `finalResult` den Wert `48` und `evenOddResult` den Wert `0` haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Mathematik 2

In der zweiten Aufgabe erhalten Sie zwei Berechnungen, deren Ergebnisse in den Variablen `result` und `result2` gespeichert sind.
Sie müssen die Berechnungen nehmen, sie multiplizieren und das Ergebnis auf zwei Dezimalstellen formatieren.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel mit folgenden Schritten nachzustellen:

1. Multiplizieren Sie `result` und `result2` und weisen Sie das Ergebnis mit Kurzschreibweise der Zuweisung `result` zu.
2. Formatieren Sie `result` so, dass es zwei Dezimalstellen hat, und speichern Sie es in einer Variablen namens `finalResult`.
3. Überprüfen Sie den Datentyp von `finalResult` mit `typeof`. Wenn es sich um einen `string` handelt, konvertieren Sie ihn in einen `number`-Typ und speichern Sie das Ergebnis in einer Variablen namens `finalNumber`.

Um diesen Test zu bestehen, sollte `finalNumber` den Wert `4633.33` haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Mathematik 3

In der letzten Aufgabe für diesen Artikel möchten wir, dass Sie einige Tests schreiben.
Es gibt drei Gruppen, die jeweils aus einer Aussage und zwei Variablen bestehen.
Für jede davon schreiben Sie einen Test, der die gemachte Aussage bestätigt oder widerlegt.
Speichern Sie die Ergebnisse dieser Tests in Variablen namens `weightComparison`, `heightComparison` und `pwdMatch`.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math3.html", '100%', 550)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
