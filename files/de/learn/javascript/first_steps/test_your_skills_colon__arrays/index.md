---
title: "Testen Sie Ihr Wissen: Arrays"
slug: Learn/JavaScript/First_steps/Test_your_skills:_Arrays
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Tests ist es, zu überprüfen, ob Sie unseren [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays) Artikel verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Arrays 1

Lassen Sie uns mit ein wenig grundlegender Array-Praxis beginnen. In dieser Aufgabe möchten wir, dass Sie ein Array mit drei Elementen erstellen, das in einer Variable namens `myArray` gespeichert ist. Die Elemente können alles sein, was Sie wollen — wie wäre es mit Ihren Lieblingsspeisen oder -bands?

Als nächstes ändern Sie die ersten beiden Elemente im Array mit einfacher Klammernotation und Zuweisung. Fügen Sie dann ein neues Element an den Anfang des Arrays hinzu.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Arrays 2

Kommen wir nun zu einer anderen Aufgabe. Hier wird Ihnen ein String zur Verfügung gestellt, mit dem Sie arbeiten sollen. Wir möchten, dass Sie:

1. Den String in ein Array umwandeln und dabei die `+` Zeichen entfernen. Speichern Sie das Ergebnis in einer Variable namens `myArray`.
2. Die Länge des Arrays in einer Variable namens `arrayLength` speichern.
3. Das letzte Element im Array in einer Variable namens `lastItem` speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Arrays 3

Für diese Array-Aufgabe stellen wir Ihnen ein Ausgangs-Array zur Verfügung, und Sie arbeiten in gewisser Weise in die entgegengesetzte Richtung. Sie müssen:

1. Das letzte Element im Array entfernen.
2. Zwei neue Namen am Ende des Arrays hinzufügen.
3. Über jedes Element im Array gehen und seine Indexnummer hinter dem Namen in Klammern hinzufügen, zum Beispiel `Ryu (0)`. Beachten Sie, dass wir in dem Arrays-Artikel nicht lehren, wie dies zu tun ist, also müssen Sie ein wenig recherchieren.
4. Schließlich die Array-Elemente zu einem einzigen String namens `myString` verbinden, wobei ein Trennzeichen von "`-`" verwendet wird.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Arrays 4

Für diese Array-Aufgabe stellen wir Ihnen ein Ausgangs-Array mit den Namen einiger Vögel zur Verfügung.

- Finden Sie den Index des Elements `"Eagles"` und verwenden Sie diesen, um das Element `"Eagles"` zu entfernen.
- Erstellen Sie ein neues Array aus diesem, genannt `eBirds`, das nur Vögel aus dem ursprünglichen Array enthält, deren Namen mit dem Buchstaben "E" beginnen. Beachten Sie, dass {{jsxref("String.prototype.startsWith()", "startsWith()")}} eine großartige Möglichkeit ist, um zu überprüfen, ob ein String mit einem bestimmten Zeichen beginnt.

Wenn es funktioniert, sollten Sie `"Emus,Egrets"` auf der Seite erscheinen sehen.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
