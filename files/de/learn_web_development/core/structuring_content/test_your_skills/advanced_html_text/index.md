---
title: "Testen Sie Ihre Fähigkeiten: Erweitertes HTML-Text"
short-title: Erweitertes HTML-Text
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie verstehen, wie Sie [weniger bekannte HTML-Elemente zur Markierung erweiterter semantischer Funktionen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features) verwenden können.

> [!NOTE]
> Sie können Lösungen im MDN Playground oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

Bei dieser Aufgabe möchten wir, dass Sie einige Semantiken zu dem bereitgestellten HTML hinzufügen, wie folgt:

- Verwandeln Sie den zweiten Absatz in ein blockweises Zitat und geben Sie semantisch an, dass das Zitat aus [Accessibility](/de/docs/Learn_web_development/Core/Accessibility) stammt.
- Markieren Sie "HTML" und "CSS" semantisch als Akronyme und geben Sie Erweiterungen als Tooltips an.
- Verwenden Sie Tief- und Hochschrift, um die chemischen Formeln und Daten korrekt zu markieren und korrekt anzuzeigen.
- Verknüpfen Sie semantisch maschinenlesbare Daten mit den Daten im Text.

Um zu beginnen, können Sie auf **"Play"** im Codeblock unten klicken, um das Beispiel im MDN Playground zu bearbeiten, oder [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/advanced-text/advanced-text2-download.html) und lokal in Ihrem eigenen Editor arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unten im Abschnitt ansehen.

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

Das fertige Beispiel sollte wie folgt aussehen:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/advanced-text/advanced-text2-finished.html", '100%', 300)}}

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
