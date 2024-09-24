---
title: Verarbeitungsanweisung
slug: Web/API/ProcessingInstruction
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("DOM")}}

Die **`ProcessingInstruction`**-Schnittstelle repräsentiert eine [Verarbeitungsanweisung](https://www.w3.org/TR/xml/#sec-pi); das heißt, einen {{domxref("Node")}}, der eine Anweisung einbettet, die auf eine spezifische Anwendung abzielt, aber von allen anderen Anwendungen ignoriert werden kann, die die Anweisung nicht erkennen.

> **Warning:** `ProcessingInstruction`-Knoten werden nur in XML-Dokumenten unterstützt, nicht in HTML-Dokumenten. Darin wird eine Verarbeitungsanweisung als Kommentar betrachtet und als {{domxref("Comment")}}-Objekt im Baum dargestellt.

Eine Verarbeitungsanweisung kann sich von der [XML-Deklaration](/de/docs/Web/XML/XML_introduction#xml_declaration) unterscheiden.

> [!NOTE]
> Benutzerdefinierte Verarbeitungsanweisungen dürfen nicht mit "`xml`" beginnen, da mit `xml`-präfixierte Zielnamen für Verarbeitungsanweisungen durch die XML-Spezifikation für bestimmte, standardisierte Verwendungen reserviert sind (siehe zum Beispiel `<?xml-stylesheet ?>`).

Zum Beispiel:

```html
<?xml version="1.0"?>
```

ist eine Verarbeitungsanweisung, deren `target` `xml` ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren übergeordneten Schnittstellen, {{domxref("CharacterData")}}, {{domxref("Node")}}, und {{domxref("EventTarget")}}._

- {{domxref("ProcessingInstruction.sheet")}} {{ReadOnlyInline}}

  - : Gibt das zugehörige {{domxref("StyleSheet")}}-Objekt zurück, falls vorhanden; oder `null`, wenn keines vorhanden ist.

- {{domxref("ProcessingInstruction.target")}} {{ReadOnlyInline}}
  - : Ein Name, der die Anwendung identifiziert, auf die die Anweisung abzielt.

## Instanzmethoden

_Diese Schnittstelle hat keine spezifische Methode, erbt aber Methoden von ihren übergeordneten Schnittstellen, {{domxref("CharacterData")}}, {{domxref("Node")}}, und {{domxref("EventTarget")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [document.createProcessingInstruction()](/de/docs/Web/API/Document/createProcessingInstruction)
- Die [DOM-API](/de/docs/Web/API/Document_Object_Model)
