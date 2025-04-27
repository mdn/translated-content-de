---
title: "DelegatedInkTrailPresenter: expectedImprovement-Eigenschaft"
short-title: expectedImprovement
slug: Web/API/DelegatedInkTrailPresenter/expectedImprovement
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Ink API")}}{{Deprecated_header}}{{Non-Standard_Header}}

Die schreibgeschützte Eigenschaft **`expectedImprovement`** der Schnittstelle [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) gibt einen Wert in Millisekunden zurück, der die Latenzverbesserung angibt, die bei Verwendung dieses Präsenters erwartet werden kann.

### Wert

Eine Zahl.

## Beispiel

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.expectedImprovement);

  // ...
}
```

## Spezifikationen

Das Feature ist nicht mehr Teil der Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Zeichnens im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
