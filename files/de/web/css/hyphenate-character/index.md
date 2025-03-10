---
title: hyphenate-character
slug: Web/CSS/hyphenate-character
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`hyphenate-character`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Zeichen (oder den Zeichenstring) fest, das am Ende einer Zeile vor einem Trennbruch verwendet wird.

Sowohl automatische als auch weiche Trennungen werden gemäß dem angegebenen Wert von hyphenate-character angezeigt.

{{InteractiveExample("CSS Demo: hyphenate-character")}}

```css interactive-example-choice
hyphenate-character: auto;
```

```css interactive-example-choice
hyphenate-character: "=";
```

```css interactive-example-choice
hyphenate-character: "—";
```

```html interactive-example
<section id="default-example">
  <p id="example-element">An extra­ordinarily long English word!</p>
</section>
```

```css interactive-example
#example-element {
  border: 2px dashed #999;
  font-size: 1.5rem;
  text-align: left;
  width: 7rem;
  hyphens: auto;
}
```

## Syntax

```css
hyphenate-character: <string>;
hyphenate-character: auto;
```

Der Wert legt entweder den zu verwendenden Zeichenstring anstelle eines Bindestrichs fest oder gibt an, dass der User-Agent basierend auf den aktuellen typografischen Konventionen eine geeignete Zeichenfolge auswählen soll (Standard).

### Werte

- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}} der am Ende der Zeile vor einem Trennbruch verwendet werden soll.
    Der User-Agent kann diesen Wert kürzen, wenn zu viele Zeichen verwendet werden.
- `auto`
  - : Der User-Agent wählt basierend auf den typografischen Konventionen der Inhaltssprache eine geeignete Zeichenfolge aus.
    Dies ist der Standardwert der Eigenschaft und muss nur explizit festgelegt werden, um einen anderen geerbten Wert zu überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel zeigt zwei identische Textblöcke, bei denen {{cssxref("hyphens")}} so eingestellt ist, dass sie bei Bedarf gebrochen werden und auch bei weichen Trennungen (`&shy;`).
Der erste Block hat den Wert des Trennzeichens auf das Gleichheitszeichen (`=`) geändert.
Der zweite Block hat kein hyphenate-character gesetzt, was `hyphenate-character: auto` entspricht, für User-Agents, die diese Eigenschaft unterstützen.

### HTML

```html
<dl>
  <dt><code>hyphenate-character: "="</code></dt>
  <dd id="string" lang="en">Superc&shy;alifragilisticexpialidocious</dd>
  <dt><code>hyphenate-character is not set</code></dt>
  <dd lang="en">Superc&shy;alifragilisticexpialidocious</dd>
</dl>
```

### CSS

```css
dd {
  width: 90px;
  border: 1px solid black;
  hyphens: auto;
}

dd#string {
  -webkit-hyphenate-character: "=";
  hyphenate-character: "=";
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("hyphens")}}, {{cssxref("overflow-wrap")}}.
