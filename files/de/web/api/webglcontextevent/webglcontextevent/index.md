---
title: "WebGLContextEvent: WebGLContextEvent() Konstruktor"
short-title: WebGLContextEvent()
slug: Web/API/WebGLContextEvent/WebGLContextEvent
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Der **`WebGLContextEvent()`** Konstruktor erstellt ein neues [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent) Objekt.

> [!NOTE]
> In der Regel müssen Sie diesen Konstruktor nicht aufrufen; der Browser erstellt diese Objekte automatisch, wenn WebGL-Kontext-Ereignisse ausgelöst werden. Um ein `webglcontextlost`-Ereignis manuell auszulösen, verwenden Sie [`WEBGL_lose_context.loseContext()`](/de/docs/Web/API/WEBGL_lose_context/loseContext).

## Syntax

```js-nolint
new WebGLContextEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses angibt.
    Es ist case-sensitiv und sollte eines der folgenden sein: `webglcontextcreationerror`, `webglcontextlost` oder `webglcontextrestored`.
- `options` {{Optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften besitzt:
    - `statusMessage` {{Optional_inline}}
      - : Ein String mit zusätzlichen Statusinformationen. Standardmäßig ist dies der leere String (`""`).

### Rückgabewert

Ein neues [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
- [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
- [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
