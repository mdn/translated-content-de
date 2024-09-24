---
title: "Element: Eigenschaft childElementCount"
short-title: childElementCount
slug: Web/API/Element/childElementCount
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

Die **`Element.childElementCount`** schreibgeschützte Eigenschaft gibt die Anzahl der Kind-Elemente dieses Elements zurück.

## Beispiele

```js
let sidebar = document.getElementById("sidebar");
if (sidebar.childElementCount > 0) {
  // Do something
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.childElementCount")}}
- {{domxref("DocumentFragment.childElementCount")}}
