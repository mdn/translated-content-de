---
title: "IDBVersionChangeEvent: IDBVersionChangeEvent() Konstruktor"
short-title: IDBVersionChangeEvent()
slug: Web/API/IDBVersionChangeEvent/IDBVersionChangeEvent
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("IndexedDB")}}

Der **`IDBVersionChangeEvent()`** Konstruktor erzeugt ein neues {{domxref("IDBVersionChangeEvent")}}-Objekt, das verwendet wird, um darzustellen, wann sich eine Version der Datenbank geändert hat, als Ergebnis des {{domxref('IDBOpenDBRequest.upgradeneeded_event', 'onupgradeneeded')}} Event-Handlers.

## Syntax

```js-nolint
new IDBVersionChangeEvent(type)
new IDBVersionChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitiv und die Browser setzen es auf `versionchange`, `success` oder `blocked`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften enthalten kann:
    - `oldVersion` {{optional_inline}}
      - : Eine Zahl, die die vorherige Version der Datenbank darstellt. Standardmäßig `0`.
    - `newVersion` {{optional_inline}}
      - : Ein unsigned long, das die neue Version der Datenbank darstellt, oder `null`, wenn die Datenbank gelöscht wird. Standardwert ist `null`.

### Rückgabewert

Ein neues {{domxref("IDBVersionChangeEvent")}}-Objekt.

## Beispiele

Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
