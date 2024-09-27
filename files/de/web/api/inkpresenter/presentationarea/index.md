---
title: "InkPresenter: presentationArea-Eigenschaft"
short-title: presentationArea
slug: Web/API/InkPresenter/presentationArea
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`presentationArea`**-Eigenschaft der [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Schnittstelle, die nur gelesen werden kann, gibt das [`Element`](/de/docs/Web/API/Element) zurück, in dem das Rendern von Tintenstrichen beschränkt ist.

Wenn der vorhergehende Aufruf der Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) eine spezifische Definition eines `presentationArea`-Elements enthielt, wird dieses Element zurückgegeben. Andernfalls wird der Standard zurückgegeben, was der umgebende Viewport ist.

Dieser Bereich bezieht sich immer auf die Client-Koordinaten der Rahmenbox des Elements, sodass das Verschieben oder Scrollen des Elements keine Neuberechnung seitens des Entwicklers erfordert.

### Wert

Ein [`Element`](/de/docs/Web/API/Element).

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

- [Verbesserung des Tintens auf dem Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
