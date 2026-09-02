---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("Web Components")}}

Das **`CustomStateSet`**-Interface des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) und ermöglicht das Hinzufügen und Entfernen von Zuständen aus der Menge.

Das Interface kann verwendet werden, um die internen Zustände eines benutzerdefinierten Elements offenzulegen, sodass sie in CSS-Selektoren von dem Code verwendet werden können, der das Element benutzt.

## Instanzeigenschaften

- [`CustomStateSet.size`](/de/docs/Web/API/CustomStateSet/size)
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanzmethoden

- [`CustomStateSet.add()`](/de/docs/Web/API/CustomStateSet/add)
  - : Fügt einen Wert zur Menge hinzu.
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

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "aktiviert" und "deaktiviert", "ausgewählt" und "nicht ausgewählt", "initial", "ladend" und "bereit". Einige dieser Zustände sind öffentlich und können mit Eigenschaften/Attributen gesetzt oder abgefragt werden, während andere effektiv intern sind und nicht direkt gesetzt werden können. Ob extern oder intern, Elementzustände können im Allgemeinen mit [CSS-Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) als Selektoren ausgewählt und gestaltet werden.

Das `CustomStateSet` ermöglicht Entwicklern das Hinzufügen und Löschen von Zuständen für autonome benutzerdefinierte Elemente (aber nicht für von eingebauten Elementen abgeleitete). Diese Zustände können dann als benutzerdefinierte Zustandspseudoklassen-Selektoren in ähnlicher Weise wie die Pseudoklassen für eingebaute Elemente verwendet werden.

### Benutzerdefinierte Elementzustände einstellen

Um das `CustomStateSet` verfügbar zu machen, muss ein benutzerdefiniertes Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zu verbinden. `CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben. Beachten Sie, dass `ElementInternals` nicht an ein benutzerdefiniertes Element angehängt werden kann, das auf einem eingebauten Element basiert, sodass diese Funktion nur für autonome benutzerdefinierte Elemente funktioniert (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von Zuständen halten kann. Jeder Wert ist ein benutzerdefinierter Bezeichner. Bezeichner können zur Menge hinzugefügt oder gelöscht werden. Wenn ein Bezeichner in der Menge vorhanden ist, ist der bestimmte Zustand `true`, während er `false` ist, wenn er entfernt wird.

Benutzerdefinierte Elemente mit Zuständen, die mehr als zwei Werte haben, können diese mit mehreren booleschen Zuständen darstellen, von denen nur einer gleichzeitig `true` (in der `CustomStateSet` vorhanden) ist.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind aber nicht direkt außerhalb der benutzerdefinierten Komponente zugänglich.

### Interaktion mit CSS

Sie können ein benutzerdefiniertes Element auswählen, das sich in einem bestimmten Zustand befindet, indem Sie die {{cssxref(":state()")}} _benutzerdefinierte Zustandspseudoklasse_ verwenden. Das Format dieser Pseudoklasse ist `:state(my-state-name)`, wobei `my-state-name` der im Element definierte Zustand ist. Die benutzerdefinierte Zustandspseudoklasse passt zum benutzerdefinierten Element nur dann, wenn der Zustand `true` ist (d.h. wenn `my-state-name` im `CustomStateSet` vorhanden ist).

Zum Beispiel stimmt der folgende CSS-Code mit einem `labeled-checkbox`-benutzerdefinierten Element überein, wenn das `CustomStateSet` des Elements den `checked`-Zustand enthält, und wendet einen `solid`-Rahmen auf das Kontrollkästchen an:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch verwendet werden, um einen benutzerdefinierten Zustand [innerhalb eines benutzerdefinierten Elements im Schatten-DOM](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) zu vergleichen, indem `:state()` innerhalb der {{cssxref(":host()")}}-Pseudoklassenfunktion angegeben wird.

Zusätzlich kann die `:state()`-Pseudoklasse nach der {{cssxref("::part()")}}-Pseudoelement verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements zu vergleichen, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die noch nicht {{cssxref(":state()")}} unterstützen, verwenden ein CSS `<dashed-ident>`, um benutzerdefinierte Zustände auszuwählen, was jetzt veraltet ist. Für Informationen darüber, wie beide Ansätze unterstützt werden können, siehe den Abschnitt [Kompatibilität mit `<dashed-ident>`-Syntax](#compatibility_with_dashed-ident_syntax) unten.

## Beispiele

### Vergleich des benutzerdefinierten Zustands eines benutzerdefinierten Kontrollkästchenelements

Dieses Beispiel, das aus der Spezifikation angepasst wurde, demonstriert ein benutzerdefiniertes Kontrollkästchenelement, das einen internen "checked"-Zustand hat. Dieser wird dem `checked`-benutzerdefinierten Zustand zugeordnet, wodurch eine Gestaltung mit der `:state(checked)`-benutzerdefinierten Zustandspseudoklasse ermöglicht wird.

#### JavaScript

Zuerst definieren wir unsere Klasse `LabeledCheckbox`, die von `HTMLElement` erbt. Im Konstruktor rufen wir die `super()`-Methode auf, fügen einen Listener für das Klickereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zu verbinden.

Der größte Teil der weiteren "Arbeit" wird dann `connectedCallback()` überlassen, die aufgerufen wird, wenn ein benutzerdefiniertes Element zur Seite hinzugefügt wird. Der Inhalt des Elements wird mithilfe eines `<style>`-Elements als der Text `[]` oder `[x]` gefolgt von einer Beschriftung definiert. Bemerkenswert ist hier, dass die benutzerdefinierte Zustandspseudoklasse verwendet wird, um den anzuzeigenden Text auszuwählen: `:host(:state(checked))`. Nach dem Beispiel unten werden wir genauer betrachten, was im Schnipsel passiert.

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

- In den Methoden `get checked()` und `set checked()` verwenden wir `ElementInternals.states`, um das `CustomStateSet` abzurufen.
- Die Methode `set checked(flag)` fügt den `"checked"`-Bezeichner zu `CustomStateSet` hinzu, wenn das Flag gesetzt ist, und löscht den Bezeichner, wenn das Flag `false` ist.
- Die Methode `get checked()` prüft nur, ob die `checked`-Eigenschaft in der Menge definiert ist.
- Der Eigenschaftswert wird umgeschaltet, wenn auf das Element geklickt wird.

Anschließend rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode für das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegebene Objekt auf, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nachdem das benutzerdefinierte Element registriert wurde, können wir das Element im HTML wie gezeigt verwenden:

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

Klicken Sie auf das Element, um zu sehen, dass ein anderer Rahmen angewendet wird, wenn der `checked`-Zustand des Kontrollkästchens umgeschaltet wird.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Vergleich eines benutzerdefinierten Zustands in einem Schatten-Teil eines benutzerdefinierten Elements

Dieses Beispiel, das aus der Spezifikation angepasst wurde, zeigt, dass benutzerdefinierte Zustände verwendet werden können, um die [Schatten-Teile](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements zur Gestaltung gezielt anzusprechen. Schatten-Teile sind Abschnitte des Schatten-DOMs, die Seiten, die das benutzerdefinierte Element verwenden, absichtlich ausgesetzt werden.

Das Beispiel erstellt ein benutzerdefiniertes `<question-box>`-Element, das eine Frageaufforderung zusammen mit einem Kontrollkästchen mit der Bezeichnung "Ja" anzeigt. Das Element verwendet das in [Vorheriges Beispiel beschrieben](#vergleich_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) definierte `<labeled-checkbox>`-benutzerdefinierte Element für das Kontrollkästchen.

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

Zuerst definieren wir die benutzerdefinierte Elementklasse `QuestionBox`, die `HTMLElement` erweitert. Wie immer ruft der Konstruktor zuerst die `super()`-Methode auf. Anschließend fügen wir mit der Methode [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) einen Schatten-DOM dem benutzerdefinierten Element hinzu.

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

Der Inhalt der Schattenwurzel wird mit der Methode [`innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt. Dies definiert ein {{HTMLElement("slot")}}-Element, das den Standardaufforderungstext "Frage" für das Element enthält. Wir definieren dann ein benutzerdefiniertes `<labeled-checkbox>`-Element mit dem Standardtext `"Ja"`. Dieses Kontrollkästchen wird als ein Schatten-Teil des Fragedokuments mit dem Namen `checkbox` mithilfe des [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attributs freigegeben.

Beachten Sie, dass der Code und das Styling für das `<labeled-checkbox>`-Element genau das gleiche sind wie im [vorherigen Beispiel](#vergleich_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements), und daher hier nicht wiederholt werden.

Anschließend rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode für das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegebene Objekt auf, um das benutzerdefinierte Element mit dem Namen `question-box` zu registrieren:

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

Der erste CSS-Block stimmt mit dem freigelegten Schattenteil mit dem Namen `checkbox` überein, indem der {{cssxref("::part()")}}-Selektor verwendet wird, um es standardmäßig `rot` zu gestalten.

```css
question-box::part(checkbox) {
  color: red;
}
```

Der zweite Block folgt `::part()` mit `:state()`, um Teile von `checkbox` zu vergleichen, die im `checked`-Zustand sind:

```css
question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kontrollkästchen, um zu sehen, wie sich die Farbe von `rot` zu `grün` mit einer Umrandung ändert, wenn der `checked`-Zustand umgeschaltet wird.

{{EmbedLiveSample("Fragefeld", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie der Fall behandelt wird, in dem das benutzerdefinierte Element eine interne Eigenschaft mit mehreren möglichen Werten hat.

Das benutzerdefinierte Element in diesem Fall hat eine `state`-Eigenschaft mit den erlaubten Werten: "loading", "interactive" und "complete". Um dies zu ermöglichen, ordnen wir jeden Wert seinem benutzerdefinierten Zustand zu und erstellen Code, um sicherzustellen, dass nur der Bezeichner, der dem internen Zustand entspricht, festgelegt wird. Dies ist in der Implementierung der `set state()`-Methode zu sehen: Wir setzen den internen Zustand, fügen den Bezeichner für den passenden benutzerdefinierten Zustand zu `CustomStateSet` hinzu und entfernen die mit allen anderen Werten verbundenen Bezeichner.

Der Großteil des verbleibenden Codes ist ähnlich dem Beispiel, das einen einzelnen booleschen Zustand zeigt (wir zeigen verschiedenen Text für jeden Zustand an, während der Benutzer durch sie blättert).

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

Nachdem das neue Element registriert wurde, fügen wir es dem HTML hinzu. Dies ist ähnlich dem Beispiel, das einen einzelnen booleschen Zustand zeigt, außer dass wir keinen Wert angeben und den Standardwert aus dem Slot verwenden (`<slot>Click me</slot>`).

```html
<many-state-element></many-state-element>
```

#### CSS

Im CSS verwenden wir die drei benutzerdefinierten Zustandspseudoklassen, um CSS für jeden der internen Zustandswerte auszuwählen: `:state(loading)`, `:state(interactive)`, `:state(complete)`. Beachten Sie, dass der benutzerdefinierte Elementcode sicherstellt, dass immer nur einer dieser benutzerdefinierten Zustände gleichzeitig definiert sein kann.

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

Klicken Sie auf das Element, um zu sehen, dass ein anderer Rahmen angewendet wird, während sich der Zustand ändert.

{{EmbedLiveSample("Nicht-boolesche interne Zustände", "100%", 50)}}

## Kompatibilität mit `<dashed-ident>`-Syntax

Vorher wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen mit einem `<dashed-ident>` anstelle der {{cssxref(":state()")}}-Funktion ausgewählt. Browserversionen, die `:state()` nicht unterstützen, werfen einen Fehler, wenn sie mit einem Bezeichner versehen werden, der nicht mit dem doppelten Bindestrich präfixiert ist. Wenn Unterstützung für diese Browser erforderlich ist, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um beide Syntaxen zu unterstützen, oder verwenden Sie einen `<dashed-ident>` als Zustandswert und wählen Sie ihn sowohl mit dem `:--my-state` als auch dem `:state(--my-state)` CSS-Selektor aus.

### Verwendung eines try...catch-Blocks

Dieser Code zeigt, wie Sie `try...catch` verwenden können, um zu versuchen, einen Zustandsbezeichner hinzuzufügen, der kein `<dashed-ident>` verwendet, und auf `<dashed-ident>` zurückzugreifen, falls ein Fehler auftritt.

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

### Verwendung von Bezeichnern mit doppeltem Bindestrich als Präfix

Eine alternative Lösung kann die Verwendung von `<dashed-ident>` innerhalb von JavaScript sein. Der Nachteil dieser Herangehensweise ist, dass die Bindestriche bei der Verwendung der CSS `:state()`-Syntax eingeschlossen sein müssen.

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
