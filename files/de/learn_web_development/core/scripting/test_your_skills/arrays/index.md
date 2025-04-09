---
title: "Testen Sie Ihre Fähigkeiten: Arrays"
short-title: Arrays
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
l10n:
  sourceCommit: 79f1568f8916bd2fa58653f37cad2e66e746f12f
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie unseren [Artikel über Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Arrays 1

Lassen Sie uns mit einigen grundlegenden Array-Übungen beginnen. In dieser Aufgabe möchten wir, dass Sie ein Array mit drei Elementen erstellen, das in einer Variablen namens `myArray` gespeichert wird. Die Elemente können alles sein, was Sie möchten – wie wäre es mit Ihren Lieblingsgerichten oder -bands?

Ändern Sie anschließend die ersten beiden Elemente im Array mit einfacher Klammernotation und Zuweisung. Fügen Sie dann ein neues Element am Anfang des Arrays hinzu.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Arrays 2

Gehen wir nun zu einer anderen Aufgabe über. Hier wird Ihnen ein String zur Verfügung gestellt. Wir möchten, dass Sie:

1. Den String in ein Array umwandeln und dabei die `+`-Zeichen entfernen. Speichern Sie das Ergebnis in einer Variablen namens `myArray`.
2. Die Länge des Arrays in einer Variablen namens `arrayLength` speichern.
3. Das letzte Element im Array in einer Variablen namens `lastItem` speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Arrays 3

Für diese Array-Aufgabe geben wir Ihnen ein Ausgangsarray vor, und Sie arbeiten in etwas entgegengesetzter Richtung. Sie müssen:

1. Das letzte Element im Array entfernen.
2. Zwei neue Namen an das Ende des Arrays hinzufügen.
3. Jedes Element im Array durchgehen und seine Indexnummer nach dem Namen in Klammern hinzufügen, zum Beispiel `Ryu (0)`. Beachten Sie, dass wir dies im Artikel über Arrays nicht behandeln, daher müssen Sie etwas recherchieren.
4. Schließlich die Array-Elemente in einem einzelnen String namens `myString` zusammenfügen, mit einem Trennzeichen von `"-"`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Arrays 4

Für diese Array-Aufgabe geben wir Ihnen ein Ausgangsarray mit den Namen einiger Vögel.

- Finden Sie den Index des Elements `"Eagles"` und verwenden Sie ihn, um das Element `"Eagles"` zu entfernen.
- Erstellen Sie aus diesem ein neues Array namens `eBirds`, das nur die Vögel aus dem ursprünglichen Array enthält, deren Namen mit dem Buchstaben "E" beginnen. Beachten Sie, dass {{jsxref("String.prototype.startsWith()", "startsWith()")}} eine großartige Möglichkeit ist, um zu überprüfen, ob ein String mit einem bestimmten Zeichen beginnt.

Wenn es funktioniert, sollten Sie "`Emus,Egrets`" auf der Seite sehen.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
