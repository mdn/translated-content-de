---
title: "`box-orient` CSS property"
short-title: box-orient
slug: Web/CSS/Reference/Properties/box-orient
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Modul-Entwurfs, welcher durch einen neueren Standard ersetzt wurde. Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`box-orient`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element seine Inhalte horizontal oder vertikal anordnet.

## Syntax

```css
/* Keyword values */
box-orient: horizontal;
box-orient: vertical;
box-orient: inline-axis;
box-orient: block-axis;

/* Global values */
box-orient: inherit;
box-orient: initial;
box-orient: unset;
```

Die `box-orient` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `horizontal`
  - : Das Feld ordnet seine Inhalte horizontal an.
- `vertical`
  - : Das Feld ordnet seine Inhalte vertikal an.
- `inline-axis` (HTML)
  - : Das Feld zeigt seine Kinder entlang der Inline-Achse an.
- `block-axis` (HTML)
  - : Das Feld zeigt seine Kinder entlang der Block-Achse an.

Die Inline- und Block-Achsen sind die von der Schreibrichtung abhängigen Schlüsselwörter, die im Englischen auf `horizontal` bzw. `vertical` abbilden.

## Beschreibung

HTML-DOM-Elemente ordnen ihre Inhalte standardmäßig entlang der Inline-Achse an. Diese CSS-Eigenschaft wird nur auf HTML-Elemente angewendet, die einen CSS {{CSSxRef("display")}} Wert von `box` oder `inline-box` haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-orient = horizontal | vertical | inline-axis | block-axis`)}}

## Beispiele

### Horizontale Box-Ausrichtung festlegen

Hier wird die `box-orient`-Eigenschaft bewirken, dass die beiden {{HTMLElement("p")}} Abschnitte im Beispiel in der gleichen Zeile angezeigt werden.

#### HTML

```html
<div class="example">
  <p>I will be to the left of my sibling.</p>
  <p>I will be to the right of my sibling.</p>
</div>
```

#### CSS

```css
div.example {
  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */
  display: box; /* As specified */

  /* Children should be oriented vertically */
  -moz-box-orient: horizontal; /* Mozilla */
  -webkit-box-orient: horizontal; /* WebKit */
  box-orient: horizontal; /* As specified */
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting horizontal box orientation', '', 100) }}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
