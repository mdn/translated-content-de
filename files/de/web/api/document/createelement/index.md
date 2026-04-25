---
title: "Dokument: createElement() Methode"
short-title: createElement()
slug: Web/API/Document/createElement
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("DOM")}}

Die **`createElement()`** Methode des [`Document`](/de/docs/Web/API/Document) Interfaces erstellt ein neues [`HTMLElement`](/de/docs/Web/API/HTMLElement), das den angegebenen `localName` hat.

Wenn `localName` nicht erkannt wird, erstellt die Methode ein [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement).

## Syntax

```js-nolint
createElement(localName)
createElement(localName, options)
```

### Parameter

- `localName`
  - : Ein String, der den Typ des zu erstellenden Elements angibt.
    Verwenden Sie keine qualifizierten Namen (wie "html:a") mit dieser Methode.
    Bei einem Aufruf auf einem HTML-Dokument konvertiert `createElement()` `localName` in Kleinbuchstaben, bevor das Element erstellt wird.
    In Firefox, Opera und Chrome funktioniert `createElement(null)` wie `createElement("null")`.
- `options` {{Optional_Inline}}
  - : Ein Objekt mit den folgenden optionalen Eigenschaften (beachten Sie, dass nur eine von `is` und `customElementRegistry` festgelegt werden kann):
    - `is` {{Optional_Inline}}
      - : Ein String, der den Tag-Namen für ein benutzerdefiniertes Element definiert, das zuvor mit [`customElements.define()`](/de/docs/Web/API/CustomElementRegistry/define) definiert wurde.
        Dem neuen Element wird ein `is` Attribut zugewiesen, dessen Wert der Tag-Name des benutzerdefinierten Elements ist.
        Siehe [Web-Komponent Beispiel](#web-komponent_beispiel) für mehr Details.
    - `customElementRegistry` {{Optional_Inline}}
      - : Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das das [Scope-bezogene benutzerdefinierte Element-Registrierung](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) eines benutzerdefinierten Elements festlegt.

### Rückgabewert

Das neue [`Element`](/de/docs/Web/API/Element).

> [!NOTE]
> Ein neues [HTMLElement](/de/docs/Web/API/HTMLElement) wird zurückgegeben, wenn das Dokument ein [HTMLDocument](/de/docs/Web/API/HTMLDocument) ist, was der häufigste Fall ist.
> Andernfalls wird ein neues [Element](/de/docs/Web/API/Element) zurückgegeben.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`localName`](#localname) Wert kein gültiger Elementname ist.
    Ein String ist ein gültiger Elementname, wenn seine Länge mindestens 1 beträgt und:
    - er mit einem alphabetischen Zeichen beginnt und kein ASCII-Leerzeichen, `NULL`, `/` oder `>` (U+0000, U+002F, or U+003E, jeweils) enthält.
    - er mit `:` (U+003A), `_` (U+005F) oder einem beliebigen Zeichen im Bereich von U+0080 bis U+10FFFF (einschließlich) beginnt _und_ die verbleibenden Codepunkte nur dieselben Zeichen zusammen mit den ASCII-Alphanumerischen Zeichen, `-` (U+002D) und `.` (U+002E) enthalten.

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und erforderten, dass der `localName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) war.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn sowohl die Optionen [`is`](#is) als auch [`customElementRegistry`](#customelementregistry) angegeben sind.

## Beispiele

### Einfaches Beispiel

Dies erstellt ein neues `<div>` und fügt es vor dem Element mit der ID `div1` ein.

#### HTML

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Working with elements</title>
  </head>
  <body>
    <div id="div1">The text above has been created dynamically.</div>
  </body>
</html>
```

#### JavaScript

```js
function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

addElement();
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 500, 80)}}

### Web-Komponent Beispiel

> [!NOTE]
> Überprüfen Sie den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Unterstützung und den Verweis auf das [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) Attribut für Vorbehalte zur Implementierung von benutzerdefinierten eingebauten Elementen.

Das folgende Beispiel-Snippet stammt von unserem [expanding-list-web-component](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component) Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/expanding-list-web-component/)). In diesem Fall erweitert unser benutzerdefiniertes Element das [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement), das das {{htmlelement("ul")}} Element darstellt.

```js
// Create a class for the element
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // constructor definition left out for brevity
    // …
  }
}

// Define the new element
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Wenn wir eine Instanz dieses Elements programmgesteuert erstellen möchten, würden wir einen Aufruf in der folgenden Art und Weise verwenden:

```js
let expandingList = document.createElement("ul", { is: "expanding-list" });
```

Dem neuen Element wird ein [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is) Attribut zugewiesen, dessen Wert der Tag-Name des benutzerdefinierten Elements ist.

> [!NOTE]
> Aus Gründen der Abwärtskompatibilität erlauben einige Browser hier die Übergabe eines Strings anstelle eines Objekts, wobei der Wert des Strings der Tag-Name des benutzerdefinierten Elements ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
- [`document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) — um die Namespace-URI für das Element explizit anzugeben.
