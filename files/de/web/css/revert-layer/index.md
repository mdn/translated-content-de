---
title: revert-layer
slug: Web/CSS/revert-layer
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/CSS_Types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die das Element in einer vorherigen Kaskadenschicht matcht. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob in der aktuellen Kaskadenschicht keine Regeln auf das Ziel-Element angewendet wurden.

Falls es keine andere Kaskadenschicht zum Zurücksetzen für die übereinstimmende CSS-Regel gibt, fällt der Eigenschaftenwert auf den [berechneten Wert](/de/docs/Web/CSS/computed_value) ab, der von der aktuellen Schicht abgeleitet wird. Wenn es zudem in der aktuellen Schicht keine übereinstimmende CSS-Regel gibt, fällt der Eigenschaftenwert für das Element auf den Stil zurück, der in einem vorherigen {{Glossary("Style_origin", "Stil-Ursprung")}} definiert ist.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschlusseigenschaft {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer` Schlüsselwort erlaubt es Ihnen, Stile auf diejenigen in früheren Kaskadenschichten innerhalb des {{Glossary("Style_origin", "Autoren-Ursprungs")}} zurückzusetzen. Im Vergleich dazu ermöglicht das {{cssxref("revert")}} Schlüsselwort das Zurücksetzen von Stilen, die im Autoren-Ursprung auf diejenigen angewendet wurden, die im Benutzer-Ursprung oder im Benutzeragenten-Ursprung spezifiziert sind.

Das `revert-layer` Schlüsselwort ist idealerweise dafür gedacht, auf Eigenschaften innerhalb einer Kaskadenschicht angewendet zu werden. Wenn es jedoch auf Eigenschaften außerhalb einer Kaskadenschicht angewendet wird, setzt es Eigenschaftenwerte auf jegliche von Präsentationshinweisen gesetzten Werte (wie `width` und `height` Attribute oder das `<s>` Element in HTML) zurück und standardmäßig auf die vom Benutzeragenten-Stylesheet oder den Benutzerstilen festgelegten Werte. Im Gegensatz zum `revert` Schlüsselwort, das Präsentationshinweise als Teil des Autoren-Ursprungs betrachtet und sie ebenfalls zurücksetzt, ignoriert das `revert-layer` Schlüsselwort Präsentationshinweise außerhalb der Kaskadenschicht, sodass es sie nicht zurücksetzt.

## Beispiele

### Standardverhalten der Kaskadenschicht

Im unten stehenden Beispiel sind zwei Kaskadenschichten in der CSS definiert, `base` und `special`. Standardmäßig überschreiben Regeln in der `special` Schicht konkurrierende Regeln in der `base` Schicht, da `special` in der `@layer` Deklaration nach `base` aufgeführt ist.

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

Alle `<li>` Elemente entsprechen der Regel `item` in der `special` Schicht und sind rot. Dies ist das Standardverhalten der Kaskadenschicht, bei dem Regeln in der `special` Schicht Vorrang vor Regeln in der `base` Schicht haben.

### Zurücksetzen auf Stil in vorheriger Kaskadenschicht

Lassen Sie uns untersuchen, wie das `revert-layer` Schlüsselwort das Standardverhalten der Kaskadenschicht ändert. In diesem Beispiel enthält die `special` Schicht eine zusätzliche `feature` Regel, die das erste `<li>` Element anvisiert. Die `color` Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` gesetzt, wird der Wert der `color` Eigenschaft auf den Wert in der übereinstimmenden `feature` Regel in der vorherigen Schicht `base` zurückgesetzt, und so ist 'Item one' nun grün.

### Zurücksetzen auf Stil in vorheriger Quelle

Dieses Beispiel zeigt das Verhalten des `revert-layer` Schlüsselwortes, wenn es keine Kaskadenschicht für das Zurücksetzen gibt _und_ es keine übereinstimmende CSS-Regel in der aktuellen Schicht gibt, um den Eigenschaftswert zu erben.

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

Der Stil für alle `<li>` Elemente wird auf die Standardwerte im Benutzeragenten-Ursprung zurückgesetzt.

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
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
