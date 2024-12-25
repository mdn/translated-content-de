---
title: "Element: attachShadow() Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: a4617749021157869da2387da8ebffeb176f6795
---

{{APIRef('Shadow DOM')}}

Die **`Element.attachShadow()`** Methode fügt einem angegebenen Element einen Shadow-DOM-Baum hinzu und gibt eine Referenz auf dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

## Elemente, an die Sie einen Shadow anhängen können

Beachten Sie, dass Sie nicht an jeden Elementtyp ein Shadow-Root anhängen können.
Einige können aus Sicherheitsgründen keinen Shadow-DOM haben (zum Beispiel {{htmlelement("a")}}).

Folgende Liste zeigt die Elemente, an die Sie _einen_ Shadow-Root anhängen können:

- Jedes autonom benutzerdefinierte Element mit einem [gültigen Namen](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
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

## Aufruf dieser Methode bei einem Element, das bereits ein Shadow-Host ist

Die Methode kann auf ein Element angewendet werden, das bereits über einen [deklarativen Shadow Root](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) verfügt, sofern der angegebene `mode` mit dem vorhandenen Modus übereinstimmt.
In diesem Fall wird der bereits vorhandene [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gelöscht und zurückgegeben.
Dies ermöglicht Fälle, bei denen beispielsweise das serverseitige Rendering bereits deklarativ einen Shadow-Root erstellt hat und dann Client-Code versucht, den Root erneut anzuhängen.

Andernfalls wird ein Fehler ausgelöst, wenn `attachShadow()` auf ein Element aufgerufen wird, das bereits ein Shadow-Root hat.

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

          - : Elemente des Shadow-Roots sind von außerhalb des Roots über JavaScript zugänglich,
            zum Beispiel mit [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot):

            ```js
            element.attachShadow({ mode: "open" });
            element.shadowRoot; // Returns a ShadowRoot obj
            ```

        - `closed`

          - : Verweigert den Zugriff auf die Knoten eines geschlossenen Shadow-Roots
            von außerhalb desselben:

            ```js
            element.attachShadow({ mode: "closed" });
            element.shadowRoot; // Returns null
            ```

    - `clonable` {{Optional_Inline}}

      - : Ein Boolean, der angibt, ob der Shadow-Root klonbar ist: Wenn auf `true` gesetzt, wird der Shadow-Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wird, den Shadow-Root in die Kopie einbeziehen. Der Standardwert ist `false`.

    - `delegatesFocus` {{Optional_Inline}}

      - : Ein Boolean, der bei Einstellung auf `true` ein Verhalten angibt, das Probleme mit der Fokussierbarkeit von benutzerdefinierten Elementen mindert.
        Wenn ein nicht fokussierbarer Teil des Shadow-DOM angeklickt wird, erhält der erste fokussierbare Teil den Fokus, und der Shadow-Host erhält alle verfügbaren `:focus`-Styling. Der Standardwert ist `false`.

    - `serializable` {{Optional_Inline}}

      - : Ein Boolean, der bei Einstellung auf `true` angibt, dass der Shadow-Root serialisierbar ist.
        Wenn eingestellt, kann der Shadow-Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
        Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_inline}}

      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann einer der folgenden sein:

        - `named`
          - : Elemente werden automatisch den {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow-Roots zugewiesen. Alle Nachkommen des Hosts mit einem `slot`-Attribut, das mit dem `name`-Attribut eines `<slot>` innerhalb dieses Shadow-Roots übereinstimmt, werden diesem Slot zugewiesen. Alle obersten Kinder des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (dem "Standard-Slot") zugewiesen, sofern ein solcher vorhanden ist.
        - `manual`
          - : Elemente werden nicht automatisch den {{HTMLElement("slot")}}-Elementen zugewiesen. Sie müssen stattdessen manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden.
            Der Standardwert ist `named`.

### Rückgabewert

Gibt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Dieser Fehler kann ausgelöst werden, wenn Sie versuchen, einem Element einen Shadow-Root anzuhängen:

    - außerhalb des HTML-Namespace oder einem, das nicht mit einem Shadow versehen werden kann.
    - bei dem die statische Eigenschaft `disabledFeatures` des Elementdefinitionsobjekts auf den Wert `"shadow"` gesetzt wurde.
    - das bereits über einen Shadow-Root verfügt, der nicht deklarativ erstellt wurde.
    - das über einen [deklarativen Shadow Root](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) verfügt, aber der angegebene `mode` nicht mit dem vorhandenen Modus übereinstimmt.

## Beispiele

### Benutzerdefiniertes Element zur Wortzählung

Das folgende Beispiel stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) Demo ([siehe es live auch](https://mdn.github.io/web-components-examples/word-count-web-component/)).
Sie können sehen, dass wir `attachShadow()` in der Mitte des Codes verwenden, um einen Shadow-Root zu erstellen, an dem wir dann den Inhalt unseres benutzerdefinierten Elements anhängen.

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

### Deaktivieren des Shadow-DOM

Wenn das Element eine statische Eigenschaft namens `disabledFeatures` hat, die ein Array mit dem String `"shadow"` enthält, dann wird der `attachShadow()`-Aufruf eine Ausnahme auslösen.

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
- Deklaratives Anhängen eines Shadow-Roots mit dem [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode) Attribut des [`<template>` elements](/de/docs/Web/HTML/Element/template)
- [Deklarativer Shadow-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
