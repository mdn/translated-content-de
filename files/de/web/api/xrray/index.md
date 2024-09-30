---
title: XRRay
slug: Web/API/XRRay
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRRay`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist ein geometrischer Strahl, der durch einen Ursprungspunkt und einen Richtungsvektor beschrieben wird.

`XRRay`-Objekte können an [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) oder [`XRSession.requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput) übergeben werden, um Treffertests durchzuführen.

## Konstruktor

- [`XRRay()`](/de/docs/Web/API/XRRay/XRRay) {{Experimental_Inline}}
  - : Erstellt ein neues `XRRay`-Objekt.

## Instanzeigenschaften

- [`XRRay.direction`](/de/docs/Web/API/XRRay/direction) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der den 3-dimensionalen Richtungsvektor des Strahls darstellt.
- [`XRRay.matrix`](/de/docs/Web/API/XRRay/matrix) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Transformation, die verwendet werden kann, um Objekte entlang des `XRRay` zu positionieren. Dies ist eine 4x4-Matrix, die als 16-Elemente-{{jsxref("Float32Array")}} in Spaltenmajor-Ordnung gegeben ist.
- [`XRRay.origin`](/de/docs/Web/API/XRRay/origin) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der den 3-dimensionalen Punkt im Raum darstellt, von dem der Strahl ausgeht, in Metern.

## Instanzmethoden

Keine.

## Beispiele

### Verwendung von `XRRay`, um eine Quellen-Treffertestanforderung zu stellen

Die Methode [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource) nimmt ein `XRRay`-Objekt für ihre `offsetRay`-Option. In diesem Beispiel ist die Treffertestquelle leicht über dem Betrachter positioniert, da die Anwendung einige UI-Elemente am unteren Rand hat, während sie die Wahrnehmung eines zentrierten Cursors beibehalten möchte.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["local", "hit-test"],
});

let hitTestSource = null;

xrSession
  .requestHitTestSource({
    space: viewerSpace, // obtained from xrSession.requestReferenceSpace("viewer");
    offsetRay: new XRRay({ y: 0.5 }),
  })
  .then((viewerHitTestSource) => {
    hitTestSource = viewerHitTestSource;
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource)
- [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)
