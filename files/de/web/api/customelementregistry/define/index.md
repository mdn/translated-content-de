---
title: "CustomElementRegistry: define()-Methode"
short-title: define()
slug: Web/API/CustomElementRegistry/define
l10n:
  sourceCommit: fed985f0944d1f8bdd3ff85b34b3e31069b8eb9c
---

{{APIRef("Web Components")}}

Die **`define()`**-Methode der [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Schnittstelle fügt dem Registry für benutzerdefinierte Elemente eine Definition für ein benutzerdefiniertes Element hinzu und ordnet dessen Namen dem Konstruktor zu, der zu seiner Erstellung verwendet wird.

## Syntax

```js-nolint
define(name, constructor)
define(name, constructor, options)
```

### Parameter

- `name`
  - : Name für das neue benutzerdefinierte Element. Muss ein [gültiger Name für ein benutzerdefiniertes Element](#gültige_namen_für_benutzerdefinierte_elemente) sein.
- `constructor`
  - : Konstruktor für das neue benutzerdefinierte Element. Er kann die folgenden Instanzmethoden haben (definiert auf `constructor.prototype`):
    - `connectedCallback`
    - `disconnectedCallback`
    - `connectedMoveCallback`
    - `adoptedCallback`
    - `attributeChangedCallback`

    Er kann die folgenden statischen Eigenschaften haben:
    - `observedAttributes`: ein Array von Strings. Wird nur gelesen, wenn `attributeChangedCallback` definiert ist.
    - `disabledFeatures`: ein Array, das die Werte `"internals"` und/oder `"shadow"` enthält.
    - `formAssociated`: ein boolescher Wert.

    Wenn `formAssociated` den Wert `true` hat, kann er zusätzlich die folgenden Instanzmethoden haben:
    - `formAssociatedCallback`
    - `formResetCallback`
    - `formDisabledCallback`
    - `formStateRestoreCallback`

    Alle diese Methoden und Eigenschaften werden nur einmal abgerufen, wenn `define()` aufgerufen wird. Informationen zu ihrem Verhalten finden Sie unter [Using custom elements](/de/docs/Web/API/Web_components/Using_custom_elements).

- `options` {{optional_inline}}
  - : Objekt, das steuert, wie das Element definiert wird. Derzeit wird eine Option unterstützt:
    - `extends`
      - : String, der den Namen eines zu erweiternden integrierten Elements angibt.
        Wird verwendet, um ein angepasstes integriertes Element zu erstellen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) bereits einen Eintrag mit demselben Namen oder demselben Konstruktor enthält (oder anderweitig bereits definiert ist).
    - Die Option `extends` angegeben ist und ein [gültiger Name für ein benutzerdefiniertes Element](#gültige_namen_für_benutzerdefinierte_elemente) ist (d.h. Sie versuchen, ein benutzerdefiniertes Element zu erweitern).
    - Die Option `extends` angegeben ist, das Element, das erweitert werden soll, jedoch ein unbekanntes Element ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte [Name](#name) kein [gültiger Name für ein benutzerdefiniertes Element](#gültige_namen_für_benutzerdefinierte_elemente) ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der referenzierte Konstruktor kein Konstruktor ist.

## Beschreibung

Die `define()`-Methode fügt dem Registry für benutzerdefinierte Elemente eine Definition für ein benutzerdefiniertes Element hinzu und ordnet dessen Namen dem Konstruktor zu, der zu seiner Erstellung verwendet wird.

Es gibt zwei Arten von benutzerdefinierten Elementen, die Sie erstellen können:

- _Autonome benutzerdefinierte Elemente_ sind eigenständige Elemente, die nicht von integrierten HTML-Elementen erben.
- _Angepasste integrierte Elemente_ sind Elemente, die von integrierten HTML-Elementen erben und diese erweitern.

Um ein autonomes benutzerdefiniertes Element zu definieren, sollten Sie den Parameter `options` weglassen.

Um ein angepasstes integriertes Element zu definieren, müssen Sie den Parameter `options` übergeben, wobei seine Eigenschaft `extends` auf den Namen des integrierten Elements gesetzt ist, das Sie erweitern. Dies muss der Schnittstelle entsprechen, von der die Klassendefinition Ihres benutzerdefinierten Elements erbt. Um beispielsweise das Element {{htmlelement("p")}} anzupassen, müssen Sie `{extends: "p"}` an `define()` übergeben, und die Klassendefinition Ihres Elements muss von [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erben.

### Gültige Namen für benutzerdefinierte Elemente

Namen für benutzerdefinierte Elemente müssen:

- mit einem ASCII-Kleinbuchstaben (a-z) beginnen
- einen Bindestrich enthalten
- keine ASCII-Großbuchstaben enthalten
- keine ASCII-Leerzeichen, `NULL`, `/` oder `>` enthalten (jeweils U+0000, U+002F oder U+003E)
- keiner der folgenden Namen sein:
  - "annotation-xml"
  - "color-profile"
  - "font-face"
  - "font-face-src"
  - "font-face-uri"
  - "font-face-format"
  - "font-face-name"
  - "missing-glyph"

## Beispiele

### Definieren eines autonomen benutzerdefinierten Elements

Die folgende Klasse implementiert ein minimales autonomes benutzerdefiniertes Element:

```js
class MyAutonomousElement extends HTMLElement {
  constructor() {
    super();
  }
}
```

Dieses Element bewirkt nichts: Ein echtes autonomes Element würde seine Funktionalität in seinem Konstruktor und in den vom Standard bereitgestellten Lifecycle-Callbacks implementieren.
Siehe [Implementing a custom element](/de/docs/Web/API/Web_components/Using_custom_elements) in unserem Leitfaden zur Arbeit mit benutzerdefinierten Elementen.

Die obige Klassendefinition erfüllt jedoch die Anforderungen der `define()`-Methode, sodass wir sie mit folgendem Code definieren können:

```js
customElements.define("my-autonomous-element", MyAutonomousElement);
```

Anschließend könnten wir sie in einer HTML-Seite wie folgt verwenden:

```html
<my-autonomous-element>Element contents</my-autonomous-element>
```

### Definieren eines angepassten integrierten Elements

Die folgende Klasse implementiert ein angepasstes integriertes Element:

```js
class MyCustomizedBuiltInElement extends HTMLParagraphElement {
  constructor() {
    super();
  }
}
```

Dieses Element erweitert das integrierte Element {{htmlelement("p")}}.

In diesem minimalen Beispiel implementiert das Element keine Anpassung und verhält sich daher wie ein normales `<p>`-Element.
Es erfüllt jedoch die Anforderungen von `define()`, sodass wir es wie folgt definieren können:

```js
customElements.define(
  "my-customized-built-in-element",
  MyCustomizedBuiltInElement,
  {
    extends: "p",
  },
);
```

Anschließend könnten wir es in einer HTML-Seite wie folgt verwenden:

```html
<p is="my-customized-built-in-element"></p>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using custom elements](/de/docs/Web/API/Web_components/Using_custom_elements)
