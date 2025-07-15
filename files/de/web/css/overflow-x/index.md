---
title: overflow-x
slug: Web/CSS/overflow-x
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`overflow-x`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die linken und rechten Ränder eines Blockelementes überläuft. Dies kann nichts sein, eine Bildlaufleiste oder der überlaufende Inhalt. Diese Eigenschaft kann auch mithilfe der [`overflow`](/de/docs/Web/CSS/overflow)-Kurzschreibweise gesetzt werden.

{{InteractiveExample("CSS Demo: overflow-x")}}

```css interactive-example-choice
overflow-x: visible;
```

```css interactive-example-choice
overflow-x: hidden;
```

```css interactive-example-choice
overflow-x: clip;
```

```css interactive-example-choice
overflow-x: scroll;
```

```css interactive-example-choice
overflow-x: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    The value of Pi is 3.1415926535897932384626433832795029. The value of e is
    2.7182818284590452353602874713526625.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 15em;
  height: 9em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
}
```

## Syntax

```css
/* Keyword values */
overflow-x: visible;
overflow-x: hidden;
overflow-x: clip;
overflow-x: scroll;
overflow-x: auto;

/* Global values */
overflow-x: inherit;
overflow-x: initial;
overflow-x: revert;
overflow-x: revert-layer;
overflow-x: unset;
```

Die `overflow-x`-Eigenschaft wird als einzelnes {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwort angegeben.

Wenn {{cssxref("overflow-y")}} auf `hidden`, `scroll` oder `auto` gesetzt ist und die `overflow-x`-Eigenschaft `visible` (Standard) ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements an den linken und rechten Rändern sichtbar sein. Die Element-Box ist kein {{Glossary("scroll_container", "Scroll Container")}}.
- `hidden`
  - : Überlaufender Inhalt wird bei Bedarf abgeschnitten, um horizontal in den Padding-Bereich der Elemente zu passen. Es werden keine Bildlaufleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird am _overflow clip edge_ des Elements abgeschnitten, der mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin)-Eigenschaft definiert ist. Infolgedessen überläuft der Inhalt den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Der Unterschied zwischen `clip` und `hidden` besteht darin, dass das `clip`-Schlüsselwort jegliches Scrollen, einschließlich programmgesteuertem Scrollen, verbietet. Es wird kein neuer Formatierungskontext erstellt. Um einen Formatierungskontext zu schaffen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Element-Box ist kein Scroll Container.
- `scroll`
  - : Überlaufender Inhalt wird bei Bedarf horizontal innerhalb des Padding-Bereichs des Elements abgeschnitten. Browser zeigen Bildlaufleisten in horizontaler Richtung an, unabhängig davon, ob tatsächlich Inhalt abgeschnitten wird. (Dies verhindert, dass Bildlaufleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können dennoch überlaufenden Inhalt drucken.
- `auto`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten, und überlaufender Inhalt kann in den Ansichtsbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Bildlaufleisten _nur an_, wenn der Inhalt überläuft, und verstecken Bildlaufleisten standardmäßig. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es genauso aus wie bei `visible`, erstellt aber dennoch einen neuen Blockformatierungskontext. Desktop-Browser bieten Bildlaufleisten, wenn der Inhalt überläuft.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Bei `overlay` werden die Bildlaufleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<ul>
  <li>
    <code>overflow-x:hidden</code> — hides the text outside the box
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:scroll</code> — always adds a scrollbar
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:visible</code> — displays the text outside the box if
    needed
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:auto</code> — on most browsers, equivalent to
    <code>scroll</code>
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>
</ul>
```

### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-x: hidden;
}
#div2 {
  overflow-x: scroll;
}
#div3 {
  overflow-x: visible;
}
#div4 {
  overflow-x: auto;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "270")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
