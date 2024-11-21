---
title: "Testen Sie Ihr Wissen: Events"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Events
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{learnsidebar}}

Das Ziel dieses Fertigkeitstests ist zu überprüfen, ob Sie unseren Artikel [Einführung in Events](/de/docs/Learn/JavaScript/Building_blocks/Events) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und ihn in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## DOM-Manipulation: als nützlich erachtet

Einige der nachfolgenden Fragen erfordern von Ihnen, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu lösen – zum Beispiel das Erstellen neuer HTML-Elemente, das Setzen ihres Textinhalts auf bestimmte Zeichenfolgenwerte und das Verschachteln innerhalb vorhandener Elemente auf der Seite – alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie werden einige Beispiele gesehen haben, die dies nutzen, und wir möchten, dass Sie etwas Nachforschung darüber anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Manipulating documents](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) Tutorial.

## Events 1

Bei unserer ersten auf Events bezogenen Aufgabe müssen Sie einen Event-Handler erstellen, der bewirkt, dass der Text innerhalb des Buttons (`btn`) sich ändert, wenn darauf geklickt wird, und sich zurückändert, wenn erneut darauf geklickt wird.

Das HTML sollte nicht verändert werden, nur das JavaScript.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Events 2

Nun betrachten wir Tastatur-Events. Um diese Bewertung zu bestehen, müssen Sie einen Event-Handler erstellen, der den Kreis auf dem bereitgestellten Canvas bewegt, wenn die WASD-Tasten auf der Tastatur gedrückt werden. Der Kreis wird mit der Funktion `drawCircle()` gezeichnet, die folgende Parameter als Eingaben hat:

- `x` — die x-Koordinate des Kreises.
- `y` — die y-Koordinate des Kreises.
- `size` — der Radius des Kreises.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events2.html", '100%', 650)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Events 3

Bei der nächsten auf Events bezogenen Aufgabe müssen Sie einen Event-Listener auf dem Elternelement der `<button>`s (`<div class="button-bar"> … </div>`) setzen, der, wenn er durch Klicken auf einen der Buttons aufgerufen wird, den Hintergrund der `button-bar` auf die im `data-color`-Attribut des Buttons enthaltene Farbe setzt.

Wir möchten, dass Sie dies lösen, ohne durch alle Buttons zu schleifen und jedem von ihnen einen eigenen Event-Listener zu geben.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events3.html", '100%', 600)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
