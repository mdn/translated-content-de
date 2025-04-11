---
title: "Testen Sie Ihre Fähigkeiten: Arrays"
short-title: Arrays
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Ziel dieses Fähigkeitstests ist es, festzustellen, ob Sie unseren [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays)-Artikel verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Arrays 1

Lassen Sie uns mit etwas grundlegender Array-Praxis beginnen. In dieser Aufgabe möchten wir, dass Sie ein Array mit drei Elementen erstellen, das in einer Variablen namens `myArray` gespeichert wird. Die Elemente können beliebig sein – wie wäre es mit Ihren Lieblingsspeisen oder -bands?

Ändern Sie als Nächstes die ersten beiden Elemente im Array mithilfe der einfachen Klammernnotation und Zuweisung. Fügen Sie dann ein neues Element am Anfang des Arrays hinzu.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Arrays 2

Nun kommen wir zu einer weiteren Aufgabe. Hier steht Ihnen eine Zeichenfolge zur Verfügung, mit der Sie arbeiten sollen. Wir möchten, dass Sie:

1. Die Zeichenfolge in ein Array umwandeln und dabei die `+` Zeichen entfernen. Speichern Sie das Ergebnis in einer Variablen namens `myArray`.
2. Die Länge des Arrays in einer Variablen namens `arrayLength` speichern.
3. Das letzte Element im Array in einer Variablen namens `lastItem` speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Arrays 3

Für diese Array-Aufgabe stellen wir Ihnen ein Anfangsarray zur Verfügung, und Sie arbeiten in gewisser Weise in die entgegengesetzte Richtung. Sie müssen:

1. Das letzte Element im Array entfernen.
2. Zwei neue Namen am Ende des Arrays hinzufügen.
3. Über jedes Element im Array gehen und dessen Indexnummer nach dem Namen in Klammern hinzufügen, zum Beispiel `Ryu (0)`. Beachten Sie, dass wir dies nicht im Arrays-Artikel lehren, also müssen Sie etwas recherchieren.
4. Schließlich die Array-Elemente zu einem einzelnen String namens `myString` zusammenfügen, mit einem Trennzeichen von `"-"`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Arrays 4

Für diese Array-Aufgabe stellen wir Ihnen ein Ausgangsarray mit den Namen einiger Vögel zur Verfügung.

- Finden Sie den Index des Elements `"Eagles"` und verwenden Sie diesen, um das Element `"Eagles"` zu entfernen.
- Erstellen Sie ein neues Array aus diesem namens `eBirds`, das nur Vögel aus dem Originalarray enthält, deren Namen mit dem Buchstaben "E" beginnen. Beachten Sie, dass {{jsxref("String.prototype.startsWith()", "startsWith()")}} eine großartige Möglichkeit ist, zu überprüfen, ob eine Zeichenfolge mit einem bestimmten Zeichen beginnt.

Wenn es funktioniert, sollten Sie `"Emus,Egrets"` auf der Seite sehen.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.
