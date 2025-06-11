---
title: "Testen Sie Ihr Wissen: Fortgeschrittener HTML-Text"
short-title: Fortgeschrittener HTML-Text
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text
l10n:
  sourceCommit: a53950c7d4faad58184e06f0da370e685742a695
---

Ziel dieses Tests ist es, zu prüfen, ob Sie wissen, wie Sie [weniger bekannte HTML-Elemente verwenden, um erweiterte semantische Funktionen zu gestalten](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features).

> [!NOTE]
> Sie können Lösungen im MDN Playground oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie der bereitgestellten HTML-Datei einige Semantiken hinzufügen:

- Verwandeln Sie den zweiten Absatz in ein Blockzitat und zeigen Sie semantisch an, dass das Zitat aus [Accessibility](/de/docs/Learn_web_development/Core/Accessibility) stammt.
- Markieren Sie "HTML" und "CSS" semantisch als Akronyme und geben Sie die Erklärungen als Tooltips an.
- Verwenden Sie Tiefgestellt- und Hochgestellt-Elemente, um die korrekte Semantik für die chemischen Formeln und Daten bereitzustellen und diese korrekt anzeigen zu lassen.
- Verknüpfen Sie semantisch maschinenlesbare Daten mit den Daten im Text.

Um zu beginnen, können Sie **"Play"** im Codeblock unten klicken, um das Beispiel im MDN Playground zu bearbeiten, oder den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/advanced-text/advanced-text2-download.html) und lokal in Ihrem eigenen Editor arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung am Ende des Abschnitts anzeigen.

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

Das fertige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/advanced-text/advanced-text2-finished.html", '100%', 300)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

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
