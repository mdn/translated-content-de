---
title: "Node: nextSibling-Eigenschaft"
short-title: nextSibling
slug: Web/API/Node/nextSibling
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

Die schreibgeschützte **`nextSibling`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces
gibt den Knoten zurück, der in der `childNodes`-Liste des übergeordneten Elements unmittelbar
nach dem angegebenen folgt, oder gibt `null` zurück, wenn der angegebene Knoten das letzte Kind im übergeordneten Element ist.

> [!NOTE]
> Browser fügen [`Text`](/de/docs/Web/API/Text)-Knoten in ein Dokument ein, um Leerzeichen im Quellcode darzustellen.
> Daher kann ein Knoten, der beispielsweise mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
> oder [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) erhalten wird,
> auf einen Leerzeichen-Textknoten verweisen, anstatt auf das eigentliche Element, das der Autor
> erhalten wollte.
>
> Der Abschnitt [Umgang mit Leerzeichen im DOM](/de/docs/Web/CSS/Guides/Text/Whitespace#working_with_whitespace_in_the_dom)
> enthält weitere Informationen über dieses Verhalten.
>
> Sie können [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) verwenden, um das nächste Element zu erhalten,
> das Leerraumknoten, anderen zwischen Elementen stehenden Text oder Kommentare überspringt.
>
> Um die entgegengesetzte Richtung durch die Liste der Kindknoten zu navigieren, verwenden Sie [Node.previousSibling](/de/docs/Web/API/Node/previousSibling).

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das nächste Geschwister des aktuellen Knotens darstellt,
oder `null`, wenn es keine gibt.

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
