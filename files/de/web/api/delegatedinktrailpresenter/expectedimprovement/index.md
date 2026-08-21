---
title: "DelegatedInkTrailPresenter: expectedImprovement-Eigenschaft"
short-title: expectedImprovement
slug: Web/API/DelegatedInkTrailPresenter/expectedImprovement
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Ink API")}}{{Non-Standard_Header}}

Die schreibgeschützte Eigenschaft **`expectedImprovement`** der Schnittstelle [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) gibt einen Wert in Millisekunden zurück, der die Latenzverbesserung angibt, die bei Verwendung dieses Presenters erwartet werden kann.

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

Das Merkmal ist nicht mehr Teil der Spezifikation.

## Browser-Kompatibilität

{{Compat}}
