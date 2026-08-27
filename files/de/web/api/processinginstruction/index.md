---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
l10n:
  sourceCommit: 96c0e251ee3d12f373fa1c4b3370a14b3a726db6
---

{{APIRef("DOM")}}

Die **`ProcessingInstruction`**-Schnittstelle repräsentiert eine [Processing Instruction](https://www.w3.org/TR/xml/#sec-pi) — ein [`Node`](/de/docs/Web/API/Node), das eine Anweisung für eine bestimmte Anwendung enthält und von jeder Anwendung ignoriert werden kann, die die Anweisung nicht erkennt.

{{InheritanceDiagram}}

## Konstruktor

- [`ProcessingInstruction.ProcessingInstruction()`](/de/docs/Web/API/ProcessingInstruction/ProcessingInstruction)
  - : Erstellt eine neue Instanz des `ProcessingInstruction`-Objekts.

    Entwickler können den `ProcessingInstruction()`-Konstruktor nicht direkt verwenden, um eine neue Instanz von `ProcessingInstruction` zu erstellen; dies führt zu einem "illegal constructor" Fehler. Stattdessen verwenden Sie die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction).

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren Elter-Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.sheet`](/de/docs/Web/API/ProcessingInstruction/sheet) {{ReadOnlyInline}}
  - : Gibt das zugehörige [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, falls vorhanden, oder `null`, wenn keines vorhanden ist.

- [`ProcessingInstruction.target`](/de/docs/Web/API/ProcessingInstruction/target) {{ReadOnlyInline}}
  - : Ein Name, der die Anwendung identifiziert, an die die Anweisung gerichtet ist.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihren Elter-Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als Zeichenkette zurück.
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Attributnamen vom aktuellen Knoten zurück.
- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut hat oder nicht.
- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein oder mehrere HTML-Attribute aufweist.
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Legt das benannte Attribut des aktuellen Knotens auf einen neuen Wert fest.
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Schaltet ein boolesches Attribut um, indem es entfernt wird, wenn es vorhanden ist, und hinzugefügt wird, wenn es nicht vorhanden ist, auf dem angegebenen Element.

Diese Methoden bieten einen einfacheren Zugriff auf die Zeichenkettenattribute [`data`](/de/docs/Web/API/CharacterData/data).

## Beschreibung

Verarbeitungsanweisungen geben, wie der Name schon sagt, an, wie ein Dokument verarbeitet werden soll. Sie können Stylesheets für XML-Dokumente, Platzhalter für HTML-Dokumente oder andere Verarbeitungsanweisungen enthalten.

Verarbeitungsanweisungen sind [`Nodes`](/de/docs/Web/API/Node) und keine [`Elements`](/de/docs/Web/API/Element). Sie haben keine Kinder und verursachen keine Verschachtelung (wie in unserem [Patching-Beispiel](#usage_with_template_for_patching) gezeigt) und verändern daher nicht die Struktur des [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model).

Ursprünglich wurden `ProcessingInstruction` Knoten nur in XML-Dokumenten unterstützt, nicht in HTML-Dokumenten. In nicht unterstützenden Browsern werden Verarbeitungsanweisungen als Kommentare interpretiert und als [`Comment`](/de/docs/Web/API/Comment)-Objekte im DOM-Baum dargestellt.

Wenn sie direkt in Dokumenten geschrieben werden, anstatt mit [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) erstellt zu werden, beginnen und enden sie mit den Trennzeichen `<?` und `?>`, und enthalten Ziel- und optionale Datenattribute. Zum Beispiel:

```xml
<?my-target name="my-name"?>
```

Wenn sie in HTML geschrieben werden, können Verarbeitungsanweisungen mit oder ohne das abschließende `?` bereitgestellt werden, und der Browser wird es hinzufügen, wenn es beim Parsen des DOM nicht vorhanden ist. Daher sind sowohl `<?my-target?>` als auch `<?my-target>` gültig. XML ist strikter und erfordert das abschließende `?`.

HTML hat auch [mehr Einschränkungen bezüglich des `target`-Namens](https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state) im HTML-Parser für die Rückwärtskompatibilität. Effektiv muss es `[A-Za-z_][-_A-Za-z0-9]*` entsprechen, oder es wird als Kommentar verarbeitet.

Obwohl die Syntax identisch mit der von Verarbeitungsanweisungen ist, wird die [XML-Deklaration](/de/docs/Web/XML/Guides/XML_introduction#xml_declaration) (`<?xml version="1.0"?>`) nicht als Verarbeitungsanweisung betrachtet und nicht dem DOM hinzugefügt.

Vom Benutzer definierte Verarbeitungsanweisungen dürfen nicht mit `"xml"` beginnen, da von der XML-Spezifikation für bestimmte, standardmäßige Verwendungen verarbeitungsanweisungszielnamen mit `xml`-Präfix reserviert sind (zum Beispiel `<?xml-stylesheet ?>`).

Zur Rückwärtskompatibilität, wenn das Ziel `xml` oder `xml-stylesheet` ist, wird die Verarbeitungsanweisung als Kommentar in einem HTML-Dokument geparst. Dies gilt, unabhängig davon, ob es im ursprünglichen HTML enthalten ist oder mit einer Methode wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt wird.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt eine Verarbeitungsanweisung mit einem `target` von `display` und `data` von `table-view`.

```xml
<?display table-view?>
```

### Reserviertes XML-Ziel-Beispiel

```xml
<?xml-stylesheet href="styles.css"?>
```

Dieses Beispiel zeigt eine Verarbeitungsanweisung mit einem Ziel von `xml-stylesheet` und `data` von `href="styles.css"`.

### Verwendung mit `<template for>` Patchen

Dieses Beispiel verwendet die `<?start>` und `<?end>` Verarbeitungsanweisungen als Platzhalter und füllt später die Inhalte mit `<template for>` aus. Beide schließen das optionale abschließende `?` aus.

```html-nolint
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

Dieses Beispiel zeigt ebenfalls das Fehlen von Kindern und Verschachtelung von Verarbeitungsanweisungen. Die `<?start>` und `<?end>` Verarbeitungsanweisungen sind, obwohl sie im Zusammenhang von `<template for>` verknüpft sind, im Zusammenhang des DOM nicht verknüpft und führen nicht dazu, dass der `Loading...`-Inhalt dazwischen ein Kind ist (wie durch das Fehlen von Einrückungen gezeigt).

### Methoden verwenden anstelle des `data` Attributs

Dieses Beispiel erstellt eine Verarbeitungsanweisung mit der Methode `createProcessingInstruction()`. Es protokolliert dann die Daten der Verarbeitungsanweisung (über ihre [`CharacterData.data`](/de/docs/Web/API/CharacterData/data) Eigenschaft zugegriffen) und dann ihre beiden Attribute individuell (über ihre [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute) Methode zugegriffen).

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
