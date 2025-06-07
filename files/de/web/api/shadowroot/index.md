---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef('Shadow DOM')}}

Die **`ShadowRoot`**-Schnittstelle der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ist der Wurzelknoten eines DOM-Teilbaums, der getrennt vom Haupt-DOM-Baum eines Dokuments gerendert wird.

Sie können eine Referenz auf das Schatten-Root-Element mithilfe der [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft abrufen, vorausgesetzt, es wurde mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und der `mode`-Option auf `open` erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Schattenbaums zurück, das den Fokus hat.
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
  - : Fügt ein Array von konstruierten Stylesheets hinzu, die vom Schatten-DOM-Teilbaum verwendet werden sollen. Diese können mit anderen DOM-Teilbäumen, die denselben übergeordneten [`Document`](/de/docs/Web/API/Document)-Knoten teilen, und dem Dokument selbst geteilt werden.
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Schatten-Root klonbar ist.
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Schatten-Root den Fokus delegiert, wenn ein nicht fokussierbares Element ausgewählt wird.
- [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das sich momentan im Vollbildmodus für diesen Schattenbaum befindet.
- [`ShadowRoot.host`](/de/docs/Web/API/ShadowRoot/host) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
  - : Setzt oder gibt eine Referenz auf den DOM-Baum innerhalb des `ShadowRoot` zurück.
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) {{ReadOnlyInline}}
  - : Der Modus des `ShadowRoot`, entweder `open` oder `closed`. Dies definiert, ob die internen Funktionen des Schatten-Roots von JavaScript aus zugänglich sind oder nicht.
- [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Schattenbaums zurück, das momentan im Bild-in-Bild-Modus angezeigt wird.
- [`ShadowRoot.pointerLockElement`](/de/docs/Web/API/ShadowRoot/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das als Ziel für Mausereignisse festgelegt ist, während der Zeiger gesperrt ist. `null`, wenn die Sperrung aussteht, der Zeiger entsperrt ist oder wenn das Ziel in einem anderen Baum liegt.
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Schatten-Root serialisierbar ist. Ein serialisierbares Schatten-Root innerhalb eines Elements wird von [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) serialisiert, wenn der [`options.serializableShadowRoots`](/de/docs/Web/API/Element/getHTML#serializableshadowroots)-Parameter auf `true` gesetzt ist. Dies wird festgelegt, wenn das Schatten-Root erstellt wird.
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der Slot-Zuweisung enthält, entweder `manual` oder `named`.
- [`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die explizit in einen Schattenbaum verlinkt oder darin eingebettet sind.

## Instanz-Methoden

- [`ShadowRoot.getAnimations()`](/de/docs/Web/API/ShadowRoot/getAnimations)
  - : Gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die derzeit wirksam sind und deren Ziel-Elemente Nachkommen des Schattenbaums sind.
- [`ShadowRoot.getSelection()`](/de/docs/Web/API/ShadowRoot/getSelection) {{Non-standard_Inline}}
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors darstellt.
- [`ShadowRoot.elementFromPoint()`](/de/docs/Web/API/ShadowRoot/elementFromPoint) {{Non-standard_Inline}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`ShadowRoot.elementsFromPoint()`](/de/docs/Web/API/ShadowRoot/elementsFromPoint) {{Non-standard_Inline}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst einen HTML-String in ein Dokumentfragment ohne Säuberung, das dann den ursprünglichen Teilbaum des Schatten-Roots ersetzt. Der HTML-String kann deklarative Schattenwurzeln enthalten, die als Template-Elemente geparst würden, wenn das HTML mithilfe von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) festgelegt wurde.

## Events

Die folgenden Ereignisse stehen `ShadowRoot` über Ereignis-Bubbling von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zur Verfügung:

- `HTMLSlotElement`-Ereignis [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)
  - : Ein Ereignis, das ausgelöst wird, wenn sich die im Slot enthaltenen Knoten ändern.

## Beispiele

Die folgenden Schnipsel stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat in der Größe und Farbe anzeigt, die in den Attributen des Elements angegeben sind.

Innerhalb der `<custom-square>`-Elementklasse beinhalten wir einige Lebenszyklus-Callbacks, die einen Aufruf an eine externe Funktion, `updateStyle()`, vornehmen, die tatsächlich die Größe und Farbe auf das Element anwendet. Sie werden sehen, dass wir es `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

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

In der `updateStyle()`-Funktion selbst erhalten wir eine Referenz zum Schatten-DOM mittels [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot).
Von hier aus verwenden wir Standard-DOM-Durchquerungstechniken, um das {{htmlelement("style")}}-Element im Schatten-DOM zu finden und dann die darin enthaltene CSS zu aktualisieren:

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
