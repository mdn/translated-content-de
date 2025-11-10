---
title: ::first-letter
slug: Web/CSS/Reference/Selectors/::first-letter
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`::first-letter`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wendet Stile auf den ersten Buchstaben der ersten Zeile eines [Blockcontainers](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model#block_containers) an, jedoch nur, wenn er nicht von anderem Inhalt (wie Bildern oder Inline-Tabellen) vorhergegangen wird.

{{InteractiveExample("CSS Demo: ::first-letter", "tabbed-shorter")}}

```css interactive-example
p::first-letter {
  font-size: 1.5rem;
  font-weight: bold;
  color: brown;
}
```

```html interactive-example
<p>
  Scientists exploring the depths of Monterey Bay unexpectedly encountered a
  rare and unique species of dragonfish. This species is the rarest of its
  species.
</p>

<p>
  When Robison and a team of researchers discovered this fish, they were aboard
  a week-long expedition.
</p>
```

Der erste Buchstabe eines Elements lässt sich nicht immer leicht identifizieren:

- Satzzeichen, die dem ersten Buchstaben vorausgehen oder unmittelbar folgen, werden in die Übereinstimmung einbezogen. Satzzeichen umfassen jedes Unicode-Zeichen, das in den Klassen _open_ (Ps), _close_ (Pe), _initial quote_ (Pi), _final quote_ (Pf) und _other punctuation_ (Po) definiert ist.
- Einige Sprachen haben Digraphen, die immer zusammen großgeschrieben werden, wie das `IJ` im Niederländischen. In diesen Fällen sollten beide Buchstaben des Digraphen durch das `::first-letter`-Pseudoelement übereinstimmen.
- Eine Kombination des {{cssxref("::before")}}-Pseudoelements und der {{cssxref("content")}}-Eigenschaft kann am Anfang des Elements Text einfügen. In diesem Fall wird `::first-letter` den ersten Buchstaben dieses generierten Inhalts übereinstimmen.

> [!NOTE]
> CSS führte die `::first-letter`-Schreibweise (mit zwei Doppelpunkten) ein, um [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zu unterscheiden. Aus Gründen der Abwärtskompatibilität akzeptieren Browser auch `:first-letter`, das zuvor eingeführt wurde.
>
> Die Unterstützung für Digraphen wie `IJ` im Niederländischen ist schlecht. Überprüfen Sie die untenstehende Kompatibilitätstabelle, um den aktuellen Stand der Unterstützung zu sehen.

## Zulässige Eigenschaften

Nur eine kleine Untermenge von CSS-Eigenschaften kann mit dem `::first-letter`-Pseudoelement verwendet werden:

- Alle Schrifteigenschaften: {{Cssxref("font")}}, {{Cssxref("font-style")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{Cssxref("line-height")}} und {{Cssxref("font-family")}}
- Alle Hintergrundeigenschaften: {{Cssxref("background")}}, {{Cssxref("background-color")}}, {{Cssxref("background-image")}}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}} und {{cssxref("background-blend-mode")}}
- Alle Randeigenschaften: {{Cssxref("margin")}}, {{Cssxref("margin-top")}}, {{Cssxref("margin-right")}}, {{Cssxref("margin-bottom")}}, {{Cssxref("margin-left")}}
- Alle Innenabstandseigenschaften: {{Cssxref("padding")}}, {{Cssxref("padding-top")}}, {{Cssxref("padding-right")}}, {{Cssxref("padding-bottom")}}, {{Cssxref("padding-left")}}
- Alle Rahmen-Eigenschaften: die Kurzschreibweise {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}, {{cssxref("border-width")}}, {{cssxref("border-radius")}}, {{cssxref("border-image")}} und die Langform-Eigenschaften
- Die {{cssxref("color")}}-Eigenschaft
- Die {{cssxref("text-decoration")}}, {{cssxref("text-shadow")}}, {{cssxref("text-transform")}}, {{cssxref("letter-spacing")}}, {{cssxref("word-spacing")}} (wenn geeignet), {{cssxref("line-height")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{cssxref("float")}}, {{cssxref("vertical-align")}} (nur wenn `float` `none` ist) CSS-Eigenschaften

## Syntax

```css
::first-letter {
  /* ... */
}
```

## Beispiele

### Grundlegendes Drop Cap

In diesem Beispiel verwenden wir das `::first-letter`-Pseudoelement, um einen Drop-Cap-Effekt auf den ersten Buchstaben des Absatzes direkt nach dem `<h2>` zu erstellen.

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

{{EmbedLiveSample('Basic_drop_cap', '100%', 350)}}

### Effekt auf spezielle Satzzeichen und nicht-lateinische Zeichen

Dieses Beispiel zeigt den Effekt von `::first-letter` auf spezielle Satzzeichen und nicht-lateinische Zeichen.

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

{{EmbedLiveSample('Effect_on_special_punctuation_and_non-Latin_characters', '100%', 350)}}

### Gestaltung des ersten Buchstabens in einem SVG-Text-Element

In diesem Beispiel verwenden wir das `::first-letter`-Pseudoelement, um den ersten Buchstaben eines SVG {{SVGElement("text")}}-Elements zu gestalten.

> [!NOTE]
> Zum Zeitpunkt des Schreibens hat diese Funktion [eingeschränkte Unterstützung](#browser-kompatibilität).

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

{{EmbedLiveSample("styling_first_letter_in_SVG_text_element", "100%", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::first-line")}}
