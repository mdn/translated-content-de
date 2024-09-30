---
title: "HTMLMediaElement: setMediaKeys()-Methode"
short-title: setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("HTML DOM")}}{{SecureContext_Header}}

Die **`setMediaKeys()`**-Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces setzt die [`MediaKeys`](/de/docs/Web/API/MediaKeys), die zur Entschlüsselung von Medien während der Wiedergabe verwendet werden.

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
  - : Medien-Schlüssel sind bereits im Prozess des Anhängens, oder die vorherigen Schlüssel können momentan nicht entfernt werden (zum Beispiel, weil die spezielle Implementierung eine Entfernung während der Wiedergabe nicht erlaubt).
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die übergebenen Schlüssel werden bereits von einem anderen Element verwendet, oder der Browser kann sie aus anderen Gründen nicht mit diesem Element verwenden.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die derzeit mit dem Medium verknüpften Medien-Schlüssel können nicht getrennt werden, da dies entweder vom CDM oder dem Browser nicht unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
