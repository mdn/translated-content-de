---
title: "CustomStateSet: add() Methode"
short-title: add()
slug: Web/API/CustomStateSet/add
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{APIRef("Web Components")}}

Die **`add`**-Methode der [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Schnittstelle fügt einen Wert hinzu, der einen benutzerdefinierten Zustand im `CustomStateSet` darstellt.

Benutzerdefinierte Elemente mit einem bestimmten Zustand können mit der [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state)-Pseudoklasse ausgewählt werden, indem der gewünschte Zustand als Argument angegeben wird.

## Syntax

```js-nolint
add(value)
```

### Parameter

- `value`
  - : Ein String, der den benutzerdefinierten Zustand darstellt.

### Rückgabewert

Undefiniert.

## Beispiele

Die folgende Funktion fügt dem `CustomStateSet` den Zustand `checked` hinzu.

```js
class MyCustomElement extends HTMLElement {
  set checked(flag) {
    if (flag) {
      this._internals.states.add("checked");
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
