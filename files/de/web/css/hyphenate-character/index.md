---
title: hyphenate-character
slug: Web/CSS/hyphenate-character
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`hyphenate-character`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt das Zeichen (oder den String), das am Ende einer Zeile vor einem Trennstrich verwendet wird.

Sowohl automatische als auch bedingte Trennstriche werden gemäß dem angegebenen Wert von `hyphenate-character` dargestellt.

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
  border: 2px dashed #999999;
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

Der Wert legt entweder den zu verwendenden String anstelle eines Trennstrichs fest oder gibt an, dass der User-Agent einen geeigneten String basierend auf den aktuellen typografischen Konventionen auswählen sollte (Standard).

### Werte

- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der am Ende der Zeile vor einem Trennstrich verwendet werden soll.
    Der User-Agent kann diesen Wert kürzen, wenn zu viele Zeichen verwendet werden.
- `auto`
  - : Der User-Agent wählt einen geeigneten String basierend auf den typografischen Konventionen der Inhaltsprache.
    Dies ist der Standardwert der Eigenschaft und muss nur explizit gesetzt werden, um einen anderen geerbten Wert zu überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel zeigt zwei identische Textblöcke, bei denen {{cssxref("hyphens")}} so gesetzt ist, dass sie überall dort umbrochen werden, wo es notwendig ist, und bei weichen Trennstrichen (erstellt mit `&shy;`).
Der erste Block hat den Wert des Trennstrichs in das Gleichheitszeichen (`=`) geändert.
Der zweite Block hat kein `hyphenate-character` gesetzt, was für User-Agents, die diese Eigenschaft unterstützen, gleichbedeutend mit `hyphenate-character: auto` ist.

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
