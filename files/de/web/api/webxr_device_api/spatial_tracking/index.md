---
title: "Räume und Referenzräume: Räumliches Tracking in WebXR"
slug: Web/API/WebXR_Device_API/Spatial_tracking
l10n:
  sourceCommit: cda88aaf82e8bc03b3826396d96aab18a669134c
---

{{DefaultAPISidebar("WebXR Device API")}}

Die WebXR-APIs, die für die Implementierung von erweiterter und virtueller Realität verwendet werden, sind speziell dafür konzipiert, die Möglichkeit zu bieten, einen Menschen in eine virtuelle Umgebung einzufügen. Um dies zu erreichen, muss die Software nicht nur in der Lage sein, die Positionen, Ausrichtungen und Bewegungen von Objekten in der virtuellen Welt zu verfolgen, sondern auch die Position, Ausrichtung und Bewegung des Nutzers. Doch WebXR geht darüber hinaus, indem es die Fähigkeit hinzufügt, die Position, Ausrichtung und Bewegung der Eingabegeräte zu verfolgen, die Daten erzeugen, um die Position und Bewegung einzelner Teile des Körpers des Betrachters zu bestimmen (mit entsprechender Ausrüstung).

Die Position und Bewegung des Headsets des Nutzers repräsentieren die Position und Ausrichtung des Kopfes in der virtuellen Umgebung. Handcontroller repräsentieren ihre Hände in gleicher Weise. Andere Hardware-Elemente können ähnlich verwendet werden, um andere Teile des Körpers zu repräsentieren und zusätzliche Daten zur Simulation der Aktionen des Nutzers in ihrer Umgebung bereitzustellen.

In diesem Leitfaden werden wir untersuchen, wie WebXR **Räume** und insbesondere **Referenzräume** verwendet, um die Positionen, Ausrichtungen und Bewegungen von Objekten und des Körpers des Nutzers in der virtuellen Welt zu verfolgen.

> [!NOTE]
> Dieser Artikel geht davon aus, dass Sie mit den in [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry) eingeführten Konzepten vertraut sind: das heißt, mit den Grundlagen von 3D-Koordinatensystemen sowie mit WebXR-Räumen, Referenzräumen und wie Referenzräume verwendet werden, um lokale Koordinatensysteme für einzelne Objekte oder bewegliche Komponenten innerhalb einer Szene zu erstellen.

## Repräsentation einer Position mit einem Referenzraum

Wie in [Definition räumlicher Beziehungen mit Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Geometry#defining_spatial_relationships_with_reference_spaces) behandelt, etablieren Referenzräume ein lokales Koordinatensystem, das von einem anderen Koordinatensystem versetzt ist, welches selbst durch einen anderen Raum definiert ist. Daher kann ein Referenzraum verwendet werden, um die Position und Ausrichtung eines Punktes und daraus folgend des gesamten Objekts zu definieren, für das dieser Punkt der Ursprung ist. Während dies etwas schwerfällig für jedes einzelne Objekt in einer Szene zu verwenden ist, kann es sehr nützlich sein, für einige spezifische Objekte auf diese Weise ihr eigenes Koordinatensystem zu haben.

- **Der Welt-Raum**; der Ursprung dieses Raumes ist der Ursprung des [WebGL-Koordinatensystems](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection), das der gesamten 3D-Leinwand zugrunde liegt.
- Der Spieler, das Avatar oder die Kamera; der Ursprung dieses Raumes wird als Kameraposition zum Rendern der Szene verwendet, die dem Nutzer angezeigt werden soll.
- Die Hand und/oder der Handcontroller; jeder von diesen repräsentiert eine der Hände des Nutzers, entweder in der Form der Hand selbst oder eines Controllers (oder beides). Der Ursprung ist im Allgemeinen das Zentrum der zur Faust geballten Hand des Nutzers.
- **Der Zielstrahl**; jedes Controller- oder andere Handgerät kann einen zugehörigen Zielstrahl haben, der durch einen Raum repräsentiert wird, dessen Ursprung am Punkt des Controllers liegt, an dem der Strahl ausgesendet wird, und so ausgerichtet ist, dass -Z in die Richtung des Ziels zeigt, auf das er gerichtet ist.

Da jeder dieser Räume auf einem Referenzraum als Grundlage definiert ist, kann die WebXR Device API leicht verwendet werden, um zwischen den Koordinatensystemen zu konvertieren, Operationen durchzuführen, die diese Räume und ihre entsprechenden Objekte betreffen, und so weiter.

## Beschreiben einer Position relativ zu einem Raum

Es gibt zwei Szenarien, in denen Sie möglicherweise eine Position und/oder Ausrichtung relativ zu einem Raum beschreiben müssen. Das erste ist [oben beschrieben](#referenzräume_verschieben_oder_bewegen): Anwendung eines Referenzraums auf einen Versatz (oder umgekehrt, da das Ergebnis dasselbe ist), um die Transformationsmatrix zu bestimmen, die den resultierenden Ort im Koordinatensystem des Raumes repräsentiert.

### Posen

Sobald Ihr Referenzraum oder Ihre Referenzräume für die verschiedenen Schlüsselobjekte in der Szene festgelegt sind, werden Sie Zeiten haben, in denen Sie eine andere Position relativ zum Ursprung eines bestimmten Referenzraums beschreiben müssen. Dies geschieht mit Posen. Eine Pose beschreibt eine Position und Ausrichtung relativ zum Ursprung des Referenzraums, aus dem sie erstellt wurde.

In WebXR wird eine Pose durch ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt repräsentiert, dessen [`transform`](/de/docs/Web/API/XRPose/transform)-Eigenschaft ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) ist, das die Transformationsmatrix definiert, die, auf eine beliebige Koordinate, Vektor oder Matrix im ursprünglichen Raum angewendet, diese in den Zielraum umwandelt. Somit kann eine Pose nicht nur zur Umwandlung und Bestimmung von Positionen, sondern auch für Rotationsinformationen verwendet werden.

Es gibt nur eine Möglichkeit, ein [`XRPose`](/de/docs/Web/API/XRPose) zu erstellen, nämlich mit der Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) in einem Animationsframe, wie er mit einem [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt angegeben wird. Das bedeutet, dass Sie häufig Posen innerhalb Ihres Framerendering-Codes verwenden werden, der als Rückruf von der Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) des [`XRFrame`](/de/docs/Web/API/XRFrame) ausgeführt wird.

`getPose()` berechnet die Position eines [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) relativ zum Ursprung eines angegebenen [`XRSpace`](/de/docs/Web/API/XRSpace) und erzeugt dann eine Pose, die die resultierende Position und Ausrichtung repräsentiert.

Wenn Sie zum Beispiel die Darstellung eines Handcontrollers mit dem [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) des Controllers zeichnen möchten, können Sie die benötigte Pose so erhalten:

```js
let controlPose = frame.getPose(inputSource.gripSpace, worldRefSpace);
```

Dies konvertiert die Position und Ausrichtung des `gripSpace` des Eingabegeräts in das Koordinatensystem der Welt und erzeugt die entsprechende `XRPose`, die in `controlPose` gespeichert wird. Sie können dann [`transform`](/de/docs/Web/API/XRPose/transform) von `controlPose` auf die Vertices im Objektmodell anwenden, das den Controller darstellt, um die WebGL-Koordinaten zu berechnen, die beim Rendern der Darstellung des Controllers im Framebuffer zu verwenden sind.

### Betrachterposen

Ein spezialisierter Typ einer Pose, die **Betrachterpose**, ist die Pose, die die Perspektive des Betrachters der Szene repräsentiert. Eine Betrachterpose wird durch das [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Interface von WebXR dargestellt. Beim Rendern eines Frames verwenden Sie die Betrachterpose, um die Position und Blickrichtung des Betrachters zu bestimmen, um [die virtuelle Kamera zu platzieren](/de/docs/Web/API/WebXR_Device_API/Cameras) und [die Szene zu rendern](/de/docs/Web/API/WebXR_Device_API/Rendering).

Die einzige Möglichkeit, eine Pose zu erhalten, die Positionsinformationen von einem Raum in einen anderen anpasst, ist durch das [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das von Ihrer Frame-Rendering-Rückruffunktion empfangen wird, die angegeben wurde, als Sie die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) des [`XRSession`](/de/docs/Web/API/XRSession) aufgerufen haben.

Zum Beispiel würde die folgende Zeile, gegeben einer [`XRSession`](/de/docs/Web/API/XRSession), deren Referenzraum `worldRefSpace` ist, die erste Animationsframe-Anfrage planen:

```js
animationFrameRequestID = xrSession.requestAnimationFrame(myDrawFrame);
```

Dann könnte die Funktion `myDrawFrame()`, die Rückruffunktion, die ausgeführt wird, wenn es Zeit ist, den Frame zu zeichnen, so aussehen:

```js
function myDrawFrame(currentFrameTime, frame) {
  let session = frame.session;
  let viewerPose = frame.getViewerPose(viewerRefSpace);

  animationFrameRequestID = session.requestAnimationFrame(myDrawFrame);

  if (viewerPose) {
    // render the frame
  }
}
```

Der Parameter `frame` ist das [`XRFrame`](/de/docs/Web/API/XRFrame), das die Animationsframe-Informationen enthält, die von WebXR bereitgestellt werden. Wenn diese Funktion aufgerufen wird, beginnt sie damit, die [`XRSession`](/de/docs/Web/API/XRSession) vom Frame-Objekt zu erhalten, dann verwendet sie die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des Frames, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) für den Betrachter zu berechnen, gegeben `viewerRefSpace`, welche die aktuelle Blickrichtung und Position des Betrachters beschreibt.

Die zurückgegebene Betrachterpose, `viewerPose`, kann wiederum verwendet werden, um [Positionen und Ausrichtungen zu berechnen, um die Objekte in der Szene korrekt zu rendern](/de/docs/Web/API/WebXR_Device_API/Cameras), ausgehend vom Blickwinkel des Benutzers.

## Referenzräume verschieben oder bewegen

Während Sie einen Referenzraum nicht ändern können, da sowohl [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) als auch [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) schreibgeschützt sind, können Sie einfach neue Referenzräume erstellen, indem Sie einen Offset-Transformation darauf anwenden. Dies geschieht, indem Sie die Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des Referenzraums aufrufen.

### Positionen innerhalb eines Referenzraums verschieben

Der einfachste Fall, `getOffsetReferenceSpace()` zu verwenden, ist die Umwandlung eines Punktes oder einer Matrix im Kontext desselben Raums. Zum Beispiel, um einen neuen Referenzraum zu erstellen, der den Referenzraum `aRefSpace` um einen halben Meter in jede Richtung verschiebt, können Sie so etwas machen:

```js
let halfMeterTransform = new XRRigidTransform({
  x: 0.5,
  y: 0.5,
  z: 0.5,
  w: 1.0,
});
aRefSpace = aRefSpace.getOffsetReferenceSpace(halfMeterTransform);
```

Dies ersetzt den bestehenden Referenzraum `aRefSpace` durch einen, dessen Koordinaten und Ausrichtung die Transformation `halfMeterTransform` angewendet wurde. Ohne beinhaltete Orientierungsdaten in der Transformation bleibt die Ausrichtung von `aRefSpace` unberührt.

### Konvertierung zwischen WebXR-Session-Typen

Ein weiterer häufiger Grund, warum Sie Positionsinformationen von einem Referenzraum in einen anderen konvertieren müssen, ist, wenn es notwendig ist, den Session-Typ von `inline` zu `immersive-vr` oder umgekehrt zu ändern. Dies passiert häufig, wenn Ihre Benutzeroberfläche eine Möglichkeit bietet, die Szene inline im Kontext einer Webseite zu betrachten, mit einem Button oder einer anderen Steuerung, um in den immersiven Modus zu wechseln.

Da die meisten Nutzer es bevorzugen würden, dass Sie die gleiche Betrachterposition und Blickrichtung während dieses Übergangs beibehalten, können Sie die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des [`XRFrame`](/de/docs/Web/API/XRFrame) verwenden, um die aktuelle [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zu erhalten, die Sitzung zu wechseln und dann die gespeicherte Betrachterpose verwenden, um die Position und Blickrichtung des Betrachters wiederherzustellen.

```js
let viewerPose = frame.getViewerPose(worldReferenceSpace);
let newSession = navigator.xr.requestSession("immersive-vr", {
  requiredFeatures: "unbounded",
});
worldReferenceSpace = await newSession.requestReferenceSpace("unbounded");
viewerPose = worldReferenceSpace.getOffsetReferenceSpace(viewerPose.transform);
```

Hier wird die Betrachterpose erhalten, mit ihrer Transformation relativ zu `worldReferenceSpace`, dem globalen Referenzraum der aktuellen Sitzung, definiert. Dann wird eine neue Sitzung etabliert und ein Referenzraum erstellt, um der neue globale Referenzraum zu werden.

Schließlich wird die gespeicherte `viewerPose` mithilfe der Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des neuen Referenzsystems in das neue Koordinatensystem des Welt-Raumes konvertiert. Mit dieser in der Hand können wir wie gewohnt mit dem Rendern der Szene fortfahren, ohne dass die Perspektive des Betrachters verändert wird.

### Konvertierung zwischen begrenzten und unbegrenzten Räumen

Manchmal, wenn Ihre primäre Erfahrung einen unbegrenzten Raum nutzt, kann es notwendig sein, die Erfahrung des Nutzers vorübergehend zu einem begrenzten Raum zu wechseln. Beispielsweise kann es einfacher sein, die Interaktionen mit den Objekten in einem einzelnen Raum eines Hauses zu implementieren, indem man zu einem begrenzten Raum wechselt, der den einzelnen Raum repräsentiert. Dies könnte es einfacher machen, Dinge wie die Unterstützung für das Anpassen der Wände, das Platzieren von Möbeln auf dem Boden usw. zu implementieren.

In solchen Fällen, in denen Sie beginnen müssen, mit einem anderen Referenzraum zu verfolgen, als den, den Sie verwendet haben, können Sie eine Kombination aus [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) und einigen Matrixberechnungen verwenden, um alles in Ihrer Szene an den Ursprung des neuen Referenzrahmens zu verlagern.

Da `getViewerPose()` nur in einem [`XRFrame`](/de/docs/Web/API/XRFrame) verfügbar ist, müssen Sie diesen Prozess in Ihrer Rendering-Rückruf-Funktion beginnen, möglicherweise mit einem Worker, um die Berechnungen durchzuführen, um das Frame-Dropping zu reduzieren.

```js
let previousViewerPose = null;

function myDrawFrame(currentFrameTime, frame) {
  let session = frame.session;
  let viewerPose = frame.getViewerPose(viewerRefSpace);

  animationFrameRequestID = session.requestAnimationFrame(myDrawFrame);

  if (viewerPose) {
    previousViewerPose ??= viewerPose;
    let offsetMatrix = mat4.create();
    mat4.sub(
      offsetMatrix,
      previousViewerPose.transform.matrix,
      viewerPose.transform.matrix,
    );

    previousViewerPose = viewerPose;
  }
}
```

## Kontinuität und Wiederherstellung nach Trackverlust

Manchmal, während der Nutzer seine XR-Hardware aktiv mit Ihrer App verwendet, kann der Datenfluss über die Positions- und Ausrichtungsaktualisierungen des Nutzers für eine Zeit unterbrochen werden. Nicht nur, dass Ihre App bestimmen muss, was dem Nutzer in dieser Zeit angezeigt wird, es muss auch sauber wiederhergestellt werden, wenn das Tracking fortgesetzt wird.

Sobald die XR-Hardware beginnt, Tracking-Informationen bereitzustellen, wird sie dies fortsetzen, bis die XR-Sitzung geschlossen wird. Diese Daten werden in jedem Frame durch den Aufruf der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des [`XRFrame`](/de/docs/Web/API/XRFrame) abgerufen, um die Position und Blickrichtung des Betrachters zu erhalten (wodurch definiert wird, was der Nutzer sehen sollte), und [`getPose()`](/de/docs/Web/API/XRFrame/getPose), um alle anderen Posen zu erhalten, wie die Positionen der Handcontroller und anderer XR-Systemteile.

### Erkennen und Funktionieren nach Trackverlust

Wenn das Tracking fehlschlägt, zum Beispiel aufgrund eines vorübergehenden Verlusts der Verbindung zwischen dem Headset und dem Gerät des Nutzers, wird die XR-Schicht weiterhin Posen zurückgeben, aber die Eigenschaft [`emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition) dieser Posen wird `true` sein, was darauf hinweist, dass die Berechnung der Position auf einer Vermutung über die aktuelle Position des Nutzers basiert.

Einige XR-Hardware verwenden Algorithmen, um die geschätzte Position des Nutzers basierend auf der aktuellen Bewegung zu berechnen, während andere Hardware keine Bewegung meldet, aber mit `emulatedPosition` auf `true`. In beiden Fällen möchten Sie möglicherweise je nach Ihren spezifischen Anforderungen das Rendering anpassen, um den Verlust zu kompensieren.

### Wenn das Tracking fortgesetzt wird

Sie können erkennen, wann das Tracking nach einem Verlust wieder aufgenommen wird, wenn die Nutzerposition springt, während gleichzeitig der Wert von `emulatedPosition` sich von `true` auf `false` ändert. Wie Sie damit umgehen, hängt von Ihrer Anwendung ab. Wenn Ihre App eine Möglichkeit bietet, dass der Nutzer sich durch die virtuelle Welt bewegt, ohne sich physisch in der realen Welt zu bewegen (ein sogenannter **Teleportations**-Mechanismus), können Sie die neue Position akzeptieren und fortfahren, sodass der Sprung von Ihrer zuvor angenommenen Position sofort mit der neuen Position korrigiert wird.

Andererseits, wenn Ihre App den Nutzer physisch in realem Raum bewegen lässt, um sich durch Ihre virtuelle Welt zu bewegen, kann das Annehmen der neuen Tracking-Position und das Springen dahin für den Nutzer beunruhigend sein und sollte, wenn möglich, vermieden werden. Stattdessen verwenden Sie die Differenz zwischen der aktuellen Position und der neuen Tracking-Position, um den neuen Teleportationsversatz zu berechnen; das heißt, eine Transformations, die auf alles angewendet wird, um die Positions- und Ausrichtungsdaten von WebXR an Ihre Bedürfnisse anzupassen.

Sie können dies tun, indem Sie einen neuen Referenzraum erstellen, der den Abstand, den die Position des Betrachters seit dem vorherigen Frame gesprungen ist, in seinen effektiven Ursprung einbezieht, mit der Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace).

### Das Reset-Ereignis

Wenn eine Diskontinuität oder ein Bruch im nativen oder effektiven Ursprung eines Referenzraums auftritt, sendet der {{Glossary("user_agent", "User Agent")}} dem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis. Dieses Ereignis zeigt an, dass eine bedeutende Änderung der Position des Ursprungs relativ zur Umgebung des Nutzers stattgefunden hat.

Ein `reset` kann auftreten, weil die XR-Hardware für eine Zeit die Verbindung verloren hat, was dazu führte, dass die Bewegungen des Nutzers für eine Weile nicht richtig verfolgt wurden. Bei der Wiederherstellung des Trackings bedeutet ein `reset`, dass das Tracking wiederhergestellt wurde und die neuen Positionsinformationen die tatsächlichen Positionsinformationen darstellen, die von der XR-Hardware bereitgestellt werden, anstatt zwischengespeicherte oder "bestmögliche Schätzung"-Daten.

Ein weiterer Grund, warum `reset` gesendet werden könnte, ist, dass der Nutzer die Grenzen eines Referenzraums verlassen und einen anderen Referenzraum betreten hat, oder weil der Nutzer programmatisch von einem Referenzraum zu einem anderen übertragen wurde. Jedes Mal, wenn sich die Geometrie der Begrenzungen des Raumes des Nutzers ändert, wird ein `reset` gesendet.

`reset` wird nur für bedeutende Sprünge oder Übergänge verwendet; kleinere Dinge werden einfach automatisch absorbiert. Das Ereignis wird immer an jeden betroffenen Referenzraum gesendet, einschließlich derjenigen, die mit `getOffsetReferenceSpace()` erstellt wurden, daher müssen Sie sicherstellen, dass Sie eine starke Referenz auf alle Räume behalten, die Sie noch verwenden.

## Siehe auch

- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Rendering und der WebXR-Frame-Animations-Rückruf](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Sichtpunkte und Betrachter: Kamerasimulation in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Ausrichtung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
