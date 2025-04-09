---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
short-title: Functions
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: 79f1568f8916bd2fa58653f37cad2e66e746f12f
---

{{learnsidebar}}

Ziel dieses Skill-Tests ist es, zu überprüfen, ob Sie unsere Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function) und [Rückgabewerte von Funktionen](/de/docs/Learn_web_development/Core/Scripting/Return_values) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Falls ein Fehler auftritt, wird dieser im Ergebnisfenster auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich angesehen

Einige der folgenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu lösen — wie das Erstellen neuer HTML-Elemente, das Setzen ihres Textinhalts auf bestimmte Zeichenfolgenwerte und das Einbetten in vorhandene Elemente auf der Seite — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie werden einige Beispiele gesehen haben, die es verwenden. Wir möchten, dass Sie einige Recherchen durchführen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Tutorial [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).

## Funktionen 1

Für die erste Aufgabe müssen Sie eine einfache Funktion erstellen — `chooseName()` — die einen zufälligen Namen aus dem bereitgestellten Array (`names`) an den bereitgestellten Absatz (`para`) druckt und sie dann einmal ausführen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 2

Für unsere zweite auf Funktionen bezogene Aufgabe müssen Sie eine Funktion erstellen, die ein Rechteck auf dem bereitgestellten `<canvas>` (Referenzvariable `canvas`, Kontext verfügbar in `ctx`) zeichnet, basierend auf den fünf bereitgestellten Eingabevariablen:

- `x` — die x-Koordinate des Rechtecks.
- `y` — die y-Koordinate des Rechtecks.
- `width` — die Breite des Rechtecks.
- `height` — die Höhe des Rechtecks.
- `color` — die Farbe des Rechtecks.

Sie sollten das Canvas vor dem Zeichnen löschen, damit beim Aktualisieren des Codes im Fall der Live-Version nicht viele Rechtecke übereinander gezeichnet werden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 3

In dieser Aufgabe kehren Sie zu dem Problem zurück, das in Aufgabe 1 gestellt wurde, mit dem Ziel, es zu verbessern. Die drei Verbesserungen, die wir von Ihnen erwarten, sind:

1. Refaktorieren Sie den Code, der die Zufallszahl generiert, in eine separate Funktion namens `random()`, die als Parameter zwei generische Grenzen nimmt, zwischen denen die Zufallszahl liegen soll, und das Ergebnis zurückgibt.
2. Aktualisieren Sie die `chooseName()`-Funktion so, dass sie die Zufallszahlenfunktion verwendet, das Array, aus dem gewählt werden soll, als Parameter übernimmt (was sie flexibler macht) und das Ergebnis zurückgibt.
3. Drucken Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`).

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 4

In dieser Aufgabe haben wir ein Array von Namen und verwenden {{jsxref("Array.filter()")}}, um ein Array mit nur Namen zu erhalten, die kürzer als 5 Zeichen sind. Der Filter wird derzeit mit einer benannten Funktion `isShort()` übergeben, die die Länge des Namens überprüft und `true` zurückgibt, wenn der Name weniger als 5 Zeichen lang ist, andernfalls `false`.

Wir möchten, dass Sie dies in eine Pfeilfunktion ändern. Sehen Sie, wie kompakt Sie es machen können.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
