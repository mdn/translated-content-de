---
title: "XRRigidTransform: position-Eigenschaft"
short-title: position
slug: Web/API/XRRigidTransform/position
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Eigenschaft **`position`** ist ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekt, das den 3D-Punkt in Metern angibt, der die Übersetzungskomponente der Transformation beschreibt.

## Wert

Ein schreibgeschützter [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der die 3D-Position der Transformationsmatrix angibt. Die Einheiten sind Meter.

> [!NOTE]
> Die `w`-Komponente des Punktes ist immer 1,0.

## Beispiele

Um einen Referenzraum zu erstellen, der verwendet werden kann, um ein Objekt auf Augenhöhe zu platzieren (angenommen, die Augenhöhe beträgt 1,5 Meter):

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

Nach dem Einrichten des Grafik-Kontexts für die Nutzung von WebXR wird zunächst überprüft, ob die Variable `immersiveSession` `true` ist; wenn ja, fordern wir zunächst einen `bounded-floor`-Referenzraum an. Wenn dies fehlschlägt (wahrscheinlich, weil `bounded-floor` nicht unterstützt wird), versuchen wir, einen `local-floor`-Referenzraum anzufordern.

Wenn wir uns nicht in einer immersiven Sitzung befinden, fordern wir stattdessen einen `viewer`-Referenzraum an.

In allen Fällen, sobald der Raum erhalten wurde, wird er in die Funktion `refSpaceCreated()` übergeben. Für immersive Räume wird der angegebene Raum für die zukünftige Verwendung gespeichert. Bei Inline-Sitzungen wissen wir jedoch, dass wir uns in einem Raum befinden, der nicht automatisch für die Fußbodenniveau angepasst ist, daher fordern wir einen verschobenen Referenzraum an, um die Höhe des Betrachters auf 1,5 Meter über dem angenommenen Fußbodenniveau von 0 Metern zu verschieben. Dieser neue Referenzraum wird anstelle des ursprünglich empfangenen Raums verwendet.

Schließlich wird eine Anfrage für einen Animationsrahmen übermittelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
