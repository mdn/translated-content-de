---
title: overflow-x
slug: Web/CSS/overflow-x
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`overflow-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die linken und rechten Kanten eines Block-Elements überläuft. Dies kann nichts, eine Scrollleiste oder der überlaufende Inhalt sein. Diese Eigenschaft kann auch über die Kurzschreibweise [`overflow`](/de/docs/Web/CSS/overflow) festgelegt werden.

{{EmbedInteractiveExample("pages/css/overflow-x.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
overflow-x: visible;
overflow-x: hidden;
overflow-x: clip;
overflow-x: scroll;
overflow-x: auto;

/* Globale Werte */
overflow-x: inherit;
overflow-x: initial;
overflow-x: revert;
overflow-x: revert-layer;
overflow-x: unset;
```

Die `overflow-x` Eigenschaft wird als einzelnes {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

Wenn {{cssxref("overflow-y")}} `hidden`, `scroll` oder `auto` ist und die `overflow-x` Eigenschaft `visible` (Standard) ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs eines Elements an den linken und rechten Kanten sichtbar sein. Das Element ist kein {{glossary("scroll container")}}.
- `hidden`
  - : Überlaufender Inhalt wird abgeschnitten, wenn nötig, um horizontal in den Padding-Bereich der Elemente zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die mit der Eigenschaft [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) definiert ist. Dadurch überläuft der Inhalt den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Der Unterschied zwischen `clip` und `hidden` besteht darin, dass das Schlüsselwort `clip` auch jegliches Scrollen, einschließlich programmierten Scrollens, verbietet. Es wird kein neues Formatierungskontext erstellt. Um einen Formatierungskontext zu etablieren, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird abgeschnitten, wenn nötig, um horizontal in den Padding-Bereich des Elements zu passen. Browser zeigen Scrollleisten in horizontaler Richtung an, unabhängig davon, ob tatsächlich Inhalt abgeschnitten wurde oder nicht. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können immer noch überlaufenden Inhalt drucken.
- `auto`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten, und überlaufender Inhalt kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_, wenn der Inhalt überläuft und verbergen standardmäßig Scrollleisten. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es genauso aus wie bei `visible`, erzeugt aber dennoch einen neuen Block-Formatierungskontext. Desktop-Browser stellen Scrollleisten bereit, wenn der Inhalt überläuft.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz in Anspruch zu nehmen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<ul>
  <li>
    <code>overflow-x:hidden</code> — versteckt den Text außerhalb des Feldes
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:scroll</code> — fügt immer eine Scrollleiste hinzu
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:visible</code> — zeigt den Text außerhalb des Feldes an, falls nötig
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:auto</code> — in den meisten Browsern gleichbedeutend mit
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
- [CSS-Grundlagen: Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
