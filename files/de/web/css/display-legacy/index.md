---
title: <display-legacy>
slug: Web/CSS/display-legacy
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

CSS 2 verwendete eine Einkomponenten-Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für Block-Level- und Inline-Level-Varianten des gleichen Layout-Modus erforderte. Diese Seite beschreibt diese Werte.

## Syntax

Gültige `<display-legacy>` Werte:

- `inline-block`
  - : Das Element erzeugt ein Blockelement-Feld, das wie ein einzelnes Inline-Feld mit dem umgebenden Inhalt geflossen wird (ähnlich wie ein ersetztes Element).

    Es ist gleichbedeutend mit `inline flow-root`.

- `inline-table`
  - : Der `inline-table` Wert hat keine direkte Entsprechung in HTML. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box anstatt einer Blockebenen-Box. Innerhalb der Tabellenbox befindet sich ein kontextuelles Block-Level.

    Es ist gleichbedeutend mit `inline table`.

- `inline-flex`
  - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt gemäß dem Flexbox-Modell an.

    Es ist gleichbedeutend mit `inline flex`.

- `inline-grid`
  - : Das Element verhält sich wie ein Inline-Element und ordnet seinen Inhalt gemäß dem Grid-Modell an.

    Es ist gleichbedeutend mit `inline grid`.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel erstellen wir einen Inline-Flex-Container mit dem Legacy-Schlüsselwort inline-flex.

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

In der neuen Syntax würde der Inline-Flex-Container durch die Verwendung von zwei Werten erstellt, inline für den äußeren Display-Typ und flex für den inneren Display-Typ.

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
