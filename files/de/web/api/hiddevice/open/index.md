---
title: "HIDDevice: open()-Methode"
short-title: open()
slug: Web/API/HIDDevice/open
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`open()`**-Methode der {{domxref("HIDDevice")}}-Schnittstelle fordert das Betriebssystem auf, das HID-Gerät zu öffnen.

> [!NOTE]
> HID-Geräte werden nicht automatisch geöffnet. Daher muss ein von {{domxref("HID.requestDevice()")}} zurückgegebenes {{domxref("HIDDevice")}} mit dieser Methode geöffnet werden, bevor es zum Datentransfer verfügbar ist.

## Syntax

```js-nolint
open()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald die Verbindung geöffnet ist.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Verbindung bereits geöffnet ist.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Versuch, die Verbindung zu öffnen, aus irgendeinem Grund fehlschlägt.

## Beispiele

Im folgenden Beispiel warten wir darauf, dass die HID-Verbindung geöffnet wird, bevor wir versuchen, Daten zu senden oder zu empfangen.

```js
await device.open();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
