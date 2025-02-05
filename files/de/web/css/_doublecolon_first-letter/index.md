---
title: "::first-letter"
slug: Web/CSS/::first-letter
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Das **`::first-letter`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wendet Stile auf den ersten Buchstaben der ersten Zeile eines [Blockcontainers](/de/docs/Web/CSS/Visual_formatting_model#block_containers) an, jedoch nur, wenn diesem kein anderer Inhalt vorausgeht (wie z. B. Bilder oder Inline-Tabellen).

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-first-letter.html", "tabbed-shorter")}}

Die Identifizierung des ersten Buchstabens eines Elements ist nicht immer trivial:

- Satzzeichen, die dem ersten Buchstaben vorangehen oder diesem direkt folgen, werden in die Übereinstimmung einbezogen. Satzzeichen umfassen alle Unicode-Zeichen, die unter die Klassen _open_ (Ps), _close_ (Pe), _initial quote_ (Pi), _final quote_ (Pf) und _other punctuation_ (Po) fallen.
- Einige Sprachen haben Digraphen, die immer zusammen großgeschrieben werden, wie das `IJ` im Niederländischen. In diesen Fällen sollten beide Buchstaben des Digraphen durch das `::first-letter`-Pseudoelement abgedeckt sein.
- Eine Kombination aus dem {{ cssxref("::before") }}-Pseudoelement und der {{ cssxref("content") }}-Eigenschaft kann Text am Anfang des Elements einfügen. In diesem Fall wird `::first-letter` den ersten Buchstaben dieses generierten Inhalts erfassen.

> [!NOTE]
> CSS führte die `::first-letter`-Schreibweise (mit zwei Doppelpunkten) ein, um [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Zur Abwärtskompatibilität unterstützen Browser auch `:first-letter`, das früher eingeführt wurde.
>
> Die Browser-Unterstützung für Digraphen wie `IJ` im Niederländischen ist schlecht. Prüfen Sie die Kompatibilitätstabelle unten, um den aktuellen Stand der Unterstützung zu sehen.

## Erlaubte Eigenschaften

Nur eine kleine Untermenge von CSS-Eigenschaften kann mit dem `::first-letter`-Pseudoelement verwendet werden:

- Alle Schrift-Eigenschaften: {{ Cssxref("font") }}, {{ Cssxref("font-style") }}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{ Cssxref("font-variant") }}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{cssxref("font-size-adjust")}}, {{ Cssxref("line-height") }} und {{ Cssxref("font-family") }}
- Alle Hintergrund-Eigenschaften: {{ Cssxref("background") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}, {{ cssxref("background-size") }}, {{ Cssxref("background-attachment") }}, und {{cssxref("background-blend-mode")}}
- Alle Rand-Eigenschaften: {{ Cssxref("margin") }}, {{ Cssxref("margin-top") }}, {{ Cssxref("margin-right") }}, {{ Cssxref("margin-bottom") }}, {{ Cssxref("margin-left") }}
- Alle Abstands-Eigenschaften: {{ Cssxref("padding") }}, {{ Cssxref("padding-top") }}, {{ Cssxref("padding-right") }}, {{ Cssxref("padding-bottom") }}, {{ Cssxref("padding-left") }}
- Alle Rahmen-Eigenschaften: die Kurzschreibweisen {{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}, {{ cssxref("border-width") }}, {{ cssxref("border-radius") }}, {{cssxref("border-image")}}, und die Langschreibweisen
- Die {{ cssxref("color") }}-Eigenschaft
- Die Eigenschaften {{ cssxref("text-decoration") }}, {{cssxref("text-shadow")}}, {{ cssxref("text-transform") }}, {{ cssxref("letter-spacing") }}, {{ cssxref("word-spacing") }} (falls zutreffend), {{ cssxref("line-height") }}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{ cssxref("float") }}, {{ cssxref("vertical-align") }} (nur wenn `float` auf `none` gesetzt ist)

## Syntax

```css
::first-letter {
  /* ... */
}
```

## Beispiele

### Basisbeispiel mit Initiale

In diesem Beispiel verwenden wir das `::first-letter`-Pseudoelement, um einen Initialeffekt für den ersten Buchstaben des Absatzes direkt nach dem `<h2>` zu erstellen.

#### HTML

```html
<h2>My heading</h2>
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est.
</p>
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
```

#### CSS

```css
p {
  width: 500px;
  line-height: 1.5;
}

h2 + p::first-letter {
  color: white;
  background-color: black;
  border-radius: 2px;
  box-shadow: 3px 3px 0 red;
  font-size: 250%;
  padding: 6px 3px;
  margin-right: 6px;
  float: left;
}
```

#### Ergebnis

{{ EmbedLiveSample('Basic_drop_cap', '100%', 350) }}

### Effekt auf spezielle Satzzeichen und nicht-lateinische Zeichen

Dieses Beispiel zeigt die Wirkung von `::first-letter` auf spezielle Satzzeichen und nicht-lateinische Zeichen.

#### HTML

```html
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
<p>-The beginning of a special punctuation mark.</p>
<p>_The beginning of a special punctuation mark.</p>
<p>"The beginning of a special punctuation mark.</p>
<p>'The beginning of a special punctuation mark.</p>
<p>*The beginning of a special punctuation mark.</p>
<p>#The beginning of a special punctuation mark.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>"特殊的汉字标点符号开头。</p>
```

#### CSS

```css
p::first-letter {
  color: red;
  font-size: 150%;
}
```

#### Ergebnis

{{ EmbedLiveSample('Effect_on_special_punctuation_and_non-Latin_characters', '100%', 350) }}

### Erste Buchstaben in einem SVG-Text-Element stylen

In diesem Beispiel stylen wir mit dem `::first-letter`-Pseudoelement den ersten Buchstaben eines SVG-{{SVGElement("text")}}-Elements.

> [!NOTE]
> Zum Zeitpunkt der Erstellung hat diese Funktion [eingeschränkte Unterstützung](#browser-kompatibilität).

#### HTML

```html
<svg viewBox="0 0 300 40">
  <text y="30">First letter in &lt;text&gt; SVG</text>
</svg>
```

#### CSS

```css
text {
  font-family: sans-serif;
}

text::first-letter {
  font-family: serif;
  font-size: 2rem;
  font-weight: 600;
  fill: tomato;
  stroke: indigo;
}
```

#### Ergebnis

{{ EmbedLiveSample("styling_first_letter_in_SVG_text_element", "100%", "100") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::first-line")}}
