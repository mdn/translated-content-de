---
title: "InkPresenter: presentationArea-Eigenschaft"
short-title: presentationArea
slug: Web/API/InkPresenter/presentationArea
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die schreibgeschützte **`presentationArea`**-Eigenschaft der {{domxref("InkPresenter")}}-Schnittstelle gibt das {{domxref("Element")}} zurück, in dem die Darstellung der Tintenstriche eingeschränkt ist.

Wenn der vorhergehende Aufruf der Methode {{domxref("Ink.requestPresenter", "Ink.requestPresenter()")}} eine spezifische Definition des `presentationArea`-Elements enthielt, wird dieses Element zurückgegeben. Andernfalls wird der Standardwert zurückgegeben, der dem umgebenden Viewport entspricht.

Dieser Bereich wird immer in den Client-Koordinaten des Randbereichs des Elements berechnet, sodass das Verschieben oder Scrollen des Elements keine Neuberechnung seitens des Entwicklers erfordert.

### Wert

Ein {{domxref("Element")}}.

## Beispiel

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.presentationArea);

  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Eingabe durch Tinte im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
