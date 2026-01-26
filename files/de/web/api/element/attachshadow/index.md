---
title: "Element: attachShadow() Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: 6991c03349b4916c90ab113cc464788fb72a1f84
---

{{APIRef("Shadow DOM")}}

Die **`Element.attachShadow()`** Methode fügt einem angegebenen Element einen Shadow-DOM-Baum hinzu und gibt eine Referenz auf dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

## Elemente, an die Sie einen Shadow anhängen können

Beachten Sie, dass Sie nicht jedem Elementtyp einen Shadow-Root anhängen können. Einige Elemente können aus Sicherheitsgründen keinen Shadow-DOM haben (zum Beispiel {{htmlelement("a")}}).

Die folgende Liste zeigt Elemente, an die Sie einen Shadow-Root anhängen _können_:

- Jedes eigenständige benutzerdefinierte Element mit einem [gültigen Namen](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
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

Die Methode kann bei einem Element aufgerufen werden, das bereits einen [deklarativen Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, vorausgesetzt, der angegebene `mode` stimmt mit dem vorhandenen Modus überein. In diesem Fall wird der bereits vorhandene [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gelöscht und zurückgegeben. Dies ermöglicht Szenarien, in denen beispielsweise serverseitiges Rendering bereits einen Schatten-Root deklarativ erstellt hat und dann clientseitiger Code versucht, den Root erneut anzuhängen.

Andernfalls wird das Aufrufen von `attachShadow()` bei einem Element, das bereits einen Shadow-Root hat, eine Ausnahme auslösen.

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
          - : Elemente des Shadow-Root sind von außerhalb des Roots über JavaScript zugänglich,
            z. B. mit [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot):

            ```js
            element.attachShadow({ mode: "open" });
            element.shadowRoot; // Returns a ShadowRoot obj
            ```

        - `closed`
          - : Verweigert den Zugriff auf die Knoten eines geschlossenen Shadows von außerhalb desselben:

            ```js
            element.attachShadow({ mode: "closed" });
            element.shadowRoot; // Returns null
            ```

    - `clonable` {{Optional_Inline}}
      - : Ein boolean, der angibt, ob der Shadow-Root klonbar ist: Wenn auf `true` gesetzt, wird der Shadow-Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wird, den Shadow-Root in der Kopie enthalten. Der Standardwert ist `false`.

    - `delegatesFocus` {{Optional_Inline}}
      - : Ein boolean, der, wenn auf `true` gesetzt, ein Verhalten festlegt, das Probleme bei der Fokussierbarkeit benutzerdefinierter Elemente vermindert.
        Wenn auf einen nicht fokussierbaren Teil des Shadow-DOM geklickt wird, erhält der erste fokussierbare Teil den Fokus, und der Shadow-Host erhält jede verfügbare `:focus`-Stilierung. Der Standardwert ist `false`.

    - `referenceTarget` {{Optional_Inline}} {{Experimental_Inline}}
      - : Ein String-Wert, der das effektive Ziel eines Elementverweises angibt, der gegen den Shadow-Host von außerhalb des Host-Elements gemacht wird. Der Wert sollte die ID eines Elements innerhalb des Shadow-DOM sein. Wenn festgelegt, bewirken Zielverweise auf das Host-Element von außerhalb, dass das referenzierte Zielelement zum effektiven Ziel des Verweises auf das Host-Element wird.

    - `serializable` {{Optional_Inline}}
      - : Ein boolean, der angibt, dass der Shadow-Root serialisierbar ist, wenn er auf `true` gesetzt ist.
        Wenn festgelegt, kann der Shadow-Root serialisiert werden, indem die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` aufgerufen werden.
        Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_inline}}
      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann einer der folgenden sein:
        - `named`
          - : Elemente werden innerhalb dieses Shadow-Roots automatisch {{HTMLElement("slot")}}-Elementen zugewiesen. Jeder Nachfahre des Hosts mit einem `slot`-Attribut, das mit dem `name`-Attribut eines `<slot>` innerhalb dieses Shadow-Roots übereinstimmt, wird diesem Slot zugewiesen. Alle obersten Kinder des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (dem "Standard-Slot") zugewiesen, falls vorhanden.
        - `manual`
          - : Elemente werden nicht automatisch {{HTMLElement("slot")}}-Elementen zugewiesen. Stattdessen müssen sie manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden. Der Standardwert ist `named`.

### Rückgabewert

Gibt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Dieser Fehler kann ausgelöst werden, wenn Sie versuchen, einen Shadow-Root an ein Element anzuhängen:
    - außerhalb des HTML-Namespace oder das keinen Shadow haben kann.
    - bei dem die statische Eigenschaft `disabledFeatures` der Elementdefinition den Wert `"shadow"` hat.
    - das bereits einen Shadow-Root hat, der nicht deklarativ erstellt wurde.
    - das einen [deklarativen Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, aber der angegebene `mode` nicht mit dem vorhandenen Modus übereinstimmt.

## Beispiele

### Word Count Custom Element

Das folgende Beispiel stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) Demo ([auch live sehen](https://mdn.github.io/web-components-examples/word-count-web-component/)).
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

### Deaktivierung des Shadow-DOM

Wenn das Element eine statische Eigenschaft namens `disabledFeatures` hat, das ein Array enthält, das den String `"shadow"` enthält, wird der `attachShadow()`-Aufruf eine Ausnahme auslösen.

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
- Deklaratives Hinzufügen eines Shadow-Roots mit dem [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) Attribut des [`<template>` Elements](/de/docs/Web/HTML/Reference/Elements/template)
- [Deklarativer Shadow-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
