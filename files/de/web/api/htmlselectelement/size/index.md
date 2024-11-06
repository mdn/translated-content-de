---
title: "HTMLSelectElement: Eigenschaft size"
short-title: size
slug: Web/API/HTMLSelectElement/size
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{ APIRef("HTML DOM") }}

Die **`size`** Eigenschaft der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Schnittstelle gibt die Anzahl der Optionen oder Zeilen an, die zu einem Zeitpunkt sichtbar sein sollen. Sie spiegelt das [`size`](/de/docs/Web/HTML/Element/select#size) Attribut des {{htmlelement("select")}}-Elements wider. Wenn es weggelassen wird, ist der Wert `0`.

> [!NOTE]
> Standardmäßig zeigt ein `<select>` eine einzelne Zeile an, es sei denn, [`multiple`](/de/docs/Web/API/HTMLSelectElement/multiple) ist wahr, in diesem Fall werden vier Zeilen angezeigt. Der Standardwert für die `size`-Eigenschaft ist `0`.

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
