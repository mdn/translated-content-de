---
title: "HIDDevice: Methode receiveFeatureReport()"
short-title: receiveFeatureReport()
slug: Web/API/HIDDevice/receiveFeatureReport
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`receiveFeatureReport()`** Methode des {{domxref("HIDDevice")}} Schnittstelle empfängt einen Feature-Report vom HID-Gerät. Feature-Reports sind eine Möglichkeit für HID-Geräte und Anwendungen, nicht standardisierte HID-Daten auszutauschen.

Die `reportId` für jedes der von diesem Gerät unterstützten Reportformate kann aus {{domxref("HIDDevice.collections")}} abgerufen werden.

## Syntax

```js-nolint
receiveFeatureReport(reportId)
```

### Parameter

- `reportId`
  - : Eine 8-Bit-Report-ID. Wenn das HID-Gerät keine Report-IDs verwendet, senden Sie `0`.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem {{jsxref("DataView")}} Objekt aufgelöst wird, das den Feature-Report enthält.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Empfangen des Reports aus irgendeinem Grund fehlschlägt.

## Beispiele

Im folgenden Beispiel wird ein Bericht von einem Gerät mit einer `reportId` von `1` empfangen.

```js
const dataView = await device.receiveFeatureReport(1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
