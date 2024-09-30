---
title: "IDBVersionChangeEvent: IDBVersionChangeEvent()-Konstruktor"
short-title: IDBVersionChangeEvent()
slug: Web/API/IDBVersionChangeEvent/IDBVersionChangeEvent
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("IndexedDB")}}

Der **`IDBVersionChangeEvent()`**-Konstruktor
erstellt ein neues [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt, das verwendet wird, um darzustellen,
wann eine Version der Datenbank geändert wurde, als Ergebnis des
[`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Event-Handlers.

## Syntax

```js-nolint
new IDBVersionChangeEvent(type)
new IDBVersionChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive und Browser setzen ihn auf `versionchange`, `success` oder `blocked`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `oldVersion` {{optional_inline}}
      - : Eine Zahl, die die vorherige Version der Datenbank darstellt. Der Standardwert ist `0`.
    - `newVersion` {{optional_inline}}
      - : Ein unsigned long, das die neue Version der Datenbank darstellt,
        oder `null`, wenn die Datenbank gelöscht wird. Der Standardwert ist `null`.

### Rückgabewert

Ein neues [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent)-Objekt.

## Beispiele

Für ein vollständiges funktionierendes Beispiel sehen Sie unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
