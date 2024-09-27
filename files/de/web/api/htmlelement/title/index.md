---
title: "HTMLElement: title-Eigenschaft"
short-title: title
slug: Web/API/HTMLElement/title
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.title`**-Eigenschaft
repräsentiert den Titel des Elements: den Text, der normalerweise in einem 'Tooltip'-Popup angezeigt wird, wenn die Maus über dem Knoten schwebt.

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

- Das HTML [**title**](/de/docs/Web/HTML/Global_attributes/title)
  globale Attribut.
