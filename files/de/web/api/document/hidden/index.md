---
title: "Document: hidden Eigenschaft"
short-title: hidden
slug: Web/API/Document/hidden
l10n:
  sourceCommit: 9b89bf6c59aa5f4dfe7e68b7e4fee42507d67cc4
---

{{ ApiRef("DOM") }}

Die schreibgeschützte **`Document.hidden`**-Eigenschaft gibt einen Boolean-Wert zurück, der angibt, ob die Seite als verborgen betrachtet wird oder nicht.

Die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)-Eigenschaft bietet eine alternative Möglichkeit, um festzustellen, ob die Seite verborgen ist.

## Wert

Ein Boolean-Wert: `true`, wenn die Seite verborgen ist, und `false` andernfalls.

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
