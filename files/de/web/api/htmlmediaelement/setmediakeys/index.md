---
title: "HTMLMediaElement: setMediaKeys()-Methode"
short-title: setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("HTML DOM")}}{{SecureContext_Header}}

Die **`setMediaKeys()`**-Methode des {{domxref("HTMLMediaElement")}}-Interfaces legt die {{domxref("MediaKeys")}} fest, die zur Entschlüsselung von Medien während der Wiedergabe verwendet werden.

Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die neuen Schlüssel erfolgreich gesetzt werden, oder abgelehnt wird, wenn die Schlüssel nicht gesetzt werden können.

## Syntax

```js-nolint
setMediaKeys(mediaKeys)
```

### Parameter

- `mediaKeys`
  - : Ein {{domxref("MediaKeys")}}-Objekt, das das {{domxref("HTMLMediaElement")}} zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} erfüllt wird.

### Ausnahmen

Das zurückgegebene Versprechen kann einen Fehler ablehnen:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Medien-Schlüssel befinden sich bereits im Prozess der Verbindung, oder die vorherigen Schlüssel können zum aktuellen Zeitpunkt nicht entfernt werden (zum Beispiel, weil die spezielle Implementierung die Entfernung während der Wiedergabe nicht zulässt).
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Die übergebenen Schlüssel werden bereits von einem anderen Element verwendet, oder der Browser kann sie aus anderen Gründen nicht mit diesem Element verwenden.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Die Medien-Schlüssel, die derzeit mit dem Medium verbunden sind, können nicht getrennt werden, da dies entweder vom CDM oder vom Browser nicht unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
