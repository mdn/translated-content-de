---
title: "CustomElementRegistry: define()-Methode"
short-title: define()
slug: Web/API/CustomElementRegistry/define
l10n:
  sourceCommit: 66b6d40a37daef8aa0013c44c310eeb2f0bcd7e1
---

{{APIRef("Web Components")}}

Die **`define()`**-Methode des [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Interfaces fügt eine Definition für ein benutzerdefiniertes Element zum benutzerdefinierten Element-Registry hinzu und ordnet seinen Namen dem Konstruktor zu, der zur Erstellung verwendet wird.

## Syntax

```js-nolint
define(name, constructor)
define(name, constructor, options)
```

### Parameter

- `name`
  - : Name für das neue benutzerdefinierte Element. Muss ein [gültiger benutzerdefinierter Elementname](#gültige_benutzerdefinierte_elementnamen) sein.
- `constructor`
  - : Konstruktor für das neue benutzerdefinierte Element.
- `options` {{optional_inline}}

  - : Objekt, das steuert, wie das Element definiert wird. Derzeit wird eine Option unterstützt:

    - `extends`
      - : Zeichenkette, die den Namen eines eingebauten Elements angibt, das erweitert werden soll. Wird verwendet, um ein angepasstes eingebautes Element zu erstellen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) bereits einen Eintrag mit demselben Namen oder demselben Konstruktor enthält (oder anderweitig bereits definiert ist).
    - Die <code>extends</code>-Option angegeben ist und es sich um einen [gültigen benutzerdefinierten Elementnamen](#gültige_benutzerdefinierte_elementnamen) handelt
    - Die <code>extends</code>-Option angegeben ist, aber das Element, das erweitert werden soll, ein unbekanntes Element ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Name kein [gültiger benutzerdefinierter Elementname](#gültige_benutzerdefinierte_elementnamen) ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der referenzierte Konstruktor kein Konstruktor ist.

## Beschreibung

Die `define()`-Methode fügt eine Definition für ein benutzerdefiniertes Element zum benutzerdefinierten Element-Registry hinzu und ordnet seinen Namen dem Konstruktor zu, der zur Erstellung verwendet wird.

Es gibt zwei Arten von benutzerdefinierten Elementen, die Sie erstellen können:

- _Autonome benutzerdefinierte Elemente_ sind eigenständige Elemente, die nicht von eingebauten HTML-Elementen erben.
- _Angepasste eingebaute Elemente_ sind Elemente, die von eingebauten HTML-Elementen erben und diese erweitern.

Um ein autonomes benutzerdefiniertes Element zu definieren, sollten Sie den `options`-Parameter weglassen.

Um ein angepasstes eingebautes Element zu definieren, müssen Sie den `options`-Parameter mit seiner `extends`-Eigenschaft festlegen, die den Namen des eingebauten Elements enthält, das Sie erweitern, und dies muss der Schnittstelle entsprechen, von der Ihre benutzerdefinierte Elementklasse erbt. Zum Beispiel, um das {{htmlelement("p")}}-Element anzupassen, müssen Sie `{extends: "p"}` an `define()` übergeben, und die Klassendefinition Ihres Elements muss von [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erben.

### Gültige benutzerdefinierte Elementnamen

Benutzerdefinierte Elementnamen müssen:

- mit einem ASCII-Kleinbuchstaben (a-z) beginnen
- ein Bindestrich enthalten
- keine ASCII-Großbuchstaben enthalten
- keine bestimmten anderen Zeichen enthalten, wie im Abschnitt [gültige benutzerdefinierte Elementnamen](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) der Web Components-Spezifikation dokumentiert
- nicht sein:
  - "annotation-xml"
  - "color-profile"
  - "font-face"
  - "font-face-src"
  - "font-face-uri"
  - "font-face-format"
  - "font-face-name"
  - "missing-glyph"

## Beispiele

### Definition eines autonomen benutzerdefinierten Elements

Die folgende Klasse implementiert ein minimales autonomes benutzerdefiniertes Element:

```js
class MyAutonomousElement extends HTMLElement {
  constructor() {
    super();
  }
}
```

Dieses Element tut nichts: Ein echtes autonomes Element würde seine Funktionalität in seinem Konstruktor und in den vom Standard bereitgestellten Lebenszyklus-Callbacks implementieren. Siehe [Implementierung eines benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) in unserem Leitfaden zur Arbeit mit benutzerdefinierten Elementen.

Die obige Klassendefinition erfüllt jedoch die Anforderungen der `define()`-Methode, sodass wir sie mit dem folgenden Code definieren können:

```js
customElements.define("my-autonomous-element", MyAutonomousElement);
```

Wir könnten es dann in einer HTML-Seite so verwenden:

```html
<my-autonomous-element>Element contents</my-autonomous-element>
```

### Definition eines angepassten eingebauten Elements

Die folgende Klasse implementiert ein angepasstes eingebautes Element:

```js
class MyCustomizedBuiltInElement extends HTMLParagraphElement {
  constructor() {
    super();
  }
}
```

Dieses Element erweitert das eingebaute {{htmlelement("p")}}-Element.

In diesem minimalen Beispiel implementiert das Element keine Anpassung, sodass es sich wie ein normales `<p>`-Element verhält. Es erfüllt jedoch die Anforderungen von `define()`, sodass wir es so definieren können:

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
