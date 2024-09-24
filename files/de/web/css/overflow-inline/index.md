---
title: overflow-inline
slug: Web/CSS/overflow-inline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`overflow-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn Inhalt über die Inline-Anfangs- und Endkanten eines Rahmens überläuft. Dies kann nichts, eine Scrollleiste oder der überfließende Inhalt sein.

> [!NOTE]
> Die `overflow-inline` Eigenschaft wird je nach Schreibmodus des Dokuments auf {{Cssxref("overflow-y")}} oder {{Cssxref("overflow-x")}} abgebildet.

## Syntax

```css
/* Schlüsselwortwerte */
overflow-inline: visible;
overflow-inline: hidden;
overflow-inline: clip;
overflow-inline: scroll;
overflow-inline: auto;

/* Globale Werte */
overflow-inline: inherit;
overflow-inline: initial;
overflow-inline: revert;
overflow-inline: revert-layer;
overflow-inline: unset;
```

Die `overflow-inline` Eigenschaft wird als einzelnes {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwort angegeben.

### Werte

- `visible`
  - : Inhalt wird nicht abgeschnitten und kann außerhalb der Inline-Anfangs- und Endkanten des Padding-Rahmens angezeigt werden.
- `hidden`
  - : Inhalt wird bei Bedarf abgeschnitten, um in die Inline-Dimension des Padding-Rahmens zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überfließender Inhalt wird an der Überlauf-Clip-Kante des Elements abgeschnitten, die mit der {{CSSXref("overflow-clip-margin")}} Eigenschaft definiert wird.
- `scroll`
  - : Inhalt wird bei Bedarf abgeschnitten, um in die Inline-Dimension des Padding-Rahmens zu passen. Browser zeigen Scrollleisten an, unabhängig davon, ob tatsächlich Inhalt abgeschnitten wird. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können dennoch überfließenden Inhalt drucken.
- `auto`
  - : Hängt vom Benutzeragenten ab. Wenn der Inhalt in den Padding-Rahmen passt, sieht es genauso aus wie `visible`, etabliert jedoch weiterhin einen neuen Blockformatierungskontext. Desktop-Browser stellen Scrollleisten bereit, wenn Inhalt überläuft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Inline-Überlaufverhaltens

#### HTML

```html
<ul>
  <li>
    <code>overflow-inline: hidden</code> (versteckt den Text außerhalb des Rahmens)
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: scroll</code> (fügt immer eine Scrollleiste hinzu)
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: visible</code> (zeigt den Text bei Bedarf außerhalb des Rahmens an)
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: auto</code> (entspricht in den meisten Browsern <code>scroll</code>)
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: clip</code> (versteckt den Text außerhalb des Rahmens über die Überlauf-Clip-Kante hinaus)
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
- [CSS Bausteine: Überfließender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
