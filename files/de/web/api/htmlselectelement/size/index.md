---
title: "HTMLSelectElement: size Eigenschaft"
short-title: size
slug: Web/API/HTMLSelectElement/size
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{ APIRef("HTML DOM") }}

Die **`size`** Eigenschaft des {{DOMxRef("HTMLSelectElement")}}-Interfaces gibt die Anzahl der Optionen oder Zeilen an, die gleichzeitig sichtbar sein sollten. Sie spiegelt das [`size`](/de/docs/Web/HTML/Element/select#size) Attribut des {{htmlelement("select")}} Elements wider. Wenn es weggelassen wird, ist der Wert `0`.

> [!NOTE]
> Während standardmäßig ein `<select>` nur eine einzelne Zeile anzeigt, es sei denn, {{DOMxRef("HTMLSelectElement.multiple", "multiple")}} ist wahr, in welchem Fall vier Zeilen angezeigt werden, ist der Standardwert für die `size` Eigenschaft `0`.

## Wert

Eine Zahl.

## Beispiele

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.size);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("select")}}
- {{HTMLElement("options")}}
- {{DOMXref("HTMLSelectElement.selectedOptions")}}
- {{DOMXref("HTMLSelectElement.length")}}
