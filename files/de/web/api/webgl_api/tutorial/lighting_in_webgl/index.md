---
title: Beleuchtung in WebGL
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

Wie Sie mittlerweile erkannt haben sollten, hat WebGL nicht viel eingebautes Wissen. Es führt lediglich zwei Funktionen aus, die Sie bereitstellen — einen Vertex-Shader und einen Fragment-Shader — und erwartet von Ihnen, kreative Funktionen zu schreiben, um die gewünschten Ergebnisse zu erzielen. Anders gesagt: Wenn Sie Beleuchtung wünschen, müssen Sie sie selbst berechnen. Glücklicherweise ist das nicht allzu schwer und dieser Artikel behandelt einige der Grundlagen.

## Simulation von Licht und Schattierung in 3D

Obwohl es weit über den Rahmen dieses Artikels hinausgeht, die Theorie hinter der simulierten Beleuchtung in 3D-Grafiken ausführlich zu erläutern, ist es hilfreich, ein wenig darüber zu wissen, wie sie funktioniert. Statt es hier im Detail zu besprechen, werfen Sie einen Blick auf den Artikel über [Phong-Shading](https://en.wikipedia.org/wiki/Phong_shading) bei Wikipedia, der einen guten Überblick über das am häufigsten verwendete Beleuchtungsmodell bietet, oder wenn Sie eine WebGL-basierte Erklärung sehen möchten, [sehen Sie sich diesen Artikel](https://webglfundamentals.org/webgl/lessons/webgl-3d-lighting-point.html) an.

Es gibt drei grundlegende Arten von Beleuchtung:

**Umgebungslicht** ist das Licht, das die Szene durchdringt; es ist ungerichtet und beeinflusst jede Fläche in der Szene gleichermaßen, unabhängig davon, wohin sie zeigt.

**Richtungslicht** ist Licht, das aus einer bestimmten Richtung ausgestrahlt wird. Dies ist Licht, das von so weit entfernt kommt, dass jedes Photon parallel zu jedem anderen Photon verläuft. Sonnenlicht beispielsweise gilt als Richtungslicht.

**Punktlicht** ist Licht, das von einem Punkt aus in alle Richtungen ausgestrahlt wird. So funktionieren viele reale Lichtquellen in der Regel. Eine Glühbirne emittiert zum Beispiel Licht in alle Richtungen.

Für unsere Zwecke werden wir das Beleuchtungsmodell vereinfachen, indem wir nur einfaches Richtungs- und Umgebungslicht in Betracht ziehen; wir werden keine [Spiegellichter](https://en.wikipedia.org/wiki/Specular_highlights) oder Punktlichtquellen in dieser Szene haben. Stattdessen werden wir unser Umgebungslicht zusammen mit einer einzigen Richtungslichtquelle haben, die auf den rotierenden Würfel aus dem [vorhergehenden Beispiel](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) gerichtet ist.

Sobald Sie das Konzept der Punktquellen und der spekularen Beleuchtung weglassen, gibt es zwei Informationen, die wir zur Implementierung unserer Richtungsbeleuchtung benötigen:

1. Wir müssen jedem Vertex eine **Flächennormale** zuordnen. Dies ist ein Vektor, der senkrecht zur Fläche an diesem Vertex steht.
2. Wir müssen die Richtung kennen, in die das Licht reist; dies wird durch den **Richtungsvector** definiert.

Dann aktualisieren wir den Vertex-Shader, um die Farbe jedes Vertexes anzupassen, indem wir das Umgebungslicht sowie den Effekt der Richtungsbeleuchtung unter Berücksichtigung des Winkels berücksichtigen, in dem sie auf die Fläche trifft. Wir werden sehen, wie man das macht, wenn wir uns den Code für den Shader ansehen.

## Aufbau der Normalen für die Vertices

Das Erste, was wir tun müssen, ist, das Array der Normalen für alle Vertices zu generieren, die unseren Würfel bilden. Da ein Würfel ein sehr einfaches Objekt ist, ist dies leicht zu tun; offensichtlich wird die Berechnung der Normalen für komplexere Objekte aufwändiger sein.

> [!NOTE]
> Fügen Sie diese Funktion zu Ihrem "init-buffer.js"-Modul hinzu:

```js
function initNormalBuffer(gl) {
  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

  const vertexNormals = [
    // Vorderseite
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,

    // Rückseite
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

    // Oberseite
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,

    // Unterseite
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

    // Rechte Seite
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,

    // Linke Seite
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
> Fügen Sie am Ende Ihrer `initBuffers()`-Funktion den folgenden Code hinzu und ersetzen Sie die vorhandene `return`-Anweisung:

```js
const normalBuffer = initNormalBuffer(gl);

return {
  position: positionBuffer,
  normal: normalBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

Dann fügen wir den Code dem "draw-scene.js"-Modul hinzu, um das Normalen-Array an ein Shader-Attribut zu binden, damit der Shader-Code darauf zugreifen kann.

> [!NOTE]
> Fügen Sie diese Funktion zu Ihrem "draw-scene.js"-Modul hinzu:

```js
// Sagt WebGL, wie die Normalen aus dem
// Normalenpuffer in das vertexNormal-Attribut extrahiert werden.
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

Schließlich müssen wir den Code aktualisieren, der die Uniform-Matrizen erstellt, um eine **Normalenmatrix** zu generieren und an den Shader zu übertragen, die verwendet wird, um die Normalen zu transformieren, wenn es um die aktuelle Orientierung des Würfels in Bezug auf die Lichtquelle geht.

> [!NOTE]
> Fügen Sie den folgenden Code zur `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls hinzu, direkt nach den drei `mat4.rotate()`-Aufrufen:

```js
const normalMatrix = mat4.create();
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

> [!NOTE]
> Fügen Sie den folgenden Code zur `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls hinzu, direkt nach den beiden vorherigen `gl.uniformMatrix4fv()`-Aufrufen:

```js
gl.uniformMatrix4fv(
  programInfo.uniformLocations.normalMatrix,
  false,
  normalMatrix,
);
```

## Aktualisierung der Shader

Da nun alle Daten, die die Shader benötigen, verfügbar sind, müssen wir den Code in den Shadern selbst aktualisieren.

### Der Vertex-Shader

Zuerst müssen wir den Vertex-Shader aktualisieren, damit er einen Schattierungswert für jeden Vertex basierend auf der Umgebungsbeleuchtung sowie der Richtungsbeleuchtung generiert.

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

      // Beleuchtungseffekt anwenden

      highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
      highp vec3 directionalLightColor = vec3(1, 1, 1);
      highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));

      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

      highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
      vLighting = ambientLight + (directionalLightColor * directional);
    }
  `;
```

Sobald die Position des Vertexes berechnet ist, und wir die Koordinaten des {{Glossary("texel")}}, die dem Vertex entsprechen, an den Fragment-Shader weitergeben, können wir damit beginnen, die Schattierung für den Vertex zu berechnen.

Das Erste, was wir tun, ist, die Normale basierend auf der aktuellen Orientierung des Würfels zu transformieren, indem wir die Normale des Vertexes mit der Normalenmatrix multiplizieren. Dann können wir die Menge an Richtungsbeleuchtung, die auf den Vertex angewendet werden muss, berechnen, indem wir das Skalarprodukt der transformierten Normale und des Richtungsvektors (das heißt, die Richtung, aus der das Licht kommt) berechnen. Wenn dieser Wert kleiner als null ist, setzen wir den Wert auf null, da es nicht weniger als null Licht geben kann.

Sobald die Menge an Richtungsbeleuchtung berechnet ist, können wir den Beleuchtungswert generieren, indem wir das Umgebungslicht nehmen und das Produkt der Farbe des Richtungslichts und der Menge an Richtungsbeleuchtung hinzufügen. Dadurch haben wir nun einen RGB-Wert, der vom Fragment-Shader verwendet wird, um die Farbe jedes Pixels zu bearbeiten, das wir rendern.

### Der Fragment-Shader

Der Fragment-Shader muss nun aktualisiert werden, um den durch den Vertex-Shader berechneten Beleuchtungswert zu berücksichtigen.

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

Hier holen wir die Farbe des Texels, wie wir es im vorhergehenden Beispiel getan haben, aber bevor wir die Farbe des Fragments setzen, multiplizieren wir die Farbe des Texels mit dem Beleuchtungswert, um die Farbe des Texels an die Wirkung unserer Lichtquellen anzupassen.

Das Einzige, was noch zu tun bleibt, ist das Nachschlagen des Attributs `aVertexNormal` und des Uniforms `uNormalMatrix`.

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

[Den vollständigen Code ansehen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample7) | [Dieses Beispiel auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample7/)

## Übungen für den Leser

Offensichtlich ist dies ein einfaches Beispiel, das grundlegende per-Vertex-Beleuchtung implementiert. Für fortgeschrittenere Grafiken werden Sie Beleuchtung pro Pixel implementieren wollen, aber dies bringt Sie auf den richtigen Weg.

Sie könnten auch experimentieren mit der Richtung der Lichtquelle, den Farben der Lichtquellen und ähnlichem.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}
