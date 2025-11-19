---
title: "DelegatedInkTrailPresenter: presentationArea-Eigenschaft"
short-title: presentationArea
slug: Web/API/DelegatedInkTrailPresenter/presentationArea
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`presentationArea`** der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Schnittstelle gibt das [`Element`](/de/docs/Web/API/Element) zurück, innerhalb dessen die Darstellung von Tintenstrichen eingeschränkt ist.

Wenn der vorausgehende Aufruf der Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) eine spezifische `presentationArea`-Elementdefinition beinhaltete, dann wird dieses Element zurückgegeben. Andernfalls wird der Standardwert zurückgegeben, welcher der umgebende Viewport ist.

Dieser Bereich entspricht immer den Client-Koordinaten des Randbereichs des Elements. Daher ist keine Neuberechnung durch den Entwickler erforderlich, wenn das Element verschoben oder gescrollt wird.

## Wert

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
