---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
short-title: Functions
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie unsere Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function) und [Rückgabewerte von Funktionen](/de/docs/Learn_web_development/Core/Scripting/Return_values) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird dieser im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der folgenden Fragen erfordern von Ihnen, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu lösen — wie das Erstellen neuer HTML-Elemente, Setzen ihrer Textinhalte auf bestimmte Zeichenfolgenwerte und das Einfügen dieser in bestehende Elemente auf der Seite — alles über JavaScript.

Wir haben dies bisher im Kurs nicht ausdrücklich gelehrt, aber Sie haben einige Beispiele gesehen, die dies verwenden, und wir würden von Ihnen erwarten, dass Sie etwas Recherche betreiben, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich beantworten zu können. Ein guter Ausgangspunkt ist unser [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)-Tutorial.

## Funktionen 1

Für die erste Aufgabe müssen Sie eine einfache Funktion — `chooseName()` — erstellen, die einen zufälligen Namen aus dem bereitgestellten Array (`names`) in den bereitgestellten Absatz (`para`) druckt und sie dann einmal ausführen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 2

Für unsere zweite auf Funktionen bezogene Aufgabe müssen Sie eine Funktion erstellen, die ein Rechteck auf das bereitgestellte `<canvas>` (Referenzvariable `canvas`, Kontext verfügbar in `ctx`) zeichnet, basierend auf den fünf bereitgestellten Eingabevariablen:

- `x` — die x-Koordinate des Rechtecks.
- `y` — die y-Koordinate des Rechtecks.
- `width` — die Breite des Rechtecks.
- `height` — die Höhe des Rechtecks.
- `color` — die Farbe des Rechtecks.

Sie sollten die Leinwand vor dem Zeichnen löschen, damit im Fall der Live-Version, wenn der Code aktualisiert wird, nicht viele Rechtecke übereinander gezeichnet werden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 3

In dieser Aufgabe kehren Sie zum in Aufgabe 1 gestellten Problem zurück, mit dem Ziel, es zu verbessern. Die drei Verbesserungen, die wir von Ihnen erwarten, sind:

1. Refaktorieren Sie den Code, der die Zufallszahl generiert, in eine separate Funktion namens `random()`, die als Parameter zwei generische Grenzen entgegennimmt, zwischen denen die Zufallszahl liegen soll, und das Ergebnis zurückgibt.
2. Aktualisieren Sie die `chooseName()`-Funktion, sodass sie die Zufallszahl-Funktion verwendet, das Array, aus dem ausgewählt werden soll, als Parameter entgegennimmt (um sie flexibler zu machen) und das Ergebnis zurückgibt.
3. Drucken Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`).

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 4

In dieser Aufgabe haben wir ein Array von Namen und verwenden {{jsxref("Array.filter()")}}, um ein Array von nur Namen zu erhalten, die kürzer als 5 Zeichen sind. Der Filter erhält momentan eine benannte Funktion `isShort()`, die die Länge des Namens überprüft und `true` zurückgibt, wenn der Name kürzer als 5 Zeichen ist, und `false` andernfalls.

Wir würden gerne, dass Sie dies in eine Pfeilfunktion umwandeln. Sehen Sie, wie kompakt Sie es gestalten können.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
