---
title: fit-content
slug: Web/CSS/Reference/Values/fit-content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das `fit-content`-Größen-Schlüsselwort steht für eine Elementgröße, die sich an den Inhalt anpasst und dabei innerhalb der Grenzen ihres Containers bleibt. Das Schlüsselwort stellt sicher, dass das Element niemals kleiner als seine minimale intrinsische Größe ({{cssxref("min-content")}}) oder größer als seine maximale intrinsische Größe ({{cssxref("max-content")}}) ist.

> [!NOTE]
> Dieses Schlüsselwort unterscheidet sich von der {{cssxref("fit-content_function", "fit-content()")}}-Funktion. Die Funktion wird für die Größenbestimmung von Gittern (zum Beispiel in {{cssxref("grid-template-columns")}} und {{cssxref("grid-auto-rows")}}) und für die Größenbestimmung von angelegten Boxen für Eigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}} und {{cssxref("max-height")}} verwendet.

## Syntax

```css
/* Used in sizing properties */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;
```

## Beschreibung

Dieses Schlüsselwort wird mit Größen-Eigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("min-width")}} und {{cssxref("max-width")}} verwendet. Wenn es bei diesen Eigenschaften genutzt wird, bezieht sich die berechnete Größe auf die [Inhaltsbox](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) des Elements.

Wenn `fit-content` gesetzt ist, wächst oder schrumpft das Element, um seinen Inhalt aufzunehmen, hört jedoch auf zu expandieren, sobald die relevante Dimension die Größenbegrenzung seines Containers erreicht.

Die `fit-content`-Größe wird mit folgender Formel berechnet:

```plain
min(max-content, max(min-content, stretch))
```

wobei [`stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) die [Randbox](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box) des Elements an die Breite seines [einhaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block) anpasst. Das Schlüsselwort entspricht im Wesentlichen `fit-content(stretch)`.

Sie können Animationen zu und von `fit-content` mit der {{cssxref("interpolate-size")}}-Eigenschaft und der {{cssxref("calc-size()")}}-Funktion aktivieren.

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
- [CSS-Box-Sizing]-Modul(/de/docs/Web/CSS/Guides/Box_sizing)
