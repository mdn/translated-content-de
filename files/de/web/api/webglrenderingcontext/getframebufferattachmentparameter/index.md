---
title: "WebGLRenderingContext: getFramebufferAttachmentParameter()-Methode"
short-title: getFramebufferAttachmentParameter()
slug: Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.getFramebufferAttachmentParameter()`** der [WebGL API](/de/docs/Web/API/WebGL_API) liefert Informationen über einen Anhang eines Framebuffers.

## Syntax

```js-nolint
getFramebufferAttachmentParameter(target, attachment, pname)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`

      - : Sammlung von Puffer-Datenspeichern für Farb-, Alpha-, Tiefen- und Stencil-Puffer, die verwendet werden, um ein Bild zu rendern.

    Bei Verwendung eines [WebGL 2-Kontext](/de/docs/Web/API/WebGL2RenderingContext) stehen zusätzlich die folgenden Werte zur Verfügung:

    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`. Wird als Ziel für Zeichen-, Rendering-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachment`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Anhangspunkt für die `texture` angibt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT0`: Texturanhang für den Farb-Puffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`: Texturanhang für den Tiefen-Puffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`: Texturanhang für den Stencil-Puffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Texturanhang für den Tiefen- und Stencil-Puffer.

    Bei Verwendung eines [WebGL 2-Kontext](/de/docs/Web/API/WebGL2RenderingContext) stehen zusätzlich die folgenden Werte zur Verfügung:

    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`

    Bei Verwendung der [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers) Erweiterung:

    - `ext.COLOR_ATTACHMENT0_WEBGL` (entspricht
      `gl.COLOR_ATTACHMENT0`)
      `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche Informationen abgefragt werden sollen. Mögliche Werte:

    - `gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE`: Der Typ, der das angefügte Bild enthält.
    - `gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME`: Die Textur oder das Renderbuffer
      des anhängten Bildes ([`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) oder
      [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)).
    - `gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL`: Mipmap-Level. Standardwert: 0.
    - `gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE`: Der Name der Cube-Map-Seite der Textur.

    Bei Verwendung der [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB) Erweiterung:

    - `ext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT`: Die Farb-Codierung des Framebuffers.

    Bei Verwendung eines [WebGL 2-Kontext](/de/docs/Web/API/WebGL2RenderingContext) stehen zusätzlich die folgenden Werte zur Verfügung:

    - `gl.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING`
    - `gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE`
    - `gl.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_RED_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER`

    Bei Verwendung der [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2) Erweiterung:

    - `ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR`: die Anzahl der Ansichten des Framebuffer-Objektanhangs.
    - `ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR`: der Basis-View-Index des Framebuffer-Objektanhangs.

### Rückgabewert

Abhängig von den angeforderten Informationen (wie mit `pname` spezifiziert). Entweder ein
[`GLint`](/de/docs/Web/API/WebGL_API/Types), ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) oder ein
[`WebGLTexture`](/de/docs/Web/API/WebGLTexture).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><code>pname</code>-Parameter</th>
      <th scope="col">Rückgabewert</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE</code></td>
      <td>
        Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Typ der Textur angibt. Entweder <code>gl.RENDERBUFFER</code>,
        <code>gl.TEXTURE</code>, oder wenn kein Bild angehängt ist,
        <code>gl.NONE</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME</code></td>
      <td>
        Die Textur ([`WebGLTexture`](/de/docs/Web/API/WebGLTexture)) oder das Renderbuffer
        ([`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)) des angehängten Bildes.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL</code></td>
      <td>
        Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das das Mipmap-Level angibt. Standardwert: 0.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE</code></td>
      <td>
        Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Namen der Cube-Map-Seite der Textur angibt. Mögliche Werte:
        <ul>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_POSITIVE_X</code>: Bild für die positive X-Seite des Würfels.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_NEGATIVE_X</code>: Bild für die negative X-Seite des Würfels.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_POSITIVE_Y</code>: Bild für die positive Y-Seite des Würfels.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_NEGATIVE_Y</code>: Bild für die negative Y-Seite des Würfels.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_POSITIVE_Z</code>: Bild für die positive Z-Seite des Würfels.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_NEGATIVE_Z</code>: Bild für die negative Z-Seite des Würfels.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE</code></td>
      <td>
        Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bits in der Alpha-Komponente des Anhangs angibt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE</code></td>
      <td>
        Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bits in der blauen Komponente des Anhangs angibt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING</code></td>
      <td>
        Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die Codierung der Komponenten des angegebenen Anhangs angibt. Entweder
        <code>gl.LINEAR</code> oder <code>gl.SRGB</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE</code></td>
      <td>
        Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Format der Komponenten des angegebenen Anhangs angibt. Entweder
        <code>gl.FLOAT</code>, <code>gl.INT</code>,
        <code>gl.UNSIGNED_INT</code>, <code>gl.SIGNED_NORMALIZED</code> oder
        <code>gl.UNSIGNED_NORMALIZED</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE</code></td>
      <td>
        Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bits in der Tiefenkomponente des Anhangs angibt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE</code></td>
      <td>
        Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bits in der grünen Komponente des Anhangs angibt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_RED_SIZE</code></td>
      <td>
        Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bits in der roten Komponente des Anhangs angibt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE</code></td>
      <td>
        Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bits in der Stencil-Komponente des Anhangs angibt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER</code></td>
      <td>
        Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Nummer der Texturschicht angibt, die das angehängte Bild enthält.
      </td>
    </tr>
    <tr>
      <td><code>ext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT</code></td>
      <td>
        Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die Farb-Codierung des Framebuffers angibt. Entweder <code>gl.LINEAR</code> oder
        <code>ext.SRGB_EXT</code>.
      </td>
    </tr>
    <tr>
      <td><code>ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR</code></td>
      <td>
        Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Ansichten des Framebuffer-Objektanhangs angibt.
      </td>
    </tr>
    <tr>
      <td>
        <code>ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR</code>
      </td>
      <td>
        Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Basis-View-Index des Framebuffer-Objektanhangs angibt.
      </td>
    </tr>
  </tbody>
</table>

### Ausnahmen

- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht `gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER`, `gl.READ_FRAMEBUFFER` ist oder wenn `attachment` nicht einer der akzeptierten Anhangspunkte ist.

## Beispiele

```js
gl.getFramebufferAttachmentParameter(
  gl.FRAMEBUFFER,
  gl.COLOR_ATTACHMENT0,
  gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
- [`WebGLRenderingContext.deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
- Andere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
- [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)
- [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)
