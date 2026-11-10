---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("Web Components")}}

Die **`CustomStateSet`**-Schnittstelle des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element). Sie ermöglicht es, Zustände zur Menge hinzuzufügen und daraus zu entfernen.

Mit der Schnittstelle können die internen Zustände eines benutzerdefinierten Elements zugänglich gemacht werden, sodass Code, der das Element verwendet, sie in CSS-Selektoren nutzen kann.

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
  - : Gibt einen neuen Iterator zurück, der die Werte für jedes Element im `CustomStateSet` in Einfügereihenfolge liefert.
- [`CustomStateSet.forEach()`](/de/docs/Web/API/CustomStateSet/forEach)
  - : Führt für jeden Wert im `CustomStateSet`-Objekt eine bereitgestellte Funktion aus.
- [`CustomStateSet.has()`](/de/docs/Web/API/CustomStateSet/has)
  - : Gibt einen {{jsxref("Boolean")}}-Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert vorhanden ist.
- [`CustomStateSet.keys()`](/de/docs/Web/API/CustomStateSet/keys)
  - : Ein Alias für [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values).
- [`CustomStateSet.values()`](/de/docs/Web/API/CustomStateSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `CustomStateSet`-Objekt in Einfügereihenfolge liefert.

## Beschreibung

Integrierte HTML-Elemente können verschiedene _Zustände_ haben, beispielsweise „aktiviert“ und „deaktiviert“, „ausgewählt“ und „nicht ausgewählt“ oder „initial“, „wird geladen“ und „bereit“.
Einige dieser Zustände sind öffentlich und können über Eigenschaften oder Attribute gesetzt oder abgefragt werden. Andere sind dagegen praktisch intern und können nicht direkt gesetzt werden.
Unabhängig davon, ob Zustände öffentlich oder intern sind, können Elemente anhand ihrer Zustände in der Regel mithilfe von [CSS-Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ausgewählt und gestaltet werden.

Mit `CustomStateSet` können Entwickler Zustände für autonome benutzerdefinierte Elemente hinzufügen und entfernen, nicht jedoch für Elemente, die von integrierten Elementen abgeleitet sind.
Diese Zustände können anschließend ähnlich wie die Pseudoklassen integrierter Elemente als Selektoren für benutzerdefinierte Zustände verwendet werden.

### Zustände benutzerdefinierter Elemente festlegen

Damit `CustomStateSet` verfügbar ist, muss ein benutzerdefiniertes Element zunächst [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) aufrufen, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzubinden.
`CustomStateSet` wird dann von [`ElementInternals.states`](/de/docs/Web/API/ElementInternals/states) zurückgegeben.
Beachten Sie, dass `ElementInternals` nicht an ein benutzerdefiniertes Element angebunden werden kann, das auf einem integrierten Element basiert. Diese Funktion ist daher nur für autonome benutzerdefinierte Elemente verfügbar (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von Zustandswerten enthalten kann.
Jeder Wert ist ein benutzerdefinierter Bezeichner.
Bezeichner können der Menge hinzugefügt oder daraus entfernt werden.
Wenn ein Bezeichner in der Menge vorhanden ist, hat der entsprechende Zustand den Wert `true`; wird er entfernt, hat der Zustand den Wert `false`.

Benutzerdefinierte Elemente mit Zuständen, die mehr als zwei Werte annehmen können, können diese durch mehrere boolesche Zustände darstellen, von denen jeweils nur einer `true` ist, also im `CustomStateSet` vorhanden ist.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind aber außerhalb der benutzerdefinierten Komponente nicht direkt zugänglich.

### Zusammenspiel mit CSS

Mit der _Pseudoklasse für benutzerdefinierte Zustände_ {{cssxref(":state()")}} können Sie ein benutzerdefiniertes Element auswählen, das sich in einem bestimmten Zustand befindet.
Diese Pseudoklasse hat das Format `:state(my-state-name)`, wobei `my-state-name` der im Element definierte Zustand ist.
Die Pseudoklasse stimmt nur dann mit dem benutzerdefinierten Element überein, wenn der Zustand `true` ist, also `my-state-name` im `CustomStateSet` vorhanden ist.

Das folgende CSS wählt beispielsweise ein benutzerdefiniertes `labeled-checkbox`-Element aus, wenn dessen `CustomStateSet` den Zustand `checked` enthält, und versieht das Kontrollkästchen mit einem `solid`-Rahmen:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch einen benutzerdefinierten Zustand [innerhalb des Shadow-DOMs eines benutzerdefinierten Elements](/de/docs/Web/CSS/Reference/Selectors/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) auswählen. Dazu wird `:state()` innerhalb der Pseudoklassenfunktion {{cssxref(":host()")}} angegeben.

Außerdem kann die Pseudoklasse `:state()` nach dem Pseudoelement {{cssxref("::part()")}} verwendet werden, um [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements auszuwählen, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die {{cssxref(":state()")}} noch nicht unterstützen, verwenden einen CSS-`<dashed-ident>`, um benutzerdefinierte Zustände auszuwählen. Diese Syntax ist inzwischen veraltet.
> Wie Sie beide Ansätze unterstützen können, erfahren Sie unten im Abschnitt [Kompatibilität mit der `<dashed-ident>`-Syntax](#compatibility_with_dashed-ident_syntax).

## Beispiele

### Den benutzerdefinierten Zustand eines benutzerdefinierten Kontrollkästchens auswählen

Dieses an die Spezifikation angelehnte Beispiel zeigt ein benutzerdefiniertes Kontrollkästchen mit einem internen Zustand „ausgewählt“.
Dieser wird dem benutzerdefinierten Zustand `checked` zugeordnet, sodass das Element mithilfe der Pseudoklasse `:state(checked)` gestaltet werden kann.

#### JavaScript

Zunächst definieren wir die Klasse `LabeledCheckbox`, die `HTMLElement` erweitert.
Im Konstruktor rufen wir die Methode `super()` auf, fügen einen Listener für das Klickereignis hinzu und rufen [`this.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals) auf, um ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt anzubinden.

Der Großteil der übrigen Arbeit erfolgt in `connectedCallback()`, das aufgerufen wird, wenn ein benutzerdefiniertes Element zur Seite hinzugefügt wird.
Der Inhalt des Elements wird mithilfe eines `<style>`-Elements definiert: Er besteht aus dem Text `[]` oder `[x]`, gefolgt von einer Beschriftung.
Bemerkenswert ist, dass die Pseudoklasse für benutzerdefinierte Zustände verwendet wird, um den anzuzeigenden Text auszuwählen: `:host(:state(checked))`.
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
- Der Eigenschaftswert wird umgeschaltet, wenn auf das Element geklickt wird.

Anschließend rufen wir die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) für das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegebene Objekt auf, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nach der Registrierung können wir das benutzerdefinierte Element wie folgt in HTML verwenden:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

#### CSS

Schließlich verwenden wir die Pseudoklasse `:state(checked)`, um CSS für den Fall auszuwählen, dass das Kontrollkästchen ausgewählt ist.

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

{{EmbedLiveSample("matching_the_custom_state_of_a_custom_checkbox_element", "100%", 50)}}

### Einen benutzerdefinierten Zustand in einem Shadow-Part eines benutzerdefinierten Elements auswählen

Dieses an die Spezifikation angelehnte Beispiel zeigt, wie benutzerdefinierte Zustände verwendet werden können, um [Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) eines benutzerdefinierten Elements gezielt zu gestalten.
Shadow-Parts sind Bereiche des Shadow-Trees, die Seiten, auf denen das benutzerdefinierte Element verwendet wird, bewusst zugänglich gemacht werden.

Im Beispiel wird ein benutzerdefiniertes `<question-box>`-Element erstellt, das eine Frage und ein mit „Yes“ beschriftetes Kontrollkästchen anzeigt.
Für das Kontrollkästchen verwendet das Element das im [vorherigen Beispiel](#den_benutzerdefinierten_zustand_eines_benutzerdefinierten_kontrollkästchens_auswählen) definierte `<labeled-checkbox>`.

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

Zunächst definieren wir die Klasse `QuestionBox` für das benutzerdefinierte Element. Sie erweitert `HTMLElement`.
Wie üblich ruft der Konstruktor zuerst die Methode `super()` auf.
Anschließend binden wir durch einen Aufruf von [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) einen Shadow-DOM-Tree an das benutzerdefinierte Element an.

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

Der Inhalt der Shadow-Root wird mit [`innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) festgelegt.
Dabei wird ein {{HTMLElement("slot")}}-Element definiert, das den Standardtext „Question“ enthält.
Anschließend definieren wir ein benutzerdefiniertes `<labeled-checkbox>`-Element mit dem Standardtext `"Yes"`.
Dieses Kontrollkästchen wird mithilfe des Attributs [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) unter dem Namen `checkbox` als Shadow-Part des Fragefelds zugänglich gemacht.

Beachten Sie, dass Code und Gestaltung des `<labeled-checkbox>`-Elements genau dem [vorherigen Beispiel](#den_benutzerdefinierten_zustand_eines_benutzerdefinierten_kontrollkästchens_auswählen) entsprechen und deshalb hier nicht wiederholt werden.

Anschließend rufen wir die Methode [`define()`](/de/docs/Web/API/CustomElementRegistry/define) für das von [`Window.customElements`](/de/docs/Web/API/Window/customElements) zurückgegebene Objekt auf, um das benutzerdefinierte Element unter dem Namen `question-box` zu registrieren:

```js
customElements.define("question-box", QuestionBox);
```

#### HTML

Nach der Registrierung können wir das benutzerdefinierte Element wie folgt in HTML verwenden.

```html
<!-- Question box with default prompt "Question" -->
<question-box></question-box>

<!-- Question box with custom prompt "Continue?" -->
<question-box>Continue?</question-box>
```

#### CSS

Der erste CSS-Block wählt mit dem Selektor {{cssxref("::part()")}} den zugänglich gemachten Shadow-Part namens `checkbox` aus und gestaltet ihn standardmäßig in `red`.

```css
question-box::part(checkbox) {
  color: red;
}
```

Im zweiten Block folgt auf `::part()` die Pseudoklasse `:state()`, um `checkbox`-Parts auszuwählen, die sich im Zustand `checked` befinden:

```css
question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kontrollkästchen, um zu sehen, wie sich beim Umschalten des Zustands `checked` die Farbe von `red` zu `green` ändert und eine Umrandung erscheint.

{{EmbedLiveSample("matching_a_custom_state_in_a_shadow_part_of_a_custom_element", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie Sie mit einer internen Eigenschaft eines benutzerdefinierten Elements umgehen, die mehrere mögliche Werte hat.

Das benutzerdefinierte Element hat in diesem Fall eine Eigenschaft `state` mit den zulässigen Werten „loading“, „interactive“ und „complete“.
Dazu ordnen wir jedem Wert einen benutzerdefinierten Zustand zu und stellen im Code sicher, dass nur der Bezeichner gesetzt ist, der dem internen Zustand entspricht.
Dies ist in der Implementierung der Methode `set state()` zu sehen: Wir setzen den internen Zustand, fügen den Bezeichner für den entsprechenden benutzerdefinierten Zustand zum `CustomStateSet` hinzu und entfernen die Bezeichner aller anderen Werte.

Der Großteil des übrigen Codes ähnelt dem Beispiel für einen einzelnen booleschen Zustand. Für jeden Zustand wird ein anderer Text angezeigt, während Benutzer zwischen den Zuständen wechseln.

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
Dies ähnelt dem Beispiel für einen einzelnen booleschen Zustand. Allerdings geben wir keinen Wert an, sondern verwenden den Standardwert aus dem Slot (`<slot>Click me</slot>`).

```html
<many-state-element></many-state-element>
```

#### CSS

Im CSS verwenden wir die drei Pseudoklassen für benutzerdefinierte Zustände, um CSS für jeden der internen Zustandswerte auszuwählen: `:state(loading)`, `:state(interactive)`, `:state(complete)`.
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

Klicken Sie auf das Element, um zu sehen, wie sich der angewendete Rahmen mit dem Zustand ändert.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit der `<dashed-ident>`-Syntax

Früher wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen mithilfe eines `<dashed-ident>` statt der Funktion {{cssxref(":state()")}} ausgewählt.
Browser-Versionen, die `:state()` nicht unterstützen, geben einen Fehler aus, wenn ihnen ein Bezeichner übergeben wird, dem keine zwei Bindestriche vorangestellt sind.
Wenn Sie diese Browser unterstützen müssen, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block für beide Syntaxvarianten oder verwenden Sie einen `<dashed-ident>` als Zustandswert und wählen Sie ihn mit den beiden CSS-Selektoren `:--my-state` und `:state(--my-state)` aus.

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

Eine alternative Lösung besteht darin, den `<dashed-ident>` in JavaScript zu verwenden.
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

[Benutzerdefinierte Elemente verwenden](/de/docs/Web/API/Web_components/Using_custom_elements)
