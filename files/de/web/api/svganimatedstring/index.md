---
title: SVGAnimatedString
slug: Web/API/SVGAnimatedString
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGAnimatedString`**-Schnittstelle repräsentiert Zeichenfolgenattribute, die aus jeder SVG-Deklaration animiert werden können. Sie müssen zunächst das SVG-Attribut erstellen, bevor Sie irgendetwas anderes tun, alles sollte darin deklariert sein.

## Instanz-Eigenschaften

- [`SVGAnimatedString.animVal`](/de/docs/Web/API/SVGAnimatedString/animVal) {{ReadOnlyInline}}
  - : Dies ist eine Zeichenfolge, die den Animationswert darstellt. Wenn das angegebene Attribut oder die angegebene Eigenschaft animiert wird, enthält es den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wenn das angegebene Attribut oder die angegebene Eigenschaft derzeit nicht animiert wird, enthält es denselben Wert wie `baseVal`.
- [`SVGAnimatedString.baseVal`](/de/docs/Web/API/SVGAnimatedString/baseVal)
  - : Dies ist eine Zeichenfolge, die den Basiswert darstellt. Der Basiswert des angegebenen Attributs vor der Anwendung von Animationen. Der Setter löst eine DOMException aus.

## Instanz-Methoden

_Die `SVGAnimatedString`-Schnittstelle bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
