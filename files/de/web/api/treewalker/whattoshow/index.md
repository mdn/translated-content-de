---
title: "TreeWalker: whatToShow-Eigenschaft"
short-title: whatToShow
slug: Web/API/TreeWalker/whatToShow
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.whatToShow`** schreibgeschützte Eigenschaft gibt eine Bitmaske zurück, die die Typen von [Knoten](/de/docs/Web/API/Node) anzeigt, die angezeigt werden sollen. Nicht übereinstimmende Knoten werden übersprungen, aber ihre Kinder können einbezogen werden, wenn zutreffend. Die möglichen Werte sind:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Konstante</th>
      <th>Numerischer Wert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>NodeFilter.SHOW_ALL</code></td>
      <td>
        <code>4294967295</code> (das ist der maximale Wert von <code>unsigned long</code>)
      </td>
      <td>Zeigt alle Knoten an.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_ATTRIBUTE</code> {{deprecated_inline}}
      </td>
      <td><code>2</code></td>
      <td>
        Zeigt Attributknoten [`Attr`](/de/docs/Web/API/Attr) an. Dies ist nur sinnvoll, wenn ein [`TreeWalker`](/de/docs/Web/API/TreeWalker) mit einem [`Attr`](/de/docs/Web/API/Attr)-Knoten als Wurzel erstellt wird; in diesem Fall bedeutet es, dass der Attributknoten an erster Stelle der Iteration oder des Durchlaufs erscheint. Da Attribute nie Kinder anderer Knoten sind, erscheinen sie nicht, wenn über den Dokumentbaum navigiert wird.
      </td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_CDATA_SECTION</code> {{deprecated_inline}}
      </td>
      <td><code>8</code></td>
      <td>Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_COMMENT</code></td>
      <td><code>128</code></td>
      <td>Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT</code></td>
      <td><code>256</code></td>
      <td>Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT_FRAGMENT</code></td>
      <td><code>1024</code></td>
      <td>Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT_TYPE</code></td>
      <td><code>512</code></td>
      <td>Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_ELEMENT</code></td>
      <td><code>1</code></td>
      <td>Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_ENTITY</code> {{deprecated_inline}}</td>
      <td><code>32</code></td>
      <td>Veraltet, wird nicht mehr verwendet.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_ENTITY_REFERENCE</code>
        {{deprecated_inline}}
      </td>
      <td><code>16</code></td>
      <td>Veraltet, wird nicht mehr verwendet.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_NOTATION</code> {{deprecated_inline}}
      </td>
      <td><code>2048</code></td>
      <td>Veraltet, wird nicht mehr verwendet.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_PROCESSING_INSTRUCTION</code></td>
      <td><code>64</code></td>
      <td>Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_TEXT</code></td>
      <td><code>4</code></td>
      <td>Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten an.</td>
    </tr>
  </tbody>
</table>

## Wert

Eine Bitmaske.

## Beispiele

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_COMMENT + NodeFilter.SHOW_TEXT,
  { acceptNode: (node) => NodeFilter.FILTER_ACCEPT },
  false,
);
if (
  treeWalker.whatToShow === NodeFilter.SHOW_ALL ||
  treeWalker.whatToShow % (NodeFilter.SHOW_COMMENT * 2) >=
    NodeFilter.SHOW_COMMENT
) {
  // treeWalker will show comments
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TreeWalker`](/de/docs/Web/API/TreeWalker) Interface.
