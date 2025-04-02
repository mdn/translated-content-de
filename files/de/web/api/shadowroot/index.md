---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef('Shadow DOM')}}

Das **`ShadowRoot`**-Interface der Shadow DOM API ist der Wurzelknoten eines DOM-Teilbaums, der getrennt vom Haupt-DOM-Baum eines Dokuments gerendert wird.

Sie können eine Referenz auf das Schatten-Wurzelelement eines Elements über dessen [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft abrufen, vorausgesetzt, es wurde mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) mit der `mode`-Option auf `open` erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Schattenbaums zurück, das den Fokus hat.
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
  - : Fügt ein Array von konstruierten Stylesheets hinzu, die vom Schatten-DOM-Teilbaum verwendet werden sollen. Diese können mit anderen DOM-Teilbäumen geteilt werden, die denselben Eltern-[`Document`](/de/docs/Web/API/Document)-Knoten und das Dokument selbst teilen.
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Schattenwurzel klonbar ist.
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Schattenwurzel den Fokus delegiert, wenn ein nicht fokussierbarer Knoten ausgewählt ist.
- [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das aktuell im Vollbildmodus für diesen Schattenbaum ist.
- [`ShadowRoot.host`](/de/docs/Web/API/ShadowRoot/host) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
  - : Setzt oder gibt eine Referenz auf den DOM-Baum innerhalb des `ShadowRoot` zurück.
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) {{ReadOnlyInline}}
  - : Der Modus des `ShadowRoot`, entweder `open` oder `closed`. Dies definiert, ob die internen Features der Schattenwurzel von JavaScript aus zugänglich sind oder nicht.
- [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Schattenbaums zurück, das derzeit im Bild-im-Bild-Modus angezeigt wird.
- [`ShadowRoot.pointerLockElement`](/de/docs/Web/API/ShadowRoot/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das als Ziel für Mausereignisse festgelegt ist, während der Zeiger gesperrt ist. `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder wenn das Ziel in einem anderen Baum liegt.
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Schattenwurzel serialisierbar ist. Eine serialisierbare Schattenwurzel innerhalb eines Elements wird durch [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) serialisiert, wenn dessen [`options.serializableShadowRoots`](/de/docs/Web/API/Element/getHTML#serializableshadowroots)-Parameter auf `true` gesetzt ist. Dies wird festgelegt, wenn die Schattenwurzel erstellt wird.
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Typ der Slot-Zuweisung enthält, entweder `manual` oder `named`.
- [`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die explizit in einen Schattenbaum verlinkt oder eingebettet sind.

## Instanzmethoden

- [`ShadowRoot.getAnimations()`](/de/docs/Web/API/ShadowRoot/getAnimations)
  - : Gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die aktuell wirksam sind und deren Ziel-Elemente Nachkommen des Schattenbaums sind.
- [`ShadowRoot.getSelection()`](/de/docs/Web/API/ShadowRoot/getSelection) {{Non-standard_Inline}}
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den Bereich des vom Benutzer ausgewählten Textes oder die aktuelle Position des Cursors darstellt.
- [`ShadowRoot.elementFromPoint()`](/de/docs/Web/API/ShadowRoot/elementFromPoint) {{Non-standard_Inline}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`ShadowRoot.elementsFromPoint()`](/de/docs/Web/API/ShadowRoot/elementsFromPoint) {{Non-standard_Inline}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst eine HTML-Zeichenkette in ein Dokumentfragment, ohne es zu bereinigen, das dann den ursprünglichen Teilbaum der Schattenwurzel ersetzt. Die HTML-Zeichenkette kann deklarative Schattenwurzeln enthalten, die als Template-Elemente geparst würden, wenn das HTML mit [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) festgelegt wurde.

## Ereignisse

Die folgenden Ereignisse sind für `ShadowRoot` über das Ereignis-Bubbling von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) verfügbar:

- `HTMLSlotElement` [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)-Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn sich die im Slot enthaltenen Knoten ändern.

## Beispiele

Die folgenden Codebeispiele stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([sehen Sie es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat mit einer in den Attributen des Elements angegebenen Größe und Farbe anzeigt.

Innerhalb der Klassendefinition des `<custom-square>`-Elements fügen wir einige Lebenszyklus-Callbacks ein, die einen Aufruf an eine externe Funktion, `updateStyle()`, machen, die tatsächlich die Größe und Farbe auf das Element anwendet. Sie werden sehen, dass wir ihm `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

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

In der `updateStyle()`-Funktion selbst erhalten wir eine Referenz auf das Schatten-DOM mithilfe von [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot).
Von hier aus verwenden wir Standard-DOM-Traversiertechniken, um das {{htmlelement("style")}}-Element im Schatten-DOM zu finden und aktualisieren dann das darin enthaltene CSS:

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
