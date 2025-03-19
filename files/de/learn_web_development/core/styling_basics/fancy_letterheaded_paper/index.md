---
title: "Herausforderung: Erstellen von elegantem Briefpapier"
short-title: "Herausforderung: Elegantes Briefpapier"
slug: Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}

Wenn Sie den richtigen Eindruck machen möchten, kann es ein wirklich guter Anfang sein, einen Brief auf schönem Briefpapier zu schreiben. In dieser Herausforderung werden Sie eine Online-Vorlage erstellen, um einen solchen Look zu erreichen.

## Ausgangspunkt

Um diese Herausforderung zu starten, sollten Sie:

- Lokale Kopien der [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) erstellen — speichern Sie sie als `index.html` und `style.css` in einem neuen Verzeichnis.
- Speichern Sie lokale Kopien der [oberen](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [unteren](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) und [Logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) Bilder im selben Verzeichnis wie Ihre Code-Dateien.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten den HTML-Code einfügen und das CSS in einen dieser Online-Editoren ergänzen.

> [!NOTE]
> Wenn Sie feststecken, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurden die Dateien zur Verfügung gestellt, die erforderlich sind, um eine Briefpapier-Vorlage zu erstellen. Sie müssen die Dateien nur zusammenfügen. Um dorthin zu gelangen, müssen Sie:

### Der Hauptbrief

- Wenden Sie das CSS auf das HTML an.
- Fügen Sie eine Hintergrunddeklaration zum Brief hinzu, die:

  - Das obere Bild oben im Brief fixiert
  - Das untere Bild unten im Brief fixiert
  - Einen halbtransparenten Verlauf über den oberen beiden Hintergründen hinzufügt, der dem Brief eine gewisse Textur verleiht. Machen Sie es leicht dunkel direkt oben und unten, aber völlig transparent für einen großen Teil in der Mitte.

- Fügen Sie eine weitere Hintergrunddeklaration hinzu, die nur das obere Bild oben im Brief als Fallback für Browser hinzufügt, die die vorherige Deklaration nicht unterstützen.
- Fügen Sie dem Brief eine weiße Hintergrundfarbe hinzu.
- Fügen Sie dem Brief einen 1 mm breiten durchgehenden Rand oben und unten hinzu, in einer Farbe, die zum restlichen Farbschema passt.

### Das Logo

- Zu den {{htmlelement("Heading_Elements", "h1")}}, fügen Sie das Logo als Hintergrundbild hinzu.
- Fügen Sie dem Logo einen Filter hinzu, um ihm einen subtilen Schlagschatten zu geben.
- Kommentieren Sie nun den Filter aus und implementieren Sie den Schlagschatten auf eine andere, etwas mehr browserkompatible Weise, die dennoch der Form des runden Bildes folgt.

## Hinweise und Tipps

- Denken Sie daran, dass Sie einen Fallback für ältere Browser erstellen können, indem Sie die Fallback-Version einer Deklaration zuerst platzieren, gefolgt von der Version, die nur in neueren Browsern funktioniert. Ältere Browser wenden die erste Deklaration an und ignorieren die zweite, während neuere Browser die erste anwenden und dann mit der zweiten überschreiben.
- Fühlen Sie sich frei, Ihre eigenen Grafiken für die Herausforderung zu erstellen, wenn Sie möchten.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Design aussehen könnte:

![Vollständige A4-Seite mit dekorativem oberen und unteren Rand aus orangefarbenen und roten Formen und einem roten und grünen Abzeichen mit der Aufschrift "Awesome company" darunter am oberen Rand. Über dem unteren Rand befindet sich eine Postanschrift.](letterhead.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}
