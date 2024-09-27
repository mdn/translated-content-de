---
title: Daten in WebGL
slug: Web/API/WebGL_API/Data
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{DefaultAPISidebar("WebGL")}}

Shader-Programme haben Zugriff auf drei Arten der Datenspeicherung, die jeweils einen spezifischen Anwendungsfall haben. Jede Art von Variable ist in einem oder beiden Shader-Programmen zugänglich (abhängig vom Datenspeichertyp) und möglicherweise durch den JavaScript-Code der Seite, abhängig von der speziellen Art der Variable.

## GLSL-Datentypen

Siehe [Datentypen](<https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)>) in der GLSL-Dokumentation.

## GLSL-Variablen

Es gibt drei Arten von "Variablen" oder Datenspeicher in GLSL, die jeweils ihren eigenen Zweck und Anwendungsfall haben: **[attributes](#attributes)**, **[varyings](#varyings)** und **[uniforms](#uniforms)**.

### Attributes

**Attributes** sind GLSL-Variablen, die nur für den Vertex-Shader (als Variablen) und den JavaScript-Code verfügbar sind. Attributes werden typischerweise verwendet, um Farbinformationen, Texturkoordinaten und alle anderen berechneten oder abgerufenen Daten zu speichern, die zwischen dem JavaScript-Code und dem Vertex-Shader geteilt werden müssen.

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

```cpp
//glsl
attribute  vec4 vColor;

void main()
{
  fColor = vColor;
}
```

### Varyings

**Varyings** sind Variablen, die vom Vertex-Shader deklariert werden und dazu dienen, Daten vom Vertex-Shader an den Fragment-Shader zu übergeben. Dies wird häufig verwendet, um den [Normalenvektor](<https://en.wikipedia.org/wiki/Normal_(geometry)>) eines Vertex zu teilen, nachdem er vom Vertex-Shader berechnet wurde.

<\<anleitung verwenden>>

### Uniforms

**Uniforms** werden vom JavaScript-Code gesetzt und sind für sowohl den Vertex- als auch den Fragment-Shader verfügbar. Sie werden genutzt, um Werte bereitzustellen, die für alles im Frame gleich sein werden, wie z. B. Positionen und Größenordnungen von Lichtquellen, globale Transformations- und Perspektivdetails usw.

<\<details hinzufügen>>

## Buffers

<\<informationen hinzufügen>>

## Textures

<\<informationen hinzufügen>>
