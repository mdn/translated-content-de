---
title: "DOMException: code-Eigenschaft"
short-title: code
slug: Web/API/DOMException/code
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`code`**-schreibgeschützte Eigenschaft des [`DOMException`](/de/docs/Web/API/DOMException)-Interfaces gibt eine der veralteten [Fehlercode-Konstanten](/de/docs/Web/API/DOMException#error_names) oder `0` zurück, wenn keine Übereinstimmung vorliegt.

Dieses Feld wird aus historischen Gründen verwendet. Neue DOM-Ausnahmen nutzen dies nicht mehr: Sie speichern diese Informationen im [`DOMException.name`](/de/docs/Web/API/DOMException/name)-Attribut.

## Wert

Eine der [Fehlercode-Konstanten](/de/docs/Web/API/DOMException#error_names) oder `0`, wenn keine Übereinstimmung vorliegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
