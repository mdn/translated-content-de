---
title: "DocumentFragment: prepend() Methode"
short-title: prepend()
slug: Web/API/DocumentFragment/prepend
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`DocumentFragment.prepend()`**-Methode fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten Kind des Dokumentfragments ein. Zeichenfolgen werden als äquivalente [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

Diese Methode fügt ein Kind zu einem `DocumentFragment` hinzu. Um ein beliebiges Element im Baum voranzustellen, siehe [`Element.prepend()`](/de/docs/Web/API/Element/prepend).

## Syntax

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Ein Element einem Dokumentfragment voranstellen

```js
let fragment = new DocumentFragment();
let div = document.createElement("div");
let p = document.createElement("p");
fragment.append(p);
fragment.prepend(div);

fragment.children; // HTMLCollection [<div>, <p>]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentFragment.append()`](/de/docs/Web/API/DocumentFragment/append)
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
