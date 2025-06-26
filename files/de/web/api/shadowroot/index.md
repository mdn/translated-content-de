---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{APIRef('Shadow DOM')}}

Das **`ShadowRoot`**-Interface der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ist der Wurzelknoten eines DOM-Unterbaums, der getrennt vom Haupt-DOM-Baum eines Dokuments gerendert wird.

Sie können einen Verweis auf das Shadow-Root eines Elements über seine [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft abrufen, vorausgesetzt, es wurde mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt und die `mode`-Option auf `open` gesetzt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Shadow Trees zurück, das den Fokus hat.
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
  - : Fügt ein Array von konstruierten Stylesheets hinzu, die vom Shadow-DOM-Unterbaum verwendet werden sollen.
    Diese können mit anderen DOM-Unterbäumen geteilt werden, die denselben übergeordneten [`Document`](/de/docs/Web/API/Document)-Knoten und das Dokument selbst teilen.
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der anzeigt, ob das Shadow-Root klonbar ist.
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der anzeigt, ob das Shadow-Root den Fokus delegiert, wenn ein nicht fokussierbares Knoten ausgewählt ist.
- [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das sich derzeit im Vollbildmodus für diesen Shadow-Tree befindet.
- [`ShadowRoot.host`](/de/docs/Web/API/ShadowRoot/host) {{ReadOnlyInline}}
  - : Gibt einen Verweis auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
  - : Setzt oder gibt einen Verweis auf den DOM-Tree innerhalb des `ShadowRoot` zurück.
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) {{ReadOnlyInline}}
  - : Der Modus des `ShadowRoot`, entweder `open` oder `closed`.
    Dies definiert, ob die internen Funktionen des Shadow-Root von JavaScript aus zugänglich sind oder nicht.
- [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Shadow Trees zurück, das derzeit im Bild-in-Bild-Modus angezeigt wird.
- [`ShadowRoot.pointerLockElement`](/de/docs/Web/API/ShadowRoot/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das als Ziel für Mausereignisse festgelegt ist, während der Zeiger gesperrt ist.
    `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder wenn das Ziel in einem anderen Baum ist.
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der anzeigt, ob das Shadow-Root serialisierbar ist.
    Ein serialisierbares Shadow-Root innerhalb eines Elements wird durch [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) serialisiert, wenn dessen [`options.serializableShadowRoots`](/de/docs/Web/API/Element/getHTML#serializableshadowroots)-Parameter auf `true` gesetzt ist.
    Dies wird gesetzt, wenn das Shadow-Root erstellt wird.
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der Slot-Zuweisung enthält, entweder `manual` oder `named`.
- [`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurück, für Stylesheets, die explizit in einen Shadow-Tree verlinkt oder eingebettet sind.

## Instanzmethoden

- [`ShadowRoot.getAnimations()`](/de/docs/Web/API/ShadowRoot/getAnimations)
  - : Gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die derzeit aktiv sind und deren Zielelemente Nachkommen des Shadow Trees sind.
- [`ShadowRoot.getSelection()`](/de/docs/Web/API/ShadowRoot/getSelection) {{Non-standard_Inline}}
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors darstellt.
- [`ShadowRoot.elementFromPoint()`](/de/docs/Web/API/ShadowRoot/elementFromPoint) {{Non-standard_Inline}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`ShadowRoot.elementsFromPoint()`](/de/docs/Web/API/ShadowRoot/elementsFromPoint) {{Non-standard_Inline}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Bietet eine XSS-sichere Methode, um eine Zeichenkette von HTML in einen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen, der dann den bestehenden Baum im Shadow-DOM ersetzt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst eine Zeichenkette von HTML in einen Dokumentfragment ohne Bereinigung, der dann den ursprünglichen Unterbaum des Shadow-Roots ersetzt. Die HTML-Zeichenkette kann deklarative Shadow-Roots enthalten, die als Template-Elemente geparst werden würden, wenn das HTML über [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt wurde.

## Ereignisse

Die folgenden Ereignisse sind für `ShadowRoot` über das Event-Bubbling vom [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) verfügbar:

- `HTMLSlotElement` [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn sich die im Slot enthaltenen Knoten ändern.

## Beispiele

Die folgenden Codebeispiele stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat einer Größe und Farbe anzeigt, die in den Attributen des Elements angegeben sind.

Innerhalb der Klassendefinition des `<custom-square>`-Elements beinhalten wir einige Lebenszyklus-Callbacks, die einen Aufruf an eine externe Funktion, `updateStyle()`, machen, die tatsächlich die Größe und Farbe auf das Element anwendet. Sie werden sehen, dass wir es `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

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

In der `updateStyle()`-Funktion selbst erhalten wir einen Verweis auf das Shadow-DOM unter Verwendung von [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot).
Von hier aus verwenden wir standardmäßige DOM-Traversierungstechniken, um das {{htmlelement("style")}}-Element innerhalb des Shadow-DOMs zu finden und dann das CSS darin zu aktualisieren:

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

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Webkomponenten](/de/docs/Web/API/Web_components)
