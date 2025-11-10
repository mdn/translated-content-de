---
title: "CustomElementRegistry: `define()`-Methode"
short-title: define()
slug: Web/API/CustomElementRegistry/define
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Components")}}

Die **`define()`**-Methode des [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Interfaces fügt eine Definition für ein benutzerdefiniertes Element zum benutzerdefinierten Elementregister hinzu und ordnet dessen Namen dem Konstruktor zu, der zur Erstellung verwendet wird.

## Syntax

```js-nolint
define(name, constructor)
define(name, constructor, options)
```

### Parameter

- `name`
  - : Name für das neue benutzerdefinierte Element. Muss ein [gültiger Name für benutzerdefinierte Elemente](#gültige_namen_für_benutzerdefinierte_elemente) sein.
- `constructor`
  - : Konstruktor für das neue benutzerdefinierte Element.
- `options` {{optional_inline}}
  - : Objekt, das steuert, wie das Element definiert wird. Eine Option wird derzeit unterstützt:
    - `extends`
      - : String, der den Namen eines eingebauten Elements spezifiziert, um es zu erweitern. Wird verwendet, um ein angepasstes eingebautes Element zu erstellen.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) bereits einen Eintrag mit demselben Namen oder Konstruktor enthält (oder bereits anderweitig definiert ist).
    - Die Option <code>extends</code> angegeben ist und es sich um einen [gültigen Namen für benutzerdefinierte Elemente](#gültige_namen_für_benutzerdefinierte_elemente) handelt.
    - Die Option <code>extends</code> angegeben ist, aber das Element, das erweitert werden soll, ein unbekanntes Element ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Name kein [gültiger Name für benutzerdefinierte Elemente](#gültige_namen_für_benutzerdefinierte_elemente) ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der referenzierte Konstruktor kein Konstruktor ist.

## Beschreibung

Die `define()`-Methode fügt eine Definition für ein benutzerdefiniertes Element zum benutzerdefinierten Elementregister hinzu und ordnet dessen Namen dem Konstruktor zu, der zur Erstellung verwendet wird.

Es gibt zwei Arten von benutzerdefinierten Elementen, die Sie erstellen können:

- _Autonome benutzerdefinierte Elemente_ sind eigenständige Elemente, die nicht von eingebauten HTML-Elementen erben.
- _Angepasste eingebaute Elemente_ sind Elemente, die von eingebauten HTML-Elementen erben und diese erweitern.

Um ein autonomes benutzerdefiniertes Element zu definieren, sollten Sie den `options`-Parameter weglassen.

Um ein angepasstes eingebautes Element zu definieren, müssen Sie den `options`-Parameter mit seiner `extends`-Eigenschaft festlegen, die den Namen des eingebauten Elements angibt, das Sie erweitern möchten, und dies muss mit der Schnittstelle übereinstimmen, von der Ihre benutzerdefinierte Elementklassen-Definition erbt. Zum Beispiel, um das {{htmlelement("p")}}-Element anzupassen, müssen Sie `{extends: "p"}` an `define()` übergeben, und die Klassendefinition für Ihr Element muss von [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erben.

### Gültige Namen für benutzerdefinierte Elemente

Benutzerdefinierte Elementnamen müssen:

- mit einem ASCII-Kleinbuchstaben (a-z) beginnen
- einen Bindestrich enthalten
- keine ASCII-Großbuchstaben enthalten
- keine bestimmten anderen Zeichen enthalten, wie in der [Abschnitt über gültige Namen für benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) der Web Components-Spezifikation dokumentiert
- keiner der folgenden sein:
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

Dieses Element macht nichts: Ein echtes autonomes Element würde seine Funktionalität in seinem Konstruktor und in den vom Standard bereitgestellten Lifecycle-Rückrufen implementieren. Siehe [Implementierung eines benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) in unserem Leitfaden zur Arbeit mit benutzerdefinierten Elementen.

Jedoch erfüllt die obige Klassendefinition die Anforderungen der `define()`-Methode, sodass wir es mit folgendem Code definieren können:

```js
customElements.define("my-autonomous-element", MyAutonomousElement);
```

Wir könnten es dann in einer HTML-Seite so verwenden:

```html
<my-autonomous-element>Element contents</my-autonomous-element>
```

### Definieren eines angepassten eingebauten Elements

Die folgende Klasse implementiert ein angepasstes eingebautes Element:

```js
class MyCustomizedBuiltInElement extends HTMLParagraphElement {
  constructor() {
    super();
  }
}
```

Dieses Element erweitert das eingebaute {{htmlelement("p")}}-Element.

In diesem minimalen Beispiel implementiert das Element keine Anpassungen, es wird sich also wie ein normales `<p>`-Element verhalten. Es erfüllt jedoch die Anforderungen von `define()`, sodass wir es so definieren können:

```js
customElements.define(
  "my-customized-built-in-element",
  MyCustomizedBuiltInElement,
  {
    extends: "p",
  },
);
```

Wir könnten es dann in einer HTML-Seite so verwenden:

```html
<p is="my-customized-built-in-element"></p>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
