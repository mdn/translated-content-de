---
title: fit-content
slug: Web/CSS/Reference/Values/fit-content
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das `fit-content`-Größenschlüsselwort steht für eine Elementgröße, die sich an ihren Inhalt anpasst, während sie innerhalb der Grenzen ihres Containers bleibt. Das Schlüsselwort stellt sicher, dass das Element nie kleiner als seine minimale intrinsische Größe ({{cssxref("min-content")}}) oder größer als seine maximale intrinsische Größe ({{cssxref("max-content")}}) ist.

> [!NOTE]
> Dieses Schlüsselwort unterscheidet sich von der {{cssxref("fit-content_function", "fit-content()")}}-Funktion. Die Funktion wird zur Größenbestimmung von Rasterspuren verwendet (beispielsweise in {{cssxref("grid-template-columns")}} und {{cssxref("grid-auto-rows")}}) und zur Berechnung der Kastenabmessungen für Eigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}} und {{cssxref("max-height")}}.

## Syntax

```css
/* Used in sizing properties */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;
```

## Beschreibung

Dieses Schlüsselwort wird mit Größeneigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("min-width")}} und {{cssxref("max-width")}} verwendet. Wenn es auf diesen Eigenschaften angewendet wird, bezieht sich die berechnete Größe auf den [Inhaltsbereich](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) des Elements.

Wenn `fit-content` gesetzt ist, wächst oder schrumpft das Element, um seinen Inhalt anzupassen, stoppt jedoch das Expandieren, sobald die relevante Dimension die Größenbegrenzung seines Containers erreicht.

Die `fit-content`-Größe wird mit der folgenden Formel berechnet:

```plain
min(max-content, max(min-content, stretch))
```

wobei [`stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) den [Randbereich](/de/docs/Web/CSS/Reference/Values/box-edge#margin-box) des Elements an die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) anpasst. Das Schlüsselwort ist im Wesentlichen gleichbedeutend mit `fit-content(stretch)`.

Sie können Animationen zu und von `fit-content` mithilfe der {{cssxref("interpolate-size")}}-Eigenschaft und der {{cssxref("calc-size()")}}-Funktion aktivieren.

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
- [CSS-Kastenmodell](/de/docs/Web/CSS/CSS_box_sizing) Modul
