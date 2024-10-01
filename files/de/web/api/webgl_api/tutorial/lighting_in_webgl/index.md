---
title: Beleuchtung in WebGL
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

Wie inzwischen klar sein sollte, hat WebGL nicht viel eingebautes Wissen. Es führt lediglich zwei von Ihnen bereitgestellte Funktionen aus – einen Vertex-Shader und einen Fragment-Shader – und erwartet, dass Sie kreative Funktionen schreiben, um die gewünschten Ergebnisse zu erzielen. Mit anderen Worten, wenn Sie Beleuchtung wünschen, müssen Sie diese selbst berechnen. Glücklicherweise ist es nicht allzu schwer, und dieser Artikel wird einige der Grundlagen behandeln.

## Simulation von Beleuchtung und Schattierung in 3D

Obwohl die Theorie hinter der simulierten Beleuchtung in 3D-Grafiken weit über den Rahmen dieses Artikels hinausgeht, ist es hilfreich, ein wenig darüber zu wissen, wie sie funktioniert. Anstatt hier ausführlich darüber zu diskutieren, werfen Sie einen Blick auf den Artikel über [Phong-Shading](https://en.wikipedia.org/wiki/Phong_shading) auf Wikipedia, der einen guten Überblick über das am häufigsten verwendete Beleuchtungsmodell bietet. Oder wenn Sie eine WebGL-basierte Erklärung sehen möchten, [lesen Sie diesen Artikel](https://webglfundamentals.org/webgl/lessons/webgl-3d-lighting-point.html).

Es gibt drei grundlegende Arten von Beleuchtung:

**Umgebungslicht** ist das Licht, das die Szene durchdringt; es ist nicht gerichtet und beeinflusst jede Fläche in der Szene gleichermaßen, unabhängig davon, in welche Richtung sie schaut.

**Richtungslicht** ist Licht, das aus einer bestimmten Richtung emittiert wird. Dies ist Licht, das von so weit entfernt kommt, dass jedes Photon parallel zu jedem anderen Photon verläuft. Sonnenlicht wird zum Beispiel als Richtungslicht betrachtet.

**Punktlicht** ist Licht, das von einem Punkt ausgestrahlt wird und in alle Richtungen strahlt. So funktionieren viele reale Lichtquellen. Eine Glühbirne strahlt beispielsweise Licht in alle Richtungen aus.

Für unsere Zwecke werden wir das Beleuchtungsmodell vereinfachen, indem wir nur einfaches Richtungs- und Umgebungslicht betrachten; in dieser Szene werden wir keine [Glanzlichter](https://en.wikipedia.org/wiki/Specular_highlights) oder Punktlichtquellen haben. Stattdessen haben wir unser Umgebungslicht plus eine einzelne Richtungslichtquelle, die auf den rotierenden Würfel im [vorherigen Demo](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) gerichtet ist.

Sobald wir den Konzepten der Punktquellen und der Spiegelungslichter den Rücken kehren, benötigen wir zwei Informationen, um unsere gerichtete Beleuchtung zu implementieren:

1. Wir müssen jedem Scheitelpunkt eine **Oberflächennormalen** zuordnen. Dies ist ein Vektor, der senkrecht zur Fläche an diesem Scheitelpunkt steht.
2. Wir müssen die Richtung kennen, in die das Licht reist; dies wird durch den **Richtungsvektor** definiert.

Dann aktualisieren wir den Vertex-Shader, um die Farbe jedes Scheitelpunkts zu ändern, wobei das Umgebungslicht sowie der Effekt des Richtungslichts unter Berücksichtigung des Winkels, in dem es die Fläche trifft, berücksichtigt werden. Wir werden sehen, wie das funktioniert, wenn wir uns den Code für den Shader ansehen.

## Aufbau der Normalen für die Scheitelpunkte

Das Erste, was wir tun müssen, ist das Array von Normalen für alle Scheitelpunkte zu erzeugen, die unseren Würfel bilden. Da ein Würfel ein sehr einfaches Objekt ist, ist das leicht zu erledigen; für komplexere Objekte wird die Berechnung der Normalen offensichtlich komplexer.

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

Dies sollte inzwischen ziemlich vertraut aussehen; wir erstellen einen neuen Puffer, binden ihn als den Puffer, mit dem wir arbeiten, und senden dann unser Array von Vertex-Normalen in den Puffer, indem wir `bufferData()` aufrufen.

Wie zuvor haben wir `initBuffers()` aktualisiert, um unsere neue Funktion aufzurufen und den erstellten Puffer zurückzugeben.

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

Dann fügen wir dem "draw-scene.js"-Modul den Code hinzu, der das Normalenarray an ein Shader-Attribut bindet, sodass der Shader-Code darauf zugreifen kann.

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
> Fügen Sie diese Zeile zur `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls unmittelbar vor der Zeile `gl.useProgram()` hinzu:

```js
setNormalAttribute(gl, buffers, programInfo);
```

Schließlich müssen wir den Code aktualisieren, der die uniformen Matrizen erstellt, um dem Shader eine **Normalmatrix** zu generieren und bereitzustellen, die verwendet wird, um die Normalen zu transformieren, wenn es um die aktuelle Ausrichtung des Würfels in Bezug auf die Lichtquelle geht.

> [!NOTE]
> Fügen Sie den folgenden Code zur `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls unmittelbar nach den drei `mat4.rotate()`-Aufrufen hinzu:

```js
const normalMatrix = mat4.create();
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

> [!NOTE]
> Fügen Sie den folgenden Code zur `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls unmittelbar nach den vorherigen zwei `gl.uniformMatrix4fv()`-Aufrufen hinzu:

```js
gl.uniformMatrix4fv(
  programInfo.uniformLocations.normalMatrix,
  false,
  normalMatrix,
);
```

## Die Shader aktualisieren

Jetzt, da alle Daten, die die Shader benötigen, für sie verfügbar sind, müssen wir den Code in den Shadern selbst aktualisieren.

### Der Vertex-Shader

Das Erste, was wir tun müssen, ist den Vertex-Shader so zu aktualisieren, dass er für jeden Scheitelpunkt einen Schattierungswert basierend auf dem Umgebungslicht und dem Richtungslicht erzeugt.

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

Sobald die Position des Scheitelpunkts berechnet ist und wir die Koordinaten des {{Glossary("texel", "Texels")}}, die dem Scheitelpunkt entsprechen, an den Fragment-Shader übergeben haben, können wir mit der Berechnung der Schattierung für den Scheitelpunkt beginnen.

Das Erste, was wir tun, ist, die Normale basierend auf der aktuellen Ausrichtung des Würfels zu transformieren, indem wir die Normale des Scheitelpunkts mit der Normalenmatrix multiplizieren. Dann können wir die Menge des gerichteten Lichts berechnen, die auf den Scheitelpunkt angewendet werden muss, indem wir das Skalarprodukt der transformierten Normale und des Richtungsvektors berechnen (also die Richtung, aus der das Licht kommt). Wenn dieser Wert kleiner als null ist, dann fixieren wir den Wert auf null, da man weniger als null Licht nicht haben kann.

Sobald die Menge des gerichteten Lichts berechnet ist, können wir den Beleuchtungswert erzeugen, indem wir das Umgebungslicht nehmen und das Produkt aus der Farbe des Richtungslichts und der Menge des gerichteten Lichts hinzufügen. Das Ergebnis ist ein RGB-Wert, der vom Fragment-Shader verwendet wird, um die Farbe jedes Pixels, das wir rendern, anzupassen.

### Der Fragment-Shader

Der Fragment-Shader muss jetzt aktualisiert werden, um den von dem Vertex-Shader berechneten Beleuchtungswert zu berücksichtigen.

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

Hier holen wir die Farbe des Texels ab, genau wie im vorherigen Beispiel, aber bevor wir die Farbe des Fragments setzen, multiplizieren wir die Farbe des Texels mit dem Beleuchtungswert, um die Farbe des Texels anzupassen und die Wirkung unserer Lichtquellen zu berücksichtigen.

Das Einzige, was noch bleibt, ist, den Speicherort des `aVertexNormal`-Attributs und der `uNormalMatrix`-Uniform zu suchen.

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

[Vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample7) | [Öffnen Sie diese Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample7/)

## Übungen für den Leser

Offensichtlich ist dies ein einfaches Beispiel zur Implementierung einer grundlegenden per-Vertex-Beleuchtung. Für fortgeschrittenere Grafiken möchten Sie möglicherweise eine per-Pixel-Beleuchtung implementieren, aber dies wird Sie in die richtige Richtung führen.

Sie könnten auch versuchen, mit der Richtung der Lichtquelle, den Farben der Lichtquellen und dergleichen zu experimentieren.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}
