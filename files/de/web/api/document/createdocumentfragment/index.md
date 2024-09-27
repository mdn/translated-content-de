---
title: "Document: Methode createDocumentFragment()"
short-title: createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("DOM WHATWG")}}

Erstellt ein neues, leeres [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), in das DOM-Knoten hinzugefügt werden können, um einen Offscreen-DOM-Baum zu erstellen.

## Syntax

```js-nolint
createDocumentFragment()
```

### Parameter

Keine.

### Rückgabewert

Ein neu erstelltes, leeres [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt, das bereit ist, Knoten aufzunehmen.

## Hinweise zur Verwendung

`DocumentFragment`s sind DOM-[`Node`](/de/docs/Web/API/Node)-Objekte, die niemals Teil des Haupt-DOM-Baums sind. Der übliche Anwendungsfall besteht darin, das Dokumentfragment zu erstellen, Elemente zum Dokumentfragment hinzuzufügen und dann das Dokumentfragment zum DOM-Baum hinzuzufügen. Im DOM-Baum wird das Dokumentfragment durch all seine Kinder ersetzt.

Da sich das Dokumentfragment _im Speicher_ befindet und nicht Teil des Haupt-DOM-Baums ist, könnte die Verwendung von Dokumentfragmenten in einigen älteren Engines zu [besserer Leistung](https://johnresig.com/blog/dom-documentfragments/) führen.

Sie können auch den `DocumentFragment`-Konstruktor verwenden, um ein neues Fragment zu erstellen:

```js
const fragment = new DocumentFragment();
```

## Beispiele

Dieses Beispiel erstellt eine Liste großer Webbrowser in einem `DocumentFragment` und fügt dann den neuen DOM-Unterbaum dem Dokument hinzu, um ihn anzuzeigen.

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

- [`document.implementation.createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument)
- [`documentFragment`](/de/docs/Web/API/DocumentFragment)
