---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("Web Components")}}

Die **`CustomStateSet`**-Schnittstelle des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) und ermöglicht das Hinzufügen und Entfernen von Zuständen aus der Menge.

Die Schnittstelle kann verwendet werden, um die internen Zustände eines benutzerdefinierten Elements offenzulegen, sodass sie in CSS-Selektoren durch den Code verwendet werden können, der das Element nutzt.

## Instanz-Eigenschaften

- [`CustomStateSet.size`](/de/docs/Web/API/CustomStateSet/size)
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanz-Methoden

- [`CustomStateSet.add()`](/de/docs/Web/API/CustomStateSet/add)
  - : Fügt einen Wert zur Menge hinzu.
- [`CustomStateSet.clear()`](/de/docs/Web/API/CustomStateSet/clear)
  - : Entfernt alle Elemente aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.delete()`](/de/docs/Web/API/CustomStateSet/delete)
  - : Entfernt ein Element aus dem `CustomStateSet`-Objekt.
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
Einige dieser Zustände sind öffentlich und können über Eigenschaften/Attribute gesetzt oder abgefragt werden, während andere effektiv intern sind und nicht direkt gesetzt werden können.
Unabhängig davon, ob extern oder intern, können Elementzustände im Allgemeinen mithilfe von [CSS-Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) als Selektoren ausgewählt und formatiert werden.

Das `CustomStateSet` ermöglicht Entwicklern das Hinzufügen und Löschen von Zuständen für autonome benutzerdefinierte Elemente (nicht jedoch für Elemente, die von eingebauten Elementen abgeleitet sind).
Diese Zustände können dann als benutzerdefinierte Zustand-Pseudoklassen-Selektoren auf ähnliche Weise wie die Pseudoklassen für eingebaute Elemente verwendet werden.

### Einstellen von benutzerdefinierten Elementzuständen

Um das `CustomStateSet` verfügbar zu machen, muss ein benutzerdefiniertes Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zu verbinden.
`CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben.
Es ist zu beachten, dass `ElementInternals` nicht an ein benutzerdefiniertes Element angehängt werden kann, das auf einem eingebauten Element basiert, sodass diese Funktion nur für autonome benutzerdefinierte Elemente funktioniert (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von Zustandswerten halten kann.
Jeder Wert ist ein benutzerdefinierter Bezeichner.
Bezeichner können der Menge hinzugefügt oder gelöscht werden.
Wenn ein Bezeichner in der Menge vorhanden ist, ist dieser Zustand `true`, während, wenn er entfernt wird, der Zustand `false` ist.

Benutzerdefinierte Elemente mit Zuständen, die mehr als zwei Werte haben, können sie durch mehrere boolesche Zustände darstellen, von denen nur einer gleichzeitig `true` (im `CustomStateSet` vorhanden) ist.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind aber außerhalb der benutzerdefinierten Komponente nicht direkt zugänglich.

### Interaktion mit CSS

Sie können ein benutzerdefiniertes Element auswählen, das sich in einem bestimmten Zustand befindet, indem Sie die [`:state()`](/de/docs/Web/CSS/:state) _benutzerdefinierte Zustand-Pseudoklasse_ verwenden.
Das Format dieser Pseudoklasse ist `:state(mein-zustandsname)`, wobei `mein-zustandsname` der Zustand ist, wie im Element definiert.
Die benutzerdefinierte Zustand-Pseudoklasse stimmt nur mit dem benutzerdefinierten Element überein, wenn der Zustand `true` ist (d. h., wenn `mein-zustandsname` im `CustomStateSet` vorhanden ist).

Zum Beispiel passt das folgende CSS zu einem `labeled-checkbox`-benutzerdefinierten Element, wenn das `CustomStateSet` des Elements den `checked`-Zustand enthält, und wendet einen `solid`-Rahmen auf die Checkbox an:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Schatten-DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zuzuordnen, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklassen-Funktion angegeben wird.

Zusätzlich kann die `:state()` Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Element verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements abzugleichen, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die [`:state()`](/de/docs/Web/CSS/:state) noch nicht unterstützen, verwenden ein CSS-`<dashed-ident>` zur Auswahl benutzerdefinierter Zustände, das nun veraltet ist.
> Informationen darüber, wie beide Ansätze unterstützt werden können, finden Sie im Abschnitt [Kompatibilität mit `<dashed-ident>`-Syntax](#compatibility_with_dashed-ident_syntax) weiter unten.

## Beispiele

### Abgleichen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements

Dieses Beispiel, das aus der Spezifikation angepasst wurde, demonstriert ein benutzerdefiniertes Checkbox-Element, das einen internen "checked"-Zustand hat.
Dieser Zustand wird dem benutzerdefinierten `checked`-Zustand zugeordnet, sodass das Styling mithilfe der benutzerdefinierten `:state(checked)`-Zustands-Pseudoklasse angewendet werden kann.

#### JavaScript

Zuerst definieren wir unsere Klasse `LabeledCheckbox`, die sich von `HTMLElement` ableitet.
Im Konstruktor rufen wir die `super()`-Methode auf, fügen einen Listener für das Klick-Ereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen.

Der größte Teil der weiteren "Arbeit" wird dann `connectedCallback()` überlassen, das aufgerufen wird, wenn ein benutzerdefiniertes Element zur Seite hinzugefügt wird.
Der Inhalt des Elements wird mithilfe eines `<style>`-Elements definiert, welches den Text `[]` oder `[x]` gefolgt von einem Label enthält.
Bemerkenswert ist hier, dass die benutzerdefinierte Zustand-Pseudoklasse verwendet wird, um den anzuzeigenden Text auszuwählen: `:host(:state(checked))`.
Nach dem folgenden Beispiel werden wir detaillierter erläutern, was im Snippet passiert.

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
document.addEventListener("DOMContentLoaded", () => {
  if (!LabeledCheckbox.isStateSyntaxSupported()) {
    if (!document.getElementById("state-warning")) {
      const warning = document.createElement("div");
      warning.id = "state-warning";
      warning.style.color = "red";
      warning.textContent = "This feature is not supported by your browser.";
      document.body.insertBefore(warning, document.body.firstChild);
    }
  }
});
```

In der `LabeledCheckbox`-Klasse:

- In `get checked()` und `set checked()` verwenden wir `ElementInternals.states`, um das `CustomStateSet` zu erhalten.
- Die Methode `set checked(flag)` fügt den `"checked"`-Bezeichner zur Menge `CustomStateSet` hinzu, wenn die Flagge gesetzt ist, und entfernt den Bezeichner, wenn die Flagge `false` ist.
- Die `get checked()`-Methode prüft lediglich, ob die `checked`-Eigenschaft in der Menge definiert ist.
- Der Eigenschaftswert wird umgeschaltet, wenn das Element angeklickt wird.

Wir rufen dann die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode auf dem von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegebenen Objekt auf, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nach der Registrierung des benutzerdefinierten Elements können wir das Element im HTML wie folgt verwenden:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

#### CSS

Schließlich verwenden wir die `:state(checked)` benutzerdefinierte Zustand-Pseudoklasse, um CSS auszuwählen, wenn das Kästchen angekreuzt ist.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

#### Ergebnis

Klicken Sie auf das Element, um zu sehen, wie ein anderer Rahmen angewendet wird, während der `checked`-Zustand der Checkbox umgeschaltet wird.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Abgleichen eines benutzerdefinierten Zustands in einem Schatten-Teil eines benutzerdefinierten Elements

Dieses Beispiel, das aus der Spezifikation angepasst wurde, demonstriert, dass benutzerdefinierte Zustände verwendet werden können, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zum Stylen anzuvisieren.
Schatten-Teile sind Abschnitte des Schattendoms, die absichtlich für Seiten freigegeben sind, die das benutzerdefinierte Element verwenden.

Das Beispiel erstellt ein `<question-box>` benutzerdefiniertes Element, das eine Frageaufforderung zusammen mit einer Checkbox mit der Aufschrift "Yes" anzeigt.
Das Element verwendet das `<labeled-checkbox>` aus dem [vorherigen Beispiel](#abgleichen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_checkbox-elements) für das Kontrollkästchen.

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

document.addEventListener("DOMContentLoaded", () => {
  if (!LabeledCheckbox.isStateSyntaxSupported()) {
    if (!document.getElementById("state-warning")) {
      const warning = document.createElement("div");
      warning.id = "state-warning";
      warning.style.color = "red";
      warning.textContent = "This feature is not supported by your browser.";
      document.body.insertBefore(warning, document.body.firstChild);
    }
  }
});
```

Zuerst definieren wir die benutzerdefinierte Elementklasse `QuestionBox`, die `HTMLElement` erweitert.
Wie immer ruft der Konstruktor zuerst die `super()`-Methode auf.
Als Nächstes hängen wir einen Schatten-Dom-Baum an das benutzerdefinierte Element an, indem wir [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufrufen.

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

Der Inhalt der Schattenwurzel wird mit [`innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) festgelegt.
Dies definiert ein {{HTMLElement("slot")}}-Element, das den Standardtext "Question" für das Element enthält.
Dann definieren wir ein `<labeled-checkbox>` benutzerdefiniertes Element mit dem Standardtext `"Yes"`.
Dieses Kontrollkästchen wird als Schatten-Teil der Fragenbox mit dem Namen `checkbox` unter Verwendung des [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attributs offengelegt.

Beachten Sie, dass der Code und das Styling für das `<labeled-checkbox>`-Element genau dasselbe sind wie im [vorherigen Beispiel](#abgleichen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_checkbox-elements) und hier daher nicht wiederholt werden.

Anschließend rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode auf dem vom [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegebenen Objekt auf, um das benutzerdefinierte Element mit dem Namen `question-box` zu registrieren:

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

Der erste Block CSS wählt den freigegebenen Schatten-Teil mit dem Namen `checkbox` mit dem [`::part()`](/de/docs/Web/CSS/::part)-Selektor aus und formatiert ihn standardmäßig in `red`.

```css
question-box::part(checkbox) {
  color: red;
}
```

Der zweite Block folgt `::part()` mit `:state()`, um `checkbox`-Teile abzugleichen, die sich im `checked`-Zustand befinden:

```css
question-box::part(checkbox):state(checked) {
  color: green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kontrollkästchen, um zu sehen, wie sich die Farbe von `red` zu `green` ändert, wenn der `checked`-Zustand umgeschaltet wird.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie der Fall behandelt wird, in dem das benutzerdefinierte Element eine interne Eigenschaft mit mehreren möglichen Werten hat.

Das benutzerdefinierte Element hat in diesem Fall eine `state`-Eigenschaft mit erlaubten Werten: "loading", "interactive" und "complete".
Um dies zu ermöglichen, ordnen wir jeden Wert seinem benutzerdefinierten Zustand zu und erstellen Code, um sicherzustellen, dass nur der Bezeichner, der dem internen Zustand entspricht, gesetzt ist.
Sie können dies in der Implementierung der `set state()`-Methode sehen: Wir setzen den internen Zustand, fügen den Bezeichner für den passenden benutzerdefinierten Zustand dem `CustomStateSet` hinzu und entfernen die Bezeichner, die mit allen anderen Werten assoziiert sind.

Der größte Teil des restlichen Codes ist dem Beispiel ähnlich, das einen einzelnen booleschen Zustand demonstriert (wir zeigen unterschiedlichen Text für jeden Zustand, wenn der Benutzer durch sie schaltet).

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

document.addEventListener("DOMContentLoaded", () => {
  if (!LabeledCheckbox.isStateSyntaxSupported()) {
    if (!document.getElementById("state-warning")) {
      const warning = document.createElement("div");
      warning.id = "state-warning";
      warning.style.color = "red";
      warning.textContent = "This feature is not supported by your browser.";
      document.body.insertBefore(warning, document.body.firstChild);
    }
  }
});
```

#### HTML

Nach der Registrierung des neuen Elements fügen wir es dem HTML hinzu.
Dies ist dem Beispiel für einen einzigen booleschen Zustand ähnlich, außer dass wir keinen Wert angeben und den Standardwert aus dem Slot verwenden (`<slot>Click me</slot>`).

```html
<many-state-element></many-state-element>
```

#### CSS

Im CSS verwenden wir die drei benutzerdefinierten Zustand-Pseudoklassen, um CSS für jeden der internen Zustandswerte auszuwählen: `:state(loading)`, `:state(interactive)`, `:state(complete)`.
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

Klicken Sie auf das Element, um zu sehen, wie ein anderer Rahmen angewendet wird, wenn sich der Zustand ändert.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit `<dashed-ident>`-Syntax

Früher wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen mit einem `<dashed-ident>` anstelle der [`:state()`](/de/docs/Web/CSS/:state)-Funktion ausgewählt.
Browserversionen, die `:state()` nicht unterstützen, werfen einen Fehler, wenn ihnen ein Identifikator ohne den doppelten Bindestrich übergeben wird.
Wenn eine Unterstützung für diese Browser erforderlich ist, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um beide Syntaxen zu unterstützen, oder verwenden Sie einen `<dashed-ident>` als Wert des Zustands und wählen Sie ihn mit dem `:--my-state` und `:state(--my-state)` CSS-Selektor aus.

### Verwendung eines try...catch-Blocks

Dieser Code zeigt, wie Sie `try...catch` verwenden können, um zu versuchen, einen Zustandsbezeichner hinzuzufügen, der keinen `<dashed-ident>` verwendet, und auf `<dashed-ident>` zurückzugreifen, wenn ein Fehler geworfen wird.

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

### Verwendung von Doppelpfeil-präfixierten Idents

Eine alternative Lösung kann sein, das `<dashed-ident>` innerhalb von JavaScript zu verwenden.
Der Nachteil bei diesem Ansatz ist, dass die Dashes bei der Verwendung der CSS-`:state()`-Syntax eingeschlossen werden müssen.

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
