---
title: Erstellen von stilvollem Briefpapier
slug: Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}

Wenn Sie den richtigen Eindruck hinterlassen möchten, kann es ein guter Anfang sein, einen Brief auf schönem Briefpapier zu schreiben. In dieser Bewertung fordern wir Sie heraus, eine Online-Vorlage zu erstellen, um ein solches Aussehen zu erreichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis des CSS-Box-Modells und anderer boxbezogener Funktionen wie das Implementieren von Hintergründen zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- Lokale Kopien von [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) erstellen — speichern Sie sie als `index.html` und `style.css` in einem neuen Verzeichnis.
- Speichern Sie lokale Kopien der [obersten](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [unteren](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) und [Logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) Bilder im gleichen Verzeichnis wie Ihre Code-Dateien.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie haben die Dateien erhalten, die benötigt werden, um eine Briefpapier-Vorlage zu erstellen. Sie müssen nur die Dateien zusammenfügen. Um dorthin zu gelangen, müssen Sie:

### Der Hauptbrief

- Wenden Sie das CSS auf das HTML an.
- Fügen Sie eine Hintergrunddeklaration zum Brief hinzu, die:

  - Das obere Bild oben am Brief fixiert
  - Das untere Bild unten am Brief fixiert
  - Ein halbtransparentes Farbverlauf über den beiden vorherigen Hintergründen hinzufügt, der dem Brief ein wenig Struktur verleiht. Machen Sie ihn leicht dunkel direkt oben und unten, aber vollständig transparent für einen großen Teil der Mitte.

- Fügen Sie eine weitere Hintergrunddeklaration hinzu, die nur das obere Bild oben am Brief hinzufügt, als Fallback für Browser, die die vorherige Deklaration nicht unterstützen.
- Fügen Sie dem Brief eine weiße Hintergrundfarbe hinzu.
- Fügen Sie dem Brief eine 1 mm breite durchgehende obere und untere Randlinie in einem zur restlichen Farbgebung passenden Farbton hinzu.

### Das Logo

- Fügen Sie dem {{htmlelement("Heading_Elements", "h1")}} das Logo als Hintergrundbild hinzu.
- Fügen Sie dem Logo einen Filter hinzu, um ihm einen subtilen Schlagschatten zu geben.
- Kommentieren Sie nun den Filter aus und implementieren Sie den Schlagschatten auf eine andere (etwas mehr browserkompatible) Weise, die die Form des runden Bildes weiterhin beibehält.

## Hinweise und Tipps

- Denken Sie daran, dass Sie ein Fallback für ältere Browser erstellen können, indem Sie die Fallback-Version einer Deklaration zuerst setzen, gefolgt von der Version, die nur in neueren Browsern funktioniert. Ältere Browser werden die erste Deklaration anwenden und die zweite ignorieren, während neuere Browser die erste anwenden und dann mit der zweiten überschreiben.
- Fühlen Sie sich frei, Ihre eigenen Grafiken für die Bewertung zu erstellen, wenn Sie möchten.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Design aussehen könnte:

![Volle A4-Seite, oben links zwei Dreiecksformen: die erste ist grün, die zweite rot, oben rechts dunklerer roter Trapezform. Unterhalb des grünen Dreiecks ein roter Kreis, gefüllt mit einem grünen Stern mit weißem Text darauf: Awesome Company. Unten links auf der Seite dunklerer roter Trapezform, gefolgt von den zwei Dreiecksformen: Das rote zuerst, dann das grüne. Oberhalb der grünen Dreiecksform schwarzer Text, der eine Postadresse anzeigt.](letterhead.png)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}
