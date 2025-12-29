---
title: fit-content
slug: Web/CSS/Reference/Values/fit-content
l10n:
  sourceCommit: 7cc95111c1c5627f095e36eac094c3c6689341a7
---

Das `fit-content` Größen-Schlüsselwort repräsentiert eine Elementgröße, die sich an ihren Inhalt anpasst und gleichzeitig innerhalb der Grenzen ihres Containers bleibt. Das Schlüsselwort stellt sicher, dass das Element niemals kleiner als seine minimale intrinsische Größe ({{cssxref("min-content")}}) oder größer als seine maximale intrinsische Größe ({{cssxref("max-content")}}) ist.

> [!NOTE]
> Dieses Schlüsselwort ist anders als die {{cssxref("fit-content_function", "fit-content()")}} Funktion. Die Funktion wird für Grid-Track-Größenveränderung verwendet (zum Beispiel in {{cssxref("grid-template-columns")}} und {{cssxref("grid-auto-rows")}}) sowie für das Layout von Boxgrößen für Eigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}} und {{cssxref("max-height")}}.

## Syntax

```css
/* Used in sizing properties */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;
```

## Beschreibung

Dieses Schlüsselwort wird mit Größeneigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("min-width")}} und {{cssxref("max-width")}} verwendet. Bei Verwendung auf diesen Eigenschaften bezieht sich die berechnete Größe auf die [Inhaltsbox](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) des Elements.

Wenn `fit-content` gesetzt ist, wächst oder schrumpft das Element, um seinem Inhalt zu entsprechen, doch es stoppt die Expansion, sobald die relevante Dimension die Größenbegrenzung seines Containers erreicht.

Die `fit-content` Größe wird mit folgender Formel berechnet:

```plain
min(max-content, max(min-content, stretch))
```

wobei [`stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) die [Randbox](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box) des Elements an die Breite seines [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block) anpasst. Das Schlüsselwort ist im Wesentlichen gleichbedeutend mit `fit-content(stretch)`.

Sie können Animationen zu und von `fit-content` mit der {{cssxref("interpolate-size")}} Eigenschaft und der {{cssxref("calc-size()")}} Funktion aktivieren.

## Beispiele

### Boxgrößen mit fit-content

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
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_sizing) Modul
