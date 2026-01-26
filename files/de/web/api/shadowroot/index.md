---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: a9747e75d39c8a1f8fe756278563e0d909dad379
---

{{APIRef("Shadow DOM")}}

Das **`ShadowRoot`**-Interface der [Shadow DOM-API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ist der Stammknoten eines DOM-Teilbaums, der separat vom Haupt-DOM-Baum eines Dokuments gerendert wird.

Sie können eine Referenz zum Shadow-Root eines Elements über seine [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft abrufen, vorausgesetzt, es wurde mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und der `mode`-Option auf `open` gesetzt, erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) im Shadow-Baum zurück, das den Fokus hat.
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
  - : Fügt dem Shadow-DOM-Teilbaum ein Array von konstruierten Stylesheets hinzu.
    Diese können mit anderen DOM-Teilbäumen, die denselben übergeordneten [`Document`](/de/docs/Web/API/Document)-Knoten und das Dokument selbst teilen, gemeinsam genutzt werden.
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob der Shadow-Root klonbar ist.
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob der Shadow-Root den Fokus delegiert, wenn ein nicht fokussierbarer Knoten ausgewählt wird.
- [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das sich derzeit im Vollbildmodus für diesen Shadow-Baum befindet.
- [`ShadowRoot.host`](/de/docs/Web/API/ShadowRoot/host) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
  - : Setzt oder gibt eine Referenz auf den DOM-Baum innerhalb des `ShadowRoot` zurück.
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) {{ReadOnlyInline}}
  - : Der Modus des `ShadowRoot`, entweder `open` oder `closed`.
    Dies definiert, ob die internen Funktionen des Shadow-Roots von JavaScript aus zugänglich sind oder nicht.
- [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) im Shadow-Baum zurück, das derzeit im Bild-im-Bild-Modus angezeigt wird.
- [`ShadowRoot.pointerLockElement`](/de/docs/Web/API/ShadowRoot/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das als Ziel für Mausereignisse gesetzt ist, während der Zeiger gesperrt ist.
    `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder wenn das Ziel in einem anderen Baum liegt.
- `ShadowRoot.referenceTarget` {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Ein Zeichenfolgenwert, der das effektive Ziel eines jeden Elementverweises von außerhalb des Host-Elements auf den Shadow-Host angibt. Der Wert sollte die ID eines Elements innerhalb des Shadow DOM sein. Wenn gesetzt, führen Zielverweise auf das Host-Element von außerhalb des Shadow DOM dazu, dass das referenzierte Ziel-Element das effektive Ziel des Verweises auf das Host-Element wird.
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob der Shadow-Root serialisierbar ist.
    Ein serialisierbarer Shadow-Root in einem Element wird durch [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) serialisiert, wenn dessen [`options.serializableShadowRoots`](/de/docs/Web/API/Element/getHTML#serializableshadowroots)-Parameter auf `true` gesetzt ist.
    Dies wird beim Erstellen des Shadow-Roots festgelegt.
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) {{ReadOnlyInline}}
  - : Gibt einen Zeichenfolgenwert zurück, der den Typ der Slot-Zuweisung enthält, entweder `manual` oder `named`.
- [`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die explizit in einen Shadow-Baum verlinkt oder eingebettet sind.

## Instanz-Methoden

- [`ShadowRoot.getAnimations()`](/de/docs/Web/API/ShadowRoot/getAnimations)
  - : Gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die derzeit in Wirkung sind und deren Ziel-Elemente Nachkommen des Shadow-Baums sind.
- [`ShadowRoot.getSelection()`](/de/docs/Web/API/ShadowRoot/getSelection) {{Non-standard_Inline}}
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors darstellt.
- [`ShadowRoot.elementFromPoint()`](/de/docs/Web/API/ShadowRoot/elementFromPoint) {{Non-standard_Inline}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`ShadowRoot.elementsFromPoint()`](/de/docs/Web/API/ShadowRoot/elementsFromPoint) {{Non-standard_Inline}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) {{experimental_inline}}
  - : Bietet eine XSS-sichere Methode, um eine Zeichenfolge von HTML in einen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen, der dann den bestehenden Baum im Shadow-DOM ersetzt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst eine Zeichenfolge von HTML in einen Dokumenten-Fragment ohne Bereinigung, der dann den ursprünglichen Teilbaum des Shadowroots ersetzt. Die HTML-Zeichenfolge kann deklarative Shadow-Roots enthalten, die als Template-Elemente geparst würden, wenn das HTML mit [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt wurde.

## Ereignisse

Die folgenden Ereignisse sind für `ShadowRoot` über das Ereignis-Bubblen von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) verfügbar:

- `HTMLSlotElement` [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn sich die Knoten in diesem Slot ändern.

## Beispiele

Die folgenden Ausschnitte stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat in einer Größe und Farbe anzeigt, die in den Attributen des Elements angegeben sind.

Innerhalb der Klassendefinition des `<custom-square>`-Elements fügen wir einige Lebenszyklus-Callbacks ein, die einen Aufruf an eine externe Funktion, `updateStyle()`, machen, die tatsächlich die Größe und Farbe auf das Element anwendet. Sie werden sehen, dass wir ihm `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

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

In der `updateStyle()`-Funktion selbst erhalten wir eine Referenz auf das Shadow DOM mit [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot).
Von hier aus verwenden wir standardmäßige DOM-Traversierungstechniken, um das {{htmlelement("style")}}-Element im Shadow DOM zu finden und dann das darin gefundene CSS zu aktualisieren:

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

- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Web-Komponenten](/de/docs/Web/API/Web_components)
