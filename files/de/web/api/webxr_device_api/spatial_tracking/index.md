---
title: "Spaces and reference spaces: Spatial tracking in WebXR"
slug: Web/API/WebXR_Device_API/Spatial_tracking
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Die WebXR-APIs, die für die Implementierung von Augmented und Virtual Reality verwendet werden, sind speziell dazu konzipiert, die Möglichkeit zu bieten, einen Menschen in eine virtuelle Umgebung einzufügen. Um dies zu erreichen, benötigt die Software die Fähigkeit, nicht nur die Positionen, Orientierungen und Bewegungen von Objekten in der virtuellen Welt zu verfolgen, sondern auch die Position, Orientierung und Bewegung des Benutzers. WebXR geht jedoch noch einen Schritt weiter, indem es die Fähigkeit hinzufügt, die Position, Orientierung und Bewegung der Eingabegeräte zu verfolgen, die Daten erzeugen, um die Position und Bewegung einzelner Teile des Körpers des Betrachters zu bestimmen (mit entsprechender Ausrüstung).

Die Position und Bewegung des Headsets des Benutzers repräsentieren die Position und Orientierung ihres Kopfes in der virtuellen Umgebung. Hand-Controller repräsentieren ihre Hände auf die gleiche Weise. Andere Hardwareelemente können ähnlich verwendet werden, um andere Teile des Körpers darzustellen und zusätzliche Daten zu liefern, die beim Simulieren der Aktionen des Benutzers in ihrer Umgebung nützlich sind.

In diesem Leitfaden werden wir untersuchen, wie WebXR **Spaces** und im Besonderen **Reference Spaces** verwendet, um die Positionen, Orientierungen und Bewegungen von Objekten und des Körpers des Benutzers in der virtuellen Welt zu verfolgen.

> [!NOTE]
> Dieser Artikel geht davon aus, dass Sie die im [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry) eingeführten Konzepte kennen, also die Grundlagen der 3D-Koordinatensysteme sowie der WebXR-Spaces und Referenzspaces und wie Referenzräume verwendet werden, um lokale Koordinatensysteme für einzelne Objekte oder bewegliche Komponenten innerhalb einer Szene zu erstellen.

## Eine Position mit einem Reference Space darstellen

Wie im Abschnitt [Räumliche Beziehungen mit Reference Spaces definieren](/de/docs/Web/API/WebXR_Device_API/Geometry#defining_spatial_relationships_with_reference_spaces) behandelt, etablieren Reference Spaces ein lokales Koordinatensystem, das von einem anderen Koordinatensystem versetzt ist, welches selbst durch einen anderen Space definiert ist. Daher kann ein Reference Space genutzt werden, um die Position und Orientierung eines Punktes zu definieren und folglich das gesamte Objekt, für das dieser Punkt der Ursprung ist. Obwohl diese Methode für jedes einzelne Objekt in einer Szene etwas übertrieben ist, kann sie für einige spezifische Objekte sehr nützlich sein, ein eigenes Koordinatensystem auf diese Weise zu haben.

- **Der Weltraum**; der Ursprung dieses Space ist der Ursprung des [WebGL-Koordinatensystems](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection), das dem gesamten 3D-Canvas zugrunde liegt.
- Der Spieler, Avatar oder die Kamera; der Ursprung dieses Space wird als Kameraposition verwendet, um die Szene zu rendern, die dem Benutzer angezeigt wird.
- Die Hand und/oder der Hand-Controller; jeder von diesen repräsentiert eine der Hände des Benutzers, entweder in Form der Hand selbst oder eines Controllers (oder beides). Der Ursprung ist im Allgemeinen das Zentrum der geballten Hand des Benutzers.
- **Der Zielstrahl**; jeder Controller oder ein anderes Handgerät kann einen Zielstrahl haben, der mit ihm verbunden ist, welcher durch ein Space repräsentiert wird, dessen Ursprung an dem Punkt auf dem Controller liegt, von dem der Strahl ausgeht, und so ausgerichtet ist, dass -Z in die Richtung des Ziels zeigt, auf das es hinweist.

Da jeder dieser Elemente unter Verwendung eines Reference Space als Grundlage definiert ist, kann die WebXR Device API leicht verwendet werden, um zwischen den Koordinatensystemen zu konvertieren, Operationen durchzuführen, die diese Spaces und ihre entsprechenden Objekte betreffen, und so weiter.

## Eine Position relativ zu einem Space beschreiben

Es gibt zwei Szenarien, in denen Sie möglicherweise eine Position und/oder Orientierung relativ zu einem Space beschreiben müssen. Das erste ist [oben beschrieben](#referenzräume_verschieben_oder_bewegen): Anwendung eines Reference Space auf einen Offset (oder umgekehrt, da das Ergebnis dasselbe ist), um die Transformationsmatrix zu bestimmen, die die resultierende Position im Koordinatensystem des Space darstellt.

### Posen

Sobald Ihre Referenzspaces für die verschiedenen Schlüsseltobjekte in der Szene etabliert sind, kommt es vor, dass Sie eine andere Position relativ zu dem Ursprung eines bestimmten Referenzspaces beschreiben müssen. Dies wird unter Verwendung von Posen gemacht. Eine Pose beschreibt eine Position und Orientierung relativ zu dem Ursprung des Referenzspaces, von dem sie erstellt wurde.

In WebXR wird eine Pose durch ein [`XRPose`](/de/docs/Web/API/XRPose)-Objekt repräsentiert, dessen [`transform`](/de/docs/Web/API/XRPose/transform)-Eigenschaft eine [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) ist, die die Transformationsmatrix definiert, die, wenn auf irgendeine Koordinate, Vektor oder Matrix im ursprünglichen Space angewendet, es in den Zielraum umwandelt. Daher kann eine Pose verwendet werden, um nicht nur Positionen zu konvertieren und zu bestimmen, sondern auch Rotationsinformationen.

Es gibt nur eine Möglichkeit, ein [`XRPose`](/de/docs/Web/API/XRPose) zu erstellen, und zwar mit der [`getPose()`](/de/docs/Web/API/XRFrame/getPose)-Methode in einem Animationsframe, wie er unter Verwendung eines [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekts bereitgestellt wird. Das bedeutet, dass Sie Posen am häufigsten in Ihrem Framerendering-Code verwenden werden, der als Callback von der [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) ausgeführt wird.

`getPose()` berechnet die Position eines [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) relativ zum Ursprung eines angegebenen [`XRSpace`](/de/docs/Web/API/XRSpace) und erstellt dann eine Pose, die die resultierende Position und Orientierung darstellt.

Wenn Sie beispielsweise die Darstellung eines Hand-Controllers mit `getPose()` zeichnen möchten, können Sie die benötigte Pose so erhalten:

```js
let controlPose = frame.getPose(inputSource.gripSpace, worldRefSpace);
```

Dies konvertiert die Position und Orientierung des Eingabe-Greifraums in das Verwendung der Weltkoordinatensystem, dann erzeugt die entsprechende `XRPose` und speichert sie in `controlPose`. Sie können dann die [`transform`](/de/docs/Web/API/XRPose/transform) von `controlPose` auf die Vertices im Objektmodell anwenden, das den Controller darstellt, um die WebGL-Koordinaten zu berechnen, die beim Rendering der Darstellung des Controllers zum Framebuffer verwendet werden.

### Zuschauerposen

Ein spezialisierter Typ von Pose, die **Zuschauerpose**, ist die Pose, die die Perspektive des Betrachters der Szene repräsentiert. Eine Zuschauerpose wird durch die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Schnittstelle von WebXR repräsentiert. Beim Rendern eines Frames verwenden Sie die Zuschauerpose, um die Position und Blickrichtung des Betrachters zu bestimmen, um [die virtuelle Kamera zu platzieren](/de/docs/Web/API/WebXR_Device_API/Cameras) und [die Szene zu rendern](/de/docs/Web/API/WebXR_Device_API/Rendering).

Die einzige Möglichkeit, eine Pose zu erhalten, die Positionsinformationen von einem Space zu einem anderen adaptieren kann, ist über das [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das von Ihrer Framerendering-Callback-Funktion empfangen wird, die Sie bei dem Aufruf der Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der [`XRSession`](/de/docs/Web/API/XRSession) angegeben haben.

Zum Beispiel könnte die folgende Zeile Code bei einer [`XRSession`](/de/docs/Web/API/XRSession), deren Referenzraum `worldRefSpace` ist, den ersten Animationsframe anfordern, um eingeplant zu werden:

```js
animationFrameRequestID = xrSession.requestAnimationFrame(myDrawFrame);
```

Dann könnte die Funktion `myDrawFrame()`, der Callback, der ausgeführt wird, wenn es Zeit ist, den Frame zu zeichnen, etwa so aussehen:

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

Der Parameter `frame` ist das [`XRFrame`](/de/docs/Web/API/XRFrame), das die Animationsframeinformationen enthält, die von WebXR bereitgestellt werden. Beim Aufruf holt sich diese Funktion zuerst die [`XRSession`](/de/docs/Web/API/XRSession) aus dem Frame-Objekt, dann verwendet sie die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des Frames, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) für den Betrachter zu berechnen gegeben `viewerRefSpace`, welche die aktuelle Blickrichtung und Position des Betrachters beschreibt.

Die zurückgegebene Zuschauerpose, `viewerPose`, kann wiederum verwendet werden, um [Positionen und Orientierungen zu berechnen, um die](/de/docs/Web/API/WebXR_Device_API/Cameras) Objekte in der Szene korrekt zu rendern, gegeben der Sicht des Benutzers.

## Referenzräume verschieben oder bewegen

Während Sie einen Referenzraum nicht ändern können, da sowohl [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) als auch [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) schreibgeschützt sind, können Sie leicht neue Referenzräume erstellen, indem Sie einen Versatztransform auf sie anwenden. Dies wird erreicht, indem Sie die Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des Referenzraums aufrufen.

### Positionen innerhalb eines Referenzraums verschieben

Der einfachste Fall der Nutzung von `getOffsetReferenceSpace()` ist die Transformation eines Punktes oder einer Matrix im Kontext des gleichen Raumes. Zum Beispiel, um einen neuen Referenzraum zu erstellen, der den Referenzraum `aRefSpace` einen halben Meter in jede Richtung verschiebt, können Sie so etwas tun:

```js
let halfMeterTransform = new XRRigidTransform({
  x: 0.5,
  y: 0.5,
  z: 0.5,
  w: 1.0,
});
aRefSpace = aRefSpace.getOffsetReferenceSpace(halfMeterTransform);
```

Dies ersetzt den bestehenden Referenzraum `aRefSpace` durch einen, dessen Koordinaten und Orientierung den Transform `halfMeterTransform` angewendet haben. Ohne Orientierungdaten in der Transformation wird die Orientierung von `aRefSpace` nicht beeinflusst.

### Konvertieren zwischen WebXR-Sitzungstypen

Ein weiterer häufiger Grund, warum Sie Positionsinformationen von einem Referenzraum in einen anderen konvertieren müssen, liegt darin, dass es notwendig ist, den Sitzungstyp von `inline` auf `immersive-vr` oder zurück zu ändern. Dies geschieht häufig, wenn Ihre Benutzeroberfläche eine Möglichkeit bietet, die Szene inline im Kontext einer Webseite anzuzeigen, mit einem Knopf oder einer anderen Steuerung, um in den immersiven Modus zu wechseln.

Da die meisten Benutzer es bevorzugen würden, dass Sie die gleiche Betrachterposition und Blickrichtung während dieses Übergangs beibehalten, können Sie die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) verwenden, um die aktuelle [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zu erhalten, die Sitzung zu wechseln und dann die gespeicherte Zuschauerpose zu verwenden, um die Position und Blickrichtung des Betrachters wiederherzustellen.

```js
let viewerPose = frame.getViewerPose(worldReferenceSpace);
let newSession = navigator.xr.requestSession("immersive-vr", {
  requiredFeatures: "unbounded",
});
worldReferenceSpace = await newSession.requestReferenceSpace("unbounded");
viewerPose = worldReferenceSpace.getOffsetReferenceSpace(viewerPose.transform);
```

Hier wird die Zuschauerpose erhalten, mit ihrem Transform relativ zu `worldReferenceSpace` definiert, dem globalen Referenzraum der aktuellen Sitzung. Dann wird eine neue Sitzung eingerichtet und ein Referenzraum erstellt, um der neue Weltreferenzraum zu werden.

Schließlich wird die gespeicherte `viewerPose` in das Koordinatensystem des neuen Weltspace konvertiert, indem die Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des neuen Referenzsystems aufgerufen wird. Mit diesen Informationen können wir die Szene wie gewohnt rendern, ohne die Perspektive des Betrachters zu beeinflussen.

### Konvertieren zwischen begrenzten und unbegrenzten Räumen

Manchmal, wenn Ihre primäre Erfahrung einen unbegrenzten Raum verwendet, können Sie die Benutzererfahrung vorübergehend in einen begrenzten Raum überführen müssen. Zum Beispiel kann es einfacher sein, die Interaktionen mit den Objekten in einem einzelnen Raum eines Hauses zu implementieren, indem zu einem begrenzten Raum gewechselt wird, der den einzelnen Raum repräsentiert. Dies könnte es erleichtern, Dinge wie die Unterstützung zur Anpassung der Wände umzusetzen, Möbel auf dem Boden zu platzieren, usw.

In Fällen wie diesem, in denen Sie beginnen müssen, ein anderes Referenzraumsystem zu verfolgen als das, was Sie verwendet haben, können Sie eine Kombination aus [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) und einigen Matrixberechnungen verwenden, um alles in Ihrer Szene so zu verschieben, dass es auf den neuen Referenzrahmen basiert.

Da `getViewerPose()` nur in einem [`XRFrame`](/de/docs/Web/API/XRFrame) verfügbar ist, müssen Sie diesen Prozess in Ihrem Rendering-Callback beginnen und möglicherweise einen Worker verwenden, um die Berechnungen durchzuführen, um Frame-Drops zu reduzieren.

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

## Kontinuität und Wiederherstellung nach Verlust der Verfolgung

Manchmal, während der Benutzer sein XR-Equipment aktiv mit Ihrer App verwendet, kann der Datenfluss mit Updates zur Position und Orientierung des Benutzers für einen Zeitraum verloren gehen. Nicht nur muss Ihre App bestimmen, was dem Benutzer während dieser Perioden angezeigt werden soll, sondern auch eine saubere Wiederherstellung, wenn die Verfolgung wieder aufgenommen wird.

Sobald das XR-Equipment beginnt, Verfolgungsdaten bereitzustellen, wird es dies fortsetzen, bis die XR-Sitzung geschlossen wird. Diese Daten werden bei jedem Frame durch Aufrufe der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des [`XRFrame`](/de/docs/Web/API/XRFrame) erlangt, um die Position und Blickrichtung des Betrachters zu erh

alten (was definiert, was der Benutzer sehen soll), und durch Aufrufe von [`getPose()`](/de/docs/Web/API/XRFrame/getPose), um jegliche andere Posen zu erhalten, wie die Positionen der Hand-Controller und anderer Teile des XR-Systems.

### Erkennen und Funktionieren nach einem Verfolgungsverlust

Wenn die Verfolgung ausfällt, wie es beispielsweise bei einem vorübergehenden Verlust der Konnektivität zwischen dem Headset und dem Gerät des Benutzers der Fall ist, wird die XR-Schicht weiterhin Posen zurückgeben, aber die [`emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition)-Eigenschaft dieser Posen wird `true` sein, was darauf hinweist, dass die Berechnung der Pose auf einer Schätzung der aktuellen Position des Benutzers basiert.

Einige XR-Geräte verwenden Algorithmen, um die geschätzte Position des Benutzers basierend auf der aktuell laufenden Bewegung zu berechnen, während andere Geräte keine Bewegung melden, aber mit `emulatedPosition` auf `true` gesetzt. In beiden Fällen möchten Sie möglicherweise Ihr Rendering anpassen, um den Verlust zu kompensieren, abhängig von Ihren spezifischen Anforderungen.

### Wenn die Verfolgung wieder aufgenommen wird

Sie können erkennen, wann die Verfolgung nach einem Verlust wieder aufgenommen wurde, indem die Benutzerposition springt, während sich gleichzeitig der Wert von `emulatedPosition` von `true` nach `false` ändert. Wie Sie dies handhaben, hängt von Ihrer Anwendung ab. Wenn Ihre App eine Möglichkeit bietet, für den Benutzer, sich durch die virtuelle Welt zu bewegen, ohne sich physisch in der realen Welt zu bewegen (einen sogenannten **Teleportationsmechanismus**), können Sie die neue Position akzeptieren und fortfahren, sodass der Sprung von Ihrer zuvor angenommenen Position sofort korrigiert wird, mit der neuen Position.

Andererseits, wenn Ihre App es dem Benutzer ermöglicht, sich physisch im realen Raum zu bewegen, um sich durch Ihre virtuelle Welt zu bewegen, kann das Übernehmen der neuen Verfolgungsposition und das Springen dorthin für den Benutzer beunruhigend sein und sollte, wenn möglich, vermieden werden. Stattdessen sollten Sie den Unterschied zwischen der aktuellen Position und der neuen Verfolgungsposition verwenden, um den neuen Teleportationsoffset zu berechnen; d.h. eine Transformation, die auf alles angewendet wird, um die Positions- und Orientierungsdaten von WebXR an Ihre Bedürfnisse anzupassen.

Sie können dies tun, indem Sie einen neuen Referenzraum erstellen, der in seinen wirkungsvollen Ursprung die Distanz integriert, die sich die Position des Betrachters seit dem vorherigen Frame verändert hat, indem die Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) verwendet wird.

### Das Reset-Event

**_<<<--- dieser Abschnitt hat wahrscheinlich noch Probleme; Korrekturen sind willkommen --->>>_**

Wenn eine Diskontinuität oder ein Bruch im nativen oder effektiven Ursprung eines Referenzraums auftritt, sendet der [User-Agent](/de/docs/Glossary/user_agent) dem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) ein [`reset`](/de/docs/Web/API/XRReferenceSpace/reset_event)-Ereignis. Dieses Ereignis zeigt an, dass eine signifikante Änderung der Position des Ursprungs relativ zur Umgebung des Benutzers stattgefunden hat.

Ein `reset` kann auftreten, weil das XR-Gerät die Verbindung für eine Zeit verloren hat, was dazu führte, dass die Bewegungen des Benutzers für eine Weile nicht richtig verfolgt wurden. Bei Wiederherstellung der Verfolgung bedeutet ein `reset`, dass die Verfolgung wiederhergestellt wurde und die neuen Positionsinformationen die tatsächlichen Positionsinformationen darstellen, die von der XR-Hardware bereitgestellt werden, statt zwischengespeicherte oder "best-guess"-Daten.

Ein weiterer Grund, warum `reset` gesendet werden kann, ist, dass der Benutzer die Grenzen eines Referenzraums verlassen und in einen anderen eingetreten ist, oder weil der Benutzer programmgesteuert von einem Referenzraum in einen anderen versetzt wurde. Jedes Mal, wenn sich die Begrenzungeometrie des Benutzerraums ändert, wird ein `reset` gesendet.

`reset` wird nur für signifikante Sprünge oder Übergänge verwendet; kleinere Dinge werden einfach automatisch absorbiert. Das Ereignis wird immer an jeden betroffenen Referenzraum gesendet, einschließlich derjenigen, die mit `getOffsetReferenceSpace()` erstellt wurden, sodass, wenn Sie `reset`-Ereignisse abhören, Sie sicherstellen müssen, dass Sie eine starke Referenz zu allen Räumen behalten, die Sie noch verwenden.

## Siehe auch

- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Geometrie und Reference-Räume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Rendering und die WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Ansichten und Betrachter: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Verwendung begrenzter Referenzräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)
