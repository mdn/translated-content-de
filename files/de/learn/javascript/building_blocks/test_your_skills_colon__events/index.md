---
title: "Testen Sie Ihre Fähigkeiten: Events"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Events
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren Artikel [Einführung in Events](/de/docs/Learn/JavaScript/Building_blocks/Events) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und ihn in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn es einen Fehler gibt, wird er im Ergebnisfenster auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der untenstehenden Fragen erfordern, dass Sie etwas [DOM](/de/docs/Glossary/DOM)-Manipulationscode schreiben, um sie zu vervollständigen – z.B. das Erstellen neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgen und das Einbetten dieser in bestehende Elemente auf der Seite – alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die dies verwenden, und wir möchten, dass Sie einige Recherchen zu den erforderlichen DOM-APIs durchführen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Tutorial [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).

## Events 1

In unserer ersten, eventsbezogenen Aufgabe müssen Sie einen einfachen Event-Handler erstellen, der den Text innerhalb des Buttons (`btn`) ändert, wenn darauf geklickt wird, und wieder zurück ändert, wenn erneut geklickt wird.

Das HTML soll nicht verändert werden, nur das JavaScript.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Anfangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Events 2

Nun schauen wir uns Tastaturevents an. Um diese Bewertung zu bestehen, müssen Sie einen Event-Handler erstellen, der den Kreis auf dem bereitgestellten Canvas bewegt, wenn die WASD-Tasten auf der Tastatur gedrückt werden. Der Kreis wird mit der Funktion `drawCircle()` gezeichnet, die die folgenden Parameter als Eingaben nimmt:

- `x` — die x-Koordinate des Kreises.
- `y` — die y-Koordinate des Kreises.
- `size` — der Radius des Kreises.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events2.html", '100%', 650)}}

> [!CALLOUT]
>
> [Laden Sie den Anfangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Events 3

In der nächsten, eventsbezogenen Aufgabe müssen Sie einen Event-Listener auf das Elternelement der `<button>`s (`<div class="button-bar"> … </div>`) setzen, welcher beim Klicken auf einen der Buttons den Hintergrund der `button-bar` auf die Farbe setzt, die im `data-color` Attribut des Buttons enthalten ist.

Wir möchten, dass Sie dies lösen, ohne durch alle Buttons zu iterieren und jedem einen eigenen Event-Listener zu geben.

Versuchen Sie, den untenstehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events3.html", '100%', 600)}}

> [!CALLOUT]
>
> [Laden Sie den Anfangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.
