---
title: "Node: appendChild() Methode"
short-title: appendChild()
slug: Web/API/Node/appendChild
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Die **`appendChild()`** Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle fügt einen Knoten am Ende der Liste von Kindknoten eines angegebenen Elternknotens hinzu.

> [!NOTE]
> Wenn das angegebene Kind ein Verweis auf einen vorhandenen Knoten im Dokument ist, bewegt `appendChild()` es von seiner aktuellen Position zur neuen Position.

Wenn das angegebene Kind ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) ist, wird der gesamte Inhalt des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) in die Kindliste des angegebenen Elternknotens verschoben.

`appendChild()` gibt den neu hinzugefügten Knoten zurück oder, wenn das Kind ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) ist, das geleerte Fragment.

> [!NOTE]
> Im Gegensatz zu dieser Methode unterstützt die [`Element.append()`](/de/docs/Web/API/Element/append)-Methode mehrere Argumente und das Anhängen von Strings. Sie können es bevorzugen, sie zu verwenden, wenn Ihr Knoten ein Element ist.

## Syntax

```js-nolint
appendChild(aChild)
```

### Parameter

- `aChild`
  - : Der Knoten, der dem angegebenen Elternknoten (normalerweise ein Element) hinzugefügt werden soll.

### Rückgabewert

Ein [`Node`](/de/docs/Web/API/Node), der das hinzugefügte Kind (`aChild`) ist, außer wenn `aChild` ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) ist, in diesem Fall wird das leere [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurückgegeben.

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Einschränkungen des DOM-Baumes verletzt werden, das heißt, wenn einer der folgenden Fälle eintritt:
    - Wenn der Elternknoten von `aChild` kein [`Document`](/de/docs/Web/API/Document), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) oder ein [`Element`](/de/docs/Web/API/Element) ist.
    - Wenn das Einfügen von `aChild` zu einem Zyklus führen würde, das heißt, wenn `aChild` ein Ahne des Knotens ist.
    - Wenn `aChild` kein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`DocumentType`](/de/docs/Web/API/DocumentType), [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData) ist.
    - Wenn der aktuelle Knoten ein [`Text`](/de/docs/Web/API/Text) ist und sein Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.
    - Wenn der aktuelle Knoten ein [`DocumentType`](/de/docs/Web/API/DocumentType) ist und sein Elternknoten _kein_ [`Document`](/de/docs/Web/API/Document) ist, da ein _doctype_ immer ein direkter Nachkomme eines _Dokuments_ sein sollte.
    - Wenn der Elternknoten des Knotens ein [`Document`](/de/docs/Web/API/Document) ist und `aChild` ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit mehr als einem [`Element`](/de/docs/Web/API/Element)-Kind oder einem [`Text`](/de/docs/Web/API/Text)-Kind ist.
    - Wenn das Einfügen von `aChild` zu einem [`Document`](/de/docs/Web/API/Document) mit mehr als einem [`Element`](/de/docs/Web/API/Element) als Kind führen würde.

## Beschreibung

Wenn das angegebene Kind ein Verweis auf einen vorhandenen Knoten im Dokument ist, bewegt `appendChild()` es von seiner aktuellen Position zur neuen Position — es ist nicht erforderlich, den Knoten von seinem Elternknoten zu entfernen, bevor er einem anderen Knoten hinzugefügt wird. Dies bedeutet, dass ein Knoten nicht gleichzeitig an zwei Stellen im Dokument sein kann. Die Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) kann verwendet werden, um eine Kopie des Knotens zu erstellen, bevor er unter den neuen Elternknoten hinzugefügt wird. Kopien, die mit `cloneNode` erstellt wurden, werden nicht automatisch synchron gehalten.

`appendChild()` gibt den neu hinzugefügten Knoten zurück, anstatt des Elternknotens. Das bedeutet, dass Sie den neuen Knoten anhängen können, sobald er erstellt ist, ohne die Referenz zu verlieren:

```js
const paragraph = document.body.appendChild(document.createElement("p"));
// You can append more elements to the paragraph later
```

Andererseits können Sie `appendChild()` nicht in einer [fluent API](https://en.wikipedia.org/wiki/Fluent_interface)-Art (wie JQuery) verwenden.

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

In diesem Beispiel versuchen wir, eine verschachtelte DOM-Struktur mit möglichst wenigen temporären Variablen zu erstellen.

```js
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment);
```

Dies erzeugt den folgenden DOM-Baum:

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
