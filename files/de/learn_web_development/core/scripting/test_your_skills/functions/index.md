---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
short-title: Functions
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Das Ziel dieses Fähigkeitstests ist zu überprüfen, ob Sie unsere Artikel über [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function), und [Rückgabewerte von Funktionen](/de/docs/Learn_web_development/Core/Scripting/Return_values) verstanden haben.

> [!NOTE]
> Für Aufgaben 1–4 können Sie die Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnis-Panel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## DOM-Manipulation: als nützlich erachtet

Für einige der folgenden Fragen müssen Sie etwas {{Glossary("DOM", "DOM")}} Manipulationscode schreiben — wie zum Beispiel neue HTML-Elemente erstellen, deren Textinhalte auf bestimmte Zeichenfolgenwerte setzen und sie in vorhandene Elemente auf der Seite einfügen — alles über JavaScript.

Wir haben dies im Kurs noch nicht ausdrücklich gelehrt, aber Sie haben einige Beispiele gesehen, die es verwenden, und wir möchten, dass Sie einige Nachforschungen darüber anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Interaktive Herausforderung

Zuerst geben wir Ihnen eine unterhaltsame, interaktive Herausforderung, die Rückgabewerte von Funktionen beinhaltet, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Schauen Sie sich das eingebettete Scrim an und erledigen Sie die Aufgabe auf der Zeitleiste (das kleine Geistersymbol), indem Sie die Anweisungen befolgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Rückgabewerte in Funktionen"></scrim-inline>

## Aufgabe 1

Für diese Aufgabe erstellen Sie eine einfache Funktion—`chooseName()`—die einen zufälligen Namen aus dem bereitgestellten Array (`names`) in den bereitgestellten Absatz (`para`) druckt und führen Sie sie dann einmal aus.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

Für unsere nächste, mit Funktionen verknüpfte Aufgabe müssen Sie eine Funktion erstellen, die ein Rechteck auf den bereitgestellten `<canvas>` zeichnet (Referenzvariable `canvas`, Kontext verfügbar in `ctx`), basierend auf den fünf bereitgestellten Eingabevariablen:

- `x` — die x-Koordinate des Rechtecks.
- `y` — die y-Koordinate des Rechtecks.
- `width` — die Breite des Rechtecks.
- `height` — die Höhe des Rechtecks.
- `color` — die Farbe des Rechtecks.

Sie sollten die Leinwand löschen, bevor Sie zeichnen, damit im Falle der Live-Version, wenn der Code aktualisiert wird, nicht viele Rechtecke übereinander gezeichnet werden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe kehren Sie zu dem in Aufgabe 1 angesprochenen Problem zurück, mit dem Ziel, es zu verbessern. Die drei Verbesserungen, die Sie vornehmen sollen, sind:

1. Refaktorieren Sie den Code, der die Zufallszahl generiert, in eine separate Funktion namens `random()`, die als Parameter zwei allgemeine Grenzen übernimmt, zwischen denen die Zufallszahl liegen sollte, und das Ergebnis zurückgibt.
2. Aktualisieren Sie die `chooseName()` Funktion so, dass sie die Zufallszahlfunktion nutzt, das Array, aus dem gewählt werden soll, als Parameter übernimmt (um sie flexibler zu machen) und das Ergebnis zurückgibt.
3. Drucken Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`).

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

In dieser Aufgabe haben wir ein Array von Namen, und wir verwenden {{jsxref("Array.filter()")}}, um ein Array von nur Namen kürzer als 5 Zeichen zu erhalten. Der Filter wird derzeit mit einer benannten Funktion `isShort()` übergeben, die die Länge des Namens überprüft und `true` zurückgibt, wenn der Name weniger als 5 Zeichen lang ist, und `false` andernfalls.

Wir möchten, dass Sie dies in eine Pfeilfunktion ändern. Sehen Sie, wie kompakt Sie es machen können.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
