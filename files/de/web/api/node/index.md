---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

Die {{Glossary("DOM", "DOM")}} **`Node`**-Schnittstelle ist eine abstrakte Basisklasse, auf der viele andere DOM-API-Objekte basieren. Dadurch können diese Objekttypen ähnlich und oft austauschbar verwendet werden. Als abstrakte Klasse gibt es kein reines `Node`-Objekt. Alle Objekte, die `Node`-Funktionalität implementieren, basieren auf einer ihrer Unterklassen. Am bemerkenswertesten sind [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

Zusätzlich wird jede Art von DOM-Knoten durch eine Schnittstelle basierend auf `Node` repräsentiert. Dazu gehören [`Attr`](/de/docs/Web/API/Attr), [`CharacterData`](/de/docs/Web/API/CharacterData) (auf dem [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) und [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) basieren) und [`DocumentType`](/de/docs/Web/API/DocumentType).

In einigen Fällen mag ein bestimmtes Merkmal der Basisschnittstelle `Node` nicht auf eine ihrer Kinderschnittstellen zutreffen; in diesem Fall kann der erbende Knoten `null` zurückgeben oder eine Ausnahme auslösen, abhängig von den Umständen. Beispielsweise wird beim Versuch, Kinder zu einem Knotentyp hinzuzufügen, der keine Kinder haben kann, eine Ausnahme ausgelöst.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Neben den untenstehenden Eigenschaften erbt `Node` Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die Basis-URL des Dokuments darstellt, das den `Node` enthält.
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) {{ReadOnlyInline}}
  - : Gibt eine Live-[`NodeList`](/de/docs/Web/API/NodeList) zurück, die alle Kinder dieses Knotens enthält (einschließlich Elemente, Text und Kommentare). Da [`NodeList`](/de/docs/Web/API/NodeList) live ist, wird das Objekt automatisch aktualisiert, wenn sich die Kinder des `Node` ändern.
- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den ersten direkten Knoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Node (direkt oder indirekt) mit dem Kontextobjekt verbunden ist, z.B. dem [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOM oder dem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOM.
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den letzten direkten Knoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den nächsten Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.nodeName`](/de/docs/Web/API/Node/nodeName) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Namen des `Node` enthält. Die Struktur des Namens variiert je nach Knotentyp. Zum Beispiel enthält ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) den Namen des entsprechenden Tags, wie `'AUDIO'` für ein [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement). Ein [`Text`](/de/docs/Web/API/Text)-Knoten hat die Zeichenfolge `'#text'`, oder ein [`Document`](/de/docs/Web/API/Document)-Knoten hat die Zeichenfolge `'#document'`.
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
  - : Gibt den Wert des aktuellen Knotens zurück oder setzt ihn.
- [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) {{ReadOnlyInline}}
  - : Gibt das [`Document`](/de/docs/Web/API/Document) zurück, zu dem dieser Knoten gehört. Wenn der Knoten selbst ein Dokument ist, wird `null` zurückgegeben.
- [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der das Elternteil dieses Knotens ist. Wenn es keinen solchen Knoten gibt, wie wenn dieser Knoten die Spitze des Baumes ist oder nicht an einem Baum teilnimmt, gibt diese Eigenschaft `null` zurück.
- [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) {{ReadOnlyInline}}
  - : Gibt ein [`Element`](/de/docs/Web/API/Element) zurück, das das Elternteil dieses Knotens ist. Wenn der Knoten kein Elternteil hat oder wenn dieses Elternteil kein [`Element`](/de/docs/Web/API/Element) ist, gibt diese Eigenschaft `null` zurück.
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den vorherigen Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)
  - : Gibt den Textinhalt eines Elements und aller seiner Nachfahren zurück oder setzt ihn.

## Instanzmethoden

_Neben den untenstehenden Methoden erbt `Node` Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
  - : Fügt das angegebene `childNode`-Argument als letztes Kind zum aktuellen Knoten hinzu. Wenn das Argument einen bestehenden Knoten auf dem DOM-Baum referenziert, wird der Knoten von seiner aktuellen Position gelöst und an der neuen Position angefügt.
- [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)
  - : Klont einen `Node` und optional all seine Inhalte. Standardmäßig klont es den Inhalt des Knotens.
- [`Node.compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition)
  - : Vergleicht die Position des aktuellen Knotens mit einem anderen Knoten in einem beliebigen anderen Dokument.
- [`Node.contains()`](/de/docs/Web/API/Node/contains)
  - : Gibt einen `true`- oder `false`-Wert zurück, der angibt, ob ein Knoten ein Nachfahre des aufrufenden Knotens ist oder nicht.
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode)
  - : Gibt das Stammdokument des Kontextobjekts zurück, das optional den Shadow Root umfasst, falls verfügbar.
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element irgendwelche Kindknoten hat oder nicht.
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
  - : Fügt einen `Node` vor dem Referenzknoten als ein Kind eines angegebenen Elternknotens ein.
- [`Node.isDefaultNamespace()`](/de/docs/Web/API/Node/isDefaultNamespace)
  - : Akzeptiert eine Namespace-URI als Argument und gibt einen booleschen Wert mit dem Wert `true` zurück, wenn der Namespace der Standard-Namespace auf dem gegebenen Knoten ist, oder `false`, wenn nicht.
- [`Node.isEqualNode()`](/de/docs/Web/API/Node/isEqualNode)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob zwei Knoten vom gleichen Typ sind und alle ihre definierenden Datenpunkte übereinstimmen.
- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Gibt einen booleschen Wert zurück, der angibt, ob die beiden Knoten gleich sind (d.h. sie beziehen sich auf dasselbe Objekt).
- [`Node.lookupPrefix()`](/de/docs/Web/API/Node/lookupPrefix)
  - : Gibt eine Zeichenkette zurück, die das Präfix für eine gegebene Namespace-URI enthält, falls vorhanden, und `null`, wenn nicht. Wenn mehrere Präfixe möglich sind, ist das Ergebnis implementierungsabhängig.
- [`Node.lookupNamespaceURI()`](/de/docs/Web/API/Node/lookupNamespaceURI)
  - : Akzeptiert ein Präfix und gibt die damit auf dem gegebenen Knoten assoziierte Namespace-URI zurück, falls gefunden (und `null`, wenn nicht). Die Übergabe von `null` für das Präfix wird den Standard-Namespace zurückgeben.
- [`Node.normalize()`](/de/docs/Web/API/Node/normalize)
  - : Bereinigt alle Textknoten unter diesem Element (zusammenführen angrenzender, entfernen leerer).
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
  - : Entfernt einen Kindknoten vom aktuellen Element, der ein Kind des aktuellen Knotens sein muss.
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
  - : Ersetzt einen Kind-`Node` des aktuellen Knotens durch den zweiten in den Parametern angegebenen.

## Beispiele

### Entfernen aller verschachtelten Kinder eines Knotens

Diese Funktion entfernt jedes erste Kind eines Elements, bis keine mehr übrig sind.

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

Die Verwendung dieser Funktion erfolgt durch einen einfachen Aufruf. Hier leeren wir den Body des Dokuments:

```js
removeAllChildren(document.body);
```

Eine Alternative könnte darin bestehen, den `textContent` auf die leere Zeichenkette zu setzen: `document.body.textContent = ""`.

### Rekursive Durchlauf der Kindknoten

Die folgende Funktion ruft rekursiv eine Callback-Funktion für jeden durch einen Stammknoten enthaltenen Knoten auf (einschließlich des Stamms selbst):

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

Die Funktion ruft rekursiv für jeden Nachfahren-Knoten von `rootNode` eine Funktion auf (einschließlich des Stamms selbst).

Wenn `callback` weggelassen wird, gibt die Funktion stattdessen ein {{jsxref("Array")}} zurück, das `rootNode` und alle darin enthaltenen Knoten enthält.

Wenn `callback` bereitgestellt wird und `false` zurückgibt, wenn es aufgerufen wird, wird die aktuelle Rekursionsebene abgebrochen und die Funktion setzt die Ausführung auf der Ebene des letzten Elternteils fort. Dies kann verwendet werden, um Schleifen abzubrechen, sobald ein Knoten gefunden wurde (z.B. die Suche nach einem Textknoten, der eine bestimmte Zeichenkette enthält).

Die Funktion hat zwei Parameter:

- `rootNode`
  - : Das `Node`-Objekt, dessen Nachfahren rekursiv durchlaufen werden.
- `callback` {{optional_inline}}
  - : Eine optionale Callback-[Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), die einen `Node` als einziges Argument empfängt. Wenn zu der `eachNode` auslassen, gibt sie ein {{jsxref("Array")}} aller in `rootNode` enthaltenen Knoten zurück (einschließlich des Stamms selbst).

Das folgende demonstriert eine praktische Verwendung der `eachNode()`-Funktion: die Suche nach Text auf einer Webseite.

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
