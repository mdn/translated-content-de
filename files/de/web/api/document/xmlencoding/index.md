---
title: "Dokument: xmlEncoding-Eigenschaft"
short-title: xmlEncoding
slug: Web/API/Document/xmlEncoding
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`xmlEncoding`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt die in der XML-Deklaration angegebene Zeichenkodierung zurück. Wenn keine Zeichenkodierung angegeben ist oder sie unbekannt ist, sollte der Rückgabewert `null` sein.

> [!WARNING]
> Verwenden Sie dieses Attribut nicht. Es wurde aus der DOM-Level-4-Spezifikation entfernt und wird seit Firefox 10.0 nicht mehr unterstützt.

Betrachten Sie die folgende XML-Deklaration:

```xml
<?xml version="1.0" encoding="UTF-16"?>
```

Das Ergebnis sollte dann „UTF-16“ sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
