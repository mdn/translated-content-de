---
title: revert-layer
slug: Web/CSS/revert-layer
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die auf das Element in einer vorhergehenden Kaskadenschicht zutrifft. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln für das Ziel-Element in der aktuellen Kaskadenschicht definiert wären.

Wenn es keine andere Kaskadenschicht gibt, auf die zurückgesetzt werden kann, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) basierend auf der aktuellen Schicht zurückgesetzt. Darüber hinaus, wenn es keine passende CSS-Regel in der aktuellen Schicht gibt, wird der Eigenschaftswert des Elements auf den Stil zurückgesetzt, der in einer vorhergehenden {{Glossary("Style_origin", "Stilherkunft")}} definiert ist.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibeigenschaft {{cssxref("all")}}.

## Revert-layer vs. revert

Das Schlüsselwort `revert-layer` erlaubt es, Stile auf diejenige zurückzusetzen, die in vorherigen Kaskadenschichten innerhalb der {{Glossary("Style_origin", "Autorherkunft")}} definiert sind. Das {{cssxref("revert")}}-Schlüsselwort hingegen setzt Stile zurück, die in der Autorherkunft angewandt wurden, auf diejenigen, die in der Benutzerherkunft oder der Benutzeragent-Herkunft definiert sind.

Das Schlüsselwort `revert-layer` ist idealerweise dazu gedacht, auf Eigenschaften innerhalb einer Kaskadenschicht angewendet zu werden. Wenn es jedoch auf Eigenschaften außerhalb einer Kaskadenschicht angewendet wird, setzt es Eigenschaftswerte auf jegliche durch Präsentationshinweise gesetzte Werte zurück (wie `width` und `height` Attribute oder das `<s>` Element in HTML) und standardmäßig auf die Werte, die vom Benutzeragent-Stil definiert wurden. Im Gegensatz zum `revert`-Schlüsselwort, das Präsentationshinweise als Teil der Autorherkunft betrachtet und sie auch zurücksetzt, ignoriert das Schlüsselwort `revert-layer` Präsentationshinweise außerhalb der Kaskadenschicht und setzt diese daher nicht zurück.

## Beispiele

### Standardverhalten der Kaskadenschicht

Im folgenden Beispiel werden zwei Kaskadenschichten in der CSS definiert: `base` und `special`. Standardmäßig überschreiben Regeln in der `special`-Schicht konkurrierende Regeln in der `base`-Schicht, da `special` nach `base` in der `@layer`-Deklarationsanweisung aufgeführt ist.

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

Alle `<li>`-Elemente entsprechen der Regel `item` in der `special`-Schicht und sind rot. Dies ist das Standardverhalten der Kaskadenschicht, bei der Regeln in der `special`-Schicht Vorrang vor Regeln in der `base`-Schicht haben.

### Zurücksetzen auf den Stil in einer vorherigen Kaskadenschicht

Untersuchen wir, wie das Schlüsselwort `revert-layer` das Standardverhalten der Kaskadenschicht verändert. In diesem Beispiel enthält die `special`-Schicht eine zusätzliche `feature`-Regel, die auf das erste `<li>`-Element abzielt. Die Eigenschaft `color` in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` gesetzt, wird der Wert der `color`-Eigenschaft auf den Wert in der entsprechenden Regel `feature` in der vorherigen Schicht `base` zurückgesetzt, und daher ist "Item one" jetzt grün.

### Zurücksetzen auf den Stil in einer vorherigen Herkunft

Dieses Beispiel zeigt das Verhalten des Schlüsselworts `revert-layer`, wenn es keine Kaskadenschicht gibt, auf die zurückgesetzt werden kann, _und_ wenn es keine passende CSS-Regel in der aktuellen Schicht gibt, um den Eigenschaftswert zu übernehmen.

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

Der Stil für alle `<li>`-Elemente wird auf die Standardwerte in der Benutzeragent-Herkunft zurückgesetzt.

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
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
