---
title: revert-layer
slug: Web/CSS/Reference/Values/revert-layer
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) setzt den Wert einer Eigenschaft in einer [Cascade-Layer](/de/docs/Web/CSS/Reference/At-rules/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die dem Element in einer vorherigen Cascade-Layer entspricht. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird wie folgt neu berechnet, als ob keine Regeln für das Ziel-Element in der aktuellen Cascade-Layer angegeben wären.

Wenn es keine andere Cascade-Layer gibt, zu der für die entsprechende CSS-Regel zurückgekehrt werden kann, rollt der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) zurück, der aus der aktuellen Schicht abgeleitet wird. Darüber hinaus, wenn es keine übereinstimmende CSS-Regel in der aktuellen Schicht gibt, rollt der Eigenschaftswert für das Element auf den Stil zurück, der in einem vorherigen {{Glossary("Style_origin", "Style-Ursprung")}} definiert wurde.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer` Schlüsselwort erlaubt es Ihnen, Stile auf die in vorherigen Cascade-Layers innerhalb des {{Glossary("Style_origin", "Autor-Ursprungs")}} spezifizierten zurückzusetzen. Das {{cssxref("revert")}} Schlüsselwort hingegen erlaubt es Ihnen, Stile, die im Autor-Ursprung angewendet wurden, auf die im Benutzer- oder Benutzer-Agent-Ursprung spezifizierten zurückzusetzen.

Das `revert-layer` Schlüsselwort ist idealerweise gedacht, um auf Eigenschaften innerhalb einer Cascade-Layer angewendet zu werden. Wenn es jedoch auf Eigenschaften außerhalb einer Cascade-Layer angewendet wird, setzt es Eigenschaftswerte auf die durch präsentationelle Hinweise (wie `width` und `height` Attribute oder das `<s>` Element in HTML) festgelegten Werte zurück, welche standardmäßig durch das Stylesheet des Benutzer-Agenten oder Benutzerstile festgelegt werden. Im Gegensatz zum `revert` Schlüsselwort, das präsentationelle Hinweise als Teil des Autor-Ursprungs betrachtet und sie ebenfalls zurücksetzt, ignoriert das `revert-layer` Schlüsselwort präsentationelle Hinweise außerhalb der Cascade-Layer und setzt sie daher nicht zurück.

## Beispiele

### Standardverhalten der Cascade-Layer

Im folgenden Beispiel sind zwei Cascade-Layers im CSS definiert, `base` und `special`. Standardmäßig überschreiben die Regeln in der `special` Layer konkurrierende Regeln in der `base` Layer, da `special` in der `@layer` Deklaration nach `base` aufgeführt ist.

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

Alle `<li>` Elemente entsprechen der `item` Regel in der `special` Layer und sind rot. Dies ist das Standardverhalten der Cascade-Layer, bei dem Regeln in der `special` Layer Vorrang vor Regeln in der `base` Layer haben.

### Rückkehr zum Stil in der vorherigen Cascade-Layer

Lassen Sie uns untersuchen, wie das `revert-layer` Schlüsselwort das Standardverhalten der Cascade-Layer ändert. In diesem Beispiel enthält die `special` Layer eine zusätzliche `feature` Regel, die auf das erste `<li>` Element abzielt. Die `color` Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

Mit `color` auf `revert-layer` gesetzt, rollt der `color` Eigenschaftswert auf den Wert in der entsprechenden `feature` Regel in der vorherigen Layer `base` zurück, und deshalb ist 'Item one' jetzt grün.

### Rückkehr zum Stil im vorherigen Ursprung

Dieses Beispiel zeigt das Verhalten des `revert-layer` Schlüsselworts, wenn es keine Cascade-Layer gibt, zu der zurückgebracht werden kann, _und_ es keine übereinstimmende CSS-Regel in der aktuellen Layer zur Vererbung des Eigenschaftswerts gibt.

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

Der Stil für alle `<li>` Elemente wird auf die Standardwerte im Benutzer-Agent Ursprung zurückgesetzt.

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
- [Modul: CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
