---
title: <display-legacy>
slug: Web/CSS/Reference/Values/display-legacy
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

CSS 2 verwendete eine Single-Keyword-Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten desselben Layout-Modus erforderte. Diese Seite erläutert diese Werte.

## Syntax

Gültige `<display-legacy>`-Werte:

- `inline-block`
  - : Das Element erzeugt eine Blockelement-Box, die mit dem umgebenden Inhalt geflossen wird, als ob es sich um eine einzelne Inline-Box handeln würde (ähnlich wie ein ersetztes Element).

    Es entspricht `inline flow-root`.

- `inline-table`
  - : Der `inline-table`-Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box und nicht als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

    Es entspricht `inline table`.

- `inline-flex`
  - : Das Element verhält sich wie ein Inline-Element und legt seinen Inhalt gemäß dem Flexbox-Modell aus.

    Es entspricht `inline flex`.

- `inline-grid`
  - : Das Element verhält sich wie ein Inline-Element und legt seinen Inhalt gemäß dem Grid-Modell aus.

    Es entspricht `inline grid`.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel erstellen wir einen Inline-Flex-Container mit dem Legacy-Schlüsselwort `inline-flex`.

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

In der neuen Syntax würde der Inline-Flex-Container unter Verwendung von zwei Werten erstellt werden: `inline` für den äußeren Anzeigetyp und `flex` für den inneren Anzeigetyp.

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
