---
title: "Ink: requestPresenter()-Methode"
short-title: requestPresenter()
slug: Web/API/Ink/requestPresenter
l10n:
  sourceCommit: 57aa2614c8f3b1b3f5c646262c8156afadcd63d8
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`requestPresenter()`**-Methode der [`Ink`](/de/docs/Web/API/Ink) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt erfüllt wird, um die Darstellung von Strichen zu handhaben.

## Syntax

```js-nolint
requestPresenter(param)
```

### Parameter

- `param` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `presentationArea` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element), in dem die Darstellung der Tintenstriche eingeschränkt ist (genauer gesagt, die Rahmenbox des Elements). Wenn `param` nicht enthalten ist oder `presentationArea` auf `null` gesetzt ist, wird die Tinten-Darstellung standardmäßig auf den umgebenden Viewport begrenzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einer [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objektinstanz aufgelöst wird.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und der Vorgang wird abgebrochen, wenn `presentationArea` kein gültiges [`Element`](/de/docs/Web/API/Element) ist oder sich nicht im selben Dokument wie das zugehörige [`Ink`](/de/docs/Web/API/Ink)-Objekt befindet.

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

- [Verbesserung des Inking im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
