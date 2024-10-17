---
title: "HIDDevice: open() Methode"
short-title: open()
slug: Web/API/HIDDevice/open
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`open()`** Methode des [`HIDDevice`](/de/docs/Web/API/HIDDevice) Interfaces fordert das Betriebssystem auf, das HID-Gerät zu öffnen.

> [!NOTE]
> HID-Geräte werden nicht automatisch geöffnet. Daher muss ein [`HIDDevice`](/de/docs/Web/API/HIDDevice), das von [`HID.requestDevice()`](/de/docs/Web/API/HID/requestDevice) zurückgegeben wird, mit dieser Methode geöffnet werden, bevor es zum Datentransfer zur Verfügung steht.

## Syntax

```js-nolint
open()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` aufgelöst wird, sobald die Verbindung geöffnet ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verbindung bereits geöffnet ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Versuch, die Verbindung zu öffnen, aus irgendeinem Grund fehlschlägt.

## Beispiele

Im folgenden Beispiel warten wir darauf, dass die HID-Verbindung geöffnet wird, bevor wir versuchen, Daten zu senden oder zu empfangen.

```js
await device.open();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
