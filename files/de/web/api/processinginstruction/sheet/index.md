---
title: "ProcessingInstruction: sheet-Eigenschaft"
short-title: sheet
slug: Web/API/ProcessingInstruction/sheet
l10n:
  sourceCommit: e1250f3487ad2d64e06cca58660ddc95b9a2d65c
---

{{ApiRef("DOM")}}

Die schreibgeschützte Eigenschaft **`sheet`** der Schnittstelle [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) enthält das Stylesheet, das der `ProcessingInstruction` zugeordnet ist.

Die `xml-stylesheet`-Verarbeitungsanweisung wird verwendet, um einer XML-Datei ein Stylesheet zuzuordnen.

## Wert

Das zugeordnete [`Stylesheet`](/de/docs/Web/API/StyleSheet)-Objekt oder `null`, wenn keines vorhanden ist.

## Beispiel

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="rule.css"?>
…
```

Die Eigenschaft `sheet` der Verarbeitungsanweisung gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück, das `rule.css` beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [DOM-API](/de/docs/Web/API/Document_Object_Model)
