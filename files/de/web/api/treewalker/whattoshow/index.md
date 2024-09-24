---
title: "TreeWalker: whatToShow-Eigenschaft"
short-title: whatToShow
slug: Web/API/TreeWalker/whatToShow
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("DOM") }}

Die **`TreeWalker.whatToShow`** schreibgeschützte Eigenschaft gibt eine Bitmaske zurück, die die Typen von [Knoten](/de/docs/Web/API/Node) angibt, die angezeigt werden sollen. Nicht übereinstimmende Knoten werden übersprungen, aber ihre Kinder können einbezogen werden, wenn es relevant ist. Die möglichen Werte sind:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Konstante</th>
      <th>Zahlenwert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>NodeFilter.SHOW_ALL</code></td>
      <td>
        <code>4294967295</code> (das ist der Maximalwert von <code>unsigned long</code>)
      </td>
      <td>Zeigt alle Knoten an.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_ATTRIBUTE</code> {{deprecated_inline}}
      </td>
      <td><code>2</code></td>
      <td>
        Zeigt Attribut-{{ domxref("Attr") }}-Knoten an. Dies ist nur von Bedeutung,
        wenn ein {{ domxref("TreeWalker") }} mit einem
        {{ domxref("Attr") }}-Knoten als seinem Wurzelknoten erstellt wird; in
        diesem Fall bedeutet es, dass der Attributknoten in der ersten Position der
        Iteration oder des Durchlaufs erscheint. Da Attribute niemals Kinder anderer
        Knoten sind, erscheinen sie nicht, wenn das Dokumentbaum durchlaufen wird.
      </td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_CDATA_SECTION</code> {{deprecated_inline}}
      </td>
      <td><code>8</code></td>
      <td>Zeigt {{ domxref("CDATASection") }}-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_COMMENT</code></td>
      <td><code>128</code></td>
      <td>Zeigt {{ domxref("Comment") }}-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT</code></td>
      <td><code>256</code></td>
      <td>Zeigt {{ domxref("Document") }}-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT_FRAGMENT</code></td>
      <td><code>1024</code></td>
      <td>Zeigt {{ domxref("DocumentFragment") }}-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT_TYPE</code></td>
      <td><code>512</code></td>
      <td>Zeigt {{ domxref("DocumentType") }}-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_ELEMENT</code></td>
      <td><code>1</code></td>
      <td>Zeigt {{ domxref("Element") }}-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_ENTITY</code> {{deprecated_inline}}</td>
      <td><code>32</code></td>
      <td>Veraltet, nicht mehr verwendet.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_ENTITY_REFERENCE</code>
        {{deprecated_inline}}
      </td>
      <td><code>16</code></td>
      <td>Veraltet, nicht mehr verwendet.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_NOTATION</code> {{deprecated_inline}}
      </td>
      <td><code>2048</code></td>
      <td>Veraltet, nicht mehr verwendet.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_PROCESSING_INSTRUCTION</code></td>
      <td><code>64</code></td>
      <td>Zeigt {{ domxref("ProcessingInstruction") }}-Knoten an.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_TEXT</code></td>
      <td><code>4</code></td>
      <td>Zeigt {{ domxref("Text") }}-Knoten an.</td>
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
  // treeWalker wird Kommentare anzeigen
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("TreeWalker")}}-Interface.
