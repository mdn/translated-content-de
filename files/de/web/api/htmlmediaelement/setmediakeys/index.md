---
title: "HTMLMediaElement: setMediaKeys()-Methode"
short-title: setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{APIRef("HTML DOM")}}{{SecureContext_Header}}

Die **`setMediaKeys()`**-Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces setzt die [`MediaKeys`](/de/docs/Web/API/MediaKeys), die zum Entschlüsseln von Medien während der Wiedergabe verwendet werden.

Sie gibt ein {{jsxref("Promise")}} zurück, das sich erfüllt, wenn die neuen Schlüssel erfolgreich gesetzt werden, oder abgelehnt wird, wenn die Schlüssel nicht gesetzt werden können.

## Syntax

```js-nolint
setMediaKeys(mediaKeys)
```

### Parameter

- `mediaKeys`
  - : Ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt, das das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) zur Entschlüsselung von Mediendaten während der Wiedergabe verwenden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref('undefined')}} erfüllt.

### Ausnahmen

Das zurückgegebene Promise kann einen Fehler ablehnen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Medienschlüssel sind bereits im Prozess des Anbindens, oder die vorherigen Schlüssel können momentan nicht entfernt werden (zum Beispiel, weil die besondere Implementierung dies während der Wiedergabe nicht erlaubt).
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Die übergebenen Schlüssel werden bereits von einem anderen Element verwendet, oder der Browser kann sie aus anderen Gründen mit diesem Element nicht verwenden.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Medienschlüssel, die derzeit mit den Medien verbunden sind, können nicht disassoziiert werden, weil dies weder vom CDM noch vom Browser unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
