---
title: "Räume und Referenzräume: Räumliches Tracking in WebXR"
slug: Web/API/WebXR_Device_API/Spatial_tracking
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Die WebXR-APIs, die für die Implementierung von erweiterter und virtueller Realität entwickelt wurden, sind speziell darauf ausgelegt, die Fähigkeit bereitzustellen, einen Menschen in eine virtuelle Umgebung einzufügen. Um dies zu erreichen, muss Software nicht nur in der Lage sein, die Positionen, Ausrichtungen und Bewegungen von Objekten in der virtuellen Welt zu verfolgen, sondern auch die Position, Ausrichtung und Bewegung des Benutzers. WebXR geht jedoch noch einen Schritt weiter, indem es die Fähigkeit hinzufügt, die Position, Ausrichtung und Bewegung der Eingabegeräte zu verfolgen, die Daten erzeugen, um die Position und Bewegung einzelner Teile des Körpers des Betrachters zu bestimmen (mit entsprechender Ausrüstung).

Die Position und Bewegung des Headsets des Benutzers repräsentieren die Position und Ausrichtung des Kopfes in der virtuellen Umgebung. Handcontroller repräsentieren in gleicher Weise seine Hände. Andere Hardwareelemente können ähnlich verwendet werden, um andere Teile des Körpers darzustellen und zusätzliche Daten zur Verfügung zu stellen, die bei der Simulation der Aktionen des Benutzers in seiner Umgebung verwendet werden können.

In diesem Leitfaden werden wir untersuchen, wie WebXR **Spaces** und insbesondere **Referenzräume** verwendet, um die Positionen, Ausrichtungen und Bewegungen von Objekten und des Körpers des Benutzers in der virtuellen Welt zu verfolgen.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie mit den in [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry) eingeführten Konzepten vertraut sind, d.h. den Grundlagen von 3D-Koordinatensystemen sowie WebXR-Spaces, Referenzräumen und wie Referenzräume verwendet werden, um lokale Koordinatensysteme für einzelne Objekte oder bewegliche Komponenten innerhalb einer Szene zu erstellen.

## Die Darstellung einer Position mit einem Referenzraum

Wie in [Definition räumlicher Beziehungen mit Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Geometry#defining_spatial_relationships_with_reference_spaces) behandelt, legen Referenzräume ein lokales Koordinatensystem fest, das von einem anderen Koordinatensystem versetzt ist, das wiederum durch einen anderen Raum definiert ist. Somit kann ein Referenzraum verwendet werden, um die Position und Ausrichtung eines Punktes und im weiteren Sinne das gesamte Objekt zu definieren, für das dieser Punkt der Ursprung ist. Obwohl dies übertrieben wäre, um jedes einzelne Objekt in einer Szene auf diese Weise zu verwenden, kann es sehr nützlich sein, einigen spezifischen Objekten ihr eigenes Koordinatensystem zu geben.

- **Der Welt-Raum**; der Ursprung dieses Raumes ist der Ursprung des zugrunde liegenden [WebGL-Koordinatensystems](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) der gesamten 3D-Leinwand.
- Der Spieler, Avatar oder die Kamera; der Ursprung dieses Raumes wird als Kameraposition zur Darstellung der Szene für den Benutzer verwendet.
- Die Hand und/oder der Hand-Controller; jede dieser repräsentiert eine der Hände des Benutzers, entweder in Form der Hand selbst oder eines Controllers (oder beides). Der Ursprung ist in der Regel das Zentrum der gefesselten Hand des Benutzers.
- **Der Zielstrahl**; jeder Controller oder ein anderes Handgerät kann einen zugehörigen Zielstrahl haben, der durch einen Raum dargestellt wird, dessen Ursprung der Punkt am Controller ist, an dem der Strahl ausgesendet wird, und so orientiert ist, dass -Z in die Richtung des Ziels zeigt, auf das er zielt.

Da jeder dieser Räume mit einem Referenzraum als Grundlage definiert ist, kann die WebXR Device API einfach verwendet werden, um zwischen den Koordinatensystemen zu konvertieren, Operationen durchzuführen, die diese Räume und ihre entsprechenden Objekte betreffen, und so weiter.

## Beschreibung einer Position relativ zu einem Raum

Es gibt zwei Szenarien, in denen Sie möglicherweise eine Position und/oder Ausrichtung relativ zu einem Raum beschreiben müssen. Das erste ist [oben beschrieben](#versetzen_oder_bewegen_von_referenzräumen): Anwenden eines Referenzraums auf einen Versatz (oder umgekehrt, da das Ergebnis dasselbe ist), um die Transformationsmatrix zu bestimmen, die die resultierende Position im Koordinatensystem des Raumes darstellt.

### Posen

Sobald Ihre Referenzräume für die verschiedenen Schlüsselobjekte in der Szene eingerichtet sind, gibt es Zeiten, in denen Sie eine weitere Position relativ zum Ursprung eines bestimmten Referenzraums beschreiben müssen. Dies geschieht mithilfe von Posen. Eine Pose beschreibt eine Position und Ausrichtung relativ zum Ursprung des Referenzraums, aus dem sie erstellt wurde.

In WebXR wird eine Pose durch ein {{domxref("XRPose")}}-Objekt dargestellt, dessen {{domxref("XRPose.transform", "transform")}}-Eigenschaft eine {{domxref("XRRigidTransform")}}-Transformationsmatrix definiert, die, angewendet auf beliebige Koordinaten, Vektoren oder Matrizen im ursprünglichen Raum, sie in den Zielraum umwandelt. Eine Pose kann also nicht nur verwendet werden, um Positionen zu konvertieren und zu bestimmen, sondern auch Rotationsinformationen.

Es gibt nur eine Möglichkeit, eine {{domxref("XRPose")}} zu erstellen, nämlich die Nutzung der {{domxref("XRFrame.getPose", "getPose()")}}-Methode an einem Animationsrahmen, wie sie mit einem {{domxref("XRFrame")}}-Objekt gegeben wird. Das bedeutet, dass Sie Posen häufig in Ihrem Frame-Rendering-Code verwenden werden, der als Callback von der {{domxref("XRFrame")}}-Methode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} ausgeführt wird.

`getPose()` berechnet die Position eines {{domxref("XRReferenceSpace")}} relativ zum Ursprung eines angegebenen {{domxref("XRSpace")}} und erstellt dann eine Pose, die die resultierende Position und Ausrichtung darstellt.

Wenn Sie beispielsweise die Darstellung eines Handcontrollers mit dem {{domxref("XRInputSource.gripSpace", "gripSpace")}} des Controllers zeichnen möchten, können Sie die benötigte Pose auf diese Weise abrufen:

```js
let controlPose = frame.getPose(inputSource.gripSpace, worldRefSpace);
```

Dies konvertiert die Position und Ausrichtung des Griffraums des Eingabegeräts, um das Koordinatensystem der Welt zu verwenden, und erzeugt dann die entsprechende `XRPose`, die in `controlPose` gespeichert wird. Sie können dann den {{domxref("XRPose.transform", "transform")}} von `controlPose` auf die Vertices im Objektmodell anwenden, das den Controller darstellt, um die WebGL-Koordinaten zu berechnen, die bei der Darstellung der Controller-Darstellung im Framebuffer verwendet werden sollen.

### Betrachter-Posen

Eine spezialisierte Art von Pose, die **Betrachter-Pose**, ist die Pose, die die Perspektive des Szenenbetrachters darstellt. Eine Betrachter-Pose wird durch das WebXR-Interface {{domxref("XRViewerPose")}} repräsentiert. Beim Rendering eines Frames verwenden Sie die Betrachter-Pose, um die Position und Blickrichtung des Betrachters festzustellen, um die [virtuelle Kamera zu platzieren](/de/docs/Web/API/WebXR_Device_API/Cameras) und die [Szene zu rendern](/de/docs/Web/API/WebXR_Device_API/Rendering).

Die einzige Möglichkeit, eine Pose zu erhalten, die Positionsinformationen von einem Raum in einen anderen überträgt, besteht in dem {{domxref("XRFrame")}}-Objekt, das Sie von Ihrer Frame-Rendering-Callback-Funktion erhalten, die Sie aufgerufen haben, als Sie die {{domxref("XRSession")}}-Methode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} gerufen haben.

Zum Beispiel, gegeben einem {{domxref("XRSession")}}, dessen Referenzraum `worldRefSpace` ist, würde die folgende Zeile Code den ersten Animationsrahmen anfordern:

```js
animationFrameRequestID = xrSession.requestAnimationFrame(myDrawFrame);
```

Dann könnte die `myDrawFrame()`-Funktion — der Callback, der ausgeführt wird, wenn es Zeit ist, den Frame zu zeichnen — so aussehen:

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

Der Parameter `frame` ist der {{domxref("XRFrame")}}, der die Animationsrahmeninformationen enthält, die von WebXR bereitgestellt werden. Wenn aufgerufen, beginnt diese Funktion damit, die {{domxref("XRSession")}} vom Frame-Objekt abzurufen und dann die Methodik {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} des Frames zu nutzen, um die {{domxref("XRViewerPose")}} für den Betrachter zu berechnen, gegeben `viewerRefSpace`, welcher die aktuelle Blickrichtung und Position des Betrachters beschreibt.

Die zurückgegebene Betrachter-Pose, `viewerPose`, kann wiederum verwendet werden, um [Positionen und Ausrichtungen korrekt zu berechnen und darzustellen](/de/docs/Web/API/WebXR_Device_API/Cameras) der Objekte in der Szene aus der Perspektive des Benutzers.

## Versetzen oder Bewegen von Referenzräumen

Auch wenn Sie einen Referenzraum nicht ändern können, da sowohl {{domxref("XRReferenceSpace")}} als auch {{domxref("XRBoundedReferenceSpace")}} schreibgeschützt sind, können Sie problemlos neue Referenzräume erstellen, indem Sie eine Offset-Transformation auf sie anwenden. Dies geschieht durch Aufruf der Methode {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} des Referenzraums.

### Versetzen von Positionen innerhalb eines Referenzraums

Der einfachste Fall für die Anwendung von `getOffsetReferenceSpace()` ist das Transformieren eines Punktes oder einer Matrix im Kontext desselben Raumes. Beispielsweise, um einen neuen Referenzraum zu erstellen, der den Referenzraum `aRefSpace` um einen halben Meter in jede Richtung bewegt, können Sie Folgendes tun:

```js
let halfMeterTransform = new XRRigidTransform({
  x: 0.5,
  y: 0.5,
  z: 0.5,
  w: 1.0,
});
aRefSpace = aRefSpace.getOffsetReferenceSpace(halfMeterTransform);
```

Dies ersetzt den vorhandenen Referenzraum `aRefSpace` durch einen, dessen Koordinaten und Ausrichtung die Transformation `halfMeterTransform` angewendet wurde. Ohne im Transformationsvorgang enthaltene Orientierungsdaten bleibt die Ausrichtung von `aRefSpace` unverändert.

### Konvertieren zwischen WebXR-Sitzungstypen

Ein weiterer häufiger Grund, warum Sie möglicherweise Positionsinformationen von einem Referenzraum in einen anderen konvertieren müssen, ist, wenn es notwendig ist, den Sitzungstyp von `inline` zu `immersive-vr` oder zurück zu ändern. Dies geschieht häufig, wenn Ihre Benutzeroberfläche eine Möglichkeit bietet, die Szene inline im Kontext einer Webseite vorzuschauen, mit einer Schaltfläche oder einer anderen Steuerung, um in den immersiven Modus zu wechseln.

Da die meisten Benutzer es vorziehen würden, dass Sie die gleiche Betrachterposition und Blickrichtung während dieses Übergangs beibehalten, können Sie die Methode {{domxref("XRFrame")}} {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} verwenden, um die aktuelle {{domxref("XRViewerPose")}} zu erhalten, die Sitzung zu wechseln und dann die gespeicherte Betrachter-Pose zu nutzen, um die Betrachterposition und Blickrichtung wiederherzustellen.

```js
let viewerPose = frame.getViewerPose(worldReferenceSpace);
let newSession = navigator.xr.requestSession("immersive-vr", {
  requiredFeatures: "unbounded",
});
worldReferenceSpace = await newSession.requestReferenceSpace("unbounded");
viewerPose = worldReferenceSpace.getOffsetReferenceSpace(viewerPose.transform);
```

Hier wird die Betrachter-Pose abgerufen, mit ihrer Transformationsmatrix relativ zu `worldReferenceSpace`, dem globalen Referenzraum der aktuellen Sitzung. Dann wird eine neue Sitzung erstellt und ein Referenzraum geschaffen, der der neue Welt-Referenzraum wird.

Schließlich wird die gespeicherte `viewerPose` in das neue Koordinatensystem des Welt-Raums umgerechnet, indem die Methode {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} des neuen Referenzraums aufgerufen wird. Mit diesem Schritt können wir die Szene wie gewohnt weiter rendern, ohne dass die Perspektive des Betrachters beeinträchtigt wird.

### Konvertieren zwischen beschränkten und unbeschränkten Räumen

Manchmal, wenn Ihr primäres Erlebnis einen unbeschränkten Raum verwendet, könnte es notwendig sein, das Erlebnis des Benutzers vorübergehend in einen beschränkten Raum zu übertragen. Zum Beispiel kann es einfacher sein, die Interaktionen mit den Objekten in einem einzelnen Raum in einem Haus zu implementieren, indem man zu einem beschränkten Raum wechselt, der den einzelnen Raum repräsentiert. Dies könnte es einfacher machen, Dinge wie die Unterstützung für die Anpassung von Wänden oder das Platzieren von Möbeln auf dem Boden zu implementieren.

In solchen Fällen, in denen Sie beginnen müssen, mit einem anderen Referenzraum als dem bisher verwendeten zu arbeiten, können Sie eine Kombination aus {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} und einigen Matrixberechnungen verwenden, um alles in Ihrer Szene so zu gestalten, dass es am Ursprung des neuen Referenzraums basiert.

Da `getViewerPose()` nur in einem {{domxref("XRFrame")}} verfügbar ist, sollten Sie diesen Prozess in Ihrem Rendering-Callback beginnen, möglicherweise unter Verwendung eines Workers für die Berechnungen, um den Verlust von Frames zu reduzieren.

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

## Kontinuität und Wiederherstellung nach einem Tracking-Verlust

Gelegentlich, während der Benutzer seine XR-Hardware mit Ihrer App aktiv nutzt, kann der Datenfluss mit Informationen über die Position und Ausrichtung des Benutzers für eine gewisse Zeit ausfallen. Nicht nur muss Ihre App bestimmen, was dem Nutzer in dieser Zeit gezeigt wird, sondern sie muss sich auch sauber erholen, wenn das Tracking wieder aufgenommen wird.

Sobald die XR-Hardware damit beginnt, Tracking-Informationen bereitzustellen, wird sie dies tun, bis die XR-Sitzung geschlossen wird. Diese Daten werden während jedes Frames durch Aufruf der Methode {{domxref("XRFrame")}} {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} abgerufen, um die Position und Blickrichtung des Betrachters zu erhalten (die definiert, was der Benutzer sehen sollte), und {{domxref("XRFrame.getPose", "getPose()")}}, um alle anderen Posen zu erhalten, wie z. B. die Positionen der Handcontroller und aller anderen Teile des XR-Systems.

### Erkennung und Funktionieren nach Tracking-Verlust

Wenn das Tracking fehlschlägt, wie zum Beispiel durch einen vorübergehenden Verlust der Verbindung zwischen dem Headset und dem Gerät des Benutzers, wird die XR-Schicht weiterhin Posen zurückgeben, aber die {{domxref("XRPose.emulatedPosition", "emulatedPosition")}}-Eigenschaft dieser Posen wird `true` sein, was anzeigt, dass die Berechnung der Pose auf einer Schätzung der aktuellen Position des Benutzers basiert.

Einige XR-Geräte verwenden Algorithmen, um die geschätzte Position des Benutzers basierend auf der derzeit fortlaufenden Bewegung zu berechnen, während andere Hardware keine Bewegung meldet, aber `emulatedPosition` auf `true` setzt. In beiden Fällen möchten Sie möglicherweise Ihre Darstellung anpassen, um den Verlust zu kompensieren, abhängig von Ihren spezifischen Anforderungen.

### Wenn das Tracking wieder aufgenommen wird

Sie können erkennen, wann das Tracking nach einem Verlust wieder aufgenommen wurde, wenn die Benutzerposition springt, während gleichzeitig der Wert von `emulatedPosition` von `true` auf `false` wechselt. Wie Sie damit umgehen, hängt von Ihrer Anwendung ab. Wenn Ihre App eine Möglichkeit bietet, dass sich der Benutzer ohne physische Bewegung in der realen Welt durch die virtuelle Welt bewegt (eine sogenannte **Teleportation**-Mechanik), können Sie die neue Position akzeptieren und fortfahren, so dass der Sprung von der zuvor angenommenen Position sofort mit der neuen Position korrigiert wird.

Andererseits, wenn Ihre App den Benutzer dazu auffordert, sich physisch im realen Raum zu bewegen, um sich durch Ihre virtuelle Welt zu bewegen, kann das Übernehmen der neuen Tracking-Position und das Springen dorthin für den Benutzer verstörend sein und sollte wenn möglich vermieden werden. Stattdessen können Sie den Unterschied zwischen der aktuellen Position und der neuen Tracking-Position verwenden, um den neuen Teleportationsoffset zu berechnen; das heißt, eine Transformation, die auf alles angewendet wird, um die Positions- und Orientierungsdaten von WebXR an Ihre Bedürfnisse anzupassen.

Sie können dies tun, indem Sie einen neuen Referenzraum erstellen, der den Abstand einbezieht, den die Position des Betrachters seit dem vorherigen Frame gesprungen ist, und die Methode {{domxref("XRReferenceSpace")}} {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} verwenden.

### Das Zurücksetzen-Event

**_<<<--- dieser Abschnitt hat wahrscheinlich noch Probleme; Korrekturen sind willkommen --->>>_**

Wenn eine Diskontinuität oder Unterbrechung im nativen oder effektiven Ursprung eines Referenzraums auftritt, sendet der {{Glossary("Benutzeragent")}} ein {{domxref("XRReferenceSpace")}} ein {{domxref("XRReferenceSpace.reset_event", "reset")}}-Event. Dieses Event zeigt an, dass eine wesentliche Änderung der Position des Ursprungs relativ zur Umgebung des Benutzers stattgefunden hat.

Ein `reset` kann auftreten, weil die XR-Hardware für eine Weile die Verbindung verloren hat, was dazu führte, dass die Bewegungen des Benutzers eine Zeit lang nicht richtig verfolgt wurden. Nach der Wiederherstellung des Trackings bedeutet ein `reset`, dass das Tracking wiederhergestellt ist und die neuen Positionsinformationen die tatsächlichen Positionsinformationen darstellen, die von der XR-Hardware bereitgestellt werden, anstelle von zwischengespeicherten oder "bestmöglich geschätzten" Daten.

Ein weiterer Grund, warum `reset` gesendet werden kann, ist, dass der Benutzer die Grenzen eines Referenzraums verlassen und in einen anderen Referenzraum eingetreten ist oder weil der Benutzer programmgesteuert von einem Referenzraum in einen anderen transferiert wurde. Jedes Mal, wenn sich die Geometrie der Grenzen des Raumes des Benutzers ändert, wird ein `reset` gesendet.

`reset` wird nur für signifikante Sprünge oder Transitionen verwendet; kleinere Dinge werden automatisch absorbiert. Das Event wird immer an jeden betroffenen Referenzraum gesendet, einschließlich derjenigen, die mit `getOffsetReferenceSpace()` erstellt wurden; daher müssen Sie sicherstellen, dass Sie für alle von Ihnen weiterhin verwendeten Räume eine starke Referenz beibehalten.

## Siehe auch

- [Matrixberechnungen für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Rendering und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Ansichten und Betrachter: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Ausrichtung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Verwendung beschränkter Referenzräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
