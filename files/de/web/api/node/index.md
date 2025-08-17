---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: e60bb248fde7843c458e1134d223ed4398b3878c
---

{{APIRef("DOM")}}

Das {{Glossary("DOM", "DOM")}} **`Node`** Interface ist eine abstrakte Basisklasse, auf der viele andere DOM API Objekte basieren, wodurch diese Objekttypen ähnlich und oft austauschbar verwendet werden können. Als abstrakte Klasse gibt es kein einfaches `Node` Objekt. Alle Objekte, die die `Node` Funktionalität implementieren, basieren auf einer ihrer Unterklassen. Die bemerkenswertesten sind [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment).

Zusätzlich wird jede Art von DOM-Knoten durch ein auf `Node` basierendes Interface repräsentiert. Dazu gehören [`Attr`](/de/docs/Web/API/Attr), [`CharacterData`](/de/docs/Web/API/CharacterData) (auf der [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) und [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) basieren), und [`DocumentType`](/de/docs/Web/API/DocumentType).

In einigen Fällen kann eine bestimmte Eigenschaft des Basis-`Node`-Interfaces nicht auf eines seiner Kind-Interfaces angewendet werden; in diesem Fall kann der vererbende Knoten `null` zurückgeben oder eine Ausnahme auslösen, abhängig von den Umständen. Zum Beispiel wird der Versuch, Kindern zu einem Knotentyp hinzuzufügen, der keine Kinder haben kann, eine Ausnahme auslösen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Neben den untenstehenden Eigenschaften erbt `Node` Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Node.baseURI`](/de/docs/Web/API/Node/baseURI) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Basis-URL des Dokuments, das den `Node` enthält, darstellt.
- [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) {{ReadOnlyInline}}
  - : Gibt ein Live-`NodeList` zurück, das alle Kinder dieses Knotens enthält (einschließlich Elemente, Text und Kommentare). Da [`NodeList`](/de/docs/Web/API/NodeList) live ist, wird das Objekt automatisch aktualisiert, wenn sich die Kinder des `Node` ändern.
- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den ersten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten keine Kinder hat.
- [`Node.isConnected`](/de/docs/Web/API/Node/isConnected) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob der `Node` (direkt oder indirekt) mit dem Kontextobjekt verbunden ist, z.B. dem [`Document`](/de/docs/Web/API/Document) Objekt im Fall des normalen DOMs oder der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) im Fall eines Shadow DOM.
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den letzten direkten Kindknoten des Knotens darstellt, oder `null`, wenn der Knoten keine Kinder hat.
- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den nächsten Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.nodeName`](/de/docs/Web/API/Node/nodeName) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des `Node` enthält. Die Struktur des Namens variiert je nach Knotentyp. Z.B. Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) enthält den Namen des entsprechenden Tags, wie `'AUDIO'` für ein [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement), ein [`Text`](/de/docs/Web/API/Text) Knoten hat den String `'#text'`, oder ein [`Document`](/de/docs/Web/API/Document) Knoten hat den String `'#document'`.
- [`Node.nodeType`](/de/docs/Web/API/Node/nodeType) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` zurück, der den Typ des Knotens repräsentiert. Mögliche Werte sind:

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
  - : Gibt den Wert des aktuellen Knotens zurück bzw. setzt ihn.
- [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) {{ReadOnlyInline}}
  - : Gibt das [`Document`](/de/docs/Web/API/Document) zurück, zu dem dieser Knoten gehört. Wenn der Knoten selbst ein Dokument ist, wird `null` zurückgegeben.
- [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der das Elternelement dieses Knotens ist. Wenn es keinen solchen Knoten gibt — zum Beispiel, wenn dieser Knoten der oberste des Baums ist oder wenn er nicht an einem Baum teilnimmt — gibt diese Eigenschaft `null` zurück.
- [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) {{ReadOnlyInline}}
  - : Gibt ein [`Element`](/de/docs/Web/API/Element) zurück, das das Elternelement dieses Knotens ist. Wenn der Knoten kein Elternteil hat oder dieses Elternteil kein [`Element`](/de/docs/Web/API/Element) ist, gibt diese Eigenschaft `null` zurück.
- [`Node.previousSibling`](/de/docs/Web/API/Node/previousSibling) {{ReadOnlyInline}}
  - : Gibt einen `Node` zurück, der den vorherigen Knoten im Baum darstellt, oder `null`, wenn es keinen solchen Knoten gibt.
- [`Node.textContent`](/de/docs/Web/API/Node/textContent)
  - : Gibt den Textinhalt eines Elements und aller seiner Nachkommen zurück bzw. setzt ihn.

## Instanzmethoden

_Neben den untenstehenden Methoden erbt `Node` Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
  - : Fügt das angegebene `childNode` Argument als letztes Kind zum aktuellen Knoten hinzu. Wenn das Argument auf einen vorhandenen Knoten im DOM-Baum verweist, wird der Knoten von seiner aktuellen Position losgelöst und an der neuen Position angebracht.
- [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)
  - : Klont einen `Node` und optional dessen gesamten Inhalt. Standardmäßig wird der Inhalt des Knotens geklont.
- [`Node.compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition)
  - : Vergleicht die Position des aktuellen Knotens mit einem anderen Knoten in einem anderen Dokument.
- [`Node.contains()`](/de/docs/Web/API/Node/contains)
  - : Gibt `true` oder `false` zurück, je nachdem, ob ein Knoten ein Nachkomme des aufrufenden Knotens ist oder nicht.
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode)
  - : Gibt das Wurzelobjekt des Kontextobjekts zurück, das optional die Shadow-Wurzel enthält, wenn diese verfügbar ist.
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob das Element irgendwelche Kinderknoten hat.
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
  - : Fügt einen `Node` vor dem Referenzknoten als Kind eines angegebenen Elternknotens ein.
- [`Node.isDefaultNamespace()`](/de/docs/Web/API/Node/isDefaultNamespace)
  - : Akzeptiert eine Namespace-URI als Argument und gibt einen Boolean-Wert zurück, der den Wert `true` hat, wenn das Namespace der Standard-Namespace für den angegebenen Knoten ist, andernfalls `false`.
- [`Node.isEqualNode()`](/de/docs/Web/API/Node/isEqualNode)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob zwei Knoten vom gleichen Typ sind und alle ihre bestimmenden Datenpunkte übereinstimmen.
- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob die zwei Knoten gleich sind (d.h. sie beziehen sich auf dasselbe Objekt).
- [`Node.lookupPrefix()`](/de/docs/Web/API/Node/lookupPrefix)
  - : Gibt einen String zurück, der das Präfix für eine gegebene Namespace-URI enthält, falls vorhanden, andernfalls `null`. Wenn mehrere Präfixe möglich sind, ist das Ergebnis implementationsabhängig.
- [`Node.lookupNamespaceURI()`](/de/docs/Web/API/Node/lookupNamespaceURI)
  - : Nimmt ein Präfix an und gibt die Namespace-URI zurück, die damit auf dem angegebenen Knoten verbunden ist, falls gefunden (und `null`, wenn nicht). Wenn `null` für das Präfix angegeben wird, wird der Standard-Namespace zurückgegeben.
- [`Node.normalize()`](/de/docs/Web/API/Node/normalize)
  - : Bereinigt alle Textknoten unter diesem Element (vereinigt angrenzende, entfernt leere).
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
  - : Entfernt einen Kindknoten vom aktuellen Element, das ein Kind des aktuellen Knotens sein muss.
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
  - : Ersetzt einen Kinder-`Node` des aktuellen durch den zweiten im Parameter angegebenen.

## Events

- [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
  - : Wird ausgelöst, wenn der Benutzer eine neue Auswahl in diesem Knoten startet.

## Beispiele

### Entfernen aller in einem Knoten verschachtelten Kinder

Diese Funktion entfernt jedes erste Kind eines Elements, bis keines mehr übrig ist.

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

Die Verwendung dieser Funktion erfolgt in einem einzigen Aufruf. Hier leeren wir den Körper des Dokuments:

```js
removeAllChildren(document.body);
```

Eine Alternative könnte sein, `textContent` auf den leeren String zu setzen: `document.body.textContent = ""`.

### Durch alle Kindknoten rekursiv durchlaufen

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

Die Funktion ruft rekursiv eine Funktion für jeden Nachkommenknoten von `rootNode` (einschließlich des Wurzelknotens selbst) auf.

Wenn `callback` weggelassen wird, gibt die Funktion stattdessen ein
{{jsxref("Array")}} zurück, das `rootNode` und alle darin enthaltenen
Knoten enthält.

Wenn `callback` angegeben wird und beim Aufrufen `false` zurückgibt, wird die aktuelle Rekursionsebene abgebrochen, und die Funktion setzt die Ausführung auf der letzten Elternebene fort. Dies kann verwendet werden, um Schleifen abzubrechen, sobald ein Knoten gefunden wurde (wie zum Beispiel die Suche nach einem Textknoten, der eine bestimmte Zeichenfolge enthält).

Die Funktion hat zwei Parameter:

- `rootNode`
  - : Das `Node`-Objekt, dessen Nachkommen rekursiv durchlaufen werden sollen.
- `callback` {{optional_inline}}
  - : Eine optionale Callback-[Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), die einen `Node` als ihr einziges Argument erhält. Wenn sie weggelassen wird, gibt `eachNode`
    ein {{jsxref("Array")}} von jedem im `rootNode` enthaltenen Knoten (einschließlich des Wurzelknotens selbst) zurück.

Das folgende Beispiel zeigt eine praktische Anwendung der `eachNode()`-Funktion:
Suche nach Text auf einer Webseite.

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
