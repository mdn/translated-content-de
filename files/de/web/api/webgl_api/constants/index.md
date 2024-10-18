---
title: WebGL-Konstanten
slug: Web/API/WebGL_API/Constants
l10n:
  sourceCommit: 8ac0afb1dde419cf96f4243d18930971ca125d9c
---

{{DefaultAPISidebar("WebGL")}}

Das [WebGL API](/de/docs/Web/API/WebGL_API) bietet mehrere Konstanten, die in Funktionen übergeben oder von diesen zurückgegeben werden. Alle Konstanten sind vom Typ [`GLenum`](/de/docs/Web/API/WebGL_API/Types).

Standard-WebGL-Konstanten sind in den Objekten [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) vorhanden, sodass Sie sie als `gl.CONSTANT_NAME` verwenden:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");

gl.getParameter(gl.LINE_WIDTH);
```

Einige Konstanten werden auch von [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) bereitgestellt. Eine [Liste](#konstanten,_die_in_webgl-erweiterungen_definiert_sind) ist unten aufgeführt.

```js
const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
```

Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) enthält weitere Informationen, Beispiele und Ressourcen, wie man mit WebGL anfängt.

## Inhaltsverzeichnis

- [Standard WebGL 1 Konstanten](#standard_webgl_1_konstanten)
- [Standard WebGL 2 Konstanten](#zusätzliche_konstanten_definiert_in_webgl_2)
- [WebGL-Erweiterungskonstanten](#konstanten,_die_in_webgl-erweiterungen_definiert_sind)

## Standard WebGL 1 Konstanten

Diese Konstanten sind in der [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Schnittstelle definiert.

### Puffer leeren

Konstanten, die an [`WebGLRenderingContext.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) übergeben werden, um Puffermasken zu löschen.

| Konstantenname       | Wert       | Beschreibung                                                      |
| -------------------- | ---------- | ----------------------------------------------------------------- |
| `DEPTH_BUFFER_BIT`   | 0x00000100 | An `clear` übergeben, um den aktuellen Tiefenpuffer zu löschen.   |
| `STENCIL_BUFFER_BIT` | 0x00000400 | An `clear` übergeben, um den aktuellen Stencil-Puffer zu löschen. |
| `COLOR_BUFFER_BIT`   | 0x00004000 | An `clear` übergeben, um den aktuellen Farb-Puffer zu löschen.    |

### Primitive rendern

Konstanten, die an [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) oder [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) übergeben werden, um anzugeben, welche Art von Primitive gerendert werden soll.

| Konstantenname   | Wert   | Beschreibung                                                                                                                                                                                      |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `POINTS`         | 0x0000 | An `drawElements` oder `drawArrays` übergeben, um einzelne Punkte zu zeichnen.                                                                                                                    |
| `LINES`          | 0x0001 | An `drawElements` oder `drawArrays` übergeben, um Linien zu zeichnen. Jeder Scheitelpunkt verbindet sich mit dem folgenden.                                                                       |
| `LINE_LOOP`      | 0x0002 | An `drawElements` oder `drawArrays` übergeben, um Linien zu zeichnen. Jede Satz von zwei Scheitelpunkten wird als eigenes Liniensegment betrachtet.                                               |
| `LINE_STRIP`     | 0x0003 | An `drawElements` oder `drawArrays` übergeben, um eine verbundene Gruppe von Liniensegmenten vom ersten bis zum letzten Scheitelpunkt zu zeichnen.                                                |
| `TRIANGLES`      | 0x0004 | An `drawElements` oder `drawArrays` übergeben, um Dreiecke zu zeichnen. Jede Gruppe von drei Scheitelpunkten erzeugt ein separates Dreieck.                                                       |
| `TRIANGLE_STRIP` | 0x0005 | An `drawElements` oder `drawArrays` übergeben, um eine verbundene Gruppe von Dreiecken zu zeichnen.                                                                                               |
| `TRIANGLE_FAN`   | 0x0006 | An `drawElements` oder `drawArrays` übergeben, um eine verbundene Gruppe von Dreiecken zu zeichnen. Jeder Scheitelpunkt verbindet sich mit dem vorherigen und dem ersten Scheitelpunkt im Fächer. |

### Mischmodi

Konstanten, die an [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc) oder [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) übergeben werden, um den Mischmodus anzugeben (für RGB und Alpha gemeinsam oder separat).

| Konstantenname             | Wert   | Beschreibung                                                                                                                                                               |
| -------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZERO`                     | 0      | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente auszuschalten.                                                                                       |
| `ONE`                      | 1      | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente einzuschalten.                                                                                       |
| `SRC_COLOR`                | 0x0300 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit der Farbe des Quellenelements zu multiplizieren.                                                 |
| `ONE_MINUS_SRC_COLOR`      | 0x0301 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit eins minus der Farbe des Quellenelements zu multiplizieren.                                      |
| `SRC_ALPHA`                | 0x0302 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit dem Alpha des Quellenelements zu multiplizieren.                                                 |
| `ONE_MINUS_SRC_ALPHA`      | 0x0303 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit eins minus dem Alpha des Quellenelements zu multiplizieren.                                      |
| `DST_ALPHA`                | 0x0304 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit dem Alpha des Ziels zu multiplizieren.                                                           |
| `ONE_MINUS_DST_ALPHA`      | 0x0305 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit eins minus dem Alpha des Ziels zu multiplizieren.                                                |
| `DST_COLOR`                | 0x0306 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit der Farbe des Ziels zu multiplizieren.                                                           |
| `ONE_MINUS_DST_COLOR`      | 0x0307 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit eins minus der Farbe des Ziels zu multiplizieren.                                                |
| `SRC_ALPHA_SATURATE`       | 0x0308 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit dem Minimum des Alpha des Quellenelements oder eins minus dem Alpha des Ziels zu multiplizieren. |
| `CONSTANT_COLOR`           | 0x8001 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine konstante Farbmischfunktion anzugeben.                                                                          |
| `ONE_MINUS_CONSTANT_COLOR` | 0x8002 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eins minus einer konstanten Farbmischfunktion anzugeben.                                                             |
| `CONSTANT_ALPHA`           | 0x8003 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eine konstante Alphamischfunktion anzugeben.                                                                         |
| `ONE_MINUS_CONSTANT_ALPHA` | 0x8004 | An `blendFunc` oder `blendFuncSeparate` übergeben, um eins minus einer konstanten Alphamischfunktion anzugeben.                                                            |

### Mischgleichungen

Konstanten, die an [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation) oder [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) übergeben werden, um zu steuern, wie die Mischung berechnet wird (für RGB und Alpha gemeinsam oder separat).

| Konstantenname          | Wert   | Beschreibung                                                                                                                         |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `FUNC_ADD`              | 0x8006 | An `blendEquation` oder `blendEquationSeparate` übergeben, um eine Additionsmischfunktion festzulegen.                               |
| `FUNC_SUBTRACT`         | 0x800A | An `blendEquation` oder `blendEquationSeparate` übergeben, um eine Subtraktionsmischfunktion (Quelle - Ziel) festzulegen.            |
| `FUNC_REVERSE_SUBTRACT` | 0x800B | An `blendEquation` oder `blendEquationSeparate` übergeben, um eine umgekehrte Subtraktionsmischfunktion (Ziel - Quelle) festzulegen. |

### GL-Parameterinformationen abrufen

Konstanten, die an [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) übergeben werden, um anzugeben, welche Informationen zurückgegeben werden sollen.

| Konstantenname                     | Wert   | Beschreibung                                                                                                                                                                                                                                                                  |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BLEND_EQUATION`                   | 0x8009 | An `getParameter` übergeben, um die aktuelle RGB-Mischfunktion zu erhalten.                                                                                                                                                                                                   |
| `BLEND_EQUATION_RGB`               | 0x8009 | An `getParameter` übergeben, um die aktuelle RGB-Mischfunktion zu erhalten. Gleich wie `BLEND_EQUATION`                                                                                                                                                                       |
| `BLEND_EQUATION_ALPHA`             | 0x883D | An `getParameter` übergeben, um die aktuelle Alphamischfunktion zu erhalten.                                                                                                                                                                                                  |
| `BLEND_DST_RGB`                    | 0x80C8 | An `getParameter` übergeben, um die aktuelle Ziel-RGB-Mischfunktion zu erhalten.                                                                                                                                                                                              |
| `BLEND_SRC_RGB`                    | 0x80C9 | An `getParameter` übergeben, um die aktuelle Ziel-RGB-Mischfunktion zu erhalten.                                                                                                                                                                                              |
| `BLEND_DST_ALPHA`                  | 0x80CA | An `getParameter` übergeben, um die aktuelle Ziel-Alphamischfunktion zu erhalten.                                                                                                                                                                                             |
| `BLEND_SRC_ALPHA`                  | 0x80CB | An `getParameter` übergeben, um die aktuelle Quell-Alphamischfunktion zu erhalten.                                                                                                                                                                                            |
| `BLEND_COLOR`                      | 0x8005 | An `getParameter` übergeben, um die aktuelle Mischfarbe zurückzugeben.                                                                                                                                                                                                        |
| `ARRAY_BUFFER_BINDING`             | 0x8894 | An `getParameter` übergeben, um die Array-Pufferbindung zu erhalten.                                                                                                                                                                                                          |
| `ELEMENT_ARRAY_BUFFER_BINDING`     | 0x8895 | An `getParameter` übergeben, um den aktuellen Element-Puffer zu erhalten.                                                                                                                                                                                                     |
| `LINE_WIDTH`                       | 0x0B21 | An `getParameter` übergeben, um die aktuelle `lineWidth` (gesetzt durch die `lineWidth`-Methode) zu erhalten.                                                                                                                                                                 |
| `ALIASED_POINT_SIZE_RANGE`         | 0x846D | An `getParameter` übergeben, um die aktuelle Größe eines mit `gl.POINTS` gezeichneten Punktes zu erhalten.                                                                                                                                                                    |
| `ALIASED_LINE_WIDTH_RANGE`         | 0x846E | An `getParameter` übergeben, um den Bereich der verfügbaren Breiten für eine Linie zu erhalten. Die `getParameter`-Methode gibt dann ein Array mit zwei Elementen zurück: Das erste Element ist der minimale Breitenwert und das zweite Element ist der maximale Breitenwert. |
| `CULL_FACE_MODE`                   | 0x0B45 | An `getParameter` übergeben, um den aktuellen Wert von `cullFace` zu erhalten. Sollte `FRONT`, `BACK` oder `FRONT_AND_BACK` zurückgeben.                                                                                                                                      |
| `FRONT_FACE`                       | 0x0B46 | An `getParameter` übergeben, um den aktuellen Wert von `frontFace` zu bestimmen. Sollte `CW` oder `CCW` zurückgeben.                                                                                                                                                          |
| `DEPTH_RANGE`                      | 0x0B70 | An `getParameter` übergeben, um ein Array der Länge 2 von Fließkommazahlen zurückzugeben, das den aktuellen Tiefenbereich angibt.                                                                                                                                             |
| `DEPTH_WRITEMASK`                  | 0x0B72 | An `getParameter` übergeben, um festzustellen, ob die Tiefenschreibmaske aktiviert ist.                                                                                                                                                                                       |
| `DEPTH_CLEAR_VALUE`                | 0x0B73 | An `getParameter` übergeben, um den aktuellen Wert des Tiefenlösens zu bestimmen.                                                                                                                                                                                             |
| `DEPTH_FUNC`                       | 0x0B74 | An `getParameter` übergeben, um die aktuelle Tiefenfunktion zu erhalten. Gibt `NEVER`, `ALWAYS`, `LESS`, `EQUAL`, `LEQUAL`, `GREATER`, `GEQUAL` oder `NOTEQUAL` zurück.                                                                                                       |
| `STENCIL_CLEAR_VALUE`              | 0x0B91 | An `getParameter` übergeben, um den Wert zu erhalten, auf den das Stencil gelöscht wird.                                                                                                                                                                                      |
| `STENCIL_FUNC`                     | 0x0B92 | An `getParameter` übergeben, um die aktuelle Stencil-Funktion zu erhalten. Gibt `NEVER`, `ALWAYS`, `LESS`, `EQUAL`, `LEQUAL`, `GREATER`, `GEQUAL` oder `NOTEQUAL` zurück.                                                                                                     |
| `STENCIL_FAIL`                     | 0x0B94 | An `getParameter` übergeben, um die aktuelle Stencil-Fehlfunktion zu erhalten. Sollte `KEEP`, `REPLACE`, `INCR`, `DECR`, `INVERT`, `INCR_WRAP` oder `DECR_WRAP` zurückgeben.                                                                                                  |
| `STENCIL_PASS_DEPTH_FAIL`          | 0x0B95 | An `getParameter` übergeben, um die aktuelle Stencil-Fehlfunktion zu erhalten, falls der Tiefenpuffertest fehlschlägt. Sollte `KEEP`, `REPLACE`, `INCR`, `DECR`, `INVERT`, `INCR_WRAP` oder `DECR_WRAP` zurückgeben.                                                          |
| `STENCIL_PASS_DEPTH_PASS`          | 0x0B96 | An `getParameter` übergeben, um die aktuelle Stencil-Fehlfunktion zu erhalten, falls der Tiefenpuffertest erfolgreich ist. Sollte `KEEP`, `REPLACE`, `INCR`, `DECR`, `INVERT`, `INCR_WRAP` oder `DECR_WRAP` zurückgeben.                                                      |
| `STENCIL_REF`                      | 0x0B97 | An `getParameter` übergeben, um den Referenzwert zu erhalten, der für Stencil-Tests verwendet wird.                                                                                                                                                                           |
| `STENCIL_VALUE_MASK`               | 0x0B93 |                                                                                                                                                                                                                                                                               |
| `STENCIL_WRITEMASK`                | 0x0B98 |                                                                                                                                                                                                                                                                               |
| `STENCIL_BACK_FUNC`                | 0x8800 |                                                                                                                                                                                                                                                                               |
| `STENCIL_BACK_FAIL`                | 0x8801 |                                                                                                                                                                                                                                                                               |
| `STENCIL_BACK_PASS_DEPTH_FAIL`     | 0x8802 |                                                                                                                                                                                                                                                                               |
| `STENCIL_BACK_PASS_DEPTH_PASS`     | 0x8803 |                                                                                                                                                                                                                                                                               |
| `STENCIL_BACK_REF`                 | 0x8CA3 |                                                                                                                                                                                                                                                                               |
| `STENCIL_BACK_VALUE_MASK`          | 0x8CA4 |                                                                                                                                                                                                                                                                               |
| `STENCIL_BACK_WRITEMASK`           | 0x8CA5 |                                                                                                                                                                                                                                                                               |
| `VIEWPORT`                         | 0x0BA2 | Gibt ein {{jsxref("Int32Array")}} mit vier Elementen für die aktuellen Ansichtsportabmessungen zurück.                                                                                                                                                                        |
| `SCISSOR_BOX`                      | 0x0C10 | Gibt ein {{jsxref("Int32Array")}} mit vier Elementen für die aktuellen Scherenkastenabmessungen zurück.                                                                                                                                                                       |
| `COLOR_CLEAR_VALUE`                | 0x0C22 |                                                                                                                                                                                                                                                                               |
| `COLOR_WRITEMASK`                  | 0x0C23 |                                                                                                                                                                                                                                                                               |
| `UNPACK_ALIGNMENT`                 | 0x0CF5 |                                                                                                                                                                                                                                                                               |
| `PACK_ALIGNMENT`                   | 0x0D05 |                                                                                                                                                                                                                                                                               |
| `MAX_TEXTURE_SIZE`                 | 0x0D33 |                                                                                                                                                                                                                                                                               |
| `MAX_VIEWPORT_DIMS`                | 0x0D3A |                                                                                                                                                                                                                                                                               |
| `SUBPIXEL_BITS`                    | 0x0D50 |                                                                                                                                                                                                                                                                               |
| `RED_BITS`                         | 0x0D52 |                                                                                                                                                                                                                                                                               |
| `GREEN_BITS`                       | 0x0D53 |                                                                                                                                                                                                                                                                               |
| `BLUE_BITS`                        | 0x0D54 |                                                                                                                                                                                                                                                                               |
| `ALPHA_BITS`                       | 0x0D55 |                                                                                                                                                                                                                                                                               |
| `DEPTH_BITS`                       | 0x0D56 |                                                                                                                                                                                                                                                                               |
| `STENCIL_BITS`                     | 0x0D57 |                                                                                                                                                                                                                                                                               |
| `POLYGON_OFFSET_UNITS`             | 0x2A00 |                                                                                                                                                                                                                                                                               |
| `POLYGON_OFFSET_FACTOR`            | 0x8038 |                                                                                                                                                                                                                                                                               |
| `TEXTURE_BINDING_2D`               | 0x8069 |                                                                                                                                                                                                                                                                               |
| `SAMPLE_BUFFERS`                   | 0x80A8 |                                                                                                                                                                                                                                                                               |
| `SAMPLES`                          | 0x80A9 |                                                                                                                                                                                                                                                                               |
| `SAMPLE_COVERAGE_VALUE`            | 0x80AA |                                                                                                                                                                                                                                                                               |
| `SAMPLE_COVERAGE_INVERT`           | 0x80AB |                                                                                                                                                                                                                                                                               |
| `COMPRESSED_TEXTURE_FORMATS`       | 0x86A3 |                                                                                                                                                                                                                                                                               |
| `VENDOR`                           | 0x1F00 |                                                                                                                                                                                                                                                                               |
| `RENDERER`                         | 0x1F01 |                                                                                                                                                                                                                                                                               |
| `VERSION`                          | 0x1F02 |                                                                                                                                                                                                                                                                               |
| `IMPLEMENTATION_COLOR_READ_TYPE`   | 0x8B9A |                                                                                                                                                                                                                                                                               |
| `IMPLEMENTATION_COLOR_READ_FORMAT` | 0x8B9B |                                                                                                                                                                                                                                                                               |
| `BROWSER_DEFAULT_WEBGL`            | 0x9244 |                                                                                                                                                                                                                                                                               |

### Puffer

Konstanten, die an [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData), [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData), [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) oder [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter) übergeben werden.

| Konstantenname         | Wert   | Beschreibung                                                                                                                         |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `STATIC_DRAW`          | 0x88E4 | An `bufferData` übergeben als Hinweis darauf, ob der Inhalt des Puffers wahrscheinlich häufig verwendet und nicht oft geändert wird. |
| `STREAM_DRAW`          | 0x88E0 | An `bufferData` übergeben als Hinweis darauf, ob der Inhalt des Puffers wahrscheinlich nicht oft verwendet wird.                     |
| `DYNAMIC_DRAW`         | 0x88E8 | An `bufferData` übergeben als Hinweis darauf, ob der Inhalt des Puffers wahrscheinlich häufig verwendet und oft geändert wird.       |
| `ARRAY_BUFFER`         | 0x8892 | An `bindBuffer` oder `bufferData` übergeben, um den verwendeten Puffertyp anzugeben.                                                 |
| `ELEMENT_ARRAY_BUFFER` | 0x8893 | An `bindBuffer` oder `bufferData` übergeben, um den verwendeten Puffertyp anzugeben.                                                 |
| `BUFFER_SIZE`          | 0x8764 | An `getBufferParameter` übergeben, um die Größe eines Puffers zu erhalten.                                                           |
| `BUFFER_USAGE`         | 0x8765 | An `getBufferParameter` übergeben, um den Hinweis für den Puffer zu erhalten, der bei seiner Erstellung übergeben wurde.             |

### Vertex-Attribute

Konstanten, die an [`WebGLRenderingContext.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) übergeben werden.

| Konstantenname                       | Wert   | Beschreibung                                                                |
| ------------------------------------ | ------ | --------------------------------------------------------------------------- |
| `CURRENT_VERTEX_ATTRIB`              | 0x8626 | An `getVertexAttrib` übergeben, um das aktuelle Vertex-Attribut auszulesen. |
| `VERTEX_ATTRIB_ARRAY_ENABLED`        | 0x8622 |                                                                             |
| `VERTEX_ATTRIB_ARRAY_SIZE`           | 0x8623 |                                                                             |
| `VERTEX_ATTRIB_ARRAY_STRIDE`         | 0x8624 |                                                                             |
| `VERTEX_ATTRIB_ARRAY_TYPE`           | 0x8625 |                                                                             |
| `VERTEX_ATTRIB_ARRAY_NORMALIZED`     | 0x886A |                                                                             |
| `VERTEX_ATTRIB_ARRAY_POINTER`        | 0x8645 |                                                                             |
| `VERTEX_ATTRIB_ARRAY_BUFFER_BINDING` | 0x889F |                                                                             |

### Culling

Konstanten, die an [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace) übergeben werden.

| Konstantenname   | Wert   | Beschreibung                                                                                                                                                  |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CULL_FACE`      | 0x0B44 | An `enable`/`disable` übergeben, um das Culling ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um die aktuelle Culling-Methode zu finden. |
| `FRONT`          | 0x0404 | An `cullFace` übergeben, um anzugeben, dass nur Vorderflächen gekullt werden sollen.                                                                          |
| `BACK`           | 0x0405 | An `cullFace` übergeben, um anzugeben, dass nur Rückflächen gekullt werden sollen.                                                                            |
| `FRONT_AND_BACK` | 0x0408 | An `cullFace` übergeben, um anzugeben, dass Vorder- und Rückflächen gekullt werden sollen.                                                                    |

### Aktivieren und Deaktivieren

Konstanten, die an [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) oder [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) übergeben werden.

| Konstantenname             | Wert   | Beschreibung                                                                                                                                                                                                                                                   |
| -------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BLEND`                    | 0x0BE2 | An `enable`/`disable` übergeben, um die Vermischung ein-/auszuschalten. Kann auch mit `getParameter` zur Abfrage der aktuellen Mischmethode verwendet werden.                                                                                                  |
| `DEPTH_TEST`               | 0x0B71 | An `enable`/`disable` übergeben, um den Tiefentest ein-/auszuschalten. Kann auch mit `getParameter` zur Abfrage des Tiefentests verwendet werden.                                                                                                              |
| `DITHER`                   | 0x0BD0 | An `enable`/`disable` übergeben, um das Dithering ein-/auszuschalten. Kann auch mit `getParameter` zur Abfrage der aktuellen Dithering-Methode verwendet werden.                                                                                               |
| `POLYGON_OFFSET_FILL`      | 0x8037 | An `enable`/`disable` übergeben, um die Polygonversatzfüllung ein-/auszuschalten. Nützlich zum Rendern von Hidden-Line-Bildern, Decals und Festkörpern mit hervorgehobenen Kanten. Kann auch mit `getParameter` zur Abfrage des Scherentests verwendet werden. |
| `SAMPLE_ALPHA_TO_COVERAGE` | 0x809E | An `enable`/`disable` übergeben, um die Alpha-to-Coverage ein-/auszuschalten. Wird bei der Multisampling-Alphakanälen verwendet.                                                                                                                               |
| `SAMPLE_COVERAGE`          | 0x80A0 | An `enable`/`disable` übergeben, um die Abdeckungsprobe ein-/auszuschalten. Wird bei Multisampling verwendet.                                                                                                                                                  |
| `SCISSOR_TEST`             | 0x0C11 | An `enable`/`disable` übergeben, um den Scherentest ein-/auszuschalten. Kann auch mit `getParameter` zur Abfrage des Scherentests verwendet werden.                                                                                                            |
| `STENCIL_TEST`             | 0x0B90 | An `enable`/`disable` übergeben, um den Stencil-Test ein-/auszuschalten. Kann auch mit `getParameter` zur Abfrage des Stencil-Tests verwendet werden.                                                                                                          |

### Fehler

Konstanten, die von [`WebGLRenderingContext.getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) zurückgegeben werden.

| Konstantenname       | Wert   | Beschreibung             |
| -------------------- | ------ | ------------------------ |
| `NO_ERROR`           | 0      | Rückgabe von `getError`. |
| `INVALID_ENUM`       | 0x0500 | Rückgabe von `getError`. |
| `INVALID_VALUE`      | 0x0501 | Rückgabe von `getError`. |
| `INVALID_OPERATION`  | 0x0502 | Rückgabe von `getError`. |
| `OUT_OF_MEMORY`      | 0x0505 | Rückgabe von `getError`. |
| `CONTEXT_LOST_WEBGL` | 0x9242 | Rückgabe von `getError`. |

### Vorderseitige Zeichnungsrichtungen

Konstanten, die an [`WebGLRenderingContext.frontFace()`](/de/docs/Web/API/WebGLRenderingContext/frontFace) übergeben werden.

| Konstantenname | Wert   | Beschreibung                                                                                                         |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| `CW`           | 0x0900 | An `frontFace` übergeben, um anzugeben, dass die Vorderseite eines Polygons im Uhrzeigersinn gezeichnet wird.        |
| `CCW`          | 0x0901 | An `frontFace` übergeben, um anzugeben, dass die Vorderseite eines Polygons gegen den Uhrzeigersinn gezeichnet wird. |

### Hinweise

Konstanten, die an [`WebGLRenderingContext.hint()`](/de/docs/Web/API/WebGLRenderingContext/hint) übergeben werden.

| Konstantenname         | Wert   | Beschreibung                                                                                                                                                                     |
| ---------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DONT_CARE`            | 0x1100 | Es gibt keine Präferenz für dieses Verhalten.                                                                                                                                    |
| `FASTEST`              | 0x1101 | Das effizienteste Verhalten sollte verwendet werden.                                                                                                                             |
| `NICEST`               | 0x1102 | Die korrekteste oder die qualitativ hochwertigste Option sollte verwendet werden.                                                                                                |
| `GENERATE_MIPMAP_HINT` | 0x8192 | Hinweis für die Qualität der Filterung beim Generieren von Mipmap-Bildern mit [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap). |

### Datentypen

| Konstantenname   | Wert   | Beschreibung |
| ---------------- | ------ | ------------ |
| `BYTE`           | 0x1400 |              |
| `UNSIGNED_BYTE`  | 0x1401 |              |
| `SHORT`          | 0x1402 |              |
| `UNSIGNED_SHORT` | 0x1403 |              |
| `INT`            | 0x1404 |              |
| `UNSIGNED_INT`   | 0x1405 |              |
| `FLOAT`          | 0x1406 |              |

### Pixelformate

| Konstantenname    | Wert   | Beschreibung |
| ----------------- | ------ | ------------ |
| `DEPTH_COMPONENT` | 0x1902 |              |
| `ALPHA`           | 0x1906 |              |
| `RGB`             | 0x1907 |              |
| `RGBA`            | 0x1908 |              |
| `LUMINANCE`       | 0x1909 |              |
| `LUMINANCE_ALPHA` | 0x190A |              |

### Pixeltypen

| Konstantenname           | Wert   | Beschreibung |
| ------------------------ | ------ | ------------ |
| `UNSIGNED_BYTE`          | 0x1401 |              |
| `UNSIGNED_SHORT_4_4_4_4` | 0x8033 |              |
| `UNSIGNED_SHORT_5_5_5_1` | 0x8034 |              |
| `UNSIGNED_SHORT_5_6_5`   | 0x8363 |              |

### Shader

Konstanten, die an [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader) oder [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter) übergeben werden.

| Konstantenname                     | Wert   | Beschreibung                                                                                                                                                                                                                                            |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FRAGMENT_SHADER`                  | 0x8B30 | An `createShader` übergeben, um einen Fragment-Shader zu definieren.                                                                                                                                                                                    |
| `VERTEX_SHADER`                    | 0x8B31 | An `createShader` übergeben, um einen Vertex-Shader zu definieren.                                                                                                                                                                                      |
| `COMPILE_STATUS`                   | 0x8B81 | An `getShaderParameter` übergeben, um den Status der Kompilierung zu erhalten. Rückgabe "false", falls der Shader nicht kompiliert wurde. Sie können dann `getShaderInfoLog` abfragen, um den genauen Fehler zu finden.                                 |
| `DELETE_STATUS`                    | 0x8B80 | An `getShaderParameter` übergeben, um festzustellen, ob ein Shader über `deleteShader` gelöscht wurde. Gibt "true" zurück, wenn dies der Fall ist, andernfalls "false".                                                                                 |
| `LINK_STATUS`                      | 0x8B82 | An `getProgramParameter` nach dem Aufruf von `linkProgram` übergeben, um zu bestimmen, ob ein Programm korrekt verknüpft wurde. Gibt "false" zurück, falls Fehler aufgetreten sind. Verwenden Sie `getProgramInfoLog`, um den genauen Fehler zu finden. |
| `VALIDATE_STATUS`                  | 0x8B83 | An `getProgramParameter` nach dem Aufruf von `validateProgram` übergeben, um zu bestimmen, ob es valide ist. Gibt "false" zurück, falls Fehler gefunden wurden.                                                                                         |
| `ATTACHED_SHADERS`                 | 0x8B85 | An `getProgramParameter` nach dem Aufruf von `attachShader` übergeben, um zu bestimmen, ob der Shader korrekt angehängt wurde. Gibt "false" zurück, wenn Fehler aufgetreten sind.                                                                       |
| `ACTIVE_ATTRIBUTES`                | 0x8B89 | An `getProgramParameter` übergeben, um die Anzahl der aktiven Attribute in einem Programm zu erhalten.                                                                                                                                                  |
| `ACTIVE_UNIFORMS`                  | 0x8B86 | An `getProgramParameter` übergeben, um die Anzahl der aktiven Uniforms in einem Programm zu erhalten.                                                                                                                                                   |
| `MAX_VERTEX_ATTRIBS`               | 0x8869 | Die maximale Anzahl an möglichen Einträgen in der Scheitelpunktattributliste.                                                                                                                                                                           |
| `MAX_VERTEX_UNIFORM_VECTORS`       | 0x8DFB |                                                                                                                                                                                                                                                         |
| `MAX_VARYING_VECTORS`              | 0x8DFC |                                                                                                                                                                                                                                                         |
| `MAX_COMBINED_TEXTURE_IMAGE_UNITS` | 0x8B4D |                                                                                                                                                                                                                                                         |
| `MAX_VERTEX_TEXTURE_IMAGE_UNITS`   | 0x8B4C |                                                                                                                                                                                                                                                         |
| `MAX_TEXTURE_IMAGE_UNITS`          | 0x8872 | Implementierungsabhängige Anzahl an maximalen Textureinheiten. Mindestens 8.                                                                                                                                                                            |
| `MAX_FRAGMENT_UNIFORM_VECTORS`     | 0x8DFD |                                                                                                                                                                                                                                                         |
| `SHADER_TYPE`                      | 0x8B4F |                                                                                                                                                                                                                                                         |
| `SHADING_LANGUAGE_VERSION`         | 0x8B8C |                                                                                                                                                                                                                                                         |
| `CURRENT_PROGRAM`                  | 0x8B8D |                                                                                                                                                                                                                                                         |

### Tiefen- oder Stencil-Tests

Konstanten, die an [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc) oder [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc) übergeben werden.

| Konstantenname | Wert   | Beschreibung                                                                                                                                                                                               |
| -------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEVER`        | 0x0200 | An `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests nie bestanden werden, d.h., es wird nichts gezeichnet.                                                  |
| `LESS`         | 0x0201 | An `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestanden werden, wenn der neue Tiefenwert kleiner als der gespeicherte Wert ist.                       |
| `EQUAL`        | 0x0202 | An `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestanden werden, wenn der neue Tiefenwert gleich dem gespeicherten Wert ist.                           |
| `LEQUAL`       | 0x0203 | An `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestanden werden, wenn der neue Tiefenwert kleiner oder gleich dem gespeicherten Wert ist.              |
| `GREATER`      | 0x0204 | An `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestanden werden, wenn der neue Tiefenwert größer als der gespeicherte Wert ist.                        |
| `NOTEQUAL`     | 0x0205 | An `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestanden werden, wenn der neue Tiefenwert ungleich dem gespeicherten Wert ist.                         |
| `GEQUAL`       | 0x0206 | An `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests bestanden werden, wenn der neue Tiefenwert größer oder gleich dem gespeicherten Wert ist.               |
| `ALWAYS`       | 0x0207 | An `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass Tiefen- oder Stencil-Tests immer bestanden werden, d.h., Pixel werden in der Reihenfolge gezeichnet, in der sie gezeichnet werden. |

### Stencil-Aktionen

Konstanten, die an [`WebGLRenderingContext.stencilOp()`](/de/docs/Web/API/WebGLRenderingContext/stencilOp) übergeben werden.

| Konstantenname | Wert   | Beschreibung |
| -------------- | ------ | ------------ |
| `KEEP`         | 0x1E00 |              |
| `REPLACE`      | 0x1E01 |              |
| `INCR`         | 0x1E02 |              |
| `DECR`         | 0x1E03 |              |
| `INVERT`       | 0x150A |              |
| `INCR_WRAP`    | 0x8507 |              |
| `DECR_WRAP`    | 0x8508 |              |

### Texturen

Konstanten, die an [`WebGLRenderingContext.texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter), [`WebGLRenderingContext.texParameterf()`](/de/docs/Web/API/WebGLRenderingContext/texParameter), [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture), [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und andere übergeben werden.

| Konstantenname                | Wert            | Beschreibung                     |
| ----------------------------- | --------------- | -------------------------------- |
| `NEAREST`                     | 0x2600          |                                  |
| `LINEAR`                      | 0x2601          |                                  |
| `NEAREST_MIPMAP_NEAREST`      | 0x2700          |                                  |
| `LINEAR_MIPMAP_NEAREST`       | 0x2701          |                                  |
| `NEAREST_MIPMAP_LINEAR`       | 0x2702          |                                  |
| `LINEAR_MIPMAP_LINEAR`        | 0x2703          |                                  |
| `TEXTURE_MAG_FILTER`          | 0x2800          |                                  |
| `TEXTURE_MIN_FILTER`          | 0x2801          |                                  |
| `TEXTURE_WRAP_S`              | 0x2802          |                                  |
| `TEXTURE_WRAP_T`              | 0x2803          |                                  |
| `TEXTURE_2D`                  | 0x0DE1          |                                  |
| `TEXTURE`                     | 0x1702          |                                  |
| `TEXTURE_CUBE_MAP`            | 0x8513          |                                  |
| `TEXTURE_BINDING_CUBE_MAP`    | 0x8514          |                                  |
| `TEXTURE_CUBE_MAP_POSITIVE_X` | 0x8515          |                                  |
| `TEXTURE_CUBE_MAP_NEGATIVE_X` | 0x8516          |                                  |
| `TEXTURE_CUBE_MAP_POSITIVE_Y` | 0x8517          |                                  |
| `TEXTURE_CUBE_MAP_NEGATIVE_Y` | 0x8518          |                                  |
| `TEXTURE_CUBE_MAP_POSITIVE_Z` | 0x8519          |                                  |
| `TEXTURE_CUBE_MAP_NEGATIVE_Z` | 0x851A          |                                  |
| `MAX_CUBE_MAP_TEXTURE_SIZE`   | 0x851C          |                                  |
| `TEXTURE0 - 31`               | 0x84C0 - 0x84DF | Eine Texteinheit.                |
| `ACTIVE_TEXTURE`              | 0x84E0          | Die aktuelle aktive Texteinheit. |
| `REPEAT`                      | 0x2901          |                                  |
| `CLAMP_TO_EDGE`               | 0x812F          |                                  |
| `MIRRORED_REPEAT`             | 0x8370          |                                  |

### Uniform-Typen

| Konstantenname | Wert   | Beschreibung |
| -------------- | ------ | ------------ |
| `FLOAT_VEC2`   | 0x8B50 |              |
| `FLOAT_VEC3`   | 0x8B51 |              |
| `FLOAT_VEC4`   | 0x8B52 |              |
| `INT_VEC2`     | 0x8B53 |              |
| `INT_VEC3`     | 0x8B54 |              |
| `INT_VEC4`     | 0x8B55 |              |
| `BOOL`         | 0x8B56 |              |
| `BOOL_VEC2`    | 0x8B57 |              |
| `BOOL_VEC3`    | 0x8B58 |              |
| `BOOL_VEC4`    | 0x8B59 |              |
| `FLOAT_MAT2`   | 0x8B5A |              |
| `FLOAT_MAT3`   | 0x8B5B |              |
| `FLOAT_MAT4`   | 0x8B5C |              |
| `SAMPLER_2D`   | 0x8B5E |              |
| `SAMPLER_CUBE` | 0x8B60 |              |

### Spezifizierte Shader-Präzisionstypen

| Konstantenname | Wert   | Beschreibung |
| -------------- | ------ | ------------ |
| `LOW_FLOAT`    | 0x8DF0 |              |
| `MEDIUM_FLOAT` | 0x8DF1 |              |
| `HIGH_FLOAT`   | 0x8DF2 |              |
| `LOW_INT`      | 0x8DF3 |              |
| `MEDIUM_INT`   | 0x8DF4 |              |
| `HIGH_INT`     | 0x8DF5 |              |

### Framebuffer und Renderbuffer

| Konstantenname                                 | Wert   | Beschreibung |
| ---------------------------------------------- | ------ | ------------ |
| `FRAMEBUFFER`                                  | 0x8D40 |              |
| `RENDERBUFFER`                                 | 0x8D41 |              |
| `RGBA4`                                        | 0x8056 |              |
| `RGB5_A1`                                      | 0x8057 |              |
| `RGB565`                                       | 0x8D62 |              |
| `DEPTH_COMPONENT16`                            | 0x81A5 |              |
| `STENCIL_INDEX8`                               | 0x8D48 |              |
| `DEPTH_STENCIL`                                | 0x84F9 |              |
| `RENDERBUFFER_WIDTH`                           | 0x8D42 |              |
| `RENDERBUFFER_HEIGHT`                          | 0x8D43 |              |
| `RENDERBUFFER_INTERNAL_FORMAT`                 | 0x8D44 |              |
| `RENDERBUFFER_RED_SIZE`                        | 0x8D50 |              |
| `RENDERBUFFER_GREEN_SIZE`                      | 0x8D51 |              |
| `RENDERBUFFER_BLUE_SIZE`                       | 0x8D52 |              |
| `RENDERBUFFER_ALPHA_SIZE`                      | 0x8D53 |              |
| `RENDERBUFFER_DEPTH_SIZE`                      | 0x8D54 |              |
| `RENDERBUFFER_STENCIL_SIZE`                    | 0x8D55 |              |
| `FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE`           | 0x8CD0 |              |
| `FRAMEBUFFER_ATTACHMENT_OBJECT_NAME`           | 0x8CD1 |              |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL`         | 0x8CD2 |              |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE` | 0x8CD3 |              |
| `COLOR_ATTACHMENT0`                            | 0x8CE0 |              |
| `DEPTH_ATTACHMENT`                             | 0x8D00 |              |
| `STENCIL_ATTACHMENT`                           | 0x8D20 |              |
| `DEPTH_STENCIL_ATTACHMENT`                     | 0x821A |              |
| `NONE`                                         | 0      |              |
| `FRAMEBUFFER_COMPLETE`                         | 0x8CD5 |              |
| `FRAMEBUFFER_INCOMPLETE_ATTACHMENT`            | 0x8CD6 |              |
| `FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`    | 0x8CD7 |              |
| `FRAMEBUFFER_INCOMPLETE_DIMENSIONS`            | 0x8CD9 |              |
| `FRAMEBUFFER_UNSUPPORTED`                      | 0x8CDD |              |
| `FRAMEBUFFER_BINDING`                          | 0x8CA6 |              |
| `RENDERBUFFER_BINDING`                         | 0x8CA7 |              |
| `MAX_RENDERBUFFER_SIZE`                        | 0x84E8 |              |
| `INVALID_FRAMEBUFFER_OPERATION`                | 0x0506 |              |

### Pixel-Speichermodi

Konstanten, die an [`WebGLRenderingContext.pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei) übergeben werden.

| Konstantenname                       | Wert   | Beschreibung |
| ------------------------------------ | ------ | ------------ |
| `UNPACK_FLIP_Y_WEBGL`                | 0x9240 |              |
| `UNPACK_PREMULTIPLY_ALPHA_WEBGL`     | 0x9241 |              |
| `UNPACK_COLORSPACE_CONVERSION_WEBGL` | 0x9243 |              |

## Zusätzliche Konstanten definiert in WebGL 2

Diese Konstanten sind in der [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Schnittstelle definiert. Alle WebGL 1 Konstanten sind in einem WebGL 2 Kontext ebenfalls verfügbar.

### GL-Parameterinformationen abrufen

Konstanten, die an [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) übergeben werden, um anzugeben, welche Informationen zurückgegeben werden sollen.

| Konstantenname                    | Wert   | Beschreibung |
| --------------------------------- | ------ | ------------ |
| `READ_BUFFER`                     | 0x0C02 |              |
| `UNPACK_ROW_LENGTH`               | 0x0CF2 |              |
| `UNPACK_SKIP_ROWS`                | 0x0CF3 |              |
| `UNPACK_SKIP_PIXELS`              | 0x0CF4 |              |
| `PACK_ROW_LENGTH`                 | 0x0D02 |              |
| `PACK_SKIP_ROWS`                  | 0x0D03 |              |
| `PACK_SKIP_PIXELS`                | 0x0D04 |              |
| `TEXTURE_BINDING_3D`              | 0x806A |              |
| `UNPACK_SKIP_IMAGES`              | 0x806D |              |
| `UNPACK_IMAGE_HEIGHT`             | 0x806E |              |
| `MAX_3D_TEXTURE_SIZE`             | 0x8073 |              |
| `MAX_ELEMENTS_VERTICES`           | 0x80E8 |              |
| `MAX_ELEMENTS_INDICES`            | 0x80E9 |              |
| `MAX_TEXTURE_LOD_BIAS`            | 0x84FD |              |
| `MAX_FRAGMENT_UNIFORM_COMPONENTS` | 0x8B49 |              |
| `MAX_VERTEX_UNIFORM_COMPONENTS`   | 0x8B4A |              |
| `MAX_ARRAY_TEXTURE_LAYERS`        | 0x88FF |              |
| `MIN_PROGRAM_TEXEL_OFFSET`        | 0x8904 |              |
| `MAX_PROGRAM_TEXEL_OFFSET`        | 0x8905 |              |
| `MAX_VARYING_COMPONENTS`          | 0x8B4B |              |
| `FRAGMENT_SHADER_DERIVATIVE_HINT` | 0x8B8B |              |
| `RASTERIZER_DISCARD`              | 0x8C89 |              |
| `VERTEX_ARRAY_BINDING`            | 0x85B5 |              |
| `MAX_VERTEX_OUTPUT_COMPONENTS`    | 0x9122 |              |
| `MAX_FRAGMENT_INPUT_COMPONENTS`   | 0x9125 |              |
| `MAX_SERVER_WAIT_TIMEOUT`         | 0x9111 |              |
| `MAX_ELEMENT_INDEX`               | 0x8D6B |              |

### Texturen

Konstanten, die an [`WebGLRenderingContext.texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter), [`WebGLRenderingContext.texParameterf()`](/de/docs/Web/API/WebGLRenderingContext/texParameter), [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture), [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und andere übergeben werden.

| Konstantenname             | Wert   | Beschreibung |
| -------------------------- | ------ | ------------ |
| `RED`                      | 0x1903 |              |
| `RGB8`                     | 0x8051 |              |
| `RGBA8`                    | 0x8058 |              |
| `RGB10_A2`                 | 0x8059 |              |
| `TEXTURE_3D`               | 0x806F |              |
| `TEXTURE_WRAP_R`           | 0x8072 |              |
| `TEXTURE_MIN_LOD`          | 0x813A |              |
| `TEXTURE_MAX_LOD`          | 0x813B |              |
| `TEXTURE_BASE_LEVEL`       | 0x813C |              |
| `TEXTURE_MAX_LEVEL`        | 0x813D |              |
| `TEXTURE_COMPARE_MODE`     | 0x884C |              |
| `TEXTURE_COMPARE_FUNC`     | 0x884D |              |
| `SRGB`                     | 0x8C40 |              |
| `SRGB8`                    | 0x8C41 |              |
| `SRGB8_ALPHA8`             | 0x8C43 |              |
| `COMPARE_REF_TO_TEXTURE`   | 0x884E |              |
| `RGBA32F`                  | 0x8814 |              |
| `RGB32F`                   | 0x8815 |              |
| `RGBA16F`                  | 0x881A |              |
| `RGB16F`                   | 0x881B |              |
| `TEXTURE_2D_ARRAY`         | 0x8C1A |              |
| `TEXTURE_BINDING_2D_ARRAY` | 0x8C1D |              |
| `R11F_G11F_B10F`           | 0x8C3A |              |
| `RGB9_E5`                  | 0x8C3D |              |
| `RGBA32UI`                 | 0x8D70 |              |
| `RGB32UI`                  | 0x8D71 |              |
| `RGBA16UI`                 | 0x8D76 |              |
| `RGB16UI`                  | 0x8D77 |              |
| `RGBA8UI`                  | 0x8D7C |              |
| `RGB8UI`                   | 0x8D7D |              |
| `RGBA32I`                  | 0x8D82 |              |
| `RGB32I`                   | 0x8D83 |              |
| `RGBA16I`                  | 0x8D88 |              |
| `RGB16I`                   | 0x8D89 |              |
| `RGBA8I`                   | 0x8D8E |              |
| `RGB8I`                    | 0x8D8F |              |
| `RED_INTEGER`              | 0x8D94 |              |
| `RGB_INTEGER`              | 0x8D98 |              |
| `RGBA_INTEGER`             | 0x8D99 |              |
| `R8`                       | 0x8229 |              |
| `RG8`                      | 0x822B |              |
| R16F                       | 0x822D |              |
| R32F                       | 0x822E |              |
| RG16F                      | 0x822F |              |
| RG32F                      | 0x8230 |              |
| R8I                        | 0x8231 |              |
| R8UI                       | 0x8232 |              |
| R16I                       | 0x8233 |              |
| R16UI                      | 0x8234 |              |
| R32I                       | 0x8235 |              |
| R32UI                      | 0x8236 |              |
| RG8I                       | 0x8237 |              |
| RG8UI                      | 0x8238 |              |
| RG16I                      | 0x8239 |              |
| RG16UI                     | 0x823A |              |
| RG32I                      | 0x823B |              |
| RG32UI                     | 0x823C |              |
| R8_SNORM                   | 0x8F94 |              |
| RG8_SNORM                  | 0x8F95 |              |
| RGB8_SNORM                 | 0x8F96 |              |
| RGBA8_SNORM                | 0x8F97 |              |
| `RGB10_A2UI`               | 0x906F |              |
| `TEXTURE_IMMUTABLE_FORMAT` | 0x912F |              |
| `TEXTURE_IMMUTABLE_LEVELS` | 0x82DF |              |

### Pixeltypen

| Konstantenname                   | Wert   | Beschreibung |
| -------------------------------- | ------ | ------------ |
| `UNSIGNED_INT_2_10_10_10_REV`    | 0x8368 |              |
| `UNSIGNED_INT_10F_11F_11F_REV`   | 0x8C3B |              |
| `UNSIGNED_INT_5_9_9_9_REV`       | 0x8C3E |              |
| `FLOAT_32_UNSIGNED_INT_24_8_REV` | 0x8DAD |              |
| UNSIGNED_INT_24_8                | 0x84FA |              |
| `HALF_FLOAT`                     | 0x140B |              |
| `RG`                             | 0x8227 |              |
| `RG_INTEGER`                     | 0x8228 |              |
| `INT_2_10_10_10_REV`             | 0x8D9F |              |

### Abfragen

| Konstantenname                    | Wert   | Beschreibung |
| --------------------------------- | ------ | ------------ |
| `CURRENT_QUERY`                   | 0x8865 |              |
| `QUERY_RESULT`                    | 0x8866 |              |
| `QUERY_RESULT_AVAILABLE`          | 0x8867 |              |
| `ANY_SAMPLES_PASSED`              | 0x8C2F |              |
| `ANY_SAMPLES_PASSED_CONSERVATIVE` | 0x8D6A |              |

### Ausgabepuffer

| Konstantenname          | Wert   | Beschreibung |
| ----------------------- | ------ | ------------ |
| `MAX_DRAW_BUFFERS`      | 0x8824 |              |
| `DRAW_BUFFER0`          | 0x8825 |              |
| `DRAW_BUFFER1`          | 0x8826 |              |
| `DRAW_BUFFER2`          | 0x8827 |              |
| `DRAW_BUFFER3`          | 0x8828 |              |
| `DRAW_BUFFER4`          | 0x8829 |              |
| `DRAW_BUFFER5`          | 0x882A |              |
| `DRAW_BUFFER6`          | 0x882B |              |
| `DRAW_BUFFER7`          | 0x882C |              |
| `DRAW_BUFFER8`          | 0x882D |              |
| `DRAW_BUFFER9`          | 0x882E |              |
| `DRAW_BUFFER10`         | 0x882F |              |
| `DRAW_BUFFER11`         | 0x8830 |              |
| `DRAW_BUFFER12`         | 0x8831 |              |
| `DRAW_BUFFER13`         | 0x8832 |              |
| `DRAW_BUFFER14`         | 0x8833 |              |
| `DRAW_BUFFER15`         | 0x8834 |              |
| `MAX_COLOR_ATTACHMENTS` | 0x8CDF |              |
| `COLOR_ATTACHMENT1`     | 0x8CE1 |              |
| `COLOR_ATTACHMENT2`     | 0x8CE2 |              |
| `COLOR_ATTACHMENT3`     | 0x8CE3 |              |
| `COLOR_ATTACHMENT4`     | 0x8CE4 |              |
| `COLOR_ATTACHMENT5`     | 0x8CE5 |              |
| `COLOR_ATTACHMENT6`     | 0x8CE6 |              |
| `COLOR_ATTACHMENT7`     | 0x8CE7 |              |
| `COLOR_ATTACHMENT8`     | 0x8CE8 |              |
| `COLOR_ATTACHMENT9`     | 0x8CE9 |              |
| `COLOR_ATTACHMENT10`    | 0x8CEA |              |
| `COLOR_ATTACHMENT11`    | 0x8CEB |              |
| `COLOR_ATTACHMENT12`    | 0x8CEC |              |
| `COLOR_ATTACHMENT13`    | 0x8CED |              |
| `COLOR_ATTACHMENT14`    | 0x8CEE |              |
| `COLOR_ATTACHMENT15`    | 0x8CEF |              |

### Abtaster

| Konstantenname                  | Wert   | Beschreibung |
| ------------------------------- | ------ | ------------ |
| `SAMPLER_3D`                    | 0x8B5F |              |
| `SAMPLER_2D_SHADOW`             | 0x8B62 |              |
| `SAMPLER_2D_ARRAY`              | 0x8DC1 |              |
| `SAMPLER_2D_ARRAY_SHADOW`       | 0x8DC4 |              |
| `SAMPLER_CUBE_SHADOW`           | 0x8DC5 |              |
| `INT_SAMPLER_2D`                | 0x8DCA |              |
| `INT_SAMPLER_3D`                | 0x8DCB |              |
| `INT_SAMPLER_CUBE`              | 0x8DCC |              |
| `INT_SAMPLER_2D_ARRAY`          | 0x8DCF |              |
| `UNSIGNED_INT_SAMPLER_2D`       | 0x8DD2 |              |
| `UNSIGNED_INT_SAMPLER_3D`       | 0x8DD3 |              |
| `UNSIGNED_INT_SAMPLER_CUBE`     | 0x8DD4 |              |
| `UNSIGNED_INT_SAMPLER_2D_ARRAY` | 0x8DD7 |              |
| `MAX_SAMPLES`                   | 0x8D57 |              |
| `SAMPLER_BINDING`               | 0x8919 |              |

### Puffer

| Konstantenname                | Wert   | Beschreibung |
| ----------------------------- | ------ | ------------ |
| `PIXEL_PACK_BUFFER`           | 0x88EB |              |
| `PIXEL_UNPACK_BUFFER`         | 0x88EC |              |
| `PIXEL_PACK_BUFFER_BINDING`   | 0x88ED |              |
| `PIXEL_UNPACK_BUFFER_BINDING` | 0x88EF |              |
| `COPY_READ_BUFFER`            | 0x8F36 |              |
| `COPY_WRITE_BUFFER`           | 0x8F37 |              |
| `COPY_READ_BUFFER_BINDING`    | 0x8F36 |              |
| `COPY_WRITE_BUFFER_BINDING`   | 0x8F37 |              |

### Datentypen

| Konstantenname        | Wert   | Beschreibung |
| --------------------- | ------ | ------------ |
| `FLOAT_MAT2x3`        | 0x8B65 |              |
| `FLOAT_MAT2x4`        | 0x8B66 |              |
| `FLOAT_MAT3x2`        | 0x8B67 |              |
| `FLOAT_MAT3x4`        | 0x8B68 |              |
| `FLOAT_MAT4x2`        | 0x8B69 |              |
| `FLOAT_MAT4x3`        | 0x8B6A |              |
| `UNSIGNED_INT_VEC2`   | 0x8DC6 |              |
| `UNSIGNED_INT_VEC3`   | 0x8DC7 |              |
| `UNSIGNED_INT_VEC4`   | 0x8DC8 |              |
| `UNSIGNED_NORMALIZED` | 0x8C17 |              |
| `SIGNED_NORMALIZED`   | 0x8F9C |              |

### Vertex-Attribute

| Konstantenname                | Wert   | Beschreibung |
| ----------------------------- | ------ | ------------ |
| `VERTEX_ATTRIB_ARRAY_INTEGER` | 0x88FD |              |
| `VERTEX_ATTRIB_ARRAY_DIVISOR` | 0x88FE |              |

### Transform Feedback

| Konstantenname                                  | Wert   | Beschreibung |
| ----------------------------------------------- | ------ | ------------ |
| `TRANSFORM_FEEDBACK_BUFFER_MODE`                | 0x8C7F |              |
| `MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS`    | 0x8C80 |              |
| `TRANSFORM_FEEDBACK_VARYINGS`                   | 0x8C83 |              |
| `TRANSFORM_FEEDBACK_BUFFER_START`               | 0x8C84 |              |
| `TRANSFORM_FEEDBACK_BUFFER_SIZE`                | 0x8C85 |              |
| `TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`         | 0x8C88 |              |
| `MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS` | 0x8C8A |              |
| `MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS`       | 0x8C8B |              |
| `INTERLEAVED_ATTRIBS`                           | 0x8C8C |              |
| `SEPARATE_ATTRIBS`                              | 0x8C8D |              |
| `TRANSFORM_FEEDBACK_BUFFER`                     | 0x8C8E |              |
| `TRANSFORM_FEEDBACK_BUFFER_BINDING`             | 0x8C8F |              |
| `TRANSFORM_FEEDBACK`                            | 0x8E22 |              |
| `TRANSFORM_FEEDBACK_PAUSED`                     | 0x8E23 |              |
| `TRANSFORM_FEEDBACK_ACTIVE`                     | 0x8E24 |              |
| `TRANSFORM_FEEDBACK_BINDING`                    | 0x8E25 |              |

## Framebuffers und Renderbuffers

| Konstantenname                          | Wert   | Beschreibung |
| --------------------------------------- | ------ | ------------ |
| `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING` | 0x8210 |              |
| `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE` | 0x8211 |              |
| `FRAMEBUFFER_ATTACHMENT_RED_SIZE`       | 0x8212 |              |
| `FRAMEBUFFER_ATTACHMENT_GREEN_SIZE`     | 0x8213 |              |
| `FRAMEBUFFER_ATTACHMENT_BLUE_SIZE`      | 0x8214 |              |
| `FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE`     | 0x8215 |              |
| `FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE`     | 0x8216 |              |
| `FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE`   | 0x8217 |              |
| `FRAMEBUFFER_DEFAULT`                   | 0x8218 |              |
| `DEPTH_STENCIL_ATTACHMENT`              | 0x821A |              |
| `DEPTH_STENCIL`                         | 0x84F9 |              |
| `DEPTH24_STENCIL8`                      | 0x88F0 |              |
| `DRAW_FRAMEBUFFER_BINDING`              | 0x8CA6 |              |
| `READ_FRAMEBUFFER`                      | 0x8CA8 |              |
| `DRAW_FRAMEBUFFER`                      | 0x8CA9 |              |
| `READ_FRAMEBUFFER_BINDING`              | 0x8CAA |              |
| `RENDERBUFFER_SAMPLES`                  | 0x8CAB |              |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER`  | 0x8CD4 |              |
| `FRAMEBUFFER_INCOMPLETE_MULTISAMPLE`    | 0x8D56 |              |

### Uniforms

| Konstantenname                                | Wert   | Beschreibung |
| --------------------------------------------- | ------ | ------------ |
| `UNIFORM_BUFFER`                              | 0x8A11 |              |
| `UNIFORM_BUFFER_BINDING`                      | 0x8A28 |              |
| `UNIFORM_BUFFER_START`                        | 0x8A29 |              |
| `UNIFORM_BUFFER_SIZE`                         | 0x8A2A |              |
| `MAX_VERTEX_UNIFORM_BLOCKS`                   | 0x8A2B |              |
| `MAX_FRAGMENT_UNIFORM_BLOCKS`                 | 0x8A2D |              |
| `MAX_COMBINED_UNIFORM_BLOCKS`                 | 0x8A2E |              |
| `MAX_UNIFORM_BUFFER_BINDINGS`                 | 0x8A2F |              |
| `MAX_UNIFORM_BLOCK_SIZE`                      | 0x8A30 |              |
| `MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS`      | 0x8A31 |              |
| `MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS`    | 0x8A33 |              |
| `UNIFORM_BUFFER_OFFSET_ALIGNMENT`             | 0x8A34 |              |
| `ACTIVE_UNIFORM_BLOCKS`                       | 0x8A36 |              |
| `UNIFORM_TYPE`                                | 0x8A37 |              |
| `UNIFORM_SIZE`                                | 0x8A38 |              |
| `UNIFORM_BLOCK_INDEX`                         | 0x8A3A |              |
| `UNIFORM_OFFSET`                              | 0x8A3B |              |
| `UNIFORM_ARRAY_STRIDE`                        | 0x8A3C |              |
| `UNIFORM_MATRIX_STRIDE`                       | 0x8A3D |              |
| `UNIFORM_IS_ROW_MAJOR`                        | 0x8A3E |              |
| `UNIFORM_BLOCK_BINDING`                       | 0x8A3F |              |
| `UNIFORM_BLOCK_DATA_SIZE`                     | 0x8A40 |              |
| `UNIFORM_BLOCK_ACTIVE_UNIFORMS`               | 0x8A42 |              |
| `UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`        | 0x8A43 |              |
| `UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER`   | 0x8A44 |              |
| `UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER` | 0x8A46 |              |

### Sync-Objekte

| Konstantenname               | Wert       | Beschreibung |
| ---------------------------- | ---------- | ------------ |
| `OBJECT_TYPE`                | 0x9112     |              |
| `SYNC_CONDITION`             | 0x9113     |              |
| `SYNC_STATUS`                | 0x9114     |              |
| `SYNC_FLAGS`                 | 0x9115     |              |
| `SYNC_FENCE`                 | 0x9116     |              |
| `SYNC_GPU_COMMANDS_COMPLETE` | 0x9117     |              |
| `UNSIGNALED`                 | 0x9118     |              |
| `SIGNALED`                   | 0x9119     |              |
| `ALREADY_SIGNALED`           | 0x911A     |              |
| `TIMEOUT_EXPIRED`            | 0x911B     |              |
| `CONDITION_SATISFIED`        | 0x911C     |              |
| `WAIT_FAILED`                | 0x911D     |              |
| `SYNC_FLUSH_COMMANDS_BIT`    | 0x00000001 |              |

### Verschiedene Konstanten

| Konstantenname                  | Wert       | Beschreibung |
| ------------------------------- | ---------- | ------------ |
| `COLOR`                         | 0x1800     |              |
| DEPTH                           | 0x1801     |              |
| `STENCIL`                       | 0x1802     |              |
| `MIN`                           | 0x8007     |              |
| MAX                             | 0x8008     |              |
| `DEPTH_COMPONENT24`             | 0x81A6     |              |
| `STREAM_READ`                   | 0x88E1     |              |
| `STREAM_COPY`                   | 0x88E2     |              |
| `STATIC_READ`                   | 0x88E5     |              |
| `STATIC_COPY`                   | 0x88E6     |              |
| `DYNAMIC_READ`                  | 0x88E9     |              |
| `DYNAMIC_COPY`                  | 0x88EA     |              |
| `DEPTH_COMPONENT32F`            | 0x8CAC     |              |
| `DEPTH32F_STENCIL8`             | 0x8CAD     |              |
| `INVALID_INDEX`                 | 0xFFFFFFFF |              |
| `TIMEOUT_IGNORED`               | -1         |              |
| `MAX_CLIENT_WAIT_TIMEOUT_WEBGL` | 0x9247     |              |

## Konstanten, die in WebGL-Erweiterungen definiert sind

### ANGLE_instanced_arrays

| Konstantenname                      | Wert   | Beschreibung                                                                   |
| ----------------------------------- | ------ | ------------------------------------------------------------------------------ |
| `VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE` | 0x88FE | Beschreibt den Frequenzteiler, der für instanziertes Rendering verwendet wird. |

Für weitere Informationen siehe [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays).

### WEBGL_debug_renderer_info

| Konstantenname            | Wert   | Beschreibung                                                                                 |
| ------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| `UNMASKED_VENDOR_WEBGL`   | 0x9245 | Wird an `getParameter` übergeben, um die Zeichenfolge des Grafiktreibers anzugeben.          |
| `UNMASKED_RENDERER_WEBGL` | 0x9246 | Wird an `getParameter` übergeben, um die Renderer-Zeichenfolge des Grafiktreibers abzurufen. |

Für weitere Informationen siehe [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info).

### EXT_texture_filter_anisotropic

| Konstantenname                   | Wert   | Beschreibung                                                                                          |
| -------------------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `MAX_TEXTURE_MAX_ANISOTROPY_EXT` | 0x84FF | Gibt die maximal verfügbare Anisotropie zurück.                                                       |
| `TEXTURE_MAX_ANISOTROPY_EXT`     | 0x84FE | Wird an `texParameter` übergeben, um die gewünschte maximale Anisotropie für eine Textur festzulegen. |

Für weitere Informationen siehe [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic).

### WEBGL_compressed_texture_s3tc

| Konstantenname                  | Wert   | Beschreibung                                                                                                                                            |
| ------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `COMPRESSED_RGB_S3TC_DXT1_EXT`  | 0x83F0 | Ein DXT1-komprimiertes Bild im RGB-Bildformat.                                                                                                          |
| `COMPRESSED_RGBA_S3TC_DXT1_EXT` | 0x83F1 | Ein DXT1-komprimiertes Bild im RGB-Bildformat mit einem einfachen Ein/Aus-Alpha-Wert.                                                                   |
| `COMPRESSED_RGBA_S3TC_DXT3_EXT` | 0x83F2 | Ein DXT3-komprimiertes Bild im RGBA-Bildformat. Im Vergleich zu einer 32-Bit-RGBA-Textur bietet es eine 4:1-Komprimierung.                              |
| `COMPRESSED_RGBA_S3TC_DXT5_EXT` | 0x83F3 | Ein DXT5-komprimiertes Bild im RGBA-Bildformat. Es bietet ebenfalls eine 4:1-Komprimierung, unterscheidet sich aber in der Alphakomprimierung von DXT3. |

Für weitere Informationen siehe [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc).

### WEBGL_compressed_texture_etc

| Konstantenname                              | Wert   | Beschreibung                                                                                                                                       |
| ------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `COMPRESSED_R11_EAC`                        | 0x9270 | Einkanalige (Rot) Kompression im nicht signierten Format.                                                                                          |
| `COMPRESSED_SIGNED_R11_EAC`                 | 0x9271 | Einkanalige (Rot) Kompression im signierten Format.                                                                                                |
| `COMPRESSED_RG11_EAC`                       | 0x9272 | Zweikanalige (Rot und Grün) Kompression im nicht signierten Format.                                                                                |
| `COMPRESSED_SIGNED_RG11_EAC`                | 0x9273 | Zweikanalige (Rot und Grün) Kompression im signierten Format.                                                                                      |
| `COMPRESSED_RGB8_ETC2`                      | 0x9274 | Komprimiert RGB8-Daten ohne Alphakanal.                                                                                                            |
| `COMPRESSED_RGBA8_ETC2_EAC`                 | 0x9275 | Komprimiert RGBA8-Daten. Der RGB-Teil wird wie `RGB_ETC2` kodiert, aber der Alpha-Teil wird separat codiert.                                       |
| `COMPRESSED_SRGB8_ETC2`                     | 0x9276 | Komprimiert sRGB8-Daten ohne Alphakanal.                                                                                                           |
| `COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`          | 0x9277 | Komprimiert sRGBA8-Daten. Der sRGB-Teil wird wie `SRGB_ETC2` kodiert, aber der Alpha-Teil wird separat codiert.                                    |
| `COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`  | 0x9278 | Ähnlich wie `RGB8_ETC`, jedoch mit der Möglichkeit, den Alphakanal aufzubrechen, was bedeutet, ihn vollständig deckend oder transparent zu machen. |
| `COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2` | 0x9279 | Ähnlich wie `SRGB8_ETC`, jedoch mit der Fähigkeit, den Alphakanal aufzubrechen, was bedeutet, ihn vollständig deckend oder transparent zu machen.  |

Für weitere Informationen siehe [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc).

### WEBGL_compressed_texture_pvrtc

| Konstantenname                     | Wert   | Beschreibung                                                        |
| ---------------------------------- | ------ | ------------------------------------------------------------------- |
| `COMPRESSED_RGB_PVRTC_4BPPV1_IMG`  | 0x8C00 | RGB-Komprimierung im 4-Bit-Modus. Ein Block für jeweils 4×4 Pixel.  |
| `COMPRESSED_RGBA_PVRTC_4BPPV1_IMG` | 0x8C02 | RGBA-Komprimierung im 4-Bit-Modus. Ein Block für jeweils 4×4 Pixel. |
| `COMPRESSED_RGB_PVRTC_2BPPV1_IMG`  | 0x8C01 | RGB-Komprimierung im 2-Bit-Modus. Ein Block für jeweils 8×4 Pixel.  |
| `COMPRESSED_RGBA_PVRTC_2BPPV1_IMG` | 0x8C03 | RGBA-Komprimierung im 2-Bit-Modus. Ein Block für jeweils 8×4 Pixel. |

Für weitere Informationen siehe [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc).

### WEBGL_compressed_texture_etc1

| Konstantenname              | Wert   | Beschreibung                                  |
| --------------------------- | ------ | --------------------------------------------- |
| `COMPRESSED_RGB_ETC1_WEBGL` | 0x8D64 | Komprimiert 24-Bit-RGB-Daten ohne Alphakanal. |

Für weitere Informationen siehe [`WEBGL_compressed_texture_etc1`](/de/docs/Web/API/WEBGL_compressed_texture_etc1).

### WEBGL_depth_texture

| Konstantenname            | Wert   | Beschreibung                                               |
| ------------------------- | ------ | ---------------------------------------------------------- |
| `UNSIGNED_INT_24_8_WEBGL` | 0x84FA | Nicht signierter Ganzzahltyp für 24-Bit-Tiefentexturdaten. |

Für weitere Informationen siehe [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture).

### OES_texture_half_float

| Konstantenname   | Wert   | Beschreibung                |
| ---------------- | ------ | --------------------------- |
| `HALF_FLOAT_OES` | 0x8D61 | Halbgleitkommatyp (16-Bit). |

Für weitere Informationen siehe [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float).

### WEBGL_color_buffer_float

| Konstantenname                              | Wert   | Beschreibung                             |
| ------------------------------------------- | ------ | ---------------------------------------- |
| `RGBA32F_EXT`                               | 0x8814 | RGBA 32-Bit-Gleitkommafarb-Renderformat. |
| `RGB32F_EXT`                                | 0x8815 | RGB 32-Bit-Gleitkommafarb-Renderformat.  |
| `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT` | 0x8211 |                                          |
| `UNSIGNED_NORMALIZED_EXT`                   | 0x8C17 |                                          |

Für weitere Informationen siehe [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float).

### EXT_blend_minmax

| Konstantenname | Wert   | Beschreibung                                                         |
| -------------- | ------ | -------------------------------------------------------------------- |
| `MIN_EXT`      | 0x8007 | Produziert die minimalen Farbkomponenten der Quell- und Ziel-Farben. |
| `MAX_EXT`      | 0x8008 | Produziert die maximalen Farbkomponenten der Quell- und Ziel-Farben. |

Für weitere Informationen siehe [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax).

### EXT_sRGB

| Konstantenname                              | Wert   | Beschreibung                                                    |
| ------------------------------------------- | ------ | --------------------------------------------------------------- |
| `SRGB_EXT`                                  | 0x8C40 | Unsized sRGB format, das die Genauigkeit dem Treiber überlässt. |
| `SRGB_ALPHA_EXT`                            | 0x8C42 | Unsized sRGB format mit unsized Alpha-Komponente.               |
| `SRGB8_ALPHA8_EXT`                          | 0x8C43 | Größenbeschränktes (8-Bit) sRGB- und Alpha-Format.              |
| `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT` | 0x8210 | Gibt die Farbcodierung des Framebuffers zurück.                 |

Für weitere Informationen siehe [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB).

### OES_standard_derivatives

| Konstantenname                        | Wert   | Beschreibung                                                                                                       |
| ------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| `FRAGMENT_SHADER_DERIVATIVE_HINT_OES` | 0x8B8B | Gibt die Genauigkeit der Ableitungsberechnung für die GLSL-eingebauten Funktionen an: `dFdx`, `dFdy` und `fwidth`. |

Für weitere Informationen siehe [`OES_standard_derivatives`](/de/docs/Web/API/OES_standard_derivatives).

### WEBGL_draw_buffers

| Konstantenname                | Wert   | Beschreibung                                            |
| ----------------------------- | ------ | ------------------------------------------------------- |
| `COLOR_ATTACHMENT0_WEBGL`     | 0x8CE0 | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT1_WEBGL`     | 0x8CE1 | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT2_WEBGL`     | 0x8CE2 | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT3_WEBGL`     | 0x8CE3 | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT4_WEBGL`     | 0x8CE4 | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT5_WEBGL`     | 0x8CE5 | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT6_WEBGL`     | 0x8CE6 | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT7_WEBGL`     | 0x8CE7 | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT8_WEBGL`     | 0x8CE8 | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT9_WEBGL`     | 0x8CE9 | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT10_WEBGL`    | 0x8CEA | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT11_WEBGL`    | 0x8CEB | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT12_WEBGL`    | 0x8CEC | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT13_WEBGL`    | 0x8CED | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT14_WEBGL`    | 0x8CEE | Framebuffer-Farbanhangspunkt                            |
| `COLOR_ATTACHMENT15_WEBGL`    | 0x8CEF | Framebuffer-Farbanhangspunkt                            |
| `DRAW_BUFFER0_WEBGL`          | 0x8825 | Draw-Puffer                                             |
| `DRAW_BUFFER1_WEBGL`          | 0x8826 | Draw-Puffer                                             |
| `DRAW_BUFFER2_WEBGL`          | 0x8827 | Draw-Puffer                                             |
| `DRAW_BUFFER3_WEBGL`          | 0x8828 | Draw-Puffer                                             |
| `DRAW_BUFFER4_WEBGL`          | 0x8829 | Draw-Puffer                                             |
| `DRAW_BUFFER5_WEBGL`          | 0x882A | Draw-Puffer                                             |
| `DRAW_BUFFER6_WEBGL`          | 0x882B | Draw-Puffer                                             |
| `DRAW_BUFFER7_WEBGL`          | 0x882C | Draw-Puffer                                             |
| `DRAW_BUFFER8_WEBGL`          | 0x882D | Draw-Puffer                                             |
| `DRAW_BUFFER9_WEBGL`          | 0x882E | Draw-Puffer                                             |
| `DRAW_BUFFER10_WEBGL`         | 0x882F | Draw-Puffer                                             |
| `DRAW_BUFFER11_WEBGL`         | 0x8830 | Draw-Puffer                                             |
| `DRAW_BUFFER12_WEBGL`         | 0x8831 | Draw-Puffer                                             |
| `DRAW_BUFFER13_WEBGL`         | 0x8832 | Draw-Puffer                                             |
| `DRAW_BUFFER14_WEBGL`         | 0x8833 | Draw-Puffer                                             |
| `DRAW_BUFFER15_WEBGL`         | 0x8834 | Draw-Puffer                                             |
| `MAX_COLOR_ATTACHMENTS_WEBGL` | 0x8CDF | Maximale Anzahl von Farbanhangspunkten des Framebuffers |
| `MAX_DRAW_BUFFERS_WEBGL`      | 0x8824 | Maximale Anzahl von Draw-Puffern                        |

Für weitere Informationen siehe [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers).

### OES_vertex_array_object

| Konstantenname             | Wert   | Beschreibung                             |
| -------------------------- | ------ | ---------------------------------------- |
| `VERTEX_ARRAY_BINDING_OES` | 0x85B5 | Das gebundene Vertex-Array-Objekt (VAO). |

Für weitere Informationen siehe [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object).

### EXT_disjoint_timer_query

| Konstantenname               | Wert   | Beschreibung                                                                                       |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------------- |
| `QUERY_COUNTER_BITS_EXT`     | 0x8864 | Die Anzahl der Bits die verwendet werden um das Abfrageergebnis für das angegebene Ziel zu halten. |
| `CURRENT_QUERY_EXT`          | 0x8865 | Die aktuell aktive Abfrage.                                                                        |
| `QUERY_RESULT_EXT`           | 0x8866 | Das Abfrageergebnis.                                                                               |
| `QUERY_RESULT_AVAILABLE_EXT` | 0x8867 | Ein Boolean das angibt, ob ein Abfrageergebnis verfügbar ist oder nicht.                           |
| `TIME_ELAPSED_EXT`           | 0x88BF | Verstrichene Zeit (in Nanosekunden).                                                               |
| `TIMESTAMP_EXT`              | 0x8E28 | Die aktuelle Zeit.                                                                                 |
| `GPU_DISJOINT_EXT`           | 0x8FBB | Ein Boolean der angibt, ob die GPU eine diskontinuierliche Operation durchgeführt hat oder nicht.  |

Für weitere Informationen siehe [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)