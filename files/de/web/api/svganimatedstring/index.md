---
title: SVGAnimatedString
slug: Web/API/SVGAnimatedString
l10n:
  sourceCommit: a809326f55025ca710b11e6c46414d73d031bf2b
---

{{APIRef("SVG")}}

Die **`SVGAnimatedString`**-Schnittstelle repräsentiert Zeichenfolgenattribute, die von jeder SVG-Deklaration aus animiert werden können. Sie müssen zuerst ein SVG-Attribut erstellen, bevor Sie irgendetwas anderes tun. Alles sollte innerhalb davon deklariert werden.

## Instanz-Eigenschaften

- [`SVGAnimatedString.animVal`](/de/docs/Web/API/SVGAnimatedString/animVal) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den animierten Wert des reflektierten Attributwerts darstellt.
    Wenn das angegebene Attribut derzeit nicht animiert wird, enthält es denselben Wert wie `baseVal`.
- [`SVGAnimatedString.baseVal`](/de/docs/Web/API/SVGAnimatedString/baseVal)
  - : Eine Zeichenfolge, die den Basiswert des reflektierten Attributs darstellt, bevor irgendwelche Animationen angewendet werden.

## Instanz-Methoden

_Die `SVGAnimatedString`-Schnittstelle bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href), ein Objekt dieses Typs.
