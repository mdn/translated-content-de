---
title: "Testen Sie Ihr Können: Funktionen"
short-title: Functions
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: 312c9980fc7a973cea1e16d4a6e9c33b430c8179
---

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unsere Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function) und [Funktionsrückgabewerte](/de/docs/Learn_web_development/Core/Scripting/Return_values) verstanden haben.

> [!NOTE]
> Für die Aufgaben 1–4 können Sie Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnisbereich der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu vervollständigen — beispielsweise das Erstellen neuer HTML-Elemente, das Setzen ihres Textinhalts auf bestimmte String-Werte und das Einfügen in vorhandene Elemente auf der Seite — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die davon Gebrauch machen, und wir möchten, dass Sie etwas recherchieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Einführung ins DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)-Tutorial.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Herausforderung, die sich mit Funktionsrückgabewerten befasst und von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home), erstellt wurde.

Sehen Sie sich den eingebetteten Scrim an und erledigen Sie die Aufgabe auf der Timeline (das kleine Geistersymbol), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie den Scrim weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Returning values in functions" survey="true"></scrim-inline>

## Aufgabe 1

Erstellen Sie für diese Aufgabe eine einfache Funktion—`chooseName()`—die einen zufälligen Namen aus dem bereitgestellten Array (`names`) in den bereitgestellten Absatz (`para`) ausgibt und führen Sie sie anschließend einmal aus.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

Für unsere nächste, funktionsbezogene Aufgabe müssen Sie eine Funktion erstellen, die ein Rechteck auf dem bereitgestellten `<canvas>` (Referenzvariable `canvas`, verfügbarer Kontext in `ctx`) zeichnet, basierend auf den fünf bereitgestellten Eingabevariablen:

- `x` — die x-Koordinate des Rechtecks.
- `y` — die y-Koordinate des Rechtecks.
- `width` — die Breite des Rechtecks.
- `height` — die Höhe des Rechtecks.
- `color` — die Farbe des Rechtecks.

Sie sollten die Leinwand vor dem Zeichnen löschen, damit beim Aktualisieren des Codes im Fall der Live-Version nicht viele Rechtecke übereinander gezeichnet werden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe kehren Sie zu dem in Aufgabe 1 gestellten Problem zurück, mit dem Ziel, es zu verbessern. Die drei Verbesserungen, die Sie vornehmen sollen, sind:

1. Refaktorieren Sie den Code, der die Zufallszahl generiert, in eine separate Funktion namens `random()`, die als Parameter zwei allgemeine Grenzen annimmt, zwischen denen die Zufallszahl liegen soll, und geben Sie das Ergebnis zurück.
2. Aktualisieren Sie die Funktion `chooseName()`, sodass sie die Zufallszahlenfunktion nutzt, das Array zur Auswahl als Parameter annimmt (um sie flexibler zu machen) und das Ergebnis zurückgibt.
3. Geben Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`) aus.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

In dieser Aufgabe haben wir ein Array von Namen, und wir verwenden {{jsxref("Array.filter()")}}, um ein Array mit nur Namen zu erhalten, die kürzer als 5 Zeichen sind. Der Filter wird derzeit mit einer benannten Funktion `isShort()` aufgerufen, die die Länge des Namens überprüft und `true` zurückgibt, wenn der Name weniger als 5 Zeichen lang ist, andernfalls `false`.

Wir möchten, dass Sie dies in eine Pfeilfunktion ändern. Sehen Sie, wie kompakt Sie es machen können.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
