---
title: "Herausforderung: Erstellung von stilvollem Briefpapier"
short-title: "Herausforderung: Stilvolles Briefpapier"
slug: Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper
l10n:
  sourceCommit: 24db8cbacdb7be74cb14ce6cd6bf90b207a85348
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

Wenn Sie den richtigen Eindruck machen möchten, kann das Schreiben eines Briefes auf schönem Briefpapier ein wirklich guter Anfang sein. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um einen solchen Look zu erreichen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, sollten Sie:

- Lokale Kopien von der [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) machen - speichern Sie sie als `index.html` und `style.css` in einem neuen Verzeichnis.
- Speichern Sie lokale Kopien der [oberen](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [unteren](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) und [Logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) Bilder im gleichen Verzeichnis wie Ihre Code-Dateien.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.
Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren einfügen.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie haben die benötigten Dateien erhalten, um eine Briefpapiervorlage zu erstellen. Sie müssen lediglich die Dateien zusammenstellen. Um dorthin zu gelangen, müssen Sie:

### Der Hauptbrief

- Wenden Sie das CSS auf das HTML an.
- Fügen Sie eine Hintergrunddeklaration zum Brief hinzu, die:
  - Das obere Bild oben am Brief fixiert.
  - Das untere Bild unten am Brief fixiert.
  - Ein halbtransparentes Verlaufsbild über beiden vorherigen Hintergründen hinzufügt, das dem Brief etwas Textur verleiht. Machen Sie es direkt am oberen und unteren Rand leicht dunkel, aber vollständig transparent für einen großen Teil der Mitte.

- Fügen Sie eine weitere Hintergrunddeklaration hinzu, die nur das obere Bild oben am Brief hinzufügt, als Fallback für Browser, die die vorherige Deklaration nicht unterstützen.
- Fügen Sie dem Brief eine weiße Hintergrundfarbe hinzu.
- Fügen Sie dem Brief oben und unten eine 1mm starke, durchgängige Umrandung in einer Farbe hinzu, die zum restlichen Farbschema passt.

### Das Logo

- Fügen Sie dem {{htmlelement("Heading_Elements", "h1")}} das Logo als Hintergrundbild hinzu.
- Fügen Sie dem Logo einen Filter hinzu, um ihm einen subtilen Schattenwurf zu geben.
- Kommentieren Sie nun den Filter aus und setzen Sie den Schattenwurf auf eine andere (leicht browser-übergreifend kompatibler) Weise um, die immer noch der Form des runden Bildes folgt.

## Hinweise und Tipps

- Denken Sie daran, dass Sie ein Fallback für ältere Browser erstellen können, indem Sie zuerst die Fallback-Version einer Deklaration einfügen, gefolgt von der Version, die nur über neuere Browser funktioniert. Ältere Browser wenden die erste Deklaration an und ignorieren die zweite, während neuere Browser die erste anwenden und dann mit der zweiten überschreiben.
- Fühlen Sie sich frei, Ihre eigenen Grafiken für die Herausforderung zu erstellen, wenn Sie möchten.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Design aussehen könnte:

![Vollständige A4-Seite mit dekorativem oberen und unteren Rand aus orangefarbenen und roten Formen und einem roten und grünen Abzeichen mit der Aufschrift "Awesome company", unterhalb des oberen Randes. Über dem unteren Rand befindet sich eine Postanschrift.](letterhead.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
