---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{APIRef("DOM")}}

Das {{Glossary("DOM", "DOM")}} **`Node`**-Interface ist eine abstrakte Basisklasse, auf der viele andere DOM-API-Objekte basieren, sodass diese Objekttypen ähnlich und oft austauschbar verwendet werden können. Als abstrakte Klasse gibt es kein einfaches `Node`-Objekt. Alle Objekte, die `Node`-Funktionalität implementieren, basieren auf einer seiner Unterklassen. Am bemerkenswertesten sind [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

Darüber hinaus wird jede Art von DOM-Knoten durch ein auf `Node` basierendes Interface repräsentiert. Dazu gehören [`Attr`](/de/docs/Web/API/Attr), [`CharacterData`](/de/docs/Web/API/CharacterData) (worauf [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) und [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) alle basieren) und [`DocumentType`](/de/docs/Web/API/DocumentType).

In einigen Fällen kann ein bestimmtes Merkmal des Basisschnittstellen `Node` nicht auf eine ihrer Kind-Schnittstellen zutreffen; in diesem Fall kann der vererbende Knoten `null` zurückgeben oder eine Ausnahme auslösen, abhängig von den Umständen. Beispielsweise führt der Versuch, einem Knotentyp, der keine Kinder haben kann, Kinder hinzuzufügen, zu einer Ausnahme.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt `Node` Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Basis-URL des Dokuments enthält, das den `Node` enthält.
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) {{ReadOnlyInline}}
  - : Gibt eine Live-`NodeList` zurück, die alle Kinder dieses Knotens (einschließlich Elemente, Text und Kommentare) enthält. Da [`NodeList`](/de/docs/Web/API/NodeList) live ist, wird das [`NodeList`](/de/docs/Web/API/NodeList)-Objekt automatisch aktualisiert, wenn sich die Kinder des `Node` ändern.
- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der das erste direkte Kind des Knotens darstellt oder `null`, wenn der Knoten kein Kind hat.
- [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob der `Node` mit dem Kontextobjekt verbunden ist (direkt oder indirekt), z.B. das [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOM oder das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOM.
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der das letzte direkte Kind des Knotens darstellt oder `null`, wenn der Knoten kein Kind hat.
- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den nächsten Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.nodeName`](/de/docs/Web/API/Node/nodeName) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Namen des `Node` zurück. Die Struktur des Namens variiert je nach Knotentyp. Zum Beispiel enthält ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) den Namen des entsprechenden Tags, wie `'AUDIO'` für ein [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), ein [`Text`](/de/docs/Web/API/Text)-Knoten hat den String `'#text'` oder ein [`Document`](/de/docs/Web/API/Document)-Knoten hat den String `'#document'`.
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
  - : Gibt den Wert des aktuellen Knotens zurück / setzt diesen Wert.
- [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) {{ReadOnlyInline}}
  - : Gibt das [`Document`](/de/docs/Web/API/Document) zurück, zu dem dieser Knoten gehört. Wenn der Knoten selbst ein Dokument ist, wird `null` zurückgegeben.
- [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der das Elternteil dieses Knotens ist. Wenn es keinen solchen Knoten gibt, z.B. wenn dieser Knoten der oberste der Baumstruktur ist oder nicht an einem Baum teilnimmt, gibt diese Eigenschaft `null` zurück.
- [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) {{ReadOnlyInline}}
  - : Gibt ein [`Element`](/de/docs/Web/API/Element) zurück, das das Elternteil dieses Knotens ist. Wenn der Knoten kein Elternteil hat oder das Elternteil kein [`Element`](/de/docs/Web/API/Element) ist, gibt diese Eigenschaft `null` zurück.
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den vorherigen Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)
  - : Gibt den Textinhalt eines Elements und aller seiner Nachfahren zurück / setzt diesen.

## Instanzmethoden

_Zusätzlich zu den unten aufgeführten Methoden erbt `Node` Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
  - : Fügt das angegebene `childNode`-Argument als letztes Kind zum aktuellen Knoten hinzu. Wenn das Argument auf einen bestehenden Knoten im DOM-Baum verweist, wird der Knoten von seiner aktuellen Position getrennt und an der neuen Position angefügt.
- [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)
  - : Klont einen `Node` und optional alle seine Inhalte. Standardmäßig klont es den Inhalt des Knotens.
- [`Node.compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition)
  - : Vergleicht die Position des aktuellen Knotens mit einem anderen Knoten in einem beliebigen anderen Dokument.
- [`Node.contains()`](/de/docs/Web/API/Node/contains)
  - : Gibt einen `true`- oder `false`-Wert zurück, der angibt, ob ein Knoten ein Nachkomme des aufrufenden Knotens ist oder nicht.
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode)
  - : Gibt das Wurzelobjekt des Kontextes zurück, das optional das Schatten-Root beinhaltet, falls verfügbar.
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element Kinderknoten hat oder nicht.
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
  - : Fügt einen `Node` vor dem Referenzknoten als Kind eines bestimmten Elternknotens ein.
- [`Node.isDefaultNamespace()`](/de/docs/Web/API/Node/isDefaultNamespace)
  - : Akzeptiert eine Namespace-URI als Argument und gibt einen booleschen Wert mit `true` zurück, wenn der Namespace der Standard-Namespace auf dem gegebenen Knoten ist, andernfalls `false`.
- [`Node.isEqualNode()`](/de/docs/Web/API/Node/isEqualNode)
  - : Gibt einen booleschen Wert zurück, der angibt, ob zwei Knoten vom selben Typ sind und ob all ihre wesentlichen Datenpunkte übereinstimmen.
- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Gibt einen booleschen Wert zurück, der angibt, ob die beiden Knoten identisch sind (d.h. sie verweisen auf dasselbe Objekt).
- [`Node.lookupPrefix()`](/de/docs/Web/API/Node/lookupPrefix)
  - : Gibt einen String zurück, der das Präfix für eine gegebene Namespace-URI enthält, falls vorhanden, und `null`, falls nicht. Wenn mehrere Präfixe möglich sind, hängt das Ergebnis von der Implementierung ab.
- [`Node.lookupNamespaceURI()`](/de/docs/Web/API/Node/lookupNamespaceURI)
  - : Akzeptiert ein Präfix und gibt die Namespace-URI zurück, die damit auf dem gegebenen Knoten verbunden ist, falls gefunden (und `null`, falls nicht). Die Angabe von `null` für das Präfix gibt den Standard-Namespace zurück.
- [`Node.normalize()`](/de/docs/Web/API/Node/normalize)
  - : Bereinigt alle Textknoten unter diesem Element (zusammenführen angrenzender, Entfernen leerer).
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
  - : Entfernt einen Kindknoten vom aktuellen Element, das ein Kind des aktuellen Knotens sein muss.
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
  - : Ersetzt einen Kind-`Node` des aktuellen durch den zweiten, der als Parameter übergeben wird.

## Events

- [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
  - : Wird ausgelöst, wenn der Benutzer eine neue Auswahl in diesem Knoten beginnt.

## Beispiele

### Entfernen aller in einem Knoten verschachtelten Kinder

Diese Funktion entfernt jedes erste Kind eines Elements, bis keine mehr vorhanden sind.

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

### Durch alle Kindknoten rekursiv durchgehen

Die folgende Funktion ruft rekursiv eine Callback-Funktion für jeden im Wurzelknoten enthaltenen Knoten (einschließlich des Wurzelknotens selbst) auf:

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

Die Funktion ruft rekursiv eine Funktion für jeden Nachfahrenknoten von `rootNode` auf (einschließlich des Wurzelknotens selbst).

Wenn `callback` weggelassen wird, gibt die Funktion stattdessen ein {{jsxref("Array")}} zurück, das `rootNode` und alle darin enthaltenen Knoten enthält.

Wenn `callback` bereitgestellt wird und bei Aufruf `false` zurückgibt, wird das aktuelle Rekursionslevel abgebrochen, und die Funktion setzt die Ausführung auf der vorherigen Ebene des Elternteils fort. Dies kann verwendet werden, um Schleifen abzubrechen, sobald ein Knoten gefunden wurde (z. B. bei der Suche nach einem Textknoten, der einen bestimmten String enthält).

Die Funktion hat zwei Parameter:

- `rootNode`
  - : Das `Node`-Objekt, dessen Nachfahren rekursiv durchlaufen werden.
- `callback` {{optional_inline}}
  - : Eine optionale Callback-[Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), die einen `Node` als einziges Argument erhält. Wenn weggelassen, gibt `eachNode` ein {{jsxref("Array")}} von jedem innerhalb von `rootNode` (einschließlich des Wurzelknotens selbst) enthaltenen Knoten zurück.

Das folgende Beispiel zeigt eine praxisbezogene Nutzung der `eachNode()`-Funktion: das Durchsuchen eines Textes auf einer Webseite.

Wir verwenden eine Wrapper-Funktion namens `grep` zum Suchen:

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
