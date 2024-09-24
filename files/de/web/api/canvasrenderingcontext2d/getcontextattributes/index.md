---
title: "CanvasRenderingContext2D: getContextAttributes()-Methode"
short-title: getContextAttributes()
slug: Web/API/CanvasRenderingContext2D/getContextAttributes
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebGL")}}

Die **`CanvasRenderingContext2D.getContextAttributes()`**-Methode gibt ein Objekt zurück, das Attribute enthält, die vom Kontext verwendet werden.

Beachten Sie, dass Kontextattribute angefordert werden können, wenn der Kontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellt wird, aber die tatsächlich unterstützten und verwendeten Attribute können davon abweichen.

## Syntax

```js-nolint
getContextAttributes()
```

### Parameter

Keine.

### Rückgabewert

Ein `CanvasRenderingContext2DSettings`-Objekt, das die tatsächlichen Kontextparameter enthält.
Es hat die folgenden Mitglieder:

- `alpha` {{optional_inline}}
  - : Ein Boolean, der angibt, ob die Leinwand einen Alphakanal enthält.
    Wenn `false`, ist der Hintergrund immer undurchsichtig, was das Zeichnen von transparenten Inhalten und Bildern beschleunigen kann.
- `colorSpace` {{optional_inline}}
  - : Gibt den Farbraum des Rendering-Kontextes an. Mögliche Werte sind:
    - `srgb`: bezeichnet den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB)
    - `display-p3`: bezeichnet den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3)
- `desynchronized` {{optional_inline}}
  - : Ein Boolean, der angibt, dass der Benutzeragent die Latenz durch Desynchronisation des Zeichenzyklus der Leinwand aus der Ereignisschleife reduziert hat.
- `willReadFrequently` {{optional_inline}}
  - : Ein Boolean, der angibt, ob diese Leinwand Softwarebeschleunigung (anstelle von Hardwarebeschleunigung) verwendet, um häufige Rückleseoperationen über {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} zu unterstützen.

## Beispiele

Dieses Beispiel zeigt, wie Sie Kontextattribute beim Erstellen eines Leinwandkontextes angeben können und dann `getContextAttributes()` aufrufen, um die tatsächlichen Parameter zu lesen, die der Browser verwendet hat.

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

Wenn die `getContextAttributes()`-Methode unterstützt wird, verwenden wir sie, um die tatsächlichen vom Browser verwendeten Attribute (einschließlich derjenigen, die wir explizit angegeben haben) zurückzulesen:

```js
if (ctx.getContextAttributes) {
  const attributes = ctx.getContextAttributes();
  log(JSON.stringify(attributes));
} else {
  log("CanvasRenderingContext2D.getContextAttributes() wird nicht unterstützt");
}
```

Abhängig von den durch den Browser unterstützten Attributen sollte das unten stehende Protokoll eine Zeichenkette anzeigen, die ungefähr so aussieht: `{alpha: false, colorSpace: 'srgb', desynchronized: false, willReadFrequently: false}`

{{EmbedLiveSample('Examples','100%','50')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)
- [`WebGLRenderingContext.getContextAttributes()`](/de/docs/Web/API/WebGLRenderingContext/getContextAttributes)
