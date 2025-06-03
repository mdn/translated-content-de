---
title: "Element: nextElementSibling-Eigenschaft"
short-title: nextElementSibling
slug: Web/API/Element/nextElementSibling
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Die schreibgeschützte **`Element.nextElementSibling`**-Eigenschaft gibt das Element zurück, das unmittelbar auf das angegebene im [`children`](/de/docs/Web/API/Element/children)-Listeneintrag des übergeordneten Elements folgt, oder `null`, wenn das angegebene Element das letzte in der Liste ist.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt oder `null`.

## Beispiele

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
```

```js
let el = document.getElementById("div-01").nextElementSibling;
console.log("Siblings of div-01:");
while (el) {
  console.log(el.nodeName);
  el = el.nextElementSibling;
}
```

Dieses Beispiel gibt beim Laden Folgendes in die Konsole aus:

```plain
Siblings of div-01:
DIV
SCRIPT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling)
