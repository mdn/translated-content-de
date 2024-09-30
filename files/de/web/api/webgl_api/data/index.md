---
title: Daten in WebGL
slug: Web/API/WebGL_API/Data
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{DefaultAPISidebar("WebGL")}}

Shaderprogramme haben Zugriff auf drei Arten der Datenspeicherung, von denen jede eine spezifische Anwendung hat. Jede Art von Variable ist durch eine oder beide Arten von Shader-Programmen zugänglich (abhängig vom Typ der Datenspeicherung) und möglicherweise durch den JavaScript-Code der Website, abhängig vom spezifischen Typ der Variable.

## GLSL-Datentypen

Siehe [Datentypen](<https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)>) in der GLSL-Dokumentation.

## GLSL-Variablen

In GLSL gibt es drei Arten von "Variablen" oder Datenspeicher, die jeweils ihren eigenen Zweck und Anwendungsfälle haben: **[Attribute](#attribute)**, **[Varyings](#varyings)** und **[Uniforms](#uniforms)**.

### Attribute

**Attribute** sind GLSL-Variablen, die nur dem Vertex-Shader (als Variablen) und dem JavaScript-Code zur Verfügung stehen. Attribute werden typischerweise verwendet, um Farbinformationen, Texturkoordinaten und alle anderen berechneten oder abgerufenen Daten zu speichern, die zwischen JavaScript-Code und dem Vertex-Shader ausgetauscht werden müssen.

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

**Varyings** sind Variablen, die vom Vertex-Shader deklariert werden und verwendet werden, um Daten vom Vertex-Shader an den Fragment-Shader zu übertragen. Dies wird häufig verwendet, um den [Normalenvektor](<https://en.wikipedia.org/wiki/Normal_(geometry)>) eines Vertexes zu teilen, nachdem er vom Vertex-Shader berechnet wurde.

<\<Anleitung zur Verwendung>>

### Uniforms

**Uniforms** werden durch den JavaScript-Code festgelegt und stehen sowohl dem Vertex- als auch dem Fragment-Shader zur Verfügung. Sie werden verwendet, um Werte bereitzustellen, die für alles, was im Frame gezeichnet wird, gleich bleiben, wie beispielsweise Beleuchtungspositionen und -stärken, globale Transformations- und Perspektivendetails und so weiter.

<\<Details hinzufügen>>

## Buffers

<\<Informationen hinzufügen>>

## Textures

<\<Informationen hinzufügen>>
