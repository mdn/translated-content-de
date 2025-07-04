---
title: "Ink: requestPresenter()-Methode"
short-title: requestPresenter()
slug: Web/API/Ink/requestPresenter
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`requestPresenter()`**-Methode der [`Ink`](/de/docs/Web/API/Ink)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt erfüllt wird, um die Darstellung von Strichen zu handhaben.

## Syntax

```js-nolint
requestPresenter(param)
```

### Parameter

- `param` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `presentationArea` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element), innerhalb dessen die Darstellung der Schriftstriche eingeschränkt ist (genauer gesagt die Rahmenbox des Elements). Wenn `param` nicht enthalten ist oder `presentationArea` auf `null` gesetzt ist, ist die Tintenwiedergabe standardmäßig auf das umgebende Ansichtsfenster beschränkt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einer Instanz des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekts auflöst.

### Ausnahmen

- `Error` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler wird ausgelöst und die Operation wird abgebrochen, wenn `presentationArea` kein gültiges [`Element`](/de/docs/Web/API/Element) ist oder nicht im selben Dokument wie das zugehörige [`Ink`](/de/docs/Web/API/Ink)-Objekt ist.

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
