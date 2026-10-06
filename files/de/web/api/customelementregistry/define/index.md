---
title: "CustomElementRegistry: Methode define()"
short-title: define()
slug: Web/API/CustomElementRegistry/define
l10n:
  sourceCommit: 7ee6c3f8c59705c68ea12086ca2bb90336dab34b
---

{{APIRef("Web Components")}}

Die Methode **`define()`** der Schnittstelle [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) fügt der Registrierung für benutzerdefinierte Elemente eine Definition hinzu. Dabei ordnet sie den Namen des Elements dem Konstruktor zu, mit dem es erstellt wird.

## Syntax

```js-nolint
define(name, constructor)
define(name, constructor, options)
```

### Parameter

- `name`
  - : Name des neuen benutzerdefinierten Elements. Er muss ein [gültiger Name für benutzerdefinierte Elemente](#gültige_namen_für_benutzerdefinierte_elemente) sein.
- `constructor`
  - : Konstruktor für das neue benutzerdefinierte Element. Er kann die folgenden Instanzmethoden haben (definiert auf `constructor.prototype`):
    - `connectedCallback`
    - `disconnectedCallback`
    - `connectedMoveCallback`
    - `adoptedCallback`
    - `attributeChangedCallback`

    Er kann die folgenden statischen Eigenschaften haben:
    - `observedAttributes`: ein Array von Zeichenfolgen. Wird nur gelesen, wenn `attributeChangedCallback` definiert ist.
    - `disabledFeatures`: ein Array mit den Werten `"internals"` und/oder `"shadow"`.
    - `formAssociated`: ein boolescher Wert.

    Wenn `formAssociated` den Wert `true` hat, kann er zusätzlich die folgenden Instanzmethoden haben:
    - `formAssociatedCallback`
    - `formResetCallback`
    - `formDisabledCallback`
    - `formStateRestoreCallback`

    Alle diese Methoden und Eigenschaften werden nur einmal abgerufen, wenn `define()` aufgerufen wird. Ihr Verhalten ist unter [Benutzerdefinierte Elemente verwenden](/de/docs/Web/API/Web_components/Using_custom_elements) beschrieben.

- `options` {{optional_inline}}
  - : Objekt, das steuert, wie das Element definiert wird. Derzeit wird eine Option unterstützt:
    - `extends`
      - : Zeichenfolge, die den Namen eines zu erweiternden integrierten Elements angibt.
        Wird verwendet, um ein angepasstes integriertes Element zu erstellen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - die [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) bereits einen Eintrag mit demselben Namen oder demselben Konstruktor enthält (oder bereits anderweitig definiert ist).
    - die Option `extends` angegeben ist und ihr Wert ein [gültiger Name für benutzerdefinierte Elemente](#gültige_namen_für_benutzerdefinierte_elemente) ist (Sie also versuchen, ein benutzerdefiniertes Element zu erweitern).
    - die Option `extends` angegeben ist, das zu erweiternde Element aber unbekannt ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene [Name](#name) kein [gültiger Name für benutzerdefinierte Elemente](#gültige_namen_für_benutzerdefinierte_elemente) ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der referenzierte Konstruktor kein Konstruktor ist.

## Beschreibung

Die Methode `define()` fügt der Registrierung für benutzerdefinierte Elemente eine Definition hinzu. Dabei ordnet sie den Namen des Elements dem Konstruktor zu, mit dem es erstellt wird.

Sie können zwei Arten benutzerdefinierter Elemente erstellen:

- _Autonome benutzerdefinierte Elemente_ sind eigenständige Elemente, die nicht von integrierten HTML-Elementen erben.
- _Angepasste integrierte Elemente_ sind Elemente, die von integrierten HTML-Elementen erben und diese erweitern.

Um ein autonomes benutzerdefiniertes Element zu definieren, lassen Sie den Parameter `options` weg.

Um ein angepasstes integriertes Element zu definieren, müssen Sie den Parameter `options` übergeben. Setzen Sie dessen Eigenschaft `extends` auf den Namen des integrierten Elements, das Sie erweitern. Dieser Name muss der Schnittstelle entsprechen, von der Ihre Klassendefinition für das benutzerdefinierte Element erbt. Um beispielsweise das Element {{htmlelement("p")}} anzupassen, müssen Sie `{extends: "p"}` an `define()` übergeben. Die Klassendefinition Ihres Elements muss von [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement) erben.

Wenn `define()` aufgerufen wird, werden vorhandene HTML-Elemente, die mit einem zugehörigen Dokument verbunden sind, automatisch [aktualisiert](/de/docs/Web/API/CustomElementRegistry/upgrade), sofern sie diese Registrierung verwenden und der Definition entsprechen. Das gilt auch für Elemente in Shadow Trees.

### Gültige Namen für benutzerdefinierte Elemente

Namen für benutzerdefinierte Elemente müssen:

- mit einem lateinischen ASCII-Kleinbuchstaben (a–z) beginnen
- einen Bindestrich enthalten
- dürfen keine lateinischen ASCII-Großbuchstaben enthalten
- dürfen keine ASCII-Leerraumzeichen, `NULL`, `/` oder `>` enthalten (U+0000, U+002F beziehungsweise U+003E)
- dürfen keiner der folgenden Namen sein:
  - "annotation-xml"
  - "color-profile"
  - "font-face"
  - "font-face-src"
  - "font-face-uri"
  - "font-face-format"
  - "font-face-name"
  - "missing-glyph"

## Beispiele

### Ein autonomes benutzerdefiniertes Element definieren

Die folgende Klasse implementiert ein minimales autonomes benutzerdefiniertes Element:

```js
class MyAutonomousElement extends HTMLElement {
  constructor() {
    super();
  }
}
```

Dieses Element hat keine Funktion: Ein autonomes Element würde seine Funktionalität im Konstruktor und in den vom Standard vorgesehenen Lifecycle-Callbacks implementieren.
Weitere Informationen finden Sie unter [Ein benutzerdefiniertes Element implementieren](/de/docs/Web/API/Web_components/Using_custom_elements) in unserem Leitfaden zum Arbeiten mit benutzerdefinierten Elementen.

Die obige Klassendefinition erfüllt jedoch die Anforderungen der Methode `define()`. Daher können wir das Element mit folgendem Code definieren:

```js
customElements.define("my-autonomous-element", MyAutonomousElement);
```

Anschließend könnten wir es wie folgt in einer HTML-Seite verwenden:

```html
<my-autonomous-element>Element contents</my-autonomous-element>
```

### Ein angepasstes integriertes Element definieren

Die folgende Klasse implementiert ein angepasstes integriertes Element:

```js
class MyCustomizedBuiltInElement extends HTMLParagraphElement {
  constructor() {
    super();
  }
}
```

Dieses Element erweitert das integrierte Element {{htmlelement("p")}}.

In diesem einfachen Beispiel implementiert das Element keine Anpassungen und verhält sich daher wie ein normales `<p>`-Element.
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

Anschließend könnten wir es wie folgt in einer HTML-Seite verwenden:

```html
<p is="my-customized-built-in-element"></p>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzerdefinierte Elemente verwenden](/de/docs/Web/API/Web_components/Using_custom_elements)
- [`CustomElementRegistry.upgrade()`](/de/docs/Web/API/CustomElementRegistry/upgrade)
