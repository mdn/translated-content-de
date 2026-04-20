---
title: "`overflow-x` CSS property"
short-title: overflow-x
slug: Web/CSS/Reference/Properties/overflow-x
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`overflow-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die linken und rechten Ränder eines Block-Elementes überschreitet. Dies kann nichts, eine Scrollleiste oder der überfließende Inhalt sein. Diese Eigenschaft kann auch mithilfe der {{cssxref("overflow")}} Kurzschreibweise gesetzt werden.

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

Die Eigenschaft `overflow-x` wird als einzelner {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

Wenn {{cssxref("overflow-y")}} `hidden`, `scroll` oder `auto` ist und die Eigenschaft `overflow-x` `visible` (Standard) ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Innenabstands des Elements links und rechts sichtbar sein. Das Elementkasten ist kein {{Glossary("scroll_container", "Scroll-Container")}}.
- `hidden`
  - : Überlaufender Inhalt wird, falls nötig, abgeschnitten, um horizontal in den Innenabstand des Elements zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die mit der Eigenschaft {{cssxref("overflow-clip-margin")}} definiert wird. Infolgedessen überläuft der Inhalt den Innenabstand des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Der Unterschied zwischen `clip` und `hidden` besteht darin, dass das Schlüsselwort `clip` jegliches Scrollen, einschließlich programmatischem Scrollen, verbietet. Es wird kein neuer Formatierungskontext erstellt. Um einen Formatierungskontext zu etablieren, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Elementkasten ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird, falls nötig, abgeschnitten, um horizontal innerhalb des Innenabstands des Elements zu passen. Browser zeigen Scrollleisten in horizontaler Richtung an, unabhängig davon, ob tatsächlich Inhalt abgeschnitten wird oder nicht. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können dennoch überlaufenden Inhalt drucken.
- `auto`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten, und überlaufender Inhalt kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur an_, wenn der Inhalt tatsächlich überläuft, und verbergen Scrollleisten standardmäßig. Wenn der Inhalt in den Innenabstand des Elements passt, sieht es aus wie `visible`, aber es wird dennoch ein neuer Block-Formatierungskontext erstellt. Desktop-Browser bieten Scrollleisten, wenn der Inhalt überläuft.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Wertalias für `auto`. Bei `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

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
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
