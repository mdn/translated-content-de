---
title: Ink
slug: Web/API/Ink
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Die **`Ink`**-Schnittstelle der [Ink API](/de/docs/Web/API/Ink_API) bietet Zugriff auf [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekte, die von der Anwendung verwendet werden, um Tintenstriche darzustellen.

{{InheritanceDiagram}}

## Instanzmethoden

- [`requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekt erfüllt wird, um Tintenstriche zu rendern.

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
