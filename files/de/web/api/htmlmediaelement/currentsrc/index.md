---
title: "HTMLMediaElement: currentSrc-Eigenschaft"
short-title: currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.currentSrc`**-Eigenschaft enthält die absolute URL der ausgewählten Medienressource. Dies könnte beispielsweise der Fall sein, wenn der Webserver eine Mediendatei basierend auf der Auflösung des Benutzerbildschirms auswählt. Der Wert ist ein leerer String, wenn die Eigenschaft `networkState` `EMPTY` ist.

## Wert

Ein String, der die absolute URL der ausgewählten Medienquelle enthält; dies kann ein leerer String sein, wenn `networkState` `EMPTY` ist; andernfalls wird es eine der von dem innerhalb des Medienelements enthaltenen [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement) gelisteten Ressourcen sein, oder der Wert von src, wenn kein {{HTMLElement("source")}}-Element bereitgestellt wird.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.currentSrc`-Eigenschaft
