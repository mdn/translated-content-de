---
title: "CSSStyleDeclaration: item()-Methode"
short-title: item()
slug: Web/API/CSSStyleDeclaration/item
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die Schnittstellenmethode `CSSStyleDeclaration.item()` gibt einen CSS-Eigenschaftsnamen von einer [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) anhand des Indexes zurück.

Diese Methode löst keine Ausnahmen aus, solange Sie Argumente bereitstellen; der leere String wird zurückgegeben, wenn der Index außerhalb des Bereichs liegt und ein {{jsxref("TypeError")}} wird ausgelöst, wenn kein Argument bereitgestellt wird.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Der Index des Knotens, der abgerufen werden soll. Der Index beginnt bei null.

### Rückgabewert

Ein String, der der Name der CSS-Eigenschaft an dem angegebenen Index ist.

JavaScript hat eine spezielle, einfachere Syntax, um ein Element aus einer NodeList anhand des Indexes zu erhalten:

```js
const propertyName = style[index];
```

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn kein Argument bereitgestellt wird.

## Beispiele

```js
const style = document.getElementById("div1").style;
const propertyName = style.item(1); // or style[1] - returns the second style listed
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
