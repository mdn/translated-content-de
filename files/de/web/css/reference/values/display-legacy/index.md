---
title: "`<display-legacy>` CSS-Typ"
short-title: <display-legacy>
slug: Web/CSS/Reference/Values/display-legacy
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

CSS 2 verwendete eine Einfach-Keyword-Syntax für die `display`-Eigenschaft, die separate Schlüsselwörter für block- und inlinebasierte Varianten desselben Layout-Modus erforderte. Diese Seite beschreibt diese Werte.

## Syntax

Gültige `<display-legacy>` Werte:

- `inline-block`
  - : Das Element erzeugt eine Blockelement-Box, die mit dem umgebenden Inhalt geflossen wird, als ob es eine einzelne Inline-Box wäre (verhält sich ähnlich wie ein ersetztes Element).

    Es ist äquivalent zu `inline flow-root`.

- `inline-table`
  - : Der Wert `inline-table` hat in HTML keine direkte Entsprechung. Es verhält sich wie ein HTML-{{HTMLElement("table")}}-Element, jedoch als Inline-Box anstelle einer Block-Level-Box. Im Inneren der Tabellen-Box befindet sich ein Block-Level-Kontext.

    Es ist äquivalent zu `inline table`.

- `inline-flex`
  - : Das Element verhält sich wie ein Inline-Element und legt seinen Inhalt gemäß dem Flexbox-Modell aus.

    Es ist äquivalent zu `inline flex`.

- `inline-grid`
  - : Das Element verhält sich wie ein Inline-Element und legt seinen Inhalt gemäß dem Grid-Modell aus.

    Es ist äquivalent zu `inline grid`.

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

In der neuen Syntax würde der Inline-Flex-Container mit zwei Werten erstellt werden, `inline` für den äußeren Anzeigetyp und `flex` für den inneren Anzeigetyp.

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
