---
title: revert-layer
slug: Web/CSS/revert-layer
l10n:
  sourceCommit: 3980b42d526087a41378f6b5e5e1dfc7e910b605
---

{{CSSRef}}

Das **`revert-layer`** [CSS-weit Schlüsselwort](/de/docs/Web/CSS/CSS_Types#css-wide_keywords) setzt den Wert einer Eigenschaft in einem [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die auf das Element in einer vorherigen Kaskadenschicht zutrifft. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln für das Zielelement in der aktuellen Kaskadenschicht festgelegt wären.

Gibt es keine andere Kaskadenschicht zum Zurücksetzen für die entsprechende CSS-Regel, wird der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/computed_value) zurückgesetzt, der aus der aktuellen Schicht abgeleitet wird. Wenn außerdem keine entsprechende CSS-Regel in der aktuellen Schicht vorhanden ist, wird der Eigenschaftswert für das Element auf den Stil zurückgesetzt, der in einem vorherigen [Stilursprung](/de/docs/Glossary/Style_origin) definiert ist.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzformeigenschaft {{cssxref("all")}}.

## Revert-layer vs. revert

Das Schlüsselwort `revert-layer` ermöglicht es Ihnen, Stile auf die in vorherigen Kaskadenschichten innerhalb des [Autorenursprungs](/de/docs/Glossary/Style_origin) festgelegten Werte zurückzusetzen. Im Vergleich dazu ermöglicht das {{cssxref("revert")}}-Schlüsselwort Ihnen, Stile, die im Autorenursprung angewendet wurden, auf die im Benutzerursprung oder Benutzeragentursprung festgelegten zurückzusetzen.

Das Schlüsselwort `revert-layer` soll idealerweise auf Eigenschaften innerhalb einer Kaskadenschicht angewendet werden. Wird es jedoch auf Eigenschaften außerhalb einer Kaskadenschicht angewendet, setzt es Eigenschaftswerte auf beliebige Werte zurück, die durch präsentative Hinweise festgelegt wurden (wie `width` und `height` Attribute oder das `<s>` Element in HTML) und standardmäßig auf die Werte, die durch das Benutzerstylesheet oder Benutzerstile festgelegt wurden. Im Gegensatz zum `revert`-Schlüsselwort, das präsentative Hinweise als Teil des Autorenursprungs betrachtet und diese ebenfalls zurücksetzt, ignoriert das Schlüsselwort `revert-layer` präsentative Hinweise außerhalb der Kaskadenschicht und setzt sie daher nicht zurück.

## Beispiele

### Standardverhalten der Kaskadenschicht

Im folgenden Beispiel sind zwei Kaskadenschichten in der CSS definiert, `base` und `special`. Standardmäßig überschreiben Regeln in der `special`-Schicht konkurrierende Regeln in der `base`-Schicht, weil `special` nach `base` in der `@layer`-Deklarationsanweisung aufgeführt ist.

#### HTML

```html
<p>Dieses Beispiel enthält eine Liste.</p>

<ul>
  <li class="item feature">Eintrag eins</li>
  <li class="item">Eintrag zwei</li>
  <li class="item">Eintrag drei</li>
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

Alle `<li>` Elemente entsprechen der `item`-Regel in der `special`-Schicht und sind rot. Dies ist das Standardverhalten der Kaskadenschicht, bei dem Regeln in der `special`-Schicht Vorrang vor Regeln in der `base`-Schicht haben.

### Zurücksetzen auf Stil in vorheriger Kaskadenschicht

Untersuchen wir, wie das Schlüsselwort `revert-layer` das Standardverhalten der Kaskadenschicht verändert. In diesem Beispiel enthält die `special`-Schicht eine zusätzliche `feature`-Regel, die das erste `<li>`-Element anspricht. Die `color`-Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

#### HTML

```html
<p>Dieses Beispiel enthält eine Liste.</p>

<ul>
  <li class="item feature">Eintrag eins</li>
  <li class="item">Eintrag zwei</li>
  <li class="item">Eintrag drei</li>
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

Mit `color` auf `revert-layer` gesetzt, wird der `color`-Eigenschaftswert auf den Wert in der entsprechenden `feature`-Regel in der vorherigen Schicht `base` zurückgesetzt, und so ist 'Eintrag eins' jetzt grün.

### Zurücksetzen auf Stil aus vorherigem Ursprung

Dieses Beispiel zeigt das Verhalten des Schlüsselworts `revert-layer`, wenn es keine Kaskadenschicht gibt, auf die zurückgesetzt werden kann _und_ es keine entsprechende CSS-Regel in der aktuellen Schicht gibt, von der der Eigenschaftswert geerbt werden kann.

#### HTML

```html
<p>Dieses Beispiel enthält eine Liste.</p>

<ul>
  <li class="item feature">Eintrag eins</li>
  <li class="item">Eintrag zwei</li>
  <li class="item">Eintrag drei</li>
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

Der Stil für alle `<li>` Elemente wird auf die Standardeinstellungen im Benutzeragentursprung zurückgesetzt.

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
- [CSS-Cascade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
