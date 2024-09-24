---
title: XRRay
slug: Web/API/XRRay
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRRay`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist ein geometrischer Strahl, der durch einen Ursprungsort und einen Richtungsvektor beschrieben wird.

`XRRay`-Objekte können an {{domxref("XRSession.requestHitTestSource()")}} oder {{domxref("XRSession.requestHitTestSourceForTransientInput()")}} übergeben werden, um Treffererkennung durchzuführen.

## Konstruktor

- {{domxref("XRRay.XRRay", "XRRay()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `XRRay`-Objekt.

## Instanz-Eigenschaften

- {{domxref("XRRay.direction")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("DOMPointReadOnly")}}, der den 3-dimensionalen Richtungsvektor des Strahls darstellt.
- {{domxref("XRRay.matrix")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Transformation, die verwendet werden kann, um Objekte entlang des `XRRay` zu positionieren. Dies ist eine 4 x 4 Matrix, die als 16-Element-{{jsxref("Float32Array")}} in spalten-major Reihenfolge angegeben wird.
- {{domxref("XRRay.origin")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("DOMPointReadOnly")}}, der den 3-dimensionalen Punkt im Raum darstellt, von dem der Strahl in Metern ausgeht.

## Instanz-Methoden

Keine.

## Beispiele

### Verwendung von `XRRay`, um eine Treffertestquelle anzufordern

Die Methode {{domxref("XRSession.requestHitTestSource()")}} nimmt ein `XRRay`-Objekt für seine `offsetRay`-Option. In diesem Beispiel wird die Treffertestquelle leicht über dem Betrachter positioniert, da die Anwendung einige UI-Elemente am unteren Rand hat, während der Eindruck eines zentrierten Cursors beibehalten werden soll.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["local", "hit-test"],
});

let hitTestSource = null;

xrSession
  .requestHitTestSource({
    space: viewerSpace, // durch xrSession.requestReferenceSpace("viewer") erhalten;
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

- {{domxref("XRSession.requestHitTestSource()")}}
- {{domxref("XRHitTestResult")}}
