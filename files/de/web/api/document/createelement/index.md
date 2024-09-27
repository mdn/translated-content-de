---
title: "Document: createElement()-Methode"
short-title: createElement()
slug: Web/API/Document/createElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}}

In einem [HTML](/de/docs/Web/HTML)-Dokument erstellt die **`document.createElement()`**-Methode das durch _tagName_ angegebene HTML-Element oder ein [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement), wenn _tagName_ nicht erkannt wird.

## Syntax

```js-nolint
createElement(tagName)
createElement(tagName, options)
```

### Parameter

- `tagName`
  - : Ein String, der den Typ des zu erstellenden Elements angibt. Der [`nodeName`](/de/docs/Web/API/Node/nodeName) des erstellten Elements wird mit dem Wert von _tagName_ initialisiert. Verwenden Sie keine qualifizierten Namen (wie "html:a") mit dieser Methode. Wenn sie auf ein HTML-Dokument angewendet wird, konvertiert `createElement()` _tagName_ in Kleinbuchstaben, bevor das Element erstellt wird. In Firefox, Opera und Chrome funktioniert `createElement(null)` wie `createElement("null")`.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `is`
      - : Der Tag-Name eines benutzerdefinierten Elements, das zuvor über `customElements.define()` definiert wurde. Weitere Details finden Sie im [Beispiel für ein Web-Component](#beispiel_für_ein_web-component).

### Rückgabewert

Das neue [`Element`](/de/docs/Web/API/Element).

> [!NOTE]
> Ein neues [HTMLElement](/de/docs/Web/API/HTMLElement) wird zurückgegeben, wenn das Dokument ein [HTMLDocument](/de/docs/Web/API/HTMLDocument) ist, was der häufigste Fall ist. Andernfalls wird ein neues [Element](/de/docs/Web/API/Element) zurückgegeben.

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
document.body.onload = addElement;

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
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 500, 80)}}

### Beispiel für ein Web-Component

> [!NOTE]
> Überprüfen Sie den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für die Unterstützung und die [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attributreferenz für Hinweise zur Implementierungsrealität von benutzerdefinierten eingebauten Elementen.

Der folgende Beispielcode stammt aus unserem [expanding-list-web-component](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component) Beispiel ([sehen Sie es auch live](https://mdn.github.io/web-components-examples/expanding-list-web-component/)). In diesem Fall erweitert unser benutzerdefiniertes Element das [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement), das das {{htmlelement("ul")}}-Element darstellt.

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

Wenn wir eine Instanz dieses Elements programmgesteuert erstellen wollten, würden wir einen Aufruf in etwa folgender Form verwenden:

```js
let expandingList = document.createElement("ul", { is: "expanding-list" });
```

Dem neuen Element wird ein [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attribut zugewiesen, dessen Wert der Tag-Name des benutzerdefinierten Elements ist.

> [!NOTE]
> Aus Gründen der Abwärtskompatibilität mit früheren Versionen der [Custom Elements-Spezifikation](https://www.w3.org/TR/custom-elements/) erlauben einige Browser, hier einen String anstelle eines Objekts zu übergeben, wobei der Wert des Strings der Tag-Name des benutzerdefinierten Elements ist.

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
- [`document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) — um explizit den Namespace-URI für das Element anzugeben.
