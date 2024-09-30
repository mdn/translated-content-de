---
title: "ProcessingInstruction: sheet-Eigenschaft"
short-title: sheet
slug: Web/API/ProcessingInstruction/sheet
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("DOM")}}

Die schreibgeschützte **`sheet`**-Eigenschaft der [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Schnittstelle
enthält das Stylesheet, das der `ProcessingInstruction` zugeordnet ist.

Die `xml-stylesheet`-Verarbeitungsanweisung wird verwendet, um ein Stylesheet in einer XML-Datei zuzuordnen.

## Wert

Das zugeordnete [`Stylesheet`](/de/docs/Web/API/Stylesheet)-Objekt oder `null`, wenn keines vorhanden ist.

## Beispiel

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="rule.css"?>
…
```

Die `sheet`-Eigenschaft der Verarbeitungsanweisung gibt das [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, das `rule.css` beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [DOM-API](/de/docs/Web/API/Document_Object_Model)
