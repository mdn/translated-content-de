---
title: "GPUInternalError: GPUInternalError()-Konstruktor"
short-title: GPUInternalError()
slug: Web/API/GPUInternalError/GPUInternalError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`GPUInternalError()`**-Konstruktor erstellt eine neue Instanz eines {{domxref("GPUInternalError")}}-Objekts.

## Syntax

```js-nolint
new GPUInternalError(message)
```

### Parameter

- `message`
  - : Ein String, der eine menschenlesbare Nachricht bereitstellt, die erklärt, warum der Fehler aufgetreten ist.

## Beispiele

Ein Entwickler würde den Konstruktor nicht manuell verwenden, um ein `GPUInternalError`-Objekt zu erstellen. Der Benutzeragent verwendet diesen Konstruktor, um ein entsprechendes Objekt zu erstellen, wenn ein interner Fehler durch {{domxref("GPUDevice.popErrorScope")}} oder das {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}-Ereignis angezeigt wird.

Siehe die Hauptseite von [`GPUInternalError`](/de/docs/Web/API/GPUInternalError#examples) für ein Beispiel, das eine `GPUInternalError`-Objektinstanz beinhaltet.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebGPU Fehlerbehandlung Best Practices](https://toji.dev/webgpu-best-practices/error-handling)
