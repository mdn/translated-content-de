---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Components")}}

Das **`CustomStateSet`**-Interface des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) und ermöglicht das Hinzufügen und Entfernen von Zuständen aus dem Set.

Das Interface kann verwendet werden, um die internen Zustände eines benutzerdefinierten Elements offenzulegen, sodass sie in CSS-Selektoren von Code verwendet werden können, der das Element verwendet.

## Instanz-Eigenschaften

- [`CustomStateSet.size`](/de/docs/Web/API/CustomStateSet/size)
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanz-Methoden

- [`CustomStateSet.add()`](/de/docs/Web/API/CustomStateSet/add)
  - : Fügt dem Set einen Wert hinzu.
- [`CustomStateSet.clear()`](/de/docs/Web/API/CustomStateSet/clear)
  - : Entfernt alle Elemente aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.delete()`](/de/docs/Web/API/CustomStateSet/delete)
  - : Entfernt einen Wert aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.entries()`](/de/docs/Web/API/CustomStateSet/entries)
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `CustomStateSet` in Einfügereihenfolge zurück.
- [`CustomStateSet.forEach()`](/de/docs/Web/API/CustomStateSet/forEach)
  - : Führt eine bereitgestellte Funktion für jeden Wert im `CustomStateSet`-Objekt aus.
- [`CustomStateSet.has()`](/de/docs/Web/API/CustomStateSet/has)
  - : Gibt einen {{jsxref("Boolean")}} zurück, der bestätigt, ob ein Element mit dem gegebenen Wert vorhanden ist.
- [`CustomStateSet.keys()`](/de/docs/Web/API/CustomStateSet/keys)
  - : Ein Alias für [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values).
- [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `CustomStateSet`-Objekt in Einfügereihenfolge liefert.

## Beschreibung

Eingebaute HTML-Elemente können verschiedene _Zustände_ haben, wie "enabled" und "disabled", "checked" und "unchecked", "initial", "loading" und "ready".
Einige dieser Zustände sind öffentlich und können mittels Eigenschaften/Attribute gesetzt oder abgefragt werden, während andere effektiv intern sind und nicht direkt gesetzt werden können.
Ob extern oder intern, Elementzustände können im Allgemeinen mit [CSS-Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) als Selektoren ausgewählt und gestaltet werden.

Das `CustomStateSet` ermöglicht Entwicklern das Hinzufügen und Löschen von Zuständen für autonome benutzerdefinierte Elemente (aber nicht für Elemente, die von eingebauten Elementen abgeleitet sind).
Diese Zustände können dann als benutzerdefinierte Zustands-Pseudoklassen-Selektoren ähnlich wie die Pseudoklassen für eingebaute Elemente verwendet werden.

### Zustände benutzerdefinierter Elemente setzen

Um das `CustomStateSet` verfügbar zu machen, muss ein benutzerdefiniertes Element zunächst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zu verknüpfen.
`CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben.
Beachten Sie, dass `ElementInternals` nicht an ein benutzerdefiniertes Element basierend auf einem eingebauten Element angefügt werden kann, sodass diese Funktion nur für autonome benutzerdefinierte Elemente funktioniert (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von Zustandswerten halten kann.
Jeder Wert ist ein benutzerdefinierter Bezeichner.
Bezeichner können dem Set hinzugefügt oder daraus entfernt werden.
Wenn ein Bezeichner im Set vorhanden ist, ist der bestimmte Zustand `true`, während er bei Entfernen `false` ist.

Benutzerdefinierte Elemente, die Zustände mit mehr als zwei Werten haben, können diese mit mehreren booleschen Zuständen darstellen, von denen nur einer zu einem bestimmten Zeitpunkt `true` (im `CustomStateSet` vorhanden) ist.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind aber außerhalb der benutzerdefinierten Komponente nicht direkt zugänglich.

### Interaktion mit CSS

Sie können ein benutzerdefiniertes Element auswählen, das sich in einem bestimmten Zustand befindet, indem Sie die [`:state()`](/de/docs/Web/CSS/:state) _benutzerdefinierte Zustands-Pseudoklasse_ verwenden.
Das Format dieser Pseudoklasse ist `:state(my-state-name)`, wobei `my-state-name` der im Element definierte Zustand ist.
Die benutzerdefinierte Zustands-Pseudoklasse stimmt nur dann mit dem benutzerdefinierten Element überein, wenn der Zustand `true` ist (d.h. wenn `my-state-name` im `CustomStateSet` vorhanden ist).

Beispielsweise stimmt der folgende CSS-Code mit einem `labeled-checkbox`-benutzerdefinierten Element überein, wenn das `CustomStateSet` des Elements den Zustand `checked` enthält, und wendet einen `solid`-Rand auf das Kontrollkästchen an:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch verwendet werden, um mit einem benutzerdefinierten Zustand [innerhalb des Schatten-DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zu übereinstimmen, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassenfunktion angegeben wird.

Zusätzlich kann die `:state()`-Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Element verwendet werden, um die [Schattenparts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu matchen, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die [`:state()`](/de/docs/Web/CSS/:state) noch nicht unterstützen, werden ein CSS `<dashed-ident>` zur Auswahl benutzerdefinierter Zustände verwenden, das jetzt veraltet ist.
> Für Informationen darüber, wie beide Ansätze unterstützt werden können, siehe untenstehende Abschnitt [Kompatibilität mit `<dashed-ident>`-Syntax](#compatibility_with_dashed-ident_syntax).

## Beispiele

### Übereinstimmen des benutzerdefinierten Zustands eines benutzerdefinierten Kontrollkästchenelements

Dieses Beispiel, das aus der Spezifikation angepasst wurde, demonstriert ein benutzerdefiniertes Kontrollkästchenelement, das einen internen "checked"-Zustand hat.
Dieser wird dem `checked` benutzerdefinierten Zustand zugeordnet, was ermöglicht, dass Styling unter Verwendung der `:state(checked)` benutzerdefinierten Zustands-Pseudoklasse angewendet wird.

#### JavaScript

Zuerst definieren wir unsere Klasse `LabeledCheckbox`, die von `HTMLElement` erbt.
Im Konstruktor rufen wir die `super()`-Methode auf, fügen einen Listener für das Klickereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zu verknüpfen.

Der Großteil der weiteren "Arbeit" wird dann `connectedCallback()` überlassen, das aufgerufen wird, wenn ein benutzerdefiniertes Element auf der Seite hinzugefügt wird.
Der Inhalt des Elements wird mit einem `<style>`-Element definiert, das den Text `[]` oder `[x]` gefolgt von einem Label anzeigt.
Bemerkenswert ist hier, dass die benutzerdefinierte Zustands-Pseudoklasse verwendet wird, um den anzuzeigenden Text auszuwählen: `:host(:state(checked))`.
Nach dem Beispiel unten werden wir genauer erklären, was in dem Ausschnitt passiert.

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

- In den `get checked()` und `set checked()`-Methoden verwenden wir `ElementInternals.states`, um das `CustomStateSet` zu erhalten.
- Die `set checked(flag)`-Methode fügt den `"checked"`-Bezeichner zum `CustomStateSet` hinzu, wenn das Flag gesetzt ist, und entfernt den Bezeichner, wenn das Flag `false` ist.
- Die `get checked()`-Methode überprüft lediglich, ob die `checked`-Eigenschaft im Set definiert ist.
- Der Eigenschaftswert wird umgeschaltet, wenn auf das Element geklickt wird.

Wir rufen dann die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode des Objekts auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nach der Registrierung des benutzerdefinierten Elements können wir das Element im HTML wie gezeigt verwenden:

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

Klicken Sie auf das Element, um zu sehen, wie ein anderer Rand angewendet wird, wenn der `checked`-Zustand des Kontrollkästchens umgeschaltet wird.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Übereinstimmen eines benutzerdefinierten Zustands in einem Schattenpart eines benutzerdefinierten Elements

Dieses Beispiel, das aus der Spezifikation angepasst wurde, demonstriert, dass benutzerdefinierte Zustände verwendet werden können, um [Schattenparts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements für das Styling zu adressieren.
Schattenparts sind Abschnitte des Schattenbaums, die absichtlich für Seiten, die das benutzerdefinierte Element verwenden, freigelegt werden.

Das Beispiel erstellt ein `<question-box>`-benutzerdefiniertes Element, das eine Frageaufforderung zusammen mit einem Kontrollkästchen mit der Bezeichnung "Ja" anzeigt.
Das Element verwendet das `<labeled-checkbox>` aus dem [vorherigen Beispiel](#übereinstimmen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) für das Kontrollkästchen.

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
Wie immer ruft der Konstruktor zunächst die `super()`-Methode auf.
Als nächstes hängen wir einen Schatten-DOM-Baum an das benutzerdefinierte Element, indem wir [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufrufen.

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

Der Inhalt der Schattenwurzel wird mit [`innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt.
Dies definiert ein {{HTMLElement("slot")}}-Element, das den Standardaufforderungstext "Frage" für das Element enthält.
Wir definieren dann ein benutzerdefiniertes `<labeled-checkbox>`-Element mit dem Standardtext `"Ja"`.
Dieses Kontrollkästchen wird als Schattenpart der Fragebox mit dem Namen `checkbox` unter Verwendung des [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attributs freigelegt.

Beachten Sie, dass der Code und das Styling für das `<labeled-checkbox>`-Element genau das gleiche ist wie im [vorherigen Beispiel](#übereinstimmen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) und daher hier nicht wiederholt wird.

Als nächstes rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode des Objekts auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element mit dem Namen `question-box` zu registrieren:

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

Der erste CSS-Block stimmt mit dem freigelegten Schattenpart namens `checkbox` mithilfe des [`::part()`](/de/docs/Web/CSS/::part)-Selektors überein und gestaltet es standardmäßig auf `rot`.

```css
question-box::part(checkbox) {
  color: red;
}
```

Der zweite Block folgt `::part()` mit `:state()`, um `checkbox`-Parts zu matchen, die sich im `checked`-Zustand befinden:

```css
question-box::part(checkbox):state(checked) {
  color: green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kontrollkästchen, um zu sehen, wie die Farbe von `rot` zu `grün` wechselt, wenn der `checked`-Zustand umgeschaltet wird.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Nicht-Boolesche interne Zustände

Dieses Beispiel zeigt, wie der Fall gehandhabt wird, wenn das benutzerdefinierte Element eine interne Eigenschaft mit mehreren möglichen Werten hat.

Das benutzerdefinierte Element in diesem Fall hat eine `state`-Eigenschaft mit den zulässigen Werten: "loading", "interactive" und "complete".
Um dies zu ermöglichen, ordnen wir jeden Wert seinem benutzerdefinierten Zustand zu und erstellen Code, um sicherzustellen, dass nur der Bezeichner, der dem internen Zustand entspricht, gesetzt ist.
Sie können dies in der Implementierung der `set state()`-Methode sehen: Wir setzen den internen Zustand, fügen den Bezeichner für den passenden benutzerdefinierten Zustand zum `CustomStateSet` hinzu und entfernen die Bezeichner, die mit allen anderen Werten verbunden sind.

Der Großteil des restlichen Codes ist ähnlich dem Beispiel, das einen einzelnen booleschen Zustand demonstriert (wir zeigen unterschiedlichen Text für jeden Zustand, wenn der Benutzer durch sie blättert).

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
Dies ist ähnlich dem Beispiel, das einen einzelnen booleschen Zustand demonstriert, außer dass wir keinen Wert angeben und den Standardwert aus dem Slot verwenden (`<slot>Click me</slot>`).

```html
<many-state-element></many-state-element>
```

#### CSS

Im CSS verwenden wir die drei benutzerdefinierten Zustands-Pseudoklassen, um CSS für jeden der internen Zustandswerte auszuwählen: `:state(loading)`, `:state(interactive)`, `:state(complete)`.
Beachten Sie, dass der benutzerdefinierte Elementcode sicherstellt, dass nur einer dieser benutzerdefinierten Zustände gleichzeitig definiert werden kann.

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

Klicken Sie auf das Element, um zu sehen, wie ein unterschiedlicher Rand angewendet wird, wenn sich der Zustand ändert.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit `<dashed-ident>`-Syntax

Zuvor wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen unter Verwendung eines `<dashed-ident>` statt der [`:state()`](/de/docs/Web/CSS/:state)-Funktion ausgewählt.
Browser-Versionen, die `:state()` nicht unterstützen, werfen einen Fehler, wenn ein Identifikator ohne das doppelte Minuszeichen-Präfix übergeben wird.
Wenn die Unterstützung für diese Browser erforderlich ist, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um beide Syntaxen zu unterstützen, oder verwenden Sie ein `<dashed-ident>` als Zustandswert und wählen Sie es mit sowohl dem `:--my-state` als auch dem `:state(--my-state)` CSS-Selektor aus.

### Verwendung eines try...catch-Blocks

Dieser Code zeigt, wie Sie `try...catch` verwenden können, um zu versuchen, einen Zustandsbezeichner hinzuzufügen, der kein `<dashed-ident>` verwendet, und auf `<dashed-ident>` zurückzugreifen, wenn ein Fehler auftritt.

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

### Verwendung von mit Doppelstrich präfixierten Idents

Eine alternative Lösung kann sein, das `<dashed-ident>` innerhalb von JavaScript zu verwenden.
Der Nachteil dieses Ansatzes ist, dass die Striche beim Verwenden der CSS-`:state()`-Syntax eingeschlossen werden müssen.

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
