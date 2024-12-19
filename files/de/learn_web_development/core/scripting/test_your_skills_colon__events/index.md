---
title: "Testen Sie Ihre Fähigkeiten: Events"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Events
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie unseren Artikel [Einstieg in Events](/de/docs/Learn_web_development/Core/Scripting/Events) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird dieser im Ergebnisbereich auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## DOM-Manipulation: als nützlich erachtet

Um einige der folgenden Fragen zu beantworten, müssen Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben — z.B. neue HTML-Elemente erstellen, deren Textinhalte auf bestimmte Zeichenfolgenwerte setzen und sie via JavaScript in vorhandene Elemente auf der Seite einfügen.

Wir haben dies im Kurs noch nicht explizit vermittelt, aber Sie haben einige Beispiele gesehen, die davon Gebrauch machen, und wir möchten, dass Sie etwas Recherche darüber betreiben, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Events 1

In unserer ersten, auf Events bezogenen Aufgabe müssen Sie einen Ereignis-Handler erstellen, der den Text innerhalb des Buttons (`btn`) ändert, wenn er angeklickt wird, und ihn bei einem weiteren Klick zurückändert.

Das HTML sollte nicht geändert werden; nur das JavaScript.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Events 2

Nun schauen wir uns Tastatur-Events an. Um diese Bewertung zu bestehen, müssen Sie einen Ereignis-Handler erstellen, der den Kreis auf der bereitgestellten Leinwand bewegt, wenn die WASD-Tasten auf der Tastatur gedrückt werden. Der Kreis wird mit der Funktion `drawCircle()` gezeichnet, die folgende Parameter als Eingaben nimmt:

- `x` — die x-Koordinate des Kreises.
- `y` — die y-Koordinate des Kreises.
- `size` — der Radius des Kreises.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events2.html", '100%', 650)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Events 3

In der nächsten, auf Events bezogenen Aufgabe müssen Sie einen Ereignis-Listener auf dem übergeordneten Element der `<button>`s (`<div class="button-bar"> … </div>`) setzen, der beim Klicken eines beliebigen Buttons den Hintergrund der `button-bar` auf die Farbe setzt, die im `data-color` Attribut des Buttons enthalten ist.

Wir möchten, dass Sie dies lösen, ohne alle Buttons zu durchlaufen und jedem einen eigenen Ereignis-Listener zu geben.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events3.html", '100%', 600)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
