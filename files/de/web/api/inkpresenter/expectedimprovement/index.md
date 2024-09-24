---
title: "InkPresenter: Eigenschaft expectedImprovement"
short-title: expectedImprovement
slug: Web/API/InkPresenter/expectedImprovement
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`expectedImprovement`** des {{domxref("InkPresenter")}} Interface gibt einen Wert in Millisekunden zurück, der die zu erwartende Latenzverbesserung bei der Verwendung dieses Presenters angibt.

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

- [Verbesserung der Stifteingabe im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
