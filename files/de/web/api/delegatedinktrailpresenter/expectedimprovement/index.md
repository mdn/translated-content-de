---
title: "DelegatedInkTrailPresenter: expectedImprovement-Eigenschaft"
short-title: expectedImprovement
slug: Web/API/DelegatedInkTrailPresenter/expectedImprovement
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{Deprecated_header}}{{Non-Standard_Header}}

Die schreibgeschützte Eigenschaft **`expectedImprovement`** der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Schnittstelle gibt einen Wert in Millisekunden zurück, der die erwartete Latenzverbesserung angibt, die durch die Verwendung dieses Presenters zu erwarten ist.

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

Das Feature ist nicht länger Teil der Spezifikation.

## Browser-Kompatibilität

{{Compat}}
