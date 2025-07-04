---
title: "Testen Sie Ihre Fähigkeiten: Arrays"
short-title: Arrays
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
l10n:
  sourceCommit: 312c9980fc7a973cea1e16d4a6e9c33b430c8179
---

Das Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) Artikel verstanden haben.

> [!NOTE]
> Für die Aufgaben 1–4 können Sie Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
> Wenn Sie stecken bleiben, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktive Herausforderung

Zunächst geben wir Ihnen eine unterhaltsame, interaktive Herausforderung zu Arrays, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) [Scrimba](https://scrimba.com/home) erstellt wurde.

Schauen Sie sich das eingebettete Scrim an und beenden Sie die Aufgabe in der Timeline (dem kleinen Geistersymbol), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~05e" scrimtitle="Render images from an array" survey="true"></scrim-inline>

> [!NOTE]
> Diese Aufgabe ist ein anspruchsvolles Ziel, da sie sich auf JavaScript-Funktionen stützt, die im Kurs noch nicht explizit behandelt wurden. Versuchen Sie es so gut wie möglich und recherchieren Sie online nach Informationen zu allem, bei dem Sie sich unsicher sind.

## Aufgabe 1

Diese Aufgabe bietet Ihnen etwas grundlegende Übung mit Arrays. Erstellen Sie ein Array mit drei Elementen und speichern Sie es in einer Variable namens `myArray`. Die Elemente können beliebig sein – wie wäre es mit Ihren Lieblingsessen oder Bands?

Ändern Sie dann die ersten beiden Elemente im Array mit einfacher Klammernotation und Zuweisung. Fügen Sie dann ein neues Element am Anfang des Arrays hinzu.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

Kommen wir nun zu einer weiteren Aufgabe. Hier wird Ihnen ein String zur Verfügung gestellt, mit dem Sie arbeiten sollen. Wir möchten, dass Sie:

1. Den String in ein Array umwandeln, indem Sie dabei die `+` Zeichen entfernen. Speichern Sie das Ergebnis in einer Variablen namens `myArray`.
2. Die Länge des Arrays in einer Variablen namens `arrayLength` speichern.
3. Das letzte Element im Array in einer Variablen namens `lastItem` speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

Für diese Array-Aufgabe stellen wir Ihnen ein Ausgangs-Array zur Verfügung, und Sie arbeiten in gewissermaßen entgegengesetzter Richtung. Sie müssen:

1. Das letzte Element im Array entfernen.
2. Zwei neue Namen am Ende des Arrays hinzufügen.
3. Jedes Element im Array durchgehen und seine Indexnummer in Klammern nach dem Namen hinzufügen, zum Beispiel `Ryu (0)`. Beachten Sie, dass wir im Artikel über Arrays nicht lehren, wie man dies macht, also müssen Sie ein wenig recherchieren.
4. Schließlich die Array-Elemente zu einem einzigen String namens `myString` zusammenfügen, mit einem Trennzeichen `"-"`.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

Für diese Array-Aufgabe stellen wir Ihnen ein Ausgangs-Array mit den Namen einiger Vögel zur Verfügung.

- Finden Sie den Index des Elements `"Eagles"` und verwenden Sie diesen, um das Element `"Eagles"` zu entfernen.
- Machen Sie ein neues Array aus diesem, genannt `eBirds`, das nur Vögel aus dem ursprünglichen Array enthält, deren Namen mit dem Buchstaben "E" beginnen. Beachten Sie, dass {{jsxref("String.prototype.startsWith()", "startsWith()")}} eine großartige Möglichkeit ist, um zu überprüfen, ob ein String mit einem bestimmten Zeichen beginnt.

Wenn es funktioniert, sollten Sie `"Emus,Egrets"` auf der Seite sehen.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
