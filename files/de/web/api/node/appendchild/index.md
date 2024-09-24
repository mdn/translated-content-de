---
title: "Node: appendChild()-Methode"
short-title: appendChild()
slug: Web/API/Node/appendChild
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Die **`appendChild()`**-Methode der {{domxref("Node")}}-Schnittstelle fügt einen Knoten am Ende der Liste der Kinder eines angegebenen übergeordneten Knotens hinzu.

> [!NOTE]
> Wenn das angegebene Kind eine Referenz zu einem vorhandenen Knoten im Dokument ist, bewegt `appendChild()` es von seiner aktuellen Position zur neuen Position.

Wenn das angegebene Kind ein {{domxref("DocumentFragment")}} ist, werden die gesamten Inhalte des {{domxref("DocumentFragment")}} in die Kinderliste des angegebenen übergeordneten Knotens verschoben.

`appendChild()` gibt den neu hinzugefügten Knoten zurück, oder wenn das Kind ein {{domxref("DocumentFragment")}} ist, das geleerte Fragment.

> [!NOTE]
> Im Gegensatz zu dieser Methode unterstützt die {{domxref("Element.append()")}}-Methode mehrere Argumente und das Anhängen von Zeichenfolgen. Sie können diese bevorzugen, wenn Ihr Knoten ein Element ist.

## Syntax

```js-nolint
appendChild(aChild)
```

### Parameter

- `aChild`
  - : Der Knoten, der dem angegebenen übergeordneten Knoten hinzugefügt werden soll (häufig ein Element).

### Rückgabewert

Ein {{domxref("Node")}}, das das angehängte Kind (`aChild`) ist, außer wenn `aChild` ein {{domxref("DocumentFragment")}} ist, in welchem Fall das leere {{domxref("DocumentFragment")}} zurückgegeben wird.

### Ausnahmen

- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Einschränkungen des DOM-Baums verletzt werden, d. h., wenn einer der folgenden Fälle auftritt:
    - Wenn der Elternteil von `aChild` kein {{domxref("Document")}}, {{domxref("DocumentFragment")}} oder ein {{domxref("Element")}} ist.
    - Wenn das Einfügen von `aChild` zu einem Zyklus führen würde, d. h., wenn `aChild` ein Vorfahr des Knotens ist.
    - Wenn `aChild` kein {{domxref("DocumentFragment")}}, ein {{domxref("DocumentType")}}, ein {{domxref("Element")}} oder ein {{domxref("CharacterData")}} ist.
    - Wenn der aktuelle Knoten ein {{domxref("Text")}} ist und sein Elternteil ein {{domxref("Document")}} ist.
    - Wenn der aktuelle Knoten ein {{domxref("DocumentType")}} ist und sein Elternteil _nicht_ ein {{domxref("Document")}} ist, da ein _doctype_ immer ein direkter Nachkomme eines _document_ sein sollte.
    - Wenn der Elternteil des Knotens ein {{domxref("Document")}} ist und `aChild` ein {{domxref("DocumentFragment")}} mit mehr als einem {{domxref("Element")}}-Kind ist oder das ein {{domxref("Text")}}-Kind hat.
    - Wenn das Einfügen von `aChild` zu einem {{domxref("Document")}} mit mehr als einem {{domxref("Element")}} als Kind führen würde.

## Beschreibung

Wenn das angegebene Kind eine Referenz zu einem vorhandenen Knoten im Dokument ist, bewegt `appendChild()` es von seiner aktuellen Position zur neuen Position — es besteht keine Notwendigkeit, den Knoten vor dem Anhängen an einen anderen Knoten von seinem übergeordneten Knoten zu entfernen. Das bedeutet, dass ein Knoten nicht gleichzeitig an zwei Stellen im Dokument sein kann. Die {{domxref("Node.cloneNode()")}}-Methode kann verwendet werden, um eine Kopie des Knotens zu erstellen, bevor er dem neuen übergeordneten Knoten hinzugefügt wird. Kopien, die mit `cloneNode` erstellt wurden, werden nicht automatisch synchron gehalten.

`appendChild()` gibt den neu hinzugefügten Knoten zurück, anstelle des übergeordneten Knotens. Das bedeutet, dass Sie den neuen Knoten hinzufügen können, sobald er erstellt wurde, ohne die Referenz darauf zu verlieren:

```js
const paragraph = document.body.appendChild(document.createElement("p"));
// Sie können später weitere Elemente zum Absatz hinzufügen
```

Auf der anderen Seite können Sie `appendChild()` nicht in einer [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) Art und Weise verwenden (wie JQuery).

```js example-bad
// Dies fügt nicht drei Absätze hinzu:
// die drei Elemente werden verschachtelt anstatt Geschwister zu sein
document.body
  .appendChild(document.createElement("p"))
  .appendChild(document.createElement("p"))
  .appendChild(document.createElement("p"));
```

## Beispiel

### Einen Absatz zum Body hinzufügen

```js
// Erstellen Sie ein neues Absatzelement und fügen Sie es am Ende des Body-Dokuments hinzu
const p = document.createElement("p");
document.body.appendChild(p);
```

### Erstellen einer verschachtelten DOM-Struktur

In diesem Beispiel versuchen wir, eine verschachtelte DOM-Struktur unter Verwendung so weniger temporärer Variablen wie möglich zu erstellen.

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

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.append()")}}
