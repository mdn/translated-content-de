---
title: "WorkletSharedStorage: Kontext-Eigenschaft"
short-title: context
slug: Web/API/WorkletSharedStorage/context
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}{{Non-standard_Header}}

Die **`context`**-Schreibgeschützte Eigenschaft des [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Interfaces enthält Kontextdaten, die dem Shared-Storage-Worklet aus dem zugehörigen Browsing-Kontext über die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) übergeben wurden.

## Wert

Ein String, der die Daten repräsentiert. Der Wert entspricht dem neuesten Wert, der vor der Navigation zum [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) in die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) übergeben wurde. Wenn kein Wert von `setSharedStorageContext()` vor der Navigation festgelegt wurde, gibt `context` `undefined` zurück.

## Beispiele

Sehen Sie sich die Hauptseite von [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage) für ein Beispiel an.

## Spezifikationen

Die `context`-Eigenschaft ist derzeit in keiner Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
