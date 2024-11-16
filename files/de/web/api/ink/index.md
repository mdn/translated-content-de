---
title: Ink
slug: Web/API/Ink
l10n:
  sourceCommit: 57aa2614c8f3b1b3f5c646262c8156afadcd63d8
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Das **`Ink`**-Interface der [Ink API](/de/docs/Web/API/Ink_API) bietet Zugriff auf [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekte, die von der Anwendung zur Darstellung von Tintenstrichen verwendet werden können.

{{InheritanceDiagram}}

## Instanzmethoden

- [`requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt erfüllt wird, um Striche darzustellen.

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

- [Verbesserung des Tintenzeichnens im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
