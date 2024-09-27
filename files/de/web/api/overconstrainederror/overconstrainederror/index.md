---
title: "OverconstrainedError: OverconstrainedError() Konstruktor"
short-title: OverconstrainedError()
slug: Web/API/OverconstrainedError/OverconstrainedError
l10n:
  sourceCommit: 3178e38ae397032bd9c44d5ec6f8192ee391b56a
---

{{APIRef("Media Capture and Streams")}}

Der **`OverconstrainedError()`** Konstruktor erstellt ein neues [`OverconstrainedError`](/de/docs/Web/API/OverconstrainedError)-Objekt, das anzeigt, dass die Menge der gewünschten Fähigkeiten für den aktuellen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) momentan nicht erfüllt werden kann. Wenn dieses Ereignis auf einem `MediaStreamTrack` ausgelöst wird, wird es stummgeschaltet, bis entweder die aktuellen Einschränkungen durchgesetzt werden können oder erfüllbare Einschränkungen angewendet werden.

## Syntax

```js-nolint
new OverconstrainedError()
```

### Parameter

- `constraint`
  - : Die nicht erfüllte Einschränkung.
- `message` {{optional_inline}}
  - : Text für die `message`-Eigenschaft des Fehlers. Standardmäßig ein leerer String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
