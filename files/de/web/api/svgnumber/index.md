---
title: SVGNumber
slug: Web/API/SVGNumber
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("SVG")}}

Das **`SVGNumber`**-Interface entspricht dem {{cssxref("&lt;number&gt;")}} Basisdatentyp.

Ein `SVGNumber`-Objekt kann als schreibgeschützt gekennzeichnet sein, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

## Instanz-Eigenschaften

- [`SVGNumber.value`](/de/docs/Web/API/SVGNumber/value)

  - : Ein Gleitkommawert, der die Zahl darstellt.

    Hinweis: Wenn das `SVGNumber`-Objekt schreibgeschützt ist, wird bei einem Versuch, den Wert zu ändern, ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code NO_MODIFICATION_ALLOWED_ERR ausgelöst.

## Instanz-Methoden

_Dieses Interface bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
