---
title: XPath-Snippets
slug: Web/XPath/Guides/Snippets
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Dieser Artikel bietet einige XPath-Code-Snippets – einfache Beispiele für ein paar einfache **Dienstprogrammfunktionen** basierend auf den Standard-Schnittstellen der [DOM Level 3 XPath Spezifikation](https://www.w3.org/TR/DOM-Level-3-XPath/), die XPath-Funktionalität für JavaScript-Code bereitstellen. Die Snippets sind Funktionen, die Sie in der realen Welt in Ihrem eigenen Code verwenden können.

### Knotenspezifische Bewertungsfunktion

Die folgende benutzerdefinierte Dienstprogrammfunktion kann verwendet werden, um XPath-Ausdrücke auf gegebenen XML-Knoten zu bewerten. Das erste Argument ist ein DOM-Knoten oder ein Dokumentobjekt, während das zweite ein String ist, der einen XPath-Ausdruck definiert.

#### Beispiel: Definition einer benutzerdefinierten knotenspezifischen `evaluateXPath()` Dienstprogrammfunktion

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

Beachten Sie, dass `documentElement` nur verwendet werden sollte, wenn Sie sicher sind, dass die Namespace-Präfixe im XPath-Ausdruck mit denen im Dokument, das Sie abfragen möchten, übereinstimmen (und dass kein Standard-Namespace verwendet wird). Andernfalls müssen Sie eine eigene Implementierung von XPathNSResolver bereitstellen.

#### Beispielverwendung

Angenommen, wir haben folgendes XML-Dokument (siehe auch [Parsen und Serialisieren von XML](/de/docs/Web/XML/Parsing_and_serializing_XML)):

##### Beispiel: Ein XML-Dokument zur Verwendung mit der benutzerdefinierten `evaluateXPath()` Dienstprogrammfunktion

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

Sie können nun das Dokument mit XPath-Ausdrücken "abfragen". Obwohl das Durchlaufen des DOM-Baums ähnliche Ergebnisse erzielen kann, sind XPath-Ausdrücke viel schneller und leistungsfähiger. Wenn Sie sich auf `id`-Attribute verlassen können, ist `document.getElementById()` immer noch leistungsfähig, aber nicht annähernd so mächtig wie XPath. Hier sind einige Beispiele.

##### Beispiel: JavaScript-Code mit der benutzerdefinierten `evaluateXPath()` Dienstprogrammfunktion

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

Im Folgenden ist eine Dienstprogrammfunktion dargestellt, um (geordnete) XPath-Ergebnisse in ein Array zu erhalten, unabhängig davon, ob ein spezieller Bedarf für Namespace-Resolver besteht usw. Sie vermeidet die komplexere Syntax von [`document.evaluate()`](/de/docs/Web/API/Document/evaluate) für Fälle, in denen dies nicht erforderlich ist, sowie die Notwendigkeit, die speziellen Iteratoren auf [`XPathResult`](/de/docs/Web/API/XPathResult) zu verwenden (indem sie stattdessen ein Array zurückgibt).

#### Beispiel: Definition einer einfachen `docEvaluateArray()` Dienstprogrammfunktion

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

Die folgende Funktion ermöglicht es, ein Element und ein XML-Dokument zu übergeben, um einen eindeutigen String XPath-Ausdruck zu finden, der zurück zu diesem Element führt.

#### Beispiel: Definition einer `getXPathForElement()` Dienstprogrammfunktion

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

- [XPath](/de/docs/Web/XPath)
- [Forendiskussion zu diesem Thema](https://forums.mozillazine.org/viewtopic.php?t=229106)

## Siehe auch

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
