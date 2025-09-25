---
title: "Element: attachShadow() Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Shadow DOM")}}

Die **`Element.attachShadow()`** Methode fügt einem angegebenen Element einen Shadow-DOM-Baum hinzu und gibt eine Referenz auf dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

## Elemente, an die Sie einen Shadow anhängen können

Beachten Sie, dass Sie nicht an jeden Elementtyp einen Shadow-Root anhängen können.
Es gibt einige, die aus Sicherheitsgründen keinen Shadow-DOM haben können (zum Beispiel {{htmlelement("a")}}).

Die folgende Liste zeigt Elemente, an die Sie einen Shadow-Root anhängen _können_:

- Jedes autonomer benutzerdefinierter Element mit einem [gültigen Namen](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("blockquote")}}
- {{htmlelement("body")}}
- {{htmlelement("div")}}
- {{htmlelement("footer")}}
- {{htmlelement("Heading_Elements", "h1")}}
- {{htmlelement("Heading_Elements", "h2")}}
- {{htmlelement("Heading_Elements", "h3")}}
- {{htmlelement("Heading_Elements", "h4")}}
- {{htmlelement("Heading_Elements", "h5")}}
- {{htmlelement("Heading_Elements", "h6")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("nav")}}
- {{htmlelement("p")}}
- {{htmlelement("section")}}
- {{htmlelement("span")}}

## Aufrufen dieser Methode bei einem Element, das bereits ein Shadow-Host ist

Die Methode kann auf einem Element aufgerufen werden, das bereits einen [deklarativen Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, vorausgesetzt, der angegebene Modus `mode` stimmt mit dem vorhandenen Modus überein.
In diesem Fall wird der bereits vorhandene [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gelöscht und zurückgegeben.
Dies ermöglicht Fälle, in denen beispielsweise das serverseitige Rendering bereits deklarativ einen Shadow-Root erstellt hat und anschließend der clientseitige Code versucht, den Root erneut anzuhängen.

Andernfalls wird beim Aufruf von `attachShadow()` auf einem Element, das bereits einen Shadow-Root hat, eine Ausnahme ausgelöst.

## Syntax

```js-nolint
attachShadow(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die folgenden Felder enthält:
    - `mode`
      - : Ein String, der den _Kapselungsmodus_ für den Shadow-DOM-Baum angibt.
        Dies kann eines der folgenden sein:
        - `open`
          - : Elemente des Shadow-Roots sind von außerhalb des Roots über JavaScript zugänglich,
            zum Beispiel mit [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot):

            ```js
            element.attachShadow({ mode: "open" });
            element.shadowRoot; // Returns a ShadowRoot obj
            ```

        - `closed`
          - : Verweigert den Zugriff auf die Node(s) eines geschlossenen Shadow-Roots
            von außerhalb über JavaScript:

            ```js
            element.attachShadow({ mode: "closed" });
            element.shadowRoot; // Returns null
            ```

    - `clonable` {{Optional_Inline}}
      - : Ein boolescher Wert, der angibt, ob der Shadow-Root klonbar ist: wenn auf `true` gesetzt, wird der Shadow-Host mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont und der Shadow-Root in die Kopie einbezogen. Der Standardwert ist `false`.

    - `delegatesFocus` {{Optional_Inline}}
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, ein Verhalten angibt, das Probleme um die Fokusierbarkeit von benutzerdefinierten Elementen mindert.
        Wenn ein nicht-fokussierbarer Teil des Shadow-DOMs angeklickt wird, erhält der erste fokussierbare Teil den Fokus, und der Shadow-Host erhält jegliche verfügbare `:focus`-Stilgebung. Der Standardwert ist `false`.

    - `serializable` {{Optional_Inline}}
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, angibt, dass der Shadow-Root serialisierbar ist.
        Wenn gesetzt, kann der Shadow-Root durch Aufruf der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
        Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_inline}}
      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann eines der folgenden sein:
        - `named`
          - : Elemente werden automatisch {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow-Roots zugewiesen. Nachkommen des Hosts mit einem `slot`-Attribut, das mit dem `name`-Attribut eines `<slot>` innerhalb dieses Shadow-Roots übereinstimmt, werden diesem Slot zugewiesen. Jegliche oberste Nachkommen des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut zugewiesen (der "Standardslot"), falls vorhanden.
        - `manual`
          - : Elemente werden nicht automatisch {{HTMLElement("slot")}}-Elementen zugewiesen. Stattdessen müssen sie manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden.
            Der Standardwert ist `named`.

### Rückgabewert

Gibt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Dieser Fehler kann ausgelöst werden, wenn Sie versuchen, einen Shadow-Root an ein Element anzuhängen:
    - außerhalb des HTML-Namespace oder das keinen Shadow besitzen kann.
    - bei dem die statische Eigenschaften-Definition `disabledFeatures` den Wert `"shadow"` erhalten hat.
    - das bereits einen Shadow-Root hat, der nicht deklarativ erstellt wurde.
    - das einen [deklarativen Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, aber der angegebene `mode` nicht mit dem bestehenden Modus übereinstimmt.

## Beispiele

### Word Count Custom Element

Das folgende Beispiel stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) Demo ([siehe es auch live](https://mdn.github.io/web-components-examples/word-count-web-component/)).
Sie können sehen, dass wir `attachShadow()` in der Mitte des Codes verwenden, um einen Shadow-Root zu erstellen, an den wir dann den Inhalt unseres benutzerdefinierten Elements anhängen.

```js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      return text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    const count = `Words: ${countWords(wcParent)}`;

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create text node and add word count to it
    const text = document.createElement("span");
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    this.parentNode.addEventListener("input", () => {
      text.textContent = `Words: ${countWords(wcParent)}`;
    });
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

### Deaktivieren von Shadow-DOM

Wenn das Element eine statische Eigenschaft namens `disabledFeatures` hat, das ein Array enthält, welches den String `"shadow"` beinhaltet, dann wird der `attachShadow()`-Aufruf eine Ausnahme auslösen.

Zum Beispiel:

```js
class MyCustomElement extends HTMLElement {
  // Disable shadow DOM for this element.
  static disabledFeatures = ["shadow"];

  constructor() {
    super();
  }

  connectedCallback() {
    // Create a shadow root.
    // This will throw an exception.
    const shadow = this.attachShadow({ mode: "open" });
  }
}

// Define the new element
customElements.define("my-custom-element", MyCustomElement);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode)
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)
- Deklarativ einen Shadow-Root mit dem [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) Attribut des [`<template>` Elements](/de/docs/Web/HTML/Reference/Elements/template) anhängen
- [Deklarativer Shadow-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
