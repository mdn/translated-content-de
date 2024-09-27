---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Loops
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu prüfen, ob Sie unseren Artikel [Code-Schleifen](/de/docs/Learn/JavaScript/Building_blocks/Looping_code) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) platzieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern von Ihnen, etwas [DOM](/de/docs/Glossary/DOM)-Manipulationscode zu schreiben, um sie zu vervollständigen – zum Beispiel neue HTML-Elemente zu erstellen, deren Textinhalte auf bestimmte Zeichenfolgenwerte zu setzen und diese in vorhandene Elemente auf der Seite einzufügen – alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie werden einige Beispiele gesehen haben, die dies verwenden, und wir möchten, dass Sie etwas recherchieren, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Tutorial [Manipulating documents](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).

## Schleifen 1

In unserer ersten Schleifenaufgabe möchten wir, dass Sie mit einer einfachen Schleife beginnen, die alle Elemente im bereitgestellten `myArray` durchläuft und sie auf dem Bildschirm innerhalb von Listenelementen (d.h. [`<li>`](/de/docs/Web/HTML/Element/li) Elemente), die an die bereitgestellte `list` angehängt werden, ausgibt.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 2

Bei dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das, gegeben einen Namen, ein Array von [Objekte](/de/docs/Glossary/Object) mit Namen und Telefonnummern (`phonebook`) durchsucht und, wenn es den Namen findet, den Namen und die Telefonnummer in den Absatz (`para`) ausgibt und dann die Schleife beendet, bevor sie ihren Lauf beendet hat.

Wenn Sie noch nichts über Objekte gelesen haben, machen Sie sich keine Sorgen! Im Moment müssen Sie nur wissen, wie Sie auf ein Element-Wert-Paar zugreifen können. Sie können sich im Tutorial [JavaScript-Objekt-Grundlagen](/de/docs/Learn/JavaScript/Objects/Basics) darüber informieren.

Es werden Ihnen drei Variablen zur Verfügung gestellt:

- `name` — enthält einen Namen, nach dem gesucht werden soll
- `para` — enthält einen Verweis auf einen Absatz, der verwendet wird, um die Ergebnisse anzuzeigen
- `phonebook` - enthält die Telefonbucheinträge, die durchsucht werden sollen.

Sie sollten einen Schleifentyp verwenden, den Sie in der vorherigen Aufgabe nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 3

In dieser letzten Aufgabe werden Ihnen Folgendes bereitgestellt:

- `i` — beginnt mit einem Wert von 500; soll als Iterator verwendet werden.
- `para` — enthält einen Verweis auf einen Absatz, der verwendet wird, um die Ergebnisse anzuzeigen.
- `isPrime()` — eine Funktion, die, wenn sie eine Zahl übergeben bekommt, `true` zurückgibt, wenn die Zahl eine Primzahl ist, und `false`, wenn nicht.

Sie müssen eine Schleife verwenden, um die Zahlen von 2 bis 500 rückwärts durchzugehen (1 wird nicht als Primzahl gezählt) und die bereitgestellte Funktion `isPrime()` darauf auszuführen. Für jede Zahl, die keine Primzahl ist, fahren Sie mit der nächsten Schleifeniteration fort. Für jede, die eine Primzahl ist, fügen Sie sie der `textContent` des Absatzes zusammen mit einer Art von Separator hinzu.

Sie sollten einen Schleifentyp verwenden, den Sie in den vorherigen beiden Aufgaben nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
