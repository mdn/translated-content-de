---
title: "DelegatedInkTrailPresenter: expectedImprovement-Eigenschaft"
short-title: expectedImprovement
slug: Web/API/DelegatedInkTrailPresenter/expectedImprovement
l10n:
  sourceCommit: 57aa2614c8f3b1b3f5c646262c8156afadcd63d8
---

{{APIRef("Ink API")}}{{Deprecated_header}}{{Non-Standard_Header}}

Die schreibgeschützte Eigenschaft **`expectedImprovement`** der [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Schnittstelle gibt einen Wert in Millisekunden zurück, der die Latenzverbesserung angibt, die bei der Verwendung dieses Presenters erwartet werden kann.

### Wert

Eine Zahl.

## Beispiel

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.expectedImprovement);

  //...
}
```

## Spezifikationen

Das Feature ist nicht mehr Teil der Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Tintenfunktionalität im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
