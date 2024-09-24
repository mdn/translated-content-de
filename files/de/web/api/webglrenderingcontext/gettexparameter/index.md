---
title: "WebGLRenderingContext: Methode getTexParameter()"
short-title: getTexParameter()
slug: Web/API/WebGLRenderingContext/getTexParameter
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getTexParameter()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über die
angegebene Textur zurück.

## Syntax

```js-nolint
getTexParameter(target, pname)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine Cube-Map-Textur.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}
    sind zusätzlich folgende Werte verfügbar:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die abzufragenden Informationen angibt. Mögliche Werte:

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">pname</th>
          <th scope="col">Rückgabewert-Typ</th>
          <th scope="col">Beschreibung</th>
          <th scope="col">Mögliche Rückgabewerte</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colspan="4">Verfügbar in einem WebGL 1-Kontext</th>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAG_FILTER</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Texturvergrößerungsfilter</td>
          <td><code>gl.LINEAR</code> (Standardwert), <code>gl.NEAREST</code>.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MIN_FILTER</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Texturverkleinerungsfilter</td>
          <td>
            <code>gl.LINEAR</code>, <code>gl.NEAREST</code>,
            <code>gl.NEAREST_MIPMAP_NEAREST</code>,
            <code>gl.LINEAR_MIPMAP_NEAREST</code>,
            <code>gl.NEAREST_MIPMAP_LINEAR</code> (Standardwert),
            <code>gl.LINEAR_MIPMAP_LINEAR</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_S</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Wickelfunktion für Texturkoordinate <code>s</code></td>
          <td>
            <code>gl.REPEAT</code> (Standardwert), <code>gl.CLAMP_TO_EDGE</code>,
            <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_T</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Wickelfunktion für Texturkoordinate <code>t</code></td>
          <td>
            <code>gl.REPEAT</code> (Standardwert), <code>gl.CLAMP_TO_EDGE</code>,
            <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
        <tr>
          <th colspan="4">
            Zusätzlich verfügbar bei Verwendung der
            {{domxref("EXT_texture_filter_anisotropic")}}-Erweiterung
          </th>
        </tr>
        <tr>
          <td><code>ext.TEXTURE_MAX_ANISOTROPY_EXT</code></td>
          <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
          <td>Maximale Anisotropie für eine Textur</td>
          <td>Beliebige Float-Werte.</td>
        </tr>
        <tr>
          <th colspan="4">Zusätzlich verfügbar bei Verwendung eines WebGL 2-Kontextes</th>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_BASE_LEVEL</code></td>
          <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
          <td>Textur-Mipmap-Level</td>
          <td>Beliebige Int-Werte.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_COMPARE_FUNC</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Vergleichsfunktion</td>
          <td>
            <code>gl.LEQUAL</code> (Standardwert), <code>gl.GEQUAL</code>,
            <code>gl.LESS</code>, <code>gl.GREATER</code>, <code>gl.EQUAL</code>,
            <code>gl.NOTEQUAL</code>, <code>gl.ALWAYS</code>, <code>gl.NEVER</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_COMPARE_MODE</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Texturvergleichsmodus</td>
          <td>
            <code>gl.NONE</code> (Standardwert),
            <code>gl.COMPARE_REF_TO_TEXTURE</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_IMMUTABLE_FORMAT</code></td>
          <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
          <td>Unveränderlichkeit des Texturformats und der Größe</td>
          <td>wahr oder falsch.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_IMMUTABLE_LEVELS</code></td>
          <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
          <td>?</td>
          <td>Beliebige Uint-Werte.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAX_LEVEL</code></td>
          <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
          <td>Maximales Textur-Mipmap-Array-Level</td>
          <td>Beliebige Int-Werte.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAX_LOD</code></td>
          <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
          <td>Maximum-Level-of-Detail-Wert der Textur</td>
          <td>Beliebige Float-Werte.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MIN_LOD</code></td>
          <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
          <td>Minimum-Level-of-Detail-Wert der Textur</td>
          <td>Beliebige Float-Werte.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_R</code></td>
          <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
          <td>Wickelfunktion für Texturkoordinate <code>r</code></td>
          <td>
            <code>gl.REPEAT</code> (Standardwert), <code>gl.CLAMP_TO_EDGE</code>,
            <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
      </tbody>
    </table>

### Rückgabewert

Gibt die angeforderten Texturinformationen zurück (wie mit `pname` angegeben). Wenn ein Fehler auftritt, wird [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgegeben.

## Beispiele

```js
gl.getTexParameter(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
