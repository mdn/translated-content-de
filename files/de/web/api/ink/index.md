---
title: Ink
slug: Web/API/Ink
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Das **`Ink`**-Interface der [Ink-API](/de/docs/Web/API/Ink_API) bietet Zugriff auf [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekte, die von der Anwendung zur Darstellung von digitalen Tintenstrichen verwendet werden können.

{{InheritanceDiagram}}

## Instanzmethoden

- [`requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt erfüllt wird, welches die Darstellung von Strichen verwaltet.

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

- [Verbesserung des Tintenzeichnens im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
