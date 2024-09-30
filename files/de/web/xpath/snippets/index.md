---
title: XPath-Snippets
slug: Web/XPath/Snippets
l10n:
  sourceCommit: effba4cf556afc92d421bf399bbf4b83e3a27104
---

{{XsltSidebar}}

Dieser Artikel bietet einige XPath-Code-Snippets — einfache Beispiele für einige einfache **Hilfsfunktionen** basierend auf den Standard-Schnittstellen der [DOM Level 3 XPath-Spezifikation](https://www.w3.org/TR/DOM-Level-3-XPath/), die XPath-Funktionalität in JavaScript-Code verfügbar machen. Die Snippets sind Funktionen, die Sie in der realen Welt in Ihrem eigenen Code verwenden können.

### Nodespezifische Evaluator-Funktion

Die folgende benutzerdefinierte Hilfsfunktion kann verwendet werden, um XPath-Ausdrücke auf gegebenen XML-Knoten auszuwerten. Das erste Argument ist ein DOM-Knoten oder ein Dokumentobjekt, während das zweite ein String ist, der einen XPath-Ausdruck definiert.

#### Beispiel: Definieren einer benutzerdefinierten nodespezifischen `evaluateXPath()` Hilfsfunktion

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

Beachten Sie, dass das `documentElement` nur verwendet werden sollte, wenn Sie sicher sind, dass die Namensraum-Präfixe im XPath-Ausdruck mit denen im Dokument, das Sie abfragen möchten, übereinstimmen (und kein Standardnamensraum verwendet wird). Andernfalls müssen Sie Ihre eigene Implementierung von XPathNSResolver bereitstellen.

#### Beispielverwendung

Angenommen, wir haben das folgende XML-Dokument (siehe auch [XML analysieren und serialisieren](/de/docs/Web/XML/Parsing_and_serializing_XML)):

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

Sie können nun das Dokument mit XPath-Ausdrücken "abfragen". Obwohl das Durchlaufen des DOM-Baums ähnliche Ergebnisse erzielen kann, ist die Verwendung von XPath-Ausdrücken viel schneller und leistungsstärker. Wenn Sie sich auf `id`-Attribute verlassen können, ist `document.getElementById()` immer noch leistungsstark, aber nicht annähernd so mächtig wie XPath. Hier sind einige Beispiele.

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

Das Folgende ist eine einfache Hilfsfunktion, um (geordnete) XPath-Ergebnisse in ein Array zu bekommen, unabhängig davon, ob ein besonderer Bedarf für Namensraum-Resolver usw. besteht. Es vermeidet die komplexere Syntax von [`document.evaluate()`](/de/docs/Web/API/Document/evaluate) für Fälle, in denen dies nicht erforderlich ist, sowie die Notwendigkeit, die speziellen Iteratoren auf [`XPathResult`](/de/docs/Web/API/XPathResult) zu verwenden (indem es stattdessen ein Array zurückgibt).

#### Beispiel: Definieren einer einfachen `docEvaluateArray()` Hilfsfunktion

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

Die folgende Funktion ermöglicht es, ein Element und ein XML-Dokument zu übergeben, um einen einzigartigen String-XPath-Ausdruck zu finden, der zurück zu diesem Element führt.

#### Beispiel: Definieren einer `getXPathForElement()` Hilfsfunktion

```js
function getXPathForElement(el, xml) {
  let xpath = "";
  let pos, tempitem2;

  while (el !== xml.documentElement) {
    pos = 0;
    tempitem2 = el;
    while (tempitem2) {
      if (tempitem2.nodeType === 1 && tempitem2.nodeName === el.nodeName) {
        // If it is ELEMENT_NODE of the same name
        pos += 1;
      }
      tempitem2 = tempitem2.previousSibling;
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

- [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
