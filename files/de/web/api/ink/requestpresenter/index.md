---
title: "Ink: requestPresenter() Methode"
short-title: requestPresenter()
slug: Web/API/Ink/requestPresenter
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`requestPresenter()`** Methode der {{domxref("Ink")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("InkPresenter")}}-Objekt erfüllt wird, um das Rendern von Strichen zu behandeln.

## Syntax

```js-nolint
requestPresenter(param)
```

### Parameter

- `param` {{optional_inline}}
  - : Ein `InkPresenterParam`-Objekt, das die folgende Eigenschaft enthält:
    - `presentationArea` {{optional_inline}}
      - : Ein {{domxref("Element")}}, innerhalb dessen die Darstellung von Tintenschlägen eingeschlossen ist (genauer gesagt, der Rahmen des Elements). Wenn `param` nicht enthalten ist oder `presentationArea` auf `null` gesetzt ist, erfolgt die Darstellung standardmäßig innerhalb des umgebenden Viewports.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einer Instanz eines {{domxref("InkPresenter")}}-Objekts aufgelöst wird.

### Ausnahmen

- `Error` {{domxref("DOMException")}}
  - : Ein Fehler wird ausgelöst und der Vorgang wird abgebrochen, wenn `presentationArea` kein gültiges {{domxref("Element")}} ist oder sich nicht im gleichen Dokument wie das zugehörige {{domxref("Ink")}}-Objekt befindet.

## Beispiel

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });

  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Schreibens im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
