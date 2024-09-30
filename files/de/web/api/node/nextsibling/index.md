---
title: "Node: nextSibling-Eigenschaft"
short-title: nextSibling
slug: Web/API/Node/nextSibling
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die schreibgeschützte **`nextSibling`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces
gibt den Knoten zurück, der unmittelbar auf den angegebenen Knoten im
[`childNodes`](/de/docs/Web/API/Node/childNodes) des Elternteils folgt, oder gibt `null` zurück,
wenn der angegebene Knoten das letzte Kind im Elternelement ist.

> [!NOTE]
> Browser fügen [`Text`](/de/docs/Web/API/Text)-Knoten in ein Dokument ein, um Leerzeichen im Quellcode darzustellen.
> Daher kann ein Knoten, der beispielsweise mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
> oder [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) abgerufen wird,
> auf einen Leerzeichen-Textknoten verweisen, anstatt auf das eigentliche Element, das der Autor
> abrufen wollte.
>
> Der Artikel [Whitespace in the DOM](/de/docs/Web/API/Document_Object_Model/Whitespace)
> enthält weitere Informationen zu diesem Verhalten.
>
> Sie können [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) verwenden, um das nächste Element
> zu erhalten und dabei jegliche Leerzeichenknoten, zwischen den Elementen liegende Textknoten oder Kommentare zu überspringen.
>
> Um in umgekehrter Richtung durch die Liste der Kindknoten zu navigieren, verwenden Sie [Node.previousSibling](/de/docs/Web/API/Node/previousSibling).

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das nächste Geschwisterknoten des aktuellen Knotens darstellt,
oder `null`, wenn kein Knoten vorhanden ist.

## Beispiel

```html
<div id="div-1">Here is div-1</div>
<div id="div-2">Here is div-2</div>
<br />
<output><em>Not calculated.</em></output>
```

```js
let el = document.getElementById("div-1").nextSibling;
let i = 1;

let result = "Siblings of div-1:\n";

while (el) {
  result += `${i}. ${el.nodeName}\n`;
  el = el.nextSibling;
  i++;
}

const output = document.querySelector("output");
output.innerText = result;
```

{{ EmbedLiveSample("Example", "100%", 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling)
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling)
