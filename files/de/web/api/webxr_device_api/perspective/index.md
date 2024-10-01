---
title: Eine perspektivische Rückschau für WebXR-Entwickler
slug: Web/API/WebXR_Device_API/Perspective
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{DefaultAPISidebar("WebXR Device API")}}

Da [WebXR](/de/docs/Web/API/WebXR_Device_API) [WebGL](/de/docs/Web/API/WebGL_API) verwendet, um die Ansichten zu rendern, die die 3D-Umgebung bilden, die mit der XR-Hardware angezeigt wird, könnte man leicht denken, dass die perspektivbezogenen Aspekte identisch mit denen in jedem WebGL-Projekt sind. Dies ist größtenteils zutreffend, aber es gibt einige spezifische Themen, die überdacht werden müssen, sowie einige zusätzliche kleinere Richtlinien, die berücksichtigt werden sollten, um sicherzustellen, dass Ihre App richtig aussieht und, was noch wichtiger ist, dass Ihre 3D-Welt den Nutzern kein Unwohlsein durch Schwindel oder andere Effekte verursacht, wenn das Gesehene nicht mit dem übereinstimmt, was das Gehirn in der Realität erwartet.

In diesem Artikel untersuchen wir Szenarien, in denen sich die Berechnung, Anwendung und Betrachtung der Perspektive in Ihrem Projekt von Code für nicht-XR-Anwendungen unterscheiden kann.

## Frustrationen mit dem Sichtfrustum

Jede WebXR-Sitzung, repräsentiert durch ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt, bietet eine Reihe von Optionen, die konfiguriert werden können, indem ein neuer [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Objekt erstellt und der aktualisierte Zustand aktiviert wird, indem die `updateRenderState()`-Methode der Sitzung aufgerufen wird, um die aktuelle Konfiguration zu ersetzen.

Die Mehrheit dieser Werte definiert das [Sichtfrustum](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#the_viewing_frustum) des XR-Geräts; das heißt, den Teil des Sichtfelds des Geräts, der gerendert werden soll. Das Sichtfrustum kann anhand von vier Schlüsseldatenpunkten dargestellt werden: dem Betrachtungswinkel des Sichtfelds, dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} des gerenderten Bildes sowie den Abständen zu den nahen und fernen Clipping-Ebenen.

### Willkommen zur Projektionsmatrix

Meistens werden Sie das perspektivische Projektionsmodell verwenden, weshalb seine Projektionsmatrix als **[perspektivische Projektionsmatrix](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#perspective_projection_matrix)** bekannt ist. Diese Matrix wird verwendet, um jedes Pixel aus der 3D-Virtualwelt auf eine Punkt im 2D-Backbuffer für die darzustellende Ansicht zu projizieren.

Unter typischen Umständen sollten Sie die perspektivische Projektionsmatrix direkt aus der von Ihnen gerenderten Ansicht beziehen. Die `XRView`-Objekt-Eigenschaft [`projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) enthält die Projektionsmatrix, die die Perspektive der Ansicht darstellt und fast immer unverändert verwendet werden sollte. Änderungen an der von `XRView` bereitgestellten Projektionsmatrix führen wahrscheinlich zu einer Verzerrung oder schlechten Ausrichtung des gerenderten Inhalts im Verhältnis zur realen Szenerie; dies könnte signifikant genug sein, um bei mindestens einigen Ihrer Benutzer [virtuelle Realität-Krankheit](https://en.wikipedia.org/wiki/Virtual_reality_sickness) zu verursachen.

Zum Beispiel, wenn Ihre App einen WebGL-Uniform namens `uProjectionMatrix` verwendet, um die Projektionsmatrix an Ihre Shader zu übergeben, könnten Sie zum Übergeben der Projektionsmatrix für die derzeit gerenderte `view` den folgenden Code verwenden:

```js
gl.uniformMatrix4fv(uProjectionMatrix, false, view.projectionMatrix);
```

### Anpassung der Projektionsmatrix

Obwohl Sie normalerweise das manuelle Erstellen oder Ändern der Projektionsmatrix der Ansicht vermeiden sollten, so gibt es doch einige Situationen, in denen dies sinnvoll sein kann. Der häufigste Grund dafür ist, die Abstände der Nah- und Fern-Clipping-Ebenen anzupassen, um die Anzahl der zu rendernden Polygone aus Leistungsgründen zu erhöhen oder zu verringern. Wenn Spiele Präferenzen zur Anpassung der Sichtweite bieten, wird dies durch Ändern dieser Ebenenabstandswerte erreicht.

Im immersiven Modus bezieht das WebXR-System das Standard-[Sichtfrustum](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#the_viewing_frustum) von der durch den Hardware-Anbieter bereitgestellten Software. Dieses Sichtfrustum basiert auf einer Kombination der Linsen, der Anzeigehardware und der Kameras des Geräts. Alles, vom Format des Bildsensors bis zur Brennweite des Objektivs, ist in dieser Berechnung beteiligt.

Immersive Erfahrungen nutzen hardwaredefinierte Sichtfeldgrößen, Brennweiten usw., weshalb Sie bei der Verwendung einer immersiven Sitzung nur die Abstände der Nah- und Fern-Clipping-Ebenen ändern können. Dies geschieht durch Setzen der Werte der `XRRenderState`-Eigenschaften [`depthNear`](/de/docs/Web/API/XRRenderState/depthNear) und [`depthFar`](/de/docs/Web/API/XRRenderState/depthFar).

Im Inline-Modus können Sie auch das Sichtfeld direkt ändern, indem Sie den Wert der [`renderState`](/de/docs/Web/API/XRSession/renderState)-Eigenschaft [`inlineVerticalFieldOfView`](/de/docs/Web/API/XRRenderState/inlineVerticalFieldOfView) setzen. Diese Eigenschaft muss für jede immersive Sitzung auf `null` gesetzt sein.

Sobald Sie das Sichtfrustum haben, können Sie die perspektivische Projektionsmatrix, die WebGL beim Rendern der Szene verwendet, mit einer Funktion wie dieser berechnen:

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

Die Werte von `near` und `far` werden direkt aus dem Frustum abgeleitet; sie sind der Abstand vom Ursprung zum nächsten Punkt auf der Nah-Clipping-Ebene bzw. zur Fern-Clipping-Ebene. Das Seitenverhältnis ergibt sich aus der Division der Breite des Sichtfelds durch dessen Höhe. Wenn das Ziel-Display ein Seitenverhältnis von 16:9 verwendet, sollte der für `aspectRatio` verwendete Wert 16/9 oder 1.7777777778 sein.

Wenn Sie eine Bibliothek oder ein Framework verwenden, das Matrix-Mathematikfunktionen bereitstellt, wird es mit ziemlicher Sicherheit eine ähnliche Funktion enthalten. Zum Beispiel finden Sie in der beliebten [glMatrix](https://glmatrix.net/) Bibliothek diese Funktion unter [`mat4.perspective()`](https://glmatrix.net/docs/module-mat4.html#.perspective).

Unabhängig davon, wo sie herkommt, können Sie die Projektionsmatrix verwenden, wenn Sie WebGL aufrufen, um Ihre Szene zu rendern.

## Ausrichtung mit der Realität

In Augmented Reality (AR) Anwendungen werden die von Ihnen gerenderten Inhalte über die reale Welt gelegt. Um dies gut zu machen, müssen Ihre Perspektivberechnungen mit der Perspektive des Betrachters auf die ihn umgebende Welt übereinstimmen. Ansonsten werden Ihre Objekte nicht korrekt mit der Realität in Einklang stehen.

Wenn die perspektivische Projektionsmatrix Ihrer virtuellen Kamera nicht dazu führt, dass virtuelle Objekte den gleichen scheinbaren Perspektive wie die reale Welt haben, könnte die Abweichung zwischen der virtuellen und der physischen Welt verstörend oder, noch schlimmer, Schwindel, Übelkeit oder andere Formen von Unwohlsein bei den Nutzern Ihrer App verursachen.

Ein verwandtes Problem ist, dass wenn Sie Ihre Perspektivmatrix verwenden, um zu bestimmen, wo Objekte platziert werden sollen, ein Missverhältnis zwischen Ihrer perspektivischen Projektionsmatrix und der physischen Perspektive des Nutzers auf die Welt dazu führen könnte, dass die Objekte nicht genau positioniert werden. Wenn Ihre App dem Nutzer erlaubt, virtuelle Bilder an seinen Wänden aufzuhängen, und die Perspektivmatrix nicht übereinstimmt, könnten die platzierten Bilder am Ende nicht tatsächlich an der Wand sein, teilweise in die Wand hineinragen, oder mit einem Ende näher an der Wand als das andere, anstatt korrekt parallel zur Wand zu sein.

## Siehe auch

- [WebGL Modellansicht Projektionsmatrix](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Ansichten und Betrachter: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
