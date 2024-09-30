---
title: "CharacterData: Eigenschaft nextElementSibling"
short-title: nextElementSibling
slug: Web/API/CharacterData/nextElementSibling
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

Die schreibgeschützte **`nextElementSibling`**-Eigenschaft des [`CharacterData`](/de/docs/Web/API/CharacterData)-Interfaces gibt das erste [`Element`](/de/docs/Web/API/Element)-Knoten zurück, das dem angegebenen in der Kindliste seines Elternteils folgt, oder `null`, wenn das angegebene Element das letzte in der Liste ist.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt oder `null`, wenn kein Geschwisterknoten gefunden wurde.

## Beispiel

```html
TEXT
<div id="div-01">Here is div-01</div>
TEXT2
<div id="div-02">Here is div-02</div>
<pre>Here is the result area</pre>
```

```js
// Initially, set node to the Text node with `TEXT`
let node = document.getElementById("div-01").previousSibling;

let result = "Next element siblings of TEXT:\n";

while (node) {
  result += `${node.nodeName}\n`;
  node = node.nextElementSibling; // The first node is a CharacterData, the others Element objects
}

document.querySelector("pre").textContent = result;
```

{{EmbedLiveSample("Example", "100%", "230")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.previousElementSibling`](/de/docs/Web/API/CharacterData/previousElementSibling)
