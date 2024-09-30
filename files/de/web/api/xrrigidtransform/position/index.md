---
title: "XRRigidTransform: position-Eigenschaft"
short-title: position
slug: Web/API/XRRigidTransform/position
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) Eigenschaft **`position`** ist ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Objekt, das den 3D-Punkt in Metern angibt und die Translation des Transformationskomponenten beschreibt.

## Wert

Ein schreibgeschützter [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der die 3D-Position der Transformationsmatrix darstellt. Die Einheiten sind in Metern.

> [!NOTE]
> Die `w`-Komponente des Punktes ist immer 1,0.

## Beispiele

Um einen Referenzraum zu erstellen, der verwendet werden kann, um ein Objekt auf Augenhöhe zu platzieren (angenommen, die Augenhöhe liegt bei 1,5 Metern):

```js
function onSessionStarted(xrSession) {
  xrSession.addEventListener("end", onSessionEnded);

  gl = initGraphics(xrSession);

  const glLayer = new XRWebGLLayer(xrSession, gl);
  xrSession.updateRenderState({ baseLayer: glLayer });

  if (immersiveSession) {
    xrSession
      .requestReferenceSpace("bounded-floor")
      .then((refSpace) => {
        refSpaceCreated(refSpace);
      })
      .catch(() => {
        session.requestReferenceSpace("local-floor").then(refSpaceCreated);
      });
  } else {
    session.requestReferenceSpace("viewer").then(refSpaceCreated);
  }
}

function refSpaceCreated(refSpace) {
  xrReferenceSpace = immersiveSession
    ? refSpace
    : refSpace.getOffsetReferenceSpace(new XRRigidTransform({ y: -1.5 }));
  xrSession.requestAnimationFrame(onFrame);
}
```

Nachdem der Grafik-Kontext für die WebXR-Nutzung eingerichtet wurde, wird zuerst geprüft, ob die Variable `immersiveSession` `true` ist; wenn ja, wird zuerst ein `bounded-floor` Referenzraum angefordert. Wenn das fehlschlägt (vermutlich weil `bounded-floor` nicht unterstützt wird), versuchen wir, einen `local-floor` Referenzraum anzufordern.

Wenn wir uns nicht in einer immersiven Sitzung befinden, fordern wir stattdessen einen `viewer` Referenzraum an.

In allen Fällen wird, sobald der Raum erhalten wurde, dieser in die `refSpaceCreated()` Funktion übergeben. Für immersive Räume wird der angegebene Raum für die zukünftige Nutzung gespeichert. Für Inline-Sitzungen wissen wir jedoch, dass wir uns in einem Raum befinden, der nicht automatisch für das Bodenniveau angepasst ist, daher fordern wir einen Offset-Referenzraum an, um die Höhe des Betrachters auf 1,5 Meter über dem angenommenen Bodenniveau von 0 Metern zu verschieben. Dieser neue Referenzraum wird anstelle des ursprünglich erhaltenen verwendet.

Schließlich wird ein Animationsframe-Antrag eingereicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
