---
title: "Testen Sie Ihre Fähigkeiten: Fortgeschrittener HTML-Text"
short-title: "Test: Fortgeschrittener HTML-Text"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text
l10n:
  sourceCommit: f86740f3a842a5a075be18185ecaf9a981eda4b9
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie verstehen, wie man [weniger bekannte HTML-Elemente verwendet, um fortgeschrittene semantische Funktionen zu kennzeichnen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features).

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie dem bereitgestellten HTML einige Semantiken hinzufügen.

Um diese Aufgabe zu erfüllen:

1. Verwandeln Sie den zweiten Absatz in ein Blockquote und zeigen Sie semantisch an, dass das Zitat aus [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) stammt.
2. Zeichnen Sie "HTML" und "CSS" semantisch als Akronyme aus und geben Sie Erweiterungen als Tooltips an.
3. Verwenden Sie Tief- und Hochstellung, um die korrekten Semantiken für chemische Formeln und Daten bereitzustellen und richtig darzustellen.
4. Verbinden Sie maschinenlesbare Daten semantisch mit den Daten im Text.

Das fertige Beispiel sollte so aussehen:

{{EmbedLiveSample('advanced-text-solution', "", 260)}}

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

```css hidden live-sample___advanced-text live-sample___advanced-text-solution
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
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

Ihr fertiges HTML sollte so aussehen:

```html live-sample___advanced-text-solution
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

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
