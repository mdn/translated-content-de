---
title: "`hyphenate-character` CSS property"
short-title: hyphenate-character
slug: Web/CSS/Reference/Properties/hyphenate-character
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`hyphenate-character`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Zeichen (oder die Zeichenkette) fest, das am Ende einer Zeile vor einem Trennungsumbruch verwendet wird.

Sowohl automatische als auch weiche Trennstriche werden entsprechend dem angegebenen Wert der hyphenate-character-Eigenschaft angezeigt.

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

Der Wert legt entweder die Zeichenkette fest, die anstelle eines Trennstrichs verwendet werden soll, oder gibt an, dass der Benutzeragent eine geeignete Zeichenkette basierend auf den aktuellen typografischen Konventionen auswählen soll (Standard).

### Werte

- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der am Ende der Zeile vor einem Trennungsumbruch verwendet werden soll.
    Der Benutzeragent kann diesen Wert kürzen, wenn zu viele Zeichen verwendet werden.
- `auto`
  - : Der Benutzeragent wählt eine geeignete Zeichenkette basierend auf den typografischen Konventionen der Inhaltssprache.
    Dies ist der Standardwert der Eigenschaft und muss nur explizit gesetzt werden, um einen anderen geerbten Wert zu überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel zeigt zwei identische Textblöcke, bei denen {{cssxref("hyphens")}} so eingestellt ist, dass sie überall dort aufbrechen, wo es nötig ist, und bei weichen Trennstrichen (erzeugt mit `&shy;`).
Im ersten Block wird der Wert des Trennzeichens auf das Gleichheitszeichen (`=`) geändert.
Der zweite Block hat kein hyphenate-character gesetzt, was für Benutzeragenten, die diese Eigenschaft unterstützen, gleichbedeutend mit `hyphenate-character: auto` ist.

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
