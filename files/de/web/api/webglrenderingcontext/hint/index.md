---
title: "WebGLRenderingContext: hint() Methode"
short-title: hint()
slug: Web/API/WebGLRenderingContext/hint
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.hint()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt Hinweise für bestimmte Verhaltensweisen an. Die Interpretation dieser Hinweise hängt von der Implementierung ab.

## Syntax

```js-nolint
hint(target, mode)
```

### Parameter

- `target`

  - : Legt fest, welches Verhalten gesteuert werden soll. Mögliche Werte:

    - `gl.GENERATE_MIPMAP_HINT`

      - : Qualität des Filterings bei der Erzeugung
        von Mipmaps mit {{domxref("WebGLRenderingContext.generateMipmap()")}}.

    Bei Verwendung der {{domxref("OES_standard_derivatives")}} Erweiterung:

    - `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`
      - : Genauigkeit der
        Berechnung von Ableitungen für die GLSL-eingebauten Funktionen: `dFdx`,
        `dFdy` und `fwidth`.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}}
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.FRAGMENT_SHADER_DERIVATIVE_HINT`
      - : Dasselbe wie `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`

- `mode`

  - : Legt das Verhalten fest. Der Standardwert ist `gl.DONT_CARE`. Die möglichen
    Werte sind:

    - `gl.FASTEST`: Das effizienteste Verhalten soll verwendet werden.
    - `gl.NICEST`: Die korrekteste oder qualitativ hochwertigste Option soll
      verwendet werden.
    - `gl.DONT_CARE`: Es gibt keine Präferenz für dieses Verhalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wird angedeutet, dass die Qualität des Filterings bei der Erzeugung von Mipmaps am effizientesten statt in bester Qualität sein sollte.

```js
gl.hint(gl.GENERATE_MIPMAP_HINT, gl.FASTEST);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.generateMipmap()")}}
- {{domxref("OES_standard_derivatives")}}
