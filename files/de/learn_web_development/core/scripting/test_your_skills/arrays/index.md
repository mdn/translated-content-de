---
title: "Testen Sie Ihre Fähigkeiten: Arrays"
short-title: Arrays
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Das Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie unseren Artikel [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) verstanden haben.

> [!NOTE]
> Für Aufgaben 1–4 können Sie Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Arrays-Herausforderung, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds) [Scrimba](https://scrimba.com/home) erstellt wurde.

Sehen Sie sich das eingebettete Screencast an und vervollständigen Sie die Aufgabe auf der Timeline (das kleine Geistersymbol), indem Sie die Anweisungen befolgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Screencast fortsetzen, um zu sehen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~05e" scrimtitle="Rendern von Bildern aus einem Array"></scrim-inline>

> [!NOTE]
> Diese Aufgabe ist ein kleines Stretch-Ziel, da sie sich auf JavaScript-Funktionen stützt, die Sie im Kurs noch nicht explizit behandelt haben. Geben Sie Ihr Bestes und suchen Sie online nach Informationen zu dem, worüber Sie sich unsicher sind.

## Aufgabe 1

Diese Aufgabe gibt Ihnen einige grundlegende Praxis im Umgang mit Arrays. Erstellen Sie ein Array mit drei Elementen und speichern Sie es in einer Variablen namens `myArray`. Die Elemente können beliebig sein — wie wäre es mit Ihren Lieblingsspeisen oder Bands?

Ändern Sie als Nächstes die ersten beiden Elemente im Array mithilfe von einfacher Klammernotation und Zuweisung. Fügen Sie dann ein neues Element am Anfang des Arrays hinzu.

Versuchen Sie den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

Kommen wir nun zu einer weiteren Aufgabe. Hier wird Ihnen ein String zur Verfügung gestellt, mit dem Sie arbeiten sollen. Wir möchten, dass Sie:

1. Den String in ein Array umwandeln und dabei die `+` Zeichen entfernen. Speichern Sie das Ergebnis in einer Variablen namens `myArray`.
2. Die Länge des Arrays in einer Variablen namens `arrayLength` speichern.
3. Das letzte Element im Array in einer Variablen namens `lastItem` speichern.

Versuchen Sie den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

Für diese Array-Aufgabe stellen wir Ihnen ein Ausgangs-Array zur Verfügung, und Sie arbeiten in gewisser Weise in die entgegengesetzte Richtung. Sie müssen:

1. Das letzte Element im Array entfernen.
2. Zwei neue Namen am Ende des Arrays hinzufügen.
3. Über jedes Element im Array iterieren und seine Indexnummer nach dem Namen in Klammern hinzufügen, zum Beispiel `Ryu (0)`. Beachten Sie, dass wir im Artikel zu Arrays nicht lehren, wie man das macht, also müssen Sie etwas recherchieren.
4. Schließlich die Array-Elemente in einem einzigen String namens `myString` mit einem Trennzeichen von `"-"` verknüpfen.

Versuchen Sie den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

Für diese Array-Aufgabe stellen wir Ihnen ein Ausgangs-Array zur Verfügung, das die Namen einiger Vögel auflistet.

- Finden Sie den Index des Elements `"Eagles"` und verwenden Sie ihn, um das Element `"Eagles"` zu entfernen.
- Erstellen Sie ein neues Array aus diesem, genannt `eBirds`, das nur Vögel aus dem Original-Array enthält, deren Namen mit dem Buchstaben "E" beginnen. Beachten Sie, dass {{jsxref("String.prototype.startsWith()", "startsWith()")}} eine großartige Möglichkeit ist, zu überprüfen, ob ein String mit einem bestimmten Zeichen beginnt.

Wenn es funktioniert, sollten Sie `"Emus,Egrets"` auf der Seite sehen.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
