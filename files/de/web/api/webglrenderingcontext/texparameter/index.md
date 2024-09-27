---
title: "WebGLRenderingContext: texParameter[fi]() Methode"
short-title: texParameter[fi]()
slug: Web/API/WebGLRenderingContext/texParameter
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.texParameter[fi]()`** Methoden der [WebGL-API](/de/docs/Web/API/WebGL_API) setzen die Texturparameter.

## Syntax

```js-nolint
texParameterf(target, pname, param)
texParameteri(target, pname, param)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine würfelgemappte Textur.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}} sind zusätzlich folgende Werte verfügbar:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `param`

  - : Der `param` Parameter ist ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) oder
    [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Wert für den angegebenen Parameter angibt

- `pname`
  - : Der `pname` Parameter ist ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den zu setzenden Texturparameter angibt.

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
      <td>Wickelfunktion für Texturkoordinate <code>s</code></td>
      <td>
        <code>gl.REPEAT</code> (Standardwert), <code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_T</code></td>
      <td>Wickelfunktion für Texturkoordinate <code>t</code></td>
      <td>
        <code>gl.REPEAT</code> (Standardwert), <code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
    <tr>
      <th colspan="3">
        Zusätzlich verfügbar bei Verwendung der
        [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) Erweiterung
      </th>
    </tr>
    <tr>
      <td><code>ext.TEXTURE_MAX_ANISOTROPY_EXT</code></td>
      <td>Maximale Anisotropie für eine Textur</td>
      <td>Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) Wert.</td>
    </tr>
    <tr>
      <th colspan="3">Zusätzlich verfügbar bei Verwendung eines WebGL 2 Kontextes</th>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BASE_LEVEL</code></td>
      <td>Textur-Mipmap-Level</td>
      <td>Beliebige int-Werte.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_FUNC</code></td>
      <td>Texturvergleichsfunktion</td>
      <td>
        <code>gl.LEQUAL</code> (Standardwert), <code>gl.GEQUAL</code>,
        <code>gl.LESS</code>, <code>gl.GREATER</code>, <code>gl.EQUAL</code>,
        <code>gl.NOTEQUAL</code>, <code>gl.ALWAYS</code>, <code>gl.NEVER</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_MODE</code></td>
      <td>Texturvergleichsmodus</td>
      <td>
        <code>gl.NONE</code> (Standardwert),
        <code>gl.COMPARE_REF_TO_TEXTURE</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LEVEL</code></td>
      <td>Maximales Textur-Mipmap-Array-Level</td>
      <td>Beliebige int-Werte.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LOD</code></td>
      <td>Maximaler Detailgrad der Textur</td>
      <td>Beliebige float-Werte.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_LOD</code></td>
      <td>Minimaler Detailgrad der Textur</td>
      <td>Beliebige float-Werte.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_R</code></td>
      <td>Wickelfunktion für Texturkoordinate <code>r</code></td>
      <td>
        <code>gl.REPEAT</code> (Standardwert), <code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
  </tbody>
</table>

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
- [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)
