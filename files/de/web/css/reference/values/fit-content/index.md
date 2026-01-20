---
title: fit-content
slug: Web/CSS/Reference/Values/fit-content
l10n:
  sourceCommit: 1951d1dbe59ac6cd79ae0ec90697f764ab9c7ffd
---

Das Schlüsselwort `fit-content` repräsentiert eine Elementgröße, die sich an ihren Inhalt anpasst, wobei sie innerhalb der Grenzen ihres Containers bleibt. Das Schlüsselwort stellt sicher, dass das Element nie kleiner als seine minimale intrinsische Größe ({{cssxref("min-content")}}) oder größer als seine maximale intrinsische Größe ({{cssxref("max-content")}}) ist.

> [!NOTE]
> Dieses Schlüsselwort unterscheidet sich von der Funktion {{cssxref("fit-content()")}}. Die Funktion wird für die Größenbestimmung von Gittern verwendet (zum Beispiel in {{cssxref("grid-template-columns")}} und {{cssxref("grid-auto-rows")}}) und für die Größenbestimmung von gestalteten Boxen für Eigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}} und {{cssxref("max-height")}}.

## Syntax

```css
/* Used in sizing properties */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;
```

## Beschreibung

Dieses Schlüsselwort wird mit Größeneigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("min-width")}} und {{cssxref("max-width")}} verwendet. Wenn es auf diese Eigenschaften angewendet wird, bezieht sich die berechnete Größe auf den [Inhaltsbereich](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) des Elements.

Wenn `fit-content` eingestellt ist, wächst oder schrumpft das Element, um seinem Inhalt zu entsprechen, hört jedoch auf zu expandieren, nachdem die relevante Dimension die Größenbegrenzung seines Containers erreicht hat.

Die `fit-content`-Größe wird mit der folgenden Formel berechnet:

```plain
min(max-content, max(min-content, stretch))
```

wobei [`stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) den [Randbereich](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box) des Elements an die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block) anpasst. Das Schlüsselwort ist im Wesentlichen gleichbedeutend mit `fit-content(stretch)`.

Sie können Animationen zu und von `fit-content` mit der Eigenschaft {{cssxref("interpolate-size")}} und der Funktion {{cssxref("calc-size()")}} aktivieren.

## Beispiele

### Größenbestimmung von Boxen mit fit-content

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

- Verwandte Größenschlüsselwörter: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- [CSS Box Sizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul
