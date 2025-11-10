---
title: "Node: appendChild() Methode"
short-title: appendChild()
slug: Web/API/Node/appendChild
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("DOM")}}

Die **`appendChild()`** Methode der [`Node`](/de/docs/Web/API/Node) Schnittstelle fügt ein Knoten am Ende der Liste der Kinder eines angegebenen Elternelements hinzu.

> [!NOTE]
> Wenn das gegebene Kind ein Verweis auf einen bestehenden Knoten im Dokument ist, bewegt `appendChild()` es von seiner aktuellen Position an die neue Position.

Wenn das gegebene Kind ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) ist, wird der gesamte Inhalt des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) in die Kindliste des angegebenen Elternelements verschoben.

`appendChild()` gibt den neu angehängten Knoten zurück, oder wenn das Kind ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) ist, das geleerte Fragment.

> [!NOTE]
> Im Gegensatz zu dieser Methode unterstützt die [`Element.append()`](/de/docs/Web/API/Element/append) Methode mehrere Argumente und das Anhängen von Strings. Sie können es bevorzugen, wenn Ihr Knoten ein Element ist.

## Syntax

```js-nolint
appendChild(child)
```

### Parameter

- `child`
  - : Der Knoten, der an das angegebene Elternelement (häufig ein Element) angehängt werden soll.

### Rückgabewert

Ein [`Node`](/de/docs/Web/API/Node), das das angehängte Kind (`child`) ist, außer wenn `child` ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) ist, in welchem Fall das leere [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurückgegeben wird.

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Einschränkungen des DOM-Baums verletzt werden, also wenn einer der folgenden Fälle eintritt:
    - Wenn das Elternelement von `child` kein [`Document`](/de/docs/Web/API/Document), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) oder ein [`Element`](/de/docs/Web/API/Element) ist.
    - Wenn das Einfügen von `child` zu einem Zyklus führen würde, das heißt, wenn `child` ein Vorfahre des Knotens ist.
    - Wenn `child` kein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), ein [`DocumentType`](/de/docs/Web/API/DocumentType), ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData) ist.
    - Wenn der aktuelle Knoten ein [`Text`](/de/docs/Web/API/Text) ist und sein Elternelement ein [`Document`](/de/docs/Web/API/Document) ist.
    - Wenn der aktuelle Knoten ein [`DocumentType`](/de/docs/Web/API/DocumentType) ist und sein Elternelement _nicht_ ein [`Document`](/de/docs/Web/API/Document) ist, da ein _doctype_ immer ein direkter Nachfahre eines _document_ sein sollte.
    - Wenn das Elternelement des Knotens ein [`Document`](/de/docs/Web/API/Document) ist und `child` ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit mehr als einem [`Element`](/de/docs/Web/API/Element) Kind oder das ein [`Text`](/de/docs/Web/API/Text) Kind hat.
    - Wenn das Einfügen von `child` zu einem [`Document`](/de/docs/Web/API/Document) mit mehr als einem [`Element`](/de/docs/Web/API/Element) als Kind führen würde.

## Beschreibung

Wenn das gegebene Kind ein Verweis auf einen bestehenden Knoten im Dokument ist, bewegt `appendChild()` es von seiner aktuellen Position an die neue Position — es ist nicht erforderlich, den Knoten von seinem Elternelement zu entfernen, bevor er an ein anderes Elternelement angehängt wird. Dies bedeutet, dass ein Knoten nicht gleichzeitig an zwei Stellen im Dokument sein kann. Die [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) Methode kann verwendet werden, um eine Kopie des Knotens zu erstellen, bevor er unter dem neuen Elternelement angehängt wird. Kopien, die mit `cloneNode` erstellt wurden, werden nicht automatisch synchron gehalten.

`appendChild()` gibt den neu angehängten Knoten zurück, anstatt des Elternelements. Dies bedeutet, dass Sie den neuen Knoten anhängen können, sobald er erstellt ist, ohne die Referenz darauf zu verlieren:

```js
const paragraph = document.body.appendChild(document.createElement("p"));
// You can append more elements to the paragraph later
```

Andererseits können Sie `appendChild()` nicht in einer [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) Weise verwenden (wie jQuery).

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

Es erzeugt den folgenden DOM-Baum:

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
