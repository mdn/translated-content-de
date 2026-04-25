---
title: "Element: attachShadow() Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: 26c6aca187b3718498886f9fba6c1cc4f4833b5d
---

{{APIRef("Shadow DOM")}}

Die Methode **`Element.attachShadow()`** fügt einem angegebenen Element einen Shadow-DOM-Baum hinzu und gibt eine Referenz zu seinem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

## Elemente, an die Sie einen Shadow anhängen können

Beachten Sie, dass Sie nicht an jeden Elementtyp ein Shadow-Root anhängen können. Es gibt einige, die aus Sicherheitsgründen keinen Shadow-DOM haben dürfen (zum Beispiel {{htmlelement("a")}}).

Die folgende Liste zeigt Elemente, an die Sie _einen_ Shadow-Root anhängen können:

- Jedes autonome benutzerdefinierte Element mit einem [gültigen Namen](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
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

## Aufrufen dieser Methode auf einem Element, das bereits ein Shadow-Host ist

Die Methode kann auf einem Element aufgerufen werden, das bereits ein [declarative shadow root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, vorausgesetzt, dass der angegebene Modus `mode` dem vorhandenen Modus entspricht. In diesem Fall wird das bereits vorhandene [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gelöscht und zurückgegeben. Dies ist nützlich, wenn beispielsweise serverseitiges Rendering bereits ein Shadow-Root deklariert erstellt hat und dann clientseitiger Code versucht, den Root erneut anzuhängen.

Andernfalls führt ein Aufruf von `attachShadow()` auf einem Element, das bereits ein Shadow-Root hat, zu einer Ausnahme.

## Syntax

```js-nolint
attachShadow(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die folgenden Felder enthält:
    - `mode`
      - : Ein String, der den _Kapselungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann einer der folgenden sein:
        - `open`
          - : Elemente des Shadow-Root sind von JavaScript außerhalb des Root zugänglich, beispielsweise mit [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot):

            ```js
            element.attachShadow({ mode: "open" });
            element.shadowRoot; // Returns a ShadowRoot obj
            ```

        - `closed`
          - : Verweigert den Zugriff auf die Knoten eines geschlossenen Shadow-Root von JavaScript außerhalb davon:

            ```js
            element.attachShadow({ mode: "closed" });
            element.shadowRoot; // Returns null
            ```

    - `clonable` {{Optional_Inline}}
      - : Ein Boolean, der angibt, ob das Shadow-Root klonbar ist: Wenn auf `true` gesetzt, wird der Shadow-Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wurde, das Shadow-Root in der Kopie enthalten. Der Standardwert ist `false`.

    - `customElementRegistry` {{Optional_Inline}}
      - : Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), der als [scoped custom element registry](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) des angehängten Shadow-Root verwendet wird. Wenn `null` oder `undefined`, verwendet das Shadow-Root das globale Registry, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) referenziert wird.

    - `delegatesFocus` {{Optional_Inline}}
      - : Ein Boolean, der, wenn er auf `true` gesetzt ist, ein Verhalten spezifiziert, das Probleme mit der Fokusfähigkeit benutzerdefinierter Elemente mindert. Wenn ein nicht fokussierbarer Teil des Shadow-DOM angeklickt wird, erhält der erste fokussierbare Teil den Fokus und der Shadow-Host erhält alle verfügbaren `:focus`-Stile. Der Standardwert ist `false`.

    - `referenceTarget` {{Optional_Inline}} {{Experimental_Inline}}
      - : Ein String-Wert, der das effektive Ziel eines jeden Element-Referenzes angibt, die gegen den Shadow-Host von außerhalb des Host-Elements gemacht wurde. Der Wert sollte die ID eines Elements innerhalb des Shadow-DOM sein. Wenn gesetzt, führt das Referenzieren des Host-Elements von außerhalb des Shadow-DOM dazu, dass das referenzierte Ziel-Element zum effektiven Ziel der Referenz zum Host-Element wird.

    - `serializable` {{Optional_Inline}}
      - : Ein Boolean, der, wenn auf `true` gesetzt, angibt, dass das Shadow-Root serialisierbar ist. Falls gesetzt, kann das Shadow-Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden. Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_Inline}}
      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann einer der folgenden sein:
        - `named`
          - : Elemente werden automatisch {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow-Root zugewiesen. Nachkommen des Hosts mit einem `slot`-Attribut, das mit dem `name`-Attribut eines `<slot>` innerhalb dieses Shadow-Root übereinstimmt, werden diesem Slot zugewiesen. Top-Level-Kinder des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (der „Standard-Slot“) zugewiesen, wenn einer vorhanden ist.
        - `manual`
          - : Elemente werden nicht automatisch {{HTMLElement("slot")}}-Elementen zugewiesen. Stattdessen müssen sie manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden. Der Standardwert ist `named`.

### Rückgabewert

Gibt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Dieser Fehler kann ausgelöst werden, wenn Sie versuchen, ein Shadow-Root an ein Element anzuhängen:
    - außerhalb des HTML-Namespace oder an ein Element, das keinen Shadow angehängt bekommen kann.
    - bei dem die statische Eigenschaft `disabledFeatures` des Elementdefinitions vorliegt und auf `"shadow"` gesetzt ist.
    - das bereits ein Shadow-Root hat, das nicht deklarativ erstellt wurde.
    - das ein [declarative shadow root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, jedoch der angegebene `mode` nicht mit dem vorhandenen Modus übereinstimmt.
    - während ein `customElementRegistry`-Wert übergeben wird, der nicht `null` oder ein lokalumgebener Registry (das mittels `new CustomElementRegistry()` erstellt wurde) ist. Der Fehler würde ausgelöst, wenn Sie das globale Registry übergeben.

## Beispiele

### Wordcount benutzerdefiniertes Element

Das folgende Beispiel stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component)-Demo ([siehe es auch live](https://mdn.github.io/web-components-examples/word-count-web-component/)). Sie können sehen, dass wir `attachShadow()` in der Mitte des Codes verwenden, um ein Shadow-Root zu erstellen, das wir dann an den Inhalt unseres benutzerdefinierten Elements anhängen.

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

### Shadow-DOM deaktivieren

Wenn das Element eine statische Eigenschaft namens `disabledFeatures` hat, die ein Array enthält, das den String `"shadow"` enthält, wird der `attachShadow()`-Aufruf eine Ausnahme auslösen.

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
- Deklarativ ein Shadow-Root anhängen mit dem [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) Attribut des [`<template>` Elements](/de/docs/Web/HTML/Reference/Elements/template)
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
