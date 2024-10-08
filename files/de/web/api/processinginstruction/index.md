---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}}

Die **`ProcessingInstruction`**-Schnittstelle repräsentiert eine [Verarbeitungsanweisung](https://www.w3.org/TR/xml/#sec-pi), das heißt, ein [`Node`](/de/docs/Web/API/Node), der eine Anweisung einbettet, die sich an eine spezifische Anwendung richtet, aber von allen anderen Anwendungen, die die Anweisung nicht erkennen, ignoriert werden kann.

> **Warning:** `ProcessingInstruction`-Knoten werden nur in XML-Dokumenten unterstützt, nicht in HTML-Dokumenten. In HTML-Dokumenten wird eine Verarbeitungsanweisung als Kommentar betrachtet und als [`Comment`](/de/docs/Web/API/Comment)-Objekt im Baum dargestellt.

Eine Verarbeitungsanweisung kann sich von der [XML-Deklaration](/de/docs/Web/XML/XML_introduction#xml_declaration) unterscheiden.

> [!NOTE]
> Benutzerdefinierte Verarbeitungsanweisungen dürfen nicht mit `"xml"` beginnen, da mit `xml`-präfixierte Verarbeitungsanweisungszielnamen von der XML-Spezifikation für bestimmte, standardisierte Verwendungen reserviert sind (siehe zum Beispiel `<?xml-stylesheet ?>`).

Zum Beispiel:

```html
<?xml version="1.0"?>
```

ist eine Verarbeitungsanweisung, deren `target` `xml` ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren übergeordneten Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.sheet`](/de/docs/Web/API/ProcessingInstruction/sheet) {{ReadOnlyInline}}

  - : Gibt das zugehörige [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, falls vorhanden, oder `null`, wenn keines vorhanden ist.

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
