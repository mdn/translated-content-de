---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
short-title: Loops
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
l10n:
  sourceCommit: 79f1568f8916bd2fa58653f37cad2e66e746f12f
---

{{learnsidebar}}

Das Ziel dieses Fertigkeitstests ist zu bewerten, ob Sie unseren Artikel [Schleifencode](/de/docs/Learn_web_development/Core/Scripting/Loops) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## DOM-Manipulation: als nützlich erachtet

Einige der Fragen unten erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu vervollständigen — zum Beispiel neue HTML-Elemente zu erstellen, deren Textinhalte auf bestimmte Zeichenfolgenwerte setzen und sie in bestehende Elemente auf der Seite verschachteln — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit behandelt, aber Sie haben einige Beispiele gesehen, die davon Gebrauch machen, und wir möchten, dass Sie ein wenig recherchieren, welche DOM APIs Sie benötigen, um die Fragen erfolgreich beantworten zu können. Ein guter Ausgangspunkt ist unser [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) Tutorial.

## Schleifen 1

In unserer ersten Schleifenaufgabe möchten wir, dass Sie damit beginnen, eine einfache Schleife zu erstellen, die alle Elemente im bereitgestellten `myArray` durchläuft und sie auf dem Bildschirm in Listenelementen (d.h. [`<li>`](/de/docs/Web/HTML/Element/li)-Elemente) ausgibt, welche dem bereitgestellten `list` hinzugefügt werden.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 2

In dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das bei Angabe eines Namens ein Array von {{Glossary("Object", "Objekten")}} durchsucht, die Namen und Telefonnummern (`phonebook`) enthalten, und wenn der Name gefunden wird, den Namen und die Telefonnummer in das Paragraphenelement (`para`) ausgibt und dann die Schleife verlässt, bevor sie vollständig ausgeführt wird.

Wenn Sie noch nicht über Objekte gelesen haben, keine Sorge! Für den Moment müssen Sie nur wissen, wie Sie auf ein Mitglied-Wert-Paar zugreifen. Sie können in den [Grundlagen von JavaScript-Objekten](/de/docs/Learn_web_development/Core/Scripting/Object_basics) darüber nachlesen.

Sie erhalten drei Variablen, um zu beginnen:

- `name` — enthält einen zu suchenden Namen
- `para` — enthält eine Referenz zu einem Paragraphen, der zur Ergebnismeldung verwendet wird
- `phonebook` — enthält die zu durchsuchenden Telefonbucheinträge.

Sie sollten eine Schleifenart verwenden, die Sie in der vorherigen Aufgabe nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 3

In dieser letzten Aufgabe werden Ihnen folgende Dinge zur Verfügung gestellt:

- `i` — beginnt mit einem Wert von 500; soll als Iterator verwendet werden.
- `para` — enthält eine Referenz zu einem Paragraphen, der zur Ergebnismeldung verwendet wird.
- `isPrime()` — eine Funktion, die bei Übergabe einer Zahl `true` zurückgibt, wenn die Zahl eine Primzahl ist, und `false`, wenn nicht.

Sie müssen eine Schleife verwenden, um die Zahlen von 2 bis 500 rückwärts durchzugehen (1 wird nicht als Primzahl gezählt), und die bereitgestellte `isPrime()`-Funktion darauf ausführen. Für jede Zahl, die keine Primzahl ist, fahren Sie mit der nächsten Iteration der Schleife fort. Für jede Zahl, die eine Primzahl ist, fügen Sie sie zusammen mit einem Trennzeichen zum `textContent` des Paragraphen hinzu.

Sie sollten eine Schleifenart verwenden, die Sie in den vorherigen beiden Aufgaben nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
