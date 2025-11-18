---
title: column-span
slug: Web/CSS/Reference/Properties/column-span
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`column-span`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es einem Element, sich über alle Spalten auszudehnen, wenn ihr Wert auf `all` gesetzt ist.

Ein Element, das sich über mehr als eine Spalte erstreckt, wird als **durchspannendes Element** bezeichnet.

{{InteractiveExample("CSS Demo: column-span")}}

```css interactive-example-choice
column-span: none;
```

```css interactive-example-choice
column-span: all;
```

```html interactive-example
<section id="default-example">
  <div class="multicol-element">
    <p>
      London. Michaelmas term lately over, and the Lord Chancellor sitting in
      Lincoln's Inn Hall.
    </p>
    <div id="example-element">Spanner?</div>
    <p>
      Implacable November weather. As much mud in the streets as if the waters
      had but newly retired from the face of the earth, and it would not be
      wonderful to meet a Megalosaurus, forty feet long or so, waddling like an
      elephantine lizard up Holborn Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.multicol-element {
  width: 100%;
  text-align: left;
  column-count: 3;
}

.multicol-element p {
  margin: 0;
}

#example-element {
  background-color: rebeccapurple;
  padding: 10px;
  color: white;
}
```

## Syntax

```css
/* Keyword values */
column-span: none;
column-span: all;

/* Global values */
column-span: inherit;
column-span: initial;
column-span: revert;
column-span: revert-layer;
column-span: unset;
```

Die `column-span`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `none`
  - : Das Element erstreckt sich nicht über mehrere Spalten.
- `all`
  - : Das Element erstreckt sich über alle Spalten. Inhalt im normalen Fluss, der vor dem Element erscheint, wird automatisch über alle Spalten ausgeglichen, bevor das Element erscheint. Das Element etabliert einen neuen Block-Formatierungskontext.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Titel über Spalten erstrecken

In diesem Beispiel wird der Titel so gestaltet, dass er sich über alle Spalten des Artikels erstreckt.

#### HTML

```html
<article>
  <h2>Header spanning all of the columns</h2>
  <p>
    The h2 should span all the columns. The rest of the text should be
    distributed among the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
</article>
```

#### CSS

```css
article {
  columns: 3;
}

h2 {
  column-span: all;
}
```

#### Ergebnis

{{EmbedLiveSample('Making_a_heading_span_columns', 'auto', 260)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spanning und Ausgleich von Spalten](/de/docs/Web/CSS/Guides/Multicol_layout/Spanning_balancing_columns)
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}}
- [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)
