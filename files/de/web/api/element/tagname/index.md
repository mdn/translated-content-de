---
title: "Element: tagName Eigenschaft"
short-title: tagName
slug: Web/API/Element/tagName
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{ApiRef("DOM")}}

Die **`tagName`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle ist schreibgeschützt und gibt den Tag-Namen des Elements zurück, auf dem sie aufgerufen wird.

Zum Beispiel ist, wenn das Element ein {{HTMLElement("img")}} ist, seine `tagName`-Eigenschaft `IMG` (für HTML-Dokumente; sie kann für XML/XHTML-Dokumente unterschiedlich geschrieben werden). Hinweis: Sie können die {{domxref("Element.localName", "localName")}}-Eigenschaft verwenden, um den lokalen Namen des Elements zuzugreifen – der in diesem Beispiel `img` (in Kleinbuchstaben) ist.

## Wert

Ein String, der den Tag-Namen des Elements angibt. Die Groß- und Kleinschreibung dieses Strings hängt vom Dokumenttyp ab:

- Für DOM-Bäume, die HTML-Dokumente repräsentieren, wird der zurückgegebene Tag-Name immer in der kanonischen Großbuchstabenform bereitgestellt. Zum Beispiel gibt `tagName`, auf ein {{HTMLElement("div")}}-Element aufgerufen, `"DIV"` zurück.
- Die Tag-Namen von Elementen in einem XML-DOM-Baum werden in der gleichen Schreibweise zurückgegeben, in der sie in der Original-XML-Datei geschrieben sind. Wenn ein XML-Dokument ein Tag `"<SomeTag>"` enthält, dann ist der Wert der `tagName`-Eigenschaft `"SomeTag"`.

Für {{domxref("Element")}}-Objekte ist der Wert von `tagName` derselbe wie der Wert der {{domxref("Node.nodeName", "nodeName")}}-Eigenschaft, die das Elementobjekt von {{domxref("Node")}} erbt.

## Beispiele

### HTML

```html
<span id="born">When I was born…</span>
```

### JavaScript

```js
const span = document.getElementById("born");
console.log(span.tagName);
```

In XHTML (oder jedem anderen XML-Format) wird die originale Groß- und Kleinschreibung beibehalten, sodass `"span"` ausgegeben würde, falls der ursprüngliche Tag-Name in Kleinbuchstaben erstellt wurde. In HTML würde stattdessen `"SPAN"` ausgegeben, unabhängig von der beim Erstellen des Originaldokuments verwendeten Groß- und Kleinschreibung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.localName")}}
