---
title: "HTMLMediaElement: currentSrc-Eigenschaft"
short-title: currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
l10n:
  sourceCommit: 937f993c79bb6f3a42b0db72712aaf5f18277d3d
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.currentSrc`**-Eigenschaft enthält die
absolute URL der ausgewählten Medienressource. Dies kann beispielsweise passieren, wenn der Webserver eine Mediendatei basierend auf der Auflösung des Bildschirms des Benutzers auswählt. Der Wert
ist ein leerer String, wenn die `networkState`-Eigenschaft `EMPTY` ist.

## Wert

Ein String, der die absolute URL der ausgewählten Medienquelle enthält; dieser könnte ein leerer String sein, wenn `networkState` `EMPTY` ist; andernfalls wird es eine der Ressourcen sein, die durch das
[`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement) innerhalb des Media-Elements aufgelistet sind, oder der Wert von [`src`](/de/docs/Web/API/HTMLMediaElement/src),
wenn kein {{HTMLElement("source")}}-Element bereitgestellt wird.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die `HTMLMediaElement.currentSrc`-Eigenschaft zu definieren
