---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Functions
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unsere Artikel zu [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn/JavaScript/Building_blocks/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn/JavaScript/Building_blocks/Build_your_own_function) und [Funktionsrückgabewerte](/de/docs/Learn/JavaScript/Building_blocks/Return_values) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnisbereich auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der untenstehenden Fragen erfordern, dass Sie etwas [DOM](/de/docs/Glossary/DOM)-Manipulationscode schreiben, um sie zu vervollständigen — zum Beispiel neue HTML-Elemente erstellen, deren Textinhalte auf bestimmte Zeichenfolgenwerte setzen und sie in bestehende Elemente auf der Seite einfügen — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die es verwenden, und wir möchten, dass Sie einige Recherchen anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Tutorial [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).

## Funktionen 1

Für die erste Aufgabe müssen Sie eine einfache Funktion — `chooseName()` — erstellen, die einen zufälligen Namen aus dem bereitgestellten Array (`names`) im bereitgestellten Absatz (`para`) ausgibt und sie dann einmal ausführen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html), um in Ihrem eigenen oder einem Online-Editor zu arbeiten.

## Funktionen 2

Für unsere zweite auf Funktionen bezogene Aufgabe müssen Sie eine Funktion erstellen, die ein Rechteck auf das bereitgestellte `<canvas>` zeichnet (Referenzvariable `canvas`, Kontext verfügbar in `ctx`), basierend auf den fünf bereitgestellten Eingangsvariablen:

- `x` — die x-Koordinate des Rechtecks.
- `y` — die y-Koordinate des Rechtecks.
- `width` — die Breite des Rechtecks.
- `height` — die Höhe des Rechtecks.
- `color` — die Farbe des Rechtecks.

Sie sollten die Leinwand vor dem Zeichnen löschen, damit, wenn der Code im Falle der Live-Version aktualisiert wird, nicht viele Rechtecke aufeinander gezeichnet werden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html), um in Ihrem eigenen oder einem Online-Editor zu arbeiten.

## Funktionen 3

In dieser Aufgabe kehren Sie zu dem in Aufgabe 1 gestellten Problem zurück, mit dem Ziel, es zu verbessern. Die drei Verbesserungen, die Sie vornehmen sollen, sind:

1. Refaktorisieren Sie den Code, der die Zufallszahl generiert, in eine separate Funktion namens `random()`, die als Parameter zwei generische Grenzen nimmt, zwischen denen die Zufallszahl liegen soll, und das Ergebnis zurückgibt.
2. Aktualisieren Sie die Funktion `chooseName()`, so dass sie die Zufallszahlenfunktion verwendet, das Array, aus dem ausgewählt werden soll, als Parameter annimmt (um sie flexibler zu machen), und das Ergebnis zurückgibt.
3. Geben Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`) aus.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html), um in Ihrem eigenen oder einem Online-Editor zu arbeiten.

## Funktionen 4

In dieser Aufgabe haben wir ein Array von Namen und verwenden {{jsxref("Array.filter()")}}, um ein Array nur mit Namen zu erhalten, die kürzer als 5 Zeichen sind. Der Filter wird derzeit an eine benannte Funktion `isShort()` übergeben, die die Länge des Namens überprüft und `true` zurückgibt, wenn der Name weniger als 5 Zeichen lang ist, und andernfalls `false`.

Wir möchten, dass Sie dies in eine Pfeilfunktion ändern. Sehen Sie, wie kompakt Sie es machen können.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html), um in Ihrem eigenen oder einem Online-Editor zu arbeiten.
