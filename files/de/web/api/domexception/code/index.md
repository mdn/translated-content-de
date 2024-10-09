---
title: "DOMException: code-Eigenschaft"
short-title: code
slug: Web/API/DOMException/code
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}{{deprecated_header}}

Die **`code`**-Eigenschaft des [`DOMException`](/de/docs/Web/API/DOMException)-Interfaces, die nur lesbar ist, gibt einen der veralteten [Fehlercode-Konstanten](/de/docs/Web/API/DOMException#error_names) zurück, oder `0`, wenn keine übereinstimmen.

Dieses Feld wird aus historischen Gründen verwendet. Neue DOM-Ausnahmen verwenden dies nicht mehr: Sie fügen diese Information in das [`DOMException.name`](/de/docs/Web/API/DOMException/name)-Attribut ein.

## Wert

Eine der [Fehlercode-Konstanten](/de/docs/Web/API/DOMException#error_names), oder `0`, wenn keine übereinstimmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
