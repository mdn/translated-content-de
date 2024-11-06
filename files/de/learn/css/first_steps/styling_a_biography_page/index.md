---
title: Eine Biografieseite stylen
slug: Learn/CSS/First_steps/Styling_a_biography_page
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Mit dem, was Sie in den letzten Lektionen gelernt haben, sollten Sie in der Lage sein, einfache Textdokumente mit CSS zu formatieren und ihnen Ihren eigenen Stil hinzuzufügen. Diese Bewertung gibt Ihnen die Möglichkeit, genau das zu tun.

> [!NOTE]
> Sie können auf „Play“ in den Live-Beispielen unten klicken, um den Code im MDN Playground zu öffnen, oder Sie können den Code in Ihre eigene IDE oder einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) kopieren und einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben und Grundkenntnisse in HTML besitzen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Sich mit etwas CSS vertraut zu machen und Ihr neu erworbenes Wissen zu testen.</td>
    </tr>
  </tbody>
</table>

## Projektbeschreibung

Das folgende Live-Beispiel zeigt eine Biografie, die mit CSS gestylt wurde. Die verwendeten CSS-Eigenschaften sind wie folgt — jede verlinkt auf ihre Eigenschaftsseite auf MDN, die Ihnen weitere Anwendungsbeispiele bietet.

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("font-style")}}
- {{cssxref("text-decoration")}}

Im Beispiel ist bereits etwas CSS vorhanden, das Teile des Dokuments mithilfe von Elementselektoren, Klassen und Pseudo-Klassen auswählt. Nehmen Sie die folgenden Änderungen an diesem CSS vor:

1. Machen Sie die Überschrift der Ebene eins rosa, indem Sie das CSS-Farbwort `hotpink` verwenden.
2. Verleihen Sie der Überschrift einen 10px gepunkteten {{cssxref("border-bottom")}}, der das CSS-Farbwort `purple` verwendet.
3. Machen Sie die Überschrift der Ebene zwei kursiv.
4. Versehen Sie das `ul`, das für die Kontaktdaten verwendet wird, mit einer {{cssxref("background-color")}} von `#eeeeee` und einem 5px soliden lila {{cssxref("border")}}. Verwenden Sie etwas {{cssxref("padding")}}, um den Inhalt vom Rand wegzudrücken.
5. Lassen Sie die Links beim Hover `green` werden.

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu erkennen — Fehler, die Sie sonst möglicherweise übersehen hätten — damit Sie diese beheben können.
- Versuchen Sie anschließend, einige hier nicht erwähnte Eigenschaften im [MDN CSS Reference](/de/docs/Web/CSS/Reference) nachzuschlagen und werden Sie abenteuerlustig!
- Denken Sie daran, dass es hier keine falschen Antworten gibt — in diesem Stadium Ihres Lernens können Sie es sich leisten, ein wenig Spaß zu haben.

## Beispiel

Sie sollten am Ende etwas wie dieses Bild erhalten.

![Screenshot, wie das Beispiel nach Abschluss der Bewertung aussehen sollte.](learn-css-basics-assessment.png)

Hier sind die HTML- und CSS-Codeblöcke und das Ergebnis ihrer Kombination:

```html live-sample___biog
<h1>Jane Doe</h1>
<div class="job-title">Web Developer</div>
<p>
  Far far away, behind the word mountains, far from the countries Vokalia and
  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
  right at the coast of the Semantics, a large language ocean.
</p>

<p>
  A small river named Duden flows by their place and supplies it with the
  necessary regelialia. It is a paradisematic country, in which roasted parts of
  sentences fly into your mouth.
</p>

<h2>Contact information</h2>
<ul>
  <li>Email: <a href="mailto:jane@example.com">jane@example.com</a></li>
  <li>Web: <a href="http://example.com">http://example.com</a></li>
  <li>Tel: 123 45678</li>
</ul>
```

```css live-sample___biog
body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: #375e97;
  font-size: 2em;
  font-family: Georgia, "Times New Roman", Times, serif;
  border-bottom: 1px solid #375e97;
}

h2 {
  font-size: 1.5em;
}

.job-title {
  color: #999999;
  font-weight: bold;
}

a:link,
a:visited {
  color: #fb6542;
}

a:hover {
  text-decoration: none;
}
```

{{EmbedLiveSample("biog", "", "400px")}}

{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
