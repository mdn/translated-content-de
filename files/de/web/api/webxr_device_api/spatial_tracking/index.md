---
title: "Räume und Referenzräume: Räumliches Tracking in WebXR"
slug: Web/API/WebXR_Device_API/Spatial_tracking
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{DefaultAPISidebar("WebXR Device API")}}

Die WebXR-APIs, die zur Implementierung von Augmented und Virtual Reality verwendet werden, sind speziell dafür ausgelegt, die Möglichkeit zu bieten, einen Menschen in eine virtuelle Umgebung einzufügen. Um dies zu erreichen, muss Software die Fähigkeit haben, nicht nur die Positionen, Ausrichtungen und Bewegungen von Objekten in der virtuellen Welt, sondern auch die des Nutzers zu verfolgen. WebXR geht jedoch noch weiter, indem es die Fähigkeit hinzufügt, die Position, Ausrichtung und Bewegung der Eingabegeräte zu verfolgen, die Daten erzeugen, die zur Bestimmung der Position und Bewegung einzelner Teile des Körpers des Betrachters verwendet werden (mit geeigneter Ausrüstung).

Die Position und Bewegung des Headsets des Nutzers repräsentieren die Position und Ausrichtung ihres Kopfes in der virtuellen Umgebung. Handcontroller repräsentieren auf ähnliche Weise ihre Hände. Andere Hardwareelemente können verwendet werden, um andere Teile des Körpers darzustellen und zusätzliche Daten zu liefern, die bei der Simulation der Aktionen des Nutzers in seiner Umgebung genutzt werden können.

In diesem Leitfaden werden wir erkunden, wie WebXR **Räume** und insbesondere **Referenzräume** verwendet, um die Positionen, Ausrichtungen und Bewegungen von Objekten und des Körpers des Nutzers in der virtuellen Welt zu verfolgen.

> [!NOTE]
> Dieser Artikel geht davon aus, dass Sie mit den in [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry) eingeführten Konzepten vertraut sind: das heißt, die Grundlagen von 3D-Koordinatensystemen sowie WebXR-Räume, Referenzräume und wie Referenzräume verwendet werden, um lokale Koordinatensysteme für einzelne Objekte oder bewegliche Komponenten innerhalb einer Szene zu erstellen.

## Darstellung einer Position mithilfe eines Referenzraums

Wie in [Definition räumlicher Beziehungen mit Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Geometry#defining_spatial_relationships_with_reference_spaces) behandelt, etablieren Referenzräume ein lokales Koordinatensystem, das von einem anderen Koordinatensystem versetzt ist, welches seinerseits durch einen anderen Raum definiert ist. Ein Referenzraum kann also verwendet werden, um die Position und Ausrichtung eines Punktes und darüber hinaus des gesamten Objekts zu definieren, dessen Ursprung dieser Punkt ist. Während dies für jedes einzelne Objekt in einer Szene etwas zu aufwendig sein könnte, kann es sehr nützlich sein, wenn einige spezifische Objekte auf diese Weise ihr eigenes Koordinatensystem haben.

- **Der Weltraum**; der Ursprung dieses Raumes ist der Ursprung des [WebGL-Koordinatensystems](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection), das die gesamte 3D-Leinwand unterliegt.
- Der Spieler, Avatar oder die Kamera; der Ursprung dieses Raumes wird als Kameraposition zum Rendern der Szene verwendet, die dem Nutzer angezeigt wird.
- Die Hand und/oder der Handcontroller; jedes von diesen repräsentiert eine der Hände des Nutzers, entweder in Form der Hand selbst oder eines Controllers (oder beides). Der Ursprung ist im Allgemeinen der Mittelpunkt der geballten Hand des Nutzers.
- **Der Zielstrahl**; jeder Controller oder ein anderes Handheld-Gerät kann einen Zielstrahl haben, der mit ihm assoziiert ist. Dieser wird durch einen Raum dargestellt, dessen Ursprung an dem Punkt auf dem Controller ist, an dem der Strahl ausgesendet wird, und so ausgerichtet ist, dass -Z in die Richtung des Ziels zeigt.

Da jeder dieser Bereiche unter Verwendung eines Referenzraums als Grundlage definiert ist, kann die WebXR Device API problemlos zwischen den Koordinatensystemen konvertieren, Operationen durchführen, die diese Räume und ihre entsprechenden Objekte betreffen, und so weiter.

## Beschreibung einer Position in Bezug auf einen Raum

Es gibt zwei Szenarien, in denen Sie eine Position und/oder Ausrichtung in Bezug auf einen Raum beschreiben müssen. Das erste wird [oben beschrieben](#versetzen_oder_bewegen_von_referenzräumen): Anwendung eines Referenzraums auf einen Offset (oder umgekehrt, da das Ergebnis dasselbe ist), um die Transformationsmatrix zu bestimmen, die die resultierende Position im Koordinatensystem des Raums darstellt.

### Posen

Sobald Ihre Referenzräume für die verschiedenen Hauptobjekte in der Szene erstellt sind, werden Sie Zeiten haben, in denen Sie eine andere Position relativ zum Ursprung eines bestimmten Referenzraums beschreiben müssen. Dies geschieht mithilfe von Posen. Eine Pose beschreibt eine Position und Ausrichtung relativ zum Ursprung des Referenzraums, aus dem sie erstellt wurde.

In WebXR wird eine Pose durch ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt dargestellt, dessen [`transform`](/de/docs/Web/API/XRPose/transform)-Eigenschaft ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) ist, das die Transformationsmatrix definiert, die auf jede Koordinate, jeden Vektor oder jede Matrix im ursprünglichen Raum angewendet wird, um sie in den Zielraum zu konvertieren. Eine Pose kann daher nicht nur zur Umwandlung und Bestimmung von Positionen, sondern auch von Rotationsinformationen verwendet werden.

Es gibt nur einen Weg, ein [`XRPose`](/de/docs/Web/API/XRPose) zu erstellen, und zwar durch die Verwendung der Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) auf einem Animationsframe, der mit einem [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt bereitgestellt wird. Das bedeutet, dass Sie Posen am häufigsten in Ihrem Frame-Rendering-Code verwenden, der als Callback der [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) ausgeführt wird.

`getPose()` berechnet die Position eines [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) relativ zum Ursprung eines angegebenen [`XRSpace`](/de/docs/Web/API/XRSpace) und erstellt dann eine Pose, die die resultierende Position und Ausrichtung darstellt.

Zum Beispiel, wenn Sie die Darstellung eines Handcontrollers mithilfe des [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) des Controllers zeichnen möchten, können Sie die benötigte Pose folgendermaßen erhalten:

```js
let controlPose = frame.getPose(inputSource.gripSpace, worldRefSpace);
```

Dies konvertiert die Position und Ausrichtung des Griftraums der Eingabe, um das Koordinatensystem der Welt zu verwenden, und erzeugt die entsprechende `XRPose`, die in `controlPose` gespeichert wird. Sie können dann das [`transform`](/de/docs/Web/API/XRPose/transform) von `controlPose` auf die Vertices des Objektmodells anwenden, das den Controller darstellt, um die WebGL-Koordinaten zu berechnen, die beim Rendern der Darstellung des Controllers in den Framebuffer verwendet werden.

### Betrachter-Posen

Ein spezialisierter Typ von Pose, die **Betrachter-Pose**, ist die Pose, die die Perspektive des Betrachters der Szene darstellt. Eine Betrachter-Pose wird durch die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Schnittstelle von WebXR repräsentiert. Beim Rendern eines Frames verwenden Sie die Betrachter-Pose, um die Position und Blickrichtung des Betrachters zu bestimmen, um [die virtuelle Kamera zu platzieren](/de/docs/Web/API/WebXR_Device_API/Cameras) und [die Szene zu rendern](/de/docs/Web/API/WebXR_Device_API/Rendering).

Die einzige Möglichkeit, eine Pose zu erhalten, die Positionsinformationen von einem Raum in einen anderen anpasst, ist durch das [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das von Ihrer Frame-Rendering-Callback-Funktion empfangen wird, die Sie aufgerufen haben, als Sie die [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufgerufen haben.

Zum Beispiel, gegeben eine [`XRSession`](/de/docs/Web/API/XRSession), deren Referenzraum `worldRefSpace` ist, würde die folgende Zeile Code den ersten Animationsframe anfordern, der geplant werden soll:

```js
animationFrameRequestID = xrSession.requestAnimationFrame(myDrawFrame);
```

Dann könnte die `myDrawFrame()`-Funktion—das Callback, das ausgeführt wird, wenn es Zeit ist, den Frame zu zeichnen—folgendermaßen aussehen:

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

Der `frame`-Parameter ist der [`XRFrame`](/de/docs/Web/API/XRFrame), der die Animationsframe-Informationen darstellt, die von WebXR bereitgestellt werden. Bei Aufruf beginnt diese Funktion damit, die [`XRSession`](/de/docs/Web/API/XRSession) aus dem Frame-Objekt zu erhalten, und verwendet dann die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des Frames, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) für den Betrachter zu berechnen, gegeben `viewerRefSpace`, das die aktuelle Blickrichtung und Position des Betrachters beschreibt.

Die zurückgegebene Betrachter-Pose, `viewerPose`, kann wiederum verwendet werden, um [Positionen und Ausrichtungen korrekt zu berechnen](/de/docs/Web/API/WebXR_Device_API/Cameras), um die Objekte in der Szene aus der Perspektive des Nutzers ordnungsgemäß zu rendern.

## Versetzen oder Bewegen von Referenzräumen

Während Sie einen Referenzraum nicht ändern können, da sowohl [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) als auch [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) schreibgeschützt sind, können Sie leicht neue Referenzräume erstellen, indem Sie ihnen eine Offset-Transformation anwenden. Dies geschieht durch Aufruf der Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des Referenzraums.

### Versetzen von Positionen innerhalb eines Referenzraums

Der einfachste Fall für die Verwendung von `getOffsetReferenceSpace()` ist die Transformation eines Punkts oder einer Matrix im Kontext desselben Raums. Zum Beispiel, um einen neuen Referenzraum zu erstellen, der den Referenzraum `aRefSpace` um einen halben Meter in jede Richtung verschiebt, können Sie etwas Folgendes tun:

```js
let halfMeterTransform = new XRRigidTransform({
  x: 0.5,
  y: 0.5,
  z: 0.5,
  w: 1.0,
});
aRefSpace = aRefSpace.getOffsetReferenceSpace(halfMeterTransform);
```

Dies ersetzt den bestehenden Referenzraum `aRefSpace` durch einen, dessen Koordinaten und Ausrichtung die Transformation `halfMeterTransform` angewendet haben. Da keine Ausrichtungsdaten in der Transformation enthalten sind, bleibt die Ausrichtung von `aRefSpace` unberührt.

### Konvertieren zwischen WebXR-Sitzungstypen

Ein weiterer häufiger Grund, warum Sie Positionsinformationen von einem Referenzraum in einen anderen konvertieren müssen, ist, wenn es notwendig ist, den Sitzungstyp von `inline` zu `immersive-vr` oder umgekehrt zu ändern. Dies geschieht häufig, wenn Ihre Benutzeroberfläche eine Möglichkeit bietet, die Szene inline im Kontext einer Webseite anzuzeigen, mit einem Button oder einer anderen Steuerung, um in den immersiven Modus zu wechseln.

Da die meisten Nutzer bevorzugen würden, dass Sie die gleiche Betrachterposition und Blickrichtung während dieser Übergänge beibehalten, können Sie die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) aus [`XRFrame`](/de/docs/Web/API/XRFrame) verwenden, um die aktuelle [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zu erhalten, die Sitzung zu wechseln und dann die gespeicherte Betrachter-Pose verwenden, um die Position und Blickrichtung des Betrachters wiederherzustellen.

```js
let viewerPose = frame.getViewerPose(worldReferenceSpace);
let newSession = navigator.xr.requestSession("immersive-vr", {
  requiredFeatures: "unbounded",
});
worldReferenceSpace = await newSession.requestReferenceSpace("unbounded");
viewerPose = worldReferenceSpace.getOffsetReferenceSpace(viewerPose.transform);
```

Hier wird die Betrachter-Pose erhalten, deren Transformation relativ zu `worldReferenceSpace` definiert ist, dem globalen Referenzraum der aktuellen Sitzung. Dann wird eine neue Sitzung eingerichtet und ein Referenzraum erstellt, der zum neuen Welt-Referenzraum wird.

Schließlich wird die gespeicherte `viewerPose` durch Aufruf der Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des neuen Referenzsystems in das Koordinatensystem des neuen Weltraums umgewandelt. Auf diese Weise können wir das Szenen-Rendering wie gewohnt fortsetzen, wobei die Perspektive des Betrachters unberührt bleibt.

### Konvertieren zwischen begrenzten und unbegrenzten Räumen

Manchmal, wenn Ihre primäre Erfahrung einen unbegrenzten Raum verwendet, müssen Sie möglicherweise die Erfahrung des Nutzers vorübergehend auf einen begrenzten Raum umstellen. Beispielsweise kann es einfacher sein, die Interaktionen mit den Objekten in einem einzelnen Raum in einem Haus zu implementieren, indem Sie zu einem begrenzten Raum wechseln, der den Einzelraum repräsentiert. Dies könnte es erleichtern, Dinge wie die Unterstützung für die Personalisierung der Wände, das Platzieren von Möbeln auf dem Boden usw. zu implementieren.

In Fällen wie diesen, in denen Sie beginnen müssen, mit einem anderen Referenzraum zu arbeiten als dem, den Sie bisher verwendet haben, können Sie eine Kombination aus [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) und einigen Matrizenberechnungen verwenden, um alles in Ihrer Szene auf den neuen Referenzrahmen-Ursprung zu übertragen.

Da `getViewerPose()` nur in einem [`XRFrame`](/de/docs/Web/API/XRFrame) verfügbar ist, müssen Sie diesen Prozess in Ihrem Rendering-Callback starten, möglicherweise durch Verwendung eines Workers, um die Berechnungen durchzuführen, um Frame-Drops zu reduzieren.

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

## Kontinuität und Wiederherstellung nach Tracking-Verlust

Manchmal, während der Nutzer seine XR-Hardware aktiv mit Ihrer App verwendet, kann der Fluss von Daten, die Updates zur Position und Ausrichtung des Nutzers enthalten, für eine gewisse Zeit unterbrochen werden. Ihre App muss nicht nur bestimmen, was dem Nutzer während dieser Perioden angezeigt werden soll, sondern muss auch sauber wiederherstellen, wenn das Tracking wieder aufgenommen wird.

Sobald die XR-Hardware beginnt, Tracking-Informationen bereitzustellen, wird sie dies fortsetzen, bis die XR-Sitzung geschlossen wird. Diese Daten werden in jedem Frame durch den Aufruf der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des [`XRFrame`](/de/docs/Web/API/XRFrame) abgerufen, um die Position und Blickrichtung des Nutzers zu erhalten (was definiert, was der Nutzer sehen soll), und [`getPose()`](/de/docs/Web/API/XRFrame/getPose), um alle anderen Posen zu erhalten, wie die Positionen der Handcontroller und aller anderen Teile des XR-Systems.

### Erkennung und Funktion nach Tracking-Verlust

Wenn das Tracking fehlschlägt, wie z. B. aufgrund eines vorübergehenden Verlusts der Verbindung zwischen dem Headset und dem Gerät des Nutzers, wird die XR-Ebene weiterhin Posen zurückgeben, aber das [`emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition)-Eigenschaft dieser Posen wird `true` sein, was darauf hinweist, dass die Berechnung der Pose auf einer Schätzung der aktuellen Position des Nutzers basiert.

Einige XR-Geräte verwenden Algorithmen, um die geschätzte Position des Nutzers basierend auf der laufenden Bewegung zu berechnen, während andere Geräte keine Bewegung melden, aber mit `emulatedPosition` auf `true`. In jedem Fall möchten Sie möglicherweise Ihr Rendering anpassen, um den Verlust auszugleichen, abhängig von Ihren spezifischen Anforderungen.

### Wenn das Tracking wieder aufgenommen wird

Sie können erkennen, wann das Tracking nach einem Verlust wieder aufgenommen wurde, wenn die Benutzerposition springt und gleichzeitig der Wert von `emulatedPosition` von `true` auf `false` wechselt. Wie Sie dies handhaben, hängt von Ihrer Anwendung ab. Wenn Ihre App eine Möglichkeit bietet, dass der Benutzer sich ohne physische Bewegung in der realen Welt durch die virtuelle Welt bewegt (ein sogenannter **Teleportationsmechanismus**), können Sie die neue Position akzeptieren und fortfahren, wobei der Sprung von Ihrer zuvor angenommenen Position sofort mit der neuen Position korrigiert wird.

Auf der anderen Seite, wenn Ihre App den Benutzer physisch im realen Raum bewegt, um sich durch Ihre virtuelle Welt zu bewegen, kann es stören, die neue Tracking-Position zu übernehmen und dorthin zu springen, und sollte nach Möglichkeit vermieden werden. Verwenden Sie stattdessen den Unterschied zwischen der aktuellen Position und der neuen Tracking-Position, um den neuen Teleportations-Offset zu berechnen; das heißt, eine Transformation, die auf alles angewendet wird, um die Position- und Ausrichtungsdaten von WebXR an Ihre Bedürfnisse anzupassen.

Das können Sie tun, indem Sie einen neuen Referenzraum erstellen, der den Abstand inkorporiert, den die Zuschauerposition seit dem letzten Frame gesprungen ist, indem Sie die Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) beauftragen.

### Das Reset-Ereignis

**_<<<--- dieser Abschnitt hat wahrscheinlich noch Probleme; Korrekturen sind willkommen --->>>_**

Wenn eine Diskontinuität oder ein Bruch im nativen oder effektiven Ursprung eines Referenzraums auftritt, wird der {{Glossary("user_agent", "User-Agent")}} einen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis senden. Dieses Ereignis zeigt an, dass eine signifikante Änderung der Position des Ursprungs relativ zur Umgebung des Benutzers stattgefunden hat.

Ein `reset` kann auftreten, weil die XR-Hardware für eine Weile die Verbindung verloren hat, was dazu führte, dass die Bewegungen des Benutzers nicht richtig verfolgt wurden. Bei Wiederaufnahme des Trackings bedeutet ein `reset`, dass das Tracking wiederhergestellt wurde und die neuen Positionsinformationen die tatsächlichen Positionsinformationen darstellen, die von der XR-Hardware bereitgestellt werden, anstelle von zwischengespeicherten oder "bestmöglichen" Daten.

Ein weiterer Grund, warum `reset` gesendet werden könnte, ist, dass der Benutzer die Grenzen eines Referenzraums verlassen und einen anderen Referenzraum betreten hat, oder weil der Benutzer programmgesteuert von einem Referenzraum zu einem anderen gewechselt wurde. Jedes Mal, wenn sich die Geometrie der Grenzen des Raums des Benutzers ändert, wird ein `reset` gesendet.

`reset` wird nur für signifikante Sprünge oder Übergänge verwendet; kleinere Dinge werden einfach automatisch absorbiert. Das Ereignis wird immer an jeden betroffenen Referenzraum gesendet, einschließlich derjenigen, die mit `getOffsetReferenceSpace()` erstellt wurden. Wenn Sie also auf `reset`-Ereignisse hören, müssen Sie sicherstellen, dass Sie eine starke Referenz auf alle Räume beibehalten, die Sie noch verwenden.

## Siehe auch

- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Rendering und der WebXR-Frame-Rendering-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Sichtweisen und Betrachter: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Ausrichtung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Verwendung begrenzter Referenzräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
