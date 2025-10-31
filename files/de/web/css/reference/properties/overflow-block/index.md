---
title: overflow-block
slug: Web/CSS/Reference/Properties/overflow-block
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`overflow-block`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn Inhalt über die Block-Anfangs- und Block-Endkanten eines Kastens hinausgeht. Dies kann nichts sein, eine Scrollleiste oder der Überlaufinhalt.

> [!NOTE]
> Die `overflow-block` Eigenschaft wird je nach Schreibmodus des Dokuments auf {{Cssxref("overflow-y")}} oder {{Cssxref("overflow-x")}} abgebildet.

## Syntax

```css
/* Keyword values */
overflow-block: visible;
overflow-block: hidden;
overflow-block: clip;
overflow-block: scroll;
overflow-block: auto;

/* Global values */
overflow-block: inherit;
overflow-block: initial;
overflow-block: revert;
overflow-block: revert-layer;
overflow-block: unset;
```

Die `overflow-block` Eigenschaft wird als einzelnes {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwort angegeben:

### Werte

- `visible`
  - : Der Inhalt wird nicht abgeschnitten und kann außerhalb der Block-Anfangs- und Block-Endkanten der Padding-Box gerendert werden.
- `hidden`
  - : Der Inhalt wird, falls nötig, abgeschnitten, um in die Blockdimension der Padding-Box zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der Überlauf-Clipkante des Elements abgeschnitten, die mit der Eigenschaft {{CSSXref("overflow-clip-margin")}} definiert ist.
- `scroll`
  - : Der Inhalt wird, falls nötig, abgeschnitten, um in die Blockdimension der Padding-Box zu passen. Browser zeigen Scrollleisten unabhängig davon, ob tatsächlich Inhalt abgeschnitten wird. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können dennoch überlaufenden Inhalt drucken.
- `auto`
  - : Hängt vom Benutzeragenten ab. Wenn der Inhalt in die Padding-Box passt, sieht es aus wie `visible`, aber es wird dennoch ein neuer Block-Formatierungskontext etabliert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<ul>
  <li>
    <code>overflow-block: hidden</code> (hides the text outside the box)
    <div id="hidden">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: scroll</code> (always adds a scrollbar)
    <div id="scroll">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: clip</code> (hides the text outside the box beyond the
    overflow clip edge)
    <div id="clip">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: visible</code> (displays the text outside the box if
    needed)
    <div id="visible">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: auto</code> (on most browsers, equivalent to
    <code>scroll</code>)
    <div id="auto">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  height: 100px;
  margin-bottom: 120px;
}

#hidden {
  overflow-block: hidden;
}
#scroll {
  overflow-block: scroll;
}
#clip {
  overflow-block: clip;
}
#visible {
  overflow-block: visible;
}
#auto {
  overflow-block: auto;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "780")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [CSS logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Scrollleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [CSS Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)
- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
