---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Loops
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel über [Schleifen im Code](/de/docs/Learn_web_development/Core/Scripting/Loops) verstanden haben.

> [!NOTE]
> Sie können Lösungsansätze ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der folgenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu lösen — zum Beispiel neue HTML-Elemente erstellen, ihre Textinhalte auf bestimmte Zeichenfolgenwerte setzen und sie innerhalb bestehender Elemente auf der Seite verschachteln — alles über JavaScript.

Wir haben dies in diesem Kurs noch nicht ausdrücklich gelehrt, aber Sie haben einige Beispiele gesehen, die davon Gebrauch machen, und wir möchten, dass Sie etwas Forschung darüber betreiben, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [DOM-Scripting-Einführungstutorial](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).

## Schleifen 1

Bei unserer ersten Aufgabe zur Schleifenprogrammierung möchten wir, dass Sie beginnen, indem Sie eine einfache Schleife erstellen, die alle Elemente im bereitgestellten `myArray` durchläuft und sie auf dem Bildschirm innerhalb von Listenelementen (d.h. [`<li>`](/de/docs/Web/HTML/Element/li)-Elementen) ausgibt, die der bereitgestellten `list` angefügt werden.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 2

In dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das anhand eines Namens ein Array von {{Glossary("Object", "Objekten")}} durchsucht, die Namen und Telefonnummern (`phonebook`) enthalten, und wenn der Name gefunden wird, den Namen und die Telefonnummer in den Absatz (`para`) ausgibt und die Schleife verlässt, bevor sie vollständig durchlaufen ist.

Wenn Sie noch nicht über Objekte gelesen haben, machen Sie sich keine Sorgen! Für den Moment müssen Sie nur wissen, wie Sie auf ein Wert-Paar zugreifen können. Sie können im Tutorial [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) mehr über Objekte lesen.

Sie erhalten drei Variablen, um zu beginnen:

- `name` — enthält einen zu suchenden Namen
- `para` — enthält eine Referenz zu einem Absatz, der verwendet wird, um die Ergebnisse zu melden
- `phonebook` — enthält die Telefonbucheinträge, die durchsucht werden sollen.

Sie sollten eine Schleifenart verwenden, die Sie in der vorherigen Aufgabe noch nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 3

In dieser letzten Aufgabe erhalten Sie Folgendes:

- `i` — beginnt mit einem Wert von 500; soll als Zähler verwendet werden.
- `para` — enthält eine Referenz zu einem Absatz, der verwendet wird, um die Ergebnisse zu melden.
- `isPrime()` — eine Funktion, die, wenn sie mit einer Zahl übergeben wird, `true` zurückgibt, wenn die Zahl eine Primzahl ist, und `false` andernfalls.

Sie müssen eine Schleife verwenden, um die Zahlen von 2 bis 500 rückwärts zu durchlaufen (1 wird nicht als Primzahl gezählt), und die bereitgestellte `isPrime()`-Funktion auf sie ausführen. Für jede Zahl, die keine Primzahl ist, fahren Sie mit der nächsten Schleifeniteration fort. Für jede Zahl, die eine Primzahl ist, fügen Sie sie dem `textContent` des Absatzes zusammen mit einer Art Trennzeichen hinzu.

Sie sollten eine Schleifenart verwenden, die Sie in den vorherigen beiden Aufgaben noch nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
