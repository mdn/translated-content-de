---
title: "Element: attachShadow()-Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef('Shadow DOM')}}

Die **`Element.attachShadow()`**-Methode fügt dem angegebenen Element einen Shadow-DOM-Baum hinzu und gibt eine Referenz zu dessen {{domxref("ShadowRoot")}} zurück.

## Elemente, an die Sie einen Shadow anhängen können

Beachten Sie, dass Sie nicht an jeden Elementtyp eine Shadow-Root anhängen können.
Es gibt einige, die aus Sicherheitsgründen keinen Shadow DOM haben können (zum Beispiel {{htmlelement("a")}}).

Die folgende Liste zeigt Elemente auf, an die Sie _einen_ Shadow-Root anhängen können:

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

## Aufrufen dieser Methode bei einem Element, das bereits ein Shadow-Host ist

Die Methode kann auf einem Element aufgerufen werden, das bereits eine [deklarative Shadow-Root](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) hat, vorausgesetzt, der angegebene Modus `mode` entspricht dem bestehenden Modus.
In diesem Fall wird die bereits vorhandene {{domxref("ShadowRoot")}} gelöscht und zurückgegeben.
Dies ermöglicht Fälle, in denen zum Beispiel serverseitiges Rendering bereits deklarativ eine Shadow-Root erstellt hat und dann Client-seitiger Code versucht, die Root erneut anzufügen.

Andernfalls wird beim Aufruf von `attachShadow()` auf ein Element, das bereits eine Shadow-Root hat, eine Ausnahme ausgelöst.

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

          - : Elemente der Shadow-Root sind von JavaScript außerhalb der Root zugänglich,
            beispielsweise durch Nutzung von {{domxref("Element.shadowRoot")}}:

            ```js
            element.attachShadow({ mode: "open" });
            element.shadowRoot; // Gibt ein ShadowRoot-Objekt zurück
            ```

        - `closed`

          - : Verweigert den Zugriff auf die Knoten einer geschlossenen Shadow-Root
            von JavaScript außerhalb davon:

            ```js
            element.attachShadow({ mode: "closed" });
            element.shadowRoot; // Gibt null zurück
            ```

    - `clonable` {{Optional_Inline}}

      - : Ein boolean, der angibt, ob die Shadow-Root klonbar ist: Wenn auf `true` gesetzt, wird der Shadow-Host beim Klonen mit {{domxref("Node.cloneNode()")}} oder {{domxref("Document.importNode()")}} die Shadow-Root in die Kopie aufnehmen. Der Standardwert ist `false`.

    - `delegatesFocus` {{Optional_Inline}}

      - : Ein boolean, der bei `true` das Verhalten angibt, das Probleme der Fokussierbarkeit bei benutzerdefinierten Elementen mindert.
        Wenn auf einen nicht-fokussierbaren Teil des Shadow-DOMs geklickt wird, erhält der erste fokussierbare Teil den Fokus, und dem Shadow-Host wird jegliches verfügbare `:focus`-Styling zugewiesen. Der Standardwert ist `false`.

    - `serializable` {{Optional_Inline}}

      - : Ein boolean, der bei `true` anzeigt, dass die Shadow-Root serialisierbar ist.
        Wenn gesetzt, kann die Shadow-Root durch Aufrufen der {{DOMxRef('Element.getHTML()')}}- oder {{DOMxRef('ShadowRoot.getHTML()')}}-Methoden mit dem `options.serializableShadowRoots`-Parameter auf `true` serialisiert werden.
        Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_inline}}

      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann eines der folgenden sein:

        - `named`
          - : Elemente werden automatisch den {{HTMLElement("slot")}}-Elementen innerhalb dieser Shadow-Root zugewiesen. Alle Nachfahren des Hosts mit einem `slot`-Attribut, das mit dem `name`-Attribut eines `<slot>` innerhalb dieser Shadow-Root übereinstimmt, werden diesem Slot zugewiesen. Alle obersten Kinder des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (dem "Standard-Slot") zugewiesen, wenn einer vorhanden ist.
        - `manual`
          - : Elemente werden nicht automatisch den {{HTMLElement("slot")}}-Elementen zugewiesen. Stattdessen müssen sie manuell mit {{domxref("HTMLSlotElement.assign()")}} zugewiesen werden.
            Der Standardwert ist `named`.

### Rückgabewert

Gibt ein {{domxref("ShadowRoot")}}-Objekt zurück.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}

  - : Diese kann ausgelöst werden, wenn Sie versuchen, eine Shadow-Root an ein Element anzufügen:

    - außerhalb des HTML-Namensraums oder das keinen Shadow haben kann.
    - wo die statische Property `disabledFeatures` der Elementdefinition den Wert `"shadow"` hat.
    - das bereits eine Shadow-Root hat, die nicht deklarativ erstellt wurde.
    - das eine [deklarative Shadow-Root](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) hat, aber der angegebene `mode` nicht mit dem bestehenden Modus übereinstimmt.

## Beispiele

### Word-count benutzerdefiniertes Element

Das folgende Beispiel stammt aus unserem Demo [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) ([sehen Sie es auch live](https://mdn.github.io/web-components-examples/word-count-web-component/)).
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
    setInterval(() => {
      const count = `Words: ${countWords(wcParent)}`;
      text.textContent = count;
    }, 200);
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

### Deaktivieren von Shadow DOM

Wenn das Element über eine statische Property namens `disabledFeatures` verfügt, die ein Array enthält, das den String `"shadow"` enthält, wird der Aufruf von `attachShadow()` eine Ausnahme auslösen.

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

- {{domxref("ShadowRoot.mode")}}
- {{domxref("ShadowRoot.delegatesFocus")}}
- {{domxref("ShadowRoot.slotAssignment")}}
- Deklarativ einen Shadow-Root mit dem [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Attribut des [`<template>` elements](/de/docs/Web/HTML/Element/template) anhängen
- [Deklaratives Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
