---
title: <view>
slug: Web/SVG/Element/view
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<view>`** [SVG](/de/docs/Web/SVG)-Element definiert eine bestimmte Ansicht eines SVG-Dokuments. Eine spezifische Ansicht kann angezeigt werden, indem das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut des `<view>`-Elements als Ziel-Fragment einer URL referenziert wird.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("viewBox")}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("zoomAndPan")}} {{Deprecated_Inline}} {{Non-standard_Inline}}

## Beispiel

### SVG

```svg
<svg viewBox="0 0 300 100" width="300" height="100"
      xmlns="http://www.w3.org/2000/svg">

  <view id="one" viewBox="0 0 100 100" />
  <circle cx="50" cy="50" r="40" fill="red" />

  <view id="two" viewBox="100 0 100 100" />
  <circle cx="150" cy="50" r="40" fill="green" />

  <view id="three" viewBox="200 0 100 100" />
  <circle cx="250" cy="50" r="40" fill="blue" />
</svg>
```

### HTML

```html
<img src="example.svg" alt="three circles" width="300" height="100" />
<br />
<img src="example.svg#three" alt="blue circle" width="100" height="100" />
```

### Ergebnis

{{EmbedLiveSample("Example", "85ch", "240px")}}

## DOM-Interface

Dieses Element implementiert das [`SVGViewElement`](/de/docs/Web/API/SVGViewElement)-Interface.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
