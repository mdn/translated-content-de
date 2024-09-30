---
title: "Element: lastElementChild-Eigenschaft"
short-title: lastElementChild
slug: Web/API/Element/lastElementChild
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

Die schreibgeschützte **`Element.lastElementChild`**-Eigenschaft gibt das letzte Kind-`Element` eines Elements zurück oder `null`, wenn es keine Kindelemente gibt.

`Element.lastElementChild` umfasst nur Elemente. Um alle Knoten, einschließlich nicht-elementarer Knoten wie Text- und Kommentarknoten, zu erhalten, verwenden Sie [`Node.lastChild`](/de/docs/Web/API/Node/lastChild).

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt oder `null`.

## Beispiele

```html
<ul id="list">
  <li>First (1)</li>
  <li>Second (2)</li>
  <li>Third (3)</li>
</ul>

<script>
  const list = document.getElementById("list");
  console.log(list.lastElementChild.textContent);
  // logs "Third (3)"
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling)
- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild)
