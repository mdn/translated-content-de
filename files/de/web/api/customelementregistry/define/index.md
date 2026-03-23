---
title: "CustomElementRegistry: define()-Methode"
short-title: define()
slug: Web/API/CustomElementRegistry/define
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{APIRef("Web Components")}}

Die **`define()`**-Methode der [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Schnittstelle fügt eine Definition für ein benutzerdefiniertes Element zum benutzerdefinierten Elementregister hinzu und ordnet seinen Namen dem Konstruktor zu, der zur Erstellung verwendet wird.

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
      - : Zeichenkette, die den Namen eines eingebauten Elements angibt, das erweitert werden soll.
        Verwendet, um ein angepasstes, eingebautes Element zu erstellen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) bereits einen Eintrag mit demselben Namen oder demselben Konstruktor enthält (oder anderweitig bereits definiert ist).
    - Die `extends`-Option angegeben ist und es sich um einen [gültigen benutzerdefinierten Elementnamen](#gültige_benutzerdefinierte_elementnamen) handelt (d.h. Sie versuchen, ein benutzerdefiniertes Element zu erweitern).
    - Die `extends`-Option angegeben ist, aber das Element, das erweitert werden soll, ein unbekanntes Element ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene [Name](#name) kein [gültiger benutzerdefinierter Elementname](#gültige_benutzerdefinierte_elementnamen) ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der referenzierte Konstruktor kein Konstruktor ist.

## Beschreibung

Die `define()`-Methode fügt eine Definition für ein benutzerdefiniertes Element zum benutzerdefinierten Elementregister hinzu und ordnet dessen Namen dem Konstruktor zu, der zur Erstellung verwendet wird.

Es gibt zwei Arten von benutzerdefinierten Elementen, die Sie erstellen können:

- _Autonome benutzerdefinierte Elemente_ sind eigenständige Elemente, die nicht von eingebauten HTML-Elementen erben.
- _Angepasste eingebaute Elemente_ sind Elemente, die von eingebauten HTML-Elementen erben und diese erweitern.

Um ein autonomes, benutzerdefiniertes Element zu definieren, sollten Sie den `options`-Parameter weglassen.

Um ein angepasstes eingebautes Element zu definieren, müssen Sie den `options`-Parameter mit seiner `extends`-Eigenschaft übergeben, die auf den Namen des eingebauten Elements gesetzt ist, das Sie erweitern, und dies muss mit der Schnittstelle übereinstimmen, von der Ihre benutzerdefinierte Elementklassendefinition erbt. Um beispielsweise das {{htmlelement("p")}}-Element anzupassen, müssen Sie `{extends: "p"}` an `define()` übergeben, und die Klassendefinition für Ihr Element muss von [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erben.

### Gültige benutzerdefinierte Elementnamen

Benutzerdefinierte Elementnamen müssen:

- mit einem ASCII-Kleinbuchstaben (a-z) beginnen
- einen Bindestrich enthalten
- keine ASCII-Großbuchstaben enthalten
- keine ASCII-Leerzeichen, `NULL`, `/` oder `>` enthalten (U+0000, U+002F oder U+003E, jeweils)
- nicht einer der folgenden sein:
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

Dieses Element macht nichts: Ein echtes autonomes Element würde seine Funktionalität in seinem Konstruktor und in den vom Standard bereitgestellten Lebenszyklus-Callbacks implementieren.
Siehe [Implementieren eines benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) in unserem Leitfaden zur Arbeit mit benutzerdefinierten Elementen.

Die obige Klassendefinition erfüllt jedoch die Anforderungen der `define()`-Methode, sodass wir es mit dem folgenden Code definieren können:

```js
customElements.define("my-autonomous-element", MyAutonomousElement);
```

Wir könnten es dann auf einer HTML-Seite so verwenden:

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

In diesem minimalen Beispiel implementiert das Element keine Anpassungen, sodass es sich wie ein normales `<p>`-Element verhält.
Es erfüllt jedoch die Anforderungen von `define()`, sodass wir es folgendermaßen definieren können:

```js
customElements.define(
  "my-customized-built-in-element",
  MyCustomizedBuiltInElement,
  {
    extends: "p",
  },
);
```

Wir könnten es dann auf einer HTML-Seite so verwenden:

```html
<p is="my-customized-built-in-element"></p>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
