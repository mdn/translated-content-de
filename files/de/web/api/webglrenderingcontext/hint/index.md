---
title: "WebGLRenderingContext: hint() Methode"
short-title: hint()
slug: Web/API/WebGLRenderingContext/hint
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.hint()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt Hinweise für bestimmte Verhaltensweisen an. Die Interpretation dieser Hinweise hängt von der Implementierung ab.

## Syntax

```js-nolint
hint(target, mode)
```

### Parameter

- `target`
  - : Bestimmt, welches Verhalten gesteuert werden soll. Mögliche Werte:
    - `gl.GENERATE_MIPMAP_HINT`
      - : Qualität der Filterung beim Erzeugen von Mipmap-Bildern mit [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap).

    Bei Verwendung der [`OES_standard_derivatives`](/de/docs/Web/API/OES_standard_derivatives) Erweiterung:
    - `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`
      - : Genauigkeit der Ableitungsberechnung für die eingebauten GLSL-Funktionen: `dFdx`, `dFdy` und `fwidth`.

    Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich die folgenden Werte verfügbar:
    - `gl.FRAGMENT_SHADER_DERIVATIVE_HINT`
      - : Dasselbe wie `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`

- `mode`
  - : Legt das Verhalten fest. Der Standardwert ist `gl.DONT_CARE`. Mögliche Werte sind:
    - `gl.FASTEST`: Das effizienteste Verhalten sollte verwendet werden.
    - `gl.NICEST`: Die korrekteste oder qualitativ hochwertigste Option sollte verwendet werden.
    - `gl.DONT_CARE`: Es gibt keine Präferenz für dieses Verhalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel gibt an, dass bei der Erzeugung von Mipmap-Bildern die effizienteste Qualität der Filterung anstelle der besten Qualität verwendet werden soll.

```js
gl.hint(gl.GENERATE_MIPMAP_HINT, gl.FASTEST);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap)
- [`OES_standard_derivatives`](/de/docs/Web/API/OES_standard_derivatives)
