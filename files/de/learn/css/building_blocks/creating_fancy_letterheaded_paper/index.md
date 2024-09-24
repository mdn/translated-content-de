---
title: Erstellen von stilvollem Briefpapier
slug: Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}

Wenn Sie einen guten Eindruck hinterlassen möchten, kann es ein sehr guter Anfang sein, einen Brief auf stilvollem Briefpapier zu schreiben. In dieser Bewertung fordern wir Sie heraus, eine Online-Vorlage zu erstellen, die einen solchen Look erreicht.

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
        Testen des Verständnisses des CSS-Boxmodells und anderer boxbezogener Funktionen wie der Implementierung von Hintergründen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- Lokale Kopien der [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) und [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) erstellen — speichern Sie diese als `index.html` und `style.css` in einem neuen Verzeichnis.
- Speichern Sie lokale Kopien der [oberen](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [unteren](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) und [Logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) Bilder im selben Verzeichnis wie Ihre Code-Dateien.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren ausfüllen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurden die Dateien zur Erstellung einer Briefkopfvorlage zur Verfügung gestellt. Sie müssen nur die Dateien zusammenfügen. Um dies zu erreichen, müssen Sie:

### Der Hauptbrief

- Wenden Sie das CSS auf das HTML an.
- Fügen Sie eine Hintergrunddeklaration zum Brief hinzu, die:

  - Das obere Bild am oberen Rand des Briefes anfügt
  - Das untere Bild am unteren Rand des Briefes anfügt
  - Einen halbtransparenten Farbverlauf über die oben genannten Hintergründe hinzufügt, der dem Brief ein wenig Textur verleiht. Machen Sie es unmittelbar oben und unten leicht dunkel, aber für einen großen Teil der Mitte völlig transparent.

- Fügen Sie eine weitere Hintergrunddeklaration hinzu, die nur das obere Bild oben auf den Brief setzt, als Fallback für Browser, die die vorherige Deklaration nicht unterstützen.
- Fügen Sie dem Brief eine weiße Hintergrundfarbe hinzu.
- Fügen Sie dem Brief oben und unten eine 1mm breite, einfarbige Begrenzung in einer Farbe hinzu, die zum Rest des Farbschemas passt.

### Das Logo

- Fügen Sie dem {{htmlelement("Heading_Elements", "h1")}} das Logo als Hintergrundbild hinzu.
- Fügen Sie dem Logo einen Filter hinzu, der ihm einen subtilen Schatten verleiht.
- Kommentieren Sie nun den Filter aus und implementieren Sie den Schlagschatten auf eine andere Weise (etwas mehr cross-browser-kompatibel), die dennoch die Form des runden Bildes beibehält.

## Hinweise und Tipps

- Denken Sie daran, dass Sie eine Rückfallebene für ältere Browser erstellen können, indem Sie die Rückfallversion einer Deklaration zuerst setzen, gefolgt von der Version, die nur in neueren Browsern funktioniert. Ältere Browser wenden die erste Deklaration an und ignorieren die zweite, während neuere Browser die erste anwenden und sie dann durch die zweite überschreiben.
- Fühlen Sie sich frei, Ihre eigenen Grafiken für die Bewertung zu erstellen, wenn Sie möchten.

## Beispiel

Das folgende Bildschirmfoto zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Vollständige A4-Seite bestehend aus oben links zwei dreieckigen Formen, die erste ist grün, die zweite ist rot, oben rechts ein dunkler roter Trapez. Unter dem grünen Dreieck, ein roter Kreis gefüllt mit einem grünen Stern mit weißem Text darauf: Awesome company. Unten links auf der Seite, dunkler roter Trapez, gefolgt von den zwei dreieckigen Formen: das rote, dann das grüne. Über dem grünen Dreieck schwarzer Text mit einer Postadresse.](letterhead.png)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}
