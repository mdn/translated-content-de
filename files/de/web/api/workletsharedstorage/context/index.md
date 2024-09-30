---
title: "WorkletSharedStorage: context-Eigenschaft"
short-title: context
slug: Web/API/WorkletSharedStorage/context
l10n:
  sourceCommit: 723478b3c31d1d9e2b6c1cb16ccd562f2244f519
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}{{Non-standard_Header}}

Die schreibgeschützte **`context`**-Eigenschaft des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Interfaces enthält kontextuelle Daten, die über die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) aus dem zugehörigen Browsing-Kontext in das Shared Storage Worklet übergeben wurden.

## Wert

Ein String, der die Daten darstellt. Der Wert entspricht dem zuletzt über die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) übergebenen Wert vor der Navigation zum [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig). Wenn vor der Navigation kein Wert durch `setSharedStorageContext()` gesetzt wurde, gibt `context` `undefined` zurück.

## Beispiele

Siehe die Hauptseite [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) für ein Beispiel.

## Spezifikationen

Die `context`-Eigenschaft ist derzeit in keiner Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
