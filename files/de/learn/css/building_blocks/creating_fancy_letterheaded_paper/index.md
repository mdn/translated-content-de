---
title: Erstellen von stilvollem Briefpapier
slug: Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}

Wenn Sie den richtigen Eindruck hinterlassen möchten, kann das Schreiben eines Briefes auf schönem Briefpapier ein guter Anfang sein. In dieser Bewertung fordern wir Sie heraus, eine Online-Vorlage zu erstellen, um ein solches Aussehen zu erzielen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis des CSS-Boxmodells und anderer boxbezogener Funktionen wie der Implementierung von Hintergründen zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- Machen Sie lokale Kopien von [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) — speichern Sie sie als `index.html` und `style.css` in einem neuen Verzeichnis.
- Speichern Sie lokale Kopien der [oberes Bild](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [unteres Bild](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) und [Logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) im gleichen Verzeichnis wie Ihre Code-Dateien.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

Sie haben die Dateien erhalten, die benötigt werden, um eine Briefpapier-Vorlage zu erstellen. Sie müssen nur die Dateien zusammenfügen. Um dies zu erreichen, müssen Sie:

### Der Hauptbrief

- Wenden Sie das CSS auf das HTML an.
- Fügen Sie eine Hintergrunddeklaration zum Brief hinzu, die:

  - Das obere Bild am oberen Rand des Briefes fixiert
  - Das untere Bild am unteren Rand des Briefes fixiert
  - Einen halbtransparenten Verlauf über die beiden vorherigen Hintergründe hinzufügt, der dem Brief etwas Textur verleiht. Machen Sie ihn ganz oben und unten leicht dunkel, aber vollständig transparent für einen großen Teil der Mitte.

- Fügen Sie eine weitere Hintergrunddeklaration hinzu, die nur das obere Bild an den oberen Rand des Briefes hinzufügt, als Fallback für Browser, die die vorherige Deklaration nicht unterstützen.
- Fügen Sie dem Brief eine weiße Hintergrundfarbe hinzu.
- Fügen Sie dem Brief einen 1 mm Top- und Bottom-Rand in einer Farbe hinzu, die zum restlichen Farbschema passt.

### Das Logo

- Fügen Sie dem {{htmlelement("Heading_Elements", "h1")}} das Logo als Hintergrundbild hinzu.
- Fügen Sie einen Filter zum Logo hinzu, um ihm einen subtilen Schlagschatten zu verleihen.
- Kommentieren Sie nun den Filter aus und implementieren Sie den Schlagschatten auf eine andere (etwas mehr browserkompatible) Weise, die immer noch der Form des runden Bildes folgt.

## Hinweise und Tipps

- Denken Sie daran, dass Sie einen Fallback für ältere Browser erstellen können, indem Sie die Fallback-Version einer Deklaration zuerst platzieren, gefolgt von der Version, die nur in neueren Browsern funktioniert. Ältere Browser wenden die erste Deklaration an und ignorieren die zweite, während neuere Browser die erste anwenden und diese dann durch die zweite überschreiben.
- Fühlen Sie sich frei, Ihre eigenen Grafiken für die Bewertung zu erstellen, wenn Sie möchten.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Vollständige A4-Seite, oben links zwei dreieckige Formen, die erste ist grün, die zweite ist rot, oben rechts eine dunkelrote trapezförmige Form. Unter dem grünen Dreieck ein roter Kreis mit einem grünen Stern und weißem Text darauf: Awesome company. Unten links auf der Seite eine dunkelrote trapezförmige Form, gefolgt von den zwei dreieckigen Formen: zuerst die rote, dann die grüne. Über der grünen dreieckigen Form schwarzer Text, der eine Postadresse anzeigt.](letterhead.png)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}
