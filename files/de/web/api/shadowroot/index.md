---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef('Shadow DOM')}}

Das **`ShadowRoot`**-Interface der Shadow DOM API ist der Wurzelknoten eines DOM-Teilbaums, der getrennt vom Haupt-DOM-Baum eines Dokuments gerendert wird.

Sie können eine Referenz auf das Shadow-Root-Element eines Elements über dessen {{domxref("Element.shadowRoot")}}-Eigenschaft abrufen, vorausgesetzt, es wurde mit {{domxref("Element.attachShadow()")}} erstellt und die `mode`-Option wurde auf `open` gesetzt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("ShadowRoot.activeElement")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref('Element')}} innerhalb des Shadow-Baums zurück, das den Fokus hat.
- {{domxref("ShadowRoot.adoptedStyleSheets")}}
  - : Fügt ein Array von erstellten Stylesheets hinzu, die vom Shadow-DOM-Teilbaum verwendet werden sollen.
    Diese können mit anderen DOM-Teilbäumen geteilt werden, die denselben übergeordneten {{domxref("Document")}}-Knoten oder das Dokument selbst teilen.
- {{domxref("ShadowRoot.clonable")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Shadow-Root klonbar ist.
- {{domxref("ShadowRoot.delegatesFocus")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Shadow-Root den Fokus delegiert, wenn ein nicht fokussierbares Knoten ausgewählt wird.
- {{DOMxRef("ShadowRoot.fullscreenElement")}} {{ReadOnlyInline}}
  - : Das Element, das derzeit im Vollbildmodus für diesen Shadow-Baum ist.
- {{domxref("ShadowRoot.host")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.
- {{domxref("ShadowRoot.innerHTML")}}
  - : Setzt oder gibt eine Referenz auf den DOM-Baum innerhalb des `ShadowRoot` zurück.
- {{domxref("ShadowRoot.mode")}} {{ReadOnlyInline}}
  - : Der Modus des `ShadowRoot`, entweder `open` oder `closed`.
    Dies definiert, ob die internen Merkmale des Shadow-Root von JavaScript aus zugänglich sind oder nicht.
- {{DOMxRef("ShadowRoot.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : Gibt das {{DOMxRef('Element')}} innerhalb des Shadow-Baums zurück, das derzeit im Bild-in-Bild-Modus dargestellt wird.
- {{DOMxRef("ShadowRoot.pointerLockElement")}} {{ReadOnlyInline}}
  - : Gibt das {{DOMxRef('Element')}} zurück, das als Ziel für Mausereignisse festgelegt ist, während der Zeiger gesperrt ist.
    `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder das Ziel sich in einem anderen Baum befindet.
- {{DOMxRef("ShadowRoot.serializable")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Shadow-Root serialisierbar ist.
    Ein serialisierbares Shadow-Root innerhalb eines Elements wird durch {{DOMxRef('Element.getHTML()')}} oder {{DOMxRef('ShadowRoot.getHTML()')}} serialisiert, wenn dessen [`options.serializableShadowRoots`](/de/docs/Web/API/Element/getHTML#serializableshadowroots)-Parameter auf `true` gesetzt ist.
    Dies wird festgelegt, wenn das Shadow-Root erstellt wird.
- {{DOMxRef("ShadowRoot.slotAssignment")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der Slot-Zuweisung enthält, entweder `manual` oder `named`.
- {{domxref("ShadowRoot.styleSheets")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref('StyleSheetList')}} von {{domxref('CSSStyleSheet')}}-Objekten für Stylesheets zurück, die explizit in einen Shadow-Baum eingebunden oder eingebettet sind.

## Instanz-Methoden

- {{DOMxRef("ShadowRoot.getAnimations()")}}
  - : Gibt ein Array aller derzeit wirksamen {{DOMxRef("Animation")}}-Objekte zurück, deren Ziel-Elemente Nachkommen des Shadow-Baums sind.
- {{domxref("ShadowRoot.getSelection()")}} {{Non-standard_Inline}}
  - : Gibt ein {{domxref('Selection')}}-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position der Einfügemarke darstellt.
- {{domxref("ShadowRoot.elementFromPoint()")}} {{Non-standard_Inline}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- {{domxref("ShadowRoot.elementsFromPoint()")}} {{Non-standard_Inline}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}
  - : Parst einen HTML-String in ein Dokumentfragment, ohne es zu bereinigen, das dann den ursprünglichen Teilbaum des Shadowroots ersetzt. Der HTML-String kann deklarative Shadow-Roots enthalten, die als Template-Elemente geparst werden, wenn das HTML über [`ShadowRoot.innerHTML`](#shadowroot.innerhtml) gesetzt wurde.

## Ereignisse

Die folgenden Ereignisse stehen `ShadowRoot` durch Ereignis-Bubbling von {{domxref("HTMLSlotElement")}} zur Verfügung:

- `HTMLSlotElement` {{domxref("HTMLSlotElement.slotchange_event", "slotchange")}} Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn sich die(n) Knoten in diesem Slot ändern.

## Beispiele

Die folgenden Codebeispiele stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat mit einer Größe und Farbe anzeigt, die in den Attributen des Elements angegeben sind.

Innerhalb der Klassendefinition des `<custom-square>`-Elements fügen wir einige Lebenszyklus-Callbacks ein, die einen Aufruf an eine externe Funktion `updateStyle()` machen, die tatsächlich die Größe und Farbe auf dem Element anwendet. Sie werden sehen, dass wir `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}

attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

In der `updateStyle()`-Funktion selbst erhalten wir eine Referenz auf das Shadow DOM mithilfe von {{domxref("Element.shadowRoot")}}.
Von hier aus verwenden wir Standard-DOM-Traversierungstechniken, um das {{htmlelement("style")}}-Element innerhalb des Shadow DOM zu finden und dann das darin enthaltene CSS zu aktualisieren:

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  const childNodes = shadow.childNodes;
  for (const node of childNodes) {
    if (node.nodeName === "STYLE") {
      node.textContent = `
div {
  width: ${elem.getAttribute("l")}px;
  height: ${elem.getAttribute("l")}px;
  background-color: ${elem.getAttribute("c")};
}
      `;
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
