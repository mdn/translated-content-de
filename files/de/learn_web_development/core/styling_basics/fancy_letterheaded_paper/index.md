---
title: "Herausforderung: Erstellen von eleganten Briefköpfen"
short-title: "Herausforderung: Eleganter Briefkopf"
slug: Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}

Wenn Sie den richtigen Eindruck hinterlassen wollen, ist das Schreiben eines Briefes auf schönem Briefpapier ein wirklich guter Anfang. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um einen solchen Look zu erzielen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- Lokale Kopien von [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) erstellen — speichern Sie sie als `index.html` und `style.css` in einem neuen Verzeichnis.
- Lokale Kopien der [oberen](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [unteren](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) und [Logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) Bilder im gleichen Verzeichnis wie Ihre Code-Dateien speichern.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren übernehmen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Sie haben die Dateien erhalten, die zum Erstellen einer Briefkopf-Vorlage benötigt werden. Sie müssen nur die Dateien zusammenfügen. Um dorthin zu gelangen, müssen Sie:

### Der Hauptbrief

- Wenden Sie das CSS auf das HTML an.
- Fügen Sie dem Brief eine Hintergrund-Deklaration hinzu, die:

  - Das Bild oben am Brief fixiert
  - Das Bild unten am Brief fixiert
  - Einen halbtransparenten Verlauf über den beiden vorherigen Hintergründen hinzufügt, der dem Brief ein wenig Textur verleiht. Machen Sie es leicht dunkel ganz oben und unten, aber vollständig transparent für einen großen Teil des Zentrums.

- Fügen Sie eine weitere Hintergrund-Deklaration hinzu, die einfach das Bild oben zum oberen Teil des Briefes hinzufügt, als Fallback für Browser, die die vorherige Deklaration nicht unterstützen.
- Fügen Sie dem Brief eine weiße Hintergrundfarbe hinzu.
- Fügen Sie dem Brief eine 1mm breite obere und untere durchgehende Umrandung hinzu, die farblich zum Rest des Farbschemas passt.

### Das Logo

- Fügen Sie dem {{htmlelement("Heading_Elements", "h1")}} das Logo als Hintergrundbild hinzu.
- Fügen Sie dem Logo einen Filter hinzu, um ihm einen subtilen Schattenwurf zu verleihen.
- Kommentieren Sie nun den Filter aus und implementieren Sie den Schattenwurf auf eine andere (leicht besser browserkompatible) Weise, die immer noch die Form des runden Bildes verfolgt.

## Hinweise und Tipps

- Denken Sie daran, dass Sie ein Fallback für ältere Browser erstellen können, indem Sie die Fallback-Version einer Deklaration zuerst platzieren, gefolgt von der Version, die nur bei neueren Browsern funktioniert. Ältere Browser werden die erste Deklaration anwenden und die zweite ignorieren, während neuere Browser die erste anwenden und dann durch die zweite überschreiben.
- Sie können gerne Ihre eigenen Grafiken für die Herausforderung erstellen, wenn Sie möchten.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Vollständige A4-Seite mit dekorativem oberen und unteren Rand, bestehend aus orangefarbenen und roten Formen, und einem roten und grünen Abzeichen mit der Aufschrift Awesome Company darunter. Über dem unteren Rand befindet sich eine Postadresse.](letterhead.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}
