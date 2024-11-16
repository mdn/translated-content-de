---
title: "DelegatedInkTrailPresenter: presentationArea-Eigenschaft"
short-title: presentationArea
slug: Web/API/DelegatedInkTrailPresenter/presentationArea
l10n:
  sourceCommit: 57aa2614c8f3b1b3f5c646262c8156afadcd63d8
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`presentationArea`** des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Interfaces gibt das [`Element`](/de/docs/Web/API/Element) zurück, innerhalb dessen die Darstellung von Tintenstrichen eingeschränkt ist.

Wenn im vorherigen Aufruf der Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) ein spezifisches `presentationArea`-Element angegeben wurde, wird dieses Element zurückgegeben. Andernfalls wird der Standardwert zurückgegeben, welcher der enthaltende Viewport ist.

Dieser Bereich sind immer die Client-Koordinaten für den Randbereich des Elements, sodass das Verschieben oder Scrollen des Elements keine Neuberechnung seitens des Entwicklers erfordert.

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

- [Verbesserung der Tinteingabe im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
