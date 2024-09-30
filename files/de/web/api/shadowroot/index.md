---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef('Shadow DOM')}}

Das **`ShadowRoot`**-Interface der Shadow-DOM-API ist der Wurzelknoten eines DOM-Teilbaums, der separat vom Haupt-DOM-Baum eines Dokuments gerendert wird.

Sie können einen Verweis auf das Shadow-Root-Element eines Elements über seine [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft abrufen, vorausgesetzt, es wurde mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und der `mode`-Option `open` erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Shadow-Baums zurück, das den Fokus hat.
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
  - : Fügt ein Array von erstellten Stylesheets hinzu, die vom Shadow-DOM-Teilbaum verwendet werden sollen.
    Diese können mit anderen DOM-Teilbäumen geteilt werden, die denselben übergeordneten [`Document`](/de/docs/Web/API/Document)-Knoten und das Dokument selbst teilen.
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob das Shadow-Root klonbar ist.
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob das Shadow-Root den Fokus delegiert, wenn ein nicht fokussierbares Element ausgewählt wird.
- [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das aktuell im Vollbildmodus für diesen Shadow-Baum ist.
- [`ShadowRoot.host`](/de/docs/Web/API/ShadowRoot/host) {{ReadOnlyInline}}
  - : Gibt einen Verweis auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
  - : Setzt oder gibt einen Verweis auf den DOM-Baum innerhalb des `ShadowRoot` zurück.
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) {{ReadOnlyInline}}
  - : Der Modus des `ShadowRoot`, entweder `open` oder `closed`.
    Dies definiert, ob die internen Funktionen des Shadow-Root aus JavaScript zugänglich sind oder nicht.
- [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Shadow-Baums zurück, das aktuell im Bild-im-Bild-Modus dargestellt wird.
- [`ShadowRoot.pointerLockElement`](/de/docs/Web/API/ShadowRoot/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das als Ziel für Mausevents festgelegt ist, während der Zeiger gesperrt ist.
    `null`, wenn die Sperrung aussteht, der Zeiger entsperrt ist oder das Ziel in einem anderen Baum liegt.
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob das Shadow-Root serialisierbar ist.
    Ein serialisierbares Shadow-Root innerhalb eines Elements wird serialisiert, wenn [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) aufgerufen wird und dessen [`options.serializableShadowRoots`](/de/docs/Web/API/Element/getHTML#serializableshadowroots)-Parameter auf `true` gesetzt ist.
    Dies wird beim Erstellen des Shadow-Root festgelegt.
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der Slot-Zuweisung enthält, entweder `manual` oder `named`.
- [`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die explizit in einem Shadow-Baum verlinkt oder eingebettet sind.

## Instanzmethoden

- [`ShadowRoot.getAnimations()`](/de/docs/Web/API/ShadowRoot/getAnimations)
  - : Gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die derzeit wirksam sind und deren Zielelemente Nachkommen des Shadow-Baums sind.
- [`ShadowRoot.getSelection()`](/de/docs/Web/API/ShadowRoot/getSelection) {{Non-standard_Inline}}
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors darstellt.
- [`ShadowRoot.elementFromPoint()`](/de/docs/Web/API/ShadowRoot/elementFromPoint) {{Non-standard_Inline}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`ShadowRoot.elementsFromPoint()`](/de/docs/Web/API/ShadowRoot/elementsFromPoint) {{Non-standard_Inline}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Analysiert einen HTML-String in ein Dokumentfragment, ohne es zu bereinigen, das dann den Original-Teilbaum des Shadowroots ersetzt. Der HTML-String kann deklarative Shadow-Roots enthalten, die als Template-Elemente analysiert werden würden, wenn der HTML-String mit [`ShadowRoot.innerHTML`](#shadowroot.innerhtml) gesetzt wurde.

## Ereignisse

Die folgenden Ereignisse sind über das Ereignis-Bubbling von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) für `ShadowRoot` verfügbar:

- `HTMLSlotElement` [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn sich die im Slot enthaltenen Knoten ändern.

## Beispiele

Die folgenden Code-Snippets stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat von Größe und Farbe anzeigt, die in den Attributen des Elements angegeben sind.

Innerhalb der Klassendefinition des `<custom-square>`-Elements fügen wir einige Lebenszyklus-Callbacks ein, die einen Aufruf einer externen Funktion, `updateStyle()`, machen, die tatsächlich die Größe und Farbe auf das Element anwendet. Sie werden sehen, dass wir dieser Funktion `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

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

In der `updateStyle()`-Funktion selbst erhalten wir einen Verweis auf das Shadow-DOM mit [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot).
Von hier aus verwenden wir Standard-DOM-Traversierungstechniken, um das {{htmlelement("style")}}-Element innerhalb des Shadow-DOM zu finden und dann das darin gefundene CSS zu aktualisieren:

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
