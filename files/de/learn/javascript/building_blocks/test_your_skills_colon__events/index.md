---
title: "Testen Sie Ihre Fähigkeiten: Events"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Events
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist zu prüfen, ob Sie unseren Artikel [Einführung in Events](/de/docs/Learn/JavaScript/Building_blocks/Events) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnisbereich auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der folgenden Fragen erfordern es, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu lösen — wie z. B. das Erstellen neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgen und das Verschachteln in vorhandenen Elementen auf der Seite — alles über JavaScript.

Wir haben dies im Kurs bisher nicht explizit gelehrt, aber Sie werden einige Beispiele gesehen haben, die dies verwenden, und wir möchten, dass Sie einige Recherchen darüber anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Tutorial [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).

## Events 1

In unserer ersten auf Events bezogenen Aufgabe müssen Sie einen einfachen Event-Handler erstellen, der bewirkt, dass sich der Text im Button (`btn`) ändert, wenn er angeklickt wird, und wieder zurückändert, wenn er erneut angeklickt wird.

Das HTML sollte nicht geändert werden, nur das JavaScript.

Versuchen Sie, den Live-Code unten so zu aktualisieren, dass er das fertige Beispiel nachbildet:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Events 2

Nun schauen wir uns Keyboard-Events an. Um diese Bewertung zu bestehen, müssen Sie einen Event-Handler erstellen, der den Kreis auf der bereitgestellten Leinwand bewegt, wenn die WASD-Tasten auf der Tastatur gedrückt werden. Der Kreis wird mit der Funktion `drawCircle()` gezeichnet, die die folgenden Parameter als Eingaben nimmt:

- `x` — die x-Koordinate des Kreises.
- `y` — die y-Koordinate des Kreises.
- `size` — der Radius des Kreises.

Versuchen Sie, den Live-Code unten so zu aktualisieren, dass er das fertige Beispiel nachbildet:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events2.html", '100%', 650)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Events 3

In der nächsten auf Events bezogenen Aufgabe müssen Sie einen Ereignis-Listener auf das Elternelement der `<button>`s (`<div class="button-bar"> … </div>`) setzen, der beim Klicken auf einen der Buttons den Hintergrund der `button-bar` auf die Farbe ändert, die im `data-color` Attribut des Buttons enthalten ist.

Wir möchten, dass Sie dies lösen, ohne durch alle Buttons zu schleifen und jedem einen eigenen Event-Listener zu geben.

Versuchen Sie, den Live-Code unten so zu aktualisieren, dass er das fertige Beispiel nachbildet:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events3.html", '100%', 600)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
