---
title: "Range: cloneContents()-Methode"
short-title: cloneContents()
slug: Web/API/Range/cloneContents
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ APIRef("DOM") }}

Die **`Range.cloneContents()`** Methode gibt ein {{domxref("DocumentFragment")}} zurück, das die {{ domxref("Node") }}-Objekte kopiert, die im {{ domxref("Range") }} enthalten sind.

Event-Listener, die mit {{domxref("EventTarget.addEventListener()", "addEventListener()")}} hinzugefügt wurden, werden beim Klonen nicht kopiert. HTML-Attribut-Ereignisse werden auf die gleiche Weise dupliziert wie bei der {{ domxref("Node.cloneNode()") }}-Methode. HTML-`id`-Attribute werden ebenfalls geklont, was durch Klonen zu einem ungültigen Dokument führen kann.

Teilweise ausgewählte Knoten umfassen die übergeordneten Tags, die notwendig sind, um das Dokumentfragment gültig zu machen.

## Syntax

```js-nolint
cloneContents()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("DocumentFragment") }}-Objekt.

## Beispiele

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
documentFragment = range.cloneContents();
document.body.appendChild(documentFragment);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
