---
title: "HTMLMediaElement: currentSrc-Eigenschaft"
short-title: currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.currentSrc`**-Eigenschaft enthält die absolute URL der ausgewählten Medienressource. Dies könnte beispielsweise passieren, wenn der Webserver eine Mediendatei basierend auf der Auflösung des Displays des Nutzers auswählt. Der Wert ist ein leerer String, wenn die `networkState`-Eigenschaft `EMPTY` ist.

## Wert

Ein String, der die absolute URL der ausgewählten Medienquelle enthält; dies kann ein leerer String sein, wenn `networkState` `EMPTY` ist; andernfalls wird es eine der Ressourcen sein, die durch das [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement) aufgelistet werden, das im Medien-Element enthalten ist, oder der Wert von src, wenn kein {{HTMLElement("source")}}-Element angegeben ist.

## Beispiele

```js
const obj = document.createElement("video");
console.log(obj.currentSrc); // ""
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die `HTMLMediaElement.currentSrc`-Eigenschaft zu definieren.
