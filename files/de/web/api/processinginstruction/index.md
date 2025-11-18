---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`ProcessingInstruction`**-Schnittstelle repräsentiert eine [Verarbeitungsanweisung](https://www.w3.org/TR/xml/#sec-pi); das heißt, ein [`Node`](/de/docs/Web/API/Node), der eine Anweisung enthält, die auf eine bestimmte Anwendung abzielt, aber von anderen Anwendungen, die die Anweisung nicht erkennen, ignoriert werden kann.

> [!WARNING] > `ProcessingInstruction`-Knoten werden nur in XML-Dokumenten unterstützt, nicht in HTML-Dokumenten. In diesen wird eine Verarbeitungsanweisung als Kommentar betrachtet und als [`Comment`](/de/docs/Web/API/Comment)-Objekt im Baum dargestellt.

Eine Verarbeitungsanweisung kann sich von der [XML-Deklaration](/de/docs/Web/XML/Guides/XML_introduction#xml_declaration) unterscheiden.

> [!NOTE]
> Benutzerdefinierte Verarbeitungsanweisungen dürfen nicht mit `"xml"` beginnen, da `xml`-präfixierte Verarbeitungsanweisungszielnamen von der XML-Spezifikation für bestimmte, standardisierte Verwendungen reserviert sind (siehe zum Beispiel `<?xml-stylesheet ?>`).

Zum Beispiel:

```html
<?xml version="1.0"?>
```

ist eine Verarbeitungsanweisung, deren `target` `xml` ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren übergeordneten Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.sheet`](/de/docs/Web/API/ProcessingInstruction/sheet) {{ReadOnlyInline}}
  - : Gibt das zugehörige [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, falls vorhanden; oder `null`, wenn keines vorhanden ist.

- [`ProcessingInstruction.target`](/de/docs/Web/API/ProcessingInstruction/target) {{ReadOnlyInline}}
  - : Ein Name, der die Anwendung identifiziert, für die die Anweisung bestimmt ist.

## Instanz-Methoden

_Diese Schnittstelle hat keine spezifische Methode, erbt jedoch Methoden von ihren übergeordneten Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [document.createProcessingInstruction()](/de/docs/Web/API/Document/createProcessingInstruction)
- Die [DOM-API](/de/docs/Web/API/Document_Object_Model)
