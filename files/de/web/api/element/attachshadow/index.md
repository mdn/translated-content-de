---
title: "Element: attachShadow() Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef('Shadow DOM')}}

Die **`Element.attachShadow()`** Methode fügt einem bestimmten Element einen Shadow-DOM-Baum hinzu und gibt eine Referenz auf dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

## Elemente, an die Sie einen Shadow anhängen können

Beachten Sie, dass Sie nicht an jeden Elementtyp eine Shadow-Root anhängen können.
Es gibt einige, die aus Sicherheitsgründen keinen Shadow-DOM haben können (zum Beispiel {{htmlelement("a")}}).

Folgende Liste zeigt Elemente, an die Sie _einen_ Shadow-Root anhängen können:

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

## Aufruf dieser Methode bei einem Element, das bereits einen Shadow-Host hat

Die Methode kann auf einem Element aufgerufen werden, das bereits eine [deklarative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, vorausgesetzt, der angegebene Modus `mode` entspricht dem vorhandenen Modus.
In diesem Fall wird die bereits vorhandene [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gelöscht und zurückgegeben.
Dies ermöglicht Fälle, in denen beispielsweise serverseitiges Rendering bereits deklarativ eine Shadow-Root erstellt hat und dann clientseitiger Code versucht, die Root erneut anzuhängen.

Andernfalls führt der Aufruf von `attachShadow()` bei einem Element, das bereits eine Shadow-Root hat, zu einer Ausnahme.

## Syntax

```js-nolint
attachShadow(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Felder enthält:

    - `mode`

      - : Ein String, der den _Kapselungsmodus_ für den Shadow-DOM-Baum angibt.
        Dieser kann einer der folgenden sein:

        - `open`

          - : Elemente der Shadow-Root sind mit JavaScript außerhalb der Root zugänglich,
            zum Beispiel mit [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot):

            ```js
            element.attachShadow({ mode: "open" });
            element.shadowRoot; // Returns a ShadowRoot obj
            ```

        - `closed`

          - : Verweigert den Zugriff auf die Knoten einer geschlossenen Shadow-Root
            von JavaScript außerhalb:

            ```js
            element.attachShadow({ mode: "closed" });
            element.shadowRoot; // Returns null
            ```

    - `clonable` {{Optional_Inline}}

      - : Ein Boolean, der angibt, ob die Shadow-Root klonbar ist: Wenn auf `true` gesetzt, wird der Shadow-Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wurde, die Shadow-Root in der Kopie enthalten. Der Standardwert ist `false`.

    - `delegatesFocus` {{Optional_Inline}}

      - : Ein Boolean, der, wenn auf `true` gesetzt, ein Verhalten spezifiziert, das Probleme von benutzerdefinierten Elementen in Bezug auf Fokusierbarkeit mindert.
        Wenn ein nicht fokussierbarer Teil des Shadow-DOMs angeklickt wird, erhält der erste fokussierbare Teil den Fokus, und der Shadow-Host erhält alle verfügbaren `:focus` Stile. Der Standardwert ist `false`.

    - `serializable` {{Optional_Inline}}

      - : Ein Boolean, der, wenn auf `true` gesetzt, anzeigt, dass die Shadow-Root serialisierbar ist.
        Wenn gesetzt, kann die Shadow-Root serialisiert werden, indem die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` aufgerufen werden. Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_inline}}
      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dieser kann sein:
        - `named`
          - : Elemente werden automatisch {{HTMLElement("slot")}} Elementen innerhalb dieser Shadow-Root zugewiesen. Alle Nachkommen des Hosts mit einem `slot` Attribut, das zum `name` Attribut eines `<slot>` innerhalb dieser Shadow-Root passt, werden diesem Slot zugewiesen. Alle obersten Kinder des Hosts ohne `slot` Attribut werden einem `<slot>` ohne `name` Attribut zugewiesen (der "Standard-Slot"), wenn einer vorhanden ist.
        - `manual`
          - : Elemente werden nicht automatisch {{HTMLElement("slot")}} Elementen zugewiesen. Stattdessen müssen sie manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden. Der Standardwert ist `named`.

### Rückgabewert

Gibt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekt zurück.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Dieser Fehler kann auftreten, wenn Sie versuchen, eine Shadow-Root an ein Element anzuhängen:
    - außerhalb des HTML-Namespace oder das keinen Shadow angehängt bekommen kann.
    - bei dem die statische Eigenschaft `disabledFeatures` des Element-Definitionswerts den Wert `"shadow"` erhalten hat.
    - das bereits eine Shadow-Root besitzt, die nicht deklarativ erstellt wurde.
    - das eine [deklarative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, aber der angegebene `mode` nicht mit dem vorhandenen Modus übereinstimmt.

## Beispiele

### Wortzählungs-Komponente

Das folgende Beispiel stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) Demo ([sehen Sie es live auch](https://mdn.github.io/web-components-examples/word-count-web-component/)).
Sie können sehen, dass wir `attachShadow()` in der Mitte des Codes verwenden, um eine Shadow-Root zu erstellen, an die wir dann die Inhalte unseres benutzerdefinierten Elements anhängen.

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

### Deaktivierung des Shadow-DOMs

Wenn das Element eine statische Eigenschaft namens `disabledFeatures` hat, die ein Array enthält, das den String `"shadow"` beinhaltet, dann wird der Aufruf von `attachShadow()` eine Ausnahme werfen.

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
- Deklarativ eine Shadow-Root mit dem [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) Attribut des [`<template>` Elements](/de/docs/Web/HTML/Reference/Elements/template) anhängen
- [Deklarativer Shadow-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
