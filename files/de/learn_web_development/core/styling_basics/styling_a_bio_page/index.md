---
title: "Herausforderung: Gestaltung einer Biografie-Seite"
short-title: "Herausforderung: Biografie-Seite"
slug: Learn_web_development/Core/Styling_basics/Styling_a_bio_page
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}

In dieser Herausforderung werden Sie eine einfache Biografie-Seite gestalten und dabei einige der Fähigkeiten testen, die Sie in den letzten Lektionen gelernt haben, einschließlich der Erstellung von Selektoren und der Textgestaltung.

> [!NOTE]
> Sie können auf "Play" in den unten stehenden Live-Beispielen klicken, um den Code im MDN Playground zu öffnen, oder Sie können den Code in Ihre eigene IDE oder einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) kopieren und einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Das folgende Live-Beispiel zeigt eine Biografie, die mit CSS gestaltet wurde. Die verwendeten CSS-Eigenschaften sind wie folgt — jede verlinkt auf ihre Eigenschaftsseite bei MDN, die Ihnen weitere Beispiele zur Verwendung bietet.

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("font-style")}}
- {{cssxref("text-decoration")}}

Im Beispiel sind bereits einige CSS-Regeln vorhanden, die Teile des Dokuments mit Elementselektoren, Klassen und Pseudoklassen auswählen. Nehmen Sie die folgenden Änderungen an diesem CSS vor:

1. Machen Sie die Überschrift der ersten Ebene pink, indem Sie das CSS-Farbschlüsselwort `hotpink` verwenden.
2. Geben Sie der Überschrift einen 10px gepunkteten {{cssxref("border-bottom")}}, der das CSS-Farbschlüsselwort `purple` verwendet.
3. Machen Sie die Überschrift der zweiten Ebene kursiv.
4. Verleihen Sie der für die Kontaktdaten verwendeten `ul` eine {{cssxref("background-color")}} von `#eeeeee` und einen 5px breiten, festen, violetten {{cssxref("border")}}. Verwenden Sie etwas {{cssxref("padding")}}, um den Inhalt von der Grenze wegzuschieben.
5. Machen Sie die Links beim Hover `grün`.

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu erkennen — Fehler, die Sie möglicherweise übersehen hätten — damit Sie sie beheben können.
- Versuchen Sie anschließend, einige auf dieser Seite nicht erwähnte Eigenschaften im [MDN CSS Reference](/de/docs/Web/CSS/Reference) nachzuschlagen und seien Sie experimentierfreudig!
- Denken Sie daran, dass es hier keine falsche Antwort gibt — in diesem Stadium Ihres Lernprozesses können Sie sich ein wenig Spaß erlauben.

## Beispiel

Am Ende sollte es so aussehen wie auf diesem Bild.

![Screenshot, wie das Beispiel nach Abschluss der Bewertung aussehen sollte.](learn-css-basics-assessment.png)

Hier sind HTML- und CSS-Codeblöcke sowie das Ergebnis ihrer Kombination:

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

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}
