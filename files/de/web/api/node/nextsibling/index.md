---
title: "Node: nextSibling-Eigenschaft"
short-title: nextSibling
slug: Web/API/Node/nextSibling
l10n:
  sourceCommit: d4a50b63d9afd826e61eb8833e8e6337b5059e8a
---

{{APIRef("DOM")}}

Die schreibgeschützte **`nextSibling`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node) Schnittstelle
gibt den Knoten zurück, der im Elternelement direkt auf den angegebenen Knoten
in deren [`childNodes`](/de/docs/Web/API/Node/childNodes) folgt, oder gibt `null` zurück,
wenn der angegebene Knoten das letzte Kind im Elternelement ist.

> [!NOTE]
> Browser fügen [`Text`](/de/docs/Web/API/Text)-Knoten in ein Dokument ein, um Leerzeichen im Quelltext darzustellen.
> Daher kann ein Knoten, der z.B. mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
> oder [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) erhalten wird,
> einem Leerzeichen-Textknoten entsprechen anstatt dem tatsächlich vom Autor beabsichtigten Element.
>
> Der Abschnitt [Arbeiten mit Leerzeichen im DOM](/de/docs/Web/CSS/CSS_text/Whitespace#working_with_whitespace_in_the_dom)
> enthält weitere Informationen zu diesem Verhalten.
>
> Sie können [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) verwenden, um das nächste Element
> zu erhalten, wobei Leerzeichenknoten, andere zwischen Elementen stehende Texte oder Kommentare übersprungen werden.
>
> Um in der Liste der Kindknoten in die entgegengesetzte Richtung zu navigieren, verwenden Sie [Node.previousSibling](/de/docs/Web/API/Node/previousSibling).

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das nächste Geschwisterchen des aktuellen Knotens repräsentiert,
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
