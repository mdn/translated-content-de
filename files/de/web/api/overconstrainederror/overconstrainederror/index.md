---
title: "OverconstrainedError: OverconstrainedError()-Konstruktor"
short-title: OverconstrainedError()
slug: Web/API/OverconstrainedError/OverconstrainedError
l10n:
  sourceCommit: 3178e38ae397032bd9c44d5ec6f8192ee391b56a
---

{{APIRef("Media Capture and Streams")}}

Der **`OverconstrainedError()`**-Konstruktor erstellt ein neues [`OverconstrainedError`](/de/docs/Web/API/OverconstrainedError)-Objekt, das anzeigt, dass der Satz der gewünschten Fähigkeiten für den aktuellen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) derzeit nicht erfüllt werden kann. Wenn dieses Ereignis bei einem `MediaStreamTrack` ausgelöst wird, wird es stummgeschaltet, bis entweder die aktuellen Einschränkungen hergestellt oder erfüllbare Einschränkungen angewendet werden.

## Syntax

```js-nolint
new OverconstrainedError()
```

### Parameter

- `constraint`
  - : Die Einschränkung, die nicht erfüllt wurde.
- `message` {{optional_inline}}
  - : Text für die `message`-Eigenschaft des Fehlers. Standardmäßig ein leerer String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
