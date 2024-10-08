---
title: "DocumentFragment: children-Eigenschaft"
short-title: children
slug: Web/API/DocumentFragment/children
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte **`children`**-Eigenschaft gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Kindelemente des Dokumentfragments enthält, auf dem sie aufgerufen wurde.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine Live-, geordnete Sammlung der DOM-Elemente ist, die Kinder des Dokumentfragments sind. Sie können auf die einzelnen untergeordneten Knoten in der Sammlung zugreifen, indem Sie entweder die [`item()`](/de/docs/Web/API/HTMLCollection/item)-Methode der Sammlung verwenden oder die JavaScript-Array-ähnliche Notation nutzen.

Falls das Dokumentfragment keine Kindelemente hat, ist `children` eine leere Liste mit einer `length` von `0`.

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

- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes)
