---
title: revert-layer
slug: Web/CSS/revert-layer
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Kaskadenebene](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die mit dem Element in einer vorherigen Kaskadenebene übereinstimmt. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln auf das Ziel-Element in der aktuellen Kaskadenebene festgelegt wären.

Falls keine andere Kaskadenebene vorhanden ist, auf die für die übereinstimmende CSS-Regel zurückgesetzt werden kann, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) der aktuellen Ebene zurückgesetzt. Des Weiteren, wenn es in der aktuellen Ebene keine übereinstimmende CSS-Regel gibt, wird der Eigenschaftswert des Elements auf den Stil zurückgesetzt, der in einer früheren {{Glossary("Style_origin", "Stilquelle")}} definiert wurde.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer` Schlüsselwort ermöglicht es Ihnen, Stile auf diejenigen zurückzusetzen, die in vorherigen Kaskadenebenen innerhalb der {{Glossary("Style_origin", "Autorquelle")}} spezifiziert wurden. Das {{cssxref("revert")}} Schlüsselwort dagegen ermöglicht es Ihnen, Stile auf diejenigen in der Benutzer- oder Benutzeragentenquelle zurückzusetzen.

Das `revert-layer` Schlüsselwort soll idealerweise auf Eigenschaften innerhalb einer Kaskadenebene angewendet werden. Falls es jedoch auf Eigenschaften außerhalb einer Kaskadenebene angewendet wird, setzt es Eigenschaftswerte auf Werte zurück, die durch präsentationale Hinweise (wie `width` und `height` Attribute oder das `<s>` Element in HTML) gesetzt sind, und standardmäßig auf die Werte, die durch das Stylesheet des Benutzeragenten oder Benutzerstile etabliert wurden. Im Gegensatz zum `revert` Schlüsselwort, das präsentationale Hinweise als Teil der Autorquelle betrachtet und ebenfalls zurücksetzt, ignoriert das `revert-layer` Schlüsselwort präsentationale Hinweise außerhalb der Kaskadenebene, sodass es diese nicht zurücksetzt.

## Beispiele

### Standardverhalten der Kaskadenebene

Im untenstehenden Beispiel sind zwei Kaskadenebenen in der CSS definiert, `base` und `special`. Standardmäßig überschreiben Regeln in der `special` Ebene konkurrierende Regeln in der `base` Ebene, da `special` nach `base` in der `@layer` Deklarationsanweisung aufgeführt ist.

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

Alle `<li>` Elemente entsprechen der `item` Regel in der `special` Ebene und sind rot. Dies ist das Standardverhalten der Kaskadenschicht, bei dem Regeln in der `special` Ebene Vorrang vor Regeln in der `base` Ebene haben.

### Zurücksetzen auf Stil in vorheriger Kaskadenebene

Untersuchen wir, wie das `revert-layer` Schlüsselwort das Standardverhalten der Kaskadenschicht ändert. In diesem Beispiel enthält die `special` Ebene eine zusätzliche `feature` Regel, die auf das erste `<li>` Element abzielt. Die `color` Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` eingestellt, wird der `color` Eigenschaftswert auf den Wert in der übereinstimmenden `feature` Regel in der vorherigen Ebene `base` zurückgesetzt, und daher ist 'Item one' nun grün.

### Zurücksetzen auf Stil in vorheriger Quelle

Dieses Beispiel zeigt das Verhalten des `revert-layer` Schlüsselworts, wenn es keine Kaskadenschicht zum Zurücksetzen gibt _und_ es keine übereinstimmende CSS-Regel in der aktuellen Ebene gibt, um den Eigenschaftswert zu erben.

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

Der Stil für alle `<li>` Elemente wird auf die Vorgaben der Benutzeragentenquelle zurückgesetzt.

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
