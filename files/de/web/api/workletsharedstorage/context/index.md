---
title: "WorkletSharedStorage: context-Eigenschaft"
short-title: context
slug: Web/API/WorkletSharedStorage/context
l10n:
  sourceCommit: 723478b3c31d1d9e2b6c1cb16ccd562f2244f519
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}{{Non-standard_Header}}

Die schreibgeschützte **`context`**-Eigenschaft des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Interfaces enthält kontextbezogene Daten, die über die [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode aus dem zugehörigen Browsing-Kontext in das Shared Storage Worklet übergeben werden.

## Wert

Ein String, der die Daten darstellt. Der Wert entspricht dem aktuellsten Wert, der vor der Navigation zur [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) in die [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode übergeben wurde. Wurde kein Wert vor der Navigation durch `setSharedStorageContext()` gesetzt, gibt `context` `undefined` zurück.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage).

## Spezifikationen

Die `context`-Eigenschaft ist derzeit in keiner Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
