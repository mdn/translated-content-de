---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
short-title: Loops
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unseren Artikel [Schleifen von Code](/de/docs/Learn_web_development/Core/Scripting/Loops) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
>
> Sollten Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu lösen – wie das Erstellen neuer HTML-Elemente, das Festlegen ihrer Textinhalte auf bestimmte Zeichenfolgenwerte und das Einfügen in bestehende Elemente auf der Seite – alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit vermittelt, aber Sie werden einige Beispiele gesehen haben, die dies nutzen. Wir möchten, dass Sie etwas recherchieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Schleifen 1

In unserer ersten Schleifenaufgabe möchten wir, dass Sie mit einer einfachen Schleife beginnen, die durch alle Elemente im bereitgestellten `myArray` geht und sie auf dem Bildschirm innerhalb von Listenelementen (d.h. [`<li>`](/de/docs/Web/HTML/Reference/Elements/li)-Elementen) ausgibt, die der bereitgestellten `list` angefügt werden.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 2

In dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das, wenn ein Name gegeben ist, ein Array von {{Glossary("Object", "Objekten")}} durchsucht, das Namen und Telefonnummern (`phonebook`) enthält. Wenn der Name gefunden wird, gibt es den Namen und die Telefonnummer in dem Paragraphen (`para`) aus und beendet dann die Schleife, bevor sie vollständig durchlaufen wurde.

Falls Sie noch nicht über Objekte gelesen haben, keine Sorge! Vorerst müssen Sie nur wissen, wie man auf ein Mitglied-Wert-Paar zugreift. Sie können sich das Tutorial [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) durchlesen.

Ihnen werden drei Variablen zur Verfügung gestellt, mit denen Sie beginnen können:

- `name` — enthält einen zu suchenden Namen
- `para` — enthält eine Referenz zu einem Paragraphen, der verwendet wird, um die Ergebnisse auszugeben
- `phonebook` - enthält die Telefonbucheinträge zur Durchsuchung.

Sie sollten eine Art Schleife verwenden, die Sie in der vorherigen Aufgabe noch nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 3

In dieser letzten Aufgabe werden Ihnen folgende Elemente zur Verfügung gestellt:

- `i` — beginnt mit einem Wert von 500; soll als Schleifenvariabler verwendet werden.
- `para` — enthält eine Referenz zu einem Paragraphen, der verwendet wird, um die Ergebnisse auszugeben.
- `isPrime()` — eine Funktion, die, wenn ihr eine Zahl übergeben wird, `true` zurückgibt, wenn die Zahl eine Primzahl ist, und `false`, wenn nicht.

Sie müssen eine Schleife verwenden, um die Zahlen von 2 bis 500 rückwärts zu durchlaufen (1 wird nicht als Primzahl gezählt) und die bereitgestellte `isPrime()`-Funktion auf sie anwenden. Für jede Zahl, die keine Primzahl ist, fahren Sie mit der nächsten Iteration der Schleife fort. Für jede Zahl, die eine Primzahl ist, fügen Sie sie dem `textContent` des Paragraphen zusammen mit einem Trennzeichen hinzu.

Sie sollten eine Art Schleife verwenden, die Sie in den vorherigen beiden Aufgaben noch nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
