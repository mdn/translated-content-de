---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Functions
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitentests ist es, zu beurteilen, ob Sie unsere Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function) und [Rückgabewerte von Funktionen](/de/docs/Learn_web_development/Core/Scripting/Return_values) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnisfeld auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu vervollständigen — wie z.B. das Erstellen neuer HTML-Elemente, das Setzen ihres Textinhalts auf bestimmte Zeichenfolgenwerte und das Verschachteln dieser Elemente in vorhandenen Elementen auf der Seite — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die dies verwenden, und wir möchten, dass Sie sich informieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Leitfaden [Einführung in das DOM-Skripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).

## Funktionen 1

Für die erste Aufgabe müssen Sie eine einfache Funktion erstellen — `chooseName()` — die einen zufälligen Namen aus dem bereitgestellten Array (`names`) in den bereitgestellten Absatz (`para`) druckt und diese dann einmal ausführen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 2

Für unsere zweite, auf Funktionen bezogene Aufgabe müssen Sie eine Funktion erstellen, die ein Rechteck auf dem bereitgestellten `<canvas>` (Referenzvariable `canvas`, Kontext verfügbar in `ctx`) zeichnet, basierend auf fünf bereitgestellten Eingangsvariablen:

- `x` — die x-Koordinate des Rechtecks.
- `y` — die y-Koordinate des Rechtecks.
- `width` — die Breite des Rechtecks.
- `height` — die Höhe des Rechtecks.
- `color` — die Farbe des Rechtecks.

Sie möchten die Leinwand vor dem Zeichnen löschen, damit, wenn der Code im Falle der Live-Version aktualisiert wird, nicht viele Rechtecke übereinander gezeichnet werden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 3

In dieser Aufgabe kehren Sie zu dem in Aufgabe 1 gestellten Problem zurück, mit dem Ziel, es zu verbessern. Die drei Verbesserungen, die Sie vornehmen sollen, sind:

1. Refaktorieren Sie den Code, der die Zufallszahl generiert, in eine separate Funktion namens `random()`, die zwei generische Grenzen als Parameter nimmt, zwischen denen die Zufallszahl liegen soll, und das Ergebnis zurückgibt.
2. Aktualisieren Sie die `chooseName()`-Funktion, so dass sie die Zufallszahlenfunktion verwendet, das Array, aus dem gewählt werden soll, als Parameter übernimmt (um es flexibler zu machen), und das Ergebnis zurückgibt.
3. Drucken Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`).

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 4

In dieser Aufgabe haben wir ein Array von Namen und verwenden {{jsxref("Array.filter()")}}, um ein Array von nur Namen zu erhalten, die kürzer als 5 Zeichen sind. Der Filter wird derzeit an eine benannte Funktion `isShort()` übergeben, die die Länge des Namens prüft und `true` zurückgibt, wenn der Name weniger als 5 Zeichen lang ist, und `false` ansonsten.

Wir möchten, dass Sie dies in eine Pfeilfunktion umwandeln. Sehen Sie, wie kompakt Sie es machen können.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
