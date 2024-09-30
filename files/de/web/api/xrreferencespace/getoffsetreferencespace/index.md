---
title: "XRReferenceSpace: getOffsetReferenceSpace()-Methode"
short-title: getOffsetReferenceSpace()
slug: Web/API/XRReferenceSpace/getOffsetReferenceSpace
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`getOffsetReferenceSpace()`**-Methode des [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Interfaces gibt ein neues Referenzraumobjekt zurück, das den relativen Positionsunterschied zwischen dem Objekt, auf dem die Methode aufgerufen wird, und einem bestimmten Punkt im dreidimensionalen Raum beschreibt. Das von `getOffsetReferenceSpace()` zurückgegebene Objekt ist ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), wenn es auf einem `XRReferenceSpace` aufgerufen wird, oder ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), wenn es auf einem Objekt dieses Typs aufgerufen wird.

Mit anderen Worten, wenn Sie ein Objekt im 3D-Raum haben und ein anderes Objekt relativ dazu positionieren müssen, können Sie `getOffsetReferenceSpace()` aufrufen und die Position und Ausrichtung übergeben, die das zweite Objekt relativ zur Position und Ausrichtung des Objekts haben soll, auf dem Sie `getOffsetReferenceSpace()` aufrufen.

Beim Zeichnen der Szene können Sie dann den Offset-Referenzraum verwenden, um Objekte nicht nur relativ zueinander zu positionieren, sondern auch die erforderlichen Transformationen anzuwenden, um Objekte basierend auf der Position des Betrachters korrekt darzustellen. Dies wird im Beispiel [Implementierung der Rotation basierend auf Nicht-XR-Eingaben](#implementierung_der_rotation_basierend_auf_nicht-xr-eingaben) demonstriert, das einen Weg zeigt, wie diese Methode verwendet werden kann, um dem Benutzer die Möglichkeit zu geben, mit der Maus seinen Blickwinkel zu neigen und zu schwenken.

## Syntax

```js-nolint
getOffsetReferenceSpace(originOffset)
```

### Parameter

- `originOffset`
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der den Offset zum Ursprung des neuen Referenzraums angibt. Diese Werte werden zur Position und Ausrichtung des aktuellen Referenzraums addiert, und das Ergebnis wird als Position und Ausrichtung des neu erstellten [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) verwendet.

### Rückgabewert

Ein neues [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt, das einen Referenzraum mit demselben nativen Ursprung beschreibt wie der Referenzraum, auf dem die Methode aufgerufen wurde, jedoch mit einem Ursprungs-Offset, der den Abstand vom Objekt zu dem Punkt angibt, der durch `originOffset` gegeben ist.

Wenn das Objekt, auf dem Sie diese Methode aufrufen, ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) ist, ist das zurückgegebene Objekt ebenfalls eines. Das [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) des neuen Referenzraums wird auf das `boundsGeometry` des ursprünglichen Objekts gesetzt, wobei jeder seiner Punkte mit dem Inversen von `originOffset` multipliziert wird.

## Beispiele

Im Folgenden sind einige Beispiele aufgeführt, die zeigen, wie man `getOffsetReferenceSpace()` verwendet.

### Teleportieren oder Festlegen der Position des Betrachters

Beim ersten Erstellen einer Szene müssen Sie möglicherweise die Position des Benutzers in der 3D-Welt festlegen. Sie können dies mit `getOffsetReferenceSpace()` tun.

```js
xrSession.requestReferenceSpace("local").then((refSpace) => {
  xrReferenceSpace = refSpace;
  xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(
    new XRRigidTransform(startPosition, { x: 0, y: 0, z: 1.0, w: 1.0 }),
  );
  xrSession.requestAnimationFrame(drawFrame);
});
```

In diesem Code erhalten wir einen lokalen Referenzraum und verwenden dann `getOffsetReferenceSpace()`, um einen neuen Raum zu erstellen, dessen Ursprung auf eine durch `startPosition` angegebene Position angepasst ist und dessen Ausrichtung direkt entlang der Z-Achse schaut. Dann wird der erste Animationsrahmen unter Verwendung von [`XRSession`](/de/docs/Web/API/XRSession)`s [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) angefordert.

### Implementierung der Rotation basierend auf Nicht-XR-Eingaben

Die von WebXR direkt unterstützten Eingabesteuerelemente sind alle dedizierte VR- oder AR-Eingabegeräte. Um Maus, Tastatur oder andere Eingabegeräte zu verwenden, um Objekte im 3D-Raum zu bewegen oder anderweitig zu transformieren – oder um dem Benutzer das Durchführen durch den Raum zu ermöglichen – müssen Sie etwas Code schreiben, um die Eingaben auszulesen und die Bewegungen durchzuführen.

Dies ist ein weiterer guter Anwendungsfall für `getOffsetReferenceSpace()`. In diesem Beispiel zeigen wir Code, der es dem Benutzer ermöglicht, sich umzusehen, indem er mit der rechten Maustaste klickt und die Maus bewegt, um den Blickwinkel zu ändern.

Zuerst fügen wir einen Ereignishandler für [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignisse hinzu, der unseren Code aufruft, um die Rotation durchzuführen, wenn die rechte Maustaste gedrückt ist. Beachten Sie auch, dass wir [`oncontextmenu`](/de/docs/Web/API/Element/contextmenu_event) so einrichten, dass es ignoriert wird, indem wir [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf diesen Ereignissen aufrufen. Dies verhindert, dass durch Rechtsklicks das Kontextmenü im Browser angezeigt wird.

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

Als nächstes die Funktion `rotateViewBy()`, die die Gier- und Neigungsrichtung des Mausblicks basierend auf den Delta-Werten der Maus aus dem `mousemove`-Ereignis aktualisiert. Die Neigung ist so eingeschränkt, dass man nicht über direkt nach oben und direkt nach unten hinausschauen kann. Jedes Mal, wenn dies aufgerufen wird, werden die neuen Offsets verwendet, um die aktuellen Werte von `mousePitch` und `mouseYaw` zu aktualisieren.

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

Schließlich benötigen wir Code, der tatsächlich die berechneten Gier- und Neigungswerte auf die Ansichtsausrichtung des Betrachters anwendet. Diese Funktion, `applyMouseMovement()`, übernimmt das:

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

Diese Funktion erstellt eine inverse Orientierungs-Matrix, die verwendet wird, um den Betrachter zu orientieren, basierend auf den aktuellen Gier- und Neigungswerten, und verwendet diese Matrix als Quelle der Ausrichtung beim Aufruf von [`XRRigidTransform()`](/de/docs/Web/API/XRRigidTransform/XRRigidTransform). Der neue [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)`s-Referenzraum wird dann abgerufen und an den Aufrufer zurückgegeben.

Dieser neue Referenzraum ist einer, in dem die Position des Betrachters unverändert bleibt, aber seine Ausrichtung basierend auf den aus den gesammelten Mauseingaben erzeugten Gier- und Neigungswerten verändert wurde. `applyMouseMovement()` sollte aufgerufen werden, wenn ein Rahmen gezeichnet wird, unmittelbar bevor die Pose des Betrachters mit [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) abgerufen wird, und das Rendering sollte in diesem Referenzraum durchgeführt werden.

Ähnlichen Code können Sie in unserem umfassenderen WebXR-Tutorial-Artikel mit dem Titel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) sehen. Insbesondere sollten Sie sich den Abschnitt [Starten der WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#starting_up_the_webxr_session) ansehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
