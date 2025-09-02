---
title: "Herausforderung: Erstellung von Briefpapier mit Briefkopf"
short-title: "Herausforderung: Eleganter Briefkopf"
slug: Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper
l10n:
  sourceCommit: d86ab254d0ed24f36a4657e4f54409df786b2433
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

Wenn Sie den richtigen Eindruck hinterlassen möchten, kann das Verfassen eines Briefes auf schönem Briefpapier mit Briefkopf ein wirklich guter Anfang sein. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um einen solchen Look zu erzielen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- Lokale Kopien der [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) Dateien anfertigen — speichern Sie sie als `index.html` und `style.css` in einem neuen Verzeichnis.
- Lokale Kopien der [oberen](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [unteren](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) und [Logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) Bilder im selben Verzeichnis wie Ihre Code-Dateien speichern.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden. Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren einfüllen.

> [!NOTE]
> Wenn Sie Hilfe benötigen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Sie haben die Dateien erhalten, die benötigt werden, um eine Vorlage für Briefpapier mit Briefkopf zu erstellen. Sie müssen nur die Dateien zusammenstellen. Um das zu erreichen, müssen Sie:

### Der Hauptbrief

- Wenden Sie das CSS auf das HTML an.
- Fügen Sie eine Hintergrunddeklaration für den Brief hinzu, die:
  - Das obere Bild oben am Brief fixiert
  - Das untere Bild unten am Brief fixiert
  - Ein halbtransparentes Verlaufsbild über beide vorherigen Hintergründe hinzufügt, das dem Brief etwas Textur verleiht. Es sollte leicht dunkel ganz oben und unten sein, aber vollständig transparent für den Großteil der Mitte.

- Fügen Sie eine weitere Hintergrunddeklaration hinzu, die nur das obere Bild oben im Brief hinzufügt, als Rückfalllösung für Browser, die die vorherige Deklaration nicht unterstützen.
- Fügen Sie dem Brief eine weiße Hintergrundfarbe hinzu.
- Fügen Sie einen 1mm breiten, festen oberen und unteren Rand zum Brief hinzu, in einer Farbe, die zum restlichen Farbschema passt.

### Das Logo

- Fügen Sie dem {{htmlelement("Heading_Elements", "h1")}} das Logo als Hintergrundbild hinzu.
- Fügen Sie dem Logo einen Filter hinzu, um ihm einen subtilen Schlagschatten zu verleihen.
- Kommentieren Sie nun den Filter aus und implementieren Sie den Schlagschatten auf eine andere (etwas mehr browserkompatible) Weise, die trotzdem der Form des runden Bildes folgt.

## Hinweise und Tipps

- Denken Sie daran, dass Sie eine Rückfalloption für ältere Browser erstellen können, indem Sie die Rückfallversion einer Deklaration zuerst setzen, gefolgt von der Version, die nur in neueren Browsern funktioniert. Ältere Browser werden die erste Deklaration anwenden und die zweite ignorieren, während neuere Browser die erste anwenden und sie dann mit der zweiten überschreiben.
- Fühlen Sie sich frei, Ihre eigenen Grafiken für die Herausforderung zu erstellen, wenn Sie möchten.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Vollständige A4-Seite mit dekorativem oberen und unteren Rand, bestehend aus orangefarbenen und roten Formen, und einem roten und grünen Abzeichen mit der Aufschrift "Awesome company", unterhalb des oberen Randes. Oberhalb des unteren Randes befindet sich eine Postanschrift.](letterhead.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
