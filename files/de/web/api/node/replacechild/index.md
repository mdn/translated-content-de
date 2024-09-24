---
title: "Node: replaceChild()-Methode"
short-title: replaceChild()
slug: Web/API/Node/replaceChild
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`replaceChild()`**-Methode der {{domxref("Node")}}-Schnittstelle ersetzt einen Kindknoten innerhalb des angegebenen (Eltern-)Knotens.

## Syntax

```js-nolint
replaceChild(newChild, oldChild)
```

### Parameter

- `newChild`
  - : Der neue Knoten, der `oldChild` ersetzt.
    > [!WARNING]
    > Wenn der neue Knoten bereits irgendwo anders im DOM vorhanden ist, wird er zuerst von dieser Position entfernt.
- `oldChild`
  - : Das Kind, das ersetzt werden soll.

> [!NOTE]
> Die Parameterreihenfolge, _neu_ vor _alt_, ist ungewöhnlich.
> [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith), das nur für Knoten gilt, die Elemente sind,
> kann leichter zu lesen und zu verwenden sein.

### Rückgabewert

Der ersetzte {{domxref("Node")}}. Dies ist derselbe Knoten wie `oldChild`.

### Ausnahmen

- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Einschränkungen des DOM-Baums verletzt werden, das heißt, wenn einer der folgenden Fälle eintritt:
    - Wenn das Elternteil von `oldChild` kein {{domxref("Document")}}, {{domxref("DocumentFragment")}} oder ein {{domxref("Element")}} ist.
    - Wenn das Ersetzen von `oldChild` durch `newChild` zu einem Zyklus führen würde, das heißt, wenn `newChild` ein Vorfahre des Knotens ist.
    - Wenn `newChild` kein {{domxref("DocumentFragment")}}, ein {{domxref("DocumentType")}}, ein {{domxref("Element")}} oder ein {{domxref("CharacterData")}} ist.
    - Wenn der aktuelle Knoten ein {{domxref("Text")}} ist und sein Elternteil ein {{domxref("Document")}} ist.
    - Wenn der aktuelle Knoten ein {{domxref("DocumentType")}} ist und sein Elternteil _kein_ {{domxref("Document")}} ist, da ein _DOCTYPE_ immer ein direkter Nachkomme eines _Dokuments_ sein sollte.
    - Wenn das Elternteil des Knotens ein {{domxref("Document")}} ist und `newChild` ein {{domxref("DocumentFragment")}} mit mehr als einem {{domxref("Element")}} Kind oder einem {{domxref("Text")}} Kind ist.
    - Wenn das Ersetzen von `oldChild` durch `newChild` zu einem {{domxref("Document")}} mit mehr als einem {{domxref("Element")}} als Kind führen würde.
    - Wenn das Ersetzen von `oldChild` durch `newChild` zur Anwesenheit eines {{domxref("Element")}}-Knotens vor einem {{domxref("DocumentType")}}-Knoten führen würde.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Elternteil von `oldChild` nicht der aktuelle Knoten ist.

## Beispiel

```js
// Gegeben:
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// Erstellen eines leeren Elementknotens
// ohne ID, Attribute oder Inhalte
const sp1 = document.createElement("span");

// Geben Sie ihm ein id-Attribut namens 'newSpan'
sp1.id = "newSpan";

// Erstellen Sie einen Inhalt für das neue Element.
const sp1_content = document.createTextNode("new replacement span element.");

// Wenden Sie diesen Inhalt auf das neue Element an
sp1.appendChild(sp1_content);

// Erstellen Sie einen Verweis auf den vorhandenen Knoten, der ersetzt werden soll
const sp2 = document.getElementById("childSpan");
const parentDiv = sp2.parentNode;

// Ersetzen Sie den vorhandenen Knoten sp2 durch das neue span-Element sp1
parentDiv.replaceChild(sp1, sp2);

// Ergebnis:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.removeChild")}}
- {{domxref("Element.replaceWith")}}
