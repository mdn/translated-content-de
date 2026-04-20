---
title: "`revert-layer` CSS-Schlüsselwort"
short-title: revert-layer
slug: Web/CSS/Reference/Values/revert-layer
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die dem Element in einer vorherigen Kaskadenschicht entspricht. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln für das Zielfeld in der aktuellen Kaskadenschicht angegeben wären.

Wenn es keine andere Kaskadenschicht gibt, zu der für die übereinstimmende CSS-Regel zurückgekehrt werden kann, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) zurückgesetzt, der aus der aktuellen Schicht abgeleitet wurde. Außerdem, wenn es keine übereinstimmende CSS-Regel in der aktuellen Schicht gibt, wird der Eigenschaftswert für das Element auf den Stil einer vorherigen {{Glossary("Style_origin", "Stilherkunft")}} zurückgesetzt.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer`-Schlüsselwort ermöglicht das Zurückgehen von Stilen zu denen, die in vorherigen Kaskadenschichten innerhalb der {{Glossary("Style_origin", "Autor-Herkunft")}} spezifiziert sind. Das {{cssxref("revert")}}-Schlüsselwort im Vergleich lässt Sie Stile, die in der Autor-Herkunft angewendet wurden, auf die in der Benutzer- oder Benutzer-Agent-Herkunft spezifizierten zurücksetzen.

Idealerweise soll das `revert-layer`-Schlüsselwort auf Eigenschaften innerhalb einer Kaskadenschicht angewendet werden. Allerdings, wenn es auf Eigenschaften außerhalb einer Kaskadenschicht angewendet wird, setzt es Eigenschaftswerte auf Werte zurück, die durch präsentationelle Hinweise gesetzt wurden (wie `width` und `height` Attribute oder das `<s>`-Element in HTML), und standardmäßig auf die durch das Stylesheet des Benutzer-Agents oder Benutzerstile etablierten Werte. Anders als das `revert`-Schlüsselwort, das präsentationelle Hinweise als Teil der Autor-Herkunft betrachtet und sie ebenfalls zurücksetzt, ignoriert das `revert-layer`-Schlüsselwort präsentationelle Hinweise außerhalb der Kaskadenschicht, sodass es sie nicht zurücksetzt.

## Beispiele

### Standardverhalten der Kaskadenschicht

Im folgenden Beispiel sind zwei Kaskadenschichten im CSS definiert, `base` und `special`. Standardmäßig überschreiben Regeln in der `special`-Schicht konkurrierende Regeln in der `base`-Schicht, da `special` nach `base` in der `@layer`-Deklaration aufgeführt ist.

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

Alle `<li>`-Elemente entsprechen der `item`-Regel in der `special`-Schicht und sind rot. Dies ist das Standardverhalten der Kaskadenschicht, bei dem Regeln in der `special`-Schicht Vorrang vor Regeln in der `base`-Schicht haben.

### Zurücksetzen auf Stil in vorheriger Kaskadenschicht

Betrachten wir, wie das `revert-layer`-Schlüsselwort das Standardverhalten der Kaskadenschicht ändert. In diesem Beispiel enthält die `special`-Schicht eine zusätzliche `feature`-Regel, die auf das erste `<li>`-Element abzielt. Die `color`-Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` gesetzt, setzt sich der `color`-Eigenschaftswert auf den Wert in der übereinstimmenden `feature`-Regel in der vorherigen Schicht `base` zurück, und so ist 'Item one' jetzt grün.

### Zurücksetzen auf Stil in vorheriger Herkunft

Dieses Beispiel zeigt das Verhalten des `revert-layer`-Schlüsselworts, wenn es keine Kaskadenschicht zum Zurücksetzen _und_ keine übereinstimmende CSS-Regel in der aktuellen Schicht gibt, um den Eigenschaftswert zu erben.

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

Der Stil für alle `<li>`-Elemente setzt sich auf die Standardeinstellungen in der Benutzer-Agent-Herkunft zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-rule")}}
- {{cssxref("unset")}}
- {{cssxref("all")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
