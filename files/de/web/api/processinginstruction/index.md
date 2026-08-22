---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("DOM")}}

Die **`ProcessingInstruction`**-Schnittstelle repräsentiert eine [Verarbeitungsanweisung](https://www.w3.org/TR/xml/#sec-pi) — ein [`Node`](/de/docs/Web/API/Node), das eine Anweisung einbettet, die auf eine bestimmte Anwendung abzielt und von jeder Anwendung ignoriert werden kann, die die Anweisung nicht erkennt.

{{InheritanceDiagram}}

## Konstruktor

- [`ProcessingInstruction.ProcessingInstruction()`](/de/docs/Web/API/ProcessingInstruction/ProcessingInstruction)
  - : Erstellt eine neue Instanz eines ProcessingInstruction-Objekts.

    Entwickler können den `ProcessingInstruction()`-Konstruktor nicht direkt verwenden, um eine neue `ProcessingInstruction`-Instanz zu erstellen. Ein solcher Versuch führt zu einem "illegalen Konstruktor"-Fehler. Stattdessen sollte die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) verwendet werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren übergeordneten Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.sheet`](/de/docs/Web/API/ProcessingInstruction/sheet) {{ReadOnlyInline}}
  - : Gibt das zugehörige [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, falls vorhanden; oder `null`, wenn keines vorhanden ist.

- [`ProcessingInstruction.target`](/de/docs/Web/API/ProcessingInstruction/target) {{ReadOnlyInline}}
  - : Ein Name, der die Anwendung identifiziert, an die die Anweisung gerichtet ist.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihren übergeordneten Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als Zeichenkette zurück.
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Attributnamen vom aktuellen Knoten zurück.
- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut hat oder nicht.
- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element eines oder mehrere HTML-Attribute besitzt.
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Setzt das benannte Attribut des aktuellen Knotens auf einen neuen Wert.
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Schaltet ein boolesches Attribut um, indem es entfernt wird, wenn es vorhanden ist, und hinzugefügt wird, wenn es nicht vorhanden ist, auf dem angegebenen Element.

Diese Methoden bieten einen leichteren Zugriff auf die `data`-Zeichenfolgenattribute.

## Beschreibung

Verarbeitungsanweisungen spezifizieren, wie ein Dokument verarbeitet werden soll. Sie können Stylesheets für XML-Dokumente, Platzhalter für HTML-Dokumente oder andere Verarbeitungsanweisungen enthalten.

Verarbeitungsanweisungen sind [`Nodes`](/de/docs/Web/API/Node) und keine [`Elements`](/de/docs/Web/API/Element). Sie haben keine Kinder und verursachen kein Schachteln (wie in unserem [Patching-Beispiel](#usage_with_template_for_patching) gezeigt), und ändern daher nicht die Struktur des [Document Object Models (DOM)](/de/docs/Web/API/Document_Object_Model).

Ursprünglich wurden `ProcessingInstruction`-Knoten nur in XML-Dokumenten unterstützt, nicht jedoch in HTML-Dokumenten. In nicht unterstützenden Browsern werden Verarbeitungsanweisungen als Kommentare interpretiert und als [`Comment`](/de/docs/Web/API/Comment)-Objekte im DOM-Baum dargestellt.

Wenn sie direkt in das Dokument geschrieben werden, anstatt durch [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) erstellt zu werden, beginnen und enden sie mit den Trennzeichen `<?` und `?>` und enthalten ein `target` und optionale `data`-Attribute. Zum Beispiel:

```xml
<?my-target name="my-name"?>
```

Wenn sie in HTML geschrieben werden, können Verarbeitungsanweisungen mit oder ohne das abschließende `?` bereitgestellt werden, und der Browser fügt es hinzu, falls es beim Parsen des DOM nicht angegeben wird. Daher sind sowohl `<?my-target?>` als auch `<?my-target>` gültig. XML ist strenger und erfordert das abschließende `?`.

HTML hat auch [mehr Einschränkungen für den `target`-Namen](https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state) im HTML-Parser für die Rückwärtskompatibilität. Effektiv muss es mit `[A-Za-z_][-_A-Za-z0-9]*` übereinstimmen oder es wird als Kommentar verarbeitet.

Obwohl die Syntax identisch mit der von Verarbeitungsanweisungen ist, wird die [XML-Deklaration](/de/docs/Web/XML/Guides/XML_introduction#xml_declaration) (`<?xml version="1.0"?>`) nicht als Verarbeitungsanweisung betrachtet und nicht zum DOM hinzugefügt.

Benutzerdefinierte Verarbeitungsanweisungen dürfen nicht mit `"xml"` beginnen, da `xml`-präfixierte Verarbeitungsanweisung-Zielnamen durch die XML-Spezifikation für bestimmte, standardisierte Verwendungen reserviert sind (z.B. `<?xml-stylesheet ?>`).

Aus Gründen der Rückwärtskompatibilität wird die Verarbeitungsanweisung, wenn das Ziel `xml` oder `xml-stylesheet` ist, in einem HTML-Dokument als Kommentar analysiert. Dies gilt sowohl, wenn es im ursprünglichen HTML enthalten ist, als auch, wenn es mit einer Methode wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt wird.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt eine Verarbeitungsanweisung mit einem `target` von `display` und `data` von `table-view`.

```xml
<?display table-view?>
```

### Beispiel für reserviertes XML-Ziel

```xml
<?xml-stylesheet href="styles.css"?>
```

Dieses Beispiel zeigt eine Verarbeitungsanweisung mit einem Ziel von `xml-stylesheet` und einem `data` von `href="styles.css"`.

### Verwendung mit `<template for>` Patching

Dieses Beispiel verwendet die `<?start>` und `<?end>` Verarbeitungsanweisungen als Platzhalter und füllt später die Inhalte mit `<template for>` aus. Beide schließen das optionale abschließende `?` aus.

<!-- Prettier ignorieren, da die Einrückung wichtig ist und hier besprochen wird -->
<!-- prettier-ignore-start -->
```html
<body>
  <div>
    <?start name="placeholder">
    Loading...
    <?end>
  </div>
  ...
  <template for="placeholder">
    Lorem Ipsum...
  </template>
  ...
</body>
```
<!-- prettier-ignore-end -->

Dieses Beispiel demonstriert auch das Fehlen von Verarbeitungsanweisungskindern und Verschachtelung. Die `<?start>` und `<?end>` Verarbeitungsanweisungen, obwohl sie in Bezug auf `<template for>` verbunden sind, sind in Bezug auf das DOM nicht verbunden und führen nicht dazu, dass der dazwischenliegende `Loading...`-Inhalt ein Kind ist (wie durch das Fehlen einer Einrückung gezeigt).

### Verwendung von Methoden anstelle des `data`-Attributs

Dieses Beispiel erstellt eine Verarbeitungsanweisung mit der Methode `createProcessingInstruction()`. Es protokolliert dann die Daten der Verarbeitungsanweisung (über ihre Eigenschaft [`CharacterData.data`](/de/docs/Web/API/CharacterData/data) zugegriffen) und dann ihre beiden Attribute individuell (über die Methode [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute) zugegriffen).

```js
const pi = document.createProcessingInstruction(
  "my-target",
  "my-data1='value1' my-data2='value2'",
);

console.log(pi.data);
console.log(pi.getAttribute("my-data1"));
console.log(pi.getAttribute("my-data2"));
// logs
// my-data1='value1' my-data2='value2'
// value1
// value2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [document.createProcessingInstruction()](/de/docs/Web/API/Document/createProcessingInstruction)
- Die [DOM-API](/de/docs/Web/API/Document_Object_Model)
