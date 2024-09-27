---
title: "Element: tagName Eigenschaft"
short-title: tagName
slug: Web/API/Element/tagName
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{ApiRef("DOM")}}

Die **`tagName`** Eigenschaft der [`Element`](/de/docs/Web/API/Element) Schnittstelle ist schreibgeschützt und gibt den Tag-Namen des Elements zurück, auf dem sie aufgerufen wird.

Zum Beispiel, wenn das Element ein {{HTMLElement("img")}} ist, ist seine `tagName` Eigenschaft `IMG` (für HTML-Dokumente; sie kann anders geschrieben sein für XML/XHTML-Dokumente). Hinweis: Sie können die [`localName`](/de/docs/Web/API/Element/localName) Eigenschaft verwenden, um auf den lokalen Namen des Elements zuzugreifen – der in diesem Beispiel `img` (kleingeschrieben) ist.

## Wert

Ein String, der den Tag-Namen des Elements angibt. Die Groß-/Kleinschreibung dieses Strings hängt vom Dokumenttyp ab:

- Für DOM-Bäume, die HTML-Dokumente repräsentieren, ist der zurückgegebene Tag-Name immer in der kanonischen Großbuchstabenform. Zum Beispiel, `tagName` auf einem {{HTMLElement("div")}} Element aufgerufen, gibt `"DIV"` zurück.
- Die Tag-Namen von Elementen in einem XML DOM-Baum werden in der gleichen Groß-/Kleinschreibung zurückgegeben, in der sie im Original-XML-Dokument geschrieben sind. Wenn ein XML-Dokument einen Tag `"<SomeTag>"` enthält, dann ist der Wert der `tagName` Eigenschaft `"SomeTag"`.

Für [`Element`](/de/docs/Web/API/Element) Objekte ist der Wert von `tagName` derselbe wie der Wert der [`nodeName`](/de/docs/Web/API/Node/nodeName) Eigenschaft, die das Elementobjekt von [`Node`](/de/docs/Web/API/Node) erbt.

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

In XHTML (oder einem anderen XML-Format) wird die ursprüngliche Groß-/Kleinschreibung beibehalten, so dass `"span"` ausgegeben würde, wenn der ursprüngliche Tag-Name in Kleinbuchstaben erstellt wurde. In HTML wird stattdessen `"SPAN"` ausgegeben, unabhängig von der bei der Erstellung des Dokuments verwendeten Groß-/Kleinschreibung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.localName`](/de/docs/Web/API/Element/localName)
