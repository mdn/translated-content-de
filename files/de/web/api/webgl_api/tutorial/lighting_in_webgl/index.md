---
title: Beleuchtung in WebGL
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

Wie mittlerweile klar sein sollte, hat WebGL nicht viel eingebautes Wissen. Es führt lediglich zwei von Ihnen bereitgestellte Funktionen aus — einen Vertex-Shader und einen Fragment-Shader — und erwartet, dass Sie kreative Funktionen schreiben, um die gewünschten Ergebnisse zu erzielen. Mit anderen Worten, wenn Sie eine Beleuchtung wünschen, müssen Sie diese selbst berechnen. Glücklicherweise ist dies nicht allzu schwer zu tun, und dieser Artikel wird einige der Grundlagen behandeln.

## Simulation von Beleuchtung und Schattierung in 3D

Obwohl es weit über den Rahmen dieses Artikels hinausgeht, sich mit der Theorie der simulierten Beleuchtung in 3D-Grafiken zu beschäftigen, ist es hilfreich, ein wenig darüber zu wissen, wie sie funktioniert. Anstatt das hier ausführlich zu diskutieren, sehen Sie sich den Artikel über [Phong-Shading](https://en.wikipedia.org/wiki/Phong_shading) bei Wikipedia an, der einen guten Überblick über das am häufigsten verwendete Beleuchtungsmodell bietet, oder wenn Sie eine WebGL-basierte Erklärung sehen möchten, [lesen Sie diesen Artikel](https://webglfundamentals.org/webgl/lessons/webgl-3d-lighting-point.html).

Es gibt drei grundlegende Arten von Beleuchtung:

**Umgebungslicht** ist das Licht, das die Szene durchdringt; es ist ungerichtet und beeinflusst jede Fläche in der Szene gleichermaßen, unabhängig davon, in welche Richtung sie zeigt.

**Richtungslicht** ist Licht, das aus einer bestimmten Richtung emittiert wird. Dies ist Licht, das so weit entfernt ist, dass jedes Photon parallel zu jedem anderen Photon verläuft. Sonnenlicht wird beispielsweise als Richtungslicht betrachtet.

**Punktlicht** ist Licht, das von einem Punkt in alle Richtungen abstrahlt. So funktionieren viele reale Lichtquellen. Eine Glühbirne emittiert beispielsweise Licht in alle Richtungen.

Für unsere Zwecke werden wir das Beleuchtungsmodell vereinfachen, indem wir nur einfaches Richtungs- und Umgebungslicht betrachten; wir werden keine [spekularen Highlights](https://en.wikipedia.org/wiki/Specular_highlights) oder Punktlichtquellen in dieser Szene haben. Stattdessen werden wir unser Umgebungslicht und eine einzige Richtungslichtquelle haben, die auf den rotierenden Würfel aus der [vorherigen Demo](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) gerichtet ist.

Sobald Sie das Konzept der Punktquellen und der spekularen Beleuchtung weglassen, gibt es zwei Informationen, die wir benötigen, um unsere Richtungsbeleuchtung zu implementieren:

1. Wir müssen jedem Scheitelpunkt eine **Oberflächennormalen** zuordnen. Dies ist ein Vektor, der senkrecht zur Fläche an diesem Scheitelpunkt steht.
2. Wir müssen die Richtung kennen, in die das Licht reist; diese wird durch den **Richtungsvektor** definiert.

Dann aktualisieren wir den Vertex-Shader, um die Farbe jedes Scheitelpunktes anzupassen, wobei sowohl das Umgebungslicht als auch die Wirkung des Richtungslichts unter Berücksichtigung des Winkels, in dem es auf die Fläche trifft, berücksichtigt werden. Wir werden sehen, wie das geht, wenn wir den Code für den Shader betrachten.

## Aufbau der Normalen für die Scheitelpunkte

Das Erste, was wir tun müssen, ist das Erstellen des Arrays von Normalen für alle Scheitelpunkte, aus denen unser Würfel besteht. Da ein Würfel ein sehr einfaches Objekt ist, ist dies einfach zu tun; offensichtlich ist die Berechnung der Normalen für kompliziertere Objekte aufwendiger.

> [!NOTE]
> Fügen Sie diese Funktion zu Ihrem "init-buffer.js"-Modul hinzu:

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

Das sollte mittlerweile ziemlich vertraut aussehen; wir erstellen einen neuen Buffer, binden ihn als den Buffer, mit dem wir arbeiten, und senden dann unser Array von Vertex-Normalen in den Buffer, indem wir `bufferData()` aufrufen.

Wie zuvor haben wir `initBuffers()` aktualisiert, um unsere neue Funktion aufzurufen und den von ihr erstellten Buffer zurückzugeben.

> [!NOTE]
> Fügen Sie am Ende Ihrer `initBuffers()`-Funktion den folgenden Code hinzu und ersetzen Sie die bestehende `return`-Anweisung:

```js
const normalBuffer = initNormalBuffer(gl);

return {
  position: positionBuffer,
  normal: normalBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

Dann fügen wir den Code zum "draw-scene.js"-Modul hinzu, um das Normalen-Array an ein Shader-Attribut zu binden, damit der Shader-Code auf es zugreifen kann.

> [!NOTE]
> Fügen Sie diese Funktion zu Ihrem "draw-scene.js"-Modul hinzu:

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
> Fügen Sie diese Zeile zur `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls hinzu, direkt vor der Zeile `gl.useProgram()`:

```js
setNormalAttribute(gl, buffers, programInfo);
```

Schließlich müssen wir den Code aktualisieren, der die uniformen Matrizen erstellt, um eine **Normalmatrix** zu generieren und an den Shader zu übergeben. Diese wird verwendet, um die Normalen bei der Betrachtung der aktuellen Orientierung des Würfels in Bezug auf die Lichtquelle zu transformieren.

> [!NOTE]
> Fügen Sie den folgenden Code zur `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls hinzu, direkt nach den drei `mat4.rotate()`-Aufrufen:

```js
const normalMatrix = mat4.create();
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

> [!NOTE]
> Fügen Sie den folgenden Code zur `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls hinzu, direkt nach den zwei vorherigen `gl.uniformMatrix4fv()`-Aufrufen:

```js
gl.uniformMatrix4fv(
  programInfo.uniformLocations.normalMatrix,
  false,
  normalMatrix,
);
```

## Aktualisieren der Shader

Da nun alle Daten, die die Shader benötigen, ihnen zur Verfügung stehen, müssen wir den Code in den Shadern selbst aktualisieren.

### Der Vertex-Shader

Das Erste, was zu tun ist, ist den Vertex-Shader so zu aktualisieren, dass er für jeden Scheitelpunkt einen Shading-Wert basierend auf dem Umgebungslicht und dem Richtungslicht generiert.

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

Sobald die Position des Scheitelpunkts berechnet ist und wir die Koordinaten des [Texel](/de/docs/Glossary/texel), die dem Scheitelpunkt entsprechen, an den Fragment-Shader übergeben, können wir am Shading für den Scheitelpunkt arbeiten.

Das Erste, was wir tun, ist die Normalen basierend auf der aktuellen Orientierung des Würfels zu transformieren, indem wir die Normale des Scheitelpunkts mit der Normalmatrix multiplizieren. Dann können wir die Menge des Richtungslichts berechnen, das auf den Scheitelpunkt angewendet werden muss, indem wir das Skalarprodukt der transformierten Normale und des Richtungsvektors (das heißt, die Richtung, aus der das Licht kommt) berechnen. Wenn dieser Wert kleiner als null ist, begrenzen wir den Wert auf null, da es nicht weniger als null Licht geben kann.

Sobald die Menge des Richtungslichts berechnet ist, können wir den Lichtwert generieren, indem wir das Umgebungslicht nehmen und das Produkt der Farbe des Richtungslichts und der Menge des bereitzustellenden Richtungslichts hinzufügen. Das Ergebnis ist ein RGB-Wert, der vom Fragment-Shader verwendet wird, um die Farbe jedes von uns gerenderten Pixels anzupassen.

### Der Fragment-Shader

Der Fragment-Shader muss jetzt aktualisiert werden, um den vom Vertex-Shader berechneten Lichtwert zu berücksichtigen.

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

Hier holen wir uns die Farbe des Texels, genau wie im vorherigen Beispiel, aber bevor wir die Farbe des Fragments setzen, multiplizieren wir die Farbe des Texels mit dem Lichtwert, um die Farbe des Texels anzupassen und den Effekt unserer Lichtquellen zu berücksichtigen.

Das Einzige, was noch zu tun ist, ist das Suchen der Position des `aVertexNormal`-Attributs und der `uNormalMatrix` Uniform.

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

[Vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample7) | [Dieses Demo in einem neuen Fenster öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample7/)

## Übungen für die Leser

Offensichtlich ist dies ein einfaches Beispiel, das grundlegende per-Vertex Beleuchtung implementiert. Für fortgeschrittenere Grafiken möchten Sie per-Pixel Beleuchtung implementieren, aber das wird Ihnen den richtigen Weg weisen.

Sie könnten auch mit der Richtung der Lichtquelle, den Farben der Lichtquellen und so weiter experimentieren.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}
