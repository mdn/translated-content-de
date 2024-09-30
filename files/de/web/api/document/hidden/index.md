---
title: "Document: hidden-Eigenschaft"
short-title: hidden
slug: Web/API/Document/hidden
l10n:
  sourceCommit: 9b89bf6c59aa5f4dfe7e68b7e4fee42507d67cc4
---

{{ ApiRef("DOM") }}

Die **`Document.hidden`** schreibgeschützte Eigenschaft gibt einen booleschen Wert zurück, der anzeigt, ob die Seite als ausgeblendet gilt oder nicht.

Die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)-Eigenschaft bietet eine alternative Möglichkeit, um festzustellen, ob die Seite ausgeblendet ist.

## Wert

Ein boolescher Wert, `true`, wenn die Seite ausgeblendet ist, und `false` andernfalls.

## Beispiele

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.hidden);
  // Modify behavior…
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)
