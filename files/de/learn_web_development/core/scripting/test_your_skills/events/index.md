---
title: "Testen Sie Ihre Fähigkeiten: Events"
short-title: Events
slug: Learn_web_development/Core/Scripting/Test_your_skills/Events
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieser Fertigkeitsprüfung ist es zu beurteilen, ob Sie unseren Artikel [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der folgenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie abzuschließen — wie z.B. die Erstellung neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgenwerte und das Verschachteln dieser innerhalb bestehender Elemente auf der Seite — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie werden einige Beispiele gesehen haben, die davon Gebrauch machen, und wir möchten, dass Sie einige Recherchen darüber anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)-Tutorial.

## Ereignisse 1

In unserer ersten auf Ereignissen basierenden Aufgabe müssen Sie einen Ereignishandler erstellen, der den Text innerhalb des Buttons (`btn`) ändert, wenn er angeklickt wird, und wieder ändert, wenn er erneut angeklickt wird.

Das HTML sollte nicht geändert werden; nur das JavaScript.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Ereignisse 2

Nun schauen wir uns Tastaturereignisse an. Um diese Bewertung zu bestehen, müssen Sie einen Ereignishandler erstellen, der den Kreis auf der bereitgestellten Leinwand bewegt, wenn die WASD-Tasten auf der Tastatur gedrückt werden. Der Kreis wird mit der Funktion `drawCircle()` gezeichnet, die folgende Parameter als Eingaben nimmt:

- `x` — die x-Koordinate des Kreises.
- `y` — die y-Koordinate des Kreises.
- `size` — der Radius des Kreises.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events2.html", '100%', 650)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Ereignisse 3

In der nächsten auf Ereignissen basierenden Aufgabe müssen Sie einen Ereignis-Listener auf das Elternelement der `<button>`s (`<div class="button-bar"> … </div>`) setzen, welcher beim Klicken auf einen der Buttons den Hintergrund der `button-bar` auf die in dem `data-color`-Attribut des Buttons enthaltene Farbe setzt.

Wir möchten, dass Sie dies lösen, ohne durch alle Buttons zu schleifen und jedem einen eigenen Ereignis-Listener zu geben.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events3.html", '100%', 600)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
