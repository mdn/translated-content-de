---
title: "HTMLMediaElement: setMediaKeys() Methode"
short-title: setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("HTML DOM")}}{{SecureContext_Header}}

Die **`setMediaKeys()`** Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Interfaces legt die [`MediaKeys`](/de/docs/Web/API/MediaKeys) fest, die zur Entschlüsselung von Medien während der Wiedergabe verwendet werden.

Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die neuen Schlüssel erfolgreich gesetzt werden, oder abgelehnt wird, wenn die Schlüssel nicht gesetzt werden können.

## Syntax

```js-nolint
setMediaKeys(mediaKeys)
```

### Parameter

- `mediaKeys`
  - : Ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt, das das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) für die Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} erfüllt wird.

### Ausnahmen

Das zurückgegebene Promise kann einen Fehler ablehnen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Medien-Schlüssel befinden sich bereits im Prozess der Befestigung, oder die vorherigen Schlüssel können derzeit nicht entfernt werden (zum Beispiel, weil die spezielle Implementierung die Entfernung während der Wiedergabe nicht zulässt).
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Die übergebenen Schlüssel werden bereits von einem anderen Element verwendet, oder der Browser kann es aus anderen Gründen nicht mit diesem Element verwenden.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Medien-Schlüssel, die derzeit mit dem Medium verbunden sind, können nicht getrennt werden, da dies von entweder dem CDM oder dem Browser nicht unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
