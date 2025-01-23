---
title: "Element: previousElementSibling-Eigenschaft"
short-title: previousElementSibling
slug: Web/API/Element/previousElementSibling
l10n:
  sourceCommit: 9d9ec232867bda10faf523bf567b2b890c6b985b
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.previousElementSibling`** gibt das [`Element`](/de/docs/Web/API/Element) direkt vor dem angegebenen im [`children`](/de/docs/Web/API/Element/children)-Listenelement des übergeordneten Elements zurück oder `null`, wenn das angegebene Element das erste in der Liste ist.

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
