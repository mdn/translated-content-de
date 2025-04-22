---
title: Daten in WebGL
slug: Web/API/WebGL_API/Data
l10n:
  sourceCommit: 469f97048247e0d738897cae20c695da6f1f738d
---

{{DefaultAPISidebar("WebGL")}}

Shader-Programme haben Zugriff auf drei Arten der Datenspeicherung, von denen jede einen spezifischen Anwendungsfall hat. Jede Art von Variable ist durch einen oder beide Typen von Shader-Programmen zugänglich (abhängig von der Art der Datenspeicherung) und möglicherweise durch den JavaScript-Code der Seite, je nach spezifischem Variablentyp.

## GLSL-Datentypen

Siehe [Datentypen](<https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)>) in der GLSL-Dokumentation.

## GLSL-Variablen

Es gibt drei Arten von "Variablen" oder Datenspeicherung in GLSL, von denen jede ihren eigenen Zweck und Anwendungsfälle hat: **[attributes](#attributes)**, **[varyings](#varyings)** und **[uniforms](#uniforms)**.

### Attributes

**Attributes** sind GLSL-Variablen, die nur dem Vertex-Shader (als Variablen) und dem JavaScript-Code zur Verfügung stehen. Attributes werden typischerweise verwendet, um Farbinformationen, Texturkoordinaten und andere berechnete oder abgerufene Daten zu speichern, die zwischen dem JavaScript-Code und dem Vertex-Shader geteilt werden müssen.

```js
// init colors
const vertexColors = [
  vec4(0.0, 0.0, 0.0, 1.0), // black
  vec4(1.0, 0.0, 0.0, 1.0), // red
  vec4(1.0, 1.0, 0.0, 1.0), // yellow
  vec4(0.0, 1.0, 0.0, 1.0), // green
  vec4(0.0, 0.0, 0.0, 1.0), // black
  vec4(1.0, 0.0, 0.0, 1.0), // red
  vec4(1.0, 1.0, 0.0, 1.0), // yellow
  vec4(0.0, 1.0, 0.0, 1.0), // green
];
const cBuffer = gl.createBuffer();
```

```js
// continued
// create buffer to store colors and reference it to "vColor" which is in GLSL
gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
gl.bufferData(gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW);

const vColor = gl.getAttribLocation(program, "vColor");
gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vColor);
```

```glsl
attribute  vec4 vColor;

void main()
{
  fColor = vColor;
}
```

### Varyings

**Varyings** sind Variablen, die vom Vertex-Shader deklariert werden und dazu verwendet werden, Daten vom Vertex-Shader an den Fragment-Shader zu übergeben. Dies wird häufig verwendet, um den [Normalenvektor](<https://en.wikipedia.org/wiki/Normal_(geometry)>) eines Vertexes zu teilen, nachdem er durch den Vertex-Shader berechnet wurde.

<\<how to use>>

### Uniforms

**Uniforms** werden durch den JavaScript-Code festgelegt und stehen sowohl dem Vertex- als auch dem Fragment-Shader zur Verfügung. Sie werden verwendet, um Werte bereitzustellen, die für alles, was im Frame gezeichnet wird, gleich bleiben, wie zum Beispiel Beleuchtungspositionen und -stärken, globale Transformations- und Perspektivdetails usw.

<\<add details>>

## Puffer

<\<add information>>

## Texturen

<\<add information>>
