---
title: "InstallEvent: InstallEvent() Konstruktor"
short-title: InstallEvent()
slug: Web/API/InstallEvent/InstallEvent
l10n:
  sourceCommit: 4bea2a2c058623339730f304ba40cba63ba381dd
---

{{APIRef("Service Workers API")}}{{Deprecated_Header}}{{Non-standard_header}}

Der **`InstallEvent()`** Konstruktor erstellt ein neues [`InstallEvent`](/de/docs/Web/API/InstallEvent) Objekt.

## Syntax

```js-nolint
new InstallEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Events.
    Es ist case-sensitiv und Browser setzen es immer auf `install`.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, beliebige benutzerdefinierte Einstellungen enthalten kann, die Sie auf das Event-Objekt anwenden möchten. Derzeit sind keine möglichen Optionen obligatorisch, aber dies wurde für zukünftige Kompatibilität festgelegt.

### Rückgabewert

Ein neues [`InstallEvent`](/de/docs/Web/API/InstallEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
