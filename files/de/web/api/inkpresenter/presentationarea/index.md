---
title: "InkPresenter: presentationArea-Eigenschaft"
short-title: presentationArea
slug: Web/API/InkPresenter/presentationArea
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`presentationArea`** des [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Interfaces gibt das [`Element`](/de/docs/Web/API/Element) zurück, innerhalb dessen die Darstellung von Tintenstrichen beschränkt ist.

Falls der vorherige Aufruf der Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) eine spezifische Definition des `presentationArea`-Elements enthielt, wird dieses Element zurückgegeben. Andernfalls wird der Standardwert zurückgegeben, was der enthaltene Viewport ist.

Dieser Bereich entspricht immer den Client-Koordinaten für den Randbereich des Elements, sodass beim Verschieben oder Scrollen des Elements keine Neuberechnung durch den Entwickler erforderlich ist.

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

- [Verbesserung der Tintenfunktionalität im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
