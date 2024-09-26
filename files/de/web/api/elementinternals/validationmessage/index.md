---
title: "ElementInternals: Eigenschaft validationMessage"
short-title: validationMessage
slug: Web/API/ElementInternals/validationMessage
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`validationMessage`** der {{domxref("ElementInternals")}}-Schnittstelle gibt die Validierungsnachricht für das Element zurück.

## Wert

Ein String, der die Validierungsnachricht dieses Elements enthält.

## Beispiele

Im folgenden Beispiel wird die Validierungsnachricht mit {{domxref("ElementInternals.setValidity()")}} festgelegt und dann mit `validationMessage` zurückgegeben.

```js
this.internals_.setValidity({ valueMissing: true }, "my message");
console.log(this.internals_.validationMessage); // "my message"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}