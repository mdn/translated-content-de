---
title: "Herausforderung: Gestaltung einer Biografie-Seite"
slug: Learn_web_development/Core/Styling_basics/Styling_a_bio_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}

In dieser Herausforderung gestalten Sie eine einfache Biografie-Seite, bei der Sie einige der Fähigkeiten testen, die Sie in den letzten Lektionen erlernt haben, einschließlich der Erstellung von Selektoren und der Textgestaltung.

> [!NOTE]
> Sie können auf "Play" in den unten stehenden Live-Beispielen klicken, um den Code im MDN Playground zu öffnen, oder Sie können den Code in Ihre eigene IDE oder einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) kopieren und einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich an einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Das folgende Live-Beispiel zeigt eine Biografie, die mit CSS gestaltet wurde. Die verwendeten CSS-Eigenschaften sind wie folgt — jede verlinkt auf ihre Eigenschaftsseite auf MDN, die Ihnen weitere Beispiele für deren Verwendung bietet.

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("font-style")}}
- {{cssxref("text-decoration")}}

Im Beispiel ist bereits etwas CSS vorhanden, das Teile des Dokuments mithilfe von Elementselektoren, Klassen und Pseudoklassen auswählt. Nehmen Sie die folgenden Änderungen an diesem CSS vor:

1. Machen Sie die Überschrift der Ebene eins pink, indem Sie das CSS-Farbkeyword `hotpink` verwenden.
2. Geben Sie der Überschrift einen 10px gestrichelten {{cssxref("border-bottom")}}, der das CSS-Farbkeyword `purple` verwendet.
3. Machen Sie die Überschrift der Ebene zwei kursiv.
4. Versehen Sie das für die Kontaktdaten verwendete `ul` mit einem {{cssxref("background-color")}} von `#eeeeee` und einem 5px soliden violetten {{cssxref("border")}}. Verwenden Sie etwas {{cssxref("padding")}}, um den Inhalt vom Rand wegzuschieben.
5. Machen Sie die Links `green`, wenn sie mit der Maus überfahren werden.

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS-Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu erkennen — Fehler, die Sie möglicherweise sonst übersehen hätten — damit Sie sie korrigieren können.
- Versuchen Sie anschließend, einige Eigenschaften nachzuschlagen, die auf dieser Seite nicht erwähnt werden, im [MDN CSS-Referenz](/de/docs/Web/CSS/Reference) und seien Sie abenteuerlustig!
- Denken Sie daran, dass es hier keine falsche Antwort gibt — in diesem Stadium Ihres Lernens können Sie es sich leisten, ein wenig Spaß zu haben.

## Beispiel

Sie sollten am Ende etwas wie dieses Bild erhalten.

![Screenshot, wie das Beispiel aussehen sollte, nachdem Sie die Bewertung abgeschlossen haben.](learn-css-basics-assessment.png)

Hier sind die HTML- und CSS-Codeblöcke sowie das Ergebnis ihrer Kombination:

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