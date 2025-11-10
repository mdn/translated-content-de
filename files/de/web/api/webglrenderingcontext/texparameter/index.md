---
title: "WebGLRenderingContext: texParameter[fi]() Methode"
short-title: texParameter[fi]()
slug: Web/API/WebGLRenderingContext/texParameter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.texParameter[fi]()`** Methoden der [WebGL API](/de/docs/Web/API/WebGL_API) setzen Textureinstellungen.

## Syntax

```js-nolint
texParameterf(target, pname, param)
texParameteri(target, pname, param)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Target) angibt. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine Würfelkarten-Textur.

    Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `param`

  - : Der `param`-Parameter ist ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) oder
    [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Wert für den angegebenen Parameter angibt.

- `pname`
  - : Der `pname`-Parameter ist ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welcher Textureparameter gesetzt werden soll.

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
      <td>Textur-Magnifikationsfilter</td>
      <td><code>gl.LINEAR</code> (Standardwert), <code>gl.NEAREST</code>.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_FILTER</code></td>
      <td>Textur-Minifikationsfilter</td>
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
        [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) Erweiterung
      </th>
    </tr>
    <tr>
      <td><code>ext.TEXTURE_MAX_ANISOTROPY_EXT</code></td>
      <td>Maximale Anisotropie für eine Textur</td>
      <td>Ein [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) Wert.</td>
    </tr>
    <tr>
      <th colspan="3">Zusätzlich verfügbar bei Verwendung eines WebGL 2-Kontexts</th>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BASE_LEVEL</code></td>
      <td>Textur-Mipmap-Level</td>
      <td>Beliebige Ganzzahlen.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_FUNC</code></td>
      <td>Textur-Vergleichsfunktion</td>
      <td>
        <code>gl.LEQUAL</code> (Standardwert), <code>gl.GEQUAL</code>,
        <code>gl.LESS</code>, <code>gl.GREATER</code>, <code>gl.EQUAL</code>,
        <code>gl.NOTEQUAL</code>, <code>gl.ALWAYS</code>, <code>gl.NEVER</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_MODE</code></td>
      <td>Textur-Vergleichsmodus</td>
      <td>
        <code>gl.NONE</code> (Standardwert),
        <code>gl.COMPARE_REF_TO_TEXTURE</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LEVEL</code></td>
      <td>Maximale Textur-Mipmap-Array-Ebene</td>
      <td>Beliebige Ganzzahlen.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LOD</code></td>
      <td>Maximaler Level-of-Detail-Wert der Textur</td>
      <td>Beliebige Gleitkommazahlen.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_LOD</code></td>
      <td>Minimaler Level-of-Detail-Wert der Textur</td>
      <td>Beliebige Gleitkommazahlen.</td>
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
