---
title: CSS-Schlüsselwort `fit-content`
short-title: fit-content
slug: Web/CSS/Reference/Values/fit-content
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das Größen-Schlüsselwort `fit-content` steht für eine Elementgröße, die sich an ihren Inhalt anpasst und dabei innerhalb der Grenzen ihres Containers bleibt.
Das Schlüsselwort stellt sicher, dass das Element nie kleiner als seine minimale intrinsische Größe ({{cssxref("min-content")}}) oder größer als seine maximale intrinsische Größe ({{cssxref("max-content")}} ist.

> [!NOTE]
> Dieses Schlüsselwort unterscheidet sich von der Funktion {{cssxref("fit-content()")}}. Die Funktion wird zur Festlegung der Größe von Grid-Tracks (beispielsweise in {{cssxref("grid-template-columns")}} und {{cssxref("grid-auto-rows")}}) sowie für die Größe von Layout-Boxen bei Eigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}} und {{cssxref("max-height")}} verwendet.

## Syntax

```css
/* Used in sizing properties */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;
```

## Beschreibung

Dieses Schlüsselwort wird mit Größeneigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("min-width")}} und {{cssxref("max-width")}} verwendet. Bei diesen Eigenschaften bezieht sich die berechnete Größe auf die [Content-Box](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) des Elements.

Wenn `fit-content` festgelegt ist, wächst oder schrumpft das Element passend zu seinem Inhalt. Es wächst jedoch nicht weiter, sobald die betreffende Abmessung die Größengrenze seines Containers erreicht.

Die Größe bei `fit-content` wird mit der folgenden Formel berechnet:

```plain
min(max-content, max(min-content, stretch))
```

Dabei passt [`stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) die [Margin-Box](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box) des Elements an die Breite seines [Containing Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block) an. Das Schlüsselwort entspricht im Wesentlichen `fit-content(stretch)`.

Mit der Eigenschaft {{cssxref("interpolate-size")}} und der Funktion {{cssxref("calc-size()")}} können Sie Animationen zu und von `fit-content` ermöglichen.

## Beispiele

### Boxen mit fit-content dimensionieren

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

{{EmbedLiveSample("sizing_boxes_with_fit-content", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Größen-Schlüsselwörter: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- Modul [CSS-Boxgrößen](/de/docs/Web/CSS/Guides/Box_sizing)
