---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: 5cfd038b0d37452042461cfe169c0c9ab87be94d
---

{{APIRef("DOM")}}

Das {{Glossary("DOM", "DOM")}} **`Node`**-Interface ist eine abstrakte Basisklasse,
auf der viele andere DOM-API-Objekte basieren. Dadurch können diese Objekttypen ähnlich und oft austauschbar verwendet werden. Da es sich um eine abstrakte Klasse handelt, existiert kein einfaches `Node`-Objekt. Alle Objekte, die `Node`-Funktionalität implementieren, basieren auf einer ihrer Unterklassen. Am bemerkenswertesten sind [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

Darüber hinaus wird jede Art von DOM-Knoten durch eine Schnittstelle dargestellt, die auf `Node` basiert. Dazu gehören [`Attr`](/de/docs/Web/API/Attr), [`CharacterData`](/de/docs/Web/API/CharacterData)
(auf denen [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) und
[`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) basieren) und [`DocumentType`](/de/docs/Web/API/DocumentType).

In einigen Fällen kann eine bestimmte Funktion des Basisknotens `Node` nicht auf eine seiner Kinderschnittstellen angewendet werden; in diesem Fall kann der ererbte Knoten `null` zurückgeben oder eine Ausnahme auslösen, abhängig von den Umständen. Zum Beispiel wird der Versuch, Kindern zu einem Knotentyp hinzuzufügen, der keine Kinder haben kann, eine Ausnahme auslösen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den unten stehenden Eigenschaften erbt `Node` Eigenschaften von seinem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die Basis-URL des Dokuments darstellt, das den `Node` enthält.
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) {{ReadOnlyInline}}
  - : Gibt eine Live-`NodeList` zurück, die alle Kinder dieses Knotens enthält
    (einschließlich Elemente, Text und Kommentare). Da [`NodeList`](/de/docs/Web/API/NodeList) live ist, wird das [`NodeList`](/de/docs/Web/API/NodeList)-Objekt automatisch aktualisiert, wenn sich die Kinder des `Node` ändern.
- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den ersten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Node (direkt oder indirekt) mit dem Kontextobjekt verbunden ist, z.B. dem [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOM oder der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow-DOM.
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den letzten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten kein Kind hat.
- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den nächsten Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.nodeName`](/de/docs/Web/API/Node/nodeName) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Namen des `Node` enthält. Die Struktur des Namens variiert je nach Knotentyp. Zum Beispiel enthält ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) den Namen des entsprechenden Tags, wie `'AUDIO'` für ein [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), ein [`Text`](/de/docs/Web/API/Text)-Knoten hat die Zeichenfolge `'#text'`, oder ein [`Document`](/de/docs/Web/API/Document)-Knoten hat die Zeichenfolge `'#document'`.
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
  - : Gibt einen `Node` zurück, der das übergeordnete Element dieses Knotens ist. Wenn es keinen solchen Knoten gibt - zum Beispiel, wenn dieser Knoten der oberste im Baum ist oder wenn er nicht an einem Baum teilnimmt - gibt diese Eigenschaft `null` zurück.
- [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) {{ReadOnlyInline}}
  - : Gibt ein [`Element`](/de/docs/Web/API/Element) zurück, das das übergeordnete Element dieses Knotens ist. Wenn der Knoten kein übergeordnetes Element hat oder wenn dieses kein [`Element`](/de/docs/Web/API/Element) ist, gibt diese Eigenschaft `null` zurück.
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den vorherigen Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)
  - : Gibt den Textinhalt eines Elements und aller seiner Nachkommen zurück oder setzt ihn.

## Instanz-Methoden

_Zusätzlich zu den unten stehenden Methoden erbt `Node` Methoden von seinem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
  - : Fügt das angegebene `childNode`-Argument als letztes Kind zum aktuellen Knoten hinzu. Wenn das Argument auf einen bestehenden Knoten im DOM-Baum verweist, wird der Knoten von seiner aktuellen Position gelöst und an der neuen Position angehängt.
- [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)
  - : Klont einen `Node` und optional alle seine Inhalte. Standardmäßig werden die Inhalte des Knotens geklont.
- [`Node.compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition)
  - : Vergleicht die Position des aktuellen Knotens mit einem anderen Knoten in einem beliebigen Dokument.
- [`Node.contains()`](/de/docs/Web/API/Node/contains)
  - : Gibt `true` oder `false` zurück, je nachdem, ob ein Knoten ein Nachkomme des aufrufenden Knotens ist.
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode)
  - : Gibt das Wurzelobjekt des Kontextes zurück, das optional die Schattenwurzel enthält, falls verfügbar.
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element Kindknoten hat oder nicht.
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
  - : Fügt einen `Node` vor dem Referenzknoten als Kind eines angegebenen übergeordneten Knotens ein.
- [`Node.isDefaultNamespace()`](/de/docs/Web/API/Node/isDefaultNamespace)
  - : Akzeptiert einen Namespace-URI als Argument und gibt einen booleschen Wert zurück, der angibt, ob der Namespace der Standard-Namespace für den angegebenen Knoten ist (`true`) oder nicht (`false`).
- [`Node.isEqualNode()`](/de/docs/Web/API/Node/isEqualNode)
  - : Gibt einen booleschen Wert zurück, der angibt, ob zwei Knoten vom gleichen Typ sind und alle ihre definierenden Datenpunkte übereinstimmen.
- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Gibt einen booleschen Wert zurück, der angibt, ob zwei Knoten identisch sind (d.h. sie verweisen auf dasselbe Objekt).
- [`Node.lookupPrefix()`](/de/docs/Web/API/Node/lookupPrefix)
  - : Gibt eine Zeichenfolge zurück, die das Präfix für einen gegebenen Namespace-URI enthält, falls vorhanden, und `null`, falls nicht. Wenn mehrere Präfixe möglich sind, ist das Ergebnis implementationsabhängig.
- [`Node.lookupNamespaceURI()`](/de/docs/Web/API/Node/lookupNamespaceURI)
  - : Akzeptiert ein Präfix und gibt den Namespace-URI zurück, der ihm auf dem angegebenen Knoten zugeordnet ist, wenn er gefunden wird (und `null` wenn nicht). Bei Angabe von `null` für das Präfix wird der Standard-Namespace zurückgegeben.
- [`Node.normalize()`](/de/docs/Web/API/Node/normalize)
  - : Bereinigt alle Textknoten unter diesem Element (zusammenführen von benachbarten, leeren entfernen).
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
  - : Entfernt einen untergeordneten Knoten vom aktuellen Element, der ein Kind des aktuellen Knotens sein muss.
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
  - : Ersetzt einen untergeordneten `Node` des aktuellen durch den zweiten als Parameter gegebenen Knoten.

## Ereignisse

- [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
  - : Wird ausgelöst, wenn der Benutzer eine neue Auswahl in diesem Knoten startet.

## Beispiele

### Entfernen aller verschachtelten Kinder innerhalb eines Knotens

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

Eine Alternative könnte sein, das `textContent` auf den leeren String zu setzen: `document.body.textContent = ""`.

### Rekursives Durchlaufen von Kindknoten

Die folgende Funktion ruft rekursiv eine Callback-Funktion für jeden Knoten auf, der von
einem Wurzelknoten (einschließlich des Wurzelknotens selbst) enthalten ist:

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

Die Funktion ruft rekursiv eine Funktion für jeden Nachfahrenknoten von
`rootNode` (einschließlich des Wurzelknotens selbst) auf.

Wenn `callback` weggelassen wird, gibt die Funktion stattdessen ein
{{jsxref("Array")}} zurück, das `rootNode` und alle
darin enthaltenen Knoten enthält.

Wenn `callback` übergeben wird und `false` zurückgibt, wenn es aufgerufen wird,
wird die aktuelle Rekursionsebene abgebrochen, und die Funktion
setzt die Ausführung auf der letzten Elternebene fort. Dies kann verwendet werden, um Schleifen abzubrechen, sobald ein
Knoten gefunden wurde (wie die Suche nach einem Textknoten, der eine bestimmte Zeichenfolge enthält).

Die Funktion hat zwei Parameter:

- `rootNode`
  - : Das `Node`-Objekt, dessen Nachkommen rekursiv durchlaufen werden.
- `callback` {{optional_inline}}
  - : Eine optionale Callback-[Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), die
    einen `Node` als einziges Argument erhält. Wenn weggelassen, gibt `eachNode`
    ein {{jsxref("Array")}} von jedem Knoten zurück, der in
    `rootNode` enthalten ist (einschließlich der Wurzel selbst).

Das Folgende zeigt eine praktische Verwendung der Funktion `eachNode()`:
Die Suche nach Text auf einer Webseite.

Wir verwenden eine Wrapper-Funktion namens `grep`, um die Suche auszuführen:

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
