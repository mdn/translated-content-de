---
title: "InkPresenter: expectedImprovement-Eigenschaft"
short-title: expectedImprovement
slug: Web/API/InkPresenter/expectedImprovement
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die schreibgeschützte **`expectedImprovement`**-Eigenschaft der [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Schnittstelle gibt einen Wert in Millisekunden zurück, der die Latenzverbesserung angibt, die durch die Verwendung dieses Presenters erwartet werden kann.

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

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Inking im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
