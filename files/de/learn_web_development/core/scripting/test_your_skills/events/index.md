---
title: "Testen Sie Ihre Fähigkeiten: Events"
short-title: Events
slug: Learn_web_development/Core/Scripting/Test_your_skills/Events
l10n:
  sourceCommit: 79f1568f8916bd2fa58653f37cad2e66e746f12f
---

{{learnsidebar}}

Ziel dieses Fähigkeits-Tests ist es, zu bewerten, ob Sie unseren Artikel [Einführung in Events](/de/docs/Learn_web_development/Core/Scripting/Events) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnisbereich auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie stecken bleiben, können Sie sich an uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der folgenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu beantworten — z. B. das Erstellen neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgen und das Einfügen dieser Elemente in bestehende Elemente der Seite — alles per JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die es nutzen, und wir möchten, dass Sie etwas recherchieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Events 1

In unserer ersten, mit Events verbundenen Aufgabe müssen Sie einen Event-Handler erstellen, der bewirkt, dass sich der Text im Button (`btn`) ändert, wenn darauf geklickt wird, und bei erneutem Klicken wieder zurückändert.

Das HTML sollte nicht verändert werden, nur das JavaScript.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Events 2

Nun schauen wir uns Tastaturereignisse an. Um diese Bewertung zu bestehen, müssen Sie einen Event-Handler erstellen, der den Kreis auf dem bereitgestellten Canvas bewegt, wenn die WASD-Tasten auf der Tastatur gedrückt werden. Der Kreis wird mit der Funktion `drawCircle()` gezeichnet, die folgende Parameter als Eingaben nimmt:

- `x` — die x-Koordinate des Kreises.
- `y` — die y-Koordinate des Kreises.
- `size` — der Radius des Kreises.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events2.html", '100%', 650)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Events 3

In der nächsten, mit Events verbundenen Aufgabe müssen Sie einen Event-Listener auf das Elternelement der `<button>`s (`<div class="button-bar"> … </div>`) setzen, der, wenn er durch Klicken auf einen der Buttons ausgelöst wird, den Hintergrund der `button-bar` auf die im `data-color` Attribut des Buttons enthaltene Farbe setzt.

Wir möchten, dass Sie dies lösen, ohne alle Buttons zu durchlaufen und jedem einen eigenen Event-Listener zu geben.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events3.html", '100%', 600)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.
