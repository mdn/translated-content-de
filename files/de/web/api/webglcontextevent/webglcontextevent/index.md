---
title: "WebGLContextEvent: WebGLContextEvent() Konstruktor"
short-title: WebGLContextEvent()
slug: Web/API/WebGLContextEvent/WebGLContextEvent
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Der **`WebGLContextEvent()`** Konstruktor erstellt ein neues [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent) Objekt.

> [!NOTE]
> In der Regel benötigen Sie diesen Konstruktor nicht aufzurufen; der Browser erstellt diese Objekte automatisch, wenn WebGL-Kontextereignisse ausgelöst werden. Um ein `webglcontextlost`-Ereignis manuell auszulösen, verwenden Sie [`WEBGL_lose_context.loseContext()`](/de/docs/Web/API/WEBGL_lose_context/loseContext).

## Syntax

```js-nolint
new WebGLContextEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses angibt.
    Er ist case-sensitiv und sollte einer von `webglcontextcreationerror`, `webglcontextlost` oder `webglcontextrestored` sein.
- `options` {{Optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `statusMessage` {{Optional_inline}}
      - : Ein String mit zusätzlichen Statusinformationen. Es ist standardmäßig der leere String (`""`).

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
