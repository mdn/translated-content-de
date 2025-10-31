---
title: box-orient
slug: Web/CSS/Reference/Properties/box-orient
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout Modul-Entwurfs und wurde durch einen neueren Standard ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

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
  - : Das Kästchen ordnet seine Inhalte horizontal an.
- `vertical`
  - : Das Kästchen ordnet seine Inhalte vertikal an.
- `inline-axis` (HTML)
  - : Das Kästchen zeigt seine Kinder entlang der Inline-Achse an.
- `block-axis` (HTML)
  - : Das Kästchen zeigt seine Kinder entlang der Block-Achse an.

Die Inline- und Block-Achsen sind von der Schreibrichtung abhängige Schlüsselwörter, die im Englischen zu `horizontal` und `vertical` korrespondieren.

## Beschreibung

HTML-DOM-Elemente ordnen ihre Inhalte standardmäßig entlang der Inline-Achse an. Diese CSS-Eigenschaft gilt nur für HTML-Elemente mit einem CSS {{CSSxRef("display")}}-Wert von `box` oder `inline-box`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-orient = horizontal | vertical | inline-axis | block-axis`)}}

## Beispiele

### Horizontale Boxausrichtung setzen

Hier bewirkt die `box-orient` Eigenschaft, dass die beiden {{HTMLElement("p")}} Abschnitte im Beispiel in derselben Zeile angezeigt werden.

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
