---
title: "Element: firstElementChild-Eigenschaft"
short-title: firstElementChild
slug: Web/API/Element/firstElementChild
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Element.firstElementChild`** gibt das erste Kindelement eines Elements zurück oder `null`, wenn keine Kindelemente vorhanden sind.

`Element.firstElementChild` umfasst nur Elementknoten. Um alle Kindknoten zu erhalten, einschließlich Nicht-Element-Knoten wie Text- und Kommentar-Knoten, verwenden Sie [`Node.firstChild`](/de/docs/Web/API/Node/firstChild).

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt oder `null`.

## Beispiele

```html
<ul id="list">
  <li>First (1)</li>
  <li>Second (2)</li>
  <li>Third (3)</li>
</ul>
```

```js
const list = document.getElementById("list");
console.log(list.firstElementChild.textContent);
// logs "First (1)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling)
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild)
