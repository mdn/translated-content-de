---
title: Rendering und der WebXR-Frame-Animationsrückruf
slug: Web/API/WebXR_Device_API/Rendering
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{DefaultAPISidebar("WebXR Device API")}}

Sobald Ihre WebXR-Umgebung eingerichtet und eine [`XRSession`](/de/docs/Web/API/XRSession) erstellt wurde, um eine laufende XR-Umgebungssitzung darzustellen, müssen Sie der XR-Gerät Frames der Szene zur Wiedergabe bereitstellen. Dieser Artikel behandelt den Prozess, die Frames der XR-Szene im Rendering-Loop auf das Gerät zu übertragen, indem die [`XRSession`](/de/docs/Web/API/XRSession) verwendet wird, um ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt zu erhalten, das jeden Frame darstellt und dann verwendet wird, um den Framebuffer zur Übergabe an das XR-Gerät vorzubereiten.

Bevor Sie die virtuelle Umgebung rendern können, müssen Sie eine WebXR-Sitzung durch Erstellen einer [`XRSession`](/de/docs/Web/API/XRSession) mithilfe der Methode [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) einrichten; Sie müssen die Sitzung auch mit einem Framebuffer verbinden und weitere Einrichtungsaufgaben ausführen. Diese Einrichtungsaufgaben werden im Artikel [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) beschrieben.

## Vorbereiten des Renderers

Sobald die XR-Sitzung eingerichtet ist, mit dem verbundenen WebGL-Framebuffer und WebGL mit den erforderlichen Daten vorgeladen ist, um die Szene zu rendern, können Sie den Renderer so einrichten, dass er zu laufen beginnt. Dies beginnt mit dem Abrufen des Referenzraums, in dem Sie zeichnen möchten, mit seinem Ursprung und seiner Ausrichtung, die an der Anfangsposition und Ansichtrichtung des Betrachters festgelegt sind. Sobald Sie dies haben, fordern Sie den Browser auf, Ihre Rendering-Funktion das nächste Mal aufzurufen, wenn ein Framebuffer benötigt wird, um Ihre Szene zu rendern. Dies geschieht durch Aufruf der [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame).

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

Nachdem ein Referenzraum für die immersive Welt erhalten wurde, wird durch Erstellen einer [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die diese Position und Ausrichtung darstellt, ein Offset-Referenzraum erstellt, der die Position und Ausrichtung des Betrachters darstellt, und dann wird die Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) aufgerufen.

Dann wird der erste Animationsframe durch Aufruf der [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) geplant, wobei eine Callback-Funktion, `myDrawFrame()`, bereitgestellt wird, deren Aufgabe es ist, den Frame zu rendern.

Beachten Sie, dass dieser Code keine Schleife hat! Stattdessen ist der Frame-Rendering-Code – in diesem Fall eine Funktion namens `myDrawFrame()` – dafür verantwortlich, die Zeit zum Zeichnen eines weiteren Frames zu planen, indem `requestAnimationFrame()` erneut aufgerufen wird.

## Bildwiederholfrequenz und Frame-Rate

Angenommen, Sie haben die [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) seit dem letzten Bildschirm-Refresh aufgerufen, ruft der Browser Ihren Frame-Rendering-Callback jedes Mal auf, wenn er bereit ist, Ihr App- oder Site-Fenster neu zu zeichnen. In diesem Kontext bedeutet "neu zeichnen" den Prozess, sicherzustellen, dass der auf dem Bildschirm angezeigte Inhalt dem entspricht, was DOM und die enthaltenen Elemente in diesem Moment darstellen möchten.

### Hardware-vertikale Bildwiederholfrequenz

Wenn der Browser bereit ist, das {{HTMLElement("canvas")}} zu aktualisieren, in dem Ihre WebXR-Inhalte angezeigt werden, ruft er Ihren Frame-Rendering-Callback auf, der den angegebenen Zeitstempel und andere relevante Daten wie Modelle und Texturen sowie den Anwendungsstatus verwendet, um die Szene so zu rendern, wie sie zum angegebenen Zeitpunkt erscheinen sollte, in den WebGL-Backbuffer. Wenn Ihr Callback zurückkehrt, überträgt der Browser diesen Backbuffer an das Anzeigegerät oder XR-Gerät sowie alles andere, was sich seit dem letzten Refresh des Bildschirms geändert hat.

Historisch gesehen haben Bildschirme 60 Mal pro Sekunde aktualisiert. Dies liegt daran, dass frühe Displays das Wechselstromgitter der Netzversorgung, das in den USA 60 Zyklen pro Sekunde (50 in Europa) durchläuft, für Timing-Zwecke verwendet haben. Diese Zahl hat verschiedene Bezeichnungen, aber sie sind alle gleich oder nahezu gleichwertig:

- Bildwiederholrate
- Vertikale Bildwiederholrate
- Vertikale Leerzeilenrate (VBL)
- Vertikale Synchronisationsrate

Es gibt auch andere ähnliche Begriffe, aber unabhängig davon, wie sie genannt werden, ist die verwendete Maßeinheit Hertz oder Hz. Ein Display, das 60 Mal pro Sekunde aktualisiert, hat eine Bildwiederholrate von 60 Hz. Das bedeutet, dass die maximale Anzahl von Bildern, die es in einer Sekunde anzeigen kann, 60 beträgt. Unabhängig davon, wie viele Frames pro Sekunde Sie darüber hinaus rendern, werden nur 60 von ihnen innerhalb einer Sekunde auf dem Bildschirm angezeigt.

Aber nicht alle Displays laufen mit 60 Hz; heutzutage beginnen leistungsfähigere Displays, viel höhere Bildwiederholraten zu verwenden. 120 Hz- oder 120 Frames pro Sekunde-Displays werden zum Beispiel immer häufiger. Der Browser versucht immer, mit der gleichen Rate wie das Display zu aktualisieren, was bedeutet, dass Ihr Callback bei einigen Computern maximal 60 Mal pro Sekunde ausgeführt wird, während es bei anderen 90, 120 oder sogar mehr Mal pro Sekunde aufgerufen werden könnte, abhängig von der Bildrate.

### Verfügbare Zeit zum Rendern jedes Frames

Dies macht die Nutzung der zwischen den Frames verfügbaren Zeit entscheidend. Wenn das Gerät des Benutzers ein 60 Hz-Display verwendet, wird Ihr Callback bis zu 60 Mal pro Sekunde aufgerufen, und Ihr Ziel ist es, sicherzustellen, dass er nicht seltener als das aufgerufen wird. Sie erreichen dies, indem Sie so viel wie möglich vom Hauptthread auslagern und Ihren Frame-Rendering-Callback so effizient wie möglich halten. Die Aufteilung der Zeit in 60 Hz-Blöcke, wobei jeder Block zumindest teilweise verwendet wird, um die Szene zu rendern, wird im unten stehenden Diagramm dargestellt.

![Renderer-Ausführungszeit pro Frameperiode](frames-and-refresh-rate.svg)

Das ist wichtig, denn je stärker der Computer ausgelastet ist, desto schwieriger kann es sein, Ihren Callback in jedem Frame genau aufzurufen, und es kann erforderlich sein, Frames zu überspringen. Dies wird als **Frame-Drop** bezeichnet. Dies geschieht, wenn die Zeit, die zum Rendern eines Frames benötigt wird, die verfügbare Zeit zwischen den Frames übersteigt, sei es, weil das Rendering verzögert wurde oder weil das Rendering selbst mehr Zeit benötigte, als verfügbar war.

![Renderer-Ausführungszeit pro Frameperiode](dropped-frames-timing.svg)

Im obigen Diagramm wurde Frame 3 übersprungen, weil Frame 2 das Rendering nicht abgeschlossen hatte, bevor Frame 3 gezeichnet werden musste. Der nächste gezeichnete Frame wird stattdessen Frame 4 sein. Dies ist ein weiterer Grund, warum der Zeitstempel, der an Ihren Rendering-Callback übergeben wird, nützlich ist. Indem Sie die Szene auf Basis der Zeit und nicht der Frame-Nummer konfigurieren, können Sie sicherstellen, dass Ihre gerenderten Frames den Erwartungen entsprechen und nicht hinterherhinken.

Wenn ein Frame übersprungen wird, ändert sich der Inhalt des betroffenen Anzeigebereichs während dieser Runde durch die Frameloop nicht. Aus diesem Grund ist das gelegentliche Droppen eines Frames normalerweise nicht besonders auffällig, aber wenn es oft passiert – besonders wenn mehrere Frames in kurzer Zeitspanne übersprungen werden – kann es störend wirken oder sogar dazu führen, dass Ihr Display unbenutzbar wird.

Glücklicherweise können Sie leicht berechnen, wie viel Zeit Ihnen zwischen den Frames zur Verfügung steht, indem Sie `1/refreshRate` Sekunden verwenden. Das heißt, indem Sie 1 durch die Aktualisierungsrate des Displays teilen. Der resultierende Wert ist die Zeit, die für jedes Frame zur Verfügung steht, um gerendert zu werden, ohne den Frame zu droppen. Zum Beispiel hat ein 60 Hz-Display eine Zeit von 1/60 Sekunden, um einen einzelnen Frame zu rendern, oder 0,0166667 Sekunden. Und wenn die Aktualisierungsrate des Geräts 120 Hz beträgt, haben Sie nur 0,00833333 Sekunden, um jeden Frame zu rendern, wenn Sie Frame-Drops vermeiden wollen.

Selbst wenn die Hardware tatsächlich 120 Hz beträgt, können Sie mit nur 60-maligem Aktualisieren pro Sekunde auskommen, und das Anstreben dieser Rate ist normalerweise eine gute Basis. 60 FPS ist bereits über dem Punkt, an dem die meisten Menschen leicht erkennen können, dass die Animation nicht nur eine Reihe von Standbildern ist, die sehr schnell an ihnen vorbeigehen. Mit anderen Worten, wenn Sie unsicher sind, können Sie davon ausgehen, dass das Display mit 60 Hz aktualisiert wird. Solange Ihr Code ordnungsgemäß geschrieben ist, wird alles in Ordnung sein.

### Performance-Bedenken des Renderers

Offensichtlich haben Sie sehr wenig Zeit, um Ihre Szene jedes Frame zu rendern. Nicht nur das, sondern wenn Ihr Renderer selbst länger als diese verfügbare Zeit läuft, kann dies dazu führen, dass nicht nur der Frame übersprungen wird, sondern dass die Zeit vollständig verschwendet wird und anderer Code für diesen Frame gar nicht ausgeführt wird.

Nicht nur das, sondern wenn Ihr Rendering die vertikale Bildwiederholgrenze überschreitet, kann es zu einem **Tearing**-Effekt kommen. Tearing tritt auf, wenn die Anzeigegeräte die nächste Aktualisierungsphase starten, während das vorherige Frame noch auf dem Bildschirm gezeichnet wird. Infolgedessen hat man einen visuellen Effekt, bei dem der obere Teil des Bildschirms das neue Bild zeigt, während der untere Teil des Bildes eine Kombination des vorherigen Frames und möglicherweise sogar des davor zeigt.

Ihre Mission ist es also, Ihren Code knapp und leicht genug zu halten, um die verfügbare Zeit nicht zu überschreiten oder auf andere Weise Frames zu droppen oder den Hauptthread übermäßig zu beanspruchen.

Aus diesem Grund sollten Sie, es sei denn, Ihr Renderer ist relativ klein und leicht und hat wenig zu tun, in Betracht ziehen, alles, was möglich ist, an einen Worker auszulagern, damit Sie den nächsten Frame berechnen können, während der Browser andere Dinge erledigt. Durch die Vorab-Bereitstellung Ihrer Berechnungen und Daten können Sie das Rendering Ihrer Website oder App viel effizienter gestalten, die Leistung des Hauptthreads verbessern und im Allgemeinen die Benutzererfahrung optimieren.

Glücklicherweise gibt es einige Tricks, die Sie verwenden können, um Ihren Einfluss weiter zu verringern und die Performance zu optimieren, wenn Ihre Renderanforderungen besonders hoch sind. Lesen Sie den [WebXR-Performance-Leitfaden](/de/docs/Web/API/WebXR_Device_API/Performance) für Empfehlungen und Tipps, die Ihnen dabei helfen, sicherzustellen, dass Ihre Performance so gut ist, wie sie sein kann.

## WebXR-Frames

Ihre Frame-Rendering-Callback-Funktion erhält als Eingabe zwei Parameter: die Zeit, der der Frame entspricht, und ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das den Zustand der Szene zu diesem Zeitpunkt beschreibt.

### Die Optik von 3D

Wir haben zwei Augen aus einem bestimmten Grund: dadurch, dass wir zwei Augen haben, sieht jedes von ihnen die Welt aus einem leicht unterschiedlichen Winkel. Da sie einen bekannten, festen Abstand voneinander haben, kann unser Gehirn grundlegende Geometrie und Trigonometrie verwenden, um die 3D-Natur der Realität aus diesen Informationen zu bestimmen. Wir nutzen auch Perspektive, Größenunterschiede und sogar unser Verständnis davon, wie Dinge normalerweise aussehen, um Details dieser dritten Dimension zu bestimmen. Diese Faktoren, neben anderen, sind die Quelle unserer [Tiefenwahrnehmung](https://de.wikipedia.org/wiki/Tiefenwahrnehmung).

Um die Illusion von drei Dimensionen beim Rendern von Grafiken zu erstellen, müssen wir so viele dieser Faktoren wie möglich simulieren. Je mehr von ihnen wir simulieren — und je genauer wir dies tun — desto besser können wir das menschliche Gehirn überlisten, unsere Bilder in 3D wahrzunehmen. Der Vorteil von XR ist, dass wir nicht nur die klassischen monokularen Techniken verwenden können, um 3D-Grafiken zu simulieren (Perspektive, Größe und simuliertes Parallaxen), sondern auch das Binokularsehen simulieren können, das heißt, Sehen mit zwei Augen, indem wir die Szene zweimal für jeden Frame der Animation rendern — einmal für jedes Auge.

Der durchschnittliche menschliche [Pupillenabstand](https://de.wikipedia.org/wiki/Pupillenabstand) — der Abstand zwischen den Zentren der Pupillen — beträgt zwischen 54 und 74 Millimetern (0,054 bis 0,074 Meter). Wenn also der Mittelpunkt des Betrachterkopfes sich an `[0.0, 2.0, 0.0]` befindet (etwa zwei Meter über dem Boden in horizontaler Mitte des Raums), müssen wir die Szene zuerst von `[-0.032, 2.0, 0.0]` (32mm links der Mitte) und dann noch einmal von `[0.032, 2.0, 0.0]` (32mm rechts der Mitte) rendern. Auf diese Weise platzieren wir die Positionen der Augen des Betrachters in einem durchschnittlichen menschlichen Pupillenabstand von 64mm.

Diese Entfernung (oder welcher Pupillenabstand auch immer das XR-System verwendet) reicht aus, damit unser Geist genug Unterschied aufgrund der Netzhaut-Disparität (der Unterschied zwischen dem, was jede Netzhaut sieht) und des Parallaxen-Effekts sieht, um die Entfernung und Tiefe von Objekten zu berechnen, was es uns ermöglicht, drei Dimensionen zu wahrzunehmen, obwohl unsere Netzhaut nur 2D-Oberflächen sind.

Dies wird in dem unten dargestellten Diagramm veranschaulicht, in dem wir sehen, wie jedes Auge einen Würfel wahrnimmt, der direkt vor dem Betrachter positioniert ist. Auch wenn in diesem Diagramm der Effekt in mancher Hinsicht übertrieben dargestellt ist, ist das Prinzip dasselbe. Jedes Auge sieht einen Bereich, dessen Grenzen einen Bogen vor dem Auge bilden. Weil jedes Auge leicht links oder rechts zur Körpermittellinie liegt und jedes Auge ungefähr das gleiche Sichtfeld hat, sieht jedes Auge einen leicht anderen Teil der Welt vor ihm, und aus einem leicht anderen Winkel.

![Diagramm zur Erklärung, wie das Binokularsehen funktioniert](binocular-vision.svg)

Das linke Auge sieht den Würfel ein wenig links von der Mitte, und das rechte Auge sieht ihn ein wenig rechts von der Mitte. Als Ergebnis sieht das linke Auge ein wenig mehr von der linken Seite des Objekts und ein wenig weniger von der rechten, und umgekehrt. Diese beiden Bilder werden auf die Netzhaut fokussiert und das resultierende Signal wird über die Sehnerven an den visuellen Kortex des Gehirns, der sich im hinteren Teil des Okzipitallappens befindet, übertragen.

Das Gehirn nimmt diese Signale von den linken und rechten Augen und konstruiert ein einziges, einheitliches, dreidimensionales Bild der Welt im Gehirn des Betrachters, und dieses Bild ist das, was gesehen wird. Und aufgrund dieser Unterschiede von dem, was das linke Auge im Vergleich zum rechten Auge sieht, kann das Gehirn eine Menge Informationen darüber ableiten, wie tief das Objekt ist, seine Größe und mehr. Durch das Kombinieren dieser abgeleiteten Tiefeninformationen mit anderen Hinweisen wie Perspektive, Schatten, Erinnerungen daran, was diese Beziehungen bedeuten, und so weiter, können wir eine Menge über die Welt um uns herum herausfinden.

### Frames, Posen, Ansichten und Framebuffers

Nachdem Sie ein `XRFrame` haben, das den Zustand der Szene zu einem bestimmten Zeitpunkt darstellt, müssen Sie die Positionen der Objekte innerhalb der Szene relativ zum Betrachter bestimmen, um sie rendern zu können. Die Position und Orientierung des Betrachters relativ zu einem Referenzraum wird durch eine [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) dargestellt, die durch Aufrufen der [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) erhalten wird.

Das `XRFrame` verfolgt nicht direkt die Positionen oder Orientierungen der Objekte in Ihrer Welt. Stattdessen bietet es eine Möglichkeit, Positionen und Orientierungen in das Koordinatensystem der Szene zu konvertieren, und es sammelt die Positionen und Orientierungsdaten des Betrachters von der XR-Hardware, konvertiert sie in den von Ihnen konfigurierten Referenzraum und liefert diese timestampbasiert an Ihren Frame-Rendering-Code. Sie verwenden diesen Zeitstempel und Ihre eigenen Daten, um zu bestimmen, wie die Szene zu rendern ist.

Nach dem Rendern der Szene zweimal — einmal in die linke Hälfte des Framebuffers und einmal in die rechte Hälfte des Framebuffers — wird der Framebuffer an die XR-Hardware gesendet, die jedes Bildhälfte an das entsprechende Auge anzeigt. Dies wird oft (aber nicht immer) dadurch getan, dass das Bild auf einem einzigen Bildschirm gezeichnet und Linsen verwendet werden, um die korrekte Hälfte dieses Bildes an jedes Auge zu übertragen.

Mehr über die 3D-Darstellung in WebXR erfahren Sie in der [Darstellung von 3D mit WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras#representing_3d_with_webxr).

## Zeichnen der Szene

Wenn die Zeit gekommen ist, den Framebuffer so vorzubereiten, dass der Browser den nächsten Frame Ihrer Szene malen kann, wird die Funktion, die Sie `requestAnimationFrame()` bereitgestellt haben, aufgerufen. Sie erhält als Eingabe die Zeit, zu der der zu zeichnende Frame und ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt bereitgestellt werden, das Details über den Zustand der Szene für den Frame, den Sie rendern müssen, liefert.

Idealerweise sollte dieser Code schnell genug sein, um eine Bildrate von 60 FPS aufrechtzuerhalten oder so nah wie möglich daran zu kommen, wobei daran zu denken ist, dass in dieser einen Funktion mehr passiert als nur Ihr Code. Sie müssen sicherstellen, dass der Hauptthread nicht länger pro Frame läuft als die Dauer des Frames selbst.

### Ein grundlegender Renderer

In dieser Version des WebXR-Rendering-Callbacks verwenden wir einen sehr einfachen Ansatz, der sich hervorragend für relativ einfache Projekte eignet. Dieser Pseudocode skizziert diesen Prozess:

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

Im Wesentlichen verwendet diese Form des Renderers die **View-First-Order**. Jeder der beiden Ansichten, die das Display des XR-Geräts bilden, werden nacheinander gerendert, wobei jedes Objekt in einer Ansicht gezeichnet wird, bevor das gleiche Set von Objekten in der anderen Ansicht gerendert wird. Dies führt zu einem großen Maß an wiederholtem Aufwand, da viel der Daten, die benötigt werden, um ein Objekt zu zeichnen, zweimal pro Frame an die GPU gesendet werden. Dies vereinfacht jedoch das Portieren vorhandenen WebGL-Codes und ist häufig gut genug, um die Aufgabe zu erledigen, sodass wir uns diesen Ansatz zunächst anschauen.

Siehe [Optimierung des Renderings in Objekt-Erst-Reihenfolge](#optimierung_durch_rendering_in_objekt-erst-reihenfolge) für einen alternativen Ansatz, bei dem jedes Objekt zweimal hintereinander gerendert wird, einmal für jedes Auge, bevor zum nächsten Objekt gewechselt wird, das die Szene für diesen Frame ausmacht; das heißt, rendering in **Objekt-Erst-Reihenfolge**.

#### Beispiel-Rendering-Callback

Schauen wir uns etwas echten Code an, der diesem grundlegenden Muster folgt. Da wir in obigem Beispiel dieser Funktion den Namen `myDrawFrame()` gegeben haben, werden wir diesen hier weiter verwenden.

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

Die Funktion `myDrawFrame()` erfasst die [`XRSession`](/de/docs/Web/API/XRSession) aus dem [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das durch den `frame`-Parameter angegeben wird, und ruft dann die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung auf, um sofort das Rendering des nächsten Frames zu planen. Dies stellt sicher, dass wir sofort in die Warteschlange gelangen, sodass der Rest der Zeit, die in dieser Iteration der Funktion `myDrawFrame()` verbracht wird, auf die Zeit für das Zeichnen des nächsten Frames angerechnet wird.

Anschließend erhalten wir das [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objekt, das die Pose des Betrachters beschreibt – seine Position und Orientierung – mittels der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des Frames unter Verwendung des Referenzraums des Betrachters aus dem `viewerRefSpace`, das zuvor [während der Einrichtung der WebXR-Sitzung](#vorbereiten_des_renderers) erhalten wurde.

Mit der Pose des Betrachters in der Hand können wir dann beginnen, den Frame zu rendern. Der erste Schritt besteht darin, Zugriff auf den Framebuffer zu erhalten, in den das WebXR-Gerät den Frame gezeichnet haben möchte; dies geschieht, indem wir die Ziel-WebGL-Schicht aus dem [`renderState`](/de/docs/Web/API/XRSession/renderState)-Objekt der Sitzung von dessen [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer)-Eigenschaft ermitteln und den [`framebuffer`](/de/docs/Web/API/XRWebGLLayer/framebuffer) aus diesem [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt erhalten. Wir rufen dann [`gl.bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer) auf, um diesen Framebuffer als das Ziel aller bevorstehenden Zeichenbefehle zu binden.

Der nächste Schritt ist das Löschen des Framebuffers. Während Sie diesen Schritt theoretisch überspringen können – _wenn und nur wenn Ihr Rendering-Code garantiert, dass jedes einzelne Pixel im Framebuffer geschrieben wird_ – ist es in den meisten Fällen am sichersten, einfach vor dem Zeichnen zu löschen, es sei denn, Sie müssen jede letzte Unze an Performance herausholen und wissen, dass Sie sowieso alle Pixel betreffen. Die Hintergrundfarbe wird auf voll opakes Schwarz mit [`gl.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) gesetzt; die klare Tiefe wird auf 1.0 festgelegt durch Aufrufen von [`gl.cleardepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth), um alle Pixel unabhängig davon zu löschen, wie weit entfernt das Objekt, zu dem sie gehören, ist; und schließlich werden die Piksel- und Tiefenpuffer des Frames durch Aufrufen von [`gl.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear), wobei eine Bitmaske übergeben wird, in der sowohl `COLOR_BUFFER_BIT` als auch `DEPTH_BUFFER_BIT` gesetzt sind, gelöscht.

Da WebXR einen einzigen Framebuffer für jede Ansicht verwendet, mit Viewports über die Ansicht, die verwendet werden, um die Ansicht jedes Auges innerhalb des Framebuffers zu trennen, müssen wir nur einen gemeinsamen Framebuffer löschen, anstatt ihn für jedes Auge (oder andere Ansichten, falls vorhanden) individuell zu reinigen.

Als Nächstes wird die seit dem vorherigen rendern des Frames verstrichene Zeit berechnet, indem die abgespeicherte Zeit `lastFrameTime`, zu der der letzte Frame gerendert wurde, von der aktuellen Zeit, die durch den `currentFrameTime`-Parameter angegeben wird, subtrahiert wird. Das Ergebnis ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der angibt, wie viele Millisekunden seit dem letzten Rendering des Frames vergangen sind. Wir können diesen Wert beim Zeichnen der Szene verwenden, um sicherzustellen, dass alles die angemessene Entfernung gegeben der tatsächlich verstrichenen Zeit zurücklegt, anstatt anzunehmen, dass der Callback in einer konstanten Bildrate fired. Diese verstrichene Zeit wird in der Variable `deltaTime` gespeichert und der Wert von `lastFrameTime` durch die Zeit dieses Frames ersetzt, bereit zur Berechnung der Differenz für den nächsten Frame.

Jetzt ist es an der Zeit, die Szene für jedes Auge zu rendern. Wir iterieren über die Ansichten innerhalb des Arrays [`views`](/de/docs/Web/API/XRViewerPose/views) der Betrachterposé. Für jedes dieser [`XRView`](/de/docs/Web/API/XRView)-Objekte, die die Perspektive eines Auges auf die Szene repräsentieren, müssen wir zunächst das Zeichnen auf den Bereich des Framebuffers beschränken, der das aktuelle Bild des Auges darstellt.

Wir beginnen, WebGL so vorzubereiten, dass die Inhalte des Auges gerendert werden, indem wir den Viewport, der das Zeichnen auf den Bereich innerhalb des Framebuffers beschränkt, der für das Bild des aktuellen Auges reserviert ist, durch Aufruf der Methode [`getViewport()`](/de/docs/Web/API/XRWebGLLayer/getViewport) des [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erhalten. Wir setzen dann den WebGL-Viewport, um zu passen, indem wir den X- und Y-Ursprung des Viewports zusammen mit seiner Breite und Höhe in [`gl.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport) übergeben.

Schließlich rufen wir unsere Methode `myDrawSceneIntoView()` auf, um tatsächlich mit WebGL die Szene zu rendern. Dafür übergeben wir die [`XRView`](/de/docs/Web/API/XRView), die das Auge repräsentiert, für das wir zeichnen (für die Perspektivenabbildung und dergleichen) und `deltaTime`, damit der Zeichencode der Szene die verstrichene Zeit beim Bestimmen der Positionen von sich über die Zeit bewegenden Objekten genau darstellen kann.

Wenn die Schleife, die über die Ansichten iteriert, endet, wurde jedes Bild, das benötigt wird, um die Szene für den Betrachter darzustellen, gerendert, und bei der Rückkehr gelangt der Framebuffer durch die GPU und schließlich auf das oder die Anzeigegeräte des XR-Geräts. Da wir [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) oben in der Funktion aufgerufen haben, wird unser Callback erneut aufgerufen, wenn es an der Zeit ist, den nächsten Frame der Animationsszene zu rendern.

#### Nachteile dieses Ansatzes

Da es wichtig ist, die Zeit in dieser Funktion so weit wie möglich zu minimieren, je mehr Zeit Sie mit der Bearbeitung von Zustandsänderungen verbringen, desto weniger Zeit bleibt Ihnen, um tatsächlich Dinge zu zeichnen. Diese Technik funktioniert sehr gut für eine kleine Anzahl von Objekten, aber weil man alle Daten für jedes Objekt zweimal neu binden muss (einmal für das linke Auge und einmal für das rechte), verbringt man viel Zeit damit, den Zustand anzupassen, Buffers und Texturen hochzuladen, und so weiter. Im nächsten Abschnitt betrachten wir einen geänderten Ansatz, der diese Zustandsänderungen erheblich verringert und einen potenziell viel schnelleren Rendering-Ansatz bietet, besonders wenn Ihre Objektanzahl ansteigt.

### Optimierung durch Rendering in Objekt-Erst-Reihenfolge

Ein Vorteil des WebXR-Ansatzes, einen einzigen WebGL-Framebuffer zu verwenden, der sowohl die linke als auch die rechte Augenansicht in einem einzigen Framebuffer enthält, ermöglicht es, die Rendering-Performance erheblich zu verbessern, indem die Reihenfolge der Dinge geändert wird. Anstatt den Viewport für eine gegebene Ansicht (wie das linke Auge) einzurichten und dann jedes für das linke Auge sichtbare Objekt zu rendern, eines nach dem anderen, und die Buffers für jedes Objekt neu zu konfigurieren, können Sie stattdessen jedes Objekt zweimal hintereinander rendern, einmal für jedes Auge, wodurch Buffers, Uniformen usw. nur einmal für beide Augen eingerichtet werden müssen.

Der resultierende Pseudocode sieht so aus:

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

Durch diese Umstellung binden wir Programme, Uniformen, Buffers, Texturen und potenziell andere Dinge nur einmal pro Frame anstatt zweimal pro Objekt, das in der Szene gefunden wird. Dies reduziert den Overhead um eine potenziell sehr große Marge.

### Begrenzung der Frame-Rate

Wenn Sie Ihre Bildrate absichtlich beschränken müssen, um eine Basis-Bildrate aufzustellen, die zu halten ist, während Sie mehr Zeit für andere Codeteile gewähren, können Sie dies tun, indem Sie Frames absichtlich, auf eine zeitgesteuerte Basis, überspringen.

Zum Beispiel, um die Bildrate um 50% zu reduzieren, können Sie einfach jeden zweiten Frame überspringen:

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

Diese Version des Rendering-Callbacks behält einen `tick`-Zähler bei. Der Frame wird nur gerendert, wenn `tick` ein gerader Wert ist. Auf diese Weise wird nur jeder zweite Frame gerendert.

Sie können ähnlich jeden vierten Frame rendern, indem Sie `!(tick % 4)` verwenden, und so weiter.

### Anpassen Ihrer Animation an die verstrichene Zeit

Der Rendering-Callback erhält einen `time`-Parameter aus gutem Grund. Dieser [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert ist ein Gleitkommawert, der die Zeit angibt, zu der der Frame zum Rendern angesetzt wurde. Da die Ausführung Ihres Callbacks nicht genau in Intervallen von 1/60 Sekunde stattfinden wird — und tatsächlich könnte er bei anderen Raten erfolgen, wenn das Display des Benutzers eine andere Bildwiederholrate hat — können Sie sich nicht einfach darauf verlassen, dass Ihr Code läuft, um anzunehmen, dass es seit dem letzten Frame 1/60 Sekunde vergangen ist.

Aus diesem Grund müssen Sie den bereitgestellten Zeitstempel verwenden, um sicherzustellen, dass Ihre Animation genau in der gewünschten Geschwindigkeit gerendert wird. Dazu müssen Sie zuerst die Zeit berechnen, die seit dem letzten Frame gerendert wurde:

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

Dieser Code pflegt eine globale (oder eine Objekteigenschaft) namens `lastFrameTime`, die die Renderzeit des vorherigen Frames speichert. Da in diesem Fall die Zeitwerte in Millisekunden gespeichert werden, multiplizieren wir mit 0.001, um die Zeit in Sekunden umzuwandeln. In einigen Fällen spart das später Zeit. In anderen Situationen benötigen Sie möglicherweise die Zeit in Millisekunden, sodass Sie nichts ändern müssen.

Mit der verstrichenen Zeit kann Ihr Rendering-Code genau berechnen, wie weit sich jedes sich bewegende Objekt in der verstrichenen Zeit bewegt hat. Wenn zum Beispiel ein Objekt rotiert, könnten Sie die Drehung folgendermaßen anwenden:

```js
const xDeltaRotation =
  xRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
const yDeltaRotation =
  yRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
const zDeltaRotation =
  zRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
```

Dies berechnet die Menge, um die sich das Objekt seit dem letzten Frame um jede der drei Achsen gedreht hat. Ohne dies würde sich die Form um den angegebenen Betrag jedes Frames drehen, unabhängig von der verstrichenen Zeit. In vielen Fällen könnte dies erhebliche Ruckler verursachen.

Dasselbe Prinzip gilt für Objekte, die sich bewegen anstatt sich zu drehen:

```js
const xDistanceMoved = xSpeedPerSecond * deltaTime;
const yDistanceMoved = ySpeedPerSecond * deltaTime;
const ZDistanceMoved = zSpeedPerSecond * deltaTime;
```

`xSpeedPerSecond`, `ySpeedPerSecond` und `zSpeedPerSecond` enthalten jeweils die Komponente der Geschwindigkeit des Objekts entlang dieser Achse. Mit anderen Worten, `[xDistanceMoved, yDistanceMoved, zDistanceMoved]` ist ein Vektor, der die Geschwindigkeit des Objekts darstellt.

## Zusätzliche Aufgaben im Zusammenhang mit der Animation der Szene

Es gibt natürlich andere Dinge, die wahrscheinlich bei jedem Durchlauf durch den Renderer passieren müssen. Zwei der häufigsten sind das [Verarbeiten von Benutzereingaben](/de/docs/Web/API/WebXR_Device_API/Inputs) und das Aktualisieren der Positionen von Objekten (oder des Betrachters) basierend auf bekannten Faktoren, wie Zuständen der Benutzersteuerung oder bekannten Bahnen der Objekte in der Szene.

### Umgang mit Benutzereingaben

Es gibt drei Methoden, über die Benutzer Eingaben während einer WebXR-Anwendung bereitstellen könnten. Zunächst unterstützt WebXR direkt die Verarbeitung von Eingaben von den Controllern, die direkt mit der XR-Hardware integriert sind. Diese Eingabequellen können Geräte wie Handcontroller, optische Tracking-Systeme, Beschleunigungsmesser und Magnetometer sowie andere Geräte dieser Natur umfassen.

Der zweite Eingabetyp ist ein Gamepad, das über das XR-System angeschlossen ist. Dies verwendet Schnittstellen, die vom [Gamepad API](/de/docs/Web/API/Gamepad_API) geerbt wurden, aber Sie interagieren damit über WebXR.

Der dritte und letzte Eingabetyp ist das herkömmliche Nicht-XR-Eingabegerät wie Tastaturen, Mäuse, Trackpads, Touchscreens und nicht-XR-Gamepads und -Joysticks.

Orientierungs- und Positionsinformationen, die direkt von der XR-Hardware erfasst werden können, werden automatisch angewendet. Daher sind es die anderen Arten von Eingaben, die Sie selbst verarbeiten müssen:

- Ziehziel des Zeigegeräts und Tastendrücke
- Gamepad-Eingaben
- Eingaben von Nicht-XR-Eingabegeräten

Um mehr darüber zu erfahren, wie man Benutzereingaben behandelt, während man eine Szene mit WebXR präsentiert, lesen Sie den Artikel [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs).

### Aktualisieren von Objektpositionen

Die meisten (wenn auch nicht alle) Szenen umfassen irgendeine Art von Animation, in der sich Dinge auf angemessene Weise bewegen und aufeinander reagieren.

Zum Beispiel könnte ein Virtual-Reality- oder Augmented-Reality-Spiel feindliche Nicht-Spieler-Charaktere haben, die vom Computer gesteuert werden und sich in der Szene bewegen. Nicht nur ändern sich ihre Positionen in der Welt mit der Zeit, sondern auch hat jeder NPC wahrscheinlich Körperteile oder Komponente, die sich zueinander bewegen. Arme und Beine schwingen, während eine Kreatur läuft, Köpfe wippen und drehen sich, Haare hüpfen und schwingen, Oberkörper dehnen sich und ziehen sich zusammen, während der Charakter atmet.

Darüber hinaus können in Bewegung befindliche Objekte und Strukturen vorhanden sein. In einem Sportspiel könnte es einen Ball geben, der durch die Luft fliegt, und dessen Bewegung simuliert werden muss. In Rennspielen könnte es Fahrzeuge geben, mit zu animierenden beweglichen Teilen, einschließlich der Räder. Wenn es Wasser in der Szene gibt, benötigt es Wellen oder Rippen, um realistisch auszusehen. Teile der Strukturen können sich bewegen, wie Türen, Wände und Böden (für einige Arten von Spielen) und so weiter.

Eine weitere häufige Quelle der Bewegung ist der Spieler selbst. Nach dem Interpretieren von Steuerungseingaben (sowohl mit XR assoziiert als auch nicht) müssen Sie diese Änderungen auf die Szene anwenden, um die Bewegung des Benutzers zu simulieren. Sehen Sie den Artikel [Bewegung, Orientierung und Dynamik](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) für Details und ein ausführliches Beispiel, wie das funktioniert.

## Nächste Schritte

Sobald Ihr Renderer geschrieben ist – oder zumindest etwas funktioniert, auch wenn es nicht fertig ist – können Sie damit beginnen, sich mit der Kamera und ihrer Bewegung durch die Szene zu beschäftigen. Dies wird in unserem Artikel über [Ansichtspunkte und Betrachter](/de/docs/Web/API/WebXR_Device_API/Cameras) in WebXR behandelt.

## Siehe auch

- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Ansichtspunkte und Betrachter: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Dynamik: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [WebXR-Performance-Leitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
