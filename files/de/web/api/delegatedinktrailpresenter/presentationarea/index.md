---
title: "DelegatedInkTrailPresenter: Präsentationsbereich Eigenschaft"
short-title: presentationArea
slug: Web/API/DelegatedInkTrailPresenter/presentationArea
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`presentationArea`** schreibgeschützte Eigenschaft des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Interfaces gibt das [`Element`](/de/docs/Web/API/Element) zurück, innerhalb dessen die Darstellung von Tintenstrichen begrenzt ist.

Falls der vorherige Aufruf der Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) eine spezifische `presentationArea`-Elementdefinition enthielt, wird dieses Element zurückgegeben. Andernfalls wird die Standardeinstellung zurückgegeben, die der enthaltende Viewport ist.

Dieser Bereich entspricht immer den Client-Koordinaten für das Border-Box des Elements, sodass das Bewegen oder Scrollen des Elements keine Neuberechnung seitens des Entwicklers erfordert.

### Wert

Ein [`Element`](/de/docs/Web/API/Element).

## Beispiel

```js
async function inkInit() {
  const ink = navigator.ink;
  const presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.presentationArea);

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Schreibens im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
