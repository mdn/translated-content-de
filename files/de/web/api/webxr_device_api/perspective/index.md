---
title: Eine perspektivische Rückschau für WebXR-Entwickler
slug: Web/API/WebXR_Device_API/Perspective
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{DefaultAPISidebar("WebXR Device API")}}

Da [WebXR](/de/docs/Web/API/WebXR_Device_API) [WebGL](/de/docs/Web/API/WebGL_API) verwendet, um die Ansichten zu rendern, die die 3D-Umgebung bilden, die mit der XR-Hardware angezeigt wird, liegt es nahe zu denken, dass die perspektivenbezogenen Angelegenheiten mit denen in jedem WebGL-Projekt identisch sind. Das ist größtenteils korrekt, aber es gibt einige spezifische Themen, die erneut betrachtet werden müssen und einige zusätzliche Richtlinien, die berücksichtigt werden sollten, um sicherzustellen, dass Ihre App korrekt aussieht und, was noch wichtiger ist, dass Ihre 3D-Welt keine Menschen durch Schwindel oder andere Effekte krank macht, die entstehen können, wenn das Gesehene nicht mit dem übereinstimmt, was das Gehirn von der Realität erwartet.

In diesem Artikel untersuchen wir Szenarien, in denen sich die Art und Weise, wie Ihr Projekt Perspektiven berechnet, anwendet und darüber nachdenkt, von Code unterscheiden kann, der für nicht-XR-Anwendungen geschrieben wurde.

## Frustrationen mit dem Sichtkegel

Jede WebXR-Sitzung, die durch ein {{domxref("XRSession")}}-Objekt dargestellt wird, bietet eine Reihe von Optionen, die konfiguriert werden können, indem ein neues {{domxref("XRRenderState")}}-Objekt erstellt und der aktualisierte Zustand aktiviert wird, indem Sie die Methode {{domxref("XRSession.updateRenderState", "updateRenderState()")}} der Sitzung aufrufen, um die aktuelle Konfiguration zu ersetzen.

Die meisten dieser Werte definieren den [Sichtkegel](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#the_viewing_frustum) des XR-Geräts, das heißt, den Teil des visuellen Feldes des Geräts, der gerendert werden soll. Der Sichtkegel kann durch vier Schlüsseldatenpunkte dargestellt werden: den Sichtfeldwinkel, das {{glossary("aspect ratio", "Seitenverhältnis")}} des gerenderten Bildes und die Entfernungen zu den nahen und fernen Clipping-Ebenen.

### Willkommen in der Projektionsmatrix

Meistens wird das Perspektivprojektionsmodell verwendet, daher wird seine Projektionsmatrix als **[Perspektivprojektionsmatrix](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#perspective_projection_matrix)** bezeichnet. Diese Matrix wird verwendet, um jedes Pixel aus der 3D-Virtualwelt auf einen Punkt im 2D-Backbuffer für die gerenderte Ansicht zu kartieren.

Unter normalen Umständen können und sollten Sie die Perspektivprojektionsmatrix direkt von der Ansicht, die Sie rendern, erhalten. Die {{domxref("XRView")}}-Eigenschaft {{domxref("XRView.projectionMatrix", "projectionMatrix")}} des Objekts enthält die Projektionsmatrix, die die Perspektive der Ansicht darstellt und sollte fast immer unverändert verwendet werden. Änderungen an der von `XRView` bereitgestellten Projektionsmatrix führen wahrscheinlich zu Verzerrungen oder schlechter Ausrichtung der gerenderten Inhalte im Vergleich zu den realen Szenen; dies könnte signifikant genug sein, um bei mindestens einigen Ihrer Benutzer [Virtual Reality Sickness](https://en.wikipedia.org/wiki/Virtual_reality_sickness) zu verursachen.

Zum Beispiel, wenn Ihre App einen WebGL-Uniform namens `uProjectionMatrix` verwendet, um die Projektionsmatrix an Ihre Shader weiterzugeben, könnten Sie Code wie diesen verwenden, um die Projektionsmatrix für die aktuell gerenderte `view` zu übergeben:

```js
gl.uniformMatrix4fv(uProjectionMatrix, false, view.projectionMatrix);
```

### Anpassung der Projektionsmatrix

Obwohl Sie normalerweise vermeiden sollten, die von der Ansicht bereitgestellte Projektionsmatrix manuell zu erstellen oder zu ändern, können Sie dies unter bestimmten Umständen tun. Der häufigste Grund, warum es sinnvoll sein könnte, dies zu tun, ist die Änderung der Entfernungen zu den nahen und fernen Clipping-Ebenen, um die Anzahl der zu rendernden Polygone aus Leistungsgründen zu erhöhen oder zu reduzieren. Wenn Spiele Präferenzen bieten, um die Sichtweite anzupassen, wird dies durch Ändern dieser Ebendistanzwerte erreicht.

Im immersiven Modus bezieht das WebXR-System den Standard-[Sichtkegel](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#the_viewing_frustum) aus der von den Hardwareanbietern bereitgestellten Software. Dieser Sichtkegel basiert auf einer Kombination aus den Linsen des Geräts, der Display-Hardware und den Kameras. Alles, von der Größe des Bildsensors bis zur Brennweite der Linse, ist in diese Berechnung einbezogen.

Immersive Erfahrungen verwenden hardwaredefinierte Sichtfelder, Brennweiten usw., sodass Sie beim Verwenden einer immersiven Sitzung nur die Entfernungen für die nahen und fernen Clipping-Ebenen ändern können. Dies wird durch Setzen der Werte der `XRRenderState`-Eigenschaften {{domxref("XRRenderState.depthNear", "depthNear")}} und {{domxref("XRRenderState.depthFar", "depthFar")}} erreicht.

Im Inline-Modus können Sie das Sichtfeld auch direkt ändern, indem Sie den Wert der Eigenschaft {{domxref("XRSession.renderState", "renderState")}}'s {{domxref("XRRenderState.inlineVerticalFieldOfView", "inlineVerticalFieldOfView")}} setzen. Diese Eigenschaft muss für jede immersive Sitzung auf `null` gesetzt werden.

Sobald Sie den Sichtkegel haben, können Sie die Perspektivprojektionsmatrix berechnen, die WebGL beim Rendern der Szene verwendet, indem Sie eine Funktion wie diese verwenden:

```js
function makePerspectiveMatrix(fieldOfViewInRadians, aspectRatio, near, far) {
  const f = 1.0 / Math.tan(fieldOfViewInRadians / 2);
  const rangeInv = 1 / (near - far);

  return [
    f / aspectRatio,
    0,
    0,
    0,
    0,
    f,
    0,
    0,
    0,
    0,
    (near + far) * rangeInv,
    -1,
    0,
    0,
    near * far * rangeInv * 2,
    0,
  ];
}
```

Die Werte von `near` und `far` werden direkt aus dem Sichtkegel bezogen; sie sind die Entfernung vom Ursprung zum nächstgelegenen Punkt auf der nahen Clipping-Ebene und der fernen Clipping-Ebene. Das Seitenverhältnis ist der Wert, der durch Teilen der Breite des Sichtfeldes durch seine Höhe erhalten wird. Wenn das Ziel-Display ein Seitenverhältnis von 16:9 verwendet, sollte der für `aspectRatio` verwendete Wert `16/9` oder 1.7777777778 sein.

Wenn Sie eine Bibliothek oder ein Framework verwenden, das Matrix-Mathematik-Funktionen bietet, wird es fast sicher eine ähnliche Funktion enthalten. Zum Beispiel finden Sie in der beliebten [glMatrix](https://glmatrix.net/) Bibliothek diese Funktion in [`mat4.perspective()`](https://glmatrix.net/docs/module-mat4.html#.perspective).

Egal, woher sie kommt, sobald Sie die Projektionsmatrix haben, können Sie sie verwenden, wenn Sie WebGL aufrufen, um Ihre Szene zu rendern.

## Anpassung an die Realität

In Augmented Reality (AR)-Anwendungen werden die von Ihnen gerenderten Inhalte über die reale Welt gelegt. Um dies gut zu machen, müssen Ihre Perspektivenberechnungen mit der Perspektive des Betrachters auf die umgebende Welt übereinstimmen. Wenn Sie dies nicht tun, werden Ihre Objekte nicht korrekt mit der Realität übereinstimmen.

Wenn die Perspektivprojektionsmatrix Ihrer virtuellen Kamera nicht dazu führt, dass virtuelle Objekte denselben scheinbaren Perspektive wie die reale Welt haben, könnte die Diskrepanz zwischen der virtuellen und der physischen Welt irritierend oder, schlimmer noch, Schwindel, Motion Sickness oder andere Unannehmlichkeiten bei den Benutzern Ihrer App verursachen.

Ein verwandtes Problem ist, dass, wenn Sie Ihre Perspektivmatrix verwenden, um zu bestimmen, wo Objekte platziert werden sollen, eine Diskrepanz zwischen Ihrer Perspektivprojektionsmatrix und der physischen Perspektive des Benutzers auf die Welt dazu führen könnte, dass die Objekte nicht genau positioniert werden. Wenn Ihre App es dem Benutzer ermöglicht, virtuelle Gemälde an ihren Wänden aufzuhängen, die Perspektivmatrix jedoch nicht übereinstimmt, könnten die platzierten Gemälde letztendlich nicht tatsächlich an der Wand sein, teilweise die Wand durchdringen oder mit einem Ende näher an der Wand als das andere, anstatt ordnungsgemäß parallel zur Wand zu sein.

## Siehe auch

- [WebGL Modellansichtsprojektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Ansichten und Betrachter: Kamerasimulationen in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
