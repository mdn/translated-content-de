---
title: "Element: attachShadow() Methode"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: f77236a72e479b61c6b1cb6059c9ae1e90f4c7cd
---

{{APIRef("Shadow DOM")}}

Die **`attachShadow()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces fügt ein Shadow-DOM-Baum an das angegebene Element an und gibt eine Referenz zu dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

## Syntax

```js-nolint
attachShadow(options)
```

### Parameter

- `options`
  - : Ein Objekt mit den folgenden Feldern:
    - `mode`
      - : Ein String, der den _Kapselungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann einer der folgenden Werte sein:
        - `open`
          - : Elemente innerhalb der Shadow-Root sind von JavaScript aus über die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Elements zugänglich.
        - `closed`
          - : Elemente innerhalb der Shadow-Root können von JavaScript aus nicht über die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft zugegriffen werden, die auf `null` gesetzt ist.

    - `clonable` {{Optional_Inline}}
      - : Ein Boolean-Wert, der angibt, ob die Shadow-Root klonbar ist: Wenn auf `true` gesetzt, wird der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklonte Shadow-Host die Shadow-Root in die Kopie einschließen. Der Standardwert ist `false`.

    - `customElementRegistry` {{Optional_Inline}}
      - : Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das als [scoped custom element registry](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) der angehängten Shadow-Root verwendet wird. Wenn `null` oder `undefined`, wird die Shadow-Root das globale Verzeichnis verwenden, auf das [`Window.customElements`](/de/docs/Web/API/Window/customElements) verweist.

    - `delegatesFocus` {{Optional_Inline}}
      - : Ein Boolean-Wert, der, wenn auf `true` gesetzt, ein Verhalten spezifiziert, das Probleme mit der Fokussierbarkeit von benutzerdefinierten Elementen mildert. Wenn ein nicht-fokussierbarer Teil des Shadow-DOMs angeklickt wird, erhält der erste fokussierbare Teil den Fokus, und der Shadow-Host erhält alle verfügbaren `:focus`-Stile. Der Standardwert ist `false`.

    - `referenceTarget` {{Optional_Inline}} {{Experimental_Inline}}
      - : Ein String-Wert, der das effektive Ziel eines jeden Elementbezugs angibt, das gegen den Shadow-Host von außerhalb des Host-Elements gemacht wird. Der Wert sollte die ID eines Elements innerhalb des Shadow-DOMs sein. Wenn gesetzt, werden Zielreferenzen auf das Host-Element von außerhalb des Shadow-DOMs dazu führen, dass das referenzierte Zielelement zum effektiven Ziel des Bezugs auf das Host-Element wird.

    - `serializable` {{Optional_Inline}}
      - : Ein Boolean-Wert, der, wenn auf `true` gesetzt, anzeigt, dass die Shadow-Root serialisierbar ist. Wenn gesetzt, kann die Shadow-Root serialisiert werden, indem die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) mit dem Parameter `options.serializableShadowRoots` auf `true` gesetzt werden. Der Standardwert ist `false`.

    - `slotAssignment` {{Optional_inline}}
      - : Ein String, der den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum angibt. Dies kann einer der folgenden Werte sein:
        - `named`
          - : Elemente werden automatisch den {{HTMLElement("slot")}}-Elementen innerhalb dieser Shadow-Root zugewiesen. Jedes oberste Kind des Hosts mit einem `slot`-Attribut, das mit dem Attribut `name` eines `<slot>` innerhalb dieser Shadow-Root übereinstimmt, wird diesem Slot zugewiesen. Jedes oberste Kind des Hosts ohne `slot`-Attribut wird dem ersten `<slot>` ohne `name`-Attribut (dem "Standard-Slot") zugewiesen, falls vorhanden. Dies ist der Standardwert.
        - `manual`
          - : Elemente werden manuell bestimmten Slot-Elementen zugewiesen, indem [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) verwendet wird. Es findet keine automatische Zuweisung statt.

### Rückgabewert

Gibt ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekt zurück.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Dieser Fehler kann ausgelöst werden, wenn Sie versuchen, eine Shadow-Root an ein Element anzuhängen:
    - außerhalb des HTML-Namespace oder das kein Shadow-DOM haben kann.
    - bei dem die statische Eigenschaft `disabledFeatures` des Element-Definitionsobjekts den Wert `"shadow"` hat.
    - das bereits eine Shadow-Root hat, die nicht deklarativ erstellt wurde.
    - das eine [deklarative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, der angegebene `mode` jedoch nicht mit dem vorhandenen Modus übereinstimmt.
    - während ein `customElementRegistry`-Wert übergeben wird, der weder `null` noch ein lokal eingrenzbares Verzeichnis ist (das Sie mit `new CustomElementRegistry()` erstellt haben). Der Fehler würde ausgelöst, wenn Sie das globale Verzeichnis übergeben.

## Beschreibung

Die **`Element.attachShadow()`** Methode fügt ein Shadow-DOM-Baum an das angegebene Element an und gibt eine Referenz zu dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.

Dies ist der programmatische Mechanismus, um eine `ShadowRoot` zu erstellen, die das Wurzelelement eines an ein Host-Element angehängten [Shadow-DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM) bildet (es ist auch möglich, eine `ShadowRoot` deklarativ zu erstellen, indem das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) des {{htmlelement("template")}}-Elements verwendet wird). Es wird verwendet, um [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu erstellen.

### Elemente, an die Sie ein Shadow anhängen können

Beachten Sie, dass Sie nicht an jeden Elementtyp eine Shadow-Root anhängen können. Es gibt einige, die aus Sicherheitsgründen kein Shadow-DOM haben können (zum Beispiel {{htmlelement("a")}}).

Die folgende Liste zeigt Elemente, an die Sie eine Shadow-Root _anhängen können_:

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

Die Methode kann für ein Element aufgerufen werden, das bereits eine [deklarative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) hat, vorausgesetzt, der angegebene Modus `mode` stimmt mit dem vorhandenen Modus überein. In diesem Fall wird die bereits vorhandene [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gelöscht und zurückgegeben. Dies ermöglicht Fälle, bei denen zum Beispiel serverseitiges Rendering bereits eine Shadow-Root deklarativ erstellt hat und dann der Client-seitige Code versucht, die Wurzel erneut anzuhängen.

Andernfalls führt das Aufrufen von `attachShadow()` auf einem Element, das bereits eine Shadow-Root hat, zu einer Ausnahme.

### Offene und geschlossene Shadow-Roots

Eine Shadow-Root kann mit einem Kapselungs-[Modus](#mode) angefügt werden, der entweder als `open` oder `closed` angegeben wird.

Wird das Argument `{mode: "open"}` übergeben, kann die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Host-Elements anschließend verwendet werden, um die angehängte Shadow-Root zu erhalten. Dies kann verwendet werden, um auf Elemente im Shadow-DOM zuzugreifen:

```js
element.attachShadow({ mode: "open" });
element.shadowRoot; // Returns a ShadowRoot obj
```

Wenn `{mode: "closed"}` übergeben wird, wird die [`shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft des Elements auf `null` gesetzt. Beachten Sie, dass JavaScript dennoch auf eine geschlossene Shadow-Root zugreifen kann, indem der von der Funktion zurückgegebene Wert gespeichert wird.

```js
element.attachShadow({ mode: "closed" });
element.shadowRoot; // Returns null
```

## Beispiele

### Benutzerdefiniertes Element zur Wortzählung

Das folgende Beispiel stammt aus unserem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) Demo ([siehe es sich auch live an](https://mdn.github.io/web-components-examples/word-count-web-component/)). Sie können sehen, dass wir `attachShadow()` in der Mitte des Codes verwenden, um eine Shadow-Root zu erstellen, an die wir dann den Inhalt unseres benutzerdefinierten Elements anhängen.

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

Wenn das Element eine statische Eigenschaft namens `disabledFeatures` hat, die ein Array ist und die Zeichenkette `"shadow"` enthält, dann löst der `attachShadow()`-Aufruf eine Ausnahme aus.

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

### Zuweisung benannter Slots

Dieses Beispiel zeigt die Zuweisung benannter Slots.

#### Erstellen des Web-Components

Dieser Code erstellt eine Web-Komponente, die drei benannte Slots für den Titel, die Metadaten und den Hauptteil eines Artikels hat.

Die `ShadowRoot` wird im Konstruktor des benutzerdefinierten Elements angehängt. Wir müssen die Option `slotAssignment: "named"` nicht explizit setzen, da dies der Standard ist.

```js
class MyArticle extends HTMLElement {
  constructor() {
    super();
    // Attach the shadow root
    this.attachShadow({ mode: "open" /*, slotAssignment: "named"*/ });
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

#### Verwenden der Web-Komponente

Der folgende HTML-Code verwendet die `<my-article>` Web-Komponente, die wir gerade erstellt haben. Die verschachtelten Elemente werden in den Slots der Komponente basierend auf der Namenszuordnung gerendert. Die nicht benannten Elemente werden im unbenannten Slot der Komponente (dem Hauptteil) gerendert.

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

Das folgende Beispiel sollte den Inhalt der Slots in den entsprechenden Abschnitten anzeigen.

{{EmbedLiveSample('Named slot assignment','100', '220px')}}

### Zuweisung unbenannter Slots

Dieses Beispiel zeigt die [manuelle Slot-Zuweisung](/de/docs/Web/API/HTMLSlotElement/assign). Bei diesem Ansatz muss jedes Element manuell einem bestimmten Slot zugewiesen werden, indem [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) verwendet wird. Es gibt keine Standardzuweisung, sodass jeder Slot, der nicht zugewiesen wird, leer bleibt.

#### HTML

Zuerst haben wir eine versteckte Hinweiswarnung, die über JavaScript angezeigt wird, wenn der Browser `slotAssignment: "manual"` nicht unterstützt.

```html
<p id="support-warning" hidden>
  ⛔ Your browser doesn't support manual slot assignment (named assignment is
  used).
</p>
```

Als nächstes definieren wir unser benutzerdefiniertes `<my-article>` Element mit Kindelementen für Titel, Metadaten und Hauptinhalt. Jedes Kind wird durch `id` identifiziert; im Gegensatz zur benannten Slot-Zuweisung ist kein `slot`-Attribut erforderlich.

```html
<my-article>
  <span id="text_title">Text for the title slot</span>
  <span id="text_meta">Text for the meta slot</span>
  <p id="text_body_1">Text 1 for body slot.</p>
  <p id="text_body_2">Text 2 for body slot.</p>
</my-article>
```

#### JavaScript

Das benutzerdefinierte Element hängt eine Shadow-Root mit `slotAssignment: "manual"` an. Das Shadow-DOM enthält unbenannte Slots, die durch `id` identifiziert werden. Die Methode `assignSlots()` weist die Light-DOM-Elemente den Slots manuell zu. Beachten Sie, dass mehrere Knoten einem einzigen Slot zugewiesen werden können – die Reihenfolge, in der sie angegeben sind, bestimmt die Render-Reihenfolge.

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

Dieser Code testet, ob die [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)-Eigenschaft definiert ist und zeigt die Warnung an, wenn sie es nicht ist.

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

Das Beispiel unten sollte den Inhalt der Slots in den entsprechenden Abschnitten anzeigen.

{{EmbedLiveSample('Unnamed slot assignment','100', '220px')}}

> [!NOTE]
> Wenn die manuelle Slot-Zuweisung nicht unterstützt wird, wird eine Warnung angezeigt und der Browser verwendet die `named` Zuordnung. Da jedoch keines der Light-DOM-Elemente ein `slot`-Attribut hat, werden alle in den ersten unbenannten Slot (den Titel-Slot) eingefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode)
- [`ShadowRoot.delegatesFocus`](/de/docs/Web/API/ShadowRoot/delegatesFocus)
- [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment)
- Deklaratives Anfügen einer Shadow-Root mit dem [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) Attribut des [`<template>` Elements](/de/docs/Web/HTML/Reference/Elements/template)
- [Deklaratives Shadow-DOM](https://web.dev/articles/declarative-shadow-dom) auf web.dev (2023)
