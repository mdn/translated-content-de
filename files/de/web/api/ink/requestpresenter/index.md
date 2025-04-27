---
title: "Ink: requestPresenter() Methode"
short-title: requestPresenter()
slug: Web/API/Ink/requestPresenter
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`requestPresenter()`** Methode des [`Ink`](/de/docs/Web/API/Ink) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) Objekt erfüllt wird, um das Rendern von Strichen zu handhaben.

## Syntax

```js-nolint
requestPresenter(param)
```

### Parameter

- `param` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `presentationArea` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element), innerhalb dessen die Darstellung der Tintenschläge eingeschränkt ist (genauer gesagt die Rahmenbox des Elements). Wenn `param` nicht enthalten ist oder `presentationArea` auf `null` gesetzt ist, ist die Tintenwiedergabe standardmäßig auf den enthaltenen Ansichtsbereich beschränkt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf eine [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) Objektinstanz aufgelöst wird.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und der Vorgang wird abgebrochen, wenn `presentationArea` kein gültiges [`Element`](/de/docs/Web/API/Element) ist oder nicht im selben Dokument wie das zugehörige [`Ink`](/de/docs/Web/API/Ink) Objekt vorliegt.

## Beispiel

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Optimierung von Ink auf dem Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
