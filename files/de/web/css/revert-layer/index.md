---
title: revert-layer
slug: Web/CSS/revert-layer
l10n:
  sourceCommit: 3980b42d526087a41378f6b5e5e1dfc7e910b605
---

{{CSSRef}}

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/CSS_Types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die dem Element in einer vorherigen Kaskadenschicht entspricht. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird so neu berechnet, als ob keine Regeln für das Ziel-Element in der aktuellen Kaskadenschicht angegeben wären.

Wenn es keine andere Kaskadenschicht gibt, zu der für die entsprechende CSS-Regel zurückgegangen werden kann, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/computed_value) zurückgesetzt, der aus der aktuellen Schicht abgeleitet wird. Wenn es außerdem keine entsprechende CSS-Regel in der aktuellen Schicht gibt, wird der Eigenschaftswert für das Element auf den in einem vorherigen [Stil-Ursprung](/de/docs/Glossary/Style_origin) definierten Stil zurückgesetzt.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer` Schlüsselwort ermöglicht es Ihnen, Stile auf diejenigen zurückzusetzen, die in vorherigen Kaskadenschichten innerhalb des [Autorenursprungs](/de/docs/Glossary/Style_origin) angegeben sind. Das {{cssxref("revert")}} Schlüsselwort hingegen ermöglicht es, Stile, die im Autorenursprung angewendet wurden, auf diejenigen im Nutzerursprung oder Nutzeragentursprung zurückzusetzen.

Das `revert-layer` Schlüsselwort soll idealerweise auf Eigenschaften innerhalb einer Kaskadenschicht angewendet werden. Wird es jedoch auf Eigenschaften außerhalb einer Kaskadenschicht angewendet, setzt es Eigenschaftswerte auf irgendwelche Werte zurück, die durch präsentationale Hinweise (wie `width` und `height` Attribute oder das `<s>` Element in HTML) gesetzt werden, wobei die Standardwerte des Stylesheets des Benutzeragenten oder der Benutzerstile verwendet werden. Im Gegensatz zum `revert` Schlüsselwort, das präsentationale Hinweise als Teil des Autorenursprungs betrachtet und sie ebenfalls zurücksetzt, ignoriert das `revert-layer` Schlüsselwort präsentationale Hinweise außerhalb der Kaskadenschicht, sodass es diese nicht zurücksetzt.

## Beispiele

### Standardverhalten der Kaskadenschicht

Im folgenden Beispiel sind zwei Kaskadenschichten in der CSS definiert, `base` und `special`. Standardmäßig überschreiben Regeln in der `special` Schicht konkurrierende Regeln in der `base` Schicht, weil `special` in der `@layer` Deklarationsanweisung nach `base` aufgeführt ist.

#### HTML

```html
<p>This example contains a list.</p>

<ul>
  <li class="item feature">Item one</li>
  <li class="item">Item two</li>
  <li class="item">Item three</li>
</ul>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: red;
  }
}

@layer base {
  .item {
    color: blue;
  }
  .feature {
    color: green;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Default_cascade_layer_behavior')}}

Alle `<li>` Elemente entsprechen der `item` Regel in der `special` Schicht und sind rot. Dies ist das Standardverhalten der Kaskadenschicht, bei dem Regeln in der `special` Schicht Vorrang vor Regeln in der `base` Schicht haben.

### Zurücksetzen auf Stil in vorheriger Kaskadenschicht

Untersuchen wir, wie das `revert-layer` Schlüsselwort das Standardverhalten der Kaskadenschicht ändert. In diesem Beispiel enthält die `special` Schicht eine zusätzliche `feature` Regel, die auf das erste `<li>` Element abzielt. Die `color` Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

#### HTML

```html
<p>This example contains a list.</p>

<ul>
  <li class="item feature">Item one</li>
  <li class="item">Item two</li>
  <li class="item">Item three</li>
</ul>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: red;
  }
  .feature {
    color: revert-layer;
  }
}

@layer base {
  .item {
    color: blue;
  }
  .feature {
    color: green;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Revert_to_style_in_previous_cascade_layer')}}

Mit `color` auf `revert-layer` gesetzt, geht der `color` Eigenschaftswert auf den Wert in der entsprechenden `feature` Regel in der vorherigen Schicht `base` zurück, und somit ist 'Item one' jetzt grün.

### Zurücksetzen auf Stil in vorherigem Ursprung

Dieses Beispiel zeigt das Verhalten des `revert-layer` Schlüsselworts, wenn es keine Kaskadenschicht gibt, auf die zurückgegangen werden kann, _und_ es keine entsprechende CSS-Regel in der aktuellen Schicht gibt, um den Eigenschaftswert zu erben.

#### HTML

```html
<p>This example contains a list.</p>

<ul>
  <li class="item feature">Item one</li>
  <li class="item">Item two</li>
  <li class="item">Item three</li>
</ul>
```

#### CSS

```css
@layer base {
  .item {
    color: revert-layer;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Revert_to_style_in_previous_origin')}}

Der Stil für alle `<li>` Elemente wird auf die Standardwerte im Nutzeragentursprung zurückgesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("unset")}}
- {{cssxref("all")}}
- [CSS Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
