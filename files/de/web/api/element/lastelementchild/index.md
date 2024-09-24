---
title: "Element: lastElementChild Eigenschaft"
short-title: lastElementChild
slug: Web/API/Element/lastElementChild
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

Die **`Element.lastElementChild`**-Eigenschaft ist schreibgeschützt und gibt das letzte Kind-{{domxref("Element")}} eines Elements zurück oder `null`, wenn keine Kindelemente vorhanden sind.

`Element.lastElementChild` umfasst nur Elementknoten. Um alle Kindknoten einzuschließen, einschließlich Nicht-Element-Knoten wie Text- und Kommentarknoten, verwenden Sie {{domxref("Node.lastChild")}}.

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
  console.log(list.lastElementChild.textContent);
  // logs "Third (3)"
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.previousElementSibling")}}
- {{domxref("Element.firstElementChild")}}
