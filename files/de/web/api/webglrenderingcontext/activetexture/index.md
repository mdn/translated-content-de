---
title: "WebGLRenderingContext: activeTexture()-Methode"
short-title: activeTexture()
slug: Web/API/WebGLRenderingContext/activeTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.activeTexture()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) legt fest, welche Textureinheit
aktiv sein soll.

## Syntax

```js-nolint
activeTexture(texture)
```

### Parameter

- `texture`
  - : Die Textureinheit, die aktiv sein soll. Der Wert ist ein `gl.TEXTUREI`,
    wobei _I_ im Bereich von 0 bis
    `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1` liegt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn _texture_ nicht eines von `gl.TEXTUREI` ist, wobei _I_
im Bereich von 0 bis `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1` liegt, wird ein
`gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

Der folgende Aufruf wählt `gl.TEXTURE1` als das aktuelle Texture aus. Nachfolgende
Aufrufe, die den Texturezustand ändern, wirken sich auf diese Texture aus.

```js
gl.activeTexture(gl.TEXTURE1);
```

Die Anzahl der Textureinheiten ist implementierungsabhängig, Sie können diese Zahl mit
Hilfe der Konstante `MAX_COMBINED_TEXTURE_IMAGE_UNITS` ermitteln. Sie beträgt gemäß
der Spezifikation mindestens 8.

```js
gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
```

Um die aktive Texture zu erhalten, fragen Sie die Konstante `ACTIVE_TEXTURE` ab.

```js
gl.activeTexture(gl.TEXTURE0);
gl.getParameter(gl.ACTIVE_TEXTURE);
// gibt "33984" zurück (0x84C0, gl.TEXTURE0-Aufzählungswert)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getParameter()")}}
