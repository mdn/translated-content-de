---
title: "XRView: eye-Eigenschaft"
short-title: eye
slug: Web/API/XRView/eye
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`eye`**-Eigenschaft des [`XRView`](/de/docs/Web/API/XRView)-Interfaces ist ein String, der angibt, welches Auge durch das `XRView` repräsentiert wird: `left` oder `right`. Für Ansichten, die keines der Augen repräsentieren, wie z.B. monokulare Ansichten, hat diese Eigenschaft den Wert `none`.

## Wert

Ein String, der einer der folgenden Werte sein kann:

- `left`
  - : Das [`XRView`](/de/docs/Web/API/XRView) repräsentiert den Blickwinkel des linken Auges des Betrachters.
- `right`
  - : Die Ansicht repräsentiert das rechte Auge des Betrachters.
- `none`
  - : Das `XRView` beschreibt eine monokulare Ansicht oder die Ansicht repräsentiert nicht den Blickwinkel eines bestimmten Auges.

## Verwendungshinweise

Der Hauptzweck dieser Eigenschaft besteht darin, den korrekten Bereich von vorgerendertem stereoskopischem Inhalt dem richtigen Auge zuzuordnen. Bei dynamisch gerenderten 3D-Inhalten können Sie dieses Attribut in der Regel ignorieren und die einzelnen Ansichten des Betrachters nacheinander rendern.

## Beispiele

Dieser Code aus dem Renderer der Betrachterposition durchläuft die Ansichten der Position und rendert sie. _Jedoch_ haben wir Flags, die, wenn `true`, anzeigen, dass ein bestimmtes Auge während des Spiels verletzt wurde. Beim Rendern dieses Auges wird, falls das Flag `true` ist, diese Ansicht übersprungen, anstatt gerendert zu werden.

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

Für jede der Ansichten wird der Wert von `eye` überprüft und wenn er entweder `left` oder `right` ist, prüfen wir, ob die Eigenschaft `body.leftEye.injured` oder `body.rightEye.injured` `true` ist; falls ja, rufen wir eine Funktion `updateInjury()` für dieses Auge auf, um Dinge wie die Möglichkeit einer Heilung zu ermöglichen, den Fortschritt eines Vergiftungseffekts zu verfolgen oder Ähnliches, je nach den Anforderungen des Spiels.

`updateInjury()` gibt `true` zurück, wenn das Auge noch verletzt ist, oder `false`, wenn das Auge durch die Funktion wieder gesund ist. Ist das Ergebnis `false`, was anzeigt, dass das Auge jetzt gesund ist, rendern wir die Szene für dieses Auge. Andernfalls tun wir dies nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
