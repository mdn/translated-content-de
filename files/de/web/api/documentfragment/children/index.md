---
title: "DocumentFragment: Eigenschaft children"
short-title: children
slug: Web/API/DocumentFragment/children
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`children`** gibt eine lebendige {{domxref("HTMLCollection")}}
zurück, die alle Kind-{{domxref("Element", "Elemente")}} des Dokumentfragments enthält, auf dem sie aufgerufen wurde.

## Wert

Eine {{ domxref("HTMLCollection") }}, die eine lebendige, geordnete Sammlung der DOM-Elemente ist, welche Kinder des Dokumentfragments sind. Sie können die einzelnen Kind-Knoten in der Sammlung entweder mit der {{domxref("HTMLCollection.item()", "item()")}}-Methode der Sammlung oder mit JavaScript-Array-Notation ansprechen.

Wenn das Dokumentfragment keine Elementkinder hat, ist `children` eine leere Liste mit einer `length` von `0`.

## Beispiele

```js
let fragment = new DocumentFragment();
fragment.children; // HTMLCollection []

let paragraph = document.createElement("p");
fragment.appendChild(paragraph);

fragment.children; // HTMLCollection [<p>]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.childNodes")}}
