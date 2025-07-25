---
title: overflow-inline
slug: Web/CSS/overflow-inline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`overflow-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn Inhalt über die Inline-Anfangs- und Endränder eines Kastens hinausgeht. Dies kann nichts, ein Scrollbalken oder der überschüssige Inhalt sein.

> [!NOTE]
> Die `overflow-inline`-Eigenschaft wird abhängig vom Schreibmodus des Dokuments auf {{Cssxref("overflow-y")}} oder {{Cssxref("overflow-x")}} abgebildet.

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

Die `overflow-inline`-Eigenschaft wird als ein einzelner {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

### Werte

- `visible`
  - : Der Inhalt wird nicht abgeschnitten und kann außerhalb der Inline-Anfangs- und Endränder des Padding-Boxs gerendert werden.
- `hidden`
  - : Der Inhalt wird bei Bedarf abgeschnitten, um in die Inline-Dimension der Padding-Box zu passen. Es werden keine Scrollbalken bereitgestellt.
- `clip`
  - : Überfließender Inhalt wird an der Überlauf-Abschneidekante des Elements abgeschnitten, die mit der {{CSSXref("overflow-clip-margin")}}-Eigenschaft definiert wird.
- `scroll`
  - : Der Inhalt wird bei Bedarf abgeschnitten, um in die Inline-Dimension der Padding-Box zu passen. Browser zeigen Scrollbalken an, unabhängig davon, ob tatsächlich Inhalt abgeschnitten wird oder nicht. (Dies verhindert, dass Scrollbalken erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können dennoch überfließenden Inhalt drucken.
- `auto`
  - : Hängt vom Benutzeragenten ab. Wenn der Inhalt in die Padding-Box passt, sieht es aus wie `visible`, stellt aber dennoch einen neuen Block-Formatierungskontext her. Desktop-Browser bieten Scrollbalken, wenn Inhalt überläuft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Überlaufverhalten festlegen

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
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)
- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
