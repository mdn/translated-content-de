---
title: "InstallEvent: InstallEvent() Konstruktor"
short-title: InstallEvent()
slug: Web/API/InstallEvent/InstallEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Service Workers API")}}{{Deprecated_Header}}{{Non-standard_header}}

Der **`InstallEvent()`** Konstruktor erstellt ein neues [`InstallEvent`](/de/docs/Web/API/InstallEvent)-Objekt.

## Syntax

```js-nolint
new InstallEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitive, und Browser setzen es immer auf `install`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ beliebige benutzerdefinierte Einstellungen enthalten kann, die Sie auf das Ereignisobjekt anwenden möchten. Derzeit sind keine Optionen obligatorisch, aber dies wurde für zukünftige Kompatibilität definiert.

### Rückgabewert

Ein neues [`InstallEvent`](/de/docs/Web/API/InstallEvent)-Objekt.

## Spezifikationen

_Dieses Feature gehört nicht mehr zum Standard-Track._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
