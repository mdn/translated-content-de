---
title: XPath-Snippets
slug: Web/XML/XPath/Guides/Snippets
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

Dieser Artikel bietet einige XPath-Code-Snippets — Beispiele, wie man ein paar **Hilfsfunktionen** implementiert. Diese Funktionen basieren auf standardisierten Schnittstellen, die XPath-Funktionalität für JavaScript-Code bereitstellen. Die Snippets sind Funktionen, die Sie in der realen Welt in Ihrem eigenen Code verwenden können.

### Knotenspezifische Evaluator-Funktion

Die folgende benutzerdefinierte Hilfsfunktion kann verwendet werden, um XPath-Ausdrücke auf bestimmten XML-Knoten auszuwerten. Das erste Argument ist ein DOM-Knoten oder ein Dokumentobjekt, während das zweite ein String ist, der einen XPath-Ausdruck definiert.

#### Beispiel: Definition einer benutzerdefinierten, knotenspezifischen `evaluateXPath()`-Hilfsfunktion

```js
// Evaluate an XPath expression `expr` against a given DOM node
// or Document object `node`, returning the results as an array
// thanks wanderingstan at morethanwarm dot mail dot com for the
// initial work.
function evaluateXPath(node, expr) {
  const xpe = new XPathEvaluator();
  const nsResolver =
    node.ownerDocument === null
      ? node.documentElement
      : node.ownerDocument.documentElement;
  const result = xpe.evaluate(expr, node, nsResolver, 0, null);
  const found = [];
  let res;
  while ((res = result.iterateNext())) found.push(res);
  return found;
}
```

Beachten Sie, dass `documentElement` nur dann verwendet werden sollte, wenn Sie sicher sind, dass die Namensraum-Präfixe im XPath-Ausdruck mit denen im Dokument übereinstimmen, das Sie abfragen möchten (und keiner Standard-Namensraum verwendet wird). Andernfalls müssen Sie eine eigene Implementierung von XPathNSResolver bereitstellen.

#### Beispielverwendung

Angenommen, wir haben das folgende XML-Dokument (siehe auch [Parsen und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)):

##### Beispiel: Ein XML-Dokument zur Verwendung mit der benutzerdefinierten `evaluateXPath()`-Hilfsfunktion

```xml
<?xml version="1.0"?>
<people>
  <person first-name="eric" middle-initial="H" last-name="jung">
    <address street="321 south st" city="denver" state="co" country="usa"/>
    <address street="123 main st" city="arlington" state="ma" country="usa"/>
  </person>

  <person first-name="jed" last-name="brown">
    <address street="321 north st" city="atlanta" state="ga" country="usa"/>
    <address street="123 west st" city="seattle" state="wa" country="usa"/>
    <address street="321 south avenue" city="denver" state="co" country="usa"/>
  </person>
</people>
```

Sie können das Dokument nun mit XPath-Ausdrücken "abfragen". Auch wenn das Durchlaufen des DOM-Baums ähnliche Ergebnisse erzielen kann, sind XPath-Ausdrücke viel schneller und leistungsfähiger. Wenn Sie sich auf `id`-Attribute verlassen können, ist `document.getElementById()` zwar mächtig, aber nicht annähernd so mächtig wie XPath. Hier sind einige Beispiele.

##### Beispiel: JavaScript-Code mit der benutzerdefinierten `evaluateXPath()`-Hilfsfunktion

```js
// display the last names of all people in the doc
let results = evaluateXPath(people, "//person/@last-name");
for (const i in results)
  console.log(`Person #${i} has the last name ${results[i].value}`);

// get the 2nd person node
results = evaluateXPath(people, "/people/person[2]");

// get all the person nodes that have addresses in denver
results = evaluateXPath(people, "//person[address/@city='denver']");

// get all the addresses that have "south" in the street name
results = evaluateXPath(people, "//address[contains(@street, 'south')]");
console.log(results.length);
```

### docEvaluateArray

Die folgende Hilfsfunktion ermöglicht es, (geordnete) XPath-Ergebnisse in ein Array zu erhalten, unabhängig davon, ob ein besonderer Bedarf für Namensraum-Resolver besteht. Sie vermeidet die komplexere Syntax von [`document.evaluate()`](/de/docs/Web/API/Document/evaluate) für Fälle, in denen sie nicht erforderlich ist, sowie die Notwendigkeit, die speziellen Iteratoren in [`XPathResult`](/de/docs/Web/API/XPathResult) zu verwenden (indem sie stattdessen ein Array zurückgibt).

#### Beispiel: Definition einer `docEvaluateArray()`-Hilfsfunktion

```js
// Example usage:
// const els = docEvaluateArray('//a');
// console.log(els[0].nodeName); // gives 'A' in HTML document with at least one link

function docEvaluateArray(
  expr,
  context,
  doc = context ? context.ownerDocument : document,
  resolver = null,
) {
  let i;
  const a = [];
  context ||= doc;

  const result = doc.evaluate(
    expr,
    context,
    resolver,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null,
  );
  for (let i = 0; i < result.snapshotLength; i++) {
    a.push(result.snapshotItem(i));
  }
  return a;
}
```

### getXPathForElement

Die folgende Funktion ermöglicht es, ein Element und ein XML-Dokument zu übergeben, um einen eindeutigen XPath-Ausdruck als String zu finden, der zurück zu diesem Element führt.

#### Beispiel: Definition einer `getXPathForElement()`-Hilfsfunktion

```js
function getXPathForElement(el, xml) {
  let xpath = "";
  let pos, tempItem2;

  while (el !== xml.documentElement) {
    pos = 0;
    tempItem2 = el;
    while (tempItem2) {
      if (tempItem2.nodeType === 1 && tempItem2.nodeName === el.nodeName) {
        // If it is ELEMENT_NODE of the same name
        pos += 1;
      }
      tempItem2 = tempItem2.previousSibling;
    }

    xpath = `*[name()='${el.nodeName}' and namespace-uri()='${
      el.namespaceURI ?? ""
    }'][${pos}]/${xpath}`;

    el = el.parentNode;
  }
  xpath = `/*[name()='${xml.documentElement.nodeName}' and namespace-uri()='${
    el.namespaceURI ?? ""
  }']/${xpath}`;
  xpath = xpath.replace(/\/$/, "");
  return xpath;
}
```

### Ressourcen

- [XPath](/de/docs/Web/XML/XPath)
- [Forendiskussion zu diesem Thema](https://forums.mozillazine.org/viewtopic.php?t=229106)

## Siehe auch

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
