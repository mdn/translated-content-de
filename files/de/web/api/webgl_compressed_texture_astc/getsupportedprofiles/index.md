---
title: "WEBGL_compressed_texture_astc: Methode getSupportedProfiles()"
short-title: getSupportedProfiles()
slug: Web/API/WEBGL_compressed_texture_astc/getSupportedProfiles
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die Methode **`WEBGL_compressed_texture_astc.getSupportedProfiles()`** gibt ein Array von Zeichenfolgen zurück, die die Namen der von der Implementierung unterstützten ASTC-Profile enthalten.

## Syntax

```js-nolint
getSupportedProfiles()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von Zeichenfallelementen, die anzeigen, welche ASTC-Profile von der Implementierung unterstützt werden. Derzeit kann dies sein:

- "ldr": Low Dynamic Range.
- "hdr": High Dynamic Range.

Dynamischer Bereich bezieht sich auf das Verhältnis zwischen den hellsten und dunkelsten Teilen der Szene. Niedrige dynamische Bereiche sind beispielsweise JPEG-Formatbilder, die 255:1 nicht überschreiten, oder CRT-Monitore, die 100:1 nicht überschreiten. Ein HDR-Bild speichert Pixelwerte, die den gesamten Tonwertumfang von realen Szenen abdecken (100.000:1).

## Beispiele

```js
const ext = gl.getExtension("WEBGL_compressed_texture_astc");
ext.getSupportedProfiles(); // ["ldr"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)
