---
title: overflow-x
slug: Web/CSS/Reference/Properties/overflow-x
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`overflow-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn Inhalte die linken und rechten Ränder eines Blockelementes überfließen. Dies kann nichts sein, eine Scrollleiste oder der Überlaufinhalt. Diese Eigenschaft kann auch durch die Verwendung der [`overflow`](/de/docs/Web/CSS/Reference/Properties/overflow) Kurzschreibweise festgelegt werden.

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

Die `overflow-x` Eigenschaft wird als ein einzelner {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

Wenn {{cssxref("overflow-y")}} `hidden`, `scroll` oder `auto` ist und die `overflow-x` Eigenschaft `visible` (Standard) ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb der Polsterung des Elements auf den linken und rechten Rändern sichtbar sein. Das Element ist keine {{Glossary("scroll_container", "Scroll-Container")}}.
- `hidden`
  - : Überlaufender Inhalt wird, falls nötig, horizontal in die Polsterung des Elements eingeklemmt. Keine Scrollleisten werden bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der _Überlaufkantenkante_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/Reference/Properties/overflow-clip-margin) Eigenschaft definiert ist. Dadurch überläuft der Inhalt die Polsterung des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht festgelegt. Der Unterschied zwischen `clip` und `hidden` ist, dass das `clip` Schlüsselwort jegliches Scrollen verbietet, einschließlich programmatischem Scrollen. Es wird kein neuer Formatierungskontext erstellt. Um einen Formatierungskontext zu etablieren, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird, falls nötig, horizontal in die Polsterung des Elements eingepasst. Browser zeigen Scrollleisten in horizontaler Richtung, unabhängig davon, ob tatsächlich Inhalte abgeschnitten werden. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können noch überlaufende Inhalte drucken.
- `auto`
  - : Überlaufender Inhalt wird an der Polsterung des Elements abgeschnitten, und der Überlaufinhalt kann betrachtet werden. Anders als bei `scroll` zeigen User Agents Scrollleisten _nur dann_, wenn der Inhalt überläuft, und verstecken Scrollleisten standardmäßig. Wenn der Inhalt in die Polsterung des Elements passt, sieht es aus wie bei `visible`, etabliert jedoch dennoch einen neuen Block-Formatierungskontext. Desktop-Browser bieten Scrollleisten, wenn der Inhalt überläuft.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wert-Alias für `auto`. Bei `overlay` werden die Scrollleisten über den Inhalt gezeichnet, anstatt Platz einzunehmen.

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
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [Lernen: Überlaufende Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
