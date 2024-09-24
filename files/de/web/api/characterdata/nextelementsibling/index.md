---
title: "CharacterData: nextElementSibling-Eigenschaft"
short-title: nextElementSibling
slug: Web/API/CharacterData/nextElementSibling
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

Die schreibgeschützte **`nextElementSibling`**-Eigenschaft der {{domxref("CharacterData")}}-Schnittstelle gibt das erste {{domxref("Element")}}-Knoten zurück, das dem angegebenen Knoten in der Kindliste seines Elternteils folgt, oder `null`, wenn das angegebene Element das letzte in der Liste ist.

## Wert

Ein {{domxref("Element")}}-Objekt oder `null`, wenn kein Geschwisterknoten gefunden wurde.

## Beispiel

```html
TEXT
<div id="div-01">Hier ist div-01</div>
TEXT2
<div id="div-02">Hier ist div-02</div>
<pre>Hier ist der Ergebnisbereich</pre>
```

```js
// Zunächst das Knoten auf den Textknoten mit `TEXT` setzen
let node = document.getElementById("div-01").previousSibling;

let result = "Nächste Element-Geschwister von TEXT:\n";

while (node) {
  result += `${node.nodeName}\n`;
  node = node.nextElementSibling; // Der erste Knoten ist ein CharacterData, die anderen Element-Objekte
}

document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("Example", "100%", "230")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CharacterData.previousElementSibling")}}
