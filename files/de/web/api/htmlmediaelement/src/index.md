---
title: "HTMLMediaElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLMediaElement/src
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.src`**-Eigenschaft spiegelt den Wert des `src`-Attributs des HTML-Medienelements wider, das die URL einer Medienressource angibt, die im Element verwendet werden soll.

> [!NOTE]
> Der beste Weg, um die URL der Medienressource zu ermitteln, die derzeit in diesem Element aktiv verwendet wird, besteht darin, den Wert des [`currentSrc`](/de/docs/Web/API/HTMLMediaElement/currentSrc)-Attributs zu betrachten. Dieses berücksichtigt auch die Auswahl einer besten oder bevorzugten Medienressource aus einer Liste, die in einem [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement) bereitgestellt wird (welches ein {{HTMLElement("source")}}-Element repräsentiert).

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die `HTMLMediaElement.src`-Eigenschaft zu definieren
