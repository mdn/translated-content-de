---
title: "DOMException: Eigenschaft code"
short-title: code
slug: Web/API/DOMException/code
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }} {{deprecated_header}}

Die schreibgeschützte **`code`**-Eigenschaft der {{domxref("DOMException")}}-Schnittstelle gibt einen der veralteten [Fehlercode-Konstanten](/de/docs/Web/API/DOMException#error_names) zurück, oder `0`, wenn keine übereinstimmt.

Dieses Feld wird aus historischen Gründen verwendet. Neue DOM-Ausnahmen verwenden dies nicht mehr: Sie fügen diese Informationen in das {{domxref("DOMException.name")}}-Attribut ein.

## Wert

Einer der [Fehlercode-Konstanten](/de/docs/Web/API/DOMException#error_names), oder `0`, wenn keine übereinstimmt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
