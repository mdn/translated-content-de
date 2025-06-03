---
title: "Element: lastElementChild-Eigenschaft"
short-title: lastElementChild
slug: Web/API/Element/lastElementChild
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Element.lastElementChild`** gibt das letzte Kind-`Element` eines Elements zurück oder `null`, wenn keine Kind-Elemente vorhanden sind.

`Element.lastElementChild` umfasst nur Elemente-Knoten. Um alle Kindknoten zu erhalten, einschließlich Nicht-Element-Knoten wie Text- und Kommentar-Knoten, verwenden Sie [`Node.lastChild`](/de/docs/Web/API/Node/lastChild).

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
console.log(list.lastElementChild.textContent);
// logs "Third (3)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling)
- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild)
