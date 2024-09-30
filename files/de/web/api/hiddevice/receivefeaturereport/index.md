---
title: "HIDDevice: receiveFeatureReport()-Methode"
short-title: receiveFeatureReport()
slug: Web/API/HIDDevice/receiveFeatureReport
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`receiveFeatureReport()`**-Methode der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle empfängt einen Feature-Bericht vom HID-Gerät. Feature-Berichte sind eine Möglichkeit für HID-Geräte und Anwendungen, nicht standardisierte HID-Daten auszutauschen.

Die `reportId` für jedes der von diesem Gerät unterstützten Berichtsformate kann aus [`HIDDevice.collections`](/de/docs/Web/API/HIDDevice/collections) abgerufen werden.

## Syntax

```js-nolint
receiveFeatureReport(reportId)
```

### Parameter

- `reportId`
  - : Eine 8-Bit-Berichts-ID. Wenn das HID-Gerät keine Berichts-IDs verwendet, senden Sie `0`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("DataView")}}-Objekt aufgelöst wird, das den Feature-Bericht enthält.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Empfang des Berichts aus irgendeinem Grund fehlschlägt.

## Beispiele

Im folgenden Beispiel wird ein Bericht von einem Gerät mit einer `reportId` von `1` empfangen.

```js
const dataView = await device.receiveFeatureReport(1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
