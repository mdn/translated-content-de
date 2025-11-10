---
title: "Element: previousElementSibling-Eigenschaft"
short-title: previousElementSibling
slug: Web/API/Element/previousElementSibling
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.previousElementSibling`** gibt das [`Element`](/de/docs/Web/API/Element) unmittelbar vor dem angegebenen Element in der [`children`](/de/docs/Web/API/Element/children)-Liste des übergeordneten Elements zurück oder `null`, wenn das angegebene Element das erste in der Liste ist.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt oder `null`.

## Beispiele

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<li>This is a list item</li>
<li>This is another list item</li>
<div id="div-03">Here is div-03</div>
```

```js
let el = document.getElementById("div-03").previousElementSibling;
console.log("Siblings of div-03:");
while (el) {
  console.log(el.nodeName);
  el = el.previousElementSibling;
}
```

Dieses Beispiel gibt beim Laden der Seite Folgendes aus:

```plain
Siblings of div-03:
LI
LI
DIV
DIV
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling)
