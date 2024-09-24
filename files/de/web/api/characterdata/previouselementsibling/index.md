---
title: "CharacterData: previousElementSibling-Eigenschaft"
short-title: previousElementSibling
slug: Web/API/CharacterData/previousElementSibling
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`previousElementSibling`** der {{domxref("CharacterData")}}-Schnittstelle gibt das erste {{domxref("Element")}} vor dem aktuellen Knoten in der Kindlistereihe seines Elternteils zurück, oder `null`, wenn kein solches vorhanden ist.

## Wert

Ein {{domxref("Element")}}-Objekt oder `null`, wenn kein Geschwisterelement gefunden wurde.

## Beispiel

```html
<div id="div-01">Here is div-01</div>
TEXT
<div id="div-02">Here is div-02</div>
SOME TEXT
<div id="div-03">Here is div-03</div>
<pre>Result</pre>
```

```js
// Initialisieren Sie den Knoten auf den Textknoten mit `SOME TEXT`
let node = document.getElementById("div-02").nextSibling;

let result = "Vorherige Elemente-Geschwister von SOME TEXT:\n";

while (node) {
  result += `${node.nodeName}\n`;
  node = node.previousElementSibling;
}

document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("Example", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CharacterData.nextElementSibling")}}
