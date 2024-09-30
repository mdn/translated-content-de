---
title: "HTMLSelectElement: size Eigenschaft"
short-title: size
slug: Web/API/HTMLSelectElement/size
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{ APIRef("HTML DOM") }}

Die **`size`**-Eigenschaft des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces gibt die Anzahl der Optionen oder Zeilen an, die zu einem bestimmten Zeitpunkt sichtbar sein sollen. Sie spiegelt das [`size`](/de/docs/Web/HTML/Element/select#size)-Attribut des {{htmlelement("select")}}-Elements wider. Wenn es weggelassen wird, beträgt der Wert `0`.

> [!NOTE]
> Während standardmäßig ein `<select>` nur eine Zeile anzeigt, es sei denn, [`multiple`](/de/docs/Web/API/HTMLSelectElement/multiple) ist true (in diesem Fall werden vier Zeilen angezeigt), ist der Standardwert für die `size`-Eigenschaft `0`.

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
- [`HTMLSelectElement.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions)
- [`HTMLSelectElement.length`](/de/docs/Web/API/HTMLSelectElement/length)
