---
title: SVGNumber
slug: Web/API/SVGNumber
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Das **`SVGNumber`**-Interface entspricht dem {{cssxref("&lt;number&gt;")}}-Grunddatentyp.

Ein `SVGNumber`-Objekt kann als schreibgeschützt gekennzeichnet sein, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

## Instanz-Eigenschaften

- {{domxref("SVGNumber.value")}}

  - : Ein Float, der die Zahl darstellt.

    > [!NOTE]
    > Wenn das `SVGNumber`-Objekt schreibgeschützt ist, wird bei einem Versuch, den Wert zu ändern, eine {{domxref("DOMException")}} mit dem Code NO_MODIFICATION_ALLOWED_ERR ausgelöst.

## Instanz-Methoden

_Dieses Interface bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
