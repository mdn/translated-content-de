---
title: "CustomStateSet: add()-Methode"
short-title: add()
slug: Web/API/CustomStateSet/add
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Web Components")}}

Die **`add`**-Methode der [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)-Schnittstelle fügt dem `CustomStateSet` einen Wert hinzu, der einen benutzerdefinierten Zustand darstellt.

Benutzerdefinierte Elemente mit einem bestimmten Zustand können mit der {{cssxref(":state()")}}-Pseudoklasse ausgewählt werden, indem der gewünschte Zustand als Argument angegeben wird.

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

Die folgende Funktion fügt den Zustand `checked` zu einem `CustomStateSet` hinzu.

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
