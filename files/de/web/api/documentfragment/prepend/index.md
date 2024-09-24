---
title: "DocumentFragment: prepend()-Methode"
short-title: prepend()
slug: Web/API/DocumentFragment/prepend
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`DocumentFragment.prepend()`**-Methode fügt eine Reihe von {{domxref("Node")}}-Objekten oder Zeichenfolgen vor dem ersten Kind des Dokumentfragments ein. Zeichenfolgen werden als äquivalente {{domxref("Text")}}-Knoten eingefügt.

Diese Methode fügt ein Kind zu einem `DocumentFragment` hinzu. Um einem beliebigen Element im Baum etwas voranzustellen, siehe {{domxref("Element.prepend()")}}.

## Syntax

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von {{domxref("Node")}}-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Ein Element zu einem Dokumentfragment voranstellen

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

- {{domxref("DocumentFragment.append()")}}
- {{domxref("Element.prepend()")}}
