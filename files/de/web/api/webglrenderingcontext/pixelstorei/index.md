---
title: "WebGLRenderingContext: pixelStorei()-Methode"
short-title: pixelStorei()
slug: Web/API/WebGLRenderingContext/pixelStorei
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.pixelStorei()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) legt die Pixel-Speichermodi fest.

## Syntax

```js-nolint
pixelStorei(pname, param)
```

### Parameter

- `pname`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, welcher Parameter gesetzt werden soll. Siehe unten für mögliche Werte.
- `param`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der den Wert angibt, auf den der `pname`-Parameter gesetzt werden soll. Siehe unten für mögliche Werte.

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
      <td>Paketierung von Pixel-Daten in den Speicher</td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>4</td>
      <td>1, 2, 4, 8</td>
      <td>OpenGL ES 2.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ALIGNMENT</code></td>
      <td>Auspacken von Pixel-Daten aus dem Speicher.</td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>4</td>
      <td>1, 2, 4, 8</td>
      <td>OpenGL ES 2.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_FLIP_Y_WEBGL</code></td>
      <td>Dreht die Quelldaten entlang ihrer vertikalen Achse, wenn true.</td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td>false</td>
      <td>true, false</td>
      <td>WebGL</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL</code></td>
      <td>Multipliziert den Alpha-Kanal in die anderen Farbkanäle</td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td>false</td>
      <td>true, false</td>
      <td>WebGL</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_COLORSPACE_CONVERSION_WEBGL</code></td>
      <td>Standard-Farbraumkonvertierung oder keine Farbraumkonvertierung.</td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td><code>gl.BROWSER_DEFAULT_WEBGL</code></td>
      <td><code>gl.BROWSER_DEFAULT_WEBGL</code>, <code>gl.NONE</code></td>
      <td>WebGL</td>
    </tr>
  </tbody>
</table>

Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Context", "", 1)}}, sind zusätzlich die folgenden Werte verfügbar:

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
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_PIXELS</code></td>
      <td>
        Anzahl der Pixelpositionen, die übersprungen werden, bevor das erste Pixel in
        den Speicher geschrieben wird.
      </td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_ROWS</code></td>
      <td>
        Anzahl der Zeilen von Pixelpositionen, die übersprungen werden, bevor das erste
        Pixel in den Speicher geschrieben wird.
      </td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ROW_LENGTH</code></td>
      <td>Anzahl der Pixel in einer Zeile.</td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_IMAGE_HEIGHT</code></td>
      <td>Bilderhöhe, die zum Lesen von Pixel-Daten aus dem Speicher verwendet wird</td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_PIXELS</code></td>
      <td>
        Anzahl der Pixelbilder, die übersprungen werden, bevor das erste Pixel aus
        dem Speicher gelesen wird.
      </td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_ROWS</code></td>
      <td>
        Anzahl der Zeilen von Pixelpositionen, die übersprungen werden, bevor das erste
        Pixel aus dem Speicher gelesen wird.
      </td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_IMAGES</code></td>
      <td>
        Anzahl der Pixelbilder, die übersprungen werden, bevor das erste Pixel aus
        dem Speicher gelesen wird.
      </td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>0</td>
      <td>0 bis <code>Infinity</code></td>
      <td>OpenGL ES 3.0</td>
    </tr>
  </tbody>
</table>

## Beispiele

Die Einstellung des Pixel-Speichermodus beeinflusst die
{{domxref("WebGLRenderingContext.readPixels()")}}-Operationen sowie das Auspacken von
Texturen mit den Methoden {{domxref("WebGLRenderingContext.texImage2D()")}} und
{{domxref("WebGLRenderingContext.texSubImage2D()")}}.

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.pixelStorei(gl.PACK_ALIGNMENT, 4);
```

Um die Werte für das Packen und Entpacken von Pixel-Daten zu überprüfen, können Sie dieselben
Pixel-Speicherparameter mit {{domxref("WebGLRenderingContext.getParameter()")}} abfragen.

```js
gl.getParameter(gl.PACK_ALIGNMENT);
gl.getParameter(gl.UNPACK_ALIGNMENT);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.readPixels()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
