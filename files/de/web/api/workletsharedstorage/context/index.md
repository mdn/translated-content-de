---
title: "WorkletSharedStorage: context-Eigenschaft"
short-title: context
slug: Web/API/WorkletSharedStorage/context
l10n:
  sourceCommit: 723478b3c31d1d9e2b6c1cb16ccd562f2244f519
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}{{Non-standard_Header}}

Die **`context`**-Eigenschaft des {{domxref("WorkletSharedStorage")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die kontextbezogene Daten enthält, die über den zugehörigen Browsing-Kontext mithilfe der Methode {{domxref("FencedFrameConfig.setSharedStorageContext()")}} an das Shared-Storage-Worklet übergeben werden.

## Wert

Ein String, der die Daten darstellt. Der Wert entspricht dem zuletzt in die Methode {{domxref("FencedFrameConfig.setSharedStorageContext()")}} vor der Navigation zum {{domxref("FencedFrameConfig")}} übergebenen Wert. Falls vor der Navigation kein Wert von `setSharedStorageContext()` gesetzt wurde, gibt `context` `undefined` zurück.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite von {{domxref("WorkletSharedStorage")}}.

## Spezifikationen

Die `context`-Eigenschaft ist derzeit in keiner Spezifikation definiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
