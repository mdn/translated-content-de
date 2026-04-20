---
title: "`revert-layer` CSS-Schlüsselwort"
short-title: revert-layer
slug: Web/CSS/Reference/Values/revert-layer
l10n:
  sourceCommit: aaedffba9f47d6dce7967a4191963378026d9406
---

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) auf den Wert der Eigenschaft in einer vorherigen Kaskadenschicht zurück. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln für das Ziel-Element in der aktuellen Kaskadenschicht spezifiziert worden wären.

Falls es keine andere Kaskadenschicht gibt, auf die bei der passenden CSS-Regel zurückgesetzt werden kann, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) zurückgesetzt, der von der aktuellen Schicht abgeleitet wird. Weiterhin, falls es keine passende CSS-Regel in der aktuellen Schicht gibt, wird der Eigenschaftswert für das Element auf den Stil zurückgesetzt, der in einem vorherigen {{Glossary("Style_origin", "Stil-Ursprung")}} definiert wurde.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschrift-Eigenschaft {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer` Schlüsselwort ermöglicht es, Stile auf die in vorherigen Kaskadenschichten innerhalb des {{Glossary("Style_origin", "Autor-Ursprungs")}} spezifizierten zurückzusetzen. Das {{cssxref("revert")}} Schlüsselwort hingegen ermöglicht es, Stile im Autor-Ursprung auf die im Benutzer-Ursprung oder Benutzer-Agent-Ursprung spezifizierten zurückzusetzen.

Das `revert-layer` Schlüsselwort ist idealerweise dafür gedacht, auf Eigenschaften innerhalb einer Kaskadenschicht angewendet zu werden. Sollte es jedoch auf Eigenschaften außerhalb einer Kaskadenschicht angewendet werden, setzt es Eigenschaftswerte auf Werte zurück, die durch Präsentationshinweise gesetzt wurden (wie beispielsweise `width` und `height` Attribute oder das `<s>`-Element in HTML), und geht auf die Werte zurück, die durch das Stylesheet des Benutzer-Agents oder Benutzers festgelegt wurden. Im Gegensatz zum `revert` Schlüsselwort, das Präsentationshinweise als Teil des Autor-Ursprungs betrachtet und sie ebenfalls zurücksetzt, ignoriert das `revert-layer` Schlüsselwort Präsentationshinweise außerhalb der Kaskadenschicht, sodass es diese nicht zurücksetzt.

## Beispiele

### Standardverhalten der Kaskadenschicht

Im folgenden Beispiel werden zwei Kaskadenschichten im CSS definiert, `base` und `special`. Standardmäßig überschreiben Regeln in der `special` Schicht konkurrierende Regeln in der `base` Schicht, da `special` nach `base` in der `@layer` Deklarationsanweisung aufgeführt ist.

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

Betrachten wir, wie das `revert-layer` Schlüsselwort das Standardverhalten der Kaskadenschicht ändert. In diesem Beispiel enthält die `special` Schicht eine zusätzliche `feature` Regel, die auf das erste `<li>` Element abzielt. Die `color` Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` gesetzt, wird der `color` Eigenschaftswert auf den Wert in der passenden `feature` Regel in der vorherigen Schicht `base` zurückgesetzt, und daher ist 'Item one' nun grün.

### Zurücksetzen auf Stil in vorherigem Ursprung

Dieses Beispiel zeigt das Verhalten des `revert-layer` Schlüsselworts, wenn keine Kaskadenschicht vorhanden ist, auf die zurückgesetzt werden kann, _und_ es keine passende CSS-Regel in der aktuellen Schicht gibt, um den Eigenschaftswert zu übernehmen.

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

Der Stil für alle `<li>` Elemente wird auf die Standardwerte im Benutzer-Agent-Ursprung zurückgesetzt.

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
- [CSS Kaskierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
