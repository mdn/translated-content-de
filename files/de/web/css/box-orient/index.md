---
title: box-orient
slug: Web/CSS/box-orient
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Module Entwurfs und wurde durch einen neueren Standard ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

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

Die Eigenschaft `box-orient` wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `horizontal`
  - : Die Box ordnet ihre Inhalte horizontal an.
- `vertical`
  - : Die Box ordnet ihre Inhalte vertikal an.
- `inline-axis` (HTML)
  - : Die Box zeigt ihre Kinder entlang der Inline-Achse.
- `block-axis` (HTML)
  - : Die Box zeigt ihre Kinder entlang der Block-Achse.

Die Inline- und Block-Achsen sind die schreibmodusabhängigen Schlüsselwörter, die im Englischen auf `horizontal` bzw. `vertical` abgebildet werden.

## Beschreibung

HTML DOM-Elemente ordnen standardmäßig ihre Inhalte entlang der Inline-Achse an. Diese CSS-Eigenschaft wird nur auf HTML-Elemente mit einem CSS {{CSSxRef("display")}} Wert von `box` oder `inline-box` angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-orient = horizontal | vertical | inline-axis | block-axis`)}}

## Beispiele

### Horizontale Box-Ausrichtung festlegen

Hier wird die Eigenschaft `box-orient` bewirken, dass die beiden {{HTMLElement("p")}} Abschnitte im Beispiel in derselben Zeile angezeigt werden.

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
