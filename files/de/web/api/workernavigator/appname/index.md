---
title: "WorkerNavigator: appName-Eigenschaft"
short-title: appName
slug: Web/API/WorkerNavigator/appName
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`appName`** des Interfaces [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) gibt in jedem Browser immer `"Netscape"` zurück. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten.

> [!NOTE]
> Verlassen Sie sich nicht darauf, dass diese Eigenschaft den tatsächlichen Browsernamen zurückgibt. Alle Browser geben für diese Eigenschaft `"Netscape"` zurück.

## Wert

Die Zeichenfolge `"Netscape"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerNavigator.appCodeName`](/de/docs/Web/API/WorkerNavigator/appCodeName)
- [`WorkerNavigator.product`](/de/docs/Web/API/WorkerNavigator/product)
