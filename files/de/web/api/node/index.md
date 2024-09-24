---
title: Knoten
slug: Web/API/Node
l10n:
  sourceCommit: 90d61cc4fa9e53f74183be66f58d33aa8d7c629a
---

{{APIRef("DOM")}}

Das {{Glossary("DOM")}}-**`Node`**-Interface ist eine abstrakte Basisklasse, auf der viele andere DOM-API-Objekte basieren, wodurch diese Objekttypen ähnlich und oft austauschbar verwendet werden können. Da es sich um eine abstrakte Klasse handelt, gibt es kein einfaches `Node`-Objekt. Alle Objekte, die `Node`-Funktionalität implementieren, basieren auf einer ihrer Unterklassen. Am bemerkenswertesten sind {{domxref("Document")}}, {{domxref("Element")}} und {{domxref("DocumentFragment")}}.

Darüber hinaus wird jede Art von DOM-Knoten durch ein auf `Node` basierendes Interface dargestellt. Dazu gehören {{DOMxRef("Attr")}}, {{DOMxRef("CharacterData")}} (worauf {{DOMxRef("Text")}}, {{DOMxRef("Comment")}}, {{DOMxRef("CDATASection")}} und {{DOMxRef("ProcessingInstruction")}} basieren) und {{DOMxRef("DocumentType")}}.

In einigen Fällen kann ein bestimmtes Merkmal des Basis-`Node`-Interfaces nicht auf eines seiner Kind-Interfaces angewendet werden; in diesem Fall kann der vererbende Knoten `null` zurückgeben oder, je nach Umständen, eine Ausnahme auslösen. Beispielsweise wird beim Versuch, Knoten zu einem Knotentyp hinzuzufügen, der keine Kinder haben kann, eine Ausnahme ausgelöst.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt `Node` Eigenschaften von seinem Elternteil, {{DOMxRef("EventTarget")}}_.

- {{DOMxRef("Node.baseURI")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Basis-URL des Dokuments darstellt, das den `Node` enthält.
- {{DOMxRef("Node.childNodes")}} {{ReadOnlyInline}}
  - : Gibt eine Live-{{DOMxRef("NodeList")}} zurück, die alle Kinder dieses Knotens enthält (einschließlich Elemente, Text und Kommentare). Da {{DOMxRef("NodeList")}} live ist, wird das {{DOMxRef("NodeList")}}-Objekt automatisch aktualisiert, wenn sich die Kinder des `Node` ändern.
- {{DOMxRef("Node.firstChild")}} {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den ersten direkten Kindknoten des Knotens repräsentiert, oder `null`, wenn der Knoten kein Kind hat.
- {{DOMxRef("Node.isConnected")}} {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob der Node direkt oder indirekt mit dem Kontextobjekt verbunden ist, z. B. das {{DOMxRef("Document")}}-Objekt im Fall des normalen DOMs oder das {{DOMxRef("ShadowRoot")}} im Fall eines Shadow DOMs.
- {{DOMxRef("Node.lastChild")}} {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den letzten direkten Kindknoten des Knotens repräsentiert, oder `null`, wenn der Knoten kein Kind hat.
- {{DOMxRef("Node.nextSibling")}} {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den nächsten Knoten im Baum repräsentiert, oder `null`, wenn es keinen solchen Knoten gibt.
- {{DOMxRef("Node.nodeName")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des `Node` enthält. Die Struktur des Namens variiert je nach Knotentyp. Zum Beispiel enthält ein {{DOMxRef("HTMLElement")}} den Namen des entsprechenden Tags, wie `'AUDIO'` für ein {{DOMxRef("HTMLAudioElement")}}, ein {{DOMxRef("Text")}}-Knoten hat den String `'#text'`, oder ein {{DOMxRef("Document")}}-Knoten hat den String `'#document'`.
- {{DOMxRef("Node.nodeType")}} {{ReadOnlyInline}}

  - : Gibt einen `unsigned short` zurück, der den Typ des Knotens repräsentiert. Mögliche Werte sind:

    | Name                          | Wert  |
    | ----------------------------- | ----- |
    | `ELEMENT_NODE`                | `1`   |
    | `ATTRIBUTE_NODE`              | `2`   |
    | `TEXT_NODE`                   | `3`   |
    | `CDATA_SECTION_NODE`          | `4`   |
    | `PROCESSING_INSTRUCTION_NODE` | `7`   |
    | `COMMENT_NODE`                | `8`   |
    | `DOCUMENT_NODE`               | `9`   |
    | `DOCUMENT_TYPE_NODE`          | `10`  |
    | `DOCUMENT_FRAGMENT_NODE`      | `11`  |

- {{DOMxRef("Node.nodeValue")}}
  - : Gibt den Wert des aktuellen Knotens zurück / setzt ihn.
- {{DOMxRef("Node.ownerDocument")}} {{ReadOnlyInline}}
  - : Gibt das {{DOMxRef("Document")}} zurück, zu dem dieser Knoten gehört. Wenn der Knoten selbst ein Dokument ist, gibt er `null` zurück.
- {{DOMxRef("Node.parentNode")}} {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der das Elternteil dieses Knotens ist. Wenn es keinen solchen Knoten gibt, wie wenn dieser Knoten der oberste im Baum ist oder wenn er nicht in einem Baum enthalten ist, gibt diese Eigenschaft `null` zurück.
- {{DOMxRef("Node.parentElement")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("Element")}} zurück, das das Elternteil dieses Knotens ist. Wenn der Knoten kein Elternteil hat, oder wenn dieses Elternteil kein {{DOMxRef("Element")}} ist, gibt diese Eigenschaft `null` zurück.
- {{DOMxRef("Node.previousSibling")}} {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den vorherigen Knoten im Baum repräsentiert, oder `null`, wenn es keinen solchen Knoten gibt.
- {{DOMxRef("Node.textContent")}}
  - : Gibt den Textinhalt eines Elements und all seiner Nachkommen zurück / setzt ihn.

## Instanz-Methoden

_Zusätzlich zu den unten aufgeführten Methoden erbt `Node` Methoden von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Node.appendChild()")}}
  - : Fügt das angegebene `childNode`-Argument als letztes Kind zum aktuellen Knoten hinzu. Wenn das Argument auf einen vorhandenen Knoten im DOM-Baum verweist, wird der Knoten von seiner aktuellen Position gelöst und an der neuen Position angehängt.
- {{DOMxRef("Node.cloneNode()")}}
  - : Klont einen `Node` und optional all dessen Inhalte. Standardmäßig klont es den Inhalt des Knotens.
- {{DOMxRef("Node.compareDocumentPosition()")}}
  - : Vergleicht die Position des aktuellen Knotens mit einem anderen Knoten in einem beliebigen anderen Dokument.
- {{DOMxRef("Node.contains()")}}
  - : Gibt `true` oder `false` zurück, je nachdem, ob ein Knoten ein Nachkomme des aufrufenden Knotens ist oder nicht.
- {{DOMxRef("Node.getRootNode()")}}
  - : Gibt das Wurzelobjekt des Kontextobjekts zurück, das optional die Shadow-Wurzel beinhaltet, wenn sie verfügbar ist.
- {{DOMxRef("Node.hasChildNodes()")}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob das Element irgendwelche Kindknoten hat oder nicht.
- {{DOMxRef("Node.insertBefore()")}}
  - : Fügt einen `Node` vor dem Referenzknoten als Kind eines angegebenen Elternknotens ein.
- {{DOMxRef("Node.isDefaultNamespace()")}}
  - : Akzeptiert eine Namespace-URI als Argument und gibt einen Boolean-Wert mit dem Wert `true` zurück, wenn der Namespace der Standard-Namespace auf dem gegebenen Knoten ist, oder `false`, wenn nicht.
- {{DOMxRef("Node.isEqualNode()")}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob zwei Knoten denselben Typ haben und alle ihre definierenden Datenpunkte übereinstimmen.
- {{DOMxRef("Node.isSameNode()")}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob die beiden Knoten identisch sind (d. h. sie verweisen auf dasselbe Objekt).
- {{DOMxRef("Node.lookupPrefix()")}}
  - : Gibt einen String zurück, der das Präfix für eine gegebene Namespace-URI enthält, falls vorhanden, und `null` falls nicht. Wenn mehrere Präfixe möglich sind, ist das Ergebnis implementierungsabhängig.
- {{DOMxRef("Node.lookupNamespaceURI()")}}
  - : Akzeptiert ein Präfix und gibt die damit verbundene Namespace-URI auf dem gegebenen Knoten zurück, wenn vorhanden (und `null`, falls nicht). Wenn `null` für das Präfix übergeben wird, wird der Standard-Namespace zurückgegeben.
- {{DOMxRef("Node.normalize()")}}
  - : Bereinigt alle Textknoten unter diesem Element (zusammenführen von angrenzenden, entfernen von leeren).
- {{DOMxRef("Node.removeChild()")}}
  - : Entfernt einen Kindknoten aus dem aktuellen Element, der muss ein Kind des aktuellen Knotens sein.
- {{DOMxRef("Node.replaceChild()")}}
  - : Ersetzt einen Kind-`Node` des aktuellen mit dem im Parameter angegebenen zweiten.

## Beispiele

### Entfernen aller Kinder innerhalb eines Knotens

Diese Funktion entfernt jedes erste Kind eines Elements, bis keine mehr übrig sind.

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

Die Verwendung dieser Funktion erfolgt mit einem einzigen Aufruf. Hier leeren wir den Body des Dokuments:

```js
removeAllChildren(document.body);
```

Eine Alternative könnte sein, die `textContent` auf den leeren String zu setzen: `document.body.textContent = ""`.

### Durch Kindknoten rekursieren

Die folgende Funktion ruft rekursiv eine Callback-Funktion für jeden vom Wurzelknoten enthaltenen Knoten auf (einschließlich des Wurzelknotens selbst):

```js
function eachNode(rootNode, callback) {
  if (!callback) {
    const nodes = [];
    eachNode(rootNode, (node) => {
      nodes.push(node);
    });
    return nodes;
  }

  if (callback(rootNode) === false) {
    return false;
  }

  if (rootNode.hasChildNodes()) {
    for (const node of rootNode.childNodes) {
      if (eachNode(node, callback) === false) {
        return;
      }
    }
  }
}
```

Die Funktion ruft rekursiv eine Funktion für jeden Nachkommenknoten von `rootNode` auf (einschließlich des Wurzelknotens selbst).

Wenn `callback` weggelassen wird, gibt die Funktion stattdessen ein {{jsxref("Array")}} zurück, das `rootNode` und alle darin enthaltenen Knoten enthält.

Wenn `callback` angegeben ist und `false` zurückgibt, wird die aktuelle Recurse-Ebene abgebrochen und die Funktion nimmt die Ausführung auf der letzten Elternebene wieder auf. Dies kann verwendet werden, um Schleifen abzubrechen, sobald ein Knoten gefunden wurde (wie das Suchen nach einem Textknoten, der einen bestimmten String enthält).

Die Funktion hat zwei Parameter:

- `rootNode`
  - : Das `Node`-Objekt, dessen Nachkommen durchlaufen werden.
- `callback` {{optional_inline}}
  - : Ein optionaler Callback-[Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), der einen `Node` als einziges Argument erhält. Wenn weggelassen, gibt `eachNode` ein {{jsxref("Array")}} aller im `rootNode` enthaltenen Knoten zurück (einschließlich des Wurzelknotens selbst).

Das Folgende zeigt eine reale Anwendung der `eachNode()`-Funktion: die Suche nach Text auf einer Webseite.

Wir verwenden eine Wrapper-Funktion namens `grep`, um die Suche durchzuführen:

```js
function grep(parentNode, pattern) {
  let matches = [];
  let endScan = false;

  eachNode(parentNode, (node) => {
    if (endScan) {
      return false;
    }

    // Ignorieren Sie alles, was kein Textknoten ist
    if (node.nodeType !== Node.TEXT_NODE) {
      return;
    }

    if (typeof pattern === "string" && node.textContent.includes(pattern)) {
      matches.push(node);
    } else if (pattern.test(node.textContent)) {
      if (!pattern.global) {
        endScan = true;
        matches = node;
      } else {
        matches.push(node);
      }
    }
  });

  return matches;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
