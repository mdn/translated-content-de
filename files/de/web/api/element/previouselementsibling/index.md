---
title: "Element: previousElementSibling Eigenschaft"
short-title: previousElementSibling
slug: Web/API/Element/previousElementSibling
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{APIRef("DOM")}}

Die **`Element.previousElementSibling`**-Eigenschaft (nur lesbar) gibt das [`Element`](/de/docs/Web/API/Element) zurück, das unmittelbar vor dem angegebenen Element in der Kindliste des übergeordneten Elements steht, oder `null`, wenn das angegebene Element das erste in der Liste ist.

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
    document.write("<li>" + el.nodeName + "</li>");
    el = el.previousElementSibling;
  }
  document.write("</ol>");
</script>
```

Dieses Beispiel gibt beim Laden der Seite folgendes aus:

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
