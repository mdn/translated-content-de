---
title: "WorkletSharedStorage: context-Eigenschaft"
short-title: context
slug: Web/API/WorkletSharedStorage/context
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}{{Non-standard_Header}}

Die schreibgeschützte **`context`**-Eigenschaft des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Interfaces enthält kontextbezogene Daten, die über die [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode aus dem zugehörigen Browsing-Kontext in den Shared Storage Worklet übergeben wurden.

## Wert

Ein String, der die Daten darstellt. Der Wert entspricht dem zuletzt über die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) vor der Navigation zur [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) übergebenen Wert. Wenn vor der Navigation kein Wert durch `setSharedStorageContext()` gesetzt wurde, gibt `context` `undefined` zurück.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage).

## Spezifikationen

Die `context`-Eigenschaft ist derzeit in keiner Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
