---
title: "Element: Eigenschaft previousElementSibling"
short-title: previousElementSibling
slug: Web/API/Element/previousElementSibling
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("DOM")}}

Die **`Element.previousElementSibling`** Leseeigenschaft gibt das [`Element`](/de/docs/Web/API/Element) unmittelbar vor dem angegebenen Element in der [`children`](/de/docs/Web/API/Element/children)-Liste seines übergeordneten Elements zurück oder `null`, wenn das angegebene Element das erste in der Liste ist.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt oder `null`.

## Beispiele

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<li>This is a list item</li>
<li>This is another list item</li>
<div id="div-03">Here is div-03</div>

<script>
  let el = document.getElementById("div-03").previousElementSibling;
  document.write("<p>Siblings of div-03</p><ol>");
  while (el) {
    document.write(`<li>${el.nodeName}</li>`);
    el = el.previousElementSibling;
  }
  document.write("</ol>");
</script>
```

Dieses Beispiel gibt beim Laden der Seite Folgendes aus:

```plain
Siblings of div-03

   1. LI
   2. LI
   3. DIV
   4. DIV
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling)
