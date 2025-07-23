---
title: "Testen Sie Ihre Fähigkeiten: Fortgeschrittener HTML-Text"
short-title: Fortgeschrittener HTML-Text
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu bewerten, ob Sie verstehen, wie man [weniger bekannte HTML-Elemente verwendet, um erweiterte semantische Merkmale zu markieren](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features).

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Verwendung](/de/docs/Learn_web_development#test_your_skills) des Fähigkeitstests. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie einigen semantischen Inhalt zum bereitgestellten HTML hinzufügen.

Um diese Aufgabe zu erfüllen:

1. Wandeln Sie den zweiten Absatz in ein Block-Quote um und geben Sie semantisch an, dass das Zitat aus [Accessibility](/de/docs/Learn_web_development/Core/Accessibility) stammt.
2. Markieren Sie "HTML" und "CSS" semantisch als Akronyme und bieten Sie die Erweiterungen als Tooltips an.
3. Verwenden Sie Tief- und Hochstellungen, um korrekte Semantik für die chemischen Formeln und Daten bereitzustellen, und sorgen Sie dafür, dass sie korrekt angezeigt werden.
4. Verknüpfen Sie maschinenlesbare Daten semantisch mit den Daten im Text.

Das fertige Beispiel sollte wie folgt aussehen:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/advanced-text/advanced-text2-finished.html", '100%', 300)}}

```html live-sample___advanced-text
<h1>Advanced text semantics</h1>

<p>Let's start with a quote:</p>

<p>
  HTML, Hypertext Markup Language is by default accessible, if used correctly.
</p>

<p>CSS can also be used to make web pages more, or less, accessible.</p>

<p>Chemical Formulae: H2O (Water), C2H6O (Ethanol).</p>

<p>
  Dates: December 25th 2019 (Christmas Day), November 2nd 2019 (Día de los
  Muertos).
</p>
```

```css hidden live-sample___advanced-text
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

p {
  margin: 0.5em 0;
}

abbr,
time {
  color: green;
}
```

{{ EmbedLiveSample('advanced-text', "100%", 260) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte wie folgt aussehen:

```html
<h1>Advanced text semantics</h1>

<p>Let's start with a quote:</p>

<blockquote cite="https://developer.mozilla.org/en-US/docs/Learn/Accessibility">
  <p>
    <abbr title="HyperText Markup Language">HTML</abbr>, Hypertext Markup
    Language is by default accessible, if used correctly.
  </p>
</blockquote>

<p>
  <abbr title="Cascading Style Sheets">CSS</abbr>, Cascading Style Sheets, can
  also be used to make web pages more, or less, accessible.
</p>

<p>
  Chemical Formulae: H<sub>2</sub>O (Water), C<sub>2</sub>H<sub>6</sub>O
  (Ethanol).
</p>

<p>
  Dates:
  <time datetime="2019-12-25">December 25<sup>th</sup> 2019</time>
  (Christmas Day),
  <time datetime="2019-11-02">November 2<sup>nd</sup> 2019</time> (Día de los
  Muertos).
</p>
```

</details>
