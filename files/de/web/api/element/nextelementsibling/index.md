---
title: "Element: nextElementSibling-Eigenschaft"
short-title: nextElementSibling
slug: Web/API/Element/nextElementSibling
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{APIRef("DOM")}}

Die **`Element.nextElementSibling`** schreibgeschützte Eigenschaft gibt das Element zurück, das dem angegebenen Element in der Kinderelementliste des übergeordneten Elements unmittelbar folgt, oder `null`, wenn das angegebene Element das letzte Element in der Liste ist.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt oder `null`.

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

Dieses Beispiel gibt beim Laden folgendes in der Konsole aus:

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

- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling)
