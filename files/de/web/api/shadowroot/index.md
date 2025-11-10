---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: 061611f4e4244587ee63436a987e51c3215596d3
---

{{APIRef("Shadow DOM")}}

Das **`ShadowRoot`**-Interface der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ist der Wurzelknoten eines DOM-Teilbaums, der separat vom Haupt-DOM-Baum eines Dokuments gerendert wird.

Sie können einen Verweis auf das Shadow-Root eines Elements mit dessen [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft abrufen, vorausgesetzt, es wurde mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und der `mode`-Option auf `open` erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Shadow-Baums zurück, das den Fokus hat.
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
  - : Fügen Sie ein Array von konstruierten Stylesheets hinzu, die vom Shadow-DOM-Teilbaum genutzt werden sollen.
    Diese können mit anderen DOM-Teilbäumen geteilt werden, die denselben übergeordneten [`Document`](/de/docs/Web/API/Document)-Knoten teilen, sowie mit dem Dokument selbst.
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob das Shadow-Root klonbar ist.
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob das Shadow-Root den Fokus delegiert, wenn ein nicht fokussierbarer Knoten ausgewählt wird.
- [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das sich derzeit im Vollbildmodus für diesen Shadow-Baum befindet.
- [`ShadowRoot.host`](/de/docs/Web/API/ShadowRoot/host) {{ReadOnlyInline}}
  - : Gibt einen Verweis auf das DOM-Element zurück, an das das `ShadowRoot` angehängt ist.
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
  - : Setzt oder gibt einen Verweis auf den DOM-Baum innerhalb des `ShadowRoot` zurück.
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) {{ReadOnlyInline}}
  - : Der Modus des `ShadowRoot`, entweder `open` oder `closed`.
    Dies definiert, ob die internen Funktionen des Shadow-Roots von JavaScript aus zugänglich sind oder nicht.
- [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Shadow-Baums zurück, das derzeit im Bild-im-Bild-Modus präsentiert wird.
- [`ShadowRoot.pointerLockElement`](/de/docs/Web/API/ShadowRoot/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das als Ziel für Mausereignisse gesetzt ist, während der Zeiger gesperrt ist.
    `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder das Ziel in einem anderen Baum liegt.
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob das Shadow-Root serialisierbar ist.
    Ein serialisierbares Shadow-Root innerhalb eines Elements wird von [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) serialisiert, wenn dessen [`options.serializableShadowRoots`](/de/docs/Web/API/Element/getHTML#serializableshadowroots)-Parameter auf `true` gesetzt ist.
    Dies wird beim Erstellen des Shadow-Roots festgelegt.
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der Slot-Zuweisung enthält, entweder `manual` oder `named`.
- [`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die explizit in einen oder in einem Shadow-Baum eingebettet sind.

## Instanzmethoden

- [`ShadowRoot.getAnimations()`](/de/docs/Web/API/ShadowRoot/getAnimations)
  - : Gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die derzeit in Kraft sind und deren Zielelemente Nachkommen des Shadow-Baums sind.
- [`ShadowRoot.getSelection()`](/de/docs/Web/API/ShadowRoot/getSelection) {{Non-standard_Inline}}
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors darstellt.
- [`ShadowRoot.elementFromPoint()`](/de/docs/Web/API/ShadowRoot/elementFromPoint) {{Non-standard_Inline}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`ShadowRoot.elementsFromPoint()`](/de/docs/Web/API/ShadowRoot/elementsFromPoint) {{Non-standard_Inline}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) {{experimental_inline}}
  - : Bietet eine XSS-sichere Methode, um einen String aus HTML zu parsen und zu bereinigen und ihn in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) umzuwandeln, welches dann den bestehenden Baum im Shadow-DOM ersetzt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parsiert einen String aus HTML in ein Dokumentfragment, ohne Bereinigung, welches dann den ursprünglichen Teilbaum des Shadow-Roots ersetzt. Der HTML-String kann deklarative Shadow-Roots einschließen, die als Template-Elemente geparst würden, wenn das HTML mit [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt wird.

## Ereignisse

Die folgenden Ereignisse sind `ShadowRoot` über das Ereignis-Bubbling von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) verfügbar:

- `HTMLSlotElement` [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn sich die in diesem Slot enthaltenen Knoten ändern.

## Beispiele

Die folgenden Schnipsel stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([sehen Sie es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), welches ein Element erstellt, das ein Quadrat einer Größe und Farbe anzeigt, die in den Attributen des Elements angegeben sind.

Innerhalb der Klasse des `<custom-square>`-Elements enthalten wir einige Lebenszyklus-Callbacks, die einen Aufruf an eine externe Funktion, `updateStyle()`, machen, die tatsächlich die Größe und Farbe auf das Element anwendet. Sie sehen, dass wir `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

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

In der Funktion `updateStyle()` selbst erhalten wir einen Verweis auf das Shadow-DOM mittels [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot).
Von hier aus verwenden wir Standard-DOM-Traversal-Techniken, um das {{htmlelement("style")}}-Element innerhalb des Shadow-DOM zu finden und dann das darin gefundene CSS zu aktualisieren:

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
