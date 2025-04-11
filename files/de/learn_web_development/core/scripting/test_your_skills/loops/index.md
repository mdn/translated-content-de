---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
short-title: Loops
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Ziel dieses Tests ist es zu überprüfen, ob Sie unseren Artikel [Schleifen im Code](/de/docs/Learn_web_development/Core/Scripting/Loops) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über eines unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der folgenden Fragen erfordern, dass Sie Code zur {{Glossary("DOM", "DOM")}}-Manipulation schreiben, um sie zu beantworten — z.B. das Erstellen neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgen und das Verschachteln innerhalb bestehender Elemente auf der Seite — alles über JavaScript.

Wir haben dies noch nicht explizit in diesem Kurs gelehrt, aber Sie haben einige Beispiele gesehen, die dies verwenden, und wir möchten, dass Sie etwas recherchieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Tutorial [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).

## Schleifen 1

In unserer ersten Schleifenaufgabe möchten wir, dass Sie mit einer einfachen Schleife beginnen, die alle Elemente im bereitgestellten `myArray` durchläuft und sie auf dem Bildschirm innerhalb von Listenelementen (d.h. [`<li>`](/de/docs/Web/HTML/Reference/Elements/li)-Elementen) ausgibt, die der bereitgestellten `list` hinzugefügt werden.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 2

In dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das, gegebenenfalls mit einem Namen, ein Array von {{Glossary("Object", "Objekten")}} durchsucht, die Namen und Telefonnummern (`phonebook`) enthalten. Wenn es den Namen findet, gibt es den Namen und die Telefonnummer in den Absatz (`para`) aus und verlässt dann die Schleife, bevor sie zu Ende gelaufen ist.

Wenn Sie noch nicht über Objekte gelesen haben, machen Sie sich keine Sorgen! Im Moment müssen Sie nur wissen, wie man auf ein Schlüssel-Wert-Paar zugreift. Sie können sich im Tutorial [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) darüber informieren.

Es werden Ihnen drei Variablen zur Verfügung gestellt:

- `name` — enthält einen zu suchenden Namen
- `para` — enthält eine Referenz auf einen Absatz, der verwendet wird, um die Ergebnisse zu melden
- `phonebook` - enthält die zu durchsuchenden Telefonbucheinträge.

Sie sollten eine Art von Schleife verwenden, die Sie in der vorherigen Aufgabe nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 3

In dieser letzten Aufgabe erhalten Sie Folgendes:

- `i` — beginnt mit einem Wert von 500; ist als Iterator gedacht.
- `para` — enthält eine Referenz auf einen Absatz, der verwendet wird, um die Ergebnisse zu melden.
- `isPrime()` — eine Funktion, die, wenn ihr eine Zahl übergeben wird, `true` zurückgibt, wenn die Zahl eine Primzahl ist, und `false`, wenn nicht.

Sie müssen eine Schleife verwenden, um die Zahlen von 2 bis 500 rückwärts durchzugehen (1 wird nicht als Primzahl gezählt) und die bereitgestellte Funktion `isPrime()` auf sie auszuführen. Für jede Zahl, die keine Primzahl ist, fahren Sie mit der nächsten Schleifeniteration fort. Für jede Zahl, die eine Primzahl ist, fügen Sie sie dem `textContent` des Absatzes zusammen mit einer Art von Separator hinzu.

Sie sollten eine Art von Schleife verwenden, die Sie in den beiden vorherigen Aufgaben nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
