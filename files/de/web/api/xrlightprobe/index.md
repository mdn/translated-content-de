---
title: XRLightProbe
slug: Web/API/XRLightProbe
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRLightProbe`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) enthält Beleuchtungsinformationen an einem bestimmten Punkt in der Umgebung des Benutzers. Sie können ein `XRLighting`-Objekt mit der Methode [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) erhalten.

Dieses Objekt enthält selbst keine Beleuchtungswerte, wird jedoch verwendet, um Beleuchtungszustände für jedes [`XRFrame`](/de/docs/Web/API/XRFrame) zu sammeln. Siehe [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate) für die geschätzten Beleuchtungswerte für ein `XRLightProbe`.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- `XRLightProbe.onreflectionchange`
  - : Event-Handler-Eigenschaft für das [`reflectionchange`](/de/docs/Web/API/XRLightProbe/reflectionchange_event)-Event.
- [`XRLightProbe.probeSpace`](/de/docs/Web/API/XRLightProbe/probeSpace) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), der die Position und Orientierung verfolgt, auf die sich die Beleuchtungsschätzungen beziehen.

## Instanz-Methoden

Keine.

## Ereignisse

- [`reflectionchange`](/de/docs/Web/API/XRLightProbe/reflectionchange_event) {{Experimental_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich die geschätzte Reflexions-Würfelkarte ändert. (Dies geschieht, wenn sich der Benutzer bewegt und sich die Beleuchtung der Umgebung ändert.)

## Beispiele

### Ein `XRLightProbe`-Objekt für eine Sitzung erhalten

Verwenden Sie die Methode [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe), um eine Lichtsonde zu erhalten.

```js
const lightProbe = await xrSession.requestLightProbe();
```

### Eine Sondenpose innerhalb eines `XRFrame` erhalten

Übergeben Sie den `probeSpace` der Lichtsonde an [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose), um eine Lichtsonde für eine Pose zu erhalten.

```js
const probePose = xrFrame.getPose(lightProbe.probeSpace, xrReferenceSpace);
```

### Verwendung des `reflectionchange`-Events

Übergeben Sie `XRLightProbe`, um eine Reflexions-Würfelkarte zu erhalten, wann immer das [`reflectionchange`](/de/docs/Web/API/XRLightProbe/reflectionchange_event)-Event ausgelöst wird. Siehe auch [`XRWebGLBinding.getReflectionCubeMap()`](/de/docs/Web/API/XRWebGLBinding/getReflectionCubeMap).

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
const lightProbe = await xrSession.requestLightProbe();
let glCubeMap = glBinding.getReflectionCubeMap(lightProbe);

lightProbe.addEventListener("reflectionchange", () => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe)
