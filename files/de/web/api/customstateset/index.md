---
title: CustomStateSet
slug: Web/API/CustomStateSet
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Components")}}

Die **`CustomStateSet`**-Schnittstelle des [Document Object Model](/de/docs/Web/API/Document_Object_Model) speichert eine Liste von Zuständen für ein [autonomes benutzerdefiniertes Element](/de/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) und ermöglicht das Hinzufügen und Entfernen von Zuständen aus dem Satz.

Die Schnittstelle kann verwendet werden, um die internen Zustände eines benutzerdefinierten Elements offenzulegen, sodass sie in CSS-Selektoren von Code, der das Element verwendet, genutzt werden können.

## Instanzeigenschaften

- {{domxref("CustomStateSet.size")}}
  - : Gibt die Anzahl der Werte im `CustomStateSet` zurück.

## Instanzmethoden

- {{domxref("CustomStateSet.add()")}}
  - : Fügt dem Set einen Wert hinzu.
- {{domxref("CustomStateSet.clear()")}}
  - : Entfernt alle Elemente aus dem `CustomStateSet`-Objekt.
- {{domxref("CustomStateSet.delete()")}}
  - : Entfernt einen Wert aus dem `CustomStateSet`-Objekt.
- {{domxref("CustomStateSet.entries()")}}
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `CustomStateSet` in Einfügereihenfolge zurück.
- {{domxref("CustomStateSet.forEach()")}}
  - : Führt eine bereitgestellte Funktion für jeden Wert im `CustomStateSet`-Objekt aus.
- {{domxref("CustomStateSet.has()")}}
  - : Gibt einen {{jsxref("Boolean")}} zurück, der bestätigt, ob ein Element mit dem gegebenen Wert vorhanden ist.
- {{domxref("CustomStateSet.keys()")}}
  - : Ein Alias für {{domxref("CustomStateSet.values()")}}.
- {{domxref("CustomStateSet.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `CustomStateSet`-Objekt in Einfügereihenfolge liefert.

## Beschreibung

Eingebaute HTML-Elemente können unterschiedliche _Zustände_ haben, wie "aktiviert" und "deaktiviert", "geprüft" und "ungeprüft", "initial", "ladend" und "bereit".
Einige dieser Zustände sind öffentlich und können über Eigenschaften/Attribute gesetzt oder abgefragt werden, während andere effektiv intern sind und nicht direkt gesetzt werden können.
Ob extern oder intern, Elementzustände können im Allgemeinen mithilfe von [CSS-Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) als Selektoren ausgewählt und gestylt werden.

Das `CustomStateSet` ermöglicht es Entwicklern, Zustände für autonome benutzerdefinierte Elemente hinzuzufügen und zu löschen (aber nicht für von eingebauten Elementen abgeleitete Elemente).
Diese Zustände können dann als benutzerdefinierte Zustands-Pseudoklassen-Selektoren in ähnlicher Weise wie die Pseudoklassen für eingebaute Elemente verwendet werden.

### Benutzerdefinierte Elementzustände festlegen

Um das `CustomStateSet` verfügbar zu machen, muss ein benutzerdefiniertes Element zunächst {{domxref("HTMLElement.attachInternals()")}} aufrufen, um ein {{domxref("ElementInternals")}}-Objekt anzuhängen.
`CustomStateSet` wird dann von {{domxref("ElementInternals.states")}} zurückgegeben.
Beachten Sie, dass `ElementInternals` nicht an ein benutzerdefiniertes Element angebracht werden kann, das auf einem eingebauten Element basiert, sodass diese Funktion nur für autonome benutzerdefinierte Elemente funktioniert (siehe [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

Die `CustomStateSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von Zustandswerten enthalten kann.
Jeder Wert ist ein benutzerdefinierter Bezeichner.
Bezeichner können dem Satz hinzugefügt oder daraus gelöscht werden.
Wenn ein Bezeichner im Satz vorhanden ist, ist der spezifische Zustand `true`, während, wenn er entfernt wird, der Zustand `false` ist.

Benutzerdefinierte Elemente, die Zustände mit mehr als zwei Werten haben, können diese mit mehreren booleschen Zuständen darstellen, von denen nur einer zu einem Zeitpunkt `true` (im `CustomStateSet` vorhanden) ist.

Die Zustände können innerhalb des benutzerdefinierten Elements verwendet werden, sind jedoch außerhalb der benutzerdefinierten Komponente nicht direkt zugänglich.

### Interaktion mit CSS

Sie können ein benutzerdefiniertes Element, das sich in einem bestimmten Zustand befindet, mithilfe der [`:state()`](/de/docs/Web/CSS/:state) _benutzerdefinierten Zustands-Pseudoklasse_ auswählen.
Das Format dieser Pseudoklasse ist `:state(mystatename)`, wobei `mystatename` der im Element definierte Zustand ist.
Die benutzerdefinierte Zustands-Pseudoklasse stimmt mit dem benutzerdefinierten Element nur überein, wenn der Zustand `true` ist (d. h., wenn `mystatename` im `CustomStateSet` vorhanden ist).

Zum Beispiel passt der folgende CSS-Code auf ein benutzerdefiniertes Element `labeled-checkbox`, wenn das `CustomStateSet` des Elements den `checked`-Zustand enthält und wendet einen `solid`-Rand auf die Checkbox an:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS kann auch verwendet werden, um einen benutzerdefinierten Zustand [innerhalb des Shadow DOM eines benutzerdefinierten Elements](/de/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) abzugleichen, indem `:state()` in der [`:host()`](/de/docs/Web/CSS/:host_function) Pseudoklassenfunktion angegeben wird.

Zusätzlich kann die `:state()`-Pseudoklasse nach dem [`::part()`](/de/docs/Web/CSS/::part) Pseudo-Element verwendet werden, um die [Schatteneile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements zu erfassen, die sich in einem bestimmten Zustand befinden.

> [!WARNING]
> Browser, die [`:state()`](/de/docs/Web/CSS/:state) noch nicht unterstützen, verwenden ein CSS `<dashed-ident>` zur Auswahl benutzerdefinierter Zustände, welches jetzt veraltet ist.
> Informationen zur Unterstützung beider Ansätze finden Sie im Abschnitt [Kompatibilität mit `<dashed-ident>`-Syntax](#compability_with_dashed-ident_syntax) unten.

## Beispiele

### Abgleichen des benutzerdefinierten Zustands eines benutzerdefinierten Checkbox-Elements

Dieses Beispiel, das aus der Spezifikation übernommen wurde, demonstriert ein benutzerdefiniertes Checkbox-Element, das einen internen "geprüft"-Zustand hat.
Dieser wird dem benutzerdefinierten `checked`-Zustand zugeordnet, sodass das Styling mithilfe der `:state(checked)`-benutzerdefinierten Zustands-Pseudoklasse angewendet werden kann.

#### JavaScript

Zuerst definieren wir unsere Klasse `LabeledCheckbox`, die von `HTMLElement` erbt.
Im Konstruktor rufen wir die `super()`-Methode auf, fügen einen Listener für das Klick-Ereignis hinzu und rufen {{domxref("HTMLElement.attachInternals()", "this.attachInternals()")}} auf, um ein {{domxref("ElementInternals", "ElementInternals")}}-Objekt anzuhängen.

Der Großteil der "Arbeit" wird dann `connectedCallback()` überlassen, das aufgerufen wird, wenn ein benutzerdefiniertes Element zur Seite hinzugefügt wird.
Der Inhalt des Elements wird mit einem `<style>`-Element definiert, um den Text `[]` oder `[x]` gefolgt von einer Überschrift darzustellen.
Besonders bemerkenswert ist hier, dass die benutzerdefinierte Zustands-Pseudoklasse verwendet wird, um den anzuzeigenden Text auszuwählen: `:host(:state(checked))`.
Nach dem folgenden Beispiel werden wir näher darauf eingehen, was im Code-Snippet passiert.

```js
class LabeledCheckbox extends HTMLElement {
  constructor() {
    super();
    this._boundOnClick = this._onClick.bind(this);
    this.addEventListener("click", this._boundOnClick);

    // Anhängen eines ElementInternals, um die Zuständeigenschaft zu erhalten
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
    // Umschalten der 'checked'-Eigenschaft, wenn das Element angeklickt wird
    this.checked = !this.checked;
  }

  static isStateSyntaxSupported() {
    return CSS.supports("selector(:state(checked))");
  }
}

customElements.define("labeled-checkbox", LabeledCheckbox);

// Anzeige einer Warnung für nicht unterstützte Browser
document.addEventListener("DOMContentLoaded", () => {
  if (!LabeledCheckbox.isStateSyntaxSupported()) {
    if (!document.getElementById("state-warning")) {
      const warning = document.createElement("div");
      warning.id = "state-warning";
      warning.style.color = "red";
      warning.textContent = "Diese Funktion wird von Ihrem Browser nicht unterstützt.";
      document.body.insertBefore(warning, document.body.firstChild);
    }
  }
});
```

In der `LabeledCheckbox`-Klasse:

- In den `get checked()` und `set checked()` verwenden wir `ElementInternals.states`, um das `CustomStateSet` zu erhalten.
- Die Methode `set checked(flag)` fügt dem `CustomStateSet` den "checked"-Bezeichner hinzu, wenn das Flag gesetzt ist, und löscht den Bezeichner, wenn das Flag `false` ist.
- Die Methode `get checked()` prüft nur, ob die `checked`-Eigenschaft im Satz definiert ist.
- Der Eigenschaftswert wird umgeschaltet, wenn das Element angeklickt wird.

Anschließend rufen wir die {{domxref("CustomElementRegistry/define", "define()")}}-Methode für das von {{domxref("Window.customElements")}} zurückgegebene Objekt auf, um das benutzerdefinierte Element zu registrieren:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

Nachdem wir das benutzerdefinierte Element registriert haben, verwenden wir das Element im HTML wie gezeigt:

```html
<labeled-checkbox>Müssen Sie aktivieren</labeled-checkbox>
```

#### CSS

Zuletzt verwenden wir die `:state(checked)`-benutzerdefinierte Zustands-Pseudoklasse, um CSS auszuwählen, wenn das Kästchen aktiviert ist.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

#### Ergebnis

Klicken Sie auf das Element, um eine andere Umrandung anzuwenden, während der `checked`-Zustand des Kästchens umgeschaltet wird.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Abgleichen eines benutzerdefinierten Zustands in einem Schattenbereich eines benutzerdefinierten Elements

Dieses Beispiel, das aus der Spezifikation übernommen wurde, demonstriert, dass benutzerdefinierte Zustände verwendet werden können, um die [Schatteneile](/de/docs/Web/CSS/CSS_shadow_parts) eines benutzerdefinierten Elements für das Styling zu erfassen.
Schatteneile sind Abschnitte des Schattenbaums, die absichtlich für Seiten freigegeben werden, die das benutzerdefinierte Element verwenden.

Das Beispiel erstellt ein `Fragebox`-benutzerdefiniertes Element, das eine Frageaufforderung zusammen mit einem Kontrollkästchen mit der Bezeichnung "Ja" anzeigt.
Das Element verwendet das `labeled-checkbox`, das im [vorherigen Beispiel](#abgleichen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_checkbox-elements) für das Kontrollkästchen definiert wurde.

#### JavaScript

```js hidden
class LabeledCheckbox extends HTMLElement {
  constructor() {
    super();
    this._boundOnClick = this._onClick.bind(this);
    this.addEventListener("click", this._boundOnClick);

    // Anhängen eines ElementInternals, um die Zuständeigenschaft zu erhalten
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
    // Umschalten der 'checked'-Eigenschaft, wenn das Element angeklickt wird
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
      warning.textContent = "Diese Funktion wird von Ihrem Browser nicht unterstützt.";
      document.body.insertBefore(warning, document.body.firstChild);
    }
  }
});
```

Zuerst definieren wir die benutzerdefinierte Elementklasse `QuestionBox`, die von `HTMLElement` erbt.
Wie immer ruft der Konstruktor zunächst die `super()`-Methode auf.
Als Nächstes fügen wir dem benutzerdefinierten Element einen Schatten-DOM-Baum hinzu, indem wir [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufrufen.

```js
class QuestionBox extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<div><slot>Frage</slot></div>
<labeled-checkbox part="checkbox">Ja</labeled-checkbox>
`;
  }
}
```

Der Inhalt des Schattenursprungs wird mithilfe von [`innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) gesetzt.
Dies definiert ein {{HTMLElement("slot")}}-Element, das den Standardaufforderungstext "Frage" für das Element enthält.
Anschließend definieren wir ein `labeled-checkbox`-benutzerdefiniertes Element mit dem Standardtext `"Ja"`.
Dieses Kontrollkästchen ist als Schattenbereich der Fragenbox mit dem Namen `checkbox` mithilfe des [`part`](/de/docs/Web/HTML/Global_attributes#part)-Attributes freigegeben.

Beachten Sie, dass der Code und das Styling für das `labeled-checkbox`-Element genau so sind wie im [vorherigen Beispiel](#abgleichen_des_benutzerdefinierten_zustands_eines_benutzerdefinierten_checkbox-elements) und daher hier nicht wiederholt werden.

Anschließend rufen wir die {{domxref("CustomElementRegistry/define", "define()")}}-Methode für das von {{domxref("Window.customElements")}} zurückgegebene Objekt auf, um das benutzerdefinierte Element mit dem Namen `question-box` zu registrieren:

```js
customElements.define("question-box", QuestionBox);
```

#### HTML

Nachdem wir das benutzerdefinierte Element registriert haben, können wir das Element im HTML wie unten gezeigt verwenden.

```html
<!-- Fragenbox mit Standardaufforderung "Frage" -->
<question-box></question-box>

<!-- Fragenbox mit benutzerdefinierter Aufforderung "Weiter?" -->
<question-box>Weiter?</question-box>
```

#### CSS

Der erste CSS-Block erfasst den freigegebenen Schattenbereich namens `checkbox` mithilfe des [`::part()`](/de/docs/Web/CSS/::part)-Selektors und stilisiert ihn standardmäßig auf `red`.

```css
question-box::part(checkbox) {
  color: red;
}
```

Der zweite Block folgt auf `::part()` mit `:state()`, um `checkbox`-Teile zu erfassen, die sich im `checked`-Zustand befinden:

```css
question-box::part(checkbox):state(checked) {
  color: green;
}
```

#### Ergebnis

Klicken Sie auf eines der Kästchen, um die Farbe von `red` auf `green` zu ändern, wenn der `checked`-Zustand umgeschaltet wird.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Nicht-boolesche interne Zustände

Dieses Beispiel zeigt, wie der Fall behandelt wird, dass das benutzerdefinierte Element eine interne Eigenschaft mit mehreren möglichen Werten hat.

Das benutzerdefinierte Element in diesem Fall hat eine `state`-Eigenschaft mit zulässigen Werten: "loading", "interactive" und "complete".
Um dies zum Laufen zu bringen, weisen wir jeden Wert seinem benutzerdefinierten Zustand zu und erstellen einen Code, der sicherstellt, dass nur der Bezeichner, der dem internen Zustand entspricht, gesetzt ist.
Dies können Sie bei der Implementierung der `set state()`-Methode beobachten: Wir setzen den internen Zustand, fügen den Bezeichner für den passenden benutzerdefinierten Zustand zum `CustomStateSet` hinzu und entfernen die Bezeichner, die mit allen anderen Werten assoziiert sind.

Der größte Teil des restlichen Codes ist dem Beispiel ähnlich, das einen einzelnen booleschen Zustand demonstriert (wir zeigen anderen Text für jeden Zustand an, während der Benutzer durch sie hindurchschaltet).

#### JavaScript

```js
class ManyStateElement extends HTMLElement {
  constructor() {
    super();
    this._boundOnClick = this._onClick.bind(this);
    this.addEventListener("click", this._boundOnClick);
    // Anhängen eines ElementInternals, um die Zuständeigenschaft zu erhalten
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
    // Setzen des internen Zustands auf den übergebenen Wert
    // Den Bezeichner abgleichen, der dem Zustand entspricht, und die anderen löschen
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
    // Durchlaufen des Zustands, wenn das Element angeklickt wird
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
      warning.textContent = "Diese Funktion wird von Ihrem Browser nicht unterstützt.";
      document.body.insertBefore(warning, document.body.firstChild);
    }
  }
});
```

#### HTML

Nachdem wir das neue Element registriert haben, fügen wir es dem HTML hinzu.
Dies ähnelt dem Beispiel, das einen einzelnen booleschen Zustand demonstriert, nur dass wir keinen Wert angeben und den Standardwert aus dem Slot verwenden (`<slot>Click me</slot>`).

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

Klicken Sie auf das Element, um eine andere Umrandung anzuwenden, während sich der Zustand ändert.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Kompatibilität mit `<dashed-ident>`-Syntax

Zuvor wurden benutzerdefinierte Elemente mit benutzerdefinierten Zuständen mithilfe eines `<dashed-ident>`-Statt der [`:state()`](/de/docs/Web/CSS/:state)-Funktion ausgewählt.
Browserversionen, die `:state()` nicht unterstützen, werfen einen Fehler, wenn ihnen ein Bezeichner, der nicht mit dem Doppelschrägstrich vorangestellt ist, bereitgestellt wird.
Wenn die Unterstützung dieser Browser erforderlich ist, verwenden Sie entweder einen [try...catch](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um beide Syntaxe zu unterstützen, oder verwenden Sie ein `<dashed-ident>` als Wert des Zustands und wählen Sie es mit sowohl dem `:--mystate` als auch dem `:state(--mystate)` CSS-Selektor.

### Verwenden eines try...catch-Blocks

Dieser Code zeigt, wie Sie `try...catch` verwenden können, um zu versuchen, einen Zustandsbezeichner hinzuzufügen, der kein `<dashed-ident>` verwendet, und dann auf `<dashed-ident>` zurückzufallen, wenn ein Fehler auftritt.

#### JavaScript

```js
class CompatibleStateElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    // Der Doppelschrägstrich wird in Browsern mit der
    // Legacy-Syntax benötigt, das Nichtbereitstellen führt 
    // zu einem Fehler
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

### Verwenden von Bezeichnern mit doppeltem Bindestrich

Eine alternative Lösung besteht darin, das `<dashed-ident>` innerhalb von JavaScript zu verwenden.
Der Nachteil dieses Ansatzes ist, dass die Bindestriche eingeschlossen werden müssen, wenn die CSS `:state()`-Syntax verwendet wird.

#### JavaScript

```js
class CompatibleStateElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }
  connectedCallback() {
    // Der Doppelschrägstrich wird in Browsern mit der
    // Legacy-Syntax benötigt, funktioniert aber auch mit
    // der modernen Syntax
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
