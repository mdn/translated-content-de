---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

{{APIRef("Web Components")}}

Die **`CustomStateSet`**-Schnittstelle des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes Custom Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element). Zustände können der Menge hinzugefügt und aus ihr entfernt werden.

Mit der Schnittstelle lassen sich die internen Zustände eines Custom Elements zugänglich machen, sodass Code, der das Element verwendet, sie in CSS-Selektoren nutzen kann.

## Instanzeigenschaften

- [`CustomStateSet.size`](/de/docs/Web/API/CustomStateSet/size)
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanzmethoden

- [`CustomStateSet.add()`](/de/docs/Web/API/CustomStateSet/add)
  - : Fügt der Menge einen Wert hinzu.
- [`CustomStateSet.clear()`](/de/docs/Web/API/CustomStateSet/clear)
  - : Entfernt alle Elemente aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.delete()`](/de/docs/Web/API/CustomStateSet/delete)
  - : Entfernt einen Wert aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.entries()`](/de/docs/Web/API/CustomStateSet/entries)
  - : Gibt einen neuen Iterator mit den Werten der Elemente im `CustomStateSet` in der Reihenfolge ihres Einfügens zurück.
- [`CustomStateSet.forEach()`](/de/docs/Web/API/CustomStateSet/forEach)
  - : Führt eine übergebene Funktion für jeden Wert im `CustomStateSet`-Objekt aus.
- [`CustomStateSet.has()`](/de/docs/Web/API/CustomStateSet/has)
  - : Gibt einen {{jsxref("Boolean")}}-Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert vorhanden ist.
- [`CustomStateSet.keys()`](/de/docs/Web/API/CustomStateSet/keys)
  - : Ein Alias für [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values).
- [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte der Elemente im `CustomStateSet`-Objekt in der Reihenfolge ihres Einfügens liefert.

## Beschreibung

Integrierte HTML-Elemente können unterschiedliche _Zustände_ haben, etwa „enabled“ und „disabled“, „checked“ und „unchecked“ oder „initial“, „loading“ und „ready“.
Einige dieser Zustände sind öffentlich und können über Eigenschaften oder Attribute gesetzt oder abgefragt werden. Andere sind dagegen praktisch intern und können nicht direkt gesetzt werden.
Unabhängig davon, ob sie öffentlich oder intern sind, können Elementzustände im Allgemeinen mithilfe von [CSS-Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ausgewählt und gestaltet werden.

Mit `CustomStateSet` können Entwickler Zustände für autonome Custom Elements hinzufügen und entfernen, nicht jedoch für Elemente, die von integrierten Elementen abgeleitet sind.
Diese Zustände lassen sich anschließend mit benutzerdefinierten Zustands-Pseudoklassen auswählen, ähnlich wie bei den Pseudoklassen für integrierte Elemente.

### Zustände von Custom Elements festlegen

Damit `CustomStateSet` verfügbar ist, muss ein Custom Element zunächst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzubinden.
`CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben.
Beachten Sie, dass `ElementInternals` nicht an ein Custom Element angebunden werden kann, das auf einem integrierten Element basiert. Diese Funktion steht daher nur für autonome Custom Elements zur Verfügung (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von Zustandswerten enthalten kann.
Jeder Wert ist ein benutzerdefinierter Bezeichner.
Bezeichner können der Menge hinzugefügt oder aus ihr entfernt werden.
Ist ein Bezeichner in der Menge enthalten, hat der entsprechende Zustand den Wert `true`; wird er entfernt, hat der Zustand den Wert `false`.

Custom Elements mit Zuständen, die mehr als zwei Werte annehmen können, können diese durch mehrere boolesche Zustände darstellen, von denen jeweils nur einer `true` ist, also im `CustomStateSet` enthalten ist.

Die Zustände können innerhalb des Custom Elements verwendet werden, sind aber außerhalb der benutzerdefinierten Komponente nicht direkt zugänglich.

### Zusammenspiel mit CSS

Mit der _benutzerdefinierten Zustands-Pseudoklasse_ {{cssxref(":state()")}} können Sie ein Custom Element auswählen, das sich in einem bestimmten Zustand befindet.
Die Pseudoklasse hat das Format `:state(my-state-name)`, wobei `my-state-name` der im Element definierte Zustand ist.
Die benutzerdefinierte Zustands-Pseudoklasse stimmt nur dann mit dem Custom Element überein, wenn der Zustand `true` ist, also wenn `my-state-name` im `CustomStateSet` enthalten ist.

Das folgende CSS wählt beispielsweise ein `labeled-checkbox`-Custom-Element aus, wenn dessen `CustomStateSet` den Zustand `checked` enthält, und weist der Checkbox einen `solid`-Rahmen zu:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

Mit CSS lässt sich auch ein benutzerdefinierter Zustand [innerhalb des Shadow DOM eines Custom Elements](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) auswählen, indem `:state()` innerhalb der Pseudoklassenfunktion {{cssxref(":host()")}} angegeben wird.

Außerdem kann die Pseudoklasse `:state()` nach dem Pseudoelement {{cssxref("::part()")}} verwendet werden, um [Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines Custom Elements auszuwählen, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die {{cssxref(":state()")}} noch nicht unterstützen, verwenden zum Auswählen benutzerdefinierter Zustände einen CSS-`<dashed-ident>`. Diese Syntax ist inzwischen veraltet.
> Wie Sie beide Ansätze unterstützen können, erfahren Sie unten im Abschnitt [Kompatibilität mit der `<dashed-ident>`-Syntax](#compatibility_with_dashed-ident_syntax).

## Beispiele

### Benutzerdefinierten Zustand eines Custom-Checkbox-Elements auswählen

Dieses an die Spezifikation angelehnte Beispiel zeigt ein benutzerdefiniertes Checkbox-Element mit einem internen Zustand „checked“.
Dieser wird dem benutzerdefinierten Zustand `checked` zugeordnet, sodass die Gestaltung über die benutzerdefinierte Zustands-Pseudoklasse `:state(checked)` erfolgen kann.

#### JavaScript

Zunächst definieren wir die Klasse `LabeledCheckbox`, die `HTMLElement` erweitert.
Im Konstruktor rufen wir die Methode `super()` auf, fügen einen Listener für das Klickereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzubinden.

Der Großteil der übrigen Arbeit erfolgt in `connectedCallback()`, das aufgerufen wird, wenn ein Custom Element zur Seite hinzugefügt wird.
Der Inhalt des Elements wird mithilfe eines `<style>`-Elements als Text `[]` oder `[x]`, gefolgt von einer Beschriftung, definiert.
Bemerkenswert ist hier, dass die benutzerdefinierte Zustands-Pseudoklasse den anzuzeigenden Text auswählt: `:host(:state(checked))`.
Nach dem folgenden Beispiel erläutern wir genauer, was im Codeausschnitt geschieht.

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

In der Klasse `LabeledCheckbox`:

- In `get checked()` und `set checked()` verwenden wir `ElementInternals.states`, um das `CustomStateSet` abzurufen.
- Die Methode `set checked(flag)` fügt den Bezeichner `"checked"` zum `CustomStateSet` hinzu, wenn das Flag gesetzt ist, und entfernt ihn, wenn das Flag `false` ist.
- Die Methode `get checked()` prüft lediglich, ob die Eigenschaft `checked` in der Menge definiert ist.
- Beim Klicken auf das Element wird der Eigenschaftswert umgeschaltet.

Anschließend rufen wir die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) für das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegebene Objekt auf, um das Custom Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nach der Registrierung können wir das Custom Element wie folgt in HTML verwenden:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

#### CSS

Schließlich wählen wir mit der benutzerdefinierten Zustands-Pseudoklasse `:state(checked)` die CSS-Regeln aus, die gelten sollen, wenn die Checkbox aktiviert ist.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

#### Ergebnis

Klicken Sie auf das Element, um zu sehen, wie beim Umschalten des Zustands `checked` ein anderer Rahmen angewendet wird.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Benutzerdefinierten Zustand in einem Shadow Part eines Custom Elements auswählen

Dieses an die Spezifikation angelehnte Beispiel zeigt, dass benutzerdefinierte Zustände verwendet werden können, um [Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines Custom Elements gezielt zu gestalten.
Shadow Parts sind Bereiche des Shadow Trees, die für Seiten, die das Custom Element verwenden, bewusst zugänglich gemacht werden.

Das Beispiel erstellt ein `<question-box>`-Custom-Element, das eine Frage zusammen mit einer Checkbox mit der Beschriftung „Yes“ anzeigt.
Für die Checkbox verwendet das Element das im [vorherigen Beispiel](#benutzerdefinierten_zustand_eines_custom-checkbox-elements_auswählen) definierte `<labeled-checkbox>`.

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

Zunächst definieren wir die Custom-Element-Klasse `QuestionBox`, die `HTMLElement` erweitert.
Wie üblich ruft der Konstruktor zuerst die Methode `super()` auf.
Danach binden wir durch Aufrufen von [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) einen Shadow-DOM-Baum an das Custom Element an.

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

Der Inhalt der Shadow Root wird über [`innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) festgelegt.
Damit wird ein {{HTMLElement("slot")}}-Element definiert, das den Standardtext „Question“ für das Element enthält.
Anschließend definieren wir ein `<labeled-checkbox>`-Custom-Element mit dem Standardtext `"Yes"`.
Diese Checkbox wird mithilfe des Attributs [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) unter dem Namen `checkbox` als Shadow Part der Fragebox zugänglich gemacht.

Beachten Sie, dass Code und Gestaltung des `<labeled-checkbox>`-Elements genau dem [vorherigen Beispiel](#benutzerdefinierten_zustand_eines_custom-checkbox-elements_auswählen) entsprechen und daher hier nicht wiederholt werden.

Danach rufen wir die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) für das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegebene Objekt auf, um das Custom Element unter dem Namen `question-box` zu registrieren:

```js
customElements.define("question-box", QuestionBox);
```

#### HTML

Nach der Registrierung können wir das Custom Element wie folgt in HTML verwenden.

```html
<!-- Question box with default prompt "Question" -->
<question-box></question-box>

<!-- Question box with custom prompt "Continue?" -->
<question-box>Continue?</question-box>
```

#### CSS

Der erste CSS-Block wählt mit dem Selektor {{cssxref("::part()")}} den zugänglich gemachten Shadow Part namens `checkbox` aus und gestaltet ihn standardmäßig `red`.

```css
question-box::part(checkbox) {
  color: red;
}
```

Im zweiten Block folgt auf `::part()` die Pseudoklasse `:state()`, um `checkbox`-Parts im Zustand `checked` auszuwählen:

```css
question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

#### Ergebnis

Klicken Sie auf eine der Checkboxes, um zu sehen, wie ihre Farbe beim Umschalten des Zustands `checked` von `red` zu `green` wechselt und eine Umrandung erscheint.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie Sie vorgehen, wenn ein Custom Element eine interne Eigenschaft mit mehreren möglichen Werten hat.

Das Custom Element hat hier eine Eigenschaft `state` mit den zulässigen Werten „loading“, „interactive“ und „complete“.
Dazu ordnen wir jedem Wert einen benutzerdefinierten Zustand zu und stellen im Code sicher, dass nur der Bezeichner gesetzt ist, der dem internen Zustand entspricht.
Dies ist in der Implementierung der Methode `set state()` zu sehen: Wir setzen den internen Zustand, fügen den Bezeichner für den entsprechenden benutzerdefinierten Zustand zum `CustomStateSet` hinzu und entfernen die Bezeichner für alle anderen Werte.

Der übrige Code ähnelt größtenteils dem Beispiel mit einem einzelnen booleschen Zustand. Für jeden Zustand zeigen wir einen anderen Text an, während der Benutzer zwischen den Zuständen wechselt.

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

Nach der Registrierung fügen wir das neue Element zum HTML hinzu.
Dies ähnelt dem Beispiel mit einem einzelnen booleschen Zustand. Allerdings geben wir keinen Wert an, sondern verwenden den Standardwert aus dem Slot (`<slot>Click me</slot>`).

```html
<many-state-element></many-state-element>
```

#### CSS

Im CSS verwenden wir die drei benutzerdefinierten Zustands-Pseudoklassen, um CSS für die jeweiligen internen Zustandswerte auszuwählen: `:state(loading)`, `:state(interactive)` und `:state(complete)`.
Beachten Sie, dass der Code des Custom Elements sicherstellt, dass jeweils nur einer dieser benutzerdefinierten Zustände gesetzt sein kann.

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

#### Ergebnis

Klicken Sie auf das Element, um zu sehen, wie beim Wechsel des Zustands ein anderer Rahmen angewendet wird.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit der `<dashed-ident>`-Syntax

Früher wurden Custom Elements mit benutzerdefinierten Zuständen mithilfe eines `<dashed-ident>` statt der Funktion {{cssxref(":state()")}} ausgewählt.
Browserversionen, die `:state()` nicht unterstützen, lösen einen Fehler aus, wenn ihnen ein Bezeichner ohne Präfix aus zwei Bindestrichen übergeben wird.
Wenn diese Browser unterstützt werden müssen, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block für beide Syntaxvarianten oder verwenden Sie einen `<dashed-ident>` als Zustandswert und wählen Sie ihn mit den CSS-Selektoren `:--my-state` und `:state(--my-state)` aus.

### Einen try...catch-Block verwenden

Dieser Code zeigt, wie Sie mit `try...catch` versuchen können, einen Zustandsbezeichner hinzuzufügen, der kein `<dashed-ident>` verwendet, und bei einem Fehler auf `<dashed-ident>` zurückgreifen.

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

### Bezeichner mit zwei vorangestellten Bindestrichen verwenden

Eine alternative Lösung besteht darin, `<dashed-ident>` in JavaScript zu verwenden.
Der Nachteil dieses Ansatzes ist, dass die Bindestriche auch bei Verwendung der CSS-Syntax `:state()` angegeben werden müssen.

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

[Custom Elements verwenden](/de/docs/Web/API/Web_components/Using_custom_elements)
