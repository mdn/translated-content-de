---
title: <display-legacy>
slug: Web/CSS/display-legacy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

CSS 2 verwendete eine Ein-Schlüsselwort-Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block- und Inline-Varianten desselben Layout-Modus erforderte. Diese Seite beschreibt diese Werte.

## Syntax

Gültige `<display-legacy>` Werte:

- `inline-block`

  - : Das Element generiert eine Blockelement-Box, die mit dem umgebenden Inhalt geflossen wird, als wäre es eine einzelne Inline-Box (verhält sich ähnlich wie ein ersetztes Element).

    Es entspricht `inline flow-root`.

- `inline-table`

  - : Der Wert `inline-table` hat keine direkte Zuordnung in HTML. Es verhält sich wie ein HTML {{HTMLElement("table")}} Element, jedoch als Inline-Box anstatt einer Blocklevel-Box. Innerhalb der Tabellenbox befindet sich ein Blocklevel-Kontext.

    Es entspricht `inline table`.

- `inline-flex`

  - : Das Element verhält sich wie ein Inline-Element und legt seinen Inhalt gemäß dem Flexbox-Modell an.

    Es entspricht `inline flex`.

- `inline-grid`

  - : Das Element verhält sich wie ein Inline-Element und legt seinen Inhalt gemäß dem Grid-Modell an.

    Es entspricht `inline grid`.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im untenstehenden Beispiel erstellen wir einen Inline-Flex-Container mit dem Legacy-Schlüsselwort `inline-flex`.

### HTML

```html
<div class="container">
  <div>Flex Item</div>
  <div>Flex Item</div>
</div>

Not a flex item
```

### CSS

```css
.container {
  display: inline-flex;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 300, 150)}}

In der neuen Syntax würde der Inline-Flex-Container durch die Verwendung zweier Werte erstellt: `inline` für den äußeren Anzeigetyp und `flex` für den inneren Anzeigetyp.

```css
.container {
  display: inline flex;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("display")}}
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
