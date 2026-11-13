---
title: "HTMLMediaElement: currentSrc-Eigenschaft"
short-title: currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`currentSrc`** der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) enthält die absolute URL der ausgewählten Medienressource. Eine Auswahl kann beispielsweise erfolgen, wenn der Webserver eine Mediendatei anhand der Bildschirmauflösung des Benutzers auswählt. Der Wert ist eine leere Zeichenfolge, wenn die Eigenschaft `networkState` den Wert `EMPTY` hat.

## Wert

Eine Zeichenfolge mit der absoluten URL der ausgewählten Medienquelle. Sie kann leer sein, wenn `networkState` den Wert `EMPTY` hat. Andernfalls entspricht sie entweder einer der Ressourcen, die durch ein im Medienelement enthaltenes [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement) angegeben werden, oder dem Wert von [`src`](/de/docs/Web/API/HTMLMediaElement/src), wenn kein {{HTMLElement("source")}}-Element vorhanden ist.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, in der die Eigenschaft `HTMLMediaElement.currentSrc` definiert ist
