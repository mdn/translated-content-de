---
title: "Element: lastElementChild-Eigenschaft"
short-title: lastElementChild
slug: Web/API/Element/lastElementChild
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Element.lastElementChild`** gibt das letzte Kindelement eines [`Element`](/de/docs/Web/API/Element) zurück oder `null`, wenn keine Kindelemente vorhanden sind.

`Element.lastElementChild` umfasst nur Elementknoten. Um alle Kindknoten zu erhalten, einschließlich Nicht-Elementknoten wie Text- und Kommentarknoten, verwenden Sie [`Node.lastChild`](/de/docs/Web/API/Node/lastChild).

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
