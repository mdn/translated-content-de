---
title: "SVGFEConvolveMatrixElement: edgeMode-Eigenschaft"
short-title: edgeMode
slug: Web/API/SVGFEConvolveMatrixElement/edgeMode
l10n:
  sourceCommit: fcae10dc7577ef8ae93c0ec36d43b35fb301f0f9
---

{{APIRef("SVG")}}

Die **`edgeMode`**-Schreibgeschützte Eigenschaft des [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Interfaces reflektiert das {{SVGAttr("edgeMode")}}-Attribut des gegebenen {{SVGElement("feConvolveMatrix")}}-Elements. Die `SVG_EDGEMODE_*`-Konstanten, die auf diesem Interface definiert sind, werden durch die Zahlen 1 bis 3 dargestellt, wobei der Standard `duplicate` `1` ist, `wrap` `2` und `none` `3`.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

In diesem Beispiel rufen wir den `<feConvolveMatrix>`-Filterelement-`edgeMode`-Attributwert mithilfe der `edgeMode`-Eigenschaft des `SVGFEConvolveMatrixElement`-Interfaces ab.

Wenn unser SVG den folgenden Filter enthält:

```html
<feConvolveMatrix kernelMatrix="3 0 0 0 0 0 0 0 -4" id="el" edgeMode="wrap" />
```

Können wir auf die Zahl zugreifen, die dem aufgezählten Schlüsselwortwert des `edgeMode`-Attributs des `feConvolveMatrix`-Elements zugeordnet ist.

```js
const el = document.getElementById("el");
console.log(el.edgeMode.baseVal); // output: 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
- [`SVGFEGaussianBlurElement.edgeMode`](/de/docs/Web/API/SVGFEGaussianBlurElement/edgeMode)
