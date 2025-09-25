---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Shadow DOM")}}

Das **`ShadowRoot`**-Interface der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ist der Wurzelknoten eines DOM-Teilbaums, der separat vom Haupt-DOM-Baum eines Dokuments gerendert wird.

Sie können eine Referenz auf das Shadow-Root-Element eines Elements über dessen [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft abrufen, sofern es mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und der `mode`-Option auf `open` erstellt wurde.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Shadow-Trees zurück, das den Fokus hat.
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
  - : Fügt ein Array von konstruierten Stylesheets hinzu, die vom Shadow-DOM-Teilbaum verwendet werden sollen.
    Diese können mit anderen DOM-Teilbäumen geteilt werden, die denselben übergeordneten [`Document`](/de/docs/Web/API/Document)-Knoten teilen, sowie mit dem Dokument selbst.
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Shadow-Root klonbar ist.
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das Shadow-Root den Fokus delegiert, wenn ein nicht fokussierbarer Knoten ausgewählt wird.
- [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das derzeit im Vollbildmodus für diesen Shadow-Tree angezeigt wird.
- [`ShadowRoot.host`](/de/docs/Web/API/ShadowRoot/host) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
  - : Setzt oder gibt eine Referenz auf den DOM-Baum innerhalb des `ShadowRoot` zurück.
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) {{ReadOnlyInline}}
  - : Der Modus des `ShadowRoot`, entweder `open` oder `closed`.
    Dies definiert, ob die internen Funktionen des Shadow-Roots von JavaScript aus zugänglich sind oder nicht.
- [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Shadow-Trees zurück, das derzeit im Picture-in-Picture-Modus präsentiert wird.
- [`ShadowRoot.pointerLockElement`](/de/docs/Web/API/ShadowRoot/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das als Ziel für Mausereignisse festgelegt ist, während der Zeiger gesperrt ist.
    `null`, wenn die Sperrung aussteht, der Zeiger entsperrt ist oder wenn das Ziel sich in einem anderen Baum befindet.
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Shadow-Root serialisierbar ist.
    Ein serialisierbares Shadow-Root innerhalb eines Elements wird von [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) serialisiert, wenn dessen [`options.serializableShadowRoots`](/de/docs/Web/API/Element/getHTML#serializableshadowroots) Parameter auf `true` gesetzt ist.
    Dies wird bei der Erstellung des Shadow-Roots festgelegt.
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der Slot-Zuordnung enthält, entweder `manual` oder `named`.
- [`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die explizit in einen Shadow-Tree eingebunden oder eingebettet sind.

## Instanzmethoden

- [`ShadowRoot.getAnimations()`](/de/docs/Web/API/ShadowRoot/getAnimations)
  - : Gibt ein Array von allen [`Animation`](/de/docs/Web/API/Animation)-Objekten zurück, die derzeit in Kraft sind und deren Zielelemente Nachkommen des Shadow-Trees sind.
- [`ShadowRoot.getSelection()`](/de/docs/Web/API/ShadowRoot/getSelection) {{Non-standard_Inline}}
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors darstellt.
- [`ShadowRoot.elementFromPoint()`](/de/docs/Web/API/ShadowRoot/elementFromPoint) {{Non-standard_Inline}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`ShadowRoot.elementsFromPoint()`](/de/docs/Web/API/ShadowRoot/elementsFromPoint) {{Non-standard_Inline}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
  - : Bietet eine XSS-sichere Methode, um einen HTML-String in einen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen, der dann den bestehenden Baum im Shadow-DOM ersetzt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst einen HTML-String in ein Dokumentfragment, ohne Bereinigung, das dann den ursprünglichen Teilbaum des Shadow-Roots ersetzt. Der HTML-String kann deklarative Shadow-Roots enthalten, die als Template-Elemente geparst werden würden, wenn das HTML mit [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt wurde.

## Ereignisse

Die folgenden Ereignisse sind über das Ereignisbubbling von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) für `ShadowRoot` verfügbar:

- `HTMLSlotElement` [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn sich die im Slot enthaltenen Knoten ändern.

## Beispiele

Die folgenden Codeausschnitte stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat in einer Größe und Farbe anzeigt, die in den Attributen des Elements angegeben sind.

Innerhalb der Klassen-Definition des `<custom-square>`-Elements fügen wir einige Lebenszyklus-Callbacks ein, die einen Aufruf einer externen Funktion, `updateStyle()`, beinhalten, die tatsächlich die Größe und Farbe auf das Element anwendet. Sie sehen, dass wir es `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

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

In der `updateStyle()`-Funktion selbst erhalten wir eine Referenz auf das Shadow-DOM über [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot).
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

## Siehe auch

- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Webkomponenten](/de/docs/Web/API/Web_components)
