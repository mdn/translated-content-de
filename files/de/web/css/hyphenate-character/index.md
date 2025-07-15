---
title: hyphenate-character
slug: Web/CSS/hyphenate-character
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`hyphenate-character`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt das Zeichen (oder die Zeichenfolge), das am Ende einer Zeile vor einem Trennungsumbruch verwendet wird.

Sowohl automatische als auch weiche Trennstriche werden entsprechend dem angegebenen Wert von hyphenate-character angezeigt.

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

Der Wert setzt entweder die Zeichenfolge, die anstelle eines Trennstrichs verwendet werden soll, oder gibt an, dass der User-Agent basierend auf den aktuellen typografischen Konventionen eine geeignete Zeichenfolge auswählen soll (Standard).

### Werte

- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der am Ende der Zeile vor einem Trennungsumbruch verwendet werden soll.
    Der User-Agent kann diesen Wert kürzen, wenn zu viele Zeichen verwendet werden.
- `auto`
  - : Der User-Agent wählt eine geeignete Zeichenfolge basierend auf den typografischen Konventionen der Inhaltsprache.
    Dies ist der Standardwert der Eigenschaft und muss nur explizit gesetzt werden, um einen anderen geerbten Wert zu überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel zeigt zwei identische Textblöcke, bei denen {{cssxref("hyphens")}} so eingestellt ist, dass sie überall dort brechen, wo es nötig ist, und bei weichen Trennungsbrüchen (erstellt mit `&shy;`).
Der erste Block hat den Wert des Trennzeichens in das Gleichheitszeichen (`=`) geändert.
Der zweite Block hat keinen hyphenate-character gesetzt, was für User-Agents, die diese Eigenschaft unterstützen, `hyphenate-character: auto` entspricht.

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
