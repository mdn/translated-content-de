---
title: revert-layer
slug: Web/CSS/revert-layer
l10n:
  sourceCommit: 3980b42d526087a41378f6b5e5e1dfc7e910b605
---

{{CSSRef}}

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/CSS_Types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert zurück, der in einer vorherigen Kaskadenschicht für die Eigenschaft in einer CSS-Regel vorhanden war, die mit dem Element übereinstimmt. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln für das Ziel-Element in der aktuellen Kaskadenschicht angegeben wären.

Wenn es keine andere Kaskadenschicht gibt, auf die für die übereinstimmende CSS-Regel zurückgesetzt werden kann, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/computed_value) zurückgesetzt, der von der aktuellen Schicht abgeleitet ist. Wenn es außerdem keine übereinstimmende CSS-Regel in der aktuellen Schicht gibt, wird der Eigenschaftswert für das Element auf den Stil zurückgesetzt, der in einem vorherigen [Stilursprung](/de/docs/Glossary/Style_origin) definiert ist.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschlüsseigenschaft {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer` Schlüsselwort ermöglicht es, Stile auf diejenigen zurückzusetzen, die in vorherigen Kaskadenschichten innerhalb des [Autorenursprungs](/de/docs/Glossary/Style_origin) festgelegt wurden. Im Vergleich dazu ermöglicht das {{cssxref("revert")}} Schlüsselwort, Stile, die im Autorenursprung angewendet wurden, auf diejenigen im Benutzerursprung oder Benutzer-Agentursprung zurückzusetzen.

Das `revert-layer` Schlüsselwort ist idealerweise dafür gedacht, auf Eigenschaften innerhalb einer Kaskadenschicht angewendet zu werden. Wenn es jedoch auf Eigenschaften außerhalb einer Kaskadenschicht angewendet wird, setzt es Eigenschaftswerte auf alle Werte zurück, die durch Präsentationshinweise (wie `width` und `height` Attribute oder das `<s>` Element in HTML) festgelegt wurden, wobei auf die von den Stylesheets des Benutzers oder des Benutzeragenten festgelegten Werte zurückgegriffen wird. Anders als das `revert` Schlüsselwort, das Präsentationshinweise als Teil des Autorenursprungs betrachtet und sie auch zurücksetzt, ignoriert das `revert-layer` Schlüsselwort Präsentationshinweise außerhalb der Kaskadenschicht und setzt sie daher nicht zurück.

## Beispiele

### Standardverhalten der Kaskadenschicht

Im unten stehenden Beispiel sind zwei Kaskadenschichten im CSS definiert: `base` und `special`. Standardmäßig überschreiben die Regeln in der `special` Schicht konkurrierende Regeln in der `base` Schicht, da `special` in der `@layer` Deklarationsanweisung nach `base` aufgeführt ist.

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

Alle `<li>` Elemente entsprechen der `item` Regel in der `special` Schicht und sind rot. Dies ist das Standardverhalten der Kaskadenschicht, bei dem Regeln in der `special` Schicht Priorität über Regeln in der `base` Schicht haben.

### Zurücksetzen auf Stil in vorheriger Kaskadenschicht

Untersuchen wir, wie das `revert-layer` Schlüsselwort das Standardverhalten der Kaskadenschicht ändert. In diesem Beispiel enthält die `special` Schicht eine zusätzliche `feature` Regel, die das erste `<li>` Element anvisiert. Die `color` Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` gesetzt, wird der `color` Eigenschaftswert auf den Wert in der übereinstimmenden `feature` Regel in der vorherigen Schicht `base` zurückgesetzt, und daher ist 'Item one' nun grün.

### Zurücksetzen auf Stil in vorherigem Ursprung

Dieses Beispiel zeigt das Verhalten des `revert-layer` Schlüsselworts, wenn es keine Kaskadenschicht gibt, auf die zurückgesetzt werden kann _und_ keine passende CSS-Regel in der aktuellen Schicht vorhanden ist, um den Eigenschaftswert zu erben.

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

Der Stil für alle `<li>` Elemente wird auf die Standardwerte im Benutzer-Agentursprung zurückgesetzt.

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
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
