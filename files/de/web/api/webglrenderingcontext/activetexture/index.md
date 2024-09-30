---
title: "WebGLRenderingContext: activeTexture()-Methode"
short-title: activeTexture()
slug: Web/API/WebGLRenderingContext/activeTexture
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.activeTexture()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) legt fest, welche Textureinheit aktiv sein soll.

## Syntax

```js-nolint
activeTexture(texture)
```

### Parameter

- `texture`
  - : Die zu aktivierende Textureinheit. Der Wert ist ein `gl.TEXTUREI`,
    wobei _I_ im Bereich von 0 bis
    `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1` liegt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn _texture_ nicht eines von `gl.TEXTUREI` ist, wobei _I_
im Bereich von 0 bis `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1` liegt, wird ein
`gl.INVALID_ENUM`-Fehler ausgelöst.

## Beispiele

Der folgende Aufruf wählt `gl.TEXTURE1` als aktuelle Textur aus. Nachfolgende
Aufrufe, die den Texturzustand ändern, wirken sich auf diese Textur aus.

```js
gl.activeTexture(gl.TEXTURE1);
```

Die Anzahl der Textureinheiten ist implementierungsabhängig; Sie können diese Anzahl mit
Hilfe der `MAX_COMBINED_TEXTURE_IMAGE_UNITS`-Konstante ermitteln. Sie beträgt gemäß
Spezifikation mindestens 8.

```js
gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
```

Um die aktive Textur abzurufen, fragen Sie die `ACTIVE_TEXTURE`-Konstante ab.

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
