---
title: Rendering und der WebXR-Frame-Animations-Callback
slug: Web/API/WebXR_Device_API/Rendering
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{DefaultAPISidebar("WebXR Device API")}}

Sobald Ihre WebXR-Umgebung eingerichtet und eine {{domxref("XRSession")}} erstellt wurde, um eine laufende XR-Umgebungssitzung darzustellen, müssen Sie Frames der Szene bereitstellen, die auf dem XR-Gerät gerendert werden sollen. Dieser Artikel behandelt den Prozess, wie Sie die Frames der XR-Szene im Rendering-Loop an das Gerät übertragen, indem Sie die {{domxref("XRSession")}} verwenden, um ein {{domxref("XRFrame")}}-Objekt zu erhalten, das jeden Frame repräsentiert, und das dann verwendet wird, um den Framebuffer für die Bereitstellung an das XR-Gerät vorzubereiten.

Bevor Sie die virtuelle Umgebung rendern können, müssen Sie eine WebXR-Sitzung einrichten, indem Sie eine {{domxref("XRSession")}} mit der Methode [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) erstellen; Sie müssen die Sitzung auch mit einem Framebuffer verknüpfen und weitere Einrichtungsschritte durchführen. Diese Einrichtungsschritte sind im Artikel [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) beschrieben.

## Vorbereitung des Renderers

Sobald die XR-Sitzung eingerichtet ist, der WebGL-Framebuffer verbunden ist und WebGL mit den erforderlichen Daten bereitgestellt wurde, um die Szene zu rendern, können Sie den Renderer so einrichten, dass er zu laufen beginnt. Dies beginnt damit, dass Sie den Referenzraum erhalten, in dem Sie zeichnen möchten, wobei Ursprung und Orientierung auf die Anfangsposition und Blickrichtung des Betrachters gesetzt werden. Sobald dies geschehen ist, fordern Sie den Browser auf, Ihre Rendering-Funktion das nächste Mal aufzurufen, wenn er einen Framebuffer benötigt, um Ihre Szene zu rendern. Dies geschieht durch Aufruf der {{domxref("XRSession")}}-Methode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}.

Das Starten des Renderers sieht dann so aus:

```js
let worldRefSpace;

async function runXR(xrSession) {
  worldRefSpace = await xrSession.requestReferenceSpace("local");

  if (worldRefSpace) {
    viewerRefSpace = worldRefSpace.getOffsetReferenceSpace(
      new XRRigidTransform(viewerStartPosition, viewerStartOrientation),
    );
    animationFrameRequestID = xrSession.requestAnimationFrame(myDrawFrame);
  }
}
```

Nachdem ein Referenzraum für die immersive Welt erhalten wurde, wird ein versetzter Referenzraum erstellt, der die Position und Orientierung des Betrachters durch Erstellen eines {{domxref("XRRigidTransform")}} darstellt, das diese Position und Orientierung repräsentiert, und dann die {{domxref("XRReferenceSpace")}}-Methode {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} aufgerufen.

Dann wird der erste Animationsframe durch Aufruf der {{domxref("XRSession")}}-Methode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} geplant und eine Callback-Funktion, `myDrawFrame()`, übergeben, deren Aufgabe es ist, den Frame zu rendern.

Beachten Sie, dass dieser Code keine Schleife hat! Stattdessen ist der Frame-Rendering-Code — in diesem Fall eine Funktion namens `myDrawFrame()` — dafür verantwortlich, Zeit für das Zeichnen eines weiteren Frames zu planen, indem er `requestAnimationFrame()` erneut aufruft.

## Bildwiederholfrequenz und Framerate

Angenommen, Sie haben die {{domxref("XRSession")}}-Methode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} seit dem letzten Bildschirm-Update aufgerufen, wird Ihr Frame-Rendering-Callback vom Browser jedes Mal aufgerufen, wenn er bereit ist, Ihr App- oder Site-Fenster neu zu zeichnen. In diesem Kontext bedeutet "neu zeichnen" den Prozess, sicherzustellen, dass der angezeigte Bildschirminhalt dem entspricht, was das DOM und die darin enthaltenen Elemente momentan darstellen wollen.

### Vertikale Bildwiederholrate der Hardware

Wenn der Browser bereit ist, die {{HTMLElement("canvas")}}, in der Ihre WebXR-Inhalte angezeigt werden, zu aktualisieren, ruft er Ihr Frame-Rendering-Callback auf, das den angegebenen Zeitstempel und alle anderen relevanten Daten wie Modelle und Texturen sowie den Anwendungsstatus verwendet, um die Szene — wie sie zu diesem bestimmten Zeitpunkt erscheinen sollte — in den WebGL-Backbuffer zu rendern. Wenn Ihr Callback zurückkehrt, überträgt der Browser diesen Backbuffer an das Display oder das XR-Gerät sowie alle anderen Änderungen, die seit dem letzten Mal, dass der Bildschirm aktualisiert wurde, vorgenommen wurden.

Historisch gesehen wurden Displays 60 Mal pro Sekunde aktualisiert. Das liegt daran, dass frühe Displays die Stromfluss-Wellenform des AC-Stromnetzes nutzten, das in den Vereinigten Staaten 60-mal pro Sekunde (50 in Europa) für Timing-Zwecke schwingt. Diese Zahl hat eine Reihe verschiedener Namen, aber sie sind alle gleichwertig oder fast gleich:

- Bildwiederholrate
- Vertikale Bildwiederholrate
- Vertikale Leerzeilenrate (VBL)
- Vertikale Synchronisationsrate

Es gibt noch andere ähnliche Begriffe, aber unabhängig vom Namen wird die Einheit Hertz, oder Hz, verwendet. Ein Display, das 60 Mal pro Sekunde aktualisiert wird, hat eine Bildwiederholrate von 60 Hz. Das bedeutet, dass die maximale Anzahl von Frames, die es in einer Sekunde anzeigen kann, 60 beträgt. Egal, wie viele Frames pro Sekunde über diese Zahl hinaus gerendert werden, nur 60 davon werden in der Sekunde tatsächlich auf dem Bildschirm zu sehen sein.

Aber nicht alle Displays laufen mit 60 Hz; heutzutage beginnen leistungsfähigere Displays, viel höhere Bildwiederholraten zu verwenden. Displays mit 120 Hz — oder 120 Frames pro Sekunde — werden immer üblicher, zum Beispiel. Der Browser versucht immer, mit der gleichen Rate wie das Display zu aktualisieren, was bedeutet, dass auf einigen Computern Ihr Callback maximal 60 Mal pro Sekunde ausgeführt wird, während er auf anderen 90 oder 120 Mal pro Sekunde oder sogar häufiger aufgerufen werden könnte, je nach Bildrate.

### Verfügbare Zeit zum Rendern jedes Frames

Dies macht es entscheidend, die verfügbare Zeit zwischen den Frames optimal zu nutzen. Wenn das Gerät des Benutzers ein 60 Hz-Display verwendet, wird Ihr Callback bis zu 60 Mal pro Sekunde aufgerufen, und Ihr Ziel ist, sicherzustellen, dass es nicht weniger häufig als das aufgerufen wird. Sie erreichen dies, indem Sie so viel wie möglich außerhalb des Haupt-Threads erledigen und Ihren Frame-Rendering-Callback so effizient wie möglich halten. Die Aufteilung der Zeit in 60 Hz-Blöcke, wobei jeder Block mindestens teilweise zum Rendern der Szene verwendet wird, wird im Diagramm unten gezeigt.

![Renderer-Ausführungszeit pro Frameperiode](frames-and-refresh-rate.svg)

Dies ist wichtig, weil der Computer mit zunehmender Auslastung möglicherweise nicht in der Lage ist, Ihren Callback genau in jedem Frame aufzurufen und möglicherweise Frames überspringen muss. Dies wird als **Frame-Dropping** bezeichnet. Dies passiert, wenn die Zeit, die zum Rendern eines Frames benötigt wird, die verfügbare Zeit zwischen den Frames überschreitet, entweder weil das Rendering verzögert wurde oder weil das Rendering selbst mehr Zeit benötigte, als verfügbar war.

![Renderer-Ausführungszeit pro Frameperiode](dropped-frames-timing.svg)

Im obigen Diagramm wird Frame 3 übersprungen, da das Rendern von Frame 2 nicht abgeschlossen war, bis Frame 3 gemalt werden sollte. Der nächste gezeichnete Frame wird stattdessen Frame 4 sein. Dies ist ein weiterer Grund, warum der in Ihren Rendering-Callback übergebene Zeitstempel nützlich ist. Indem Sie die Szene basierend auf Zeit anstatt der Frame-Nummer konfigurieren, können Sie sicherstellen, dass Ihre gerenderten Frames dem entsprechen, was erwartet wird, anstatt zurückzubleiben.

Wenn ein Frame übersprungen wird, ändert sich der Inhalt des betroffenen Displaybereichs für diesen Durchlauf durch die Frame-Schleife nicht. Aus diesem Grund ist ein gelegentlicher übersprungener Frame normalerweise nicht besonders auffällig, aber wenn es häufig passiert — vor allem, wenn mehrere Frames in sehr kurzer Zeitspanne übersprungen werden — kann es störend werden oder sogar Ihren Bildschirm unbenutzbar machen.

Glücklicherweise können Sie leicht berechnen, wie viel Zeit Ihnen zwischen den Frames zur Verfügung steht, indem Sie `1/refreshRate` Sekunden verwenden. Das heißt, indem Sie 1 durch die Bildwiederholrate des Displays teilen. Der resultierende Wert ist die Menge an Zeit, die für jeden Frame zur Verfügung steht, um gerendert zu werden, ohne den Frame zu verlieren. Zum Beispiel hat ein 60 Hz-Display 1/60 Sekunde Zeit, um einen einzelnen Frame zu rendern, oder 0,0166667 Sekunden. Und wenn die Bildwiederholrate des Geräts 120 Hz beträgt, haben Sie nur 0,00883333 Sekunden, um jeden Frame zu rendern, wenn Sie das Überspringen von Frames vermeiden möchten.

Auch wenn die Hardware tatsächlich 120 Hz unterstützt, können Sie trotzdem mit 60 Mal pro Sekunde durchkommen, und dies als Baseline zu verfolgen, ist in der Regel ein guter Ansatz. 60 FPS ist bereits über dem Punkt, an dem die meisten Menschen leicht erkennen können, dass die Animation keine Serie von Standbildern ist, die sehr schnell laufen. Mit anderen Worten, wenn Sie sich unsicher sind, können Sie davon ausgehen, dass das Display mit 60 Hz aktualisiert wird. Solange Ihr Code richtig geschrieben ist, wird alles in Ordnung sein.

### Bedenken zur Render-Performance

Es ist klar, dass Sie sehr wenig Zeit haben, um Ihre Szene pro Frame zu rendern. Nicht nur das, sondern wenn Ihr Renderer selbst länger läuft als die zur Verfügung stehende Zeit, können Sie nicht nur den Frame zum Fallen bringen, sondern die Zeit wird vollständig verschwendet, indem anderer Code daran gehindert wird, überhaupt für diesen Frame ausgeführt zu werden.

Nicht nur das, sondern wenn Ihr Rendering die vertikale Aktualisierungsgrenze überschreitet, können Sie einen **reißenden** Effekt verursachen. Reißen tritt auf, wenn die Display-Hardware den nächsten Aktualisierungszyklus startet, während der vorherige Frame noch auf den Bildschirm gezeichnet wird. Als Resultat erhalten Sie den optischen Effekt, dass der obere Teil des Bildschirms den neuen Frame zeigt, während der untere Teil des Frames eine Kombination des vorherigen Frames und möglicherweise sogar des vorherigen zeigt.

Ihre Aufgabe ist es also, Ihren Code so schlank und leicht zu halten, dass Sie die verfügbare Zeit nicht übertreffen oder auf andere Weise drop pots es frames oder kann durch den Haupt-Thread übermäßig abused.

Aus diesen Gründen sollten Sie, es sei denn, Ihr Renderer ist ziemlich klein und leichtgewichtig, mit wenig zu tun, alles auslagern, was Sie können, zu einem Worker, sodass Sie den nächsten Frame berechnen können, während der Browser andere Dinge handhabt. Indem Sie Ihre Berechnungen und Daten bereithalten, bevor der Frame tatsächlich benötigt wird, können Sie Ihre Website oder App viel effizienter rendern und die Haupt-Thread-Leistung verbessern und im Allgemeinen die Benutzererfahrung verbessern.

Für den Fall, dass Ihre Rendering-Anforderungen besonders hoch sind, können Sie einige Tricks anwenden, um Ihren Einfluss weiter zu reduzieren und die Leistung zu optimieren. In der [WebXR-Performance-Leitfaden](/de/docs/Web/API/WebXR_Device_API/Performance) finden Sie Empfehlungen und Tipps, die Ihnen helfen, sicherzustellen, dass Ihre Leistung so gut wie möglich ist.

## WebXR-Frames

Ihre Frame-Rendering-Callback-Funktion erhält als Eingabe zwei Parameter: die Zeit, auf die sich der Frame bezieht, und ein {{domxref("XRFrame")}}-Objekt, das den Zustand der Szene zu diesem Zeitpunkt beschreibt.

### Die Optik von 3D

Wir haben zwei Augen aus einem Grund: Da wir zwei Augen haben, sieht jedes die Welt aus einem leicht anderen Winkel. Da sie einen bekannten, festen Abstand zueinander haben, kann unser Gehirn grundlegende Geometrie und Trigonometrie durchführen und die 3D-Natur der Realität aus diesen Informationen herausfinden. Wir nutzen auch Perspektive, Größenunterschiede und sogar unser Verständnis davon, wie Dinge normalerweise aussehen, um die Details dieser dritten Dimension herauszufinden. Diese Faktoren sind einige der Quellen unserer [Tiefenwahrnehmung](https://en.wikipedia.org/wiki/Depth_perception).

Um beim Rendern von Grafiken die Illusion von drei Dimensionen zu erzeugen, müssen wir so viele dieser Faktoren wie möglich simulieren. Je mehr wir diese Faktoren simulieren und je genauer wir dies tun, desto besser können wir das menschliche Gehirn täuschen, unsere Bilder in 3D wahrzunehmen. Der Vorteil von XR ist, dass wir nicht nur die klassischen monokularen Techniken zur Simulation von 3D-Grafiken nutzen können (Perspektive, Größe und simulierte Parallaxe), sondern auch das binokulare Sehen simulieren können — also sehen mit zwei Augen — indem wir die Szene zweimal für jeden Animationsrahmen rendern — einmal für jedes Auge.

Der typische menschliche [Pupillenabstand](https://en.wikipedia.org/wiki/Pupillary_distance) — der Abstand zwischen den Zentren der Pupillen — beträgt zwischen 54 und 74 Millimetern (0,054 bis 0,074 Meter). Wenn das Zentrum des Kopfes des Betrachters sich beispielsweise bei `[0.0, 2.0, 0.0]` (etwa zwei Meter über Bodenhöhe in der Mitte des Raums horizontal) befindet, müssen wir die Szene zuerst von, sagen wir, `[-0.032, 2.0, 0.0]` (32 mm links vom Zentrum) und dann erneut bei `[0.032, 2.0, 0.0]` (32 mm rechts vom Zentrum) rendern. Auf diese Weise platzieren wir die Augenpositionen des Betrachters in einem durchschnittlichen menschlichen Pupillenabstand von 64 mm.

Dieser Abstand (oder welcher Pupillenabstand das XR-System auch immer verwenden soll) reicht aus, damit unser Gehirn einen ausreichenden Unterschied aufgrund der retinalen Disparität (dem Unterschied in dem, was jede Retina sieht) und des Parallaxeeffekts erkennt, damit unser Gehirn die Distanz zu und die Tiefe von Objekten berechnen kann, wodurch wir trotz der Tatsache, dass unsere Netzhäute nur 2D-Flächen sind, drei Dimensionen wahrnehmen können.

Dies wird im Diagramm unten veranschaulicht, in dem gezeigt wird, wie jedes Auge einen Würfel wahrnimmt, der direkt vor dem Betrachter platziert ist. Während dieses Diagramm den Effekt in gewisser Weise zur Veranschaulichung übertreibt, bleibt das Konzept gleich. Jedes Auge sieht einen Bereich, dessen Grenzen einen Bogen vor dem Auge bilden. Da jedes Auge zur einen oder anderen Seite der Mittellinie des Kopfes versetzt ist und jedes Auge ungefähr das gleiche Sichtfeld hat, sieht jedes Auge einen leicht anderen Teil der Welt vor ihm und aus einem leicht anderen Winkel.

![Diagramm, das zeigt, wie binokulare Sicht funktioniert](binocular-vision.svg)

Das linke Auge sieht den Würfel ein wenig von links der Mitte, und das rechte Auge sieht ihn ein wenig von rechts der Mitte. Infolgedessen sieht das linke Auge ein wenig mehr von der linken Seite des Objekts und ein wenig weniger von der rechten Seite und umgekehrt. Diese beiden Bilder werden auf die Netzhäute fokussiert, und das resultierende Signal wird über die Sehnerven in den visuellen Kortex des Gehirns übertragen, der sich hinten im Okzipitallappen befindet.

Das Gehirn nimmt diese Signale aus dem linken und rechten Auge und konstruiert ein einziges, einheitliches, 3D-Bild der Welt im Gehirn des Betrachters, und dieses Bild wird gesehen. Und aufgrund dieser Unterschiede zwischen dem, was das linke Auge sieht, im Vergleich zum rechten Auge, kann das Gehirn eine Vielzahl von Informationen ableiten, wie tief das Objekt ist, seine Größe und mehr. Durch die Kombination dieser abgeleiteten Tiefeninformationen mit anderen Hinweisen wie Perspektive, Schatten, Erinnerungen daran, was diese Beziehungen bedeuten, und so weiter, können wir eine Menge über die Welt um uns herum herausfinden.

### Frames, Posen, Ansichten und Framebuffer

Sobald Sie ein `XRFrame` erhalten haben, das den Zustand der Szene zu einem bestimmten Zeitpunkt repräsentiert, müssen Sie die Positionen der Objekte innerhalb der Szene relativ zum Betrachter bestimmen, sodass Sie sie rendern können. Die Position und Orientierung des Betrachters relativ zu einem Referenzraum wird durch eine {{domxref("XRViewerPose")}} dargestellt, die durch den Aufruf der {{domxref("XRFrame")}}-Methode {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} erhalten wird.

Das `XRFrame` verfolgt nicht direkt die Positionen oder Orientierungen der Objekte in Ihrer Welt. Stattdessen bietet es eine Möglichkeit, Positionen und Orientierungen in das Koordinatensystem der Szene zu konvertieren und sammelt die Positions- und Orientierungsdaten des Betrachters von der XR-Hardware, konvertiert sie in den von Ihnen konfigurierten Referenzraum und liefert sie mit einem Zeitstempel an Ihren Frame-Rendering-Code. Mit diesem Zeitstempel und Ihren eigenen Daten bestimmen Sie, wie Sie die Szene rendern.

Nachdem die Szene zweimal gerendert wurde — einmal in die linke Hälfte des Framebuffers und einmal in die rechte Hälfte des Framebuffers — wird der Framebuffer an die XR-Hardware gesendet, die jede Hälfte des Framebuffers dem entsprechenden Auge anzeigt. Dies geschieht oft (aber nicht immer) durch Zeichnen des Bildes auf einem einzigen Bildschirm und Verwenden von Linsen, um die richtige Hälfte dieses Bildes an jedes Auge weiterzuleiten.

Sie können mehr darüber erfahren, wie 3D von WebXR dargestellt wird, in [Darstellung von 3D mit WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras#representing_3d_with_webxr).

## Zeichnen der Szene

Wenn es Zeit ist, den Framebuffer vorzubereiten, damit der Browser das nächste Frame Ihrer Szene malen kann, wird die Funktion aufgerufen, die Sie in `requestAnimationFrame()` bereitgestellt haben. Sie erhält als Eingabe die Zeit, zu der das Frame gezeichnet wird, und ein {{domxref("XRFrame")}}-Objekt, das Details über den Zustand der Szene für das Frame enthält, das Sie rendern müssen.

Idealerweise möchten Sie, dass dieser Code so schnell ist, dass er eine Framerate von 60 FPS oder so nah wie möglich daran halten kann, und dabei bedenken, dass mehr passiert als nur Ihr Code in dieser einen Funktion. Sie müssen sicherstellen, dass der Haupt-Thread nicht mehr Zeit pro Frame benötigt, als die Dauer des Frames selbst beträgt.

### Ein einfacher Renderer

In dieser Version des WebXR-Rendering-Callbacks verwenden wir einen sehr einfachen Ansatz, der bei relativ einfachen Projekten hervorragend funktioniert. Dieses Pseudocode skizziert diesen Prozess:

```plain
for each view in the pose's views list:
  get the WebXR GL layer's viewport
  set the WebGL viewport to match
  for each object in the scene
    bindProgram()
    bindVertices()
    bindMatrices()
    bindUniforms()
    bindBuffers()
    bindTextures()
    drawMyObject()
```

Hier verwendet dieser Form des Renderers eine **view-first order**. Jeder der beiden Ansichten, die die Display des XR-Geräts ausmachen, wird hintereinander gerendert, wo jedes Objekt in einer Ansicht gezeichnet wird, bevor die gleiche Menge Objekte in der anderen Ansicht rendert wird. Infolgedessen gibt es eine doppelte Arbeit, da viele Daten, die zum Zeichnen eines Objekts benötigt werden, zweimal pro Frame an die GPU gesendet werden. Es vereinfacht jedoch das Portieren vorhandenen WebGL-Codes und ist oft gut genug, um den Job zu erledigen, daher werden wir diese Methode zuerst betrachten.

Siehe [Optimierung durch Rendering in objekt-first order](#optimierung_durch_rendering_in_objekt-first_order) für einen alternativen Ansatz, der jedes Objekt zweimal hintereinander rendert, einmal für jedes Auge, bevor er zum nächsten Objekt geht, das die Szene für diesen Frame ausmacht; das heißt, Rendering in **object-first order**.

#### Beispiel Rendering-Callback

Werfen wir einen Blick auf realen Code, der diesem grundlegenden Muster folgt. Da wir in obigem Beispiel dieser Funktion den Namen `myDrawFrame()` gegeben haben, werden wir das hier weiterhin verwenden.

```js
let lastFrameTime = 0;

function myDrawFrame(currentFrameTime, frame) {
  const session = frame.session;
  let viewerPose;

  // Schedule the next frame to be painted when the time comes.

  animationFrameRequestID = session.requestAnimationFrame(myDrawFrame);

  // Get an XRViewerPose representing the position and
  // orientation of the viewer. If successful, render the
  // frame.

  viewerPose = frame.getViewerPose(viewerRefSpace);
  if (viewerPose) {
    const glLayer = session.renderState.baseLayer;
    gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

    // Start by erasing the color and depth framebuffers.

    gl.clearColor(0, 0, 0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Compute the time elapsed since the last frame was rendered.
    // Use this value to ensure your animation runs at the exact
    // rate you intend.

    const deltaTime = currentFrameTime - lastFrameTime;
    lastFrameTime = currentFrameTime;

    // Now call the scene rendering code once for each of
    // the session's views.

    for (const view of viewerPose.views) {
      const viewport = glLayer.getViewport(view);
      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
      myDrawSceneIntoView(view, deltaTime);
    }
  }
}
```

Die `myDrawFrame()`-Funktion greift auf die {{domxref("XRSession")}} des angegebenen `frame`-Parameters {{domxref("XRFrame")}} zu und ruft dann die Sitzungsmethode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} auf, um das Rendern des nächsten Frames umgehend zu planen. Dies stellt sicher, dass wir sofort in die Warteschlange gelangen können, sodass der Rest der Zeit, die in dieser Iteration der `myDrawFrame()`-Funktion verbracht wird, für das Timing des Zeichnens des nächsten Frames zählt.

Wir rufen dann das {{domxref("XRViewerPose")}}-Objekt auf, das die Pose — ihre Position und Orientierung — des Zuschauers beschreibt, indem wir die frame-Methode {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} aufrufen und den Referenzraum des Zuschauers aus dem `viewerRefSpace` übergeben, den wir zuvor [bei der Einrichtung der WebXR-Sitzung](#vorbereitung_des_renderers) gewonnen haben.

Mit der Pose des Betrachters in der Hand können wir nun mit dem Rendern des Frames beginnen. Der erste Schritt besteht darin, Zugriff auf den Framebuffer zu erhalten, in dem das WebXR-Gerät das Frame gezeichnet haben möchte; dies geschieht, indem wir die Ziel-WebGL-Schicht von der Sitzungseigenschafts-{{domxref("XRSession.renderState", "renderState")}}-Objektes {{domxref("XRRenderState.baseLayer", "baseLayer")}} erwerben, dann den {{domxref("XRWebGLLayer.framebuffer", "framebuffer")}} von diesem {{domxref("XRWebGLLayer")}}-Objekt. Wir rufen dann [`gl.bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer) auf, um diesen Framebuffer als Ziel für alle kommenden Zeichenbefehle zu binden.

Der nächste Schritt besteht darin, den Framebuffer zu löschen. Obgleich Sie in der Theorie diesen Schritt überspringen können — _wenn und nur wenn Ihr Rendering-Code garantiert jeden einzelnen Pixel im Framebuffer schreiben wird_ — ist es im Allgemeinen am sichersten, es einfach zu löschen, bevor Sie zu zeichnen beginnen, es sei denn, Sie müssen jede Unze Leistung aussteigen und wissen, dass Sie sowieso alle Pixel berühren. Die Hintergrundfarbe wird mit [`gl.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) auf vollständig deckendes Schwarz gesetzt; die Löschtiefe wird auf 1.0 gesetzt, indem [`gl.cleardepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth) aufgerufen wird, um alle Pixel zu löschen, unabhängig davon, wie weit das Objekt, zu das sie gehören, entfernt ist; und schließlich werden die Pixel- und Tiefen-Puffer des Frames sowohl durch Aufrufen von [`gl.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) gelöscht, indem ein Bitmask eingereicht wird, in dem sowohl `COLOR_BUFFER_BIT` als auch `DEPTH_BUFFER_BIT` gesetzt sind.

Da WebXR einen einzigen Framebuffer für jede Ansicht verwendet, mit Viewports auf die Ansicht, die verwendet werden, um jedes Auge Sicht innerhalb des Framebuffers zu trennen, müssen wir nur einen einzigen Framebuffer löschen und nicht jeden Einzelnen (oder andere Ansichten, falls vorhanden) individuell.

Als nächstes wird die seit dem vorherigen Frame vergangene Zeit berechnet, indem Sie vom gespeicherten Zeitpunkt an, als das letzte Frame gerendert wurde, `lastFrameTime` abziehen. Das Ergebnis ist ein {{domxref("DOMHighResTimeStamp")}}-Wert, der die Anzahl der Millisekunden angibt, die seit dem letzten Rendering vergangen sind. Wir können diesen Wert beim Zeichnen der Szene verwenden, um sicherzustellen, dass wir alles um die entsprechende Entfernung bewegen, bezogen auf die tatsächliche verstrichene Zeit, anstatt anzunehmen, dass der Callback mit einer gleichmäßigen Bildrate aufgerufen wird. Diese verstrichene Zeit wird in der Variablen `deltaTime` gespeichert, und der Wert von `lastFrameTime` wird mit der Zeit dieses Frames ausgetauscht, bereit, das Differential für das nächste Frame zu berechnen.

Es ist jetzt Zeit, die Szene für jedes Auge zu rendern. Wir iterieren über die Ansichten innerhalb des `views`-Arrays der `viewerPose`. Für jedes dieser {{domxref("XRView")}}-Objekte, die die Perspektive eines Auges auf die Szene darstellen, müssen wir damit beginnen, das Zeichnen auf den Bereich des Framebuffers zu beschränken, der das sichtbare Bild des betreffenden Auges darstellt.

Wir beginnen damit, WebGL auf das Rendern der Inhalte des Auges vorzubereiten, indem wir den Viewport erhalten, der das Zeichnen auf das Gebiet innerhalb des Framebuffers beschränkt, das für das Bild des aktuellen Auges reserviert ist, indem wir die Methode {{domxref("XRWebGLLayer")}}-Methode {{domxref("XRWebGLLayer.getViewport", "getViewport()")}} aufrufen. Wir stellen dann den WebGL-Viewport so ein, dass er übereinstimmt, und übergeben den X- und Y-Ursprung des Viewports zusammen mit seiner Breite und Höhe an [`gl.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport).

Schließlich rufen wir unsere Methode `myDrawSceneIntoView()` auf, um tatsächlich WebGL zu verwenden, um die Szene zu rendern. In diesem verwenden wir die {{domxref("XRView")}}, die das Auge repräsentiert, für das wir zeichnen (um perspektivisches Mapping und dergleichen durchzuführen) und `deltaTime`, damit der Szenencode die verstrichene Zeit genau darstellen kann, wenn er die Positionen von Objekten bestimmt, die sich im Laufe der Zeit bewegen.

Wenn die Schleife endet, die über die Ansichten iteriert, ist jedes Bild fertiggestellt, das benötigt wird, um die Szene dem Betrachter zu zeigen, und nach der Rückkehr findet der Framebuffer seinen Weg durch die GPU und schließlich zum Display oder den Displays des XR-Geräts. Da wir {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} oben in der Funktion aufgerufen haben, wird unser Callback erneut aufgerufen, wenn es Zeit ist, das nächste Frame der Szenen-Animation zu rendern.

#### Nachteile dieser Vorgehensweise

Da es wichtig ist, die Zeit, die Sie in dieser Funktion verbringen, so weit wie möglich zu minimieren, je mehr Zeit Sie für die Verwaltung von Zustandänderungen aufwenden, desto weniger Zeit haben Sie tatsächlich, um Dinge zu ziehen. Diese Technik funktioniert sehr gut für eine kleine Anzahl von Objekten, aber weil sie die Daten für jedes Objekt zweimal (einmal für das linke Auge und einmal für das rechte) neu binden muss, verbringen Sie viel Zeit, den Zustand anzupassen, Puffer und Texturen hoch zu laden und so weiter. Im nächsten Abschnitt betrachten wir einen geänderten Ansatz, der diese Zustandänderungen erheblich reduziert und einen potenziell viel schnelleren Rendering-Ansatz bietet, besonders wenn die Anzahl der Objekte steigt.

### Optimierung durch Rendering in objekt-first order

Ein Vorteil des WebXR-Ansatzes, einen einzigen WebGL-Framebuffer zu verwenden, um sowohl die linken als auch die rechten Augesichtungen in einem einzigen Framebuffer zu enthalten, ermöglicht es, die Rendering-Leistung erheblich zu verbessern, indem die Reihenfolge geändert wird, in der Dinge getan werden. Anstatt den Viewport für eine gegebene Ansicht (wie das linke Auge) einzurichten und dann jedes Objekt sichtbar für das linke Auge nacheinander zu rendern und Puffer für jedes Objekt neu zu konfigurieren, können Sie stattdessen jedes Objekt zweimal hintereinander rendern, einmal für jedes Auge, um so die Puffer, Uniformen und so weiter nur einmal für beide Augen einzurichten.

Der resultierende Pseudocode sieht folgendermaßen aus:

```plain
for each object in the scene
  bindProgram()
  bindUniforms()
  bindBuffers()
  bindTextures()
  for each view in the pose's views list
    get the XRWebGLLayer's viewport
    set the WebGL viewport to match
    bindVertices()
    bindMatrices()
    drawMyObject()
```

Durch diese Änderung brauchen wir Programme, Uniformen, Puffer, Texturen und möglicherweise andere Sachen nur einmal pro Frame zu binden, anstatt für jedes im Bild befindliche Objekt zweimal. Dies reduziert den Overhead um einen potenziell sehr große Marge.

### Begrenzung der Framerate

Wenn Sie die Frame-Rate bewusst begrenzen müssen, um eine Basisframerate zu etablieren, die versucht werden soll, während mehr Zeit für anderen Code geöffnet wird, können Sie dies auf einer zeitlich basis, indem Sie Frames absichtlich überspringen.

Zum Beispiel, um die Framerate um 50% zu reduzieren, überspringen Sie einfach jeden zweiten Frame:

```js
let tick = 0;

function drawFrame(time, frame) {
  animationFrameRequestID = frame.session.requestAnimationFrame(drawFrame);

  if (!(tick % 2)) {
    /* Draw the scene */
  }
  tick++;
}
```

Diese Version des Rendering-Callbacks behält einen `tick`-Zähler bei. Das Frame wird nur gerendert, wenn `tick` ein gerader Wert hat. Auf diese Weise wird nur jedes andere Frame gezeichnet.

Sie können das Rendern auch alle vier Frames durchführen, indem Sie `!(tick % 4)` verwenden, und so weiter.

### Anpassen Ihrer Animation an die verstrichene Zeit

Der Rendering-Callback empfängt einen `time`-Parameter aus einem guten Grund. Dieser {{domxref("DOMHighResTimeStamp")}}-Wert ist ein Gleitkommawert, der die Zeit angibt, zu der das Frame zum Rendern angesetzt war. Da die Ausführung Ihres Callbacks nicht in präzisen 1/60 Sekunden-Abständen erfolgen wird — und tatsächlich könnte das in einer anderen Rate auftreten, wenn das Display des Benutzers eine andere Framerate hat — können Sie sich nicht allein auf die Tatsache verlassen, dass Ihr Code läuft, um anzunehmen, dass es 1/60 Sekunde seit dem letzten Frame war.

Aus diesem Grund müssen Sie den bereitgestellten Zeitstempel verwenden, um sicherzustellen, dass Ihre Animation mit der gewünschten Geschwindigkeit wiedergegeben wird. Dazu müssen Sie zuerst die Zeit, die seit dem letzten Rendering verstrichen ist, berechnen:

```js
let lastFrameTime = 0;

function drawFrame(time, frame) {
  // schedule next frame, prepare the buffer, etc.

  const deltaTime = (time - lastFrameTime) * 0.001;
  lastFrameTime = time;

  for (const view of pose.views) {
    /* render each view */
  }
}
```

Dies behält eine globale (oder eine Objekt-Eigenschaft) namens `lastFrameTime` bei, die die Zeit enthält, als das vorherige Frame gerendert wurde. In diesem Fall, da die Zeitwerte in Millisekunden gespeichert werden, multiplizieren wir mit 0,001, um die Zeit in Sekunden umzuwandeln. In einigen Fällen spart dies Zeit später. In anderen Situationen benötigen Sie die Zeit in Millisekunden, sodass Sie nichts ändern müssen.

Mit der verstrichenen Zeit in der Hand hat Ihr Rendering-Code die Mittel, um zu berechnen, wie viel sich jedes sich bewegende Objekt in der verstrichenen Zeit bewegt hat. Zum Beispiel, wenn ein Objekt rotiert, könnten Sie die Rotation so anwenden:

```js
const xDeltaRotation =
  xRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
const yDeltaRotation =
  yRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
const zDeltaRotation =
  zRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
```

Dies berechnet die Menge, um die sich das Objekt seit dem letzten Zeichnen des Frames um jede der drei Achsen gedreht hat. Ohne dies würde sich die Form um den angegebenen Betrag in jedem Frame drehen, unabhängig von der verstrichenen Zeit. Das könnte in vielen Fällen erhebliches Stottern verursachen.

Das gleiche Konzept gilt für Objekte, die sich bewegen, anstatt sich zu drehen:

```js
const xDistanceMoved = xSpeedPerSecond * deltaTime;
const yDistanceMoved = ySpeedPerSecond * deltaTime;
const ZDistanceMoved = zSpeedPerSecond * deltaTime;
```

`xSpeedPerSecond`, `ySpeedPerSecond` und `zSpeedPerSecond` enthalten jeweils die Komponenten der Geschwindigkeit des Objekts auf dieser Achse. Mit anderen Worten, `[xDistanceMoved, yDistanceMoved, zDistanceMoved]` ist ein Vektor, der die Geschwindigkeit des Objekts darstellt.

## Zusätzliche Aufgaben im Zusammenhang mit der Animation der Szene

Natürlich gibt es andere Dinge, die wahrscheinlich bei jedem Durchgang durch den Renderer passieren müssen. Zwei der häufigsten sind die [Verarbeitung von Benutzereingaben](/de/docs/Web/API/WebXR_Device_API/Inputs) und die Durchführung von Updates für die Positionen von Objekten (oder dem Betrachter) basierend auf bekannten Faktoren, wie diesen Steuerungszuständen oder bekannten Animationspfaden der Objekte in der Szene.

### Handhabung von Benutzereingaben

Es gibt drei Methoden, mit denen Benutzer Eingaben in einer WebXR-Anwendung bereitstellen können. Erstens unterstützt WebXR die direkte Verarbeitung von Eingaben von den Controllern, die in die XR-Hardware integriert sind. Diese Eingabequellen können Geräte wie Hand-Controller, optische Tracking-Systeme, Beschleunigungssensoren und Magnetometer und andere solcher Geräte umfassen.

Die zweite Art von Eingabe ist ein Gamepad, das über das XR-System verbunden ist. Dies verwendet Schnittstellen, die von der [Gamepad-API](/de/docs/Web/API/Gamepad_API) geerbt wurden, aber Sie interagieren mit ihnen über WebXR.

Der dritte und letzte Eingabetyp ist das traditionelle nicht-XR-Eingabegerät wie Tastaturen, Mäuse, Trackpads, Touchscreens und nicht-XR-Gamepads und Joysticks.

Orientierungs- und Positionsinformationen, die direkt von der XR-Hardware gesammelt werden können, werden automatisch angewendet. Daher sind es die anderen Eingaben, mit denen Sie selbst umgehen müssen:

- Zielauswahl des Zeigegeräts und Tastendrücke
- Gamepad-Eingaben
- Eingaben von nicht-XR-Eingabegeräten

Um mehr darüber zu erfahren, wie Sie Benutzereingaben während der Darstellung einer Szene mit WebXR behandeln können, siehe den Artikel [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs).

### Aktualisierung der Objektpositionen

Die meisten (wenn auch nicht alle) Szenen enthalten eine Form von Animation, bei der sich Dinge auf angemessene Weise bewegen und aufeinander reagieren.

Zum Beispiel könnte ein virtuelles Realitätsspiel oder ein Augmented Reality Spiel nicht-spielerische Charaktere wie Feinde haben, die vom Computer gesteuert werden und sich durch die Szene bewegen. Nicht nur ihre Standorte in der Welt ändern sich im Laufe der Zeit, sondern auch jeder NPC hat wahrscheinlich Körperteile oder Komponenten, die sich relativ zueinander bewegen. Arme und Beine schwingen, während eine Kreatur geht, Köpfe wippen und drehen, Haare hüpfen und bewegen sich, Torso dehnt sich und zieht sich zusammen, während der Charakter atmet.

Zusätzlich könnten sich Objekte und Strukturen in Bewegung befinden. In einem Sportspiel könnte es zum Beispiel einen Ball geben, der durch die Luft fliegt, dessen Bewegung simuliert werden muss. In Rennspielen könnte es Autos oder andere Fahrzeuge geben, mit sich bewegenden Teilen, die animiert werden müssen, einschließlich der Räder. Wenn Wasser in der Szene ist, braucht es Wellen oder Wellen, um realistisch auszusehen. Teile von Strukturen können sich bewegen, wie Türen, Wände und Böden (in manchen Spieltypen) und so weiter.

Eine weitere häufige Bewegungsquelle ist der Spieler selbst. Nachdem die Eingaben von den Steuerungen (sowohl XR-verwandt als auch andere) interpretiert wurden, müssen Sie diese Änderungen auf die Szene anwenden, um die Bewegung des Benutzers zu simulieren. Der Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) enthält Einzelheiten und ein ausführliches Beispiel, wie dies funktioniert.

## Nächste Schritte

Sobald Sie Ihren Renderer geschrieben haben — oder zumindest etwas haben, das funktioniert, auch wenn es nicht fertig ist — können Sie anfangen, sich mit der Kamera und ihrer Bewegung durch die Szene zu beschäftigen. Dies wird in unserem Artikel über [Sichtweisen und Zuschauer](/de/docs/Web/API/WebXR_Device_API/Cameras) in WebXR behandelt.

## Siehe auch

- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Sichtweisen und Zuschauer: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [WebXR-Performance-Leitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
