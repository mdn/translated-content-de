---
title: "CanvasRenderingContext2D: getContextAttributes()-Methode"
short-title: getContextAttributes()
slug: Web/API/CanvasRenderingContext2D/getContextAttributes
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebGL")}}

Die **`CanvasRenderingContext2D.getContextAttributes()`**-Methode gibt ein Objekt zurück, das Attribute enthält, die vom Kontext genutzt werden.

Beachten Sie, dass Kontextattribute angefordert werden können, wenn der Kontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellt wird. Die Attribute, die tatsächlich unterstützt und verwendet werden, können jedoch abweichen.

## Syntax

```js-nolint
getContextAttributes()
```

### Parameter

Keine.

### Rückgabewert

Ein `CanvasRenderingContext2DSettings`-Objekt, das die tatsächlichen Kontextparameter enthält.
Es hat folgende Mitglieder:

- `alpha` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob die Leinwand einen Alphakanal enthält.
    Wenn `false`, ist der Hintergrund immer undurchsichtig, was das Zeichnen von transparenten Inhalten und Bildern beschleunigen kann.
- `colorSpace` {{optional_inline}}
  - : Gibt den Farbraum des Rendering-Kontexts an. Mögliche Werte sind:
    - `srgb`: steht für den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB)
    - `display-p3`: steht für den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3)
- `desynchronized` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob der User-Agent die Latenzzeit reduziert hat, indem er den Malzyklus der Leinwand von der Ereignisschleife desynchronisiert hat.
- `willReadFrequently` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob diese Leinwand Software-Beschleunigung (anstelle von Hardware-Beschleunigung) verwendet, um häufige Rückleseoperationen über [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) zu unterstützen.

## Beispiele

Dieses Beispiel zeigt, wie Sie Kontextattribute beim Erstellen eines Leinwandkontexts angeben und anschließend `getContextAttributes()` aufrufen können, um die tatsächlichen Parameter zu lesen, die der Browser verwendet hat.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += text;
}
```

Zuerst erstellen wir einen Kontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), wobei wir nur ein Kontextattribut angeben.

```js
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d", { alpha: false });
```

Wenn die `getContextAttributes()`-Methode unterstützt wird, verwenden wir sie, um die tatsächlichen vom Browser genutzten Attribute auszulesen (einschließlich derjenigen, die wir explizit angegeben haben):

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
