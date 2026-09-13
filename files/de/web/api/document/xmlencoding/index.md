---
title: "Dokument: xmlEncoding-Eigenschaft"
short-title: xmlEncoding
slug: Web/API/Document/xmlEncoding
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Gibt die Kodierung zurück, wie sie durch die XML-Deklaration bestimmt wird. Sollte `null` sein, wenn sie nicht angegeben oder unbekannt ist.

> [!WARNING]
> Verwenden Sie dieses Attribut nicht; es wurde aus der DOM-Level-4-Spezifikation entfernt und wird in Firefox 10.0 nicht mehr unterstützt.

Betrachten Sie die folgende XML-Deklaration:

```xml
<?xml version="1.0" encoding="UTF-16"?>
```

Dann sollte das Ergebnis "UTF-16" sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
