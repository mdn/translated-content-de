---
title: "Element: attachShadow()-Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: 205bad36fe1d193dcc0aa4972055d48b0b319328
---

{{APIRef('Shadow DOM')}}

Die **`Element.attachShadow()`**-Methode fügt einem angegebenen Element einen Shadow-DOM-Baum hinzu und gibt eine Referenz zu dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

## Elemente, an die Sie einen Schatten anfügen können

Beachten Sie, dass Sie nicht an jeden Elementtyp einen Schattenwurzel anfügen können. Aus Sicherheitsgründen können einige Elemente keinen Shadow-DOM haben (zum Beispiel {{htmlelement("a")}}).

Die folgende Liste enthält Elemente, an die Sie eine Schattenwurzel _anfügen_ können:

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

## Aufruf dieser Methode bei einem Element, das bereits ein Schattengeber ist

Die Methode kann bei einem Element aufgerufen werden, das bereits über eine [deklarative Schattenwurzel](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) verfügt, vorausgesetzt, der angegebene Modus `mode` stimmt mit dem vorhandenen Modus überein. In diesem Fall wird die bereits vorhandene [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gelöscht und zurückgegeben. Dies ermöglicht Fälle, in denen beispielsweise serverseitiges Rendering bereits deklarativ eine Schattenwurzel erstellt hat und der clientseitige Code versucht, die Wurzel erneut anzufügen.

Andernfalls führt der Aufruf von `attachShadow()` bei einem Element, das bereits eine Schattenwurzel hat, zu einer Ausnahme.

## Syntax

```js-nolint
attachShadow(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Felder enthält:

    - `mode`

      - : Ein String, der den _Kapselungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann eines der folgenden sein:

        - `open`

          - : Elemente der Schattenwurzel sind von JavaScript außerhalb der Wurzel zugänglich,
            zum Beispiel über [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot):

            ```js
            element.attachShadow({ mode: "open" });
            element.shadowRoot; // Returns a ShadowRoot obj
            ```

        - `closed`

          - : Verweigert den Zugriff auf die Knoten einer geschlossenen Schattenwurzel
            von JavaScript außerhalb:

            ```js
            element.attachShadow({ mode: "closed" });
            element.shadowRoot; // Returns null
            ```

    - `clonable` {{Optional_Inline}}

      - : Ein boolescher Wert, der angibt, ob die Schattenwurzel klonbar ist: Bei Einstellung auf `true` wird der Schattengeber, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wird, die Schattenwurzel in der Kopie enthalten. Der Standardwert ist `false`.

    - `delegatesFocus` {{Optional_Inline}}

      - : Ein boolescher Wert, der bei Einstellung auf `true` ein Verhalten festlegt, das Probleme bei benutzerdefinierten Elementen im Zusammenhang mit der Fokussierbarkeit mildert. Wenn ein nicht fokussierbarer Teil des Shadow-DOM angeklickt wird, erhält der erste fokussierbare Teil den Fokus, und der Schattengeber erhält alle verfügbaren `:focus`-Styling. Der Standardwert ist `false`.

    - `serializable` {{Optional_Inline}}

      - : Ein boolescher Wert, der bei Einstellung auf `true` angibt, dass die Schattenwurzel serialisierbar ist. Wenn eingestellt, kann die Schattenwurzel durch Aufruf der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots`, der auf `true` gesetzt ist, serialisiert werden. Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_inline}}

      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann eines der folgenden sein:

        - `named`
          - : Elemente werden automatisch passenden {{HTMLElement("slot")}}-Elementen innerhalb dieser Schattenwurzel zugewiesen. Alle Nachkommen des Gastgebers mit einem `slot`-Attribut, das dem `name`-Attribut eines `<slot>` in dieser Schattenwurzel entspricht, werden diesem Slot zugewiesen. Alle obersten Kinder des Gastgebers ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (dem "Standard-Slot") zugewiesen, wenn ein solcher vorhanden ist.
        - `manual`
          - : Elemente werden nicht automatisch {{HTMLElement("slot")}}-Elementen zugeordnet. Stattdessen müssen sie manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden. Der Standardwert ist `named`.

### Rückgabewert

Gibt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Diese Ausnahme kann auftreten, wenn Sie versuchen, einer Schattenwurzel ein Element anzufügen:

    - außerhalb des HTML-Namespace oder das keinen Schatten haben kann.
    - bei dem die statische Eigenschaft `disabledFeatures` der Elementdefinition auf `"shadow"` gesetzt wurde.
    - das bereits eine Schattenwurzel hat, die nicht deklarativ erstellt wurde.
    - das eine [deklarative Schattenwurzel](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) hat, bei dem der angegebene `mode` nicht mit dem vorhandenen Modus übereinstimmt.

## Beispiele

### Word Count benutzerdefiniertes Element

Das folgende Beispiel stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component)-Demo ([sehen Sie es auch live](https://mdn.github.io/web-components-examples/word-count-web-component/)). Sie können sehen, dass wir `attachShadow()` in der Mitte des Codes verwenden, um eine Schattenwurzel zu erstellen, an die wir dann den Inhalt unseres benutzerdefinierten Elements anfügen.

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

### Shadow DOM deaktivieren

Wenn das Element eine statische Eigenschaft namens `disabledFeatures` hat, die ein Array ist und die Zeichenkette `"shadow"` enthält, wird der `attachShadow()`-Aufruf eine Ausnahme auslösen.

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
- Deklarativ eine Schattenwurzel mit dem [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Attribut des [`<template>`-Elements](/de/docs/Web/HTML/Element/template) hinzufügen
- [Deklarativer Shadow-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
