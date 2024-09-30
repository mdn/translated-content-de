---
title: "Ink: requestPresenter()-Methode"
short-title: requestPresenter()
slug: Web/API/Ink/requestPresenter
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`requestPresenter()`**-Methode der [`Ink`](/de/docs/Web/API/Ink)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekt erfüllt wird, um Striche zu rendern.

## Syntax

```js-nolint
requestPresenter(param)
```

### Parameter

- `param` {{optional_inline}}
  - : Ein `InkPresenterParam`-Objekt, das die folgende Eigenschaft enthält:
    - `presentationArea` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element), innerhalb dessen die Darstellung der Tintenstriche eingeschränkt ist (genauer gesagt die Rahmenbox des Elements). Wenn `param` nicht inkludiert ist oder `presentationArea` auf `null` gesetzt ist, ist die Tintenwiedergabe standardmäßig auf den enthaltenden Viewport beschränkt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einer Instanz des [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekts aufgelöst wird.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und die Operation wird abgebrochen, wenn `presentationArea` kein gültiges [`Element`](/de/docs/Web/API/Element) ist oder nicht im selben Dokument wie das zugehörige [`Ink`](/de/docs/Web/API/Ink)-Objekt enthalten ist.

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

- [Verbesserung der Tintenfunktionen im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
