---
title: "Element: nextElementSibling-Eigenschaft"
short-title: nextElementSibling
slug: Web/API/Element/nextElementSibling
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.nextElementSibling`**
gibt das Element zurück, das direkt auf das angegebene Element in der Kinderliste des übergeordneten Elements folgt, oder `null`, wenn das angegebene Element das letzte in der Liste ist.

## Wert

Ein {{domxref("Element")}}-Objekt oder `null`.

## Beispiele

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>

<script>
  let el = document.getElementById("div-01").nextElementSibling;
  console.log("Siblings of div-01:");
  while (el) {
    console.log(el.nodeName);
    el = el.nextElementSibling;
  }
</script>
```

Dieses Beispiel gibt bei der Ausführung Folgendes in der Konsole aus:

```plain
Siblings of div-01:
DIV
SCRIPT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.previousElementSibling")}}
