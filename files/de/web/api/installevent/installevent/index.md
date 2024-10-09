---
title: "InstallEvent: InstallEvent() Konstruktor"
short-title: InstallEvent()
slug: Web/API/InstallEvent/InstallEvent
l10n:
  sourceCommit: 47962c4ebad5a138673422ec63a282ab9a63d454
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Der **`InstallEvent()`** Konstruktor erstellt ein neues [`InstallEvent`](/de/docs/Web/API/InstallEvent) Objekt.

## Syntax

```js-nolint
new InstallEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/kleinschreibungssensitiv und Browser setzen ihn immer auf `install`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ beliebige benutzerdefinierte Einstellungen enthalten kann, die Sie auf das Ereignisobjekt anwenden möchten. Derzeit sind keine Optionen zwingend erforderlich, aber dies wurde für zukünftige Kompatibilität definiert.

### Rückgabewert

Ein neues [`InstallEvent`](/de/docs/Web/API/InstallEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
