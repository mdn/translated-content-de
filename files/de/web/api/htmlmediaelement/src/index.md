---
title: "HTMLMediaElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLMediaElement/src
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.src`**-Eigenschaft spiegelt den Wert des `src`-Attributs eines HTML-Medienelements wider, das die URL einer Medienressource angibt, die im Element verwendet werden soll.

> [!NOTE]
> Der beste Weg, um die URL der Medienressource zu erfahren, die derzeit in diesem Element aktiv verwendet wird, besteht darin, den Wert des {{domxref("HTMLMediaElement.currentSrc", "currentSrc")}}-Attributs zu betrachten. Dieses Attribut berücksichtigt auch die Auswahl einer besten oder bevorzugten Medienressource aus einer Liste, die in einem {{domxref("HTMLSourceElement")}} (das ein {{HTMLElement("source")}}-Element repräsentiert) bereitgestellt wird.

## Wert

Ein String, der die URL einer Medienressource enthält, die im Element verwendet werden soll; diese Eigenschaft spiegelt den Wert des `src`-Attributs des HTML-Elements wider.

## Beispiele

```js
const obj = document.createElement("video");
console.log(obj.src); // ""
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement")}}: Schnittstelle zur Definition der `HTMLMediaElement.src`-Eigenschaft
