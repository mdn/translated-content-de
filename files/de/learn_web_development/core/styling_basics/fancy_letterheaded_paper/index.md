---
title: "Herausforderung: Briefpapier mit elegantem Briefkopf erstellen"
short-title: "Herausforderung: Eleganter Briefkopf"
slug: Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}

Um den richtigen Eindruck zu hinterlassen, kann das Schreiben eines Briefes auf schönem Papier mit Briefkopf ein wirklich guter Anfang sein. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um solch ein Aussehen zu erreichen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- Lokale Kopien der [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) erstellen — speichern Sie sie als `index.html` und `style.css` in einem neuen Verzeichnis.
- Speichern Sie lokale Kopien der [top](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [bottom](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) und [logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) Bilder im gleichen Verzeichnis wie Ihre Code-Dateien.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden. Sie könnten das HTML einfügen und den CSS-Inhalt in einen dieser Online-Editoren einfügen.

> [!NOTE]
> Wenn Sie steckenbleiben, können Sie sich an uns über eine unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## Projektbeschreibung

Sie haben die Dateien erhalten, die benötigt werden, um eine Briefpapier-Vorlage zu erstellen. Sie müssen nur die Dateien zusammenstellen. Um dies zu erreichen, müssen Sie:

### Der Hauptbrief

- Wenden Sie das CSS auf das HTML an.
- Fügen Sie eine Hintergrunddeklaration zum Brief hinzu, die:
  - Das obere Bild am oberen Rand des Briefes fixiert
  - Das untere Bild am unteren Rand des Briefes fixiert
  - Einen halbtransparenten Verlauf über beiden vorherigen Hintergründen hinzufügt, der dem Brief eine gewisse Textur verleiht. Machen Sie ihn direkt oben und unten leicht dunkel, aber in einem großen Teil der Mitte völlig transparent.

- Fügen Sie eine weitere Hintergrunddeklaration hinzu, die nur das obere Bild als Fallback für Browser, die die vorhergehende Deklaration nicht unterstützen, oben im Brief hinzufügt.
- Fügen Sie dem Brief eine weiße Hintergrundfarbe hinzu.
- Fügen Sie dem Brief einen 1mm starken Vollkommen oben und unten angebrachten Rand in einer Farbe hinzu, die zum restlichen Farbschema passt.

### Das Logo

- Fügen Sie dem {{htmlelement("Heading_Elements", "h1")}} das Logo als Hintergrundbild hinzu.
- Fügen Sie dem Logo einen Filter hinzu, um ihm einen subtilen Schlagschatten zu geben.
- Kommentieren Sie nun den Filter aus und implementieren Sie den Schlagschatten auf eine andere (etwas mehr browserkompatible) Weise, die immer noch der Form des runden Bildes folgt.

## Hinweise und Tipps

- Denken Sie daran, dass Sie für ältere Browser einen Fallback erstellen können, indem Sie die Fallback-Version einer Deklaration zuerst platzieren, gefolgt von der Version, die nur in neueren Browsern funktioniert. Ältere Browser werden die erste Deklaration anwenden und die zweite ignorieren, während neuere Browser die erste anwenden und dann durch die zweite überschreiben.
- Fühlen Sie sich frei, Ihre eigenen Grafiken für die Herausforderung zu erstellen, wenn Sie möchten.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Design aussehen könnte:

![Vollständige A4-Seite mit dekorativem oberen und unteren Rand, bestehend aus orange- und rotfarbenen Formen, und einem roten und grünen Abzeichen mit der Aufschrift "Awesome company" darunter, oberhalb des oberen Rands. Oberhalb des unteren Rands befindet sich eine Postadresse.](letterhead.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}
