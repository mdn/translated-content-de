---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
l10n:
  sourceCommit: b449f4c0a3d1a9cf33ac0c49c685cbf000cc829e
---

{{APIRef("DOM")}}

Die **`ProcessingInstruction`**-Schnittstelle repräsentiert eine [Verarbeitungsanweisung](https://www.w3.org/TR/xml/#sec-pi) — einen [`Node`](/de/docs/Web/API/Node), der eine Anweisung einbettet, die auf eine spezifische Anwendung abzielt und von jeder Anwendung ignoriert werden kann, die die Anweisung nicht erkennt.

{{InheritanceDiagram}}

## Konstruktor

- [`ProcessingInstruction.ProcessingInstruction()`](/de/docs/Web/API/ProcessingInstruction/ProcessingInstruction)
  - : Erstellt eine neue Instanz des ProcessingInstruction-Objekts.

    Entwickler können den `ProcessingInstruction()`-Konstruktor nicht direkt verwenden, um eine neue `ProcessingInstruction`-Instanz zu erstellen; dies führt zu einem "illegalen Konstruktor"-Fehler. Stattdessen sollte die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) verwendet werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren Elternschnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.sheet`](/de/docs/Web/API/ProcessingInstruction/sheet) {{ReadOnlyInline}}
  - : Gibt das zugehörige [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, falls vorhanden; oder `null`, wenn keines vorhanden ist.

- [`ProcessingInstruction.target`](/de/docs/Web/API/ProcessingInstruction/target) {{ReadOnlyInline}}
  - : Ein Name, der die Anwendung identifiziert, auf die die Anweisung abzielt.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihren Elternschnittstellen, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node), und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ruft den Wert des namentlich genannten Attributs vom aktuellen Knoten ab und gibt ihn als Zeichenkette zurück.
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array mit Attributnamen vom aktuellen Knoten zurück.
- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das spezifizierte Attribut besitzt oder nicht.
- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein oder mehrere HTML-Attribute besitzt.
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Entfernt das namentlich genannte Attribut vom aktuellen Knoten.
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Setzt das namentlich genannte Attribut des aktuellen Knotens auf einen neuen Wert.
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Schaltet ein boolesches Attribut um, entfernt es, wenn es vorhanden ist, und fügt es hinzu, wenn es nicht vorhanden ist, auf dem angegebenen Element.

Diese Methoden bieten einen einfacheren Zugang zu den {{domxref("CharacterData.data", "data")}}-Zeichenfolgenattributen.

## Beschreibung

Verarbeitungsanweisungen spezifizieren, wie ein Dokument verarbeitet werden soll. Sie können Stylesheets für XML-Dokumente, Platzhalter für HTML-Dokumente oder andere Verarbeitungsanweisungen beinhalten.

Verarbeitungsanweisungen sind [`Nodes`](/de/docs/Web/API/Node) und keine [`Elements`](/de/docs/Web/API/Element). Sie haben keine Kinder und verursachen keine Verschachtelung (wie in unserem [Patching-Beispiel](#usage_with_template_for_patching) demonstriert), und ändern daher nicht die Struktur des [`Document Object Model (DOM)`](/de/docs/Web/API/Document_Object_Model).

Ursprünglich wurden `ProcessingInstruction`-Knoten nur in XML-Dokumenten unterstützt, nicht in HTML-Dokumenten. In nicht unterstützenden Browsern werden Verarbeitungsanweisungen als Kommentare interpretiert und als [`Comment`](/de/docs/Web/API/Comment)-Objekte im DOM-Baum dargestellt.

Wenn sie direkt in Dokumenten geschrieben werden, anstatt durch [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) erstellt zu werden, beginnen und enden sie mit `<?` und `?>`-Abgrenzern und enthalten ein `target` und optionale `data`-Attribute. Zum Beispiel:

```xml
<?my-target name="my-name"?>`.
```

Wenn sie in HTML geschrieben werden, können Verarbeitungsanweisungen mit oder ohne das abschließende `?` bereitgestellt werden, und der Browser fügt es hinzu, wenn es beim Parsen des DOM nicht bereitgestellt wird. Sowohl `<?my-target?>` als auch `<?my-target>` sind daher gültig. XML ist strikter und erfordert das abschließende `?`.

HTML hat auch [mehr Einschränkungen für den `target`-Namen](https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state) im HTML-Parser aus Gründen der Abwärtskompatibilität. Effektiv muss es `[A-Za-z_][-_A-Za-z0-9]*` entsprechen, oder es wird als Kommentar verarbeitet.

Obwohl die Syntax identisch zu der von Verarbeitungsanweisungen ist, wird die [XML-Deklaration](/de/docs/Web/XML/Guides/XML_introduction#xml_declaration) (`<?xml version="1.0"?>`) nicht als Verarbeitungsanweisung betrachtet und wird nicht dem DOM hinzugefügt.

Benutzerdefinierte Verarbeitungsanweisungen können nicht mit `"xml"` beginnen, da `xml`-präfixierte Processing-Instruction-Target-Namen durch die XML-Spezifikation für bestimmte, standardisierte Verwendungen reserviert sind (zum Beispiel `<?xml-stylesheet ?>`).

Aus Gründen der Abwärtskompatibilität wird die Verarbeitungsanweisung als Kommentar in einem HTML-Dokument geparst, wenn das Target `xml` oder `xml-stylesheet` ist. Dies gilt unabhängig davon, ob es im ursprünglichen HTML enthalten oder mit einer Methode wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt wird.

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

### Verwendung mit `<template for>`-Patching

Dieses Beispiel verwendet die Verarbeitungsanweisungen `<?start>` und `<?end>` als Platzhalter und füllt später den Inhalt mit `<template for>` aus. Beide schließen das optionale abschließende `?` aus.

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

Dieses Beispiel zeigt auch das Fehlen von Verarbeitungskindern und Verschachtelung. Die Verarbeitungsanweisungen `<?start>` und `<?end>`, obwohl sie in Bezug auf `<template for>` verknüpft sind, sind nicht in Bezug auf das DOM verknüpft und verursachen nicht, dass der `Loading...`-Inhalt dazwischen ein Kind wird (wie das Fehlen der Einrückung zeigt).

### Verwendung von Methoden im Gegensatz zum `data`-Attribut

Dieses Beispiel erstellt eine Verarbeitungsanweisung mit der Methode `createProcessingInstruction()`. Es protokolliert dann die Daten der Verarbeitungsanweisung (zugänglich über ihre [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)-Eigenschaft) und dann ihre beiden Attribute einzeln (zugänglich über ihre [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute)-Methode).

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
- Das [DOM-API](/de/docs/Web/API/Document_Object_Model)
