---
title: overflow-x
slug: Web/CSS/Reference/Properties/overflow-x
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`overflow-x`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, was angezeigt wird, wenn der Inhalt die linken und rechten Ränder eines Block-Elementes überläuft. Dies kann nichts, eine Scrollleiste oder der überlaufende Inhalt sein. Diese Eigenschaft kann auch mithilfe der [`overflow`](/de/docs/Web/CSS/Reference/Properties/overflow) Kurzschreibweise gesetzt werden.

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

Die `overflow-x`-Eigenschaft wird als einzelner {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

Wenn {{cssxref("overflow-y")}} `hidden`, `scroll` oder `auto` ist und die `overflow-x`-Eigenschaft auf `visible` (Standard) gesetzt ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Innenabstands des Elements an den linken und rechten Rändern sichtbar sein. Das Element ist kein {{Glossary("scroll_container", "Scroll-Container")}}.
- `hidden`
  - : Überlaufender Inhalt wird nötigenfalls abgeschnitten, um horizontal in das Innenabstand des Elements zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der _Abschneidekante_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/Reference/Properties/overflow-clip-margin)-Eigenschaft definiert wird. Dadurch überläuft der Inhalt den Innenabstand des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, falls nicht gesetzt. Der Unterschied zwischen `clip` und `hidden` besteht darin, dass das `clip`-Schlüsselwort auch alle Scrollmöglichkeiten verbietet, einschließlich programmatischen Scrollings. Es wird kein neues Formatierungskontext erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird nötigenfalls abgeschnitten, um horizontal innerhalb des Innenabstands des Elements zu passen. Browser zeigen Scrollleisten in horizontaler Richtung an, unabhängig davon, ob tatsächlich Inhalt abgeschnitten ist oder nicht. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können weiterhin überlaufenden Inhalt drucken.
- `auto`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten, und überlaufender Inhalt kann in den Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_ an, wenn der Inhalt überläuft, und verbergen Scrollleisten standardmäßig. Wenn der Inhalt in den Innenabstand des Elements passt, sieht es genauso aus wie bei `visible`, erstellt jedoch trotzdem einen neuen Block-Formatierungskontext. Desktop-Browser bieten Scrollleisten, wenn der Inhalt überläuft.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Bei `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Formal definition

{{CSSInfo}}

## Formal syntax

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
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
