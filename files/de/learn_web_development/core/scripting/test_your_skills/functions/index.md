---
title: "Testen Sie Ihre Fähigkeiten: Funktionen"
short-title: Functions
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
l10n:
  sourceCommit: 2bde1cab935c3b36bf66dc9fbf1ffb6a20b5f708
---

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unsere Artikel zu [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function) und [Funktionsrückgabewerte](/de/docs/Learn_web_development/Core/Scripting/Return_values) verstanden haben.

> [!NOTE]
> Für die Aufgaben 1–4 können Sie Lösungen ausprobieren, indem Sie den Code herunterladen und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich an uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## DOM-Manipulation: als nützlich betrachtet

Einige der untenstehenden Fragen erfordern, dass Sie einige {{Glossary("DOM", "DOM")}}-Manipulationscodes schreiben, um sie zu lösen - wie z.B. das Erstellen neuer HTML-Elemente, das Festlegen ihrer Textinhalte auf bestimmte Zeichenkettenwerte und das Verschachteln dieser innerhalb vorhandener Elemente auf der Seite - alles über JavaScript.

Wir haben dies im Kurs noch nicht explizit gelehrt, aber Sie werden einige Beispiele gesehen haben, die dies nutzen, und wir möchten, dass Sie einige Nachforschungen darüber anstellen, welche DOM-APIs Sie benötigen, um die Fragen erfolgreich zu beantworten. Ein guter Ausgangspunkt ist unser [DOM-Scripting-Einführungstutorial](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).

## Interaktive Herausforderung

Zuerst bieten wir Ihnen eine unterhaltsame, interaktive Herausforderung, die Rückgabewerte von Funktionen einbezieht, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich den eingebetteten Scrim an, und befolgen Sie die Anweisungen auf der Zeitleiste (das kleine Geister-Symbol), indem Sie den Code bearbeiten. Wenn Sie fertig sind, können Sie den Scrim fortsetzen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Rückgabewerte in Funktionen"></scrim-inline>

## Aufgabe 1

Für diese Aufgabe erstellen Sie eine einfache Funktion — `chooseName()`, die einen zufälligen Namen aus dem bereitgestellten Array (`names`) auswählt und diesen in den bereitgestellten Absatz (`para`) ausgibt, und führen Sie ihn dann einmal aus.

Versuchen Sie, den Live-Code unten so zu aktualisieren, dass er dem fertigen Beispiel entspricht:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

Für unsere nächste auf Funktionen bezogene Aufgabe müssen Sie eine Funktion erstellen, die ein Rechteck auf dem bereitgestellten `<canvas>` zeichnet (Referenzvariable `canvas`, Kontext verfügbar in `ctx`), basierend auf den fünf bereitgestellten Eingabevariablen:

- `x` — die x-Koordinate des Rechtecks.
- `y` — die y-Koordinate des Rechtecks.
- `width` — die Breite des Rechtecks.
- `height` — die Höhe des Rechtecks.
- `color` — die Farbe des Rechtecks.

Sie sollten das Canvas löschen, bevor Sie das Rechteck zeichnen, damit beim Aktualisieren des Codes in der Live-Version nicht viele Rechtecke aufeinander gezeichnet werden.

Versuchen Sie, den Live-Code unten so zu aktualisieren, dass er dem fertigen Beispiel entspricht:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe kehren Sie zum in Aufgabe 1 beschriebenen Problem zurück, mit dem Ziel, es zu verbessern. Die drei Verbesserungen, die wir möchten, dass Sie vornehmen, sind:

1. Refaktorisieren Sie den Code, der die Zufallszahl erzeugt, in eine separate Funktion namens `random()`, die als Parameter zwei generische Grenzen erhält, zwischen denen die Zufallszahl liegen sollte, und geben Sie das Ergebnis zurück.
2. Aktualisieren Sie die Funktion `chooseName()`, sodass sie die Zufallszahl-Funktion verwendet, das Array, aus dem ausgewählt werden soll, als Parameter nimmt (um flexibler zu sein), und das Ergebnis zurückgibt.
3. Geben Sie das zurückgegebene Ergebnis in den `textContent` des Absatzes (`para`) aus.

Versuchen Sie, den Live-Code unten so zu aktualisieren, dass er dem fertigen Beispiel entspricht:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

In dieser Aufgabe haben wir ein Array mit Namen, und wir verwenden {{jsxref("Array.filter()")}}, um ein Array mit nur Namen zu erhalten, die kürzer als 5 Zeichen sind. Der Filter erhält derzeit eine benannte Funktion `isShort()`, die die Länge des Namens überprüft und `true` zurückgibt, wenn der Name kürzer als 5 Zeichen ist, andernfalls `false`.

Wir möchten, dass Sie dies in eine Arrow-Funktion ändern. Sehen Sie, wie kompakt Sie es machen können.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
