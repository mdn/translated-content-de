---
title: "Element: previousElementSibling-Eigenschaft"
short-title: previousElementSibling
slug: Web/API/Element/previousElementSibling
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{APIRef("DOM")}}

Die **`Element.previousElementSibling`** schreibgeschützte Eigenschaft gibt das {{domxref("Element")}} direkt vor dem angegebenen Element in der Liste der Kindelemente seines Elternteils zurück oder `null`, wenn das angegebene Element das erste in der Liste ist.

## Wert

Ein {{domxref("Element")}}-Objekt oder `null`.

## Beispiele

```html
<div id="div-01">Hier ist div-01</div>
<div id="div-02">Hier ist div-02</div>
<li>Dies ist ein Listenelement</li>
<li>Dies ist ein weiteres Listenelement</li>
<div id="div-03">Hier ist div-03</div>

<script>
  let el = document.getElementById("div-03").previousElementSibling;
  document.write("<p>Geschwister von div-03</p><ol>");
  while (el) {
    document.write("<li>" + el.nodeName + "</li>");
    el = el.previousElementSibling;
  }
  document.write("</ol>");
</script>
```

Dieses Beispiel gibt Folgendes auf der Seite aus, wenn sie geladen wird:

```plain
Geschwister von div-03

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

- {{domxref("Element.nextElementSibling")}}
