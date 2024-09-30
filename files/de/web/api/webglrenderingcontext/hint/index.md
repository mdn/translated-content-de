---
title: "WebGLRenderingContext: hint() Methode"
short-title: hint()
slug: Web/API/WebGLRenderingContext/hint
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.hint()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt Hinweise für bestimmte Verhaltensweisen. Die Interpretation dieser Hinweise hängt von der Implementierung ab.

## Syntax

```js-nolint
hint(target, mode)
```

### Parameter

- `target`

  - : Legt fest, welches Verhalten gesteuert werden soll. Mögliche Werte:

    - `gl.GENERATE_MIPMAP_HINT`

      - : Qualität der Filterung beim Generieren von Mipmap-Bildern mit [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap).

    Bei Verwendung der [`OES_standard_derivatives`](/de/docs/Web/API/OES_standard_derivatives)-Erweiterung:

    - `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`
      - : Genauigkeit der Ableitungsberechnung für die integrierten GLSL-Funktionen: `dFdx`,
        `dFdy` und `fwidth`.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}},
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.FRAGMENT_SHADER_DERIVATIVE_HINT`
      - : Gleich wie `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`

- `mode`

  - : Legt das Verhalten fest. Der Standardwert ist `gl.DONT_CARE`. Die möglichen
    Werte sind:

    - `gl.FASTEST`: Das effizienteste Verhalten sollte verwendet werden.
    - `gl.NICEST`: Die korrekteste oder qualitativ hochwertigste Option sollte
      verwendet werden.
    - `gl.DONT_CARE`: Es besteht keine Präferenz für dieses Verhalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wird angedeutet, dass die Qualität der Filterung beim Generieren von Mipmap-Bildern am effizientesten statt in der besten Qualität sein soll.

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
