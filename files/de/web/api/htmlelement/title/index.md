---
title: "HTMLElement: title-Eigenschaft"
short-title: title
slug: Web/API/HTMLElement/title
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.title`**-Eigenschaft
repräsentiert den Titel des Elements: den Text, der normalerweise in einem "Tooltip"-Popup angezeigt wird,
wenn sich die Maus über dem Knoten befindet.

## Wert

Ein String.

## Beispiele

```js
const link = document.createElement("a");
link.innerText = "grapes";
link.href = "https://en.wikipedia.org/wiki/Grape";
link.title = "Wikipedia page on grapes";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML [**title**](/de/docs/Web/HTML/Reference/Global_attributes/title)
  Globale Attribut.
