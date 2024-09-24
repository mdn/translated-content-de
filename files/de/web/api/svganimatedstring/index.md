---
title: SVGAnimatedString
slug: Web/API/SVGAnimatedString
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGAnimatedString`**-Schnittstelle repräsentiert Zeichenfolgenattribute, die aus jeder SVG-Deklaration animiert werden können. Sie müssen ein SVG-Attribut erstellen, bevor Sie etwas anderes tun, alles sollte innerhalb dieser Deklaration erfolgen.

## Instanz-Eigenschaften

- {{domxref("SVGAnimatedString.animVal")}} {{ReadOnlyInline}}
  - : Dies ist eine Zeichenfolge, die den Animationswert darstellt. Wenn das angegebene Attribut oder die Eigenschaft animiert wird, enthält es den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wenn das angegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, enthält es denselben Wert wie baseVal.
- {{domxref("SVGAnimatedString.baseVal")}}
  - : Dies ist eine Zeichenfolge, die den Basiswert darstellt. Der Basiswert des angegebenen Attributs vor Anwendung von Animationen. Das Setzen des Wertes wirft eine DOMException.

## Instanz-Methoden

_Die `SVGAnimatedString`-Schnittstelle bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
