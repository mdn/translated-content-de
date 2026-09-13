---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{APIRef("Shadow DOM")}}

Die **`ShadowRoot`**-Schnittstelle der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ist der Wurzelknoten eines DOM-Teilbaums, der getrennt vom Haupt-DOM-Baum eines Dokuments gerendert wird.

Sie können über die Eigenschaft [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) eine Referenz auf den Shadow Root eines Elements abrufen, sofern er mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt wurde und die Option `mode` auf `open` gesetzt ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Shadow Tree zurück, das den Fokus besitzt.
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
  - : Fügt ein Array konstruierter Stylesheets hinzu, die vom Shadow-DOM-Teilbaum verwendet werden sollen.
    Diese können mit anderen DOM-Teilbäumen, die denselben übergeordneten [`Document`](/de/docs/Web/API/Document)-Knoten verwenden, sowie mit dem Dokument selbst geteilt werden.
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Shadow Root klonbar ist.
- [`ShadowRoot.customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry) {{ReadOnlyInline}}
  - : Gibt das diesem Shadow Root zugeordnete [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück oder `null`, wenn keines festgelegt wurde.
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Shadow Root den Fokus delegiert, wenn ein nicht fokussierbarer Knoten ausgewählt wird.
- [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das sich derzeit für diesen Shadow Tree im Vollbildmodus befindet.
- [`ShadowRoot.host`](/de/docs/Web/API/ShadowRoot/host) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
  - : Legt eine Referenz auf den DOM-Baum innerhalb des `ShadowRoot` fest oder gibt sie zurück.
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) {{ReadOnlyInline}}
  - : Der Modus des `ShadowRoot`, entweder `open` oder `closed`.
    Dies definiert, ob die internen Funktionen des Shadow Root über JavaScript zugänglich sind oder nicht.
- [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Shadow Tree zurück, das derzeit im Bild-im-Bild-Modus präsentiert wird.
- [`ShadowRoot.pointerLockElement`](/de/docs/Web/API/ShadowRoot/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das als Ziel für Mausereignisse festgelegt ist, während der Zeiger gesperrt ist.
    `null`, wenn die Sperrung aussteht, der Zeiger nicht gesperrt ist oder sich das Ziel in einem anderen Baum befindet.
- `ShadowRoot.referenceTarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : Ein Zeichenfolgenwert, der `null` sein kann und das wirksame Ziel jeder Elementreferenz angibt, die von außerhalb des Host-Elements gegen den Shadow Host erfolgt. Der Wert sollte die ID eines Elements innerhalb des Shadow DOM sein. Wenn er festgelegt ist, bewirken Zielreferenzen auf das Host-Element von außerhalb des Shadow DOM, dass das referenzierte Zielelement zum wirksamen Ziel der Referenz auf das Host-Element wird.
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Shadow Root serialisierbar ist.
    Ein serialisierbarer Shadow Root innerhalb eines Elements wird durch [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) serialisiert, wenn der Parameter [`options.serializableShadowRoots`](/de/docs/Web/API/Element/getHTML#serializableshadowroots) auf `true` gesetzt ist.
    Dies wird beim Erstellen des Shadow Root festgelegt.
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Typ der Slot-Zuweisung enthält, entweder `manual` oder `named`.
- [`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die explizit in einen Shadow Tree eingebunden oder darin eingebettet sind.

## Instanzmethoden

- [`ShadowRoot.getAnimations()`](/de/docs/Web/API/ShadowRoot/getAnimations)
  - : Gibt ein Array aller derzeit wirksamen [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, deren Zielelemente Nachfahren des Shadow Tree sind.
- [`ShadowRoot.getSelection()`](/de/docs/Web/API/ShadowRoot/getSelection) {{Non-standard_Inline}}
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position der Einfügemarke darstellt.
- [`ShadowRoot.elementFromPoint()`](/de/docs/Web/API/ShadowRoot/elementFromPoint) {{Non-standard_Inline}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`ShadowRoot.elementsFromPoint()`](/de/docs/Web/API/ShadowRoot/elementsFromPoint) {{Non-standard_Inline}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Stellt eine XSS-sichere Methode bereit, um eine HTML-Zeichenfolge in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen, das anschließend den vorhandenen Baum im Shadow DOM ersetzt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst eine HTML-Zeichenfolge ohne Bereinigung in ein Dokumentfragment, das anschließend den ursprünglichen Teilbaum des Shadow Root ersetzt. Die HTML-Zeichenfolge kann deklarative Shadow Roots enthalten, die als Template-Elemente geparst würden, wenn das HTML mit [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt worden wäre.

## Ereignisse

Die folgenden Ereignisse stehen `ShadowRoot` über Event Bubbling von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zur Verfügung:

- `HTMLSlotElement`-Ereignis [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)
  - : Ein Ereignis, das ausgelöst wird, wenn sich die in diesem Slot enthaltenen Knoten ändern.

## Beispiele

Die folgenden Ausschnitte stammen aus unserem Beispiel [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks) ([auch live ansehen](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat mit einer Größe und Farbe anzeigt, die in den Attributen des Elements angegeben sind.

Innerhalb der Klassendefinition des Elements `<custom-square>` fügen wir einige Lebenszyklus-Callbacks ein, die eine externe Funktion, `updateStyle()`, aufrufen, welche die Größe und Farbe tatsächlich auf das Element anwendet. Sie sehen, dass wir ihr `this` (das Custom Element selbst) als Parameter übergeben.

```js
class Square extends HTMLElement {
  // …
  connectedCallback() {
    console.log("Custom square element added to page.");
    updateStyle(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom square element attributes changed.");
    updateStyle(this);
  }
  // …
}
```

In der Funktion `updateStyle()` selbst erhalten wir über [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) eine Referenz auf das Shadow DOM.
Von dort aus verwenden wir Standardtechniken zur DOM-Traversierung, um das {{htmlelement("style")}}-Element innerhalb des Shadow DOM zu finden und anschließend das darin enthaltene CSS zu aktualisieren:

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

## Siehe auch

- [Verwenden des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Web Components](/de/docs/Web/API/Web_components)
