---
title: "DelegatedInkTrailPresenter: expectedImprovement-Eigenschaft"
short-title: expectedImprovement
slug: Web/API/DelegatedInkTrailPresenter/expectedImprovement
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("Ink API")}}{{Deprecated_header}}{{Non-Standard_Header}}

Die schreibgeschützte **`expectedImprovement`**-Eigenschaft der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Schnittstelle gibt einen Wert in Millisekunden zurück, der die Latenzverbesserung angibt, die bei Verwendung dieses Presenters erwartet werden kann.

## Wert

Eine Zahl.

## Beispiel

```js
async function inkInit() {
  const ink = navigator.ink;
  const presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.expectedImprovement);

  // …
}
```

## Spezifikationen

Dieses Feature ist nicht mehr Teil der Spezifikation.

## Browser-Kompatibilität

{{Compat}}
