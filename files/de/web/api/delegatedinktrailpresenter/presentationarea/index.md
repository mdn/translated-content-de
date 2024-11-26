---
title: "DelegatedInkTrailPresenter: presentationArea-Eigenschaft"
short-title: presentationArea
slug: Web/API/DelegatedInkTrailPresenter/presentationArea
l10n:
  sourceCommit: 08e04f121ea7b3a55e6ef47782d2d82fb053ca88
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`presentationArea`** des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Interfaces gibt das [`Element`](/de/docs/Web/API/Element) zurück, innerhalb dessen die Darstellung der Tintenstriche begrenzt ist.

Wenn der vorhergehende Aufruf der Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) eine spezifische Definition eines `presentationArea`-Elements enthielt, wird dieses Element zurückgegeben. Andernfalls wird der Standardwert zurückgegeben, der den umgebenden Viewport darstellt.

Dieser Bereich entspricht immer den Client-Koordinaten für die Rahmenbox des Elements, sodass das Verschieben des Elements oder das Scrollen des Elements keine Neuberechnung von Seiten des Entwicklers erfordert.

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

- [Verbesserung des Tintenzeichnens im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
