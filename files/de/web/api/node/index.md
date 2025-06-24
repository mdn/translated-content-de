---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die {{Glossary("DOM", "DOM")}} **`Node`**-Schnittstelle ist eine abstrakte Basisklasse, auf der viele andere DOM-API-Objekte basieren, wodurch diese Objekttypen ähnlich und oft austauschbar verwendet werden können. Als abstrakte Klasse existiert kein einfaches `Node`-Objekt. Alle Objekte, die `Node`-Funktionen implementieren, basieren auf einer ihrer Unterklassen. Am bemerkenswertesten sind [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

Darüber hinaus wird jede Art von DOM-Knoten durch eine auf `Node` basierende Schnittstelle dargestellt. Dazu gehören [`Attr`](/de/docs/Web/API/Attr), [`CharacterData`](/de/docs/Web/API/CharacterData) (worauf [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) und [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) basieren) und [`DocumentType`](/de/docs/Web/API/DocumentType).

In einigen Fällen kann ein bestimmtes Merkmal der Basis-`Node`-Schnittstelle nicht auf eine ihrer Kinderschnittstellen angewendet werden; in diesem Fall kann der ererbte Knoten `null` zurückgeben oder eine Ausnahme werfen, je nach den Umständen. Zum Beispiel wird der Versuch, einem Knoten, der keine Kinder haben kann, Kinder hinzuzufügen, eine Ausnahme werfen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Neben den unten aufgeführten Eigenschaften erbt `Node` Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die Basis-URL des Dokuments darstellt, welches den `Node` enthält.
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) {{ReadOnlyInline}}
  - : Gibt eine Live-`NodeList` zurück, die alle Kinder dieses Knotens enthält (einschließlich Elementen, Texten und Kommentaren). Da `NodeList` live ist, wird das `NodeList`-Objekt automatisch aktualisiert, wenn sich die Kinder des `Node` ändern.
- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den ersten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob der Node direkt oder indirekt mit dem Kontextobjekt verbunden ist, z. B. dem [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOMs oder dem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Schatten-DOMs.
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den letzten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den nächsten Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.nodeName`](/de/docs/Web/API/Node/nodeName) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Namen des `Node` enthält. Die Struktur des Namens variiert je nach Knotentyp. Z. B. ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält den Namen des entsprechenden Tags, wie `'AUDIO'` für ein [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), ein [`Text`](/de/docs/Web/API/Text)-Knoten hat die Zeichenkette `'#text'`, oder ein [`Document`](/de/docs/Web/API/Document)-Knoten hat die Zeichenkette `'#document'`.
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
  - : Gibt den Wert des aktuellen Knotens zurück / Setzt den Wert des aktuellen Knotens.
- [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) {{ReadOnlyInline}}
  - : Gibt das [`Document`](/de/docs/Web/API/Document) zurück, zu dem dieser Knoten gehört. Wenn der Knoten selbst ein Dokument ist, wird `null` zurückgegeben.
- [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der der Elternknoten dieses Knotens ist. Wenn es keinen solchen Knoten gibt, wie wenn dieser Knoten die Spitze des Baums ist oder nicht an einem Baum teilnimmt, gibt diese Eigenschaft `null` zurück.
- [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) {{ReadOnlyInline}}
  - : Gibt ein [`Element`](/de/docs/Web/API/Element) zurück, das der Elternknoten dieses Knotens ist. Wenn der Knoten keinen Elternknoten hat, oder wenn dieser Elternknoten kein [`Element`](/de/docs/Web/API/Element) ist, gibt diese Eigenschaft `null` zurück.
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den vorherigen Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)
  - : Gibt den Textinhalt eines Elements und all seiner Nachkommen zurück / setzt ihn.

## Instanz-Methoden

_Neben den unten aufgeführten Methoden erbt `Node` Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
  - : Fügt das angegebene `childNode`-Argument als letztes Kind des aktuellen Knotens hinzu. Wenn das Argument auf einen vorhandenen Knoten im DOM-Baum verweist, wird der Knoten von seiner aktuellen Position getrennt und an der neuen Position angehängt.
- [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)
  - : Klont einen `Node` und optional all seine Inhalte. Standardmäßig klont es den Inhalt des Knotens.
- [`Node.compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition)
  - : Vergleicht die Position des aktuellen Knotens mit einem anderen Knoten in einem beliebigen anderen Dokument.
- [`Node.contains()`](/de/docs/Web/API/Node/contains)
  - : Gibt einen `true`- oder `false`-Wert zurück, der angibt, ob ein Knoten ein Nachfahre des aufrufenden Knotens ist.
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode)
  - : Gibt das Wurzelobjekt des Kontextobjekts zurück, das optional die Schattenwurzel einschließt, falls verfügbar.
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob das Element Kindknoten hat oder nicht.
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
  - : Fügt einen `Node` vor dem Referenzknoten als Kind eines angegebenen Elternknotens ein.
- [`Node.isDefaultNamespace()`](/de/docs/Web/API/Node/isDefaultNamespace)
  - : Akzeptiert einen Namespace-URI als Argument und gibt einen Boolean-Wert mit dem Wert `true` zurück, wenn der Namespace der Standard-Namespace für den gegebenen Knoten ist, oder `false` wenn nicht.
- [`Node.isEqualNode()`](/de/docs/Web/API/Node/isEqualNode)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob zwei Knoten vom gleichen Typ sind und alle ihre bestimmenden Datenpunkte übereinstimmen.
- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob die beiden Knoten gleich sind (d.h. sie verweisen auf dasselbe Objekt).
- [`Node.lookupPrefix()`](/de/docs/Web/API/Node/lookupPrefix)
  - : Gibt eine Zeichenkette mit dem Präfix für einen gegebenen Namespace-URI zurück, falls vorhanden, und `null` wenn nicht. Wenn mehrere Präfixe möglich sind, ist das Ergebnis implementationsabhängig.
- [`Node.lookupNamespaceURI()`](/de/docs/Web/API/Node/lookupNamespaceURI)
  - : Akzeptiert ein Präfix und gibt den damit assoziierten Namespace-URI auf dem gegebenen Knoten zurück, falls gefunden (und `null` wenn nicht). Die Angabe von `null` für das Präfix gibt den Standard-Namespace zurück.
- [`Node.normalize()`](/de/docs/Web/API/Node/normalize)
  - : Bereinigt alle Textknoten unter diesem Element (zusammenführen von angrenzenden, Entfernen von leeren).
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
  - : Entfernt einen Kindknoten aus dem aktuellen Element, der ein Kind des aktuellen Knotens sein muss.
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
  - : Ersetzt einen Kind-`Node` des aktuellen durch den zweiten, der als Parameter übergeben wird.

## Ereignisse

- [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
  - : Wird ausgelöst, wenn der Benutzer eine neue Auswahl in diesem Knoten startet.

## Beispiele

### Alle innerhalb eines Knotens verschachtelten Kinder entfernen

Diese Funktion entfernt jedes erste Kind eines Elements, bis keine mehr übrig sind.

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

Diese Funktion kann in einem einzigen Aufruf verwendet werden. Hier leeren wir den Körper des Dokuments:

```js
removeAllChildren(document.body);
```

Eine Alternative könnte sein, `textContent` auf den leeren String zu setzen: `document.body.textContent = ""`.

### Durch Kindknoten rekursiv durchlaufen

Die folgende Funktion ruft rekursiv eine Callback-Funktion für jeden vom Wurzelknoten enthaltenen Knoten (einschließlich des Wurzelknotens selbst) auf:

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

Die Funktion ruft rekursiv eine Funktion für jeden Nachfahrenknoten von `rootNode` (einschließlich des Wurzelknotens selbst) auf.

Wenn `callback` weggelassen wird, gibt die Funktion stattdessen ein {{jsxref("Array")}} zurück, welches `rootNode` und alle darin enthaltenen Knoten enthält.

Wenn `callback` bereitgestellt wird und es `false` zurückgibt, wenn es aufgerufen wird, wird die aktuelle Rekursionsebene abgebrochen und die Funktion setzt die Ausführung auf der Ebene des letzten Eltern fort. Dies kann verwendet werden, um Schleifen abzubrechen, sobald ein Knoten gefunden wurde (wie zum Beispiel die Suche nach einem Textknoten, der einen bestimmten String enthält).

Die Funktion hat zwei Parameter:

- `rootNode`
  - : Das `Node`-Objekt, dessen Nachfahren durchlaufen werden.
- `callback` {{optional_inline}}
  - : Eine optionale Callback-[Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), die einen `Node` als einziges Argument erhält. Wenn es weggelassen wird, gibt `eachNode` ein {{jsxref("Array")}} jedes innerhalb von `rootNode` enthaltenen Knotens (einschließlich des Wurzelknotens selbst) zurück.

Das folgende Beispiel zeigt eine praktische Anwendung der `eachNode()`-Funktion: die Suche nach Text auf einer Webseite.

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
