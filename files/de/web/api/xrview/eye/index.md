---
title: "XRView: eye-Eigenschaft"
short-title: eye
slug: Web/API/XRView/eye
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`eye`** Eigenschaft der {{domxref("XRView")}} Schnittstelle ist ein String, der angibt, welches Auge das `XRView` darstellt: `left` oder `right`. Für Ansichten, die weder ein bestimmtes Auge repräsentieren, wie beispielsweise monokulare Ansichten, hat diese Eigenschaft den Wert `none`.

## Wert

Ein String, der einen der folgenden Werte haben kann:

- `left`
  - : Das {{domxref("XRView")}} repräsentiert den Blickwinkel des linken Auges des Betrachters.
- `right`
  - : Die Ansicht repräsentiert das rechte Auge des Betrachters.
- `none`
  - : Das `XRView` beschreibt eine monokulare Ansicht oder die Ansicht repräsentiert keinen bestimmten Blickwinkel eines Auges.

## Hinweise zur Verwendung

Der Hauptzweck dieser Eigenschaft besteht darin, den korrekten Bereich von zuvor gerenderten stereoskopischen Inhalten dem richtigen Auge zu präsentieren. Bei dynamisch gerenderten 3D-Inhalten können Sie dies normalerweise ignorieren und jede der Ansichten des Betrachters nacheinander rendern.

## Beispiele

Dieses Codebeispiel aus dem Renderer der Viewer-Pose iteriert über die Ansichten der Pose und rendert sie. _Allerdings_ haben wir Flags, die, wenn `true`, darauf hinweisen, dass ein bestimmtes Auge während des Spiels verletzt wurde. Wenn dieses Flag `true` ist, wird diese Ansicht übersprungen, anstatt sie zu rendern.

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

Für jede der Ansichten wird der Wert von `eye` überprüft, und wenn er entweder `left` oder `right` ist, prüfen wir, ob die Eigenschaft `body.leftEye.injured` oder `body.rightEye.injured` `true` ist; falls ja, rufen wir eine Funktion `updateInjury()` auf diesem Auge auf, um Dinge zu tun wie z.B. eine gewisse Heilung zu ermöglichen, den Fortschritt eines Gift-Effekts zu verfolgen oder Ähnliches, je nach Spielanforderung.

`updateInjury()` gibt `true` zurück, wenn das Auge noch verletzt ist, oder `false`, wenn das Auge durch die Funktion wieder gesund geworden ist. Wenn das Resultat `false` ist, was bedeutet, dass das Auge jetzt gesund ist, rendern wir die Szene für dieses Auge. Andernfalls tun wir dies nicht.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
