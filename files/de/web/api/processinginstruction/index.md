---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
l10n:
  sourceCommit: 06a96ca44a86fef907996bb01ecf72cc0f1a36d0
---

{{APIRef("DOM")}}

Die **`ProcessingInstruction`**-Schnittstelle repräsentiert eine [Verarbeitungsanweisung](https://www.w3.org/TR/xml/#sec-pi) – einen [`Node`](/de/docs/Web/API/Node), der eine Anweisung für eine bestimmte Anwendung enthält. Anwendungen, die die Anweisung nicht erkennen, können sie ignorieren.

{{InheritanceDiagram}}

## Konstruktor

- [`ProcessingInstruction.ProcessingInstruction()`](/de/docs/Web/API/ProcessingInstruction/ProcessingInstruction)
  - : Erstellt eine neue Instanz eines ProcessingInstruction-Objekts.

    Entwickler können den Konstruktor `ProcessingInstruction()` nicht direkt verwenden, um eine neue `ProcessingInstruction`-Instanz zu erstellen; dies führt zu einem „illegal constructor“-Fehler. Verwenden Sie stattdessen die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction).

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihren übergeordneten Schnittstellen [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.sheet`](/de/docs/Web/API/ProcessingInstruction/sheet) {{ReadOnlyInline}}
  - : Gibt das zugehörige [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, falls eines vorhanden ist; andernfalls `null`.

- [`ProcessingInstruction.target`](/de/docs/Web/API/ProcessingInstruction/target) {{ReadOnlyInline}}
  - : Ein Name, der die Anwendung bezeichnet, an die sich die Anweisung richtet.

## Instanzmethoden

_Diese Schnittstelle erbt außerdem Methoden von ihren übergeordneten Schnittstellen [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute) {{Experimental_Inline}}
  - : Ruft den Wert des benannten Attributs des aktuellen Knotens ab und gibt ihn als Zeichenfolge zurück.
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames) {{Experimental_Inline}}
  - : Gibt ein Array mit den Attributnamen des aktuellen Knotens zurück.
- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute) {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut besitzt.
- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes) {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein oder mehrere HTML-Attribute besitzt.
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute) {{Experimental_Inline}}
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute) {{Experimental_Inline}}
  - : Setzt das benannte Attribut des aktuellen Knotens auf einen neuen Wert.
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute) {{Experimental_Inline}}
  - : Schaltet ein boolesches Attribut am angegebenen Element um: Ist es vorhanden, wird es entfernt; andernfalls wird es hinzugefügt.

Diese Methoden erleichtern den Zugriff auf Attribute in der Zeichenfolge [`data`](/de/docs/Web/API/CharacterData/data).

## Beschreibung

Verarbeitungsanweisungen geben, wie der Name schon sagt, an, wie ein Dokument verarbeitet werden soll. Sie können Stylesheets für XML-Dokumente, Platzhalter für HTML-Dokumente oder andere Verarbeitungsanweisungen enthalten.

Verarbeitungsanweisungen sind [`Nodes`](/de/docs/Web/API/Node) und keine [`Elements`](/de/docs/Web/API/Element). Sie haben keine Kindknoten und bewirken keine Verschachtelung (wie unser [Patching-Beispiel](#usage_with_template_for_patching) zeigt). Daher verändern sie die Struktur des [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model) nicht.

Ursprünglich wurden `ProcessingInstruction`-Knoten nur in XML-Dokumenten unterstützt, nicht in HTML-Dokumenten. In Browsern ohne entsprechende Unterstützung werden Verarbeitungsanweisungen als Kommentare interpretiert und im DOM-Baum als [`Comment`](/de/docs/Web/API/Comment)-Objekte dargestellt.

Wenn Verarbeitungsanweisungen direkt in Dokumente geschrieben werden, statt mit [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) erstellt zu werden, beginnen und enden sie mit den Begrenzungszeichen `<?` und `?>` und enthalten ein `target` sowie optional `data`-Attribute. Zum Beispiel:

```xml
<?my-target name="my-name"?>
```

In HTML können Verarbeitungsanweisungen mit oder ohne abschließendes `?` angegeben werden. Fehlt es, ergänzt der Browser es beim Parsen des DOM. Sowohl `<?my-target?>` als auch `<?my-target>` sind daher gültig. XML ist strenger und erfordert das abschließende `?`.

Aus Gründen der Abwärtskompatibilität gelten im HTML-Parser außerdem [weitere Einschränkungen für den `target`-Namen](https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state). Er muss `[A-Za-z_][-_A-Za-z0-9]*` entsprechen; andernfalls wird die Anweisung als Kommentar verarbeitet.

Obwohl die Syntax identisch mit der von Verarbeitungsanweisungen ist, gilt die [XML-Deklaration](/de/docs/Web/XML/Guides/XML_introduction#xml_declaration) (`<?xml version="1.0"?>`) nicht als Verarbeitungsanweisung und wird nicht zum DOM hinzugefügt.

Benutzerdefinierte Verarbeitungsanweisungen dürfen nicht mit `"xml"` beginnen, da die XML-Spezifikation `xml`-präfigierte target-Namen von Verarbeitungsanweisungen für bestimmte standardisierte Zwecke reserviert (zum Beispiel `<?xml-stylesheet ?>`).

Aus Gründen der Abwärtskompatibilität wird eine Verarbeitungsanweisung in einem HTML-Dokument als Kommentar geparst, wenn ihr target `xml` oder `xml-stylesheet` ist. Das gilt unabhängig davon, ob sie im ursprünglichen HTML enthalten ist oder mit einer Methode wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt wird.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt eine Verarbeitungsanweisung mit dem `target` `display` und den `data` `table-view`.

```xml
<?display table-view?>
```

### Beispiel für einen reservierten XML-target-Namen

```xml
<?xml-stylesheet href="styles.css"?>
```

Dieses Beispiel zeigt eine Verarbeitungsanweisung mit dem target `xml-stylesheet` und den `data` `href="styles.css"`.

### Verwendung beim Patching mit `<template for>`

Dieses Beispiel verwendet die Verarbeitungsanweisungen `<?start>` und `<?end>` als Platzhalter und fügt deren Inhalt später mithilfe von `<template for>` ein. Bei beiden fehlt das optionale abschließende `?`.

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

Dieses Beispiel zeigt auch, dass Verarbeitungsanweisungen keine Kindknoten haben und keine Verschachtelung bewirken. Obwohl die Verarbeitungsanweisungen `<?start>` und `<?end>` im Zusammenhang mit `<template for>` miteinander verknüpft sind, besteht im DOM keine entsprechende Verknüpfung. Der dazwischenliegende Inhalt `Loading...` wird dadurch nicht zu einem Kindknoten (was sich an der fehlenden Einrückung erkennen lässt).

### Methoden statt des Attributs `data` verwenden

Dieses Beispiel erstellt eine Verarbeitungsanweisung mit der Methode `createProcessingInstruction()`. Anschließend protokolliert es zunächst die Daten der Verarbeitungsanweisung (abgerufen über ihre Eigenschaft [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)) und danach ihre beiden Attribute einzeln (abgerufen über ihre Methode [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute)).

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
