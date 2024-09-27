---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: 90d61cc4fa9e53f74183be66f58d33aa8d7c629a
---

{{APIRef("DOM")}}

Das [DOM](/de/docs/Glossary/DOM) **`Node`** Interface ist eine abstrakte Basisklasse, auf der viele andere DOM-API-Objekte basieren. Dadurch können diese Objekttypen ähnlich und oft austauschbar verwendet werden. Als abstrakte Klasse gibt es kein reines `Node` Objekt. Alle Objekte, die die `Node`-Funktionalität implementieren, basieren auf einer ihrer Unterklassen. Die bedeutendsten sind [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

Zudem wird jede Art von DOM-Knoten durch ein auf `Node` basierendes Interface dargestellt. Diese umfassen [`Attr`](/de/docs/Web/API/Attr), [`CharacterData`](/de/docs/Web/API/CharacterData) (worauf [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) und [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) basieren) sowie [`DocumentType`](/de/docs/Web/API/DocumentType).

In einigen Fällen gilt ein bestimmtes Merkmal des Basisknotens `Node` möglicherweise nicht für eines seiner Kind-Interfaces; in diesem Fall kann der vererbende Knoten `null` zurückgeben oder eine Ausnahme auslösen, abhängig von den Umständen. Zum Beispiel wird beim Versuch, Kindern zu einem Knotentyp hinzuzufügen, der keine Kinder haben kann, eine Ausnahme ausgelöst.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt `Node` Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die Basis-URL des Dokuments repräsentiert, das den `Node` enthält.
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) {{ReadOnlyInline}}
  - : Gibt eine dynamische [`NodeList`](/de/docs/Web/API/NodeList) zurück, die alle Kinder dieses Knotens (einschließlich Elemente, Text und Kommentare) enthält. Da [`NodeList`](/de/docs/Web/API/NodeList) dynamisch ist, wird das Objekt automatisch aktualisiert, wenn sich die Kinder des `Node` ändern.
- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den ersten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Node (direkt oder indirekt) mit dem Kontextobjekt verbunden ist, z. B. das [`Document`](/de/docs/Web/API/Document) Objekt im Fall des normalen DOM oder das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOM.
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den letzten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den nächsten Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.nodeName`](/de/docs/Web/API/Node/nodeName) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Namen des `Node` enthält. Die Struktur des Namens variiert je nach Knotentyp. Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält z. B. den Namen des entsprechenden Tags, wie `'AUDIO'` für ein [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement); ein [`Text`](/de/docs/Web/API/Text) Knoten hat den `'#text'`-String oder ein [`Document`](/de/docs/Web/API/Document) Knoten hat den `'#document'`-String.
- [`Node.nodeType`](/de/docs/Web/API/Node/nodeType) {{ReadOnlyInline}}

  - : Gibt einen `unsigned short` zurück, der den Typ des Knotens darstellt. Mögliche Werte sind:

    | Name                          | Wert |
    | ----------------------------- | ---- |
    | `ELEMENT_NODE`                | `1`  |
    | `ATTRIBUTE_NODE`              | `2`  |
    | `TEXT_NODE`                   | `3`  |
    | `CDATA_SECTION_NODE`          | `4`  |
    | `PROCESSING_INSTRUCTION_NODE` | `7`  |
    | `COMMENT_NODE`                | `8`  |
    | `DOCUMENT_NODE`               | `9`  |
    | `DOCUMENT_TYPE_NODE`          | `10` |
    | `DOCUMENT_FRAGMENT_NODE`      | `11` |

- [`Node.nodeValue`](/de/docs/Web/API/Node/nodeValue)
  - : Gibt den Wert des aktuellen Knotens zurück oder setzt diesen.
- [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) {{ReadOnlyInline}}
  - : Gibt das [`Document`](/de/docs/Web/API/Document) zurück, zu dem dieser Knoten gehört. Wenn der Knoten selbst ein Dokument ist, wird `null` zurückgegeben.
- [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der das übergeordnete Element dieses Knotens ist. Wenn es keinen solchen Knoten gibt, z. B. wenn dieser Knoten der oberste im Baum ist oder nicht an einem Baum teilnimmt, gibt diese Eigenschaft `null` zurück.
- [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) {{ReadOnlyInline}}
  - : Gibt ein [`Element`](/de/docs/Web/API/Element) zurück, das das übergeordnete Element dieses Knotens ist. Wenn der Knoten kein Elternteil hat oder dieser kein [`Element`](/de/docs/Web/API/Element) ist, gibt diese Eigenschaft `null` zurück.
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den vorherigen Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)
  - : Gibt den textuellen Inhalt eines Elements und all seiner Nachkommen zurück oder setzt diesen.

## Instanz-Methoden

_Zusätzlich zu den unten aufgeführten Methoden erbt `Node` Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
  - : Fügt das angegebene `childNode` Argument als letztes Kind zum aktuellen Knoten hinzu. Wenn das Argument auf einen vorhandenen Knoten im DOM-Baum verweist, wird der Knoten von seiner aktuellen Position getrennt und an der neuen Position angefügt.
- [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)
  - : Klont einen `Node` und optional alle seine Inhalte. Standardmäßig wird der Inhalt des Knotens geklont.
- [`Node.compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition)
  - : Vergleicht die Position des aktuellen Knotens mit einem anderen Knoten in einem beliebigen anderen Dokument.
- [`Node.contains()`](/de/docs/Web/API/Node/contains)
  - : Gibt einen `true` oder `false` Wert zurück, der angibt, ob ein Knoten ein Nachkomme des aufrufenden Knotens ist oder nicht.
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode)
  - : Gibt das Wurzelobjekt des Kontextes zurück, das optional auch die Schattenwurzel umfasst, wenn verfügbar.
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element über Kindknoten verfügt oder nicht.
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
  - : Fügt einen `Node` vor dem Referenzknoten als Kind eines angegebenen übergeordneten Knotens ein.
- [`Node.isDefaultNamespace()`](/de/docs/Web/API/Node/isDefaultNamespace)
  - : Akzeptiert einen Namespace-URI als Argument und gibt einen booleschen Wert mit `true` zurück, wenn der Namespace der Standard-Namespace für den angegebenen Knoten ist, oder `false`, wenn nicht.
- [`Node.isEqualNode()`](/de/docs/Web/API/Node/isEqualNode)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob zwei Knoten denselben Typ haben und all ihre definierenden Datenpunkte übereinstimmen.
- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Gibt einen booleschen Wert zurück, der angibt, ob die beiden Knoten dieselben sind (d. h. ob sie auf dasselbe Objekt verweisen).
- [`Node.lookupPrefix()`](/de/docs/Web/API/Node/lookupPrefix)
  - : Gibt einen String zurück, der das Präfix für einen gegebenen Namespace-URI, sofern vorhanden, enthält, und `null`, wenn nicht. Wenn mehrere Präfixe möglich sind, ist das Ergebnis implementationsabhängig.
- [`Node.lookupNamespaceURI()`](/de/docs/Web/API/Node/lookupNamespaceURI)
  - : Akzeptiert ein Präfix und gibt den Namespace-URI zurück, der mit ihm auf dem gegebenen Knoten assoziiert ist, falls gefunden (und `null`, wenn nicht). Die Angabe von `null` für das Präfix gibt den Standard-Namespace zurück.
- [`Node.normalize()`](/de/docs/Web/API/Node/normalize)
  - : Bereinigt alle Textknoten unter diesem Element (kombiniert angrenzende, entfernt leere).
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
  - : Entfernt einen Kindknoten vom aktuellen Element, der ein Kind des aktuellen Knotens sein muss.
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
  - : Ersetzt ein Kind `Node` des aktuellen Knotens durch das zweite, im Parameter angegebene.

## Beispiele

### Entfernen aller Kinder, die in einem Knoten verschachtelt sind

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

Eine Alternative könnte darin bestehen, `textContent` auf den leeren String zu setzen: `document.body.textContent = ""`.

### Durch Rekursion durch Kindknoten

Die folgende Funktion ruft rekursiv eine Callback-Funktion für jeden Knoten auf, der von einem Wurzelknoten (einschließlich des Wurzelelements) enthalten wird:

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

Die Funktion ruft rekursiv eine Funktion für jeden Nachkommenknoten von `rootNode` auf (einschließlich des Wurzelelements selbst).

Wenn `callback` ausgelassen wird, gibt die Funktion stattdessen ein {{jsxref("Array")}} zurück, das `rootNode` und alle darin enthaltenen Knoten umfasst.

Wenn `callback` bereitgestellt wird und `false` zurückgibt, wird die aktuelle Rekursionsebene abgebrochen und die Funktion setzt die Ausführung auf der letzten Elternebene fort. Dies kann verwendet werden, um Schleifen abzubrechen, sobald ein Knoten gefunden wurde (z. B. beim Suchen eines Textknotens, der eine bestimmte Zeichenfolge enthält).

Die Funktion hat zwei Parameter:

- `rootNode`
  - : Das `Node` Objekt, dessen Nachkommen rekursiv durchsucht werden.
- `callback` {{optional_inline}}
  - : Eine optionale Callback-[Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), die einen `Node` als einziges Argument erhält. Wenn ausgelassen, gibt `eachNode` ein {{jsxref("Array")}} mit allen enthaltenen Knoten in `rootNode` zurück (einschließlich des Wurzels selbst).

Das Folgende zeigt eine praktische Anwendung der `eachNode()`-Funktion: die Suche nach Text auf einer Webseite.

Wir verwenden eine Wrapper-Funktion namens `grep` zum Durchsuchen:

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
