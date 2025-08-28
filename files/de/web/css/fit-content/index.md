---
title: fit-content
slug: Web/CSS/fit-content
l10n:
  sourceCommit: bbff081938f76bdd6c6fdbf59d2e25e0a7a1cf2a
---

Das `fit-content` Größen-Schlüsselwort repräsentiert eine Elementgröße, die sich an ihren Inhalt anpasst, dabei jedoch innerhalb der Grenzen ihres Containers bleibt. Das Schlüsselwort stellt sicher, dass das Element niemals kleiner als seine minimale intrinsische Größe ({{cssxref("min-content")}}) oder größer als seine maximale intrinsische Größe ({{cssxref("max-content")}}) ist.

> [!NOTE]
> Dieses Schlüsselwort unterscheidet sich von der {{cssxref("fit-content_function", "fit-content()")}} Funktion. Die Funktion wird für die Raster-Ausrichtungsgröße verwendet (beispielsweise in {{cssxref("grid-template-columns")}} und {{cssxref("grid-auto-rows")}}) und für die Größenberechnung von Boxelementen bei Eigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}} und {{cssxref("max-height")}}.

## Syntax

```css
/* Used in sizing properties */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;
```

## Beschreibung

Dieses Schlüsselwort wird mit Größenattributen wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("min-width")}} und {{cssxref("max-width")}} verwendet. Wenn es bei diesen Eigenschaften verwendet wird, bezieht sich die berechnete Größe auf die [Inhaltsbox](/de/docs/Web/CSS/box-edge#content-box) des Elements.

Wenn `fit-content` gesetzt ist, wächst oder schrumpft das Element, um seinem Inhalt zu entsprechen, hört jedoch auf sich zu erweitern, nachdem die relevante Dimension die Größenbegrenzung seines Containers erreicht.

Die `fit-content` Größe wird mit der folgenden Formel berechnet:

```plain
min(max-content, max(min-content, stretch))
```

wobei [`stretch`](/de/docs/Web/CSS/width#stretch) die [Randbox](/de/docs/Web/CSS/box-edge#margin-box) des Elements an die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) anpasst. Das Schlüsselwort entspricht im Wesentlichen `fit-content(stretch)`.

Sie können Animationen zu und von `fit-content` mithilfe der {{cssxref("interpolate-size")}} Eigenschaft und der {{cssxref("calc-size()")}} Funktion aktivieren.

## Beispiele

### Boxen mit fit-content skalieren

#### HTML

```html
<div class="container">
  <div class="item">Item</div>
  <div class="item">Item with more text in it.</div>
  <div class="item">
    Item with more text in it, hopefully we have added enough text so the text
    will start to wrap.
  </div>
</div>
```

#### CSS

```css
.container {
  border: 2px solid #cccccc;
  padding: 10px;
  width: 20em;
}

.item {
  width: fit-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_fit-content_for_box_sizing", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Größen-Schlüsselwörter: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- [CSS Box-Größen](/de/docs/Web/CSS/CSS_box_sizing) Modul
