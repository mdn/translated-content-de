---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Web Components")}}

Die **`CustomStateSet`**-Schnittstelle des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) und ermöglicht es, Zustände hinzuzufügen und aus dem Satz zu entfernen.

Die Schnittstelle kann verwendet werden, um die internen Zustände eines benutzerdefinierten Elements offenzulegen und sie in CSS-Selektoren durch Code, der das Element verwendet, zu nutzen.

## Instanz-Eigenschaften

- [`CustomStateSet.size`](/de/docs/Web/API/CustomStateSet/size)
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanz-Methoden

- [`CustomStateSet.add()`](/de/docs/Web/API/CustomStateSet/add)
  - : Fügt dem Satz einen Wert hinzu.
- [`CustomStateSet.clear()`](/de/docs/Web/API/CustomStateSet/clear)
  - : Entfernt alle Elemente aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.delete()`](/de/docs/Web/API/CustomStateSet/delete)
  - : Entfernt einen Wert aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.entries()`](/de/docs/Web/API/CustomStateSet/entries)
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `CustomStateSet` in Einfügereihenfolge zurück.
- [`CustomStateSet.forEach()`](/de/docs/Web/API/CustomStateSet/forEach)
  - : Führt eine bereitgestellte Funktion für jeden Wert im `CustomStateSet`-Objekt aus.
- [`CustomStateSet.has()`](/de/docs/Web/API/CustomStateSet/has)
  - : Gibt ein {{jsxref("Boolean")}} zurück, das angibt, ob ein Element mit dem angegebenen Wert vorhanden ist.
- [`CustomStateSet.keys()`](/de/docs/Web/API/CustomStateSet/keys)
  - : Ein Alias für [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values).
- [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `CustomStateSet`-Objekt in Einfügereihenfolge liefert.

## Beschreibung

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "aktiviert" und "deaktiviert", "ausgewählt" und "nicht ausgewählt", "initial", "lädt" und "bereit".
Einige dieser Zustände sind öffentlich und können über Eigenschaften/Attribute gesetzt oder abgefragt werden, während andere effektiv intern sind und nicht direkt gesetzt werden können.
Ob extern oder intern, Elementzustände können im Allgemeinen mit [CSS-Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) als Selektoren ausgewählt und gestylt werden.

Das `CustomStateSet` ermöglicht es Entwicklern, Zustände für autonome benutzerdefinierte Elemente hinzuzufügen und zu löschen (aber nicht für von eingebauten Elementen abgeleitete Elemente).
Diese Zustände können dann als benutzerdefinierte Zustands-Pseudoklassen-Selektoren verwendet werden, ähnlich wie die Pseudoklassen für eingebaute Elemente.

### Benutzerdefinierte Elementzustände einstellen

Um das `CustomStateSet` verfügbar zu machen, muss ein benutzerdefiniertes Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen.
`CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben.
Beachten Sie, dass `ElementInternals` nicht an ein benutzerdefiniertes Element angehängt werden kann, das auf einem eingebauten Element basiert, sodass diese Funktion nur für autonome benutzerdefinierte Elemente funktioniert (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das einen geordneten Satz von Zustandswerten halten kann.
Jeder Wert ist ein benutzerdefinierter Bezeichner.
Bezeichner können dem Satz hinzugefügt oder daraus gelöscht werden.
Wenn ein Bezeichner im Satz vorhanden ist, ist der entsprechende Zustand `true`, während er entfernt wird, ist der Zustand `false`.

Benutzerdefinierte Elemente, die Zustände mit mehr als zwei Werten haben, können diese durch mehrere boolesche Zustände darstellen, von denen immer nur einer `true` ist (im `CustomStateSet` vorhanden) zur gleichen Zeit.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind aber außerhalb der benutzerdefinierten Komponente nicht direkt zugänglich.

### Interaktion mit CSS

Sie können ein benutzerdefiniertes Element, das sich in einem bestimmten Zustand befindet, mit der [`:state()`](/de/docs/Web/CSS/:state) _benutzerdefinierte Zustands-Pseudoklasse_ auswählen.
Das Format dieser Pseudoklasse ist `:state(mystatename)`, wobei `mystatename` der im Element definierte Zustand ist.
Die benutzerdefinierte Zustands-Pseudoklasse stimmt nur überein, wenn der Zustand `true` ist (d. h. wenn `mystatename` im `CustomStateSet` vorhanden ist).

Zum Beispiel stimmt das folgende CSS mit einem `labeled-checkbox`-benutzerdefiniertem Element überein, wenn das Element `CustomStateSet` den Zustand `checked` enthält, und wendet einen `soliden` Rahmen auf das Kontrollkästchen an:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch verwendet werden, um mit einem benutzerdefinierten Zustand übereinzustimmen [innerhalb eines Shadow DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom), indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklasse angegeben wird.

Zusätzlich kann die `:state()` Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement verwendet werden, um die [Shadow-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements abzustimmen, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die [`:state()`](/de/docs/Web/CSS/:state) noch nicht unterstützen, verwenden einen CSS-`<dashed-ident>` zum Auswählen benutzerdefinierter Zustände, was jetzt veraltet ist.
> Informationen zur Unterstützung beider Ansätze finden Sie im Abschnitt [Kompatibilität mit dem `<dashed-ident>`-Syntax](#compatibility_with_dashed-ident_syntax) unten.

## Beispiele

### Abstimmen des benutzerdefinierten Zustands eines benutzerdefinierten Kontrollkästchenelements

Dieses Beispiel, das aus der Spezifikation angepasst wurde, zeigt ein benutzerdefiniertes Kontrollkästchenelement, das einen internen "checked"-Zustand hat.
Dieser wird dem `checked` benutzerdefinierten Zustand zugeordnet, um es zu ermöglichen, mit der `:state(checked)`-benutzerdefinierten Zustands-Pseudoklasse Stil anzuwenden.

#### JavaScript

Zuerst definieren wir unsere Klasse `LabeledCheckbox`, die von `HTMLElement` abgeleitet ist.
Im Konstruktor rufen wir die `super()`-Methode auf, fügen einen Listener für das Klick-Ereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen.

Der größte Teil der "Arbeit" wird dann `connectedCallback()` überlassen, das aufgerufen wird, wenn ein benutzerdefiniertes Element zur Seite hinzugefügt wird.
Der Inhalt des Elements wird mit einem `<style>`-Element definiert, das den Text `[]` oder `[x]` gefolgt von einem Label enthält.
Bemerkenswert ist hier, dass die benutzerdefinierte Zustands-Pseudoklasse verwendet wird, um den anzuzeigenden Text auszuwählen: `:host(:state(checked))`.
Nach dem folgenden Beispiel werden wir im Detail behandeln, was im Codeausschnitt passiert.

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
- Die Methode `set checked(flag)` fügt den `"checked"` Bezeichner zum `CustomStateSet` hinzu, wenn das Flag gesetzt ist und löscht den Bezeichner, wenn das Flag `false` ist.
- Die Methode `get checked()` prüft nur, ob die `checked`-Eigenschaft im Satz definiert ist.
- Der Eigenschaftswert wird umgeschaltet, wenn auf das Element geklickt wird.

Wir rufen dann die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode des Objekts auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nachdem das benutzerdefinierte Element registriert wurde, können wir das Element in HTML wie gezeigt verwenden:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

#### CSS

Schließlich verwenden wir die `:state(checked)`-benutzerdefinierte Zustands-Pseudoklasse, um CSS auszuwählen, wenn das Kästchen aktiviert ist.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

#### Ergebnis

Klicken Sie auf das Element, um zu sehen, wie ein anderer Rahmen angewendet wird, wenn der `checked`-Zustand des Kontrollkästchens umgeschaltet wird.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Abstimmen eines benutzerdefinierten Zustands in einem Shadow-Teil eines benutzerdefinierten Elements

Dieses Beispiel, das aus der Spezifikation angepasst wurde, demonstriert, dass benutzerdefinierte Zustände verwendet werden können, um die [Shadow-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements für das Styling zu Ziel zu machen.
Shadow-Teile sind Abschnitte des Shadow-Baums, die absichtlich für Seiten exponiert werden, die das benutzerdefinierte Element verwenden.

Das Beispiel erstellt ein `<question-box>`-benutzerdefiniertes Element, das einen Fragen-Prompt zusammen mit einem Kontrollkästchen mit der Bezeichnung "Yes" anzeigt.
Das Element verwendet das `<labeled-checkbox>` aus dem [vorherigen Beispiel](#abstimmen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) für das Kontrollkästchen.

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

Zuerst definieren wir die benutzerdefinierte Elementklasse `QuestionBox`, die von `HTMLElement` abgeleitet ist.
Wie immer ruft der Konstruktor zuerst die `super()`-Methode auf.
Anschließend hängen wir einen Shadow DOM-Baum an das benutzerdefinierte Element an, indem wir [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufrufen.

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
Dies definiert ein {{HTMLElement("slot")}}-Element, das den Standard-Fragen-Promttext "Question" für das Element enthält.
Dann definieren wir ein `<labeled-checkbox>`-benutzerdefiniertes Element mit dem Standardtext `"Yes"`.
Dieses Kontrollkästchen wird als Shadow-Teil der Fragenbox mit dem Namen `checkbox` über das [`part`](/de/docs/Web/HTML/Global_attributes#part)-Attribut freigelegt.

Beachten Sie, dass der Code und das Styling für das `<labeled-checkbox>`-Element genau die gleichen wie im [vorherigen Beispiel](#abstimmen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) sind und daher hier nicht wiederholt werden.

Anschließend rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode des Objekts auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element mit dem Namen `question-box` zu registrieren:

```js
customElements.define("question-box", QuestionBox);
```

#### HTML

Nachdem das benutzerdefinierte Element registriert wurde, können wir das Element im HTML wie unten gezeigt verwenden.

```html
<!-- Question box with default prompt "Question" -->
<question-box></question-box>

<!-- Question box with custom prompt "Continue?" -->
<question-box>Continue?</question-box>
```

#### CSS

Der erste CSS-Block passt den freigelegten Shadow-Teil mit dem Namen `checkbox` mit dem [`::part()`](/de/docs/Web/CSS/::part)-Selektor an, was ihn standardmäßig in `rot` stylt.

```css
question-box::part(checkbox) {
  color: red;
}
```

Der zweite Block folgt `::part()` mit `:state()`, um `checkbox`-Teile zuzuordnen, die sich im `checked`-Zustand befinden:

```css
question-box::part(checkbox):state(checked) {
  color: green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kontrollkästchen, um zu sehen, wie die Farbe von `rot` zu `grün` wechselt, wenn der `checked`-Zustand umgeschaltet wird.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie mit dem Fall umzugehen ist, in dem das benutzerdefinierte Element eine interne Eigenschaft mit mehreren möglichen Werten hat.

Das benutzerdefinierte Element in diesem Fall hat eine `state`-Eigenschaft mit erlaubten Werten: "loading", "interactive" und "complete".
Um dies zu erreichen, ordnen wir jeden Wert seinem benutzerdefinierten Zustand zu und erstellen Code, um sicherzustellen, dass nur der Bezeichner, der dem internen Zustand entspricht, gesetzt ist.
Sie können dies in der Implementierung der `set state()`-Methode sehen: Wir setzen den internen Zustand, fügen den Bezeichner für den passenden benutzerdefinierten Zustand zum `CustomStateSet` hinzu und entfernen die Bezeichner, die mit allen anderen Werten verknüpft sind.

Der meiste restliche Code ähnelt dem Beispiel, das einen einzelnen booleschen Zustand demonstriert (wir zeigen für jeden Zustand unterschiedlichen Text, während der Benutzer zwischen ihnen umschaltet).

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

Nachdem das neue Element registriert wurde, fügen wir es dem HTML hinzu.
Dies ähnelt dem Beispiel, das einen einzelnen booleschen Zustand demonstriert, außer dass wir keinen Wert angeben und den Standardwert aus dem Slot verwenden (`<slot>Click me</slot>`).

```html
<many-state-element></many-state-element>
```

#### CSS

Im CSS verwenden wir die drei benutzerdefinierten Zustands-Pseudoklassen, um CSS für jeden der internen Zustandswerte auszuwählen: `:state(loading)`, `:state(interactive)`, `:state(complete)`.
Beachten Sie, dass der Code für das benutzerdefinierte Element sicherstellt, dass jeweils nur einer dieser benutzerdefinierten Zustände definiert sein kann.

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

Klicken Sie auf das Element, um zu sehen, wie ein unterschiedlicher Rahmen angewendet wird, wenn sich der Zustand ändert.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit dem `<dashed-ident>`-Syntax

Zuvor wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen mit einem `<dashed-ident>` statt der [`:state()`](/de/docs/Web/CSS/:state)-Funktion ausgewählt.
Browser-Versionen, die `:state()` nicht unterstützen, werfen einen Fehler, wenn ein Bezeichner übergeben wird, der nicht mit dem Doppeldash präfixiert ist.
Wenn Unterstützung für diese Browser erforderlich ist, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um beide Syntaxen zu unterstützen, oder verwenden Sie einen `<dashed-ident>` als Wert des Zustands und wählen Sie ihn sowohl mit dem `:--mystate` als auch mit dem `:state(--mystate)` CSS-Selektor aus.

### Verwendung eines try...catch-Blocks

Dieser Code zeigt, wie Sie `try...catch` verwenden können, um zu versuchen, einen Zustandsbezeichner hinzuzufügen, der kein `<dashed-ident>` verwendet, und auf `<dashed-ident>` zurückzugreifen, wenn ein Fehler ausgelöst wird.

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

### Verwendung von doppelstrichpräfixierten Bezeichnern

Eine alternative Lösung könnte sein, das `<dashed-ident>` innerhalb von JavaScript zu verwenden.
Der Nachteil dieses Ansatzes ist, dass die Striche einbezogen werden müssen, wenn die CSS-`:state()`-Syntax verwendet wird.

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
