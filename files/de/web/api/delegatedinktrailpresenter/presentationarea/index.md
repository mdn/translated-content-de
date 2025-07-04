---
title: "DelegatedInkTrailPresenter: presentationArea-Eigenschaft"
short-title: presentationArea
slug: Web/API/DelegatedInkTrailPresenter/presentationArea
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`presentationArea`**-Eigenschaft der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Schnittstelle gibt das [`Element`](/de/docs/Web/API/Element) zurück, innerhalb dessen das Rendern von Tintenzeichen eingeschränkt ist.

Wenn der vorherige Aufruf der Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) eine spezifische `presentationArea`-Elementdefinition enthielt, dann wird dieses Element zurückgegeben. Andernfalls wird der Standardwert zurückgegeben, welcher der enthaltene Viewport ist.

Dieser Bereich ist immer die Client-Koordinaten der Rahmenbox des Elements, sodass das Bewegen oder Scrollen des Elements keine Neuberechnung seitens der Entwickler erfordert.

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
