---
title: "Element: firstElementChild-Eigenschaft"
short-title: firstElementChild
slug: Web/API/Element/firstElementChild
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

Die **`Element.firstElementChild`** schreibgeschützte Eigenschaft gibt das erste Kind-{{domxref("Element")}} eines Elements zurück oder `null`, wenn keine Kindelemente vorhanden sind.

`Element.firstElementChild` enthält nur Knoten, die Elemente sind. Um alle Kindknoten zu erhalten, einschließlich Nicht-Element-Knoten wie Text- und Kommentarknoten, verwenden Sie {{domxref("Node.firstChild")}}.

## Wert

Ein {{domxref("Element")}}-Objekt oder `null`.

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

- {{domxref("Element.nextElementSibling")}}
- {{domxref("Element.lastElementChild")}}
