---
title: "WebGLRenderingContext: Methode getFramebufferAttachmentParameter()"
short-title: getFramebufferAttachmentParameter()
slug: Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die Methode **`WebGLRenderingContext.getFramebufferAttachmentParameter()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) liefert Informationen über eine Anfügung eines Framebuffers zurück.

## Syntax

```js-nolint
getFramebufferAttachmentParameter(target, attachment, pname)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER`

      - : Sammlung von Pufferdatenspeichern der Farb-, Alpha-,
        Tiefen- und Schablonenpuffer, die zum Rendern eines Bildes verwendet werden.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontextes", "", 1)}},
    sind zusätzlich folgende Werte verfügbar:

    - `gl.DRAW_FRAMEBUFFER`
      - : Entspricht `gl.FRAMEBUFFER`.
        Wird als Ziel für Zeichnungs-, Render-, Lösch- und Schreiboperationen verwendet.
    - `gl.READ_FRAMEBUFFER`
      - : Wird als Quelle für Leseoperationen verwendet.

- `attachment`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Anfügungspunkt für die
    `texture` angibt. Mögliche Werte:

    - `gl.COLOR_ATTACHMENT0`: Textur-Anfügung für den Farbpuffer des Framebuffers.
    - `gl.DEPTH_ATTACHMENT`: Textur-Anfügung für den Tiefenpuffer des Framebuffers.
    - `gl.STENCIL_ATTACHMENT`: Textur-Anfügung für den Schablonenpuffer des Framebuffers.
    - `gl.DEPTH_STENCIL_ATTACHMENT`: Textur-Anfügung für sowohl Tiefen- als auch Schablonenpuffer.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontextes", "", 1)}},
    sind zusätzlich folgende Werte verfügbar:

    - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`

    Bei Verwendung der {{domxref("WEBGL_draw_buffers")}} Erweiterung:

    - `ext.COLOR_ATTACHMENT0_WEBGL` (gleich wie `gl.COLOR_ATTACHMENT0`)
      `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das die abzufragende Information angibt. Mögliche Werte:

    - `gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE`: Der Typ, der das angehängte Bild enthält.
    - `gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME`: Die Textur oder der Renderbuffer des angehängten Bildes ({{domxref("WebGLRenderbuffer")}} oder
      {{domxref("WebGLTexture")}}).
    - `gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL`: Mipmap-Level. Standardwert: 0.
    - `gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE`: Der Name der Würfelkartenfläche der Textur.

    Bei Verwendung der {{domxref("EXT_sRGB")}} Erweiterung:

    - `ext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT`: Die Farbkodierung des Framebuffers.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontextes", "", 1)}},
    sind zusätzlich folgende Werte verfügbar:

    - `gl.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING`
    - `gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE`
    - `gl.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_RED_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE`
    - `gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER`

    Bei Verwendung der {{domxref("OVR_multiview2")}} Erweiterung:

    - `ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR`: Die Anzahl der Ansichten der Framebuffer-Objektanfügung.
    - `ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR`: Der Basis-Ansichtsindex der Framebuffer-Objektanfügung.

### Rückgabewert

Hängt von der angeforderten Information ab (wie durch `pname` angegeben). Entweder ein
{{domxref("WebGL_API/Types", "GLint")}}, ein {{domxref("WebGL_API/Types", "GLenum")}}, ein {{domxref("WebGLRenderbuffer")}}, oder ein
{{domxref("WebGLTexture")}}.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><code>pname</code> Parameter</th>
      <th scope="col">Rückgabewert</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Typ der Textur anzeigt. Entweder <code>gl.RENDERBUFFER</code>,
        <code>gl.TEXTURE</code>, oder wenn kein Bild angehängt ist,
        <code>gl.NONE</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME</code></td>
      <td>
        Die Textur ({{domxref("WebGLTexture")}}) oder der Renderbuffer
        ({{domxref("WebGLRenderbuffer")}}) des angehängten Bildes.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLint")}}, das den Mipmap-Level anzeigt. Standardwert: 0.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Namen der Würfelkartenfläche der Textur angibt. Mögliche Werte:
        <ul>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_POSITIVE_X</code>: Bild für die positive
            X-Fläche des Würfels.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_NEGATIVE_X</code>: Bild für die negative
            X-Fläche des Würfels.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_POSITIVE_Y</code>: Bild für die positive
            Y-Fläche des Würfels.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_NEGATIVE_Y</code>: Bild für die negative
            Y-Fläche des Würfels.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_POSITIVE_Z</code>: Bild für die positive
            Z-Fläche des Würfels.
          </li>
          <li>
            <code>gl.TEXTURE_CUBE_MAP_NEGATIVE_Z</code>: Bild für die negative
            Z-Fläche des Würfels.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Anzahl der Bits in der Alphakomponente der Anfügung anzeigt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Anzahl der Bits in der Blaukomponente der Anfügung anzeigt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die Kodierung der Komponenten der angegebenen Anfügung angibt. Entweder
        <code>gl.LINEAR</code> oder <code>gl.SRGB</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das Format der Komponenten der angegebenen Anfügung angibt. Entweder
        <code>gl.FLOAT</code>, <code>gl.INT</code>,
        <code>gl.UNSIGNED_INT</code>, <code>gl.SIGNED_NORMALIZED</code>, oder
        <code>gl.UNSIGNED_NORMALIZED</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Anzahl der Bits in der Tiefenkomponente der Anfügung anzeigt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Anzahl der Bits in der Grünkomponente der Anfügung anzeigt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_RED_SIZE</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Anzahl der Bits in der Rotkomponente der Anfügung anzeigt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Anzahl der Bits in der Schablonenkomponente der Anfügung anzeigt.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Nummer der Texturschicht angibt, welche das angehängte Bild enthält.
      </td>
    </tr>
    <tr>
      <td><code>ext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLenum")}}, das die Farbkodierung des Framebuffers angibt. Entweder <code>gl.LINEAR</code> oder
        <code>ext.SRGB_EXT</code>.
      </td>
    </tr>
    <tr>
      <td><code>ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR</code></td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Anzahl der Ansichten der Framebuffer-Objektanfügung angibt.
      </td>
    </tr>
    <tr>
      <td>
        <code>ext.FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR</code>
      </td>
      <td>
        Ein {{domxref("WebGL_API/Types", "GLint")}}, das den Basis-Ansichtsindex der Framebuffer-Objektanfügung angibt.
      </td>
    </tr>
  </tbody>
</table>

### Ausnahmen

- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht
  `gl.FRAMEBUFFER`, `gl.DRAW_FRAMEBUFFER`,
  `gl.READ_FRAMEBUFFER` ist, oder wenn `attachment` nicht zu den akzeptierten Anfügungspunkten gehört.

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

- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Andere Puffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("WEBGL_draw_buffers")}}
