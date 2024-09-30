---
title: SVGAnimatedString
slug: Web/API/SVGAnimatedString
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGAnimatedString`**-Schnittstelle repräsentiert Zeichenfolgenattribute, die von jeder SVG-Deklaration animiert werden können. Sie müssen zunächst ein SVG-Attribut erstellen, bevor Sie irgendetwas anderes tun. Alles sollte darin deklariert werden.

## Instanzeigenschaften

- [`SVGAnimatedString.animVal`](/de/docs/Web/API/SVGAnimatedString/animVal) {{ReadOnlyInline}}
  - : Dies ist eine Zeichenfolge, die den Animationswert darstellt. Wenn das gegebene Attribut oder die Eigenschaft animiert wird, enthält es den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wenn das gegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, enthält es den gleichen Wert wie `baseVal`.
- [`SVGAnimatedString.baseVal`](/de/docs/Web/API/SVGAnimatedString/baseVal)
  - : Dies ist eine Zeichenfolge, die den Basiswert darstellt. Der Basiswert des gegebenen Attributs vor Anwendung von Animationen. Der Setter wirft einen `DOMException`.

## Instanzmethoden

_Die `SVGAnimatedString`-Schnittstelle bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
