---
title: "XRRigidTransform: position-Eigenschaft"
short-title: position
slug: Web/API/XRRigidTransform/position
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRRigidTransform")}}-Eigenschaft **`position`** ist ein {{domxref("DOMPointReadOnly")}}-Objekt, das den 3D-Punkt in Metern angibt, der die Übersetzungskomponente der Transformation beschreibt.

## Wert

Ein schreibgeschützter {{domxref("DOMPointReadOnly")}}, der die 3D-Positionskomponente der Transformationsmatrix angibt. Die Einheiten sind Meter.

> [!NOTE]
> Die `w`-Komponente des Punkts ist immer 1.0.

## Beispiele

Um einen Referenzraum zu erstellen, der verwendet werden kann, um ein Objekt auf Augenhöhe zu platzieren (unter der Annahme, dass die Augenhöhe 1,5 Meter beträgt):

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

Nach dem Einrichten des Grafik-Kontexts zur Nutzung mit WebXR beginnt der Code damit, zu überprüfen, ob die Variable `immersiveSession` `true` ist. Falls ja, wird zunächst ein `bounded-floor`-Referenzraum angefordert. Wenn dies fehlschlägt (wahrscheinlich, weil `bounded-floor` nicht unterstützt wird), wird ein `local-floor`-Referenzraum angefordert.

Falls wir uns nicht in einer immersiven Sitzung befinden, wird stattdessen ein `viewer`-Referenzraum angefordert.

In allen Fällen wird der erhaltene Raum an die Funktion `refSpaceCreated()` übergeben. Für immersive Räume wird der angegebene Raum für die zukünftige Verwendung gespeichert. Für Inline-Sitzungen wissen wir jedoch, dass wir uns in einem Raum befinden, der nicht automatisch auf Bodenniveau angepasst ist, daher fordern wir einen Referenzraum mit Offset an, um die Höhe des Betrachters auf 1,5 Meter über dem angenommenen Bodenniveau von 0 Metern zu verschieben. Dieser neue Referenzraum wird anstelle des ursprünglich empfangenen verwendet.

Schließlich wird ein Animations-Frame-Antrag eingereicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
