---
title: "Testen Sie Ihr Können: Arrays"
short-title: Arrays
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
l10n:
  sourceCommit: 2bde1cab935c3b36bf66dc9fbf1ffb6a20b5f708
---

Das Ziel dieses Fähigkeitstests ist festzustellen, ob Sie unseren [Artikel über Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) verstanden haben.

> [!NOTE]
> Für die Aufgaben 1–4 können Sie Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktive Herausforderung

Zuerst geben wir Ihnen eine unterhaltsame, interaktive Arrays-Herausforderung, die von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home), erstellt wurde.

Sehen Sie sich das eingebettete Skript an und erledigen Sie die Aufgabe auf der Timeline (dem kleinen Geistersymbol), indem Sie die Anweisungen befolgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Skript weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~05e" scrimtitle="Render images from an array"></scrim-inline>

> [!NOTE]
> Diese Aufgabe ist gewissermaßen ein zusätzliches Ziel, da sie auf JavaScript-Funktionen basiert, die im Kurs noch nicht explizit behandelt wurden. Geben Sie Ihr Bestes, und suchen Sie online nach Informationen zu allem, bei dem Sie sich nicht sicher sind.

## Aufgabe 1

Diese Aufgabe gibt Ihnen einige grundlegende Übungen mit Arrays. Erstellen Sie ein Array mit drei Elementen und speichern Sie es in einer Variablen namens `myArray`. Die Elemente können alles sein – wie wäre es mit Ihren Lieblingsgerichten oder Bands?

Ändern Sie anschließend die ersten beiden Elemente im Array mit einfacher Klammernotation und Zuweisung. Fügen Sie dann ein neues Element am Anfang des Arrays hinzu.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

Gehen wir nun zu einer weiteren Aufgabe über. Hier wird Ihnen ein String zur Verfügung gestellt, mit dem Sie arbeiten sollen. Wir möchten, dass Sie:

1. Den String in ein Array umwandeln und dabei die `+`-Zeichen entfernen. Speichern Sie das Ergebnis in einer Variablen namens `myArray`.
2. Die Länge des Arrays in einer Variablen namens `arrayLength` speichern.
3. Das letzte Element im Array in einer Variablen namens `lastItem` speichern.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

Für diese Array-Aufgabe stellen wir Ihnen ein Anfangsarray zur Verfügung, und Sie werden in gewisser Weise in die entgegengesetzte Richtung arbeiten. Sie müssen:

1. Das letzte Element im Array entfernen.
2. Zwei neue Namen am Ende des Arrays hinzufügen.
3. Jedes Element im Array durchgehen und die Indexnummer in Klammern nach dem Namen hinzufügen, zum Beispiel `Ryu (0)`. Beachten Sie, dass wir dies im Artikel über Arrays nicht lehren, daher müssen Sie etwas recherchieren.
4. Schließlich die Array-Elemente zu einem einzigen String namens `myString` mit einem Trennzeichen `"-"` zusammenfügen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

Für diese Array-Aufgabe stellen wir Ihnen ein Ausgangsarray zur Verfügung, das die Namen einiger Vögel auflistet.

- Finden Sie den Index des Elements `"Eagles"` und verwenden Sie diesen, um das Element `"Eagles"` zu entfernen.
- Erstellen Sie aus diesem Array ein neues Array namens `eBirds`, das nur die Vögel aus dem ursprünglichen Array enthält, deren Namen mit dem Buchstaben "E" beginnen. Beachten Sie, dass {{jsxref("String.prototype.startsWith()", "startsWith()")}} eine großartige Möglichkeit ist, zu überprüfen, ob ein String mit einem bestimmten Zeichen beginnt.

Wenn es funktioniert, sollten Sie `"Emus,Egrets"` auf der Seite erscheinen sehen.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
