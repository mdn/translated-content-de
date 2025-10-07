---
title: Daten in WebGL
slug: Web/API/WebGL_API/Data
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{DefaultAPISidebar("WebGL")}}

Shader-Programme haben Zugriff auf drei Arten von Datenspeichern, von denen jede einen spezifischen Anwendungsfall hat. Jeder Typ von Variable ist entweder von einem oder beiden Arten von Shader-Programmen zugänglich (abhängig vom Datenspeichertyp) und möglicherweise vom JavaScript-Code der Seite, je nach spezifischem Variablentyp.

## GLSL-Datentypen

Siehe [Datentypen](<https://wikis.khronos.org/opengl/Data_Type_(GLSL)>) in der GLSL-Dokumentation.

## GLSL-Variablen

Es gibt drei Arten von "Variablen" oder Datenspeichern in GLSL, die jeweils ihren eigenen Zweck und Anwendungsfälle haben: **[Attribute](#attribute)**, **[Varyings](#varyings)** und **[Uniforms](#uniforms)**.

### Attribute

**Attribute** sind GLSL-Variablen, die nur dem Vertex-Shader (als Variablen) und dem JavaScript-Code zur Verfügung stehen. Attribute werden typischerweise verwendet, um Farbinformationen, Texturkoordinaten und andere berechnete oder abgerufene Daten zu speichern, die zwischen dem JavaScript-Code und dem Vertex-Shader geteilt werden müssen.

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

**Varyings** sind Variablen, die vom Vertex-Shader deklariert werden und zum Übertragen von Daten vom Vertex-Shader zum Fragment-Shader verwendet werden. Dies wird häufig verwendet, um einen [Normalenvektor](<https://en.wikipedia.org/wiki/Normal_(geometry)>) eines Vertex zu teilen, nachdem er vom Vertex-Shader berechnet wurde.

<\<Anleitung zur Verwendung>>

### Uniforms

**Uniforms** werden vom JavaScript-Code gesetzt und stehen sowohl dem Vertex- als auch dem Fragment-Shader zur Verfügung. Sie werden verwendet, um Werte bereitzustellen, die für alles, was im Frame gezeichnet wird, gleich sind, wie zum Beispiel Lichtpositionen und -stärken, globale Transformations- und Perspektivdetails und so weiter.

<\<Details hinzufügen>>

## Puffer

<\<Informationen hinzufügen>>

## Texturen

<\<Informationen hinzufügen>>
