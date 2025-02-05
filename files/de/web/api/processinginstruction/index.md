---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{APIRef("DOM")}}

Die **`ProcessingInstruction`**-Schnittstelle repräsentiert eine [Processing Instruction](https://www.w3.org/TR/xml/#sec-pi); also einen [`Node`](/de/docs/Web/API/Node), der eine Anweisung für eine spezifische Anwendung einbettet, aber von allen anderen Anwendungen, die die Anweisung nicht erkennen, ignoriert werden kann.

> **Warning:** `ProcessingInstruction`-Knoten werden nur in XML-Dokumenten unterstützt, nicht in HTML-Dokumenten. In HTML-Dokumenten wird eine Processing Instruction als Kommentar betrachtet und als [`Comment`](/de/docs/Web/API/Comment)-Objekt im DOM-Baum dargestellt.

Eine Processing Instruction kann sich von der [XML-Deklaration](/de/docs/Web/XML/Guides/XML_introduction#xml_declaration) unterscheiden.

> [!NOTE]
> Benutzerdefinierte Processing Instructions dürfen nicht mit `"xml"` beginnen, da Namensziele von Processing Instructions, die mit `xml`-präfixiert sind, durch die XML-Spezifikation für bestimmte Standardverwendungen reserviert sind (siehe z. B. `<?xml-stylesheet ?>`).

Zum Beispiel:

```html
<?xml version="1.0"?>
```

ist eine Processing Instruction, deren `target` `xml` ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren übergeordneten Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.sheet`](/de/docs/Web/API/ProcessingInstruction/sheet) {{ReadOnlyInline}}

  - : Gibt das zugehörige [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, falls vorhanden; andernfalls `null`.

- [`ProcessingInstruction.target`](/de/docs/Web/API/ProcessingInstruction/target) {{ReadOnlyInline}}
  - : Ein Name, der die Anwendung identifiziert, an die die Anweisung gerichtet ist.

## Instanz-Methoden

_Diese Schnittstelle hat keine spezifischen Methoden, erbt jedoch Methoden von ihren übergeordneten Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [document.createProcessingInstruction()](/de/docs/Web/API/Document/createProcessingInstruction)
- Die [DOM-API](/de/docs/Web/API/Document_Object_Model)
