---
title: "`box-orient` CSS property"
short-title: box-orient
slug: Web/CSS/Reference/Properties/box-orient
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls und wurde durch einen neueren Standard ersetzt. Weitere Informationen über den aktuellen Standard finden Sie im [Flexbox-Leitfaden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`box-orient`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element seine Inhalte horizontal oder vertikal anordnet.

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

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `horizontal`
  - : Die Box ordnet ihre Inhalte horizontal an.
- `vertical`
  - : Die Box ordnet ihre Inhalte vertikal an.
- `inline-axis` (HTML)
  - : Die Box zeigt ihre Kinder entlang der Inline-Achse an.
- `block-axis` (HTML)
  - : Die Box zeigt ihre Kinder entlang der Block-Achse an.

Die Inline- und Block-Achsen sind die schreibmodusabhängigen Schlüsselwörter, die im Englischen jeweils `horizontal` und `vertical` zugeordnet werden.

## Beschreibung

HTML-DOM-Elemente ordnen standardmäßig ihre Inhalte entlang der Inline-Achse an. Diese CSS-Eigenschaft gilt nur für HTML-Elemente mit einem CSS-{{CSSxRef("display")}}-Wert von `box` oder `inline-box`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-orient = horizontal | vertical | inline-axis | block-axis`)}}

## Beispiele

### Horizontale Boxausrichtung einstellen

Hier wird die Eigenschaft `box-orient` dafür sorgen, dass die beiden {{HTMLElement("p")}}-Abschnitte im Beispiel in derselben Zeile angezeigt werden.

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

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
