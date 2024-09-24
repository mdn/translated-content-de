---
title: "XRReferenceSpace: getOffsetReferenceSpace()-Methode"
short-title: getOffsetReferenceSpace()
slug: Web/API/XRReferenceSpace/getOffsetReferenceSpace
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`getOffsetReferenceSpace()`**-Methode des {{domxref("XRReferenceSpace")}}-Interfaces gibt ein neues Referenzraumobjekt zurück, welches die relative Unterschied in der Position zwischen dem Objekt, auf dem die Methode aufgerufen wird, und einem gegebenen Punkt im 3D-Raum beschreibt. Das durch `getOffsetReferenceSpace()` zurückgegebene Objekt ist ein {{domxref("XRReferenceSpace")}}, wenn es auf einem `XRReferenceSpace` aufgerufen wird, oder ein {{domxref("XRBoundedReferenceSpace")}}, wenn es auf einem Objekt dieses Typs aufgerufen wird.

Mit anderen Worten, wenn Sie ein Objekt im 3D-Raum haben und ein anderes Objekt relativ zu diesem positionieren müssen, können Sie `getOffsetReferenceSpace()` aufrufen und die Position und Orientierung eingeben, die das zweite Objekt _relativ zur Position und Orientierung des Objekts, auf dem Sie `getOffsetReferenceSpace()` aufrufen_, haben soll.

Beim Zeichnen der Szene können Sie dann den versetzten Referenzraum verwenden, um Objekte nicht nur relativ zueinander zu positionieren, sondern auch die notwendigen Transformationen anzuwenden, um die Objekte basierend auf der Position des Betrachters korrekt darzustellen. Dies wird im Beispiel [Implementierung der Rotation basierend auf nicht-XR-Eingaben](#implementierung_der_rotation_basierend_auf_nicht-xr-eingaben) demonstriert, welches eine Möglichkeit zeigt, wie Sie diese Methode nutzen können, um den Benutzer mit der Maus seinen Blickwinkel neigen und schwenken zu lassen.

## Syntax

```js-nolint
getOffsetReferenceSpace(originOffset)
```

### Parameter

- `originOffset`
  - : Ein {{domxref("XRRigidTransform")}}, der den Versatz zum Ursprung des neuen Referenzraums angibt. Diese Werte werden zur Position und Orientierung des aktuellen Referenzraums hinzugefügt, und das Ergebnis wird als Position und Orientierung des neu erstellten {{domxref("XRReferenceSpace")}} verwendet.

### Rückgabewert

Ein neues {{domxref("XRReferenceSpace")}}-Objekt, das einen Referenzraum mit demselben nativen Ursprung wie der Referenzraum beschreibt, auf dem die Methode aufgerufen wurde. Der Ursprungsversatz gibt die Entfernung vom Objekt zu dem durch `originOffset` angegebenen Punkt an.

Wenn das Objekt, auf dem Sie diese Methode aufrufen, ein {{domxref("XRBoundedReferenceSpace")}} ist, ist das zurückgegebene Objekt ebenfalls eines. Die {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} des neuen Referenzraums wird auf die `boundsGeometry` des ursprünglichen Objekts gesetzt, wobei jeder seiner Punkte mit dem Inversen von `originOffset` multipliziert wird.

## Beispiele

Nachfolgend sind einige Beispiele, die zeigen, wie `getOffsetReferenceSpace()` verwendet wird.

### Teleportieren oder Setzen der Position des Betrachters

Beim erstmaligen Erstellen einer Szene müssen Sie möglicherweise die Position des Benutzers innerhalb der 3D-Welt festlegen. Dies können Sie mit `getOffsetReferenceSpace()` tun.

```js
xrSession.requestReferenceSpace("local").then((refSpace) => {
  xrReferenceSpace = refSpace;
  xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(
    new XRRigidTransform(startPosition, { x: 0, y: 0, z: 1.0, w: 1.0 }),
  );
  xrSession.requestAnimationFrame(drawFrame);
});
```

In diesem Code erhalten wir einen lokalen Referenzraum und verwenden dann `getOffsetReferenceSpace()`, um einen neuen Raum zu erstellen, dessen Ursprung auf eine durch `startPosition` angegebene Position angepasst ist und dessen Orientierung direkt entlang der Z-Achse blickt. Dann wird der erste Animationsrahmen mit {{domxref("XRSession")}}'s {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} angefordert.

### Implementierung der Rotation basierend auf nicht-XR-Eingaben

Die von WebXR direkt unterstützten Eingabekontrollen sind alle dedizierte VR- oder AR-Eingabegeräte. Um Maus, Tastatur oder andere Eingabegeräte zu verwenden, um Objekte im 3D-Raum zu bewegen oder anderweitig zu transformieren—oder dem Benutzer zu erlauben, durch den Raum zu navigieren—müssen Sie etwas Code schreiben, um die Eingaben zu lesen und die Bewegungen durchzuführen.

Dies ist ein weiteres gutes Anwendungsbeispiel für `getOffsetReferenceSpace()`. In diesem Beispiel zeigen wir Code, der es dem Benutzer ermöglicht, sich umzusehen, indem er mit der rechten Maustaste klickt und die Maus bewegt, um den Blickwinkel zu ändern.

Zuerst fügen wir einen Ereignishandler für {{domxref("Element.mousemove_event", "mousemove")}}-Events hinzu, der unseren Code aufruft, um die Rotation durchzuführen, wenn die rechte Maustaste gedrückt ist. Beachten Sie auch, dass wir {{domxref("Element.contextmenu_event", "oncontextmenu")}} so einstellen, dass es ignoriert wird, indem wir {{domxref("Event.preventDefault", "preventDefault()")}} auf diesen Events aufrufen. Dies verhindert, dass die Rechtsklicks das Kontextmenü im Browser aufrufen.

```js
canvas.oncontextmenu = (event) => {
  event.preventDefault();
};
canvas.addEventListener("mousemove", (event) => {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
});
```

Als nächstes die Funktion `rotateViewBy()`, die die Guckrichtung der Maus basierend auf den Maus-Delta-Werten des `mousemove`-Events aktualisiert. Die Neigung ist eingeschränkt, sodass Sie nicht über gerade nach oben oder unten hinaus blicken können. Jedes Mal, wenn dies aufgerufen wird, werden die neuen Offsets verwendet, um die aktuellen Werte von `mousePitch` und `mouseYaw` zu aktualisieren.

```js
let mouseYaw = 0.0;
let mousePitch = 0.0;
const inverseOrientation = quat.create();
const MOUSE_SPEED = 0.003;

function rotateViewBy(dx, dy) {
  mouseYaw += dx * MOUSE_SPEED;
  mousePitch += dy * MOUSE_SPEED;

  if (mousePitch < -Math.PI * 0.5) {
    mousePitch = -Math.PI * 0.5;
  } else if (mousePitch > Math.PI * 0.5) {
    mousePitch = Math.PI * 0.5;
  }
}
```

Schließlich benötigen wir Code, der tatsächlich den berechneten Kurs und die Neigung auf die Orientierung des Betrachters anwendet. Diese Funktion, `applyMouseMovement()`, behandelt das:

```js
function applyMouseMovement(refSpace) {
  if (!mouseYaw && !mousePitch) {
    return refSpace;
  }

  quat.identity(inverseOrientation);
  quat.rotateX(inverseOrientation, inverseOrientation, -mousePitch);
  quat.rotateY(inverseOrientation, inverseOrientation, -mouseYaw);

  let newTransform = new XRRigidTransform(
    { x: 0, y: 0, z: 0 },
    {
      x: inverseOrientation[0],
      y: inverseOrientation[1],
      z: inverseOrientation[2],
      w: inverseOrientation[3],
    },
  );

  return refSpace.getOffsetReferenceSpace(newTransform);
}
```

Diese Funktion erstellt eine inverse Orientierungs-Matrix—die verwendet wird, um den Betrachter zu orientieren—aus den aktuellen Neigungs- und Kurswerten und verwendet dann diese Matrix als Quelle der Orientierung beim Aufruf von {{domxref("XRRigidTransform.XRRigidTransform", "XRRigidTransform()")}}. Der neue Referenzraum der {{domxref("XRRigidTransform")}} wird dann abgerufen und an den Aufrufer zurückgegeben.

Dieser neue Referenzraum ist einer, in dem die Position des Betrachters unverändert bleibt, aber seine Orientierung basierend auf den aus den akkumulierten Mausbewegungen generierten Neigungs- und Kurswerten verändert wurde. `applyMouseMovement()` sollte beim Zeichnen eines Rahmens aufgerufen werden, unmittelbar bevor die Pose des Betrachters mit {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} abgerufen wird. Das Rendering sollte in diesem Referenzraum durchgeführt werden.

Sie können ähnlichen Code im Einsatz in unserem allgemeinen WebXR-Tutorialartikel namens [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) sehen. Schauen Sie insbesondere in den Abschnitt [Start der WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#starting_up_the_webxr_session).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
