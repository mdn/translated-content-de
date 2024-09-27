---
title: overflow-x
slug: Web/CSS/overflow-x
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`overflow-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die linken und rechten Ränder eines Block-Elements überläuft. Dies kann nichts sein, eine Scrollleiste oder der übergelaufene Inhalt. Diese Eigenschaft kann auch über die [`overflow`](/de/docs/Web/CSS/overflow) Kurzschreibweise gesetzt werden.

{{EmbedInteractiveExample("pages/css/overflow-x.html")}}

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

Die `overflow-x` Eigenschaft wird als einzelnes {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwort angegeben.

Wenn {{cssxref("overflow-y")}} `hidden`, `scroll` oder `auto` ist und die `overflow-x` Eigenschaft `visible` (Standard) ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Randbereichs des Elements an den linken und rechten Kanten sichtbar sein. Das Elementfeld ist kein [scroll container](/de/docs/Glossary/scroll_container).
- `hidden`
  - : Überlaufender Inhalt wird bei Bedarf abgeschnitten, um horizontal in das Randfeld der Elemente zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) Eigenschaft definiert wird. Infolgedessen überläuft der Inhalt das Randfeld des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Der Unterschied zwischen `clip` und `hidden` liegt darin, dass das `clip` Schlüsselwort auch jegliches Scrollen, einschließlich programmatisches Scrollen, verbietet. Es wird kein neuer Formatierungskontext erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Elementfeld ist kein scroll container.
- `scroll`
  - : Überlaufender Inhalt wird bei Bedarf abgeschnitten, um horizontal in das Randfeld des Elements zu passen. Browser zeigen Scrollleisten in horizontaler Richtung an, unabhängig davon, ob Inhalt tatsächlich abgeschnitten ist oder nicht. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können immer noch überlaufenden Inhalt drucken.
- `auto`
  - : Überlaufender Inhalt wird im Randfeld des Elements abgeschnitten, und überlaufender Inhalt kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur an_, wenn der Inhalt überläuft, und verbergen Scrollleisten standardmäßig. Wenn der Inhalt in das Randfeld des Elements passt, sieht es genauso aus wie bei `visible`, erstellt jedoch dennoch einen neuen Block-Formatierungskontext. Desktop-Browser bieten Scrollleisten, wenn der Inhalt überläuft.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wert-Alias für `auto`. Bei `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

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
- [CSS Grundlagen: Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
