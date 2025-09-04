---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: 5615bdceb5146cf0874ad5165580ef448d7b9c0d
---

{{APIRef("Web Components")}}

Das **`CustomStateSet`**-Interface des [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) und ermöglicht es, Zustände zu diesem Satz hinzuzufügen und zu entfernen.

Das Interface kann verwendet werden, um die internen Zustände eines benutzerdefinierten Elements offenzulegen, sodass sie von dem Code, der das Element verwendet, in CSS-Selektoren verwendet werden können.

## Instanzeigenschaften

- [`CustomStateSet.size`](/de/docs/Web/API/CustomStateSet/size)
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanzmethoden

- [`CustomStateSet.add()`](/de/docs/Web/API/CustomStateSet/add)
  - : Fügt einen Wert zum Satz hinzu.
- [`CustomStateSet.clear()`](/de/docs/Web/API/CustomStateSet/clear)
  - : Entfernt alle Elemente aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.delete()`](/de/docs/Web/API/CustomStateSet/delete)
  - : Entfernt einen Wert aus dem `CustomStateSet`-Objekt.
- [`CustomStateSet.entries()`](/de/docs/Web/API/CustomStateSet/entries)
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `CustomStateSet` in Einfügereihenfolge zurück.
- [`CustomStateSet.forEach()`](/de/docs/Web/API/CustomStateSet/forEach)
  - : Führt eine bereitgestellte Funktion für jeden Wert im `CustomStateSet`-Objekt aus.
- [`CustomStateSet.has()`](/de/docs/Web/API/CustomStateSet/has)
  - : Gibt einen {{jsxref("Boolean")}} zurück, der angibt, ob ein Element mit dem gegebenen Wert vorhanden ist.
- [`CustomStateSet.keys()`](/de/docs/Web/API/CustomStateSet/keys)
  - : Ein Alias für [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values).
- [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `CustomStateSet`-Objekt in Einfügereihenfolge liefert.

## Beschreibung

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "aktiviert" und "deaktiviert", "geprüft" und "ungeprüft", "initial", "ladend" und "bereit".
Einige dieser Zustände sind öffentlich und können durch Eigenschaften/Attribute gesetzt oder abgefragt werden, während andere effektiv intern sind und nicht direkt gesetzt werden können.
Unabhängig davon, ob sie extern oder intern sind, können Elementzustände im Allgemeinen mit [CSS-Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) als Selektoren ausgewählt und gestaltet werden.

Das `CustomStateSet` ermöglicht es Entwicklern, Zustände für autonome benutzerdefinierte Elemente hinzuzufügen und zu löschen (nicht jedoch für von eingebauten Elementen abgeleitete Elemente).
Diese Zustände können dann als benutzerdefinierte Zustands-Pseudoklassen-Selektoren ähnlich wie die Pseudoklassen für eingebaute Elemente verwendet werden.

### Festlegen von Zuständen benutzerdefinierter Elemente

Um das `CustomStateSet` verfügbar zu machen, muss ein benutzerdefiniertes Element zunächst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen.
`CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben.
Beachten Sie, dass `ElementInternals` nicht an ein benutzerdefiniertes Element angehängt werden kann, das auf einem eingebauten Element basiert, sodass diese Funktion nur für autonome benutzerdefinierte Elemente funktioniert (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von Zustandswerten halten kann.
Jeder Wert ist ein benutzerdefinierter Bezeichner.
Bezeichner können dem Satz hinzugefügt oder daraus gelöscht werden.
Wenn ein Bezeichner im Satz vorhanden ist, dann ist der jeweilige Zustand `true`, während er, wenn er entfernt wird, `false` ist.

Benutzerdefinierte Elemente, die Zustände mit mehr als zwei Werten haben, können diese mit mehreren booleschen Zuständen darstellen, von denen jeweils nur einer gleichzeitig `true` (im `CustomStateSet` vorhanden) ist.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind jedoch außerhalb der benutzerdefinierten Komponente nicht direkt zugänglich.

### Interaktion mit CSS

Sie können ein benutzerdefiniertes Element, das sich in einem bestimmten Zustand befindet, mit der [`:state()`](/de/docs/Web/CSS/:state) _benutzerdefinierte Zustands-Pseudoklasse_ auswählen.
Das Format dieser Pseudoklasse ist `:state(my-state-name)`, wobei `my-state-name` der im Element definierte Zustand ist.
Die benutzerdefinierte Zustands-Pseudoklasse stimmt mit dem benutzerdefinierten Element nur überein, wenn der Zustand `true` ist (d.h. wenn `my-state-name` im `CustomStateSet` vorhanden ist).

Zum Beispiel stimmt das folgende CSS mit einem `labeled-checkbox`-benutzerdefinierten Element überein, wenn das Element im `CustomStateSet` den Zustand `checked` enthält und wendet einen `solid`-Rahmen auf das Kontrollkästchen an:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function)-Pseudoklassenfunktion angegeben wird.

Zusätzlich kann die `:state()`-Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part)-Pseudo-Element verwendet werden, um die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements abzugleichen, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die [`:state()`](/de/docs/Web/CSS/:state) noch nicht unterstützen, verwenden ein CSS-`<dashed-ident>` zur Auswahl benutzerdefinierter Zustände, das mittlerweile veraltet ist.
> Informationen darüber, wie man beide Ansätze unterstützt, finden Sie im Abschnitt [Kompatibilität mit `<dashed-ident>`-Syntax](#compatibility_with_dashed-ident_syntax) unten.

## Beispiele

### Abgleichen des benutzerdefinierten Zustands eines benutzerdefinierten Kontrollkästchenelements

Dieses Beispiel, das aus der Spezifikation adaptiert wurde, zeigt ein benutzerdefiniertes Kontrollkästchenelement, das einen internen "checked"-Zustand hat.
Dieser wird dem benutzerdefinierten Zustand `checked` zugeordnet, sodass Styling angewendet werden kann, indem die benutzerdefinierte Zustands-Pseudoklasse `:state(checked)` verwendet wird.

#### JavaScript

Zuerst definieren wir unsere Klasse `LabeledCheckbox`, die von `HTMLElement` erweitert wird.
Im Konstruktor rufen wir die `super()`-Methode auf, fügen einen Listener für das Klickereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzuhängen.

Der Großteil der weiteren "Arbeit" wird dann dem `connectedCallback()` überlassen, das aufgerufen wird, wenn ein benutzerdefiniertes Element zur Seite hinzugefügt wird.
Der Inhalt des Elements wird durch ein `<style>`-Element definiert, um den Text `[]` oder `[x]` gefolgt von einem Label zu sein.
Bemerkenswert ist hier, dass die benutzerdefinierte Zustands-Pseudoklasse verwendet wird, um den anzuzeigenden Text auszuwählen: `:host(:state(checked))`.
Nach dem folgenden Beispiel erläutern wir das, was im Snippet passiert, ausführlicher.

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

- In den `get checked()` und `set checked()`-Methoden verwenden wir `ElementInternals.states`, um das `CustomStateSet` zu bekommen.
- Die `set checked(flag)`-Methode fügt das `"checked"`-Kennzeichen zum `CustomStateSet` hinzu, wenn die Flagge gesetzt ist, und löscht das Kennzeichen, wenn die Flagge `false` ist.
- Die `get checked()`-Methode überprüft lediglich, ob die `checked`-Eigenschaft im Satz definiert ist.
- Der Eigenschaftswert wird umgeschaltet, wenn auf das Element geklickt wird.

Wir rufen dann die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode für das Objekt auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nachdem das benutzerdefinierte Element registriert wurde, können wir das Element im HTML wie gezeigt verwenden:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

#### CSS

Schließlich verwenden wir die benutzerdefinierte Zustands-Pseudoklasse `:state(checked)` zum Auswählen von CSS für den Fall, dass das Kästchen aktiviert ist.

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

### Abgleichen eines benutzerdefinierten Zustands in einem Shadow-Part eines benutzerdefinierten Elements

Dieses Beispiel, das aus der Spezifikation adaptiert wurde, zeigt, dass benutzerdefinierte Zustände verwendet werden können, um die [Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements für das Styling zu adressieren.
Shadow-Parts sind Bereiche des Shadow-Baums, die absichtlich für Seiten offen gelegt werden, die das benutzerdefinierte Element verwenden.

Das Beispiel erstellt ein `<question-box>`-benutzerdefiniertes Element, das eine Frageaufforderung zusammen mit einem Kontrollkästchen mit der Beschriftung "Ja" anzeigt.
Das Element verwendet das `<labeled-checkbox>` aus dem [vorherigen Beispiel](#abgleichen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) für das Kontrollkästchen.

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
Dann hängen wir einen Shadow-DOM-Baum an das benutzerdefinierte Element an, indem wir [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufrufen.

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
Dies definiert ein {{HTMLElement("slot")}}-Element, das den Standardaufforderungstext "Question" für das Element enthält.
Dann definieren wir ein `<labeled-checkbox>` benutzerdefiniertes Element mit dem Standardtext `"Yes"`.
Dieses Kontrollkästchen wird als Shadow-Part benannt `checkbox` des Fragenkastens mit dem [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut offengelegt.

Beachten Sie, dass der Code und das Styling für das `<labeled-checkbox>`-Element exakt dem im [vorherigen Beispiel](#abgleichen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) entsprechen und daher hier nicht wiederholt werden.

Anschließend rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode auf das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegebene Objekt auf, um das benutzerdefinierte Element mit dem Namen `question-box` zu registrieren:

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

Der erste CSS-Block stimmt mit dem offengelegten Shadow-Part namens `checkbox` mit dem [`::part()`](/de/docs/Web/CSS/::part)-Selektor überein und stylt ihn standardmäßig in `red`.

```css
question-box::part(checkbox) {
  color: red;
}
```

Der zweite Block folgt `::part()` mit `:state()`, um `checkbox`-Parts abzugleichen, die sich im `checked`-Zustand befinden:

```css
question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kontrollkästchen, um zu sehen, wie die Farbe in `green` mit einem Umriss wechselt, wenn der `checked`-Zustand umgeschaltet wird.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie mit dem Fall umgegangen wird, in dem das benutzerdefinierte Element eine interne Eigenschaft mit mehreren möglichen Werten hat.

Das benutzerdefinierte Element in diesem Fall hat eine `state`-Eigenschaft mit zulässigen Werten: "loading", "interactive" und "complete".
Um dies zu ermöglichen, ordnen wir jeden Wert seinem benutzerdefinierten Zustand zu und erstellen Code, um sicherzustellen, dass nur der Bezeichner, der dem internen Zustand entspricht, gesetzt ist.
Sie können dies in der Implementierung der `set state()`-Methode sehen: Wir setzen den internen Zustand, fügen den Bezeichner für den passenden benutzerdefinierten Zustand zum `CustomStateSet` hinzu und entfernen die Bezeichner, die allen anderen Werten zugeordnet sind.

Der größte Teil des restlichen Codes ähnelt dem Beispiel, das einen einzelnen booleschen Zustand demonstriert (wir zeigen unterschiedlichen Text für jeden Zustand an, wenn der Benutzer durch sie schaltet).

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

Nach der Registrierung des neuen Elements fügen wir es in das HTML ein.
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

#### Ergebnis

Klicken Sie auf das Element, um zu sehen, wie ein anderer Rahmen angewendet wird, wenn sich der Zustand ändert.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit `<dashed-ident>`-Syntax

Früher wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen mit einem `<dashed-ident>` anstelle der [`:state()`](/de/docs/Web/CSS/:state)-Funktion ausgewählt.
Browserversionen, die `:state()` nicht unterstützen, geben einen Fehler aus, wenn ein Identifikat verwendet wird, das nicht mit dem Doppelstrich-Präfix versehen ist.
Wenn eine Unterstützung für diese Browser erforderlich ist, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um beide Syntaxen zu unterstützen, oder verwenden Sie ein `<dashed-ident>` als Zustandswert und wählen Sie ihn sowohl mit dem CSS `:--my-state` als auch `:state(--my-state)`-Selektor aus.

### Verwenden eines try...catch-Blocks

Dieser Code zeigt, wie Sie `try...catch` verwenden können, um zu versuchen, einen Zustandsbezeichner hinzuzufügen, der kein `<dashed-ident>` verwendet, und im Falle eines Fehlers auf `<dashed-ident>` zurückzufallen.

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

### Verwenden von doppelstrich-präfixierten Identifikatoren

Eine alternative Lösung kann sein, das `<dashed-ident>` innerhalb von JavaScript zu verwenden.
Der Nachteil dieses Ansatzes ist, dass die Striche beim Verwenden der CSS-`:state()`-Syntax enthalten sein müssen.

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

[Verwenden benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
