---
title: revert-layer
slug: Web/CSS/revert-layer
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types#css-wide_keywords) setzt den Wert einer Eigenschaft in einem [Cascade-Layer](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die das Element in einem vorherigen Cascade-Layer trifft. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln auf das Zielelement im aktuellen Cascade-Layer angewendet wurden.

Wenn es keinen anderen Cascade-Layer gibt, zu dem die passende CSS-Regel zurückgesetzt werden kann, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) aus dem aktuellen Layer zurückgesetzt. Darüber hinaus, wenn es keine passende CSS-Regel im aktuellen Layer gibt, fällt der Eigenschaftswert des Elements auf den Stil zurück, der in einem vorherigen {{Glossary("Style_origin", "Stil-Ursprung")}} definiert ist.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer` Schlüsselwort ermöglicht es Ihnen, Stile auf diejenigen zurückzusetzen, die in vorherigen Cascade-Layers innerhalb des {{Glossary("Style_origin", "Autor-Ursprungs")}} angegeben sind. Das {{cssxref("revert")}} Schlüsselwort hingegen ermöglicht es Ihnen, Stile, die im Autor-Ursprung angewendet wurden, auf diejenigen zurückzusetzen, die im Benutzer-Ursprung oder Benutzeragent-Ursprung angegeben sind.

Das `revert-layer` Schlüsselwort ist idealerweise dazu gedacht, auf Eigenschaften innerhalb eines Cascade-Layers angewendet zu werden. Wird es jedoch auf Eigenschaften außerhalb eines Cascade-Layers angewendet, setzt es Eigenschaftswerte auf alle Werte zurück, die durch Präsentationshinweise (wie `width` und `height` Attribute oder das `<s>` Element in HTML) festgelegt wurden, wobei die Werte, die vom Stylesheet des Benutzeragents oder Benutzerstilen festgelegt wurden, standardmäßig gelten. Im Gegensatz zum `revert` Schlüsselwort, das Präsentationshinweise als Teil des Autor-Ursprungs betrachtet und ebenfalls zurücksetzt, ignoriert das `revert-layer` Schlüsselwort Präsentationshinweise außerhalb des Cascade-Layers und setzt sie nicht zurück.

## Beispiele

### Standardverhalten von Cascade-Layern

Im folgenden Beispiel sind zwei Cascade-Layers in der CSS definiert, `base` und `special`. Standardmäßig überschreiben Regeln im `special`-Layer konkurrierende Regeln im `base`-Layer, da `special` nach `base` in der `@layer` Deklaration aufgelistet ist.

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

Alle `<li>`-Elemente stimmen mit der `item`-Regel im `special`-Layer überein und sind rot. Dies ist das Standardverhalten von Cascade-Layern, bei dem Regeln im `special`-Layer Vorrang vor Regeln im `base`-Layer haben.

### Zurücksetzen auf Stil im vorherigen Cascade-Layer

Untersuchen wir, wie das `revert-layer` Schlüsselwort das Standardverhalten des Cascade-Layers ändert. In diesem Beispiel enthält der `special`-Layer eine zusätzliche `feature`-Regel, die auf das erste `<li>`-Element abzielt. Die `color`-Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` gesetzt, wird der `color`-Eigenschaftswert auf den Wert in der passenden `feature`-Regel im vorherigen Layer `base` zurückgesetzt, und daher ist 'Item one' jetzt grün.

### Zurücksetzen auf Stil im vorherigen Ursprung

Dieses Beispiel zeigt das Verhalten des `revert-layer` Schlüsselworts, wenn es keinen Cascade-Layer zum Zurücksetzen gibt _und_ es keine passende CSS-Regel im aktuellen Layer gibt, um den Eigenschaftswert zu erben.

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

Der Stil für alle `<li>`-Elemente wird auf die Standardwerte im Benutzeragenten-Ursprung zurückgesetzt.

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
- [CSS Cascading und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
