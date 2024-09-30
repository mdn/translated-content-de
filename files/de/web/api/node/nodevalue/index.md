---
title: "Node: nodeValue-Eigenschaft"
short-title: nodeValue
slug: Web/API/Node/nodeValue
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`nodeValue`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt den Wert des aktuellen Knotens zurück oder legt ihn fest.

## Wert

Ein String, der den Wert des aktuellen Knotens enthält, falls vorhanden.
Für das Dokument selbst gibt `nodeValue` `null` zurück.
Für Text-, Kommentar- und CDATA-Knoten gibt `nodeValue` den Inhalt des Knotens zurück.
Für Attributknoten wird der Wert des Attributs zurückgegeben.

Die folgende Tabelle zeigt die Rückgabewerte für verschiedene Knotentypen.

| Knoten                               | Wert von nodeValue                  |
| ------------------------------------ | ----------------------------------- |
| [`CDATASection`](/de/docs/Web/API/CDATASection)          | Inhalt der CDATA-Sektion            |
| [`Comment`](/de/docs/Web/API/Comment)               | Inhalt des Kommentars               |
| [`Document`](/de/docs/Web/API/Document)              | `null`                              |
| [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)      | `null`                              |
| [`DocumentType`](/de/docs/Web/API/DocumentType)          | `null`                              |
| [`Element`](/de/docs/Web/API/Element)               | `null`                              |
| [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)          | `null`                              |
| [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) | Gesamter Inhalt ohne das Ziel       |
| [`Text`](/de/docs/Web/API/Text)                  | Inhalt des Textknotens              |

> [!NOTE]
> Wenn `nodeValue` als `null` definiert ist, hat das Setzen keinen Effekt.

## Beispiel

```html
<div id="d1">Hello world</div>
<!-- Example of comment -->
<output id="result">Not calculated yet.</output>
```

und das folgende Skript:

```js
let node = document.querySelector("body").firstChild;
let result = "Node names are:\n";
while (node) {
  result += `Value of ${node.nodeName}: ${node.nodeValue}\n`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerText = result;
```

{{ EmbedLiveSample("Example", "100%", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
