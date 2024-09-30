---
title: "OfflineAudioContext: resume()-Methode"
short-title: resume()
slug: Web/API/OfflineAudioContext/resume
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

Die **`resume()`**-Methode der
[`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Schnittstelle setzt den Zeitverlauf in einem Audio-Kontext fort, der angehalten wurde. Das Promise wird sofort aufgelöst, da der `OfflineAudioContext` die Audio-Hardware nicht benötigt.

## Syntax

```js-nolint
resume()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine Ausnahme auftritt.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Kontext derzeit nicht angehalten ist oder das Rendering nicht gestartet wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
