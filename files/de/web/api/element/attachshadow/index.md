---
title: "Element: attachShadow() Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef('Shadow DOM')}}

Die **`Element.attachShadow()`** Methode fügt einem angegebenen Element einen Shadow-DOM-Baum hinzu und gibt eine Referenz auf dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

## Elemente, an die Sie einen Schatten anhängen können

Beachten Sie, dass Sie nicht an jeden Elementtyp eine Schattenwurzel anfügen können.
Einige können aus Sicherheitsgründen keinen Shadow DOM haben (zum Beispiel {{htmlelement("a")}}).

Die folgende Liste zeigt Elemente, an die Sie _einen_ Schattenwurzel anhängen können:

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

## Diese Methode auf ein Element aufrufen, das bereits ein Schattenhost ist

Die Methode kann auf einem Element aufgerufen werden, das bereits eine [deklarative Schattenwurzel](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) hat, vorausgesetzt der angegebene Modus `mode` stimmt mit dem vorhandenen Modus überein.
In diesem Fall wird die bereits vorhandene [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) geleert und zurückgegeben.
Dies ermöglicht beispielsweise Fälle, in denen das serverseitige Rendering bereits deklarativ eine Schattenwurzel erstellt hat, und dann versucht der clientseitige Code, die Wurzel erneut anzuhängen.

Andernfalls wird ein Aufruf von `attachShadow()` auf ein Element, das bereits eine Schattenwurzel hat, eine Ausnahme auslösen.

## Syntax

```js-nolint
attachShadow(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Felder enthält:

    - `mode`

      - : Ein String, der den _Kapselungsmodus_ für den Shadow-DOM-Baum angibt.
        Dies kann einer der folgenden sein:

        - `open`

          - : Elemente der Schattenwurzel sind von JavaScript außerhalb der Wurzel zugänglich,
            beispielsweise mit [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot):

            ```js
            element.attachShadow({ mode: "open" });
            element.shadowRoot; // Returns a ShadowRoot obj
            ```

        - `closed`

          - : Verweigert den Zugriff auf die Knoten einer geschlossenen Schattenwurzel
            von JavaScript außerhalb davon:

            ```js
            element.attachShadow({ mode: "closed" });
            element.shadowRoot; // Returns null
            ```

    - `clonable` {{Optional_Inline}}

      - : Ein Boolean, der angibt, ob die Schattenwurzel klonbar ist: wenn `true` gesetzt ist, wird der Schattenhost, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wurde, die Schattenwurzel in der Kopie enthalten. Der Standardwert ist `false`.

    - `delegatesFocus` {{Optional_Inline}}

      - : Ein Boolean, der das Verhalten spezifiziert, das Probleme mit der Fokusfähigkeit von benutzerdefinierten Elementen mildert, wenn er auf `true` gesetzt ist.
        Wenn auf einen nicht fokussierbaren Teil des Shadow DOM geklickt wird, wird der erste fokussierbare Teil fokussiert, und der Schattenhost erhält jegliches verfügbare `:focus` Styling. Der Standardwert ist `false`.

    - `serializable` {{Optional_Inline}}

      - : Ein Boolean, der angibt, dass die Schattenwurzel serialisierbar ist, wenn er auf `true` gesetzt ist.
        Wenn gesetzt, kann die Schattenwurzel durch Aufrufen der [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) Methoden mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
        Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_inline}}

      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann einer der folgenden sein:

        - `named`
          - : Elemente werden automatisch {{HTMLElement("slot")}}-Elementen innerhalb dieser Schattenwurzel zugewiesen. Alle Nachkommen des Hosts mit einem `slot`-Attribut, das mit dem `name`-Attribut eines `<slot>` innerhalb dieser Schattenwurzel übereinstimmt, werden diesem Slot zugewiesen. Alle obersten Kinder des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (dem "Standard-Slot") zugewiesen, falls vorhanden.
        - `manual`
          - : Elemente werden nicht automatisch {{HTMLElement("slot")}}-Elementen zugewiesen. Stattdessen müssen sie manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden.
            Der Standardwert ist `named`.

### Rückgabewert

Gibt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekt zurück.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Diese Ausnahme kann ausgelöst werden, wenn Sie versuchen, einer derartigen Situation eine Schattenwurzel hinzuzufügen:

    - außerhalb des HTML-Namespace oder einem Element, das keinen Schatten haben kann,
    - bei dem der statischen Eigenschaft `disabledFeatures` der Wert `"shadow"` zugewiesen wurde,
    - das bereits eine nicht deklarativ erstellte Schattenwurzel hat,
    - das eine [deklarative Schattenwurzel](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) hat, jedoch der angegebene `mode` nicht mit dem vorhandenen Modus übereinstimmt.

## Beispiele

### Wortzählung benutzerdefiniertes Element

Das folgende Beispiel stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) Demo ([sehen Sie es auch live](https://mdn.github.io/web-components-examples/word-count-web-component/)).
Sie können sehen, dass wir `attachShadow()` in der Mitte des Codes verwenden, um eine Schattenwurzel zu erstellen, an die wir dann den Inhalt unseres benutzerdefinierten Elements anhängen.

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
    setInterval(() => {
      const count = `Words: ${countWords(wcParent)}`;
      text.textContent = count;
    }, 200);
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

### Deaktivieren des Schatten-DOM

Wenn das Element eine statische Eigenschaft namens `disabledFeatures` hat, die ein Array enthält, das den String `"shadow"` enthält, wird der `attachShadow()` Aufruf eine Ausnahme auslösen.

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
- Deklarativ eine Schattenwurzel mit dem [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode) Attribut des [`<template>` elements](/de/docs/Web/HTML/Element/template) anhängen
- [Deklarativer Schatten-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
