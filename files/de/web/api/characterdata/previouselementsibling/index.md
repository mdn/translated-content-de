---
title: "CharacterData: previousElementSibling Eigenschaft"
short-title: previousElementSibling
slug: Web/API/CharacterData/previousElementSibling
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("DOM")}}

Die schreibgeschützte **`previousElementSibling`**-Eigenschaft der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle
gibt das erste [`Element`](/de/docs/Web/API/Element) vor dem aktuellen Knoten in der Kindliste des Elternteils zurück, oder `null`, wenn keines vorhanden ist.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, oder `null`, wenn kein Geschwisterelement gefunden wurde.

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
// Initially set node to the Text node with `SOME TEXT`
let node = document.getElementById("div-02").nextSibling;

let result = "Previous element siblings of SOME TEXT:\n";

while (node) {
  result += `${node.nodeName}\n`;
  node = node.previousElementSibling;
}

document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("Beispiel", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.nextElementSibling`](/de/docs/Web/API/CharacterData/nextElementSibling)
