---
title: "Navigator: productSub-Eigenschaft"
short-title: productSub
slug: Web/API/Navigator/productSub
l10n:
  sourceCommit: 9cbfa7fc0051724913e92958b712425db77291a8
---

{{ ApiRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`Navigator.productSub`** gibt entweder den String "20030107" oder den String "20100101" zurück.

## Wert

Entweder "20030107" oder "20100101".

## Beispiele

```js
document.body.textContent = `productSub: ${navigator.productSub}`;
```

{{ EmbedLiveSample("Examples") }}

## Anmerkungen

In IE gibt diese Eigenschaft undefined zurück.

In Apple Safari und Google Chrome gibt diese Eigenschaft immer `20030107` zurück.

In Firefox gibt diese Eigenschaft immer `20100101` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
