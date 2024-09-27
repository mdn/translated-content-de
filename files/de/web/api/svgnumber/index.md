---
title: SVGNumber
slug: Web/API/SVGNumber
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGNumber`**-Schnittstelle entspricht dem {{cssxref("&lt;number&gt;")}}-Basisdatentyp.

Ein `SVGNumber`-Objekt kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

## Instanz-Eigenschaften

- [`SVGNumber.value`](/de/docs/Web/API/SVGNumber/value)

  - : Ein Float, der die Zahl darstellt.

    Hinweis: Wenn das `SVGNumber`-Objekt schreibgeschützt ist, wird bei einem Versuch, den Wert zu ändern, eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code NO_MODIFICATION_ALLOWED_ERR ausgelöst.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
