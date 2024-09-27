---
title: "XRView: eye-Eigenschaft"
short-title: eye
slug: Web/API/XRView/eye
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`eye`**-Eigenschaft des [`XRView`](/de/docs/Web/API/XRView)-Interfaces ist ein Zeichenfolgenwert, der angibt, welchen Augenblickpunkt das `XRView` darstellt: `left` oder `right`. Für Ansichten, die kein bestimmtes Auge repräsentieren, wie z.B. monokulare Ansichten, ist der Wert dieser Eigenschaft `none`.

## Wert

Eine Zeichenfolge, die einen der folgenden Werte annehmen kann:

- `left`
  - : Der [`XRView`](/de/docs/Web/API/XRView) stellt die Sicht des linken Auges des Betrachters dar.
- `right`
  - : Die Ansicht repräsentiert das rechte Auge des Betrachters.
- `none`
  - : Der `XRView` beschreibt eine monokulare Ansicht oder die Ansicht repräsentiert anderweitig nicht eine bestimmte Augenperspektive.

## Verwendungshinweise

Der Hauptzweck dieser Eigenschaft besteht darin, den korrekten Bereich von vorkerstelltem Stereo-Content dem entsprechenden Auge zu präsentieren. Für dynamisch gerenderten 3D-Content können Sie dies normalerweise ignorieren und jede der Ansichten des Betrachters nacheinander rendern.

## Beispiele

Dieser Code aus dem Renderer der Betrachterpose iteriert über die Ansichten der Pose und rendert sie. _Allerdings_ haben wir Flags, die, wenn sie `true` sind, darauf hinweisen, dass ein bestimmtes Auge während des Spiels verletzt wurde. Wenn das entsprechende Flag `true` ist, wird diese Ansicht übersprungen und nicht dargestellt.

```js
glLayer = xrSession.renderState.baseLayer;
gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
gl.clearColor(0, 0, 0, 1.0);
gl.clearDepth(1.0);
gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_BUFFER_BIT);

for (const view of xrPose.views) {
  let skipView = false;

  if (view.eye === "left" && body.leftEye.injured) {
    skipView = updateInjury(body.leftEye);
  } else if (view.eye === "right" && body.rightEye.injured) {
    skipView = updateInjury(body.rightEye);
  }

  if (!skipView) {
    let viewport = glLayer.getViewport(view);
    gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
    renderScene(gl, view);
  }
}
```

Für jede der Ansichten wird der Wert von `eye` überprüft und, wenn es entweder `left` oder `right` ist, stellen wir fest, ob die `body.leftEye.injured`- oder `body.rightEye.injured`-Eigenschaft `true` ist; wenn ja, rufen wir eine Funktion `updateInjury()` auf diesem Auge auf, um beispielsweise einen gewissen Heilungsprozess zu ermöglichen oder den Fortschritt eines Gift-Effekts zu verfolgen, je nach den Bedürfnissen des Spiels.

`updateInjury()` gibt `true` zurück, wenn das Auge noch verletzt ist, oder `false`, wenn das Auge durch die Funktion genesen ist. Wenn das Ergebnis `false` ist, was bedeutet, dass das Auge jetzt gesund ist, rendern wir die Szene für dieses Auge. Andernfalls tun wir das nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
