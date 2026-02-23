---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Shadow DOM")}}

Das **`ShadowRoot`**-Interface der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ist der Wurzelknoten eines DOM-Teilbaums, der separat vom Haupt-DOM-Baum eines Dokuments gerendert wird.

Sie können eine Referenz zur Schattenwurzel eines Elements über die [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft abrufen, vorausgesetzt, sie wurde mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) und der `mode`-Option auf `open` erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Schattenbaums zurück, das den Fokus hat.
- [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)
  - : Fügt ein Array von konstruierten Stylesheets hinzu, die vom Schatten-DOM-Teilbaum verwendet werden sollen.
    Diese können mit anderen DOM-Teilbäumen geteilt werden, die denselben übergeordneten [`Document`](/de/docs/Web/API/Document)-Knoten teilen, sowie mit dem Dokument selbst.
- [`ShadowRoot.clonable`](/de/docs/Web/API/ShadowRoot/clonable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Schattenwurzel klonbar ist.
- [`ShadowRoot.customElementRegistry`](/de/docs/Web/API/ShadowRoot/customElementRegistry) {{ReadOnlyInline}}
  - : Gibt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, das mit dieser Schattenwurzel assoziiert ist, oder `null`, wenn keines gesetzt wurde.
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Schattenwurzel den Fokus delegiert, wenn ein nicht fokussierbares Knoten ausgewählt ist.
- [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das sich derzeit im Vollbildmodus für diesen Schattenbaum befindet.
- [`ShadowRoot.host`](/de/docs/Web/API/ShadowRoot/host) {{ReadOnlyInline}}
  - : Gibt eine Referenz zu dem DOM-Element zurück, an das die `ShadowRoot` angebunden ist.
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
  - : Setzt oder gibt eine Referenz zu dem DOM-Baum innerhalb der `ShadowRoot` zurück.
- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) {{ReadOnlyInline}}
  - : Der Modus der `ShadowRoot`, entweder `open` oder `closed`.
    Dies definiert, ob die internen Funktionen der Schattenwurzel von JavaScript aus zugänglich sind oder nicht.
- [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) innerhalb des Schattenbaums zurück, das derzeit im Bild-im-Bild-Modus präsentiert wird.
- [`ShadowRoot.pointerLockElement`](/de/docs/Web/API/ShadowRoot/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das als Ziel für Mausereignisse festgelegt wurde, während der Zeiger gesperrt ist.
    `null` falls die Sperre aussteht, der Zeiger nicht gesperrt ist oder wenn sich das Ziel in einem anderen Baum befindet.
- `ShadowRoot.referenceTarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : Ein nullable Zeichenfolgenwert, der das effektive Ziel eines jeden Elementverweises angibt, der von außerhalb des Host-Elements gegen den Schattenhost gemacht wird. Der Wert sollte die ID eines Elements innerhalb des Schatten-DOMs sein. Wenn festgelegt, führen Zielverweise auf das Host-Element von außerhalb des Schatten-DOMs dazu, dass das referenzierte Zielelement das effektive Ziel des Verweises auf das Host-Element wird.
- [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Schattenwurzel serialisierbar ist.
    Eine serialisierbare Schattenwurzel innerhalb eines Elements wird von [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) serialisiert, wenn deren [`options.serializableShadowRoots`](/de/docs/Web/API/Element/getHTML#serializableshadowroots)-Parameter auf `true` gesetzt ist.
    Dies wird gesetzt, wenn die Schattenwurzel erstellt wird.
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Typ der Slotzuweisung enthält, entweder `manual` oder `named`.
- [`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die explizit in einen Schattenbaum verlinkt oder eingebettet sind.

## Instanzmethoden

- [`ShadowRoot.getAnimations()`](/de/docs/Web/API/ShadowRoot/getAnimations)
  - : Gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die derzeit wirksam sind und deren Zielelemente Nachkommen des Schattenbaums sind.
- [`ShadowRoot.getSelection()`](/de/docs/Web/API/ShadowRoot/getSelection) {{Non-standard_Inline}}
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position der Einfügemarke darstellt.
- [`ShadowRoot.elementFromPoint()`](/de/docs/Web/API/ShadowRoot/elementFromPoint) {{Non-standard_Inline}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`ShadowRoot.elementsFromPoint()`](/de/docs/Web/API/ShadowRoot/elementsFromPoint) {{Non-standard_Inline}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) {{experimental_inline}}
  - : Bietet eine XSS-sichere Methode, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen, das dann den bestehenden Baum im Schatten-DOM ersetzt.
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
  - : Parst einen HTML-String in ein Dokumentfragment, ohne Bereinigung, das dann den ursprünglichen Teilbaum der Schattenwurzel ersetzt. Der HTML-String kann deklarative Schattenwurzeln enthalten, die als Template-Elemente geparst würden, wenn das HTML mit [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt wurde.

## Ereignisse

Die folgenden Ereignisse sind über das Event-Bubbling von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) bei `ShadowRoot` verfügbar:

- `HTMLSlotElement` [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event) Ereignis
  - : Ein Ereignis, das ausgelöst wird, wenn sich die Knoten in diesem Slot ändern.

## Beispiele

Die folgenden Snippets stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat in einer Größe und Farbe anzeigt, die in den Attributen des Elements festgelegt sind.

Innerhalb der Klassendefinition des `<custom-square>`-Elements fügen wir einige Lebenszyklus-Rückrufe hinzu, die einen Aufruf einer externen Funktion `updateStyle()` machen, die tatsächlich die Größe und Farbe auf das Element anwendet. Sie werden sehen, dass wir ihm `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

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

In der Funktion `updateStyle()` selbst erhalten wir eine Referenz zum Schatten-DOM unter Verwendung von [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot).
Von hier aus verwenden wir Standard-DOM-Traversierungstechniken, um das {{htmlelement("style")}}-Element innerhalb des Schatten-DOMs zu finden und dann das darin enthaltene CSS zu aktualisieren:

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
