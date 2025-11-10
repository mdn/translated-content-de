---
title: box-orient
slug: Web/CSS/Reference/Properties/box-orient
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Diese Eigenschaft stammt aus dem ursprünglichen CSS Flexible Box Layout-Modulentwurf und wurde durch einen neueren Standard ersetzt. Weitere Informationen über den aktuellen Standard finden Sie im [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`box-orient`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element seine Inhalte horizontal oder vertikal anordnet.

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

Die Eigenschaft `box-orient` wird als eines der unten aufgeführten Schlüsselwort-Werte angegeben.

### Werte

- `horizontal`
  - : Die Box ordnet ihre Inhalte horizontal an.
- `vertical`
  - : Die Box ordnet ihre Inhalte vertikal an.
- `inline-axis` (HTML)
  - : Die Box zeigt ihre Kinder entlang der Inline-Achse an.
- `block-axis` (HTML)
  - : Die Box zeigt ihre Kinder entlang der Block-Achse an.

Die Inline- und Block-Achsen sind die schreibmodusabhängigen Schlüsselwörter, die im Englischen auf `horizontal` und `vertical` abgebildet sind.

## Beschreibung

HTML-DOM-Elemente ordnen ihre Inhalte standardmäßig entlang der Inline-Achse an. Diese CSS-Eigenschaft wird nur auf HTML-Elemente mit einem CSS-{{CSSxRef("display")}}-Wert von `box` oder `inline-box` angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-orient = horizontal | vertical | inline-axis | block-axis`)}}

## Beispiele

### Horizontale Box-Ausrichtung einstellen

Hier bewirkt die Eigenschaft `box-orient`, dass die beiden {{HTMLElement("p")}}-Abschnitte im Beispiel in derselben Zeile angezeigt werden.

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
