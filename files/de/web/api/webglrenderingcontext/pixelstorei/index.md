---
title: "WebGLRenderingContext: Methode pixelStorei()"
short-title: pixelStorei()
slug: Web/API/WebGLRenderingContext/pixelStorei
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.pixelStorei()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt die Pixel-Speichermodi fest.

## Syntax

```js-nolint
pixelStorei(pname, param)
```

### Parameter

- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welcher Parameter gesetzt werden soll. Siehe unten für mögliche
    Werte.
- `param`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der einen Wert angibt, auf den der `pname`
    Parameter gesetzt werden soll. Siehe unten für mögliche Werte.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Pixel-Speicherparameter

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Parametername (für <code>pname</code>)</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Typ</th>
      <th scope="col">Standardwert</th>
      <th scope="col">Erlaubte Werte (für <code>param</code>)</th>
      <th scope="col">Spezifiziert in</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.PACK_ALIGNMENT</code></td>
      <td>Packen von Pixeldaten in den Speicher</td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>4</td>
      <td>1, 2, 4, 8</td>
      <td>OpenGL ES 2.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ALIGNMENT</code></td>
      <td>Entpacken von Pixeldaten aus dem Speicher.</td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>4</td>
      <td>1, 2, 4, 8</td>
      <td>OpenGL ES 2.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_FLIP_Y_WEBGL</code></td>
      <td>Spiegeln der Quelldaten entlang der vertikalen Achse, wenn wahr.</td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>false</td>
      <td>true, false</td>
      <td>WebGL</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL</code></td>
      <td>Multipliziert den Alphakanal in die anderen Farbkanäle hinein</td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>false</td>
      <td>true, false</td>
      <td>WebGL</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_COLORSPACE_CONVERSION_WEBGL</code></td>
      <td>Standardfarbraumkonvertierung oder keine Farbraumkonvertierung.</td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td><code>gl.BROWSER_DEFAULT_WEBGL</code></td>
      <td><code>gl.BROWSER_DEFAULT_WEBGL</code>, <code>gl.NONE</code></td>
      <td>WebGL</td>
    </tr>
  </tbody>
</table>

Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL-2-Kontext", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Typ</th>
      <th scope="col">Standardwert</th>
      <th scope="col">Erlaubte Werte (für <code>param</code>)</th>
      <th scope="col">Spezifiziert in</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.PACK_ROW_LENGTH</code></td>
      <td>Anzahl der Pixel in einer Zeile.</td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_PIXELS</code></td>
      <td>
        Anzahl der Pixelpositionen, die übersprungen werden, bevor das erste Pixel in den
        Speicher geschrieben wird.
      </td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_ROWS</code></td>
      <td>
        Anzahl der Pixelreihen, die übersprungen werden, bevor das erste Pixel
        in den Speicher geschrieben wird
      </td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ROW_LENGTH</code></td>
      <td>Anzahl der Pixel in einer Zeile.</td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_IMAGE_HEIGHT</code></td>
      <td>Bildhöhe für das Lesen von Pixeldaten aus dem Speicher verwendet</td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_PIXELS</code></td>
      <td>
        Anzahl der Pixelbilder, die übersprungen werden, bevor das erste Pixel aus dem
        Speicher gelesen wird
      </td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_ROWS</code></td>
      <td>
        Anzahl der Pixelreihen, die übersprungen werden, bevor das erste Pixel aus
        dem Speicher gelesen wird
      </td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_IMAGES</code></td>
      <td>
        Anzahl der Pixelbilder, die übersprungen werden, bevor das erste Pixel aus dem
        Speicher gelesen wird
      </td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
  </tbody>
</table>

## Beispiele

Das Setzen des Pixel-Speichermodus wirkt sich auf die
[`WebGLRenderingContext.readPixels()`](/de/docs/Web/API/WebGLRenderingContext/readPixels)-Operationen aus, sowie auf das Entpacken
von Texturen mit den Methoden [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und
[`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D).

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.pixelStorei(gl.PACK_ALIGNMENT, 4);
```

Um die Werte für das Packen und Entpacken von Pixeldaten zu überprüfen, können Sie dieselben
Pixel-Speicherparameter mit [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) abfragen.

```js
gl.getParameter(gl.PACK_ALIGNMENT);
gl.getParameter(gl.UNPACK_ALIGNMENT);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.readPixels()`](/de/docs/Web/API/WebGLRenderingContext/readPixels)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
