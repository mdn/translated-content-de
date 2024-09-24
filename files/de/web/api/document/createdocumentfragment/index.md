---
title: "Document: Methode createDocumentFragment()"
short-title: createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("DOM WHATWG")}}

Erstellt ein neues leeres {{domxref("DocumentFragment")}}, in das
DOM-Knoten eingefügt werden können, um einen unsichtbaren DOM-Baum zu erstellen.

## Syntax

```js-nolint
createDocumentFragment()
```

### Parameter

Keine.

### Rückgabewert

Ein neu erstelltes, leeres {{domxref("DocumentFragment")}}-Objekt, das bereit ist,
Knoten aufzunehmen.

## Verwendungshinweise

`DocumentFragment`s sind DOM-{{domxref("Node")}}-Objekte, die nie Teil
des Haupt-DOM-Baums sind. Der übliche Anwendungsfall ist das Erstellen des Dokumentfragments,
das Anhängen von Elementen an das Dokumentfragment und dann das Anhängen des Dokumentfragments
an den DOM-Baum. Im DOM-Baum wird das Dokumentfragment durch all seine Kinder ersetzt.

Da sich das Dokumentfragment _im Speicher_ befindet und nicht Teil des Haupt-DOM-Baums ist,
könnte die Verwendung von Dokumentfragmenten in einigen älteren Engines zu [besserer Leistung](https://johnresig.com/blog/dom-documentfragments/)
führen.

Sie können auch den `DocumentFragment`-Konstruktor verwenden, um ein neues
Fragment zu erstellen:

```js
const fragment = new DocumentFragment();
```

## Beispiele

Dieses Beispiel erstellt eine Liste der wichtigsten Webbrowser in einem `DocumentFragment`
und fügt dann den neuen DOM-Unterbaum dem Dokument hinzu, damit er angezeigt wird.

### HTML

```html
<ul id="ul"></ul>
```

### JavaScript

```js
const element = document.getElementById("ul"); // assuming ul exists
const fragment = document.createDocumentFragment();
const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

browsers.forEach((browser) => {
  const li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

### Ergebnis

{{EmbedLiveSample("Examples", 600, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}
