---
title: "WebGLContextEvent: WebGLContextEvent() Konstruktor"
short-title: WebGLContextEvent()
slug: Web/API/WebGLContextEvent/WebGLContextEvent
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Der **`WebGLContextEvent()`** Konstruktor erstellt ein neues {{domxref("WebGLContextEvent")}} Objekt.

> [!NOTE]
> Normalerweise müssen Sie diesen Konstruktor nicht aufrufen; der Browser erstellt diese Objekte automatisch, wenn WebGL-Kontextereignisse ausgelöst werden. Um ein `webglcontextlost` Ereignis manuell auszulösen, verwenden Sie {{domxref("WEBGL_lose_context.loseContext()")}}.

## Syntax

```js-nolint
new WebGLContextEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses angibt.
    Es ist groß- und kleinschreibungssensitiv und sollte einer der folgenden sein: `webglcontextcreationerror`, `webglcontextlost` oder `webglcontextrestored`.
- `options` {{Optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ folgende Eigenschaften hat:
    - `statusMessage` {{Optional_inline}}
      - : Ein String mit zusätzlichen Statusinformationen. Er ist standardmäßig leer (`""`).

### Rückgabewert

Ein neues {{domxref("WebGLContextEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
- [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
- [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
