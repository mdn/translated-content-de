---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
short-title: Loops
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie unseren Artikel [Schleifen-Code](/de/docs/Learn_web_development/Core/Scripting/Loops) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern von Ihnen, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu lösen — wie das Erstellen neuer HTML-Elemente, Setzen ihres Textinhalts auf bestimmte Zeichenfolgen und das Einfügen dieser in bestehende Elemente auf der Seite — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit unterrichtet, aber Sie werden einige Beispiele gesehen haben, die es verwenden, und wir würden Sie bitten, ein wenig zu recherchieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich beantworten zu können. Ein guter Startpunkt ist unser [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)-Tutorial.

## Schleifen 1

In unserer ersten Schleifenaufgabe möchten wir, dass Sie mit dem Erstellen einer einfachen Schleife beginnen, die alle Elemente im bereitgestellten `myArray` durchläuft und sie auf dem Bildschirm innerhalb von Listenelementen (d.h. [`<li>`](/de/docs/Web/HTML/Reference/Elements/li)-Elemente) ausgibt, die an die bereitgestellte `list` angehängt werden.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 2

In dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das einen Namen durchsucht in einem Array von {{Glossary("Object", "Objekten")}}, die Namen und Telefonnummern (`phonebook`) enthalten. Wenn es den Namen findet, gibt es den Namen und die Telefonnummer in den Absatz (`para`) aus und beendet dann die Schleife, bevor sie ihren Lauf vollständig beendet hat.

Wenn Sie noch nicht über Objekte gelesen haben, machen Sie sich keine Sorgen! Für den Moment müssen Sie nur wissen, wie Sie auf ein Mitgliedswertepaar zugreifen. Sie können sich über Objekte im [Grundlagen der JavaScript-Objekte](/de/docs/Learn_web_development/Core/Scripting/Object_basics)-Tutorial informieren.

Ihnen werden drei Variablen zur Verfügung gestellt:

- `name` — enthält einen Namen, nach dem gesucht werden soll
- `para` — enthält eine Referenz zu einem Absatz, der verwendet wird, um die Ergebnisse zu melden
- `phonebook` — enthält die Telefonbucheinträge, die durchsucht werden sollen.

Sie sollten eine Schleifenart verwenden, die Sie in der vorherigen Aufgabe nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 3

In dieser letzten Aufgabe erhalten Sie Folgendes:

- `i` — startet mit einem Wert von 500 und soll als Iterator verwendet werden.
- `para` — enthält eine Referenz zu einem Absatz, der verwendet wird, um die Ergebnisse zu melden.
- `isPrime()` — eine Funktion, die bei Übergabe einer Zahl `true` zurückgibt, wenn die Zahl eine Primzahl ist, und `false`, wenn nicht.

Sie müssen eine Schleife verwenden, um die Zahlen 2 bis 500 rückwärts durchzugehen (1 wird nicht als Primzahl gezählt), und die bereitgestellte Funktion `isPrime()` auf sie auszuführen. Für jede Zahl, die keine Primzahl ist, setzen Sie die nächste Schleifeniteration fort. Für jede Zahl, die eine Primzahl ist, fügen Sie sie dem `textContent` des Absatzes hinzu, zusammen mit einer Art Separator.

Sie sollten eine Schleifenart verwenden, die Sie in den vorherigen zwei Aufgaben nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
