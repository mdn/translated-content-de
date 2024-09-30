---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Functions
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unsere Artikel zu [Funktionen — Wiederverwendbare Codeblöcke](/de/docs/Learn/JavaScript/Building_blocks/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn/JavaScript/Building_blocks/Build_your_own_function) und [Funktionsrückgabewerte](/de/docs/Learn/JavaScript/Building_blocks/Return_values) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird dieser im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern es, dass Sie etwas [DOM](/de/docs/Glossary/DOM)-Manipulationscode schreiben, um sie zu beantworten — z.B. das Erstellen neuer HTML-Elemente, das Setzen ihres Textinhalts auf bestimmte Zeichenfolgenwerte und das Einfügen in vorhandene Elemente auf der Seite — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie werden einige Beispiele gesehen haben, die es nutzen, und wir möchten, dass Sie etwas recherchieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)-Tutorial.

## Funktionen 1

Für die erste Aufgabe müssen Sie eine einfache Funktion erstellen — `chooseName()` — die einen zufälligen Namen aus dem bereitgestellten Array (`names`) im bereitgestellten Absatz (`para`) ausgibt und diese dann einmal ausführen.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 2

Für unsere zweite, funktionsbezogene Aufgabe müssen Sie eine Funktion erstellen, die ein Rechteck auf dem bereitgestellten `<canvas>` (Referenzvariable `canvas`, Kontext verfügbar in `ctx`) zeichnet, basierend auf den fünf bereitgestellten Eingabevariablen:

- `x` — die x-Koordinate des Rechtecks.
- `y` — die y-Koordinate des Rechtecks.
- `width` — die Breite des Rechtecks.
- `height` — die Höhe des Rechtecks.
- `color` — die Farbe des Rechtecks.

Sie sollten die Leinwand vor dem Zeichnen löschen, damit beim Aktualisieren des Codes im Falle der Live-Version nicht viele Rechtecke übereinander gezeichnet werden.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 3

In dieser Aufgabe kehren Sie zu dem Problem aus Aufgabe 1 zurück, um es zu verbessern. Die drei Verbesserungen, die wir von Ihnen erwarten, sind:

1. Refaktorisieren Sie den Code, der die Zufallszahl generiert, in eine separate Funktion namens `random()`, die zwei allgemeine Grenzen als Parameter hat, zwischen denen die Zufallszahl liegen soll, und geben Sie das Ergebnis zurück.
2. Aktualisieren Sie die `chooseName()`-Funktion, sodass sie die Zufallszahlenfunktion nutzt, das Array, aus dem ausgewählt werden soll, als Parameter nimmt (was sie flexibler macht) und das Ergebnis zurückgibt.
3. Geben Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`) aus.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Funktionen 4

In dieser Aufgabe haben wir ein Array von Namen und verwenden {{jsxref("Array.filter()")}}, um ein Array nur mit Namen zu erhalten, die kürzer als 5 Zeichen sind. Der Filter wird derzeit an eine benannte Funktion `isShort()` übergeben, die die Länge des Namens überprüft und `true` zurückgibt, wenn der Name weniger als 5 Zeichen lang ist, sonst `false`.

Wir möchten, dass Sie dies in eine Pfeilfunktion umwandeln. Sehen Sie, wie kompakt Sie es machen können.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
