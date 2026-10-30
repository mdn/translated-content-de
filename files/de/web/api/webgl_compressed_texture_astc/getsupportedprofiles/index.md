---
title: "WEBGL_compressed_texture_astc: Methode getSupportedProfiles()"
short-title: getSupportedProfiles()
slug: Web/API/WEBGL_compressed_texture_astc/getSupportedProfiles
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WEBGL_compressed_texture_astc.getSupportedProfiles()`** gibt ein Array von Strings mit den Namen der ASTC-Profile zurück, die von der Implementierung unterstützt werden.

## Syntax

```js-nolint
getSupportedProfiles()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} aus Strings, das angibt, welche ASTC-Profile von der Implementierung unterstützt werden. Derzeit sind folgende Werte möglich:

- "ldr": Low Dynamic Range (geringer Dynamikumfang).
- "hdr": High Dynamic Range (hoher Dynamikumfang).

Der Dynamikumfang bezeichnet das Verhältnis zwischen den hellsten und den dunkelsten Bereichen einer Szene. Einen geringen Dynamikumfang haben beispielsweise Bilder im JPEG-Format, deren Verhältnis 255:1 nicht überschreitet, oder CRT-Monitore, bei denen es 100:1 nicht überschreitet. Ein HDR-Bild speichert Pixelwerte, die den gesamten Tonwertumfang realer Szenen abdecken (100.000:1).

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
