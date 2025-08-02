---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: a48be85fa7559156c431e325e2c57a66df88a092
---

{{APIRef("DOM")}}

Die {{Glossary("DOM", "DOM")}} **`Node`**-Schnittstelle ist eine abstrakte Basisklasse, auf der viele andere DOM-API-Objekte basieren, sodass diese Objekttypen ähnlich und oft austauschbar verwendet werden können. Als abstrakte Klasse gibt es kein einfaches `Node`-Objekt. Alle Objekte, die `Node`-Funktionalitäten implementieren, basieren auf einer ihrer Unterklassen. Am bemerkenswertesten sind [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

Darüber hinaus wird jede Art von DOM-Knoten durch eine auf `Node` basierende Schnittstelle dargestellt. Dazu gehören [`Attr`](/de/docs/Web/API/Attr), [`CharacterData`](/de/docs/Web/API/CharacterData) (auf denen [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) und [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) basieren) und [`DocumentType`](/de/docs/Web/API/DocumentType).

In einigen Fällen kann eine bestimmte Funktion der Basisschnittstelle `Node` nicht auf eine ihrer Kinderschnittstellen angewendet werden; in diesem Fall kann der vererbende Knoten `null` zurückgeben oder je nach Umstand eine Ausnahme auslösen. Beispielsweise wird eine Ausnahme ausgelöst, wenn versucht wird, Kinder zu einem Knotentyp hinzuzufügen, der keine Kinder haben kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Neben den unten aufgeführten Eigenschaften erbt `Node` Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die Basis-URL des Dokuments enthält, das den `Node` enthält.
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) {{ReadOnlyInline}}
  - : Gibt eine Live-`NodeList` zurück, die alle Kinder dieses Knotens enthält (einschließlich Elementen, Text und Kommentaren). Da [`NodeList`](/de/docs/Web/API/NodeList) live ist, bedeutet dies, dass sich dieses Objekt automatisch aktualisiert, wenn sich die Kinder des `Node` ändern.
- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den ersten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Node mit dem Kontextobjekt verbunden ist (direkt oder indirekt), z.B. das [`Document`](/de/docs/Web/API/Document)-Objekt im normalen DOM oder das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow-DOMs.
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den letzten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den nächsten Knoten im Baum darstellt, oder `null`, wenn ein solcher Knoten nicht existiert.
- [`Node.nodeName`](/de/docs/Web/API/Node/nodeName) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Namen des `Node` enthält. Die Struktur des Namens unterscheidet sich je nach Knotentyp. Z.B. Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält den Namen des entsprechenden Tags, wie `'AUDIO'` für ein [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), ein [`Text`](/de/docs/Web/API/Text)-Knoten hat die Zeichenkette `'#text'` oder ein [`Document`](/de/docs/Web/API/Document)-Knoten hat die Zeichenkette `'#document'`.
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
  - : Gibt einen `Node` zurück, der das Elternteil dieses Knotens ist. Wenn es keinen solchen Knoten gibt, z.B. wenn dieser Knoten der oberste im Baum ist oder nicht an einem Baum teilnimmt, gibt diese Eigenschaft `null` zurück.
- [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) {{ReadOnlyInline}}
  - : Gibt ein [`Element`](/de/docs/Web/API/Element) zurück, das das Elternteil dieses Knotens ist. Wenn der Knoten keinen Elternteil hat oder dieser Elternteil kein [`Element`](/de/docs/Web/API/Element) ist, gibt diese Eigenschaft `null` zurück.
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den vorherigen Knoten im Baum darstellt, oder `null`, wenn ein solcher Knoten nicht existiert.
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)
  - : Gibt den textuellen Inhalt eines Elements und all seiner Nachkommen zurück oder setzt ihn.

## Instanz-Methoden

_Neben den unten aufgeführten Methoden erbt `Node` Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
  - : Fügt das angegebene `childNode`-Argument als letztes Kind zum aktuellen Knoten hinzu. Wenn das Argument auf einen bestehenden Knoten im DOM-Baum verweist, wird der Knoten von seiner aktuellen Position gelöst und an der neuen Position angefügt.
- [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)
  - : Klont einen `Node` und optional all seine Inhalte. Standardmäßig klont es den Inhalt des Knotens.
- [`Node.compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition)
  - : Vergleicht die Position des aktuellen Knotens mit einem anderen Knoten in einem beliebigen anderen Dokument.
- [`Node.contains()`](/de/docs/Web/API/Node/contains)
  - : Gibt einen `true`- oder `false`-Wert zurück, der angibt, ob ein Knoten ein Nachfahre des aufrufenden Knotens ist.
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode)
  - : Gibt das Wurzelobjekt des Kontextes zurück, das optional die Schattenwurzel enthält, wenn sie verfügbar ist.
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element untergeordnete Knoten hat.
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
  - : Fügt einen `Node` vor dem Referenzknoten als Kind eines angegebenen Elternknotens ein.
- [`Node.isDefaultNamespace()`](/de/docs/Web/API/Node/isDefaultNamespace)
  - : Akzeptiert eine Namensraum-URI als Argument und gibt einen booleschen Wert mit einem Wert von `true` zurück, wenn der Namensraum der Standardnamensraum auf dem angegebenen Knoten ist, oder `false`, wenn nicht.
- [`Node.isEqualNode()`](/de/docs/Web/API/Node/isEqualNode)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob zwei Knoten vom gleichen Typ sind und alle ihre definierenden Datenpunkte übereinstimmen.
- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Gibt einen booleschen Wert zurück, der angibt, ob die beiden Knoten gleich sind (d.h. sie dasselbe Objekt referenzieren).
- [`Node.lookupPrefix()`](/de/docs/Web/API/Node/lookupPrefix)
  - : Gibt eine Zeichenkette zurück, die das Präfix für eine gegebene Namensraum-URI enthält, falls vorhanden, und `null`, wenn nicht. Wenn mehrere Präfixe möglich sind, ist das Ergebnis implementierungsabhängig.
- [`Node.lookupNamespaceURI()`](/de/docs/Web/API/Node/lookupNamespaceURI)
  - : Akzeptiert ein Präfix und gibt die Namensraum-URI zurück, die mit ihm auf dem angegebenen Knoten verknüpft ist, falls gefunden (und `null`, wenn nicht). Wenn `null` als Präfix angegeben wird, wird der Standardnamensraum zurückgegeben.
- [`Node.normalize()`](/de/docs/Web/API/Node/normalize)
  - : Bereinigt alle Textknoten unter diesem Element (zusammenführen angrenzender, entfernen leerer).
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
  - : Entfernt einen Kindknoten aus dem aktuellen Element, das ein Kind des aktuellen Knotens sein muss.
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
  - : Ersetzt einen Kind-`Node` des aktuellen Knotens mit dem zweiten gegebenen im Parameter.

## Ereignisse

- [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
  - : Wird ausgelöst, wenn der Benutzer eine neue Auswahl in diesem Knoten beginnt.

## Beispiele

### Alle verschachtelten Kinder eines Knotens entfernen

Diese Funktion entfernt jedes erste Kind eines Elements, bis keins mehr übrig ist.

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

Eine Alternative könnte sein, den `textContent` auf die leere Zeichenkette zu setzen: `document.body.textContent = ""`.

### Durch Kindknoten rekursiv iterieren

Die folgende Funktion ruft rekursiv eine Rückruffunktion für jeden Knoten auf, der von einem Wurzelknoten enthalten ist (einschließlich des Wurzelknotens selbst):

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

Wenn `callback` weggelassen wird, gibt die Funktion stattdessen ein {{jsxref("Array")}} zurück, das `rootNode` und alle darin enthaltenen Knoten umfasst.

Wenn `callback` bereitgestellt wird und `false` zurückgibt, wenn es aufgerufen wird, wird die aktuelle Rekursionsebene abgebrochen, und die Funktion setzt die Ausführung auf der Ebene des letzten Elternteils fort. Dies kann verwendet werden, um Schleifen abzubrechen, sobald ein Knoten gefunden wurde (z.B. das Suchen nach einem Textknoten, der eine bestimmte Zeichenkette enthält).

Die Funktion hat zwei Parameter:

- `rootNode`
  - : Das `Node`-Objekt, dessen Nachfahren rekursiv durchlaufen werden.
- `callback` {{optional_inline}}
  - : Eine optionale Rückruf-[Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), die einen `Node` als einziges Argument erhält. Wenn weggelassen, gibt `eachNode` ein {{jsxref("Array")}} jeden Knoten innerhalb von `rootNode` (einschließlich des Wurzelknotens selbst) zurück.

Das Folgende zeigt eine praktische Anwendung der Funktion `eachNode()`: die Suche nach Text auf einer Webseite.

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
