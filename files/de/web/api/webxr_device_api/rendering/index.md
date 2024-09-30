---
title: Rendering und der WebXR-Frame-Animations-Callback
slug: Web/API/WebXR_Device_API/Rendering
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{DefaultAPISidebar("WebXR Device API")}}

Sobald Ihre WebXR-Umgebung eingerichtet ist und eine [`XRSession`](/de/docs/Web/API/XRSession) erstellt wurde, um eine laufende XR-Umgebungssitzung zu repräsentieren, müssen Sie der XR-Einrichtung Frames der Szene zur Darstellung bereitstellen. Dieser Artikel beschreibt den Prozess, wie die Frames der XR-Szene in der Rendering-Schleife an das Gerät übermittelt werden, indem eine [`XRSession`](/de/docs/Web/API/XRSession) verwendet wird, um ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt zu erhalten, das jeden Frame repräsentiert und dann verwendet wird, um den Framebuffer für die Übertragung an das XR-Gerät vorzubereiten.

Bevor Sie die virtuelle Umgebung rendern können, müssen Sie eine WebXR-Sitzung durch Erstellen einer [`XRSession`](/de/docs/Web/API/XRSession) mit der Methode [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) einrichten; Sie müssen die Sitzung auch mit einem Framebuffer verknüpfen und andere Einrichtungsaufgaben ausführen. Diese Einrichtungsaufgaben werden im Artikel [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) beschrieben.

## Vorbereitung des Renderers

Sobald die XR-Sitzung eingerichtet ist, der WebGL-Framebuffer verbunden und WebGL mit den Daten vorbereitet ist, die es benötigt, um die Szene darzustellen, können Sie den Renderer einrichten, um zu starten. Dies beginnt mit dem Abrufen des Referenzraums, in dem Sie zeichnen möchten, wobei sein Ursprung und seine Ausrichtung auf der Startposition und der Sichtlinie des Betrachters eingestellt sind. Sobald dies gesichert ist, bitten Sie den Browser, Ihre Renderfunktion das nächste Mal aufzurufen, wenn er einen Framebuffer benötigt, um Ihre Szene darzustellen. Dies wird durch Aufrufen der Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) von [`XRSession`](/de/docs/Web/API/XRSession) erreicht.

Das Starten des Renderers sieht also folgendermaßen aus:

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

Nach dem Erhalten eines Referenzraums für die immersive Welt wird ein Offset-Referenzraum erstellt, der die Position und Ausrichtung des Betrachters durch Erstellen eines [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) darstellt, das diese Position und Ausrichtung repräsentiert. Anschließend wird die Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) von [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) aufgerufen.

Dann wird der erste Animationsframe durch Aufrufen der Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) von [`XRSession`](/de/docs/Web/API/XRSession) geplant, wobei eine Callback-Funktion, `myDrawFrame()`, angegeben wird, die dafür verantwortlich ist, den Frame darzustellen.

Beachten Sie, dass dieser Code keine Schleife enthält! Stattdessen ist der Frame-Rendering-Code, in diesem Fall eine Funktion namens `myDrawFrame()`, dafür verantwortlich, Zeit einzuplanen, um einen weiteren Frame zu zeichnen, indem `requestAnimationFrame()` erneut aufgerufen wird.

## Bildwiederholrate und Framerate

Angenommen, Sie haben die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) von [`XRSession`](/de/docs/Web/API/XRSession) seit der letzten Bildaktualisierung des Bildschirms aufgerufen, wird der Browser Ihren Frame-Rendering-Callback jedes Mal aufrufen, wenn er bereit ist, Ihr App- oder Website-Fenster neu zu zeichnen. In diesem Zusammenhang bedeutet "Neuzeichnen" den Prozess, sicherzustellen, dass der auf dem Bildschirm angezeigte Inhalt dem entspricht, was das DOM und die darin enthaltenen Elemente in diesem Moment präsentieren möchten.

### Vertikale Bildwiederholrate der Hardware

Wenn der Browser bereit ist, das {{HTMLElement("canvas")}} zu aktualisieren, in dem Ihre WebXR-Inhalte angezeigt werden, ruft er Ihren Frame-Rendering-Callback auf, der den angegebenen Zeitstempel und alle anderen relevanten Daten wie Modelle und Texturen sowie den Anwendungsstatus verwendet, um die Szene so darzustellen, wie sie zum angegebenen Zeitpunkt erscheinen sollte, in den WebGL-Backbuffer. Wenn Ihr Callback zurückkehrt, überträgt der Browser diesen Backbuffer an das Display oder das XR-Gerät zusammen mit allem anderen, was sich seit der letzten Aktualisierung des Bildschirms geändert hat.

Historisch gesehen haben Bildschirme 60 Mal pro Sekunde aktualisiert. Dies liegt daran, dass frühe Bildschirme die Wechselstromflussform des Stromnetzes verwendeten, das in den USA (und in Europa 50 Mal) 60 Mal pro Sekunde schwingt, um die Zeitsteuerung zu synchronisieren. Diese Zahl wird unter mehreren Namen bekannt, aber sie sind alle gleichwertig oder fast identisch:

- Bildwiederholrate
- Vertikale Bildwiederholrate
- Vertikale Leerzeilenrate (VBL)
- Vertikale Synchronisationsrate

Es gibt auch andere ähnliche Begriffe, aber unabhängig davon, wie sie genannt werden, wird die Maßeinheit dafür in Hertz, oder Hz, angegeben. Ein Display, das 60 Mal pro Sekunde aktualisiert, hat eine Bildwiederholrate von 60 Hz. Das bedeutet, dass die maximale Anzahl an Frames, die es in einer Sekunde anzeigen kann, 60 beträgt. Egal wie viele Frames pro Sekunde über diesen Wert hinaus gerendert werden, es werden nur 60 von ihnen im Verlauf einer Sekunde auf dem Bildschirm erscheinen.

Aber nicht alle Bildschirme laufen mit 60 Hz; heutzutage beginnen leistungsfähigere Bildschirme, wesentlich höhere Bildwiederholraten zu verwenden. 120 Hz — oder 120 Frames pro Sekunde — Displays sind zunehmend verbreitet. Der Browser versucht immer, mit der gleichen Rate zu aktualisieren wie das Display, was bedeutet, dass auf einigen Computern Ihr Callback maximal 60 Mal pro Sekunde aufgerufen wird, während auf anderen er 90 oder 120 Mal pro Sekunde oder sogar häufiger aufgerufen werden kann, abhängig von der Framerate.

### Verfügbare Zeit zum Rendern jedes Frames

Dies macht es entscheidend, die verfügbare Zeit zwischen den Frames optimal zu nutzen. Wenn das Gerät des Benutzers ein 60 Hz Display verwendet, wird Ihr Callback bis zu 60 Mal pro Sekunde aufgerufen, und Ihr Ziel ist es, sicherzustellen, dass er nicht seltener aufgerufen wird als das. Sie erreichen dies, indem Sie so viel wie möglich außerhalb des Hauptthreads erledigen und Ihren Frame-Rendering-Callback so effizient wie möglich halten. Die Einteilung der Zeit in 60 Hz Blöcke, wobei jeder Block zumindest teilweise zum Rendern der Szene genutzt wird, ist im folgenden Diagramm dargestellt.

![Renderer-Ausführungszeit pro Frame-Periode](frames-and-refresh-rate.svg)

Das ist wichtig, denn wenn der Computer zunehmend beschäftigt wird, kann er möglicherweise nicht jeden Frame exakt aufrufen und muss vielleicht Frames überspringen. Dies bezeichnet man als **Frames droppen**. Das passiert, wenn die benötigte Zeit, um einen Frame zu rendern, die zwischen den Frames verfügbare Zeit überschreitet, sei es, weil das Rendern verzögert wurde oder weil das Rendern selbst mehr Zeit in Anspruch nahm als verfügbar.

![Renderer-Ausführungszeit pro Frame-Periode](dropped-frames-timing.svg)

Im obigen Diagramm wird Frame 3 übersprungen, da Frame 2 das Rendern nicht abgeschlossen hatte, bevor Frame 3 gezeichnet werden sollte. Stattdessen wird der nächste gezeichnete Frame Frame 4 sein. Dies ist ein weiterer Grund, warum der Zeitstempel, der in Ihren Rendering-Callback übergeben wird, nützlich ist. Indem Sie die Szene auf der Basis von Zeit anstelle der Frame-Nummer konfigurieren, können Sie sicherstellen, dass Ihre gerenderten Frames das tun, was erwartet wird, statt hinterherzuhinken.

Wenn ein Frame fallen gelassen wird, ändern sich die Inhalte des betroffenen Anzeigebereichs in diesem Durchgang durch die Frame-Schleife nicht. Aus diesem Grund ist der gelegentliche Ausfall eines Frames normalerweise nicht besonders auffällig, aber wenn es häufig passiert - insbesondere wenn mehrere Frames in sehr kurzer Zeitspanne fallen gelassen werden - kann es störend sein oder sogar dazu führen, dass Ihre Anzeige unbrauchbar wird.

Zum Glück können Sie leicht berechnen, wie viel Zeit Ihnen zwischen den Frames zur Verfügung steht, indem Sie `1/refreshRate` Sekunden verwenden. Das heißt, indem Sie 1 durch die Bildwiederholrate des Displays teilen. Der daraus resultierende Wert ist die Zeit, die für jeden Frame verfügbar ist, um gerendert zu werden, damit der Frame nicht fallen gelassen wird. Beispielsweise hat ein 60 Hz Display eine 1/60 Sekunde, um einen einzelnen Frame zu rendern, oder 0,0166667 Sekunden. Und wenn die Bildwiederholrate des Geräts 120 Hz beträgt, haben Sie nur 0,00883333 Sekunden Zeit, um jeden Frame zu rendern, um das Fallen des Frames zu vermeiden.

Auch wenn die Hardware tatsächlich 120 Hz ist, können Sie normalerweise trotzdem mit einer Aktualisierung von nur 60 Mal pro Sekunde auskommen, und sich darauf zu konzentrieren, ist normalerweise eine gute Basisstrategie. 60 FPS ist bereits über dem Punkt, an dem die meisten Menschen erkennen können, dass die Animation keine Reihe von schnell nacheinander abgespielten Einzelbildern ist. Mit anderen Worten, wenn Sie Zweifel haben, können Sie davon ausgehen, dass das Display mit 60 Hz aktualisiert wird. Solange Ihr Code richtig geschrieben ist, wird alles in Ordnung sein.

### Leistungsbedenken des Renderers

Offensichtlich haben Sie sehr wenig Zeit, um Ihre Szene in jedem Frame zu rendern. Nicht nur das, sondern wenn Ihr Renderer selbst länger als diese Zeitdauer läuft, können Sie nicht nur den Frame ausfallen lassen, sondern diese Zeit vollständig verschwenden, da für diesen Frame kein anderer Code ausgeführt werden kann.

Darüber hinaus, wenn Ihr Rendering die vertikale Aktualisierungsgrenze überschreitet, können Sie einen **Tearing**-Effekt erleben. Tearing tritt auf, wenn die Display-Hardware den nächsten Aktualisierungszyklus startet, während der vorherige Frame noch auf den Bildschirm gezeichnet wird. Dadurch entsteht der visuelle Effekt, dass der obere Teil des Bildschirms den neuen Frame zeigt, während der untere Teil des Frames möglicherweise eine Kombination des vorherigen Frames und sogar des Frames davor zeigt.

Ihre Aufgabe ist es daher, Ihren Code so knapp und leichtgewichtig zu halten, dass Sie die Ihnen zur Verfügung stehende Zeit nicht überschreiten oder auf andere Weise Frames fallen lassen oder den Hauptthread übermäßig beanspruchen.

Aus diesen Gründen sollten Sie, es sei denn Ihr Renderer ist ziemlich klein und leichtgewichtig mit wenig Aufwand, alles Mögliche in einen Worker auslagern, sodass Sie den nächsten Frame vorbereiten können, während der Browser andere Dinge handhabt. Indem Sie Ihre Berechnungen und Daten bereit haben, bevor der Frame tatsächlich angefordert wird, können Sie Ihre Site oder App viel effizienter rendern, die Leistung des Hauptthreads verbessern und im Allgemeinen das Benutzererlebnis verbessern.

Zum Glück gibt es einige Tricks, mit denen Sie Ihre Auswirkung weiter reduzieren und die Leistung optimieren können, wenn Ihre Rendering-Anforderungen besonders hoch sind. Siehe den [WebXR-Leistungsleitfaden](/de/docs/Web/API/WebXR_Device_API/Performance) für Empfehlungen und Tipps, die Ihnen helfen, sicherzustellen, dass Ihre Leistung so gut wie möglich ist.

## WebXR-Frames

Ihre Frame-Rendering-Callback-Funktion erhält als Eingabe zwei Parameter: die Zeit, auf die sich der Frame bezieht, und ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das den Zustand der Szene zu diesem Zeitpunkt beschreibt.

### Die Optik von 3D

Wir haben zwei Augen aus einem bestimmten Grund: Da wir zwei Augen haben, sieht jedes das gleiche Bild aus einem leicht anderen Winkel. Da sie einen bekannten, festen Abstand voneinander haben, können unsere Gehirne grundlegende Geometrie und Trigonometrie verwenden, um die 3D-Natur der Realität aus diesen Informationen zu bestimmen. Wir nutzen auch Perspektive, Größenunterschiede und sogar unser Verständnis von wie Dinge normalerweise aussehen, um die Details dieser dritten Dimension herauszufinden. Diese Faktoren, unter anderen, sind die Quelle unserer [Tiefenwahrnehmung](https://en.wikipedia.org/wiki/Depth_perception).

Um die Illusion von drei Dimensionen beim Rendern von Grafiken zu erzeugen, müssen wir so viele dieser Faktoren wie möglich simulieren. Je mehr dieser Faktoren wir simulieren – und je genauer wir das tun – desto besser können wir das menschliche Gehirn täuschen, dass unsere Bilder 3D sind. Der Vorteil von XR ist, dass wir nicht nur die klassischen monokularen Techniken nutzen können, um 3D-Grafiken zu simulieren (Perspektive, Größe und simulierte Parallaxe), sondern auch das binokulare Sehen simulieren können – das heißt, Sehen mit zwei Augen – indem wir die Szene zweimal für jeden Frame der Animation rendern – einmal für jedes Auge.

Der typische [Pupillenabstand](https://en.wikipedia.org/wiki/Pupillary_distance) eines Menschen – der Abstand zwischen den Zentren der Pupillen – liegt zwischen 54 und 74 Millimetern (0,054 bis 0,074 Meter). Wenn sich also die Mitte des Kopfes eines Betrachters bei `[0.0, 2.0, 0.0]` befindet (etwa zwei Meter über dem Boden in der Mitte des Raumes horizontal), müssen wir die Szene zunächst von, sagen wir, `[-0.032, 2.0, 0.0]` (32mm links der Mitte) und dann erneut bei `[0.032, 2.0, 0.0]` (32mm rechts der Mitte) rendern. Auf diese Weise platzieren wir die Positionen der Augen des Betrachters in einem durchschnittlichen menschlichen Pupillenabstand von 64mm.

Dieser Abstand (oder welchen Pupillenabstand das XR-System auch immer verwenden soll) reicht aus, um unseren Geist ausreichend Unterschied aufgrund unterschiedlicher Netzhautbilder (dem Unterschied dessen, was jede Netzhaut sieht) und der Parallax-Effekte zu zeigen, um unseren Gehirnen zu erlauben, die Entfernung und Tiefe von Objekten zu berechnen und so drei Dimensionen wahrzunehmen, obwohl unsere Netzhaut nur 2D-Oberflächen sind.

Dies wird im Diagramm unten veranschaulicht, in dem wir sehen, wie jedes Auge einen Würfel sieht, der sich direkt vor dem Betrachter befindet. Während dieses Diagramm den Effekt in gewisser Weise übertreibt, um ihn besser darzustellen, bleibt das konzeptuelle Prinzip dasselbe. Jedes Auge sieht einen Bereich ausgehend von einem Bogen in front des Auges. Da jedes Auge von der Mittellinie des Kopfes versetzt ist und jedes Auge ungefähr dasselbe Sichtfeld hat, sieht jedes Auge einen geringfügig anderen Teil der Welt davor, und zwar aus einem geringfügig anderen Winkel.

![Diagramm, das zeigt, wie binokulares Sehen funktioniert](binocular-vision.svg)

Das linke Auge sieht den Würfel von etwas links der Mitte, und das rechte Auge sieht es von etwas rechts der Mitte. Daher sieht das linke Auge ein wenig mehr von der linken Seite des Objekts und ein wenig weniger von der rechten, und umgekehrt. Diese beiden Bilder werden auf die Netzhaut fokussiert, und das resultierende Signal wird über die Sehnerven zum visuellen Kortex des Gehirns übertragen, der sich am hinteren Ende des Okzipitallappens befindet.

Das Gehirn nimmt diese Signale von den linken und rechten Augen und konstruiert ein einziges, einheitliches, dreidimensionales Bild der Welt im Gehirn des Betrachters, und dieses Bild ist das, was gesehen wird. Und aufgrund dieser Unterschiede zwischen dem, was das linke Auge sieht, im Vergleich zu dem, was das rechte Auge sieht, ist das Gehirn in der Lage, eine Vielzahl von Informationen über die Tiefe des Objekts, seine Größe und mehr zu schließen. Indem das Gehirn diese abgeleiteten Tiefeninformationen mit anderen Hinweisen wie Perspektive, Schatten, Erinnerungen an die Bedeutung dieser Beziehungen und so weiter kombiniert, können wir eine Menge über die Welt um uns herum herausfinden.

### Frames, Posen, Ansichten und Framebuffer

Nachdem Sie ein `XRFrame`-Objekt haben, das den Zustand der Szene zu einem bestimmten Zeitpunkt darstellt, müssen Sie die Positionen der Objekte in der Szene relativ zum Betrachter bestimmen, damit Sie sie rendern können. Die Position und Orientierung des Betrachters relativ zu einem Referenzraum wird durch ein [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) dargestellt, das durch Aufrufen der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des `XRFrame`-Objekts erhalten wird.

Das `XRFrame` verfolgt nicht direkt die Positionen oder Ausrichtungen der Objekte in Ihrer Welt. Stattdessen bietet es eine Möglichkeit, Positionen und Orientierungen in das Koordinatensystem der Szene zu konvertieren, und es sammelt die Positions- und Orientierungsdaten des Betrachters von der XR-Hardware, konvertiert sie in den von Ihnen konfigurierten Referenzraum und übermittelt sie an Ihren Frame-Rendering-Code mit einem Zeitstempel. Sie verwenden diesen Zeitstempel und Ihre eigenen Daten, um zu bestimmen, wie die Szene gerendert werden soll.

Nach dem Rendern der Szene zweimal – einmal in die linke Hälfte des Framebuffers und einmal in die rechte Hälfte – wird der Framebuffer an die XR-Hardware gesendet, die dann jedes Bild in der entsprechenden Hälfte des Framebuffers dem jeweiligen Auge zeigt. Dies wird oft (aber nicht immer) durch Zeichnen des Bildes auf einem einzigen Bildschirm und Verwendung von Linsen erreicht, um die korrekte Hälfte des Bildes zum jeweiligen Auge zu transportieren.

Weitere Informationen darüber, wie 3D durch WebXR dargestellt wird, finden Sie in [Dreidimensionale Darstellung mit WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras#representing_3d_with_webxr).

## Zeichnen der Szene

Wenn es an der Zeit ist, den Framebuffer vorzubereiten, damit der Browser den nächsten Frame Ihrer Szene zeichnen kann, wird die Funktion, die Sie in `requestAnimationFrame()` übergeben haben, aufgerufen. Sie erhält als Eingabe den Zeitpunkt, zu dem der zu zeichnende Frame geplant wurde, sowie ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das Details über den Zustand der Szene für den Frame enthält, den Sie rendern müssen.

Idealerweise möchten Sie, dass dieser Code schnell genug ist, um eine Framerate von 60 FPS aufrechtzuerhalten oder so nah wie möglich daran zu kommen, wobei Sie bedenken sollten, dass mehr als nur Ihr Code in dieser einen Funktion gleichzeitig ausgeführt wird. Sie müssen sicherstellen, dass der Hauptthread nicht länger pro Frame als die Dauer des Frames selbst benötigt.

### Ein einfacher Renderer

In dieser Version des WebXR-Rendering-Callbacks verwenden wir einen sehr unkomplizierten Ansatz, der sich hervorragend für relativ einfache Projekte eignet. Dieses Pseudocode skizziert diesen Prozess:

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

Zusammenfassend gesagt, dieser Form von Renderer verwendet eine **View-First-Order** Reihenfolge. Jede der beiden Ansichten, die das Display des XR-Geräts ausmachen, werden hintereinander gerendert, wobei jedes Objekt erst für die eine Ansicht und dann für die gleiche Satz von Objekten auf der anderen Ansicht dargestellt wird. Dies hat zur Folge, dass eine Menge an Daten, die zum Zeichnen eines Objekts benötigt werden, zweimal pro Frame an die GPU gesendet wird. Diese Methode vereinfacht jedoch das Portieren von bestehendem WebGL-Code und ist häufig ausreichend, um die Aufgabe zu erledigen, weshalb wir uns diese Methode zuerst anschauen.

Siehe [Optimieren durch Rendern in Objekt-First-Order](#optimieren_durch_rendern_in_objekt-first-order) für einen alternativen Ansatz, der jedes Objekt zweimal hintereinander rendert, einmal für jedes Auge, bevor er zum nächsten Objekt wechselt, das die Szene für diesen Frame darstellt; also Rendering in **Object-First-Order**.

#### Beispiel für ein Rendering-Callback

Schauen wir uns einen echten Code an, der diesem grundlegenden Muster folgt. Da wir dieser Funktion im Beispiel oben den Namen `myDrawFrame()` geben haben, werden wir diesen hier weiter verwenden.

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

Die Funktion `myDrawFrame()` ergreift die [`XRSession`](/de/docs/Web/API/XRSession) aus dem [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das durch den Parameter `frame` spezifiziert ist, und ruft dann die [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Methode der Sitzung auf, um sofort das Rendering des nächsten Frames zu planen. Dies stellt sicher, dass wir sofort in die Warteschlange aufgenommen werden, damit die restliche Zeit, die in dieser Iteration der `myDrawFrame()`-Funktion verbracht wird, darauf angerechnet werden kann, wann der nächste Frame gezeichnet werden soll.

Wir erhalten dann das [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objekt, das die Pose des Betrachters – seine Position und Orientierung – beschreibt, indem wir die [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose)-Methode des Rahmens aufrufen und den zuvor [bei der Vorbereitung der WebXR-Sitzung](#vorbereitung_des_renderers) erhaltenen Referenzraum des Betrachters übergeben.

Mit der Pose des Betrachters zur Hand können wir dann beginnen, den Frame zu rendern. Der erste Schritt besteht darin, auf den Framebuffer zuzugreifen, in den das WebXR-Gerät den Frame zeichnen möchte; dies geschieht, indem wir die Ziel-WebGL-Schicht aus der [`renderState`](/de/docs/Web/API/XRSession/renderState)-Eigenschaft [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) der Sitzung abrufen und dann die [`framebuffer`](/de/docs/Web/API/XRWebGLLayer/framebuffer) von diesem [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt erhalten. Wir rufen dann [`gl.bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer) auf, um diesen Framebuffer als Ziel für alle kommenden Zeichnungsbefehle zu binden.

Der nächste Schritt ist, den Framebuffer zu löschen. Während Sie theoretisch diesen Schritt überspringen könnten – _wenn und nur wenn sicher ist, dass Ihr Code garantiert jedes einzelne Pixel im Framebuffer beschreibt_ – ist es im Allgemeinen am sichersten, ihn einfach zu löschen, bevor Sie mit dem Zeichnen beginnen, es sei denn, Sie müssen wirklich jede Leistungsunze herauskitzeln und wissen, dass Sie sowieso alle Pixel ändern. Die Hintergrundfarbe wird auf vollständig undurchsichtig schwarz gesetzt, indem [`gl.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) aufgerufen wird; die klare Tiefe wird auf 1.0 gesetzt, indem [`gl.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth) aufgerufen wird, um alle Pixel zu löschen, unabhängig davon, wie weit das Objekt, zu dem sie gehören, entfernt ist; und schließlich werden die Pixel- und Tiefenpuffer des Frames durch Aufrufen von [`gl.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) gelöscht, indem ein Bitmaske, die `COLOR_BUFFER_BIT` und `DEPTH_BUFFER_BIT` gesetzt enthält, übergeben wird.

Da WebXR einen einzigen Framebuffer für jede Ansicht verwendet, wobei Sichtbereiche verwendet werden, um jedes Auge innerhalb des Framebuffers zu trennen, müssen wir nur einen einzelnen Framebuffer löschen, anstatt ihn für jedes Auge (oder andere Blickwinkel, falls vorhanden) einzeln zu löschen.

Als nächstes wird die verstrichene Zeit seit dem letzten gerenderten Frame berechnet, indem von der aktuellen, durch den Parameter `currentFrameTime` angegebenen Zeit die gespeicherte Zeit des letzten gerenderten Frames, `lastFrameTime`, subtrahiert wird. Das Ergebnis ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Anzahl der Millisekunden angibt, die seit dem letzten gerenderten Frame vergangen sind. Wir können diesen Wert beim Zeichnen der Szene verwenden, um sicherzustellen, dass wir alles in die richtige Entfernung bewegen, basierend auf der tatsächlich verstrichenen Zeit, anstatt anzunehmen, dass der Callback mit einer konsistenten Bildrate ausgelöst wird. Diese verstrichene Zeit wird in der Variablen `deltaTime` gespeichert und der Wert von `lastFrameTime` wird durch die Zeit dieses Frames ersetzt, bereit, das Differenzial für den nächsten Frame zu berechnen.

Jetzt ist es an der Zeit, die Szene für jedes Auge tatsächlich darzustellen. Wir iterieren über die Ansichten im [`views`](/de/docs/Web/API/XRViewerPose/views)-Array der Betrachterpose. Für jedes dieser [`XRView`](/de/docs/Web/API/XRView)-Objekte, das die Perspektive eines Auges auf die Szene repräsentiert, müssen wir beginnen, das Zeichnen auf den Bereich des Framebuffers zu beschränken, der das Bild des aktuellen Auges repräsentiert.

Wir beginnen, indem wir WebGL vorbereiten, um den Inhalt des Auges darzustellen, indem wir die Sicht im Framebuffer einschränken, die für das Bild des aktuellen Auges reserviert ist, indem wir die Methode [`getViewport()`](/de/docs/Web/API/XRWebGLLayer/getViewport) von [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) aufrufen. Anschließend stellen wir den WebGL-Sichtbereich darauf ein, indem wir die X- und Y-Ursprünge des Sichtbereichs zusammen mit seiner Breite und Höhe in [`gl.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport) übergeben.

Schließlich rufen wir unsere Methode `myDrawSceneIntoView()` auf, um tatsächlich WebGL zu verwenden, um die Szene zu rendern. Dazu übergeben wir das [`XRView`](/de/docs/Web/API/XRView), das das Auge repräsentiert, für das wir zeichnen (zur Durchführung der Perspektivenabbildung und dergleichen) und `deltaTime`, damit der Szenenzichncode die verstrichene Zeit korrekt darstellen kann, wenn er die Positionen von Objekten berechnet, die sich über die Zeit hinweg bewegen.

Wenn die Schleife, die über die Ansichten iteriert, endet, wurde jedes benötigte Bild zur Darstellung der Szene an den Betrachter gerendert, und nach der Rückkehr macht sich der Framebuffer seinen Weg durch die GPU und schließlich zu den Display(s) des XR-Geräts. Da wir [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) oben in der Funktion aufgerufen haben, wird unser Callback erneut ausgelöst, wenn es Zeit ist, den nächsten Frame der Szene zu rendern.

#### Nachteile dieses Ansatzes

Da es wichtig ist, die Zeit, die Sie in dieser Funktion verbringen, so weit wie möglich zu minimieren, desto mehr Zeit Sie mit der Bearbeitung von Zustandsänderungen verbringen, desto weniger Zeit haben Sie tatsächlich Dinge zu zeichnen. Diese Methode funktioniert sehr gut für eine kleine Anzahl von Objekten, aber weil sie alle Daten für jedes Objekt zweimal binden muss (einmal für das linke Auge und einmal für das rechte), verbringen sie viel Zeit mit dem Einstellen des Zustands, dem Hochladen von Puffern und Texturen und so weiter. Im nächsten Abschnitt betrachten wir einen leicht abgeänderten Ansatz, der diese Änderungen erheblich reduziert und potenziell eine viel schnellere Rendermethode bietet, insbesondere wenn die Anzahl Ihrer Objekte steigt.

### Optimieren durch Rendern in Objekt-First-Order

Ein Vorteil des Ansatzes von WebXR, einen einzigen WebGL-Framebuffer zu verwenden, der sowohl die Ansichten des linken als auch des rechten Auges in einer einzigen Framebuffer umfasst, besteht darin, die Rendering-Leistung erheblich zu verbessern, indem die Reihenfolge der ausgeführten Aufgaben neu geordnet wird. Anstatt den Sichtbereich für eine gegebene Ansicht (wie das linke Auge) einzurichten und dann jedes für das linke Auge sichtbare Objekt nacheinander zu rendern und dabei die Puffer für jedes Objekt neu zu konfigurieren, können Sie stattdessen jedes Objekt zweimal hintereinander rendern, einmal für jedes Auge, wodurch die Puffer, Uniforms usw. nur einmal für beide Augen eingerichtet werden müssen.

Der resultierende Pseudocode sieht wie folgt aus:

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

Indem die Anordnung so geändert wird, binden wir Programme, Uniforms, Puffer, Texturen und möglicherweise andere Elemente nur einmal pro Frame statt zweimal für jedes Objekt in der Szene. Dies reduziert den Overhead auf ein potenziell sehr geringes Maß.

### Begrenzung der Framerate

Wenn Sie Ihre Framerate absichtlich begrenzen müssen, um eine Basisbildrate festzulegen, die Sie aufrechterhalten möchten, und gleichzeitig mehr Zeit für andere Codes zur Verfügung stellen zu können, können Sie dies tun, indem Sie Frames absichtlich basierend auf der Zeit überspringen.

Um die Bildrate zum Beispiel um 50% zu reduzieren, überspringen Sie einfach jeden zweiten Frame:

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

Diese Version des Rendering-Callbacks führt einen `tick`-Zähler ein. Der Frame wird nur gerendert, wenn `tick` ein geradzahliger Wert ist. So wird nur jeder zweite Frame gerendert.

Ähnlich können Sie mit `!(tick % 4)` jeden vierten Frame rendern, und so weiter.

### Anpassung Ihrer Animation an die verstrichene Zeit

Der Rendering-Callback erhält einen `time`-Parameter aus einem guten Grund. Dieser [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert ist ein Gleitkommawert, der den Zeitpunkt angibt, zu dem der Frame zum Rendern geplant war. Da die Ausführung Ihres Callbacks nicht in genauen 1/60-Sekunden-Intervallen stattfinden wird - und tatsächlich auch andere Geschwindigkeiten, wenn das Display des Benutzers eine andere Bildwiederholrate hat - können Sie sich nicht darauf verlassen, dass Ihr Code ausgeführt wird, um anzunehmen, dass es genau 1/60-Sekunden seit dem letzten Frame vergangen ist.

Aus diesem Grund müssen Sie den angegebenen Zeitstempel verwenden, um sicherzustellen, dass Ihre Animation genau bei der gewünschten Geschwindigkeit gerendert wird. Dazu müssen Sie zunächst die Zeit berechnen, die seit dem letzten gerenderten Frame verstrichen ist:

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

Dies hält eine globale (oder eine Objekt-Eigenschaft) namens `lastFrameTime`, die den Zeitpunkt des vorherigen gerenderten Frames enthält. In diesem Fall, da die Zeitwerte in Millisekunden gespeichert sind, multiplizieren wir mit 0,001, um die Zeit in Sekunden umzurechnen. In einigen Fällen spart dies später Zeit. In anderen Situationen benötigen Sie die Zeit in Millisekunden, sodass Sie nichts ändern müssten.

Mit der verstrichenen Zeit in der Hand hat Ihr Rendering-Code die Möglichkeit, genau zu berechnen, wie viel sich jedes bewegte Objekt in der verstrichenen Zeit bewegt hat. Zum Beispiel, wenn sich ein Objekt dreht, könnten Sie die Rotation so anwenden:

```js
const xDeltaRotation =
  xRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
const yDeltaRotation =
  yRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
const zDeltaRotation =
  zRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
```

Dies berechnet den Betrag, um den sich das Objekt seit dem letzten Mal, der Frame gezeichnet wurde, um jede der drei Achsen gedreht hat. Ohne dies würde die Form jedes Frame um den gegebenen Betrag gedreht, unabhängig von der verstrichenen Zeit. Dies könnte in vielen Fällen zu einem erheblichen Ruckeln führen.

Dasselbe Konzept gilt für Objekte, die sich bewegen statt zu drehen:

```js
const xDistanceMoved = xSpeedPerSecond * deltaTime;
const yDistanceMoved = ySpeedPerSecond * deltaTime;
const ZDistanceMoved = zSpeedPerSecond * deltaTime;
```

`xSpeedPerSecond`, `ySpeedPerSecond` und `zSpeedPerSecond` enthalten jeweils die Komponente dieses Geschwindigkeitsvektors für die Bewegung des Objekts entlang der jeweiligen Achse. In anderen Worten, `[xDistanceMoved, yDistanceMoved, zDistanceMoved]` ist ein Vektor, der die Geschwindigkeit des Objekts repräsentiert.

## Zusätzliche Aufgaben im Zusammenhang mit der Animation der Szene

Natürlich gibt es noch andere Dinge, die wahrscheinlich in jedem Durchgang durch den Renderer geschehen müssen. Zwei der häufigsten sind die [Bearbeitung von Benutzereingaben](/de/docs/Web/API/WebXR_Device_API/Inputs) und das Aktualisieren der Positionen von Objekten (oder des Betrachters) basierend auf bekannten Faktoren, wie diesen Zuständen der Benutzereingabegeräte oder den bekannten Bewegungswegen der Objekte in der Szene.

### Handhabung von Benutzereingabekontrollen

Es gibt drei Methoden, mit denen Benutzer Eingaben machen könnten, während sie eine WebXR-Anwendung verwenden. Zuerst unterstützt WebXR die direkte Handhabung von Eingaben von Controllern, die in die XR-Hardware integriert sind. Diese Eingabequellen können Geräte wie Handcontroller, optische Trackingsysteme, Beschleunigungsmesser und Magnetometer sowie andere Geräte dieser Art umfassen.

Die zweite Art der Eingabe ist ein Gamepad, das über das XR-System angeschlossen ist. Dies verwendet Schnittstellen, die vom [Gamepad API](/de/docs/Web/API/Gamepad_API) geerbt sind, aber Sie interagieren mit ihnen über WebXR.

Die dritte und letzte Art der Eingabe ist das traditionelle nicht-XR-Eingabegerät wie Tastaturen, Mäuse, Trackpads, Touchscreens und nicht-XR-Gamepads und Joysticks.

Orientierungs- und Positionsinformationen, die direkt von der XR-Hardware gesammelt werden können, werden automatisch übernommen. Daher sind die anderen Arten von Eingaben Ihrerseits selbst zu handhaben:

- Ziel- und Tastendruckereignisse des Zeigegeräts
- Gamepad-Eingaben
- Nicht-XR-Eingabegeräteingaben

Um mehr darüber zu erfahren, wie Sie Benutzereingaben bei der Präsentation einer Szene mit WebXR handhaben können, sehen Sie den Artikel [Inputs und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs).

### Aktualisieren der Position von Objekten

Die meisten Szenen (wenn nicht alle) beinhalten irgendeine Form der Animation, in der Dinge sich angemessen bewegen und aufeinander reagieren.

Beispielsweise könnte ein Virtual Reality oder Augmented Reality Spiel gegnerische computergesteuerte Charaktere haben, die sich im Verhältnis zum Benutzer bewegen. Nicht nur verändern sich ihre Standorte in der Welt im Laufe der Zeit, aber jede Nicht-Spieler-Figur (NPC) hat wahrscheinlich Körperteile oder Komponenten, die sich relativ voneinander bewegen. Arme und Beine schwingen, wenn eine Figur läuft, Köpfe neigen und drehen sich, Haare springen oder schwingen, Torse dehnen sich aus und ziehen sich zusammen, wenn die Figur atmet.

Zudem könnten Objekte und Strukturen in Bewegung sein. In einem Sportspiel könnte es einen Ball geben, der durch die Luft fliegt und dessen Bewegung simuliert werden muss. In Rennspielen könnte es Fahrzeuge geben, mit beweglichen Teilen, die animiert werden müssen, darunter die Räder. Wenn es Wasser in der Szene gibt, müssen Wellen oder Kräuselungen erzeugt werden, um einen realistischen Look zu erzielen. Teile von Strukturen könnten sich bewegen, wie Türen, Wände und Böden (bei bestimmten Arten von Spielen), und so weiter.

Eine weitere häufige Bewegungsquelle ist der Spieler selbst. Nachdem die Benutzereingaben durch die Steuerungen (sowohl XR-verbundene als auch anderweitige) interpretiert wurden, müssen Sie diese Änderungen in der Szene anwenden, um die Bewegung des Benutzers zu simulieren. Siehe den Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) für Details und ein gründliches Beispiel, wie dies funktioniert.

## Nächste Schritte

Sobald Sie Ihren Renderer geschrieben haben – oder zumindest haben Sie etwas, das funktioniert, auch wenn es nicht fertig ist – können Sie beginnen, sich mit der Kamera und deren Bewegung durch die Szene zu beschäftigen. Dies wird in unserem Artikel über [Sichtpunkte und Betrachter](/de/docs/Web/API/WebXR_Device_API/Cameras) in WebXR behandelt.

## Siehe auch

- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Sichtpunkte und Betrachter: Kameras in WebXR simulieren](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [WebXR-Leistungsleitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
