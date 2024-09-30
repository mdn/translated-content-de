---
title: "InkPresenter: expectedImprovement-Eigenschaft"
short-title: expectedImprovement
slug: Web/API/InkPresenter/expectedImprovement
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`expectedImprovement`**-Eigenschaft des [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Interfaces ist eine schreibgeschützte Eigenschaft, die einen Wert in Millisekunden zurückgibt, welcher die zu erwartende Latenzverbesserung bei Verwendung dieses Presenters anzeigt.

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
