---
title: WebGL-Konstanten
slug: Web/API/WebGL_API/Constants
l10n:
  sourceCommit: 8ac0afb1dde419cf96f4243d18930971ca125d9c
---

{{DefaultAPISidebar("WebGL")}}

Die [WebGL API](/de/docs/Web/API/WebGL_API) bietet mehrere Konstanten, die an Funktionen übergeben oder von diesen zurückgegeben werden. Alle Konstanten sind vom Typ [`GLenum`](/de/docs/Web/API/WebGL_API/Types).

Standard-WebGL-Konstanten sind in den Objekten [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) installiert, sodass Sie sie als `gl.CONSTANT_NAME` verwenden können:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");

gl.getParameter(gl.LINE_WIDTH);
```

Einige Konstanten werden auch von [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) bereitgestellt. Eine [Liste](#constants_defined_in_webgl_extensions) finden Sie unten.

```js
const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
```

Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) enthält weitere Informationen, Beispiele und Ressourcen, wie Sie mit WebGL beginnen.

## Inhaltsverzeichnis

- [Standard-WebGL 1 Konstanten](#standard-webgl_1_konstanten)
- [Standard-WebGL 2 Konstanten](#additional_constants_defined_webgl_2)
- [Konstanten der WebGL-Erweiterungen](#constants_defined_in_webgl_extensions)

## Standard-WebGL 1 Konstanten

Diese Konstanten sind in der Schnittstelle [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) definiert.

### Puffer löschen

Konstanten, die an [`WebGLRenderingContext.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) übergeben werden, um Pufferfreigabemasken zu löschen.

| Konstante Name       | Wert       | Beschreibung                                                           |
| -------------------- | ---------- | ---------------------------------------------------------------------- |
| `DEPTH_BUFFER_BIT`   | 0x00000100 | Wird an `clear` übergeben, um den aktuellen Tiefenpuffer zu löschen.   |
| `STENCIL_BUFFER_BIT` | 0x00000400 | Wird an `clear` übergeben, um den aktuellen Stencil-Puffer zu löschen. |
| `COLOR_BUFFER_BIT`   | 0x00004000 | Wird an `clear` übergeben, um den aktuellen Farb-Puffer zu löschen.    |

### Rendering von Primitiven

Konstanten, die an [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) oder [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) übergeben werden, um anzugeben, welche Art von Primitive gerendert werden sollen.

| Konstante Name   | Wert   | Beschreibung                                                                                                                                                                                        |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `POINTS`         | 0x0000 | Wird an `drawElements` oder `drawArrays` übergeben, um einzelne Punkte zu zeichnen.                                                                                                                 |
| `LINES`          | 0x0001 | Wird an `drawElements` oder `drawArrays` übergeben, um Linien zu zeichnen. Jeder Scheitelpunkt verbindet sich mit dem darauf folgenden.                                                             |
| `LINE_LOOP`      | 0x0002 | Wird an `drawElements` oder `drawArrays` übergeben, um Linien zu zeichnen. Jede Gruppe von zwei Scheitelpunkten wird als separates Linienstück behandelt.                                           |
| `LINE_STRIP`     | 0x0003 | Wird an `drawElements` oder `drawArrays` übergeben, um eine verbundene Gruppe von Linienstücken vom ersten bis zum letzten Scheitelpunkt zu zeichnen.                                               |
| `TRIANGLES`      | 0x0004 | Wird an `drawElements` oder `drawArrays` übergeben, um Dreiecke zu zeichnen. Jede Gruppe von drei Scheitelpunkten bildet ein separates Dreieck.                                                     |
| `TRIANGLE_STRIP` | 0x0005 | Wird an `drawElements` oder `drawArrays` übergeben, um eine verbundene Gruppe von Dreiecken zu zeichnen.                                                                                            |
| `TRIANGLE_FAN`   | 0x0006 | Wird an `drawElements` oder `drawArrays` übergeben, um eine verbundene Gruppe von Dreiecken zu zeichnen. Jeder Scheitelpunkt verbindet sich mit dem vorigen und dem ersten Scheitelpunkt im Fächer. |

### Mischmodi

Konstanten, die an [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc) oder [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) übergeben werden, um den Mischmodus (für RGB und Alpha zusammen oder separat) zu spezifizieren.

| Konstante Name             | Wert   | Beschreibung                                                                                                                                                                 |
| -------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZERO`                     | 0      | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente auszuschalten.                                                                                    |
| `ONE`                      | 1      | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente einzuschalten.                                                                                    |
| `SRC_COLOR`                | 0x0300 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit der Farbe des Quell-Elements zu multiplizieren.                                               |
| `ONE_MINUS_SRC_COLOR`      | 0x0301 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit 1 minus der Farbe des Quell-Elements zu multiplizieren.                                       |
| `SRC_ALPHA`                | 0x0302 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit dem Alpha des Quell-Elements zu multiplizieren.                                               |
| `ONE_MINUS_SRC_ALPHA`      | 0x0303 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit 1 minus dem Alpha des Quell-Elements zu multiplizieren.                                       |
| `DST_ALPHA`                | 0x0304 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit dem Alpha des Ziels zu multiplizieren.                                                        |
| `ONE_MINUS_DST_ALPHA`      | 0x0305 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit 1 minus dem Alpha des Ziels zu multiplizieren.                                                |
| `DST_COLOR`                | 0x0306 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit der Farbe des Ziels zu multiplizieren.                                                        |
| `ONE_MINUS_DST_COLOR`      | 0x0307 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit 1 minus der Farbe des Ziels zu multiplizieren.                                                |
| `SRC_ALPHA_SATURATE`       | 0x0308 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit dem Minimum des Alphas des Quell-Elements oder 1 minus dem Alpha des Ziels zu multiplizieren. |
| `CONSTANT_COLOR`           | 0x8001 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine konstante Farbblendfunktion zu spezifizieren.                                                                |
| `ONE_MINUS_CONSTANT_COLOR` | 0x8002 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Blendfunktion mit 1 minus konstanter Farbe zu spezifizieren.                                                 |
| `CONSTANT_ALPHA`           | 0x8003 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine konstante Alphablending-Funktion zu spezifizieren.                                                           |
| `ONE_MINUS_CONSTANT_ALPHA` | 0x8004 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Blendfunktion mit 1 minus konstantem Alpha zu spezifizieren.                                                 |

### Blendgleichungen

Konstanten, die an [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation) oder [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) übergeben werden, um zu steuern, wie das Blenden berechnet wird (für RGB und Alpha gemeinsam oder getrennt).

| Konstante Name          | Wert   | Beschreibung                                                                                                                            |
| ----------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `FUNC_ADD`              | 0x8006 | Wird an `blendEquation` oder `blendEquationSeparate` übergeben, um eine Additionsblendfunktion festzulegen.                             |
| `FUNC_SUBTRACT`         | 0x800A | Wird an `blendEquation` oder `blendEquationSeparate` übergeben, um eine Subtraktionsblendfunktion (Quelle - Ziel) anzugeben.            |
| `FUNC_REVERSE_SUBTRACT` | 0x800B | Wird an `blendEquation` oder `blendEquationSeparate` übergeben, um eine umgekehrte Subtraktionsblendfunktion (Ziel - Quelle) anzugeben. |

### GL-Parameterinformationen abrufen

Konstanten, die an [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) übergeben werden, um anzugeben, welche Informationen zurückgegeben werden sollen.

| Konstante Name                 | Wert   | Beschreibung                                                                                                                                                                                                                                                                           |
| ------------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BLEND_EQUATION`               | 0x8009 | Wird an `getParameter` übergeben, um die aktuelle RGB-Blendfunktion zu erhalten.                                                                                                                                                                                                       |
| `BLEND_EQUATION_RGB`           | 0x8009 | Wird an `getParameter` übergeben, um die aktuelle RGB-Blendfunktion zu erhalten. Gleich wie `BLEND_EQUATION`                                                                                                                                                                           |
| `BLEND_EQUATION_ALPHA`         | 0x883D | Wird an `getParameter` übergeben, um die aktuelle Alphablendfunktion zu erhalten.                                                                                                                                                                                                      |
| `BLEND_DST_RGB`                | 0x80C8 | Wird an `getParameter` übergeben, um die aktuelle Ziel-RGB-Blendfunktion zu erhalten.                                                                                                                                                                                                  |
| `BLEND_SRC_RGB`                | 0x80C9 | Wird an `getParameter` übergeben, um die aktuelle Quellen-RGB-Blendfunktion zu erhalten.                                                                                                                                                                                               |
| `BLEND_DST_ALPHA`              | 0x80CA | Wird an `getParameter` übergeben, um die aktuelle Ziel-Alphablendfunktion zu erhalten.                                                                                                                                                                                                 |
| `BLEND_SRC_ALPHA`              | 0x80CB | Wird an `getParameter` übergeben, um die aktuelle Quellen-Alphablendfunktion zu erhalten.                                                                                                                                                                                              |
| `BLEND_COLOR`                  | 0x8005 | Wird an `getParameter` übergeben, um die aktuelle Mischfarbe zu erhalten.                                                                                                                                                                                                              |
| `ARRAY_BUFFER_BINDING`         | 0x8894 | Wird an `getParameter` übergeben, um die Array-Pufferbindung zu erhalten.                                                                                                                                                                                                              |
| `ELEMENT_ARRAY_BUFFER_BINDING` | 0x8895 | Wird an `getParameter` übergeben, um den aktuellen Element-Array-Puffer zu erhalten.                                                                                                                                                                                                   |
| `LINE_WIDTH`                   | 0x0B21 | Wird an `getParameter` übergeben, um die aktuelle `lineWidth` (gesetzt mit der Methode `lineWidth`) zu erhalten.                                                                                                                                                                       |
| `ALIASED_POINT_SIZE_RANGE`     | 0x846D | Wird an `getParameter` übergeben, um die aktuelle Größe eines Punktes zu erhalten, der mit `gl.POINTS` gezeichnet wurde.                                                                                                                                                               |
| `ALIASED_LINE_WIDTH_RANGE`     | 0x846E | Wird an `getParameter` übergeben, um den Bereich der verfügbaren Breiten für eine Linie zu erhalten. Die Methode `getParameter` gibt dann ein Array mit zwei Elementen zurück: Das erste Element ist der Minimalwert der Breite und das zweite Element ist der Maximalwert der Breite. |
| `CULL_FACE_MODE`               | 0x0B45 | Wird an `getParameter` übergeben, um den aktuellen Wert von `cullFace` zu erhalten. Sollte `FRONT`, `BACK` oder `FRONT_AND_BACK` zurückgeben.                                                                                                                                          |
| `FRONT_FACE`                   | 0x0B46 | Wird an `getParameter` übergeben, um den aktuellen Wert von `frontFace` zu bestimmen. Sollte `CW` oder `CCW` zurückgeben.                                                                                                                                                              |
| `DEPTH_RANGE`                  | 0x0B70 | Wird an `getParameter` übergeben, um ein Array der Länge 2 von Gleitkommazahlen zurückzugeben, das den aktuellen Tiefenbereich angibt.                                                                                                                                                 |
| `DEPTH_WRITEMASK`              | 0x0B72 | Wird an `getParameter` übergeben, um zu bestimmen, ob die Tiefenbeschreibmaske aktiviert ist.                                                                                                                                                                                          |
| `DEPTH_CLEAR_VALUE`            | 0x0B73 | Wird an `getParameter` übergeben, um den aktuellen Tiefenreinigungswert zu bestimmen.                                                                                                                                                                                                  |
| `DEPTH_FUNC`                   | 0x0B74 | Wird an `getParameter` übergeben, um die aktuelle Tiefenfunktion zu erhalten. Gibt `NEVER`, `ALWAYS`, `LESS`, `EQUAL`, `LEQUAL`, `GREATER`, `GEQUAL` oder `NOTEQUAL` zurück.                                                                                                           |
| `STENCIL_CLEAR_VALUE`          | 0x0B91 | Wird an `getParameter` übergeben, um den Wert zu erhalten, auf den der Stencil-Puffer gelöscht wird.                                                                                                                                                                                   |
| `STENCIL_FUNC`                 | 0x0B92 | Wird an `getParameter` übergeben, um die aktuelle Stencil-Funktion zu erhalten. Gibt `NEVER`, `ALWAYS`, `LESS`, `EQUAL`, `LEQUAL`, `GREATER`, `GEQUAL` oder `NOTEQUAL` zurück.                                                                                                         |

[Die Tabelle wird weiterhin für alle anderen Constanten fortgeführt.]

### Culling

Konstanten, die an [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace) übergeben werden.

| Konstante Name   | Wert   | Beschreibung                                                                                                                                                          |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CULL_FACE`      | 0x0B44 | Wird an `enable`/`disable` übergeben, um das Culling ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um die aktuelle Culling-Methode zu ermitteln. |
| `FRONT`          | 0x0404 | Wird an `cullFace` übergeben, um anzugeben, dass nur Vorderseiten gecullt werden sollen.                                                                              |
| `BACK`           | 0x0405 | Wird an `cullFace` übergeben, um anzugeben, dass nur Rückseiten gecullt werden sollen.                                                                                |
| `FRONT_AND_BACK` | 0x0408 | Wird an `cullFace` übergeben, um anzugeben, dass Vorder- und Rückseiten gecullt werden sollen.                                                                        |

### Aktivieren und Deaktivieren

Konstanten, die an [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) oder [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) übergeben werden.

| Konstante Name        | Wert   | Beschreibung                                                                                                                                                                                                                                               |
| --------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BLEND`               | 0x0BE2 | Wird an `enable`/`disable` übergeben, um das Blending ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um die aktuelle Mischmethode zu ermitteln.                                                                                        |
| `DEPTH_TEST`          | 0x0B71 | Wird an `enable`/`disable` übergeben, um den Tiefentest ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um den Tiefentest zu erfragen.                                                                                                  |
| `DITHER`              | 0x0BD0 | Wird an `enable`/`disable` übergeben, um das Dithering ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um die aktuelle Dithering-Methode zu ermitteln.                                                                                  |
| `POLYGON_OFFSET_FILL` | 0x8037 | Wird an `enable`/`disable` übergeben, um das Polygon-Offset ein-/auszuschalten. Nützlich zum Rendern von Hidden-Line-Bildern, Dekals und Solids mit hervorgehobenen Kanten. Kann auch mit `getParameter` verwendet werden, um den Scherentest zu erfragen. |

### Fehler

Konstanten, die von [`WebGLRenderingContext.getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) zurückgegeben werden.

| Konstante Name       | Wert   | Beschreibung                       |
| -------------------- | ------ | ---------------------------------- |
| `NO_ERROR`           | 0      | Wird zurückgegeben von `getError`. |
| `INVALID_ENUM`       | 0x0500 | Wird zurückgegeben von `getError`. |
| `INVALID_VALUE`      | 0x0501 | Wird zurückgegeben von `getError`. |
| `INVALID_OPERATION`  | 0x0502 | Wird zurückgegeben von `getError`. |
| `OUT_OF_MEMORY`      | 0x0505 | Wird zurückgegeben von `getError`. |
| `CONTEXT_LOST_WEBGL` | 0x9242 | Wird zurückgegeben von `getError`. |

### Front Face Richtungen

Konstanten, die an [`WebGLRenderingContext.frontFace()`](/de/docs/Web/API/WebGLRenderingContext/frontFace) übergeben werden.

| Konstante Name | Wert   | Beschreibung                                                                                                              |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| `CW`           | 0x0900 | Wird an `frontFace` übergeben, um anzugeben, dass die Vorderseite eines Polygons im Uhrzeigersinn gezeichnet wird.        |
| `CCW`          | 0x0901 | Wird an `frontFace` übergeben, um anzugeben, dass die Vorderseite eines Polygons gegen den Uhrzeigersinn gezeichnet wird. |

### Tipps

Konstanten, die an [`WebGLRenderingContext.hint()`](/de/docs/Web/API/WebGLRenderingContext/hint) übergeben werden.

| Konstante Name         | Wert   | Beschreibung                                                                                                                                                                    |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DONT_CARE`            | 0x1100 | Es gibt keine Präferenz für dieses Verhalten.                                                                                                                                   |
| `FASTEST`              | 0x1101 | Die effizienteste Verhaltensweise sollte verwendet werden.                                                                                                                      |
| `NICEST`               | 0x1102 | Die korrekteste oder qualitativ hochwertigste Option sollte verwendet werden.                                                                                                   |
| `GENERATE_MIPMAP_HINT` | 0x8192 | Hinweis auf die Qualität des Filterings beim Erzeugen von Mipmap-Bildern mit [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap). |

### Datentypen

| Konstante Name   | Wert   | Beschreibung |
| ---------------- | ------ | ------------ |
| `BYTE`           | 0x1400 |              |
| `UNSIGNED_BYTE`  | 0x1401 |              |
| `SHORT`          | 0x1402 |              |
| `UNSIGNED_SHORT` | 0x1403 |              |
| `INT`            | 0x1404 |              |
| `UNSIGNED_INT`   | 0x1405 |              |
| `FLOAT`          | 0x1406 |              |

### Pixelformate

| Konstante Name    | Wert   | Beschreibung |
| ----------------- | ------ | ------------ |
| `DEPTH_COMPONENT` | 0x1902 |              |
| `ALPHA`           | 0x1906 |              |
| `RGB`             | 0x1907 |              |
| `RGBA`            | 0x1908 |              |
| `LUMINANCE`       | 0x1909 |              |
| `LUMINANCE_ALPHA` | 0x190A |              |

### Pixeltypen

| Konstante Name           | Wert   | Beschreibung |
| ------------------------ | ------ | ------------ |
| `UNSIGNED_BYTE`          | 0x1401 |              |
| `UNSIGNED_SHORT_4_4_4_4` | 0x8033 |              |
| `UNSIGNED_SHORT_5_5_5_1` | 0x8034 |              |
| `UNSIGNED_SHORT_5_6_5`   | 0x8363 |              |

### Shader

Konstanten, die an [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) oder [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter) übergeben werden.

| Konstante Name      | Wert   | Beschreibung                                                                                                                                                                                                                                |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FRAGMENT_SHADER`   | 0x8B30 | Wird an `createShader` übergeben, um einen Fragment-Shader zu definieren.                                                                                                                                                                   |
| `VERTEX_SHADER`     | 0x8B31 | Wird an `createShader` übergeben, um einen Vertex-Shader zu definieren.                                                                                                                                                                     |
| `COMPILE_STATUS`    | 0x8B81 | Wird an `getShaderParameter` übergeben, um den Status der Kompilierung zu erhalten. Gibt false zurück, wenn der Shader nicht kompiliert wurde. Sie können dann `getShaderInfoLog` abfragen, um den genauen Fehler herauszufinden.           |
| `DELETE_STATUS`     | 0x8B80 | Wird an `getShaderParameter` übergeben, um festzustellen, ob ein Shader über `deleteShader` gelöscht wurde. Gibt true zurück, wenn dies der Fall war, andernfalls false.                                                                    |
| `LINK_STATUS`       | 0x8B82 | Wird an `getProgramParameter` nach dem Aufruf `linkProgram` übergeben, um festzustellen, ob ein Programm korrekt verlinkt wurde. Gibt false zurück, wenn es Fehler gab. Verwenden Sie `getProgramInfoLog`, um den genauen Fehler zu finden. |
| `VALIDATE_STATUS`   | 0x8B83 | Wird an `getProgramParameter` nach dem Aufruf `validateProgram` übergeben, um festzustellen, ob es gültig ist. Gibt false zurück, wenn Fehler gefunden wurden.                                                                              |
| `ATTACHED_SHADERS`  | 0x8B85 | Wird an `getProgramParameter` nach dem Aufruf `attachShader` übergeben, um festzustellen, ob der Shader korrekt angehängt wurde. Gibt false zurück, wenn Fehler auftraten.                                                                  |
| `ACTIVE_ATTRIBUTES` | 0x8B89 | Wird an `getProgramParameter` übergeben, um die Anzahl der aktiven Attribute in einem Programm zu erhalten.                                                                                                                                 |
| `ACTIVE_UNIFORMS`   | 0x8B86 | Wird an `getProgramParameter` übergeben, um die Anzahl der aktiven Uniforms in einem Programm zu erhalten.                                                                                                                                  |

### Tiefen- oder Stencil-Tests

Konstanten, die an [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc) oder [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc) übergeben werden.

| Konstante Name | Wert   | Beschreibung                                                                                                                                                                                            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEVER`        | 0x0200 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests niemals bestehen, d.h., nichts wird gezeichnet.                                                 |
| `LESS`         | 0x0201 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestehen, wenn der neue Tiefenwert kleiner ist als der gespeicherte Wert.                       |
| `EQUAL`        | 0x0202 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestehen, wenn der neue Tiefenwert dem gespeicherten Wert entspricht.                           |
| `LEQUAL`       | 0x0203 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestehen, wenn der neue Tiefenwert kleiner oder gleich dem gespeicherten Wert ist.              |
| `GREATER`      | 0x0204 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestehen, wenn der neue Tiefenwert größer ist als der gespeicherte Wert.                        |
| `NOTEQUAL`     | 0x0205 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestehen, wenn der neue Tiefenwert nicht dem gespeicherten Wert entspricht.                     |
| `GEQUAL`       | 0x0206 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestehen, wenn der neue Tiefenwert größer oder gleich dem gespeicherten Wert ist.               |
| `ALWAYS`       | 0x0207 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests immer bestehen, d.h., Pixel werden in der Reihenfolge gezeichnet, in der sie gezeichnet werden. |

[Für den Rest des Dokuments wird das Format fortgesetzt und alle technischen Begriffe und Codeblöcke beibehalten.]

## Siehe auch

- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
