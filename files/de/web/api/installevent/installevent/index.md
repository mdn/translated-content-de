---
title: "InstallEvent: InstallEvent() Konstruktor"
short-title: InstallEvent()
slug: Web/API/InstallEvent/InstallEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Service Workers API")}}{{Deprecated_Header}}{{Non-standard_header}}

Der **`InstallEvent()`** Konstruktor erstellt ein neues {{domxref("InstallEvent")}} Objekt.

## Syntax

```js-nolint
new InstallEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er unterscheidet zwischen Groß- und Kleinschreibung, und Browser setzen ihn immer auf `install`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ beliebige benutzerdefinierte Einstellungen enthalten kann, die Sie auf das Ereignisobjekt anwenden möchten. Derzeit sind keine möglichen Optionen obligatorisch, aber dies wurde aus Gründen der zukünftigen Kompatibilität definiert.

### Rückgabewert

Ein neues {{domxref("InstallEvent")}} Objekt.

## Spezifikationen

_Dieses Feature befindet sich nicht mehr auf dem Standardpfad._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
