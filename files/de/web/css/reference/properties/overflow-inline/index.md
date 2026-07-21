---
title: "`overflow-inline` CSS property"
short-title: overflow-inline
slug: Web/CSS/Reference/Properties/overflow-inline
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`overflow-inline`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, was angezeigt wird, wenn der Inhalt die Inline-Anfangs- und Endkanten eines Kastens überläuft. Dies kann nichts, eine Scrollleiste oder der überlaufende Inhalt sein.

> [!NOTE]
> Die `overflow-inline`-Eigenschaft wird, abhängig vom Schreibmodus des Dokuments, auf {{Cssxref("overflow-y")}} oder {{Cssxref("overflow-x")}} abgebildet.

## Syntax

```css
/* Keyword values */
overflow-inline: visible;
overflow-inline: hidden;
overflow-inline: clip;
overflow-inline: scroll;
overflow-inline: auto;

/* Global values */
overflow-inline: inherit;
overflow-inline: initial;
overflow-inline: revert;
overflow-inline: revert-layer;
overflow-inline: unset;
```

### Werte

Diese Eigenschaft wird als eines der folgenden {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben:

- `visible`
  - : Der Inhalt wird nicht abgeschnitten und kann außerhalb der Inline-Anfangs- und Endkanten des Padding-Kastens dargestellt werden.
- `hidden`
  - : Der Inhalt wird bei Bedarf abgeschnitten, um in die Inline-Dimension des Padding-Kastens zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der Überlaufabschnittskante des Elements abgeschnitten, die mit der {{CSSXref("overflow-clip-margin")}}-Eigenschaft definiert wird.
- `scroll`
  - : Der Inhalt wird bei Bedarf abgeschnitten, um innerhalb der Inline-Dimension des Padding-Kastens zu passen. Browser zeigen Scrollleisten an, unabhängig davon, ob tatsächlich Inhalt abgeschnitten wird oder nicht. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können überlaufenden Inhalt dennoch drucken.
- `auto`
  - : Hängt vom Benutzeragenten ab. Wenn der Inhalt in den Padding-Kasten passt, sieht er genauso aus wie `visible`, stellt jedoch immer noch einen neuen Block-Formatierungskontext her. Desktop-Browser stellen Scrollleisten bereit, wenn der Inhalt überläuft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung des Inline-Überlaufverhaltens

#### HTML

```html
<ul>
  <li>
    <code>overflow-inline: hidden</code> (hides the text outside the box)
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: scroll</code> (always adds a scrollbar)
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: visible</code> (displays the text outside the box if
    needed)
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: auto</code> (equivalent to <code>scroll</code>
    in most browsers)
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: clip</code> (hides the text outside the box beyond
    the overflow clip edge)
    <code>clip</code>
    <div id="div5">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>
</ul>
```

#### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-inline: hidden;
}
#div2 {
  overflow-inline: scroll;
}
#div3 {
  overflow-inline: visible;
}
#div4 {
  overflow-inline: auto;
}
#div5 {
  overflow-inline: clip;
  overflow-clip-margin: 2em;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_overflow_behavior", "100%", "270")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("clip")}}, {{cssxref("display")}}, {{cssxref("overflow")}}, {{cssxref("overflow-block")}}, {{cssxref("overflow-clip-margin")}}, {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS logische Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes)
- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
