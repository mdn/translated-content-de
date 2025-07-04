---
title: Ink
slug: Web/API/Ink
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Das **`Ink`**-Interface der [Ink API](/de/docs/Web/API/Ink_API) bietet Zugriff auf [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekte, die von der Anwendung zum Rendern von Tintenstrichen verwendet werden.

{{InheritanceDiagram}}

## Instanzmethoden

- [`requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt erfüllt wird, das für das Rendern von Strichen zuständig ist.

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
