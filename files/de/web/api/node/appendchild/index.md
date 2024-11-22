---
title: "Node: Methode appendChild()"
short-title: appendChild()
slug: Web/API/Node/appendChild
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("DOM")}}

Die **`appendChild()`** Methode der [`Node`](/de/docs/Web/API/Node) Schnittstelle fügt ein Knoten am Ende der Liste der Kinder eines angegebenen Elternknotens hinzu.

> [!NOTE]
> Wenn das angegebene Kind ein Verweis auf einen vorhandenen Knoten im Dokument ist, verschiebt `appendChild()` es von seiner aktuellen Position zur neuen Position.

Wenn das angegebene Kind ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) ist, wird der gesamte Inhalt des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) in die Kindliste des angegebenen Elternknotens verschoben.

`appendChild()` gibt den neu angehängten Knoten zurück, oder wenn das Kind ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) ist, das geleerte Fragment.

> [!NOTE]
> Anders als diese Methode unterstützt die [`Element.append()`](/de/docs/Web/API/Element/append) Methode mehrere Argumente und das Anhängen von Zeichenfolgen. Sie können bevorzugt diese verwenden, wenn Ihr Knoten ein Element ist.

## Syntax

```js-nolint
appendChild(aChild)
```

### Parameter

- `aChild`
  - : Der Knoten, der an den angegebenen Elternknoten angehängt werden soll (üblicherweise ein Element).

### Rückgabewert

Ein [`Node`](/de/docs/Web/API/Node), der das angehängte Kind (`aChild`) ist, es sei denn, `aChild` ist ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), in diesem Fall wird das leere [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurückgegeben.

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Einschränkungen des DOM-Baums verletzt werden, das heißt, wenn einer der folgenden Fälle eintritt:
    - Wenn das Elternteil von `aChild` kein [`Document`](/de/docs/Web/API/Document), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) oder ein [`Element`](/de/docs/Web/API/Element) ist.
    - Wenn das Einfügen von `aChild` zu einem Zyklus führen würde, das heißt, wenn `aChild` ein Vorfahre des Knotens ist.
    - Wenn `aChild` kein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), ein [`DocumentType`](/de/docs/Web/API/DocumentType), ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData) ist.
    - Wenn der aktuelle Knoten ein [`Text`](/de/docs/Web/API/Text) ist und sein Elternteil ein [`Document`](/de/docs/Web/API/Document) ist.
    - Wenn der aktuelle Knoten ein [`DocumentType`](/de/docs/Web/API/DocumentType) ist und sein Elternteil _kein_ [`Document`](/de/docs/Web/API/Document) ist, denn ein _doctype_ sollte immer ein direkter Nachkomme eines _documents_ sein.
    - Wenn das Elternteil des Knotens ein [`Document`](/de/docs/Web/API/Document) ist und `aChild` ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit mehr als einem [`Element`](/de/docs/Web/API/Element) Kind ist, oder das ein [`Text`](/de/docs/Web/API/Text) Kind hat.
    - Wenn das Einfügen von `aChild` zu einem [`Document`](/de/docs/Web/API/Document) mit mehr als einem [`Element`](/de/docs/Web/API/Element) als Kind führen würde.

## Beschreibung

Wenn das angegebene Kind ein Verweis auf einen bestehenden Knoten im Dokument ist, verschiebt `appendChild()` es von seiner aktuellen Position zur neuen Position — es ist nicht erforderlich, den Knoten aus seinem Elternknoten zu entfernen, bevor es an einen anderen Knoten angehängt wird. Das bedeutet, dass ein Knoten nicht gleichzeitig an zwei Punkten des Dokuments vorhanden sein kann. Die Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) kann verwendet werden, um eine Kopie des Knotens zu erstellen, bevor dieser unter dem neuen Elternknoten angehängt wird. Kopien, die mit `cloneNode` erstellt werden, werden nicht automatisch synchron gehalten.

`appendChild()` gibt den neu angehängten Knoten zurück, anstatt den Elternknoten. Das bedeutet, Sie können den neuen Knoten sofort nach seiner Erstellung anhängen, ohne die Referenz darauf zu verlieren:

```js
const paragraph = document.body.appendChild(document.createElement("p"));
// You can append more elements to the paragraph later
```

Andererseits können Sie `appendChild()` nicht in einer [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) Art (wie jQuery) verwenden.

```js example-bad
// This doesn't append three paragraphs:
// the three elements will be nested instead of siblings
document.body
  .appendChild(document.createElement("p"))
  .appendChild(document.createElement("p"))
  .appendChild(document.createElement("p"));
```

## Beispiel

### Einen Absatz an den Body anhängen

```js
// Create a new paragraph element, and append it to the end of the document body
const p = document.createElement("p");
document.body.appendChild(p);
```

### Erstellen einer verschachtelten DOM-Struktur

In diesem Beispiel versuchen wir, eine verschachtelte DOM-Struktur mit so wenigen temporären Variablen wie möglich zu erstellen.

```js
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment);
```

Das generiert den folgenden DOM-Baum:

```html
<section>
  <ul>
    <li>hello world</li>
  </ul>
</section>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`Element.append()`](/de/docs/Web/API/Element/append)
