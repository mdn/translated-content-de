---
title: <view>
slug: Web/SVG/Reference/Element/view
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

Das **`<view>`** [SVG](/de/docs/Web/SVG)-Element definiert eine bestimmte Ansicht eines SVG-Dokuments. Eine spezifische Ansicht kann angezeigt werden, indem die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des `<view>`-Elements als Ziel-Fragment einer URL referenziert wird.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("preserveAspectRatio")}}
  - : Dieses Attribut definiert, wie das SVG-Fragment verzerrt werden muss, wenn es in einem Container mit einem anderen {{Glossary("aspect_ratio", "Seitenverhältnis")}} eingebettet ist.
    _Werttyp_: (`none` | `xMinYMin` | `xMidYMin` | `xMaxYMin` | `xMinYMid` | `xMidYMid` | `xMaxYMid` | `xMinYMax` | `xMidYMax` | `xMaxYMax`) (`meet` | `slice`)?; _Standardwert_: `xMidYMid meet`; _Animierbar_: **ja**
- {{SVGAttr("viewBox")}}
  - : Dieses Attribut definiert die Begrenzung des SVG-Viewports für das Musterfragment.
    _Werttyp_: **[\<list-of-numbers>](/de/docs/Web/SVG/Guides/Content_type#list-of-ts)**; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("zoomAndPan")}} {{Deprecated_Inline}}
  - : Dieses Attribut gibt an, ob das SVG-Dokument vergrößert und verschoben werden kann.
    _Werttyp_: **disable | magnify**; _Standardwert_: magnify; _Animierbar_: **nein**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGViewElement`](/de/docs/Web/API/SVGViewElement)-Schnittstelle.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
