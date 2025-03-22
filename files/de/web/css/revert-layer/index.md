---
title: revert-layer
slug: Web/CSS/revert-layer
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Das **`revert-layer`** [CSS-weite Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) stellt den Wert einer Eigenschaft in einem [Kaskadierungsebene](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die das Element in einer vorherigen Kaskadierungsebene trifft. Der Wert einer Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln auf das Ziel-Element in der aktuellen Kaskadierungsebene angewendet worden wären.

Wenn es keine andere Kaskadierungsebene gibt, zu der die CSS-Regel zurückgesetzt werden kann, fällt der Eigenschaftswert auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) aus der aktuellen Ebene zurück. Darüber hinaus, wenn es keine passende CSS-Regel in der aktuellen Ebene gibt, fällt der Eigenschaftswert für das Element auf den Stil einer vorherigen {{Glossary("Style_origin", "Stilherkunft")}} zurück.

Dieses Schlüsselwort kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

## Revert-layer vs. revert

Das `revert-layer` Schlüsselwort ermöglicht es Ihnen, die Stile auf diejenigen zurückzusetzen, die in vorherigen Kaskadierungsebenen innerhalb der {{Glossary("Style_origin", "Autorherkunft")}} angegeben sind. Im Vergleich dazu ermöglicht das {{cssxref("revert")}} Schlüsselwort, die im Autorherkunft angewendeten Stile auf diejenigen zurückzusetzen, die in der Benutzerherkunft oder Benutzeragentenherkunft festgelegt sind.

Das `revert-layer` Schlüsselwort ist idealerweise dafür gedacht, auf Eigenschaften innerhalb einer Kaskadierungsebene angewendet zu werden. Wird es jedoch auf Eigenschaften außerhalb einer Kaskadierungsebene angewendet, fällt es die Eigenschaftswerte auf die von Präsentationshinweisen (wie `width` und `height` Attributen oder dem `<s>` Element in HTML) gesetzt zurück, wobei die Standardeinstellungen im Stylesheet des Benutzeragenten oder Benutzers verwendet werden. Anders als das `revert` Schlüsselwort, das Präsentationshinweise als Teil der Autorherkunft betrachtet und sie ebenfalls zurücksetzt, ignoriert das `revert-layer` Schlüsselwort Präsentationshinweise außerhalb der Kaskadierungsebene, sodass es diese nicht zurücksetzt.

## Beispiele

### Standardverhalten der Kaskadierungsebene

Im untenstehenden Beispiel werden zwei Kaskadierungsebenen im CSS definiert, `base` und `special`. Standardmäßig überschreiben Regeln in der `special` Ebene konkurrierende Regeln in der `base` Ebene, da `special` nach `base` in der `@layer` Deklarationserklärung aufgeführt ist.

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

#### Resultat

{{EmbedLiveSample('Default_cascade_layer_behavior')}}

Alle `<li>` Elemente entsprechen der `item` Regel in der `special` Ebene und sind rot. Dies ist das Standardverhalten der Kaskadierungsebene, bei dem Regeln in der `special` Ebene Vorrang vor Regeln in der `base` Ebene haben.

### Zurückssetzen auf Stil in vorheriger Kaskadierungsebene

Lassen Sie uns untersuchen, wie das `revert-layer` Schlüsselwort das Standardverhalten der Kaskadierungsebene ändert. In diesem Beispiel enthält die `special` Ebene eine zusätzliche `feature` Regel, die das erste `<li>` Element anspricht. Die `color` Eigenschaft in dieser Regel ist auf `revert-layer` gesetzt.

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

#### Resultat

{{EmbedLiveSample('Revert_to_style_in_previous_cascade_layer')}}

Mit `color` auf `revert-layer` gesetzt, fällt der `color` Eigenschaftswert auf den Wert in der entsprechenden `feature` Regel in der vorherigen Ebene `base` zurück, und so ist 'Item one' nun grün.

### Zurückssetzen auf Stil in vorheriger Herkunft

Dieses Beispiel zeigt das Verhalten des `revert-layer` Schlüsselworts, wenn es keine Kaskadierungsebene gibt, zu der es zurückgesetzt werden kann, _und_ es keine passende CSS-Regel in der aktuellen Ebene gibt, um den Eigenschaftswert zu erben.

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

#### Resultat

{{EmbedLiveSample('Revert_to_style_in_previous_origin')}}

Der Stil für alle `<li>` Elemente fällt auf die Standardwerte in der Benutzeragentenherkunft zurück.

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
