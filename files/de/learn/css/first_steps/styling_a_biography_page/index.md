---
title: Styling einer Biografieseite
slug: Learn/CSS/First_steps/Styling_a_biography_page
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Mit dem Wissen, das Sie in den letzten Lektionen erworben haben, sollten Sie feststellen, dass Sie einfache Textdokumente mit CSS formatieren können, um ihnen Ihren eigenen Stil hinzuzufügen. Diese Bewertung gibt Ihnen die Möglichkeit, dies zu tun.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben und auch ein Verständnis für die HTML-Grundlagen haben (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Etwas mit CSS zu experimentieren und Ihr neu erworbenes Wissen zu testen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Sie können im untenstehenden Live-Editor arbeiten, oder Sie können [die Ausgangsdatei herunterladen](https://github.com/mdn/css-examples/blob/main/learn/getting-started/biog-download.html), um in Ihrem eigenen Editor zu arbeiten. Dies ist eine einzelne Seite, die sowohl das HTML als auch das Ausgangs-CSS (im Kopf des Dokuments) enthält. Wenn Sie möchten, können Sie dieses CSS in eine separate Datei verschieben und darauf verlinken, wenn Sie das Beispiel auf Ihrem lokalen Computer erstellen.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Das folgende Live-Beispiel zeigt eine Biografie, die mit CSS gestaltet wurde. Die verwendeten CSS-Eigenschaften sind wie folgt — jede verlinkt auf ihre Eigenschaftsseite auf MDN, die Ihnen weitere Beispiele für ihre Verwendung gibt.

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("font-style")}}
- {{cssxref("text-decoration")}}

Im interaktiven Editor finden Sie einige CSS, die bereits vorhanden sind. Diese wählen Teile des Dokuments mittels Elementselektoren, Klassen und Pseudoklassen aus. Nehmen Sie die folgenden Änderungen an diesem CSS vor:

1. Machen Sie die Überschrift der Stufe eins mit dem CSS-Farbkeyword `hotpink` rosa.
2. Geben Sie der Überschrift einen 10px gepunkteten {{cssxref("border-bottom")}} mit dem CSS-Farbkeyword `purple`.
3. Machen Sie die Überschrift der Stufe zwei kursiv.
4. Geben Sie dem `ul`, das für die Kontaktdetails verwendet wird, eine {{cssxref("background-color")}} von `#eeeeee` und einen 5px soliden purpurnen {{cssxref("border")}}. Verwenden Sie etwas {{cssxref("padding")}}, um den Inhalt vom Rand wegzudrücken.
5. Machen Sie die Links beim Hover `green`.

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu erkennen, die Sie sonst übersehen hätten, damit Sie sie beheben können.
- Versuchen Sie anschließend, nach einigen Eigenschaften zu suchen, die auf dieser Seite nicht erwähnt sind, im [MDN CSS-Referenz](/de/docs/Web/CSS/Reference) und werden Sie abenteuerlustig!
- Denken Sie daran, dass es hier keine falsche Antwort gibt — in diesem Stadium Ihres Lernens können Sie sich ruhig etwas Spaß erlauben.

## Beispiel

Sie sollten am Ende etwas erhalten, das wie dieses Bild aussieht.

![Screenshot, wie das Beispiel nach Abschluss der Bewertung aussehen sollte.](learn-css-basics-assessment.png)

{{EmbedGHLiveSample("css-examples/learn/getting-started/biog.html", '100%', 1600)}}

{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
