---
title: XRLightProbe
slug: Web/API/XRLightProbe
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRLightProbe`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) enthält Beleuchtungsinformationen an einem bestimmten Punkt in der Umgebung des Benutzers. Sie können ein `XRLighting`-Objekt mit der Methode {{domxref("XRSession.requestLightProbe()")}} erhalten.

Dieses Objekt enthält selbst keine Beleuchtungswerte, wird aber verwendet, um Beleuchtungszustände für jedes {{domxref("XRFrame")}} zu sammeln. Siehe {{domxref("XRLightEstimate")}} für die geschätzten Beleuchtungswerte einer `XRLightProbe`.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- `XRLightProbe.onreflectionchange`
  - : Ereignis-Handler-Eigenschaft für das {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}}-Ereignis.
- {{domxref("XRLightProbe.probeSpace")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("XRSpace")}}, der die Position und Orientierung nachverfolgt, auf die sich die Beleuchtungsschätzungen beziehen.

## Instanz-Methoden

Keine.

## Ereignisse

- {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} {{Experimental_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich die geschätzte Reflexions-Würfelkarte ändert. (Dies passiert, wenn der Benutzer sich bewegt und sich die Beleuchtung der Umgebung ändert.)

## Beispiele

### Ein `XRLightProbe`-Objekt für eine Sitzung erhalten

Verwenden Sie die Methode {{domxref("XRSession.requestLightProbe()")}}, um eine Lichtsonde zu erhalten.

```js
const lightProbe = await xrSession.requestLightProbe();
```

### Eine Sondenpose innerhalb eines `XRFrame` erhalten

Übergeben Sie die `probeSpace` der Lichtsonde an {{domxref("XRFrame.getPose()")}}, um eine Lichtsonde für eine Pose zu erhalten.

```js
const probePose = xrFrame.getPose(lightProbe.probeSpace, xrReferenceSpace);
```

### Verwenden des `reflectionchange`-Ereignisses

Übergeben Sie `XRLightProbe`, um eine Reflexions-Würfelkarte zu erhalten, jedes Mal wenn das {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}}-Ereignis ausgelöst wird. Siehe auch {{domxref("XRWebGLBinding.getReflectionCubeMap()")}}.

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

- {{domxref("XRSession.requestLightProbe()")}}
