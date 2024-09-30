---
title: "CustomElementRegistry: define() Methode"
short-title: define()
slug: Web/API/CustomElementRegistry/define
l10n:
  sourceCommit: 66b6d40a37daef8aa0013c44c310eeb2f0bcd7e1
---

{{APIRef("Web Components")}}

Die **`define()`** Methode der [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Schnittstelle fügt eine Definition für ein benutzerdefiniertes Element zur Registry für benutzerdefinierte Elemente hinzu und ordnet seinen Namen dem Konstruktor zu, der zur Erstellung verwendet wird.

## Syntax

```js-nolint
define(name, constructor)
define(name, constructor, options)
```

### Parameter

- `name`
  - : Name für das neue benutzerdefinierte Element. Muss ein [gültiger Name für ein benutzerdefiniertes Element](#gültige_namen_für_benutzerdefinierte_elemente) sein.
- `constructor`
  - : Konstruktor für das neue benutzerdefinierte Element.
- `options` {{optional_inline}}

  - : Objekt, das steuert, wie das Element definiert wird. Eine Option wird derzeit unterstützt:

    - `extends`
      - : Zeichenkette, die den Namen eines integrierten Elements angibt, das erweitert werden soll. Wird verwendet, um ein angepasstes integriertes Element zu erstellen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Die [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) bereits einen Eintrag mit demselben Namen oder demselben Konstruktor enthält (oder bereits definiert ist).
    - Die Option <code>extends</code> angegeben ist und es ein [gültiger Name für ein benutzerdefiniertes Element](#gültige_namen_für_benutzerdefinierte_elemente) ist.
    - Die Option <code>extends</code> angegeben ist, aber das Element, das erweitert werden soll, ein unbekanntes Element ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der angegebene Name kein [gültiger Name für ein benutzerdefiniertes Element](#gültige_namen_für_benutzerdefinierte_elemente) ist.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der referenzierte Konstruktor kein Konstruktor ist.

## Beschreibung

Die `define()`-Methode fügt eine Definition für ein benutzerdefiniertes Element zur Registry für benutzerdefinierte Elemente hinzu und ordnet seinen Namen dem Konstruktor zu, der zur Erstellung verwendet wird.

Es gibt zwei Arten von benutzerdefinierten Elementen, die Sie erstellen können:

- _Autonome benutzerdefinierte Elemente_ sind eigenständige Elemente, die nicht von integrierten HTML-Elementen erben.
- _Angepasste integrierte Elemente_ sind Elemente, die von integrierten HTML-Elementen erben und diese erweitern.

Um ein autonomes benutzerdefiniertes Element zu definieren, sollten Sie den `options`-Parameter weglassen.

Um ein angepasstes integriertes Element zu definieren, müssen Sie den `options`-Parameter mit seiner `extends`-Eigenschaft übergeben, die auf den Namen des integrierten Elements gesetzt ist, das Sie erweitern, und das muss der Schnittstelle entsprechen, von der Ihre benutzerdefinierte Elementklassen-Definition erbt. Um beispielsweise das {{htmlelement("p")}}-Element anzupassen, müssen Sie `{extends: "p"}` an `define()` übergeben, und die Klassendefinition für Ihr Element muss von [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erben.

### Gültige Namen für benutzerdefinierte Elemente

Namen für benutzerdefinierte Elemente müssen:

- mit einem ASCII-Kleinbuchstaben (a-z) beginnen
- ein Bindestrich enthalten
- keine ASCII-Großbuchstaben enthalten
- nicht bestimmte andere Zeichen enthalten, wie in der [gültige Namen für benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)-Sektion der Web-Components-Spezifikation dokumentiert
- keines der folgenden sein:
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

Dieses Element macht nichts: Ein echtes autonomes Element würde seine Funktionalität in seinem Konstruktor und in den von der Standard bereitgestellten Lebenszyklus-Callbacks implementieren. Siehe [Implementieren eines benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) in unserem Leitfaden zur Arbeit mit benutzerdefinierten Elementen.

Die obige Klassendefinition erfüllt jedoch die Anforderungen der `define()`-Methode, sodass wir sie mit folgendem Code definieren können:

```js
customElements.define("my-autonomous-element", MyAutonomousElement);
```

Wir könnten es dann in einer HTML-Seite so verwenden:

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
