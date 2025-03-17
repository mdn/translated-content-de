---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{APIRef("Web Components")}}

Das **`CustomStateSet`** Interface des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) und ermöglicht das Hinzufügen und Entfernen von Zuständen aus dem Set.

Das Interface kann verwendet werden, um die internen Zustände eines benutzerdefinierten Elements offenzulegen, sodass sie von Code, der das Element verwendet, in CSS-Selektoren eingesetzt werden können.

## Instanzeigenschaften

- [`CustomStateSet.size`](/de/docs/Web/API/CustomStateSet/size)
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanzmethoden

- [`CustomStateSet.add()`](/de/docs/Web/API/CustomStateSet/add)
  - : Fügt dem Set einen Wert hinzu.
- [`CustomStateSet.clear()`](/de/docs/Web/API/CustomStateSet/clear)
  - : Entfernt alle Elemente aus dem `CustomStateSet` Objekt.
- [`CustomStateSet.delete()`](/de/docs/Web/API/CustomStateSet/delete)
  - : Entfernt einen Wert aus dem `CustomStateSet` Objekt.
- [`CustomStateSet.entries()`](/de/docs/Web/API/CustomStateSet/entries)
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `CustomStateSet` in Einfügereihenfolge zurück.
- [`CustomStateSet.forEach()`](/de/docs/Web/API/CustomStateSet/forEach)
  - : Führt eine bereitgestellte Funktion für jeden Wert im `CustomStateSet` Objekt aus.
- [`CustomStateSet.has()`](/de/docs/Web/API/CustomStateSet/has)
  - : Gibt ein {{jsxref("Boolean")}} zurück, das angibt, ob ein Element mit dem angegebenen Wert vorhanden ist.
- [`CustomStateSet.keys()`](/de/docs/Web/API/CustomStateSet/keys)
  - : Ein Alias für [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values).
- [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `CustomStateSet` Objekt in Einfügereihenfolge liefert.

## Beschreibung

Eingebaute HTML-Elemente können verschiedene _Zustände_ haben, wie "aktiviert" und "deaktiviert", "ausgewählt" und "nicht ausgewählt", "initial", "ladend" und "bereit".
Einige dieser Zustände sind öffentlich und können mithilfe von Eigenschaften/Attributen gesetzt oder abgefragt werden, während andere im Wesentlichen intern sind und nicht direkt gesetzt werden können.
Ob extern oder intern, Elementzustände können im Allgemeinen mithilfe von [CSS-Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) als Selektoren ausgewählt und gestylt werden.

Das `CustomStateSet` erlaubt Entwicklern, Zustände für autonome benutzerdefinierte Elemente hinzuzufügen und zu löschen (aber nicht für Elemente, die von eingebauten Elementen abgeleitet sind).
Diese Zustände können dann als benutzerdefinierte Zustands-Pseudoklassen-Selektoren auf ähnliche Weise wie die Pseudoklassen für eingebaute Elemente verwendet werden.

### Benutzerdefinierte Elementzustände setzen

Um das `CustomStateSet` verfügbar zu machen, muss ein benutzerdefiniertes Element zunächst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals) Objekt anzuhängen.
`CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben.
Beachten Sie, dass `ElementInternals` nicht an ein benutzerdefiniertes Element, das auf einem eingebauten Element basiert, angehängt werden kann, sodass dieses Feature nur für autonome benutzerdefinierte Elemente funktioniert (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet` Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von Zustandswerten halten kann.
Jeder Wert ist ein benutzerdefinierter Bezeichner.
Bezeichner können dem Set hinzugefügt oder daraus gelöscht werden.
Wenn ein Bezeichner im Set vorhanden ist, ist der entsprechende Zustand `true`, während, wenn er entfernt wird, der Zustand `false` ist.

Benutzerdefinierte Elemente, die Zustände mit mehr als zwei Werten haben, können diese durch mehrere boolesche Zustände darstellen, von denen nur einer gleichzeitig `true` (im `CustomStateSet` vorhanden) ist.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind jedoch nicht direkt außerhalb der benutzerdefinierten Komponente zugänglich.

### Interaktion mit CSS

Sie können ein benutzerdefiniertes Element, das sich in einem bestimmten Zustand befindet, mithilfe der [`:state()`](/de/docs/Web/CSS/:state) _benutzerdefinierte Zustands-Pseudoklasse_ auswählen.
Das Format dieser Pseudoklasse ist `:state(my-state-name)`, wobei `my-state-name` der im Element definierte Zustand ist.
Die benutzerdefinierte Zustands-Pseudoklasse stimmt mit dem benutzerdefinierten Element nur überein, wenn der Zustand `true` ist (d.h. wenn `my-state-name` im `CustomStateSet` vorhanden ist).

Zum Beispiel stimmt das folgende CSS mit einem `labeled-checkbox` benutzerdefinierte Element überein, wenn das `CustomStateSet` des Elements den `checked` Zustand enthält, und wendet einen `solide` Rahmen auf das Kontrollkästchen an:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch verwendet werden, um einen benutzerdefinierten Zustand [innerhalb eines Schatten-DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) anzugeben, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklassen-Funktion angegeben wird.

Darüber hinaus kann die `:state()` Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part) Pseudoelement verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements anzugeben, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die [`:state()`](/de/docs/Web/CSS/:state) noch nicht unterstützen, verwenden ein CSS `<dashed-ident>`, um benutzerdefinierte Zustände auszuwählen, was jetzt veraltet ist.
> Informationen darüber, wie beide Ansätze unterstützt werden können, finden Sie im Abschnitt [Kompatibilität mit `<dashed-ident>` Syntax](#compatibility_with_dashed-ident_syntax) weiter unten.

## Beispiele

### Übereinstimmen des benutzerdefinierten Zustands eines benutzerdefinierten Kontrollkästchenelements

Dieses Beispiel, das aus der Spezifikation übernommen wurde, zeigt ein benutzerdefiniertes Kontrollkästchen-Element, das einen internen "checked" Zustand hat.
Dies wird dem `checked` benutzerdefinierten Zustand zugeordnet, sodass das Styling mit der `:state(checked)` benutzerdefinierten Zustands-Pseudoklasse angewendet werden kann.

#### JavaScript

Zuerst definieren wir unsere Klasse `LabeledCheckbox`, die sich von `HTMLElement` ableitet.
Im Konstruktor rufen wir die `super()` Methode auf, fügen einen Listener für das Klick-Ereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals) Objekt anzuhängen.

Der größte Teil der weiteren "Arbeit" wird dann `connectedCallback()` überlassen, das aufgerufen wird, wenn ein benutzerdefiniertes Element zur Seite hinzugefügt wird.
Der Inhalt des Elements wird mit einem `<style>` Element als der Text `[]` oder `[x]` gefolgt von einem Etikett definiert.
Beachtenswert ist hier, dass die benutzerdefinierte Zustands-Pseudoklasse verwendet wird, um den Text auszuwählen, der angezeigt werden soll: `:host(:state(checked))`.
Nach dem Beispiel unten werden wir im Detail darauf eingehen, was im Schnipsel passiert.

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

In der `LabeledCheckbox` Klasse:

- In `get checked()` und `set checked()` verwenden wir `ElementInternals.states`, um das `CustomStateSet` zu erhalten.
- Die `set checked(flag)` Methode fügt das "checked" Kennzeichen zum `CustomStateSet` hinzu, wenn das Kennzeichen gesetzt ist, und löscht das Kennzeichen, wenn das Kennzeichen `false` ist.
- Die `get checked()` Methode überprüft nur, ob die `checked` Eigenschaft im Set definiert ist.
- Der Eigenschaftswert wird umgeschaltet, wenn das Element angeklickt wird.

Dann rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define) Methode des Objekts auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nach dem Registrieren des benutzerdefinierten Elements können wir das Element wie gezeigt in HTML verwenden:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

#### CSS

Schließlich verwenden wir die `:state(checked)` benutzerdefinierte Zustands-Pseudoklasse, um CSS auszuwählen, wenn das Kontrollkästchen aktiviert ist.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

#### Ergebnis

Klicken Sie auf das Element, um zu sehen, dass ein anderer Rahmen angewendet wird, wenn der `checked` Zustand des Kontrollkästchens umgeschaltet wird.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Übereinstimmen eines benutzerdefinierten Zustands in einem Schatten-Teil eines benutzerdefinierten Elements

Dieses Beispiel, das aus der Spezifikation übernommen wurde, zeigt, dass benutzerdefinierte Zustände verwendet werden können, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements für das Styling zu bestimmen.
Schatten-Teile sind Teile des Schattenbaums, die absichtlich Seiten offenstehen, die das benutzerdefinierte Element verwenden.

Das Beispiel erstellt ein `<question-box>` benutzerdefiniertes Element, das eine Frageaufforderung zusammen mit einem Kontrollkästchen mit der Beschriftung "Ja" anzeigt.
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

Zuerst definieren wir die benutzerdefinierte Elementklasse `QuestionBox`, die sich von `HTMLElement` ableitet.
Wie gewohnt ruft der Konstruktor zuerst die `super()` Methode auf.
Als nächstes hängen wir einen Schatten-DOM-Baum an das benutzerdefinierte Element an, indem wir [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufrufen.

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

Der Inhalt der Schattenwurzel wird mithilfe von [`innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt.
Dies definiert ein {{HTMLElement("slot")}} Element, das den Standardaufforderungstext "Question" für das Element enthält.
Wir definieren dann ein `<labeled-checkbox>` benutzerdefiniertes Element mit dem Standardtext "Yes".
Dieses Kontrollkästchen wird durch den Namen `checkbox` mithilfe des [`part`](/de/docs/Web/HTML/Global_attributes/part) Attributs als Schatten-Teil der Fragebox freigelegt.

Beachten Sie, dass der Code und das Styling für das `<labeled-checkbox>` Element genau das gleiche sind wie im [vorherigen Beispiel](#übereinstimmen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchenelements) und daher hier nicht wiederholt werden.

Als nächstes rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define) Methode des Objekts auf, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element mit dem Namen `question-box` zu registrieren:

```js
customElements.define("question-box", QuestionBox);
```

#### HTML

Nach dem Registrieren des benutzerdefinierten Elements können wir das Element im HTML wie unten gezeigt verwenden.

```html
<!-- Question box with default prompt "Question" -->
<question-box></question-box>

<!-- Question box with custom prompt "Continue?" -->
<question-box>Continue?</question-box>
```

#### CSS

Der erste CSS-Block stimmt mit dem freigelegten Schatten-Teil namens `checkbox` mithilfe des [`::part()`](/de/docs/Web/CSS/::part) Selektors überein und stylt es standardmäßig `rot`.

```css
question-box::part(checkbox) {
  color: red;
}
```

Der zweite Block folgt auf `::part()` mit `:state()`, um `checkbox` Teile zu bestimmen, die sich im `checked` Zustand befinden:

```css
question-box::part(checkbox):state(checked) {
  color: green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kontrollkästchen, um die Farbänderung von `rot` zu `grün` zu sehen, wenn der `checked` Zustand umgeschaltet wird.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie das Szenario gehandhabt wird, in dem das benutzerdefinierte Element eine interne Eigenschaft mit mehreren möglichen Werten hat.

Das benutzerdefinierte Element in diesem Fall hat eine `state` Eigenschaft mit den erlaubten Werten: "loading", "interactive" und "complete".
Um dies zu realisieren, ordnen wir jeden Wert seinem benutzerdefinierten Zustand zu und erstellen einen Code, der sicherstellt, dass nur der Bezeichner festgelegt wird, der dem internen Zustand entspricht.
Dies können Sie in der Implementierung der `set state()` Methode sehen: wir setzen den internen Zustand, fügen den Bezeichner für den passenden benutzerdefinierten Zustand zum `CustomStateSet` hinzu und entfernen die Bezeichner, die mit allen anderen Werten verknüpft sind.

Der größte Teil des restlichen Codes ist ähnlich wie im Beispiel, das einen einzelnen booleschen Zustand zeigt (wir zeigen unterschiedlichen Text für jeden Zustand, während der Benutzer zwischen ihnen umschaltet).

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

Nach dem Registrieren des neuen Elements fügen wir es dem HTML hinzu.
Dies ist ähnlich wie das Beispiel, das einen einzelnen booleschen Zustand zeigt, außer dass wir keinen Wert angeben und den Standardwert aus dem Slot (`<slot>Click me</slot>`) verwenden.

```html
<many-state-element></many-state-element>
```

#### CSS

Im CSS verwenden wir die drei benutzerdefinierten Zustands-Pseudoklassen, um CSS für jeden der internen Zustandswerte auszuwählen: `:state(loading)`, `:state(interactive)`, `:state(complete)`.
Beachten Sie, dass der benutzerdefinierte Elementcode sicherstellt, dass nur einer dieser benutzerdefinierten Zustände gleichzeitig definiert sein kann.

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

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit `<dashed-ident>` Syntax

Früher wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen mit einem `<dashed-ident>` statt der [`:state()`](/de/docs/Web/CSS/:state) Funktion ausgewählt.
Browser-Versionen, die `:state()` nicht unterstützen, werfen einen Fehler, wenn ein Identifikator angegeben wird, der nicht mit dem Doppelstrich vorangestellt ist.
Wenn Unterstützung für diese Browser erforderlich ist, entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block verwenden, um beide Syntaxen zu unterstützen, oder verwenden Sie ein `<dashed-ident>` als Zustandswert und wählen Sie es mit sowohl dem `:--my-state` als auch dem `:state(--my-state)` CSS-Selektor aus.

### Verwendung eines try...catch Blocks

Dieser Code zeigt, wie Sie `try...catch` verwenden können, um zu versuchen, einen Zustandsbezeichner hinzuzufügen, der keinen `<dashed-ident>` verwendet, und zurück auf `<dashed-ident>` zu fallen, wenn ein Fehler auftritt.

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

### Verwendung von doppelstrich-präfixierten Identifikatoren

Eine alternative Lösung kann sein, das `<dashed-ident>` innerhalb von JavaScript zu verwenden.
Der Nachteil dieses Ansatzes ist, dass die Striche bei der Verwendung der CSS `:state()` Syntax enthalten sein müssen.

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
