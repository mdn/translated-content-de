---
title: "Testen Sie Ihre Fähigkeiten: Grundlagen von HTML-Text"
short-title: "Test: Grundlagen von HTML-Text"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics
l10n:
  sourceCommit: c132e962e8a432d843d77ea5e32d8cdb0a9e7fd8
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie verstehen, wie man Text in HTML kennzeichnet, um ihm Struktur und Bedeutung zu verleihen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Fähigkeitstest-Leitfaden](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über unsere [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie das bereitgestellte HTML mit semantischen Überschriften- und Absatz-Elementen versehen.

```html-nolint live-sample___text-basics-1
Basic HTML Animals

This is the first paragraph in our page. It introduces our animals.

The Llama

Our Llama is a big fan of list items. When she spies a patch of them on a web page, she will eat them like sweets, licking her lips as she goes.

The Anaconda

The crafty anaconda likes to slither around the page, traveling rapidly by way of anchors to sneak up on his prey.
```

<!-- Gemeinsamer/Setup-CSS-Code -->

```css hidden live-sample___text-basics-1 live-sample___text-basics-1-finished live-sample___text-basics-2 live-sample___text-basics-2-finished live-sample___text-basics-3 live-sample___text-basics-3-finished live-sample___text-basics-4 live-sample___text-basics-4-finished
body {
  background-color: white;
  color: #333333;
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
}

h2 {
  font-size: 1.6rem;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Beispiel-spezifischer Code -->

```css hidden live-sample___text-basics-1 live-sample___text-basics-1-finished
h1,
h2 {
  color: purple;
}

p {
  color: gray;
  margin: 0.5em 0;
}
```

{{ EmbedLiveSample('text-basics-1', "100%", 130) }}

Das fertige Beispiel sollte folgendermaßen aussehen:

{{ EmbedLiveSample('text-basics-1-finished', "100%", 320) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html live-sample___text-basics-1-finished
<h1>Basic HTML Animals</h1>

<p>This is the first paragraph in our page. It introduces our animals.</p>

<h2>The Llama</h2>

<p>
  Our Llama is a big fan of list items. When she spies a patch of them on a web
  page, she will eat them like sweets, licking her lips as she goes.
</p>

<h2>The Anaconda</h2>

<p>
  The crafty anaconda likes to slither around the page, traveling rapidly by way
  of anchors to sneak up on his prey.
</p>
```

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie die erste nicht markierte Liste in eine ungeordnete Liste und die zweite in eine geordnete Liste umwandeln.

```html-nolint live-sample___text-basics-2
<h1>Looking at lists</h1>

<p>Turn the following list of my favorite vegetables into an unordered list.</p>

Cucumber
Broccoli
Asparagus
Pepper

<p>Turn the following directions into an ordered list.</p>

First knock on the door
When prompted, say the magic word
Wait for at least 5 seconds
Turn the handle and push
```

```css hidden live-sample___text-basics-2 live-sample___text-basics-2-finished
p {
  margin: 0.5em 0;
}

ol {
  border: 2px solid purple;
}

ul {
  border: 2px solid orange;
}

ol,
ul {
  padding: 5px 20px;
  border-radius: 4px;
}
```

{{ EmbedLiveSample('text-basics-2', "100%", 220) }}

Das fertige Beispiel sollte folgendermaßen aussehen:

{{ EmbedLiveSample('text-basics-2-finished', "100%", 400) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html live-sample___text-basics-2-finished
<h1>Looking at lists</h1>

<p>Turn the following list of my favorite vegetables into an unordered list.</p>

<ul>
  <li>Cucumber</li>
  <li>Broccoli</li>
  <li>Asparagus</li>
  <li>Pepper</li>
</ul>

<p>Turn the following directions into an ordered list.</p>

<ol>
  <li>First knock on the door</li>
  <li>When prompted, say the magic word</li>
  <li>Wait for at least 5 seconds</li>
  <li>Turn the handle and push</li>
</ol>
```

</details>

## Aufgabe 3

In dieser Aufgabe möchten wir, dass Sie die bereitgestellten Tiere und ihre Definitionen in eine Definitionsliste umwandeln.

```html-nolint live-sample___text-basics-3
<h1>Advanced HTML Animals</h1>

Llama
Tall, woolly quadruped, pointy ears. Sometimes rideable, but grumpy and spits a lot. Big fan of list items.
Anaconda
A very large constrictor snake; travels rapidly by way of anchors to sneak up on his prey.
Hippopotamus
His description is bottomless.
```

```css hidden live-sample___text-basics-3 live-sample___text-basics-3-finished
h1 {
  color: purple;
}

dl {
  color: gray;
  margin: 0.5em 0;
}

dt {
  font-weight: bold;
  color: purple;
}
```

{{ EmbedLiveSample('text-basics-3', "100%", 160) }}

Das fertige Beispiel sollte folgendermaßen aussehen:

{{ EmbedLiveSample('text-basics-3-finished', "100%", 250) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html live-sample___text-basics-3-finished
<h1>Advanced HTML Animals</h1>

<dl>
  <dt>Llama</dt>
  <dd>
    Tall, woolly quadruped, pointy ears. Sometimes rideable, but grumpy and
    spits a lot. Big fan of list items.
  </dd>
  <dt>Anaconda</dt>
  <dd>
    A very large constrictor snake; travels rapidly by way of anchors to sneak
    up on his prey.
  </dd>
  <dt>Hippopotamus</dt>
  <dd>His description is bottomless.</dd>
</dl>
```

</details>

## Aufgabe 4

In dieser Aufgabe erhalten Sie einen Absatz und Ihr Ziel ist es, einige passende Wörter mit starker Wichtigkeit und einige mit Betonung durch Inline-Elemente zu kennzeichnen.

```html live-sample___text-basics-4
<h1>Emphasis and importance</h1>

<p>
  There are two things I care about — music and friends. Someday I might be able
  to get my friends interested in each other, and my music!
</p>
```

```css hidden live-sample___text-basics-4 live-sample___text-basics-4-finished
h1,
strong {
  color: purple;
}

p,
em {
  margin: 0.5em 0;
}

em {
  color: gray;
}
```

{{ EmbedLiveSample('text-basics-4', "100%", 160) }}

Das fertige Beispiel sollte in etwa so aussehen:

{{ EmbedLiveSample('text-basics-4-finished', "100%", 140) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html live-sample___text-basics-4-finished
<h1>Emphasis and importance</h1>

<p>
  There are <strong>two</strong> things I care about —
  <strong>music</strong> and <strong>friends</strong>. Someday I
  <em>might</em> be able to get my friends interested in each other,
  <em>and</em> my music!
</p>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
