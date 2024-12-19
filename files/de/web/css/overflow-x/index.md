---
title: overflow-x
slug: Web/CSS/overflow-x
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`overflow-x`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die linken und rechten Kanten eines Block-Elementes überläuft. Dies kann nichts sein, eine Bildlaufleiste oder der überlaufende Inhalt. Diese Eigenschaft kann auch durch die Verwendung der [`overflow`](/de/docs/Web/CSS/overflow)-Kurzform-Eigenschaft gesetzt werden.

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

Die `overflow-x`-Eigenschaft wird als einzelnes {{CSSXref("overflow_value", "&lt;overflow&gt;")}}-Schlüsselwort angegeben.

Wenn {{cssxref("overflow-y")}} auf `hidden`, `scroll` oder `auto` gesetzt ist und die `overflow-x`-Eigenschaft `visible` (Standard) ist, wird der Wert implizit als `auto` berechnet.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Innenabstands des Elements an den linken und rechten Kanten sichtbar sein. Das Element ist kein {{Glossary("scroll_container", "scroll container")}}.
- `hidden`
  - : Überlaufender Inhalt wird gegebenenfalls abgeschnitten, um horizontal in den Innenabstand des Elements zu passen. Es werden keine Bildlaufleisten angezeigt.
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin)-Eigenschaft definiert wird. Dadurch überläuft der Inhalt den Innenabstand des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, falls nicht gesetzt. Der Unterschied zwischen `clip` und `hidden` ist, dass das `clip`-Schlüsselwort jegliches Scrollen, einschließlich programmatisches Scrollen, verbietet. Es wird kein neuer Formatierungskontext erstellt. Um einen Formatierungskontext zu etablieren, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element ist kein scroll container.
- `scroll`
  - : Überlaufender Inhalt wird gegebenenfalls abgeschnitten, um horizontal in den Innenabstand des Elements zu passen. Browser zeigen Bildlaufleisten in horizontaler Richtung an, unabhängig davon, ob tatsächlich irgendein Inhalt abgeschnitten wird. (Dies verhindert, dass Bildlaufleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können dennoch überlaufenden Inhalt drucken.
- `auto`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten, und überlaufender Inhalt kann zum Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen User Agents Bildlaufleisten _nur dann_ an, wenn der Inhalt überläuft, und blenden Bildlaufleisten standardmäßig aus. Wenn der Inhalt in den Innenabstand des Elements passt, sieht es aus wie bei `visible`, erstellt jedoch trotzdem einen neuen Block-Formatierungskontext. Desktop-Browser bieten Bildlaufleisten, wenn der Inhalt überläuft.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wert, der aliasmäßig für `auto` steht. Mit `overlay` werden die Bildlaufleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

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
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [Learn: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
