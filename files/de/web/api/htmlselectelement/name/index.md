---
title: "HTMLSelectElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLSelectElement/name
l10n:
  sourceCommit: d064784c78ec30c87ec3c3d9681b147999fd782f
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft der {{domxref("HTMLSelectElement")}}-Schnittstelle gibt den Namen des {{HTMLElement("select")}}-Elements an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Element/select#name)-Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements darstellt.

## Beispiel

```js
const selectElement = document.querySelector("#planets");
console.log(`Element's name: ${selectElement.name}`);
selectElement.name = "galaxies"; // setzt oder aktualisiert den Namen des Elements
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLSelectElement.value")}}
- {{domxref("HTMLSelectElement.selectedIndex")}}
- {{domxref("HTMLSelectElement.options")}}
