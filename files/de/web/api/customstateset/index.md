---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("Web Components")}}

Das **`CustomStateSet`**-Interface des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) und ermöglicht es, Zustände zur Liste hinzuzufügen und zu entfernen.

Das Interface kann verwendet werden, um die internen Zustände eines benutzerdefinierten Elements offenzulegen und deren Nutzung als CSS-Selektoren durch den Code, der das Element verwendet, zu ermöglichen.

## Instanz-Eigenschaften

- [`CustomStateSet.size`](/de/docs/Web/API/CustomStateSet/size)
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanz-Methoden

- [`CustomStateSet.add()`](/de/docs/Web/API/CustomStateSet/add)
  - : Fügt einen Wert zur Liste hinzu.
- [`CustomStateSet.clear()`](/de/docs/Web/API/CustomStateSet/clear)
  - : Entfernt alle Elemente aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.delete()`](/de/docs/Web/API/CustomStateSet/delete)
  - : Entfernt einen Wert aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.entries()`](/de/docs/Web/API/CustomStateSet/entries)
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `CustomStateSet` in Einfügereihenfolge zurück.
- [`CustomStateSet.forEach()`](/de/docs/Web/API/CustomStateSet/forEach)
  - : Führt für jeden Wert im `CustomStateSet`-Objekt eine bereitgestellte Funktion aus.
- [`CustomStateSet.has()`](/de/docs/Web/API/CustomStateSet/has)
  - : Gibt einen {{jsxref("Boolean")}} zurück, der angibt, ob ein Element mit dem gegebenen Wert vorhanden ist.
- [`CustomStateSet.keys()`](/de/docs/Web/API/CustomStateSet/keys)
  - : Ein Alias für [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values).
- [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `CustomStateSet`-Objekt in Einfügereihenfolge ausgibt.

## Beschreibung

HTML-Elemente können unterschiedliche _Zustände_ haben, wie "aktiviert" und "deaktiviert", "markiert" und "nicht markiert", "initial", "ladend" und "bereit". Einige dieser Zustände sind öffentlich und können über Eigenschaften/Attribute festgelegt oder abgefragt werden, während andere effektiv intern sind und nicht direkt eingestellt werden können. Unabhängig davon, ob sie extern oder intern sind, können Elementzustände im Allgemeinen mit [CSS-Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) als Selektoren ausgewählt und gestaltet werden.

Das `CustomStateSet` ermöglicht es Entwicklern, Zustände für autonome benutzerdefinierte Elemente hinzuzufügen und zu löschen (jedoch nicht für Elemente, die von integrierten Elementen abgeleitet sind). Diese Zustände können dann als benutzerdefinierte Zustandspseudoklassen-Selektoren verwendet werden, ähnlich den Pseudoklassen für integrierte Elemente.

### Benutzerdefinierte Elementzustände festlegen

Um das `CustomStateSet` verfügbar zu machen, muss ein benutzerdefiniertes Element zunächst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen. `CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben. Beachten Sie, dass `ElementInternals` nicht an ein benutzerdefiniertes Element angehängt werden kann, das auf einem integrierten Element basiert, sodass diese Funktion nur für autonome benutzerdefinierte Elemente funktioniert (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Liste von Zustandswerten halten kann. Jeder Wert ist ein benutzerdefinierter Bezeichner. Bezeichner können zur Liste hinzugefügt oder gelöscht werden. Wenn ein Bezeichner in der Liste vorhanden ist, ist der bestimmte Zustand `true`, und wenn er entfernt wird, ist er `false`.

Benutzerdefinierte Elemente, die Zustände mit mehr als zwei Werten haben, können diese mit mehreren booleschen Zuständen repräsentieren, von denen jeweils nur einer `true` (in `CustomStateSet` vorhanden) ist.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind jedoch außerhalb der benutzerdefinierten Komponente nicht direkt zugänglich.

### Interaktion mit CSS

Sie können ein benutzerdefiniertes Element auswählen, das sich in einem bestimmten Zustand befindet, indem Sie die [`:state()`](/de/docs/Web/CSS/:state) _benutzerdefinierte Zustandspseudoklasse_ verwenden. Das Format dieser Pseudoklasse ist `:state(my-state-name)`, wobei `my-state-name` der im Element definierte Zustand ist. Die benutzerdefinierte Zustandspseudoklasse stimmt mit dem benutzerdefinierten Element nur überein, wenn der Zustand `true` ist (d.h. wenn `my-state-name` in `CustomStateSet` vorhanden ist).

Beispielsweise passt der folgende CSS-Code zu einem benutzerdefinierten `labeled-checkbox`-Element, wenn das `CustomStateSet` des Elements den `checked`-Zustand enthält, und wendet einen `solid`-Rahmen auf das Kontrollkästchen an:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zuzuordnen, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklassenfunktion angegeben wird.

Zusätzlich kann die `:state()`-Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement verwendet werden, um die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements im speziellen Zustand abzugleichen.

> [!WARNING]
> Browser, die [`:state()`](/de/docs/Web/CSS/:state) noch nicht unterstützen, verwenden ein CSS `<dashed-ident>` zur Auswahl benutzerdefinierter Zustände, das jetzt veraltet ist. Informationen darüber, wie beide Ansätze unterstützt werden können, finden Sie im Abschnitt [Kompatibilität mit `<dashed-ident>`-Syntax](#compatibility_with_dashed-ident_syntax) unten.

## Beispiele

### Abgleich des benutzerdefinierten Zustands eines benutzerdefinierten Kontrollkästchenelements

Dieses Beispiel, das aus der Spezifikation angepasst wurde, zeigt ein benutzerdefiniertes Kontrollkästchenelement mit einem internen "checked"-Zustand. Dieser wird dem benutzerdefinierten `checked`-Zustand zugeordnet, sodass eine Stilgebung mit der `:state(checked)`-benutzerdefinierten Zustandspseudoklasse angewendet werden kann.

#### JavaScript

Zunächst definieren wir unsere Klasse `LabeledCheckbox`, die von `HTMLElement` abgeleitet wird. Im Konstruktor rufen wir die `super()`-Methode auf, fügen einen Listener für das `click`-Ereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen.

Der Großteil der "Arbeit" wird dann `connectedCallback()` überlassen, das aufgerufen wird, wenn ein benutzerdefiniertes Element zur Seite hinzugefügt wird. Der Inhalt des Elements wird mithilfe eines `<style>`-Elements definiert, das den Text `[]` oder `[x]` zusammen mit einem Etikett enthält. Bemerkenswert ist hier, dass die benutzerdefinierte Zustandspseudoklasse verwendet wird, um den anzuzeigenden Text auszuwählen: `:host(:state(checked))`. Nach dem Beispiel unten werden wir näher darauf eingehen, was im Ausschnitt passiert.

```js
class LabeledCheckbox extends HTMLElement {
  constructor() {
    super();
    this._boundOnClick = this._onClick.bind(this);
    this.addEventListener("click", this._boundOnClick);

    // Attach an ElementInternals to get states property
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<style>
  :host {
    display: block;
  }
  :host::before {
    content: "[ ]";
    white-space: pre;
    font-family: monospace;
  }
  :host(:state(checked))::before {
    content: "[x]";
  }
</style>
<slot>Label</slot>
`;
  }

  get checked() {
    return this._internals.states.has("checked");
  }

  set checked(flag) {
    if (flag) {
      this._internals.states.add("checked");
    } else {
      this._internals.states.delete("checked");
    }
  }

  _onClick(event) {
    // Toggle the 'checked' property when the element is clicked
    this.checked = !this.checked;
  }

  static isStateSyntaxSupported() {
    return CSS.supports("selector(:state(checked))");
  }
}

customElements.define("labeled-checkbox", LabeledCheckbox);

// Display a warning to unsupported browsers
if (!LabeledCheckbox.isStateSyntaxSupported()) {
  if (!document.getElementById("state-warning")) {
    const warning = document.createElement("div");
    warning.id = "state-warning";
    warning.style.color = "red";
    warning.textContent = "This feature is not supported by your browser.";
    document.body.insertBefore(warning, document.body.firstChild);
  }
}
```

In der `LabeledCheckbox`-Klasse:

- In den `get checked()` und `set checked()` verwenden wir `ElementInternals.states`, um das `CustomStateSet` abzurufen.
- Die Methode `set checked(flag)` fügt der `CustomStateSet` den `"checked"`-Bezeichner hinzu, wenn das Flag gesetzt ist, und entfernt den Bezeichner, wenn das Flag `false` ist.
- Die Methode `get checked()` überprüft einfach, ob die `checked`-Eigenschaft in der Liste definiert ist.
- Der Eigenschaftswert wird umgeschaltet, wenn auf das Element geklickt wird.

Wir rufen dann die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode auf dem Objekt auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nach der Registrierung des benutzerdefinierten Elements können wir das Element im HTML wie unten gezeigt verwenden:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

#### CSS

Schließlich verwenden wir die `:state(checked)`-benutzerdefinierte Zustandspseudoklasse, um CSS auszuwählen, wenn das Kästchen aktiviert ist.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

#### Ergebnis

Klicken Sie auf das Element, um zu sehen, wie ein anderer Rahmen angewendet wird, während der `checked`-Zustand des Kontrollkästchens umgeschaltet wird.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Abgleich eines benutzerdefinierten Zustands in einem Shadow-Part eines benutzerdefinierten Elements

Dieses Beispiel, das aus der Spezifikation angepasst wurde, zeigt, dass benutzerdefinierte Zustände verwendet werden können, um die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements für die Stilgebung zu adressieren. Shadow-Parts sind Abschnitte des Shadow-Baumes, die absichtlich für Seiten, die das benutzerdefinierte Element verwenden, offengelegt werden.

Das Beispiel erstellt ein `<question-box>`-benutzerdefiniertes Element, das eine Frageaufforderung zusammen mit einem Kontrollkästchen anzeigt, das mit "Yes" beschriftet ist. Das Element verwendet das im [vorherigen Beispiel](#abgleich_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) definierte `<labeled-checkbox>`-Element für das Kontrollkästchen.

#### JavaScript

```js hidden
class LabeledCheckbox extends HTMLElement {
  constructor() {
    super();
    this._boundOnClick = this._onClick.bind(this);
    this.addEventListener("click", this._boundOnClick);

    // Attach an ElementInternals to get states property
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<style>
  :host {
    display: block;
  }
  :host::before {
    content: "[ ]";
    white-space: pre;
    font-family: monospace;
  }
  :host(:state(checked))::before {
    content: "[x]";
  }
</style>
<slot>Label</slot>
`;
  }

  get checked() {
    return this._internals.states.has("checked");
  }

  set checked(flag) {
    if (flag) {
      this._internals.states.add("checked");
    } else {
      this._internals.states.delete("checked");
    }
  }

  _onClick(event) {
    // Toggle the 'checked' property when the element is clicked
    this.checked = !this.checked;
  }

  static isStateSyntaxSupported() {
    return CSS.supports("selector(:state(checked))");
  }
}

customElements.define("labeled-checkbox", LabeledCheckbox);

if (!LabeledCheckbox.isStateSyntaxSupported()) {
  if (!document.getElementById("state-warning")) {
    const warning = document.createElement("div");
    warning.id = "state-warning";
    warning.style.color = "red";
    warning.textContent = "This feature is not supported by your browser.";
    document.body.insertBefore(warning, document.body.firstChild);
  }
}
```

Zuerst definieren wir die benutzerdefinierte Elementklasse `QuestionBox`, die von `HTMLElement` erbt. Wie immer ruft der Konstruktor zuerst die `super()`-Methode auf. Als Nächstes fügen wir dem benutzerdefinierten Element einen Shadow-DOM-Baum hinzu, indem wir [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufrufen.

```js
class QuestionBox extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<div><slot>Question</slot></div>
<labeled-checkbox part="checkbox">Yes</labeled-checkbox>
`;
  }
}
```

Der Inhalt des Shadow-Roots wird mithilfe von [`innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) festgelegt. Dies definiert ein {{HTMLElement("slot")}}-Element, das den Standardaufforderungstext "Question" für das Element enthält. Wir definieren dann ein `<labeled-checkbox>`-benutzerdefiniertes Element mit dem Standardtext `"Yes"`. Dieses Kontrollkästchen wird als Shadow-Part der Fragebox mit dem Namen `checkbox` mithilfe des [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attributes offengelegt.

Beachten Sie, dass der Code und die Stilgebung für das `<labeled-checkbox>`-Element genau dieselben sind wie im [vorherigen Beispiel](#abgleich_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements), und daher hier nicht wiederholt werden.

Als Nächstes rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode auf dem Objekt auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element mit dem Namen `question-box` zu registrieren:

```js
customElements.define("question-box", QuestionBox);
```

#### HTML

Nach der Registrierung des benutzerdefinierten Elements können wir das Element im HTML wie unten gezeigt verwenden.

```html
<!-- Question box with default prompt "Question" -->
<question-box></question-box>

<!-- Question box with custom prompt "Continue?" -->
<question-box>Continue?</question-box>
```

#### CSS

Der erste Block von CSS stimmt mit dem offengelegten Shadow-Part mit dem Namen `checkbox` überein, indem er den [`::part()`](/de/docs/Web/CSS/::part)-Selektor verwendet und ihn standardmäßig auf `rot` stilisiert.

```css
question-box::part(checkbox) {
  color: red;
}
```

Der zweite Block folgt `::part()` mit `:state()`, um `checkbox`-Parts im `checked`-Zustand zu entsprechen:

```css
question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kontrollkästchen, um zu sehen, wie die Farbe von `rot` zu `grün` mit einer Umrandung wechselt, wenn der `checked`-Zustand umgeschaltet wird.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie ein benutzerdefiniertes Element mit einer internen Eigenschaft mit mehreren möglichen Werten umgegangen werden kann.

Das benutzerdefinierte Element in diesem Fall hat eine `state`-Eigenschaft mit zulässigen Werten: "loading", "interactive" und "complete". Um dies zu ermöglichen, wird jeder Wert seinem benutzerdefinierten Zustand zugeordnet und ein Code erstellt, um sicherzustellen, dass nur der Bezeichner, der dem internen Zustand entspricht, festgelegt ist. Sie können dies in der Implementierung der `set state()`-Methode sehen: Wir setzen den internen Zustand, fügen den Bezeichner für den übereinstimmenden benutzerdefinierten Zustand zu `CustomStateSet` hinzu und entfernen die Bezeichner, die mit allen anderen Werten verbunden sind.

Der Großteil des restlichen Codes ähnelt dem Beispiel, das einen einzigen booleschen Zustand demonstriert (wir zeigen unterschiedlichen Text für jeden Zustand an, während der Benutzer durch sie navigiert).

#### JavaScript

```js
class ManyStateElement extends HTMLElement {
  constructor() {
    super();
    this._boundOnClick = this._onClick.bind(this);
    this.addEventListener("click", this._boundOnClick);
    // Attach an ElementInternals to get states property
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    this.state = "loading";

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<style>
  :host {
    display: block;
    font-family: monospace;
  }
  :host::before {
    content: "[ unknown ]";
    white-space: pre;
  }
  :host(:state(loading))::before {
    content: "[ loading ]";
  }
  :host(:state(interactive))::before {
    content: "[ interactive ]";
  }
  :host(:state(complete))::before {
    content: "[ complete ]";
  }
</style>
<slot>Click me</slot>
`;
  }

  get state() {
    return this._state;
  }

  set state(stateName) {
    // Set internal state to passed value
    // Add identifier matching state and delete others
    if (stateName === "loading") {
      this._state = "loading";
      this._internals.states.add("loading");
      this._internals.states.delete("interactive");
      this._internals.states.delete("complete");
    } else if (stateName === "interactive") {
      this._state = "interactive";
      this._internals.states.delete("loading");
      this._internals.states.add("interactive");
      this._internals.states.delete("complete");
    } else if (stateName === "complete") {
      this._state = "complete";
      this._internals.states.delete("loading");
      this._internals.states.delete("interactive");
      this._internals.states.add("complete");
    }
  }

  _onClick(event) {
    // Cycle the state when element clicked
    if (this.state === "loading") {
      this.state = "interactive";
    } else if (this.state === "interactive") {
      this.state = "complete";
    } else if (this.state === "complete") {
      this.state = "loading";
    }
  }

  static isStateSyntaxSupported() {
    return CSS.supports("selector(:state(loading))");
  }
}

customElements.define("many-state-element", ManyStateElement);

if (!LabeledCheckbox.isStateSyntaxSupported()) {
  if (!document.getElementById("state-warning")) {
    const warning = document.createElement("div");
    warning.id = "state-warning";
    warning.style.color = "red";
    warning.textContent = "This feature is not supported by your browser.";
    document.body.insertBefore(warning, document.body.firstChild);
  }
}
```

#### HTML

Nach der Registrierung des neuen Elements fügen wir es dem HTML hinzu. Dies ähnelt dem Beispiel, das einen einzelnen booleschen Zustand demonstriert, außer dass wir keinen Wert angeben und den Standardwert aus dem Slot (`<slot>Click me</slot>`) verwenden.

```html
<many-state-element></many-state-element>
```

#### CSS

Im CSS verwenden wir die drei benutzerdefinierten Zustandspseudoklassen, um CSS für jeden der internen Zustandswerte auszuwählen: `:state(loading)`, `:state(interactive)`, `:state(complete)`. Beachten Sie, dass der Code des benutzerdefinierten Elements sicherstellt, dass jeweils nur einer dieser benutzerdefinierten Zustände definiert sein kann.

```css
many-state-element:state(loading) {
  border: dotted grey;
}
many-state-element:state(interactive) {
  border: dashed blue;
}
many-state-element:state(complete) {
  border: solid green;
}
```

#### Ergebnisse

Klicken Sie auf das Element, um zu sehen, wie ein anderer Rahmen angewendet wird, während sich der Zustand ändert.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit `<dashed-ident>`-Syntax

Zuvor wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen mithilfe eines `<dashed-ident>` anstelle der [`:state()`](/de/docs/Web/CSS/:state)-Funktion ausgewählt. Browser-Versionen, die `:state()` nicht unterstützen, werfen einen Fehler, wenn ein Identifizierer angegeben wird, der nicht mit der doppelten Bindestrich-Präfix versehen ist. Wenn Unterstützung für diese Browser erforderlich ist, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um beide Syntaxen zu unterstützen, oder verwenden Sie ein `<dashed-ident>` als Wert des Zustands und wählen Sie es mit sowohl dem `:--my-state` als auch dem `:state(--my-state)` CSS-Selektor.

### Verwendung eines try...catch-Blocks

Dieser Code zeigt, wie `try...catch` verwendet werden kann, um zu versuchen, einen Zustandsbezeichner hinzuzufügen, der kein `<dashed-ident>` verwendet, und auf `<dashed-ident>` zurückzugreifen, wenn ein Fehler auftritt.

#### JavaScript

```js
class CompatibleStateElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    // The double dash is required in browsers with the
    // legacy syntax, not supplying it will throw
    try {
      this._internals.states.add("loaded");
    } catch {
      this._internals.states.add("--loaded");
    }
  }
}
```

#### CSS

```css
compatible-state-element:is(:--loaded, :state(loaded)) {
  border: solid green;
}
```

### Verwendung von doppeltem Bindestrich präfixierten Identifikatoren

Eine alternative Lösung kann darin bestehen, das `<dashed-ident>` innerhalb von JavaScript zu verwenden. Der Nachteil dieses Ansatzes ist, dass die Bindestriche bei Verwendung der CSS-`:state()`-Syntax enthalten sein müssen.

#### JavaScript

```js
class CompatibleStateElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }
  connectedCallback() {
    // The double dash is required in browsers with the
    // legacy syntax, but works with the modern syntax
    this._internals.states.add("--loaded");
  }
}
```

#### CSS

```css
compatible-state-element:is(:--loaded, :state(--loaded)) {
  border: solid green;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
