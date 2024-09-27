---
title: Eine perspektivische Rückschau für WebXR-Entwickler
slug: Web/API/WebXR_Device_API/Perspective
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{DefaultAPISidebar("WebXR Device API")}}

Da [WebXR](/de/docs/Web/API/WebXR_Device_API) [WebGL](/de/docs/Web/API/WebGL_API) verwendet, um die Ansichten zu rendern, die die 3D-Umgebung bilden, die mithilfe der XR-Hardware angezeigt wird, ist es leicht zu denken, dass die perspektivenbezogenen Angelegenheiten identisch mit denen eines jeden WebGL-Projekts sind. Dies ist weitgehend zutreffend, es gibt jedoch ein paar spezifische Themen, die überdacht werden müssen, und einige kleinere zusätzliche Richtlinien, die berücksichtigt werden sollten, um sicherzustellen, dass Ihre App korrekt aussieht und vor allem, dass Ihre 3D-Welt keine Übelkeit durch Schwindel oder andere Effekte verursacht, die auftreten können, wenn das Gesehene nicht mit dem übereinstimmt, was das Gehirn von der Realität erwartet.

In diesem Artikel untersuchen wir Szenarien, in denen sich die Berechnung, Anwendung und Betrachtung der Perspektive in Ihrem Projekt von Code unterscheiden kann, der für Nicht-XR-Anwendungen geschrieben wurde.

## Betrachtungsfrustum-Frustrationen

Jede WebXR-Sitzung, die durch ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt repräsentiert wird, bietet eine Reihe von Optionen, die konfiguriert werden können, indem ein neues [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Objekt erstellt und der aktualisierte Zustand durch Aufruf der Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) der Sitzung aktiviert wird, um die aktuelle Konfiguration zu ersetzen.

Die Mehrheit dieser Werte definiert das [Betrachtungsfrustum](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#the_viewing_frustum) des XR-Geräts; das heißt, den Teil des Sichtfeldes des Geräts, der gerendert werden soll. Das Betrachtungsfrustum kann anhand von vier entscheidenden Datenpunkten dargestellt werden: dem Sichtfeldwinkel, dem [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des gerenderten Bildes und den Abständen zu den nahen und fernen Clipping-Ebenen.

### Willkommen bei der Projektionsmatrix

In den meisten Fällen verwenden Sie das Perspektivprojektionsmodell, daher wird seine Projektionsmatrix als **[perspektivische Projektionsmatrix](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#perspective_projection_matrix)** bezeichnet. Diese Matrix wird verwendet, um jeden Pixel aus der virtuellen 3D-Welt auf einen Punkt im 2D-Backbuffer für die gerenderte Ansicht abzubilden.

Unter normalen Umständen sollten Sie die perspektivische Projektionsmatrix direkt von der Ansicht verwenden, die Sie rendern. Die `projectionMatrix`-Eigenschaft des [`XRView`](/de/docs/Web/API/XRView)-Objekts enthält die Projektionsmatrix, die die Perspektive der Ansicht darstellt, und sollte fast immer unverändert verwendet werden. Änderungen an der von `XRView` bereitgestellten Projektionsmatrix führen wahrscheinlich zu Verzerrungen oder einer schlechten Ausrichtung des gerenderten Inhalts im Verhältnis zur realen Szenerie; dies könnte erheblich genug sein, um bei mindestens einigen Ihrer Benutzer [VR-Übelkeit](https://en.wikipedia.org/wiki/Virtual_reality_sickness) zu verursachen.

Beispielsweise, wenn Ihre App ein WebGL-Uniform mit dem Namen `uProjectionMatrix` verwendet, um die Projektionsmatrix an Ihre Shader zu übergeben, könnten Sie Code wie diesen verwenden, um die Projektionsmatrix für die derzeit gerenderte `view` zu übergeben:

```js
gl.uniformMatrix4fv(uProjectionMatrix, false, view.projectionMatrix);
```

### Anpassung der Projektionsmatrix

Obwohl Sie normalerweise vermeiden sollten, die von der Ansicht bereitgestellte Projektionsmatrix manuell zu erstellen oder zu ändern, können Sie dies in einigen Situationen tun. Der häufigste Grund, aus dem dies sinnvoll sein könnte, ist die Anpassung der Distanzen der nahen und fernen Clipping-Ebene, um die Anzahl der zu rendernden Polygone aus Leistungsgründen zu erhöhen oder zu verringern. Wenn Spiele Einstellungen für die Anpassung der Sichtweite anbieten, geschieht dies durch Ändern dieser Flächenabstands-Werte.

Im Immersive-Modus bezieht das WebXR-System das Standard-[Betrachtungsfrustum](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection#the_viewing_frustum) von der vom Hardwareanbieter bereitgestellten Software. Dieses Betrachtungsfrustum basiert auf einer Kombination aus den Linsen des Geräts, der Anzeigetechnologie und den Kameras. Alles von der Größe des Bildsensors bis zur Brennweite der Linse spielt bei dieser Berechnung eine Rolle.

Immersive Erlebnisse verwenden hardwaredefinierte Sichtfelder, Brennweiten und dergleichen, daher können Sie bei der Verwendung einer immersiven Sitzung nur die nahen und fernen Clipping-Distanzen ändern. Dies wird durch Einstellen der Werte der `XRRenderState`-Eigenschaften [`depthNear`](/de/docs/Web/API/XRRenderState/depthNear) und [`depthFar`](/de/docs/Web/API/XRRenderState/depthFar) erreicht.

Im Inline-Modus können Sie das Sichtfeld auch direkt ändern, indem Sie den Wert der [`renderState`](/de/docs/Web/API/XRSession/renderState)'s [`inlineVerticalFieldOfView`](/de/docs/Web/API/XRRenderState/inlineVerticalFieldOfView)-Eigenschaft einstellen. Diese Eigenschaft muss für jede immersive Sitzung auf `null` gesetzt werden.

Sobald Sie das Betrachtungsfrustum haben, können Sie die perspektivische Projektionsmatrix berechnen, die WebGL verwendet, um die Szene mit einer Funktion wie dieser zu rendern:

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

Die Werte von `near` und `far` werden direkt aus dem Frustum abgeleitet; sie sind der Abstand vom Ursprung zum nächsten Punkt auf der nahen Clipping-Ebene und zur fernen Clipping-Ebene. Das Seitenverhältnis ist der Wert, der sich aus der Division der Breite des Sichtfelds durch seine Höhe ergibt. Wenn das Ziel-Display ein 16:9-Seitenverhältnis verwendet, sollte der für `aspectRatio` verwendete Wert `16/9` oder 1,7777777778 sein.

Wenn Sie eine Bibliothek oder ein Framework verwenden, das Matrix-Mathematik-Funktionen bereitstellt, wird es mit Sicherheit eine ähnliche Funktion enthalten. Beispielsweise finden Sie im beliebten [glMatrix](https://glmatrix.net/) Library diese Funktion unter [`mat4.perspective()`](https://glmatrix.net/docs/module-mat4.html#.perspective).

Unabhängig von der Quelle, sobald Sie die Projektionsmatrix haben, können Sie sie beim Aufrufen von WebGL verwenden, um Ihre Szene zu rendern.

## Anpassung an die Realität

In Augmented-Reality-Anwendungen (AR) werden die Inhalte, die Sie rendern, über die reale Welt gelegt. Um dies gut zu machen, müssen Ihre Perspektivberechnungen mit der Perspektive des Betrachters der Umgebung übereinstimmen. Wenn nicht, werden Ihre Objekte nicht korrekt mit der Realität übereinstimmen.

Wenn die Perspektivprojektionsmatrix Ihrer virtuellen Kamera nicht dazu führt, dass virtuelle Objekte die gleiche scheinbare Perspektive wie die reale Welt haben, könnte die Diskrepanz zwischen den virtuellen und physischen Welten verwirrend sein oder, noch schlimmer, Schwindel, Bewegungsübelkeit oder andere Formen von Unbehagen bei den Benutzern Ihrer App hervorrufen.

Ein damit verbundenes Problem ist, dass wenn Sie Ihre Perspektivmatrix verwenden, um festzulegen, wo Objekte platziert werden sollen, eine Diskrepanz zwischen Ihrer Perspektivprojektionsmatrix und der physischen Perspektive des Benutzers auf die Welt dazu führen könnte, dass die Objekte nicht genau positioniert sind. Wenn Ihre App dem Benutzer ermöglicht, virtuelle Gemälde an die Wände zu hängen, beispielsweise, aber die Perspektivmatrix nicht übereinstimmt, könnten die platzierten Gemälde am Ende nicht richtig an der Wand hängen, teilweise mit der Wand verschwimmen oder ein Ende näher an der Wand sein als das andere, anstatt parallel zur Wand zu sein.

## Siehe auch

- [WebGL-Projektionsmodelle](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
- [Ansichten und Betrachter: Kamerasimulation in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
