---
title: "Node: nodeValue-Eigenschaft"
short-title: nodeValue
slug: Web/API/Node/nodeValue
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`nodeValue`**-Eigenschaft des {{domxref("Node")}}-Interfaces gibt den Wert des aktuellen Knotens zurück oder setzt ihn.

## Wert

Ein String, der den Wert des aktuellen Knotens enthält, falls vorhanden. Für das Dokument selbst gibt `nodeValue` `null` zurück. Für Text-, Kommentar- und CDATA-Knoten gibt `nodeValue` den Inhalt des Knotens zurück. Für Attributknoten wird der Wert des Attributs zurückgegeben.

Die folgende Tabelle zeigt die Rückgabewerte für verschiedene Typen von Knoten.

| Knoten                               | Wert von nodeValue                  |
| ------------------------------------ | ----------------------------------- |
| {{domxref("CDATASection")}}          | Inhalt der CDATA-Sequenz            |
| {{domxref("Comment")}}               | Inhalt des Kommentars               |
| {{domxref("Document")}}              | `null`                              |
| {{domxref("DocumentFragment")}}      | `null`                              |
| {{domxref("DocumentType")}}          | `null`                              |
| {{domxref("Element")}}               | `null`                              |
| {{domxref("NamedNodeMap")}}          | `null`                              |
| {{domxref("ProcessingInstruction")}} | Gesamter Inhalt ohne das Ziel       |
| {{domxref("Text")}}                  | Inhalt des Textknotens              |

> [!NOTE]
> Wenn `nodeValue` als `null` definiert ist, hat das Setzen keinen Effekt.

## Beispiel

```html
<div id="d1">Hello world</div>
<!-- Beispiel eines Kommentars -->
<output id="result">Noch nicht berechnet.</output>
```

und das folgende Script:

```js
let node = document.querySelector("body").firstChild;
let result = "Knotennamen sind:\n";
while (node) {
  result += `Wert von ${node.nodeName}: ${node.nodeValue}\n`;
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
