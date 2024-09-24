---
title: "Testen Sie Ihr Können: Events"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Events
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeits-Tests ist es zu beurteilen, ob Sie unseren Artikel [Einführung in Events](/de/docs/Learn/JavaScript/Building_blocks/Events) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und ihn in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird dieser im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern, dass Sie etwas [DOM](/de/docs/Glossary/DOM)-Manipulationscode schreiben, um sie abzuschließen — zum Beispiel neue HTML-Elemente erstellen, deren Textinhalte auf bestimmte Zeichenfolgenwerte setzen und sie innerhalb bestehender Elemente auf der Seite verschachteln — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die es verwenden, und wir möchten, dass Sie einige Nachforschungen darüber anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Tutorial [Manipulieren von Dokumenten](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).

## Events 1

In unserer ersten, mit Events verbundenen Aufgabe müssen Sie einen einfachen Ereignishandler erstellen, der den Text innerhalb des Buttons (`btn`) ändert, wenn er angeklickt wird, und ihn zurückändert, wenn er erneut angeklickt wird.

Das HTML sollte nicht verändert werden; nur das JavaScript.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Events 2

Jetzt betrachten wir Keyboard-Events. Um diese Bewertung zu bestehen, müssen Sie einen Ereignishandler erstellen, der den Kreis innerhalb der bereitgestellten Leinwand bewegt, wenn die WASD-Tasten auf der Tastatur gedrückt werden. Der Kreis wird mit der Funktion `drawCircle()` gezeichnet, die folgende Parameter als Eingaben erfordert:

- `x` — die x-Koordinate des Kreises.
- `y` — die y-Koordinate des Kreises.
- `size` — der Radius des Kreises.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events2.html", '100%', 650)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Events 3

In der nächsten, mit Events verbundenen Aufgabe müssen Sie einen Ereignislistener auf das Elternelement der `<button>`s (`<div class="button-bar"> … </div>`) setzen, der bei einem Klick auf einen der Buttons den Hintergrund der `button-bar` auf die im `data-color` Attribut des Buttons enthaltene Farbe setzt.

Wir möchten, dass Sie dies lösen, ohne alle Buttons durchlaufen und jedem eigenen Ereignislistener zu geben.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events3.html", '100%', 600)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
