---
title: "HTMLMediaElement: src Eigenschaft"
short-title: src
slug: Web/API/HTMLMediaElement/src
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.src`**-Eigenschaft spiegelt den Wert des `src`-Attributs des HTML-Medienelements wider, welches die URL einer zu verwendenden Medienressource im Element angibt.

> [!NOTE]
> Der beste Weg, die URL der aktuell in diesem Element verwendeten Medienressource zu erfahren, ist der Blick auf den Wert des [`currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc) Attributs. Dieses berücksichtigt auch die Auswahl einer besten oder bevorzugten Medienressource aus einer Liste, die in einem [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement) angegeben wird (welches ein {{HTMLElement("source")}}-Element repräsentiert).

## Wert

Ein String, der die URL einer im Element zu verwendenden Medienressource enthält; diese Eigenschaft spiegelt den Wert des `src`-Attributs des HTML-Elements wider.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die `HTMLMediaElement.src`-Eigenschaft zu definieren
