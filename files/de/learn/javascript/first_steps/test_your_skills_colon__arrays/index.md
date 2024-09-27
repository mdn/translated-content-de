---
title: "Testen Sie Ihre Fähigkeiten: Arrays"
slug: Learn/JavaScript/First_steps/Test_your_skills:_Arrays
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unseren Artikel über [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Arrays 1

Lassen Sie uns mit etwas grundlegender Array-Praxis beginnen. In dieser Aufgabe möchten wir, dass Sie ein Array mit drei Elementen erstellen, das in einer Variablen namens `myArray` gespeichert ist. Die Elemente können beliebig sein — wie wäre es mit Ihren Lieblingsspeisen oder -bands?

Ändern Sie als Nächstes die ersten beiden Elemente im Array mithilfe einfacher Klammernotation und Zuweisung. Fügen Sie dann ein neues Element am Anfang des Arrays hinzu.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Arrays 2

Kommen wir jetzt zu einer anderen Aufgabe. Hier wird Ihnen ein String zur Verfügung gestellt, mit dem Sie arbeiten sollen. Wir möchten, dass Sie:

1. Den String in ein Array umwandeln und dabei die `+`-Zeichen entfernen. Speichern Sie das Ergebnis in einer Variablen namens `myArray`.
2. Die Länge des Arrays in einer Variablen namens `arrayLength` speichern.
3. Das letzte Element im Array in einer Variablen namens `lastItem` speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Arrays 3

Für diese Array-Aufgabe stellen wir Ihnen ein Anfangsarray zur Verfügung, und Sie werden in gewisser Weise in die entgegengesetzte Richtung arbeiten. Sie müssen:

1. Das letzte Element im Array entfernen.
2. Zwei neue Namen am Ende des Arrays hinzufügen.
3. Jedes Element im Array durchgehen und seine Indexnummer in Klammern nach dem Namen hinzufügen, zum Beispiel `Ryu (0)`. Beachten Sie, dass wir im Artikel über Arrays nicht lehren, wie man dies tut, sodass Sie etwas recherchieren müssen.
4. Schließlich die Array-Elemente in einem einzelnen String namens `myString` zusammenfügen, mit einem Trennzeichen von `"-"`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Arrays 4

Für diese Array-Aufgabe stellen wir Ihnen ein Anfangsarray zur Verfügung, das die Namen einiger Vögel auflistet.

- Finden Sie den Index des Elements `"Eagles"` und verwenden Sie diesen, um das Element `"Eagles"` zu entfernen.
- Erstellen Sie ein neues Array aus diesem, genannt `eBirds`, das nur Vögel aus dem ursprünglichen Array enthält, deren Namen mit dem Buchstaben "E" beginnen. Beachten Sie, dass {{jsxref("String.prototype.startsWith()", "startsWith()")}} eine großartige Möglichkeit ist, um zu prüfen, ob ein String mit einem bestimmten Zeichen beginnt.

Wenn es funktioniert, sollten Sie `"Emus,Egrets"` auf der Seite erscheinen sehen.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
