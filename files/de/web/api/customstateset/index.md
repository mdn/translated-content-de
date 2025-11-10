---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Components")}}

Das **`CustomStateSet`**-Interface des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) und ermöglicht das Hinzufügen und Entfernen von Zuständen aus dem Set.

Das Interface kann verwendet werden, um die internen Zustände eines benutzerdefinierten Elements offenzulegen, sodass sie in CSS-Selektoren von Code verwendet werden können, der das Element benutzt.

## Instanzeigenschaften

- [`CustomStateSet.size`](/de/docs/Web/API/CustomStateSet/size)
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanzmethoden

- [`CustomStateSet.add()`](/de/docs/Web/API/CustomStateSet/add)
  - : Fügt einen Wert zum Set hinzu.
- [`CustomStateSet.clear()`](/de/docs/Web/API/CustomStateSet/clear)
  - : Entfernt alle Elemente aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.delete()`](/de/docs/Web/API/CustomStateSet/delete)
  - : Entfernt einen Wert aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.entries()`](/de/docs/Web/API/CustomStateSet/entries)
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `CustomStateSet` in Einfügereihenfolge zurück.
- [`CustomStateSet.forEach()`](/de/docs/Web/API/CustomStateSet/forEach)
  - : Führt eine bereitgestellte Funktion für jeden Wert im `CustomStateSet`-Objekt aus.
- [`CustomStateSet.has()`](/de/docs/Web/API/CustomStateSet/has)
  - : Gibt ein {{jsxref("Boolean")}} zurück, das angibt, ob ein Element mit dem gegebenen Wert vorhanden ist.
- [`CustomStateSet.keys()`](/de/docs/Web/API/CustomStateSet/keys)
  - : Ein Alias für [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values).
- [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `CustomStateSet`-Objekt in Einfügereihenfolge liefert.

## Beschreibung

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "enabled" und "disabled", "checked" und "unchecked", "initial", "loading" und "ready".
Einige dieser Zustände sind öffentlich und können über Eigenschaften/Attribute festgelegt oder abgefragt werden, während andere im Wesentlichen intern sind und nicht direkt festgelegt werden können.
Ob extern oder intern, Elementzustände können im Allgemeinen mit [CSS-Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) als Selektoren ausgewählt und gestylt werden.

Das `CustomStateSet` ermöglicht es Entwicklern, Zustände für autonome benutzerdefinierte Elemente hinzuzufügen und zu löschen (aber nicht für Elemente, die von eingebauten Elementen abgeleitet sind).
Diese Zustände können dann als benutzerdefinierte Zustands-Pseudoklassen-Selektoren ähnlich wie die Pseudoklassen für eingebaute Elemente verwendet werden.

### Festlegung benutzerdefinierter Elementzustände

Um das `CustomStateSet` verfügbar zu machen, muss ein benutzerdefiniertes Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen.
`CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben.
Beachten Sie, dass `ElementInternals` nicht an ein benutzerdefiniertes Element angehängt werden kann, das auf einem eingebauten Element basiert, sodass dieses Feature nur für autonome benutzerdefinierte Elemente funktioniert (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von Zustandswerten halten kann.
Jeder Wert ist ein benutzerdefinierter Bezeichner.
Bezeichner können zum Set hinzugefügt oder daraus gelöscht werden.
Wenn ein Bezeichner im Set vorhanden ist, ist der entsprechende Zustand `true`, während der Zustand `false` ist, wenn er entfernt wird.

Benutzerdefinierte Elemente, die Zustände mit mehr als zwei Werten haben, können sie mit mehreren booleschen Zuständen darstellen, von denen jeweils nur einer (`true`) zu einem Zeitpunkt im `CustomStateSet` vorhanden ist.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind aber von außerhalb der benutzerdefinierten Komponente nicht direkt zugänglich.

### Interaktion mit CSS

Sie können ein benutzerdefiniertes Element auswählen, das sich in einem bestimmten Zustand befindet, indem Sie die [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state) _benutzerdefinierte Zustands-Pseudoklasse_ verwenden.
Das Format dieser Pseudoklasse ist `:state(mein-zustandsname)`, wobei `mein-zustandsname` der im Element definierte Zustand ist.
Die benutzerdefinierte Zustands-Pseudoklasse passt nur, wenn der Zustand `true` ist (d.h. wenn `mein-zustandsname` im `CustomStateSet` vorhanden ist).

Zum Beispiel passt der folgende CSS-Code zu einem `labeled-checkbox`-benutzerdefinierten Element, wenn das `checked`-Element im `CustomStateSet` enthalten ist, und wendet einen `solid`-Rand auf das Kontrollkästchen an:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/Reference/Selectors/:host_function)-Pseudoklassen-Funktion angegeben wird.

Zusätzlich kann die `:state()` Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part)-Pseudoelement verwendet werden, um [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements abzugleichen, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die noch nicht `:state()` unterstützen, verwenden ein CSS `<dashed-ident>`, um benutzerdefinierte Zustände auszuwählen, was jetzt veraltet ist.
> Informationen dazu, wie beide Ansätze unterstützt werden können, finden Sie im Abschnitt [Kompatibilität mit `<dashed-ident>`-Syntax](#compatibility_with_dashed-ident_syntax) weiter unten.

## Beispiele

### Abgleich des benutzerdefinierten Zustands eines benutzerdefinierten Kontrollkästchenelements

Dieses Beispiel, das aus der Spezifikation adaptiert wurde, demonstriert ein benutzerdefiniertes Kontrollkästchenelement, das einen internen "checked"-Zustand hat.
Dieser wird dem benutzerdefinierten `checked`-Zustand zugeordnet, wodurch Stile mit der benutzerdefinierten `:state(checked)` Zustands-Pseudoklasse angewendet werden können.

#### JavaScript

Zuerst definieren wir unsere Klasse `LabeledCheckbox`, die von `HTMLElement` erbt.
Im Konstruktor rufen wir die Methode `super()` auf, fügen einen Listener für das Klickereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen.

Der Großteil der Arbeit wird dann `connectedCallback()` überlassen, das aufgerufen wird, wenn ein benutzerdefiniertes Element zur Seite hinzugefügt wird.
Der Inhalt des Elements wird unter Verwendung eines `<style>`-Elements als der Text `[]` oder `[x]` gefolgt von einem Label definiert.
Besonders hervorzuheben ist, dass die benutzerdefinierte Zustands-Pseudoklasse verwendet wird, um den anzuzeigenden Text auszuwählen: `:host(:state(checked))`.
Nach dem Beispiel unten werden wir genauer erläutern, was im Snippet passiert.

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

- In `get checked()` und `set checked()` verwenden wir `ElementInternals.states`, um das `CustomStateSet` zu erhalten.
- Die Methode `set checked(flag)` fügt den `"checked"`-Bezeichner dem `CustomStateSet` hinzu, wenn das Flag gesetzt ist, und löscht den Bezeichner, wenn das Flag `false` ist.
- Die Methode `get checked()` prüft lediglich, ob die `checked`-Eigenschaft im Set definiert ist.
- Der Eigenschaftswert wird umgeschaltet, wenn auf das Element geklickt wird.

Dann rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode auf dem Objekt auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nachdem wir das benutzerdefinierte Element registriert haben, können wir das Element im HTML verwenden wie gezeigt:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

#### CSS

Schließlich verwenden wir die benutzerdefinierte Zustands-Pseudoklasse `:state(checked)`, um CSS auszuwählen, wenn das Kästchen markiert ist.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

#### Ergebnis

Klicken Sie auf das Element, um einen anderen Rand zu sehen, der angewendet wird, wenn der `checked`-Zustand des Kontrollkästchens umgeschaltet wird.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Abgleich eines benutzerdefinierten Zustands in einem Shadow-Part eines benutzerdefinierten Elements

Dieses Beispiel, das aus der Spezifikation adaptiert wurde, zeigt, dass benutzerdefinierte Zustände verwendet werden können, um die [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements für das Styling anzusprechen.
Shadow-Parts sind Abschnitte des Shadow-Baums, die absichtlich für Seiten offengelegt werden, die das benutzerdefinierte Element verwenden.

Das Beispiel erstellt ein `<question-box>`-benutzerdefiniertes Element, das eine Frageaufforderung zusammen mit einem Kontrollkästchen mit der Beschriftung "Yes" anzeigt.
Das Element verwendet das `<labeled-checkbox>` aus dem [vorherigen Beispiel](#abgleich_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) für das Kontrollkästchen.

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

Zuerst definieren wir die benutzerdefinierte Elementklasse `QuestionBox`, die `HTMLElement` erweitert.
Wie immer ruft der Konstruktor zuerst die `super()`-Methode auf.
Als nächstes hängen wir einen Shadow-DOM-Baum an das benutzerdefinierte Element, indem wir [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufrufen.

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

Der Inhalt der Shadow-Root wird mit [`innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt.
Dies definiert ein {{HTMLElement("slot")}}-Element, das den Standard-Aufforderungstext "Question" für das Element enthält.
Dann definieren wir ein benutzerdefiniertes `<labeled-checkbox>`-Element mit dem Standardtext `"Yes"`.
Dieses Kontrollkästchen wird als Shadow-Part der Fragebox mit dem Namen `checkbox` mittels des [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attributs offengelegt.

Beachten Sie, dass der Code und das Styling für das `<labeled-checkbox>`-Element genau dieselben sind wie im [vorherigen Beispiel](#abgleich_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) und deshalb hier nicht wiederholt werden.

Als nächstes rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode auf dem Objekt auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element mit dem Namen `question-box` zu registrieren:

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

Der erste CSS-Block passt den offengelegten Shadow-Part mit dem Namen `checkbox` mit dem [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part)-Selektor an und stylt es standardmäßig `rot`.

```css
question-box::part(checkbox) {
  color: red;
}
```

Der zweite Block folgt `::part()` mit `:state()`, um `checkbox`-Parts zu matchen, die sich im `checked`-Zustand befinden:

```css
question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kontrollkästchen, um die Farbänderung von `rot` zu `grün` mit einer Umrandung zu sehen, wenn der `checked`-Zustand umgeschaltet wird.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie man den Fall behandelt, dass das benutzerdefinierte Element eine interne Eigenschaft mit mehreren möglichen Werten hat.

Das benutzerdefinierte Element in diesem Fall hat eine `state`-Eigenschaft mit den zulässigen Werten: "loading", "interactive" und "complete".
Um dies zum Laufen zu bringen, ordnen wir jeden Wert seinem benutzerdefinierten Zustand zu und erstellen Code, um sicherzustellen, dass nur der Bezeichner, der dem internen Zustand entspricht, gesetzt ist.
Sie können dies in der Implementierung der `set state()`-Methode sehen: Wir setzen den internen Zustand, fügen den Bezeichner für den passenden benutzerdefinierten Zustand dem `CustomStateSet` hinzu und entfernen die Bezeichner, die mit allen anderen Werten verbunden sind.

Der Großteil des restlichen Codes ähnelt dem Beispiel, das einen einzigen booleschen Zustand demonstriert (wir zeigen unterschiedlichen Text für jeden Zustand, während der Benutzer durch sie schaltet).

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

Nach der Registrierung des neuen Elements fügen wir es dem HTML hinzu.
Dies ähnelt dem Beispiel, das einen einzigen booleschen Zustand demonstriert, außer dass wir keinen Wert angeben und den Standardwert vom Slot verwenden (`<slot>Click me</slot>`).

```html
<many-state-element></many-state-element>
```

#### CSS

Im CSS verwenden wir die drei benutzerdefinierten Zustands-Pseudoklassen, um CSS für jeden der internen Zustandswerte auszuwählen: `:state(loading)`, `:state(interactive)`, `:state(complete)`.
Beachten Sie, dass der Code des benutzerdefinierten Elements sicherstellt, dass jeweils nur einer dieser benutzerdefinierten Zustände definiert sein kann.

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

Klicken Sie auf das Element, um einen anderen Rand zu sehen, der angewendet wird, wenn sich der Zustand ändert.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit `<dashed-ident>`-Syntax

Früher wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen mit einem `<dashed-ident>` anstelle der [`:state()`](/de/docs/Web/CSS/Reference/Selectors/:state)-Funktion ausgewählt.
Browserversionen, die `:state()` nicht unterstützen, werfen einen Fehler, wenn ein Bezeichner ohne den Doppelstrich-Präfix angegeben wird.
Wenn die Unterstützung für diese Browser erforderlich ist, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um beide Syntaxen zu unterstützen, oder verwenden Sie ein `<dashed-ident>` als Zustandswert und wählen Sie es sowohl mit dem `:--my-state` als auch dem `:state(--my-state)`-CSS-Selektor aus.

### Verwendung eines try...catch-Blocks

Dieser Code zeigt, wie Sie `try...catch` verwenden können, um zu versuchen, einen Zustandsbezeichner hinzuzufügen, der kein `<dashed-ident>` verwendet, und zu `<dashed-ident>` zurückzukehren, wenn ein Fehler geworfen wird.

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

### Verwendung von mit Doppelstrich präfixierten Bezeichnern

Eine alternative Lösung besteht darin, das `<dashed-ident>` innerhalb von JavaScript zu verwenden.
Der Nachteil dieses Ansatzes ist, dass die Striche auch bei der Verwendung der CSS-` :state()`-Syntax enthalten sein müssen.

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

[Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
