---
title: "HTMLMediaElement: setMediaKeys()-Methode"
short-title: setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("HTML DOM")}}{{SecureContext_Header}}

Die **`setMediaKeys()`**-Methode der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle legt die [`MediaKeys`](/de/docs/Web/API/MediaKeys) fest, die zur Entschlüsselung von Medien während der Wiedergabe verwendet werden.

Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die neuen Schlüssel erfolgreich gesetzt werden, oder abgelehnt wird, wenn die Schlüssel nicht gesetzt werden können.

## Syntax

```js-nolint
setMediaKeys(mediaKeys)
```

### Parameter

- `mediaKeys`
  - : Ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt, das das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} erfüllt wird.

### Ausnahmen

Das zurückgegebene Promise kann einen Fehler ablehnen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Medien-Schlüssel sind bereits im Prozess der Anfügung, oder die vorherigen Schlüssel können zurzeit nicht entfernt werden (zum Beispiel, weil die spezielle Implementierung keine Entfernung während der Wiedergabe erlaubt).
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die übergebenen Schlüssel werden bereits von einem anderen Element verwendet, oder der Browser kann sie aus anderen Gründen mit diesem Element nicht verwenden.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Medien-Schlüssel, die derzeit mit dem Medium verknüpft sind, können nicht getrennt werden, da dies entweder vom CDM oder vom Browser nicht unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
