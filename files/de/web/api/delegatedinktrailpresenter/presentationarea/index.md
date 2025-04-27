---
title: "DelegatedInkTrailPresenter: presentationArea-Eigenschaft"
short-title: presentationArea
slug: Web/API/DelegatedInkTrailPresenter/presentationArea
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die schreibgeschützte **`presentationArea`**-Eigenschaft der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Schnittstelle gibt das [`Element`](/de/docs/Web/API/Element) zurück, in dem die Darstellung der Tintenschläge eingeschränkt ist.

Wenn der vorhergehende Aufruf der Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) eine spezifische Definition eines `presentationArea`-Elements enthielt, wird dieses Element zurückgegeben. Andernfalls wird der Standard zurückgegeben, was das enthaltene Viewport ist.

Dieser Bereich entspricht immer den Client-Koordinaten für das Randfeld des Elements, sodass beim Verschieben oder Scrollen des Elements keine Neuberechnung seitens des Entwicklers erforderlich ist.

### Wert

Ein [`Element`](/de/docs/Web/API/Element).

## Beispiel

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.presentationArea);

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Inking im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
