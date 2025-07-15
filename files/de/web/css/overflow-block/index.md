---
title: overflow-block
slug: Web/CSS/overflow-block
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`overflow-block`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was angezeigt wird, wenn Inhalt die Blockanfangs- und Blockendkanten eines Rahmens überläuft. Dies kann nichts, eine Scrollleiste oder der Überlaufinhalt sein.

> [!NOTE]
> Die `overflow-block` Eigenschaft wird auf {{Cssxref("overflow-y")}} oder {{Cssxref("overflow-x")}} abgebildet, abhängig vom Schreibmodus des Dokuments.

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

Die `overflow-block` Eigenschaft wird als einfaches {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwort angegeben:

### Werte

- `visible`
  - : Inhalt wird nicht abgeschnitten und kann außerhalb der Blockanfangs- und Blockendkanten des Innenabstands gerendert werden.
- `hidden`
  - : Inhalt wird, falls erforderlich, abgeschnitten, um in die Blockdimension des Innenabstands zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der Überlaufrandkante des Elements abgeschnitten, die mithilfe der {{CSSXref("overflow-clip-margin")}} Eigenschaft definiert wird.
- `scroll`
  - : Inhalt wird, falls erforderlich, abgeschnitten, um in die Blockdimension des Innenabstands zu passen. Browser zeigen Scrollleisten an, unabhängig davon, ob tatsächlich Inhalt abgeschnitten wird. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können weiterhin überlaufenden Inhalt drucken.
- `auto`
  - : Hängt vom Benutzeragenten ab. Wenn der Inhalt in den Innenabstand passt, sieht es aus wie `visible`, aber es wird dennoch ein neuer Block-Formatierungskontext erstellt.

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
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Scrollleistenstile](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [CSS Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)
- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
