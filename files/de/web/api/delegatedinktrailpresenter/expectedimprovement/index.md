---
title: "DelegatedInkTrailPresenter: expectedImprovement-Eigenschaft"
short-title: expectedImprovement
slug: Web/API/DelegatedInkTrailPresenter/expectedImprovement
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Ink API")}}{{Deprecated_header}}{{Non-Standard_Header}}

Die schreibgeschützte Eigenschaft **`expectedImprovement`** des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Interfaces gibt einen Wert in Millisekunden zurück, der die zu erwartende Latenzverbesserung bei Verwendung dieses Presenters angibt.

### Wert

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

Das Feature ist nicht mehr Teil der Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Eingabe auf dem Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
