---
title: overflow-block
slug: Web/CSS/overflow-block
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`overflow-block`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, was angezeigt wird, wenn der Inhalt über die blockseitigen Start- und Endkanten eines Elements hinausgeht. Dies kann nichts sein, eine Scrollleiste oder der überlaufende Inhalt.

> [!NOTE]
> Die Eigenschaft `overflow-block` wird auf {{Cssxref("overflow-y")}} oder {{Cssxref("overflow-x")}} abgebildet, abhängig vom Schreibmodus des Dokuments.

## Syntax

```css
/* Schlüsselwortwerte */
overflow-block: visible;
overflow-block: hidden;
overflow-block: clip;
overflow-block: scroll;
overflow-block: auto;

/* Globale Werte */
overflow-block: inherit;
overflow-block: initial;
overflow-block: revert;
overflow-block: revert-layer;
overflow-block: unset;
```

Die Eigenschaft `overflow-block` wird als einzelnes Schlüsselwort für den Wert {{CSSXref("overflow_value", "&lt;overflow&gt;")}} angegeben:

### Werte

- `visible`
  - : Inhalt wird nicht abgeschnitten und kann außerhalb der Start- und Endkanten des Innenabstandsblocks gerendert werden.
- `hidden`
  - : Inhalt wird gegebenenfalls beschnitten, um in die Blockdimension im Innenabstandsblock zu passen. Es werden keine Scrollleisten bereitgestellt.
- `clip`
  - : Überlaufender Inhalt wird an der Überlaufabschnittkante des Elements abgeschnitten, die durch die Eigenschaft {{CSSXref("overflow-clip-margin")}} definiert wird.
- `scroll`
  - : Inhalt wird gegebenenfalls beschnitten, um in die Blockdimension im Innenabstandsblock zu passen. Browser zeigen Scrollleisten an, unabhängig davon, ob Inhalt tatsächlich beschnitten ist. (Dies verhindert, dass Scrollleisten erscheinen oder verschwinden, wenn sich der Inhalt ändert.) Drucker können dennoch überlaufenden Inhalt drucken.
- `auto`
  - : Hängt vom Benutzeragenten ab. Wenn der Inhalt in den Innenabstandsblock passt, sieht es genauso aus wie `visible`, stellt jedoch immer noch einen neuen Block-Formatierungskontext her.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<ul>
  <li>
    <code>overflow-block: hidden</code> (versteckt den Text außerhalb des Kastens)
    <div id="hidden">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: scroll</code> (fügt immer eine Scrollleiste hinzu)
    <div id="scroll">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: clip</code> (versteckt den Text außerhalb des Kastens über die Überlaufabschnittkante hinaus)
    <div id="clip">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: visible</code> (zeigt den Text außerhalb des Kastens an, falls erforderlich)
    <div id="visible">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: auto</code> (in den meisten Browsern gleichzusetzen mit
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
#scroll {
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
- [CSS Scrollleisten-Stil](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)
- [CSS-Grundlagen: Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
