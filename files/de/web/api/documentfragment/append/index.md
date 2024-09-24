---
title: "DocumentFragment: Methode append()"
short-title: append()
slug: Web/API/DocumentFragment/append
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`DocumentFragment.append()`**-Methode fügt eine Reihe von {{domxref("Node")}}-Objekten oder Zeichenfolgen nach dem letzten Kind des Dokumentfragments ein. Zeichenfolgen werden als gleichwertige {{domxref("Text")}}-Knoten eingefügt.

Diese Methode hängt ein Kind an ein `DocumentFragment` an. Um an ein beliebiges Element im Baum anzufügen, siehe {{domxref("Element.append()")}}.

## Syntax

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Menge von {{domxref("Node")}}-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Ein Element an ein Dokumentfragment anhängen

```js
let fragment = new DocumentFragment();
let div = document.createElement("div");
fragment.append(div);

fragment.children; // HTMLCollection [<div>]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DocumentFragment.prepend()")}}
- {{domxref("Element.append()")}}
