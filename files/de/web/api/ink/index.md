---
title: Tinte
slug: Web/API/Ink
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

Das **`Ink`**-Interface der [Ink API](/de/docs/Web/API/Ink_API) bietet Zugriff auf {{domxref("InkPresenter")}}-Objekte, die von der Anwendung zum Rendern von Tintenstrichen verwendet werden können.

{{InheritanceDiagram}}

## Instanzmethoden

- {{domxref("Ink.requestPresenter", "requestPresenter()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem {{domxref("InkPresenter")}}-Objekt erfüllt, um das Rendern von Strichen zu handhaben.

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

- [Verbesserung der Tintenfunktionalität im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
