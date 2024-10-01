---
title: overflow-x
slug: Web/CSS/overflow-x
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`overflow-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt über die linken und rechten Ränder eines Blockelements hinausläuft. Dies kann nichts sein, eine Scrollleiste oder der überlaufende Inhalt. Diese Eigenschaft kann auch mit der Kurzform [`overflow`](/de/docs/Web/CSS/overflow) gesetzt werden.

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

Die Eigenschaft `overflow-x` wird als einzelnes {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwort angegeben.

Wenn {{cssxref("overflow-y")}} den Wert `hidden`, `scroll` oder `auto` hat und die Eigenschaft `overflow-x` auf `visible` (Standard) gesetzt ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Innenabstandsrahmens (Padding-Box) des Elements auf den linken und rechten Kanten sichtbar sein. Die Elementbox ist kein {{Glossary("scroll_container", "Scroll-Container")}}.
- `hidden`
  - : Überlaufender Inhalt wird falls nötig abgeschnitten, um horizontal in den Innenabstandsrahmen des Elements zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der _Überlauf-Schnittkante_ des Elements abgeschnitten, die mit der Eigenschaft [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) definiert ist. Dadurch läuft der Inhalt außerhalb der Innenabstandsbox des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, falls nicht gesetzt. Der Unterschied zwischen `clip` und `hidden` besteht darin, dass das `clip`-Schlüsselwort jegliches Scrollen, einschließlich programmgesteuertem Scrollen, verbietet. Es wird kein neuer Formatierungskontext erstellt. Um einen Formatierungskontext zu erschaffen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Elementbox ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird falls nötig abgeschnitten, um horizontal in die Innenabstandsbox des Elements zu passen. Browser zeigen in der Horizontalrichtung Scrollleisten an, unabhängig davon, ob Inhalt tatsächlich abgeschnitten wird oder nicht. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können den überlaufenden Inhalt dennoch drucken.
- `auto`
  - : Überlaufender Inhalt wird an der Innenabstandsbox des Elements abgeschnitten, und überlaufender Inhalt kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_, wenn der Inhalt überläuft, und verstecken Scrollleisten standardmäßig. Wenn der Inhalt in die Innenabstandsbox des Elements passt, sieht es genauso aus wie bei `visible`, jedoch wird trotzdem ein neuer Block-Formatierungskontext erstellt. Desktop-Browser stellen Scrollleisten bereit, wenn der Inhalt überläuft.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Wertalias für `auto`. Mit `overlay` werden die Scrollleisten über den Inhalt gezeichnet, anstatt Platz einzunehmen.

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
- [CSS-Bausteine: Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
