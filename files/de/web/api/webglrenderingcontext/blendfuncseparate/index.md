---
title: "WebGLRenderingContext: blendFuncSeparate()-Methode"
short-title: blendFuncSeparate()
slug: Web/API/WebGLRenderingContext/blendFuncSeparate
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.blendFuncSeparate()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) definiert, welche Funktion für das Blenden von Pixel-Arithmetik für RGB- und Alphakomponenten separat verwendet wird.

## Syntax

```js-nolint
blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha)
```

### Parameter

- `srcRGB`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für die roten, grünen und blauen (RGB) Quell-Mischfaktoren angibt. Der Standardwert ist `gl.ONE`. Für mögliche Werte siehe unten.
- `dstRGB`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für die roten, grünen und blauen (RGB) Ziel-Mischfaktoren angibt. Der Standardwert ist `gl.ZERO`. Für mögliche Werte siehe unten.
- `srcAlpha`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für den Alpha-Quell-Mischfaktor angibt. Der Standardwert ist `gl.ONE`. Für mögliche Werte siehe unten.
- `dstAlpha`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für den Alpha-Ziel-Mischfaktor angibt. Der Standardwert ist `gl.ZERO`. Für mögliche Werte siehe unten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn _srcRGB_, _dstRGB_, _srcAlpha_ oder _dstAlpha_ nicht einer der aufgeführten möglichen Werte ist, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn eine konstante Farbe und ein konstanter Alphawert zusammen als Quellen (`srcRGB`) und Ziel (`dstRGB`) Faktoren verwendet werden, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.

## Konstanten

Die folgenden Konstanten können für _srcRGB_, _dstRGB_, _srcAlpha_ und _dstAlpha_ verwendet werden.

Die Formeln für die Mischfaktoren können wie folgt beschrieben werden (alle RGBA-Werte liegen zwischen 0 und 1):

- color(RGB) = (sourceColor \* _srcRGB_) + (destinationColor \* _dstRGB_)
- color(A) = (sourceAlpha \* _srcAlpha_) + (destinationAlpha \* _dstAlpha_)

In der folgenden Tabelle stehen R<sub>S</sub>, G<sub>S</sub>, B<sub>S</sub>, A<sub>S</sub> jeweils für die _roten_, _grünen_, _blauen_ und _alpha_ Komponenten der Quelle, während R<sub>D</sub>, G<sub>D</sub>, B<sub>D</sub>, A<sub>D</sub> jeweils für die _roten_, _grünen_, _blauen_ und _alpha_ Komponenten des Ziels stehen. Ebenso stehen R<sub>C</sub>, G<sub>C</sub>, B<sub>C</sub>, A<sub>C</sub> jeweils für die _roten_, _grünen_, _blauen_ und _alpha_ Komponenten einer konstanten Farbe. Sie sind alle Werte zwischen 0 und 1, inklusive.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">RGB Faktor</th>
      <th scope="col">Alpha Faktor</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.ZERO</code></td>
      <td>0,0,0</td>
      <td>0</td>
      <td>Multipliziert alle Farben mit 0.</td>
    </tr>
    <tr>
      <td><code>gl.ONE</code></td>
      <td>1,1,1,1</td>
      <td>1</td>
      <td>Multipliziert alle Farben mit 1.</td>
    </tr>
    <tr>
      <td><code>gl.SRC_COLOR</code></td>
      <td>R<sub>S</sub>, G<sub>S</sub>, B<sub>S</sub></td>
      <td>A<sub>S</sub></td>
      <td>Multipliziert alle Farben mit den Quellfarben.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_SRC_COLOR</code></td>
      <td>1-R<sub>S</sub>, 1-G<sub>S</sub>, 1-B<sub>S</sub></td>
      <td>1-A<sub>S</sub></td>
      <td>Multipliziert alle Farben mit 1 minus jeder Quellfarbe.</td>
    </tr>
    <tr>
      <td><code>gl.DST_COLOR</code></td>
      <td>R<sub>D</sub>, G<sub>D</sub>, B<sub>D</sub></td>
      <td>A<sub>D</sub></td>
      <td>Multipliziert alle Farben mit der Zielfarbe.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_DST_COLOR</code></td>
      <td>1-R<sub>D</sub>, 1-G<sub>D</sub>, 1-B<sub>D</sub></td>
      <td>1-A<sub>D</sub></td>
      <td>Multipliziert alle Farben mit 1 minus jeder Zielfarbe.</td>
    </tr>
    <tr>
      <td><code>gl.SRC_ALPHA</code></td>
      <td>A<sub>S</sub>, A<sub>S</sub>, A<sub>S</sub></td>
      <td>A<sub>S</sub></td>
      <td>Multipliziert alle Farben mit der Quellalpha-Farbe.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_SRC_ALPHA</code></td>
      <td>1-A<sub>S</sub>, 1-A<sub>S</sub>, 1-A<sub>S</sub></td>
      <td>1-A<sub>S</sub></td>
      <td>Multipliziert alle Farben mit 1 minus der Quellalpha-Farbe.</td>
    </tr>
    <tr>
      <td><code>gl.DST_ALPHA</code></td>
      <td>A<sub>D</sub>, A<sub>D</sub>, A<sub>D</sub></td>
      <td>A<sub>D</sub></td>
      <td>Multipliziert alle Farben mit der Zielalpha-Farbe.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_DST_ALPHA</code></td>
      <td>1-A<sub>D</sub>, 1-A<sub>D</sub>, 1-A<sub>D</sub></td>
      <td>1-A<sub>D</sub></td>
      <td>Multipliziert alle Farben mit 1 minus der Zielalpha-Farbe.</td>
    </tr>
    <tr>
      <td><code>gl.CONSTANT_COLOR</code></td>
      <td>R<sub>C</sub>, G<sub>C</sub>, B<sub>C</sub></td>
      <td>A<sub>C</sub></td>
      <td>Multipliziert alle Farben mit einer konstanten Farbe.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_CONSTANT_COLOR</code></td>
      <td>1-R<sub>C</sub>, 1-G<sub>C</sub>, 1-B<sub>C</sub></td>
      <td>1-A<sub>C</sub></td>
      <td>Multipliziert alle Farben mit 1 minus einer konstanten Farbe.</td>
    </tr>
    <tr>
      <td><code>gl.CONSTANT_ALPHA</code></td>
      <td>A<sub>C</sub>, A<sub>C</sub>, A<sub>C</sub></td>
      <td>A<sub>C</sub></td>
      <td>Multipliziert alle Farben mit einem konstanten Alphawert.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_CONSTANT_ALPHA</code></td>
      <td>1-A<sub>C</sub>, 1-A<sub>C</sub>, 1-A<sub>C</sub></td>
      <td>1-A<sub>C</sub></td>
      <td>Multipliziert alle Farben mit 1 minus einem konstanten Alphawert.</td>
    </tr>
    <tr>
      <td><code>gl.SRC_ALPHA_SATURATE</code></td>
      <td>
        min(A<sub>S</sub>, 1 - A<sub>D</sub>), min(A<sub>S</sub>, 1 -
        A<sub>D</sub>), min(A<sub>S</sub>, 1 - A<sub>D</sub>)
      </td>
      <td>1</td>
      <td>
        Multipliziert die RGB-Farben mit dem kleineren Wert entweder der Quellalpha-Farbe oder dem Wert von 1 minus der Zielalpha-Farbe. Der Alphawert wird mit 1 multipliziert.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Um die Mischfunktion zu verwenden, müssen Sie zuerst die Mischung mit [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) mit dem Argument `gl.BLEND` aktivieren.

```js
gl.enable(gl.BLEND);
gl.blendFuncSeparate(gl.SRC_COLOR, gl.DST_COLOR, gl.ONE, gl.ZERO);
```

Um die aktuelle Mischfunktion abzufragen, verwenden Sie die Konstanten `BLEND_SRC_RGB`, `BLEND_SRC_ALPHA`, `BLEND_DST_RGB` und `BLEND_DST_ALPHA`, die eine der Mischfunktionskonstanten zurückgeben.

```js
gl.enable(gl.BLEND);
gl.blendFuncSeparate(gl.SRC_COLOR, gl.DST_COLOR, gl.ONE, gl.ZERO);
gl.getParameter(gl.BLEND_SRC_RGB) === gl.SRC_COLOR;
// true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.blendColor()`](/de/docs/Web/API/WebGLRenderingContext/blendColor)
- [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation)
