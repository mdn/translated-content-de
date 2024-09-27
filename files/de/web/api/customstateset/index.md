---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Web Components")}}

Die **`CustomStateSet`**-Schnittstelle des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) und ermöglicht das Hinzufügen und Entfernen von Zuständen aus dem Set.

Die Schnittstelle kann verwendet werden, um die internen Zustände eines benutzerdefinierten Elements offenzulegen, sodass diese in CSS-Selektoren von Code, der das Element verwendet, eingebunden werden können.

## Instanz-Eigenschaften

- [`CustomStateSet.size`](/de/docs/Web/API/CustomStateSet/size)
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanz-Methoden

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
  - : Gibt ein {{jsxref("Boolean")}} zurück, das anzeigt, ob ein Element mit dem angegebenen Wert vorhanden ist.
- [`CustomStateSet.keys()`](/de/docs/Web/API/CustomStateSet/keys)
  - : Ein Alias für [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values).
- [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `CustomStateSet`-Objekt in Einfügereihenfolge liefert.

## Beschreibung

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "enabled" und "disabled", "checked" und "unchecked", "initial", "loading" und "ready".
Einige dieser Zustände sind öffentlich und können über Eigenschaften/Attribute gesetzt oder abgefragt werden, während andere im Wesentlichen intern sind und nicht direkt eingestellt werden können.
Unabhängig davon, ob extern oder intern, können Elemente im Allgemeinen über [CSS-Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) als Selektoren ausgewählt und stilisiert werden.

Die `CustomStateSet`-Schnittstelle ermöglicht es Entwicklern, Zustände für autonome benutzerdefinierte Elemente hinzuzufügen und zu entfernen (jedoch nicht für von eingebauten Elementen abgeleitete Elemente).
Diese Zustände können dann in ähnlicher Weise wie die Pseudo-Klassen für eingebaute Elemente als benutzerdefinierte Zustands-Pseudo-Klassen-Selektoren verwendet werden.

### Einstellen von benutzerdefinierten Element-Zuständen

Um das `CustomStateSet` verfügbar zu machen, muss ein benutzerdefiniertes Element zuerst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zu verbinden.
`CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben.
Beachten Sie, dass `ElementInternals` nicht an ein benutzerdefiniertes Element angehängt werden kann, das auf einem eingebauten Element basiert, sodass diese Funktion nur für autonome benutzerdefinierte Elemente funktioniert (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von Zustandswerten halten kann.
Jeder Wert ist ein benutzerdefinierter Bezeichner.
Bezeichner können zum Set hinzugefügt oder aus diesem gelöscht werden.
Wenn ein Bezeichner im Set vorhanden ist, ist der bestimmte Zustand `true`, während er entfernt wird, ist der Zustand `false`.

Benutzerdefinierte Elemente, die Zustände mit mehr als zwei Werten haben, können diese mit mehreren booleschen Zuständen darstellen, von denen jeweils nur einer (`true`) zu einem Zeitpunkt im `CustomStateSet` vorhanden ist.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind jedoch außerhalb der benutzerdefinierten Komponente nicht direkt zugänglich.

### Interaktion mit CSS

Sie können ein benutzerdefiniertes Element, das sich in einem bestimmten Zustand befindet, mit der _benutzerdefinierten Zustands-Pseudo-Klasse_ [`:state()`](/de/docs/Web/CSS/:state) auswählen.
Das Format dieser Pseudo-Klasse ist `:state(mystatename)`, wobei `mystatename` der im Element definierte Zustand ist.
Die benutzerdefinierte Zustands-Pseudo-Klasse passt nur dann auf das benutzerdefinierte Element, wenn der Zustand `true` ist (d. h., wenn `mystatename` im `CustomStateSet` vorhanden ist).

Zum Beispiel passt das folgende CSS auf ein `labeled-checkbox` benutzerdefiniertes Element, wenn das `CustomStateSet` des Elements den `checked` Zustand enthält, und wendet einen `solid` Rand auf das Kontrollkästchen an:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen, indem `:state()` innerhalb der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudo-Klassen-Funktion angegeben wird.

Zusätzlich kann die `:state()` Pseudo-Klasse nach dem [`::part()`](/de/docs/Web/CSS/::part) Pseudo-Element verwendet werden, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements abzugleichen, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die [`:state()`](/de/docs/Web/CSS/:state) noch nicht unterstützen, verwenden ein CSS `<dashed-ident>`, um benutzerdefinierte Zustände auszuwählen, was nun veraltet ist.
> Informationen darüber, wie man beide Ansätze unterstützt, finden Sie im Abschnitt [Kompatibilität mit `<dashed-ident>`-Syntax](#compatibility_with_dashed-ident_syntax) unten.

## Beispiele

### Abgleich des benutzerdefinierten Zustands eines benutzerdefinierten Kontrollkästchen-Elements

Dieses Beispiel, das von der Spezifikation adaptiert wurde, demonstriert ein benutzerdefiniertes Kontrollkästchen-Element, das einen internen "checked"-Zustand hat.
Dieser wird auf den benutzerdefinierten Zustand `checked` abgebildet, sodass Styling unter Verwendung der `:state(checked)` benutzerdefinierten Zustands-Pseudo-Klasse angewendet werden kann.

#### JavaScript

Zuerst definieren wir unsere Klasse `LabeledCheckbox`, die von `HTMLElement` abgeleitet ist.
Im Konstruktor rufen wir die `super()`-Methode auf, fügen einen Listener für das Klick-Ereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zu verbinden.

Der größte Teil der weiteren "Arbeit" wird dann `connectedCallback()` überlassen, das aufgerufen wird, wenn ein benutzerdefiniertes Element zur Seite hinzugefügt wird.
Der Inhalt des Elements wird unter Verwendung eines `<style>`-Elements definiert, entweder als `[]` oder `[x]` gefolgt von einer Beschriftung.
Bemerkenswert ist hier, dass die benutzerdefinierte Zustands-Pseudo-Klasse verwendet wird, um den anzuzeigenden Text auszuwählen: `:host(:state(checked))`.
Nach dem untenstehenden Beispiel werden wir im Detail darlegen, was im Schnipsel passiert.

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
- Die Methode `set checked(flag)` fügt den `"checked"` Bezeichner zum `CustomStateSet` hinzu, wenn die Flagge gesetzt ist, und löscht den Bezeichner, wenn die Flagge `false` ist.
- Die Methode `get checked()` überprüft lediglich, ob die `checked`-Eigenschaft im Set definiert ist.
- Der Eigenschaftswert wird umgeschaltet, wenn das Element angeklickt wird.

Anschließend rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode auf das Objekt zurück, das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegeben wird, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nach der Registrierung des benutzerdefinierten Elements können wir das Element im HTML wie gezeigt verwenden:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

#### CSS

Schließlich verwenden wir die `:state(checked)` benutzerdefinierte Zustands-Pseudo-Klasse, um CSS auszuwählen, wenn das Kästchen aktiviert ist.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

#### Ergebnis

Klicken Sie auf das Element, um einen anderen Rahmen anzuzeigen, wenn der `checked` Zustand des Kontrollkästchens umgeschaltet wird.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Abgleich eines benutzerdefinierten Zustands in einem Schatten-Teil eines benutzerdefinierten Elements

Dieses Beispiel, das von der Spezifikation adaptiert wurde, demonstriert, dass benutzerdefinierte Zustände verwendet werden können, um die [Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements für Styling zu targetieren.
Schatten-Teile sind Abschnitte des Schattenbaums, die absichtlich an Seiten exponiert werden, die das benutzerdefinierte Element verwenden.

Das Beispiel erstellt ein `<question-box>` benutzerdefiniertes Element, das eine Frageaufforderung zusammen mit einem Kontrollkästchen mit der Beschriftung "Yes" anzeigt.
Das Element verwendet das `<labeled-checkbox>`, das im [vorherigen Beispiel](#abgleich_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchen-elements) für das Kontrollkästchen definiert wurde.

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

Zuerst definieren wir die benutzerdefinierte Element-Klasse `QuestionBox`, die von `HTMLElement` abgeleitet ist.
Wie immer ruft der Konstruktor zunächst die `super()`-Methode auf.
Als Nächstes fügen wir dem benutzerdefinierten Element einen Shadow-DOM-Baum hinzu, indem wir [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufrufen.

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

Der Inhalt der Shadow-Root wird mithilfe von [`innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt.
Dies definiert ein {{HTMLElement("slot")}}-Element, das den Standardaufforderungstext "Question" für das Element enthält.
Dann definieren wir ein `<labeled-checkbox>`-benutzerdefiniertes Element mit dem Standardtext `"Yes"`.
Dieses Kontrollkästchen wird als Schatten-Teil der Question-Box mit dem Namen `checkbox` mithilfe des [`part`](/de/docs/Web/HTML/Global_attributes#part)-Attributs exponiert.

Beachten Sie, dass der Code und das Styling für das `<labeled-checkbox>`-Element genau gleich wie im [vorherigen Beispiel](#abgleich_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_kontrollkästchen-elements) sind und daher hier nicht wiederholt werden.

Als Nächstes rufen wir die [`define()`](/de/docs/Web/API/CustomElementRegistry/define)-Methode auf das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegebene Objekt auf, um das benutzerdefinierte Element mit dem Namen `question-box` zu registrieren:

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

Der erste CSS-Block stimmt mit dem exponierten Schattenteil namens `checkbox` mithilfe des [`::part()`](/de/docs/Web/CSS/::part)-Selektors überein und stylt es standardmäßig `red`.

```css
question-box::part(checkbox) {
  color: red;
}
```

Der zweite Block folgt auf `::part()` mit `:state()`, um `checkbox`-Teile abzugleichen, die sich im `checked`-Zustand befinden:

```css
question-box::part(checkbox):state(checked) {
  color: green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kontrollkästchen, um zu sehen, wie sich die Farbe von `red` nach `green` ändert, wenn der `checked`-Zustand umgeschaltet wird.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie man den Fall behandelt, in dem das benutzerdefinierte Element eine interne Eigenschaft mit mehreren möglichen Werten hat.

Das benutzerdefinierte Element in diesem Fall hat eine `state`-Eigenschaft mit erlaubten Werten: "loading", "interactive" und "complete".
Um dies zu ermöglichen, ordnen wir jeden Wert seinem benutzerdefinierten Zustand zu und erstellen einen Code, der sicherstellt, dass nur der Bezeichner, der dem internen Zustand entspricht, gesetzt ist.
Sie können dies in der Implementierung der Methode `set state()` sehen: Wir setzen den internen Zustand, fügen den Bezeichner für den passenden benutzerdefinierten Zustand zum `CustomStateSet` hinzu und entfernen die Bezeichner, die mit allen anderen Werten verbunden sind.

Der Großteil des restlichen Codes ähnelt dem Beispiel, das einen einzelnen booleschen Zustand darstellt (wir zeigen unterschiedlichen Text für jeden Zustand, während der Benutzer diese durchläuft).

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

Nach der Registrierung des neuen Elements fügen wir es zum HTML hinzu.
Dies ähnelt dem Beispiel, das einen einzelnen booleschen Zustand darstellt, außer dass wir keinen Wert angeben und den Standardwert aus dem Slot verwenden (`<slot>Click me</slot>`).

```html
<many-state-element></many-state-element>
```

#### CSS

Im CSS verwenden wir die drei benutzerdefinierten Zustands-Pseudo-Klassen, um CSS für jeden der internen Zustandswerte auszuwählen: `:state(loading)`, `:state(interactive)`, `:state(complete)`.
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

Klicken Sie auf das Element, um einen anderen Rahmen anzuzeigen, sobald sich der Zustand ändert.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit `<dashed-ident>`-Syntax

Zuvor wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen mithilfe eines `<dashed-ident>` statt der [`:state()`](/de/docs/Web/CSS/:state)-Funktion ausgewählt.
Browser-Versionen, die `:state()` nicht unterstützen, werfen einen Fehler, wenn ein Identifikator bereitgestellt wird, der nicht mit dem Doppelstrich-Präfix versehen ist.
Wenn die Unterstützung für diese Browser erforderlich ist, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um beide Syntaxen zu unterstützen, oder verwenden Sie ein `<dashed-ident>` als Wert des Zustands und wählen Sie es sowohl mit dem `:--mystate` als auch mit dem `:state(--mystate)`-CSS-Selektor aus.

### Verwendung eines try...catch-Blocks

Dieser Code zeigt, wie Sie `try...catch` verwenden können, um zu versuchen, einem Statusidentifikator hinzuzufügen, der keinen `<dashed-ident>` verwendet, und auf `<dashed-ident>` zurückzugreifen, wenn ein Fehler auftritt.

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

### Verwendung von Doppeldash-präfixierten Idents

Eine alternative Lösung kann darin bestehen, das `<dashed-ident>` innerhalb von JavaScript zu verwenden.
Der Nachteil dieses Ansatzes ist, dass die Striche bei Verwendung der CSS `:state()`-Syntax enthalten sein müssen.

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
