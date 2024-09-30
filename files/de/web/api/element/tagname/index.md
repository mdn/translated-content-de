---
title: "Element: tagName-Eigenschaft"
short-title: tagName
slug: Web/API/Element/tagName
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{ApiRef("DOM")}}

Die **`tagName`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces ist eine schreibgeschützte Eigenschaft, die den Tag-Namen des Elements zurückgibt, auf dem sie aufgerufen wird.

Zum Beispiel, wenn das Element ein {{HTMLElement("img")}} ist, dann ist seine `tagName`-Eigenschaft `IMG` (für HTML-Dokumente; sie kann in XML/XHTML-Dokumenten anders geschrieben sein). Hinweis: Sie können die [`localName`](/de/docs/Web/API/Element/localName)-Eigenschaft verwenden, um auf den lokalen Namen des Elements zuzugreifen — was in dem Beispiel `img` (kleingeschrieben) wäre.

## Wert

Ein String, der den Tag-Namen des Elements angibt. Die Groß- und Kleinschreibung dieses Strings hängt vom Dokumententyp ab:

- Für DOM-Bäume, die HTML-Dokumente darstellen, wird der zurückgegebene Tag-Name immer in der kanonischen Großbuchstabenform angezeigt. Zum Beispiel, `tagName` aufgerufen auf einem {{HTMLElement("div")}} element gibt `"DIV"` zurück.
- Die Tag-Namen von Elementen in einem XML-DOM-Baum werden in der gleichen Schreibweise zurückgegeben, wie sie im ursprünglichen XML-Dokument geschrieben sind. Wenn ein XML-Dokument einen Tag `"<SomeTag>"` enthält, dann ist der Wert der `tagName`-Eigenschaft `"SomeTag"`.

Für [`Element`](/de/docs/Web/API/Element)-Objekte ist der Wert von `tagName` derselbe wie der Wert der [`nodeName`](/de/docs/Web/API/Node/nodeName)-Eigenschaft, die das Elementobjekt von [`Node`](/de/docs/Web/API/Node) erbt.

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

In XHTML (oder jedem anderen XML-Format) wird die ursprüngliche Schreibweise beibehalten, so dass `"span"` ausgegeben wird, falls der ursprüngliche Tag-Name in Kleinbuchstaben erstellt wurde. In HTML wird unabhängig von der bei der Erstellung des ursprünglichen Dokuments verwendeten Schreibweise stattdessen `"SPAN"` ausgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.localName`](/de/docs/Web/API/Element/localName)
