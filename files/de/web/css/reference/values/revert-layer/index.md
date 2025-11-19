---
title: revert-layer
slug: Web/CSS/Reference/Values/revert-layer
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) auf den Wert der Eigenschaft in einer vorherigen Kaskadenschicht zurück. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln für das Ziel-Element in der aktuellen Kaskadenschicht angegeben wurden.

Falls es keine andere Kaskadenschicht gibt, auf die für die übereinstimmende CSS-Regel zurückgesetzt werden kann, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) aus der aktuellen Schicht zurückgesetzt. Wenn es außerdem keine übereinstimmende CSS-Regel in der aktuellen Schicht gibt, wird der Eigenschaftswert für das Element auf den Stil eines vorherigen {{Glossary("Style_origin", "Stil-Ursprungs")}} zurückgesetzt.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzeigenschaft {{cssxref("all")}}.

## revert-layer vs. revert

Das `revert-layer`-Schlüsselwort ermöglicht es Ihnen, Stile auf die in vorherigen Kaskadenschichten innerhalb des {{Glossary("Style_origin", "Autor-Ursprungs")}} spezifizierten Werte zurückzusetzen. Im Vergleich dazu ermöglicht das {{cssxref("revert")}}-Schlüsselwort das Zurücksetzen von Stilen, die im Autor-Ursprung angewendet werden, auf die im Benutzer-Ursprung oder Benutzeragenten-Ursprung spezifizierten Werte.

Das `revert-layer`-Schlüsselwort ist idealerweise gedacht, um auf Eigenschaften innerhalb einer Kaskadenschicht angewendet zu werden. Wird es jedoch auf Eigenschaften außerhalb einer Kaskadenschicht angewendet, werden Eigenschaftswerte auf alle Werte zurückgesetzt, die durch Präsentationshinweise (wie `width`- und `height`-Attribute oder das `<s>`-Element in HTML) festgelegt wurden, und standardmäßig auf die vom Benutzeragenten-Stilblatt oder Benutzerstil festgelegten Werte. Im Gegensatz zum `revert`-Schlüsselwort, das Präsentationshinweise als Teil des Autor-Ursprungs betrachtet und ebenfalls zurücksetzt, ignoriert das `revert-layer`-Schlüsselwort Präsentationshinweise außerhalb der Kaskadenschicht und setzt diese daher nicht zurück.

## Beispiele

### Standardverhalten der Kaskadenschicht

Im folgenden Beispiel sind in der CSS zwei Kaskadenschichten definiert, `base` und `special`. Standardmäßig überschreiben Regeln in der `special`-Schicht konkurrierende Regeln in der `base`-Schicht, da `special` nach `base` in der `@layer`-Deklarationsanweisung aufgeführt ist.

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

Sehen wir uns an, wie das `revert-layer`-Schlüsselwort das Standardverhalten der Kaskadenschicht ändert. Für dieses Beispiel enthält die `special`-Schicht eine zusätzliche `feature`-Regel, die das erste `<li>`-Element anvisiert. Die `color`-Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` gesetzt, wird der `color`-Eigenschaftswert auf den Wert in der übereinstimmenden `feature`-Regel in der vorherigen Schicht `base` zurückgesetzt, und so ist 'Item one' nun grün.

### Zurücksetzen auf Stil in vorherigem Ursprung

Dieses Beispiel zeigt das Verhalten des `revert-layer`-Schlüsselwortes, wenn es keine Kaskadenschicht gibt, auf die zurückgesetzt werden kann _und_ es keine übereinstimmende CSS-Regel in der aktuellen Schicht gibt, um den Eigenschaftswert zu übernehmen.

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
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
