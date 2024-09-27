---
title: box-orient
slug: Web/CSS/box-orient
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout-Modul-Entwurfs und wurde durch einen neueren Standard ersetzt. Siehe [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

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

Die `box-orient` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte spezifiziert.

### Werte

- `horizontal`
  - : Die Box ordnet ihre Inhalte horizontal an.
- `vertical`
  - : Die Box ordnet ihre Inhalte vertikal an.
- `inline-axis` (HTML)
  - : Die Box zeigt ihre Kinder entlang der Inline-Achse an.
- `block-axis` (HTML)
  - : Die Box zeigt ihre Kinder entlang der Block-Achse an.

Die Inline- und Block-Achsen sind schreibmoduskontingente Schlüsselwörter, die im Englischen zu `horizontal` und `vertical` entsprechend zugeordnet werden.

## Beschreibung

HTML DOM-Elemente ordnen ihre Inhalte standardmäßig entlang der Inline-Achse an. Diese CSS-Eigenschaft wird nur auf HTML-Elemente mit einem CSS {{CSSxRef("display")}} Wert von `box` oder `inline-box` angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-orient =
  horizontal | vertical | inline-axis | block-axis | inherit
```

## Beispiele

### Horizontale Box-Orientierung einstellen

Hierbei wird die `box-orient` Eigenschaft dazu führen, dass die beiden {{HTMLElement("p")}} Abschnitte im Beispiel in derselben Zeile angezeigt werden.

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
