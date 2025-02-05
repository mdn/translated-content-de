---
title: XPath-Snippets
slug: Web/XML/XPath/Guides/Snippets
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Dieser Artikel bietet einige XPath-Code-Snippets – einfache Beispiele für die Implementierung einiger grundlegender **Utility-Funktionen** basierend auf den Standard-Schnittstellen der [DOM Level 3 XPath-Spezifikation](https://www.w3.org/TR/DOM-Level-3-XPath/), die XPath-Funktionalität in JavaScript-Code verfügbar machen. Die Snippets sind Funktionen, die Sie in der Praxis in Ihrem eigenen Code verwenden können.

### Node-spezifische Auswertungsfunktion

Die folgende benutzerdefinierte Utility-Funktion kann verwendet werden, um XPath-Ausdrücke für bestimmte XML-Knoten auszuwerten. Das erste Argument ist ein DOM-Knoten oder ein Dokumentobjekt, während das zweite ein String ist, der einen XPath-Ausdruck definiert.

#### Beispiel: Definition einer benutzerdefinierten node-spezifischen `evaluateXPath()`-Utility-Funktion

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

Beachten Sie, dass das `documentElement` nur verwendet werden sollte, wenn Sie sicher sind, dass die Namespace-Präfixe im XPath-Ausdruck mit denen im Dokument übereinstimmen, das Sie abfragen möchten (und kein Standard-Namespace verwendet wird). Andernfalls müssen Sie eine eigene Implementierung eines XPathNSResolvers bereitstellen.

#### Beispielverwendung

Angenommen, wir haben folgendes XML-Dokument (siehe auch [XML analysieren und serialisieren](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)):

##### Beispiel: Ein XML-Dokument zur Verwendung mit der benutzerdefinierten `evaluateXPath()`-Utility-Funktion

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

Sie können das Dokument nun mit XPath-Ausdrücken "abfragen". Obwohl das Navigieren durch den DOM-Baum ähnliche Ergebnisse erzielen kann, sind XPath-Ausdrücke wesentlich schneller und leistungsfähiger. Wenn Sie sich auf `id`-Attribute verlassen können, ist `document.getElementById()` immer noch leistungsfähig, aber nicht annähernd so vielseitig wie XPath. Hier sind einige Beispiele.

##### Beispiel: JavaScript-Code mit der benutzerdefinierten `evaluateXPath()`-Utility-Funktion

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

Das folgende ist eine Utility-Funktion, um (geordnete) XPath-Ergebnisse in ein Array zu bringen, unabhängig davon, ob spezielle Namespace-Resolver erforderlich sind oder nicht. Dadurch wird die komplexere Syntax von [`document.evaluate()`](/de/docs/Web/API/Document/evaluate) vermieden, wenn dies nicht notwendig ist, ebenso wie der Bedarf, spezielle Iteratoren auf [`XPathResult`](/de/docs/Web/API/XPathResult) zu verwenden (indem stattdessen ein Array zurückgegeben wird).

#### Beispiel: Definition einer einfachen `docEvaluateArray()`-Utility-Funktion

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

Die folgende Funktion ermöglicht es, ein Element und ein XML-Dokument zu übergeben, um einen eindeutigen XPath-Ausdruck in Form eines Strings zu erhalten, der zu diesem Element zurückführt.

#### Beispiel: Definition einer `getXPathForElement()`-Utility-Funktion

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
- [Diskussion im Forum zu diesem Thema](https://forums.mozillazine.org/viewtopic.php?t=229106)

## Siehe auch

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
