---
title: Rendering und der WebXR-Frame-Animationsrückruf
slug: Web/API/WebXR_Device_API/Rendering
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebXR Device API")}}

Sobald Ihre WebXR-Umgebung eingerichtet und eine [`XRSession`](/de/docs/Web/API/XRSession) erstellt wurde, um eine laufende XR-Umgebungssitzung darzustellen, müssen Sie der XR-Gerät Frames der Szene zur Darstellung bereitstellen. Dieser Artikel behandelt den Prozess, wie die Frames der XR-Szene im Rendering-Loop auf das Gerät übertragen werden, indem die [`XRSession`](/de/docs/Web/API/XRSession) zum Abrufen eines [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekts verwendet wird, das jedes Frame repräsentiert und darauf hin verwendet wird, den Framebuffer für die Bereitstellung an das XR-Gerät vorzubereiten.

Bevor Sie die virtuelle Umgebung rendern können, müssen Sie eine WebXR-Sitzung einrichten, indem Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit der Methode [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) erstellen; Sie müssen auch die Sitzung mit einem Framebuffer verbinden und andere Einrichtungsschritte durchführen. Diese Einrichtungsschritte sind im Artikel [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) beschrieben.

## Vorbereiten des Renderers

Nachdem die XR-Sitzung eingerichtet wurde, mit angeschlossenem WebGL-Framebuffer und alle erforderlichen Daten im WebGL bereitgestellt wurden, um die Szene zu rendern, können Sie den Renderer einrichten, um zu starten. Dies beginnt mit dem Abrufen des Referenzraums, in dem Sie zeichnen möchten, wobei der Ursprung und die Ausrichtung an der Startposition und Blickrichtung des Betrachters festgelegt sind. Sobald dies geschehen ist, fordern Sie den Browser auf, Ihre Rendering-Funktion beim nächsten Bedarf eines Framebuffers aufzurufen, um Ihre Szene zu rendern. Dies geschieht durch den Aufruf der [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame).

Den Renderer zu starten sieht somit folgendermaßen aus:

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

Nachdem ein Referenzraum für die immersive Welt erhalten wurde, erstellt dies einen Versatz-Referenzraum, der die Position und Ausrichtung des Betrachters darstellt, indem ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) erstellt wird, der diese Position und Ausrichtung darstellt, und dann die Methode [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) des [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) aufgerufen wird.

Dann wird das erste Animations-Frame geplant, indem die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der [`XRSession`](/de/docs/Web/API/XRSession) aufgerufen wird, wobei eine Rückruffunktion `myDrawFrame()` übergeben wird, deren Aufgabe es ist, das Frame zu rendern.

Beachten Sie, dass dieser Code keine Schleife hat! Stattdessen ist der Code zum Rendern des Frames—in diesem Fall eine Funktion namens `myDrawFrame()`—dafür verantwortlich, die Zeit für das Zeichnen eines weiteren Frames zu planen, indem erneut `requestAnimationFrame()` aufgerufen wird.

## Aktualisierungsrate und Frame-Rate

Angenommen, Sie haben die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der [`XRSession`](/de/docs/Web/API/XRSession) seit der letzten Aktualisierung des Bildschirms aufgerufen, wird der Browser Ihren Frame-Rendering-Rückruf jedes Mal aufrufen, wenn er bereit ist, Ihr App- oder Site-Fenster neu zu zeichnen. In diesem Kontext bedeutet "neu zeichnen" den Prozess, sicherzustellen, dass der auf dem Bildschirm angezeigte Inhalt dem entspricht, was das DOM und die darin enthaltenen Elemente in diesem Moment darstellen sollen.

### Vertikale Hardware-Aktualisierungsrate

Wenn der Browser bereit ist, das {{HTMLElement("canvas")}}, in dem Ihre WebXR-Inhalte angezeigt werden, zu aktualisieren, ruft er Ihren Frame-Rendering-Rückruf auf, der den angegebenen Zeitstempel und alle anderen relevanten Daten, wie Modelle und Texturen sowie den Anwendungszustand, verwendet, um die Szene—wie sie zu diesem Zeitpunkt erscheinen sollte—in den WebGL-Backbuffer zu rendern. Wenn Ihr Rückruf zurückkehrt, überträgt der Browser diesen Backbuffer an das Display oder XR-Gerät zusammen mit allem, was sich seit der letzten Auffrischung des Bildschirms geändert hat.

Historisch gesehen haben Bildschirme sich 60 Mal pro Sekunde aktualisiert. Dies liegt daran, dass frühe Bildschirme die Wechselspannung des elektrischen Netzes verwendeten, die in den USA 60 Mal pro Sekunde (50 in Europa) umschlägt, um die Synchronisation durchzuführen. Diese Zahl hat mehrere Bezeichnungen, aber sie bedeuten alle dasselbe oder fast dasselbe:

- Aktualisierungsrate
- Vertikale Aktualisierungsrate
- Vertikale Leerzeilenrate (VBL)
- Vertikale Synchronisierungsrate

Es gibt auch andere ähnliche Begriffe, aber unabhängig davon, wie sie genannt werden, wird die Maßeinheit Hertz oder Hz angewandt. Ein Bildschirm, der sich 60 Mal pro Sekunde aktualisiert, hat eine Aktualisierungsrate von 60 Hz. Das bedeutet, dass die maximale Anzahl an Frames, die er in einer Sekunde anzeigen kann, 60 beträgt. Egal wie viele Frames pro Sekunde Sie rendern, nur 60 davon gelangen in einer Sekunde auf den Bildschirm.

Aber nicht alle Displays laufen bei 60 Hz; heutzutage beginnen Bildschirme mit höherer Leistung, viel höhere Aktualisierungsraten zu verwenden. 120-Hz-Bildschirme oder 120 Frames pro Sekunde werden zunehmend üblich. Der Browser versucht immer, mit der gleichen Rate wie das Display zu aktualisieren, was bedeutet, dass auf einigen Computern Ihr Rückruf maximal 60 Mal pro Sekunde ausgeführt wird, während er auf anderen möglicherweise 90 oder 120 Mal pro Sekunde oder sogar mehr aufgerufen wird, abhängig von der Frame-Rate.

### Verfügbare Zeit, um jedes Frame zu rendern

Daher ist es wichtig, die verfügbare Zeit zwischen den Frames optimal zu nutzen. Wenn das Gerät des Benutzers ein 60-Hz-Display verwendet, wird Ihr Rückruf bis zu 60 Mal pro Sekunde aufgerufen, und Ihr Ziel ist es, sicherzustellen, dass er nicht seltener als das aufgerufen wird. Sie erreichen dies, indem Sie so viel wie möglich außerhalb des Hauptthreads tun und Ihren Frame-Rendering-Rückruf so effizient wie möglich halten. Die Einteilung der Zeit in 60-Hz-Blöcke, wobei jeder Block zumindest teilweise zum Rendern der Szene verwendet wird, ist im folgenden Diagramm dargestellt.

![Renderer-Ausführungszeit pro Framezeitraum](frames-and-refresh-rate.svg)

Dies ist wichtig, da es sein kann, dass der Computer, wenn er zunehmend beschäftigt wird, nicht in der Lage ist, Ihren Rückruf präzise jedes Frame aufzurufen, und möglicherweise Frames überspringen muss. Dies nennt man **Frames fallen lassen**. Dies geschieht, wenn die Zeit, die zum Rendern eines Frames benötigt wird, die zwischen den Frames verfügbare Zeit überschreitet, sei es, weil das Rendern verzögert wurde oder das Rendern selbst mehr Zeit in Anspruch nahm als verfügbar.

![Renderer-Ausführungszeit pro Framezeitraum](dropped-frames-timing.svg)

Im obigen Diagramm wird Frame 3 fallen gelassen, da Frame 2 nicht bis zum Zeitpunkt des Zeichnens von Frame 3 gerendert wurde. Das nächste gezeichnete Frame wird stattdessen Frame 4 sein. Dies ist ein weiterer Grund, warum der Zeitstempel, der in Ihren Rendering-Rückruf übergeben wird, nützlich ist. Indem Sie die Szene basierend auf der Zeit und nicht auf der Frame-Nummer konfigurieren, können Sie sicherstellen, dass Ihre gerenderten Frames den Erwartungen entsprechen und nicht hinterherhinken.

Wenn ein Frame fallen gelassen wird, ändert sich der Inhalt des betroffenen Anzeigebereichs während dieses Durchgangs durch die Frame-Schleife nicht. Aus diesem Grund ist das gelegentliche Fallenlassen eines Frames normalerweise nicht besonders auffällig, aber wenn es oft passiert—insbesondere wenn mehrere Frames in sehr kurzer Zeitspanne fallen gelassen werden—kann es störend sein oder sogar Ihre Anzeige unbrauchbar machen.

Glücklicherweise können Sie leicht berechnen, wie viel Zeit zwischen den Frames verfügbar ist, indem Sie `1/Aktualisierungsrate` Sekunden verwenden. Das heißt, indem Sie 1 durch die Aktualisierungsrate des Displays teilen. Der resultierende Wert ist die Anzahl der Sekunden, die für jedes Frame zur Verfügung stehen, um gerendert zu werden, um das Skippen zu vermeiden. Beispielsweise hat ein 60-Hz-Display 1/60 Sekunde um ein einzelnes Frame zu rendern oder 0,0166667 Sekunden. Und wenn die Aktualisierungsrate des Geräts 120 Hz beträgt, haben Sie nur 0,00883333 Sekunden, um jedes Frame zu rendern, wenn Sie das Fallenlassen von Frames vermeiden möchten.

Selbst wenn die Hardware tatsächlich 120 Hz erreicht, können Sie dennoch einfach 60 Mal pro Sekunde aktualisieren, und es ist normalerweise ein guter Ausgangspunkt, dieses Ziel anzustreben. 60 FPS liegen bereits jenseits des Punktes, an dem die meisten Menschen leicht erkennen können, dass die Animation nicht eine Serie von Standbildern ist, die wirklich schnell vorbeigehen. Mit anderen Worten, wenn Sie sich nicht sicher sind, können Sie davon ausgehen, dass die Aktualisierung des Displays bei 60 Hz erfolgt. Solange Ihr Code korrekt geschrieben ist, wird alles gut funktionieren.

### Bedenken zur Renderer-Leistung

Es ist klar, dass Sie sehr wenig Zeit haben, um jede Szene pro Frame zu rendern. Nicht nur das, sondern wenn Ihr Renderer länger als diese Zeit läuft, können Sie nicht nur das Frame fallen lassen, sondern diese Zeit wird vollständig verschwendet und blockiert möglicherweise, dass andere Code für dieses Frame überhaupt ausgeführt wird.

Nicht nur das, sondern wenn Ihr Rendering die vertikale Synchronisationsgrenze überschreitet, können Sie einen **Zerr-Effekt** erzeugen. Tearing tritt auf, wenn die Anzeigegeräte beginnen, den nächsten Auffrischungszyklus zu starten, während das vorherige Frame noch auf den Bildschirm gezeichnet wird. Infolgedessen erhalten Sie einen visuellen Effekt, bei dem der obere Teil des Bildschirms das neue Frame anzeigt, während der untere Teil des Frames eine Kombination aus dem vorherigen Frame und möglicherweise sogar dem davor anzeigt.

Ihr Ziel ist es daher, Ihren Code so kompakt und leichtgewichtig zu halten, dass Sie die Ihnen zur Verfügung stehende Zeit nicht überschreiten oder anderweitig Frames erfolgreich fallen gelassen werden oder den Hauptthread übermäßig belasten.

Aus diesen Gründen sollten Sie, es sei denn Ihr Renderer ist eher klein und leicht, mit wenig zu tun, in Betracht ziehen, alles, was Sie können, an einen Worker auszulagern, damit Sie das nächste Frame berechnen können, während der Browser andere Dinge bearbeitet. Indem Sie Ihre Berechnungen und Daten bereitstellen, bevor das Frame tatsächlich erforderlich ist, können Sie Ihre Site oder App viel effizienter machen, die Leistung des Hauptthreads verbessern und letztendlich die Benutzererfahrung verbessern.

Glücklicherweise gibt es einige Tricks, die Sie verwenden können, um Ihren Einfluss weiter zu reduzieren und die Leistung zu optimieren, wenn Ihre Renderanforderungen besonders hoch sind. Siehe den [WebXR-Performance-Leitfaden](/de/docs/Web/API/WebXR_Device_API/Performance) für Empfehlungen und Tipps, die Ihnen dabei helfen, sicherzustellen, dass Ihre Leistung so gut ist, wie sie sein kann.

## WebXR-Frames

Ihre Frame-Rendering-Rückruffunktion erhält zwei Parameter als Eingabe: die Zeit, zu der das Frame gehört, und ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das den Zustand der Szene zu dieser Zeit beschreibt.

### Die Optik von 3D

Wir haben zwei Augen aus gutem Grund: Durch das Vorhandensein von zwei Augen sieht jedes die Welt aus einem leicht unterschiedlichen Winkel. Da sie einen bekannten, festen Abstand zueinander haben, kann unser Gehirn grundlegende Geometrie und Trigonometrie anwenden und die dreidimensionale Natur der Realität aus diesen Informationen ableiten. Wir nutzen auch Perspektive, Größenunterschiede und sogar unser Verständnis darüber, wie Dinge normalerweise aussehen, um die Details dieser dritten Dimension herauszufinden. Diese Faktoren, neben anderen, sind die Quelle unserer [Tiefenwahrnehmung](https://en.wikipedia.org/wiki/Depth_perception).

Um die Illusion von drei Dimensionen beim Rendern von Grafiken zu erzeugen, müssen wir so viele dieser Faktoren wie möglich simulieren. Je mehr dieser Faktoren wir simulieren—und je genauer wir dies tun—desto besser können wir das menschliche Gehirn dazu bringen, unsere Bilder in 3D wahrzunehmen. Der Vorteil von XR ist, dass wir nicht nur die klassischen monokularen Techniken verwenden können, um 3D-Grafiken zu simulieren (Perspektive, Größe und simulierte Parallaxe), sondern wir können auch binokulares Sehen simulieren—das heißt, Sehen mit zwei Augen—indem wir die Szene für jedes Frame der Animation zweimal rendern—einmal für jedes Auge.

Der klinische menschliche [Pupillenabstand](https://en.wikipedia.org/wiki/Pupillary_distance)—der Abstand zwischen den Zentren der Pupillen—liegt zwischen 54 und 74 Millimetern (0,054 bis 0,074 Meter). Wenn also der Mittelpunkt des Kopfes des Betrachters sich an `[0.0, 2.0, 0.0]` befindet (etwa zwei Meter über dem Boden auf der horizontalen Achse), müssen wir die Szene zunächst von, sagen wir, `[-0.032, 2.0, 0.0]` (32mm links von der Mitte) rendern und dann erneut bei `[0.032, 2.0, 0.0]` (32mm rechts von der Mitte). Auf diese Weise platzieren wir die Positionen der Augen des Betrachters in einem durchschnittlichen menschlichen Pupillenabstand von 64mm.

Dieser Abstand (oder welcher Pupillenabstand auch immer das XR-System konfiguriert ist zu verwenden) reicht aus, damit unser Gehirn nur genügend Unterschied aufgrund der Netzhautabweichung (der Unterschied, den jede Netzhaut sieht) und des Parallaxeneffekts sieht, um die Entfernung zu und Tiefe von Objekten zu berechnen, was es uns ermöglicht, drei Dimensionen wahrzunehmen, obwohl unsere Netzhäute nur 2D-Oberflächen sind.

Dies wird im Diagramm unten illustriert, in dem wir sehen, wie jedes Auge einen Würfel erfasst, der sich direkt vor dem Betrachter befindet. Während dieses Diagramm den Effekt in gewisser Hinsicht zu Illustrationszwecken übertreibt, ist das Konzept dasselbe. Jedes Auge sieht einen Bereich, dessen Grenzen einen Bogen vor dem Auge bilden. Da jedes Auge zu einer Seite oder der anderen von der Mittellinie des Kopfes versetzt ist und jedes Auge ungefähr das gleiche Gesichtsfeld sieht, sieht jedes Auge einen etwas anderen Teil der Welt vor ihm und aus einem etwas anderen Blickwinkel.

![Diagramm, das zeigt, wie das binokulare Sehen funktioniert](binocular-vision.svg)

Das linke Auge sieht den Würfel ein wenig von der linken Seite aus der Mitte, und das rechte Auge sieht ihn ein wenig von der rechten Seite aus der Mitte. Infolgedessen sieht das linke Auge ein wenig mehr von der linken Seite des Objekts und ein wenig weniger von der rechten und umgekehrt. Diese beiden Bilder werden auf die Netzhäute fokussiert und das resultierende Signal über die Sehnerven an die Sehrinde des Gehirns am hinteren Ende des Okzipitallappens übermittelt.

Das Gehirn nimmt diese Signale von den linken und rechten Augen und konstruiert ein einziges, einheitliches, 3D-Bild der Welt im Gehirn des Betrachters, und dieses Bild ist das, was gesehen wird. Aufgrund dieser Unterschiede zwischen dem, was vom linken Auge und im Vergleich dazu vom rechten Auge gesehen wird, ist das Gehirn in der Lage, eine große Menge an Informationen darüber zu benutzer, wie tief das Objekt ist, seine Größe und mehr abzuleiten. Indem es diese abgeleiteten Tiefeninformationen mit anderen Hinweisen wie Perspektiven, Schatten, Erinnerungen daran, was diese Beziehungen bedeuten, und so weiter kombiniert, können wir eine Vielzahl von Informationen über die Welt um uns herum herausfinden.

### Frames, Posen, Ansichten und Framebuffers

Sobald Sie ein `XRFrame` haben, das den Zustand der Szene zu einem bestimmten Zeitpunkt darstellt, müssen Sie die Positionen der Objekte in der Szene relativ zum Betrachter bestimmen, damit Sie sie rendern können. Die Position und Orientierung des Betrachters relativ zu einem Referenzraum wird durch ein [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) dargestellt, das durch das Aufrufen der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des [`XRFrame`](/de/docs/Web/API/XRFrame) erhalten wird.

Das `XRFrame` behält nicht direkt die Positionen oder Orientierungen der Objekte in Ihrer Welt. Stattdessen bietet es eine Methode, um Positionen und Orientierungen in das Koordinatensystem der Szene umzuwandeln, und es sammelt die Positions- und Orientierungsdaten des Betrachters von der XR-Hardware, wandelt sie in den von Ihnen konfigurierten Referenzraum um und liefert sie mit einem Zeitstempel an Ihren Frame-Rendering-Code. Sie verwenden diesen Zeitstempel und Ihre eigenen Daten, um zu bestimmen, wie die Szene zu rendern ist.

Nachdem die Szene zweimal gerendert wurde—einmal in die linke Hälfte des Framebuffers und einmal in die rechte Hälfte des Framebuffers—wird der Framebuffer an die XR-Hardware gesendet, die jede Hälfte des Framebuffers dem entsprechenden Auge anzeigt. Dies geschieht oft (aber nicht immer), indem das Bild auf einem einzigen Bildschirm gezeichnet wird und Linsen verwendet werden, um die jeweilige Hälfte dieses Bildes an jedes Auge zu übertragen.

Sie können mehr darüber erfahren, wie 3D von WebXR repräsentiert wird, in [3D mit WebXR darstellen](/de/docs/Web/API/WebXR_Device_API/Cameras#representing_3d_with_webxr).

## Die Szene zeichnen

Wenn die Zeit gekommen ist, den Framebuffer vorzubereiten, damit der Browser das nächste Frame Ihrer Szene zeichnen kann, wird die Funktion, die Sie `requestAnimationFrame()` bereitgestellt haben, aufgerufen. Sie erhält als Eingabe die Zeit, zu der das aktuelle Frame gerendert wird, und ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das Details über den Zustand der Szene für das zu rendernde Frame bereitstellt.

Idealerweise möchten Sie, dass dieser Code schnell genug ist, um eine 60 FPS Frame-Rate beizubehalten oder dieser so nah wie möglich zu kommen, wobei Sie daran denken, dass mehr vor sich geht als nur Ihr Code in dieser einen Funktion. Sie müssen sicherstellen, dass der Hauptthread für jedes Frame nicht länger laufen muss als die Dauer des Frames selbst.

### Ein einfacher Renderer

In dieser Version des WebXR-Rendering-Rückrufs verwenden wir einen sehr unkomplizierten Ansatz, der für relativ einfache Projekte hervorragend funktioniert. Dieser Pseudocode skizziert diesen Prozess:

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

Dieser Renderer verwendet eine **View-First-Reihenfolge**. Jeder der beiden Ansichten, die die Anzeige des XR-Geräts bilden, werden nacheinander gerendert, wobei jedes Objekt in einer Ansicht gezeichnet wird, bevor das gleiche Satz von Objekten in der anderen Ansicht gerendert wird. Infolgedessen gibt es eine beträchtliche Redundanz, da viele der Daten, die benötigt werden, um ein Objekt zu zeichnen, zweimal pro Frame an die GPU gesendet werden. Es vereinfacht jedoch die Portierung vorhandenen WebGL-Codes und ist häufig ausreichend, um den Job zu erledigen, daher werfen wir zuerst einen Blick auf diese Methode.

Siehe [Optimieren durch Rendern in objekt-erster Reihenfolge](#optimieren_durch_rendern_in_objekt-erster_reihenfolge) für einen alternativen Ansatz, der jedes Objekt zweimal nacheinander rendert, einmal für jedes Auge, bevor er mit dem nächsten Objekt fortfährt, das die Szene für dieses Frame ausmacht; dh. Rendern in **objekt-erster Reihenfolge**.

#### Beispiel eines Rendering-Rückrufs

Werfen wir einen Blick auf einen Beispielcode, der diesem grundlegenden Muster folgt. Da wir im obigen Beispiel dieser Funktion den Namen `myDrawFrame()` gegeben haben, verwenden wir diesen auch hier.

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

Die Funktion `myDrawFrame()` ruft die [`XRSession`](/de/docs/Web/API/XRSession) von dem [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt ab, das von dem `frame`-Parameter angegeben wird, und ruft dann die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der Sitzung auf, um das Zeichnen des nächsten Frames sofort zu planen. Dies stellt sicher, dass wir uns sofort in die Warteschlange einreihen können, was ermöglicht, dass der Rest der Zeit, die in dieser Iteration der Funktion `myDrawFrame()` verbracht wird, auf das Timing des Zeichnens des nächsten Frames angerechnet wird.

Wir erhalten dann das [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objekt, das die Pose des Betrachters beschreibt—seine Position und Ausrichtung—indem wir die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des Frames aufrufen und den Referenzraum des Betrachters aus dem `viewerRefSpace` übergeben, das zuvor [während der Einrichtung der WebXR-Sitzung](#vorbereiten_des_renderers) erhalten wurde.

Mit der Pose des Betrachters in der Hand können wir dann mit dem Rendern des Frames beginnen. Der erste Schritt besteht darin, Zugriff auf den Framebuffer zu erhalten, in den das WebXR-Gerät den Frame zeichnen möchte; dies geschieht, indem wir den Ziel-WebGL-Layer vom [`renderState`](/de/docs/Web/API/XRSession/renderState)-Objekts der Sitzung erhalten, das die [`baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer)-Eigenschaft ist, und dann den [`framebuffer`](/de/docs/Web/API/XRWebGLLayer/framebuffer) aus diesem [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt abrufen. Dann rufen wir [`gl.bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer) auf, um diesen Framebuffer als Ziel für alle bevorstehenden Zeichnungsbefehle zu binden.

Der nächste Schritt besteht darin, den Framebuffer zu löschen. Während Sie theoretisch diesen Schritt überspringen könnten—_nur wenn Ihr Rendering-Code garantiert ist, jedes einzelne Pixel im Framebuffer zu schreiben_—ist es im Allgemeinen am besten, ihn einfach zu löschen, bevor Sie mit dem Zeichnen beginnen, es sei denn, Sie müssten jede mögliche Leistungsstufe herauszuholen und wissen, dass Sie alle Pixel ohnehin berühren. Die Hintergrundfarbe wird auf vollständig undurchsichtiges Schwarz gesetzt, indem [`gl.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor) verwendet wird; die Tiefenlöschung wird auf 1.0 gesetzt, indem [`gl.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth) aufgerufen wird, um alle Pixel unabhängig davon zu löschen, wie weit das Objekt, zu dem sie gehören, weg ist; und schließlich werden sowohl die Pixel- als auch die Tiefenpuffer des Frames gelöscht, indem [`gl.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) aufgerufen wird, wobei eine Bitmaske übergeben wird, in der sowohl `COLOR_BUFFER_BIT` als auch `DEPTH_BUFFER_BIT` gesetzt sind.

Da WebXR einen einzigen Framebuffer für jede Ansicht verwendet, mit Viewports, die verwendet werden, um die Ansicht jedes Auges im Framebuffer zu trennen, müssen wir nur einen Framebuffer löschen, statt ihn für jedes Auge (oder andere Ansichten, falls vorhanden) einzeln zu reinigen.

Als nächstes wird die seit dem vorherigen Frame vergangene Zeit berechnet, indem von der aktuellen Zeit, wie durch den Parameter `currentFrameTime` angegeben, die gespeicherte Zeit des vorherigen Renders, `lastFrameTime`, subtrahiert wird. Das Ergebnis ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der angibt, wie viele Millisekunden seit dem letzten gerenderten Frame vergangen sind. Wir können diesen Wert beim Zeichnen der Szene verwenden, um sicherzustellen, dass wir alles in der richtigen Entfernung angesichts der tatsächlichen Abweichung der Zeit bewegen, anstatt davon auszugehen, dass der Rückruf mit einer gleichmäßigen Frame-Rate aufgerufen wird. Diese verstrichene Zeit wird in der Variablen `deltaTime` gespeichert, und der Wert von `lastFrameTime` wird mit dieser Frame-Zeit aktualisiert, um die Differenz für das nächste Frame zu berechnen.

Es ist nun an der Zeit, die Szene für jedes Auge tatsächlich zu rendern. Wir iterieren über die Ansichten im [`views`](/de/docs/Web/API/XRViewerPose/views)-Array der Pose des Betrachters. Für jedes dieser [`XRView`](/de/docs/Web/API/XRView)-Objekte, das die Perspektive eines Auges auf die Szene darstellt, müssen wir zuerst das Zeichnen auf den Bereich des Framebuffers begrenzen, der das sichtbare Bild des aktuellen Auges darstellt.

Wir beginnen damit, WebGL vorzubereiten, um die Inhalte des Auges zu rendern, indem wir den Viewport abrufen, der das Zeichnen auf den Bereich im Framebuffer beschränkt, der dem Bild des aktuellen Auges vorbehalten ist, indem die Methode [`getViewport()`](/de/docs/Web/API/XRWebGLLayer/getViewport) von [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) aufgerufen wird. Dann setzen wir den WebGL-Viewport entsprechend fest, wobei die X- und Y-Ursprünge des Viewports sowie dessen Breite und Höhe in [`gl.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport) übergeben werden.

Schließlich rufen wir unsere Methode `myDrawSceneIntoView()` auf, um tatsächlich WebGL zu verwenden, um die Szene zu rendern. In diese Funktion führen wir das [`XRView`](/de/docs/Web/API/XRView) ein, das das Auge repräsentiert, für das wir zeichnen (um perspektivische Zuordnungen und dergleichen durchzuführen), und `deltaTime`, damit der Szene-Zeichnungscode die verstrichene Zeit akkurat darstellen kann, wenn er die Positionen von Objekten berechnet, die sich im Laufe der Zeit bewegen.

Wenn die Schleife über die Ansichten endet, wurde jedes Bild, das notwendig ist, um die Szene dem Betrachter darzustellen, gerendert, und nach Rückkehr wird der Framebuffer durch die GPU geleitet und landet schließlich auf dem Display oder den Displays des XR-Geräts. Da wir am Anfang der Funktion [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufgerufen haben, wird unser Rückruf erneut aufgerufen, wenn es Zeit ist, das nächste Frame der Szenen-Animation zu rendern.

#### Nachteile dieses Ansatzes

Da es wichtig ist, die Zeit in dieser Funktion so gering wie möglich zu halten, je mehr Zeit Sie mit der Behandlung von Zustandsänderungen verbringen, desto weniger Zeit haben Sie, um tatsächlich zu zeichnen. Diese Technik funktioniert sehr gut für eine geringe Anzahl von Objekten, aber weil sie alle Daten für jedes Objekt zweimal binden muss (einmal für das linke Auge und einmal für das rechte), verbringen Sie viel Zeit mit der Anpassung des Zustands, dem Hochladen von Puffern und Texturen und so weiter. Im nächsten Abschnitt schauen wir uns einen geänderten Ansatz an, der diese Zustandswechsel erheblich reduziert und einen potenziell viel schnelleren Rendering-Ansatz bietet, insbesondere wenn Ihre Objektanzahl zunimmt.

### Optimieren durch Rendern in objekt-erster Reihenfolge

Ein Vorteil des WebXR-Ansatzes, einen einzigen WebGL-Framebuffer zu verwenden, der sowohl die Ansichten des linken als auch des rechten Auges in einem Framebuffer enthält, ist die Möglichkeit, die Rendering-Leistung erheblich zu verbessern, indem die Reihenfolge geändert wird, in der Dinge gemacht werden. Statt den Viewport für eine bestimmte Ansicht (wie das linke Auge) einzurichten und dann jedes sichtbare Objekt des linken Auges einzeln zu rendern, wobei Sie für jedes Objekt die Puffer neu konfigurieren, können Sie jedes Objekt zweimal hintereinander rendern, einmal pro Auge, so dass Puffer, Uniformen und so weiter nur einmal für beide Augen eingerichtet werden müssen.

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

Durch die Änderung der Dinge auf diese Weise binden wir Programme, Uniformen, Puffer, Texturen und möglicherweise andere Dinge nur einmal pro Frame statt zweimal für jedes Objekt, das in der Szene gefunden wird. Dies reduziert den Overhead möglicherweise sehr erheblich.

### Begrenzung der Frame-Rate

Wenn Sie die Frame-Rate gezielt begrenzen müssen, um eine Basis-Frame-Rate zu etablieren, die Sie versuchen, beizubehalten, während Sie mehr Zeit für andere Code zulassen, können Sie dies tun, indem Sie Frames bewusst auf zeitgesteuerter Basis überspringen.

Zum Beispiel, um die Frame-Rate um 50% zu reduzieren, überspringen Sie einfach jedes zweite Frame:

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

Diese Version des Rendering-Rückrufs behält einen `tick`-Zähler bei. Das Frame wird nur gerendert, wenn `tick` einen geraden Zahlenwert hat. Auf diese Weise wird nur jedes zweite Frame gerendert.

Ähnlich können Sie jedes vierte Frame rendern, indem Sie `!(tick % 4)` verwenden und so weiter.

### Anpassung Ihrer Animation an die verstrichene Zeit

Der Rendering-Rückruf erhält einen `time`-Parameter aus gutem Grund. Dieser [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert ist ein Fließkommawert, der die Zeit angibt, zu der das Frame für das Rendering geplant wurde. Da die Ausführung Ihres Rückrufs nicht auf präzise 1/60 Sekunden-Intervalle stattfinden wird und, tatsächlich, zu anderen Raten passieren kann, wenn das Display des Benutzers eine andere Frame-Rate hat, können Sie sich nicht auf das blinde Vertrauen darauf verlassen, dass Ihr Code läuft, um davon auszugehen, dass es 1/60 Sekunde seit dem letzten Frame her ist.

Aus diesem Grund müssen Sie den bereitgestellten Zeitstempel verwenden, um sicherzustellen, dass Ihre Animation mit der gewünschten Geschwindigkeit gerendert wird. Zu diesem Zweck müssen Sie zuerst die verstrichene Zeit seit dem letzten Frame berechnen:

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

Dies hält eine globale (oder eine Objekteigenschaft) namens `lastFrameTime`, die die Zeit des vorherigen Frame-Renderings enthält. In diesem Fall, da die Zeitwerte in Millisekunden gespeichert werden, multiplizieren wir mit 0.001, um die Zeit in Sekunden umzuwandeln. In einigen Fällen spart dies später Zeit. In anderen Situationen benötigen Sie die Zeit in Millisekunden, sodass Sie nichts ändern müssten.

Mit der verstrichenen Zeit in der Hand hat Ihr Rendering-Code die Mittel, um genau zu berechnen, wie viel sich jedes bewegliche Objekt in der verstrichenen Zeit bewegt hat. Zum Beispiel, wenn sich ein Objekt dreht, könnten Sie die Rotation folgendermaßen anwenden:

```js
const xDeltaRotation =
  xRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
const yDeltaRotation =
  yRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
const zDeltaRotation =
  zRotationDegreesPerSecond * RADIANS_PER_DEGREE * deltaTime;
```

Dies berechnet den Betrag, um den das Objekt seit dem letzten Mal, als das Frame gezeichnet wurde, um jede der drei Achsen rotiert ist. Ohne dies würde sich die Form um den angegebenen Betrag in jedem Frame drehen, unabhängig von der verstrichenen Zeit. Dies könnte in vielen Fällen zu erheblichen Stottern führen.

Dasselbe Konzept gilt für Objekte, die sich bewegen, anstatt zu rotieren:

```js
const xDistanceMoved = xSpeedPerSecond * deltaTime;
const yDistanceMoved = ySpeedPerSecond * deltaTime;
const ZDistanceMoved = zSpeedPerSecond * deltaTime;
```

`xSpeedPerSecond`, `ySpeedPerSecond` und `zSpeedPerSecond` enthalten jeweils die Komponente der Geschwindigkeit des Objekts entlang jeder Achse. Mit anderen Worten, `[xDistanceMoved, yDistanceMoved, zDistanceMoved]` ist ein Vektor, der die Geschwindigkeit des Objekts darstellt.

## Zusätzliche Aufgaben im Zusammenhang mit der Animation der Szene

Natürlich gibt es andere Dinge, die wahrscheinlich bei jedem Durchgang durch den Renderer geschehen müssen. Zwei der häufigsten sind die [Behandlung von Benutzereingaben](/de/docs/Web/API/WebXR_Device_API/Inputs) und das Aktualisieren der Positionen von Objekten (oder des Betrachters) basierend auf bekannten Faktoren, wie diese Benutzersteuerungszustände oder bekannten Animationspfaden der Objekte in der Szene.

### Behandlung von Benutzersteuerungseingaben

Es gibt drei Methoden, mit denen Benutzer möglicherweise Eingaben bei der Verwendung einer WebXR-Anwendung tätigen. Erstens unterstützt WebXR die direkte Verarbeitung von Eingaben von den Kontrolleuren, die in die XR-Hardware integriert sind. Diese Eingabequellen können Geräte wie Handcontroller, optische Tracking-Systeme, Beschleunigungsmesser und Magnetometer sowie andere Geräte dieser Art umfassen.

Die zweite Art von Eingaben ist ein Gamepad, das über das XR-System angeschlossen ist. Dies verwendet Schnittstellen, die vom [Gamepad API](/de/docs/Web/API/Gamepad_API) geerbt wurden, aber über WebXR mit ihnen interagiert wird.

Die dritte und letzte Art von Eingaben ist das traditionelle nicht-XR-Eingabegerät wie Tastaturen, Mäuse, Trackpads, Touchscreens und nicht-XR-Gamepads und Joysticks.

Orientierungs- und Positionsinformationen, die direkt von der XR-Hardware gesammelt werden können, werden automatisch angewendet. Daher sind es die anderen Arten von Eingaben, die Sie selbst behandeln müssen:

- Ziel- und Tastendrücke von Zeigegeräten
- Gamepad-Eingaben
- Eingaben von nicht-XR-Eingabegeräten

Um mehr darüber zu erfahren, wie man Benutzereingaben beim Präsentieren einer Szene mit WebXR behandelt, siehe den Artikel [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs).

### Aktualisieren von Objektpositionen

Die meisten (obwohl nicht alle) Szenen enthalten eine Form von Animation, in der sich Dinge bewegen und aufeinander in geeigneter Weise reagieren.

Zum Beispiel könnte ein virtuelles Realitätsspiel oder ein erweitertes Realitätsspiel nicht spielbare Charaktere enthalten, die vom Computer gesteuert werden und sich durch die Szene bewegen. Nicht nur ändern sich ihre Positionen in der Welt im Laufe der Zeit, sondern wahrscheinlich hat auch jeder NPC Körperteile oder Komponenten, die sich in Beziehung zueinander bewegen. Arme und Beine schwingen, während eine Kreatur läuft, Köpfe nicken und drehen, Haare hüpfen und schwingen, Oberkörper dehnen und ziehen sich zusammen, während der Charakter atmet.

Außerdem könnten Objekte und Strukturen in Bewegung sein. In einem Sportspiel könnte es einen Ball geben, der durch die Luft fliegt und dessen Bewegung simuliert werden muss. In Rennspielen könnte es Autos oder andere Fahrzeuge geben, mit beweglichen Teilen zur Animation, einschließlich der Räder. Wenn im Bild Wasser ist, benötigt es Wellen oder Wogen, um realistisch auszusehen. Teile von Strukturen könnten sich bewegen, wie Türen, Wände und Böden (für einige Arten von Spielen) und so weiter.

Eine weitere häufige Quelle der Bewegung ist der Spieler selbst. Nach der Interpretation der Eingaben von den Steuerungen (sowohl XR-zugehörig als auch nicht) müssen Sie diese Änderungen an der Szene anwenden, um die Bewegung des Benutzers zu simulieren. Siehe den Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion) für Details und ein umfassendes Beispiel, wie dies funktioniert.

## Nächste Schritte

Sobald Sie Ihren Renderer geschrieben haben—oder zumindest etwas haben, das funktioniert, auch wenn es nicht fertig ist—können Sie beginnen, sich mit der Kamera und ihrer Bewegung durch die Szene zu beschäftigen. Dies wird in unserem Artikel über [Blickpunkte und Betrachter](/de/docs/Web/API/WebXR_Device_API/Cameras) in WebXR behandelt.

## Siehe auch

- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Ansichten und Betrachter: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [WebXR-Performance-Leitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
