---
title: Daten in WebGL
slug: Web/API/WebGL_API/Data
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{DefaultAPISidebar("WebGL")}}

Shader-Programme haben Zugriff auf drei Arten der Datenspeicherung, von denen jede ihre eigenen Anwendungsfälle hat. Jeder Variablentyp ist entweder einem oder beiden Shaderprogrammen zugänglich (abhängig von der Art des Datenspeichers) und möglicherweise auch durch den JavaScript-Code der Seite, je nach spezifischem Variablentyp.

## GLSL-Datentypen

Siehe [Datentypen](<https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)>) in der GLSL-Dokumentation.

## GLSL-Variablen

Es gibt drei Arten von "Variablen" oder Datenspeicher in GLSL, die jeweils ihren eigenen Zweck und Anwendungsfall haben: **[Attribute](#attribute)**, **[Varyings](#varyings)** und **[Uniforms](#uniforms)**.

### Attribute

**Attribute** sind GLSL-Variablen, die nur dem Vertex-Shader (als Variablen) und dem JavaScript-Code zur Verfügung stehen. Attribute werden typischerweise verwendet, um Farbinformationen, Texturkoordinaten und jede andere berechnete oder abgerufene Daten zu speichern, die zwischen dem JavaScript-Code und dem Vertex-Shader geteilt werden müssen.

```js
// Farben initialisieren
const vertexColors = [
  vec4(0.0, 0.0, 0.0, 1.0), // schwarz
  vec4(1.0, 0.0, 0.0, 1.0), // rot
  vec4(1.0, 1.0, 0.0, 1.0), // gelb
  vec4(0.0, 1.0, 0.0, 1.0), // grün
  vec4(0.0, 0.0, 0.0, 1.0), // schwarz
  vec4(1.0, 0.0, 0.0, 1.0), // rot
  vec4(1.0, 1.0, 0.0, 1.0), // gelb
  vec4(0.0, 1.0, 0.0, 1.0), // grün
];
const cBuffer = gl.createBuffer();
```

```js
// Fortsetzung
// Puffer erstellen, um Farben zu speichern, und diesen mit "vColor" in GLSL verknüpfen
gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
gl.bufferData(gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW);

const vColor = gl.getAttribLocation(program, "vColor");
gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vColor);
```

```cpp
// glsl
attribute  vec4 vColor;

void main()
{
  fColor = vColor;
}
```

### Varyings

**Varyings** sind Variablen, die vom Vertex-Shader deklariert werden und dazu dienen, Daten vom Vertex-Shader an den Fragment-Shader zu übergeben. Dies wird häufig verwendet, um einen [Normalenvektor](<https://en.wikipedia.org/wiki/Normal_(geometry)>) eines Vertex zu übergeben, nachdem dieser vom Vertex-Shader berechnet wurde.

<\<how to use>>

### Uniforms

**Uniforms** werden durch den JavaScript-Code gesetzt und stehen sowohl dem Vertex- als auch dem Fragment-Shader zur Verfügung. Sie werden verwendet, um Werte bereitzustellen, die für alles im Frame gleich bleiben, wie Beleuchtungspositionen und -stärken, globale Transformations- und Perspektivendetails und so weiter.

<\<add details>>

## Buffers

<\<add information>>

## Textures

<\<add information>>
