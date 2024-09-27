---
title: "Räume und Referenzräume: Räumliches Tracking in WebXR"
slug: Web/API/WebXR_Device_API/Spatial_tracking
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Die WebXR-APIs, die zur Implementierung von erweiterter und virtueller Realität verwendet werden, sind speziell dafür konzipiert, die Möglichkeit zu bieten, einen Menschen in eine virtuelle Umgebung einzufügen. Um dies zu erreichen, muss Software nicht nur die Positionen, Ausrichtungen und Bewegungen von Objekten in der virtuellen Welt verfolgen können, sondern auch die Position, Ausrichtung und Bewegung des Benutzers. WebXR geht jedoch darüber hinaus, indem es die Fähigkeit hinzufügt, die Position, Ausrichtung und Bewegung der Eingabegeräte zu verfolgen, die Daten erzeugen, die verwendet werden, um die Position und Bewegung einzelner Teile des Körpers des Betrachters zu bestimmen (mit entsprechender Ausrüstung).

Die Position und Bewegung des Headsets des Benutzers repräsentieren die Kopfposition und -ausrichtung in der virtuellen Umgebung. Handcontroller repräsentieren auf die gleiche Weise die Hände. Andere Hardwareelemente können ähnlich verwendet werden, um andere Körperteile darzustellen, und zusätzliche Daten liefern, die bei der Simulation der Aktionen des Benutzers in seiner Umgebung verwendet werden.

In diesem Leitfaden erkunden wir, wie WebXR **Räume** und, spezifisch, **Referenzräume** nutzt, um die Positionen, Ausrichtungen und Bewegungen von Objekten und des Körpers des Benutzers in der virtuellen Welt zu verfolgen.

> [!NOTE]
> Dieser Artikel geht davon aus, dass Sie mit den in [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry) eingeführten Konzepten vertraut sind: den Grundlagen von 3D-Koordinatensystemen sowie WebXR-Räumen, Referenzräumen und deren Verwendung zur Erstellung lokaler Koordinatensysteme für einzelne Objekte oder bewegliche Komponenten innerhalb einer Szene.

## Eine Position unter Verwendung eines Referenzraums darstellen

Wie in [Definition räumlicher Beziehungen mit Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Geometry#defining_spatial_relationships_with_reference_spaces) behandelt, etablieren Referenzräume ein lokales Koordinatensystem, das von einem anderen Koordinatensystem versetzt ist, das seinerseits durch einen anderen Raum definiert wird. Somit kann ein Referenzraum verwendet werden, um die Position und Ausrichtung eines Punkts und durch Erweiterung das gesamte Objekt, für das dieser Punkt der Ursprung ist, zu definieren. Auch wenn dies ein wenig umständlich ist, um es für jedes einzelne Objekt in einer Szene zu verwenden, kann es für einige spezifische Objekte sehr nützlich sein, ein eigenes Koordinatensystem auf diese Weise zu haben.

- **Der Weltraum**; der Ursprung dieses Raums ist der Ursprung des [WebGL-Koordinatensystems](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection), das dem gesamten 3D-Leinwand zugrunde liegt.
- Der Spieler, Avatar oder die Kamera; der Ursprung dieses Raums wird als Kameraposition verwendet, um die Szene, die dem Benutzer angezeigt werden soll, darzustellen.
- Die Hand und/oder der Handcontroller; jeder dieser Räume repräsentiert eine der Hände des Benutzers, entweder in Form der Hand selbst oder eines Controllers (oder beides). Der Ursprung ist in der Regel das Zentrum der gefäusteten Hand des Benutzers.
- **Der Zielstrahl**; jeder Controller oder anderes Handgerät kann einen Zielstrahl haben, der ihm zugeordnet ist und durch einen Raum repräsentiert wird, dessen Ursprung der Punkt am Controller ist, an dem der Strahl emittiert wird, und der so orientiert ist, dass -Z in die Richtung des Ziels zeigt, auf das er gerichtet ist.

Da jede dieser Komponenten unter Verwendung eines Referenzraums als Grundlage definiert ist, kann die WebXR Device API leicht zur Umwandlung zwischen den Koordinatensystemen, zur Durchführung von Operationen, die diese Räume und ihre entsprechenden Objekte betreffen, und so weiter verwendet werden.

## Eine Position relativ zu einem Raum beschreiben

Es gibt zwei Szenarien, in denen Sie möglicherweise eine Position und/oder Ausrichtung relativ zu einem Raum beschreiben müssen. Das erste wird [oben beschrieben](#versetzen_oder_verschieben_von_referenzräumen): das Anwenden eines Referenzraums auf einen Versatz (oder umgekehrt, da das Ergebnis dasselbe ist), um die Transformationsmatrix zu bestimmen, die die resultierende Position im Koordinatensystem des Raumes darstellt.

### Posen

Sobald Ihre Referenzräume für die verschiedenen Schlüsselobjekte in der Szene festgelegt sind, gibt es Zeiten, in denen Sie eine weitere Position relativ zum Ursprung eines bestimmten Referenzraums beschreiben müssen. Dies geschieht unter Verwendung von Posen. Eine Pose beschreibt eine Position und Ausrichtung relativ zum Ursprung des Referenzraums, von dem sie erstellt wurde.

In WebXR wird eine Pose durch ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt dargestellt, dessen [`transform`](/de/docs/Web/API/XRPose/transform)-Eigenschaft ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) ist, das die Transformationsmatrix definiert, die, angewendet auf jede Koordinate, jeden Vektor oder jede Matrix im ursprünglichen Raum, diese in den Zielraum konvertiert. Somit kann eine Pose nicht nur zur Umwandlung und Bestimmung von Positionen, sondern auch von Rotationsinformationen verwendet werden.

Es gibt nur eine Möglichkeit, ein [`XRPose`](/de/docs/Web/API/XRPose) zu erstellen, und zwar durch Verwendung der Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) auf einem Animationsframe, wie er mit einem [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt bereitgestellt wird. Dies bedeutet, dass Sie Posen meist innerhalb Ihres Frame-Rendering-Codes verwenden, der als Callback von der Methode [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) ausgeführt wird.

`getPose()` berechnet die Position eines [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) relativ zum Ursprung eines angegebenen [`XRSpace`](/de/docs/Web/API/XRSpace) und erstellt dann eine Pose, die die resultierende Position und Ausrichtung darstellt.

Wenn Sie beispielsweise die Darstellung eines Handcontrollers mithilfe des Controllers [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) zeichnen möchten, können Sie die benötigte Pose folgendermaßen erhalten:

```js
let controlPose = frame.getPose(inputSource.gripSpace, worldRefSpace);
```

Dies wandelt die Position und Ausrichtung des Griffraums der Eingabe in das Koordinatensystem der Welt um und generiert die entsprechende `XRPose`, die in `controlPose` gespeichert wird. Sie können dann die [`transform`](/de/docs/Web/API/XRPose/transform) von `controlPose` auf die Vertices im Objektmodell anwenden, das den Controller darstellt, um die WebGL-Koordinaten zu berechnen, die beim Rendern der Darstellung des Controllers im Framebuffer verwendet werden sollen.

### Viewer-Posen

Eine spezialisierte Art von Pose, die **Viewer-Pose**, ist die Pose, die die Perspektive des Betrachters der Szene repräsentiert. Eine Viewer-Pose wird durch WebXRs [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Schnittstelle dargestellt. Beim Rendern eines Frames verwenden Sie die Viewer-Pose, um die Position und Blickrichtung des Betrachters zu bestimmen, um [die virtuelle Kamera zu platzieren](/de/docs/Web/API/WebXR_Device_API/Cameras) und [die Szene zu rendern](/de/docs/Web/API/WebXR_Device_API/Rendering).

Die einzige Möglichkeit, eine Pose zu erhalten, die Positionsinformationen von einem Raum in einen anderen anpasst, erfolgt über das [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das von Ihrer Frame-Rendering-Callback-Funktion empfangen wird, die angegeben wurde, als Sie die Methode [`XRSession`](/de/docs/Web/API/XRSession) [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufgerufen haben.

Zum Beispiel, gegeben eine [`XRSession`](/de/docs/Web/API/XRSession), deren Referenzraum `worldRefSpace` ist, würde die folgende Codezeile den ersten Animationsframe zur Ausführung anfordern:

```js
animationFrameRequestID = xrSession.requestAnimationFrame(myDrawFrame);
```

Dann könnte die `myDrawFrame()`-Funktion — der Callback, der ausgeführt wird, wenn es Zeit ist, den Frame zu zeichnen — etwa so aussehen:

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

Der Parameter `frame` ist der [`XRFrame`](/de/docs/Web/API/XRFrame), der die Animationsframeinformationen enthält, die von WebXR bereitgestellt werden. Bei Aufruf beginnt diese Funktion damit, die [`XRSession`](/de/docs/Web/API/XRSession) aus dem Frame-Objekt zu erhalten, und verwendet dann die [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose)-Methode des Frames, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) für den Betrachter zu berechnen, gegeben `viewerRefSpace`, welche die aktuelle Blickrichtung und Position des Betrachters beschreibt.

Die zurückgegebene Viewer-Pose, `viewerPose`, kann wiederum verwendet werden, um [Positionen und Ausrichtungen zur ordnungsgemäßen Darstellung](/de/docs/Web/API/WebXR_Device_API/Cameras) der Objekte in der Szene aus der Sicht des Benutzers zu berechnen.

## Versetzen oder Verschieben von Referenzräumen

Während Sie einen Referenzraum nicht ändern können, da sowohl [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) als auch [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) schreibgeschützt sind, können Sie leicht neue Referenzräume erstellen, indem Sie ihnen eine Offset-Transformation aufsetzen. Dies geschieht durch Aufrufen der Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des Referenzraums.

### Positionen innerhalb eines Referenzraums versetzen

Der einfachste Fall für die Verwendung von `getOffsetReferenceSpace()` ist die Transformation eines Punkts oder einer Matrix im Kontext desselben Raums. Um beispielsweise einen neuen Referenzraum zu erstellen, der den Referenzraum `aRefSpace` um einen halben Meter in jede Richtung verschiebt, können Sie so etwas tun:

```js
let halfMeterTransform = new XRRigidTransform({
  x: 0.5,
  y: 0.5,
  z: 0.5,
  w: 1.0,
});
aRefSpace = aRefSpace.getOffsetReferenceSpace(halfMeterTransform);
```

Dies ersetzt den bestehenden Referenzraum `aRefSpace` durch einen, dessen Koordinaten und Ausrichtung die Transformation `halfMeterTransform` angewendet wurde. Ohne enthaltene Orientierungsdaten in der Transformation bleibt die Ausrichtung von `aRefSpace` unberührt.

### Konvertieren zwischen WebXR-Sitzungstypen

Ein weiterer häufiger Grund, warum Sie Positionsinformationen von einem Referenzraum in einen anderen konvertieren müssen, ist, wenn es erforderlich ist, den Sitzungstyp von `inline` zu `immersive-vr` oder zurück zu ändern. Dies geschieht häufig, wenn Ihre Benutzeroberfläche eine Möglichkeit bietet, die Szene Inline im Kontext einer Webseite anzuzeigen, mit einem Button oder einer anderen Steuerung zum Umschalten in den immersiven Modus.

Da die meisten Benutzer es bevorzugen würden, dass Sie die gleiche Betrachterposition und Blickrichtung während dieses Übergangs beibehalten, können Sie die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) von [`XRFrame`](/de/docs/Web/API/XRFrame) verwenden, um die aktuelle [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zu erhalten, die Sitzung zu wechseln und dann die gespeicherte Viewer-Pose verwenden, um die Position und Blickrichtung des Betrachters wiederherzustellen.

```js
let viewerPose = frame.getViewerPose(worldReferenceSpace);
let newSession = navigator.xr.requestSession("immersive-vr", {
  requiredFeatures: "unbounded",
});
worldReferenceSpace = await newSession.requestReferenceSpace("unbounded");
viewerPose = worldReferenceSpace.getOffsetReferenceSpace(viewerPose.transform);
```

Hier wird die Viewer-Pose erfasst, mit ihrer Transformation relativ zu `worldReferenceSpace`, dem globalen Referenzraum der aktuellen Sitzung. Dann wird eine neue Sitzung eingerichtet und ein Referenzraum erstellt, der der neue Welt-Referenzraum wird.

Schließlich wird die gespeicherte `viewerPose` in das Koordinatensystem des neuen Weltraums konvertiert, indem die Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des neuen Referenzsystems aufgerufen wird. Mit dieser in der Hand können wir die Szene wie gewohnt weiter rendern, ohne dass die Perspektive des Betrachters beeinträchtigt wird.

### Konvertieren zwischen begrenzten und unbegrenzten Räumen

Manchmal, wenn Ihr primäres Erlebnis einen unbegrenzten Raum verwendet, haben Sie möglicherweise die Notwendigkeit, das Erlebnis der Benutzer vorübergehend zu einem begrenzten Raum zu wechseln. Zum Beispiel kann es einfacher sein, die Interaktionen mit den Objekten in einem einzelnen Raum in einem Haus zu implementieren, indem Sie zu einem begrenzten Raum wechseln, der diesen einzelnen Raum darstellt. Dies könnte es einfacher machen, Dinge wie die Unterstützung der Anpassung der Wände und das Platzieren von Möbeln auf dem Boden zu implementieren.

In Fällen wie diesem, in denen Sie beginnen müssen, mit einem anderen Referenzraum zu verfolgen, als den, den Sie bisher verwendet haben, können Sie eine Kombination aus [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) und einigen Matrixberechnungen verwenden, um alles in Ihrer Szene so zu verschieben, dass es am Ursprung des neuen Referenzrahmens basiert.

Da `getViewerPose()` nur in einem [`XRFrame`](/de/docs/Web/API/XRFrame) verfügbar ist, müssen Sie diesen Prozess in Ihrem Rendering-Callback beginnen, möglicherweise unter Verwendung eines Workers, um die Berechnungen durchzuführen und damit das Abfallen von Frames zu reduzieren.

```js
let previousViewerPose = null;

function myDrawFrame(currentFrameTime, frame) {
  let session = frame.session;
  let viewerPose = frame.getViewerPose(viewerRefSpace);

  animationFrameRequestID = session.requestAnimationFrame(myDrawFrame);

  if (viewerPose) {
    if (!previousViewerPose) {
      previousViewerPose = viewerPose;
    }

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

## Kontinuität und Wiederherstellung nach Tracking-Verlust

Manchmal, während der Benutzer seine XR-Hardware aktiv mit Ihrer App verwendet, kann der Datenfluss, der Updates zur Position und Ausrichtung des Benutzers enthält, für einen Zeitraum unterbrochen werden. Nicht nur muss Ihre App bestimmen, was dem Benutzer während dieser Perioden angezeigt werden soll, sondern sie muss auch sauber wiederherstellen, wenn das Tracking fortgesetzt wird.

Sobald die XR-Hardware beginnt, Tracking-Informationen bereitzustellen, wird sie dies so lange tun, bis die XR-Sitzung geschlossen wird. Diese Daten werden während jedes Frames durch Aufrufen der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) von [`XRFrame`](/de/docs/Web/API/XRFrame) abgerufen, um die Position und Blickrichtung des Betrachters zu erhalten (die definiert, was der Benutzer sehen sollte), und [`getPose()`](/de/docs/Web/API/XRFrame/getPose), um alle anderen Posen zu erhalten, wie die Positionen der Handcontroller und aller anderen Teile des XR-Systems.

### Erkennen und Funktionieren nach einem Tracking-Verlust

Wenn das Tracking scheitert, zum Beispiel wegen eines vorübergehenden Verlustes der Verbindung zwischen dem Headset und dem Gerät des Benutzers, wird die XR-Schicht weiterhin Posen zurückgeben, aber die Eigenschaft [`emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition) dieser Posen wird `true` sein, was anzeigt, dass die Berechnung der Pose auf einer Schätzung der aktuellen Position des Benutzers basiert.

Einige XR-Hardware verwendet Algorithmen, um die geschätzte Position des Benutzers basierend auf der derzeit laufenden Bewegung zu berechnen, während andere Hardware überhaupt keine Bewegung meldet, aber mit `emulatedPosition` auf `true`. In beiden Fällen sollten Sie möglicherweise Ihre Darstellung anpassen, um den Verlust zu kompensieren, abhängig von Ihren spezifischen Anforderungen.

### Wenn das Tracking wieder aufgenommen wird

Sie können feststellen, wann das Tracking nach einem Verlust wieder aufgenommen wurde, wenn die Benutzerposition springt, während gleichzeitig der Wert von `emulatedPosition` von `true` zu `false` wechselt. Wie Sie dies handhaben, hängt von Ihrer Anwendung ab. Wenn Ihre App einen Weg bietet, für den Benutzer, sich durch die virtuelle Welt zu bewegen, ohne sich physisch in der realen Welt zu bewegen (ein sogenannter **Teleportationsmechanismus**), können Sie die neue Position akzeptieren und fortfahren, wobei der Sprung von Ihrer zuvor angenommenen Position sofort mit der neuen Position korrigiert wird.

Andererseits, wenn Ihre App den Benutzer betrifft, der sich physikalisch im realen Raum bewegt, um sich in Ihrer virtuellen Welt zu bewegen, kann das Annehmen der neuen Tracking-Position und das Springen dorthin für den Benutzer beunruhigend sein und sollte, wenn möglich, vermieden werden. Stattdessen verwenden Sie die Differenz zwischen der aktuellen Position und der neuen Tracking-Position, um den neuen Teleportationsversatz zu berechnen; das heißt, eine Transformation, die alles an die Positions- und Ausrichtungsdaten von WebXR anpasst, um sie Ihren Anforderungen entsprechend anzupassen.

Sie können dies tun, indem Sie einen neuen Referenzraum erstellen, der in seinen effektiven Ursprung die Distanz einbezieht, die die Position des Betrachters seit dem vorherigen Frame gesprungen ist, unter Verwendung der Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) von [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace).

### Das Reset-Ereignis

**_<<<--- dieser Abschnitt hat wahrscheinlich noch Probleme; Korrekturen sind willkommen --->>>_**

Wenn eine Diskontinuität oder Unterbrechung im nativen oder effektiven Ursprung eines Referenzraums auftritt, sendet der [Benutzeragent](/de/docs/Glossary/user_agent) dem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event) Ereignis. Dieses Ereignis zeigt an, dass eine wesentliche Änderung der Position des Ursprungs relativ zur Umgebung des Benutzers stattgefunden hat.

Ein `reset` kann auftreten, weil die XR-Hardware für eine Weile die Verbindung verloren hat, was dazu führt, dass die Bewegungen des Benutzers für eine Weile nicht richtig verfolgt wurden. Bei Wiederherstellung des Trackings bedeutet ein `reset`, dass das Tracking wiederhergestellt wurde und die neuen Positionsinformationen die tatsächlichen Positionsinformationen sind, die von der XR-Hardware bereitgestellt werden, anstelle von gecachten oder "bestguess"-Daten.

Ein weiterer Grund, warum ein `reset` gesendet werden kann, ist, weil der Benutzer die Grenzen eines Referenzraums verlassen und einen anderen Referenzraum betreten hat, oder weil der Benutzer programmgesteuert von einem Referenzraum in einen anderen gewechselt wurde. Immer wenn sich die Begrenzungsgeometrie des Raums des Benutzers ändert, wird ein `reset` gesendet.

`reset` wird nur für wesentliche Sprünge oder Übergänge verwendet; kleinere Dinge werden automatisch absorbiert. Das Ereignis wird immer an alle betroffenen Referenzräume gesendet, einschließlich der Räume, die mit `getOffsetReferenceSpace()` erstellt wurden. Daher müssen Sie, wenn Sie `reset`-Ereignisse überwachen, sicherstellen, dass Sie eine starke Referenz zu allen noch verwendeten Räumen beibehalten.

## Siehe auch

- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Rendering und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Standpunkte und Betrachter: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Ausrichtung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Verwendung begrenzter Referenzräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
