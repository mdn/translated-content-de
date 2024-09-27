---
title: "Element: firstElementChild Eigenschaft"
short-title: firstElementChild
slug: Web/API/Element/firstElementChild
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Element.firstElementChild`** gibt das erste Kind-`Element` eines Elements zurück, oder `null`, wenn keine Kindelemente vorhanden sind.

`Element.firstElementChild` umfasst nur Elemente. Um alle untergeordneten Knoten zu erhalten, einschließlich Nicht-Element-Knoten wie Text- und Kommentarknoten, verwenden Sie [`Node.firstChild`](/de/docs/Web/API/Node/firstChild).

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
  console.log(list.firstElementChild.textContent);
  // logs "First (1)"
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling)
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild)
