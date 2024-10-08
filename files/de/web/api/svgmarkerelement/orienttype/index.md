---
title: "SVGMarkerElement: orientType Eigenschaft"
short-title: orientType
slug: Web/API/SVGMarkerElement/orientType
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`orientType`** schreibgeschützte Eigenschaft der [`SVGMarkerElement`](/de/docs/Web/API/SVGMarkerElement) Schnittstelle gibt ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration) Objekt zurück, das angibt, ob das {{SVGattr("orient")}} Attribut `auto`, ein Winkelwert oder etwas anderes ist.

Dieses _etwas anderes_ ist höchstwahrscheinlich das Schlüsselwort `auto-start-reverse`, jedoch lässt die Spezifikation offen, dass dies andere Werte sein können. Nicht unterstützte Werte werden im Allgemeinen vom Parser verworfen, wodurch der Wert auf den Standardwert `auto` gesetzt wird.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration) Objekt. Dies enthält einen der folgenden Werte:

- `0`
  - : `SVG_MARKER_ORIENT_UNKNOWN`, was bedeutet, dass das {{SVGattr("orient")}} Attribut einen anderen Wert als `auto` oder einen Winkel hat.
- `1`
  - : `SVG_MARKERUNITS_ORIENT_AUTO`, was bedeutet, dass das {{SVGattr("orient")}} Attribut den Schlüsselwortwert `auto` hat.
- `2`
  - : `SVG_MARKERUNITS_ORIENT_ANGLE`, was bedeutet, dass das {{SVGattr("orient")}} Attribut einen {{cssxref("angle")}} oder {{cssxref("number")}} Wert hat, der den Winkel angibt.

## Beispiele

Die `orientType` Eigenschaft gibt ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration) Objekt zurück. Da der Wert des {{SVGattr("orient")}} Attributs ein Winkel ist, wird bei der Rückgabe von `SVGAnimatedEnumeration.baseVal` der Wert `2` zurückgegeben.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient=".63deg">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.orientType.baseVal); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
