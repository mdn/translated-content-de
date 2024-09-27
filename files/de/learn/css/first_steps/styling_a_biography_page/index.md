---
title: Gestaltung einer Biografieseite
slug: Learn/CSS/First_steps/Styling_a_biography_page
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Mit den Dingen, die Sie in den letzten Lektionen gelernt haben, sollten Sie feststellen, dass Sie in der Lage sind, einfache Textdokumente mithilfe von CSS zu formatieren und ihnen Ihren eigenen Stil zu verleihen. Diese Bewertung gibt Ihnen die Möglichkeit, dies zu tun.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben und auch ein Verständnis der HTML-Grundlagen besitzen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Spielerischer Umgang mit CSS und Test des neu gewonnenen Wissens.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Sie können im untenstehenden Live-Editor arbeiten oder die [Startdatei herunterladen](https://github.com/mdn/css-examples/blob/main/learn/getting-started/biog-download.html), um sie in Ihrem eigenen Editor zu bearbeiten. Es handelt sich um eine einzelne Seite, die sowohl das HTML als auch das Ausgangs-CSS (im Kopf des Dokuments) enthält. Wenn Sie möchten, können Sie dieses CSS in eine separate Datei verschieben und darauf verlinken, wenn Sie das Beispiel auf Ihrem lokalen Computer erstellen.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Das folgende Live-Beispiel zeigt eine Biografie, die mit CSS gestaltet wurde. Die verwendeten CSS-Eigenschaften sind wie folgt — jede verlinkt auf ihre Eigenschaftsseite auf MDN, die Ihnen weitere Beispiele ihrer Nutzung zeigt.

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("font-style")}}
- {{cssxref("text-decoration")}}

Im interaktiven Editor finden Sie bereits einige CSS-Regeln. Diese wählen Teile des Dokuments mittels Elementselektoren, Klassen und Pseudoklassen aus. Nehmen Sie folgende Änderungen an diesem CSS vor:

1. Lassen Sie die Überschrift der ersten Ebene pink werden, indem Sie das CSS-Farbschlüsselwort `hotpink` verwenden.
2. Geben Sie der Überschrift eine 10px gestrichelte {{cssxref("border-bottom")}} in der CSS-Farbe `purple`.
3. Lassen Sie die Überschrift der zweiten Ebene kursiv werden.
4. Versehen Sie die `ul`, die für die Kontaktdaten verwendet wird, mit einer {{cssxref("background-color")}} von `#eeeeee` und einer 5px soliden lila {{cssxref("border")}}. Verwenden Sie etwas {{cssxref("padding")}} um den Inhalt vom Rand weg zu drücken.
5. Lassen Sie die Links bei Hover `grün` werden.

## Hinweise und Tipps

- Nutzen Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu entdecken – Fehler, die Sie vielleicht sonst übersehen hätten – damit Sie diese beheben können.
- Versuchen Sie anschließend, einige auf dieser Seite nicht erwähnte Eigenschaften im [MDN CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen und werden Sie kreativ!
- Denken Sie daran, dass es hier keine falsche Antwort gibt — in diesem Stadium Ihrer Lernphase können Sie sich etwas Spaß erlauben.

## Beispiel

Sie sollten am Ende etwas haben, das diesem Bild ähnelt.

![Screenshot, wie das Beispiel nach Abschluss der Bewertung aussehen sollte.](learn-css-basics-assessment.png)

{{EmbedGHLiveSample("css-examples/learn/getting-started/biog.html", '100%', 1600)}}

{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
