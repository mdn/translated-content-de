---
title: "Document: xmlEncoding-Eigenschaft"
short-title: xmlEncoding
slug: Web/API/Document/xmlEncoding
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}}{{deprecated_header}}

Gibt die Kodierung wie durch die XML-Deklaration bestimmt zurück. Sollte `null` sein, wenn sie nicht angegeben oder unbekannt ist.

> [!WARNING]
> Verwenden Sie dieses Attribut nicht; es wurde aus der DOM Level 4-Spezifikation entfernt und wird in Firefox 10.0 nicht mehr unterstützt.

Betrachten Sie die folgende XML-Deklaration:

```xml
<?xml version="1.0" encoding="UTF-16"?>
```

Dann sollte das Ergebnis "UTF-16" sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
