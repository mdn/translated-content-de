---
title: "WebGLRenderingContext: getParameter() Methode"
short-title: getParameter()
slug: Web/API/WebGLRenderingContext/getParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getParameter()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt einen Wert für den übergebenen Parameternamen zurück.

## Syntax

```js-nolint
getParameter(pname)
```

### Parameter

- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welcher Parameterwert zurückgegeben werden soll. Siehe unten für mögliche Werte.

### Rückgabewert

Hängt vom Parameter ab.

## Parameternamen

### WebGL 1

Sie können die folgenden `pname`-Parameter abfragen, wenn Sie einen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) verwenden.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Rückgabewert Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.ACTIVE_TEXTURE</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ALIASED_LINE_WIDTH_RANGE</code></td>
      <td>{{jsxref("Float32Array")}} (mit 2 Elementen)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ALIASED_POINT_SIZE_RANGE</code></td>
      <td>{{jsxref("Float32Array")}} (mit 2 Elementen)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ALPHA_BITS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ARRAY_BUFFER_BINDING</code></td>
      <td>[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_COLOR</code></td>
      <td>{{jsxref("Float32Array")}} (mit 4 Werten)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_DST_ALPHA</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_DST_RGB</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION_ALPHA</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION_RGB</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_SRC_ALPHA</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_SRC_RGB</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLUE_BITS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.COLOR_CLEAR_VALUE</code></td>
      <td>{{jsxref("Float32Array")}} (mit 4 Werten)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.COLOR_WRITEMASK</code></td>
      <td>
        sequence&#x3C;[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)>
        (mit 4 Werten)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.COMPRESSED_TEXTURE_FORMATS</code></td>
      <td>{{jsxref("Uint32Array")}}</td>
      <td>
        Gibt die komprimierten Texturformate zurück.<br /><br />Bei Verwendung der
        [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc) Erweiterung:
        <ul>
          <li><code>ext.COMPRESSED_RGB_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT3_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT5_EXT</code></li>
        </ul>
        <p>
          Bei Verwendung der
          [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
          Erweiterung:
        </p>
        <ul>
          <li><code>ext.COMPRESSED_SRGB_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT</code></li>
        </ul>
        Bei Verwendung der [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)
        Erweiterung:
        <ul>
          <li><code>ext.COMPRESSED_R11_EAC</code></li>
          <li><code>ext.COMPRESSED_SIGNED_R11_EAC</code></li>
          <li><code>ext.COMPRESSED_RG11_EAC</code></li>
          <li><code>ext.COMPRESSED_SIGNED_RG11_EAC</code></li>
          <li><code>ext.COMPRESSED_RGB8_ETC2</code></li>
          <li><code>ext.COMPRESSED_RGBA8_ETC2_EAC</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ETC2</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC</code></li>
          <li><code>ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2</code></li>
          <li><code>ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2</code></li>
        </ul>
        Bei Verwendung der
        [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc) Erweiterung:
        <ul>
          <li><code>ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG</code></li>
        </ul>
        Bei Verwendung der
        [`WEBGL_compressed_texture_etc1`](/de/docs/Web/API/WEBGL_compressed_texture_etc1) Erweiterung:
        <ul>
          <li><code>ext.COMPRESSED_RGB_ETC1_WEBGL</code></li>
        </ul>
        Bei Verwendung der
        [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc) Erweiterung:
        <ul>
          <li><code>ext.COMPRESSED_RGBA_ASTC_4x4_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_5x4_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_5x5_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_6x5_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_6x6_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_8x5_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_8x6_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_8x8_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_10x5_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_10x6_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_10x6_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_10x10_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_12x10_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR</code></li>
          <li><code>ext.COMPRESSED_RGBA_ASTC_12x12_KHR</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>gl.CULL_FACE</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.CULL_FACE_MODE</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        <code>gl.FRONT</code>, <code>gl.BACK</code> oder
        <code>gl.FRONT_AND_BACK</code>. Siehe auch
        [`cullFace`](/de/docs/Web/API/WebGLRenderingContext/cullFace)
      </td>
    </tr>
    <tr>
      <td><code>gl.CURRENT_PROGRAM</code></td>
      <td>[`WebGLProgram`](/de/docs/Web/API/WebGLProgram) oder <code>null</code></td>
      <td>
        Siehe
        [`useProgram`](/de/docs/Web/API/WebGLRenderingContext/useProgram).
      </td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_BITS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_CLEAR_VALUE</code></td>
      <td>[`GLfloat`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_FUNC</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_RANGE</code></td>
      <td>{{jsxref("Float32Array")}} (mit 2 Elementen)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_TEST</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_WRITEMASK</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DITHER</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ELEMENT_ARRAY_BUFFER_BINDING</code></td>
      <td>[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_BINDING</code></td>
      <td>[`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) oder <code>null</code></td>
      <td>
        <code>null</code> entspricht einer Bindung zum Standard-Framebuffer.
        Siehe auch
        [`bindFramebuffer`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer).
      </td>
    </tr>
    <tr>
      <td><code>gl.FRONT_FACE</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        <code>gl.CW</code> oder <code>gl.CCW</code>. Siehe auch
        [`frontFace`](/de/docs/Web/API/WebGLRenderingContext/frontFace).
      </td>
    </tr>
    <tr>
      <td><code>gl.GENERATE_MIPMAP_HINT</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        <code>gl.FASTEST</code>, <code>gl.NICEST</code> oder
        <code>gl.DONT_CARE</code>. Siehe auch
        [`hint`](/de/docs/Web/API/WebGLRenderingContext/hint).
      </td>
    </tr>
    <tr>
      <td><code>gl.GREEN_BITS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.IMPLEMENTATION_COLOR_READ_FORMAT</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.IMPLEMENTATION_COLOR_READ_TYPE</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.LINE_WIDTH</code></td>
      <td>[`GLfloat`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_CUBE_MAP_TEXTURE_SIZE</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_UNIFORM_VECTORS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_RENDERBUFFER_SIZE</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_IMAGE_UNITS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_SIZE</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VARYING_VECTORS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_ATTRIBS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_UNIFORM_VECTORS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VIEWPORT_DIMS</code></td>
      <td>{{jsxref("Int32Array")}} (mit 2 Elementen)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.PACK_ALIGNMENT</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_FACTOR</code></td>
      <td>[`GLfloat`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_FILL</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_UNITS</code></td>
      <td>[`GLfloat`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.RED_BITS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.RENDERBUFFER_BINDING</code></td>
      <td>[`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) oder <code>null</code></td>
      <td>
        Siehe
        [`bindRenderbuffer`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer).
      </td>
    </tr>
    <tr>
      <td><code>gl.RENDERER</code></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_BUFFERS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE_INVERT</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE_VALUE</code></td>
      <td>[`GLfloat`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLES</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SCISSOR_BOX</code></td>
      <td>{{jsxref("Int32Array")}} (mit 4 Elementen)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SCISSOR_TEST</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SHADING_LANGUAGE_VERSION</code></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_FAIL</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_FUNC</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_PASS_DEPTH_FAIL</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_PASS_DEPTH_PASS</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_REF</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_VALUE_MASK</code></td>
      <td>[`GLuint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_WRITEMASK</code></td>
      <td>[`GLuint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BITS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_CLEAR_VALUE</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_FAIL</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_FUNC</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_PASS_DEPTH_FAIL</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_PASS_DEPTH_PASS</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_REF</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_TEST</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_VALUE_MASK</code></td>
      <td>[`GLuint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_WRITEMASK</code></td>
      <td>[`GLuint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SUBPIXEL_BITS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_2D</code></td>
      <td>[`WebGLTexture`](/de/docs/Web/API/WebGLTexture) oder <code>null</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_CUBE_MAP</code></td>
      <td>[`WebGLTexture`](/de/docs/Web/API/WebGLTexture) oder <code>null</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ALIGNMENT</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_COLORSPACE_CONVERSION_WEBGL</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_FLIP_Y_WEBGL</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.VENDOR</code></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.VERSION</code></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.VIEWPORT</code></td>
      <td>{{jsxref("Int32Array")}} (mit 4 Elementen)</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebGL 2

Sie können die folgenden `pname`-Parameter abfragen, wenn Sie einen [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) verwenden.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Rückgabewert Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.COPY_READ_BUFFER_BINDING</code></td>
      <td>[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) oder <code>null</code></td>
      <td>
        Siehe
        [`bindBuffer`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer).
      </td>
    </tr>
    <tr>
      <td><code>gl.COPY_WRITE_BUFFER_BINDING</code></td>
      <td>[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) oder <code>null</code></td>
      <td>
        Siehe
        [`bindBuffer`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer).
      </td>
    </tr>
    <tr>
      <td>
        <code>gl.DRAW_BUFFER<em>i</em></code>
      </td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        <code>gl.BACK</code>, <code>gl.NONE</code> oder
        <code>gl.COLOR_ATTACHMENT{0-15}</code>. Siehe auch
        [`drawBuffers`](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers).
      </td>
    </tr>
    <tr>
      <td><code>gl.DRAW_FRAMEBUFFER_BINDING</code></td>
      <td>[`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) oder <code>null</code></td>
      <td>
        <code>null</code> entspricht einer Bindung zum Standard-Framebuffer.
        Siehe auch
        [`bindFramebuffer`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer).
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAGMENT_SHADER_DERIVATIVE_HINT</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        <code>gl.FASTEST</code>, <code>gl.NICEST</code> oder
        <code>gl.DONT_CARE</code>. Siehe auch
        [`hint`](/de/docs/Web/API/WebGLRenderingContext/hint).
      </td>
    </tr>
    <tr>
      <td><code>gl.MAX_3D_TEXTURE_SIZE</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ARRAY_TEXTURE_LAYERS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL</code></td>
      <td>[`GLint64`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COLOR_ATTACHMENTS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS</code></td>
      <td>[`GLint64`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_UNIFORM_BLOCKS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS</code></td>
      <td>[`GLint64`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_DRAW_BUFFERS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ELEMENT_INDEX</code></td>
      <td>[`GLint64`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ELEMENTS_INDICES</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ELEMENTS_VERTICES</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_INPUT_COMPONENTS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_UNIFORM_BLOCKS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_UNIFORM_COMPONENTS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_PROGRAM_TEXEL_OFFSET</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_SAMPLES</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_SERVER_WAIT_TIMEOUT</code></td>
      <td>[`GLint64`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_LOD_BIAS</code></td>
      <td>[`GLfloat`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_UNIFORM_BLOCK_SIZE</code></td>
      <td>[`GLint64`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_UNIFORM_BUFFER_BINDINGS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VARYING_COMPONENTS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_OUTPUT_COMPONENTS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_UNIFORM_BLOCKS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_UNIFORM_COMPONENTS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MIN_PROGRAM_TEXEL_OFFSET</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.PACK_ROW_LENGTH</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        Siehe
        [`pixelStorei`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei).
      </td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_PIXELS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        Siehe
        [`pixelStorei`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei).
      </td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_ROWS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        Siehe
        [`pixelStorei`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei).
      </td>
    </tr>
    <tr>
      <td><code>gl.PIXEL_PACK_BUFFER_BINDING</code></td>
      <td>[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) oder <code>null</code></td>
      <td>
        Siehe
        [`bindBuffer`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer).
      </td>
    </tr>
    <tr>
      <td><code>gl.PIXEL_UNPACK_BUFFER_BINDING</code></td>
      <td>[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) oder <code>null</code></td>
      <td>
        Siehe
        [`bindBuffer`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer).
      </td>
    </tr>
    <tr>
      <td><code>gl.RASTERIZER_DISCARD</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.READ_BUFFER</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.READ_FRAMEBUFFER_BINDING</code></td>
      <td>[`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) oder <code>null</code></td>
      <td>
        <code>null</code> entspricht einer Bindung zum Standard-Framebuffer.
        Siehe auch
        [`bindFramebuffer`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer).
      </td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_ALPHA_TO_COVERAGE</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLER_BINDING</code></td>
      <td>[`WebGLSampler`](/de/docs/Web/API/WebGLSampler) oder <code>null</code></td>
      <td>
        Siehe
        [`bindSampler`](/de/docs/Web/API/WebGL2RenderingContext/bindSampler).
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_2D_ARRAY</code></td>
      <td>[`WebGLTexture`](/de/docs/Web/API/WebGLTexture) oder <code>null</code></td>
      <td>
        Siehe
        [`bindTexture`](/de/docs/Web/API/WebGLRenderingContext/bindTexture).
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_3D</code></td>
      <td>[`WebGLTexture`](/de/docs/Web/API/WebGLTexture) oder <code>null</code></td>
      <td>
        Siehe
        [`bindTexture`](/de/docs/Web/API/WebGLRenderingContext/bindTexture).
      </td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_ACTIVE</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_BINDING</code></td>
      <td>
        [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback) oder <code>null</code>
      </td>
      <td>
        Siehe
        [`bindTransformFeedback`](/de/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback).
      </td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_BUFFER_BINDING</code></td>
      <td>[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) oder <code>null</code></td>
      <td>
        Siehe
        [`bindBuffer`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer).
      </td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_PAUSED</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNIFORM_BUFFER_BINDING</code></td>
      <td>[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) oder <code>null</code></td>
      <td>
        Siehe
        [`bindBuffer`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer).
      </td>
    </tr>
    <tr>
      <td><code>gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        Siehe
        [`pixelStorei`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei).
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_IMAGE_HEIGHT</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        Siehe
        [`pixelStorei`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei).
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ROW_LENGTH</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        Siehe
        [`pixelStorei`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei).
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_IMAGES</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        Siehe
        [`pixelStorei`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei).
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_PIXELS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        Siehe
        [`pixelStorei`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei).
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_ROWS</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>
        Siehe
        [`pixelStorei`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei).
      </td>
    </tr>
    <tr>
      <td><code>gl.VERTEX_ARRAY_BINDING</code></td>
      <td>
        [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) oder <code>null</code>
      </td>
      <td>
        Siehe
        [`bindVertexArray`](/de/docs/Web/API/WebGL2RenderingContext/bindVertexArray).
      </td>
    </tr>
  </tbody>
</table>

### WebGL-Erweiterungen

Sie können die folgenden `pname`-Parameter abfragen, wenn Sie [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) verwenden:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Rückgabewert Typ</th>
      <th scope="col">Erweiterung</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT</code></td>
      <td>[`GLfloat`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>[`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)</td>
      <td>Maximal verfügbare Anisotropie.</td>
    </tr>
    <tr>
      <td><code>ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES</code></td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>[`OES_standard_derivatives`](/de/docs/Web/API/OES_standard_derivatives)</td>
      <td>
        Genauigkeit der Ableitungsberechnung für die GLSL-eingebauten Funktionen:
        <code>dFdx</code>, <code>dFdy</code> und <code>fwidth</code>.
      </td>
    </tr>
    <tr>
      <td><code>ext.MAX_COLOR_ATTACHMENTS_WEBGL</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>[`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)</td>
      <td>Die maximale Anzahl von Framebuffer-Farbanschlusspunkten.</td>
    </tr>
    <tr>
      <td><code>ext.MAX_DRAW_BUFFERS_WEBGL</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>[`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)</td>
      <td>Die maximale Anzahl von Zeichnungs-Puffern.</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.DRAW_BUFFER0_WEBGL<br />ext.DRAW_BUFFER1_WEBGL<br />ext.DRAW_BUFFER2_WEBGL<br />ext.DRAW_BUFFER3_WEBGL<br />ext.DRAW_BUFFER4_WEBGL<br />ext.DRAW_BUFFER5_WEBGL<br />ext.DRAW_BUFFER6_WEBGL<br />ext.DRAW_BUFFER7_WEBGL<br />ext.DRAW_BUFFER8_WEBGL<br />ext.DRAW_BUFFER9_WEBGL<br />ext.DRAW_BUFFER10_WEBGL<br />ext.DRAW_BUFFER11_WEBGL<br />ext.DRAW_BUFFER12_WEBGL<br />ext.DRAW_BUFFER13_WEBGL<br />ext.DRAW_BUFFER14_WEBGL<br />ext.DRAW_BUFFER15_WEBGL</code
        >
      </td>
      <td>[`GLenum`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>[`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)</td>
      <td>Zeichenpuffer.</td>
    </tr>
    <tr>
      <td><code>ext.VERTEX_ARRAY_BINDING_OES</code></td>
      <td>
        [`WebGLVertexArrayObjectOES`](/de/docs/Web/API/WebGLVertexArrayObject)
      </td>
      <td>[`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object)</td>
      <td>Gebundenes Vertex-Array-Objekt (VAO).</td>
    </tr>
    <tr>
      <td><code>ext.TIMESTAMP_EXT</code></td>
      <td>[`GLuint64EXT`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td><p>[`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)</p></td>
      <td>Die aktuelle Zeit.</td>
    </tr>
    <tr>
      <td><code>ext.GPU_DISJOINT_EXT</code></td>
      <td>[`GLboolean`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>[`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)</td>
      <td>
        <p>Gibt zurück, ob die GPU eine disjunkte Operation durchgeführt hat oder nicht.</p>
      </td>
    </tr>
    <tr>
      <td><code>ext.MAX_VIEWS_OVR</code></td>
      <td>[`GLint`](/de/docs/Web/API/WebGL_API/Types)</td>
      <td>[`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2)</td>
      <td>Maximale Anzahl von Ansichten.</td>
    </tr>
  </tbody>
</table>

## Beispiele

```js
gl.getParameter(gl.DITHER);
gl.getParameter(gl.VERSION);
gl.getParameter(gl.VIEWPORT);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)
- [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable)
- [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)
- [`OES_standard_derivatives`](/de/docs/Web/API/OES_standard_derivatives)
- [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
