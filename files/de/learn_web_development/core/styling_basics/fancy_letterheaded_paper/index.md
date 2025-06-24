---
title: "Herausforderung: Erstellung von schönem Briefpapier"
short-title: "Herausforderung: Schickes Briefpapier"
slug: Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}

Wenn Sie den richtigen Eindruck hinterlassen möchten, kann das Schreiben eines Briefes auf schönem Briefpapier ein wirklich guter Anfang sein. In dieser Herausforderung werden Sie eine Online-Vorlage erstellen, um ein solches Aussehen zu erzielen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- Lokale Kopien der [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) erstellen — speichern Sie sie als `index.html` und `style.css` in einem neuen Verzeichnis.
- Speichern Sie lokale Kopien der [oberen](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [unteren](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) und [Logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) Bilder im gleichen Verzeichnis wie Ihre Code-Dateien.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie können das HTML einfügen und das CSS in einen dieser Online-Editoren füllen.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Ihnen wurden die benötigten Dateien zur Erstellung einer Briefpapiervorlage gegeben. Sie müssen nur die Dateien zusammenfügen. Um dies zu erreichen, müssen Sie:

### Der Hauptbrief

- Wenden Sie das CSS auf das HTML an.
- Fügen Sie eine Hintergrunddeklaration zum Brief hinzu, die:

  - Das oberste Bild am oberen Rand des Briefes fixiert
  - Das unterste Bild am unteren Rand des Briefes fixiert
  - Einen halbtransparenten Verlauf über die beiden vorherigen Hintergründe hinzufügt, der dem Brief ein wenig Textur verleiht. Machen Sie es direkt oben und unten leicht dunkel, aber komplett transparent für einen großen Teil der Mitte.

- Fügen Sie eine weitere Hintergrunddeklaration hinzu, die nur das obere Bild an den oberen Rand des Briefes hinzufügt, als Fallback für Browser, die die vorherige Deklaration nicht unterstützen.
- Fügen Sie dem Brief eine weiße Hintergrundfarbe hinzu.
- Fügen Sie dem Brief einen 1mm dicken oberen und unteren festen Rand in einer Farbe hinzu, die mit dem restlichen Farbschema übereinstimmt.

### Das Logo

- Fügen Sie dem {{htmlelement("Heading_Elements", "h1")}} das Logo als Hintergrundbild hinzu.
- Fügen Sie dem Logo einen Filter hinzu, um ihm einen subtilen Schatten zu verleihen.
- Kommentieren Sie nun den Filter aus und implementieren Sie den Schatten auf eine andere (etwas kompatiblere) Weise, die immer noch die Form des runden Bildes folgt.

## Hinweise und Tipps

- Denken Sie daran, dass Sie einen Fallback für ältere Browser erstellen können, indem Sie die Fallback-Version einer Deklaration zuerst angeben, gefolgt von der Version, die nur in neueren Browsern funktioniert. Ältere Browser wenden die erste Deklaration an und ignorieren die zweite, während neuere Browser die erste Deklaration anwenden und dann mit der zweiten überschreiben.
- Fühlen Sie sich frei, Ihre eigenen Grafiken für die Herausforderung zu erstellen, wenn Sie möchten.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Vollständige A4-Seite mit dekorativem oberen und unteren Rand aus orangen und roten Formen sowie einem roten und grünen Abzeichen mit der Aufschrift "Awesome company" darunter. Über dem unteren Rand befindet sich eine postalische Adresse.](letterhead.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}
