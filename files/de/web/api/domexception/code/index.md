---
title: "DOMException: code Eigenschaft"
short-title: code
slug: Web/API/DOMException/code
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }} {{deprecated_header}}

Die schreibgeschützte **`code`**-Eigenschaft der [`DOMException`](/de/docs/Web/API/DOMException)-Schnittstelle gibt einen der alten [Fehlercode-Konstanten](/de/docs/Web/API/DOMException#error_names) zurück, oder `0`, wenn keine übereinstimmen.

Dieses Feld wird aus historischen Gründen verwendet. Neue DOM-Ausnahmen verwenden dies nicht mehr: Sie setzen diese Information in das [`DOMException.name`](/de/docs/Web/API/DOMException/name)-Attribut.

## Wert

Einer der [Fehlercode-Konstanten](/de/docs/Web/API/DOMException#error_names) oder `0`, wenn keine übereinstimmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
