---
title: WebGL-Typen
slug: Web/API/WebGL_API/Types
l10n:
  sourceCommit: 5e5fe5a6d791f72fd626facd22ae8739a9e96d97
---

{{DefaultAPISidebar("WebGL")}}

Die folgenden Typen werden in [WebGL](/de/docs/Web/API/WebGL_API)-Schnittstellen verwendet.

## WebGL 1

Diese Typen werden innerhalb eines [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) verwendet.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Typ</th>
      <th>Web IDL Typ</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GLenum</code></td>
      <td><code>unsigned long</code></td>
      <td>
        Für Enums verwendet. Siehe auch die Liste der
        <a href="/de/docs/Web/API/WebGL_API/Constants">Konstanten</a>.
      </td>
    </tr>
    <tr>
      <td><code>GLboolean</code></td>
      <td><code>boolean</code></td>
      <td>Ein boolescher Wert.</td>
    </tr>
    <tr>
      <td><code>GLbitfield</code></td>
      <td><code>unsigned long</code></td>
      <td>
        Ein Bitfeld, das mehrere logische Bits speichert. Wird beispielsweise in
        [`WebGLRenderingContext.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear) verwendet.
      </td>
    </tr>
    <tr>
      <td><code>GLbyte</code></td>
      <td><code>byte</code></td>
      <td>8-Bit Zweierkomplement-Ganzzahl.</td>
    </tr>
    <tr>
      <td><code>GLshort</code></td>
      <td><code>short</code></td>
      <td>16-Bit Zweierkomplement-Ganzzahl.</td>
    </tr>
    <tr>
      <td><code>GLint</code></td>
      <td><code>long</code></td>
      <td>32-Bit Zweierkomplement-Ganzzahl.</td>
    </tr>
    <tr>
      <td><code>GLsizei</code></td>
      <td><code>long</code></td>
      <td>Verwendet für Größen (z.B. Breite und Höhe des Zeichenpuffers).</td>
    </tr>
    <tr>
      <td><code>GLintptr</code></td>
      <td><code>long long</code></td>
      <td>Spezialtyp für Zeigerarithmetik.</td>
    </tr>
    <tr>
      <td><code>GLsizeiptr</code></td>
      <td><code>long long</code></td>
      <td>Spezialtyp für Zeigerarithmetik.</td>
    </tr>
    <tr>
      <td><code>GLubyte</code></td>
      <td><code>octet</code></td>
      <td>8-Bit vorzeichenlose Ganzzahl.</td>
    </tr>
    <tr>
      <td><code>GLushort</code></td>
      <td><code>unsigned short</code></td>
      <td>16-Bit vorzeichenlose Ganzzahl.</td>
    </tr>
    <tr>
      <td><code>GLuint</code></td>
      <td><code>unsigned long</code></td>
      <td>32-Bit vorzeichenlose Ganzzahl.</td>
    </tr>
    <tr>
      <td><code>GLfloat</code></td>
      <td><code>unrestricted float</code></td>
      <td>32-Bit IEEE-Gleitkommazahl.</td>
    </tr>
    <tr>
      <td><code>GLclampf</code></td>
      <td><code>unrestricted float</code></td>
      <td>Begrenzte 32-Bit IEEE-Gleitkommazahl.</td>
    </tr>
  </tbody>
</table>

## WebGL 2

Diese Typen werden innerhalb eines [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) verwendet. Alle WebGL 1-Typen werden ebenfalls verwendet.

| Typ       | Web IDL Typ | Beschreibung               |
| --------- | ----------- | -------------------------- |
| `GLint64` | `long long` | Signierte 64-Bit Ganzzahl. |

## WebGL-Erweiterungen

Diese Typen werden innerhalb von [WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) verwendet.

| Typ           | Web IDL Typ | Beschreibung                    |
| ------------- | ----------- | ------------------------------- |
| `GLuint64EXT` | `long long` | Vorzeichenlose 64-Bit Ganzzahl. |

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
