---
title: "Document: hidden-Eigenschaft"
short-title: hidden
slug: Web/API/Document/hidden
l10n:
  sourceCommit: 54c533a1750f2804d5bec13e1afeed1113fde5d9
---

{{ ApiRef("DOM") }}

Die **`Document.hidden`**-Eigenschaft, die schreibgeschützt ist, gibt einen Boolean-Wert zurück, der angibt, ob die Seite als verborgen betrachtet wird oder nicht. Dies kann verwendet werden, um zu überprüfen, ob das Dokument im Hintergrund, in einem minimierten Fenster oder auf andere Weise für den Benutzer nicht sichtbar ist.

Die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)-Eigenschaft bietet eine alternative Möglichkeit, um festzustellen, ob die Seite verborgen ist.

## Wert

Ein Boolean-Wert, `true`, wenn die Seite verborgen ist, und `false` andernfalls.

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
