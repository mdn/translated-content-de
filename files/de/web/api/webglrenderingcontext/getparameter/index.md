---
title: "WebGLRenderingContext: getParameter()-Methode"
short-title: getParameter()
slug: Web/API/WebGLRenderingContext/getParameter
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getParameter()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt einen Wert für den übergebenen Parameternamen zurück.

## Syntax

```js-nolint
getParameter(pname)
```

### Parameter

- `pname`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, welcher Parameterwert zurückgegeben werden soll. Siehe unten für mögliche Werte.

### Rückgabewert

Hängt vom Parameter ab.

## Parameternamen

### WebGL 1

Sie können die folgenden `pname`-Parameter abfragen, wenn Sie einen {{domxref("WebGLRenderingContext")}} verwenden.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Rückgabetyp</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.ACTIVE_TEXTURE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
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
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ARRAY_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_COLOR</code></td>
      <td>{{jsxref("Float32Array")}} (mit 4 Werten)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_DST_ALPHA</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_DST_RGB</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION_ALPHA</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION_RGB</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_SRC_ALPHA</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_SRC_RGB</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLUE_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
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
        sequence&#x3C;{{domxref("WebGL_API/Types", "GLboolean")}}>
        (mit 4 Werten)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.COMPRESSED_TEXTURE_FORMATS</code></td>
      <td>{{jsxref("Uint32Array")}}</td>
      <td>
        Gibt die komprimierten Texturformate zurück.<br /><br />Bei Verwendung der
        {{domxref("WEBGL_compressed_texture_s3tc")}}-Erweiterung:
        <ul>
          <li><code>ext.COMPRESSED_RGB_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT3_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT5_EXT</code></li>
        </ul>
        <p>
          Bei Verwendung der
          {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
          -Erweiterung:
        </p>
        <ul>
          <li><code>ext.COMPRESSED_SRGB_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT</code></li>
        </ul>
        Bei Verwendung der {{domxref("WEBGL_compressed_texture_etc")}}
        -Erweiterung:
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
        {{domxref("WEBGL_compressed_texture_pvrtc")}}-Erweiterung:
        <ul>
          <li><code>ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG</code></li>
        </ul>
        Bei Verwendung der
        {{domxref("WEBGL_compressed_texture_etc1")}}-Erweiterung:
        <ul>
          <li><code>ext.COMPRESSED_RGB_ETC1_WEBGL</code></li>
        </ul>
        Bei Verwendung der
        {{domxref("WEBGL_compressed_texture_astc")}}-Erweiterung:
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
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.CULL_FACE_MODE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>
        <code>gl.FRONT</code>, <code>gl.BACK</code> oder
        <code>gl.FRONT_AND_BACK</code>. Siehe auch
        {{domxref("WebGLRenderingContext/cullFace", "cullFace")}}
      </td>
    </tr>
    <tr>
      <td><code>gl.CURRENT_PROGRAM</code></td>
      <td>{{domxref("WebGLProgram")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/useProgram", "useProgram")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_CLEAR_VALUE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_FUNC</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_RANGE</code></td>
      <td>{{jsxref("Float32Array")}} (mit 2 Elementen)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_TEST</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_WRITEMASK</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DITHER</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ELEMENT_ARRAY_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_BINDING</code></td>
      <td>{{domxref("WebGLFramebuffer")}} oder <code>null</code></td>
      <td>
        <code>null</code> entspricht einer Bindung an den Standard-Framebuffer.
        Siehe auch
        {{domxref("WebGLRenderingContext/bindFramebuffer", "bindFramebuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRONT_FACE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>
        <code>gl.CW</code> oder <code>gl.CCW</code>. Siehe auch
        {{domxref("WebGLRenderingContext/frontFace", "frontFace")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.GENERATE_MIPMAP_HINT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>
        <code>gl.FASTEST</code>, <code>gl.NICEST</code> oder
        <code>gl.DONT_CARE</code>. Siehe auch
        {{domxref("WebGLRenderingContext/hint", "hint")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.GREEN_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.IMPLEMENTATION_COLOR_READ_FORMAT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.IMPLEMENTATION_COLOR_READ_TYPE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.LINE_WIDTH</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_CUBE_MAP_TEXTURE_SIZE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_UNIFORM_VECTORS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_RENDERBUFFER_SIZE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_IMAGE_UNITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_SIZE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VARYING_VECTORS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_ATTRIBS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_UNIFORM_VECTORS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VIEWPORT_DIMS</code></td>
      <td>{{jsxref("Int32Array")}} (mit 2 Elementen)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.PACK_ALIGNMENT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_FACTOR</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_FILL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_UNITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.RED_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.RENDERBUFFER_BINDING</code></td>
      <td>{{domxref("WebGLRenderbuffer")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/bindRenderbuffer", "bindRenderbuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.RENDERER</code></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_BUFFERS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE_INVERT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE_VALUE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SCISSOR_BOX</code></td>
      <td>{{jsxref("Int32Array")}} (mit 4 Elementen)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SCISSOR_TEST</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SHADING_LANGUAGE_VERSION</code></td>
      <td>string</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_FAIL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_FUNC</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_PASS_DEPTH_FAIL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_PASS_DEPTH_PASS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_REF</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_VALUE_MASK</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_WRITEMASK</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_CLEAR_VALUE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_FAIL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_FUNC</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_PASS_DEPTH_FAIL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_PASS_DEPTH_PASS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_REF</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_TEST</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_VALUE_MASK</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_WRITEMASK</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SUBPIXEL_BITS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_2D</code></td>
      <td>{{domxref("WebGLTexture")}} oder <code>null</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_CUBE_MAP</code></td>
      <td>{{domxref("WebGLTexture")}} oder <code>null</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ALIGNMENT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_COLORSPACE_CONVERSION_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_FLIP_Y_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
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

Sie können die folgenden `pname`-Parameter abfragen, wenn Sie einen {{domxref("WebGL2RenderingContext")}} verwenden.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Rückgabetyp</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.COPY_READ_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.COPY_WRITE_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td>
        <code>gl.DRAW_BUFFER<em>i</em></code>
      </td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>
        <code>gl.BACK</code>, <code>gl.NONE</code> oder
        <code>gl.COLOR_ATTACHMENT{0-15}</code>. Siehe auch
        {{domxref("WebGL2RenderingContext/drawBuffers", "drawBuffers")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.DRAW_FRAMEBUFFER_BINDING</code></td>
      <td>{{domxref("WebGLFramebuffer")}} oder <code>null</code></td>
      <td>
        <code>null</code> entspricht einer Bindung an den Standard-Framebuffer.
        Siehe auch
        {{domxref("WebGLRenderingContext/bindFramebuffer", "bindFramebuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.FRAGMENT_SHADER_DERIVATIVE_HINT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>
        <code>gl.FASTEST</code>, <code>gl.NICEST</code> oder
        <code>gl.DONT_CARE</code>. Siehe auch
        {{domxref("WebGLRenderingContext/hint", "hint")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.MAX_3D_TEXTURE_SIZE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ARRAY_TEXTURE_LAYERS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COLOR_ATTACHMENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_UNIFORM_BLOCKS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_DRAW_BUFFERS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ELEMENT_INDEX</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ELEMENTS_INDICES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_ELEMENTS_VERTICES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_INPUT_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_UNIFORM_BLOCKS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_UNIFORM_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_PROGRAM_TEXEL_OFFSET</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_SAMPLES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_SERVER_WAIT_TIMEOUT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_LOD_BIAS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_UNIFORM_BLOCK_SIZE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint64")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_UNIFORM_BUFFER_BINDINGS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VARYING_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_OUTPUT_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_UNIFORM_BLOCKS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_UNIFORM_COMPONENTS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MIN_PROGRAM_TEXEL_OFFSET</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.PACK_ROW_LENGTH</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_PIXELS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.PACK_SKIP_ROWS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.PIXEL_PACK_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.PIXEL_UNPACK_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.RASTERIZER_DISCARD</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.READ_BUFFER</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.READ_FRAMEBUFFER_BINDING</code></td>
      <td>{{domxref("WebGLFramebuffer")}} oder <code>null</code></td>
      <td>
        <code>null</code> entspricht einer Bindung an den Standard-Framebuffer.
        Siehe auch
        {{domxref("WebGLRenderingContext/bindFramebuffer", "bindFramebuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_ALPHA_TO_COVERAGE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLER_BINDING</code></td>
      <td>{{domxref("WebGLSampler")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGL2RenderingContext/bindSampler", "bindSampler")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_2D_ARRAY</code></td>
      <td>{{domxref("WebGLTexture")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/bindTexture", "bindTexture")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_3D</code></td>
      <td>{{domxref("WebGLTexture")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/bindTexture", "bindTexture")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_ACTIVE</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_BINDING</code></td>
      <td>
        {{domxref("WebGLTransformFeedback")}} oder <code>null</code>
      </td>
      <td>
        Siehe
        {{domxref("WebGL2RenderingContext/bindTransformFeedback", "bindTransformFeedback")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.TRANSFORM_FEEDBACK_PAUSED</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNIFORM_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}} oder <code>null</code></td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/bindBuffer", "bindBuffer")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_IMAGE_HEIGHT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ROW_LENGTH</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_IMAGES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_PIXELS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_SKIP_ROWS</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>
        Siehe
        {{domxref("WebGLRenderingContext/pixelStorei", "pixelStorei")}}.
      </td>
    </tr>
    <tr>
      <td><code>gl.VERTEX_ARRAY_BINDING</code></td>
      <td>
        {{domxref("WebGLVertexArrayObject")}} oder <code>null</code>
      </td>
      <td>
        Siehe
        {{domxref("WebGL2RenderingContext/bindVertexArray", "bindVertexArray")}}.
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
      <th scope="col">Rückgabetyp</th>
      <th scope="col">Erweiterung</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLfloat")}}</td>
      <td>{{domxref("EXT_texture_filter_anisotropic")}}</td>
      <td>Maximal verfügbare Anisotropie.</td>
    </tr>
    <tr>
      <td><code>ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES</code></td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>{{domxref("OES_standard_derivatives")}}</td>
      <td>
        Genauigkeit der Ableitungsberechnung für die GLSL-Eingebundenen:
        <code>dFdx</code>, <code>dFdy</code> und <code>fwidth</code>.
      </td>
    </tr>
    <tr>
      <td><code>ext.MAX_COLOR_ATTACHMENTS_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>{{domxref("WEBGL_draw_buffers")}}</td>
      <td>Die maximale Anzahl an Framebuffer-Farbattachment-Punkten.</td>
    </tr>
    <tr>
      <td><code>ext.MAX_DRAW_BUFFERS_WEBGL</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>{{domxref("WEBGL_draw_buffers")}}</td>
      <td>Die maximale Anzahl an Zeichnungs-Puffern.</td>
    </tr>
    <tr>
      <td>
        <code
          >ext.DRAW_BUFFER0_WEBGL<br />ext.DRAW_BUFFER1_WEBGL<br />ext.DRAW_BUFFER2_WEBGL<br />ext.DRAW_BUFFER3_WEBGL<br />ext.DRAW_BUFFER4_WEBGL<br />ext.DRAW_BUFFER5_WEBGL<br />ext.DRAW_BUFFER6_WEBGL<br />ext.DRAW_BUFFER7_WEBGL<br />ext.DRAW_BUFFER8_WEBGL<br />ext.DRAW_BUFFER9_WEBGL<br />ext.DRAW_BUFFER10_WEBGL<br />ext.DRAW_BUFFER11_WEBGL<br />ext.DRAW_BUFFER12_WEBGL<br />ext.DRAW_BUFFER13_WEBGL<br />ext.DRAW_BUFFER14_WEBGL<br />ext.DRAW_BUFFER15_WEBGL</code
        >
      </td>
      <td>{{domxref("WebGL_API/Types", "GLenum")}}</td>
      <td>{{domxref("WEBGL_draw_buffers")}}</td>
      <td>Zeichnungspuffer.</td>
    </tr>
    <tr>
      <td><code>ext.VERTEX_ARRAY_BINDING_OES</code></td>
      <td>
        {{domxref("WebGLVertexArrayObject", "WebGLVertexArrayObjectOES")}}
      </td>
      <td>{{domxref("OES_vertex_array_object")}}</td>
      <td>Gebundenes Vertex-Array-Objekt (VAO).</td>
    </tr>
    <tr>
      <td><code>ext.TIMESTAMP_EXT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLuint64EXT")}}</td>
      <td><p>{{domxref("EXT_disjoint_timer_query")}}</p></td>
      <td>Die aktuelle Zeit.</td>
    </tr>
    <tr>
      <td><code>ext.GPU_DISJOINT_EXT</code></td>
      <td>{{domxref("WebGL_API/Types", "GLboolean")}}</td>
      <td>{{domxref("EXT_disjoint_timer_query")}}</td>
      <td>
        <p>Gibt zurück, ob die GPU eine unzusammenhängende Operation durchgeführt hat oder nicht.</p>
      </td>
    </tr>
    <tr>
      <td><code>ext.MAX_VIEWS_OVR</code></td>
      <td>{{domxref("WebGL_API/Types", "GLint")}}</td>
      <td>{{domxref("OVR_multiview2")}}</td>
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

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.disable()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("OES_standard_derivatives")}}
- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("EXT_disjoint_timer_query")}}
