---
title: WebGL-Konstanten
slug: Web/API/WebGL_API/Constants
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("WebGL")}}

Die [WebGL API](/de/docs/Web/API/WebGL_API) stellt mehrere Konstanten bereit, die in Funktionen übergeben oder von diesen zurückgegeben werden. Alle Konstanten sind vom Typ [`GLenum`](/de/docs/Web/API/WebGL_API/Types).

Standard WebGL-Konstanten sind in den Objekten [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) installiert, sodass sie als `gl.CONSTANT_NAME` verwendet werden können:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");

gl.getParameter(gl.LINE_WIDTH);
```

Einige Konstanten werden auch von [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) bereitgestellt. Eine [Liste](#konstanten_in_webgl-erweiterungen_definiert) wird unten bereitgestellt.

```js
const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
```

Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) enthält weitere Informationen, Beispiele und Ressourcen, um mit WebGL zu beginnen.

## Inhaltsverzeichnis

- [Standard WebGL 1 Konstanten](#standard_webgl_1_konstanten)
- [Standard WebGL 2 Konstanten](#zusätzliche_konstanten_in_webgl_2_definiert)
- [WebGL-Erweiterungskonstanten](#konstanten_in_webgl-erweiterungen_definiert)

## Standard WebGL 1 Konstanten

Diese Konstanten sind in der [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Schnittstelle definiert.

### Puffer löschen

Konstanten, die an [`WebGLRenderingContext.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) übergeben werden, um Puffer-Masken zu löschen.

| Konstantenname       | Wert       | Beschreibung                                                             |
| -------------------- | ---------- | ------------------------------------------------------------------------ |
| `DEPTH_BUFFER_BIT`   | 0x00000100 | Wird an `clear` übergeben, um den aktuellen Tiefenpuffer zu löschen.     |
| `STENCIL_BUFFER_BIT` | 0x00000400 | Wird an `clear` übergeben, um den aktuellen Schablonenpuffer zu löschen. |
| `COLOR_BUFFER_BIT`   | 0x00004000 | Wird an `clear` übergeben, um den aktuellen Farb-Puffer zu löschen.      |

### Rendering-Primitiven

Konstanten, die an [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) oder [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) übergeben werden, um festzulegen, welche Art von Primitive gerendert werden soll.

| Konstantenname   | Wert   | Beschreibung                                                                                                                                                                                 |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `POINTS`         | 0x0000 | Wird an `drawElements` oder `drawArrays` übergeben, um einzelne Punkte zu zeichnen.                                                                                                          |
| `LINES`          | 0x0001 | Wird an `drawElements` oder `drawArrays` übergeben, um Linien zu zeichnen. Jeder Eckpunkt verbindet sich mit dem nächsten.                                                                   |
| `LINE_LOOP`      | 0x0002 | Wird an `drawElements` oder `drawArrays` übergeben, um Linien zu zeichnen. Jedes Set von zwei Eckpunkten wird als separates Liniensegment behandelt.                                         |
| `LINE_STRIP`     | 0x0003 | Wird an `drawElements` oder `drawArrays` übergeben, um eine verbundene Gruppe von Liniensegmenten vom ersten bis zum letzten Eckpunkt zu zeichnen.                                           |
| `TRIANGLES`      | 0x0004 | Wird an `drawElements` oder `drawArrays` übergeben, um Dreiecke zu zeichnen. Jedes Set von drei Eckpunkten erzeugt ein separates Dreieck.                                                    |
| `TRIANGLE_STRIP` | 0x0005 | Wird an `drawElements` oder `drawArrays` übergeben, um eine verbundene Gruppe von Dreiecken zu zeichnen.                                                                                     |
| `TRIANGLE_FAN`   | 0x0006 | Wird an `drawElements` oder `drawArrays` übergeben, um eine verbundene Gruppe von Dreiecken zu zeichnen. Jeder Eckpunkt verbindet sich mit dem vorherigen und dem ersten Eckpunkt im Fächer. |

### Mischmodi

Konstanten, die an [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc) oder [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) übergeben werden, um den Mischmodus festzulegen (für RGB und Alpha oder getrennt).

| Konstantenname             | Wert   | Beschreibung                                                                                                                                                            |
| -------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ZERO`                     | 0      | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente auszuschalten.                                                                               |
| `ONE`                      | 1      | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente einzuschalten.                                                                               |
| `SRC_COLOR`                | 0x0300 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit der Farbe des Quell-Elements zu multiplizieren.                                          |
| `ONE_MINUS_SRC_COLOR`      | 0x0301 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit eins minus der Farbe des Quell-Elements zu multiplizieren.                               |
| `SRC_ALPHA`                | 0x0302 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit dem Alpha des Quells zu multiplizieren.                                                  |
| `ONE_MINUS_SRC_ALPHA`      | 0x0303 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit eins minus dem Alpha des Quells zu multiplizieren.                                       |
| `DST_ALPHA`                | 0x0304 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit dem Alpha des Ziels zu multiplizieren.                                                   |
| `ONE_MINUS_DST_ALPHA`      | 0x0305 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit eins minus dem Alpha des Ziels zu multiplizieren.                                        |
| `DST_COLOR`                | 0x0306 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit der Farbe des Ziels zu multiplizieren.                                                   |
| `ONE_MINUS_DST_COLOR`      | 0x0307 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit eins minus der Farbe des Ziels zu multiplizieren.                                        |
| `SRC_ALPHA_SATURATE`       | 0x0308 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine Komponente mit dem Minimum des Alphas des Quells oder eins minus dem Alpha des Ziels zu multiplizieren. |
| `CONSTANT_COLOR`           | 0x8001 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine konstante Farb-Mischfunktion festzulegen.                                                               |
| `ONE_MINUS_CONSTANT_COLOR` | 0x8002 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eins minus eine konstante Farb-Mischfunktion festzulegen.                                                    |
| `CONSTANT_ALPHA`           | 0x8003 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eine konstante Alpha-Mischfunktion festzulegen.                                                              |
| `ONE_MINUS_CONSTANT_ALPHA` | 0x8004 | Wird an `blendFunc` oder `blendFuncSeparate` übergeben, um eins minus eine konstante Alpha-Mischfunktion festzulegen.                                                   |

### Mischgleichungen

Konstanten, die an [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation) oder [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) übergeben werden, um zu steuern, wie das Mischen berechnet wird (für RGB und Alpha oder getrennt).

| Konstantenname          | Wert   | Beschreibung                                                                                                                            |
| ----------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `FUNC_ADD`              | 0x8006 | Wird an `blendEquation` oder `blendEquationSeparate` übergeben, um eine Additionsmischfunktion zu setzen.                               |
| `FUNC_SUBTRACT`         | 0x800A | Wird an `blendEquation` oder `blendEquationSeparate` übergeben, um eine Subtraktionsmischfunktion anzugeben (Quelle - Ziel).            |
| `FUNC_REVERSE_SUBTRACT` | 0x800B | Wird an `blendEquation` oder `blendEquationSeparate` übergeben, um eine umgekehrte Subtraktionsmischfunktion anzugeben (Ziel - Quelle). |

### Abrufen von GL-Parameterinformationen

Konstanten, die an [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) übergeben werden, um anzugeben, welche Informationen zurückgegeben werden sollen.

| Konstantenname                     | Wert   | Beschreibung                                                                                                                                                                                                                                                                   |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `BLEND_EQUATION`                   | 0x8009 | Wird an `getParameter` übergeben, um die aktuelle RGB-Mischfunktion zu erhalten.                                                                                                                                                                                               |
| `BLEND_EQUATION_RGB`               | 0x8009 | Wird an `getParameter` übergeben, um die aktuelle RGB-Mischfunktion zu erhalten. Gleichermaßen wie `BLEND_EQUATION`                                                                                                                                                            |
| `BLEND_EQUATION_ALPHA`             | 0x883D | Wird an `getParameter` übergeben, um die aktuelle Alpha-Mischfunktion zu erhalten.                                                                                                                                                                                             |
| `BLEND_DST_RGB`                    | 0x80C8 | Wird an `getParameter` übergeben, um die aktuelle Ziel-RGB-Mischfunktion zu erhalten.                                                                                                                                                                                          |
| `BLEND_SRC_RGB`                    | 0x80C9 | Wird an `getParameter` übergeben, um die aktuelle Ziel-RGB-Mischfunktion zu erhalten.                                                                                                                                                                                          |
| `BLEND_DST_ALPHA`                  | 0x80CA | Wird an `getParameter` übergeben, um die aktuelle Ziel-Alpha-Mischfunktion zu erhalten.                                                                                                                                                                                        |
| `BLEND_SRC_ALPHA`                  | 0x80CB | Wird an `getParameter` übergeben, um die aktuelle Quell-Alpha-Mischfunktion zu erhalten.                                                                                                                                                                                       |
| `BLEND_COLOR`                      | 0x8005 | Wird an `getParameter` übergeben, um die aktuelle Mischfarbe zurückzugeben.                                                                                                                                                                                                    |
| `ARRAY_BUFFER_BINDING`             | 0x8894 | Wird an `getParameter` übergeben, um die Array-Puffer-Bindung zu erhalten.                                                                                                                                                                                                     |
| `ELEMENT_ARRAY_BUFFER_BINDING`     | 0x8895 | Wird an `getParameter` übergeben, um den aktuellen Element-Array-Puffer zu erhalten.                                                                                                                                                                                           |
| `LINE_WIDTH`                       | 0x0B21 | Wird an `getParameter` übergeben, um die aktuelle `lineWidth` (gesetzt durch die `lineWidth` Methode) zu erhalten.                                                                                                                                                             |
| `ALIASED_POINT_SIZE_RANGE`         | 0x846D | Wird an `getParameter` übergeben, um die aktuelle Größe eines Punktes zu erhalten, der mit `gl.POINTS` gezeichnet wird.                                                                                                                                                        |
| `ALIASED_LINE_WIDTH_RANGE`         | 0x846E | Wird an `getParameter` übergeben, um den Bereich verfügbarer Breiten für eine Linie zu erhalten. Die `getParameter` Methode gibt dann ein Array mit zwei Elementen zurück: Das erste Element ist der minimale Breitenwert und das zweite Element ist der maximale Breitenwert. |
| `CULL_FACE_MODE`                   | 0x0B45 | Wird an `getParameter` übergeben, um den aktuellen Wert von `cullFace` zu erhalten. Sollte `FRONT`, `BACK` oder `FRONT_AND_BACK` zurückgeben.                                                                                                                                  |
| `FRONT_FACE`                       | 0x0B46 | Wird an `getParameter` übergeben, um den aktuellen Wert von `frontFace` zu ermitteln. Sollte `CW` oder `CCW` zurückgeben.                                                                                                                                                      |
| `DEPTH_RANGE`                      | 0x0B70 | Wird an `getParameter` übergeben, um ein Array der Länge 2 aus Fließkommazahlen zurückzugeben, das den aktuellen Tiefenbereich angibt.                                                                                                                                         |
| `DEPTH_WRITEMASK`                  | 0x0B72 | Wird an `getParameter` übergeben, um zu ermitteln, ob die Tiefenschreibmaske aktiviert ist.                                                                                                                                                                                    |
| `DEPTH_CLEAR_VALUE`                | 0x0B73 | Wird an `getParameter` übergeben, um den aktuellen Wert für das Löschen der Tiefe zu ermitteln.                                                                                                                                                                                |
| `DEPTH_FUNC`                       | 0x0B74 | Wird an `getParameter` übergeben, um die aktuelle Tiefenfunktion zu erhalten. Gibt `NEVER`, `ALWAYS`, `LESS`, `EQUAL`, `LEQUAL`, `GREATER`, `GEQUAL` oder `NOTEQUAL` zurück.                                                                                                   |
| `STENCIL_CLEAR_VALUE`              | 0x0B91 | Wird an `getParameter` übergeben, um den Wert zu erhalten, auf den die Schablone gelöscht wird.                                                                                                                                                                                |
| `STENCIL_FUNC`                     | 0x0B92 | Wird an `getParameter` übergeben, um die aktuelle Schablonenfunktion zu erhalten. Gibt `NEVER`, `ALWAYS`, `LESS`, `EQUAL`, `LEQUAL`, `GREATER`, `GEQUAL` oder `NOTEQUAL` zurück.                                                                                               |
| `STENCIL_FAIL`                     | 0x0B94 | Wird an `getParameter` übergeben, um die aktuelle Schablonen-Ausfallfunktion zu erhalten. Sollte `KEEP`, `REPLACE`, `INCR`, `DECR`, `INVERT`, `INCR_WRAP` oder `DECR_WRAP` zurückgeben.                                                                                        |
| `STENCIL_PASS_DEPTH_FAIL`          | 0x0B95 | Wird an `getParameter` übergeben, um die aktuelle Schablonen-Ausfallfunktion zu erhalten, falls der Test des Tiefenpuffers fehlschlägt. Sollte `KEEP`, `REPLACE`, `INCR`, `DECR`, `INVERT`, `INCR_WRAP` oder `DECR_WRAP` zurückgeben.                                          |
| `STENCIL_PASS_DEPTH_PASS`          | 0x0B96 | Wird an `getParameter` übergeben, um die aktuelle Schablonen-Ausfallfunktion zu erhalten, falls der Test des Tiefenpuffers erfolgreich ist. Sollte `KEEP`, `REPLACE`, `INCR`, `DECR`, `INVERT`, `INCR_WRAP` oder `DECR_WRAP` zurückgeben.                                      |
| `STENCIL_REF`                      | 0x0B97 | Wird an `getParameter` übergeben, um den Referenzwert zu erhalten, der für Schablonentests verwendet wird.                                                                                                                                                                     |
| `STENCIL_VALUE_MASK`               | 0x0B93 |                                                                                                                                                                                                                                                                                |
| `STENCIL_WRITEMASK`                | 0x0B98 |                                                                                                                                                                                                                                                                                |
| `STENCIL_BACK_FUNC`                | 0x8800 |                                                                                                                                                                                                                                                                                |
| `STENCIL_BACK_FAIL`                | 0x8801 |                                                                                                                                                                                                                                                                                |
| `STENCIL_BACK_PASS_DEPTH_FAIL`     | 0x8802 |                                                                                                                                                                                                                                                                                |
| `STENCIL_BACK_PASS_DEPTH_PASS`     | 0x8803 |                                                                                                                                                                                                                                                                                |
| `STENCIL_BACK_REF`                 | 0x8CA3 |                                                                                                                                                                                                                                                                                |
| `STENCIL_BACK_VALUE_MASK`          | 0x8CA4 |                                                                                                                                                                                                                                                                                |
| `STENCIL_BACK_WRITEMASK`           | 0x8CA5 |                                                                                                                                                                                                                                                                                |
| `VIEWPORT`                         | 0x0BA2 | Gibt ein {{jsxref("Int32Array")}} mit vier Elementen für die aktuellen Viewport-Abmessungen zurück.                                                                                                                                                                            |
| `SCISSOR_BOX`                      | 0x0C10 | Gibt ein {{jsxref("Int32Array")}} mit vier Elementen für die aktuellen Schneidebox-Abmessungen zurück.                                                                                                                                                                         |
| `COLOR_CLEAR_VALUE`                | 0x0C22 |                                                                                                                                                                                                                                                                                |
| `COLOR_WRITEMASK`                  | 0x0C23 |                                                                                                                                                                                                                                                                                |
| `UNPACK_ALIGNMENT`                 | 0x0CF5 |                                                                                                                                                                                                                                                                                |
| `PACK_ALIGNMENT`                   | 0x0D05 |                                                                                                                                                                                                                                                                                |
| `MAX_TEXTURE_SIZE`                 | 0x0D33 |                                                                                                                                                                                                                                                                                |
| `MAX_VIEWPORT_DIMS`                | 0x0D3A |                                                                                                                                                                                                                                                                                |
| `SUBPIXEL_BITS`                    | 0x0D50 |                                                                                                                                                                                                                                                                                |
| `RED_BITS`                         | 0x0D52 |                                                                                                                                                                                                                                                                                |
| `GREEN_BITS`                       | 0x0D53 |                                                                                                                                                                                                                                                                                |
| `BLUE_BITS`                        | 0x0D54 |                                                                                                                                                                                                                                                                                |
| `ALPHA_BITS`                       | 0x0D55 |                                                                                                                                                                                                                                                                                |
| `DEPTH_BITS`                       | 0x0D56 |                                                                                                                                                                                                                                                                                |
| `STENCIL_BITS`                     | 0x0D57 |                                                                                                                                                                                                                                                                                |
| `POLYGON_OFFSET_UNITS`             | 0x2A00 |                                                                                                                                                                                                                                                                                |
| `POLYGON_OFFSET_FACTOR`            | 0x8038 |                                                                                                                                                                                                                                                                                |
| `TEXTURE_BINDING_2D`               | 0x8069 |                                                                                                                                                                                                                                                                                |
| `SAMPLE_BUFFERS`                   | 0x80A8 |                                                                                                                                                                                                                                                                                |
| `SAMPLES`                          | 0x80A9 |                                                                                                                                                                                                                                                                                |
| `SAMPLE_COVERAGE_VALUE`            | 0x80AA |                                                                                                                                                                                                                                                                                |
| `SAMPLE_COVERAGE_INVERT`           | 0x80AB |                                                                                                                                                                                                                                                                                |
| `COMPRESSED_TEXTURE_FORMATS`       | 0x86A3 |                                                                                                                                                                                                                                                                                |
| `VENDOR`                           | 0x1F00 |                                                                                                                                                                                                                                                                                |
| `RENDERER`                         | 0x1F01 |                                                                                                                                                                                                                                                                                |
| `VERSION`                          | 0x1F02 |                                                                                                                                                                                                                                                                                |
| `IMPLEMENTATION_COLOR_READ_TYPE`   | 0x8B9A |                                                                                                                                                                                                                                                                                |
| `IMPLEMENTATION_COLOR_READ_FORMAT` | 0x8B9B |                                                                                                                                                                                                                                                                                |
| `BROWSER_DEFAULT_WEBGL`            | 0x9244 |                                                                                                                                                                                                                                                                                |

### Puffer

Konstanten, die an [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData), [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData), [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) oder [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter) übergeben werden.

| Konstantenname         | Wert   | Beschreibung                                                                                                                       |
| ---------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `STATIC_DRAW`          | 0x88E4 | Wird an `bufferData` als Hinweis übergeben, ob der Inhalt des Puffers häufig verwendet wird und sich nicht häufig ändert.          |
| `STREAM_DRAW`          | 0x88E0 | Wird an `bufferData` als Hinweis übergeben, ob der Inhalt des Puffers wahrscheinlich nicht häufig verwendet wird.                  |
| `DYNAMIC_DRAW`         | 0x88E8 | Wird an `bufferData` als Hinweis übergeben, ob der Inhalt des Puffers wahrscheinlich häufig verwendet wird und sich häufig ändert. |
| `ARRAY_BUFFER`         | 0x8892 | Wird an `bindBuffer` oder `bufferData` übergeben, um den verwendeten Puffertyp anzugeben.                                          |
| `ELEMENT_ARRAY_BUFFER` | 0x8893 | Wird an `bindBuffer` oder `bufferData` übergeben, um den verwendeten Puffertyp anzugeben.                                          |
| `BUFFER_SIZE`          | 0x8764 | Wird an `getBufferParameter` übergeben, um die Größe eines Puffers zu erhalten.                                                    |
| `BUFFER_USAGE`         | 0x8765 | Wird an `getBufferParameter` übergeben, um den Hinweis für den Puffer zu erhalten, der bei seiner Erstellung übermittelt wurde.    |

### Vertex-Attribute

Konstanten, die an [`WebGLRenderingContext.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) übergeben werden.

| Konstantenname                       | Wert   | Beschreibung                                                                        |
| ------------------------------------ | ------ | ----------------------------------------------------------------------------------- |
| `CURRENT_VERTEX_ATTRIB`              | 0x8626 | Wird an `getVertexAttrib` übergeben, um das aktuelle Vertex-Attribut zurückzulesen. |
| `VERTEX_ATTRIB_ARRAY_ENABLED`        | 0x8622 |                                                                                     |
| `VERTEX_ATTRIB_ARRAY_SIZE`           | 0x8623 |                                                                                     |
| `VERTEX_ATTRIB_ARRAY_STRIDE`         | 0x8624 |                                                                                     |
| `VERTEX_ATTRIB_ARRAY_TYPE`           | 0x8625 |                                                                                     |
| `VERTEX_ATTRIB_ARRAY_NORMALIZED`     | 0x886A |                                                                                     |
| `VERTEX_ATTRIB_ARRAY_POINTER`        | 0x8645 |                                                                                     |
| `VERTEX_ATTRIB_ARRAY_BUFFER_BINDING` | 0x889F |                                                                                     |

### Schaltflächen

Konstanten, die an [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace) übergeben werden.

| Konstantenname   | Wert   | Beschreibung                                                                                                                                                                |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CULL_FACE`      | 0x0B44 | Wird an `enable`/`disable` übergeben, um das Schalten ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um die aktuelle Methode zum Schalten zu ermitteln. |
| `FRONT`          | 0x0404 | Wird an `cullFace` übergeben, um anzugeben, dass nur Vorderseiten ausgesondert werden sollen.                                                                               |
| `BACK`           | 0x0405 | Wird an `cullFace` übergeben, um anzugeben, dass nur Rückseiten ausgesondert werden sollen.                                                                                 |
| `FRONT_AND_BACK` | 0x0408 | Wird an `cullFace` übergeben, um anzugeben, dass Vorder- und Rückseiten ausgesondert werden sollen.                                                                         |

### Aktivieren und Deaktivieren

Konstanten, die an [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) oder [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable) übergeben werden.

| Konstantenname             | Wert   | Beschreibung                                                                                                                                                                                                                                                                         |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `BLEND`                    | 0x0BE2 | Wird an `enable`/`disable` übergeben um das Mischen ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um die aktuelle Mischmethode zu erhalten.                                                                                                                     |
| `DEPTH_TEST`               | 0x0B71 | Wird an `enable`/`disable` übergeben um der Tiefentest ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um den Tiefentest abzufragen.                                                                                                                              |
| `DITHER`                   | 0x0BD0 | Wird an `enable`/`disable` übergeben um das Dithering ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um die aktuelle Dithering-Methode zu erhalten.                                                                                                              |
| `POLYGON_OFFSET_FILL`      | 0x8037 | Wird an `enable`/`disable` übergeben um den Polygon-Offset ein-/auszuschalten. Nützlich bei der Darstellung von verdeckten Linienbildern, Aufklebern und soliden Objekten mit hervorgehobenen Kanten. Kann auch mit `getParameter` verwendet werden, um den Schalachtest abzufragen. |
| `SAMPLE_ALPHA_TO_COVERAGE` | 0x809E | Wird an `enable`/`disable` übergeben um das Alpha-to-Coverage ein-/auszuschalten. Wird beim Multi-Sampling von Alpha-Kanälen verwendet.                                                                                                                                              |
| `SAMPLE_COVERAGE`          | 0x80A0 | Wird an `enable`/`disable` übergeben um die Stichprobenabdeckung ein-/auszuschalten. Wird beim Multi-Sampling verwendet.                                                                                                                                                             |
| `SCISSOR_TEST`             | 0x0C11 | Wird an `enable`/`disable` übergeben um den Schalachtest ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um den Schalachtest abzufragen.                                                                                                                          |
| `STENCIL_TEST`             | 0x0B90 | Wird an `enable`/`disable` übergeben um den Schablonentest ein-/auszuschalten. Kann auch mit `getParameter` verwendet werden, um den Schablonentest abzufragen.                                                                                                                      |

### Fehler

Konstanten, die von [`WebGLRenderingContext.getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) zurückgegeben werden.

| Konstantenname       | Wert   | Beschreibung                       |
| -------------------- | ------ | ---------------------------------- |
| `NO_ERROR`           | 0      | Wird von `getError` zurückgegeben. |
| `INVALID_ENUM`       | 0x0500 | Wird von `getError` zurückgegeben. |
| `INVALID_VALUE`      | 0x0501 | Wird von `getError` zurückgegeben. |
| `INVALID_OPERATION`  | 0x0502 | Wird von `getError` zurückgegeben. |
| `OUT_OF_MEMORY`      | 0x0505 | Wird von `getError` zurückgegeben. |
| `CONTEXT_LOST_WEBGL` | 0x9242 | Wird von `getError` zurückgegeben. |

### Vorderseite

Konstanten, die an [`WebGLRenderingContext.frontFace()`](/de/docs/Web/API/WebGLRenderingContext/frontFace) übergeben werden.

| Konstantenname | Wert   | Beschreibung                                                                                                             |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| `CW`           | 0x0900 | Wird an `frontFace` übergeben, um anzugeben, dass die Vorderseite eines Polygons im Uhrzeigersinn gezeichnet wird        |
| `CCW`          | 0x0901 | Wird an `frontFace` übergeben, um anzugeben, dass die Vorderseite eines Polygons gegen den Uhrzeigersinn gezeichnet wird |

### Hinweise

Konstanten, die an [`WebGLRenderingContext.hint()`](/de/docs/Web/API/WebGLRenderingContext/hint) übergeben werden

| Konstantenname         | Wert   | Beschreibung                                                                                                                                                                  |
| ---------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DONT_CARE`            | 0x1100 | Es gibt keine Präferenz für dieses Verhalten.                                                                                                                                 |
| `FASTEST`              | 0x1101 | Das effizienteste Verhalten sollte verwendet werden.                                                                                                                          |
| `NICEST`               | 0x1102 | Die korrekteste oder qualitativ hochwertigste Option sollte verwendet werden.                                                                                                 |
| `GENERATE_MIPMAP_HINT` | 0x8192 | Hinweis auf die Qualität des Filterns beim Erzeugen von Mipmap-Bildern mit [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap). |

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

| Konstantenname                     | Wert   | Beschreibung                                                                                                                                                                                                                                                 |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `FRAGMENT_SHADER`                  | 0x8B30 | Wird an `createShader` übergeben, um einen Fragment-Shader zu definieren.                                                                                                                                                                                    |
| `VERTEX_SHADER`                    | 0x8B31 | Wird an `createShader` übergeben, um einen Vertex-Shader zu definieren.                                                                                                                                                                                      |
| `COMPILE_STATUS`                   | 0x8B81 | Wird an `getShaderParameter` übergeben, um den Status der Kompilierung zu erhalten. Gibt false zurück, wenn der Shader nicht kompiliert wurde. Sie können dann `getShaderInfoLog` abfragen, um den genauen Fehler zu ermitteln.                              |
| `DELETE_STATUS`                    | 0x8B80 | Wird an `getShaderParameter` übergeben, um festzustellen, ob ein Shader über `deleteShader` gelöscht wurde. Gibt true zurück, wenn dies der Fall war, andernfalls false.                                                                                     |
| `LINK_STATUS`                      | 0x8B82 | Wird an `getProgramParameter` übergeben, nachdem `linkProgram` aufgerufen wurde, um festzustellen, ob ein Programm korrekt verknüpft wurde. Gibt false zurück, wenn Fehler auftraten. Verwenden Sie `getProgramInfoLog`, um den genauen Fehler zu ermitteln. |
| `VALIDATE_STATUS`                  | 0x8B83 | Wird an `getProgramParameter` übergeben, nachdem `validateProgram` aufgerufen wurde, um festzustellen, ob es gültig ist. Gibt false zurück, wenn Fehler gefunden wurden.                                                                                     |
| `ATTACHED_SHADERS`                 | 0x8B85 | Wird an `getProgramParameter` übergeben, nachdem `attachShader` aufgerufen wurde, um festzustellen, ob der Shader korrekt angehängt wurde. Gibt false zurück, wenn Fehler aufgetreten sind.                                                                  |
| `ACTIVE_ATTRIBUTES`                | 0x8B89 | Wird an `getProgramParameter` übergeben, um die Anzahl der aktiven Attribute in einem Programm zu erhalten.                                                                                                                                                  |
| `ACTIVE_UNIFORMS`                  | 0x8B86 | Wird an `getProgramParameter` übergeben, um die Anzahl der aktiven Uniforms in einem Programm zu erhalten.                                                                                                                                                   |
| `MAX_VERTEX_ATTRIBS`               | 0x8869 | Die maximale Anzahl von Einträgen, die in der Vertex-Attributliste möglich sind.                                                                                                                                                                             |
| `MAX_VERTEX_UNIFORM_VECTORS`       | 0x8DFB |                                                                                                                                                                                                                                                              |
| `MAX_VARYING_VECTORS`              | 0x8DFC |                                                                                                                                                                                                                                                              |
| `MAX_COMBINED_TEXTURE_IMAGE_UNITS` | 0x8B4D |                                                                                                                                                                                                                                                              |
| `MAX_VERTEX_TEXTURE_IMAGE_UNITS`   | 0x8B4C |                                                                                                                                                                                                                                                              |
| `MAX_TEXTURE_IMAGE_UNITS`          | 0x8872 | Implementierungsabhängige Anzahl der maximalen Textur-Einheiten. Mindestens 8.                                                                                                                                                                               |
| `MAX_FRAGMENT_UNIFORM_VECTORS`     | 0x8DFD |                                                                                                                                                                                                                                                              |
| `SHADER_TYPE`                      | 0x8B4F |                                                                                                                                                                                                                                                              |
| `SHADING_LANGUAGE_VERSION`         | 0x8B8C |                                                                                                                                                                                                                                                              |
| `CURRENT_PROGRAM`                  | 0x8B8D |                                                                                                                                                                                                                                                              |

### Tiefen- oder Schablonentests

Konstanten, die an [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc) oder [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc) übergeben werden.

| Konstantenname | Wert   | Beschreibung                                                                                                                                                                                               |
| -------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEVER`        | 0x0200 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass die Tiefen- oder Schablonentests nie bestanden werden, d.h. nichts wird gezeichnet.                                           |
| `LESS`         | 0x0201 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass die Tiefen- oder Schablonentests bestanden werden, wenn der neue Tiefenwert kleiner ist als der gespeicherte Wert.            |
| `EQUAL`        | 0x0202 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass die Tiefen- oder Schablonentests bestanden werden, wenn der neue Tiefenwert dem gespeicherten Wert entspricht.                |
| `LEQUAL`       | 0x0203 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass die Tiefen- oder Schablonentests bestanden werden, wenn der neue Tiefenwert kleiner oder gleich dem gespeicherten Wert ist.   |
| `GREATER`      | 0x0204 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass die Tiefen- oder Schablonentests bestanden werden, wenn der neue Tiefenwert größer ist als der gespeicherte Wert.             |
| `NOTEQUAL`     | 0x0205 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass die Tiefen- oder Schablonentests bestanden werden, wenn der neue Tiefenwert ungleich dem gespeicherten Wert ist.              |
| `GEQUAL`       | 0x0206 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass die Tiefen- oder Schablonentests bestanden werden, wenn der neue Tiefenwert größer oder gleich dem gespeicherten Wert ist.    |
| `ALWAYS`       | 0x0207 | Wird an `depthFunction` oder `stencilFunction` übergeben, um anzugeben, dass die Tiefen- oder Schablonentests immer bestanden werden, d.h. die Pixel werden in der Reihenfolge ihrer Zeichnung gezeichnet. |

### Schablonenaktionen

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

| Konstantenname                | Wert            | Beschreibung                      |
| ----------------------------- | --------------- | --------------------------------- |
| `NEAREST`                     | 0x2600          |                                   |
| `LINEAR`                      | 0x2601          |                                   |
| `NEAREST_MIPMAP_NEAREST`      | 0x2700          |                                   |
| `LINEAR_MIPMAP_NEAREST`       | 0x2701          |                                   |
| `NEAREST_MIPMAP_LINEAR`       | 0x2702          |                                   |
| `LINEAR_MIPMAP_LINEAR`        | 0x2703          |                                   |
| `TEXTURE_MAG_FILTER`          | 0x2800          |                                   |
| `TEXTURE_MIN_FILTER`          | 0x2801          |                                   |
| `TEXTURE_WRAP_S`              | 0x2802          |                                   |
| `TEXTURE_WRAP_T`              | 0x2803          |                                   |
| `TEXTURE_2D`                  | 0x0DE1          |                                   |
| `TEXTURE`                     | 0x1702          |                                   |
| `TEXTURE_CUBE_MAP`            | 0x8513          |                                   |
| `TEXTURE_BINDING_CUBE_MAP`    | 0x8514          |                                   |
| `TEXTURE_CUBE_MAP_POSITIVE_X` | 0x8515          |                                   |
| `TEXTURE_CUBE_MAP_NEGATIVE_X` | 0x8516          |                                   |
| `TEXTURE_CUBE_MAP_POSITIVE_Y` | 0x8517          |                                   |
| `TEXTURE_CUBE_MAP_NEGATIVE_Y` | 0x8518          |                                   |
| `TEXTURE_CUBE_MAP_POSITIVE_Z` | 0x8519          |                                   |
| `TEXTURE_CUBE_MAP_NEGATIVE_Z` | 0x851A          |                                   |
| `MAX_CUBE_MAP_TEXTURE_SIZE`   | 0x851C          |                                   |
| `TEXTURE0 - 31`               | 0x84C0 - 0x84DF | Eine Textureinheit.               |
| `ACTIVE_TEXTURE`              | 0x84E0          | Die aktuell aktive Textureinheit. |
| `REPEAT`                      | 0x2901          |                                   |
| `CLAMP_TO_EDGE`               | 0x812F          |                                   |
| `MIRRORED_REPEAT`             | 0x8370          |                                   |

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

### Shader Präzisionsspezifizierte Typen

| Konstantenname | Wert   | Beschreibung |
| -------------- | ------ | ------------ |
| `LOW_FLOAT`    | 0x8DF0 |              |
| `MEDIUM_FLOAT` | 0x8DF1 |              |
| `HIGH_FLOAT`   | 0x8DF2 |              |
| `LOW_INT`      | 0x8DF3 |              |
| `MEDIUM_INT`   | 0x8DF4 |              |
| `HIGH_INT`     | 0x8DF5 |              |

### Framebuffers und Renderbuffers

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

## Zusätzliche Konstanten in WebGL 2 definiert

Diese Konstanten sind in der [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Schnittstelle definiert. Alle WebGL-1-Konstanten sind auch in einem WebGL-2-Kontext verfügbar.

### Abrufen von GL-Parameterinformationen

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

### Draw Buffers

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

### Sampler

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

### Buffer

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

### Transformations-Feedback

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

### Framebuffer und Renderbuffer

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

### Synchronisationsobjekte

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

## Konstanten in WebGL-Erweiterungen definiert

### ANGLE_instanced_arrays

| Konstantenname                      | Wert   | Beschreibung                                                                      |
| ----------------------------------- | ------ | --------------------------------------------------------------------------------- |
| `VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE` | 0x88FE | Beschreibt den Frequenzteiler, der für das instanzierte Rendering verwendet wird. |

Weitere Informationen finden Sie unter [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays).

### WEBGL_debug_renderer_info

| Konstantenname            | Wert   | Beschreibung                                                                              |
| ------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| `UNMASKED_VENDOR_WEBGL`   | 0x9245 | Wird an `getParameter` übergeben, um den Herstellerstring des Grafiktreibers zu erhalten. |
| `UNMASKED_RENDERER_WEBGL` | 0x9246 | Wird an `getParameter` übergeben, um den Rendererstring des Grafiktreibers zu erhalten.   |

Weitere Informationen finden Sie unter [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info).

### EXT_texture_filter_anisotropic

| Konstantenname                   | Wert   | Beschreibung                                                                                          |
| -------------------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `MAX_TEXTURE_MAX_ANISOTROPY_EXT` | 0x84FF | Gibt die maximal verfügbare Anisotropie zurück.                                                       |
| `TEXTURE_MAX_ANISOTROPY_EXT`     | 0x84FE | Wird an `texParameter` übergeben, um die gewünschte maximale Anisotropie für eine Textur festzulegen. |

Weitere Informationen finden Sie unter [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic).

### WEBGL_compressed_texture_s3tc

| Konstantenname                  | Wert   | Beschreibung                                                                                                                                                                  |
| ------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `COMPRESSED_RGB_S3TC_DXT1_EXT`  | 0x83F0 | Ein DXT1-komprimiertes Bild im RGB-Bildformat.                                                                                                                                |
| `COMPRESSED_RGBA_S3TC_DXT1_EXT` | 0x83F1 | Ein DXT1-komprimiertes Bild im RGB-Bildformat mit einem Ein/Aus-Alpha-Wert.                                                                                                   |
| `COMPRESSED_RGBA_S3TC_DXT3_EXT` | 0x83F2 | Ein DXT3-komprimiertes Bild im RGBA-Bildformat. Im Vergleich zu einer 32-Bit-RGBA-Textur bietet es eine 4:1-Kompression.                                                      |
| `COMPRESSED_RGBA_S3TC_DXT5_EXT` | 0x83F3 | Ein DXT5-komprimiertes Bild im RGBA-Bildformat. Es bietet ebenfalls eine 4:1-Kompression, unterscheidet sich jedoch von der DXT3-Kompression in der Art der Alphakompression. |

Weitere Informationen finden Sie unter [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc).

### WEBGL_compressed_texture_etc

| Konstantenname                              | Wert   | Beschreibung                                                                                                                                            |
| ------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `COMPRESSED_R11_EAC`                        | 0x9270 | Kompression im ein-Kanal (rot) unsigned Format.                                                                                                         |
| `COMPRESSED_SIGNED_R11_EAC`                 | 0x9271 | Kompression im ein-Kanal (rot) signed Format.                                                                                                           |
| `COMPRESSED_RG11_EAC`                       | 0x9272 | Kompression im zwei-Kanal (rot und grün) unsigned Format.                                                                                               |
| `COMPRESSED_SIGNED_RG11_EAC`                | 0x9273 | Kompression im zwei-Kanal (rot und grün) signed Format.                                                                                                 |
| `COMPRESSED_RGB8_ETC2`                      | 0x9274 | Komprimiert RGB8-Daten ohne Alphakanal.                                                                                                                 |
| `COMPRESSED_RGBA8_ETC2_EAC`                 | 0x9275 | Komprimiert RGBA8-Daten. Der RGB-Teil wird genauso wie `RGB_ETC2` encodiert, aber der Alpha-Teil wird separat encodiert.                                |
| `COMPRESSED_SRGB8_ETC2`                     | 0x9276 | Komprimiert sRGB8-Daten ohne Alphakanal.                                                                                                                |
| `COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`          | 0x9277 | Komprimiert sRGBA8-Daten. Der sRGB-Teil wird genauso wie `SRGB_ETC2` encodiert, aber der Alpha-Teil wird separat encodiert.                             |
| `COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`  | 0x9278 | Ähnlich wie `RGB8_ETC`, aber mit der Fähigkeit, den Alphakanal durchzustoßen, was bedeutet, ihn vollständig undurchsichtig oder transparent zu machen.  |
| `COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2` | 0x9279 | Ähnlich wie `SRGB8_ETC`, aber mit der Fähigkeit, den Alphakanal durchzustoßen, was bedeutet, ihn vollständig undurchsichtig oder transparent zu machen. |

Weitere Informationen finden Sie unter [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc).

### WEBGL_compressed_texture_pvrtc

| Konstantenname                     | Wert   | Beschreibung                                                 |
| ---------------------------------- | ------ | ------------------------------------------------------------ |
| `COMPRESSED_RGB_PVRTC_4BPPV1_IMG`  | 0x8C00 | RGB-Kompression im 4-Bit-Modus. Ein Block für je 4×4 Pixel.  |
| `COMPRESSED_RGBA_PVRTC_4BPPV1_IMG` | 0x8C02 | RGBA-Kompression im 4-Bit-Modus. Ein Block für je 4×4 Pixel. |
| `COMPRESSED_RGB_PVRTC_2BPPV1_IMG`  | 0x8C01 | RGB-Kompression im 2-Bit-Modus. Ein Block für je 8×4 Pixel.  |
| `COMPRESSED_RGBA_PVRTC_2BPPV1_IMG` | 0x8C03 | RGBA-Kompression im 2-Bit-Modus. Ein Block für je 8×4 Pixel. |

Weitere Informationen finden Sie unter [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc).

### WEBGL_compressed_texture_etc1

| Konstantenname              | Wert   | Beschreibung                                  |
| --------------------------- | ------ | --------------------------------------------- |
| `COMPRESSED_RGB_ETC1_WEBGL` | 0x8D64 | Komprimiert 24-Bit-RGB-Daten ohne Alphakanal. |

Weitere Informationen finden Sie unter [`WEBGL_compressed_texture_etc1`](/de/docs/Web/API/WEBGL_compressed_texture_etc1).

### WEBGL_depth_texture

| Konstantenname            | Wert   | Beschreibung                                       |
| ------------------------- | ------ | -------------------------------------------------- |
| `UNSIGNED_INT_24_8_WEBGL` | 0x84FA | Unsigned Integer Typ für 24-Bit-Tiefentexturdaten. |

Weitere Informationen finden Sie unter [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture).

### OES_texture_half_float

| Konstantenname   | Wert   | Beschreibung                   |
| ---------------- | ------ | ------------------------------ |
| `HALF_FLOAT_OES` | 0x8D61 | Halber Gleitkommatyp (16-Bit). |

Weitere Informationen finden Sie unter [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float).

### WEBGL_color_buffer_float

| Konstantenname                              | Wert   | Beschreibung                             |
| ------------------------------------------- | ------ | ---------------------------------------- |
| `RGBA32F_EXT`                               | 0x8814 | RGBA 32-Bit Gleitkomma Farbrenderformat. |
| `RGB32F_EXT`                                | 0x8815 | RGB 32-Bit Gleitkomma Farbrenderformat.  |
| `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT` | 0x8211 |                                          |
| `UNSIGNED_NORMALIZED_EXT`                   | 0x8C17 |                                          |

Weitere Informationen finden Sie unter [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float).

### EXT_blend_minmax

| Konstantenname | Wert   | Beschreibung                                                      |
| -------------- | ------ | ----------------------------------------------------------------- |
| `MIN_EXT`      | 0x8007 | Erzeugt die minimalen Farbkomponenten der Quell- und Ziel-Farben. |
| `MAX_EXT`      | 0x8008 | Erzeugt die maximalen Farbkomponenten der Quell- und Ziel-Farben. |

Weitere Informationen finden Sie unter [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax).

### EXT_sRGB

| Konstantenname                              | Wert   | Beschreibung                                                  |
| ------------------------------------------- | ------ | ------------------------------------------------------------- |
| `SRGB_EXT`                                  | 0x8C40 | Unsized sRGB-Format, das die Präzision dem Treiber überlässt. |
| `SRGB_ALPHA_EXT`                            | 0x8C42 | Unsized sRGB-Format mit unsized Alphakomponente.              |
| `SRGB8_ALPHA8_EXT`                          | 0x8C43 | Sized (8-Bit) sRGB- und Alpha-Formate.                        |
| `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT` | 0x8210 | Gibt die Farb-Codierung des Framebuffers zurück.              |

Weitere Informationen finden Sie unter [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB).

### OES_standard_derivatives

| Konstantenname                        | Wert   | Beschreibung                                                                                                        |
| ------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `FRAGMENT_SHADER_DERIVATIVE_HINT_OES` | 0x8B8B | Gibt die Genauigkeit der Ableitungsberechnung für die eingebauten GLSL-Funktionen an: `dFdx`, `dFdy`, und `fwidth`. |

Weitere Informationen finden Sie unter [`OES_standard_derivatives`](/de/docs/Web/API/OES_standard_derivatives).

### WEBGL_draw_buffers

| Konstantenname                | Wert   | Beschreibung                                                |
| ----------------------------- | ------ | ----------------------------------------------------------- |
| `COLOR_ATTACHMENT0_WEBGL`     | 0x8CE0 | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT1_WEBGL`     | 0x8CE1 | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT2_WEBGL`     | 0x8CE2 | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT3_WEBGL`     | 0x8CE3 | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT4_WEBGL`     | 0x8CE4 | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT5_WEBGL`     | 0x8CE5 | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT6_WEBGL`     | 0x8CE6 | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT7_WEBGL`     | 0x8CE7 | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT8_WEBGL`     | 0x8CE8 | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT9_WEBGL`     | 0x8CE9 | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT10_WEBGL`    | 0x8CEA | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT11_WEBGL`    | 0x8CEB | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT12_WEBGL`    | 0x8CEC | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT13_WEBGL`    | 0x8CED | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT14_WEBGL`    | 0x8CEE | Farb-Anheftungspunkt des Framebuffers                       |
| `COLOR_ATTACHMENT15_WEBGL`    | 0x8CEF | Farb-Anheftungspunkt des Framebuffers                       |
| `DRAW_BUFFER0_WEBGL`          | 0x8825 | Zeichenpuffer                                               |
| `DRAW_BUFFER1_WEBGL`          | 0x8826 | Zeichenpuffer                                               |
| `DRAW_BUFFER2_WEBGL`          | 0x8827 | Zeichenpuffer                                               |
| `DRAW_BUFFER3_WEBGL`          | 0x8828 | Zeichenpuffer                                               |
| `DRAW_BUFFER4_WEBGL`          | 0x8829 | Zeichenpuffer                                               |
| `DRAW_BUFFER5_WEBGL`          | 0x882A | Zeichenpuffer                                               |
| `DRAW_BUFFER6_WEBGL`          | 0x882B | Zeichenpuffer                                               |
| `DRAW_BUFFER7_WEBGL`          | 0x882C | Zeichenpuffer                                               |
| `DRAW_BUFFER8_WEBGL`          | 0x882D | Zeichenpuffer                                               |
| `DRAW_BUFFER9_WEBGL`          | 0x882E | Zeichenpuffer                                               |
| `DRAW_BUFFER10_WEBGL`         | 0x882F | Zeichenpuffer                                               |
| `DRAW_BUFFER11_WEBGL`         | 0x8830 | Zeichenpuffer                                               |
| `DRAW_BUFFER12_WEBGL`         | 0x8831 | Zeichenpuffer                                               |
| `DRAW_BUFFER13_WEBGL`         | 0x8832 | Zeichenpuffer                                               |
| `DRAW_BUFFER14_WEBGL`         | 0x8833 | Zeichenpuffer                                               |
| `DRAW_BUFFER15_WEBGL`         | 0x8834 | Zeichenpuffer                                               |
| `MAX_COLOR_ATTACHMENTS_WEBGL` | 0x8CDF | Maximale Anzahl von Farb-Anheftungspunkten des Framebuffers |
| `MAX_DRAW_BUFFERS_WEBGL`      | 0x8824 | Maximale Anzahl von Zeichenpuffern                          |

Weitere Informationen finden Sie unter [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers).

### OES_vertex_array_object

| Konstantenname             | Wert   | Beschreibung                             |
| -------------------------- | ------ | ---------------------------------------- |
| `VERTEX_ARRAY_BINDING_OES` | 0x85B5 | Das gebundene Vertex-Array-Objekt (VAO). |

Weitere Informationen finden Sie unter [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object).

### EXT_disjoint_timer_query

| Konstantenname               | Wert   | Beschreibung                                                                                            |
| ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| `QUERY_COUNTER_BITS_EXT`     | 0x8864 | Die Anzahl der Bits, die zur Speicherung des Abfrageergebnisses für das gegebene Ziel verwendet werden. |
| `CURRENT_QUERY_EXT`          | 0x8865 | Die aktuell aktive Abfrage.                                                                             |
| `QUERY_RESULT_EXT`           | 0x8866 | Das Abfrageergebnis.                                                                                    |
| `QUERY_RESULT_AVAILABLE_EXT` | 0x8867 | Ein Boolean, der angibt, ob ein Abfrageergebnis verfügbar ist.                                          |
| `TIME_ELAPSED_EXT`           | 0x88BF | Verstrichene Zeit (in Nanosekunden).                                                                    |
| `TIMESTAMP_EXT`              | 0x8E28 | Die aktuelle Zeit.                                                                                      |
| `GPU_DISJOINT_EXT`           | 0x8FBB | Ein Boolean, der angibt, ob die GPU eine disjunkte Operation ausgeführt hat.                            |

Weitere Informationen finden Sie unter [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
