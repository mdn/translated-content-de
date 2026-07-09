---
title: "Element: attachShadow()-Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("Shadow DOM")}}

Die **`attachShadow()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces hängt einen Shadow-DOM-Baum an das angegebene Element an und gibt eine Referenz auf dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

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
          - : Elemente innerhalb der Shadow-Root sind von JavaScript über die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Elements zugänglich.
        - `closed`
          - : Elemente innerhalb der Shadow-Root können von JavaScript über die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft nicht zugegriffen werden, welche auf `null` gesetzt ist.

    - `clonable` {{Optional_Inline}}
      - : Ein boolean, der angibt, ob die Shadow-Root clonable ist: Wenn auf `true` gesetzt, wird der Shadow-Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wurde, die Shadow-Root in die Kopie aufnehmen. Der Standardwert ist `false`.

    - `customElementRegistry` {{Optional_Inline}}
      - : Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das als [scoped custom element registry](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) der angehängten Shadow-Root verwendet wird.
        Wenn `null` oder `undefined`, verwendet die Shadow-Root das globale Register, auf welches durch [`Window.customElements`](/de/docs/Web/API/Window/customElements) zugegriffen wird.

    - `delegatesFocus` {{Optional_Inline}}
      - : Ein boolean, das, wenn auf `true` gesetzt, ein Verhalten spezifiziert, das Probleme von benutzerdefinierten Elementen rund um die Fokussierbarkeit mindert.
        Wenn ein nicht fokussierbarer Teil des Shadow-DOM angeklickt wird, wird der erste fokussierbare Teil fokussiert, und der Shadow-Host erhält jegliche verfügbare `:focus`-Stilierung. Der Standardwert ist `false`.

    - `referenceTarget` {{Optional_Inline}} {{Experimental_Inline}}
      - : Ein String-Wert, der das effektive Ziel eines jeden Element-Referenzierungsversuchs gegen den Shadow-Host von außerhalb des Host-Elements angibt. Der Wert sollte die ID eines Elements innerhalb des Shadow-DOM sein. Wenn gesetzt, werden Ziel-Referenzen auf das Host-Element von außerhalb des Shadow-DOM dazu führen, dass das referenzierte Ziel-Element das effektive Ziel der Referenz auf das Host-Element wird.

    - `serializable` {{Optional_Inline}}
      - : Ein boolean, der, wenn auf `true` gesetzt, anzeigt, dass die Shadow-Root serialisierbar ist.
        Wenn gesetzt, kann die Shadow-Root durch Aufrufen der Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` serialisiert werden.
        Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_inline}}
      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann einer der folgenden sein:
        - `named`
          - : Elemente werden automatisch zu {{HTMLElement("slot")}}-Elementen innerhalb dieser Shadow-Root zugewiesen.
            Alle obersten Kinder des Hosts mit einem `slot`-Attribut, welches mit dem `name`-Attribut eines `<slot>` innerhalb dieser Shadow-Root übereinstimmt, werden diesem Slot zugewiesen.
            Alle obersten Kinder des Hosts ohne `slot`-Attribut werden dem ersten `<slot>` ohne `name`-Attribut (dem "Standard-Slot") zugewiesen, falls vorhanden.
            Dies ist der Standardwert.
        - `manual`
          - : Elemente werden manuell bestimmten Slot-Elementen mithilfe von [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen.
            Es findet keine automatische Zuweisung statt.

### Rückgabewert

Gibt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Dieser Fehler kann auftreten, wenn Sie versuchen, eine Shadow-Root an ein Element zu hängen:
    - außerhalb des HTML-Namespaces oder das kein Shadow zulassen kann.
    - bei dem die statische Eigenschaft `disabledFeatures` des Element-Definitionsobjekts den Wert `"shadow"` hat.
    - das bereits eine Shadow-Root hat, die nicht deklarativ erstellt wurde.
    - die eine [declarative shadow root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, aber der angegebene `mode` nicht mit dem vorhandenen Modus übereinstimmt.
    - während ein `customElementRegistry`-Wert übergeben wird, der nicht `null` oder ein lokal begrenztes Register (das Sie mit `new CustomElementRegistry()` erstellt haben) ist.
      Der Fehler würde auftreten, wenn Sie das globale Register übergeben haben.

## Beschreibung

Die **`Element.attachShadow()`**-Methode fügt das Shadow-DOM-Baum dem angegebenen Element hinzu und gibt eine Referenz auf dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

Dies ist der programmatische Mechanismus zur Erstellung einer `ShadowRoot`, die der Wurzelknoten eines [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) an ein Host-Element angehängt ist (es ist auch möglich, eine `ShadowRoot` deklarativ mit dem [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attribut des {{htmlelement("template")}}-Elements zu erstellen).
Es wird zur Erstellung von [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) verwendet.

### Elemente, an die Sie einen Shadow anhängen können

Beachten Sie, dass Sie nicht an jeden Elementtyp eine Shadow-Root anhängen können.
Es gibt einige, die aus Sicherheitsgründen kein Shadow-DOM haben können (zum Beispiel {{htmlelement("a")}}).

Die folgende Liste zeigt Elemente, an die Sie eine Shadow-Root _anhängen_ können:

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

### Aufrufen dieser Methode für ein Element, das bereits ein Shadow-Host ist

Die Methode kann für ein Element aufgerufen werden, das bereits eine [declarative shadow root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, vorausgesetzt der spezifizierte `mode` entspricht dem vorhandenen Modus.
In diesem Fall wird die bereits vorhandene [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gelöscht und zurückgegeben.
Dies erlaubt Fälle, in denen beispielsweise serverseitiges Rendering bereits deklarativ eine Shadow-Root erstellt hat und dann clientseitiger Code versucht, die Root erneut anzuhängen.

Andernfalls wirft der Aufruf von `attachShadow()` für ein Element, das bereits eine Shadow-Root hat, eine Ausnahme.

### Offene und geschlossene Shadow-Roots

Eine Shadow-Root kann mit einem Kapselungs-[Modus](#mode) verknüpft werden, der entweder als `open` oder `closed` angegeben wird.

Wenn das Argument `{mode: "open"}` übergeben wird, kann die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Host-Elements anschließend verwendet werden, um die angehängte Shadow-Root zu erhalten.
Dies kann verwendet werden, um auf Elemente im Shadow-DOM zuzugreifen:

```js
element.attachShadow({ mode: "open" });
element.shadowRoot; // Returns a ShadowRoot obj
```

Wenn `{mode: "closed"}` übergeben wird, wird die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Elements auf `null` gesetzt.
Beachten Sie, dass JavaScript dennoch auf eine geschlossene Shadow-Root zugreifen kann, indem der von der Funktion zurückgegebene Wert gespeichert wird.

```js
element.attachShadow({ mode: "closed" });
element.shadowRoot; // Returns null
```

## Beispiele

### Word-Count-Benutzerelement

Das folgende Beispiel stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component)-Beispiel ([Siehe es auch live](https://mdn.github.io/web-components-examples/word-count-web-component/)).
Sie können sehen, dass wir `attachShadow()` in der Mitte des Codes verwenden, um eine Shadow-Root zu erstellen, an die wir die Inhalte unseres benutzerdefinierten Elements anhängen.

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

Wenn das Element eine statische Eigenschaft namens `disabledFeatures` hat, die ein Array mit dem String `"shadow"` ist, wird der `attachShadow()`-Aufruf eine Ausnahme werfen.

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

### Benannte Slot-Zuweisung

Dieses Beispiel demonstriert die Zuweisung benannter Slots.

#### Erstellung des Web-Components

Dieser Code erstellt eine Web-Komponente, die drei benannte Slots für den Titel, die Metadaten und den Textkörper eines Artikels hat.

Die `ShadowRoot` wird im Konstruktor des benutzerdefinierten Elements angehängt.
Wir müssen die Option `slotAssignment: "named"` nicht explizit setzen, da sie der Standard ist.

```js
class MyArticle extends HTMLElement {
  constructor() {
    super();
    // Attach the shadow root
    this.attachShadow({ mode: "open" /* , slotAssignment: "named" */ });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Define the internal structure and styles
    this.shadowRoot.innerHTML = `
      <style>
        .header {
          background-color: plum;
        }
        .meta {
          background-color: green;
        }
        .body {
          background-color: lightblue;
        }
      </style>

      <h2 class="header">
        <slot name="title"></slot>
      </h2>

      <div class="meta">
        <slot name="meta"></slot>
      </div>

      <div class="body">
        <slot></slot>
      </div>
    `;
  }
}

// Register the component
customElements.define("my-article", MyArticle);
```

#### Verwendung des Web-Components

Der folgende HTML-Code verwendet das `<my-article>`-Web-Komponente, die wir gerade erstellt haben.
Die verschachtelten Elemente werden in den Slots der Komponente anhand der Namenszuordnung gerendert.
Die nicht benannten Elemente werden in dem unbenannten Slot der Komponente (dem Hauptteil) gerendert.

```html
<my-article>
  <span slot="title">Text for the title slot</span>
  <span slot="meta">Text for the meta slot</span>

  <p>
    Text 1 with no slot attribute. Goes into default (unnamed) slot inside the
    "body" div.
  </p>
  <p>
    Text 2 with no slot attribute. Also goes into default (unnamed) slot inside
    the "body" div.
  </p>
</my-article>
```

#### Ergebnisse

Das unten stehende Beispiel sollte den Inhalt der Slots in den entsprechenden Abschnitten anzeigen.

{{EmbedLiveSample('Named slot assignment','100', '220px')}}

### Unbenannte Slot-Zuweisung

Dieses Beispiel demonstriert die [manuelle Slot-Zuweisung](/de/docs/Web/API/HTMLSlotElement/assign).
Mit diesem Ansatz muss jedes Element manuell einem bestimmten Slot mit Hilfe von [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden.
Es gibt keine Standardzuweisung, sodass jeder Slot, der nicht zugewiesen ist, leer bleibt.

#### HTML

Zuerst haben wir eine versteckte Unterstützung-Warnung, die über JavaScript angezeigt wird, wenn der Browser `slotAssignment: "manual"` nicht unterstützt.

```html
<p id="support-warning" hidden>
  ⛔ Your browser doesn't support manual slot assignment (named assignment is
  used).
</p>
```

Als nächstes definieren wir unser `<my-article>`-benutzerdefiniertes Element mit Kind-Elementen für den Titel, die Metadaten und den Inhalt des Textkörpers.
Jedes Kind wird durch `id` identifiziert; im Gegensatz zur benannten Slot-Zuweisung ist kein `slot`-Attribut erforderlich.

```html
<my-article>
  <span id="text_title">Text for the title slot</span>
  <span id="text_meta">Text for the meta slot</span>
  <p id="text_body_1">Text 1 for body slot.</p>
  <p id="text_body_2">Text 2 for body slot.</p>
</my-article>
```

#### JavaScript

Das benutzerdefinierte Element hängt eine Shadow-Root mit `slotAssignment: "manual"` an.
Der Shadow-DOM enthält unbenannte Slots, die durch `id` identifiziert werden.
Die `assignSlots()`-Methode weist die Light-DOM-Elemente manuell den Slots zu.
Beachten Sie, dass mehrere Knoten einem einzelnen Slot zugewiesen werden können — die Reihenfolge, in der sie angegeben werden, steuert die Darstellungsreihenfolge.

```js
class MyArticle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open", slotAssignment: "manual" });
  }

  connectedCallback() {
    this.render();
    this.assignSlots();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .header {
          background-color: plum;
        }
        .meta {
          background-color: green;
        }
        .body {
          background-color: lightblue;
        }
      </style>

      <h2 class="header">
        <slot id="titleSlot"></slot>
      </h2>

      <div class="meta">
        <slot id="metaSlot"></slot>
      </div>

      <div class="body">
        <slot id="bodySlot"></slot>
      </div>
    `;
  }

  assignSlots() {
    // 1. Target your slots
    const titleSlot = this.shadowRoot.querySelector("#titleSlot");
    const metaSlot = this.shadowRoot.querySelector("#metaSlot");
    const bodySlot = this.shadowRoot.querySelector("#bodySlot");

    // 2. Target your light DOM elements
    const titleText = this.querySelector("#text_title");
    const metaText = this.querySelector("#text_meta");
    const body1Text = this.querySelector("#text_body_1");
    const body2Text = this.querySelector("#text_body_2");

    // 3. Manually assign them
    titleSlot.assign(titleText);
    metaSlot.assign(metaText);
    bodySlot.assign(body2Text, body1Text);
  }
}

customElements.define("my-article", MyArticle);
```

Dieser Code testet, ob die [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)-Eigenschaft definiert ist und zeigt die Warnung an, wenn sie nicht definiert ist.

```js
const isSlotAssignmentSupported = Object.hasOwn(
  ShadowRoot.prototype,
  "slotAssignment",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isSlotAssignmentSupported);
```

#### Ergebnisse

Das unten stehende Beispiel sollte den Inhalt der Slots in den entsprechenden Abschnitten anzeigen.

{{EmbedLiveSample('Unnamed slot assignment','100', '220px')}}

> [!NOTE]
> Wenn die manuelle Slot-Zuweisung nicht unterstützt wird, wird eine Warnung angezeigt und der Browser verwendet die `named`-Zuweisung.
> Da jedoch keiner der Light-DOM-Elemente ein `slot`-Attribut hat, werden sie alle im ersten unbenannten Slot (dem Titel-Slot) eingefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode)
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)
- Deklaratives Anhängen einer Shadow-Root mit dem [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attribut des [`<template>` Elements](/de/docs/Web/HTML/Reference/Elements/template)
- [Deklarativer Shadow DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
