---
title: "HTMLSelectElement: size-Eigenschaft"
short-title: size
slug: Web/API/HTMLSelectElement/size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`size`**-Eigenschaft der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Schnittstelle gibt die Anzahl der Optionen oder Zeilen an, die gleichzeitig sichtbar sein sollten. Sie spiegelt das `{{htmlelement("select")}}`-Element und dessen [`size`](/de/docs/Web/HTML/Reference/Elements/select#size)-Attribut wider. Wird sie weggelassen, ist der Wert `0`.

> [!NOTE]
> Während standardmäßig ein `<select>` einzeilig angezeigt wird, es sei denn, [`multiple`](/de/docs/Web/API/HTMLSelectElement/multiple) ist wahr, in diesem Fall werden vier Zeilen angezeigt, ist der Standardwert für die `size`-Eigenschaft `0`.

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
- {{HTMLElement("option")}}
- [`HTMLSelectElement.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions)
- [`HTMLSelectElement.length`](/de/docs/Web/API/HTMLSelectElement/length)
