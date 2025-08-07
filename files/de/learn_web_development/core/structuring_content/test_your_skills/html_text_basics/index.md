---
title: "Überprüfen Sie Ihre Fähigkeiten: Grundlagen von HTML-Text"
short-title: Grundlagen von HTML-Text
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie verstehen, wie man Text in HTML auszeichnet, um ihm Struktur und Bedeutung zu verleihen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung von Fähigkeitstests](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie den bereitgestellten HTML-Code mit semantischen Überschrifts- und Absatz-Elementen auszeichnen.

Das fertige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/basic-text/basic-text1-finished.html", '100%', 300)}}

```html-nolint live-sample___text-basics-1
Basic HTML Animals

This is the first paragraph in our page. It introduces our animals.

The Llama

Our Llama is a big fan of list items. When she spies a patch of them on a web page, she will eat them like sweets, licking her lips as she goes.

The Anaconda

The crafty anaconda likes to slither around the page, traveling rapidly by way of anchors to sneak up on his prey.
```

<!-- Gemeinsamer/eingesetzter CSS-Code -->

```css hidden live-sample___text-basics-1 live-sample___text-basics-2 live-sample___text-basics-3 live-sample___text-basics-4
body {
  background-color: white;
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

```css hidden live-sample___text-basics-1
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

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte so aussehen:

```html
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

In dieser Aufgabe möchten wir, dass Sie die erste nicht ausgezeichnete Liste in eine ungeordnete Liste umwandeln und die zweite in eine geordnete Liste.

Das fertige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/basic-text/basic-text2-finished.html", '100%', 400)}}

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

```css hidden live-sample___text-basics-2
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

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte so aussehen:

```html
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

Das fertige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/advanced-text/advanced-text1-finished.html", '100%', 250)}}

```html-nolint live-sample___text-basics-3
<h1>Advanced HTML Animals</h1>

Llama
Tall, woolly quadruped, pointy ears. Sometimes rideable, but grumpy and spits a lot. Big fan of list items.
Anaconda
A very large constrictor snake; travels rapidly by way of anchors to sneak up on his prey.
Hippopotamus
His description is bottomless.
```

```css hidden live-sample___text-basics-3
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

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte so aussehen:

```html
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

In dieser Aufgabe erhalten Sie einen Absatz, und Ihr Ziel ist es, einige Wörter mit besonderer Wichtigkeit hervorzuheben und andere zu betonen, indem Sie Inline-Elemente verwenden.

Das fertige Beispiel sollte etwa so aussehen:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/basic-text/basic-text3-finished.html", '100%', 120)}}

```html live-sample___text-basics-4
<h1>Emphasis and importance</h1>

<p>
  There are two things I care about — music and friends. Someday I might be able
  to get my friends interested in each other, and my music!
</p>
```

```css hidden live-sample___text-basics-4
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

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte so aussehen:

```html
<h1>Emphasis and importance</h1>

<p>
  There are <strong>two</strong> things I care about —
  <strong>music</strong> and <strong>friends</strong>. Someday I
  <em>might</em> be able to get my friends interested in each other,
  <em>and</em> my music!
</p>
```

</details>
