---
title: revert-layer
slug: Web/CSS/Reference/Values/revert-layer
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) auf den Wert zurück, der in einer vorherigen Kaskadenschicht im CSS für das Element festgelegt wurde. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird so neu berechnet, als wären keine Regeln auf das Zielelement in der aktuellen Kaskadenschicht angewendet worden.

Falls es keine andere Kaskadenschicht gibt, auf die zurückgegriffen werden kann, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) aus der aktuellen Schicht zurückgesetzt. Wenn es in der aktuellen Schicht keine passende CSS-Regel gibt, wird der Eigenschaftswert des Elements auf den Stil zurückgesetzt, der in einem vorherigen {{Glossary("Style_origin", "Stilursprung")}} definiert wurde.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer` Schlüsselwort ermöglicht das Zurücksetzen von Stilen auf die in vorherigen Kaskadenschichten innerhalb des {{Glossary("Style_origin", "Autor-Ursprungs")}} angegebenen. Das {{cssxref("revert")}} Schlüsselwort hingegen erlaubt das Zurücksetzen von Stilen, die im Autor-Ursprung angewendet wurden, auf die im Benutzer- oder Benutzeragent-Ursprung angegebenen.

Das `revert-layer` Schlüsselwort sollte idealerweise auf Eigenschaften innerhalb einer Kaskadenschicht angewendet werden. Wenn es jedoch auf Eigenschaften außerhalb einer Kaskadenschicht angewendet wird, setzt es Eigenschaftswerte auf Werte zurück, die durch Präsentationshinweise gesetzt wurden (wie `width` und `height` Attribute oder das `<s>` Element in HTML) und standardmäßig auf die Werte, die durch das Stylesheet des Benutzeragents oder die Benutzerstile festgelegt wurden. Im Gegensatz zum `revert` Schlüsselwort, das Präsentationshinweise als Teil des Autor-Ursprungs betrachtet und diese ebenfalls zurücksetzt, ignoriert `revert-layer` Präsentationshinweise außerhalb der Kaskadenschicht und setzt sie daher nicht zurück.

## Beispiele

### Standardverhalten der Kaskadenschicht

Im folgenden Beispiel sind zwei Kaskadenschichten im CSS definiert, `base` und `special`. Standardmäßig überschreiben Regeln in der `special` Schicht konkurrierende Regeln in der `base` Schicht, da `special` in der `@layer` Deklarationsanweisung nach `base` aufgelistet ist.

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

Alle `<li>` Elemente stimmen mit der `item` Regel in der `special` Schicht überein und sind rot. Dies ist das Standardverhalten der Kaskadenschicht, bei dem Regeln in der `special` Schicht Vorrang vor Regeln in der `base` Schicht haben.

### Zurück zum Stil in der vorherigen Kaskadenschicht

Untersuchen wir, wie das `revert-layer` Schlüsselwort das Standardverhalten der Kaskadenschicht ändert. In diesem Beispiel enthält die `special` Schicht eine zusätzliche `feature` Regel, die das erste `<li>` Element anspricht. Die `color` Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` gesetzt, wird der `color` Eigenschaftswert auf den Wert in der passenden `feature` Regel in der vorherigen Schicht `base` zurückgesetzt, und daher ist "Item one" jetzt grün.

### Zurück zum Stil im vorherigen Ursprung

Dieses Beispiel zeigt das Verhalten des `revert-layer` Schlüsselworts, wenn es keine Kaskadenschicht gibt, zu der zurückgegangen werden kann, _und_ es keine übereinstimmende CSS-Regel in der aktuellen Schicht gibt, um den Eigenschaftswert zu erben.

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

Der Stil für alle `<li>` Elemente wird auf die Standardwerte im Benutzeragent-Ursprung zurückgesetzt.

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
