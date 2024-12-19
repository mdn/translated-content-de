---
title: "Herausforderung: Erstellung eines ansprechenden Briefpapiers"
slug: Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}

Wenn Sie einen guten Eindruck machen möchten, kann das Schreiben eines Briefes auf schönem Briefpapier ein wirklich guter Anfang sein. In dieser Herausforderung werden Sie eine Online-Vorlage erstellen, um ein solches Aussehen zu erzielen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- Lokale Kopien des [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) erstellen — speichern Sie sie als `index.html` und `style.css` in einem neuen Verzeichnis.
- Speichern Sie lokale Kopien der [oberen](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [unteren](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) und [Logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) Bilder im selben Verzeichnis wie Ihre Code-Dateien.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie haben die benötigten Dateien zur Erstellung einer Briefpapier-Vorlage erhalten. Sie müssen nur noch die Dateien zusammenfügen. Um das zu erreichen, müssen Sie:

### Der Hauptbrief

- Wenden Sie das CSS auf das HTML an.
- Fügen Sie eine Hintergrunddeklaration für den Brief hinzu, die:

  - Das obere Bild am oberen Rand des Briefes fixiert.
  - Das untere Bild am unteren Rand des Briefes fixiert.
  - Einen halbtransparenten Verlauf über den beiden vorherigen Hintergründen hinzufügt, der dem Brief eine gewisse Textur verleiht. Machen Sie ihn oben und unten leicht dunkel, aber in einem großen Teil der Mitte vollständig transparent.

- Fügen Sie eine weitere Hintergrunddeklaration hinzu, die nur das obere Bild am oberen Rand des Briefes hinzufügt, als Fallback für Browser, die die vorherige Deklaration nicht unterstützen.
- Fügen Sie dem Brief eine weiße Hintergrundfarbe hinzu.
- Fügen Sie dem Brief eine 1 mm starke, oben und unten durchgezogene Rahmenlinie hinzu, die farblich zum restlichen Farbschema passt.

### Das Logo

- Fügen Sie dem {{htmlelement("Heading_Elements", "h1")}} das Logo als Hintergrundbild hinzu.
- Fügen Sie dem Logo einen Filter hinzu, um ihm einen subtilen Schlagschatten zu verleihen.
- Kommentieren Sie nun den Filter aus und implementieren Sie den Schlagschatten auf eine andere (etwas browserübergreifend kompatiblere) Weise, die dennoch der Form des runden Bildes folgt.

## Hinweise und Tipps

- Denken Sie daran, dass Sie für ältere Browser einen Fallback erstellen können, indem Sie die Fallback-Version einer Deklaration zuerst setzen, gefolgt von der Version, die nur über neuere Browser funktioniert. Ältere Browser wenden die erste Deklaration an und ignorieren die zweite, während neuere Browser die erste anwenden und sie dann mit der zweiten überschreiben.
- Fühlen Sie sich frei, Ihre eigenen Grafiken für die Herausforderung zu erstellen, wenn Sie möchten.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Vollständige A4-Seite mit dekorativem oberen und unteren Rand, bestehend aus orangefarbenen und roten Formen, und einem roten und grünen Abzeichen mit der Aufschrift "Awesome company", unterhalb des oberen Randes. Oberhalb des unteren Randes befindet sich eine Postadresse.](letterhead.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}
