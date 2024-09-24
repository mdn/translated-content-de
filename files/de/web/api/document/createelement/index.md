---
title: "Document: Methode createElement()"
short-title: createElement()
slug: Web/API/Document/createElement
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

In einem [HTML](/de/docs/Web/HTML)-Dokument erstellt die Methode **`document.createElement()`** das durch _tagName_ angegebene HTML-Element oder ein {{domxref("HTMLUnknownElement")}}, wenn _tagName_ nicht erkannt wird.

## Syntax

```js-nolint
createElement(tagName)
createElement(tagName, options)
```

### Parameter

- `tagName`
  - : Ein String, der den Typ des zu erstellenden Elements angibt. Der {{domxref("Node.nodeName", "nodeName")}} des erstellten Elements wird mit dem Wert von _tagName_ initialisiert. Verwenden Sie keine qualifizierten Namen (wie "html:a") mit dieser Methode. Wenn `createElement()` in einem HTML-Dokument aufgerufen wird, wird _tagName_ in Kleinbuchstaben umgewandelt, bevor das Element erstellt wird. In Firefox, Opera und Chrome funktioniert `createElement(null)` wie `createElement("null")`.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `is`
      - : Der Tagname eines benutzerdefinierten Elements, das zuvor über `customElements.define()` definiert wurde.
        Weitere Details finden Sie im [Beispiel für Webkomponenten](#beispiel_für_webkomponenten).

### Rückgabewert

Das neue {{domxref("Element")}}.

> [!NOTE]
> Ein neues {{domxref("HTMLElement", "HTMLElement", "", "1")}} wird zurückgegeben, wenn das Dokument ein {{domxref("HTMLDocument", "HTMLDocument", "", "1")}} ist, was der häufigste Fall ist. Andernfalls wird ein neues {{domxref("Element","Element","","1")}} zurückgegeben.

## Beispiele

### Einfaches Beispiel

Dies erstellt ein neues `<div>` und fügt es vor dem Element mit der ID "`div1`" ein.

#### HTML

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Working with elements</title>
  </head>
  <body>
    <div id="div1">Der übergeordnete Text wurde dynamisch erstellt.</div>
  </body>
</html>
```

#### JavaScript

```js
document.body.onload = addElement;

function addElement() {
  // ein neues div-Element erstellen
  const newDiv = document.createElement("div");

  // und ihm einen Inhalt geben
  const newContent = document.createTextNode("Hi there and greetings!");

  // den Textknoten zum neu erstellten div hinzufügen
  newDiv.appendChild(newContent);

  // das neu erstellte Element und seinen Inhalt in das DOM einfügen
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 500, 80)}}

### Beispiel für Webkomponenten

> [!NOTE]
> Prüfen Sie den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Unterstützung und die [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attributreferenz für Hinweise zur Implementierungsrealität benutzerdefinierter eingebauter Elemente.

Das folgende Beispiel stammt aus unserem [expanding-list-web-component](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)-Beispiel ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/expanding-list-web-component/)). In diesem Fall erweitert unser benutzerdefiniertes Element das {{domxref("HTMLUListElement")}}, welches das {{htmlelement("ul")}}-Element darstellt.

```js
// Eine Klasse für das Element erstellen
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Immer zuerst super im Konstruktor aufrufen
    super();

    // Konstruktordefinition aus Gründen der Kürze ausgelassen
    // …
  }
}

// Das neue Element definieren
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Wenn wir eine Instanz dieses Elements programmgesteuert erstellen wollen, würden wir einen Aufruf in etwa folgendermaßen verwenden:

```js
let expandingList = document.createElement("ul", { is: "expanding-list" });
```

Dem neuen Element wird ein [`is`](/de/docs/Web/HTML/Global_attributes/is)-Attribut zugewiesen, dessen Wert der Tagname des benutzerdefinierten Elements ist.

> [!NOTE]
> Aus Gründen der Abwärtskompatibilität mit früheren Versionen der [Spezifikation für benutzerdefinierte Elemente](https://www.w3.org/TR/custom-elements/) erlauben einige Browser, hier einen String anstelle eines Objekts zu übergeben, wobei der Wert des Strings der Tagname des benutzerdefinierten Elements ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("document.createElementNS()")}} — um explizit den Namensraum-URI für das Element anzugeben.
