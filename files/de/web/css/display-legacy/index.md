---
title: <display-legacy>
slug: Web/CSS/display-legacy
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{CSSRef}}

CSS 2 nutzte eine Einkeyword-Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block- und Inline-Varianten des gleichen Layout-Modus erforderte. Diese Seite beschreibt diese Werte.

## Syntax

Gültige `<display-legacy>` Werte:

- `inline-block`

  - : Das Element erzeugt ein Blockelement-Box, das mit dem umgebenden Inhalt so fließt, als ob es eine einzelne Inline-Box wäre (ähnlich wie ein ersetztes Element).

    Es entspricht `inline flow-root`.

- `inline-table`

  - : Der `inline-table` Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML {{HTMLElement("table")}} Element, jedoch als Inline-Box statt als Block-Level-Box. Innerhalb der Tabellenbox befindet sich ein Block-Level-Kontext.

    Es entspricht `inline table`.

- `inline-flex`

  - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt gemäß dem Flexbox-Modell an.

    Es entspricht `inline flex`.

- `inline-grid`

  - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt gemäß dem Grid-Modell an.

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

In der neuen Syntax würde der Inline-Flex-Container durch die Verwendung von zwei Werten erstellt werden: `inline` für den äußeren Display-Typ und `flex` für den inneren Display-Typ.

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
