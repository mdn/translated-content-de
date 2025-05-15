---
title: Beleuchtung in WebGL
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

Wie mittlerweile klar sein sollte, hat WebGL nicht viel eingebautes Wissen. Es führt lediglich zwei von Ihnen bereitgestellte Funktionen aus — einen Vertex-Shader und einen Fragment-Shader — und erwartet, dass Sie kreative Funktionen schreiben, um die gewünschten Ergebnisse zu erzielen. Mit anderen Worten, wenn Sie Beleuchtung wollen, müssen Sie sie selbst berechnen. Zum Glück ist das nicht allzu schwer, und dieser Artikel wird einige Grundlagen abdecken.

## Simulation von Beleuchtung und Schattierung in 3D

Obwohl es weit über den Umfang dieses Artikels hinausgeht, die Theorie der simulierten Beleuchtung in 3D-Grafiken im Detail zu besprechen, ist es hilfreich, ein wenig darüber zu wissen, wie sie funktioniert. Anstatt dies hier ausführlich zu diskutieren, werfen Sie einen Blick auf den Artikel über das [Phong Shading](https://de.wikipedia.org/wiki/Phong-Shading) auf Wikipedia, der einen guten Überblick über das am häufigsten verwendete Beleuchtungsmodell bietet. Oder wenn Sie eine auf WebGL basierende Erklärung sehen möchten, lesen Sie [WebGL 3D - Punktbeleuchtung](https://webglfundamentals.org/webgl/lessons/webgl-3d-lighting-point.html).

Es gibt drei grundlegende Arten von Beleuchtung:

**Umgebungslicht** ist das Licht, das die Szene durchdringt; es ist nicht richtungsbezogen und wirkt sich unabhängig von der Ausrichtung gleich auf jede Fläche in der Szene aus.

**Richtungslicht** ist Licht, das aus einer bestimmten Richtung ausgestrahlt wird. Dies ist Licht, das von so weit entfernt kommt, dass jeder Lichtstrahl parallel zu allen anderen Lichtstrahlen verläuft. Sonnenlicht gilt beispielsweise als Richtungslicht.

**Punktlicht** ist Licht, das von einem Punkt aus ausgestrahlt wird und sich in alle Richtungen ausbreitet. So funktionieren viele Lichtquellen in der realen Welt. Eine Glühbirne strahlt beispielsweise Licht in alle Richtungen aus.

Für unsere Zwecke werden wir das Beleuchtungsmodell vereinfachen, indem wir nur einfaches Richtungs- und Umgebungslicht in Betracht ziehen; in dieser Szene werden wir keine [spekularen Highlights](https://de.wikipedia.org/wiki/Specular_highlight) oder Punktlichtquellen haben. Stattdessen werden wir unser Umgebungslicht plus eine einzelne Richtungslichtquelle haben, die auf den rotierenden Würfel aus der [vorherigen Demo](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) zielt.

Sobald Sie das Konzept von Punktquellen und spekulärer Beleuchtung weglassen, gibt es zwei Informationen, die wir benötigen, um unsere Richtungsbeleuchtung zu implementieren:

1. Wir müssen ein **Oberflächennormalen** mit jedem Vertex assoziieren. Dies ist ein Vektor, der zur Fläche an diesem Vertex senkrecht steht.
2. Wir müssen die Richtung kennen, in die das Licht reist; dies wird durch den **Richtungsvektor** definiert.

Dann aktualisieren wir den Vertex-Shader, um die Farbe jedes Vertex anzupassen, wobei die Umgebungsbeleuchtung sowie die Wirkung der Richtungsbeleuchtung berücksichtigt werden, gegeben dem Winkel, unter dem sie auf die Fläche trifft. Wir werden sehen, wie das funktioniert, wenn wir uns den Code für den Shader ansehen.

## Erstellen der Normalen für die Vertices

Das Erste, was wir tun müssen, ist, das Array der Normalen für alle Vertices zu generieren, die unseren Würfel bilden. Da ein Würfel ein sehr einfaches Objekt ist, ist das leicht zu tun; offensichtlich wird es für komplexere Objekte aufwendiger sein, die Normalen zu berechnen.

> [!NOTE]
> Fügen Sie diese Funktion Ihrem "init-buffer.js"-Modul hinzu:

```js
function initNormalBuffer(gl) {
  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

  const vertexNormals = [
    // Front
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,

    // Back
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

    // Top
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,

    // Bottom
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

    // Right
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,

    // Left
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
  ];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(vertexNormals),
    gl.STATIC_DRAW,
  );

  return normalBuffer;
}
```

Das sollte mittlerweile ziemlich vertraut aussehen; wir erstellen einen neuen Puffer, binden ihn als den Puffer, mit dem wir arbeiten, und senden dann unser Array von Vertex-Normalen in den Puffer, indem wir `bufferData()` aufrufen.

Wie zuvor haben wir `initBuffers()` aktualisiert, um unsere neue Funktion aufzurufen und den von ihr erstellten Puffer zurückzugeben.

> [!NOTE]
> Fügen Sie am Ende Ihrer `initBuffers()`-Funktion den folgenden Code hinzu, der die bestehende `return`-Anweisung ersetzt:

```js
const normalBuffer = initNormalBuffer(gl);

return {
  position: positionBuffer,
  normal: normalBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

Dann fügen wir den Code zum "draw-scene.js"-Modul hinzu, um das Normalen-Array an ein Shader-Attribut zu binden, damit der Shader-Code darauf zugreifen kann.

> [!NOTE]
> Fügen Sie diese Funktion Ihrem "draw-scene.js"-Modul hinzu:

```js
// Tell WebGL how to pull out the normals from
// the normal buffer into the vertexNormal attribute.
function setNormalAttribute(gl, buffers, programInfo) {
  const numComponents = 3;
  const type = gl.FLOAT;
  const normalize = false;
  const stride = 0;
  const offset = 0;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexNormal,
    numComponents,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal);
}
```

> [!NOTE]
> Fügen Sie diese Zeile der `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls hinzu, direkt vor der `gl.useProgram()`-Zeile:

```js
setNormalAttribute(gl, buffers, programInfo);
```

Schließlich müssen wir den Code aktualisieren, der die einheitlichen Matrizen erstellt, um dem Shader eine **Normalenmatrix** zu generieren und zu übergeben, die zur Transformation der Normalen in Bezug auf die aktuelle Ausrichtung des Würfels zur Lichtquelle verwendet wird.

> [!NOTE]
> Fügen Sie den folgenden Code zur `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls hinzu, direkt nach den drei `mat4.rotate()`-Aufrufen:

```js
const normalMatrix = mat4.create();
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

> [!NOTE]
> Fügen Sie den folgenden Code zur `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls hinzu, direkt nach den zwei vorhergehenden `gl.uniformMatrix4fv()`-Aufrufen:

```js
gl.uniformMatrix4fv(
  programInfo.uniformLocations.normalMatrix,
  false,
  normalMatrix,
);
```

## Aktualisieren der Shader

Jetzt, da alle Daten, die die Shader benötigen, verfügbar sind, müssen wir den Code in den Shadern selbst aktualisieren.

### Der Vertex-Shader

Das Erste, was zu tun ist, ist den Vertex-Shader so zu aktualisieren, dass er einen Schattierungswert für jeden Vertex generiert, basierend auf der Umgebungsbeleuchtung sowie der Richtungsbeleuchtung.

> [!NOTE]
> Aktualisieren Sie die `vsSource`-Deklaration in Ihrer `main()`-Funktion wie folgt:

```js
const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec3 aVertexNormal;
    attribute vec2 aTextureCoord;

    uniform mat4 uNormalMatrix;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;

      // Apply lighting effect

      highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
      highp vec3 directionalLightColor = vec3(1, 1, 1);
      highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));

      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

      highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
      vLighting = ambientLight + (directionalLightColor * directional);
    }
  `;
```

Sobald die Position des Vertex berechnet ist und wir die Koordinaten des {{Glossary("texel", "Texel")}}, der dem Vertex entspricht, an den Fragment-Shader übergeben haben, können wir daran arbeiten, die Schattierung für den Vertex zu berechnen.

Das erste, was wir tun, ist das Transformieren der Normalen basierend auf der aktuellen Ausrichtung des Würfels durch Multiplikation der Normalen des Vertex mit der Normalenmatrix. Dann können wir die Menge an Richtungsbeleuchtung berechnen, die auf den Vertex angewendet werden muss, indem wir das Skalarprodukt der transformierten Normalen und des Richtungsvektors berechnen (das heißt, die Richtung, aus der das Licht kommt). Wenn dieser Wert kleiner als null ist, setzen wir den Wert auf null, da es nicht weniger als null Licht geben kann.

Sobald die Menge an Richtungsbeleuchtung berechnet ist, können wir den Beleuchtungswert generieren, indem wir das Umgebungslicht nehmen und das Produkt aus der Farbe des Richtungslichts und der Menge an bereitzustellender Richtungsbeleuchtung hinzufügen. Als Ergebnis haben wir jetzt einen RGB-Wert, der vom Fragment-Shader verwendet wird, um die Farbe jedes von uns gerenderten Pixels anzupassen.

### Der Fragment-Shader

Der Fragment-Shader muss jetzt aktualisiert werden, um den vom Vertex-Shader berechneten Beleuchtungswert zu berücksichtigen.

> [!NOTE]
> Aktualisieren Sie die `fsSource`-Deklaration in Ihrer `main()`-Funktion wie folgt:

```js
const fsSource = `
    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    uniform sampler2D uSampler;

    void main(void) {
      highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

      gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
    }
  `;
```

Hier holen wir die Farbe des Texels, so wie wir es im vorherigen Beispiel getan haben, aber bevor wir die Farbe des Fragments setzen, multiplizieren wir die Texelfarbe mit dem Beleuchtungswert, um die Texelfarbe anzupassen und den Einfluss unserer Lichtquellen zu berücksichtigen.

Das einzig Verbleibende ist, den Ort des `aVertexNormal`-Attributes und der `uNormalMatrix`-Uniform zu ermitteln.

> [!NOTE]
> Aktualisieren Sie die `programInfo`-Deklaration in Ihrer `main()`-Funktion wie folgt:

```js
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    vertexNormal: gl.getAttribLocation(shaderProgram, "aVertexNormal"),
    textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    normalMatrix: gl.getUniformLocation(shaderProgram, "uNormalMatrix"),
    uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
  },
};
```

Und das war's!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample7/index.html', 670, 510) }}

[Vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample7) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample7/)

## Übungen für den Leser

Offensichtlich ist dies ein einfaches Beispiel, das grundlegende per-Vertex-Beleuchtung implementiert. Für fortgeschrittenere Grafiken möchten Sie per-Pixel-Beleuchtung implementieren, aber das wird Sie auf den richtigen Weg bringen.

Sie könnten auch versuchen, mit der Richtung der Lichtquelle, den Farben der Lichtquellen und so weiter zu experimentieren.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}
