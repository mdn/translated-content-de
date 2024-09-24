---
title: "OfflineAudioContext: resume()-Methode"
short-title: resume()
slug: Web/API/OfflineAudioContext/resume
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

Die **`resume()`**-Methode der
{{domxref("OfflineAudioContext")}}-Schnittstelle setzt den Zeitfortschritt in einem Audiosystem fort, das angehalten wurde. Das Versprechen wird sofort aufgelöst, da der `OfflineAudioContext` die Audiohardware nicht erfordert.

## Syntax

```js-nolint
resume()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

Das Versprechen wird abgelehnt, wenn eine Ausnahme auftritt.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der Kontext nicht momentan angehalten ist oder die Wiedergabe nicht begonnen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
