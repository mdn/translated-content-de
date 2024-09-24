---
title: "Testen Sie Ihre Fähigkeiten: Schleifen"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Loops
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel [Schleifen von Code](/de/docs/Learn/JavaScript/Building_blocks/Looping_code) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und ihn in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
>
> Wenn Sie feststecken, können Sie sich an einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## DOM-Manipulation: als nützlich erachtet

Einige der unten stehenden Fragen erfordern, dass Sie etwas [DOM](/de/docs/Glossary/DOM)-Manipulationscode schreiben, um sie zu lösen — wie das Erstellen neuer HTML-Elemente, deren Textinhalt bestimmten Zeichenfolgenwerten zuzuweisen und diese innerhalb bestehender Elemente auf der Seite zu verschachteln — alles mittels JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie haben einige Beispiele gesehen, die davon Gebrauch machen, und wir möchten, dass Sie einige Nachforschungen anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser Tutorial [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).

## Schleifen 1

In unserer ersten Schleifenaufgabe möchten wir, dass Sie mit einer einfachen Schleife beginnen, die alle Elemente des bereitgestellten `myArray` durchläuft und sie auf dem Bildschirm innerhalb von Listenelementen (d.h. [`<li>`](/de/docs/Web/HTML/Element/li)-Elemente) ausgibt, die der bereitgestellten `list` hinzugefügt werden.

> [!CALLOUT]
>
> [Laden Sie das Startmaterial für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 2

In dieser nächsten Aufgabe möchten wir, dass Sie ein einfaches Programm schreiben, das, gegeben einem Namen, ein Array von [Objekten](/de/docs/Glossary/Object) mit Namen und Telefonnummern (`phonebook`) durchsucht und, wenn der Name gefunden wird, den Namen und die Telefonnummer in den Absatz (`para`) ausgibt und dann die Schleife verlässt, bevor sie vollständig durchgelaufen ist.

Wenn Sie noch nicht über Objekte gelesen haben, keine Sorge! Vorläufig müssen Sie nur wissen, wie Sie auf ein Mitglied-Werte-Paar zugreifen. Sie können in dem Tutorial [Grundlagen von JavaScript-Objekten](/de/docs/Learn/JavaScript/Objects/Basics) darüber lesen.

Ihnen werden drei Variablen zur Verfügung gestellt, mit denen Sie beginnen können:

- `name` — enthält einen Namen, nach dem gesucht werden soll
- `para` — enthält einen Verweis auf einen Absatz, der verwendet wird, um die Ergebnisse zu melden
- `phonebook` - enthält die Telefonbucheinträge, die durchsucht werden sollen.

Sie sollten eine Art Schleife verwenden, die Sie in der vorherigen Aufgabe noch nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie das Startmaterial für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Schleifen 3

In dieser letzten Aufgabe wird Ihnen Folgendes bereitgestellt:

- `i` — beginnt mit einem Wert von 500; soll als Iterator verwendet werden.
- `para` — enthält einen Verweis auf einen Absatz, der verwendet wird, um die Ergebnisse zu melden.
- `isPrime()` — eine Funktion, die, wenn sie eine Zahl übergeben bekommt, `true` zurückgibt, wenn die Zahl eine Primzahl ist, andernfalls `false`.

Sie müssen eine Schleife verwenden, um die Zahlen 2 bis 500 rückwärts zu durchlaufen (1 wird nicht als Primzahl gezählt) und die bereitgestellte `isPrime()`-Funktion auf sie anzuwenden. Für jede Zahl, die nicht eine Primzahl ist, setzen Sie die Schleifeniteration fort. Für jede, die eine Primzahl ist, fügen Sie sie dem `textContent` des Absatzes zusammen mit einer Art von Separator hinzu.

Sie sollten eine Art Schleife verwenden, die Sie in den vorherigen beiden Aufgaben noch nicht verwendet haben.

> [!CALLOUT]
>
> [Laden Sie das Startmaterial für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
