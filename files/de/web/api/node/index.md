---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: 90d61cc4fa9e53f74183be66f58d33aa8d7c629a
---

{{APIRef("DOM")}}

Das [DOM](/de/docs/Glossary/DOM) **`Node`**-Interface ist eine abstrakte Basisklasse, auf der viele andere DOM-API-Objekte basieren, wodurch diese Objekttypen ähnlich und oft austauschbar verwendet werden können. Als abstrakte Klasse gibt es kein einfaches `Node`-Objekt. Alle Objekte, die die `Node`-Funktionalität implementieren, basieren auf einer ihrer Unterklassen. Am bemerkenswertesten sind [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

Außerdem wird jede Art von DOM-Knoten durch ein auf `Node` basierendes Interface dargestellt. Dazu gehören [`Attr`](/de/docs/Web/API/Attr), [`CharacterData`](/de/docs/Web/API/CharacterData) (auf denen [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) und [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) basieren) und [`DocumentType`](/de/docs/Web/API/DocumentType).

In einigen Fällen kann es vorkommen, dass ein bestimmtes Merkmal des Basis-`Node`-Interfaces nicht auf eines seiner Kind-Interfaces zutrifft; in diesem Fall kann der erbende Knoten `null` zurückgeben oder eine Ausnahme auslösen, abhängig von den Umständen. Zum Beispiel wird beim Versuch, einem Knotentyp, der keine Kinder haben kann, Kinder hinzuzufügen, eine Ausnahme ausgelöst.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Neben den unten aufgeführten Eigenschaften erbt `Node` Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Basis-URL des Dokuments darstellt, das den `Node` enthält.
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) {{ReadOnlyInline}}
  - : Gibt eine Live-[`NodeList`](/de/docs/Web/API/NodeList) zurück, die alle Kinder dieses Knotens enthält (einschließlich Elementen, Text und Kommentaren). Da [`NodeList`](/de/docs/Web/API/NodeList) live ist, wird das Objekt automatisch aktualisiert, wenn sich die Kinder des `Node` ändern.
- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den ersten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Node mit dem Kontextobjekt verbunden ist (direkt oder indirekt), z.B. dem [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOM oder dem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Schatten-DOMs.
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den letzten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den nächsten Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.nodeName`](/de/docs/Web/API/Node/nodeName) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des `Node` enthält. Die Struktur des Namens unterscheidet sich je nach Knotentyp. Z.B. wird ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) den Namen des entsprechenden Tags enthalten, wie `'AUDIO'` für ein [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), ein [`Text`](/de/docs/Web/API/Text)-Knoten wird den String `'#text'` haben oder ein [`Document`](/de/docs/Web/API/Document)-Knoten wird `'#document'` haben.
- [`Node.nodeType`](/de/docs/Web/API/Node/nodeType) {{ReadOnlyInline}}

  - : Gibt einen `unsigned short` zurück, der den Typ des Knotens darstellt. Mögliche Werte sind:

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

- [`Node.nodeValue`](/de/docs/Web/API/Node/nodeValue)
  - : Gibt den Wert des aktuellen Knotens zurück / legt ihn fest.
- [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) {{ReadOnlyInline}}
  - : Gibt das [`Document`](/de/docs/Web/API/Document) zurück, zu dem dieser Knoten gehört. Wenn der Knoten selbst ein Dokument ist, wird `null` zurückgegeben.
- [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der das übergeordnete Element dieses Knotens ist. Wenn es keinen solchen Knoten gibt, z.B. wenn dieser Knoten der oberste im Baum ist oder nicht an einem Baum teilnimmt, gibt diese Eigenschaft `null` zurück.
- [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) {{ReadOnlyInline}}
  - : Gibt ein [`Element`](/de/docs/Web/API/Element) zurück, das das übergeordnete Element dieses Knotens ist. Wenn der Knoten kein übergeordnetes Element hat oder wenn das übergeordnete Element kein [`Element`](/de/docs/Web/API/Element) ist, gibt diese Eigenschaft `null` zurück.
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den vorherigen Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)
  - : Gibt den Textinhalt eines Elements und aller seiner Nachkommen zurück / legt ihn fest.

## Instanz-Methoden

_Neben den unten aufgeführten Methoden erbt `Node` Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
  - : Fügt das angegebene `childNode`-Argument als letztes Kind zum aktuellen Knoten hinzu. Wenn das Argument einen vorhandenen Knoten im DOM-Baum referenziert, wird der Knoten von seiner aktuellen Position gelöst und an der neuen Position angefügt.
- [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)
  - : Klont einen `Node` und optional alle seine Inhalte. Standardmäßig werden die Inhalte des Knotens geklont.
- [`Node.compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition)
  - : Vergleicht die Position des aktuellen Knotens mit einem anderen Knoten in einem beliebigen anderen Dokument.
- [`Node.contains()`](/de/docs/Web/API/Node/contains)
  - : Gibt einen `true` oder `false`-Wert zurück, der angibt, ob ein Knoten ein Nachkomme des aufrufenden Knotens ist oder nicht.
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode)
  - : Gibt das Wurzelobjekt des Kontextobjekts zurück, das optional das Schattenwurzelobjekt einschließt, falls es verfügbar ist.
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element Kindknoten hat oder nicht.
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
  - : Fügt einen `Node` vor dem Referenzknoten als Kind eines angegebenen übergeordneten Knotens ein.
- [`Node.isDefaultNamespace()`](/de/docs/Web/API/Node/isDefaultNamespace)
  - : Akzeptiert eine Namensraum-URI als Argument und gibt einen booleschen Wert mit einem Wert von `true` zurück, wenn der Namensraum der Standardnamensraum auf dem angegebenen Knoten ist oder `false`, wenn nicht.
- [`Node.isEqualNode()`](/de/docs/Web/API/Node/isEqualNode)
  - : Gibt einen booleschen Wert zurück, der angibt, ob zwei Knoten vom gleichen Typ sind und alle ihre bestimmenden Datenpunkte übereinstimmen.
- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Gibt einen booleschen Wert zurück, der angibt, ob die beiden Knoten gleich sind (d.h. sie verweisen auf dasselbe Objekt).
- [`Node.lookupPrefix()`](/de/docs/Web/API/Node/lookupPrefix)
  - : Gibt einen String zurück, der das Präfix für eine gegebene Namensraum-URI enthält, falls vorhanden, und `null`, wenn nicht. Wenn mehrere Präfixe möglich sind, ist das Ergebnis implementierungsabhängig.
- [`Node.lookupNamespaceURI()`](/de/docs/Web/API/Node/lookupNamespaceURI)
  - : Akzeptiert ein Präfix und gibt die Namensraum-URI zurück, die damit auf dem angegebenen Knoten assoziiert ist, falls gefunden (und `null`, wenn nicht). Die Angabe von `null` für das Präfix gibt den Standardnamensraum zurück.
- [`Node.normalize()`](/de/docs/Web/API/Node/normalize)
  - : Bereinigt alle Textknoten unter diesem Element (merge adjacent, remove empty).
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
  - : Entfernt einen Kindknoten aus dem aktuellen Element, der ein Kind des aktuellen Knotens sein muss.
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
  - : Ersetzt einen Kind-`Node` des aktuellen durch den zweiten im Parameter angegebenen.

## Beispiele

### Entfernen aller in einem Knoten verschachtelten Kinder

Diese Funktion entfernt jedes erste Kind eines Elements, bis keine mehr übrig sind.

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

Die Verwendung dieser Funktion erfolgt in einem einzigen Aufruf. Hier leeren wir den Body des Dokuments:

```js
removeAllChildren(document.body);
```

Eine Alternative könnte sein, `textContent` auf den leeren String zu setzen: `document.body.textContent = ""`.

### Durch Kinderknoten rekursiv durchgehen

Die folgende Funktion ruft eine Callback-Funktion rekursiv für jeden Knoten auf, der von einem Wurzelknoten enthalten wird (einschließlich des Wurzelknotens selbst):

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

Die Funktion ruft eine Funktion rekursiv für jeden Nachkommenknoten von `rootNode` auf (einschließlich des Wurzelknotens selbst).

Wenn `callback` weggelassen wird, gibt die Funktion stattdessen ein {{jsxref("Array")}} zurück, das `rootNode` und alle darin enthaltenen Knoten enthält.

Wenn `callback` bereitgestellt wird und es `false` zurückgibt, wenn es aufgerufen wird, wird die aktuelle Rekursionsebene abgebrochen, und die Funktion setzt die Ausführung auf der Ebene des letzten übergeordneten Elements fort. Dies kann verwendet werden, um Schleifen abzubrechen, sobald ein Knoten gefunden wurde (z.B. beim Suchen nach einem Textknoten, der eine bestimmte Zeichenfolge enthält).

Die Funktion hat zwei Parameter:

- `rootNode`
  - : Das `Node`-Objekt, dessen Nachkommen rekursiv durchlaufen werden.
- `callback` {{optional_inline}}
  - : Eine optionale Callback-[Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), die einen `Node` als einziges Argument erhält. Wenn weggelassen, gibt `eachNode` ein {{jsxref("Array")}} aller innerhalb von `rootNode` enthaltenen Knoten zurück (einschließlich des Wurzelknotens selbst).

Das folgende Beispiel zeigt eine reale Verwendung der `eachNode()`-Funktion: Suche nach Text auf einer Webseite.

Wir verwenden eine Wrapper-Funktion namens `grep`, um die Suche durchzuführen:

```js
function grep(parentNode, pattern) {
  let matches = [];
  let endScan = false;

  eachNode(parentNode, (node) => {
    if (endScan) {
      return false;
    }

    // Ignore anything which isn't a text node
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
