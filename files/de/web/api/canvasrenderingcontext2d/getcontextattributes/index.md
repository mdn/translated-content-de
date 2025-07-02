---
title: "CanvasRenderingContext2D: getContextAttributes() Methode"
short-title: getContextAttributes()
slug: Web/API/CanvasRenderingContext2D/getContextAttributes
l10n:
  sourceCommit: 5ed97586afb0b74aea8b32b24ea630698520732a
---

{{APIRef("WebGL")}}

Die **`CanvasRenderingContext2D.getContextAttributes()`** Methode gibt ein Objekt zurück, das Attribute enthält, die vom Kontext verwendet werden.

Beachten Sie, dass Kontextattribute beim Erstellen des Kontexts mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angefordert werden können, aber die Attribute, die tatsächlich unterstützt und verwendet werden, können abweichen.

## Syntax

```js-nolint
getContextAttributes()
```

### Parameter

Keine.

### Rückgabewert

Ein `CanvasRenderingContext2DSettings` Objekt, das die tatsächlichen Kontextparameter enthält.
Es hat die folgenden Mitglieder:

- `alpha` {{optional_inline}}
  - : Ein Boolescher Wert, der angibt, ob das Canvas einen Alphakanal enthält.
    Wenn `false`, ist der Hintergrund immer undurchsichtig, was das Zeichnen von transparenten Inhalten und Bildern beschleunigen kann.
- `colorSpace` {{optional_inline}}
  - : Gibt den Farbraum des Rendering-Kontexts an. Mögliche Werte sind:
    - `srgb`: bezeichnet den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB)
    - `display-p3`: bezeichnet den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3)
- `colorType` {{optional_inline}}
  - : Gibt den Farbtyp des Rendering-Kontexts an. Mögliche Werte sind:
    - `"unorm8"` bezeichnet die Farbspeicherkanäle mit 8-Bit-Unsigned-Werten. Dies ist der Standardwert.
    - `"float16"` bezeichnet die Farbspeicherkanäle mit 16-Bit-Floating-Point-Werten.
- `desynchronized` {{optional_inline}}
  - : Ein Boolescher Wert, der angibt, dass der Benutzeragent die Latenz reduziert hat, indem der Malzyklus des Canvas vom Ereignisloop desynchronisiert wurde.
- `willReadFrequently` {{optional_inline}}
  - : Ein Boolescher Wert, der angibt, ob dieses Canvas Softwarebeschleunigung (anstatt Hardwarebeschleunigung) verwendet, um häufige Rückleseoperationen über [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) zu unterstützen.

## Beispiele

Dieses Beispiel zeigt, wie Sie Kontexattribute festlegen können, wenn Sie einen Canvas-Kontext erstellen, und dann `getContextAttributes()` aufrufen, um die tatsächlichen Parameter auszulesen, die der Browser verwendet hat.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += text;
}
```

Zuerst erstellen wir einen Kontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), indem wir nur ein Kontexattribut spezifizieren.

```js
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d", { alpha: false });
```

Wenn die `getContextAttributes()` Methode unterstützt wird, verwenden wir sie, um die tatsächlichen vom Browser verwendeten Attribute auszulesen (einschließlich derjenigen, die wir explizit angegeben haben):

```js
if (ctx.getContextAttributes) {
  const attributes = ctx.getContextAttributes();
  log(JSON.stringify(attributes));
} else {
  log("CanvasRenderingContext2D.getContextAttributes() is not supported");
}
```

Abhängig von den vom Browser unterstützten Attributen sollte das untenstehende Protokoll eine Zeichenkette anzeigen, die in etwa so aussieht: `{alpha: false, colorSpace: 'srgb', desynchronized: false, willReadFrequently: false}`

{{EmbedLiveSample('Examples','100%','50')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
- [`WebGLRenderingContext.getContextAttributes()`](/de/docs/Web/API/WebGLRenderingContext/getContextAttributes)
