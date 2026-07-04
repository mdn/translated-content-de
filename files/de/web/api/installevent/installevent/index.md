---
title: "InstallEvent: InstallEvent() Konstruktor"
short-title: InstallEvent()
slug: Web/API/InstallEvent/InstallEvent
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Service Workers API")}}

Der **`InstallEvent()`** Konstruktor erzeugt ein neues [`InstallEvent`](/de/docs/Web/API/InstallEvent) Objekt.

## Syntax

```js-nolint
new InstallEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv und Browser setzen ihn immer auf `install`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ beliebige benutzerdefinierte Einstellungen enthalten kann, die Sie auf das Ereignisobjekt anwenden möchten. Derzeit sind keine möglichen Optionen verpflichtend, aber dies wurde für die Zukunftskompatibilität definiert.

### Rückgabewert

Ein neues [`InstallEvent`](/de/docs/Web/API/InstallEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
