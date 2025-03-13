---
title: XPath-Snippets
slug: Web/XML/XPath/Guides/Snippets
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Dieser Artikel bietet einige XPath-Code-Snippets — Beispiele für die Implementierung von **Hilfsfunktionen**. Diese Funktionen basieren auf standardisierten Schnittstellen der [DOM Level 3 XPath-Spezifikation](https://www.w3.org/TR/DOM-Level-3-XPath/), die XPath-Funktionalität für JavaScript-Code bereitstellen. Die Snippets sind Funktionen, die Sie in der Praxis in Ihrem eigenen Code verwenden können.

### Knotenspezifische Bewertungsfunktion

Die folgende benutzerdefinierte Hilfsfunktion kann verwendet werden, um XPath-Ausdrücke auf bestimmten XML-Knoten auszuwerten. Das erste Argument ist ein DOM-Knoten oder ein Dokumentenobjekt, während das zweite ein String ist, der einen XPath-Ausdruck definiert.

#### Beispiel: Definierung einer benutzerdefinierten knotenspezifischen `evaluateXPath()` Hilfsfunktion

```js
// Evaluate an XPath expression aExpression against a given DOM node
// or Document object (aNode), returning the results as an array
// thanks wanderingstan at morethanwarm dot mail dot com for the
// initial work.
function evaluateXPath(aNode, aExpr) {
  const xpe = new XPathEvaluator();
  const nsResolver =
    aNode.ownerDocument === null
      ? aNode.documentElement
      : aNode.ownerDocument.documentElement;
  const result = xpe.evaluate(aExpr, aNode, nsResolver, 0, null);
  const found = [];
  let res;
  while ((res = result.iterateNext())) found.push(res);
  return found;
}
```

Beachten Sie, dass `documentElement` nur verwendet werden sollte, wenn Sie sicher sind, dass die Namespace-Präfixe im XPath-Ausdruck mit denen im Dokument, das Sie abfragen möchten, übereinstimmen (und dass kein Standard-Namensraum verwendet wird). Andernfalls müssen Sie Ihre eigene Implementierung von XPathNSResolver bereitstellen.

#### Beispielverwendung

Angenommen, wir haben das folgende XML-Dokument (siehe auch [Parsing und Serializing von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)):

##### Beispiel: Ein XML-Dokument zur Verwendung mit der benutzerdefinierten `evaluateXPath()` Hilfsfunktion

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

Sie können das Dokument nun mit XPath-Ausdrücken "abfragen". Obwohl das Durchlaufen des DOM-Baums ähnliche Ergebnisse erzielen kann, ist die Verwendung von XPath-Ausdrücken viel schneller und leistungsfähiger. Wenn Sie sich auf `id`-Attribute verlassen können, bleibt `document.getElementById()` zwar leistungsfähig, aber bei weitem nicht so mächtig wie XPath. Hier sind einige Beispiele.

##### Beispiel: JavaScript-Code mit der benutzerdefinierten `evaluateXPath()` Hilfsfunktion

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

Die folgende Hilfsfunktion dient dazu, (geordnete) XPath-Ergebnisse in ein Array zu übertragen, unabhängig davon, ob ein spezieller Bedarf an Namespace-Resolvern besteht oder nicht. Sie vermeidet die komplexere Syntax von [`document.evaluate()`](/de/docs/Web/API/Document/evaluate) für Fälle, in denen dies nicht erforderlich ist, sowie die Notwendigkeit, spezielle Iteratoren auf [`XPathResult`](/de/docs/Web/API/XPathResult) zu verwenden (indem statt dessen ein Array zurückgegeben wird).

#### Beispiel: Definierung einer `docEvaluateArray()` Hilfsfunktion

```js
// Example usage:
// const els = docEvaluateArray('//a');
// console.log(els[0].nodeName); // gives 'A' in HTML document with at least one link

function docEvaluateArray(expr, doc, context, resolver) {
  let i;
  const a = [];
  doc = doc || (context ? context.ownerDocument : document);
  resolver = resolver || null;
  context = context || doc;

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

Die folgende Funktion erlaubt es, ein Element und ein XML-Dokument zu übergeben, um einen eindeutigen stringbasierten XPath-Ausdruck zu finden, der zurück zu diesem Element führt.

#### Beispiel: Definierung einer `getXPathForElement()` Hilfsfunktion

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
- [Forum-Diskussion zu diesem Thema](https://forums.mozillazine.org/viewtopic.php?t=229106)

## Siehe auch

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
