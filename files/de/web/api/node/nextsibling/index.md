---
title: "Node: nextSibling-Eigenschaft"
short-title: nextSibling
slug: Web/API/Node/nextSibling
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die schreibgeschützte **`nextSibling`** Eigenschaft der {{domxref("Node")}}-Schnittstelle
gibt das direkt folgende Knoten im übergeordneten {{domxref("Node.childNodes","childNodes")}}-Knoten zurück oder `null`, wenn der angegebene Knoten das letzte Kind im übergeordneten Element ist.

> [!NOTE]
> Browser fügen {{domxref("Text")}}-Knoten in ein Dokument ein, um Leerzeichen im Quellmarkup darzustellen.
> Daher kann ein Knoten, der zum Beispiel mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
> oder [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) erhalten wird,
> auf einen Leerzeichentextknoten verweisen, anstatt auf das tatsächliche Element, das der Autor
> erhalten wollte.
>
> Der Artikel [Leerzeichen im DOM](/de/docs/Web/API/Document_Object_Model/Whitespace)
> enthält weitere Informationen über dieses Verhalten.
>
> Sie können {{domxref("Element.nextElementSibling")}} verwenden, um das nächste Element zu erhalten,
> wobei Leerzeicheneinträge, andere Texte zwischen Elementen oder Kommentare übersprungen werden.
>
> Um in die entgegengesetzte Richtung durch die Liste der Knoten zu navigieren, verwenden Sie [Node.previousSibling](/de/docs/Web/API/Node/previousSibling).

## Wert

Ein {{domxref("Node")}}, der das nächste Geschwister des aktuellen Knotens darstellt,
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

- {{domxref("Element.nextElementSibling")}}
- {{domxref("Node.previousSibling")}}
