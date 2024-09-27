---
title: "ElementInternals: validationMessage-Eigenschaft"
short-title: validationMessage
slug: Web/API/ElementInternals/validationMessage
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`validationMessage`** des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces gibt die Validierungsnachricht für das Element zurück.

## Wert

Ein String, der die Validierungsnachricht dieses Elements enthält.

## Beispiele

Im folgenden Beispiel wird die Validierungsnachricht mit [`ElementInternals.setValidity()`](/de/docs/Web/API/ElementInternals/setValidity) gesetzt und dann mit `validationMessage` zurückgegeben.

```js
this.internals_.setValidity({ valueMissing: true }, "my message");
console.log(this.internals_.validationMessage); // "my message"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
