---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{APIRef("DOM")}}

Die **`ProcessingInstruction`**-Schnittstelle repräsentiert eine [Verarbeitungsanweisung](https://www.w3.org/TR/xml/#sec-pi) — ein [`Node`](/de/docs/Web/API/Node), welches eine Anweisung für eine spezifische Anwendung enthält. Diese kann von Anwendungen, die die Anweisung nicht erkennen, ignoriert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`ProcessingInstruction.ProcessingInstruction()`](/de/docs/Web/API/ProcessingInstruction/ProcessingInstruction)
  - : Erstellt eine neue Instanz eines ProcessingInstruction-Objekts.

    Entwickler können den `ProcessingInstruction()`-Konstruktor nicht direkt nutzen, um eine neue `ProcessingInstruction`-Instanz zu erstellen; dies führt zu einem "illegal constructor"-Fehler. Stattdessen sollte die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) verwendet werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren übergeordneten Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.sheet`](/de/docs/Web/API/ProcessingInstruction/sheet) {{ReadOnlyInline}}
  - : Gibt das zugeordnete [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, falls vorhanden; oder `null`, wenn keines vorhanden ist.

- [`ProcessingInstruction.target`](/de/docs/Web/API/ProcessingInstruction/target) {{ReadOnlyInline}}
  - : Ein Name, der die Anwendung identifiziert, auf die die Anweisung abzielt.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihren übergeordneten Schnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als Zeichenkette zurück.
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Attributnamen des aktuellen Knotens zurück.
- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut besitzt oder nicht.
- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein oder mehrere HTML-Attribute besitzt.
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Setzt das benannte Attribut des aktuellen Knotens auf einen neuen Wert.
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Schaltet ein boolesches Attribut um, indem es entfernt wird, wenn es vorhanden ist, und hinzugefügt wird, wenn es nicht vorhanden ist, auf dem angegebenen Element.

Diese Methoden bieten einen einfacheren Zugriff auf die [`data`](/de/docs/Web/API/CharacterData/data)-Zeichenfolgen-Attribute.

## Beschreibung

Verarbeitungsanweisungen geben an, wie ein Dokument verarbeitet werden soll. Sie können Stylesheets für XML-Dokumente, Platzhalter für HTML-Dokumente oder andere Verarbeitungsanweisungen enthalten.

Verarbeitungsanweisungen sind [`Nodes`](/de/docs/Web/API/Node) und keine [`Elements`](/de/docs/Web/API/Element). Sie haben keine Kinder und verursachen keine Verschachtelung (wie in unserem [Patching-Beispiel](#usage_with_template_for_patching) gezeigt), und ändern daher nicht die Struktur des [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model).

Ursprünglich wurden `ProcessingInstruction`-Knoten nur in XML-Dokumenten unterstützt, nicht jedoch in HTML-Dokumenten. In nicht unterstützenden Browsern werden Verarbeitungsanweisungen als Kommentare interpretiert und im DOM-Baum als [`Comment`](/de/docs/Web/API/Comment)-Objekte dargestellt.

Wenn sie direkt in Dokumenten geschrieben werden, anstatt durch [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) erstellt zu werden, beginnen und enden sie mit `<?` und `?>`-Begrenzern und enthalten `target` und optionale `data`-Attribute. Zum Beispiel:

```xml
<?my-target name="my-name"?>
```

Wenn sie in HTML geschrieben werden, können Verarbeitungsanweisungen mit oder ohne das abschließende `?` bereitgestellt werden, und der Browser fügt es hinzu, wenn es beim Parsen des DOM nicht bereitgestellt wird. Sowohl `<?my-target?>` als auch `<?my-target>` sind daher gültig. XML ist strenger und erfordert das abschließende `?`.

HTML hat auch [weitere Einschränkungen für den `target`-Namen](https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state) im HTML-Parser aus Gründen der Abwärtskompatibilität. Es muss im Wesentlichen `[A-Za-z_][-_A-Za-z0-9]*` entsprechen, oder es wird als Kommentar verarbeitet.

Obwohl die Syntax identisch mit der von Verarbeitungsanweisungen ist, wird die [XML-Deklaration](/de/docs/Web/XML/Guides/XML_introduction#xml_declaration) (`<?xml version="1.0"?>`) nicht als Verarbeitungsanweisung betrachtet und nicht zum DOM hinzugefügt.

Benutzerdefinierte Verarbeitungsanweisungen können nicht mit `"xml"` beginnen, da `xml`-präfixierte Verarbeitungsanweisungs-Target-Namen von der XML-Spezifikation für bestimmte, standardmäßige Verwendungen reserviert sind (zum Beispiel `<?xml-stylesheet ?>`).

Aus Gründen der Abwärtskompatibilität, wenn das Ziel `xml` oder `xml-stylesheet` ist, wird die Verarbeitungsanweisung als Kommentar in einem HTML-Dokument geparst. Dies gilt sowohl dann, wenn es im ursprünglichen HTML enthalten ist, als auch wenn es mit einer Methode wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt wird.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt eine Verarbeitungsanweisung mit einem `target` von `display` und `data` von `table-view`.

```xml
<?display table-view?>
```

### Beispiel für reserviertes XML-Target

```xml
<?xml-stylesheet href="styles.css"?>
```

Dieses Beispiel zeigt eine Verarbeitungsanweisung mit einem Ziel von `xml-stylesheet` und `data` von `href="styles.css"`.

### Verwendung mit `<template for>` Patching

Dieses Beispiel verwendet die `<?start>` und `<?end>` Verarbeitungsanweisungen als Platzhalter und fügt später den Inhalt mit `<template for>` hinzu. Beide schließen das optionale abschließende `?` aus.

<!-- Have prettier ignore this, as indentation is important and discussed next -->
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

Dieses Beispiel zeigt auch, dass Verarbeitungsanweisungen keine Kinder und keine Verschachtelung haben. Die `<?start>` und `<?end>` Verarbeitungsanweisungen, obwohl sie in Bezug auf `<template for>` verbunden sind, sind im Sinne des DOM nicht verbunden und verursachen nicht, dass der dazwischenliegende `Loading...`-Inhalt ein Kind ist (wie das Fehlen der Einrückung zeigt).

### Verwendung von Methoden anstelle des `data`-Attributs

Dieses Beispiel erstellt eine Verarbeitungsanweisung mit der `createProcessingInstruction()`-Methode. Es gibt dann die Daten der Verarbeitungsanweisung aus (zugegriffen über ihre [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)-Eigenschaft) und dann ihre beiden Attribute einzeln (zugegriffen über ihre [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute)-Methode).

```js
const pi = document.createProcessingInstruction(
  "my-target",
  "my-data1='value1' my-data2='value2'",
);

console.log(pi.data);
console.log(pi.getAttribute("my-data1"));
console.log(pi.getAttribute("my-data1"));
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
