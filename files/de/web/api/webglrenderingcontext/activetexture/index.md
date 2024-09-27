---
title: "WebGLRenderingContext: Methode activeTexture()"
short-title: activeTexture()
slug: Web/API/WebGLRenderingContext/activeTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die Methode **`WebGLRenderingContext.activeTexture()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) legt fest, welche Textureinheit aktiviert werden soll.

## Syntax

```js-nolint
activeTexture(texture)
```

### Parameter

- `texture`
  - : Die zu aktivierende Textureinheit. Der Wert ist ein `gl.TEXTUREI`, wobei _I_ im Bereich von 0 bis `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1` liegt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn _texture_ nicht eines der `gl.TEXTUREI` ist, wobei _I_ im Bereich von 0 bis `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1` liegt, wird ein `gl.INVALID_ENUM` Fehler ausgelöst.

## Beispiele

Der folgende Aufruf wählt `gl.TEXTURE1` als aktuelle Textur aus. Nachfolgende Aufrufe, die den Texturstatus ändern, wirken sich auf diese Textur aus.

```js
gl.activeTexture(gl.TEXTURE1);
```

Die Anzahl der Textureinheiten ist implementierungsabhängig, Sie können diese Zahl mit Hilfe der Konstante `MAX_COMBINED_TEXTURE_IMAGE_UNITS` ermitteln. Laut Spezifikation sind es mindestens 8.

```js
gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
```

Um die aktive Textur zu erhalten, fragen Sie die Konstante `ACTIVE_TEXTURE` ab.

```js
gl.activeTexture(gl.TEXTURE0);
gl.getParameter(gl.ACTIVE_TEXTURE);
// returns "33984" (0x84C0, gl.TEXTURE0 enum value)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
