---
title: "WebGLRenderingContext: hint() Methode"
short-title: hint()
slug: Web/API/WebGLRenderingContext/hint
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.hint()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert Hinweise für bestimmte Verhaltensweisen. Die Interpretation dieser Hinweise hängt von der Implementierung ab.

## Syntax

```js-nolint
hint(target, mode)
```

### Parameter

- `target`

  - : Legt fest, welches Verhalten gesteuert werden soll. Mögliche Werte:

    - `gl.GENERATE_MIPMAP_HINT`

      - : Qualität der Filterung beim Erzeugen von
        Mipmap-Bildern mit [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap).

    Bei Verwendung der [`OES_standard_derivatives`](/de/docs/Web/API/OES_standard_derivatives) Erweiterung:

    - `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`
      - : Genauigkeit der
        Ableitungsberechnung für die eingebauten GLSL-Funktionen: `dFdx`,
        `dFdy` und `fwidth`.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontext", "", 1)}},
    sind zusätzlich folgende Werte verfügbar:

    - `gl.FRAGMENT_SHADER_DERIVATIVE_HINT`
      - : Entspricht `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`

- `mode`

  - : Legt das Verhalten fest. Der Standardwert ist `gl.DONT_CARE`. Die möglichen
    Werte sind:

    - `gl.FASTEST`: Das effizienteste Verhalten sollte verwendet werden.
    - `gl.NICEST`: Die korrekteste oder qualitativ hochwertigste Option sollte
      verwendet werden.
    - `gl.DONT_CARE`: Es gibt keine Präferenz für dieses Verhalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel gibt einen Hinweis, dass die Qualität der Filterung beim Erzeugen von Mipmap-Bildern am effizientesten sein sollte, anstatt die beste Qualität.

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
