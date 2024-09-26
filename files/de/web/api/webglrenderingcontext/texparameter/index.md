---
title: "WebGLRenderingContext: texParameter[fi]() Methode"
short-title: texParameter[fi]()
slug: Web/API/WebGLRenderingContext/texParameter
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.texParameter[fi]()`** Methoden des [WebGL API](/de/docs/Web/API/WebGL_API) setzen Texturparameter.

## Syntax

```js-nolint
texParameterf(target, pname, param)
texParameteri(target, pname, param)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine kubisch gemappte Textur.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} sind zusätzlich folgende Werte verfügbar:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `param`

  - : Der `param` Parameter ist ein {{domxref("WebGL_API/Types", "GLfloat")}} oder
    {{domxref("WebGL_API/Types", "GLint")}}, der den Wert für den angegebenen Parameter angibt.

- `pname`
  - : Der `pname` Parameter ist ein {{domxref("WebGL_API/Types", "GLenum")}}, das den zu setzenden Texturparameter angibt.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><code>pname</code></th>
      <th scope="col">Beschreibung</th>
      <th scope="col"><code>param</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="3">Verfügbar in WebGL 1</th>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAG_FILTER</code></td>
      <td>Texturvergrößerungsfilter</td>
      <td><code>gl.LINEAR</code> (Standardwert), <code>gl.NEAREST</code>.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_FILTER</code></td>
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
      <td>Wicklungsfunktion für Texturkoordinate <code>s</code></td>
      <td>
        <code>gl.REPEAT</code> (Standardwert), <code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_T</code></td>
      <td>Wicklungsfunktion für Texturkoordinate <code>t</code></td>
      <td>
        <code>gl.REPEAT</code> (Standardwert), <code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
    <tr>
      <th colspan="3">
        Zusätzlich verfügbar bei Verwendung der
        {{domxref("EXT_texture_filter_anisotropic")}} Erweiterung
      </th>
    </tr>
    <tr>
      <td><code>ext.TEXTURE_MAX_ANISOTROPY_EXT</code></td>
      <td>Maximale Anisotropie für eine Textur</td>
      <td>Ein {{domxref("WebGL_API/Types", "GLfloat")}} Wert.</td>
    </tr>
    <tr>
      <th colspan="3">Zusätzlich verfügbar bei Verwendung eines WebGL 2 Kontexts</th>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BASE_LEVEL</code></td>
      <td>Textur Mipmap-Ebene</td>
      <td>Beliebige int-Werte.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_FUNC</code></td>
      <td>Textur Vergleichsfunktion</td>
      <td>
        <code>gl.LEQUAL</code> (Standardwert), <code>gl.GEQUAL</code>,
        <code>gl.LESS</code>, <code>gl.GREATER</code>, <code>gl.EQUAL</code>,
        <code>gl.NOTEQUAL</code>, <code>gl.ALWAYS</code>, <code>gl.NEVER</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_MODE</code></td>
      <td>Textur Vergleichsmodus</td>
      <td>
        <code>gl.NONE</code> (Standardwert),
        <code>gl.COMPARE_REF_TO_TEXTURE</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LEVEL</code></td>
      <td>Maximales Textur Mipmap Array-Niveau</td>
      <td>Beliebige int-Werte.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LOD</code></td>
      <td>Maximaler Level-of-Detail-Wert der Textur</td>
      <td>Beliebige float-Werte.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_LOD</code></td>
      <td>Minimaler Level-of-Detail-Wert der Textur</td>
      <td>Beliebige float-Werte.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_R</code></td>
      <td>Wicklungsfunktion für Texturkoordinate <code>r</code></td>
      <td>
        <code>gl.REPEAT</code> (Standardwert), <code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
  </tbody>
</table>

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(
  gl.TEXTURE_2D,
  gl.TEXTURE_MIN_FILTER,
  gl.LINEAR_MIPMAP_NEAREST,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}