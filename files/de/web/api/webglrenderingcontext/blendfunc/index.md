---
title: "WebGLRenderingContext: blendFunc()-Methode"
short-title: blendFunc()
slug: Web/API/WebGLRenderingContext/blendFunc
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.blendFunc()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) definiert, welche Funktion für die
Mischung von Pixelarithmetik verwendet wird.

## Syntax

```js-nolint
blendFunc(sfactor, dfactor)
```

### Parameter

- `sfactor`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für die Quellmischfaktoren angibt. Der
    Standardwert ist `gl.ONE`. Mögliche Werte finden Sie unten.
- `dfactor`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Multiplikator für die Zielmischfaktoren
    angibt. Der Standardwert ist `gl.ZERO`. Mögliche Werte finden Sie unten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn _sfactor_ oder _dfactor_ nicht einer der aufgeführten möglichen Werte ist, wird ein
  `gl.INVALID_ENUM`-Fehler ausgelöst.
- Wenn eine konstante Farbe und ein konstanter Alpha-Wert zusammen als Quelle und
  Ziel-Faktoren verwendet werden, wird ein `gl.INVALID_ENUM`-Fehler ausgelöst.

## Konstanten

Die folgenden Konstanten können für _sfactor_ und _dfactor_ verwendet werden.

Die Formel für die Mischfarbe kann so beschrieben werden: color(RGBA) =
(sourceColor \* _sfactor_) + (destinationColor \* _dfactor_). Die RGBA-
Werte liegen zwischen 0 und 1.

In der folgenden Tabelle stehen R<sub>S</sub>, G<sub>S</sub>, B<sub>S</sub>, A<sub>S</sub> jeweils für
die _Rot_, _Grün_, _Blau_ und _Alpha_-Komponenten der Quelle, während
R<sub>D</sub>, G<sub>D</sub>, B<sub>D</sub>, A<sub>D</sub> jeweils für
die _Rot_, _Grün_, _Blau_ und _Alpha_-Komponenten des Ziels stehen.
R<sub>C</sub>, G<sub>C</sub>, B<sub>C</sub>, A<sub>C</sub> repräsentieren jeweils
die _Rot_, _Grün_, _Blau_ und _Alpha_-Komponenten einer konstanten Farbe. Alle Werte liegen zwischen 0 und 1, inklusive.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Faktor</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.ZERO</code></td>
      <td>0,0,0,0</td>
      <td>Multipliziert alle Farben mit 0.</td>
    </tr>
    <tr>
      <td><code>gl.ONE</code></td>
      <td>1,1,1,1</td>
      <td>Multipliziert alle Farben mit 1.</td>
    </tr>
    <tr>
      <td><code>gl.SRC_COLOR</code></td>
      <td>R<sub>S</sub>, G<sub>S</sub>, B<sub>S</sub>, A<sub>S</sub></td>
      <td>Multipliziert alle Farben mit den Quellfarben.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_SRC_COLOR</code></td>
      <td>
        1-R<sub>S</sub>, 1-G<sub>S</sub>, 1-B<sub>S</sub>, 1-A<sub>S</sub>
      </td>
      <td>Multipliziert alle Farben mit 1 minus jeder Quellfarbe.</td>
    </tr>
    <tr>
      <td><code>gl.DST_COLOR</code></td>
      <td>R<sub>D</sub>, G<sub>D</sub>, B<sub>D</sub>, A<sub>D</sub></td>
      <td>Multipliziert alle Farben mit der Zielfarbe.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_DST_COLOR</code></td>
      <td>
        1-R<sub>D</sub>, 1-G<sub>D</sub>, 1-B<sub>D</sub>, 1-A<sub>D</sub>
      </td>
      <td>Multipliziert alle Farben mit 1 minus jeder Zielfarbe.</td>
    </tr>
    <tr>
      <td><code>gl.SRC_ALPHA</code></td>
      <td>A<sub>S</sub>, A<sub>S</sub>, A<sub>S</sub>, A<sub>S</sub></td>
      <td>Multipliziert alle Farben mit dem Alpha-Wert der Quelle.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_SRC_ALPHA</code></td>
      <td>
        1-A<sub>S</sub>, 1-A<sub>S</sub>, 1-A<sub>S</sub>, 1-A<sub>S</sub>
      </td>
      <td>Multipliziert alle Farben mit 1 minus dem Alpha-Wert der Quelle.</td>
    </tr>
    <tr>
      <td><code>gl.DST_ALPHA</code></td>
      <td>A<sub>D</sub>, A<sub>D</sub>, A<sub>D</sub>, A<sub>D</sub></td>
      <td>Multipliziert alle Farben mit dem Alpha-Wert des Ziels.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_DST_ALPHA</code></td>
      <td>
        1-A<sub>D</sub>, 1-A<sub>D</sub>, 1-A<sub>D</sub>, 1-A<sub>D</sub>
      </td>
      <td>Multipliziert alle Farben mit 1 minus dem Alpha-Wert des Ziels.</td>
    </tr>
    <tr>
      <td><code>gl.CONSTANT_COLOR</code></td>
      <td>R<sub>C</sub>, G<sub>C</sub>, B<sub>C</sub>, A<sub>C</sub></td>
      <td>Multipliziert alle Farben mit einer konstanten Farbe.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_CONSTANT_COLOR</code></td>
      <td>
        1-R<sub>C</sub>, 1-G<sub>C</sub>, 1-B<sub>C</sub>, 1-A<sub>C</sub>
      </td>
      <td>Multipliziert alle Farben mit 1 minus einer konstanten Farbe.</td>
    </tr>
    <tr>
      <td><code>gl.CONSTANT_ALPHA</code></td>
      <td>A<sub>C</sub>, A<sub>C</sub>, A<sub>C</sub>, A<sub>C</sub></td>
      <td>Multipliziert alle Farben mit einem konstanten Alpha-Wert.</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_CONSTANT_ALPHA</code></td>
      <td>
        1-A<sub>C</sub>, 1-A<sub>C</sub>, 1-A<sub>C</sub>, 1-A<sub>C</sub>
      </td>
      <td>Multipliziert alle Farben mit 1 minus einem konstanten Alpha-Wert.</td>
    </tr>
    <tr>
      <td><code>gl.SRC_ALPHA_SATURATE</code></td>
      <td>
        min(A<sub>S</sub>, 1 - A<sub>D</sub>), min(A<sub>S</sub>, 1 -
        A<sub>D</sub>), min(A<sub>S</sub>, 1 - A<sub>D</sub>), 1
      </td>
      <td>
        Multipliziert die RGB-Farben mit dem kleineren Wert entweder des Quell-Alpha-Wertes oder des Wertes von 1 minus dem Ziel-Alpha-Wert. Der Alpha-Wert wird mit 1 multipliziert.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Um die Blendfunktion zu verwenden, müssen Sie zuerst das Blending mit
[`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable) mit dem Argument `gl.BLEND` aktivieren.

```js
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_COLOR, gl.DST_COLOR);
```

Um die aktuelle Blendfunktion abzurufen, fragen Sie die Konstanten `BLEND_SRC_RGB`,
`BLEND_SRC_ALPHA`, `BLEND_DST_RGB` und
`BLEND_DST_ALPHA` ab, die eine der Blendfunktion-Konstanten zurückgeben.

```js
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_COLOR, gl.DST_COLOR);
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
