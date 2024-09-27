---
title: "XRReferenceSpace: getOffsetReferenceSpace() Methode"
short-title: getOffsetReferenceSpace()
slug: Web/API/XRReferenceSpace/getOffsetReferenceSpace
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die Methode **`getOffsetReferenceSpace()`** des [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Interfaces liefert ein neues Referenzraumobjekt, das den relativen Unterschied in der Position zwischen dem Objekt, auf dem die Methode aufgerufen wird, und einem gegebenen Punkt im 3D-Raum beschreibt. Das von `getOffsetReferenceSpace()` zurückgegebene Objekt ist ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), wenn es auf einem `XRReferenceSpace` aufgerufen wird, oder ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), wenn es auf einem Objekt dieses Typs aufgerufen wird.

Anders ausgedrückt, wenn Sie ein Objekt im 3D-Raum haben und ein anderes Objekt relativ dazu positionieren müssen, können Sie `getOffsetReferenceSpace()` aufrufen und die Position und Orientierung übergeben, die das zweite Objekt _relativ zur Position und Orientierung des Objekts, auf dem Sie `getOffsetReferenceSpace()` aufrufen_, haben soll.

Beim Zeichnen der Szene können Sie dann den Versatz-Referenzraum verwenden, um nicht nur Objekte relativ zueinander zu platzieren, sondern auch die nötigen Transformationen anzuwenden, um die Objekte richtig basierend auf der Position des Betrachters darzustellen. Dies wird im Beispiel [Implementing rotation based on non-XR inputs](#implementierung_der_rotation_basierend_auf_nicht-xr-eingaben) demonstriert, das eine Möglichkeit zeigt, diese Methode zu nutzen, um dem Benutzer zu erlauben, mit der Maus den Betrachtungswinkel zu neigen und zu drehen.

## Syntax

### Parameter

- `originOffset`
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das den Versatz zum Ursprung des neuen Referenzraums angibt. Diese Werte werden zur Position und Orientierung des aktuellen Referenzraums addiert und das Ergebnis wird als Position und Orientierung des neu erzeugten [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) verwendet.

### Rückgabewert

Ein neues [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Objekt, das einen Referenzraum mit demselben nativen Ursprung wie der Referenzraum beschreibt, auf dem die Methode aufgerufen wurde, jedoch mit einem Ursprungsversatz, der die Entfernung vom Objekt zu dem Punkt angibt, der durch `originOffset` gegeben ist.

Wenn das Objekt, auf dem Sie diese Methode aufrufen, ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) ist, ist das zurückgegebene Objekt ebenfalls eines. Die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) des neuen Referenzraums wird auf die `boundsGeometry` des ursprünglichen Objekts gesetzt, wobei jeder seiner Punkte mit dem Inversen von `originOffset` multipliziert wird.

## Beispiele

Im Folgenden sind einige Beispiele, die zeigen, wie `getOffsetReferenceSpace()` verwendet wird.

### Teleportieren oder Festlegen der Position des Betrachters

Beim ersten Erstellen einer Szene müssen Sie möglicherweise die Position des Benutzers innerhalb der 3D-Welt festlegen. Dies können Sie mit `getOffsetReferenceSpace()` tun.

In diesem Code erhalten wir einen lokalen Referenzraum und verwenden dann `getOffsetReferenceSpace()`, um einen neuen Raum zu erzeugen, dessen Ursprung auf eine durch `startPosition` gegebene Position angepasst ist und dessen Orientierung direkt entlang der Z-Achse blickt. Anschließend wird der erste Animationsframe mithilfe von [`XRSession`](/de/docs/Web/API/XRSession)'s [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) angefordert.

### Implementierung der Rotation basierend auf nicht-XR-Eingaben

Die von WebXR direkt unterstützten Eingabesteuerungen sind alle dedizierte VR- oder AR-Eingabegeräte. Um Maus, Tastatur oder andere Eingabegeräte zu verwenden, um Objekte im 3D-Raum zu bewegen oder anderweitig zu transformieren, oder um dem Benutzer zu erlauben, sich durch den Raum zu bewegen, müssen Sie einige Codezeilen schreiben, um die Eingaben zu lesen und die Bewegungen durchzuführen.

Dies ist ein weiterer guter Anwendungsfall für `getOffsetReferenceSpace()`. In diesem Beispiel zeigen wir Code, der es dem Benutzer ermöglicht, sich umzusehen, indem er mit der rechten Maustaste klickt und die Maus bewegt, um den Betrachtungswinkel zu ändern.

Zuerst fügen wir einen Ereignishandler für [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignisse hinzu, der unseren Code zur Durchführung der Rotation aufruft, wenn die rechte Maustaste gedrückt ist. Beachten Sie auch, dass wir [`oncontextmenu`](/de/docs/Web/API/Element/contextmenu_event) durch Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf diesen Ereignissen ignorieren werden. Dies verhindert, dass durch Rechtsklick das Kontextmenü im Browser angezeigt wird.

Als nächstes die `rotateViewBy()`-Funktion, die die Gier- und Neigungsrichtung des Mausblicks basierend auf den Delta-Werten der Maus aus dem `mousemove`-Ereignis aktualisiert. Die Neigung ist eingeschränkt, sodass Sie nicht über direkt nach oben oder unten hinausblicken können. Jedes Mal, wenn diese Funktion aufgerufen wird, werden die neuen Offsets verwendet, um die aktuellen Werte von `mousePitch` und `mouseYaw` zu aktualisieren.

Schließlich benötigen wir Code, der die berechnete Gier und Neigung tatsächlich auf die Orientierung des Betrachters anwendet. Diese Funktion, `applyMouseMovement()`, übernimmt das:

Diese Funktion erstellt eine inverse Orientierungsmatrix, die verwendet wird, um den Betrachter zu orientieren, aus den aktuellen Neigungs- und Gierwerten und verwendet diese Matrix als Quelle der Orientierung beim Aufrufen von [`XRRigidTransform()`](/de/docs/Web/API/XRRigidTransform/XRRigidTransform). Der neue Referenzraum der neuen [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) wird dann abgerufen und an den Aufrufer zurückgegeben.

Dieser neue Referenzraum ist einer, in dem die Position des Betrachters unverändert ist, aber seine Orientierung basierend auf den aus den gesammelten Mausbewegungen generierten Neigungs- und Gierwerten geändert wurde. `applyMouseMovement()` sollte aufgerufen werden, wenn ein Frame gezeichnet wird, unmittelbar bevor die Pose des Betrachters mithilfe von [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) abgerufen wird, und das Rendering sollte in diesem Referenzraum durchgeführt werden.

Ähnlichen Code können Sie in unserem umfassenderen WebXR-Tutorial-Artikel mit dem Titel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) finden. Besonders empfehlenswert ist der Abschnitt [Starten der WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#starting_up_the_webxr_session).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
