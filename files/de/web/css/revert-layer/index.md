---
title: revert-layer
slug: Web/CSS/revert-layer
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Kaskadenebene](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die das Element in einer vorherigen Kaskadenebene betrifft. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln auf das Zi-element in der aktuellen Kaskadenebene angewendet wurden.

Gibt es keine andere Kaskadenebene, zu der zurückgegangen werden kann, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) basierend auf der aktuellen Ebene zurückgesetzt. Wenn es zudem in der aktuellen Ebene keine passende CSS-Regel gibt, wird der Eigenschaftswert des Elements auf den Stil zurückgesetzt, der in einem vorherigen {{Glossary("Style_origin", "Stilursprung")}} definiert ist.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer` Schlüsselwort ermöglicht es Ihnen, Stile auf diejenigen zurückzusetzen, die in vorherigen Kaskadenebenen innerhalb des {{Glossary("Style_origin", "Autorenursprungs")}} angegeben sind. Im Vergleich dazu ermöglicht das {{cssxref("revert")}} Schlüsselwort, Stile im Autorenursprung auf diejenigen im Benutzerursprung oder Browser-Agenten-Ursprung zurückzusetzen.

Das `revert-layer` Schlüsselwort soll idealerweise auf Eigenschaften innerhalb einer Kaskadenebene angewendet werden. Wird es jedoch auf Eigenschaften außerhalb einer Kaskadenebene angewendet, setzt es Eigenschaftswerte auf jegliche Werte durch Präsentationshinweise zurück (wie `width` und `height` Attribute oder das `<s>` Element in HTML) und verwendet standardmäßig die Werte, die durch das Stylesheet des Benutzeragenten oder Benutzerstile festgelegt wurden. Im Gegensatz zum `revert` Schlüsselwort, das Präsentationshinweise als Teil des Autorenursprungs betrachtet und ebenfalls zurücksetzt, ignoriert das `revert-layer` Schlüsselwort Präsentationshinweise außerhalb der Kaskadenebene, sodass diese nicht zurückgesetzt werden.

## Beispiele

### Standardverhalten der Kaskadenebene

Im folgenden Beispiel werden zwei Kaskadenebenen in der CSS definiert, `base` und `special`. Standardmäßig überschreiben die Regeln in der `special` Ebene konkurrierende Regeln in der `base` Ebene, da `special` nach `base` in der `@layer` Deklaration aufgeführt ist.

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

Alle `<li>` Elemente entsprechen der `item` Regel in der `special` Ebene und sind rot. Dies ist das Standardverhalten der Kaskadenebene, in dem die Regeln in der `special` Ebene Vorrang vor den Regeln in der `base` Ebene haben.

### Rückkehr zum Stil in der vorherigen Kaskadenebene

Untersuchen wir, wie das `revert-layer` Schlüsselwort das Standardverhalten der Kaskadenebene ändert. Für dieses Beispiel enthält die `special` Ebene eine zusätzliche `feature` Regel, die das erste `<li>` Element anvisiert. Die `color` Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` gesetzt, wird der Wert der `color` Eigenschaft auf den Wert in der entsprechenden `feature` Regel in der vorherigen Ebene `base` zurückgesetzt, und daher ist 'Item one' jetzt grün.

### Rückkehr zum Stil im vorherigen Ursprung

Dieses Beispiel zeigt das Verhalten des `revert-layer` Schlüsselworts, wenn es keine Kaskadenebene gibt, zu der zurückgegangen werden kann _und_ keine passende CSS-Regel in der aktuellen Ebene vorhanden ist, um den Eigenschaftswert zu erben.

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

Der Stil für alle `<li>` Elemente wird auf die Standardwerte im Benutzer-Agenten-Ursprung zurückgesetzt.

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
