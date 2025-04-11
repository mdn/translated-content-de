---
title: "Element: attachShadow() Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef('Shadow DOM')}}

Die **`Element.attachShadow()`** Methode fügt einem angegebenen Element einen Shadow-DOM-Baum hinzu und gibt eine Referenz auf dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

## Elemente, an die Sie einen Shadow anhängen können

Beachten Sie, dass Sie nicht an jeden Elementtyp einen Shadow-Root anhängen können.
Einige können aus Sicherheitsgründen keinen Shadow-DOM haben (zum Beispiel {{htmlelement("a")}}).

Die folgende Liste enthält Elemente, an die Sie _einen_ Shadow-Root anhängen können:

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

## Aufruf dieser Methode bei einem Element, das bereits ein Shadow-Host ist

Die Methode kann bei einem Element aufgerufen werden, das bereits eine [deklarative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, vorausgesetzt, der angegebene Modus `mode` passt zum bestehenden Modus.
In diesem Fall wird die bereits vorhandene [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) geleert und zurückgegeben.
Dies ermöglicht Situationen, in denen serverseitiges Rendering bereits deklarativ eine Shadow-Root erstellt hat und dann clientseitiger Code versucht, die Root erneut anzuhängen.

Andernfalls wird das Aufrufen von `attachShadow()` bei einem Element, das bereits eine Shadow-Root hat, eine Ausnahme werfen.

## Syntax

```js-nolint
attachShadow(options)
```

### Parameter

- `options`

  - : Ein Objekt, das die folgenden Felder enthält:

    - `mode`

      - : Ein String, der den _Verkapselungsmodus_ für den Shadow-DOM-Baum angibt.
        Dies kann einer der folgenden sein:

        - `open`

          - : Elemente der Shadow-Root sind von JavaScript außerhalb der Root zugänglich,
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

      - : Ein Boolean, der angibt, ob die Shadow-Root kopierbar ist: Wenn auf `true` gesetzt, wird das Shadow-Host-Element, das mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wird, die Shadow-Root in die Kopie aufnehmen. Der Standardwert ist `false`.

    - `delegatesFocus` {{Optional_Inline}}

      - : Ein Boolean, der, wenn auf `true` gesetzt, ein Verhalten angibt, das Probleme mit der Fokussierbarkeit benutzerdefinierter Elemente mindert.
        Wenn auf einen nicht fokussierbaren Teil des Shadow-DOMs geklickt wird, erhält der erste fokussierbare Teil den Fokus, und das Shadow-Host-Element erhält jegliche verfügbare `:focus`-Stilierung. Der Standardwert ist `false`.

    - `serializable` {{Optional_Inline}}

      - : Ein Boolean, der, wenn auf `true` gesetzt, angibt, dass die Shadow-Root serialisierbar ist.
        Wenn gesetzt, darf die Shadow-Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden. Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_inline}}

      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann einer der folgenden sein:

        - `named`
          - : Elemente werden automatisch zu {{HTMLElement("slot")}}-Elementen innerhalb dieser Shadow-Root zugewiesen. Alle Nachkommen des Hosts mit einem `slot`-Attribut, das dem `name`-Attribut eines `<slot>` innerhalb dieser Shadow-Root entspricht, werden diesem Slot zugewiesen. Jegliche obersten Nachkommen des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (dem „Standard-Slot“) zugewiesen, wenn einer vorhanden ist.
        - `manual`
          - : Elemente werden nicht automatisch zu {{HTMLElement("slot")}}-Elementen zugewiesen. Stattdessen müssen sie manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden.
            Der Standardwert ist `named`.

### Rückgabewert

Gibt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekt zurück.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Dieser Fehler kann auftreten, wenn Sie versuchen, einem Element eine Shadow-Root hinzuzufügen:

    - außerhalb des HTML-Namespace oder einem Element, das keinen Shadow haben kann.
    - bei dem die statische Eigenschaft `disabledFeatures` des Elementdefinitionswerts den Wert `"shadow"` hat.
    - das bereits eine Shadow-Root hat, die nicht deklarativ erstellt wurde.
    - das eine [deklarative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, aber der angegebene `mode` nicht mit dem vorhandenen Modus übereinstimmt.

## Beispiele

### Wortzähler benutzerdefiniertes Element

Das folgende Beispiel stammt aus unserem [Wortzähl-Webkomponenten](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) Demo ([sehen Sie es auch live](https://mdn.github.io/web-components-examples/word-count-web-component/)).
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

### Deaktivierung des Shadow-DOM

Wenn das Element eine statische Eigenschaft namens `disabledFeatures` hat, die ein Array mit dem String `"shadow"` enthält, wird der `attachShadow()`-Aufruf eine Ausnahme auslösen.

Beispiel:

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
- Deklaratives Anfügen einer Shadow-Root mit dem [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attribut des [`<template>` Elements](/de/docs/Web/HTML/Reference/Elements/template)
- [Deklarativer Shadow-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
