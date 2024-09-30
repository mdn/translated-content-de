---
title: "Navigator: productSub-Eigenschaft"
short-title: productSub
slug: Web/API/Navigator/productSub
l10n:
  sourceCommit: 1dfc56990b6ec2ddd42616240d0507b77c95e954
---

{{ ApiRef("HTML DOM") }} {{Deprecated_Header}}

Die schreibgeschützte Eigenschaft **`Navigator.productSub`** gibt entweder den String "20030107" oder den String "20100101" zurück.

## Wert

Entweder "20030107" oder "20100101".

## Beispiele

```js
document.body.textContent = `productSub: ${navigator.productSub}`;
```

{{ EmbedLiveSample("Examples") }}

## Hinweise

In IE gibt diese Eigenschaft `undefined` zurück.

In Apple Safari und Google Chrome gibt diese Eigenschaft immer `20030107` zurück.

In Firefox gibt diese Eigenschaft immer `20100101` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
