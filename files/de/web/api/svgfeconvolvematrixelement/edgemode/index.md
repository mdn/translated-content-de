---
title: "SVGFEConvolveMatrixElement: edgeMode-Eigenschaft"
short-title: edgeMode
slug: Web/API/SVGFEConvolveMatrixElement/edgeMode
l10n:
  sourceCommit: 804a3f25cfa764e3dbdb87acb90f9fb5118c1425
---

{{APIRef("SVG")}}

Die **`edgeMode`**-Eigenschaft der [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Schnittstelle, die nur gelesen werden kann, spiegelt das {{SVGAttr("edgeMode")}}-Attribut des gegebenen {{SVGElement("feConvolveMatrix")}}-Elements wider. Die auf dieser Schnittstelle definierten `SVG_EDGEMODE_*`-Konstanten werden durch die Zahlen 1 bis 3 dargestellt, wobei der Standardwert `duplicate` `1`, `wrap` `2` und `none` `3` ist.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

In diesem Beispiel rufen wir den Wert des `edgeMode`-Attributs des `<feConvolveMatrix>`-Filterelements mithilfe der `edgeMode`-Eigenschaft der `SVGFEConvolveMatrixElement`-Schnittstelle ab.

Wenn unser SVG den folgenden Filter enthält:

```html
<feConvolveMatrix kernelMatrix="3 0 0 0 0 0 0 0 -4" id="el" edgeMode="wrap" />
```

Können wir auf die Nummer zugreifen, die mit dem aufgezählten Schlüsselwortwert des `edgeMode`-Attributs des `feConvolveMatrix`-Elements verknüpft ist.

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
