---
title: "HTMLMediaElement: currentSrc Eigenschaft"
short-title: currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.currentSrc`** Eigenschaft enthält die absolute URL der ausgewählten Medienressource. Dies kann beispielsweise der Fall sein, wenn der Webserver eine Mediendatei basierend auf der Auflösung des Displays des Benutzers auswählt. Der Wert ist ein leerer String, wenn die `networkState`-Eigenschaft `EMPTY` ist.

## Wert

Ein String, der die absolute URL der ausgewählten Medienquelle enthält; dieser kann ein leerer String sein, wenn `networkState` `EMPTY` ist; andernfalls wird es eine der Ressourcen sein, die durch das innerhalb des Medienelements enthaltene {{domxref("HTMLSourceElement")}} aufgelistet sind, oder der Wert von src, wenn kein {{HTMLElement("source")}}-Element bereitgestellt wird.

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

- {{domxref("HTMLMediaElement")}}: Schnittstelle zur Definition der `HTMLMediaElement.currentSrc` Eigenschaft
