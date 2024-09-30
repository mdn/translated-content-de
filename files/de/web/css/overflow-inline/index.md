---
title: overflow-inline
slug: Web/CSS/overflow-inline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`overflow-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn Inhalt die Inline-Start- und -Endkanten eines Rahmens überläuft. Dies kann nichts sein, eine Scroll-Leiste oder der überlaufende Inhalt.

> [!NOTE]
> Die Eigenschaft `overflow-inline` wird je nach Schreibmodus des Dokuments auf {{Cssxref("overflow-y")}} oder {{Cssxref("overflow-x")}} abgebildet.

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

Die Eigenschaft `overflow-inline` wird als einzelnes {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwert angegeben.

### Werte

- `visible`
  - : Inhalt wird nicht abgeschnitten und kann außerhalb der Inline-Start- und -Endkanten des Innenabstands-Box gerendert werden.
- `hidden`
  - : Inhalt wird bei Bedarf abgeschnitten, um in die Inline-Dimension der Innenabstands-Box zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der Überlauf-Clipping-Kante des Elements abgeschnitten, die mit der Eigenschaft {{CSSXref("overflow-clip-margin")}} definiert ist.
- `scroll`
  - : Inhalt wird bei Bedarf abgeschnitten, um in die Inline-Dimension der Innenabstands-Box zu passen. Browser zeigen Scrollleisten an, unabhängig davon, ob Inhalt tatsächlich abgeschnitten wird. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können dennoch überlaufenden Inhalt drucken.
- `auto`
  - : Hängt vom Benutzeragenten ab. Wenn Inhalt in die Innenabstands-Box passt, sieht es aus wie `visible`, schafft aber dennoch einen neuen Block-Formatierungskontext. Desktop-Browser stellen Scrollleisten bereit, wenn Inhalt überläuft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Überlaufverhalten einstellen

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
- [CSS Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)
- [CSS-Bausteine: Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
