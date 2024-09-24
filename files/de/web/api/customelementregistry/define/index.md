---
title: "CustomElementRegistry: define()-Methode"
short-title: define()
slug: Web/API/CustomElementRegistry/define
l10n:
  sourceCommit: 66b6d40a37daef8aa0013c44c310eeb2f0bcd7e1
---

{{APIRef("Web Components")}}

Die **`define()`**-Methode der {{domxref("CustomElementRegistry")}}-Schnittstelle fügt eine Definition für ein benutzerdefiniertes Element zum benutzerdefinierten Element-Register hinzu, wobei dessen Name dem Konstruktor zugeordnet wird, der zur Erstellung verwendet wird.

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

  - : Objekt, das steuert, wie das Element definiert wird. Eine Option wird derzeit unterstützt:

    - `extends`
      - : Zeichenkette, die den Namen eines integrierten Elements angibt, das erweitert werden soll. Wird verwendet, um ein angepasstes integriertes Element zu erstellen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn:
    - Das {{domxref("CustomElementRegistry")}} bereits einen Eintrag mit demselben Namen oder demselben Konstruktor enthält (oder anderweitig bereits definiert ist).
    - Die <code>extends</code>-Option angegeben ist und es sich um einen [gültigen benutzerdefinierten Elementnamen](#gültige_benutzerdefinierte_elementnamen) handelt.
    - Die <code>extends</code>-Option angegeben ist, das zu erweiternde Element jedoch ein unbekanntes Element ist.
- `SyntaxError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn der angegebene Name kein [gültiger benutzerdefinierter Elementname](#gültige_benutzerdefinierte_elementnamen) ist.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der referenzierte Konstruktor kein Konstruktor ist.

## Beschreibung

Die `define()`-Methode fügt eine Definition für ein benutzerdefiniertes Element zum benutzerdefinierten Element-Register hinzu, wobei dessen Name dem Konstruktor zugeordnet wird, der zur Erstellung verwendet wird.

Es gibt zwei Arten von benutzerdefinierten Elementen, die Sie erstellen können:

- _Autonome benutzerdefinierte Elemente_ sind eigenständige Elemente, die nicht von integrierten HTML-Elementen erben.
- _Angepasste integrierte Elemente_ sind Elemente, die von integrierten HTML-Elementen erben und diese erweitern.

Um ein autonomes benutzerdefiniertes Element zu definieren, sollten Sie den `options`-Parameter weglassen.

Um ein angepasstes integriertes Element zu definieren, müssen Sie den `options`-Parameter mit seiner `extends`-Eigenschaft übergeben, die auf den Namen des integrierten Elements gesetzt ist, das Sie erweitern, und dies muss der Schnittstelle entsprechen, von der Ihre benutzerdefinierte Elementklassendefinition erbt. Um beispielsweise das {{htmlelement("p")}}-Element anzupassen, müssen Sie `{extends: "p"}` an `define()` übergeben, und die Klassendefinition für Ihr Element muss von {{domxref("HTMLParagraphElement")}} erben.

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

Dieses Element tut nichts: Ein echtes autonomes Element würde seine Funktionalität in seinem Konstruktor und in den vom Standard bereitgestellten Lebenszyklus-Callbacks implementieren. Siehe [Implementing a custom element](/de/docs/Web/API/Web_components/Using_custom_elements) in unserem Leitfaden zur Arbeit mit benutzerdefinierten Elementen.

Die obige Klassendefinition erfüllt jedoch die Anforderungen der `define()`-Methode, sodass wir sie mit folgendem Code definieren können:

```js
customElements.define("my-autonomous-element", MyAutonomousElement);
```

Wir könnten es dann in einer HTML-Seite wie folgt verwenden:

```html
<my-autonomous-element>Element contents</my-autonomous-element>
```

### Definition eines angepassten integrierten Elements

Die folgende Klasse implementiert ein angepasstes integriertes Element:

```js
class MyCustomizedBuiltInElement extends HTMLParagraphElement {
  constructor() {
    super();
  }
}
```

Dieses Element erweitert das integrierte {{htmlelement("p")}}-Element.

In diesem minimalen Beispiel implementiert das Element keine Anpassungen, sodass es sich wie ein normales `<p>`-Element verhält. Es erfüllt jedoch die Anforderungen von `define()`, sodass wir es folgendermaßen definieren können:

```js
customElements.define(
  "my-customized-built-in-element",
  MyCustomizedBuiltInElement,
  {
    extends: "p",
  },
);
```

Wir könnten es dann in einer HTML-Seite wie folgt verwenden:

```html
<p is="my-customized-built-in-element"></p>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using custom elements](/de/docs/Web/API/Web_components/Using_custom_elements)
