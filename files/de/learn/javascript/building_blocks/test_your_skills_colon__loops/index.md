---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Loops
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist zu beurteilen, ob Sie unseren Artikel [Schleifen im Code](/de/docs/Learn/JavaScript/Building_blocks/Looping_code) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und ihn in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
>
> Wenn Sie stecken bleiben, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich betrachtet

Einige der folgenden Fragen erfordern, dass Sie etwas {{Glossary("DOM", "DOM")}}-Manipulationscode schreiben, um sie zu vervollständigen — wie das Erstellen neuer HTML-Elemente, das Setzen ihrer Textinhalte auf bestimmte Zeichenfolgen und das Verschachteln dieser Elemente innerhalb bestehender Elemente auf der Seite — alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die es benutzen, und wir möchten, dass Sie ein wenig recherchieren, welche DOM-APIs Sie brauchen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Tutorial [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).

## Schleifen 1

In unserer ersten Schleifenaufgabe möchten wir, dass Sie mit einer einfachen Schleife beginnen, die alle Elemente im bereitgestellten `myArray` durchläuft und sie innerhalb von Listenelementen (das heißt, [`<li>`](/de/docs/Web/HTML/Element/li)-Elementen) auf dem Bildschirm ausgibt, die der bereitgestellten `list` hinzugefügt werden.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 2

In dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das, bei Eingabe eines Namens, ein Array von {{Glossary("Object", "Objekten")}} durchsucht, das Namen und Telefonnummern (`phonebook`) enthält. Wenn es den Namen findet, soll es den Namen und die Telefonnummer in den Absatz (`para`) ausgeben und dann die Schleife beenden, bevor sie vollständig durchlaufen wurde.

Wenn Sie noch nicht über Objekte gelesen haben, machen Sie sich keine Sorgen! Für den Moment müssen Sie nur wissen, wie Sie auf ein Mitglieder-Werte-Paar zugreifen. Sie können mehr über Objekte im Tutorial [JavaScript-Objektgrundlagen](/de/docs/Learn/JavaScript/Objects/Basics) lesen.

Ihnen werden drei Variablen zur Verfügung gestellt:

- `name` — enthält einen Namen, nach dem gesucht werden soll
- `para` — enthält einen Verweis auf einen Absatz, der benutzt wird, um die Ergebnisse anzuzeigen
- `phonebook` - enthält die Telefonbuch-Einträge, die durchsucht werden sollen.

Sie sollten einen Schleifentyp verwenden, den Sie in der vorherigen Aufgabe nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 3

In dieser letzten Aufgabe wird Ihnen Folgendes zur Verfügung gestellt:

- `i` — beginnt mit einem Wert von 500; soll als Iterator verwendet werden.
- `para` — enthält einen Verweis auf einen Absatz, der benutzt wird, um die Ergebnisse anzuzeigen.
- `isPrime()` — eine Funktion, die bei Übermittlung einer Zahl `true` zurückgibt, wenn die Zahl eine Primzahl ist, und `false`, wenn nicht.

Sie müssen eine Schleife verwenden, um die Zahlen von 2 bis 500 rückwärts zu durchlaufen (1 wird nicht als Primzahl gezählt), und die bereitgestellte Funktion `isPrime()` auf sie anwenden. Für jede Zahl, die keine Primzahl ist, fahren Sie mit der nächsten Schleifeniteration fort. Für jede Zahl, die eine Primzahl ist, fügen Sie sie zusammen mit einer Art Trennzeichen dem `textContent` des Absatzes hinzu.

Sie sollten einen Schleifentyp verwenden, den Sie in den beiden vorherigen Aufgaben nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
