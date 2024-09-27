---
title: "DocumentFragment: append() Methode"
short-title: append()
slug: Web/API/DocumentFragment/append
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`DocumentFragment.append()`** Methode
fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Zeichenfolgen nach dem letzten Kind des Dokumentfragments ein. Zeichenfolgen werden als äquivalente [`Text`](/de/docs/Web/API/Text) Knoten eingefügt.

Diese Methode hängt ein Kind an ein `DocumentFragment` an. Um zu einem beliebigen Element im Baum hinzuzufügen, siehe [`Element.append()`](/de/docs/Web/API/Element/append).

## Syntax

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Ein Element zu einem Dokumentfragment hinzufügen

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

- [`DocumentFragment.prepend()`](/de/docs/Web/API/DocumentFragment/prepend)
- [`Element.append()`](/de/docs/Web/API/Element/append)
